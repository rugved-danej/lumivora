// app/register/page.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Register() {
  const router = useRouter();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    const result = await register(formData.name, formData.email, formData.password);

    if (result.success) {
      router.push('/');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <main>
        <section className="admin-login">
          <div className="login-container">
            <div className="login-card">
              <h1>Lumi<span style={{color: 'var(--soft-gold)'}}>vora</span></h1>
              <h2>Create Account</h2>
              <p style={{marginBottom: '30px', color: 'var(--soft-taupe)'}}>
                Join us today
              </p>

              {error && (
                <div className="error-message" style={{
                  backgroundColor: '#fee',
                  color: '#c33',
                  padding: '12px',
                  borderRadius: '6px',
                  marginBottom: '20px',
                  fontSize: '14px'
                }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    disabled={loading}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    disabled={loading}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                    disabled={loading}
                    placeholder="Create a password (min 6 characters)"
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    required
                    disabled={loading}
                    placeholder="Confirm your password"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn" 
                  style={{width: '100%', marginTop: '10px'}}
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>

              <p style={{
                textAlign: 'center',
                marginTop: '20px',
                color: 'var(--soft-taupe)',
                fontSize: '14px'
              }}>
                Already have an account?{' '}
                <a href="/login" style={{
                  color: 'var(--soft-gold)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Sign in
                </a>
              </p>

              <a href="/" className="back-link">
                <i className="lni lni-arrow-left"></i> Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}