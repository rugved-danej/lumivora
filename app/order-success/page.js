// app/order-success/page.js
'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OrderSuccess() {
  const searchParams = useSearchParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const orderId = searchParams.get('orderId');
    if (orderId) {
      fetchOrder(orderId);
    }
  }, [searchParams]);

  const fetchOrder = async (orderId) => {
    try {
      const res = await fetch(`/api/orders/${orderId}`);
      if (res.ok) {
        const data = await res.json();
        setOrder(data.order);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <>
        <Header />
        <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="loading-spinner">
            <div className="spinner-circle"></div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <section className="section">
          <div className="container">
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              {/* Success Icon */}
              <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#e8f5e9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px'
              }}>
                <i className="lni lni-checkmark" style={{
                  fontSize: '50px',
                  color: '#4caf50'
                }}></i>
              </div>

              <h1 style={{
                fontSize: 'clamp(28px, 5vw, 36px)',
                marginBottom: '15px',
                color: 'var(--charcoal-text)'
              }}>
                Order Placed Successfully!
              </h1>

              <p style={{
                fontSize: '16px',
                color: 'var(--soft-taupe)',
                marginBottom: '30px'
              }}>
                Thank you for your order. We've received your order and will process it soon.
              </p>

              {order && (
                <>
                  {/* Order Details Card */}
                  <div style={{
                    backgroundColor: 'var(--pearl-white)',
                    padding: '30px',
                    borderRadius: '20px',
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
                    marginBottom: '30px',
                    textAlign: 'left'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '25px',
                      paddingBottom: '20px',
                      borderBottom: '2px solid var(--light-beige)',
                      flexWrap: 'wrap',
                      gap: '15px'
                    }}>
                      <div>
                        <div style={{
                          fontSize: '13px',
                          color: 'var(--soft-taupe)',
                          marginBottom: '5px'
                        }}>
                          Order ID
                        </div>
                        <div style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          color: 'var(--charcoal-text)'
                        }}>
                          #{order._id.slice(-8).toUpperCase()}
                        </div>
                      </div>
                      <div>
                        <span style={{
                          padding: '8px 16px',
                          backgroundColor: order.paymentMethod === 'cod' ? '#fff3e0' : '#e8f5e9',
                          color: order.paymentMethod === 'cod' ? '#f57c00' : '#2e7d32',
                          borderRadius: '20px',
                          fontSize: '13px',
                          fontWeight: '600'
                        }}>
                          {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Paid Online'}
                        </span>
                      </div>
                    </div>

                    {/* Delivery Estimate */}
                    <div style={{
                      backgroundColor: 'var(--light-beige)',
                      padding: '20px',
                      borderRadius: '12px',
                      marginBottom: '25px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}>
                        <i className="lni lni-delivery" style={{
                          fontSize: '32px',
                          color: 'var(--soft-gold)'
                        }}></i>
                        <div>
                          <div style={{
                            fontWeight: '600',
                            fontSize: '16px',
                            marginBottom: '5px'
                          }}>
                            Expected Delivery
                          </div>
                          <div style={{
                            fontSize: '15px',
                            color: 'var(--soft-taupe)'
                          }}>
                            {formatDate(order.estimatedDelivery.min)} - {formatDate(order.estimatedDelivery.max)}
                          </div>
                          <div style={{
                            fontSize: '13px',
                            color: 'var(--soft-gold)',
                            marginTop: '5px',
                            fontWeight: '600'
                          }}>
                            {order.estimatedDelivery.text}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div style={{ marginBottom: '25px' }}>
                      <h3 style={{
                        fontSize: '16px',
                        marginBottom: '15px',
                        color: 'var(--charcoal-text)'
                      }}>
                        Order Items
                      </h3>
                      {order.items.map((item, index) => (
                        <div key={index} style={{
                          display: 'flex',
                          gap: '15px',
                          padding: '15px',
                          backgroundColor: 'var(--warm-cream)',
                          borderRadius: '12px',
                          marginBottom: '10px'
                        }}>
                          <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: 'var(--light-beige)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <i className="lni lni-package" style={{
                              fontSize: '24px',
                              color: 'var(--soft-gold)'
                            }}></i>
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{
                              fontWeight: '600',
                              marginBottom: '5px'
                            }}>
                              {item.productName}
                            </div>
                            <div style={{
                              fontSize: '14px',
                              color: 'var(--soft-taupe)'
                            }}>
                              Quantity: {item.quantity}
                            </div>
                          </div>
                          <div style={{
                            fontWeight: '700',
                            color: 'var(--soft-gold)',
                            fontSize: '16px'
                          }}>
                            ₹{item.price}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Shipping Address */}
                    <div>
                      <h3 style={{
                        fontSize: '16px',
                        marginBottom: '15px',
                        color: 'var(--charcoal-text)'
                      }}>
                        Shipping Address
                      </h3>
                      <div style={{
                        padding: '15px',
                        backgroundColor: 'var(--warm-cream)',
                        borderRadius: '12px',
                        fontSize: '14px',
                        lineHeight: '1.6'
                      }}>
                        <div style={{ fontWeight: '600', marginBottom: '5px' }}>
                          {order.shippingAddress.fullName}
                        </div>
                        <div style={{ color: 'var(--soft-taupe)' }}>
                          {order.shippingAddress.phone}
                        </div>
                        <div style={{ color: 'var(--soft-taupe)', marginTop: '8px' }}>
                          {order.shippingAddress.address}<br />
                          {order.shippingAddress.city}, {order.shippingAddress.state}<br />
                          {order.shippingAddress.pincode}
                        </div>
                      </div>
                    </div>

                    {/* Total */}
                    <div style={{
                      marginTop: '25px',
                      paddingTop: '20px',
                      borderTop: '2px solid var(--light-beige)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '18px', fontWeight: '600' }}>
                        Total Amount
                      </span>
                      <span style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: 'var(--soft-gold)'
                      }}>
                        ₹{order.total}
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a href="/orders" className="btn btn-primary-large">
                  <i className="lni lni-package"></i>
                  View All Orders
                </a>
                <a href="/shop" className="btn btn-outline-large">
                  <i className="lni lni-shopping-basket"></i>
                  Continue Shopping
                </a>
              </div>

              {/* Support Message */}
              <div style={{
                marginTop: '40px',
                padding: '20px',
                backgroundColor: 'var(--light-beige)',
                borderRadius: '12px',
                fontSize: '14px',
                color: 'var(--soft-taupe)'
              }}>
                <i className="lni lni-help" style={{
                  fontSize: '20px',
                  marginBottom: '10px',
                  display: 'block',
                  color: 'var(--soft-gold)'
                }}></i>
                Need help with your order? Contact us through our{' '}
                <a href="/contact" style={{
                  color: 'var(--soft-gold)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  social media channels
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}