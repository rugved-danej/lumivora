// app/page.js
'use client';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/testimonials');
      const data = await res.json();
      setTestimonials(data.testimonials || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoadingTestimonials(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-modern">
          <div className="hero-background">
            <div className="hero-shape hero-shape-1"></div>
            <div className="hero-shape hero-shape-2"></div>
            <div className="hero-shape hero-shape-3"></div>
          </div>
          <div className="container">
            <div className="hero-content-modern">
              <div className="hero-badge">
                <i className="lni lni-star-filled"></i>
                <span>Premium Beauty & Home Collection</span>
              </div>
              <h1 className="hero-title-large">
                Embrace Your
                <span className="gradient-text"> Inner Glow</span>
              </h1>
              <p className="hero-subtitle">
                Discover a curated collection of beauty tools and home gadgets designed to elevate your daily rituals. From skincare essentials to ambient comfort, we bring luxury into your everyday moments.
              </p>
              <div className="hero-buttons-modern">
                <a href="/shop" className="btn btn-primary-large">
                  <i className="lni lni-shopping-basket"></i>
                  Shop Collection
                </a>
                <a href="/about" className="btn btn-glass">
                  <i className="lni lni-heart"></i>
                  Our Story
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Happy Customers</p>
                </div>
                <div className="stat-item">
                  <h3>4.9★</h3>
                  <p>Customer Rating</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Quality Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="section categories-modern">
          <div className="container">
            <div className="section-header-modern">
              <div className="section-badge">Categories</div>
              <h2>Shop by Collection</h2>
              <p>Explore our carefully curated categories designed for your wellness journey</p>
            </div>
            
            <div className="categories-grid-modern">
              <a href="/shop?category=beauty-tools" className="category-card-modern">
                <div className="category-icon-wrapper">
                  <i className="lni lni-brush-alt"></i>
                </div>
                <h3>Beauty Tools</h3>
                <p>Premium tools for radiant skin</p>
                <span className="category-link">Explore <i className="lni lni-arrow-right"></i></span>
              </a>
              
              <a href="/shop?category=skincare-accessories" className="category-card-modern">
                <div className="category-icon-wrapper">
                  <i className="lni lni-leaf"></i>
                </div>
                <h3>Skincare Accessories</h3>
                <p>Elevate your skincare ritual</p>
                <span className="category-link">Explore <i className="lni lni-arrow-right"></i></span>
              </a>
              
              <a href="/shop?category=home-gadgets" className="category-card-modern">
                <div className="category-icon-wrapper">
                  <i className="lni lni-home"></i>
                </div>
                <h3>Home Gadgets</h3>
                <p>Modern comfort for your space</p>
                <span className="category-link">Explore <i className="lni lni-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="section brand-story-modern">
          <div className="container">
            <div className="brand-content-modern" style={{gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto'}}>
              <div className="brand-text-modern" style={{textAlign: 'center'}}>
                <div className="section-badge">Our Mission</div>
                <h2>Where Glow Meets Home</h2>
                <p>Founded in 2025, Lumivora emerged from a simple yet powerful idea: everyday moments deserve to be beautiful. We believe that self-care shouldn't be complicated or expensive.</p>
                <p>Our carefully curated collection bridges the gap between personal beauty and home comfort, bringing you products that seamlessly blend into your daily rituals while elevating every experience.</p>
                
                <div className="brand-features" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px'}}>
                  <div className="feature-item">
                    <i className="lni lni-checkmark-circle"></i>
                    <span>Ethically Sourced Materials</span>
                  </div>
                  <div className="feature-item">
                    <i className="lni lni-checkmark-circle"></i>
                    <span>Cruelty-Free Products</span>
                  </div>
                  <div className="feature-item">
                    <i className="lni lni-checkmark-circle"></i>
                    <span>Sustainable Packaging</span>
                  </div>
                </div>
                
                <div style={{marginTop: '30px'}}>
                  <a href="/about" className="btn btn-primary-large">
                    Learn More About Us
                    <i className="lni lni-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section benefits-modern">
          <div className="container">
            <div className="benefits-grid-modern">
              
              <div className="benefit-card-modern">
                <div className="benefit-icon-modern">
                  <i className="lni lni-shield"></i>
                </div>
                <h3>Quality Guarantee</h3>
                <p>100% satisfaction or money back</p>
              </div>
              
              <div className="benefit-card-modern">
                <div className="benefit-icon-modern">
                  <i className="lni lni-headphone"></i>
                </div>
                <h3>24/7 Support</h3>
                <p>Always here to help you</p>
              </div>
              
              <div className="benefit-card-modern">
                <div className="benefit-icon-modern">
                  <i className="lni lni-lock"></i>
                </div>
                <h3>Secure Payment</h3>
                <p>Your information is protected</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Now Dynamic */}
        <section className="section testimonials-modern">
          <div className="container">
            <div className="section-header-modern">
              <div className="section-badge">Testimonials</div>
              <h2>What Our Customers Say</h2>
              <p>Real reviews from real people</p>
            </div>
            
            {loadingTestimonials ? (
              <div className="loading-container">
                <div className="loading-spinner">
                  <div className="spinner-circle"></div>
                </div>
                <p className="loading-text">Loading testimonials...</p>
              </div>
            ) : testimonials.length > 0 ? (
              <div className="testimonials-grid-modern">
                {testimonials.slice(0, 6).map((testimonial) => (
                  <div key={testimonial._id} className="testimonial-card-modern">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="lni lni-star-filled"></i>
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <i key={i} className="lni lni-star" style={{color: '#ddd'}}></i>
                      ))}
                    </div>
                    <p>{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <i className="lni lni-user"></i>
                      </div>
                      <div>
                        <h4>{testimonial.name}</h4>
                        <span>Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state" style={{padding: '60px 20px'}}>
                <i className="lni lni-comments"></i>
                <p style={{marginTop: '20px', color: 'var(--soft-taupe)'}}>
                  No testimonials yet. Be the first to share your experience!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}