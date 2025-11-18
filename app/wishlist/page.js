// app/wishlist/page.js - Updated with slug URLs
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Helper function to create slug
// Update the slugify function at the top
function slugify(text) {
  if (!text) return '';
  
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^ws-]/g, '')
    .replace(/s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function Wishlist() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    } else if (user) {
      fetchWishlist();
    }
  }, [user, authLoading, router]);

  const fetchWishlist = async () => {
    try {
      const res = await fetch('/api/wishlist');
      if (res.ok) {
        const data = await res.json();
        setWishlist(data.wishlist || []);
      }
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const res = await fetch('/api/wishlist', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId })
      });

      if (res.ok) {
        setWishlist(wishlist.filter(item => item._id !== productId));
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  if (authLoading || loading) {
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

  if (!user) {
    return null;
  }

  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{padding: '80px 0', minHeight: 'auto'}}>
          <div className="container">
            <div className="hero-content">
              <h1>Your Wishlist</h1>
              <p>Save your favorite items for later</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {wishlist.length === 0 ? (
              <div className="empty-products">
                <i className="lni lni-heart"></i>
                <h3>Your Wishlist is Empty</h3>
                <p>Start adding products you love to your wishlist.</p>
                <a href="/shop" className="btn btn-primary-large" style={{ marginTop: '20px' }}>
                  <i className="lni lni-shopping-basket"></i>
                  Browse Products
                </a>
              </div>
            ) : (
              <>
                <div style={{ 
                  marginBottom: '30px',
                  fontSize: '16px',
                  color: 'var(--soft-taupe)'
                }}>
                  {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} in your wishlist
                </div>

                <div className="products">
                  {wishlist.map(product => {
                    const productSlug = slugify(product.name);
                    return (
                      <div key={product._id} className="product-card">
                        <div className="product-img">
                          {product.imageUrl ? (
                            <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          ) : (
                            <i className="lni lni-package"></i>
                          )}
                        </div>
                        <div className="product-content">
                          <h3>{product.name}</h3>
                          <p className="product-price">₹{product.price}</p>
                          <p>{product.description}</p>
                          
                          <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                            <a 
                              href={`/product/${productSlug}`}
                              className="btn"
                              style={{ flex: 1 }}
                            >
                              View Details
                            </a>
                            <button
                              onClick={() => removeFromWishlist(product._id)}
                              className="btn btn-outline"
                              style={{ 
                                padding: '10px',
                                minWidth: '45px'
                              }}
                              title="Remove from wishlist"
                            >
                              <i className="lni lni-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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