// app/contact/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{padding: '80px 0'}}>
          <div className="container">
            <div className="hero-content">
              <h1>Get in Touch</h1>
              <p>Connect with us on social media</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="brand-content">
              <div className="brand-text" style={{maxWidth: '800px', margin: '0 auto'}}>
                
                <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Connect With Lumivora</h2>
                <p style={{textAlign: 'center', marginBottom: '40px'}}>
                  We'd love to hear from you! Follow us on social media for the latest updates, 
                  beauty tips, product launches, and exclusive offers.
                </p>

                {/* Social Media Cards */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '30px',
                  marginBottom: '50px'
                }}>
                  
                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/lumivora" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      backgroundColor: 'var(--pearl-white)',
                      padding: '30px',
                      borderRadius: '20px',
                      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                    className="benefit-card"
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <i className="lni lni-instagram-original" style={{fontSize: '36px', color: 'white'}}></i>
                    </div>
                    <h3 style={{fontSize: '22px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>Instagram</h3>
                    <p style={{color: 'var(--soft-taupe)', fontSize: '14px', marginBottom: '15px'}}>
                      Follow us for daily beauty tips and behind-the-scenes content
                    </p>
                    <span style={{
                      color: '#e4405f',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      @lumivora <i className="lni lni-arrow-right"></i>
                    </span>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://facebook.com/lumivora" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      backgroundColor: 'var(--pearl-white)',
                      padding: '30px',
                      borderRadius: '20px',
                      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                    className="benefit-card"
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#1877f2',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <i className="lni lni-facebook-filled" style={{fontSize: '36px', color: 'white'}}></i>
                    </div>
                    <h3 style={{fontSize: '22px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>Facebook</h3>
                    <p style={{color: 'var(--soft-taupe)', fontSize: '14px', marginBottom: '15px'}}>
                      Join our community and stay updated with our latest news
                    </p>
                    <span style={{
                      color: '#1877f2',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      /lumivora <i className="lni lni-arrow-right"></i>
                    </span>
                  </a>

                  {/* Pinterest */}
                  <a 
                    href="https://pinterest.com/lumivora" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      backgroundColor: 'var(--pearl-white)',
                      padding: '30px',
                      borderRadius: '20px',
                      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                    className="benefit-card"
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#e60023',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <i className="lni lni-pinterest" style={{fontSize: '36px', color: 'white'}}></i>
                    </div>
                    <h3 style={{fontSize: '22px', marginBottom: '10px', color: 'var(--charcoal-text)'}}>Pinterest</h3>
                    <p style={{color: 'var(--soft-taupe)', fontSize: '14px', marginBottom: '15px'}}>
                      Discover beauty inspiration and styling ideas
                    </p>
                    <span style={{
                      color: '#e60023',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      @lumivora <i className="lni lni-arrow-right"></i>
                    </span>
                  </a>

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