# Lumivora Project Documentation

*Generated on: 11/18/2025, 4:55:39 PM*

## Project Overview

Lumivora is a premium e-commerce website built with Next.js, featuring beauty tools and home gadgets.

## 📁 Project Structure

Total files documented: 95

📦 Project Structure
```
.
└── .vercel
    ├── project.json
└── app
    ├── about
    │   ├── page.js
    ├── account
    │   ├── page.js
    ├── admin
    │   ├── dashboard
    │   │   ├── page.js
    │   ├── page.js
    ├── api
    │   ├── admin
    │   │   ├── orders
    │   │   │   ├── [id]
    │   │   │   │   ├── route.js
    │   │   │   ├── route.js
    │   │   ├── products
    │   │   │   ├── [id]
    │   │   │   │   ├── route.js
    │   │   │   ├── route.js
    │   │   ├── testimonials
    │   │   │   ├── [id]
    │   │   │   │   ├── route.js
    │   │   │   ├── route.js
    │   │   ├── users
    │   │   │   └── route.js
    │   ├── auth
    │   │   ├── login
    │   │   │   ├── route.js
    │   │   ├── logout
    │   │   │   ├── route.js
    │   │   ├── me
    │   │   │   ├── route.js
    │   │   ├── register
    │   │   │   └── route.js
    │   ├── orders
    │   │   ├── [id]
    │   │   │   ├── route.js
    │   │   ├── route.js
    │   ├── products
    │   │   ├── [id]
    │   │   │   ├── route.js
    │   │   ├── by-slug
    │   │   │   ├── [slug]
    │   │   │   │   └── route.js
    │   │   ├── route.js
    │   ├── testimonials
    │   │   ├── route.js
    │   ├── wishlist
    │   │   └── route.js
    ├── checkout
    │   ├── page.js
    ├── contact
    │   ├── page.js
    ├── faq
    │   ├── page.js
    ├── globals.css
    ├── layout.js
    ├── login
    │   ├── page.js
    ├── order-success
    │   ├── page.js
    ├── orders
    │   ├── page.js
    ├── page.js
    ├── privacy
    │   ├── page.js
    ├── product
    │   ├── [slug]
    │   │   └── page.js
    ├── register
    │   ├── page.js
    ├── robots.txt
    │   ├── route.js
    ├── shop
    │   ├── page.js
    ├── sitemap.xml
    │   ├── route.js
    ├── terms
    │   ├── page.js
    ├── wishlist
    │   └── page.js
└── components
    ├── Footer.js
    ├── Header.js
    ├── SearchModal.js
└── context
    ├── AuthContext.js
└── jsconfig.json
└── lib
    ├── mongodb.js
    ├── slugify.js
└── next.config.js
└── package.json
```

## 📄 File Contents


## 📁 .vercel

**Path:** `.vercel`


### 📋 project.json

**Path:** `.vercel/project.json`

```json
   1: {"projectId":"prj_uucvk2jyw3vwG9AKW5zCJfWg9ahC","orgId":"team_jg2AWEjE0t1JWqvON1XwQt2t","projectName":"lumivora"}
```

---

## 📁 app

**Path:** `app`


### 📁 about

**Path:** `app/about`


#### 📄 page.js

**Path:** `app/about/page.js`

```js
   1: // app/about/page.js
   2: import Header from '../../components/Header';
   3: import Footer from '../../components/Footer';
   4: 
   5: export default function About() {
   6:   return (
   7:     <>
   8:       <Header />
   9:       <main>
  10:         <section className="hero" style={{padding: '80px 0'}}>
  11:           <div className="container">
  12:             <div className="hero-content">
  13:               <h1>About Lumivora</h1>
  14:               <p>Discover our story and mission to bring glow and comfort to everyday life</p>
  15:             </div>
  16:           </div>
  17:         </section>
  18: 
  19:         <section className="section">
  20:           <div className="container">
  21:             <div className="brand-content">
  22:               <div className="brand-text">
  23:                 <h2>Our Story</h2>
  24:                 <p>Founded in 2025, Lumivora emerged from a simple idea: everyday moments deserve to be beautiful. Our founder, Rugved, noticed a gap in the market for products that seamlessly blend personal care with home comfort.</p>
  25:                 <p>The name "Lumivora" combines "Lumi" (meaning glow or light) and "vora" (meaning to embrace), perfectly capturing our mission to help you embrace the glow in both your personal beauty routine and your living space.</p>
  26:                 
  27:                 <h3>Our Mission</h3>
  28:                 <p>We believe that self-care shouldn't be complicated or expensive. Our carefully curated collection of beauty tools and home gadgets is designed to elevate your daily rituals without overwhelming your space or budget.</p>
  29:                 
  30:                 <h3>Quality Promise</h3>
  31:                 <p>Every Lumivora product undergoes rigorous testing and quality control. We work with skilled artisans and manufacturers who share our commitment to excellence, ensuring that each item meets our high standards for durability, functionality, and aesthetic appeal.</p>
  32:               </div>
  33:               <div className="brand-image">
  34:                 <i className="lni lni-apartment"></i>
  35:               </div>
  36:             </div>
  37:           </div>
  38:         </section>
  39: 
  40:         <section className="section" style={{backgroundColor: 'var(--light-beige)'}}>
  41:           <div className="container">
  42:             <div className="section-title">
  43:               <h2>Our Values</h2>
  44:             </div>
  45:             <div className="benefits">
  46:               <div className="benefit-card">
  47:                 <div className="benefit-icon">
  48:                   <i className="lni lni-checkmark"></i>
  49:                 </div>
  50:                 <h3>Quality First</h3>
  51:                 <p>We never compromise on materials or craftsmanship</p>
  52:               </div>
  53:               <div className="benefit-card">
  54:                 <div className="benefit-icon">
  55:                   <i className="lni lni-leaf"></i>
  56:                 </div>
  57:                 <h3>Sustainability</h3>
  58:                 <p>Eco-friendly packaging and responsible sourcing</p>
  59:               </div>
  60:               <div className="benefit-card">
  61:                 <div className="benefit-icon">
  62:                   <i className="lni lni-hand"></i>
  63:                 </div>
  64:                 <h3>Customer Care</h3>
  65:                 <p>Exceptional service before and after your purchase</p>
  66:               </div>
  67:               <div className="benefit-card">
  68:                 <div className="benefit-icon">
  69:                   <i className="lni lni-bulb"></i>
  70:                 </div>
  71:                 <h3>Innovation</h3>
  72:                 <p>Constantly improving and expanding our product line</p>
  73:               </div>
  74:             </div>
  75:           </div>
  76:         </section>
  77:       </main>
  78:       <Footer />
  79:     </>
  80:   );
  81: }
```

---

### 📁 account

**Path:** `app/account`


#### 📄 page.js

**Path:** `app/account/page.js`

```js
   1: // app/account/page.js
   2: 'use client';
   3: import { useEffect } from 'react';
   4: import { useRouter } from 'next/navigation';
   5: import { useAuth } from '@/context/AuthContext';
   6: import Header from '@/components/Header';
   7: import Footer from '@/components/Footer';
   8: 
   9: export default function Account() {
  10:   const router = useRouter();
  11:   const { user, loading } = useAuth();
  12: 
  13:   useEffect(() => {
  14:     if (!loading && !user) {
  15:       router.push('/login');
  16:     }
  17:   }, [user, loading, router]);
  18: 
  19:   if (loading || !user) {
  20:     return (
  21:       <>
  22:         <Header />
  23:         <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  24:           <div className="loading-spinner">
  25:             <div className="spinner-circle"></div>
  26:           </div>
  27:         </main>
  28:         <Footer />
  29:       </>
  30:     );
  31:   }
  32: 
  33:   return (
  34:     <>
  35:       <Header />
  36:       <main>
  37:         <section className="hero" style={{padding: '80px 0', minHeight: 'auto'}}>
  38:           <div className="container">
  39:             <div className="hero-content">
  40:               <h1>My Account</h1>
  41:               <p>Manage your profile and preferences</p>
  42:             </div>
  43:           </div>
  44:         </section>
  45: 
  46:         <section className="section">
  47:           <div className="container">
  48:             <div style={{ maxWidth: '800px', margin: '0 auto' }}>
  49:               <div style={{
  50:                 backgroundColor: 'var(--pearl-white)',
  51:                 borderRadius: '20px',
  52:                 padding: '40px',
  53:                 boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)'
  54:               }}>
  55:                 <div style={{
  56:                   display: 'flex',
  57:                   alignItems: 'center',
  58:                   gap: '20px',
  59:                   marginBottom: '30px',
  60:                   paddingBottom: '30px',
  61:                   borderBottom: '2px solid var(--light-beige)'
  62:                 }}>
  63:                   <div style={{
  64:                     width: '80px',
  65:                     height: '80px',
  66:                     backgroundColor: 'var(--soft-gold)',
  67:                     borderRadius: '50%',
  68:                     display: 'flex',
  69:                     alignItems: 'center',
  70:                     justifyContent: 'center',
  71:                     color: 'white',
  72:                     fontSize: '32px',
  73:                     fontWeight: '600'
  74:                   }}>
  75:                     {user.name.charAt(0).toUpperCase()}
  76:                   </div>
  77:                   <div>
  78:                     <h2 style={{ marginBottom: '5px' }}>{user.name}</h2>
  79:                     <p style={{ color: 'var(--soft-taupe)', margin: 0 }}>{user.email}</p>
  80:                   </div>
  81:                 </div>
  82: 
  83:                 <div style={{ display: 'grid', gap: '15px' }}>
  84:                   <a href="/orders" style={{
  85:                     display: 'flex',
  86:                     alignItems: 'center',
  87:                     gap: '15px',
  88:                     padding: '20px',
  89:                     backgroundColor: 'var(--light-beige)',
  90:                     borderRadius: '12px',
  91:                     textDecoration: 'none',
  92:                     color: 'var(--charcoal-text)',
  93:                     transition: 'all 0.3s'
  94:                   }} className="benefit-card">
  95:                     <i className="lni lni-package" style={{ fontSize: '28px', color: 'var(--soft-gold)' }}></i>
  96:                     <div>
  97:                       <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Your Orders</h3>
  98:                       <p style={{ fontSize: '14px', color: 'var(--soft-taupe)', margin: 0 }}>
  99:                         Track, return, or buy things again
 100:                       </p>
 101:                     </div>
 102:                   </a>
 103: 
 104:                   <a href="/wishlist" style={{
 105:                     display: 'flex',
 106:                     alignItems: 'center',
 107:                     gap: '15px',
 108:                     padding: '20px',
 109:                     backgroundColor: 'var(--light-beige)',
 110:                     borderRadius: '12px',
 111:                     textDecoration: 'none',
 112:                     color: 'var(--charcoal-text)',
 113:                     transition: 'all 0.3s'
 114:                   }} className="benefit-card">
 115:                     <i className="lni lni-heart" style={{ fontSize: '28px', color: 'var(--soft-gold)' }}></i>
 116:                     <div>
 117:                       <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Wishlist</h3>
 118:                       <p style={{ fontSize: '14px', color: 'var(--soft-taupe)', margin: 0 }}>
 119:                         View and manage your saved items
 120:                       </p>
 121:                     </div>
 122:                   </a>
 123: 
 124:                   <div style={{
 125:                     display: 'flex',
 126:                     alignItems: 'center',
 127:                     gap: '15px',
 128:                     padding: '20px',
 129:                     backgroundColor: 'var(--light-beige)',
 130:                     borderRadius: '12px'
 131:                   }}>
 132:                     <i className="lni lni-calendar" style={{ fontSize: '28px', color: 'var(--soft-gold)' }}></i>
 133:                     <div>
 134:                       <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Member Since</h3>
 135:                       <p style={{ fontSize: '14px', color: 'var(--soft-taupe)', margin: 0 }}>
 136:                         {new Date().getFullYear()}
 137:                       </p>
 138:                     </div>
 139:                   </div>
 140:                 </div>
 141:               </div>
 142:             </div>
 143:           </div>
 144:         </section>
 145:       </main>
 146:       <Footer />
 147:     </>
 148:   );
 149: }
 150: 
 151: 
```

---

### 📁 admin

**Path:** `app/admin`


#### 📁 dashboard

**Path:** `app/admin/dashboard`


##### 📄 page.js

**Path:** `app/admin/dashboard/page.js`

```js
   1: // app/admin/dashboard/page.js
   2: 'use client';
   3: import { useEffect, useState } from 'react';
   4: import { useRouter } from 'next/navigation';
   5: import { useAuth } from '@/context/AuthContext';
   6: import Header from '@/components/Header';
   7: import Footer from '@/components/Footer';
   8: 
   9: export default function AdminDashboard() {
  10:   const router = useRouter();
  11:   const { user, loading } = useAuth();
  12:   const [stats, setStats] = useState({
  13:     totalProducts: 0,
  14:     totalOrders: 0,
  15:     totalUsers: 0,
  16:     totalTestimonials: 0
  17:   });
  18:   const [activeTab, setActiveTab] = useState('products');
  19:   const [products, setProducts] = useState([]);
  20:   const [orders, setOrders] = useState([]);
  21:   const [users, setUsers] = useState([]);
  22:   const [testimonials, setTestimonials] = useState([]);
  23:   const [isModalOpen, setIsModalOpen] = useState(false);
  24:   const [modalType, setModalType] = useState(''); // 'product', 'testimonial'
  25:   const [editingItem, setEditingItem] = useState(null);
  26:   const [loadingData, setLoadingData] = useState(true);
  27: 
  28:   // Check if user is admin
  29:   useEffect(() => {
  30:     if (!loading) {
  31:       if (!user || user.email !== 'itsrugveddanej@gmail.com') {
  32:         router.push('/');
  33:       } else {
  34:         fetchAllData();
  35:       }
  36:     }
  37:   }, [user, loading, router]);
  38: 
  39:   const fetchAllData = async () => {
  40:     setLoadingData(true);
  41:     try {
  42:       // Fetch products
  43:       const productsRes = await fetch('/api/admin/products');
  44:       if (productsRes.ok) {
  45:         const productsData = await productsRes.json();
  46:         setProducts(productsData.products || []);
  47:       }
  48: 
  49:       // Fetch orders
  50:       const ordersRes = await fetch('/api/admin/orders');
  51:       if (ordersRes.ok) {
  52:         const ordersData = await ordersRes.json();
  53:         setOrders(ordersData.orders || []);
  54:       }
  55: 
  56:       // Fetch users
  57:       const usersRes = await fetch('/api/admin/users');
  58:       if (usersRes.ok) {
  59:         const usersData = await usersRes.json();
  60:         setUsers(usersData.users || []);
  61:       }
  62: 
  63:       // Fetch testimonials
  64:       const testimonialsRes = await fetch('/api/admin/testimonials');
  65:       if (testimonialsRes.ok) {
  66:         const testimonialsData = await testimonialsRes.json();
  67:         setTestimonials(testimonialsData.testimonials || []);
  68:       }
  69: 
  70:       // Update stats
  71:       setStats({
  72:         totalProducts: products.length,
  73:         totalOrders: orders.length,
  74:         totalUsers: users.length,
  75:         totalTestimonials: testimonials.length
  76:       });
  77:     } catch (error) {
  78:       console.error('Error fetching data:', error);
  79:     } finally {
  80:       setLoadingData(false);
  81:     }
  82:   };
  83: 
  84:   const openModal = (type, item = null) => {
  85:     setModalType(type);
  86:     setEditingItem(item);
  87:     setIsModalOpen(true);
  88:   };
  89: 
  90:   const closeModal = () => {
  91:     setIsModalOpen(false);
  92:     setModalType('');
  93:     setEditingItem(null);
  94:   };
  95: 
  96:   const handleDelete = async (type, id) => {
  97:     if (!confirm('Are you sure you want to delete this item?')) return;
  98: 
  99:     try {
 100:       const res = await fetch(`/api/admin/${type}/${id}`, {
 101:         method: 'DELETE'
 102:       });
 103: 
 104:       if (res.ok) {
 105:         alert('Item deleted successfully!');
 106:         fetchAllData();
 107:       } else {
 108:         alert('Failed to delete item');
 109:       }
 110:     } catch (error) {
 111:       console.error('Error deleting:', error);
 112:       alert('Error deleting item');
 113:     }
 114:   };
 115: 
 116:   const handleStatusUpdate = async (orderId, newStatus) => {
 117:     try {
 118:       const res = await fetch(`/api/admin/orders/${orderId}`, {
 119:         method: 'PATCH',
 120:         headers: { 'Content-Type': 'application/json' },
 121:         body: JSON.stringify({ status: newStatus })
 122:       });
 123: 
 124:       if (res.ok) {
 125:         alert('Order status updated!');
 126:         fetchAllData();
 127:       }
 128:     } catch (error) {
 129:       console.error('Error updating order:', error);
 130:     }
 131:   };
 132: 
 133:   if (loading || loadingData || !user) {
 134:     return (
 135:       <>
 136:         <Header />
 137:         <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
 138:           <div className="loading-spinner">
 139:             <div className="spinner-circle"></div>
 140:             <p className="loading-text">Loading Admin Panel...</p>
 141:           </div>
 142:         </main>
 143:         <Footer />
 144:       </>
 145:     );
 146:   }
 147: 
 148:   return (
 149:     <>
 150:       <Header />
 151:       <main className="admin-dashboard">
 152:         {/* Admin Header */}
 153:         <div className="admin-header">
 154:           <div className="container">
 155:             <div className="admin-header-content">
 156:               <h1>Admin Dashboard</h1>
 157:               <div className="admin-actions">
 158:                 <button onClick={() => openModal('product')} className="btn">
 159:                   <i className="lni lni-plus"></i> Add Product
 160:                 </button>
 161:                 <button onClick={() => openModal('testimonial')} className="btn">
 162:                   <i className="lni lni-plus"></i> Add Testimonial
 163:                 </button>
 164:               </div>
 165:             </div>
 166:           </div>
 167:         </div>
 168: 
 169:         {/* Stats Cards */}
 170:         <section className="admin-main">
 171:           <div className="container">
 172:             <div className="admin-stats">
 173:               <div className="stat-card">
 174:                 <i className="lni lni-package"></i>
 175:                 <div>
 176:                   <h3>{products.length}</h3>
 177:                   <p>Products</p>
 178:                 </div>
 179:               </div>
 180:               <div className="stat-card">
 181:                 <i className="lni lni-shopping-basket"></i>
 182:                 <div>
 183:                   <h3>{orders.length}</h3>
 184:                   <p>Orders</p>
 185:                 </div>
 186:               </div>
 187:               <div className="stat-card">
 188:                 <i className="lni lni-users"></i>
 189:                 <div>
 190:                   <h3>{users.length}</h3>
 191:                   <p>Users</p>
 192:                 </div>
 193:               </div>
 194:               <div className="stat-card">
 195:                 <i className="lni lni-comments"></i>
 196:                 <div>
 197:                   <h3>{testimonials.length}</h3>
 198:                   <p>Testimonials</p>
 199:                 </div>
 200:               </div>
 201:             </div>
 202: 
 203:             {/* Tabs */}
 204:             <div className="admin-tabs" style={{
 205:               display: 'flex',
 206:               gap: '10px',
 207:               marginBottom: '30px',
 208:               borderBottom: '2px solid var(--light-beige)',
 209:               flexWrap: 'wrap'
 210:             }}>
 211:               {['products', 'orders', 'users', 'testimonials'].map(tab => (
 212:                 <button
 213:                   key={tab}
 214:                   onClick={() => setActiveTab(tab)}
 215:                   style={{
 216:                     padding: '15px 25px',
 217:                     background: activeTab === tab ? 'var(--soft-gold)' : 'transparent',
 218:                     color: activeTab === tab ? 'white' : 'var(--charcoal-text)',
 219:                     border: 'none',
 220:                     borderBottom: activeTab === tab ? '3px solid var(--soft-gold)' : 'none',
 221:                     cursor: 'pointer',
 222:                     fontWeight: '600',
 223:                     textTransform: 'capitalize',
 224:                     transition: 'all 0.3s'
 225:                   }}
 226:                 >
 227:                   {tab}
 228:                 </button>
 229:               ))}
 230:             </div>
 231: 
 232:             {/* Products Tab */}
 233:             {activeTab === 'products' && (
 234:               <div className="admin-products">
 235:                 <h2>Manage Products</h2>
 236:                 <div className="products-table">
 237:                   <table>
 238:                     <thead>
 239:                       <tr>
 240:                         <th>Name</th>
 241:                         <th>Category</th>
 242:                         <th>Price</th>
 243:                         <th>Stock</th>
 244:                         <th>Actions</th>
 245:                       </tr>
 246:                     </thead>
 247:                     <tbody>
 248:                       {products.map(product => (
 249:                         <tr key={product._id}>
 250:                           <td>{product.name}</td>
 251:                           <td><span className="category-badge">{product.category}</span></td>
 252:                           <td>₹{product.price}</td>
 253:                           <td>{product.stock}</td>
 254:                           <td>
 255:                             <div className="action-buttons">
 256:                               <button 
 257:                                 onClick={() => openModal('product', product)}
 258:                                 className="edit-btn"
 259:                               >
 260:                                 <i className="lni lni-pencil"></i>
 261:                               </button>
 262:                               <button 
 263:                                 onClick={() => handleDelete('products', product._id)}
 264:                                 className="delete-btn"
 265:                               >
 266:                                 <i className="lni lni-trash"></i>
 267:                               </button>
 268:                             </div>
 269:                           </td>
 270:                         </tr>
 271:                       ))}
 272:                     </tbody>
 273:                   </table>
 274:                   {products.length === 0 && (
 275:                     <div style={{textAlign: 'center', padding: '40px', color: 'var(--soft-taupe)'}}>
 276:                       No products found. Click "Add Product" to create one.
 277:                     </div>
 278:                   )}
 279:                 </div>
 280:               </div>
 281:             )}
 282: 
 283:             {/* Orders Tab */}
 284:             {activeTab === 'orders' && (
 285:               <div className="admin-products">
 286:                 <h2>Manage Orders</h2>
 287:                 <div className="products-table">
 288:                   <table>
 289:                     <thead>
 290:                       <tr>
 291:                         <th>Order ID</th>
 292:                         <th>Customer</th>
 293:                         <th>Products</th>
 294:                         <th>Total</th>
 295:                         <th>Status</th>
 296:                         <th>Date</th>
 297:                         <th>Actions</th>
 298:                       </tr>
 299:                     </thead>
 300:                     <tbody>
 301:                       {orders.map(order => (
 302:                         <tr key={order._id}>
 303:                           <td>#{order._id.slice(-8)}</td>
 304:                           <td>{order.userName}</td>
 305:                           <td>{order.items?.length || 0} items</td>
 306:                           <td>₹{order.total}</td>
 307:                           <td>
 308:                             <select 
 309:                               value={order.status}
 310:                               onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
 311:                               className="filter-select"
 312:                             >
 313:                               <option value="pending">Pending</option>
 314:                               <option value="processing">Processing</option>
 315:                               <option value="shipped">Shipped</option>
 316:                               <option value="delivered">Delivered</option>
 317:                               <option value="cancelled">Cancelled</option>
 318:                             </select>
 319:                           </td>
 320:                           <td>{new Date(order.createdAt).toLocaleDateString()}</td>
 321:                           <td>
 322:                             <button 
 323:                               onClick={() => alert('View order details: ' + order._id)}
 324:                               className="edit-btn"
 325:                             >
 326:                               <i className="lni lni-eye"></i>
 327:                             </button>
 328:                           </td>
 329:                         </tr>
 330:                       ))}
 331:                     </tbody>
 332:                   </table>
 333:                   {orders.length === 0 && (
 334:                     <div style={{textAlign: 'center', padding: '40px', color: 'var(--soft-taupe)'}}>
 335:                       No orders yet.
 336:                     </div>
 337:                   )}
 338:                 </div>
 339:               </div>
 340:             )}
 341: 
 342:             {/* Users Tab */}
 343:             {activeTab === 'users' && (
 344:               <div className="admin-products">
 345:                 <h2>Manage Users</h2>
 346:                 <div className="products-table">
 347:                   <table>
 348:                     <thead>
 349:                       <tr>
 350:                         <th>Name</th>
 351:                         <th>Email</th>
 352:                         <th>Joined</th>
 353:                         <th>Orders</th>
 354:                         <th>Actions</th>
 355:                       </tr>
 356:                     </thead>
 357:                     <tbody>
 358:                       {users.map(user => (
 359:                         <tr key={user._id}>
 360:                           <td>{user.name}</td>
 361:                           <td>{user.email}</td>
 362:                           <td>{new Date(user.createdAt).toLocaleDateString()}</td>
 363:                           <td>{user.orders?.length || 0}</td>
 364:                           <td>
 365:                             <button 
 366:                               onClick={() => alert('View user details: ' + user._id)}
 367:                               className="edit-btn"
 368:                             >
 369:                               <i className="lni lni-eye"></i>
 370:                             </button>
 371:                           </td>
 372:                         </tr>
 373:                       ))}
 374:                     </tbody>
 375:                   </table>
 376:                 </div>
 377:               </div>
 378:             )}
 379: 
 380:             {/* Testimonials Tab */}
 381:             {activeTab === 'testimonials' && (
 382:               <div className="admin-products">
 383:                 <h2>Manage Testimonials</h2>
 384:                 <div style={{display: 'grid', gap: '20px'}}>
 385:                   {testimonials.map(testimonial => (
 386:                     <div key={testimonial._id} style={{
 387:                       backgroundColor: 'var(--pearl-white)',
 388:                       padding: '20px',
 389:                       borderRadius: '12px',
 390:                       boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
 391:                     }}>
 392:                       <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
 393:                         <div>
 394:                           <h3>{testimonial.name}</h3>
 395:                           <div style={{display: 'flex', gap: '5px', margin: '10px 0'}}>
 396:                             {[...Array(testimonial.rating)].map((_, i) => (
 397:                               <i key={i} className="lni lni-star-filled" style={{color: '#ffc107'}}></i>
 398:                             ))}
 399:                           </div>
 400:                           <p style={{color: 'var(--soft-taupe)'}}>{testimonial.text}</p>
 401:                         </div>
 402:                         <div className="action-buttons">
 403:                           <button 
 404:                             onClick={() => openModal('testimonial', testimonial)}
 405:                             className="edit-btn"
 406:                           >
 407:                             <i className="lni lni-pencil"></i>
 408:                           </button>
 409:                           <button 
 410:                             onClick={() => handleDelete('testimonials', testimonial._id)}
 411:                             className="delete-btn"
 412:                           >
 413:                             <i className="lni lni-trash"></i>
 414:                           </button>
 415:                         </div>
 416:                       </div>
 417:                     </div>
 418:                   ))}
 419:                   {testimonials.length === 0 && (
 420:                     <div style={{textAlign: 'center', padding: '40px', color: 'var(--soft-taupe)'}}>
 421:                       No testimonials yet. Click "Add Testimonial" to create one.
 422:                     </div>
 423:                   )}
 424:                 </div>
 425:               </div>
 426:             )}
 427:           </div>
 428:         </section>
 429:       </main>
 430: 
 431:       {/* Modal */}
 432:       {isModalOpen && (
 433:         <Modal 
 434:           type={modalType}
 435:           item={editingItem}
 436:           onClose={closeModal}
 437:           onSuccess={() => {
 438:             closeModal();
 439:             fetchAllData();
 440:           }}
 441:         />
 442:       )}
 443:       
 444:       <Footer />
 445:     </>
 446:   );
 447: }
 448: 
 449: // Modal Component
 450: function Modal({ type, item, onClose, onSuccess }) {
 451:   const [formData, setFormData] = useState(
 452:     type === 'product' ? {
 453:       name: item?.name || '',
 454:       description: item?.description || '',
 455:       price: item?.price || '',
 456:       category: item?.category || 'beauty-tools',
 457:       stock: item?.stock || 0,
 458:       imageUrl: item?.imageUrl || ''
 459:     } : {
 460:       name: item?.name || '',
 461:       text: item?.text || '',
 462:       rating: item?.rating || 5
 463:     }
 464:   );
 465:   const [loading, setLoading] = useState(false);
 466: 
 467:   const handleSubmit = async (e) => {
 468:     e.preventDefault();
 469:     setLoading(true);
 470: 
 471:     try {
 472:       const endpoint = item 
 473:         ? `/api/admin/${type}s/${item._id}` 
 474:         : `/api/admin/${type}s`;
 475:       
 476:       const res = await fetch(endpoint, {
 477:         method: item ? 'PUT' : 'POST',
 478:         headers: { 'Content-Type': 'application/json' },
 479:         body: JSON.stringify(formData)
 480:       });
 481: 
 482:       if (res.ok) {
 483:         alert(`${type} ${item ? 'updated' : 'created'} successfully!`);
 484:         onSuccess();
 485:       } else {
 486:         alert(`Failed to ${item ? 'update' : 'create'} ${type}`);
 487:       }
 488:     } catch (error) {
 489:       console.error('Error:', error);
 490:       alert('An error occurred');
 491:     } finally {
 492:       setLoading(false);
 493:     }
 494:   };
 495: 
 496:   return (
 497:     <div className="modal-overlay" onClick={onClose}>
 498:       <div className="modal-content" onClick={e => e.stopPropagation()}>
 499:         <div className="modal-header">
 500:           <h2>{item ? 'Edit' : 'Add'} {type === 'product' ? 'Product' : 'Testimonial'}</h2>
 501:           <button onClick={onClose} className="close-btn">
 502:             <i className="lni lni-close"></i>
 503:           </button>
 504:         </div>
 505: 
 506:         <form onSubmit={handleSubmit}>
 507:           {type === 'product' ? (
 508:             <>
 509:               <div className="form-group">
 510:                 <label>Product Name *</label>
 511:                 <input
 512:                   type="text"
 513:                   value={formData.name}
 514:                   onChange={e => setFormData({...formData, name: e.target.value})}
 515:                   required
 516:                 />
 517:               </div>
 518:               <div className="form-group">
 519:                 <label>Description *</label>
 520:                 <textarea
 521:                   value={formData.description}
 522:                   onChange={e => setFormData({...formData, description: e.target.value})}
 523:                   required
 524:                   rows="4"
 525:                 />
 526:               </div>
 527:               <div className="form-group">
 528:                 <label>Price (₹) *</label>
 529:                 <input
 530:                   type="number"
 531:                   value={formData.price}
 532:                   onChange={e => setFormData({...formData, price: e.target.value})}
 533:                   required
 534:                   min="0"
 535:                 />
 536:               </div>
 537:               <div className="form-group">
 538:                 <label>Category *</label>
 539:                 <select
 540:                   value={formData.category}
 541:                   onChange={e => setFormData({...formData, category: e.target.value})}
 542:                   required
 543:                 >
 544:                   <option value="beauty-tools">Beauty Tools</option>
 545:                   <option value="skincare-accessories">Skincare Accessories</option>
 546:                   <option value="home-gadgets">Home Gadgets</option>
 547:                 </select>
 548:               </div>
 549:               <div className="form-group">
 550:                 <label>Stock *</label>
 551:                 <input
 552:                   type="number"
 553:                   value={formData.stock}
 554:                   onChange={e => setFormData({...formData, stock: e.target.value})}
 555:                   required
 556:                   min="0"
 557:                 />
 558:               </div>
 559:               <div className="form-group">
 560:                 <label>Image URL</label>
 561:                 <input
 562:                   type="url"
 563:                   value={formData.imageUrl}
 564:                   onChange={e => setFormData({...formData, imageUrl: e.target.value})}
 565:                   placeholder="https://example.com/image.jpg"
 566:                 />
 567:               </div>
 568:             </>
 569:           ) : (
 570:             <>
 571:               <div className="form-group">
 572:                 <label>Customer Name *</label>
 573:                 <input
 574:                   type="text"
 575:                   value={formData.name}
 576:                   onChange={e => setFormData({...formData, name: e.target.value})}
 577:                   required
 578:                 />
 579:               </div>
 580:               <div className="form-group">
 581:                 <label>Testimonial *</label>
 582:                 <textarea
 583:                   value={formData.text}
 584:                   onChange={e => setFormData({...formData, text: e.target.value})}
 585:                   required
 586:                   rows="4"
 587:                 />
 588:               </div>
 589:               <div className="form-group">
 590:                 <label>Rating *</label>
 591:                 <select
 592:                   value={formData.rating}
 593:                   onChange={e => setFormData({...formData, rating: parseInt(e.target.value)})}
 594:                   required
 595:                 >
 596:                   {[5, 4, 3, 2, 1].map(n => (
 597:                     <option key={n} value={n}>{n} Stars</option>
 598:                   ))}
 599:                 </select>
 600:               </div>
 601:             </>
 602:           )}
 603: 
 604:           <div className="form-actions">
 605:             <button type="button" onClick={onClose} className="btn btn-outline">
 606:               Cancel
 607:             </button>
 608:             <button type="submit" className="btn" disabled={loading}>
 609:               {loading ? 'Saving...' : item ? 'Update' : 'Create'}
 610:             </button>
 611:           </div>
 612:         </form>
 613:       </div>
 614:     </div>
 615:   );
 616: }
```

---

#### 📄 page.js

**Path:** `app/admin/page.js`

```js
   1: // app/admin/page.js - You can either delete this file entirely or replace with a simple message
   2: export default function Admin() {
   3:   return (
   4:     <div className="admin-login">
   5:       <div className="login-container">
   6:         <div className="login-card">
   7:           <h1>Lumi<span style={{color: 'var(--soft-gold)'}}>vora</span></h1>
   8:           <h2>Admin Access</h2>
   9:           <p>Admin panel is currently unavailable.</p>
  10:           <a href="/" className="back-link">
  11:             <i className="lni lni-arrow-left"></i> Back to Home
  12:           </a>
  13:         </div>
  14:       </div>
  15:     </div>
  16:   );
  17: }
```

---

### 📁 api

**Path:** `app/api`


#### 📁 admin

**Path:** `app/api/admin`


##### 📁 orders

**Path:** `app/api/admin/orders`


###### 📁 [id]

**Path:** `app/api/admin/orders/[id]`


####### 📄 route.js

**Path:** `app/api/admin/orders/[id]/route.js`

```js
   1: // app/api/admin/orders/[id]/route.js
   2: import { NextResponse } from 'next/server';
   3: import { jwtVerify } from 'jose';
   4: import clientPromise from '@/lib/mongodb';
   5: import { ObjectId } from 'mongodb';
   6: 
   7: const JWT_SECRET = new TextEncoder().encode(
   8:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   9: );
  10: 
  11: async function verifyAdmin(request) {
  12:   try {
  13:     const token = request.cookies.get('token')?.value;
  14:     if (!token) return null;
  15:     const { payload } = await jwtVerify(token, JWT_SECRET);
  16:     if (payload.email !== 'itsrugveddanej@gmail.com') return null;
  17:     return payload;
  18:   } catch (error) {
  19:     return null;
  20:   }
  21: }
  22: 
  23: // PATCH - Update order status
  24: export async function PATCH(request, { params }) {
  25:   try {
  26:     const admin = await verifyAdmin(request);
  27:     if (!admin) {
  28:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  29:     }
  30: 
  31:     const { id } = params;
  32:     const { status } = await request.json();
  33: 
  34:     const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
  35:     if (!validStatuses.includes(status)) {
  36:       return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  37:     }
  38: 
  39:     const client = await clientPromise;
  40:     const db = client.db('lumivora');
  41: 
  42:     const result = await db.collection('orders').updateOne(
  43:       { _id: new ObjectId(id) },
  44:       { 
  45:         $set: { 
  46:           status,
  47:           updatedAt: new Date()
  48:         }
  49:       }
  50:     );
  51: 
  52:     if (result.matchedCount === 0) {
  53:       return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  54:     }
  55: 
  56:     return NextResponse.json({ message: 'Order status updated successfully' });
  57: 
  58:   } catch (error) {
  59:     console.error('Error updating order:', error);
  60:     return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
  61:   }
  62: }
```

---

###### 📄 route.js

**Path:** `app/api/admin/orders/route.js`

```js
   1: // app/api/admin/orders/route.js
   2: import { NextResponse } from 'next/server';
   3: import { jwtVerify } from 'jose';
   4: import clientPromise from '@/lib/mongodb';
   5: 
   6: const JWT_SECRET = new TextEncoder().encode(
   7:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   8: );
   9: 
  10: async function verifyAdmin(request) {
  11:   try {
  12:     const token = request.cookies.get('token')?.value;
  13:     if (!token) return null;
  14:     const { payload } = await jwtVerify(token, JWT_SECRET);
  15:     if (payload.email !== 'itsrugveddanej@gmail.com') return null;
  16:     return payload;
  17:   } catch (error) {
  18:     return null;
  19:   }
  20: }
  21: 
  22: // GET - Fetch all orders
  23: export async function GET(request) {
  24:   try {
  25:     const admin = await verifyAdmin(request);
  26:     if (!admin) {
  27:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  28:     }
  29: 
  30:     const client = await clientPromise;
  31:     const db = client.db('lumivora');
  32:     
  33:     const orders = await db.collection('orders')
  34:       .find({})
  35:       .sort({ createdAt: -1 })
  36:       .toArray();
  37: 
  38:     return NextResponse.json({ orders });
  39:   } catch (error) {
  40:     console.error('Error fetching orders:', error);
  41:     return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  42:   }
  43: }
  44: 
  45: 
```

