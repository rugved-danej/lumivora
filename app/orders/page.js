// app/orders/page.js - UPDATED VERSION
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Orders() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    } else if (user) {
      fetchOrders();
    }
  }, [user, authLoading, router]);

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders');
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || []);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'pending': '#f57c00',
      'processing': '#1976d2',
      'shipped': '#7b1fa2',
      'delivered': '#388e3c',
      'cancelled': '#d32f2f'
    };
    return colors[status] || '#757575';
  };

  const getStatusBg = (status) => {
    const colors = {
      'pending': '#fff3e0',
      'processing': '#e3f2fd',
      'shipped': '#f3e5f5',
      'delivered': '#e8f5e9',
      'cancelled': '#ffebee'
    };
    return colors[status] || '#f5f5f5';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (authLoading || loading) {
    return (
      <>
        <Header />
        <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="loading-spinner">
            <div className="spinner-circle"></div>
            <p className="loading-text">Loading orders...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!user) return null;

  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{padding: '80px 0', minHeight: 'auto'}}>
          <div className="container">
            <div className="hero-content">
              <h1>Your Orders</h1>
              <p>Track and manage your orders</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {orders.length === 0 ? (
              <div className="empty-products">
                <i className="lni lni-package"></i>
                <h3>No Orders Yet</h3>
                <p>You haven't placed any orders yet.</p>
                <a href="/shop" className="btn btn-primary-large" style={{ marginTop: '20px' }}>
                  <i className="lni lni-shopping-basket"></i>
                  Start Shopping
                </a>
              </div>
            ) : (
              <>
                <div style={{ 
                  marginBottom: '30px',
                  fontSize: '16px',
                  color: 'var(--soft-taupe)'
                }}>
                  {orders.length} {orders.length === 1 ? 'order' : 'orders'} found
                </div>

                <div style={{
                  display: 'grid',
                  gap: '20px'
                }}>
                  {orders.map(order => (
                    <div key={order._id} style={{
                      backgroundColor: 'var(--pearl-white)',
                      padding: '25px',
                      borderRadius: '20px',
                      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)'
                    }}>
                      {/* Order Header */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        marginBottom: '20px',
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
                          <div style={{
                            fontSize: '13px',
                            color: 'var(--soft-taupe)',
                            marginTop: '5px'
                          }}>
                            Placed on {formatDate(order.createdAt)}
                          </div>
                        </div>
                        
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          alignItems: 'flex-end'
                        }}>
                          <span style={{
                            padding: '8px 16px',
                            backgroundColor: getStatusBg(order.status),
                            color: getStatusColor(order.status),
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '600',
                            textTransform: 'capitalize'
                          }}>
                            {order.status}
                          </span>
                          <span style={{
                            padding: '6px 12px',
                            backgroundColor: order.paymentMethod === 'cod' ? '#fff3e0' : '#e8f5e9',
                            color: order.paymentMethod === 'cod' ? '#f57c00' : '#2e7d32',
                            borderRadius: '15px',
                            fontSize: '12px',
                            fontWeight: '600'
                          }}>
                            {order.paymentMethod === 'cod' ? 'COD' : 'Paid Online'}
                          </span>
                        </div>
                      </div>

                      {/* Order Items */}
                      <div style={{ marginBottom: '20px' }}>
                        {order.items.map((item, index) => (
                          <div key={index} style={{
                            display: 'flex',
                            gap: '15px',
                            padding: '15px',
                            backgroundColor: 'var(--warm-cream)',
                            borderRadius: '12px',
                            marginBottom: index < order.items.length - 1 ? '10px' : '0'
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

                      {/* Delivery Info */}
                      {order.estimatedDelivery && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '15px',
                          backgroundColor: 'var(--light-beige)',
                          borderRadius: '12px',
                          marginBottom: '15px'
                        }}>
                          <i className="lni lni-delivery" style={{
                            fontSize: '24px',
                            color: 'var(--soft-gold)'
                          }}></i>
                          <div style={{ flex: 1 }}>
                            <div style={{
                              fontWeight: '600',
                              fontSize: '14px',
                              marginBottom: '3px'
                            }}>
                              Expected Delivery
                            </div>
                            <div style={{
                              fontSize: '13px',
                              color: 'var(--soft-taupe)'
                            }}>
                              {formatDate(order.estimatedDelivery.min)} - {formatDate(order.estimatedDelivery.max)}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Order Footer */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '15px',
                        borderTop: '2px solid var(--light-beige)',
                        flexWrap: 'wrap',
                        gap: '15px'
                      }}>
                        <div>
                          <div style={{
                            fontSize: '13px',
                            color: 'var(--soft-taupe)',
                            marginBottom: '5px'
                          }}>
                            Total Amount
                          </div>
                          <div style={{
                            fontSize: '22px',
                            fontWeight: '700',
                            color: 'var(--soft-gold)'
                          }}>
                            ₹{order.total}
                          </div>
                        </div>
                        
                        <a 
                          href={`/order-success?orderId=${order._id}`}
                          className="btn btn-outline"
                          style={{
                            padding: '10px 20px',
                            fontSize: '14px'
                          }}
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}