// app/privacy/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Privacy() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{padding: '80px 0'}}>
          <div className="container">
            <div className="hero-content">
              <h1>Privacy Policy</h1>
              <p>Last updated: November 18, 2025</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="brand-content">
              <div className="brand-text" style={{maxWidth: '800px', margin: '0 auto'}}>
                
                <h2>Introduction</h2>
                <p>Welcome to Lumivora. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                
                <h3>Information We Collect</h3>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul style={{marginLeft: '20px', marginBottom: '20px'}}>
                  <li><strong>Identity Data</strong>: first name, last name, username or similar identifier</li>
                  <li><strong>Contact Data</strong>: billing address, delivery address, email address and telephone numbers</li>
                  <li><strong>Financial Data</strong>: bank account and payment card details</li>
                  <li><strong>Transaction Data</strong>: details about payments to and from you and other details of products and services you have purchased from us</li>
                  <li><strong>Technical Data</strong>: internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform</li>
                  <li><strong>Usage Data</strong>: information about how you use our website, products and services</li>
                  <li><strong>Marketing Data</strong>: your preferences in receiving marketing from us and your communication preferences</li>
                </ul>

                <h3>How We Use Your Information</h3>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul style={{marginLeft: '20px', marginBottom: '20px'}}>
                  <li>To process and deliver your order including managing payments, fees and charges, and collecting and recovering money owed to us</li>
                  <li>To manage our relationship with you including notifying you about changes to our terms or privacy policy</li>
                  <li>To enable you to partake in a prize draw, competition or complete a survey</li>
                  <li>To administer and protect our business and this website including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data</li>
                  <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you</li>
                </ul>

                <h3>Data Security</h3>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

                <h3>Your Legal Rights</h3>
                <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                <ul style={{marginLeft: '20px', marginBottom: '20px'}}>
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>

                <h3>Cookies</h3>
                <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.</p>

                <h3>Third-Party Links</h3>
                <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>

                <h3>Changes to This Privacy Policy</h3>
                <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.</p>

                <h3>Contact Us</h3>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                <p><strong>Email:</strong> lumivorastore@gmail.com<br/></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}