---

##### 📁 products

**Path:** `app/api/admin/products`


###### 📁 [id]

**Path:** `app/api/admin/products/[id]`


####### 📄 route.js

**Path:** `app/api/admin/products/[id]/route.js`

```js
   1: // app/api/admin/products/[id]/route.js
   2: import { NextResponse } from 'next/server';
   3: import { jwtVerify } from 'jose';
   4: import clientPromise from '@/lib/mongodb';
   5: import { ObjectId } from 'mongodb';
   6: 
   7: const JWT_SECRET = new TextEncoder().encode(
   8:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   9: );
  10: 
  11: async function verifyAdmin(request) {
  12:   try {
  13:     const token = request.cookies.get('token')?.value;
  14:     if (!token) return null;
  15: 
  16:     const { payload } = await jwtVerify(token, JWT_SECRET);
  17:     if (payload.email !== 'itsrugveddanej@gmail.com') return null;
  18:     
  19:     return payload;
  20:   } catch (error) {
  21:     return null;
  22:   }
  23: }
  24: 
  25: // PUT - Update product
  26: export async function PUT(request, { params }) {
  27:   try {
  28:     const admin = await verifyAdmin(request);
  29:     if (!admin) {
  30:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  31:     }
  32: 
  33:     const { id } = params;
  34:     const body = await request.json();
  35:     const { name, description, price, category, stock, imageUrl } = body;
  36: 
  37:     const client = await clientPromise;
  38:     const db = client.db('lumivora');
  39: 
  40:     const updateData = {
  41:       name,
  42:       description,
  43:       price: parseFloat(price),
  44:       category,
  45:       stock: parseInt(stock),
  46:       imageUrl: imageUrl || '',
  47:       updatedAt: new Date()
  48:     };
  49: 
  50:     const result = await db.collection('products').updateOne(
  51:       { _id: new ObjectId(id) },
  52:       { $set: updateData }
  53:     );
  54: 
  55:     if (result.matchedCount === 0) {
  56:       return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  57:     }
  58: 
  59:     return NextResponse.json({ message: 'Product updated successfully' });
  60: 
  61:   } catch (error) {
  62:     console.error('Error updating product:', error);
  63:     return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  64:   }
  65: }
  66: 
  67: // DELETE - Delete product
  68: export async function DELETE(request, { params }) {
  69:   try {
  70:     const admin = await verifyAdmin(request);
  71:     if (!admin) {
  72:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  73:     }
  74: 
  75:     const { id } = params;
  76: 
  77:     const client = await clientPromise;
  78:     const db = client.db('lumivora');
  79: 
  80:     const result = await db.collection('products').deleteOne({
  81:       _id: new ObjectId(id)
  82:     });
  83: 
  84:     if (result.deletedCount === 0) {
  85:       return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  86:     }
  87: 
  88:     return NextResponse.json({ message: 'Product deleted successfully' });
  89: 
  90:   } catch (error) {
  91:     console.error('Error deleting product:', error);
  92:     return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  93:   }
  94: }
```

---

###### 📄 route.js

**Path:** `app/api/admin/products/route.js`

```js
   1: // app/api/admin/products/route.js
   2: import { NextResponse } from 'next/server';
   3: import { jwtVerify } from 'jose';
   4: import clientPromise from '@/lib/mongodb';
   5: 
   6: const JWT_SECRET = new TextEncoder().encode(
   7:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   8: );
   9: 
  10: // Verify admin user
  11: async function verifyAdmin(request) {
  12:   try {
  13:     const token = request.cookies.get('token')?.value;
  14:     if (!token) return null;
  15: 
  16:     const { payload } = await jwtVerify(token, JWT_SECRET);
  17:     
  18:     // Only allow admin email
  19:     if (payload.email !== 'itsrugveddanej@gmail.com') {
  20:       return null;
  21:     }
  22:     
  23:     return payload;
  24:   } catch (error) {
  25:     return null;
  26:   }
  27: }
  28: 
  29: // GET - Fetch all products
  30: export async function GET(request) {
  31:   try {
  32:     const admin = await verifyAdmin(request);
  33:     if (!admin) {
  34:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  35:     }
  36: 
  37:     const client = await clientPromise;
  38:     const db = client.db('lumivora');
  39:     
  40:     const products = await db.collection('products')
  41:       .find({})
  42:       .sort({ createdAt: -1 })
  43:       .toArray();
  44: 
  45:     return NextResponse.json({ products });
  46:   } catch (error) {
  47:     console.error('Error fetching products:', error);
  48:     return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  49:   }
  50: }
  51: 
  52: // POST - Create new product
  53: export async function POST(request) {
  54:   try {
  55:     const admin = await verifyAdmin(request);
  56:     if (!admin) {
  57:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  58:     }
  59: 
  60:     const body = await request.json();
  61:     const { name, description, price, category, stock, imageUrl } = body;
  62: 
  63:     // Validation
  64:     if (!name || !description || !price || !category) {
  65:       return NextResponse.json(
  66:         { error: 'Missing required fields' },
  67:         { status: 400 }
  68:       );
  69:     }
  70: 
  71:     const client = await clientPromise;
  72:     const db = client.db('lumivora');
  73: 
  74:     const product = {
  75:       name,
  76:       description,
  77:       price: parseFloat(price),
  78:       category,
  79:       stock: parseInt(stock) || 0,
  80:       imageUrl: imageUrl || '',
  81:       createdAt: new Date(),
  82:       updatedAt: new Date()
  83:     };
  84: 
  85:     const result = await db.collection('products').insertOne(product);
  86: 
  87:     return NextResponse.json({
  88:       message: 'Product created successfully',
  89:       productId: result.insertedId
  90:     }, { status: 201 });
  91: 
  92:   } catch (error) {
  93:     console.error('Error creating product:', error);
  94:     return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  95:   }
  96: }
```

---

##### 📁 testimonials

**Path:** `app/api/admin/testimonials`


###### 📁 [id]

**Path:** `app/api/admin/testimonials/[id]`


####### 📄 route.js

**Path:** `app/api/admin/testimonials/[id]/route.js`

```js
   1: // app/api/admin/testimonials/[id]/route.js
   2: import { NextResponse } from 'next/server';
   3: import { jwtVerify } from 'jose';
   4: import clientPromise from '@/lib/mongodb';
   5: import { ObjectId } from 'mongodb';
   6: 
   7: const JWT_SECRET = new TextEncoder().encode(
   8:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   9: );
  10: 
  11: async function verifyAdmin(request) {
  12:   try {
  13:     const token = request.cookies.get('token')?.value;
  14:     if (!token) return null;
  15:     const { payload } = await jwtVerify(token, JWT_SECRET);
  16:     if (payload.email !== 'itsrugveddanej@gmail.com') return null;
  17:     return payload;
  18:   } catch (error) {
  19:     return null;
  20:   }
  21: }
  22: 
  23: // PUT - Update testimonial
  24: export async function PUT(request, { params }) {
  25:   try {
  26:     const admin = await verifyAdmin(request);
  27:     if (!admin) {
  28:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  29:     }
  30: 
  31:     const { id } = params;
  32:     const { name, text, rating } = await request.json();
  33: 
  34:     const client = await clientPromise;
  35:     const db = client.db('lumivora');
  36: 
  37:     const result = await db.collection('testimonials').updateOne(
  38:       { _id: new ObjectId(id) },
  39:       { 
  40:         $set: { 
  41:           name,
  42:           text,
  43:           rating: parseInt(rating),
  44:           updatedAt: new Date()
  45:         }
  46:       }
  47:     );
  48: 
  49:     if (result.matchedCount === 0) {
  50:       return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
  51:     }
  52: 
  53:     return NextResponse.json({ message: 'Testimonial updated successfully' });
  54: 
  55:   } catch (error) {
  56:     console.error('Error updating testimonial:', error);
  57:     return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 });
  58:   }
  59: }
  60: 
  61: // DELETE - Delete testimonial
  62: export async function DELETE(request, { params }) {
  63:   try {
  64:     const admin = await verifyAdmin(request);
  65:     if (!admin) {
  66:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  67:     }
  68: 
  69:     const { id } = params;
  70: 
  71:     const client = await clientPromise;
  72:     const db = client.db('lumivora');
  73: 
  74:     const result = await db.collection('testimonials').deleteOne({
  75:       _id: new ObjectId(id)
  76:     });
  77: 
  78:     if (result.deletedCount === 0) {
  79:       return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
  80:     }
  81: 
  82:     return NextResponse.json({ message: 'Testimonial deleted successfully' });
  83: 
  84:   } catch (error) {
  85:     console.error('Error deleting testimonial:', error);
  86:     return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
  87:   }
  88: }
```

---

###### 📄 route.js

**Path:** `app/api/admin/testimonials/route.js`

```js
   1: // app/api/admin/testimonials/route.js
   2: import { NextResponse } from 'next/server';
   3: import { jwtVerify } from 'jose';
   4: import clientPromise from '@/lib/mongodb';
   5: 
   6: const JWT_SECRET = new TextEncoder().encode(
   7:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   8: );
   9: 
  10: async function verifyAdmin(request) {
  11:   try {
  12:     const token = request.cookies.get('token')?.value;
  13:     if (!token) return null;
  14:     const { payload } = await jwtVerify(token, JWT_SECRET);
  15:     if (payload.email !== 'itsrugveddanej@gmail.com') return null;
  16:     return payload;
  17:   } catch (error) {
  18:     return null;
  19:   }
  20: }
  21: 
  22: // GET - Fetch all testimonials
  23: export async function GET(request) {
  24:   try {
  25:     const admin = await verifyAdmin(request);
  26:     if (!admin) {
  27:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  28:     }
  29: 
  30:     const client = await clientPromise;
  31:     const db = client.db('lumivora');
  32:     
  33:     const testimonials = await db.collection('testimonials')
  34:       .find({})
  35:       .sort({ createdAt: -1 })
  36:       .toArray();
  37: 
  38:     return NextResponse.json({ testimonials });
  39:   } catch (error) {
  40:     console.error('Error fetching testimonials:', error);
  41:     return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  42:   }
  43: }
  44: 
  45: // POST - Create testimonial
  46: export async function POST(request) {
  47:   try {
  48:     const admin = await verifyAdmin(request);
  49:     if (!admin) {
  50:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  51:     }
  52: 
  53:     const { name, text, rating } = await request.json();
  54: 
  55:     if (!name || !text || !rating) {
  56:       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  57:     }
  58: 
  59:     const client = await clientPromise;
  60:     const db = client.db('lumivora');
  61: 
  62:     const testimonial = {
  63:       name,
  64:       text,
  65:       rating: parseInt(rating),
  66:       createdAt: new Date()
  67:     };
  68: 
  69:     const result = await db.collection('testimonials').insertOne(testimonial);
  70: 
  71:     return NextResponse.json({
  72:       message: 'Testimonial created successfully',
  73:       testimonialId: result.insertedId
  74:     }, { status: 201 });
  75: 
  76:   } catch (error) {
  77:     console.error('Error creating testimonial:', error);
  78:     return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  79:   }
  80: }
  81: 
```

---

##### 📁 users

**Path:** `app/api/admin/users`


###### 📄 route.js

**Path:** `app/api/admin/users/route.js`

```js
   1: // app/api/admin/users/route.js
   2: import { NextResponse } from 'next/server';
   3: import { jwtVerify } from 'jose';
   4: import clientPromise from '@/lib/mongodb';
   5: 
   6: const JWT_SECRET = new TextEncoder().encode(
   7:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   8: );
   9: 
  10: async function verifyAdmin(request) {
  11:   try {
  12:     const token = request.cookies.get('token')?.value;
  13:     if (!token) return null;
  14:     const { payload } = await jwtVerify(token, JWT_SECRET);
  15:     if (payload.email !== 'itsrugveddanej@gmail.com') return null;
  16:     return payload;
  17:   } catch (error) {
  18:     return null;
  19:   }
  20: }
  21: 
  22: // GET - Fetch all users
  23: export async function GET(request) {
  24:   try {
  25:     const admin = await verifyAdmin(request);
  26:     if (!admin) {
  27:       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  28:     }
  29: 
  30:     const client = await clientPromise;
  31:     const db = client.db('lumivora');
  32:     
  33:     const users = await db.collection('users')
  34:       .find({}, { projection: { password: 0 } })
  35:       .sort({ createdAt: -1 })
  36:       .toArray();
  37: 
  38:     return NextResponse.json({ users });
  39:   } catch (error) {
  40:     console.error('Error fetching users:', error);
  41:     return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  42:   }
  43: }
```

---

#### 📁 auth

**Path:** `app/api/auth`


##### 📁 login

**Path:** `app/api/auth/login`


###### 📄 route.js

**Path:** `app/api/auth/login/route.js`

```js
   1: // app/api/auth/login/route.js
   2: import { NextResponse } from 'next/server';
   3: import clientPromise from '@/lib/mongodb';
   4: import bcrypt from 'bcryptjs';
   5: import { SignJWT } from 'jose';
   6: 
   7: const JWT_SECRET = new TextEncoder().encode(
   8:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   9: );
  10: 
  11: export async function POST(request) {
  12:   try {
  13:     const { email, password } = await request.json();
  14: 
  15:     if (!email || !password) {
  16:       return NextResponse.json(
  17:         { error: 'Email and password are required' },
  18:         { status: 400 }
  19:       );
  20:     }
  21: 
  22:     const client = await clientPromise;
  23:     const db = client.db('lumivora');
  24: 
  25:     // Find user
  26:     const user = await db.collection('users').findOne({ email });
  27:     if (!user) {
  28:       return NextResponse.json(
  29:         { error: 'Invalid email or password' },
  30:         { status: 401 }
  31:       );
  32:     }
  33: 
  34:     // Verify password
  35:     const isValidPassword = await bcrypt.compare(password, user.password);
  36:     if (!isValidPassword) {
  37:       return NextResponse.json(
  38:         { error: 'Invalid email or password' },
  39:         { status: 401 }
  40:       );
  41:     }
  42: 
  43:     // Create JWT token
  44:     const token = await new SignJWT({
  45:       userId: user._id.toString(),
  46:       email: user.email,
  47:       name: user.name
  48:     })
  49:       .setProtectedHeader({ alg: 'HS256' })
  50:       .setExpirationTime('7d')
  51:       .sign(JWT_SECRET);
  52: 
  53:     // Create response with cookie
  54:     const response = NextResponse.json({
  55:       message: 'Login successful',
  56:       user: {
  57:         id: user._id.toString(),
  58:         name: user.name,
  59:         email: user.email
  60:       }
  61:     });
  62: 
  63:     // Set HTTP-only cookie
  64:     response.cookies.set('token', token, {
  65:       httpOnly: true,
  66:       secure: process.env.NODE_ENV === 'production',
  67:       sameSite: 'lax',
  68:       maxAge: 60 * 60 * 24 * 7 // 7 days
  69:     });
  70: 
  71:     return response;
  72: 
  73:   } catch (error) {
  74:     console.error('Login error:', error);
  75:     return NextResponse.json(
  76:       { error: 'Login failed' },
  77:       { status: 500 }
  78:     );
  79:   }
  80: }
```

---

##### 📁 logout

**Path:** `app/api/auth/logout`


###### 📄 route.js

**Path:** `app/api/auth/logout/route.js`

```js
   1: // app/api/auth/logout/route.js
   2: import { NextResponse } from 'next/server';
   3: 
   4: export async function POST() {
   5:   const response = NextResponse.json({ message: 'Logged out successfully' });
   6:   
   7:   // Clear the auth cookie
   8:   response.cookies.delete('token');
   9:   
  10:   return response;
  11: }
  12: 
```

---

##### 📁 me

**Path:** `app/api/auth/me`


###### 📄 route.js

**Path:** `app/api/auth/me/route.js`

```js
   1: // app/api/auth/me/route.js
   2: import { NextResponse } from 'next/server';
   3: import { jwtVerify } from 'jose';
   4: import clientPromise from '@/lib/mongodb';
   5: import { ObjectId } from 'mongodb';
   6: 
   7: const JWT_SECRET = new TextEncoder().encode(
   8:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   9: );
  10: 
  11: export async function GET(request) {
  12:   try {
  13:     const token = request.cookies.get('token')?.value;
  14: 
  15:     if (!token) {
  16:       return NextResponse.json(
  17:         { error: 'Not authenticated' },
  18:         { status: 401 }
  19:       );
  20:     }
  21: 
  22:     // Verify token
  23:     const { payload } = await jwtVerify(token, JWT_SECRET);
  24: 
  25:     const client = await clientPromise;
  26:     const db = client.db('lumivora');
  27: 
  28:     // Get user data
  29:     const user = await db.collection('users').findOne(
  30:       { _id: new ObjectId(payload.userId) },
  31:       { projection: { password: 0 } } // Exclude password
  32:     );
  33: 
  34:     if (!user) {
  35:       return NextResponse.json(
  36:         { error: 'User not found' },
  37:         { status: 404 }
  38:       );
  39:     }
  40: 
  41:     return NextResponse.json({
  42:       user: {
  43:         id: user._id.toString(),
  44:         name: user.name,
  45:         email: user.email,
  46:         wishlist: user.wishlist || [],
  47:         orders: user.orders || []
  48:       }
  49:     });
  50: 
  51:   } catch (error) {
  52:     console.error('Auth verification error:', error);
  53:     return NextResponse.json(
  54:       { error: 'Authentication failed' },
  55:       { status: 401 }
  56:     );
  57:   }
  58: }
```

---

##### 📁 register

**Path:** `app/api/auth/register`


###### 📄 route.js

**Path:** `app/api/auth/register/route.js`

```js
   1: // app/api/auth/register/route.js
   2: import { NextResponse } from 'next/server';
   3: import clientPromise from '@/lib/mongodb';
   4: import bcrypt from 'bcryptjs';
   5: 
   6: export async function POST(request) {
   7:   try {
   8:     const { name, email, password } = await request.json();
   9: 
  10:     // Validation
  11:     if (!name || !email || !password) {
  12:       return NextResponse.json(
  13:         { error: 'All fields are required' },
  14:         { status: 400 }
  15:       );
  16:     }
  17: 
  18:     if (password.length < 6) {
  19:       return NextResponse.json(
  20:         { error: 'Password must be at least 6 characters' },
  21:         { status: 400 }
  22:       );
  23:     }
  24: 
  25:     const client = await clientPromise;
  26:     const db = client.db('lumivora');
  27: 
  28:     // Check if user already exists
  29:     const existingUser = await db.collection('users').findOne({ email });
  30:     if (existingUser) {
  31:       return NextResponse.json(
  32:         { error: 'Email already registered' },
  33:         { status: 400 }
  34:       );
  35:     }
  36: 
  37:     // Hash password
  38:     const hashedPassword = await bcrypt.hash(password, 10);
  39: 
  40:     // Create user
  41:     const result = await db.collection('users').insertOne({
  42:       name,
  43:       email,
  44:       password: hashedPassword,
  45:       createdAt: new Date(),
  46:       wishlist: [],
  47:       orders: []
  48:     });
  49: 
  50:     return NextResponse.json({
  51:       message: 'User created successfully',
  52:       userId: result.insertedId
  53:     }, { status: 201 });
  54: 
  55:   } catch (error) {
  56:     console.error('Registration error:', error);
  57:     return NextResponse.json(
  58:       { error: 'Registration failed' },
  59:       { status: 500 }
  60:     );
  61:   }
  62: }
```

---

#### 📁 orders

**Path:** `app/api/orders`


##### 📁 [id]

**Path:** `app/api/orders/[id]`


###### 📄 route.js

**Path:** `app/api/orders/[id]/route.js`

```js
   1: import { NextResponse } from 'next/server';
   2: import { jwtVerify } from 'jose';
   3: import clientPromise from '@/lib/mongodb';
   4: import { ObjectId } from 'mongodb';
   5: 
   6: const JWT_SECRET = new TextEncoder().encode(
   7:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   8: );
   9: 
  10: async function verifyUser(request) {
  11:   try {
  12:     const token = request.cookies.get('token')?.value;
  13:     if (!token) return null;
  14:     const { payload } = await jwtVerify(token, JWT_SECRET);
  15:     return payload;
  16:   } catch (error) {
  17:     return null;
  18:   }
  19: }
  20: 
  21: // GET - Get single order by ID
  22: export async function GET(request, { params }) {
  23:   try {
  24:     const user = await verifyUser(request);
  25:     
  26:     if (!user) {
  27:       return NextResponse.json(
  28:         { error: 'Please login to view order' },
  29:         { status: 401 }
  30:       );
  31:     }
  32:     
  33:     const { id } = params;
  34:     
  35:     const client = await clientPromise;
  36:     const db = client.db('lumivora');
  37:     
  38:     const order = await db.collection('orders').findOne({
  39:       _id: new ObjectId(id),
  40:       userId: new ObjectId(user.userId)
  41:     });
  42:     
  43:     if (!order) {
  44:       return NextResponse.json(
  45:         { error: 'Order not found' },
  46:         { status: 404 }
  47:       );
  48:     }
  49:     
  50:     return NextResponse.json({ order });
  51:     
  52:   } catch (error) {
  53:     console.error('Error fetching order:', error);
  54:     return NextResponse.json(
  55:       { error: 'Failed to fetch order' },
  56:       { status: 500 }
  57:     );
  58:   }
  59: }
```

---

##### 📄 route.js

**Path:** `app/api/orders/route.js`

```js
   1: import { NextResponse } from 'next/server';
   2: import { jwtVerify } from 'jose';
   3: import clientPromise from '@/lib/mongodb';
   4: import { ObjectId } from 'mongodb';
   5: 
   6: const JWT_SECRET = new TextEncoder().encode(
   7:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   8: );
   9: 
  10: async function verifyUser(request) {
  11:   try {
  12:     const token = request.cookies.get('token')?.value;
  13:     if (!token) return null;
  14:     const { payload } = await jwtVerify(token, JWT_SECRET);
  15:     return payload;
  16:   } catch (error) {
  17:     return null;
  18:   }
  19: }
  20: 
  21: // POST - Create new order
  22: export async function POST(request) {
  23:   try {
  24:     const user = await verifyUser(request);
  25:     
  26:     if (!user) {
  27:       return NextResponse.json(
  28:         { error: 'Please login to place an order', requireAuth: true },
  29:         { status: 401 }
  30:       );
  31:     }
  32:     
  33:     const body = await request.json();
  34:     const {
  35:       items,
  36:       shippingAddress,
  37:       paymentMethod,
  38:       paymentStatus,
  39:       paymentId,
  40:       total,
  41:       estimatedDelivery
  42:     } = body;
  43:     
  44:     // Validation
  45:     if (!items || items.length === 0) {
  46:       return NextResponse.json(
  47:         { error: 'No items in order' },
  48:         { status: 400 }
  49:       );
  50:     }
  51:     
  52:     if (!shippingAddress) {
  53:       return NextResponse.json(
  54:         { error: 'Shipping address is required' },
  55:         { status: 400 }
  56:       );
  57:     }
  58:     
  59:     if (!paymentMethod || !['cod', 'online'].includes(paymentMethod)) {
  60:       return NextResponse.json(
  61:         { error: 'Invalid payment method' },
  62:         { status: 400 }
  63:       );
  64:     }
  65:     
  66:     const client = await clientPromise;
  67:     const db = client.db('lumivora');
  68:     
  69:     // Verify products exist and have sufficient stock
  70:     const productIds = items.map(item => new ObjectId(item.productId));
  71:     const products = await db.collection('products')
  72:       .find({ _id: { $in: productIds } })
  73:       .toArray();
  74:     
  75:     // Check stock availability
  76:     for (const item of items) {
  77:       const product = products.find(p => p._id.toString() === item.productId);
  78:       if (!product) {
  79:         return NextResponse.json(
  80:           { error: `Product not found: ${item.productId}` },
  81:           { status: 404 }
  82:         );
  83:       }
  84:       if (product.stock < item.quantity) {
  85:         return NextResponse.json(
  86:           { error: `Insufficient stock for ${product.name}` },
  87:           { status: 400 }
  88:         );
  89:       }
  90:     }
  91:     
  92:     // Create order
  93:     const order = {
  94:       userId: new ObjectId(user.userId),
  95:       userName: user.name,
  96:       userEmail: user.email,
  97:       items: items.map(item => ({
  98:         productId: new ObjectId(item.productId),
  99:         productName: item.productName,
 100:         quantity: item.quantity,
 101:         price: item.price
 102:       })),
 103:       total: parseFloat(total),
 104:       shippingAddress,
 105:       paymentMethod, // 'cod' or 'online'
 106:       paymentStatus: paymentStatus || 'pending', // 'pending', 'paid', 'failed'
 107:       paymentId: paymentId || null, // Razorpay payment ID if online payment
 108:       status: 'pending', // Order status: 'pending', 'processing', 'shipped', 'delivered', 'cancelled'
 109:       estimatedDelivery: estimatedDelivery || {
 110:         min: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
 111:         max: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
 112:         text: '5-7 business days'
 113:       },
 114:       createdAt: new Date(),
 115:       updatedAt: new Date()
 116:     };
 117:     
 118:     const result = await db.collection('orders').insertOne(order);
 119:     
 120:     // Update product stock
 121:     for (const item of items) {
 122:       await db.collection('products').updateOne(
 123:         { _id: new ObjectId(item.productId) },
 124:         { $inc: { stock: -item.quantity } }
 125:       );
 126:     }
 127:     
 128:     // Update user's orders
 129:     await db.collection('users').updateOne(
 130:       { _id: new ObjectId(user.userId) },
 131:       { $push: { orders: result.insertedId } }
 132:     );
 133:     
 134:     return NextResponse.json(
 135:       {
 136:         message: 'Order placed successfully',
 137:         orderId: result.insertedId.toString()
 138:       },
 139:       { status: 201 }
 140:     );
 141:     
 142:   } catch (error) {
 143:     console.error('Error creating order:', error);
 144:     return NextResponse.json(
 145:       { error: 'Failed to create order' },
 146:       { status: 500 }
 147:     );
 148:   }
 149: }
 150: 
 151: // GET - Get user's orders
 152: export async function GET(request) {
 153:   try {
 154:     const user = await verifyUser(request);
 155:     
 156:     if (!user) {
 157:       return NextResponse.json(
 158:         { error: 'Please login to view orders' },
 159:         { status: 401 }
 160:       );
 161:     }
 162:     
 163:     const client = await clientPromise;
 164:     const db = client.db('lumivora');
 165:     
 166:     const orders = await db.collection('orders')
 167:       .find({ userId: new ObjectId(user.userId) })
 168:       .sort({ createdAt: -1 })
 169:       .toArray();
 170:     
 171:     return NextResponse.json({ orders });
 172:     
 173:   } catch (error) {
 174:     console.error('Error fetching orders:', error);
 175:     return NextResponse.json(
 176:       { error: 'Failed to fetch orders' },
 177:       { status: 500 }
 178:     );
 179:   }
 180: }
```

---

#### 📁 products

**Path:** `app/api/products`


##### 📁 [id]

**Path:** `app/api/products/[id]`


###### 📄 route.js

**Path:** `app/api/products/[id]/route.js`

```js
   1: // app/api/products/[id]/route.js
   2: import { NextResponse } from 'next/server';
   3: import clientPromise from '@/lib/mongodb';
   4: import { ObjectId } from 'mongodb';
   5: 
   6: export async function GET(request, { params }) {
   7:   try {
   8:     // Await params in Next.js 15+
   9:     const resolvedParams = await params;
  10:     const { id } = resolvedParams;
  11: 
  12:     const client = await clientPromise;
  13:     const db = client.db('lumivora');
  14:     
  15:     const product = await db.collection('products')
  16:       .findOne({ _id: new ObjectId(id) });
  17: 
  18:     if (!product) {
  19:       return NextResponse.json(
  20:         { error: 'Product not found' },
  21:         { status: 404 }
  22:       );
  23:     }
  24: 
  25:     // **FIX: Serialize MongoDB document properly**
  26:     const serializedProduct = {
  27:       _id: product._id.toString(),
  28:       id: product._id.toString(),
  29:       name: product.name,
  30:       description: product.description,
  31:       price: product.price,
  32:       category: product.category,
  33:       stock: product.stock,
  34:       imageUrl: product.imageUrl || '',
  35:       createdAt: product.createdAt,
  36:       updatedAt: product.updatedAt
  37:     };
  38: 
  39:     return NextResponse.json({ product: serializedProduct });
  40:   } catch (error) {
  41:     console.error('Error fetching product:', error);
  42:     return NextResponse.json(
  43:       { error: 'Failed to fetch product' },
  44:       { status: 500 }
  45:     );
  46:   }
  47: }
```

---

##### 📁 by-slug

**Path:** `app/api/products/by-slug`


###### 📁 [slug]

**Path:** `app/api/products/by-slug/[slug]`


####### 📄 route.js

**Path:** `app/api/products/by-slug/[slug]/route.js`

```js
   1: import { NextResponse } from 'next/server'
   2: import clientPromise from '@/lib/mongodb'
   3: 
   4: function slugify(text) {
   5:   if (!text) return ''
   6:   return text
   7:     .toString()
   8:     .trim()
   9:     .toLowerCase()
  10:     .replace(/[^ws-]/g, '')
  11:     .replace(/s+/g, '-')
  12:     .replace(/-+/g, '-')
  13:     .replace(/^-+|-+$/g, '')
  14: }
  15: 
  16: export async function GET(request, { params }) {
  17:   try {
  18:     // Await the params promise in Next.js 15+
  19:     const resolvedParams = await params;
  20:     const slug = resolvedParams.slug;
  21:     
  22:     const client = await clientPromise;
  23:     const db = client.db('lumivora');
  24:     
  25:     // Get all products and find the one with matching slug
  26:     const products = await db.collection('products').find({}).toArray();
  27:     
  28:     const product = products.find(p => slugify(p.name) === slug);
  29:     
  30:     if (!product) {
  31:       // Return available slugs for debugging
  32:       const availableSlugs = products.map(p => slugify(p.name));
  33:       
  34:       return NextResponse.json(
  35:         { 
  36:           error: 'Product not found',
  37:           availableSlugs 
  38:         },
  39:         { status: 404 }
  40:       );
  41:     }
  42: 
  43:     return NextResponse.json({ product });
  44:   } catch (error) {
  45:     console.error('Error fetching product by slug:', error);
  46:     return NextResponse.json(
  47:       { error: 'Failed to fetch product' },
  48:       { status: 500 }
  49:     );
  50:   }
  51: }
```

---

##### 📄 route.js

**Path:** `app/api/products/route.js`

```js
   1: // app/api/products/route.js - Public product listing
   2: import { NextResponse } from 'next/server';
   3: import clientPromise from '@/lib/mongodb';
   4: 
   5: export async function GET(request) {
   6:   try {
   7:     const { searchParams } = new URL(request.url);
   8:     const category = searchParams.get('category');
   9: 
  10:     const client = await clientPromise;
  11:     const db = client.db('lumivora');
  12:     
  13:     const filter = category ? { category } : {};
  14:     
  15:     const products = await db.collection('products')
  16:       .find(filter)
  17:       .sort({ createdAt: -1 })
  18:       .toArray();
  19: 
  20:     // **FIX: Serialize all products**
  21:     const serializedProducts = products.map(product => ({
  22:       _id: product._id.toString(),
  23:       id: product._id.toString(),
  24:       name: product.name,
  25:       description: product.description,
  26:       price: product.price,
  27:       category: product.category,
  28:       stock: product.stock,
  29:       imageUrl: product.imageUrl || '',
  30:       createdAt: product.createdAt,
  31:       updatedAt: product.updatedAt
  32:     }));
  33: 
  34:     return NextResponse.json({ products: serializedProducts });
  35:   } catch (error) {
  36:     console.error('Error fetching products:', error);
  37:     return NextResponse.json(
  38:       { error: 'Failed to fetch products' },
  39:       { status: 500 }
  40:     );
  41:   }
  42: }
```

---

#### 📁 testimonials

**Path:** `app/api/testimonials`


##### 📄 route.js

**Path:** `app/api/testimonials/route.js`

```js
   1: // app/api/testimonials/route.js - Public testimonials
   2: import { NextResponse } from 'next/server';
   3: import clientPromise from '@/lib/mongodb';
   4: 
   5: export async function GET(request) {
   6:   try {
   7:     const client = await clientPromise;
   8:     const db = client.db('lumivora');
   9:     
  10:     const testimonials = await db.collection('testimonials')
  11:       .find({})
  12:       .sort({ createdAt: -1 })
  13:       .limit(10)
  14:       .toArray();
  15: 
  16:     return NextResponse.json({ testimonials });
  17:   } catch (error) {
  18:     console.error('Error fetching testimonials:', error);
  19:     return NextResponse.json(
  20:       { error: 'Failed to fetch testimonials' },
  21:       { status: 500 }
  22:     );
  23:   }
  24: }
```

---

#### 📁 wishlist

**Path:** `app/api/wishlist`


##### 📄 route.js

**Path:** `app/api/wishlist/route.js`

```js
   1: // app/api/wishlist/route.js
   2: import { NextResponse } from 'next/server';
   3: import { jwtVerify } from 'jose';
   4: import clientPromise from '@/lib/mongodb';
   5: import { ObjectId } from 'mongodb';
   6: 
   7: const JWT_SECRET = new TextEncoder().encode(
   8:   process.env.JWT_SECRET || 'your-secret-key-change-this'
   9: );
  10: 
  11: async function verifyUser(request) {
  12:   try {
  13:     const token = request.cookies.get('token')?.value;
  14:     if (!token) return null;
  15:     const { payload } = await jwtVerify(token, JWT_SECRET);
  16:     return payload;
  17:   } catch (error) {
  18:     return null;
  19:   }
  20: }
  21: 
  22: // GET - Get user's wishlist
  23: export async function GET(request) {
  24:   try {
  25:     const user = await verifyUser(request);
  26:     
  27:     if (!user) {
  28:       return NextResponse.json(
  29:         { error: 'Please login to view wishlist' },
  30:         { status: 401 }
  31:       );
  32:     }
  33: 
  34:     const client = await clientPromise;
  35:     const db = client.db('lumivora');
  36: 
  37:     // Get user with wishlist
  38:     const userData = await db.collection('users').findOne(
  39:       { _id: new ObjectId(user.userId) },
  40:       { projection: { wishlist: 1 } }
  41:     );
  42: 
  43:     const wishlistIds = userData?.wishlist || [];
  44: 
  45:     // Get full product details for wishlist items
  46:     const wishlist = await db.collection('products')
  47:       .find({ _id: { $in: wishlistIds.map(id => new ObjectId(id)) } })
  48:       .toArray();
  49: 
  50:     return NextResponse.json({ wishlist });
  51: 
  52:   } catch (error) {
  53:     console.error('Error fetching wishlist:', error);
  54:     return NextResponse.json(
  55:       { error: 'Failed to fetch wishlist' },
  56:       { status: 500 }
  57:     );
  58:   }
  59: }
  60: 
  61: // POST - Add to wishlist
  62: export async function POST(request) {
  63:   try {
  64:     const user = await verifyUser(request);
  65:     
  66:     if (!user) {
  67:       return NextResponse.json(
  68:         { error: 'Please login to add to wishlist' },
  69:         { status: 401 }
  70:       );
  71:     }
  72: 
  73:     const { productId } = await request.json();
  74: 
  75:     if (!productId) {
  76:       return NextResponse.json(
  77:         { error: 'Product ID is required' },
  78:         { status: 400 }
  79:       );
  80:     }
  81: 
  82:     const client = await clientPromise;
  83:     const db = client.db('lumivora');
  84: 
  85:     // Check if product exists
  86:     const product = await db.collection('products').findOne({
  87:       _id: new ObjectId(productId)
  88:     });
  89: 
  90:     if (!product) {
  91:       return NextResponse.json(
  92:         { error: 'Product not found' },
  93:         { status: 404 }
  94:       );
  95:     }
  96: 
  97:     // Add to wishlist (using $addToSet to avoid duplicates)
  98:     await db.collection('users').updateOne(
  99:       { _id: new ObjectId(user.userId) },
 100:       { $addToSet: { wishlist: new ObjectId(productId) } }
 101:     );
 102: 
 103:     return NextResponse.json({
 104:       message: 'Added to wishlist',
 105:       productId
 106:     });
 107: 
 108:   } catch (error) {
 109:     console.error('Error adding to wishlist:', error);
 110:     return NextResponse.json(
 111:       { error: 'Failed to add to wishlist' },
 112:       { status: 500 }
 113:     );
 114:   }
 115: }
 116: 
 117: // DELETE - Remove from wishlist
 118: export async function DELETE(request) {
 119:   try {
 120:     const user = await verifyUser(request);
 121:     
 122:     if (!user) {
 123:       return NextResponse.json(
 124:         { error: 'Please login to modify wishlist' },
 125:         { status: 401 }
 126:       );
 127:     }
 128: 
 129:     const { productId } = await request.json();
 130: 
 131:     if (!productId) {
 132:       return NextResponse.json(
 133:         { error: 'Product ID is required' },
 134:         { status: 400 }
 135:       );
 136:     }
 137: 
 138:     const client = await clientPromise;
 139:     const db = client.db('lumivora');
 140: 
 141:     // Remove from wishlist
 142:     await db.collection('users').updateOne(
 143:       { _id: new ObjectId(user.userId) },
 144:       { $pull: { wishlist: new ObjectId(productId) } }
 145:     );
 146: 
 147:     return NextResponse.json({
 148:       message: 'Removed from wishlist',
 149:       productId
 150:     });
 151: 
 152:   } catch (error) {
 153:     console.error('Error removing from wishlist:', error);
 154:     return NextResponse.json(
 155:       { error: 'Failed to remove from wishlist' },
 156:       { status: 500 }
 157:     );
 158:   }
 159: }
```

