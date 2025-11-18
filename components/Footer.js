// components/Footer.js
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">Lumi<span>vora</span></div>
            <p>Beauty tools and home gadgets designed to elevate your daily life with a touch of luxury and glow.</p>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <i className="lni lni-instagram-original"></i>
              </a>
              <a href="#" aria-label="Pinterest">
                <i className="lni lni-pinterest"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="lni lni-facebook"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Information</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Lumivora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}