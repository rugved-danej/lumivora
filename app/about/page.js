// app/about/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{padding: '80px 0'}}>
          <div className="container">
            <div className="hero-content">
              <h1>About Lumivora</h1>
              <p>Discover our story and mission to bring glow and comfort to everyday life</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="brand-content">
              <div className="brand-text">
                <h2>Our Story</h2>
                <p>Founded in 2025, Lumivora emerged from a simple idea: everyday moments deserve to be beautiful. Our founder, Rugved, noticed a gap in the market for products that seamlessly blend personal care with home comfort.</p>
                <p>The name "Lumivora" combines "Lumi" (meaning glow or light) and "vora" (meaning to embrace), perfectly capturing our mission to help you embrace the glow in both your personal beauty routine and your living space.</p>
                
                <h3>Our Mission</h3>
                <p>We believe that self-care shouldn't be complicated or expensive. Our carefully curated collection of beauty tools and home gadgets is designed to elevate your daily rituals without overwhelming your space or budget.</p>
                
                <h3>Quality Promise</h3>
                <p>Every Lumivora product undergoes rigorous testing and quality control. We work with skilled artisans and manufacturers who share our commitment to excellence, ensuring that each item meets our high standards for durability, functionality, and aesthetic appeal.</p>
              </div>
              <div className="brand-image">
                <i className="lni lni-apartment"></i>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{backgroundColor: 'var(--light-beige)'}}>
          <div className="container">
            <div className="section-title">
              <h2>Our Values</h2>
            </div>
            <div className="benefits">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="lni lni-checkmark"></i>
                </div>
                <h3>Quality First</h3>
                <p>We never compromise on materials or craftsmanship</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="lni lni-leaf"></i>
                </div>
                <h3>Sustainability</h3>
                <p>Eco-friendly packaging and responsible sourcing</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="lni lni-hand"></i>
                </div>
                <h3>Customer Care</h3>
                <p>Exceptional service before and after your purchase</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="lni lni-bulb"></i>
                </div>
                <h3>Innovation</h3>
                <p>Constantly improving and expanding our product line</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}