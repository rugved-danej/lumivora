// app/terms/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Terms() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{padding: '80px 0'}}>
          <div className="container">
            <div className="hero-content">
              <h1>Terms of Service</h1>
              <p>Last updated: November 18, 2025</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="brand-content">
              <div className="brand-text" style={{maxWidth: '800px', margin: '0 auto'}}>
                
                <h2>Agreement to Terms</h2>
                <p>By accessing and using Lumivora's website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our website or purchase our products.</p>
                
                <h3>Use of Our Website</h3>
                <p>By using our website, you warrant that:</p>
                <ul style={{marginLeft: '20px', marginBottom: '20px'}}>
                  <li>You are legally capable of entering into binding contracts</li>
                  <li>You are at least 18 years of age</li>
                  <li>You will use the website in accordance with these Terms of Service</li>
                  <li>You will not use the website for any illegal or unauthorized purpose</li>
                  <li>Your use of the website will not violate any applicable law or regulation</li>
                </ul>

                <h3>Products and Services</h3>
                <p>All products and services are subject to availability. We reserve the right to discontinue any product at any time. We reserve the right to limit the quantities of any products or services that we offer.</p>
                <p>All descriptions of products or product pricing are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time.</p>

                <h3>Pricing and Payment</h3>
                <p>All prices are listed in Indian Rupees unless otherwise stated. We reserve the right to change prices at any time without notice. However, if we change the price of a product that you have already ordered, we will contact you before processing your order.</p>
                <p>Payment must be received by us before we dispatch your order. We accept the following forms of payment:</p>
                <ul style={{marginLeft: '20px', marginBottom: '20px'}}>
                  <li>Phone Pe</li>
                  <li>Google Pay</li>
                </ul>

                <h3>Shipping and Delivery</h3>
                <p>We ship to addresses within the United States and internationally. Shipping costs and delivery times vary depending on your location and the shipping method selected.</p>
                <p>We are not responsible for delays caused by customs, postal services, or courier services. Risk of loss and title for items purchased from Lumivora pass to you upon delivery to the carrier.</p>

                <h3>Intellectual Property</h3>
                <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Lumivora and is protected by copyright, trademark, and other intellectual property laws.</p>
                <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of the content without our express written permission.</p>

                <h3>User Accounts</h3>
                <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password that you use to access the website and for any activities under your password.</p>

                <h3>Limitation of Liability</h3>
                <p>To the fullest extent permitted by law, Lumivora shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.</p>

                <h3>Indemnification</h3>
                <p>You agree to indemnify and hold harmless Lumivora and its officers, directors, employees, and agents from any claims, damages, liabilities, costs, and expenses arising out of your use of the website or violation of these Terms of Service.</p>

                <h3>Governing Law</h3>
                <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.</p>

                <h3>Changes to Terms</h3>
                <p>We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

                <h3>Contact Information</h3>
                <p>If you have any questions about these Terms of Service, please contact us at:</p>
                <p><strong>Email:</strong> lumivorastore@gmail.com<br/></p>

                <p style={{marginTop: '40px', fontStyle: 'italic', color: 'var(--soft-taupe)'}}>By using our website and purchasing our products, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}