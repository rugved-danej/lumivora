// app/admin/page.js - You can either delete this file entirely or replace with a simple message
export default function Admin() {
  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-card">
          <h1>Lumi<span style={{color: 'var(--soft-gold)'}}>vora</span></h1>
          <h2>Admin Access</h2>
          <p>Admin panel is currently unavailable.</p>
          <a href="/" className="back-link">
            <i className="lni lni-arrow-left"></i> Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}