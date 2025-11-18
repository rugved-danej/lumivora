// app/admin/dashboard/page.js
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AdminDashboard() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalTestimonials: 0
  });
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'product', 'testimonial'
  const [editingItem, setEditingItem] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  // Check if user is admin
  useEffect(() => {
    if (!loading) {
      if (!user || user.email !== 'itsrugveddanej@gmail.com') {
        router.push('/');
      } else {
        fetchAllData();
      }
    }
  }, [user, loading, router]);

  const fetchAllData = async () => {
    setLoadingData(true);
    try {
      // Fetch products
      const productsRes = await fetch('/api/admin/products');
      if (productsRes.ok) {
        const productsData = await productsRes.json();
        setProducts(productsData.products || []);
      }

      // Fetch orders
      const ordersRes = await fetch('/api/admin/orders');
      if (ordersRes.ok) {
        const ordersData = await ordersRes.json();
        setOrders(ordersData.orders || []);
      }

      // Fetch users
      const usersRes = await fetch('/api/admin/users');
      if (usersRes.ok) {
        const usersData = await usersRes.json();
        setUsers(usersData.users || []);
      }

      // Fetch testimonials
      const testimonialsRes = await fetch('/api/admin/testimonials');
      if (testimonialsRes.ok) {
        const testimonialsData = await testimonialsRes.json();
        setTestimonials(testimonialsData.testimonials || []);
      }

      // Update stats
      setStats({
        totalProducts: products.length,
        totalOrders: orders.length,
        totalUsers: users.length,
        totalTestimonials: testimonials.length
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
    setEditingItem(null);
  };

  const handleDelete = async (type, id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      const res = await fetch(`/api/admin/${type}/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        alert('Item deleted successfully!');
        fetchAllData();
      } else {
        alert('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Error deleting item');
    }
  };

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      if (res.ok) {
        alert('Order status updated!');
        fetchAllData();
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  if (loading || loadingData || !user) {
    return (
      <>
        <Header />
        <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="loading-spinner">
            <div className="spinner-circle"></div>
            <p className="loading-text">Loading Admin Panel...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="admin-dashboard">
        {/* Admin Header */}
        <div className="admin-header">
          <div className="container">
            <div className="admin-header-content">
              <h1>Admin Dashboard</h1>
              <div className="admin-actions">
                <button onClick={() => openModal('product')} className="btn">
                  <i className="lni lni-plus"></i> Add Product
                </button>
                <button onClick={() => openModal('testimonial')} className="btn">
                  <i className="lni lni-plus"></i> Add Testimonial
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <section className="admin-main">
          <div className="container">
            <div className="admin-stats">
              <div className="stat-card">
                <i className="lni lni-package"></i>
                <div>
                  <h3>{products.length}</h3>
                  <p>Products</p>
                </div>
              </div>
              <div className="stat-card">
                <i className="lni lni-shopping-basket"></i>
                <div>
                  <h3>{orders.length}</h3>
                  <p>Orders</p>
                </div>
              </div>
              <div className="stat-card">
                <i className="lni lni-users"></i>
                <div>
                  <h3>{users.length}</h3>
                  <p>Users</p>
                </div>
              </div>
              <div className="stat-card">
                <i className="lni lni-comments"></i>
                <div>
                  <h3>{testimonials.length}</h3>
                  <p>Testimonials</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="admin-tabs" style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '30px',
              borderBottom: '2px solid var(--light-beige)',
              flexWrap: 'wrap'
            }}>
              {['products', 'orders', 'users', 'testimonials'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '15px 25px',
                    background: activeTab === tab ? 'var(--soft-gold)' : 'transparent',
                    color: activeTab === tab ? 'white' : 'var(--charcoal-text)',
                    border: 'none',
                    borderBottom: activeTab === tab ? '3px solid var(--soft-gold)' : 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                    textTransform: 'capitalize',
                    transition: 'all 0.3s'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="admin-products">
                <h2>Manage Products</h2>
                <div className="products-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(product => (
                        <tr key={product._id}>
                          <td>{product.name}</td>
                          <td><span className="category-badge">{product.category}</span></td>
                          <td>₹{product.price}</td>
                          <td>{product.stock}</td>
                          <td>
                            <div className="action-buttons">
                              <button 
                                onClick={() => openModal('product', product)}
                                className="edit-btn"
                              >
                                <i className="lni lni-pencil"></i>
                              </button>
                              <button 
                                onClick={() => handleDelete('products', product._id)}
                                className="delete-btn"
                              >
                                <i className="lni lni-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {products.length === 0 && (
                    <div style={{textAlign: 'center', padding: '40px', color: 'var(--soft-taupe)'}}>
                      No products found. Click "Add Product" to create one.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="admin-products">
                <h2>Manage Orders</h2>
                <div className="products-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Products</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map(order => (
                        <tr key={order._id}>
                          <td>#{order._id.slice(-8)}</td>
                          <td>{order.userName}</td>
                          <td>{order.items?.length || 0} items</td>
                          <td>₹{order.total}</td>
                          <td>
                            <select 
                              value={order.status}
                              onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                              className="filter-select"
                            >
                              <option value="pending">Pending</option>
                              <option value="processing">Processing</option>
                              <option value="shipped">Shipped</option>
                              <option value="delivered">Delivered</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                          <td>
                            <button 
                              onClick={() => alert('View order details: ' + order._id)}
                              className="edit-btn"
                            >
                              <i className="lni lni-eye"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {orders.length === 0 && (
                    <div style={{textAlign: 'center', padding: '40px', color: 'var(--soft-taupe)'}}>
                      No orders yet.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div className="admin-products">
                <h2>Manage Users</h2>
                <div className="products-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined</th>
                        <th>Orders</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user._id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                          <td>{user.orders?.length || 0}</td>
                          <td>
                            <button 
                              onClick={() => alert('View user details: ' + user._id)}
                              className="edit-btn"
                            >
                              <i className="lni lni-eye"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Testimonials Tab */}
            {activeTab === 'testimonials' && (
              <div className="admin-products">
                <h2>Manage Testimonials</h2>
                <div style={{display: 'grid', gap: '20px'}}>
                  {testimonials.map(testimonial => (
                    <div key={testimonial._id} style={{
                      backgroundColor: 'var(--pearl-white)',
                      padding: '20px',
                      borderRadius: '12px',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                    }}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                        <div>
                          <h3>{testimonial.name}</h3>
                          <div style={{display: 'flex', gap: '5px', margin: '10px 0'}}>
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <i key={i} className="lni lni-star-filled" style={{color: '#ffc107'}}></i>
                            ))}
                          </div>
                          <p style={{color: 'var(--soft-taupe)'}}>{testimonial.text}</p>
                        </div>
                        <div className="action-buttons">
                          <button 
                            onClick={() => openModal('testimonial', testimonial)}
                            className="edit-btn"
                          >
                            <i className="lni lni-pencil"></i>
                          </button>
                          <button 
                            onClick={() => handleDelete('testimonials', testimonial._id)}
                            className="delete-btn"
                          >
                            <i className="lni lni-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {testimonials.length === 0 && (
                    <div style={{textAlign: 'center', padding: '40px', color: 'var(--soft-taupe)'}}>
                      No testimonials yet. Click "Add Testimonial" to create one.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <Modal 
          type={modalType}
          item={editingItem}
          onClose={closeModal}
          onSuccess={() => {
            closeModal();
            fetchAllData();
          }}
        />
      )}
      
      <Footer />
    </>
  );
}

// Modal Component
function Modal({ type, item, onClose, onSuccess }) {
  const [formData, setFormData] = useState(
    type === 'product' ? {
      name: item?.name || '',
      description: item?.description || '',
      price: item?.price || '',
      category: item?.category || 'beauty-tools',
      stock: item?.stock || 0,
      imageUrl: item?.imageUrl || ''
    } : {
      name: item?.name || '',
      text: item?.text || '',
      rating: item?.rating || 5
    }
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = item 
        ? `/api/admin/${type}s/${item._id}` 
        : `/api/admin/${type}s`;
      
      const res = await fetch(endpoint, {
        method: item ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert(`${type} ${item ? 'updated' : 'created'} successfully!`);
        onSuccess();
      } else {
        alert(`Failed to ${item ? 'update' : 'create'} ${type}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{item ? 'Edit' : 'Add'} {type === 'product' ? 'Product' : 'Testimonial'}</h2>
          <button onClick={onClose} className="close-btn">
            <i className="lni lni-close"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {type === 'product' ? (
            <>
              <div className="form-group">
                <label>Product Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description *</label>
                <textarea
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  required
                  rows="4"
                />
              </div>
              <div className="form-group">
                <label>Price (₹) *</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: e.target.value})}
                  required
                  min="0"
                />
              </div>
              <div className="form-group">
                <label>Category *</label>
                <select
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value})}
                  required
                >
                  <option value="beauty-tools">Beauty Tools</option>
                  <option value="skincare-accessories">Skincare Accessories</option>
                  <option value="home-gadgets">Home Gadgets</option>
                </select>
              </div>
              <div className="form-group">
                <label>Stock *</label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={e => setFormData({...formData, stock: e.target.value})}
                  required
                  min="0"
                />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label>Customer Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Testimonial *</label>
                <textarea
                  value={formData.text}
                  onChange={e => setFormData({...formData, text: e.target.value})}
                  required
                  rows="4"
                />
              </div>
              <div className="form-group">
                <label>Rating *</label>
                <select
                  value={formData.rating}
                  onChange={e => setFormData({...formData, rating: parseInt(e.target.value)})}
                  required
                >
                  {[5, 4, 3, 2, 1].map(n => (
                    <option key={n} value={n}>{n} Stars</option>
                  ))}
                </select>
              </div>
            </>
          )}

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn btn-outline">
              Cancel
            </button>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Saving...' : item ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}