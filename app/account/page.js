// app/account/page.js
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Account() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
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
      <main>
        <section className="hero" style={{padding: '80px 0', minHeight: 'auto'}}>
          <div className="container">
            <div className="hero-content">
              <h1>My Account</h1>
              <p>Manage your profile and preferences</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{
                backgroundColor: 'var(--pearl-white)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '30px',
                  paddingBottom: '30px',
                  borderBottom: '2px solid var(--light-beige)'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'var(--soft-gold)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '32px',
                    fontWeight: '600'
                  }}>
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 style={{ marginBottom: '5px' }}>{user.name}</h2>
                    <p style={{ color: 'var(--soft-taupe)', margin: 0 }}>{user.email}</p>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '15px' }}>
                  <a href="/orders" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '20px',
                    backgroundColor: 'var(--light-beige)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'var(--charcoal-text)',
                    transition: 'all 0.3s'
                  }} className="benefit-card">
                    <i className="lni lni-package" style={{ fontSize: '28px', color: 'var(--soft-gold)' }}></i>
                    <div>
                      <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Your Orders</h3>
                      <p style={{ fontSize: '14px', color: 'var(--soft-taupe)', margin: 0 }}>
                        Track, return, or buy things again
                      </p>
                    </div>
                  </a>

                  <a href="/wishlist" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '20px',
                    backgroundColor: 'var(--light-beige)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'var(--charcoal-text)',
                    transition: 'all 0.3s'
                  }} className="benefit-card">
                    <i className="lni lni-heart" style={{ fontSize: '28px', color: 'var(--soft-gold)' }}></i>
                    <div>
                      <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Wishlist</h3>
                      <p style={{ fontSize: '14px', color: 'var(--soft-taupe)', margin: 0 }}>
                        View and manage your saved items
                      </p>
                    </div>
                  </a>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '20px',
                    backgroundColor: 'var(--light-beige)',
                    borderRadius: '12px'
                  }}>
                    <i className="lni lni-calendar" style={{ fontSize: '28px', color: 'var(--soft-gold)' }}></i>
                    <div>
                      <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Member Since</h3>
                      <p style={{ fontSize: '14px', color: 'var(--soft-taupe)', margin: 0 }}>
                        {new Date().getFullYear()}
                      </p>
                    </div>
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