---

### 📁 checkout

**Path:** `app/checkout`


#### 📄 page.js

**Path:** `app/checkout/page.js`

```js
   1: // app/checkout/page.js
   2: 'use client';
   3: import { useState, useEffect } from 'react';
   4: import { useRouter, useSearchParams } from 'next/navigation';
   5: import { useAuth } from '@/context/AuthContext';
   6: import Header from '@/components/Header';
   7: import Footer from '@/components/Footer';
   8: 
   9: export default function Checkout() {
  10:   const router = useRouter();
  11:   const searchParams = useSearchParams();
  12:   const { user, loading: authLoading } = useAuth();
  13:   
  14:   const [product, setProduct] = useState(null);
  15:   const [loading, setLoading] = useState(true);
  16:   const [submitting, setSubmitting] = useState(false);
  17:   const [paymentMethod, setPaymentMethod] = useState('cod');
  18:   const [shippingAddress, setShippingAddress] = useState({
  19:     fullName: '',
  20:     phone: '',
  21:     address: '',
  22:     city: '',
  23:     state: '',
  24:     pincode: ''
  25:   });
  26: 
  27:   useEffect(() => {
  28:     if (!authLoading && !user) {
  29:       router.push('/login');
  30:     }
  31:   }, [user, authLoading, router]);
  32: 
  33:   useEffect(() => {
  34:     const productId = searchParams.get('productId');
  35:     if (productId) {
  36:       fetchProduct(productId);
  37:     } else {
  38:       router.push('/shop');
  39:     }
  40:   }, [searchParams]);
  41: 
  42:   const fetchProduct = async (id) => {
  43:     try {
  44:       const res = await fetch(`/api/products/${id}`);
  45:       if (res.ok) {
  46:         const data = await res.json();
  47:         setProduct(data.product);
  48:       } else {
  49:         router.push('/shop');
  50:       }
  51:     } catch (error) {
  52:       console.error('Error fetching product:', error);
  53:       router.push('/shop');
  54:     } finally {
  55:       setLoading(false);
  56:     }
  57:   };
  58: 
  59:   const handleInputChange = (e) => {
  60:     const { name, value } = e.target;
  61:     setShippingAddress(prev => ({
  62:       ...prev,
  63:       [name]: value
  64:     }));
  65:   };
  66: 
  67:   const validateForm = () => {
  68:     const required = ['fullName', 'phone', 'address', 'city', 'state', 'pincode'];
  69:     for (let field of required) {
  70:       if (!shippingAddress[field].trim()) {
  71:         alert(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
  72:         return false;
  73:       }
  74:     }
  75:     
  76:     if (!/^\d{10}$/.test(shippingAddress.phone)) {
  77:       alert('Please enter a valid 10-digit phone number');
  78:       return false;
  79:     }
  80:     
  81:     if (!/^\d{6}$/.test(shippingAddress.pincode)) {
  82:       alert('Please enter a valid 6-digit pincode');
  83:       return false;
  84:     }
  85:     
  86:     return true;
  87:   };
  88: 
  89:   const handlePlaceOrder = async (e) => {
  90:     e.preventDefault();
  91:     
  92:     if (!validateForm()) return;
  93:     
  94:     setSubmitting(true);
  95: 
  96:     try {
  97:       if (paymentMethod === 'online') {
  98:         // Razorpay integration
  99:         await handleRazorpayPayment();
 100:       } else {
 101:         // Cash on Delivery
 102:         await createOrder('cod', 'pending');
 103:       }
 104:     } catch (error) {
 105:       console.error('Order error:', error);
 106:       alert('Failed to place order. Please try again.');
 107:       setSubmitting(false);
 108:     }
 109:   };
 110: 
 111:   const handleRazorpayPayment = async () => {
 112:     // Load Razorpay script
 113:     const script = document.createElement('script');
 114:     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
 115:     script.async = true;
 116:     document.body.appendChild(script);
 117: 
 118:     script.onload = () => {
 119:       const options = {
 120:         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Add your Razorpay key
 121:         amount: product.price * 100, // Amount in paise
 122:         currency: 'INR',
 123:         name: 'Lumivora',
 124:         description: product.name,
 125:         image: '/logo.png', // Add your logo
 126:         handler: async function (response) {
 127:           // Payment successful
 128:           await createOrder('online', 'paid', response.razorpay_payment_id);
 129:         },
 130:         prefill: {
 131:           name: shippingAddress.fullName,
 132:           contact: shippingAddress.phone
 133:         },
 134:         theme: {
 135:           color: '#D4B57A'
 136:         },
 137:         modal: {
 138:           ondismiss: function() {
 139:             setSubmitting(false);
 140:           }
 141:         }
 142:       };
 143: 
 144:       const rzp = new window.Razorpay(options);
 145:       rzp.open();
 146:     };
 147:   };
 148: 
 149:   const createOrder = async (paymentType, paymentStatus, paymentId = null) => {
 150:     try {
 151:       const orderData = {
 152:         items: [{
 153:           productId: product._id,
 154:           productName: product.name,
 155:           quantity: 1,
 156:           price: product.price
 157:         }],
 158:         total: product.price,
 159:         shippingAddress,
 160:         paymentMethod: paymentType,
 161:         paymentStatus,
 162:         paymentId,
 163:         estimatedDelivery: getEstimatedDelivery()
 164:       };
 165: 
 166:       const res = await fetch('/api/orders', {
 167:         method: 'POST',
 168:         headers: { 'Content-Type': 'application/json' },
 169:         body: JSON.stringify(orderData)
 170:       });
 171: 
 172:       const data = await res.json();
 173: 
 174:       if (res.ok) {
 175:         router.push(`/order-success?orderId=${data.orderId}`);
 176:       } else {
 177:         throw new Error(data.error || 'Failed to create order');
 178:       }
 179:     } catch (error) {
 180:       throw error;
 181:     } finally {
 182:       setSubmitting(false);
 183:     }
 184:   };
 185: 
 186:   const getEstimatedDelivery = () => {
 187:     const today = new Date();
 188:     const minDays = 5;
 189:     const maxDays = 7;
 190:     
 191:     const minDate = new Date(today);
 192:     minDate.setDate(today.getDate() + minDays);
 193:     
 194:     const maxDate = new Date(today);
 195:     maxDate.setDate(today.getDate() + maxDays);
 196:     
 197:     return {
 198:       min: minDate.toISOString(),
 199:       max: maxDate.toISOString(),
 200:       text: `${minDays}-${maxDays} business days`
 201:     };
 202:   };
 203: 
 204:   if (authLoading || loading) {
 205:     return (
 206:       <>
 207:         <Header />
 208:         <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
 209:           <div className="loading-spinner">
 210:             <div className="spinner-circle"></div>
 211:             <p className="loading-text">Loading checkout...</p>
 212:           </div>
 213:         </main>
 214:         <Footer />
 215:       </>
 216:     );
 217:   }
 218: 
 219:   if (!user || !product) return null;
 220: 
 221:   return (
 222:     <>
 223:       <Header />
 224:       <main style={{ paddingTop: '80px', paddingBottom: '60px' }}>
 225:         <section className="section">
 226:           <div className="container">
 227:             <h1 style={{ fontSize: 'clamp(28px, 5vw, 36px)', marginBottom: '30px' }}>
 228:               Checkout
 229:             </h1>
 230: 
 231:             <div style={{
 232:               display: 'grid',
 233:               gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
 234:               gap: '30px'
 235:             }}>
 236:               {/* Shipping Form */}
 237:               <div>
 238:                 <div style={{
 239:                   backgroundColor: 'var(--pearl-white)',
 240:                   padding: '30px',
 241:                   borderRadius: '20px',
 242:                   boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)'
 243:                 }}>
 244:                   <h2 style={{ fontSize: '22px', marginBottom: '25px' }}>
 245:                     Shipping Address
 246:                   </h2>
 247: 
 248:                   <form onSubmit={handlePlaceOrder}>
 249:                     <div className="form-group">
 250:                       <label>Full Name *</label>
 251:                       <input
 252:                         type="text"
 253:                         name="fullName"
 254:                         value={shippingAddress.fullName}
 255:                         onChange={handleInputChange}
 256:                         required
 257:                         placeholder="Enter your full name"
 258:                       />
 259:                     </div>
 260: 
 261:                     <div className="form-group">
 262:                       <label>Phone Number *</label>
 263:                       <input
 264:                         type="tel"
 265:                         name="phone"
 266:                         value={shippingAddress.phone}
 267:                         onChange={handleInputChange}
 268:                         required
 269:                         placeholder="10-digit mobile number"
 270:                         maxLength="10"
 271:                       />
 272:                     </div>
 273: 
 274:                     <div className="form-group">
 275:                       <label>Address *</label>
 276:                       <textarea
 277:                         name="address"
 278:                         value={shippingAddress.address}
 279:                         onChange={handleInputChange}
 280:                         required
 281:                         rows="3"
 282:                         placeholder="House No., Building Name, Street"
 283:                       />
 284:                     </div>
 285: 
 286:                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
 287:                       <div className="form-group">
 288:                         <label>City *</label>
 289:                         <input
 290:                           type="text"
 291:                           name="city"
 292:                           value={shippingAddress.city}
 293:                           onChange={handleInputChange}
 294:                           required
 295:                         />
 296:                       </div>
 297: 
 298:                       <div className="form-group">
 299:                         <label>State *</label>
 300:                         <input
 301:                           type="text"
 302:                           name="state"
 303:                           value={shippingAddress.state}
 304:                           onChange={handleInputChange}
 305:                           required
 306:                         />
 307:                       </div>
 308:                     </div>
 309: 
 310:                     <div className="form-group">
 311:                       <label>Pincode *</label>
 312:                       <input
 313:                         type="text"
 314:                         name="pincode"
 315:                         value={shippingAddress.pincode}
 316:                         onChange={handleInputChange}
 317:                         required
 318:                         placeholder="6-digit pincode"
 319:                         maxLength="6"
 320:                       />
 321:                     </div>
 322: 
 323:                     {/* Payment Method */}
 324:                     <div style={{ marginTop: '30px' }}>
 325:                       <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>
 326:                         Payment Method
 327:                       </h3>
 328: 
 329:                       <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
 330:                         <label style={{
 331:                           display: 'flex',
 332:                           alignItems: 'center',
 333:                           gap: '12px',
 334:                           padding: '15px',
 335:                           backgroundColor: paymentMethod === 'cod' ? 'var(--light-beige)' : 'var(--warm-cream)',
 336:                           borderRadius: '12px',
 337:                           cursor: 'pointer',
 338:                           border: `2px solid ${paymentMethod === 'cod' ? 'var(--soft-gold)' : 'transparent'}`,
 339:                           transition: 'all 0.3s'
 340:                         }}>
 341:                           <input
 342:                             type="radio"
 343:                             name="paymentMethod"
 344:                             value="cod"
 345:                             checked={paymentMethod === 'cod'}
 346:                             onChange={(e) => setPaymentMethod(e.target.value)}
 347:                             style={{ width: '20px', height: '20px' }}
 348:                           />
 349:                           <div>
 350:                             <div style={{ fontWeight: '600', marginBottom: '3px' }}>
 351:                               Cash on Delivery
 352:                             </div>
 353:                             <div style={{ fontSize: '13px', color: 'var(--soft-taupe)' }}>
 354:                               Pay when you receive the product
 355:                             </div>
 356:                           </div>
 357:                         </label>
 358: 
 359:                         <label style={{
 360:                           display: 'flex',
 361:                           alignItems: 'center',
 362:                           gap: '12px',
 363:                           padding: '15px',
 364:                           backgroundColor: paymentMethod === 'online' ? 'var(--light-beige)' : 'var(--warm-cream)',
 365:                           borderRadius: '12px',
 366:                           cursor: 'pointer',
 367:                           border: `2px solid ${paymentMethod === 'online' ? 'var(--soft-gold)' : 'transparent'}`,
 368:                           transition: 'all 0.3s'
 369:                         }}>
 370:                           <input
 371:                             type="radio"
 372:                             name="paymentMethod"
 373:                             value="online"
 374:                             checked={paymentMethod === 'online'}
 375:                             onChange={(e) => setPaymentMethod(e.target.value)}
 376:                             style={{ width: '20px', height: '20px' }}
 377:                           />
 378:                           <div>
 379:                             <div style={{ fontWeight: '600', marginBottom: '3px' }}>
 380:                               Pay Online (Razorpay)
 381:                             </div>
 382:                             <div style={{ fontSize: '13px', color: 'var(--soft-taupe)' }}>
 383:                               UPI, Cards, Netbanking
 384:                             </div>
 385:                           </div>
 386:                         </label>
 387:                       </div>
 388:                     </div>
 389: 
 390:                     <button
 391:                       type="submit"
 392:                       className="btn btn-primary-large"
 393:                       disabled={submitting}
 394:                       style={{ width: '100%', marginTop: '30px' }}
 395:                     >
 396:                       {submitting ? 'Processing...' : paymentMethod === 'cod' ? 'Place Order' : 'Proceed to Pay'}
 397:                     </button>
 398:                   </form>
 399:                 </div>
 400:               </div>
 401: 
 402:               {/* Order Summary */}
 403:               <div>
 404:                 <div style={{
 405:                   backgroundColor: 'var(--pearl-white)',
 406:                   padding: '30px',
 407:                   borderRadius: '20px',
 408:                   boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
 409:                   position: 'sticky',
 410:                   top: '100px'
 411:                 }}>
 412:                   <h2 style={{ fontSize: '22px', marginBottom: '25px' }}>
 413:                     Order Summary
 414:                   </h2>
 415: 
 416:                   <div style={{
 417:                     display: 'flex',
 418:                     gap: '15px',
 419:                     paddingBottom: '20px',
 420:                     borderBottom: '2px solid var(--light-beige)',
 421:                     marginBottom: '20px'
 422:                   }}>
 423:                     <div style={{
 424:                       width: '100px',
 425:                       height: '100px',
 426:                       backgroundColor: 'var(--warm-cream)',
 427:                       borderRadius: '12px',
 428:                       display: 'flex',
 429:                       alignItems: 'center',
 430:                       justifyContent: 'center',
 431:                       flexShrink: 0
 432:                     }}>
 433:                       {product.imageUrl ? (
 434:                         <img 
 435:                           src={product.imageUrl} 
 436:                           alt={product.name}
 437:                           style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
 438:                         />
 439:                       ) : (
 440:                         <i className="lni lni-package" style={{ fontSize: '40px', color: 'var(--soft-gold)' }}></i>
 441:                       )}
 442:                     </div>
 443:                     <div style={{ flex: 1 }}>
 444:                       <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>
 445:                         {product.name}
 446:                       </h3>
 447:                       <div style={{ 
 448:                         fontSize: '20px', 
 449:                         fontWeight: '700', 
 450:                         color: 'var(--soft-gold)' 
 451:                       }}>
 452:                         ₹{product.price}
 453:                       </div>
 454:                     </div>
 455:                   </div>
 456: 
 457:                   <div style={{ marginBottom: '20px' }}>
 458:                     <div style={{
 459:                       display: 'flex',
 460:                       justifyContent: 'space-between',
 461:                       marginBottom: '12px',
 462:                       fontSize: '15px'
 463:                     }}>
 464:                       <span style={{ color: 'var(--soft-taupe)' }}>Subtotal</span>
 465:                       <span style={{ fontWeight: '600' }}>₹{product.price}</span>
 466:                     </div>
 467:                     <div style={{
 468:                       display: 'flex',
 469:                       justifyContent: 'space-between',
 470:                       marginBottom: '12px',
 471:                       fontSize: '15px'
 472:                     }}>
 473:                       <span style={{ color: 'var(--soft-taupe)' }}>Shipping</span>
 474:                       <span style={{ fontWeight: '600', color: 'var(--soft-gold)' }}>FREE</span>
 475:                     </div>
 476:                     <div style={{
 477:                       paddingTop: '20px',
 478:                       borderTop: '2px solid var(--light-beige)',
 479:                       display: 'flex',
 480:                       justifyContent: 'space-between',
 481:                       fontSize: '18px',
 482:                       fontWeight: '700'
 483:                     }}>
 484:                       <span>Total</span>
 485:                       <span style={{ color: 'var(--soft-gold)' }}>₹{product.price}</span>
 486:                     </div>
 487:                   </div>
 488: 
 489:                   {/* Delivery Estimate */}
 490:                   <div style={{
 491:                     backgroundColor: 'var(--light-beige)',
 492:                     padding: '20px',
 493:                     borderRadius: '12px',
 494:                     marginTop: '20px'
 495:                   }}>
 496:                     <div style={{
 497:                       display: 'flex',
 498:                       alignItems: 'center',
 499:                       gap: '12px',
 500:                       marginBottom: '10px'
 501:                     }}>
 502:                       <i className="lni lni-delivery" style={{ 
 503:                         fontSize: '28px', 
 504:                         color: 'var(--soft-gold)' 
 505:                       }}></i>
 506:                       <div>
 507:                         <div style={{ fontWeight: '600', fontSize: '15px' }}>
 508:                           Estimated Delivery
 509:                         </div>
 510:                         <div style={{ fontSize: '14px', color: 'var(--soft-taupe)' }}>
 511:                           {getEstimatedDelivery().text}
 512:                         </div>
 513:                       </div>
 514:                     </div>
 515:                   </div>
 516: 
 517:                   {/* Security Badge */}
 518:                   <div style={{
 519:                     display: 'flex',
 520:                     alignItems: 'center',
 521:                     gap: '10px',
 522:                     marginTop: '20px',
 523:                     padding: '15px',
 524:                     backgroundColor: '#e8f5e9',
 525:                     borderRadius: '12px'
 526:                   }}>
 527:                     <i className="lni lni-lock" style={{ fontSize: '20px', color: '#4caf50' }}></i>
 528:                     <span style={{ fontSize: '13px', color: '#2e7d32' }}>
 529:                       Secure checkout - Your information is protected
 530:                     </span>
 531:                   </div>
 532:                 </div>
 533:               </div>
 534:             </div>
 535:           </div>
 536:         </section>
 537:       </main>
 538:       <Footer />
 539:     </>
 540:   );
 541: }
```

---

### 📁 contact

**Path:** `app/contact`


#### 📄 page.js

**Path:** `app/contact/page.js`

```js
   1: // app/contact/page.js
   2: import Header from '../../components/Header';
   3: import Footer from '../../components/Footer';
   4: 
   5: export default function Contact() {
   6:   return (
   7:     <>
   8:       <Header />
   9:       <main>
  10:         <section className="hero" style={{padding: '80px 0'}}>
  11:           <div className="container">
  12:             <div className="hero-content">
  13:               <h1>Get in Touch</h1>
  14:               <p>Connect with us on social media</p>
  15:             </div>
  16:           </div>
  17:         </section>
  18: 
  19:         <section className="section">
  20:           <div className="container">
  21:             <div className="brand-content">
  22:               <div className="brand-text" style={{maxWidth: '800px', margin: '0 auto'}}>
  23:                 
  24:                 <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Connect With Lumivora</h2>
  25:                 <p style={{textAlign: 'center', marginBottom: '40px'}}>
  26:                   We'd love to hear from you! Follow us on social media for the latest updates, 
  27:                   beauty tips, product launches, and exclusive offers.
  28:                 </p>
  29: 
  30:                 {/* Social Media Cards */}
  31:                 <div style={{
  32:                   display: 'grid',
  33:                   gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  34:                   gap: '30px',
  35:                   marginBottom: '50px'
  36:                 }}>
  37:                   
  38:                   {/* Instagram */}
  39:                   <a 
  40:                     href="https://instagram.com/lumivora" 
  41:                     target="_blank" 
  42:                     rel="noopener noreferrer"
  43:                     style={{
  44:                       textDecoration: 'none',
  45:                       backgroundColor: 'var(--pearl-white)',
  46:                       padding: '30px',
  47:                       borderRadius: '20px',
  48:                       boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
  49:                       transition: 'all 0.3s ease',
  50:                       display: 'flex',
  51:                       flexDirection: 'column',
  52:                       alignItems: 'center',
  53:                       textAlign: 'center'
  54:                     }}
  55:                     className="benefit-card"
  56:                   >
  57:                     <div style={{
  58:                       width: '80px',
  59:                       height: '80px',
  60:                       background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
  61:                       borderRadius: '50%',
  62:                       display: 'flex',
  63:                       alignItems: 'center',
  64:                       justifyContent: 'center',
  65:                       marginBottom: '20px'
  66:                     }}>
  67:                       <i className="lni lni-instagram-original" style={{fontSize: '36px', color: 'white'}}></i>
  68:                     </div>
  69:                     <h3 style={{fontSize: '22px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>Instagram</h3>
  70:                     <p style={{color: 'var(--soft-taupe)', fontSize: '14px', marginBottom: '15px'}}>
  71:                       Follow us for daily beauty tips and behind-the-scenes content
  72:                     </p>
  73:                     <span style={{
  74:                       color: '#e4405f',
  75:                       fontWeight: '600',
  76:                       display: 'flex',
  77:                       alignItems: 'center',
  78:                       gap: '8px'
  79:                     }}>
  80:                       @lumivora <i className="lni lni-arrow-right"></i>
  81:                     </span>
  82:                   </a>
  83: 
  84:                   {/* Facebook */}
  85:                   <a 
  86:                     href="https://facebook.com/lumivora" 
  87:                     target="_blank" 
  88:                     rel="noopener noreferrer"
  89:                     style={{
  90:                       textDecoration: 'none',
  91:                       backgroundColor: 'var(--pearl-white)',
  92:                       padding: '30px',
  93:                       borderRadius: '20px',
  94:                       boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
  95:                       transition: 'all 0.3s ease',
  96:                       display: 'flex',
  97:                       flexDirection: 'column',
  98:                       alignItems: 'center',
  99:                       textAlign: 'center'
 100:                     }}
 101:                     className="benefit-card"
 102:                   >
 103:                     <div style={{
 104:                       width: '80px',
 105:                       height: '80px',
 106:                       backgroundColor: '#1877f2',
 107:                       borderRadius: '50%',
 108:                       display: 'flex',
 109:                       alignItems: 'center',
 110:                       justifyContent: 'center',
 111:                       marginBottom: '20px'
 112:                     }}>
 113:                       <i className="lni lni-facebook-filled" style={{fontSize: '36px', color: 'white'}}></i>
 114:                     </div>
 115:                     <h3 style={{fontSize: '22px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>Facebook</h3>
 116:                     <p style={{color: 'var(--soft-taupe)', fontSize: '14px', marginBottom: '15px'}}>
 117:                       Join our community and stay updated with our latest news
 118:                     </p>
 119:                     <span style={{
 120:                       color: '#1877f2',
 121:                       fontWeight: '600',
 122:                       display: 'flex',
 123:                       alignItems: 'center',
 124:                       gap: '8px'
 125:                     }}>
 126:                       /lumivora <i className="lni lni-arrow-right"></i>
 127:                     </span>
 128:                   </a>
 129: 
 130:                   {/* Pinterest */}
 131:                   <a 
 132:                     href="https://pinterest.com/lumivora" 
 133:                     target="_blank" 
 134:                     rel="noopener noreferrer"
 135:                     style={{
 136:                       textDecoration: 'none',
 137:                       backgroundColor: 'var(--pearl-white)',
 138:                       padding: '30px',
 139:                       borderRadius: '20px',
 140:                       boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
 141:                       transition: 'all 0.3s ease',
 142:                       display: 'flex',
 143:                       flexDirection: 'column',
 144:                       alignItems: 'center',
 145:                       textAlign: 'center'
 146:                     }}
 147:                     className="benefit-card"
 148:                   >
 149:                     <div style={{
 150:                       width: '80px',
 151:                       height: '80px',
 152:                       backgroundColor: '#e60023',
 153:                       borderRadius: '50%',
 154:                       display: 'flex',
 155:                       alignItems: 'center',
 156:                       justifyContent: 'center',
 157:                       marginBottom: '20px'
 158:                     }}>
 159:                       <i className="lni lni-pinterest" style={{fontSize: '36px', color: 'white'}}></i>
 160:                     </div>
 161:                     <h3 style={{fontSize: '22px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>Pinterest</h3>
 162:                     <p style={{color: 'var(--soft-taupe)', fontSize: '14px', marginBottom: '15px'}}>
 163:                       Discover beauty inspiration and styling ideas
 164:                     </p>
 165:                     <span style={{
 166:                       color: '#e60023',
 167:                       fontWeight: '600',
 168:                       display: 'flex',
 169:                       alignItems: 'center',
 170:                       gap: '8px'
 171:                     }}>
 172:                       @lumivora <i className="lni lni-arrow-right"></i>
 173:                     </span>
 174:                   </a>
 175: 
 176:                 </div>
 177: 
 178:               </div>
 179:             </div>
 180:           </div>
 181:         </section>
 182:       </main>
 183:       <Footer />
 184:     </>
 185:   );
 186: }
```

---

### 📁 faq

**Path:** `app/faq`


#### 📄 page.js

**Path:** `app/faq/page.js`

```js
   1: // app/faq/page.js
   2: 'use client';
   3: import { useState } from 'react';
   4: import Header from '../../components/Header';
   5: import Footer from '../../components/Footer';
   6: 
   7: export default function FAQ() {
   8:   const [openIndex, setOpenIndex] = useState(null);
   9: 
  10:   const faqs = [
  11:     {
  12:       category: "Orders & Shipping",
  13:       questions: [
  14:         {
  15:           q: "How long does shipping take?",
  16:           a: "We offer standard shipping (5-7 business days). All orders are processed within 1-2 business days. You'll receive a tracking number once your order ships."
  17:         },
  18:         {
  19:           q: "Do you ship internationally?",
  20:           a: "Currently, we ship within the India. We're working on expanding our international shipping options. Follow us on social media for updates!"
  21:         }
  22:       ]
  23:     },
  24:     {
  25:       category: "Products",
  26:       questions: [
  27:         {
  28:           q: "How do I clean my beauty tools?",
  29:           a: "Most of our beauty tools can be cleaned with warm water and gentle soap. For stone tools like jade rollers, avoid soaking. Detailed care instructions are included with each product."
  30:         },
  31:         {
  32:           q: "Are your home gadgets energy efficient?",
  33:           a: "Yes! All our home gadgets are designed with energy efficiency in mind. They meet or exceed energy efficiency standards and are safe for extended use."
  34:         }
  35:       ]
  36:     },
  37:     {
  38:       category: "Payment & Security",
  39:       questions: [
  40:         {
  41:           q: "What payment methods do you accept?",
  42:           a: "We accept Phone Pe, Google Pay, and other major UPI payment methods. All transactions are encrypted and secure."
  43:         },
  44:         {
  45:           q: "Is my payment information secure?",
  46:           a: "Absolutely. We use industry-standard SSL encryption to protect your payment information. We never store your complete payment details on our servers."
  47:         },
  48:         {
  49:           q: "Can I change or cancel my order?",
  50:           a: "You can modify or cancel your order within 2 hours of placing it by contacting us through social media. After that, your order will be in processing."
  51:         }
  52:       ]
  53:     },
  54:     {
  55:       category: "Account & Support",
  56:       questions: [
  57:         {
  58:           q: "Do I need an account to place an order?",
  59:           a: "Yes, You will have to create the account to place an order, Creating account gives you access of tracking your order."
  60:         },
  61:         {
  62:           q: "How do I contact customer support?",
  63:           a: "You can reach us through our social media channels (Instagram, Facebook, Pinterest). We typically respond within 24 hours."
  64:         },
  65:         {
  66:           q: "Can I get product recommendations?",
  67:           a: "Of course! Message us on Instagram or Facebook with your skincare concerns or preferences, and we'll be happy to recommend products perfect for you."
  68:         }
  69:       ]
  70:     }
  71:   ];
  72: 
  73:   const toggleFAQ = (categoryIndex, questionIndex) => {
  74:     const index = `${categoryIndex}-${questionIndex}`;
  75:     setOpenIndex(openIndex === index ? null : index);
  76:   };
  77: 
  78:   return (
  79:     <>
  80:       <Header />
  81:       <main>
  82:         <section className="hero" style={{padding: '80px 0'}}>
  83:           <div className="container">
  84:             <div className="hero-content">
  85:               <h1>Frequently Asked Questions</h1>
  86:               <p>Find answers to common questions about our products and services</p>
  87:             </div>
  88:           </div>
  89:         </section>
  90: 
  91:         <section className="section">
  92:           <div className="container">
  93:             <div style={{maxWidth: '900px', margin: '0 auto'}}>
  94:               
  95:               {/* Quick Help Cards */}
  96:               <div style={{
  97:                 display: 'grid',
  98:                 gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  99:                 gap: '20px',
 100:                 marginBottom: '50px'
 101:               }}>
 102:                 <a href="/contact" style={{
 103:                   textDecoration: 'none',
 104:                   backgroundColor: 'var(--light-beige)',
 105:                   padding: '25px',
 106:                   borderRadius: '15px',
 107:                   textAlign: 'center',
 108:                   transition: 'all 0.3s ease'
 109:                 }} className="benefit-card">
 110:                   <i className="lni lni-comments" style={{fontSize: '36px', color: 'var(--soft-gold)', marginBottom: '15px'}}></i>
 111:                   <h3 style={{fontSize: '18px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>Contact Us</h3>
 112:                   <p style={{fontSize: '14px', color: 'var(--soft-taupe)', margin: 0}}>Connect via social media</p>
 113:                 </a>
 114: 
 115:                 <a href="/shop" style={{
 116:                   textDecoration: 'none',
 117:                   backgroundColor: 'var(--light-beige)',
 118:                   padding: '25px',
 119:                   borderRadius: '15px',
 120:                   textAlign: 'center',
 121:                   transition: 'all 0.3s ease'
 122:                 }} className="benefit-card">
 123:                   <i className="lni lni-shopping-basket" style={{fontSize: '36px', color: 'var(--soft-gold)', marginBottom: '15px'}}></i>
 124:                   <h3 style={{fontSize: '18px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>Shop Products</h3>
 125:                   <p style={{fontSize: '14px', color: 'var(--soft-taupe)', margin: 0}}>Browse our collection</p>
 126:                 </a>
 127: 
 128:                 <a href="/about" style={{
 129:                   textDecoration: 'none',
 130:                   backgroundColor: 'var(--light-beige)',
 131:                   padding: '25px',
 132:                   borderRadius: '15px',
 133:                   textAlign: 'center',
 134:                   transition: 'all 0.3s ease'
 135:                 }} className="benefit-card">
 136:                   <i className="lni lni-heart" style={{fontSize: '36px', color: 'var(--soft-gold)', marginBottom: '15px'}}></i>
 137:                   <h3 style={{fontSize: '18px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>About Us</h3>
 138:                   <p style={{fontSize: '14px', color: 'var(--soft-taupe)', margin: 0}}>Learn our story</p>
 139:                 </a>
 140:               </div>
 141: 
 142:               {/* FAQ Categories */}
 143:               {faqs.map((category, categoryIndex) => (
 144:                 <div key={categoryIndex} style={{marginBottom: '40px'}}>
 145:                   <h2 style={{
 146:                     fontSize: '28px',
 147:                     marginBottom: '25px',
 148:                     color: 'var(--charcoal-text)',
 149:                     paddingBottom: '15px',
 150:                     borderBottom: '2px solid var(--light-beige)'
 151:                   }}>
 152:                     {category.category}
 153:                   </h2>
 154: 
 155:                   <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
 156:                     {category.questions.map((faq, questionIndex) => {
 157:                       const index = `${categoryIndex}-${questionIndex}`;
 158:                       const isOpen = openIndex === index;
 159: 
 160:                       return (
 161:                         <div
 162:                           key={questionIndex}
 163:                           style={{
 164:                             backgroundColor: 'var(--pearl-white)',
 165:                             borderRadius: '12px',
 166:                             overflow: 'hidden',
 167:                             border: '1px solid var(--light-beige)',
 168:                             transition: 'all 0.3s ease'
 169:                           }}
 170:                         >
 171:                           <button
 172:                             onClick={() => toggleFAQ(categoryIndex, questionIndex)}
 173:                             style={{
 174:                               width: '100%',
 175:                               padding: '20px',
 176:                               backgroundColor: isOpen ? 'var(--light-beige)' : 'transparent',
 177:                               border: 'none',
 178:                               textAlign: 'left',
 179:                               cursor: 'pointer',
 180:                               display: 'flex',
 181:                               justifyContent: 'space-between',
 182:                               alignItems: 'center',
 183:                               transition: 'background-color 0.3s ease'
 184:                             }}
 185:                           >
 186:                             <span style={{
 187:                               fontSize: '16px',
 188:                               fontWeight: '600',
 189:                               color: 'var(--charcoal-text)',
 190:                               paddingRight: '20px'
 191:                             }}>
 192:                               {faq.q}
 193:                             </span>
 194:                             <i 
 195:                               className={`lni ${isOpen ? 'lni-chevron-up' : 'lni-chevron-down'}`}
 196:                               style={{
 197:                                 fontSize: '18px',
 198:                                 color: 'var(--soft-gold)',
 199:                                 transition: 'transform 0.3s ease'
 200:                               }}
 201:                             ></i>
 202:                           </button>
 203: 
 204:                           <div style={{
 205:                             maxHeight: isOpen ? '500px' : '0',
 206:                             overflow: 'hidden',
 207:                             transition: 'max-height 0.3s ease'
 208:                           }}>
 209:                             <div style={{
 210:                               padding: '0 20px 20px 20px',
 211:                               color: 'var(--soft-taupe)',
 212:                               fontSize: '15px',
 213:                               lineHeight: '1.6'
 214:                             }}>
 215:                               {faq.a}
 216:                             </div>
 217:                           </div>
 218:                         </div>
 219:                       );
 220:                     })}
 221:                   </div>
 222:                 </div>
 223:               ))}
 224: 
 225:               {/* Still Have Questions */}
 226:               <div style={{
 227:                 backgroundColor: 'var(--light-beige)',
 228:                 padding: '40px',
 229:                 borderRadius: '20px',
 230:                 textAlign: 'center',
 231:                 marginTop: '50px'
 232:               }}>
 233:                 <i className="lni lni-question-circle" style={{
 234:                   fontSize: '48px',
 235:                   color: 'var(--soft-gold)',
 236:                   marginBottom: '20px'
 237:                 }}></i>
 238:                 <h3 style={{fontSize: '24px', marginBottom: '15px'}}>Still Have Questions?</h3>
 239:                 <p style={{color: 'var(--soft-taupe)', marginBottom: '25px'}}>
 240:                   Can't find what you're looking for? We're here to help!
 241:                 </p>
 242:                 <a href="/contact" className="btn btn-primary-large">
 243:                   <i className="lni lni-comments"></i>
 244:                   Contact Us
 245:                 </a>
 246:               </div>
 247: 
 248:             </div>
 249:           </div>
 250:         </section>
 251:       </main>
 252:       <Footer />
 253:     </>
 254:   );
 255: }
```

---

### 🎨 globals.css

**Path:** `app/globals.css`

