// app/checkout/page.js
'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Checkout() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading: authLoading } = useAuth();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    const productId = searchParams.get('productId');
    if (productId) {
      fetchProduct(productId);
    } else {
      router.push('/shop');
    }
  }, [searchParams]);

  const fetchProduct = async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data.product);
      } else {
        router.push('/shop');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      router.push('/shop');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const required = ['fullName', 'phone', 'address', 'city', 'state', 'pincode'];
    for (let field of required) {
      if (!shippingAddress[field].trim()) {
        alert(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
    }
    
    if (!/^\d{10}$/.test(shippingAddress.phone)) {
      alert('Please enter a valid 10-digit phone number');
      return false;
    }
    
    if (!/^\d{6}$/.test(shippingAddress.pincode)) {
      alert('Please enter a valid 6-digit pincode');
      return false;
    }
    
    return true;
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSubmitting(true);

    try {
      if (paymentMethod === 'online') {
        // Razorpay integration
        await handleRazorpayPayment();
      } else {
        // Cash on Delivery
        await createOrder('cod', 'pending');
      }
    } catch (error) {
      console.error('Order error:', error);
      alert('Failed to place order. Please try again.');
      setSubmitting(false);
    }
  };

  const handleRazorpayPayment = async () => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Add your Razorpay key
        amount: product.price * 100, // Amount in paise
        currency: 'INR',
        name: 'Lumivora',
        description: product.name,
        image: '/logo.png', // Add your logo
        handler: async function (response) {
          // Payment successful
          await createOrder('online', 'paid', response.razorpay_payment_id);
        },
        prefill: {
          name: shippingAddress.fullName,
          contact: shippingAddress.phone
        },
        theme: {
          color: '#D4B57A'
        },
        modal: {
          ondismiss: function() {
            setSubmitting(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };
  };

  const createOrder = async (paymentType, paymentStatus, paymentId = null) => {
    try {
      const orderData = {
        items: [{
          productId: product._id,
          productName: product.name,
          quantity: 1,
          price: product.price
        }],
        total: product.price,
        shippingAddress,
        paymentMethod: paymentType,
        paymentStatus,
        paymentId,
        estimatedDelivery: getEstimatedDelivery()
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      const data = await res.json();

      if (res.ok) {
        router.push(`/order-success?orderId=${data.orderId}`);
      } else {
        throw new Error(data.error || 'Failed to create order');
      }
    } catch (error) {
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  const getEstimatedDelivery = () => {
    const today = new Date();
    const minDays = 5;
    const maxDays = 7;
    
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + minDays);
    
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + maxDays);
    
    return {
      min: minDate.toISOString(),
      max: maxDate.toISOString(),
      text: `${minDays}-${maxDays} business days`
    };
  };

  if (authLoading || loading) {
    return (
      <>
        <Header />
        <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="loading-spinner">
            <div className="spinner-circle"></div>
            <p className="loading-text">Loading checkout...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!user || !product) return null;

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <section className="section">
          <div className="container">
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 36px)', marginBottom: '30px' }}>
              Checkout
            </h1>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {/* Shipping Form */}
              <div>
                <div style={{
                  backgroundColor: 'var(--pearl-white)',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)'
                }}>
                  <h2 style={{ fontSize: '22px', marginBottom: '25px' }}>
                    Shipping Address
                  </h2>

                  <form onSubmit={handlePlaceOrder}>
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={shippingAddress.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={shippingAddress.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="10-digit mobile number"
                        maxLength="10"
                      />
                    </div>

                    <div className="form-group">
                      <label>Address *</label>
                      <textarea
                        name="address"
                        value={shippingAddress.address}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        placeholder="House No., Building Name, Street"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      <div className="form-group">
                        <label>City *</label>
                        <input
                          type="text"
                          name="city"
                          value={shippingAddress.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>State *</label>
                        <input
                          type="text"
                          name="state"
                          value={shippingAddress.state}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Pincode *</label>
                      <input
                        type="text"
                        name="pincode"
                        value={shippingAddress.pincode}
                        onChange={handleInputChange}
                        required
                        placeholder="6-digit pincode"
                        maxLength="6"
                      />
                    </div>

                    {/* Payment Method */}
                    <div style={{ marginTop: '30px' }}>
                      <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>
                        Payment Method
                      </h3>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '15px',
                          backgroundColor: paymentMethod === 'cod' ? 'var(--light-beige)' : 'var(--warm-cream)',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          border: `2px solid ${paymentMethod === 'cod' ? 'var(--soft-gold)' : 'transparent'}`,
                          transition: 'all 0.3s'
                        }}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={paymentMethod === 'cod'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            style={{ width: '20px', height: '20px' }}
                          />
                          <div>
                            <div style={{ fontWeight: '600', marginBottom: '3px' }}>
                              Cash on Delivery
                            </div>
                            <div style={{ fontSize: '13px', color: 'var(--soft-taupe)' }}>
                              Pay when you receive the product
                            </div>
                          </div>
                        </label>

                        <label style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '15px',
                          backgroundColor: paymentMethod === 'online' ? 'var(--light-beige)' : 'var(--warm-cream)',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          border: `2px solid ${paymentMethod === 'online' ? 'var(--soft-gold)' : 'transparent'}`,
                          transition: 'all 0.3s'
                        }}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="online"
                            checked={paymentMethod === 'online'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            style={{ width: '20px', height: '20px' }}
                          />
                          <div>
                            <div style={{ fontWeight: '600', marginBottom: '3px' }}>
                              Pay Online (Razorpay)
                            </div>
                            <div style={{ fontSize: '13px', color: 'var(--soft-taupe)' }}>
                              UPI, Cards, Netbanking
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary-large"
                      disabled={submitting}
                      style={{ width: '100%', marginTop: '30px' }}
                    >
                      {submitting ? 'Processing...' : paymentMethod === 'cod' ? 'Place Order' : 'Proceed to Pay'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div style={{
                  backgroundColor: 'var(--pearl-white)',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
                  position: 'sticky',
                  top: '100px'
                }}>
                  <h2 style={{ fontSize: '22px', marginBottom: '25px' }}>
                    Order Summary
                  </h2>

                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    paddingBottom: '20px',
                    borderBottom: '2px solid var(--light-beige)',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: 'var(--warm-cream)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {product.imageUrl ? (
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                        />
                      ) : (
                        <i className="lni lni-package" style={{ fontSize: '40px', color: 'var(--soft-gold)' }}></i>
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>
                        {product.name}
                      </h3>
                      <div style={{ 
                        fontSize: '20px', 
                        fontWeight: '700', 
                        color: 'var(--soft-gold)' 
                      }}>
                        ₹{product.price}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      fontSize: '15px'
                    }}>
                      <span style={{ color: 'var(--soft-taupe)' }}>Subtotal</span>
                      <span style={{ fontWeight: '600' }}>₹{product.price}</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      fontSize: '15px'
                    }}>
                      <span style={{ color: 'var(--soft-taupe)' }}>Shipping</span>
                      <span style={{ fontWeight: '600', color: 'var(--soft-gold)' }}>FREE</span>
                    </div>
                    <div style={{
                      paddingTop: '20px',
                      borderTop: '2px solid var(--light-beige)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '18px',
                      fontWeight: '700'
                    }}>
                      <span>Total</span>
                      <span style={{ color: 'var(--soft-gold)' }}>₹{product.price}</span>
                    </div>
                  </div>

                  {/* Delivery Estimate */}
                  <div style={{
                    backgroundColor: 'var(--light-beige)',
                    padding: '20px',
                    borderRadius: '12px',
                    marginTop: '20px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '10px'
                    }}>
                      <i className="lni lni-delivery" style={{ 
                        fontSize: '28px', 
                        color: 'var(--soft-gold)' 
                      }}></i>
                      <div>
                        <div style={{ fontWeight: '600', fontSize: '15px' }}>
                          Estimated Delivery
                        </div>
                        <div style={{ fontSize: '14px', color: 'var(--soft-taupe)' }}>
                          {getEstimatedDelivery().text}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#e8f5e9',
                    borderRadius: '12px'
                  }}>
                    <i className="lni lni-lock" style={{ fontSize: '20px', color: '#4caf50' }}></i>
                    <span style={{ fontSize: '13px', color: '#2e7d32' }}>
                      Secure checkout - Your information is protected
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}