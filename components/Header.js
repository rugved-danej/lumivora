// components/Header.js
'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import SearchModal from './SearchModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { user, loading, logout } = useAuth();

  // Check if user is admin
  const isAdmin = user?.email === 'itsrugveddanej@gmail.com';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsMenuOpen(false);
    window.location.href = '/';
  };

  return (
    <>
      {/* Desktop Header */}
      <header className={`desktop-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-container">
            <a href="/" className="logo">
              Lumi<span>vora</span>
            </a>
            
            <nav className="main-nav">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            
            <div className="header-icons">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="icon-btn"
                aria-label="Search"
              >
                <i className="lni lni-search-alt"></i>
              </button>
              
              {!loading && (
                user ? (
                  <div className="nav-dropdown">
                    <button className="icon-btn" aria-label="Account">
                      <i className="lni lni-user"></i>
                    </button>
                    <div className="dropdown-menu" style={{right: 0, left: 'auto'}}>
                      <div style={{padding: '10px 15px', borderBottom: '1px solid var(--light-beige)'}}>
                        <strong style={{fontSize: '14px'}}>{user.name}</strong>
                        <div style={{fontSize: '12px', color: 'var(--soft-taupe)'}}>{user.email}</div>
                      </div>
                      
                      {/* Admin Dashboard Link - Only visible to admin */}
                      {isAdmin && (
                        <a href="/admin/dashboard" style={{
                          backgroundColor: 'var(--light-beige)',
                          borderBottom: '1px solid var(--warm-cream)'
                        }}>
                          <i className="lni lni-cog" style={{color: 'var(--soft-gold)'}}></i>
                          <div>
                            <strong style={{color: 'var(--soft-gold)'}}>Admin Dashboard</strong>
                            <span>Manage your store</span>
                          </div>
                        </a>
                      )}
                      
                      <a href="/account">
                        <i className="lni lni-user"></i>
                        <div>
                          <strong>My Account</strong>
                          <span>View your profile</span>
                        </div>
                      </a>
                      <a href="/orders">
                        <i className="lni lni-package"></i>
                        <div>
                          <strong>Your Orders</strong>
                          <span>Track orders</span>
                        </div>
                      </a>
                      <a href="/wishlist">
                        <i className="lni lni-heart"></i>
                        <div>
                          <strong>Wishlist</strong>
                          <span>Saved items</span>
                        </div>
                      </a>
                      <button 
                        onClick={handleLogout}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px',
                          padding: '15px',
                          borderRadius: '8px',
                          transition: 'background-color 0.3s',
                          color: 'var(--charcoal-text)',
                          fontFamily: 'inherit',
                          fontSize: 'inherit'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--light-beige)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <i className="lni lni-exit" style={{fontSize: '24px', color: 'var(--soft-gold)'}}></i>
                        <div>
                          <strong style={{display: 'block', fontSize: '15px', marginBottom: '3px'}}>Logout</strong>
                          <span style={{display: 'block', fontSize: '12px', color: 'var(--soft-taupe)'}}>Sign out</span>
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <a href="/login" className="icon-btn" aria-label="Login">
                    <i className="lni lni-user"></i>
                  </a>
                )
              )}
              
              <a href="#" className="icon-btn cart-btn" aria-label="Shopping Cart">
                <i className="lni lni-cart"></i>
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </a>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="icon-btn mobile-menu-toggle"
                aria-label="Menu"
              >
                <i className="lni lni-menu"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Top Header */}
      <header className="mobile-header top-header">
        <div className="container">
          <div className="mobile-header-content">
            <a href="/" className="logo-mobile">
              Lumi<span>vora</span>
            </a>
            <div className="mobile-header-icons">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="icon-btn"
                aria-label="Search"
              >
                <i className="lni lni-search-alt"></i>
              </button>
              <a href="#" className="icon-btn cart-btn" aria-label="Cart">
                <i className="lni lni-cart"></i>
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="bottom-nav">
        <a href="/" className="nav-item">
          <i className="lni lni-home"></i>
          <span>Home</span>
        </a>
        <a href="/shop" className="nav-item">
          <i className="lni lni-shopping-basket"></i>
          <span>Shop</span>
        </a>
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="nav-item"
        >
          <i className="lni lni-search-alt"></i>
          <span>Search</span>
        </button>
        <button 
          className="nav-item"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="lni lni-menu"></i>
          <span>Menu</span>
        </button>
      </nav>

      {/* Full Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-header">
          <a href="/" className="logo">Lumi<span>vora</span></a>
          <button 
            className="close-menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="lni lni-close"></i>
          </button>
        </div>
        
        <div className="menu-content">
          {!loading && user && (
            <div style={{
              padding: '20px',
              backgroundColor: 'var(--light-beige)',
              borderRadius: '12px',
              marginBottom: '30px'
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: isAdmin ? 'var(--soft-gold)' : 'var(--soft-taupe)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: '600'
                }}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div style={{fontWeight: '600', fontSize: '16px'}}>
                    {user.name}
                    {isAdmin && <span style={{
                      marginLeft: '8px',
                      fontSize: '11px',
                      backgroundColor: 'var(--soft-gold)',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '10px'
                    }}>ADMIN</span>}
                  </div>
                  <div style={{fontSize: '13px', color: 'var(--soft-taupe)'}}>{user.email}</div>
                </div>
              </div>
            </div>
          )}

          <div className="menu-section">
            <h3>Navigation</h3>
            <ul className="menu-list">
              <li>
                <a href="/" onClick={() => setIsMenuOpen(false)}>
                  <i className="lni lni-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/shop" onClick={() => setIsMenuOpen(false)}>
                  <i className="lni lni-shopping-basket"></i>
                  <span>Shop</span>
                </a>
              </li>
              <li>
                <a href="/about" onClick={() => setIsMenuOpen(false)}>
                  <i className="lni lni-heart"></i>
                  <span>About Us</span>
                </a>
              </li>
            </ul>
          </div>

          {!loading && (
            <div className="menu-section">
              <h3>Account</h3>
              <ul className="menu-list">
                {user ? (
                  <>
                    {/* Admin Dashboard - Mobile */}
                    {isAdmin && (
                      <li>
                        <a href="/admin/dashboard" onClick={() => setIsMenuOpen(false)} style={{
                          backgroundColor: 'var(--light-beige)'
                        }}>
                          <i className="lni lni-cog" style={{color: 'var(--soft-gold)'}}></i>
                          <span style={{color: 'var(--soft-gold)', fontWeight: '600'}}>Admin Dashboard</span>
                        </a>
                      </li>
                    )}
                    
                    <li>
                      <a href="/account" onClick={() => setIsMenuOpen(false)}>
                        <i className="lni lni-user"></i>
                        <span>My Account</span>
                      </a>
                    </li>
                    <li>
                      <a href="/orders" onClick={() => setIsMenuOpen(false)}>
                        <i className="lni lni-package"></i>
                        <span>Your Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="/wishlist" onClick={() => setIsMenuOpen(false)}>
                        <i className="lni lni-heart"></i>
                        <span>Wishlist</span>
                      </a>
                    </li>
                    <li>
                      <button 
                        onClick={handleLogout}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px',
                          padding: '15px',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          color: 'var(--charcoal-text)',
                          transition: 'all 0.3s',
                          fontSize: '16px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: 'inherit',
                          textAlign: 'left'
                        }}
                      >
                        <i className="lni lni-exit" style={{fontSize: '20px', color: 'var(--soft-gold)', width: '24px', textAlign: 'center'}}></i>
                        <span>Logout</span>
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <a href="/login" onClick={() => setIsMenuOpen(false)}>
                      <i className="lni lni-user"></i>
                      <span>Login</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          <div className="menu-section">
            <h3>Support</h3>
            <ul className="menu-list">
              <li>
                <a href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <i className="lni lni-phone"></i>
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="/faq" onClick={() => setIsMenuOpen(false)}>
                  <i className="lni lni-question-circle"></i>
                  <span>FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="menu-section social-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://instagram.com/lumivora" aria-label="Instagram">
                <i className="lni lni-instagram-original"></i>
              </a>
              <a href="https://pinterest.com/lumivora" aria-label="Pinterest">
                <i className="lni lni-pinterest"></i>
              </a>
              <a href="https://facebook.com/lumivora" aria-label="Facebook">
                <i className="lni lni-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}