```css
   1: @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
   2: 
   3: /* ============================================
   4:    CSS VARIABLES
   5:    ============================================ */
   6: :root {
   7:   --light-beige: #F6EFE7;
   8:   --pearl-white: #FFFFFF;
   9:   --warm-cream: #F2E8D8;
  10:   --soft-gold: #D4B57A;
  11:   --charcoal-text: #2B2B2B;
  12:   --soft-taupe: #9A8F85;
  13: }
  14: 
  15: /* ============================================
  16:    BASE STYLES
  17:    ============================================ */
  18: * {
  19:   margin: 0;
  20:   padding: 0;
  21:   box-sizing: border-box;
  22: }
  23: 
  24: html {
  25:   scroll-behavior: smooth;
  26: }
  27: 
  28: body {
  29:   font-family: 'Inter', sans-serif;
  30:   color: var(--charcoal-text);
  31:   background-color: var(--pearl-white);
  32:   line-height: 1.6;
  33:   overflow-x: hidden;
  34: }
  35: 
  36: h1, h2, h3, h4, h5, h6 {
  37:   font-family: 'Poppins', sans-serif;
  38:   font-weight: 600;
  39:   line-height: 1.3;
  40: }
  41: 
  42: .container {
  43:   width: 100%;
  44:   max-width: 1200px;
  45:   margin: 0 auto;
  46:   padding: 0 20px;
  47: }
  48: 
  49: /* ============================================
  50:    HEADER STYLES - DESKTOP
  51:    ============================================ */
  52: .desktop-header {
  53:   display: none;
  54:   background-color: var(--pearl-white);
  55:   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  56:   position: fixed;
  57:   top: 0;
  58:   left: 0;
  59:   right: 0;
  60:   z-index: 1000;
  61:   padding: 15px 0;
  62:   transition: all 0.3s ease;
  63: }
  64: 
  65: .desktop-header.scrolled {
  66:   padding: 10px 0;
  67:   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  68: }
  69: 
  70: .header-container {
  71:   display: flex;
  72:   justify-content: space-between;
  73:   align-items: center;
  74: }
  75: 
  76: .logo {
  77:   font-family: 'Poppins', sans-serif;
  78:   font-size: clamp(24px, 5vw, 28px);
  79:   font-weight: 700;
  80:   color: var(--charcoal-text);
  81:   text-decoration: none;
  82: }
  83: 
  84: .logo span {
  85:   color: var(--soft-gold);
  86: }
  87: 
  88: /* Main Navigation */
  89: .main-nav ul {
  90:   display: flex;
  91:   list-style: none;
  92:   gap: 30px;
  93:   align-items: center;
  94: }
  95: 
  96: .main-nav ul li a {
  97:   text-decoration: none;
  98:   color: var(--charcoal-text);
  99:   font-weight: 500;
 100:   transition: color 0.3s;
 101:   display: flex;
 102:   align-items: center;
 103:   gap: 5px;
 104:   font-size: 16px;
 105: }
 106: 
 107: .main-nav ul li a:hover {
 108:   color: var(--soft-gold);
 109: }
 110: 
 111: /* Dropdown Menu */
 112: .nav-dropdown {
 113:   position: relative;
 114: }
 115: 
 116: .dropdown-menu {
 117:   position: absolute;
 118:   top: 100%;
 119:   left: 0;
 120:   background: var(--pearl-white);
 121:   min-width: 280px;
 122:   border-radius: 12px;
 123:   box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
 124:   opacity: 0;
 125:   visibility: hidden;
 126:   transform: translateY(10px);
 127:   transition: all 0.3s ease;
 128:   padding: 15px;
 129:   margin-top: 10px;
 130: }
 131: 
 132: .nav-dropdown:hover .dropdown-menu {
 133:   opacity: 1;
 134:   visibility: visible;
 135:   transform: translateY(0);
 136: }
 137: 
 138: .dropdown-menu a {
 139:   display: flex;
 140:   align-items: center;
 141:   gap: 15px;
 142:   padding: 15px;
 143:   border-radius: 8px;
 144:   transition: background-color 0.3s;
 145:   color: var(--charcoal-text);
 146:   text-decoration: none;
 147:   margin-bottom: 5px;
 148: }
 149: 
 150: .dropdown-menu a:hover {
 151:   background-color: var(--light-beige);
 152: }
 153: 
 154: .dropdown-menu a i {
 155:   font-size: 24px;
 156:   color: var(--soft-gold);
 157: }
 158: 
 159: .dropdown-menu a strong {
 160:   display: block;
 161:   font-size: 15px;
 162:   margin-bottom: 3px;
 163: }
 164: 
 165: .dropdown-menu a span {
 166:   display: block;
 167:   font-size: 12px;
 168:   color: var(--soft-taupe);
 169: }
 170: 
 171: /* Header Icons */
 172: .header-icons {
 173:   display: flex;
 174:   gap: 15px;
 175:   align-items: center;
 176: }
 177: 
 178: .icon-btn {
 179:   background: none;
 180:   border: none;
 181:   color: var(--charcoal-text);
 182:   font-size: 20px;
 183:   cursor: pointer;
 184:   padding: 8px;
 185:   transition: all 0.3s;
 186:   border-radius: 50%;
 187:   position: relative;
 188: }
 189: 
 190: .icon-btn:hover {
 191:   color: var(--soft-gold);
 192:   background-color: var(--light-beige);
 193: }
 194: 
 195: .cart-btn {
 196:   position: relative;
 197: }
 198: 
 199: .cart-badge {
 200:   position: absolute;
 201:   top: 2px;
 202:   right: 2px;
 203:   background-color: var(--soft-gold);
 204:   color: var(--pearl-white);
 205:   font-size: 10px;
 206:   font-weight: 600;
 207:   padding: 2px 6px;
 208:   border-radius: 10px;
 209:   min-width: 18px;
 210:   text-align: center;
 211: }
 212: 
 213: /* ============================================
 214:    MOBILE HEADER
 215:    ============================================ */
 216: .mobile-header {
 217:   display: block;
 218:   position: fixed;
 219:   top: 0;
 220:   left: 0;
 221:   right: 0;
 222:   background-color: var(--pearl-white);
 223:   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
 224:   z-index: 1000;
 225:   padding: 12px 0;
 226: }
 227: 
 228: .mobile-header-content {
 229:   display: flex;
 230:   justify-content: space-between;
 231:   align-items: center;
 232: }
 233: 
 234: .logo-mobile {
 235:   font-family: 'Poppins', sans-serif;
 236:   font-size: 20px;
 237:   font-weight: 700;
 238:   color: var(--charcoal-text);
 239:   text-decoration: none;
 240: }
 241: 
 242: .logo-mobile span {
 243:   color: var(--soft-gold);
 244: }
 245: 
 246: .mobile-header-icons {
 247:   display: flex;
 248:   gap: 10px;
 249: }
 250: 
 251: /* ============================================
 252:    BOTTOM NAVIGATION (MOBILE)
 253:    ============================================ */
 254: .bottom-nav {
 255:   position: fixed;
 256:   bottom: 0;
 257:   left: 0;
 258:   right: 0;
 259:   background-color: var(--pearl-white);
 260:   box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
 261:   display: flex;
 262:   justify-content: space-around;
 263:   align-items: center;
 264:   padding: 8px 0 calc(8px + env(safe-area-inset-bottom));
 265:   z-index: 1000;
 266: }
 267: 
 268: .nav-item {
 269:   display: flex;
 270:   flex-direction: column;
 271:   align-items: center;
 272:   justify-content: center;
 273:   text-decoration: none;
 274:   color: var(--soft-taupe);
 275:   transition: color 0.3s;
 276:   padding: 8px 16px;
 277:   border: none;
 278:   background: none;
 279:   cursor: pointer;
 280:   gap: 4px;
 281:   min-width: 60px;
 282: }
 283: 
 284: .nav-item i {
 285:   font-size: 24px;
 286: }
 287: 
 288: .nav-item span {
 289:   font-size: 11px;
 290:   font-weight: 500;
 291: }
 292: 
 293: .nav-item.active,
 294: .nav-item:active {
 295:   color: var(--soft-gold);
 296: }
 297: 
 298: /* ============================================
 299:    MENU OVERLAY
 300:    ============================================ */
 301: .menu-overlay {
 302:   position: fixed;
 303:   top: 0;
 304:   left: 0;
 305:   right: 0;
 306:   bottom: 0;
 307:   background-color: var(--pearl-white);
 308:   z-index: 2000;
 309:   transform: translateX(100%);
 310:   transition: transform 0.3s ease;
 311:   overflow-y: auto;
 312: }
 313: 
 314: .menu-overlay.active {
 315:   transform: translateX(0);
 316: }
 317: 
 318: .menu-header {
 319:   display: flex;
 320:   justify-content: space-between;
 321:   align-items: center;
 322:   padding: 20px;
 323:   border-bottom: 2px solid var(--light-beige);
 324:   position: sticky;
 325:   top: 0;
 326:   background-color: var(--pearl-white);
 327:   z-index: 10;
 328: }
 329: 
 330: .menu-content {
 331:   padding: 30px 20px;
 332: }
 333: 
 334: .menu-section {
 335:   margin-bottom: 40px;
 336: }
 337: 
 338: .menu-section h3 {
 339:   font-size: 14px;
 340:   color: var(--soft-taupe);
 341:   text-transform: uppercase;
 342:   letter-spacing: 1.5px;
 343:   margin-bottom: 20px;
 344:   font-weight: 600;
 345: }
 346: 
 347: .menu-list {
 348:   list-style: none;
 349:   padding: 0;
 350:   margin: 0;
 351: }
 352: 
 353: .menu-list li {
 354:   margin-bottom: 5px;
 355: }
 356: 
 357: .menu-list li a {
 358:   display: flex;
 359:   align-items: center;
 360:   gap: 15px;
 361:   padding: 15px;
 362:   border-radius: 10px;
 363:   text-decoration: none;
 364:   color: var(--charcoal-text);
 365:   transition: all 0.3s;
 366:   font-size: 16px;
 367: }
 368: 
 369: .menu-list li a:hover {
 370:   background-color: var(--light-beige);
 371:   transform: translateX(5px);
 372: }
 373: 
 374: .menu-list li a i {
 375:   font-size: 20px;
 376:   color: var(--soft-gold);
 377:   width: 24px;
 378:   text-align: center;
 379: }
 380: 
 381: .close-menu {
 382:   background: none;
 383:   border: none;
 384:   font-size: 28px;
 385:   color: var(--charcoal-text);
 386:   cursor: pointer;
 387:   padding: 5px;
 388:   transition: color 0.3s;
 389: }
 390: 
 391: .close-menu:hover {
 392:   color: var(--soft-gold);
 393: }
 394: 
 395: .social-section .social-icons {
 396:   display: flex;
 397:   gap: 15px;
 398: }
 399: 
 400: .social-section .social-icons a {
 401:   width: 45px;
 402:   height: 45px;
 403:   background-color: var(--light-beige);
 404:   border-radius: 50%;
 405:   display: flex;
 406:   align-items: center;
 407:   justify-content: center;
 408:   color: var(--soft-gold);
 409:   font-size: 20px;
 410:   text-decoration: none;
 411:   transition: all 0.3s;
 412: }
 413: 
 414: .social-section .social-icons a:hover,
 415: .social-section .social-icons a:active {
 416:   background-color: var(--soft-gold);
 417:   color: var(--pearl-white);
 418:   transform: translateY(-2px);
 419: }
 420: 
 421: /* ============================================
 422:    MODERN HERO SECTION
 423:    ============================================ */
 424: .hero-modern {
 425:   position: relative;
 426:   min-height: 90vh;
 427:   display: flex;
 428:   align-items: center;
 429:   background: linear-gradient(135deg, var(--light-beige) 0%, var(--warm-cream) 100%);
 430:   padding: 100px 0 80px;
 431:   overflow: hidden;
 432: }
 433: 
 434: .hero-background {
 435:   position: absolute;
 436:   top: 0;
 437:   left: 0;
 438:   right: 0;
 439:   bottom: 0;
 440:   overflow: hidden;
 441:   z-index: 1;
 442: }
 443: 
 444: .hero-shape {
 445:   position: absolute;
 446:   border-radius: 50%;
 447:   background: radial-gradient(circle, rgba(212, 181, 122, 0.15) 0%, transparent 70%);
 448: }
 449: 
 450: .hero-shape-1 {
 451:   width: 500px;
 452:   height: 500px;
 453:   top: -200px;
 454:   right: -100px;
 455: }
 456: 
 457: .hero-shape-2 {
 458:   width: 400px;
 459:   height: 400px;
 460:   bottom: -150px;
 461:   left: -100px;
 462: }
 463: 
 464: .hero-shape-3 {
 465:   width: 300px;
 466:   height: 300px;
 467:   top: 50%;
 468:   right: 20%;
 469: }
 470: 
 471: .hero-content-modern {
 472:   position: relative;
 473:   z-index: 2;
 474:   max-width: 700px;
 475: }
 476: 
 477: .hero-badge {
 478:   display: inline-flex;
 479:   align-items: center;
 480:   gap: 8px;
 481:   background-color: rgba(255, 255, 255, 0.9);
 482:   padding: 10px 20px;
 483:   border-radius: 50px;
 484:   margin-bottom: 25px;
 485:   font-size: 14px;
 486:   font-weight: 500;
 487:   color: var(--charcoal-text);
 488:   backdrop-filter: blur(10px);
 489: }
 490: 
 491: .hero-badge i {
 492:   color: var(--soft-gold);
 493:   font-size: 16px;
 494: }
 495: 
 496: .hero-title-large {
 497:   font-size: clamp(36px, 8vw, 64px);
 498:   line-height: 1.1;
 499:   margin-bottom: 25px;
 500:   color: var(--charcoal-text);
 501: }
 502: 
 503: .gradient-text {
 504:   background: linear-gradient(135deg, var(--soft-gold) 0%, #c9a961 100%);
 505:   -webkit-background-clip: text;
 506:   -webkit-text-fill-color: transparent;
 507:   background-clip: text;
 508: }
 509: 
 510: .hero-subtitle {
 511:   font-size: clamp(16px, 3vw, 20px);
 512:   line-height: 1.7;
 513:   color: var(--soft-taupe);
 514:   margin-bottom: 35px;
 515: }
 516: 
 517: .hero-buttons-modern {
 518:   display: flex;
 519:   gap: 15px;
 520:   margin-bottom: 50px;
 521:   flex-wrap: wrap;
 522: }
 523: 
 524: .hero-stats {
 525:   display: flex;
 526:   gap: 40px;
 527:   flex-wrap: wrap;
 528: }
 529: 
 530: .stat-item {
 531:   text-align: left;
 532: }
 533: 
 534: .stat-item h3 {
 535:   font-size: 32px;
 536:   color: var(--charcoal-text);
 537:   margin-bottom: 5px;
 538: }
 539: 
 540: .stat-item p {
 541:   font-size: 14px;
 542:   color: var(--soft-taupe);
 543:   margin: 0;
 544: }
 545: 
 546: /* ============================================
 547:    BUTTONS
 548:    ============================================ */
 549: .btn {
 550:   display: inline-flex;
 551:   align-items: center;
 552:   justify-content: center;
 553:   padding: clamp(10px, 3vw, 12px) clamp(20px, 5vw, 30px);
 554:   background-color: var(--soft-gold);
 555:   color: var(--pearl-white);
 556:   text-decoration: none;
 557:   font-weight: 500;
 558:   text-transform: uppercase;
 559:   letter-spacing: 0.5px;
 560:   border: none;
 561:   cursor: pointer;
 562:   transition: all 0.3s ease;
 563:   font-family: 'Inter', sans-serif;
 564:   font-size: clamp(14px, 3vw, 16px);
 565:   border-radius: 4px;
 566:   gap: 8px;
 567: }
 568: 
 569: .btn:hover {
 570:   background-color: var(--charcoal-text);
 571:   transform: translateY(-2px);
 572:   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
 573: }
 574: 
 575: .btn i {
 576:   font-size: 16px;
 577: }
 578: 
 579: .btn-primary-large {
 580:   padding: 16px 32px;
 581:   font-size: 16px;
 582:   font-weight: 600;
 583:   display: inline-flex;
 584:   align-items: center;
 585:   gap: 10px;
 586:   background-color: var(--soft-gold);
 587:   color: var(--pearl-white);
 588:   text-decoration: none;
 589:   border-radius: 50px;
 590:   border: none;
 591:   cursor: pointer;
 592:   transition: all 0.3s ease;
 593:   box-shadow: 0 4px 15px rgba(212, 181, 122, 0.3);
 594:   text-transform: none;
 595:   letter-spacing: normal;
 596: }
 597: 
 598: .btn-primary-large:hover {
 599:   transform: translateY(-2px);
 600:   box-shadow: 0 8px 25px rgba(212, 181, 122, 0.4);
 601:   background-color: #c9a961;
 602: }
 603: 
 604: .btn-glass {
 605:   padding: 16px 32px;
 606:   font-size: 16px;
 607:   font-weight: 600;
 608:   display: inline-flex;
 609:   align-items: center;
 610:   gap: 10px;
 611:   background: rgba(255, 255, 255, 0.3);
 612:   backdrop-filter: blur(10px);
 613:   color: var(--charcoal-text);
 614:   text-decoration: none;
 615:   border-radius: 50px;
 616:   border: 2px solid rgba(255, 255, 255, 0.5);
 617:   cursor: pointer;
 618:   transition: all 0.3s ease;
 619:   text-transform: none;
 620:   letter-spacing: normal;
 621: }
 622: 
 623: .btn-glass:hover {
 624:   background: rgba(255, 255, 255, 0.5);
 625:   transform: translateY(-2px);
 626: }
 627: 
 628: .btn-outline {
 629:   background-color: transparent;
 630:   border: 2px solid var(--soft-gold);
 631:   color: var(--charcoal-text);
 632: }
 633: 
 634: .btn-outline:hover {
 635:   background-color: var(--soft-gold);
 636:   color: var(--pearl-white);
 637: }
 638: 
 639: .btn-outline-large {
 640:   padding: 16px 32px;
 641:   font-size: 16px;
 642:   font-weight: 600;
 643:   display: inline-flex;
 644:   align-items: center;
 645:   gap: 10px;
 646:   background-color: transparent;
 647:   color: var(--charcoal-text);
 648:   text-decoration: none;
 649:   border-radius: 50px;
 650:   border: 2px solid var(--soft-gold);
 651:   cursor: pointer;
 652:   transition: all 0.3s ease;
 653:   text-transform: none;
 654:   letter-spacing: normal;
 655: }
 656: 
 657: .btn-outline-large:hover {
 658:   background-color: var(--soft-gold);
 659:   color: var(--pearl-white);
 660:   transform: translateY(-2px);
 661: }
 662: 
 663: .btn-add-cart {
 664:   width: 45px;
 665:   height: 45px;
 666:   background-color: var(--soft-gold);
 667:   color: var(--pearl-white);
 668:   border: none;
 669:   border-radius: 50%;
 670:   display: flex;
 671:   align-items: center;
 672:   justify-content: center;
 673:   cursor: pointer;
 674:   transition: all 0.3s ease;
 675:   font-size: 18px;
 676: }
 677: 
 678: .btn-add-cart:hover {
 679:   background-color: var(--charcoal-text);
 680:   transform: rotate(360deg);
 681: }
 682: 
 683: /* ============================================
 684:    SECTION STYLES
 685:    ============================================ */
 686: .section {
 687:   padding: clamp(40px, 10vw, 80px) 0;
 688: }
 689: 
 690: .section-header-modern {
 691:   text-align: center;
 692:   margin-bottom: 60px;
 693: }
 694: 
 695: .section-badge {
 696:   display: inline-block;
 697:   padding: 8px 20px;
 698:   background-color: var(--light-beige);
 699:   color: var(--soft-gold);
 700:   border-radius: 50px;
 701:   font-size: 13px;
 702:   font-weight: 600;
 703:   text-transform: uppercase;
 704:   letter-spacing: 1px;
 705:   margin-bottom: 20px;
 706: }
 707: 
 708: .section-header-modern h2 {
 709:   font-size: clamp(32px, 6vw, 48px);
 710:   color: var(--charcoal-text);
 711:   margin-bottom: 15px;
 712: }
 713: 
 714: .section-header-modern p {
 715:   font-size: clamp(16px, 3vw, 18px);
 716:   color: var(--soft-taupe);
 717:   max-width: 600px;
 718:   margin: 0 auto;
 719: }
 720: 
 721: .text-center {
 722:   text-align: center;
 723: }
 724: 
 725: /* ============================================
 726:    CATEGORIES
 727:    ============================================ */
 728: .categories-modern {
 729:   background-color: var(--pearl-white);
 730: }
 731: 
 732: .categories-grid-modern {
 733:   display: grid;
 734:   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
 735:   gap: 30px;
 736: }
 737: 
 738: .category-card-modern {
 739:   background: linear-gradient(135deg, var(--light-beige) 0%, var(--warm-cream) 100%);
 740:   padding: 40px 30px;
 741:   border-radius: 20px;
 742:   text-align: center;
 743:   text-decoration: none;
 744:   transition: all 0.3s ease;
 745:   position: relative;
 746:   overflow: hidden;
 747: }
 748: 
 749: .category-card-modern::before {
 750:   content: '';
 751:   position: absolute;
 752:   top: 0;
 753:   left: 0;
 754:   right: 0;
 755:   bottom: 0;
 756:   background: linear-gradient(135deg, transparent 0%, rgba(212, 181, 122, 0.1) 100%);
 757:   opacity: 0;
 758:   transition: opacity 0.3s ease;
 759: }
 760: 
 761: .category-card-modern:hover {
 762:   transform: translateY(-10px);
 763:   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
 764: }
 765: 
 766: .category-card-modern:hover::before {
 767:   opacity: 1;
 768: }
 769: 
 770: .category-icon-wrapper {
 771:   width: 80px;
 772:   height: 80px;
 773:   background-color: var(--pearl-white);
 774:   border-radius: 50%;
 775:   display: flex;
 776:   align-items: center;
 777:   justify-content: center;
 778:   margin: 0 auto 25px;
 779:   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
 780: }
 781: 
 782: .category-icon-wrapper i {
 783:   font-size: 36px;
 784:   color: var(--soft-gold);
 785: }
 786: 
 787: .category-card-modern h3 {
 788:   font-size: 24px;
 789:   color: var(--charcoal-text);
 790:   margin-bottom: 10px;
 791: }
 792: 
 793: .category-card-modern p {
 794:   color: var(--soft-taupe);
 795:   margin-bottom: 20px;
 796: }
 797: 
 798: .category-link {
 799:   display: inline-flex;
 800:   align-items: center;
 801:   gap: 8px;
 802:   color: var(--soft-gold);
 803:   font-weight: 600;
 804:   font-size: 14px;
 805: }
 806: 
 807: .category-link i {
 808:   transition: transform 0.3s ease;
 809: }
 810: 
 811: .category-card-modern:hover .category-link i {
 812:   transform: translateX(5px);
 813: }
 814: 
 815: /* ============================================
 816:    PRODUCTS - COMPACT CARDS
 817:    ============================================ */
 818: 
 819: /* Featured Products Grid - Smaller Cards */
 820: .products-grid-modern {
 821:   display: grid;
 822:   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
 823:   gap: 20px;
 824: }
 825: 
 826: .product-card-modern {
 827:   background-color: var(--pearl-white);
 828:   border-radius: 12px;
 829:   overflow: hidden;
 830:   transition: all 0.3s ease;
 831:   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
 832: }
 833: 
 834: .product-card-modern:hover {
 835:   transform: translateY(-5px);
 836:   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
 837: }
 838: 
 839: .product-image-modern {
 840:   height: 160px;
 841:   background: linear-gradient(135deg, var(--warm-cream) 0%, var(--light-beige) 100%);
 842:   display: flex;
 843:   align-items: center;
 844:   justify-content: center;
 845:   position: relative;
 846: }
 847: 
 848: .product-image-modern i {
 849:   font-size: 48px;
 850:   color: var(--soft-gold);
 851: }
 852: 
 853: .product-badge {
 854:   position: absolute;
 855:   top: 10px;
 856:   right: 10px;
 857:   background-color: var(--soft-gold);
 858:   color: var(--pearl-white);
 859:   padding: 4px 10px;
 860:   border-radius: 12px;
 861:   font-size: 11px;
 862:   font-weight: 600;
 863: }
 864: 
 865: .product-info-modern {
 866:   padding: 15px;
 867: }
 868: 
 869: .product-info-modern h3 {
 870:   font-size: 15px;
 871:   color: var(--charcoal-text);
 872:   margin-bottom: 8px;
 873:   line-height: 1.3;
 874:   height: 40px;
 875:   overflow: hidden;
 876:   display: -webkit-box;
 877:   -webkit-line-clamp: 2;
 878:   -webkit-box-orient: vertical;
 879: }
 880: 
 881: .product-description {
 882:   color: var(--soft-taupe);
 883:   font-size: 12px;
 884:   margin-bottom: 12px;
 885:   line-height: 1.4;
 886:   height: 34px;
 887:   overflow: hidden;
 888:   display: -webkit-box;
 889:   -webkit-line-clamp: 2;
 890:   -webkit-box-orient: vertical;
 891: }
 892: 
 893: .product-footer {
 894:   display: flex;
 895:   justify-content: space-between;
 896:   align-items: center;
 897: }
 898: 
 899: .product-price-modern {
 900:   font-size: 18px;
 901:   font-weight: 700;
 902:   color: var(--soft-gold);
 903: }
 904: 
 905: /* Shop Page Products - Compact */
 906: .products {
 907:   display: grid;
 908:   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
 909:   gap: 20px;
 910: }
 911: 
 912: .product-card {
 913:   background-color: var(--pearl-white);
 914:   border-radius: 12px;
 915:   overflow: hidden;
 916:   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
 917:   transition: all 0.3s ease;
 918:   display: flex;
 919:   flex-direction: column;
 920: }
 921: 
 922: .product-card:hover {
 923:   transform: translateY(-5px);
 924:   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
 925: }
 926: 
 927: .product-img {
 928:   height: 150px;
 929:   background-color: var(--warm-cream);
 930:   display: flex;
 931:   align-items: center;
 932:   justify-content: center;
 933: }
 934: 
 935: .product-img i {
 936:   font-size: 48px;
 937:   color: var(--soft-gold);
 938: }
 939: 
 940: .product-content {
 941:   padding: 15px;
 942:   flex-grow: 1;
 943:   display: flex;
 944:   flex-direction: column;
 945: }
 946: 
 947: .product-content h3 {
 948:   font-size: 15px;
 949:   margin-bottom: 8px;
 950:   line-height: 1.3;
 951:   height: 40px;
 952:   overflow: hidden;
 953:   display: -webkit-box;
 954:   -webkit-line-clamp: 2;
 955:   -webkit-box-orient: vertical;
 956: }
 957: 
 958: .product-price {
 959:   font-size: 18px;
 960:   font-weight: 600;
 961:   color: var(--soft-gold);
 962:   margin-bottom: 10px;
 963: }
 964: 
 965: .product-content p {
 966:   color: var(--soft-taupe);
 967:   margin-bottom: 12px;
 968:   font-size: 12px;
 969:   line-height: 1.4;
 970:   flex-grow: 1;
 971:   height: 34px;
 972:   overflow: hidden;
 973:   display: -webkit-box;
 974:   -webkit-line-clamp: 2;
 975:   -webkit-box-orient: vertical;
 976: }
 977: 
 978: .product-content .btn {
 979:   width: 100%;
 980:   margin-top: auto;
 981:   padding: 10px 15px;
 982:   font-size: 13px;
 983: }
 984: 
 985: .btn-add-cart {
 986:   width: 38px;
 987:   height: 38px;
 988:   background-color: var(--soft-gold);
 989:   color: var(--pearl-white);
 990:   border: none;
 991:   border-radius: 50%;
 992:   display: flex;
 993:   align-items: center;
 994:   justify-content: center;
 995:   cursor: pointer;
 996:   transition: all 0.3s ease;
 997:   font-size: 16px;
 998: }
 999: 
1000: .btn-add-cart:hover {
1001:   background-color: var(--charcoal-text);
1002:   transform: rotate(360deg);
1003: }
1004: 
1005: /* Best Sellers - Compact */
1006: .best-seller-card {
1007:   display: grid;
1008:   grid-template-columns: auto 150px 1fr;
1009:   gap: 20px;
1010:   align-items: center;
1011:   background-color: var(--pearl-white);
1012:   padding: 20px;
1013:   border-radius: 16px;
1014:   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
1015:   transition: all 0.3s ease;
1016: }
1017: 
1018: .rank-badge {
1019:   width: 40px;
1020:   height: 40px;
1021:   background: linear-gradient(135deg, var(--soft-gold) 0%, #c9a961 100%);
1022:   color: var(--pearl-white);
1023:   border-radius: 50%;
1024:   display: flex;
1025:   align-items: center;
1026:   justify-content: center;
1027:   font-size: 18px;
1028:   font-weight: 700;
1029: }
1030: 
1031: .best-seller-image {
1032:   width: 150px;
1033:   height: 150px;
1034:   background: linear-gradient(135deg, var(--warm-cream) 0%, var(--light-beige) 100%);
1035:   border-radius: 12px;
1036:   display: flex;
1037:   align-items: center;
1038:   justify-content: center;
1039: }
1040: 
1041: .best-seller-image i {
1042:   font-size: 60px;
1043:   color: var(--soft-gold);
1044: }
1045: 
1046: .best-seller-info h3 {
1047:   font-size: 18px;
1048:   color: var(--charcoal-text);
1049:   margin-bottom: 8px;
1050: }
1051: 
1052: .best-seller-info p {
1053:   color: var(--soft-taupe);
1054:   font-size: 13px;
1055:   line-height: 1.5;
1056:   margin-bottom: 15px;
1057: }
1058: 
1059: .best-seller-footer .price {
1060:   font-size: 22px;
1061:   font-weight: 700;
1062:   color: var(--soft-gold);
1063: }
1064: 
1065: .best-seller-footer .btn {
1066:   padding: 10px 20px;
1067:   font-size: 13px;
1068: }
1069: 
1070: /* Skeleton Loading - Compact */
1071: .skeleton-grid {
1072:   display: grid;
1073:   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
1074:   gap: 20px;
1075: }
1076: 
1077: .skeleton-image {
1078:   height: 160px;
1079: }
1080: 
1081: .skeleton-content {
1082:   padding: 15px;
1083: }
1084: 
1085: /* Mobile Responsive */
1086: @media (max-width: 768px) {
1087:   .products-grid-modern,
1088:   .products {
1089:     grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
1090:     gap: 15px;
1091:   }
1092:   
1093:   .product-image-modern,
1094:   .product-img {
1095:     height: 130px;
1096:   }
1097:   
1098:   .product-image-modern i,
1099:   .product-img i {
1100:     font-size: 40px;
1101:   }
1102:   
1103:   .product-info-modern,
1104:   .product-content {
1105:     padding: 12px;
1106:   }
1107:   
1108:   .product-info-modern h3,
1109:   .product-content h3 {
1110:     font-size: 14px;
1111:     height: 36px;
1112:   }
1113:   
1114:   .product-description,
1115:   .product-content p {
1116:     font-size: 11px;
1117:     height: 30px;
1118:   }
1119:   
1120:   .best-seller-card {
1121:     grid-template-columns: 1fr;
1122:     text-align: center;
1123:     gap: 15px;
1124:   }
1125:   
1126:   .best-seller-image {
1127:     margin: 0 auto;
1128:     width: 120px;
1129:     height: 120px;
1130:   }
1131:   
1132:   .skeleton-grid {
1133:     grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
1134:   }
1135: }
1136: 
1137: /* Small Mobile */
1138: @media (max-width: 480px) {
1139:   .products-grid-modern,
1140:   .products {
1141:     grid-template-columns: repeat(2, 1fr);
1142:     gap: 12px;
1143:   }
1144: }
1145: 
1146: /* ============================================
1147:    BRAND STORY
1148:    ============================================ */
1149: .brand-story-modern {
1150:   background-color: var(--pearl-white);
1151:   padding: 100px 0;
1152: }
1153: 
1154: .brand-content-modern {
1155:   display: grid;
1156:   grid-template-columns: 1fr 1fr;
1157:   gap: 80px;
1158:   align-items: center;
1159: }
1160: 
1161: .brand-image-modern {
1162:   position: relative;
1163:   height: 500px;
1164:   border-radius: 30px;
1165:   overflow: hidden;
1166: }
1167: 
1168: .image-placeholder {
1169:   width: 100%;
1170:   height: 100%;
1171:   background: linear-gradient(135deg, var(--warm-cream) 0%, var(--light-beige) 100%);
1172:   display: flex;
1173:   align-items: center;
1174:   justify-content: center;
1175: }
1176: 
1177: .image-placeholder i {
1178:   font-size: 120px;
1179:   color: var(--soft-gold);
1180: }
1181: 
1182: .floating-badge {
1183:   position: absolute;
1184:   background-color: var(--pearl-white);
1185:   padding: 15px 20px;
1186:   border-radius: 50px;
1187:   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
1188:   display: flex;
1189:   align-items: center;
1190:   gap: 10px;
1191:   font-size: 14px;
1192:   font-weight: 600;
1193: }
1194: 
1195: .floating-badge i {
1196:   color: var(--soft-gold);
1197:   font-size: 20px;
1198: }
1199: 
1200: .badge-1 {
1201:   top: 40px;
1202:   left: -20px;
1203:   animation: float 3s ease-in-out infinite;
1204: }
1205: 
1206: .badge-2 {
1207:   bottom: 40px;
1208:   right: -20px;
1209:   animation: float 3s ease-in-out infinite 1.5s;
1210: }
1211: 
1212: @keyframes float {
1213:   0%, 100% { transform: translateY(0px); }
1214:   50% { transform: translateY(-20px); }
1215: }
1216: 
1217: .brand-text-modern h2 {
1218:   font-size: clamp(32px, 6vw, 42px);
1219:   color: var(--charcoal-text);
1220:   margin-bottom: 25px;
1221:   margin-top: 20px;
1222: }
1223: 
1224: .brand-text-modern p {
1225:   color: var(--soft-taupe);
1226:   font-size: 16px;
1227:   line-height: 1.8;
1228:   margin-bottom: 20px;
1229: }
1230: 
1231: .brand-features {
1232:   margin: 30px 0;
1233: }
1234: 
1235: .feature-item {
1236:   display: flex;
1237:   align-items: center;
1238:   gap: 12px;
1239:   margin-bottom: 15px;
1240:   font-size: 15px;
1241:   color: var(--charcoal-text);
1242: }
1243: 
1244: .feature-item i {
1245:   color: var(--soft-gold);
1246:   font-size: 20px;
1247: }
1248: 
1249: /* ============================================
1250:    BEST SELLERS
1251:    ============================================ */
1252: .best-sellers-section {
1253:   background-color: var(--light-beige);
1254: }
1255: 
1256: .best-sellers-grid {
1257:   display: grid;
1258:   gap: 30px;
1259: }
1260: 
1261: .best-seller-card {
1262:   display: grid;
1263:   grid-template-columns: auto 200px 1fr;
1264:   gap: 25px;
1265:   align-items: center;
1266:   background-color: var(--pearl-white);
1267:   padding: 30px;
1268:   border-radius: 20px;
1269:   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
1270:   transition: all 0.3s ease;
1271: }
1272: 
1273: .best-seller-card:hover {
1274:   transform: translateY(-5px);
1275:   box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
1276: }
1277: 
1278: .rank-badge {
1279:   width: 50px;
1280:   height: 50px;
1281:   background: linear-gradient(135deg, var(--soft-gold) 0%, #c9a961 100%);
1282:   color: var(--pearl-white);
1283:   border-radius: 50%;
1284:   display: flex;
1285:   align-items: center;
1286:   justify-content: center;
1287:   font-size: 20px;
1288:   font-weight: 700;
1289: }
1290: 
1291: .best-seller-image {
1292:   width: 200px;
1293:   height: 200px;
1294:   background: linear-gradient(135deg, var(--warm-cream) 0%, var(--light-beige) 100%);
1295:   border-radius: 15px;
1296:   display: flex;
1297:   align-items: center;
1298:   justify-content: center;
1299: }
1300: 
1301: .best-seller-image i {
1302:   font-size: 80px;
1303:   color: var(--soft-gold);
1304: }
1305: 
1306: .best-seller-info h3 {
1307:   font-size: 22px;
1308:   color: var(--charcoal-text);
1309:   margin-bottom: 10px;
1310: }
1311: 
1312: .rating {
1313:   display: flex;
1314:   align-items: center;
1315:   gap: 5px;
1316:   margin-bottom: 15px;
1317: }
1318: 
1319: .rating i {
1320:   color: #ffc107;
1321:   font-size: 14px;
1322: }
1323: 
1324: .rating span {
1325:   color: var(--soft-taupe);
1326:   font-size: 13px;
1327:   margin-left: 5px;
1328: }
1329: 
1330: .best-seller-info p {
1331:   color: var(--soft-taupe);
1332:   font-size: 14px;
1333:   line-height: 1.6;
1334:   margin-bottom: 20px;
1335: }
1336: 
1337: .best-seller-footer {
1338:   display: flex;
1339:   justify-content: space-between;
1340:   align-items: center;
1341: }
1342: 
1343: .best-seller-footer .price {
1344:   font-size: 28px;
1345:   font-weight: 700;
1346:   color: var(--soft-gold);
1347: }
1348: 
1349: /* ============================================
1350:    BENEFITS
1351:    ============================================ */
1352: .benefits-modern {
1353:   background-color: var(--pearl-white);
1354:   padding: 60px 0;
1355: }
1356: 
1357: .benefits-grid-modern {
1358:   display: grid;
1359:   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
1360:   gap: 30px;
1361: }
1362: 
1363: .benefit-card-modern {
1364:   text-align: center;
1365:   padding: 40px 20px;
1366:   background-color: var(--light-beige);
1367:   border-radius: 20px;
1368:   transition: all 0.3s ease;
1369: }
1370: 
1371: .benefit-card-modern:hover {
1372:   transform: translateY(-5px);
1373:   background-color: var(--warm-cream);
1374: }
1375: 
1376: .benefit-icon-modern {
1377:   width: 70px;
1378:   height: 70px;
1379:   background-color: var(--pearl-white);
1380:   border-radius: 50%;
1381:   display: flex;
1382:   align-items: center;
1383:   justify-content: center;
1384:   margin: 0 auto 20px;
1385:   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
1386: }
1387: 
1388: .benefit-icon-modern i {
1389:   font-size: 32px;
1390:   color: var(--soft-gold);
1391: }
1392: 
1393: .benefit-card-modern h3 {
1394:   font-size: 18px;
1395:   color: var(--charcoal-text);
1396:   margin-bottom: 10px;
1397: }
1398: 
1399: .benefit-card-modern p {
1400:   color: var(--soft-taupe);
1401:   font-size: 14px;
1402: }
1403: 
1404: /* ============================================
1405:    TESTIMONIALS
1406:    ============================================ */
1407: .testimonials-modern {
1408:   background-color: var(--light-beige);
1409: }
1410: 
1411: .testimonials-grid-modern {
1412:   display: grid;
1413:   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
1414:   gap: 30px;
1415: }
1416: 
1417: .testimonial-card-modern {
1418:   background-color: var(--pearl-white);
1419:   padding: 35px;
1420:   border-radius: 20px;
1421:   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
1422:   transition: all 0.3s ease;
1423: }
1424: 
1425: .testimonial-card-modern:hover {
1426:   transform: translateY(-5px);
1427:   box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
1428: }
1429: 
1430: .testimonial-rating {
1431:   display: flex;
1432:   gap: 5px;
1433:   margin-bottom: 20px;
1434: }
1435: 
1436: .testimonial-rating i {
1437:   color: #ffc107;
1438:   font-size: 16px;
1439: }
1440: 
1441: .testimonial-card-modern p {
1442:   color: var(--charcoal-text);
1443:   font-size: 15px;
1444:   line-height: 1.7;
1445:   margin-bottom: 25px;
1446:   font-style: italic;
1447: }
1448: 
1449: .testimonial-author {
1450:   display: flex;
1451:   align-items: center;
1452:   gap: 15px;
1453: }
1454: 
1455: .author-avatar {
1456:   width: 50px;
1457:   height: 50px;
1458:   background-color: var(--light-beige);
1459:   border-radius: 50%;
1460:   display: flex;
1461:   align-items: center;
1462:   justify-content: center;
1463:   flex-shrink: 0;
1464: }
1465: 
1466: .author-avatar i {
1467:   font-size: 22px;
1468:   color: var(--soft-taupe);
1469: }
1470: 
1471: .testimonial-author h4 {
1472:   font-size: 16px;
1473:   color: var(--charcoal-text);
1474:   margin-bottom: 3px;
1475: }
1476: 
1477: .testimonial-author span {
1478:   font-size: 13px;
1479:   color: var(--soft-taupe);
1480: }
1481: 
1482: /* ============================================
1483:    NEWSLETTER
1484:    ============================================ */
1485: .newsletter-section {
1486:   background: linear-gradient(135deg, var(--soft-gold) 0%, #c9a961 100%);
1487:   padding: 80px 0;
1488: }
1489: 
1490: .newsletter-card {
1491:   text-align: center;
1492:   color: var(--pearl-white);
1493: }
1494: 
1495: .newsletter-content {
1496:   margin-bottom: 40px;
1497: }
1498: 
1499: .newsletter-content i {
1500:   font-size: 64px;
1501:   margin-bottom: 25px;
1502:   opacity: 0.9;
1503: }
1504: 
1505: .newsletter-content h2 {
1506:   font-size: clamp(28px, 6vw, 42px);
1507:   margin-bottom: 15px;
1508:   color: var(--pearl-white);
1509: }
1510: 
1511: .newsletter-content p {
1512:   font-size: 16px;
1513:   opacity: 0.9;
1514:   max-width: 600px;
1515:   margin: 0 auto;
1516: }
1517: 
1518: .newsletter-form {
1519:   display: flex;
1520:   gap: 15px;
1521:   max-width: 600px;
1522:   margin: 0 auto;
1523:   flex-wrap: wrap;
1524:   justify-content: center;
1525: }
1526: 
1527: .newsletter-form input {
1528:   flex: 1;
1529:   min-width: 280px;
1530:   padding: 16px 24px;
1531:   border: none;
1532:   border-radius: 50px;
1533:   font-size: 16px;
1534:   outline: none;
1535: }
1536: 
1537: .newsletter-form button {
1538:   padding: 16px 40px;
1539:   border: 2px solid var(--pearl-white);
1540:   background-color: var(--pearl-white);
1541:   color: var(--soft-gold);
1542:   font-weight: 600;
1543:   border-radius: 50px;
1544:   cursor: pointer;
1545:   transition: all 0.3s ease;
1546: }
1547: 
1548: .newsletter-form button:hover {
1549:   background-color: transparent;
1550:   color: var(--pearl-white);
1551: }
1552: 
1553: /* ============================================
1554:    FOOTER
1555:    ============================================ */
1556: footer {
1557:   background-color: var(--charcoal-text);
1558:   color: var(--pearl-white);
1559:   padding: clamp(40px, 8vw, 60px) 0 20px;
1560: }
1561: 
1562: .footer-content {
1563:   display: grid;
1564:   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
1565:   gap: clamp(30px, 6vw, 40px);
1566:   margin-bottom: clamp(30px, 6vw, 40px);
1567: }
1568: 
1569: .footer-logo {
1570:   font-family: 'Poppins', sans-serif;
1571:   font-size: clamp(24px, 5vw, 28px);
1572:   font-weight: 700;
1573:   margin-bottom: clamp(15px, 4vw, 20px);
1574: }
1575: 
1576: .footer-logo span {
1577:   color: var(--soft-gold);
1578: }
1579: 
1580: .footer-about p {
1581:   color: var(--soft-taupe);
1582:   margin-bottom: clamp(15px, 4vw, 20px);
1583:   font-size: clamp(14px, 3vw, 16px);
1584:   line-height: 1.6;
1585: }
1586: 
1587: .social-icons {
1588:   display: flex;
1589:   gap: clamp(10px, 3vw, 15px);
1590:   flex-wrap: wrap;
1591: }
1592: 
1593: .social-icons a {
1594:   display: flex;
1595:   align-items: center;
1596:   justify-content: center;
1597:   width: clamp(35px, 8vw, 40px);
1598:   height: clamp(35px, 8vw, 40px);
1599:   background-color: rgba(255, 255, 255, 0.1);
1600:   border-radius: 50%;
1601:   color: var(--pearl-white);
1602:   transition: all 0.3s ease;
1603:   text-decoration: none;
1604:   font-size: clamp(14px, 3vw, 16px);
1605: }
1606: 
1607: .social-icons a:hover {
1608:   background-color: var(--soft-gold);
1609:   transform: translateY(-3px);
1610: }
1611: 
1612: .footer-links h3 {
1613:   font-size: clamp(16px, 3.5vw, 18px);
1614:   margin-bottom: clamp(15px, 4vw, 20px);
1615:   color: var(--pearl-white);
1616: }
1617: 
1618: .footer-links ul {
1619:   list-style: none;
1620: }
1621: 
1622: .footer-links ul li {
1623:   margin-bottom: clamp(8px, 2vw, 10px);
1624: }
1625: 
1626: .footer-links ul li a {
1627:   color: var(--soft-taupe);
1628:   text-decoration: none;
1629:   transition: color 0.3s;
1630:   font-size: clamp(14px, 3vw, 16px);
1631: }
1632: 
1633: .footer-links ul li a:hover {
1634:   color: var(--soft-gold);
1635: }
1636: 
1637: .footer-bottom {
1638:   text-align: center;
1639:   padding-top: clamp(20px, 5vw, 30px);
1640:   border-top: 1px solid rgba(255, 255, 255, 0.1);
1641:   color: var(--soft-taupe);
1642:   font-size: clamp(12px, 2.5vw, 14px);
1643: }
1644: 
1645: /* ============================================
1646:    SEARCH MODAL
1647:    ============================================ */
1648: .search-modal-overlay {
1649:   position: fixed;
1650:   top: 0;
1651:   left: 0;
1652:   right: 0;
1653:   bottom: 0;
1654:   background-color: rgba(0, 0, 0, 0.5);
1655:   z-index: 3000;
1656:   display: flex;
1657:   align-items: flex-start;
1658:   justify-content: center;
1659:   padding: 20px;
1660:   overflow-y: auto;
1661: }
1662: 
1663: .search-modal {
1664:   background-color: var(--pearl-white);
1665:   width: 100%;
1666:   max-width: 800px;
1667:   border-radius: 12px;
1668:   box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
1669:   margin-top: 50px;
1670:   max-height: calc(100vh - 100px);
1671:   display: flex;
1672:   flex-direction: column;
1673: }
1674: 
1675: .search-modal-header {
1676:   display: flex;
1677:   gap: 15px;
1678:   padding: 20px;
1679:   border-bottom: 1px solid var(--light-beige);
1680: }
1681: 
1682: .search-input-wrapper {
1683:   flex: 1;
1684:   display: flex;
1685:   align-items: center;
1686:   gap: 12px;
1687:   background-color: var(--light-beige);
1688:   border-radius: 8px;
1689:   padding: 12px 16px;
1690: }
1691: 
1692: .search-input-wrapper i {
1693:   color: var(--soft-taupe);
1694:   font-size: 20px;
1695: }
1696: 
1697: .search-input-wrapper input {
1698:   flex: 1;
1699:   border: none;
1700:   background: transparent;
1701:   outline: none;
1702:   font-size: 16px;
1703:   color: var(--charcoal-text);
1704:   font-family: 'Inter', sans-serif;
1705: }
1706: 
1707: .search-input-wrapper input::placeholder {
1708:   color: var(--soft-taupe);
1709: }
1710: 
1711: .close-search {
1712:   background: none;
1713:   border: none;
1714:   font-size: 24px;
1715:   color: var(--charcoal-text);
1716:   cursor: pointer;
1717:   padding: 8px;
1718:   transition: color 0.3s;
1719: }
1720: 
1721: .close-search:hover {
1722:   color: var(--soft-gold);
1723: }
1724: 
1725: .search-modal-content {
1726:   padding: 20px;
1727:   overflow-y: auto;
1728:   flex: 1;
1729: }
1730: 
1731: .recent-searches {
1732:   padding: 10px 0;
1733: }
1734: 
1735: .recent-header {
1736:   display: flex;
1737:   justify-content: space-between;
1738:   align-items: center;
1739:   margin-bottom: 15px;
1740: }
1741: 
1742: .recent-header h3 {
1743:   font-size: 16px;
1744:   color: var(--charcoal-text);
1745: }
1746: 
1747: .clear-btn {
1748:   background: none;
1749:   border: none;
1750:   color: var(--soft-gold);
1751:   font-size: 14px;
1752:   cursor: pointer;
1753:   padding: 5px 10px;
1754: }
1755: 
1756: .recent-list {
1757:   list-style: none;
1758:   padding: 0;
1759:   margin: 0;
1760: }
1761: 
1762: .recent-item {
1763:   display: flex;
1764:   align-items: center;
1765:   gap: 12px;
1766:   width: 100%;
1767:   padding: 12px;
1768:   background: none;
1769:   border: none;
1770:   text-align: left;
1771:   font-size: 15px;
1772:   color: var(--charcoal-text);
1773:   cursor: pointer;
1774:   border-radius: 8px;
1775:   transition: background-color 0.3s;
1776: }
1777: 
1778: .recent-item:hover {
1779:   background-color: var(--light-beige);
1780: }
1781: 
1782: .recent-item i {
1783:   color: var(--soft-taupe);
1784:   font-size: 16px;
1785: }
1786: 
1787: .results-count {
1788:   color: var(--soft-taupe);
1789:   margin-bottom: 20px;
1790:   font-size: 14px;
1791: }
1792: 
1793: .results-grid {
1794:   display: flex;
1795:   flex-direction: column;
1796:   gap: 15px;
1797: }
1798: 
1799: .result-item {
1800:   display: flex;
1801:   gap: 15px;
1802:   padding: 15px;
1803:   background-color: var(--pearl-white);
1804:   border: 1px solid var(--light-beige);
1805:   border-radius: 8px;
1806:   text-decoration: none;
1807:   transition: all 0.3s;
1808: }
1809: 
1810: .result-item:hover {
1811:   border-color: var(--soft-gold);
1812:   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
1813: }
1814: 
1815: .result-img {
1816:   width: 80px;
1817:   height: 80px;
1818:   background-color: var(--warm-cream);
1819:   border-radius: 8px;
1820:   display: flex;
1821:   align-items: center;
1822:   justify-content: center;
1823:   flex-shrink: 0;
1824: }
1825: 
1826: .result-img i {
1827:   font-size: 32px;
1828:   color: var(--soft-gold);
1829: }
1830: 
1831: .result-info {
1832:   flex: 1;
1833: }
1834: 
1835: .result-info h4 {
1836:   font-size: 16px;
1837:   color: var(--charcoal-text);
1838:   margin-bottom: 5px;
1839: }
1840: 
1841: .result-price {
1842:   font-size: 18px;
1843:   font-weight: 600;
1844:   color: var(--soft-gold);
1845:   margin-bottom: 8px;
1846: }
1847: 
1848: .result-desc {
1849:   font-size: 14px;
1850:   color: var(--soft-taupe);
1851:   line-height: 1.4;
1852: }
1853: 
1854: .empty-state {
1855:   text-align: center;
1856:   padding: 60px 20px;
1857: }
1858: 
1859: .empty-state i {
1860:   font-size: 64px;
1861:   color: var(--soft-taupe);
1862:   margin-bottom: 20px;
1863: }
1864: 
1865: .empty-state p {
1866:   color: var(--soft-taupe);
1867:   margin-bottom: 20px;
1868:   font-size: 16px;
1869: }
1870: 
1871: /* ============================================
1872:    SHOP PAGE FILTERS
1873:    ============================================ */
1874: .shop-filters {
1875:   display: flex;
1876:   gap: 20px;
1877:   align-items: center;
1878:   margin-bottom: 30px;
1879:   padding: 20px;
1880:   background-color: var(--light-beige);
1881:   border-radius: 12px;
1882:   flex-wrap: wrap;
1883: }
1884: 
1885: .filter-group {
1886:   display: flex;
1887:   align-items: center;
1888:   gap: 10px;
1889: }
1890: 
1891: .filter-group label {
1892:   font-weight: 500;
1893:   color: var(--charcoal-text);
1894:   white-space: nowrap;
1895: }
1896: 
1897: .filter-select {
1898:   padding: 8px 12px;
1899:   border: 1px solid var(--warm-cream);
1900:   border-radius: 6px;
1901:   background-color: var(--pearl-white);
1902:   color: var(--charcoal-text);
1903:   font-family: 'Inter', sans-serif;
1904:   font-size: 14px;
1905:   cursor: pointer;
1906:   outline: none;
1907:   transition: border-color 0.3s;
1908: }
1909: 
1910: .filter-select:hover,
1911: .filter-select:focus {
1912:   border-color: var(--soft-gold);
1913: }
1914: 
1915: .product-count {
1916:   margin-left: auto;
1917:   color: var(--soft-taupe);
1918:   font-size: 14px;
1919:   font-weight: 500;
1920: }
1921: 
1922: .empty-products {
1923:   text-align: center;
1924:   padding: 80px 20px;
1925:   background-color: var(--light-beige);
1926:   border-radius: 12px;
1927: }
1928: 
1929: .empty-products i {
1930:   font-size: 64px;
1931:   color: var(--soft-taupe);
1932:   margin-bottom: 20px;
1933: }
1934: 
1935: .empty-products h3 {
1936:   font-size: 24px;
1937:   color: var(--charcoal-text);
1938:   margin-bottom: 10px;
1939: }
1940: 
1941: .empty-products p {
1942:   color: var(--soft-taupe);
1943:   margin-bottom: 20px;
1944: }
1945: 
1946: /* ============================================
1947:    ADMIN STYLES
1948:    ============================================ */
1949: .admin-login {
1950:   min-height: 100vh;
1951:   display: flex;
1952:   align-items: center;
1953:   justify-content: center;
1954:   background: linear-gradient(135deg, var(--light-beige) 0%, var(--warm-cream) 100%);
1955:   padding: 20px;
1956: }
1957: 
1958: .login-container {
1959:   width: 100%;
1960:   max-width: 400px;
1961: }
1962: 
1963: .login-card {
1964:   background-color: var(--pearl-white);
1965:   border-radius: 12px;
1966:   padding: 40px;
1967:   box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
1968:   text-align: center;
1969: }
1970: 
1971: .login-card h1 {
1972:   font-size: 32px;
1973:   margin-bottom: 10px;
1974: }
1975: 
1976: .login-card h2 {
1977:   font-size: 20px;
1978:   color: var(--soft-taupe);
1979:   margin-bottom: 30px;
1980:   font-weight: 500;
1981: }
1982: 
1983: .form-group {
1984:   margin-bottom: 20px;
1985:   text-align: left;
1986: }
1987: 
1988: .form-group label {
1989:   display: block;
1990:   margin-bottom: 8px;
1991:   color: var(--charcoal-text);
1992:   font-weight: 500;
1993: }
1994: 
1995: .form-group input,
1996: .form-group textarea,
1997: .form-group select {
1998:   width: 100%;
1999:   padding: 12px;
2000:   border: 1px solid var(--light-beige);
2001:   border-radius: 6px;
2002:   font-family: 'Inter', sans-serif;
2003:   font-size: 14px;
2004:   transition: border-color 0.3s;
2005: }
2006: 
2007: .form-group input:focus,
2008: .form-group textarea:focus,
2009: .form-group select:focus {
2010:   outline: none;
2011:   border-color: var(--soft-gold);
2012: }
2013: 
2014: .error-message {
2015:   color: #e74c3c;
2016:   font-size: 14px;
2017:   margin-bottom: 15px;
2018: }
2019: 
2020: .back-link {
2021:   display: inline-flex;
2022:   align-items: center;
2023:   gap: 8px;
2024:   color: var(--soft-taupe);
2025:   text-decoration: none;
2026:   margin-top: 20px;
2027:   font-size: 14px;
2028:   transition: color 0.3s;
2029: }
2030: 
2031: .back-link:hover {
2032:   color: var(--soft-gold);
2033: }
2034: 
2035: .admin-dashboard {
2036:   min-height: 100vh;
2037:   background-color: #f5f5f5;
2038: }
2039: 
2040: .admin-header {
2041:   background-color: var(--charcoal-text);
2042:   color: var(--pearl-white);
2043:   padding: 20px 0;
2044:   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
2045: }
2046: 
2047: .admin-header-content {
2048:   display: flex;
2049:   justify-content: space-between;
2050:   align-items: center;
2051:   flex-wrap: wrap;
2052:   gap: 15px;
2053: }
2054: 
2055: .admin-header h1 {
2056:   color: var(--pearl-white);
2057:   font-size: 24px;
2058:   margin: 0;
2059: }
2060: 
2061: .admin-actions {
2062:   display: flex;
2063:   gap: 10px;
2064: }
2065: 
2066: .admin-main {
2067:   padding: 30px 0;
2068: }
2069: 
2070: .admin-stats {
2071:   display: grid;
2072:   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
2073:   gap: 20px;
2074:   margin-bottom: 30px;
2075: }
2076: 
2077: .stat-card {
2078:   background-color: var(--pearl-white);
2079:   padding: 25px;
2080:   border-radius: 12px;
2081:   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
2082:   display: flex;
2083:   align-items: center;
2084:   gap: 15px;
2085: }
2086: 
2087: .stat-card i {
2088:   font-size: 36px;
2089:   color: var(--soft-gold);
2090: }
2091: 
2092: .stat-card h3 {
2093:   font-size: 32px;
2094:   color: var(--charcoal-text);
2095:   margin: 0;
2096: }
2097: 
2098: .stat-card p {
2099:   color: var(--soft-taupe);
2100:   margin: 0;
2101:   font-size: 14px;
2102: }
2103: 
2104: .admin-toolbar {
2105:   display: flex;
2106:   gap: 15px;
2107:   margin-bottom: 30px;
2108:   flex-wrap: wrap;
2109: }
2110: 
2111: .modal-overlay {
2112:   position: fixed;
2113:   top: 0;
2114:   left: 0;
2115:   right: 0;
2116:   bottom: 0;
2117:   background-color: rgba(0, 0, 0, 0.6);
2118:   z-index: 4000;
2119:   display: flex;
2120:   align-items: center;
2121:   justify-content: center;
2122:   padding: 20px;
2123:   overflow-y: auto;
2124: }
2125: 
2126: .modal-content {
2127:   background-color: var(--pearl-white);
2128:   border-radius: 12px;
2129:   padding: 30px;
2130:   width: 100%;
2131:   max-width: 600px;
2132:   max-height: 90vh;
2133:   overflow-y: auto;
2134: }
2135: 
2136: .modal-header {
2137:   display: flex;
2138:   justify-content: space-between;
2139:   align-items: center;
2140:   margin-bottom: 25px;
2141: }
2142: 
2143: .modal-header h2 {
2144:   font-size: 24px;
2145:   color: var(--charcoal-text);
2146:   margin: 0;
2147: }
2148: 
2149: .close-btn {
2150:   background: none;
2151:   border: none;
2152:   font-size: 24px;
2153:   color: var(--charcoal-text);
2154:   cursor: pointer;
2155:   padding: 5px;
2156:   transition: color 0.3s;
2157: }
2158: 
2159: .close-btn:hover {
2160:   color: var(--soft-gold);
2161: }
2162: 
2163: .form-actions {
2164:   display: flex;
2165:   gap: 10px;
2166:   justify-content: flex-end;
2167:   margin-top: 25px;
2168: }
2169: 
2170: .admin-products {
2171:   background-color: var(--pearl-white);
2172:   border-radius: 12px;
2173:   padding: 25px;
2174:   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
2175: }
2176: 
2177: .admin-products h2 {
2178:   font-size: 20px;
2179:   color: var(--charcoal-text);
2180:   margin-bottom: 20px;
2181: }
2182: 
2183: .products-table {
2184:   overflow-x: auto;
2185: }
2186: 
2187: .products-table table {
2188:   width: 100%;
2189:   border-collapse: collapse;
2190: }
2191: 
2192: .products-table th {
2193:   background-color: var(--light-beige);
2194:   padding: 12px;
2195:   text-align: left;
2196:   font-weight: 600;
2197:   color: var(--charcoal-text);
2198:   font-size: 14px;
2199:   white-space: nowrap;
2200: }
2201: 
2202: .products-table td {
2203:   padding: 12px;
2204:   border-bottom: 1px solid var(--light-beige);
2205:   font-size: 14px;
2206:   color: var(--charcoal-text);
2207: }
2208: 
2209: .description-cell {
2210:   max-width: 250px;
2211:   white-space: nowrap;
2212:   overflow: hidden;
2213:   text-overflow: ellipsis;
2214: }
2215: 
2216: .category-badge {
2217:   display: inline-block;
2218:   padding: 4px 12px;
2219:   background-color: var(--warm-cream);
2220:   color: var(--charcoal-text);
2221:   border-radius: 12px;
2222:   font-size: 12px;
2223:   text-transform: capitalize;
2224:   white-space: nowrap;
2225: }
2226: 
2227: .action-buttons {
2228:   display: flex;
2229:   gap: 8px;
2230: }
2231: 
2232: .edit-btn,
2233: .delete-btn {
2234:   background: none;
2235:   border: none;
2236:   padding: 6px 10px;
2237:   border-radius: 4px;
2238:   cursor: pointer;
2239:   transition: all 0.3s;
2240:   font-size: 16px;
2241: }
2242: 
2243: .edit-btn {
2244:   color: var(--soft-gold);
2245: }
2246: 
2247: .edit-btn:hover {
2248:   background-color: var(--warm-cream);
2249: }
2250: 
2251: .delete-btn {
2252:   color: #e74c3c;
2253: }
2254: 
2255: .delete-btn:hover {
2256:   background-color: #fee;
2257: }
2258: 
2259: /* ============================================
2260:    ABOUT PAGE (LEGACY HERO)
2261:    ============================================ */
2262: .hero {
2263:   background-color: var(--light-beige);
2264:   padding: clamp(60px, 15vw, 100px) 0;
2265:   position: relative;
2266:   overflow: hidden;
2267:   min-height: 80vh;
2268:   display: flex;
2269:   align-items: center;
2270: }
2271: 
2272: .hero::before {
2273:   content: '';
2274:   position: absolute;
2275:   top: -50%;
2276:   left: -50%;
2277:   width: 200%;
2278:   height: 200%;
2279:   background: radial-gradient(circle, rgba(212, 181, 122, 0.1) 0%, rgba(246, 239, 231, 0) 70%);
2280:   z-index: 1;
2281: }
2282: 
2283: .hero-content {
2284:   position: relative;
2285:   z-index: 2;
2286:   max-width: min(600px, 90vw);
2287: }
2288: 
2289: .hero h1 {
2290:   font-size: clamp(32px, 8vw, 48px);
2291:   margin-bottom: clamp(15px, 4vw, 20px);
2292:   color: var(--charcoal-text);
2293:   line-height: 1.2;
2294: }
2295: 
2296: .hero p {
2297:   font-size: clamp(16px, 4vw, 18px);
2298:   margin-bottom: clamp(20px, 6vw, 30px);
2299:   color: var(--soft-taupe);
2300:   line-height: 1.6;
2301: }
2302: 
2303: .hero-buttons {
2304:   display: flex;
2305:   gap: clamp(10px, 3vw, 15px);
2306:   flex-wrap: wrap;
2307: }
2308: 
2309: .brand-content {
2310:   display: flex;
2311:   align-items: center;
2312:   gap: clamp(30px, 6vw, 50px);
2313:   flex-wrap: wrap;
2314: }
2315: 
2316: .brand-text {
2317:   flex: 1;
2318:   min-width: min(500px, 100%);
2319: }
2320: 
2321: .brand-text h2 {
2322:   font-size: clamp(28px, 6vw, 36px);
2323:   margin-bottom: clamp(15px, 4vw, 20px);
2324:   color: var(--charcoal-text);
2325: }
2326: 
2327: .brand-text h3 {
2328:   font-size: clamp(20px, 4vw, 24px);
2329:   margin-top: clamp(20px, 5vw, 30px);
2330:   margin-bottom: clamp(12px, 3vw, 15px);
2331:   color: var(--charcoal-text);
2332: }
2333: 
2334: .brand-text p {
2335:   color: var(--soft-taupe);
2336:   margin-bottom: clamp(15px, 4vw, 20px);
2337:   font-size: clamp(14px, 3vw, 16px);
2338:   line-height: 1.6;
2339: }
2340: 
2341: .brand-image {
2342:   flex: 1;
2343:   height: clamp(250px, 50vw, 400px);
2344:   background-color: var(--warm-cream);
2345:   border-radius: 12px;
2346:   display: flex;
2347:   align-items: center;
2348:   justify-content: center;
2349:   min-width: min(300px, 100%);
2350: }
2351: 
2352: .brand-image i {
2353:   font-size: clamp(60px, 12vw, 100px);
2354:   color: var(--soft-gold);
2355: }
2356: 
2357: .benefits {
2358:   display: grid;
2359:   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
2360:   gap: clamp(20px, 4vw, 30px);
2361: }
2362: 
2363: .benefit-card {
2364:   text-align: center;
2365:   padding: clamp(20px, 5vw, 30px) clamp(15px, 3vw, 20px);
2366:   background: var(--pearl-white);
2367:   border-radius: 12px;
2368:   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
2369:   transition: transform 0.3s ease;
2370: }
2371: 
2372: .benefit-card:hover {
2373:   transform: translateY(-5px);
2374: }
2375: 
2376: .benefit-icon {
2377:   width: clamp(60px, 12vw, 70px);
2378:   height: clamp(60px, 12vw, 70px);
2379:   background-color: var(--light-beige);
2380:   border-radius: 50%;
2381:   display: flex;
2382:   align-items: center;
2383:   justify-content: center;
2384:   margin: 0 auto clamp(15px, 4vw, 20px);
2385: }
2386: 
2387: .benefit-icon i {
2388:   font-size: clamp(24px, 6vw, 30px);
2389:   color: var(--soft-gold);
2390: }
2391: 
2392: .benefit-card h3 {
2393:   font-size: clamp(16px, 3.5vw, 18px);
2394:   margin-bottom: clamp(8px, 2vw, 10px);
2395: }
2396: 
2397: .benefit-card p {
2398:   color: var(--soft-taupe);
2399:   font-size: clamp(14px, 3vw, 16px);
2400:   line-height: 1.5;
2401: }
2402: 
2403: /* ============================================
2404:    MAIN CONTENT SPACING
2405:    ============================================ */
2406: main {
2407:   margin-top: 60px;
2408:   margin-bottom: 80px;
2409:   padding-bottom: env(safe-area-inset-bottom);
2410: }
2411: 
2412: /* ============================================
2413:    RESPONSIVE BREAKPOINTS
2414:    ============================================ */
2415: 
2416: /* Tablet and Desktop */
2417: @media (min-width: 769px) {
2418:   .desktop-header {
2419:     display: block !important;
2420:   }
2421: 
2422:   .mobile-header,
2423:   .bottom-nav {
2424:     display: none !important;
2425:   }
2426: 
2427:   main {
2428:     margin-top: 0 !important;
2429:     margin-bottom: 0 !important;
2430:   }
2431: 
2432:   .hero-modern {
2433:     min-height: 90vh;
2434:   }
2435: }
2436: 
2437: /* Mobile and Tablet */
2438: @media (max-width: 768px) {
2439:   .shop-filters {
2440:     flex-direction: column;
2441:     align-items: stretch;
2442:   }
2443: 
2444:   .filter-group {
2445:     width: 100%;
2446:   }
2447: 
2448:   .filter-select {
2449:     width: 100%;
2450:   }
2451: 
2452:   .product-count {
2453:     margin-left: 0;
2454:     text-align: center;
2455:   }
2456: 
2457:   .brand-content-modern {
2458:     grid-template-columns: 1fr;
2459:   }
2460: 
2461:   .brand-image-modern {
2462:     order: -1;
2463:   }
2464: 
2465:   .best-seller-card {
2466:     grid-template-columns: 1fr;
2467:     text-align: center;
2468:   }
2469: 
2470:   .best-seller-image {
2471:     margin: 0 auto;
2472:   }
2473: 
2474:   .best-seller-footer {
2475:     flex-direction: column;
2476:     gap: 15px;
2477:   }
2478: 
2479:   .admin-header-content {
2480:     flex-direction: column;
2481:     align-items: stretch;
2482:   }
2483: 
2484:   .admin-actions {
2485:     width: 100%;
2486:   }
2487: 
2488:   .admin-actions .btn {
2489:     flex: 1;
2490:   }
2491: 
2492:   .admin-toolbar {
2493:     flex-direction: column;
2494:   }
2495: 
2496:   .admin-toolbar .btn {
2497:     width: 100%;
2498:   }
2499: 
2500:   .products-table {
2501:     font-size: 12px;
2502:   }
2503: 
2504:   .products-table th,
2505:   .products-table td {
2506:     padding: 8px;
2507:   }
2508: 
2509:   .description-cell {
2510:     max-width: 150px;
2511:   }
2512: 
2513:   .hero-modern {
2514:     min-height: 80vh;
2515:     padding: 80px 0 60px;
2516:   }
2517: 
2518:   .brand-content {
2519:     flex-direction: column;
2520:   }
2521: 
2522:   .brand-image {
2523:     order: -1;
2524:     width: 100%;
2525:   }
2526: }
2527: 
2528: /* Small Mobile */
2529: @media (max-width: 480px) {
2530:   .container {
2531:     padding: 0 15px;
2532:   }
2533: 
2534:   .hero {
2535:     min-height: 70vh;
2536:     text-align: center;
2537:   }
2538: 
2539:   .hero-content {
2540:     margin: 0 auto;
2541:   }
2542: 
2543:   .section {
2544:     padding: 30px 0;
2545:   }
2546: 
2547:   .categories-grid-modern,
2548:   .products-grid-modern,
2549:   .benefits-grid-modern,
2550:   .testimonials-grid-modern {
2551:     grid-template-columns: 1fr;
2552:   }
2553: 
2554:   .hero-stats {
2555:     justify-content: center;
2556:   }
2557: 
2558:   .stat-item {
2559:     text-align: center;
2560:   }
2561: 
2562:   .floating-badge {
2563:     position: static;
2564:     display: inline-flex;
2565:     margin: 10px;
2566:   }
2567: 
2568:   .badge-1,
2569:   .badge-2 {
2570:     animation: none;
2571:   }
2572: 
2573:   .newsletter-form {
2574:     flex-direction: column;
2575:   }
2576: 
2577:   .newsletter-form input,
2578:   .newsletter-form button {
2579:     width: 100%;
2580:   }
2581: 
2582:   .hero-buttons-modern {
2583:     flex-direction: column;
2584:   }
2585: 
2586:   .btn-primary-large,
2587:   .btn-glass,
2588:   .btn-outline-large {
2589:     width: 100%;
2590:     justify-content: center;
2591:   }
2592: }
2593: 
2594: /* ============================================
2595:    ACCESSIBILITY & MOTION
2596:    ============================================ */
2597: 
2598: /* Reduced motion support */
2599: @media (prefers-reduced-motion: reduce) {
2600:   * {
2601:     animation-duration: 0.01ms !important;
2602:     animation-iteration-count: 1 !important;
2603:     transition-duration: 0.01ms !important;
2604:   }
2605: 
2606:   html {
2607:     scroll-behavior: auto;
2608:   }
2609: 
2610:   .floating-badge {
2611:     animation: none !important;
2612:   }
2613: }
2614: 
2615: /* Touch device improvements */
2616: @media (hover: none) {
2617:   .category-card-modern:hover,
2618:   .product-card-modern:hover,
2619:   .benefit-card-modern:hover,
2620:   .testimonial-card-modern:hover,
2621:   .product-card:hover,
2622:   .benefit-card:hover {
2623:     transform: none;
2624:   }
2625: 
2626:   .btn:hover,
2627:   .btn-primary-large:hover,
2628:   .btn-glass:hover,
2629:   .btn-outline-large:hover {
2630:     transform: none;
2631:   }
2632: }
2633: 
2634: /* High-resolution displays */
2635: @media (min-resolution: 2dppx) {
2636:   .hero::before,
2637:   .hero-background .hero-shape {
2638:     background: radial-gradient(circle, rgba(212, 181, 122, 0.08) 0%, rgba(246, 239, 231, 0) 70%);
2639:   }
2640: }
2641: 
2642: /* Safe area for devices with notches */
2643: @supports (padding-bottom: env(safe-area-inset-bottom)) {
2644:   .bottom-nav {
2645:     padding-bottom: calc(8px + env(safe-area-inset-bottom));
2646:   }
2647: 
2648:   main {
2649:     padding-bottom: env(safe-area-inset-bottom);
2650:   }
2651: }
2652: 
2653: /* ============================================
2654:    PRINT STYLES
2655:    ============================================ */
2656: @media print {
2657:   .desktop-header,
2658:   .mobile-header,
2659:   .bottom-nav,
2660:   .menu-overlay,
2661:   .search-modal-overlay,
2662:   .newsletter-section,
2663:   footer {
2664:     display: none !important;
2665:   }
2666: 
2667:   main {
2668:     margin: 0 !important;
2669:   }
2670: 
2671:   * {
2672:     box-shadow: none !important;
2673:   }
2674: }
2675: 
2676: /* ============================================
2677:    LOADING ANIMATIONS
2678:    ============================================ */
2679: .loading-container {
2680:   padding: 60px 20px;
2681:   text-align: center;
2682: }
2683: 
2684: .loading-spinner {
2685:   width: 60px;
2686:   height: 60px;
2687:   margin: 0 auto 20px;
2688:   position: relative;
2689: }
2690: 
2691: .spinner-circle {
2692:   width: 100%;
2693:   height: 100%;
2694:   border: 4px solid var(--light-beige);
2695:   border-top-color: var(--soft-gold);
2696:   border-radius: 50%;
2697:   animation: spin 1s linear infinite;
2698: }
2699: 
2700: @keyframes spin {
2701:   to { transform: rotate(360deg); }
2702: }
2703: 
2704: .loading-text {
2705:   color: var(--soft-taupe);
2706:   font-size: 16px;
2707:   margin-top: 10px;
2708:   animation: pulse 1.5s ease-in-out infinite;
2709: }
2710: 
2711: @keyframes pulse {
2712:   0%, 100% { opacity: 1; }
2713:   50% { opacity: 0.5; }
2714: }
2715: 
2716: /* Skeleton Loading Cards */
2717: .skeleton-grid {
2718:   display: grid;
2719:   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
2720:   gap: 30px;
2721: }
2722: 
2723: .skeleton-card {
2724:   background-color: var(--pearl-white);
2725:   border-radius: 20px;
2726:   overflow: hidden;
2727:   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
2728:   animation: fadeIn 0.5s ease-in;
2729: }
2730: 
2731: .skeleton-card:nth-child(1) { animation-delay: 0.1s; }
2732: .skeleton-card:nth-child(2) { animation-delay: 0.2s; }
2733: .skeleton-card:nth-child(3) { animation-delay: 0.3s; }
2734: .skeleton-card:nth-child(4) { animation-delay: 0.4s; }
2735: 
2736: @keyframes fadeIn {
2737:   from { opacity: 0; transform: translateY(20px); }
2738:   to { opacity: 1; transform: translateY(0); }
2739: }
2740: 
2741: .skeleton-image {
2742:   height: 250px;
2743:   background: linear-gradient(
2744:     90deg,
2745:     var(--warm-cream) 0%,
2746:     var(--light-beige) 50%,
2747:     var(--warm-cream) 100%
2748:   );
2749:   background-size: 200% 100%;
2750:   animation: shimmer 1.5s infinite;
2751: }
2752: 
2753: .skeleton-content {
2754:   padding: 25px;
2755: }
2756: 
2757: .skeleton-title {
2758:   height: 20px;
2759:   background: linear-gradient(
2760:     90deg,
2761:     var(--light-beige) 0%,
2762:     var(--warm-cream) 50%,
2763:     var(--light-beige) 100%
2764:   );
2765:   background-size: 200% 100%;
2766:   border-radius: 4px;
2767:   margin-bottom: 15px;
2768:   animation: shimmer 1.5s infinite;
2769: }
2770: 
2771: .skeleton-description {
2772:   height: 14px;
2773:   background: linear-gradient(
2774:     90deg,
2775:     var(--light-beige) 0%,
2776:     var(--warm-cream) 50%,
2777:     var(--light-beige) 100%
2778:   );
2779:   background-size: 200% 100%;
2780:   border-radius: 4px;
2781:   margin-bottom: 10px;
2782:   animation: shimmer 1.5s infinite;
2783:   animation-delay: 0.1s;
2784: }
2785: 
2786: .skeleton-description:last-of-type {
2787:   width: 70%;
2788: }
2789: 
2790: .skeleton-footer {
2791:   display: flex;
2792:   justify-content: space-between;
2793:   align-items: center;
2794:   margin-top: 20px;
2795: }
2796: 
2797: .skeleton-price {
2798:   width: 80px;
2799:   height: 24px;
2800:   background: linear-gradient(
2801:     90deg,
2802:     var(--light-beige) 0%,
2803:     var(--warm-cream) 50%,
2804:     var(--light-beige) 100%
2805:   );
2806:   background-size: 200% 100%;
2807:   border-radius: 4px;
2808:   animation: shimmer 1.5s infinite;
2809:   animation-delay: 0.2s;
2810: }
2811: 
2812: .skeleton-button {
2813:   width: 45px;
2814:   height: 45px;
2815:   background: linear-gradient(
2816:     90deg,
2817:     var(--light-beige) 0%,
2818:     var(--warm-cream) 50%,
2819:     var(--light-beige) 100%
2820:   );
2821:   background-size: 200% 100%;
2822:   border-radius: 50%;
2823:   animation: shimmer 1.5s infinite;
2824:   animation-delay: 0.3s;
2825: }
2826: 
2827: @keyframes shimmer {
2828:   0% { background-position: 200% 0; }
2829:   100% { background-position: -200% 0; }
2830: }
2831: 
2832: /* ============================================
2833:    UTILITY CLASSES
2834:    ============================================ */
2835: .sr-only {
2836:   position: absolute;
2837:   width: 1px;
2838:   height: 1px;
2839:   padding: 0;
2840:   margin: -1px;
2841:   overflow: hidden;
2842:   clip: rect(0, 0, 0, 0);
2843:   white-space: nowrap;
2844:   border-width: 0;
2845: }
2846: 
2847: /* Focus visible for keyboard navigation */
2848: *:focus-visible {
2849:   outline: 2px solid var(--soft-gold);
2850:   outline-offset: 2px;
2851: }
2852: 
2853: /* Smooth scroll behavior */
2854: @media (prefers-reduced-motion: no-preference) {
2855:   html {
2856:     scroll-behavior: smooth;
2857:   }
2858: }
2859: 
2860: /* Product Image Gallery Styles */
2861: .product-image-gallery {
2862:   position: relative;
2863: }
2864: 
2865: .main-media {
2866:   position: relative;
2867:   background: var(--warm-cream);
2868:   border-radius: 12px;
2869:   overflow: hidden;
2870: }
2871: 
2872: .product-image {
2873:   width: 100%;
2874:   height: 100%;
2875:   object-fit: cover;
2876:   transition: transform 0.3s ease;
2877: }
2878: 
2879: .product-card-modern:hover .product-image {
2880:   transform: scale(1.05);
2881: }
2882: 
2883: .video-preview {
2884:   position: relative;
2885:   cursor: pointer;
2886: }
2887: 
2888: .video-preview img {
2889:   width: 100%;
2890:   height: 100%;
2891:   object-fit: cover;
2892: }
2893: 
2894: .play-button {
2895:   position: absolute;
2896:   top: 50%;
2897:   left: 50%;
2898:   transform: translate(-50%, -50%);
2899:   width: 60px;
2900:   height: 60px;
2901:   background: rgba(255, 255, 255, 0.9);
2902:   border: none;
2903:   border-radius: 50%;
2904:   display: flex;
2905:   align-items: center;
2906:   justify-content: center;
2907:   font-size: 24px;
2908:   color: var(--soft-gold);
2909:   transition: all 0.3s ease;
2910: }
2911: 
2912: .play-button:hover {
2913:   background: var(--pearl-white);
2914:   transform: translate(-50%, -50%) scale(1.1);
2915: }
2916: 
2917: .product-video {
2918:   width: 100%;
2919:   height: 100%;
2920:   border-radius: 12px;
2921: }
2922: 
2923: .thumbnail-gallery {
2924:   display: flex;
2925:   gap: 10px;
2926:   margin-top: 15px;
2927:   justify-content: center;
2928: }
2929: 
2930: .thumbnail {
2931:   width: 60px;
2932:   height: 60px;
2933:   border: 2px solid transparent;
2934:   border-radius: 8px;
2935:   overflow: hidden;
2936:   cursor: pointer;
2937:   background: none;
2938:   padding: 0;
2939:   transition: all 0.3s ease;
2940: }
2941: 
2942: .thumbnail.active {
2943:   border-color: var(--soft-gold);
2944: }
2945: 
2946: .thumbnail img {
2947:   width: 100%;
2948:   height: 100%;
2949:   object-fit: cover;
2950: }
2951: 
2952: .thumbnail i {
2953:   font-size: 20px;
2954:   color: var(--soft-taupe);
2955: }
2956: 
2957: /* Product Image Placeholder */
2958: .product-image-placeholder {
2959:   background: linear-gradient(135deg, var(--warm-cream) 0%, var(--light-beige) 100%);
2960:   display: flex;
2961:   align-items: center;
2962:   justify-content: center;
2963:   border-radius: 12px;
2964: }
2965: 
2966: .product-image-placeholder i {
2967:   font-size: 48px;
2968:   color: var(--soft-gold);
2969: }
2970: 
2971: /* Add to your globals.css for better delete button styling */
2972: 
2973: .delete-btn {
2974:   color: #e74c3c;
2975:   background: none;
2976:   border: none;
2977:   padding: 8px 12px;
2978:   border-radius: 6px;
2979:   cursor: pointer;
2980:   transition: all 0.3s;
2981:   font-size: 18px;
2982:   display: flex;
2983:   align-items: center;
2984:   justify-content: center;
2985: }
2986: 
2987: .delete-btn:hover {
2988:   background-color: #fee;
2989:   transform: scale(1.1);
2990: }
2991: 
2992: .delete-btn i {
2993:   font-size: 18px;
2994: }
2995: 
2996: /* Enhanced action buttons container */
2997: .action-buttons {
2998:   display: flex;
2999:   gap: 8px;
3000:   justify-content: flex-end;
3001: }
3002: 
3003: .edit-btn {
3004:   color: var(--soft-gold);
3005:   background: none;
3006:   border: none;
3007:   padding: 8px 12px;
3008:   border-radius: 6px;
3009:   cursor: pointer;
3010:   transition: all 0.3s;
3011:   font-size: 18px;
3012:   display: flex;
3013:   align-items: center;
3014:   justify-content: center;
3015: }
3016: 
3017: .edit-btn:hover {
3018:   background-color: var(--warm-cream);
3019:   transform: scale(1.1);
3020: }
3021: 
3022: .edit-btn i {
3023:   font-size: 18px;
3024: }
```

