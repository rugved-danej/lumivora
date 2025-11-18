// app/login/page.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(formData.email, formData.password);

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
              <h2>Welcome Back</h2>
              <p style={{marginBottom: '30px', color: 'var(--soft-taupe)'}}>
                Sign in to your account
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
                    placeholder="Enter your password"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn" 
                  style={{width: '100%', marginTop: '10px'}}
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>

              <p style={{
                textAlign: 'center',
                marginTop: '20px',
                color: 'var(--soft-taupe)',
                fontSize: '14px'
              }}>
                Don't have an account?{' '}
                <a href="/register" style={{
                  color: 'var(--soft-gold)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Create one
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