---

### 📄 layout.js

**Path:** `app/layout.js`

```js
   1: // app/layout.js
   2: import './globals.css'
   3: // app/layout.js
   4: import { AuthProvider } from '@/context/AuthContext'
   5: 
   6: export const metadata = {
   7:   title: 'Lumivora',
   8:   description: 'Premium Beauty Tools & Home Gadgets',
   9: }
  10: 
  11: export default function RootLayout({ children }) {
  12:   return (
  13:     <html lang="en">
  14:       <head>
  15:         <link 
  16:           href="https://cdn.lineicons.com/4.0/lineicons.css" 
  17:           rel="stylesheet" 
  18:         />
  19:       </head>
  20:       <body>
  21:         <AuthProvider>
  22:           {children}
  23:         </AuthProvider>
  24:       </body>
  25:     </html>
  26:   )
  27: }
```

---

### 📁 login

**Path:** `app/login`


#### 📄 page.js

**Path:** `app/login/page.js`

```js
   1: // app/login/page.js
   2: 'use client';
   3: import { useState } from 'react';
   4: import { useRouter } from 'next/navigation';
   5: import { useAuth } from '@/context/AuthContext';
   6: import Header from '@/components/Header';
   7: import Footer from '@/components/Footer';
   8: 
   9: export default function Login() {
  10:   const router = useRouter();
  11:   const { login } = useAuth();
  12:   const [formData, setFormData] = useState({ email: '', password: '' });
  13:   const [error, setError] = useState('');
  14:   const [loading, setLoading] = useState(false);
  15: 
  16:   const handleSubmit = async (e) => {
  17:     e.preventDefault();
  18:     setError('');
  19:     setLoading(true);
  20: 
  21:     const result = await login(formData.email, formData.password);
  22: 
  23:     if (result.success) {
  24:       router.push('/');
  25:     } else {
  26:       setError(result.error);
  27:     }
  28:     setLoading(false);
  29:   };
  30: 
  31:   return (
  32:     <>
  33:       <Header />
  34:       <main>
  35:         <section className="admin-login">
  36:           <div className="login-container">
  37:             <div className="login-card">
  38:               <h1>Lumi<span style={{color: 'var(--soft-gold)'}}>vora</span></h1>
  39:               <h2>Welcome Back</h2>
  40:               <p style={{marginBottom: '30px', color: 'var(--soft-taupe)'}}>
  41:                 Sign in to your account
  42:               </p>
  43: 
  44:               {error && (
  45:                 <div className="error-message" style={{
  46:                   backgroundColor: '#fee',
  47:                   color: '#c33',
  48:                   padding: '12px',
  49:                   borderRadius: '6px',
  50:                   marginBottom: '20px',
  51:                   fontSize: '14px'
  52:                 }}>
  53:                   {error}
  54:                 </div>
  55:               )}
  56: 
  57:               <form onSubmit={handleSubmit}>
  58:                 <div className="form-group">
  59:                   <label>Email</label>
  60:                   <input
  61:                     type="email"
  62:                     value={formData.email}
  63:                     onChange={(e) => setFormData({...formData, email: e.target.value})}
  64:                     required
  65:                     disabled={loading}
  66:                     placeholder="Enter your email"
  67:                   />
  68:                 </div>
  69: 
  70:                 <div className="form-group">
  71:                   <label>Password</label>
  72:                   <input
  73:                     type="password"
  74:                     value={formData.password}
  75:                     onChange={(e) => setFormData({...formData, password: e.target.value})}
  76:                     required
  77:                     disabled={loading}
  78:                     placeholder="Enter your password"
  79:                   />
  80:                 </div>
  81: 
  82:                 <button 
  83:                   type="submit" 
  84:                   className="btn" 
  85:                   style={{width: '100%', marginTop: '10px'}}
  86:                   disabled={loading}
  87:                 >
  88:                   {loading ? 'Signing in...' : 'Sign In'}
  89:                 </button>
  90:               </form>
  91: 
  92:               <p style={{
  93:                 textAlign: 'center',
  94:                 marginTop: '20px',
  95:                 color: 'var(--soft-taupe)',
  96:                 fontSize: '14px'
  97:               }}>
  98:                 Don't have an account?{' '}
  99:                 <a href="/register" style={{
 100:                   color: 'var(--soft-gold)',
 101:                   textDecoration: 'none',
 102:                   fontWeight: '600'
 103:                 }}>
 104:                   Create one
 105:                 </a>
 106:               </p>
 107: 
 108:               <a href="/" className="back-link">
 109:                 <i className="lni lni-arrow-left"></i> Back to Home
 110:               </a>
 111:             </div>
 112:           </div>
 113:         </section>
 114:       </main>
 115:       <Footer />
 116:     </>
 117:   );
 118: }
```

---

### 📁 order-success

**Path:** `app/order-success`


#### 📄 page.js

**Path:** `app/order-success/page.js`

```js
   1: // app/order-success/page.js
   2: 'use client';
   3: import { useEffect, useState } from 'react';
   4: import { useSearchParams } from 'next/navigation';
   5: import Header from '@/components/Header';
   6: import Footer from '@/components/Footer';
   7: 
   8: export default function OrderSuccess() {
   9:   const searchParams = useSearchParams();
  10:   const [order, setOrder] = useState(null);
  11:   const [loading, setLoading] = useState(true);
  12: 
  13:   useEffect(() => {
  14:     const orderId = searchParams.get('orderId');
  15:     if (orderId) {
  16:       fetchOrder(orderId);
  17:     }
  18:   }, [searchParams]);
  19: 
  20:   const fetchOrder = async (orderId) => {
  21:     try {
  22:       const res = await fetch(`/api/orders/${orderId}`);
  23:       if (res.ok) {
  24:         const data = await res.json();
  25:         setOrder(data.order);
  26:       }
  27:     } catch (error) {
  28:       console.error('Error fetching order:', error);
  29:     } finally {
  30:       setLoading(false);
  31:     }
  32:   };
  33: 
  34:   const formatDate = (dateString) => {
  35:     const date = new Date(dateString);
  36:     return date.toLocaleDateString('en-IN', {
  37:       day: 'numeric',
  38:       month: 'long',
  39:       year: 'numeric'
  40:     });
  41:   };
  42: 
  43:   if (loading) {
  44:     return (
  45:       <>
  46:         <Header />
  47:         <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  48:           <div className="loading-spinner">
  49:             <div className="spinner-circle"></div>
  50:           </div>
  51:         </main>
  52:         <Footer />
  53:       </>
  54:     );
  55:   }
  56: 
  57:   return (
  58:     <>
  59:       <Header />
  60:       <main style={{ paddingTop: '80px', paddingBottom: '60px' }}>
  61:         <section className="section">
  62:           <div className="container">
  63:             <div style={{
  64:               maxWidth: '800px',
  65:               margin: '0 auto',
  66:               textAlign: 'center'
  67:             }}>
  68:               {/* Success Icon */}
  69:               <div style={{
  70:                 width: '100px',
  71:                 height: '100px',
  72:                 backgroundColor: '#e8f5e9',
  73:                 borderRadius: '50%',
  74:                 display: 'flex',
  75:                 alignItems: 'center',
  76:                 justifyContent: 'center',
  77:                 margin: '0 auto 30px'
  78:               }}>
  79:                 <i className="lni lni-checkmark" style={{
  80:                   fontSize: '50px',
  81:                   color: '#4caf50'
  82:                 }}></i>
  83:               </div>
  84: 
  85:               <h1 style={{
  86:                 fontSize: 'clamp(28px, 5vw, 36px)',
  87:                 marginBottom: '15px',
  88:                 color: 'var(--charcoal-text)'
  89:               }}>
  90:                 Order Placed Successfully!
  91:               </h1>
  92: 
  93:               <p style={{
  94:                 fontSize: '16px',
  95:                 color: 'var(--soft-taupe)',
  96:                 marginBottom: '30px'
  97:               }}>
  98:                 Thank you for your order. We've received your order and will process it soon.
  99:               </p>
 100: 
 101:               {order && (
 102:                 <>
 103:                   {/* Order Details Card */}
 104:                   <div style={{
 105:                     backgroundColor: 'var(--pearl-white)',
 106:                     padding: '30px',
 107:                     borderRadius: '20px',
 108:                     boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
 109:                     marginBottom: '30px',
 110:                     textAlign: 'left'
 111:                   }}>
 112:                     <div style={{
 113:                       display: 'flex',
 114:                       justifyContent: 'space-between',
 115:                       alignItems: 'center',
 116:                       marginBottom: '25px',
 117:                       paddingBottom: '20px',
 118:                       borderBottom: '2px solid var(--light-beige)',
 119:                       flexWrap: 'wrap',
 120:                       gap: '15px'
 121:                     }}>
 122:                       <div>
 123:                         <div style={{
 124:                           fontSize: '13px',
 125:                           color: 'var(--soft-taupe)',
 126:                           marginBottom: '5px'
 127:                         }}>
 128:                           Order ID
 129:                         </div>
 130:                         <div style={{
 131:                           fontSize: '18px',
 132:                           fontWeight: '600',
 133:                           color: 'var(--charcoal-text)'
 134:                         }}>
 135:                           #{order._id.slice(-8).toUpperCase()}
 136:                         </div>
 137:                       </div>
 138:                       <div>
 139:                         <span style={{
 140:                           padding: '8px 16px',
 141:                           backgroundColor: order.paymentMethod === 'cod' ? '#fff3e0' : '#e8f5e9',
 142:                           color: order.paymentMethod === 'cod' ? '#f57c00' : '#2e7d32',
 143:                           borderRadius: '20px',
 144:                           fontSize: '13px',
 145:                           fontWeight: '600'
 146:                         }}>
 147:                           {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Paid Online'}
 148:                         </span>
 149:                       </div>
 150:                     </div>
 151: 
 152:                     {/* Delivery Estimate */}
 153:                     <div style={{
 154:                       backgroundColor: 'var(--light-beige)',
 155:                       padding: '20px',
 156:                       borderRadius: '12px',
 157:                       marginBottom: '25px'
 158:                     }}>
 159:                       <div style={{
 160:                         display: 'flex',
 161:                         alignItems: 'center',
 162:                         gap: '15px'
 163:                       }}>
 164:                         <i className="lni lni-delivery" style={{
 165:                           fontSize: '32px',
 166:                           color: 'var(--soft-gold)'
 167:                         }}></i>
 168:                         <div>
 169:                           <div style={{
 170:                             fontWeight: '600',
 171:                             fontSize: '16px',
 172:                             marginBottom: '5px'
 173:                           }}>
 174:                             Expected Delivery
 175:                           </div>
 176:                           <div style={{
 177:                             fontSize: '15px',
 178:                             color: 'var(--soft-taupe)'
 179:                           }}>
 180:                             {formatDate(order.estimatedDelivery.min)} - {formatDate(order.estimatedDelivery.max)}
 181:                           </div>
 182:                           <div style={{
 183:                             fontSize: '13px',
 184:                             color: 'var(--soft-gold)',
 185:                             marginTop: '5px',
 186:                             fontWeight: '600'
 187:                           }}>
 188:                             {order.estimatedDelivery.text}
 189:                           </div>
 190:                         </div>
 191:                       </div>
 192:                     </div>
 193: 
 194:                     {/* Order Items */}
 195:                     <div style={{ marginBottom: '25px' }}>
 196:                       <h3 style={{
 197:                         fontSize: '16px',
 198:                         marginBottom: '15px',
 199:                         color: 'var(--charcoal-text)'
 200:                       }}>
 201:                         Order Items
 202:                       </h3>
 203:                       {order.items.map((item, index) => (
 204:                         <div key={index} style={{
 205:                           display: 'flex',
 206:                           gap: '15px',
 207:                           padding: '15px',
 208:                           backgroundColor: 'var(--warm-cream)',
 209:                           borderRadius: '12px',
 210:                           marginBottom: '10px'
 211:                         }}>
 212:                           <div style={{
 213:                             width: '60px',
 214:                             height: '60px',
 215:                             backgroundColor: 'var(--light-beige)',
 216:                             borderRadius: '8px',
 217:                             display: 'flex',
 218:                             alignItems: 'center',
 219:                             justifyContent: 'center',
 220:                             flexShrink: 0
 221:                           }}>
 222:                             <i className="lni lni-package" style={{
 223:                               fontSize: '24px',
 224:                               color: 'var(--soft-gold)'
 225:                             }}></i>
 226:                           </div>
 227:                           <div style={{ flex: 1 }}>
 228:                             <div style={{
 229:                               fontWeight: '600',
 230:                               marginBottom: '5px'
 231:                             }}>
 232:                               {item.productName}
 233:                             </div>
 234:                             <div style={{
 235:                               fontSize: '14px',
 236:                               color: 'var(--soft-taupe)'
 237:                             }}>
 238:                               Quantity: {item.quantity}
 239:                             </div>
 240:                           </div>
 241:                           <div style={{
 242:                             fontWeight: '700',
 243:                             color: 'var(--soft-gold)',
 244:                             fontSize: '16px'
 245:                           }}>
 246:                             ₹{item.price}
 247:                           </div>
 248:                         </div>
 249:                       ))}
 250:                     </div>
 251: 
 252:                     {/* Shipping Address */}
 253:                     <div>
 254:                       <h3 style={{
 255:                         fontSize: '16px',
 256:                         marginBottom: '15px',
 257:                         color: 'var(--charcoal-text)'
 258:                       }}>
 259:                         Shipping Address
 260:                       </h3>
 261:                       <div style={{
 262:                         padding: '15px',
 263:                         backgroundColor: 'var(--warm-cream)',
 264:                         borderRadius: '12px',
 265:                         fontSize: '14px',
 266:                         lineHeight: '1.6'
 267:                       }}>
 268:                         <div style={{ fontWeight: '600', marginBottom: '5px' }}>
 269:                           {order.shippingAddress.fullName}
 270:                         </div>
 271:                         <div style={{ color: 'var(--soft-taupe)' }}>
 272:                           {order.shippingAddress.phone}
 273:                         </div>
 274:                         <div style={{ color: 'var(--soft-taupe)', marginTop: '8px' }}>
 275:                           {order.shippingAddress.address}<br />
 276:                           {order.shippingAddress.city}, {order.shippingAddress.state}<br />
 277:                           {order.shippingAddress.pincode}
 278:                         </div>
 279:                       </div>
 280:                     </div>
 281: 
 282:                     {/* Total */}
 283:                     <div style={{
 284:                       marginTop: '25px',
 285:                       paddingTop: '20px',
 286:                       borderTop: '2px solid var(--light-beige)',
 287:                       display: 'flex',
 288:                       justifyContent: 'space-between',
 289:                       alignItems: 'center'
 290:                     }}>
 291:                       <span style={{ fontSize: '18px', fontWeight: '600' }}>
 292:                         Total Amount
 293:                       </span>
 294:                       <span style={{
 295:                         fontSize: '24px',
 296:                         fontWeight: '700',
 297:                         color: 'var(--soft-gold)'
 298:                       }}>
 299:                         ₹{order.total}
 300:                       </span>
 301:                     </div>
 302:                   </div>
 303:                 </>
 304:               )}
 305: 
 306:               {/* Action Buttons */}
 307:               <div style={{
 308:                 display: 'flex',
 309:                 gap: '15px',
 310:                 justifyContent: 'center',
 311:                 flexWrap: 'wrap'
 312:               }}>
 313:                 <a href="/orders" className="btn btn-primary-large">
 314:                   <i className="lni lni-package"></i>
 315:                   View All Orders
 316:                 </a>
 317:                 <a href="/shop" className="btn btn-outline-large">
 318:                   <i className="lni lni-shopping-basket"></i>
 319:                   Continue Shopping
 320:                 </a>
 321:               </div>
 322: 
 323:               {/* Support Message */}
 324:               <div style={{
 325:                 marginTop: '40px',
 326:                 padding: '20px',
 327:                 backgroundColor: 'var(--light-beige)',
 328:                 borderRadius: '12px',
 329:                 fontSize: '14px',
 330:                 color: 'var(--soft-taupe)'
 331:               }}>
 332:                 <i className="lni lni-help" style={{
 333:                   fontSize: '20px',
 334:                   marginBottom: '10px',
 335:                   display: 'block',
 336:                   color: 'var(--soft-gold)'
 337:                 }}></i>
 338:                 Need help with your order? Contact us through our{' '}
 339:                 <a href="/contact" style={{
 340:                   color: 'var(--soft-gold)',
 341:                   textDecoration: 'none',
 342:                   fontWeight: '600'
 343:                 }}>
 344:                   social media channels
 345:                 </a>
 346:               </div>
 347:             </div>
 348:           </div>
 349:         </section>
 350:       </main>
 351:       <Footer />
 352:     </>
 353:   );
 354: }
```

---

### 📁 orders

**Path:** `app/orders`


#### 📄 page.js

**Path:** `app/orders/page.js`

```js
   1: // app/orders/page.js - UPDATED VERSION
   2: 'use client';
   3: import { useEffect, useState } from 'react';
   4: import { useRouter } from 'next/navigation';
   5: import { useAuth } from '@/context/AuthContext';
   6: import Header from '@/components/Header';
   7: import Footer from '@/components/Footer';
   8: 
   9: export default function Orders() {
  10:   const router = useRouter();
  11:   const { user, loading: authLoading } = useAuth();
  12:   const [orders, setOrders] = useState([]);
  13:   const [loading, setLoading] = useState(true);
  14: 
  15:   useEffect(() => {
  16:     if (!authLoading && !user) {
  17:       router.push('/login');
  18:     } else if (user) {
  19:       fetchOrders();
  20:     }
  21:   }, [user, authLoading, router]);
  22: 
  23:   const fetchOrders = async () => {
  24:     try {
  25:       const res = await fetch('/api/orders');
  26:       if (res.ok) {
  27:         const data = await res.json();
  28:         setOrders(data.orders || []);
  29:       }
  30:     } catch (error) {
  31:       console.error('Error fetching orders:', error);
  32:     } finally {
  33:       setLoading(false);
  34:     }
  35:   };
  36: 
  37:   const getStatusColor = (status) => {
  38:     const colors = {
  39:       'pending': '#f57c00',
  40:       'processing': '#1976d2',
  41:       'shipped': '#7b1fa2',
  42:       'delivered': '#388e3c',
  43:       'cancelled': '#d32f2f'
  44:     };
  45:     return colors[status] || '#757575';
  46:   };
  47: 
  48:   const getStatusBg = (status) => {
  49:     const colors = {
  50:       'pending': '#fff3e0',
  51:       'processing': '#e3f2fd',
  52:       'shipped': '#f3e5f5',
  53:       'delivered': '#e8f5e9',
  54:       'cancelled': '#ffebee'
  55:     };
  56:     return colors[status] || '#f5f5f5';
  57:   };
  58: 
  59:   const formatDate = (dateString) => {
  60:     const date = new Date(dateString);
  61:     return date.toLocaleDateString('en-IN', {
  62:       day: 'numeric',
  63:       month: 'short',
  64:       year: 'numeric'
  65:     });
  66:   };
  67: 
  68:   if (authLoading || loading) {
  69:     return (
  70:       <>
  71:         <Header />
  72:         <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  73:           <div className="loading-spinner">
  74:             <div className="spinner-circle"></div>
  75:             <p className="loading-text">Loading orders...</p>
  76:           </div>
  77:         </main>
  78:         <Footer />
  79:       </>
  80:     );
  81:   }
  82: 
  83:   if (!user) return null;
  84: 
  85:   return (
  86:     <>
  87:       <Header />
  88:       <main>
  89:         <section className="hero" style={{padding: '80px 0', minHeight: 'auto'}}>
  90:           <div className="container">
  91:             <div className="hero-content">
  92:               <h1>Your Orders</h1>
  93:               <p>Track and manage your orders</p>
  94:             </div>
  95:           </div>
  96:         </section>
  97: 
  98:         <section className="section">
  99:           <div className="container">
 100:             {orders.length === 0 ? (
 101:               <div className="empty-products">
 102:                 <i className="lni lni-package"></i>
 103:                 <h3>No Orders Yet</h3>
 104:                 <p>You haven't placed any orders yet.</p>
 105:                 <a href="/shop" className="btn btn-primary-large" style={{ marginTop: '20px' }}>
 106:                   <i className="lni lni-shopping-basket"></i>
 107:                   Start Shopping
 108:                 </a>
 109:               </div>
 110:             ) : (
 111:               <>
 112:                 <div style={{ 
 113:                   marginBottom: '30px',
 114:                   fontSize: '16px',
 115:                   color: 'var(--soft-taupe)'
 116:                 }}>
 117:                   {orders.length} {orders.length === 1 ? 'order' : 'orders'} found
 118:                 </div>
 119: 
 120:                 <div style={{
 121:                   display: 'grid',
 122:                   gap: '20px'
 123:                 }}>
 124:                   {orders.map(order => (
 125:                     <div key={order._id} style={{
 126:                       backgroundColor: 'var(--pearl-white)',
 127:                       padding: '25px',
 128:                       borderRadius: '20px',
 129:                       boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)'
 130:                     }}>
 131:                       {/* Order Header */}
 132:                       <div style={{
 133:                         display: 'flex',
 134:                         justifyContent: 'space-between',
 135:                         alignItems: 'start',
 136:                         marginBottom: '20px',
 137:                         paddingBottom: '20px',
 138:                         borderBottom: '2px solid var(--light-beige)',
 139:                         flexWrap: 'wrap',
 140:                         gap: '15px'
 141:                       }}>
 142:                         <div>
 143:                           <div style={{
 144:                             fontSize: '13px',
 145:                             color: 'var(--soft-taupe)',
 146:                             marginBottom: '5px'
 147:                           }}>
 148:                             Order ID
 149:                           </div>
 150:                           <div style={{
 151:                             fontSize: '18px',
 152:                             fontWeight: '600',
 153:                             color: 'var(--charcoal-text)'
 154:                           }}>
 155:                             #{order._id.slice(-8).toUpperCase()}
 156:                           </div>
 157:                           <div style={{
 158:                             fontSize: '13px',
 159:                             color: 'var(--soft-taupe)',
 160:                             marginTop: '5px'
 161:                           }}>
 162:                             Placed on {formatDate(order.createdAt)}
 163:                           </div>
 164:                         </div>
 165:                         
 166:                         <div style={{
 167:                           display: 'flex',
 168:                           flexDirection: 'column',
 169:                           gap: '8px',
 170:                           alignItems: 'flex-end'
 171:                         }}>
 172:                           <span style={{
 173:                             padding: '8px 16px',
 174:                             backgroundColor: getStatusBg(order.status),
 175:                             color: getStatusColor(order.status),
 176:                             borderRadius: '20px',
 177:                             fontSize: '13px',
 178:                             fontWeight: '600',
 179:                             textTransform: 'capitalize'
 180:                           }}>
 181:                             {order.status}
 182:                           </span>
 183:                           <span style={{
 184:                             padding: '6px 12px',
 185:                             backgroundColor: order.paymentMethod === 'cod' ? '#fff3e0' : '#e8f5e9',
 186:                             color: order.paymentMethod === 'cod' ? '#f57c00' : '#2e7d32',
 187:                             borderRadius: '15px',
 188:                             fontSize: '12px',
 189:                             fontWeight: '600'
 190:                           }}>
 191:                             {order.paymentMethod === 'cod' ? 'COD' : 'Paid Online'}
 192:                           </span>
 193:                         </div>
 194:                       </div>
 195: 
 196:                       {/* Order Items */}
 197:                       <div style={{ marginBottom: '20px' }}>
 198:                         {order.items.map((item, index) => (
 199:                           <div key={index} style={{
 200:                             display: 'flex',
 201:                             gap: '15px',
 202:                             padding: '15px',
 203:                             backgroundColor: 'var(--warm-cream)',
 204:                             borderRadius: '12px',
 205:                             marginBottom: index < order.items.length - 1 ? '10px' : '0'
 206:                           }}>
 207:                             <div style={{
 208:                               width: '60px',
 209:                               height: '60px',
 210:                               backgroundColor: 'var(--light-beige)',
 211:                               borderRadius: '8px',
 212:                               display: 'flex',
 213:                               alignItems: 'center',
 214:                               justifyContent: 'center',
 215:                               flexShrink: 0
 216:                             }}>
 217:                               <i className="lni lni-package" style={{
 218:                                 fontSize: '24px',
 219:                                 color: 'var(--soft-gold)'
 220:                               }}></i>
 221:                             </div>
 222:                             <div style={{ flex: 1 }}>
 223:                               <div style={{
 224:                                 fontWeight: '600',
 225:                                 marginBottom: '5px'
 226:                               }}>
 227:                                 {item.productName}
 228:                               </div>
 229:                               <div style={{
 230:                                 fontSize: '14px',
 231:                                 color: 'var(--soft-taupe)'
 232:                               }}>
 233:                                 Quantity: {item.quantity}
 234:                               </div>
 235:                             </div>
 236:                             <div style={{
 237:                               fontWeight: '700',
 238:                               color: 'var(--soft-gold)',
 239:                               fontSize: '16px'
 240:                             }}>
 241:                               ₹{item.price}
 242:                             </div>
 243:                           </div>
 244:                         ))}
 245:                       </div>
 246: 
 247:                       {/* Delivery Info */}
 248:                       {order.estimatedDelivery && (
 249:                         <div style={{
 250:                           display: 'flex',
 251:                           alignItems: 'center',
 252:                           gap: '12px',
 253:                           padding: '15px',
 254:                           backgroundColor: 'var(--light-beige)',
 255:                           borderRadius: '12px',
 256:                           marginBottom: '15px'
 257:                         }}>
 258:                           <i className="lni lni-delivery" style={{
 259:                             fontSize: '24px',
 260:                             color: 'var(--soft-gold)'
 261:                           }}></i>
 262:                           <div style={{ flex: 1 }}>
 263:                             <div style={{
 264:                               fontWeight: '600',
 265:                               fontSize: '14px',
 266:                               marginBottom: '3px'
 267:                             }}>
 268:                               Expected Delivery
 269:                             </div>
 270:                             <div style={{
 271:                               fontSize: '13px',
 272:                               color: 'var(--soft-taupe)'
 273:                             }}>
 274:                               {formatDate(order.estimatedDelivery.min)} - {formatDate(order.estimatedDelivery.max)}
 275:                             </div>
 276:                           </div>
 277:                         </div>
 278:                       )}
 279: 
 280:                       {/* Order Footer */}
 281:                       <div style={{
 282:                         display: 'flex',
 283:                         justifyContent: 'space-between',
 284:                         alignItems: 'center',
 285:                         paddingTop: '15px',
 286:                         borderTop: '2px solid var(--light-beige)',
 287:                         flexWrap: 'wrap',
 288:                         gap: '15px'
 289:                       }}>
 290:                         <div>
 291:                           <div style={{
 292:                             fontSize: '13px',
 293:                             color: 'var(--soft-taupe)',
 294:                             marginBottom: '5px'
 295:                           }}>
 296:                             Total Amount
 297:                           </div>
 298:                           <div style={{
 299:                             fontSize: '22px',
 300:                             fontWeight: '700',
 301:                             color: 'var(--soft-gold)'
 302:                           }}>
 303:                             ₹{order.total}
 304:                           </div>
 305:                         </div>
 306:                         
 307:                         <a 
 308:                           href={`/order-success?orderId=${order._id}`}
 309:                           className="btn btn-outline"
 310:                           style={{
 311:                             padding: '10px 20px',
 312:                             fontSize: '14px'
 313:                           }}
 314:                         >
 315:                           View Details
 316:                         </a>
 317:                       </div>
 318:                     </div>
 319:                   ))}
 320:                 </div>
 321:               </>
 322:             )}
 323:           </div>
 324:         </section>
 325:       </main>
 326:       <Footer />
 327:     </>
 328:   );
 329: }
```

---

### 📄 page.js

**Path:** `app/page.js`

```js
   1: // app/page.js
   2: 'use client';
   3: import { useState, useEffect } from 'react';
   4: import Header from '../components/Header';
   5: import Footer from '../components/Footer';
   6: 
   7: export default function Home() {
   8:   const [testimonials, setTestimonials] = useState([]);
   9:   const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  10: 
  11:   useEffect(() => {
  12:     fetchTestimonials();
  13:   }, []);
  14: 
  15:   const fetchTestimonials = async () => {
  16:     try {
  17:       const res = await fetch('/api/testimonials');
  18:       const data = await res.json();
  19:       setTestimonials(data.testimonials || []);
  20:     } catch (error) {
  21:       console.error('Error fetching testimonials:', error);
  22:     } finally {
  23:       setLoadingTestimonials(false);
  24:     }
  25:   };
  26: 
  27:   return (
  28:     <>
  29:       <Header />
  30:       <main>
  31:         {/* Hero Section */}
  32:         <section className="hero-modern">
  33:           <div className="hero-background">
  34:             <div className="hero-shape hero-shape-1"></div>
  35:             <div className="hero-shape hero-shape-2"></div>
  36:             <div className="hero-shape hero-shape-3"></div>
  37:           </div>
  38:           <div className="container">
  39:             <div className="hero-content-modern">
  40:               <div className="hero-badge">
  41:                 <i className="lni lni-star-filled"></i>
  42:                 <span>Premium Beauty & Home Collection</span>
  43:               </div>
  44:               <h1 className="hero-title-large">
  45:                 Embrace Your
  46:                 <span className="gradient-text"> Inner Glow</span>
  47:               </h1>
  48:               <p className="hero-subtitle">
  49:                 Discover a curated collection of beauty tools and home gadgets designed to elevate your daily rituals. From skincare essentials to ambient comfort, we bring luxury into your everyday moments.
  50:               </p>
  51:               <div className="hero-buttons-modern">
  52:                 <a href="/shop" className="btn btn-primary-large">
  53:                   <i className="lni lni-shopping-basket"></i>
  54:                   Shop Collection
  55:                 </a>
  56:                 <a href="/about" className="btn btn-glass">
  57:                   <i className="lni lni-heart"></i>
  58:                   Our Story
  59:                 </a>
  60:               </div>
  61:               <div className="hero-stats">
  62:                 <div className="stat-item">
  63:                   <h3>500+</h3>
  64:                   <p>Happy Customers</p>
  65:                 </div>
  66:                 <div className="stat-item">
  67:                   <h3>4.9★</h3>
  68:                   <p>Customer Rating</p>
  69:                 </div>
  70:                 <div className="stat-item">
  71:                   <h3>100%</h3>
  72:                   <p>Quality Guarantee</p>
  73:                 </div>
  74:               </div>
  75:             </div>
  76:           </div>
  77:         </section>
  78: 
  79:         {/* Featured Categories */}
  80:         <section className="section categories-modern">
  81:           <div className="container">
  82:             <div className="section-header-modern">
  83:               <div className="section-badge">Categories</div>
  84:               <h2>Shop by Collection</h2>
  85:               <p>Explore our carefully curated categories designed for your wellness journey</p>
  86:             </div>
  87:             
  88:             <div className="categories-grid-modern">
  89:               <a href="/shop?category=beauty-tools" className="category-card-modern">
  90:                 <div className="category-icon-wrapper">
  91:                   <i className="lni lni-brush-alt"></i>
  92:                 </div>
  93:                 <h3>Beauty Tools</h3>
  94:                 <p>Premium tools for radiant skin</p>
  95:                 <span className="category-link">Explore <i className="lni lni-arrow-right"></i></span>
  96:               </a>
  97:               
  98:               <a href="/shop?category=skincare-accessories" className="category-card-modern">
  99:                 <div className="category-icon-wrapper">
 100:                   <i className="lni lni-leaf"></i>
 101:                 </div>
 102:                 <h3>Skincare Accessories</h3>
 103:                 <p>Elevate your skincare ritual</p>
 104:                 <span className="category-link">Explore <i className="lni lni-arrow-right"></i></span>
 105:               </a>
 106:               
 107:               <a href="/shop?category=home-gadgets" className="category-card-modern">
 108:                 <div className="category-icon-wrapper">
 109:                   <i className="lni lni-home"></i>
 110:                 </div>
 111:                 <h3>Home Gadgets</h3>
 112:                 <p>Modern comfort for your space</p>
 113:                 <span className="category-link">Explore <i className="lni lni-arrow-right"></i></span>
 114:               </a>
 115:             </div>
 116:           </div>
 117:         </section>
 118: 
 119:         {/* Brand Story */}
 120:         <section className="section brand-story-modern">
 121:           <div className="container">
 122:             <div className="brand-content-modern" style={{gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto'}}>
 123:               <div className="brand-text-modern" style={{textAlign: 'center'}}>
 124:                 <div className="section-badge">Our Mission</div>
 125:                 <h2>Where Glow Meets Home</h2>
 126:                 <p>Founded in 2025, Lumivora emerged from a simple yet powerful idea: everyday moments deserve to be beautiful. We believe that self-care shouldn't be complicated or expensive.</p>
 127:                 <p>Our carefully curated collection bridges the gap between personal beauty and home comfort, bringing you products that seamlessly blend into your daily rituals while elevating every experience.</p>
 128:                 
 129:                 <div className="brand-features" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px'}}>
 130:                   <div className="feature-item">
 131:                     <i className="lni lni-checkmark-circle"></i>
 132:                     <span>Ethically Sourced Materials</span>
 133:                   </div>
 134:                   <div className="feature-item">
 135:                     <i className="lni lni-checkmark-circle"></i>
 136:                     <span>Cruelty-Free Products</span>
 137:                   </div>
 138:                   <div className="feature-item">
 139:                     <i className="lni lni-checkmark-circle"></i>
 140:                     <span>Sustainable Packaging</span>
 141:                   </div>
 142:                 </div>
 143:                 
 144:                 <div style={{marginTop: '30px'}}>
 145:                   <a href="/about" className="btn btn-primary-large">
 146:                     Learn More About Us
 147:                     <i className="lni lni-arrow-right"></i>
 148:                   </a>
 149:                 </div>
 150:               </div>
 151:             </div>
 152:           </div>
 153:         </section>
 154: 
 155:         {/* Benefits */}
 156:         <section className="section benefits-modern">
 157:           <div className="container">
 158:             <div className="benefits-grid-modern">
 159:               
 160:               <div className="benefit-card-modern">
 161:                 <div className="benefit-icon-modern">
 162:                   <i className="lni lni-shield"></i>
 163:                 </div>
 164:                 <h3>Quality Guarantee</h3>
 165:                 <p>100% satisfaction or money back</p>
 166:               </div>
 167:               
 168:               <div className="benefit-card-modern">
 169:                 <div className="benefit-icon-modern">
 170:                   <i className="lni lni-headphone"></i>
 171:                 </div>
 172:                 <h3>24/7 Support</h3>
 173:                 <p>Always here to help you</p>
 174:               </div>
 175:               
 176:               <div className="benefit-card-modern">
 177:                 <div className="benefit-icon-modern">
 178:                   <i className="lni lni-lock"></i>
 179:                 </div>
 180:                 <h3>Secure Payment</h3>
 181:                 <p>Your information is protected</p>
 182:               </div>
 183:             </div>
 184:           </div>
 185:         </section>
 186: 
 187:         {/* Testimonials - Now Dynamic */}
 188:         <section className="section testimonials-modern">
 189:           <div className="container">
 190:             <div className="section-header-modern">
 191:               <div className="section-badge">Testimonials</div>
 192:               <h2>What Our Customers Say</h2>
 193:               <p>Real reviews from real people</p>
 194:             </div>
 195:             
 196:             {loadingTestimonials ? (
 197:               <div className="loading-container">
 198:                 <div className="loading-spinner">
 199:                   <div className="spinner-circle"></div>
 200:                 </div>
 201:                 <p className="loading-text">Loading testimonials...</p>
 202:               </div>
 203:             ) : testimonials.length > 0 ? (
 204:               <div className="testimonials-grid-modern">
 205:                 {testimonials.slice(0, 6).map((testimonial) => (
 206:                   <div key={testimonial._id} className="testimonial-card-modern">
 207:                     <div className="testimonial-rating">
 208:                       {[...Array(testimonial.rating)].map((_, i) => (
 209:                         <i key={i} className="lni lni-star-filled"></i>
 210:                       ))}
 211:                       {[...Array(5 - testimonial.rating)].map((_, i) => (
 212:                         <i key={i} className="lni lni-star" style={{color: '#ddd'}}></i>
 213:                       ))}
 214:                     </div>
 215:                     <p>{testimonial.text}</p>
 216:                     <div className="testimonial-author">
 217:                       <div className="author-avatar">
 218:                         <i className="lni lni-user"></i>
 219:                       </div>
 220:                       <div>
 221:                         <h4>{testimonial.name}</h4>
 222:                         <span>Verified Buyer</span>
 223:                       </div>
 224:                     </div>
 225:                   </div>
 226:                 ))}
 227:               </div>
 228:             ) : (
 229:               <div className="empty-state" style={{padding: '60px 20px'}}>
 230:                 <i className="lni lni-comments"></i>
 231:                 <p style={{marginTop: '20px', color: 'var(--soft-taupe)'}}>
 232:                   No testimonials yet. Be the first to share your experience!
 233:                 </p>
 234:               </div>
 235:             )}
 236:           </div>
 237:         </section>
 238:       </main>
 239:       <Footer />
 240:     </>
 241:   );
 242: }
```

---

### 📁 privacy

**Path:** `app/privacy`


#### 📄 page.js

**Path:** `app/privacy/page.js`

```js
   1: // app/privacy/page.js
   2: import Header from '../../components/Header';
   3: import Footer from '../../components/Footer';
   4: 
   5: export default function Privacy() {
   6:   return (
   7:     <>
   8:       <Header />
   9:       <main>
  10:         <section className="hero" style={{padding: '80px 0'}}>
  11:           <div className="container">
  12:             <div className="hero-content">
  13:               <h1>Privacy Policy</h1>
  14:               <p>Last updated: November 18, 2025</p>
  15:             </div>
  16:           </div>
  17:         </section>
  18: 
  19:         <section className="section">
  20:           <div className="container">
  21:             <div className="brand-content">
  22:               <div className="brand-text" style={{maxWidth: '800px', margin: '0 auto'}}>
  23:                 
  24:                 <h2>Introduction</h2>
  25:                 <p>Welcome to Lumivora. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
  26:                 
  27:                 <h3>Information We Collect</h3>
  28:                 <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
  29:                 <ul style={{marginLeft: '20px', marginBottom: '20px'}}>
  30:                   <li><strong>Identity Data</strong>: first name, last name, username or similar identifier</li>
  31:                   <li><strong>Contact Data</strong>: billing address, delivery address, email address and telephone numbers</li>
  32:                   <li><strong>Financial Data</strong>: bank account and payment card details</li>
  33:                   <li><strong>Transaction Data</strong>: details about payments to and from you and other details of products and services you have purchased from us</li>
  34:                   <li><strong>Technical Data</strong>: internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform</li>
  35:                   <li><strong>Usage Data</strong>: information about how you use our website, products and services</li>
  36:                   <li><strong>Marketing Data</strong>: your preferences in receiving marketing from us and your communication preferences</li>
  37:                 </ul>
  38: 
  39:                 <h3>How We Use Your Information</h3>
  40:                 <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
  41:                 <ul style={{marginLeft: '20px', marginBottom: '20px'}}>
  42:                   <li>To process and deliver your order including managing payments, fees and charges, and collecting and recovering money owed to us</li>
  43:                   <li>To manage our relationship with you including notifying you about changes to our terms or privacy policy</li>
  44:                   <li>To enable you to partake in a prize draw, competition or complete a survey</li>
  45:                   <li>To administer and protect our business and this website including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data</li>
  46:                   <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you</li>
  47:                 </ul>
  48: 
  49:                 <h3>Data Security</h3>
  50:                 <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
  51: 
  52:                 <h3>Your Legal Rights</h3>
  53:                 <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
  54:                 <ul style={{marginLeft: '20px', marginBottom: '20px'}}>
  55:                   <li>Request access to your personal data</li>
  56:                   <li>Request correction of your personal data</li>
  57:                   <li>Request erasure of your personal data</li>
  58:                   <li>Object to processing of your personal data</li>
  59:                   <li>Request restriction of processing your personal data</li>
  60:                   <li>Request transfer of your personal data</li>
  61:                   <li>Right to withdraw consent</li>
  62:                 </ul>
  63: 
  64:                 <h3>Cookies</h3>
  65:                 <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.</p>
  66: 
  67:                 <h3>Third-Party Links</h3>
  68:                 <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>
  69: 
  70:                 <h3>Changes to This Privacy Policy</h3>
  71:                 <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.</p>
  72: 
  73:                 <h3>Contact Us</h3>
  74:                 <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
  75:                 <p><strong>Email:</strong> lumivorastore@gmail.com<br/></p>
  76:               </div>
  77:             </div>
  78:           </div>
  79:         </section>
  80:       </main>
  81:       <Footer />
  82:     </>
  83:   );
  84: }
```

---

### 📁 product

**Path:** `app/product`


#### 📁 [slug]

**Path:** `app/product/[slug]`


##### 📄 page.js

**Path:** `app/product/[slug]/page.js`

```js
   1: "use client"
   2: import { useState, useEffect } from 'react'
   3: import { useParams, useRouter } from 'next/navigation'
   4: import { useAuth } from '@/context/AuthContext'
   5: import Header from '@/components/Header'
   6: import Footer from '@/components/Footer'
   7: 
   8: export default function ProductDetail() {
   9:   const params = useParams()
  10:   const router = useRouter()
  11:   const { user, loading: authLoading } = useAuth()
  12:   const [product, setProduct] = useState(null)
  13:   const [loading, setLoading] = useState(true)
  14:   const [error, setError] = useState(null)
  15:   const [quantity, setQuantity] = useState(1)
  16:   const [selectedImage, setSelectedImage] = useState(0)
  17:   const [isInWishlist, setIsInWishlist] = useState(false)
  18:   const [addingToWishlist, setAddingToWishlist] = useState(false)
  19: 
  20:   useEffect(() => {
  21:     if (params.slug) {
  22:       fetchProduct()
  23:     }
  24:   }, [params.slug])
  25: 
  26:   useEffect(() => {
  27:     if (product && user) {
  28:       checkWishlistStatus()
  29:     }
  30:   }, [product, user])
  31: 
  32:   const fetchProduct = async () => {
  33:     try {
  34:       setLoading(true)
  35:       setError(null)
  36: 
  37:       const res = await fetch(`/api/products/by-slug/${params.slug}`)
  38:       const data = await res.json()
  39: 
  40:       if (res.ok) {
  41:         setProduct(data.product)
  42:       } else {
  43:         setError(data.error || 'Product not found')
  44:         setTimeout(() => {
  45:           router.push('/shop')
  46:         }, 3000)
  47:       }
  48:     } catch (error) {
  49:       console.error('Error fetching product:', error)
  50:       setError('Failed to load product')
  51:       setTimeout(() => {
  52:         router.push('/shop')
  53:       }, 3000)
  54:     } finally {
  55:       setLoading(false)
  56:     }
  57:   }
  58: 
  59:   const checkWishlistStatus = async () => {
  60:     try {
  61:       const res = await fetch('/api/wishlist')
  62:       if (res.ok) {
  63:         const data = await res.json()
  64:         setIsInWishlist(data.wishlist.some(item => item.id === product.id))
  65:       }
  66:     } catch (error) {
  67:       console.error('Error checking wishlist:', error)
  68:     }
  69:   }
  70: 
  71:   const toggleWishlist = async () => {
  72:     if (!user) {
  73:       router.push('/login')
  74:       return
  75:     }
  76: 
  77:     setAddingToWishlist(true)
  78:     try {
  79:       const method = isInWishlist ? 'DELETE' : 'POST'
  80:       const res = await fetch('/api/wishlist', {
  81:         method,
  82:         headers: { 'Content-Type': 'application/json' },
  83:         body: JSON.stringify({ productId: product.id })
  84:       })
  85: 
  86:       if (res.ok) {
  87:         setIsInWishlist(!isInWishlist)
  88:       }
  89:     } catch (error) {
  90:       console.error('Error updating wishlist:', error)
  91:     } finally {
  92:       setAddingToWishlist(false)
  93:     }
  94:   }
  95: 
  96:   const handleBuyNow = () => {
  97:     if (!user) {
  98:       router.push('/login')
  99:       return
 100:     }
 101:     router.push(`/checkout?productId=${product.id}`)
 102:   }
 103: 
 104:   if (loading || authLoading) {
 105:     return (
 106:       <>
 107:         <Header />
 108:         <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
 109:           <div className="loading-spinner">
 110:             <div className="spinner-circle"></div>
 111:             <p className="loading-text">Loading product...</p>
 112:           </div>
 113:         </main>
 114:         <Footer />
 115:       </>
 116:     )
 117:   }
 118: 
 119:   if (error) {
 120:     return (
 121:       <>
 122:         <Header />
 123:         <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
 124:           <div className="empty-state">
 125:             <i className="lni lni-package"></i>
 126:             <h3>Product Not Found</h3>
 127:             <p>{error}</p>
 128:             <p style={{ fontSize: '14px', color: 'var(--soft-taupe)', marginTop: '10px' }}>
 129:               Redirecting to shop in 3 seconds...
 130:             </p>
 131:             <a href="/shop" className="btn btn-primary-large" style={{ marginTop: '20px' }}>
 132:               Browse All Products
 133:             </a>
 134:           </div>
 135:         </main>
 136:         <Footer />
 137:       </>
 138:     )
 139:   }
 140: 
 141:   if (!product) {
 142:     return null
 143:   }
 144: 
 145:   const productImages = product.imageUrl ? [product.imageUrl] : []
 146: 
 147:   return (
 148:     <>
 149:       <Header />
 150:       <main style={{ paddingTop: '80px', paddingBottom: '60px' }}>
 151:         <section className="section">
 152:           <div className="container">
 153:             {/* Breadcrumb */}
 154:             <div style={{
 155:               marginBottom: '30px',
 156:               fontSize: '14px',
 157:               color: 'var(--soft-taupe)',
 158:               display: 'flex',
 159:               alignItems: 'center',
 160:               gap: '8px',
 161:               flexWrap: 'wrap'
 162:             }}>
 163:               <a href="/" style={{ color: 'var(--soft-taupe)', textDecoration: 'none' }}>Home</a>
 164:               <span>/</span>
 165:               <a href="/shop" style={{ color: 'var(--soft-taupe)', textDecoration: 'none' }}>Shop</a>
 166:               <span>/</span>
 167:               <span style={{ color: 'var(--charcoal-text)' }}>{product.name}</span>
 168:             </div>
 169: 
 170:             {/* Product Details */}
 171:             <div style={{
 172:               display: 'grid',
 173:               gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
 174:               gap: '50px',
 175:               alignItems: 'start'
 176:             }}>
 177:               {/* Product Image */}
 178:               <div>
 179:                 <div style={{
 180:                   backgroundColor: 'var(--warm-cream)',
 181:                   borderRadius: '20px',
 182:                   padding: '40px',
 183:                   marginBottom: '20px',
 184:                   minHeight: '400px',
 185:                   display: 'flex',
 186:                   alignItems: 'center',
 187:                   justifyContent: 'center'
 188:                 }}>
 189:                   {productImages.length > 0 ? (
 190:                     <img
 191:                       src={productImages[selectedImage]}
 192:                       alt={product.name}
 193:                       style={{
 194:                         maxWidth: '100%',
 195:                         maxHeight: '500px',
 196:                         objectFit: 'contain'
 197:                       }}
 198:                     />
 199:                   ) : (
 200:                     <i className="lni lni-package" style={{ fontSize: '120px', color: 'var(--soft-gold)' }}></i>
 201:                   )}
 202:                 </div>
 203:               </div>
 204: 
 205:               {/* Product Info */}
 206:               <div>
 207:                 <div style={{
 208:                   display: 'inline-block',
 209:                   padding: '8px 16px',
 210:                   backgroundColor: 'var(--light-beige)',
 211:                   borderRadius: '20px',
 212:                   fontSize: '13px',
 213:                   fontWeight: 600,
 214:                   textTransform: 'capitalize',
 215:                   color: 'var(--soft-gold)',
 216:                   marginBottom: '20px'
 217:                 }}>
 218:                   {product.category.replace('-', ' ')}
 219:                 </div>
 220: 
 221:                 <h1 style={{
 222:                   fontSize: 'clamp(28px, 5vw, 42px)',
 223:                   marginBottom: '15px',
 224:                   color: 'var(--charcoal-text)'
 225:                 }}>
 226:                   {product.name}
 227:                 </h1>
 228: 
 229:                 <div style={{
 230:                   fontSize: 'clamp(32px, 6vw, 42px)',
 231:                   fontWeight: 700,
 232:                   color: 'var(--soft-gold)',
 233:                   marginBottom: '25px'
 234:                 }}>
 235:                   {product.price}
 236:                 </div>
 237: 
 238:                 <p style={{
 239:                   color: 'var(--soft-taupe)',
 240:                   fontSize: '16px',
 241:                   lineHeight: 1.8,
 242:                   marginBottom: '30px'
 243:                 }}>
 244:                   {product.description}
 245:                 </p>
 246: 
 247:                 <div style={{
 248:                   display: 'flex',
 249:                   alignItems: 'center',
 250:                   gap: '10px',
 251:                   marginBottom: '30px',
 252:                   padding: '15px',
 253:                   backgroundColor: product.stock > 0 ? '#e8f5e9' : '#ffebee',
 254:                   borderRadius: '12px'
 255:                 }}>
 256:                   <i className={`lni ${product.stock > 0 ? 'lni-checkmark-circle' : 'lni-close-circle'}`}
 257:                     style={{ fontSize: '24px', color: product.stock > 0 ? '#4caf50' : '#f44336' }}></i>
 258:                   <span style={{
 259:                     fontWeight: 600,
 260:                     color: product.stock > 0 ? '#2e7d32' : '#c62828'
 261:                   }}>
 262:                     {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
 263:                   </span>
 264:                 </div>
 265: 
 266:                 <div style={{
 267:                   display: 'flex',
 268:                   gap: '15px',
 269:                   marginBottom: '30px',
 270:                   flexWrap: 'wrap'
 271:                 }}>
 272:                   {product.stock > 0 && (
 273:                     <button
 274:                       onClick={handleBuyNow}
 275:                       className="btn btn-primary-large"
 276:                       style={{ flex: 1, minWidth: '200px' }}
 277:                     >
 278:                       <i className="lni lni-cart"></i>
 279:                       Buy Now
 280:                     </button>
 281:                   )}
 282: 
 283:                   <button
 284:                     onClick={toggleWishlist}
 285:                     disabled={addingToWishlist}
 286:                     className="btn btn-outline-large"
 287:                     style={{
 288:                       backgroundColor: isInWishlist ? 'var(--soft-gold)' : 'transparent',
 289:                       color: isInWishlist ? 'white' : 'var(--charcoal-text)',
 290:                       borderColor: 'var(--soft-gold)'
 291:                     }}
 292:                   >
 293:                     <i className={`lni ${isInWishlist ? 'lni-heart-filled' : 'lni-heart'}`}></i>
 294:                     {addingToWishlist ? 'Updating...' : (isInWishlist ? 'In Wishlist' : 'Add to Wishlist')}
 295:                   </button>
 296:                 </div>
 297:               </div>
 298:             </div>
 299:           </div>
 300:         </section>
 301:       </main>
 302:       <Footer />
 303:     </>
 304:   )
 305: }
```

---

### 📁 register

**Path:** `app/register`


#### 📄 page.js

**Path:** `app/register/page.js`

```js
   1: // app/register/page.js
   2: 'use client';
   3: import { useState } from 'react';
   4: import { useRouter } from 'next/navigation';
   5: import { useAuth } from '@/context/AuthContext';
   6: import Header from '@/components/Header';
   7: import Footer from '@/components/Footer';
   8: 
   9: export default function Register() {
  10:   const router = useRouter();
  11:   const { register } = useAuth();
  12:   const [formData, setFormData] = useState({
  13:     name: '',
  14:     email: '',
  15:     password: '',
  16:     confirmPassword: ''
  17:   });
  18:   const [error, setError] = useState('');
  19:   const [loading, setLoading] = useState(false);
  20: 
  21:   const handleSubmit = async (e) => {
  22:     e.preventDefault();
  23:     setError('');
  24: 
  25:     // Validation
  26:     if (formData.password !== formData.confirmPassword) {
  27:       setError('Passwords do not match');
  28:       return;
  29:     }
  30: 
  31:     if (formData.password.length < 6) {
  32:       setError('Password must be at least 6 characters');
  33:       return;
  34:     }
  35: 
  36:     setLoading(true);
  37:     const result = await register(formData.name, formData.email, formData.password);
  38: 
  39:     if (result.success) {
  40:       router.push('/');
  41:     } else {
  42:       setError(result.error);
  43:     }
  44:     setLoading(false);
  45:   };
  46: 
  47:   return (
  48:     <>
  49:       <Header />
  50:       <main>
  51:         <section className="admin-login">
  52:           <div className="login-container">
  53:             <div className="login-card">
  54:               <h1>Lumi<span style={{color: 'var(--soft-gold)'}}>vora</span></h1>
  55:               <h2>Create Account</h2>
  56:               <p style={{marginBottom: '30px', color: 'var(--soft-taupe)'}}>
  57:                 Join us today
  58:               </p>
  59: 
  60:               {error && (
  61:                 <div className="error-message" style={{
  62:                   backgroundColor: '#fee',
  63:                   color: '#c33',
  64:                   padding: '12px',
  65:                   borderRadius: '6px',
  66:                   marginBottom: '20px',
  67:                   fontSize: '14px'
  68:                 }}>
  69:                   {error}
  70:                 </div>
  71:               )}
  72: 
  73:               <form onSubmit={handleSubmit}>
  74:                 <div className="form-group">
  75:                   <label>Full Name</label>
  76:                   <input
  77:                     type="text"
  78:                     value={formData.name}
  79:                     onChange={(e) => setFormData({...formData, name: e.target.value})}
  80:                     required
  81:                     disabled={loading}
  82:                     placeholder="Enter your full name"
  83:                   />
  84:                 </div>
  85: 
  86:                 <div className="form-group">
  87:                   <label>Email</label>
  88:                   <input
  89:                     type="email"
  90:                     value={formData.email}
  91:                     onChange={(e) => setFormData({...formData, email: e.target.value})}
  92:                     required
  93:                     disabled={loading}
  94:                     placeholder="Enter your email"
  95:                   />
  96:                 </div>
  97: 
  98:                 <div className="form-group">
  99:                   <label>Password</label>
 100:                   <input
 101:                     type="password"
 102:                     value={formData.password}
 103:                     onChange={(e) => setFormData({...formData, password: e.target.value})}
 104:                     required
 105:                     disabled={loading}
 106:                     placeholder="Create a password (min 6 characters)"
 107:                   />
 108:                 </div>
 109: 
 110:                 <div className="form-group">
 111:                   <label>Confirm Password</label>
 112:                   <input
 113:                     type="password"
 114:                     value={formData.confirmPassword}
 115:                     onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
 116:                     required
 117:                     disabled={loading}
 118:                     placeholder="Confirm your password"
 119:                   />
 120:                 </div>
 121: 
 122:                 <button 
 123:                   type="submit" 
 124:                   className="btn" 
 125:                   style={{width: '100%', marginTop: '10px'}}
 126:                   disabled={loading}
 127:                 >
 128:                   {loading ? 'Creating Account...' : 'Create Account'}
 129:                 </button>
 130:               </form>
 131: 
 132:               <p style={{
 133:                 textAlign: 'center',
 134:                 marginTop: '20px',
 135:                 color: 'var(--soft-taupe)',
 136:                 fontSize: '14px'
 137:               }}>
 138:                 Already have an account?{' '}
 139:                 <a href="/login" style={{
 140:                   color: 'var(--soft-gold)',
 141:                   textDecoration: 'none',
 142:                   fontWeight: '600'
 143:                 }}>
 144:                   Sign in
 145:                 </a>
 146:               </p>
 147: 
 148:               <a href="/" className="back-link">
 149:                 <i className="lni lni-arrow-left"></i> Back to Home
 150:               </a>
 151:             </div>
 152:           </div>
 153:         </section>
 154:       </main>
 155:       <Footer />
 156:     </>
 157:   );
 158: }
```

---

### 📁 robots.txt

**Path:** `app/robots.txt`


#### 📄 route.js

**Path:** `app/robots.txt/route.js`

```js
   1: // app/robots.txt/route.js
   2: export async function GET() {
   3:   const robots = `User-agent: *
   4: Allow: /
   5: Disallow: /admin/
   6: Disallow: /api/
   7: 
   8: Sitemap: https://lumivora.com/sitemap.xml`
   9: 
  10:   return new Response(robots, {
  11:     headers: {
  12:       'Content-Type': 'text/plain',
  13:     },
  14:   })
  15: }
```

---

### 📁 shop

**Path:** `app/shop`


#### 📄 page.js

**Path:** `app/shop/page.js`

```js
   1: // app/shop/page.js
   2: "use client"
   3: import { useState, useEffect } from 'react'
   4: import { useRouter } from 'next/navigation'
   5: import Header from '../../components/Header'
   6: import Footer from '../../components/Footer'
   7: 
   8: // Slug generation function
   9: function slugify(text) {
  10:   if (!text) return ''
  11:   
  12:   return text
  13:     .toString()
  14:     .trim()
  15:     .toLowerCase()
  16:     .replace(/[^\w\s-]/g, '') // Keep word chars, spaces, and hyphens
  17:     .replace(/\s+/g, '-')      // Replace spaces with hyphens
  18:     .replace(/-+/g, '-')       // Replace multiple hyphens with single
  19:     .replace(/^-+|-+$/g, '')   // Remove leading/trailing hyphens
  20: }
  21: 
  22: export default function Shop() {
  23:   const router = useRouter()
  24:   const [products, setProducts] = useState([])
  25:   const [loading, setLoading] = useState(true)
  26:   const [selectedCategory, setSelectedCategory] = useState('all')
  27:   const [sortBy, setSortBy] = useState('newest')
  28: 
  29:   useEffect(() => {
  30:     fetchProducts()
  31:   }, [selectedCategory])
  32: 
  33:   const fetchProducts = async () => {
  34:     setLoading(true)
  35:     try {
  36:       const url = selectedCategory === 'all' 
  37:         ? '/api/products' 
  38:         : `/api/products?category=${selectedCategory}`
  39:       
  40:       const res = await fetch(url)
  41:       const data = await res.json()
  42:       setProducts(data.products || [])
  43:     } catch (error) {
  44:       console.error('Error fetching products:', error)
  45:     } finally {
  46:       setLoading(false)
  47:     }
  48:   }
  49: 
  50:   const sortedProducts = [...products].sort((a, b) => {
  51:     switch (sortBy) {
  52:       case 'price-low':
  53:         return a.price - b.price
  54:       case 'price-high':
  55:         return b.price - a.price
  56:       case 'name':
  57:         return a.name.localeCompare(b.name)
  58:       default:
  59:         return new Date(b.createdAt) - new Date(a.createdAt)
  60:     }
  61:   })
  62: 
  63:   const handleProductClick = (productName) => {
  64:     const slug = slugify(productName)
  65:     console.log('Product name:', productName)
  66:     console.log('Generated slug:', slug)
  67:     console.log('Navigating to:', `/product/${slug}`)
  68:     router.push(`/product/${slug}`)
  69:   }
  70: 
  71:   return (
  72:     <>
  73:       <Header />
  74:       <main>
  75:         {/* Hero Section */}
  76:         <section className="hero" style={{ padding: '80px 0', minHeight: 'auto' }}>
  77:           <div className="container">
  78:             <div className="hero-content">
  79:               <h1>Shop All Products</h1>
  80:               <p>Discover our complete collection of beauty tools, skincare accessories, and home gadgets</p>
  81:             </div>
  82:           </div>
  83:         </section>
  84: 
  85:         {/* Products Section */}
  86:         <section className="section">
  87:           <div className="container">
  88:             {/* Filters */}
  89:             <div className="shop-filters">
  90:               <div className="filter-group">
  91:                 <label>Category</label>
  92:                 <select 
  93:                   className="filter-select"
  94:                   value={selectedCategory}
  95:                   onChange={(e) => setSelectedCategory(e.target.value)}
  96:                 >
  97:                   <option value="all">All Categories</option>
  98:                   <option value="beauty-tools">Beauty Tools</option>
  99:                   <option value="skincare-accessories">Skincare Accessories</option>
 100:                   <option value="home-gadgets">Home Gadgets</option>
 101:                 </select>
 102:               </div>
 103: 
 104:               <div className="filter-group">
 105:                 <label>Sort by</label>
 106:                 <select 
 107:                   className="filter-select"
 108:                   value={sortBy}
 109:                   onChange={(e) => setSortBy(e.target.value)}
 110:                 >
 111:                   <option value="newest">Newest First</option>
 112:                   <option value="price-low">Price: Low to High</option>
 113:                   <option value="price-high">Price: High to Low</option>
 114:                   <option value="name">Name: A to Z</option>
 115:                 </select>
 116:               </div>
 117: 
 118:               <div className="product-count">
 119:                 {sortedProducts.length} {sortedProducts.length === 1 ? 'Product' : 'Products'}
 120:               </div>
 121:             </div>
 122: 
 123:             {/* Products Grid */}
 124:             {loading ? (
 125:               <div className="skeleton-grid">
 126:                 {[1, 2, 3, 4].map(n => (
 127:                   <div key={n} className="skeleton-card">
 128:                     <div className="skeleton-image"></div>
 129:                     <div className="skeleton-content">
 130:                       <div className="skeleton-title"></div>
 131:                       <div className="skeleton-description"></div>
 132:                       <div className="skeleton-description"></div>
 133:                       <div className="skeleton-footer">
 134:                         <div className="skeleton-price"></div>
 135:                         <div className="skeleton-button"></div>
 136:                       </div>
 137:                     </div>
 138:                   </div>
 139:                 ))}
 140:               </div>
 141:             ) : sortedProducts.length > 0 ? (
 142:               <div className="products">
 143:                 {sortedProducts.map(product => {
 144:                   const productSlug = slugify(product.name)
 145:                   
 146:                   return (
 147:                     <div
 148:                       key={product.id}
 149:                       className="product-card"
 150:                     >
 151:                       <div 
 152:                         className="product-img"
 153:                         onClick={() => handleProductClick(product.name)}
 154:                         style={{ cursor: 'pointer' }}
 155:                       >
 156:                         {product.imageUrl ? (
 157:                           <img 
 158:                             src={product.imageUrl} 
 159:                             alt={product.name} 
 160:                             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
 161:                           />
 162:                         ) : (
 163:                           <i className="lni lni-package"></i>
 164:                         )}
 165:                       </div>
 166:                       <div className="product-content">
 167:                         <h3 
 168:                           onClick={() => handleProductClick(product.name)}
 169:                           style={{ cursor: 'pointer' }}
 170:                         >
 171:                           {product.name}
 172:                         </h3>
 173:                         <p className="product-price">₹{product.price}</p>
 174:                         <p>{product.description}</p>
 175:                         {product.stock > 0 ? (
 176:                           <button 
 177:                             className="btn"
 178:                             onClick={() => handleProductClick(product.name)}
 179:                           >
 180:                             View Details
 181:                           </button>
 182:                         ) : (
 183:                           <button className="btn" disabled style={{ opacity: 0.5 }}>
 184:                             Out of Stock
 185:                           </button>
 186:                         )}
 187:                       </div>
 188:                     </div>
 189:                   )
 190:                 })}
 191:               </div>
 192:             ) : (
 193:               <div className="empty-products">
 194:                 <i className="lni lni-package"></i>
 195:                 <h3>No Products Found</h3>
 196:                 <p>Try adjusting your filters or check back later for new products.</p>
 197:               </div>
 198:             )}
 199:           </div>
 200:         </section>
 201:       </main>
 202:       <Footer />
 203:     </>
 204:   )
 205: }
```

---

### 📁 sitemap.xml

**Path:** `app/sitemap.xml`


#### 📄 route.js

**Path:** `app/sitemap.xml/route.js`

```js
   1: // app/sitemap.xml/route.js
   2: export async function GET() {
   3:   const baseUrl = 'https://lumivorastore.vercel.app'
   4:   
   5:   const staticPages = [
   6:     '',
   7:     '/shop',
   8:     '/about',
   9:     '/privacy',
  10:     '/terms',
  11:   ]
  12: 
  13:   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  14: <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  15:   ${staticPages.map(page => `
  16:     <url>
  17:       <loc>${baseUrl}${page}</loc>
  18:       <lastmod>${new Date().toISOString()}</lastmod>
  19:       <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
  20:       <priority>${page === '' ? '1.0' : '0.8'}</priority>
  21:     </url>
  22:   `).join('')}
  23: </urlset>`
  24: 
  25:   return new Response(sitemap, {
  26:     headers: {
  27:       'Content-Type': 'application/xml',
  28:     },
  29:   })
  30: }
```

---

### 📁 terms

**Path:** `app/terms`


#### 📄 page.js

**Path:** `app/terms/page.js`

```js
   1: // app/terms/page.js
   2: import Header from '../../components/Header';
   3: import Footer from '../../components/Footer';
   4: 
   5: export default function Terms() {
   6:   return (
   7:     <>
   8:       <Header />
   9:       <main>
  10:         <section className="hero" style={{padding: '80px 0'}}>
  11:           <div className="container">
  12:             <div className="hero-content">
  13:               <h1>Terms of Service</h1>
  14:               <p>Last updated: November 18, 2025</p>
  15:             </div>
  16:           </div>
  17:         </section>
  18: 
  19:         <section className="section">
  20:           <div className="container">
  21:             <div className="brand-content">
  22:               <div className="brand-text" style={{maxWidth: '800px', margin: '0 auto'}}>
  23:                 
  24:                 <h2>Agreement to Terms</h2>
  25:                 <p>By accessing and using Lumivora's website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our website or purchase our products.</p>
  26:                 
  27:                 <h3>Use of Our Website</h3>
  28:                 <p>By using our website, you warrant that:</p>
  29:                 <ul style={{marginLeft: '20px', marginBottom: '20px'}}>
  30:                   <li>You are legally capable of entering into binding contracts</li>
  31:                   <li>You are at least 18 years of age</li>
  32:                   <li>You will use the website in accordance with these Terms of Service</li>
  33:                   <li>You will not use the website for any illegal or unauthorized purpose</li>
  34:                   <li>Your use of the website will not violate any applicable law or regulation</li>
  35:                 </ul>
  36: 
  37:                 <h3>Products and Services</h3>
  38:                 <p>All products and services are subject to availability. We reserve the right to discontinue any product at any time. We reserve the right to limit the quantities of any products or services that we offer.</p>
  39:                 <p>All descriptions of products or product pricing are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time.</p>
  40: 
  41:                 <h3>Pricing and Payment</h3>
  42:                 <p>All prices are listed in Indian Rupees unless otherwise stated. We reserve the right to change prices at any time without notice. However, if we change the price of a product that you have already ordered, we will contact you before processing your order.</p>
  43:                 <p>Payment must be received by us before we dispatch your order. We accept the following forms of payment:</p>
  44:                 <ul style={{marginLeft: '20px', marginBottom: '20px'}}>
  45:                   <li>Phone Pe</li>
  46:                   <li>Google Pay</li>
  47:                 </ul>
  48: 
  49:                 <h3>Shipping and Delivery</h3>
  50:                 <p>We ship to addresses within the United States and internationally. Shipping costs and delivery times vary depending on your location and the shipping method selected.</p>
  51:                 <p>We are not responsible for delays caused by customs, postal services, or courier services. Risk of loss and title for items purchased from Lumivora pass to you upon delivery to the carrier.</p>
  52: 
  53:                 <h3>Intellectual Property</h3>
  54:                 <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Lumivora and is protected by copyright, trademark, and other intellectual property laws.</p>
  55:                 <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of the content without our express written permission.</p>
  56: 
  57:                 <h3>User Accounts</h3>
  58:                 <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password that you use to access the website and for any activities under your password.</p>
  59: 
  60:                 <h3>Limitation of Liability</h3>
  61:                 <p>To the fullest extent permitted by law, Lumivora shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.</p>
  62: 
  63:                 <h3>Indemnification</h3>
  64:                 <p>You agree to indemnify and hold harmless Lumivora and its officers, directors, employees, and agents from any claims, damages, liabilities, costs, and expenses arising out of your use of the website or violation of these Terms of Service.</p>
  65: 
  66:                 <h3>Governing Law</h3>
  67:                 <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.</p>
  68: 
  69:                 <h3>Changes to Terms</h3>
  70:                 <p>We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
  71: 
  72:                 <h3>Contact Information</h3>
  73:                 <p>If you have any questions about these Terms of Service, please contact us at:</p>
  74:                 <p><strong>Email:</strong> lumivorastore@gmail.com<br/></p>
  75: 
  76:                 <p style={{marginTop: '40px', fontStyle: 'italic', color: 'var(--soft-taupe)'}}>By using our website and purchasing our products, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
  77: 
  78:               </div>
  79:             </div>
  80:           </div>
  81:         </section>
  82:       </main>
  83:       <Footer />
  84:     </>
  85:   );
  86: }
```

---

### 📁 wishlist

**Path:** `app/wishlist`


#### 📄 page.js

**Path:** `app/wishlist/page.js`

```js
   1: // app/wishlist/page.js - Updated with slug URLs
   2: 'use client';
   3: import { useEffect, useState } from 'react';
   4: import { useRouter } from 'next/navigation';
   5: import { useAuth } from '@/context/AuthContext';
   6: import Header from '@/components/Header';
   7: import Footer from '@/components/Footer';
   8: 
   9: // Helper function to create slug
  10: // Update the slugify function at the top
  11: function slugify(text) {
  12:   if (!text) return '';
  13:   
  14:   return text
  15:     .toString()
  16:     .trim()
  17:     .toLowerCase()
  18:     .replace(/[^ws-]/g, '')
  19:     .replace(/s+/g, '-')
  20:     .replace(/-+/g, '-')
  21:     .replace(/^-+|-+$/g, '');
  22: }
  23: 
  24: export default function Wishlist() {
  25:   const router = useRouter();
  26:   const { user, loading: authLoading } = useAuth();
  27:   const [wishlist, setWishlist] = useState([]);
  28:   const [loading, setLoading] = useState(true);
  29: 
  30:   useEffect(() => {
  31:     if (!authLoading && !user) {
  32:       router.push('/login');
  33:     } else if (user) {
  34:       fetchWishlist();
  35:     }
  36:   }, [user, authLoading, router]);
  37: 
  38:   const fetchWishlist = async () => {
  39:     try {
  40:       const res = await fetch('/api/wishlist');
  41:       if (res.ok) {
  42:         const data = await res.json();
  43:         setWishlist(data.wishlist || []);
  44:       }
  45:     } catch (error) {
  46:       console.error('Error fetching wishlist:', error);
  47:     } finally {
  48:       setLoading(false);
  49:     }
  50:   };
  51: 
  52:   const removeFromWishlist = async (productId) => {
  53:     try {
  54:       const res = await fetch('/api/wishlist', {
  55:         method: 'DELETE',
  56:         headers: { 'Content-Type': 'application/json' },
  57:         body: JSON.stringify({ productId })
  58:       });
  59: 
  60:       if (res.ok) {
  61:         setWishlist(wishlist.filter(item => item._id !== productId));
  62:       }
  63:     } catch (error) {
  64:       console.error('Error removing from wishlist:', error);
  65:     }
  66:   };
  67: 
  68:   if (authLoading || loading) {
  69:     return (
  70:       <>
  71:         <Header />
  72:         <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  73:           <div className="loading-spinner">
  74:             <div className="spinner-circle"></div>
  75:           </div>
  76:         </main>
  77:         <Footer />
  78:       </>
  79:     );
  80:   }
  81: 
  82:   if (!user) {
  83:     return null;
  84:   }
  85: 
  86:   return (
  87:     <>
  88:       <Header />
  89:       <main>
  90:         <section className="hero" style={{padding: '80px 0', minHeight: 'auto'}}>
  91:           <div className="container">
  92:             <div className="hero-content">
  93:               <h1>Your Wishlist</h1>
  94:               <p>Save your favorite items for later</p>
  95:             </div>
  96:           </div>
  97:         </section>
  98: 
  99:         <section className="section">
 100:           <div className="container">
 101:             {wishlist.length === 0 ? (
 102:               <div className="empty-products">
 103:                 <i className="lni lni-heart"></i>
 104:                 <h3>Your Wishlist is Empty</h3>
 105:                 <p>Start adding products you love to your wishlist.</p>
 106:                 <a href="/shop" className="btn btn-primary-large" style={{ marginTop: '20px' }}>
 107:                   <i className="lni lni-shopping-basket"></i>
 108:                   Browse Products
 109:                 </a>
 110:               </div>
 111:             ) : (
 112:               <>
 113:                 <div style={{ 
 114:                   marginBottom: '30px',
 115:                   fontSize: '16px',
 116:                   color: 'var(--soft-taupe)'
 117:                 }}>
 118:                   {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} in your wishlist
 119:                 </div>
 120: 
 121:                 <div className="products">
 122:                   {wishlist.map(product => {
 123:                     const productSlug = slugify(product.name);
 124:                     return (
 125:                       <div key={product._id} className="product-card">
 126:                         <div className="product-img">
 127:                           {product.imageUrl ? (
 128:                             <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
 129:                           ) : (
 130:                             <i className="lni lni-package"></i>
 131:                           )}
 132:                         </div>
 133:                         <div className="product-content">
 134:                           <h3>{product.name}</h3>
 135:                           <p className="product-price">₹{product.price}</p>
 136:                           <p>{product.description}</p>
 137:                           
 138:                           <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
 139:                             <a 
 140:                               href={`/product/${productSlug}`}
 141:                               className="btn"
 142:                               style={{ flex: 1 }}
 143:                             >
 144:                               View Details
 145:                             </a>
 146:                             <button
 147:                               onClick={() => removeFromWishlist(product._id)}
 148:                               className="btn btn-outline"
 149:                               style={{ 
 150:                                 padding: '10px',
 151:                                 minWidth: '45px'
 152:                               }}
 153:                               title="Remove from wishlist"
 154:                             >
 155:                               <i className="lni lni-trash"></i>
 156:                             </button>
 157:                           </div>
 158:                         </div>
 159:                       </div>
 160:                     );
 161:                   })}
 162:                 </div>
 163:               </>
 164:             )}
 165:           </div>
 166:         </section>
 167:       </main>
 168:       <Footer />
 169:     </>
 170:   );
 171: }
```

---

## 📁 components

**Path:** `components`


### 📄 Footer.js

**Path:** `components/Footer.js`

```js
   1: // components/Footer.js
   2: export default function Footer() {
   3:   return (
   4:     <footer>
   5:       <div className="container">
   6:         <div className="footer-content">
   7:           <div className="footer-about">
   8:             <div className="footer-logo">Lumi<span>vora</span></div>
   9:             <p>Beauty tools and home gadgets designed to elevate your daily life with a touch of luxury and glow.</p>
  10:             <div className="social-icons">
  11:               <a href="#" aria-label="Instagram">
  12:                 <i className="lni lni-instagram-original"></i>
  13:               </a>
  14:               <a href="#" aria-label="Pinterest">
  15:                 <i className="lni lni-pinterest"></i>
  16:               </a>
  17:               <a href="#" aria-label="Facebook">
  18:                 <i className="lni lni-facebook"></i>
  19:               </a>
  20:             </div>
  21:           </div>
  22:           
  23:           <div className="footer-links">
  24:             <h3>Information</h3>
  25:             <ul>
  26:               <li><a href="/about">About Us</a></li>
  27:               <li><a href="/privacy">Privacy Policy</a></li>
  28:               <li><a href="/terms">Terms of Service</a></li>
  29:             </ul>
  30:           </div>
  31:         </div>
  32:         
  33:         <div className="footer-bottom">
  34:           <p>&copy; 2025 Lumivora. All rights reserved.</p>
  35:         </div>
  36:       </div>
  37:     </footer>
  38:   );
  39: }
```

---

### 📄 Header.js

**Path:** `components/Header.js`

```js
   1: // components/Header.js
   2: 'use client';
   3: import { useState, useEffect } from 'react';
   4: import { useAuth } from '@/context/AuthContext';
   5: import SearchModal from './SearchModal';
   6: 
   7: export default function Header() {
   8:   const [isMenuOpen, setIsMenuOpen] = useState(false);
   9:   const [isSearchOpen, setIsSearchOpen] = useState(false);
  10:   const [isScrolled, setIsScrolled] = useState(false);
  11:   const [cartCount, setCartCount] = useState(0);
  12:   const { user, loading, logout } = useAuth();
  13: 
  14:   // Check if user is admin
  15:   const isAdmin = user?.email === 'itsrugveddanej@gmail.com';
  16: 
  17:   useEffect(() => {
  18:     const handleScroll = () => {
  19:       setIsScrolled(window.scrollY > 50);
  20:     };
  21:     window.addEventListener('scroll', handleScroll);
  22:     return () => window.removeEventListener('scroll', handleScroll);
  23:   }, []);
  24: 
  25:   const handleLogout = async () => {
  26:     await logout();
  27:     setIsMenuOpen(false);
  28:     window.location.href = '/';
  29:   };
  30: 
  31:   return (
  32:     <>
  33:       {/* Desktop Header */}
  34:       <header className={`desktop-header ${isScrolled ? 'scrolled' : ''}`}>
  35:         <div className="container">
  36:           <div className="header-container">
  37:             <a href="/" className="logo">
  38:               Lumi<span>vora</span>
  39:             </a>
  40:             
  41:             <nav className="main-nav">
  42:               <ul>
  43:                 <li><a href="/">Home</a></li>
  44:                 <li><a href="/shop">Shop</a></li>
  45:                 <li><a href="/about">About</a></li>
  46:                 <li><a href="/contact">Contact</a></li>
  47:               </ul>
  48:             </nav>
  49:             
  50:             <div className="header-icons">
  51:               <button 
  52:                 onClick={() => setIsSearchOpen(true)}
  53:                 className="icon-btn"
  54:                 aria-label="Search"
  55:               >
  56:                 <i className="lni lni-search-alt"></i>
  57:               </button>
  58:               
  59:               {!loading && (
  60:                 user ? (
  61:                   <div className="nav-dropdown">
  62:                     <button className="icon-btn" aria-label="Account">
  63:                       <i className="lni lni-user"></i>
  64:                     </button>
  65:                     <div className="dropdown-menu" style={{right: 0, left: 'auto'}}>
  66:                       <div style={{padding: '10px 15px', borderBottom: '1px solid var(--light-beige)'}}>
  67:                         <strong style={{fontSize: '14px'}}>{user.name}</strong>
  68:                         <div style={{fontSize: '12px', color: 'var(--soft-taupe)'}}>{user.email}</div>
  69:                       </div>
  70:                       
  71:                       {/* Admin Dashboard Link - Only visible to admin */}
  72:                       {isAdmin && (
  73:                         <a href="/admin/dashboard" style={{
  74:                           backgroundColor: 'var(--light-beige)',
  75:                           borderBottom: '1px solid var(--warm-cream)'
  76:                         }}>
  77:                           <i className="lni lni-cog" style={{color: 'var(--soft-gold)'}}></i>
  78:                           <div>
  79:                             <strong style={{color: 'var(--soft-gold)'}}>Admin Dashboard</strong>
  80:                             <span>Manage your store</span>
  81:                           </div>
  82:                         </a>
  83:                       )}
  84:                       
  85:                       <a href="/account">
  86:                         <i className="lni lni-user"></i>
  87:                         <div>
  88:                           <strong>My Account</strong>
  89:                           <span>View your profile</span>
  90:                         </div>
  91:                       </a>
  92:                       <a href="/orders">
  93:                         <i className="lni lni-package"></i>
  94:                         <div>
  95:                           <strong>Your Orders</strong>
  96:                           <span>Track orders</span>
  97:                         </div>
  98:                       </a>
  99:                       <a href="/wishlist">
 100:                         <i className="lni lni-heart"></i>
 101:                         <div>
 102:                           <strong>Wishlist</strong>
 103:                           <span>Saved items</span>
 104:                         </div>
 105:                       </a>
 106:                       <button 
 107:                         onClick={handleLogout}
 108:                         style={{
 109:                           width: '100%',
 110:                           textAlign: 'left',
 111:                           background: 'none',
 112:                           border: 'none',
 113:                           cursor: 'pointer',
 114:                           display: 'flex',
 115:                           alignItems: 'center',
 116:                           gap: '15px',
 117:                           padding: '15px',
 118:                           borderRadius: '8px',
 119:                           transition: 'background-color 0.3s',
 120:                           color: 'var(--charcoal-text)',
 121:                           fontFamily: 'inherit',
 122:                           fontSize: 'inherit'
 123:                         }}
 124:                         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--light-beige)'}
 125:                         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
 126:                       >
 127:                         <i className="lni lni-exit" style={{fontSize: '24px', color: 'var(--soft-gold)'}}></i>
 128:                         <div>
 129:                           <strong style={{display: 'block', fontSize: '15px', marginBottom: '3px'}}>Logout</strong>
 130:                           <span style={{display: 'block', fontSize: '12px', color: 'var(--soft-taupe)'}}>Sign out</span>
 131:                         </div>
 132:                       </button>
 133:                     </div>
 134:                   </div>
 135:                 ) : (
 136:                   <a href="/login" className="icon-btn" aria-label="Login">
 137:                     <i className="lni lni-user"></i>
 138:                   </a>
 139:                 )
 140:               )}
 141:               
 142:               <a href="#" className="icon-btn cart-btn" aria-label="Shopping Cart">
 143:                 <i className="lni lni-cart"></i>
 144:                 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
 145:               </a>
 146:               
 147:               <button 
 148:                 onClick={() => setIsMenuOpen(!isMenuOpen)}
 149:                 className="icon-btn mobile-menu-toggle"
 150:                 aria-label="Menu"
 151:               >
 152:                 <i className="lni lni-menu"></i>
 153:               </button>
 154:             </div>
 155:           </div>
 156:         </div>
 157:       </header>
 158: 
 159:       {/* Mobile Top Header */}
 160:       <header className="mobile-header top-header">
 161:         <div className="container">
 162:           <div className="mobile-header-content">
 163:             <a href="/" className="logo-mobile">
 164:               Lumi<span>vora</span>
 165:             </a>
 166:             <div className="mobile-header-icons">
 167:               <button 
 168:                 onClick={() => setIsSearchOpen(true)}
 169:                 className="icon-btn"
 170:                 aria-label="Search"
 171:               >
 172:                 <i className="lni lni-search-alt"></i>
 173:               </button>
 174:               <a href="#" className="icon-btn cart-btn" aria-label="Cart">
 175:                 <i className="lni lni-cart"></i>
 176:                 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
 177:               </a>
 178:             </div>
 179:           </div>
 180:         </div>
 181:       </header>
 182: 
 183:       {/* Mobile Bottom Navigation */}
 184:       <nav className="bottom-nav">
 185:         <a href="/" className="nav-item">
 186:           <i className="lni lni-home"></i>
 187:           <span>Home</span>
 188:         </a>
 189:         <a href="/shop" className="nav-item">
 190:           <i className="lni lni-shopping-basket"></i>
 191:           <span>Shop</span>
 192:         </a>
 193:         <button 
 194:           onClick={() => setIsSearchOpen(true)}
 195:           className="nav-item"
 196:         >
 197:           <i className="lni lni-search-alt"></i>
 198:           <span>Search</span>
 199:         </button>
 200:         <button 
 201:           className="nav-item"
 202:           onClick={() => setIsMenuOpen(!isMenuOpen)}
 203:         >
 204:           <i className="lni lni-menu"></i>
 205:           <span>Menu</span>
 206:         </button>
 207:       </nav>
 208: 
 209:       {/* Full Menu Overlay */}
 210:       <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
 211:         <div className="menu-header">
 212:           <a href="/" className="logo">Lumi<span>vora</span></a>
 213:           <button 
 214:             className="close-menu"
 215:             onClick={() => setIsMenuOpen(false)}
 216:           >
 217:             <i className="lni lni-close"></i>
 218:           </button>
 219:         </div>
 220:         
 221:         <div className="menu-content">
 222:           {!loading && user && (
 223:             <div style={{
 224:               padding: '20px',
 225:               backgroundColor: 'var(--light-beige)',
 226:               borderRadius: '12px',
 227:               marginBottom: '30px'
 228:             }}>
 229:               <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
 230:                 <div style={{
 231:                   width: '50px',
 232:                   height: '50px',
 233:                   backgroundColor: isAdmin ? 'var(--soft-gold)' : 'var(--soft-taupe)',
 234:                   borderRadius: '50%',
 235:                   display: 'flex',
 236:                   alignItems: 'center',
 237:                   justifyContent: 'center',
 238:                   color: 'white',
 239:                   fontSize: '20px',
 240:                   fontWeight: '600'
 241:                 }}>
 242:                   {user.name.charAt(0).toUpperCase()}
 243:                 </div>
 244:                 <div>
 245:                   <div style={{fontWeight: '600', fontSize: '16px'}}>
 246:                     {user.name}
 247:                     {isAdmin && <span style={{
 248:                       marginLeft: '8px',
 249:                       fontSize: '11px',
 250:                       backgroundColor: 'var(--soft-gold)',
 251:                       color: 'white',
 252:                       padding: '2px 8px',
 253:                       borderRadius: '10px'
 254:                     }}>ADMIN</span>}
 255:                   </div>
 256:                   <div style={{fontSize: '13px', color: 'var(--soft-taupe)'}}>{user.email}</div>
 257:                 </div>
 258:               </div>
 259:             </div>
 260:           )}
 261: 
 262:           <div className="menu-section">
 263:             <h3>Navigation</h3>
 264:             <ul className="menu-list">
 265:               <li>
 266:                 <a href="/" onClick={() => setIsMenuOpen(false)}>
 267:                   <i className="lni lni-home"></i>
 268:                   <span>Home</span>
 269:                 </a>
 270:               </li>
 271:               <li>
 272:                 <a href="/shop" onClick={() => setIsMenuOpen(false)}>
 273:                   <i className="lni lni-shopping-basket"></i>
 274:                   <span>Shop</span>
 275:                 </a>
 276:               </li>
 277:               <li>
 278:                 <a href="/about" onClick={() => setIsMenuOpen(false)}>
 279:                   <i className="lni lni-heart"></i>
 280:                   <span>About Us</span>
 281:                 </a>
 282:               </li>
 283:             </ul>
 284:           </div>
 285: 
 286:           {!loading && (
 287:             <div className="menu-section">
 288:               <h3>Account</h3>
 289:               <ul className="menu-list">
 290:                 {user ? (
 291:                   <>
 292:                     {/* Admin Dashboard - Mobile */}
 293:                     {isAdmin && (
 294:                       <li>
 295:                         <a href="/admin/dashboard" onClick={() => setIsMenuOpen(false)} style={{
 296:                           backgroundColor: 'var(--light-beige)'
 297:                         }}>
 298:                           <i className="lni lni-cog" style={{color: 'var(--soft-gold)'}}></i>
 299:                           <span style={{color: 'var(--soft-gold)', fontWeight: '600'}}>Admin Dashboard</span>
 300:                         </a>
 301:                       </li>
 302:                     )}
 303:                     
 304:                     <li>
 305:                       <a href="/account" onClick={() => setIsMenuOpen(false)}>
 306:                         <i className="lni lni-user"></i>
 307:                         <span>My Account</span>
 308:                       </a>
 309:                     </li>
 310:                     <li>
 311:                       <a href="/orders" onClick={() => setIsMenuOpen(false)}>
 312:                         <i className="lni lni-package"></i>
 313:                         <span>Your Orders</span>
 314:                       </a>
 315:                     </li>
 316:                     <li>
 317:                       <a href="/wishlist" onClick={() => setIsMenuOpen(false)}>
 318:                         <i className="lni lni-heart"></i>
 319:                         <span>Wishlist</span>
 320:                       </a>
 321:                     </li>
 322:                     <li>
 323:                       <button 
 324:                         onClick={handleLogout}
 325:                         style={{
 326:                           width: '100%',
 327:                           display: 'flex',
 328:                           alignItems: 'center',
 329:                           gap: '15px',
 330:                           padding: '15px',
 331:                           borderRadius: '10px',
 332:                           textDecoration: 'none',
 333:                           color: 'var(--charcoal-text)',
 334:                           transition: 'all 0.3s',
 335:                           fontSize: '16px',
 336:                           background: 'none',
 337:                           border: 'none',
 338:                           cursor: 'pointer',
 339:                           fontFamily: 'inherit',
 340:                           textAlign: 'left'
 341:                         }}
 342:                       >
 343:                         <i className="lni lni-exit" style={{fontSize: '20px', color: 'var(--soft-gold)', width: '24px', textAlign: 'center'}}></i>
 344:                         <span>Logout</span>
 345:                       </button>
 346:                     </li>
 347:                   </>
 348:                 ) : (
 349:                   <li>
 350:                     <a href="/login" onClick={() => setIsMenuOpen(false)}>
 351:                       <i className="lni lni-user"></i>
 352:                       <span>Login</span>
 353:                     </a>
 354:                   </li>
 355:                 )}
 356:               </ul>
 357:             </div>
 358:           )}
 359: 
 360:           <div className="menu-section">
 361:             <h3>Support</h3>
 362:             <ul className="menu-list">
 363:               <li>
 364:                 <a href="/contact" onClick={() => setIsMenuOpen(false)}>
 365:                   <i className="lni lni-phone"></i>
 366:                   <span>Contact Us</span>
 367:                 </a>
 368:               </li>
 369:               <li>
 370:                 <a href="/faq" onClick={() => setIsMenuOpen(false)}>
 371:                   <i className="lni lni-question-circle"></i>
 372:                   <span>FAQ</span>
 373:                 </a>
 374:               </li>
 375:             </ul>
 376:           </div>
 377: 
 378:           <div className="menu-section social-section">
 379:             <h3>Follow Us</h3>
 380:             <div className="social-icons">
 381:               <a href="https://instagram.com/lumivora" aria-label="Instagram">
 382:                 <i className="lni lni-instagram-original"></i>
 383:               </a>
 384:               <a href="https://pinterest.com/lumivora" aria-label="Pinterest">
 385:                 <i className="lni lni-pinterest"></i>
 386:               </a>
 387:               <a href="https://facebook.com/lumivora" aria-label="Facebook">
 388:                 <i className="lni lni-facebook"></i>
 389:               </a>
 390:             </div>
 391:           </div>
 392:         </div>
 393:       </div>
 394: 
 395:       <SearchModal 
 396:         isOpen={isSearchOpen} 
 397:         onClose={() => setIsSearchOpen(false)} 
 398:       />
 399:     </>
 400:   );
 401: }
```

---

### 📄 SearchModal.js

**Path:** `components/SearchModal.js`

```js
   1: 'use client';
   2: import { useState, useEffect } from 'react';
   3: 
   4: export default function SearchModal({ isOpen, onClose }) {
   5:   const [searchQuery, setSearchQuery] = useState('');
   6:   const [recentSearches, setRecentSearches] = useState([]);
   7: 
   8:   useEffect(() => {
   9:     const saved = localStorage.getItem('recentSearches');
  10:     if (saved) {
  11:       setRecentSearches(JSON.parse(saved));
  12:     }
  13:   }, []);
  14: 
  15:   const handleSearch = (query) => {
  16:     if (query.trim()) {
  17:       const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
  18:       setRecentSearches(updated);
  19:       localStorage.setItem('recentSearches', JSON.stringify(updated));
  20:     }
  21:   };
  22: 
  23:   const clearRecentSearches = () => {
  24:     setRecentSearches([]);
  25:     localStorage.removeItem('recentSearches');
  26:   };
  27: 
  28:   if (!isOpen) return null;
  29: 
  30:   return (
  31:     <div className="search-modal-overlay">
  32:       <div className="search-modal">
  33:         <div className="search-modal-header">
  34:           <div className="search-input-wrapper">
  35:             <i className="lni lni-search-alt"></i>
  36:             <input
  37:               type="text"
  38:               placeholder="Search our website..."
  39:               value={searchQuery}
  40:               onChange={(e) => setSearchQuery(e.target.value)}
  41:               onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
  42:               autoFocus
  43:             />
  44:           </div>
  45:           <button className="close-search" onClick={onClose}>
  46:             <i className="lni lni-close"></i>
  47:           </button>
  48:         </div>
  49: 
  50:         <div className="search-modal-content">
  51:           {searchQuery.trim() === '' ? (
  52:             <div className="recent-searches">
  53:               {recentSearches.length > 0 ? (
  54:                 <>
  55:                   <div className="recent-header">
  56:                     <h3>Recent Searches</h3>
  57:                     <button onClick={clearRecentSearches} className="clear-btn">
  58:                       Clear All
  59:                     </button>
  60:                   </div>
  61:                   <ul className="recent-list">
  62:                     {recentSearches.map((search, index) => (
  63:                       <li key={index}>
  64:                         <button 
  65:                           onClick={() => setSearchQuery(search)}
  66:                           className="recent-item"
  67:                         >
  68:                           <i className="lni lni-reload"></i>
  69:                           {search}
  70:                         </button>
  71:                       </li>
  72:                     ))}
  73:                   </ul>
  74:                 </>
  75:               ) : (
  76:                 <div className="empty-state">
  77:                   <i className="lni lni-search-alt"></i>
  78:                   <p>Start typing to search our website</p>
  79:                 </div>
  80:               )}
  81:             </div>
  82:           ) : (
  83:             <div className="empty-state">
  84:               <i className="lni lni-emoji-sad"></i>
  85:               <p>No results found for "{searchQuery}"</p>
  86:               <p>Try searching for general terms like "beauty tools" or "home gadgets"</p>
  87:             </div>
  88:           )}
  89:         </div>
  90:       </div>
  91:     </div>
  92:   );
  93: }
```

---

## 📁 context

**Path:** `context`


### 📄 AuthContext.js

**Path:** `context/AuthContext.js`

```js
   1: // context/AuthContext.js
   2: 'use client';
   3: import { createContext, useContext, useState, useEffect } from 'react';
   4: 
   5: const AuthContext = createContext();
   6: 
   7: export function AuthProvider({ children }) {
   8:   const [user, setUser] = useState(null);
   9:   const [loading, setLoading] = useState(true);
  10: 
  11:   useEffect(() => {
  12:     checkAuth();
  13:   }, []);
  14: 
  15:   const checkAuth = async () => {
  16:     try {
  17:       const response = await fetch('/api/auth/me');
  18:       if (response.ok) {
  19:         const data = await response.json();
  20:         setUser(data.user);
  21:       } else {
  22:         setUser(null);
  23:       }
  24:     } catch (error) {
  25:       console.error('Auth check error:', error);
  26:       setUser(null);
  27:     } finally {
  28:       setLoading(false);
  29:     }
  30:   };
  31: 
  32:   const login = async (email, password) => {
  33:     try {
  34:       const response = await fetch('/api/auth/login', {
  35:         method: 'POST',
  36:         headers: { 'Content-Type': 'application/json' },
  37:         body: JSON.stringify({ email, password })
  38:       });
  39: 
  40:       const data = await response.json();
  41: 
  42:       if (!response.ok) {
  43:         throw new Error(data.error || 'Login failed');
  44:       }
  45: 
  46:       setUser(data.user);
  47:       return { success: true };
  48:     } catch (error) {
  49:       return { success: false, error: error.message };
  50:     }
  51:   };
  52: 
  53:   const register = async (name, email, password) => {
  54:     try {
  55:       const response = await fetch('/api/auth/register', {
  56:         method: 'POST',
  57:         headers: { 'Content-Type': 'application/json' },
  58:         body: JSON.stringify({ name, email, password })
  59:       });
  60: 
  61:       const data = await response.json();
  62: 
  63:       if (!response.ok) {
  64:         throw new Error(data.error || 'Registration failed');
  65:       }
  66: 
  67:       // Auto-login after registration
  68:       return await login(email, password);
  69:     } catch (error) {
  70:       return { success: false, error: error.message };
  71:     }
  72:   };
  73: 
  74:   const logout = async () => {
  75:     try {
  76:       await fetch('/api/auth/logout', { method: 'POST' });
  77:       setUser(null);
  78:     } catch (error) {
  79:       console.error('Logout error:', error);
  80:     }
  81:   };
  82: 
  83:   return (
  84:     <AuthContext.Provider value={{ user, loading, login, register, logout, checkAuth }}>
  85:       {children}
  86:     </AuthContext.Provider>
  87:   );
  88: }
  89: 
  90: export const useAuth = () => {
  91:   const context = useContext(AuthContext);
  92:   if (!context) {
  93:     throw new Error('useAuth must be used within AuthProvider');
  94:   }
  95:   return context;
  96: };
```

---

## 📋 jsconfig.json

**Path:** `jsconfig.json`

```json
   1: {
   2:   "compilerOptions": {
   3:     "baseUrl": ".",
   4:     "paths": {
   5:       "@/*": ["./*"]
   6:     }
   7:   }
   8: }
   9: 
```

---

## 📁 lib

**Path:** `lib`


### 📄 mongodb.js

**Path:** `lib/mongodb.js`

```js
   1: // lib/mongodb.js
   2: import { MongoClient } from 'mongodb';
   3: 
   4: if (!process.env.MONGODB_URI) {
   5:   throw new Error('Please add your Mongo URI to .env.local');
   6: }
   7: 
   8: const uri = process.env.MONGODB_URI;
   9: const options = {};
  10: 
  11: let client;
  12: let clientPromise;
  13: 
  14: if (process.env.NODE_ENV === 'development') {
  15:   // In development mode, use a global variable to preserve the MongoClient instance
  16:   if (!global._mongoClientPromise) {
  17:     client = new MongoClient(uri, options);
  18:     global._mongoClientPromise = client.connect();
  19:   }
  20:   clientPromise = global._mongoClientPromise;
  21: } else {
  22:   // In production mode, it's best to not use a global variable
  23:   client = new MongoClient(uri, options);
  24:   clientPromise = client.connect();
  25: }
  26: 
  27: export default clientPromise;
```

---

### 📄 slugify.js

**Path:** `lib/slugify.js`

```js
   1: // lib/slugify.js
   2: // Helper function to create URL-friendly slugs from product names
   3: export function slugify(text) {
   4:   return text
   5:     .toString()
   6:     .toLowerCase()
   7:     .trim()
   8:     .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
   9:     .replace(/\s+/g, '-') // Replace spaces with hyphens
  10:     .replace(/-+/g, '-'); // Replace multiple hyphens with single
  11: }
  12: 
  13: // Helper to create product URL
  14: export function getProductUrl(product) {
  15:   const slug = slugify(product.name);
  16:   return `/product/${slug}`;
  17: }
  18: 
  19: // Helper to get product ID from name/slug (for API calls)
  20: export function getProductIdFromSlug(products, slug) {
  21:   const product = products.find(p => slugify(p.name) === slug);
  22:   return product?._id;
  23: }
```

---

## 📄 next.config.js

**Path:** `next.config.js`

```js
   1: /** @type {import('next').NextConfig} */
   2: const nextConfig = {
   3:   // Empty config - Next.js 16 handles compatibility automatically
   4: }
   5: 
   6: module.exports = nextConfig
```

---

## 📋 package.json

**Path:** `package.json`

```json
   1: {
   2:   "name": "lumivora-website",
   3:   "version": "0.1.0",
   4:   "private": true,
   5:   "scripts": {
   6:     "dev": "next dev --webpack",
   7:     "build": "next build --webpack",
   8:     "start": "next start",
   9:     "lint": "next lint"
  10:   },
  11:   "dependencies": {
  12:     "bcryptjs": "^3.0.3",
  13:     "jose": "^6.1.2",
  14:     "lucide-react": "^0.554.0",
  15:     "mongodb": "^7.0.0",
  16:     "next": "^16.0.3",
  17:     "react": "^19.2.0",
  18:     "react-dom": "^19.2.0"
  19:   }
  20: }
  21: 
```

---
## 📊 Project Summary

- **Framework**: Next.js 14
- **Styling**: Custom CSS with CSS Variables
- **Components**: React Functional Components
- **Architecture**: App Router (Next.js 13+)
- **Responsive**: Mobile-first design

## 🚀 Key Features

- Premium e-commerce design
- Responsive layout
- Product catalog
- Category pages
- Customer testimonials
- Brand storytelling

