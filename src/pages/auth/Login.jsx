import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="animate-fade-in" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
        {isLogin ? 'Welcome Back' : 'Create an Account'}
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        {isLogin ? 'Sign in to access your wishlist, orders, and personalized modest fashion curations.' : 'Join Shop With Hayaa to discover premium modest collections.'}
      </p>

      <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {!isLogin && (
          <div style={{ position: 'relative' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Full Name</label>
            <input 
              type="text" 
              placeholder="Aisha Mohammed" 
              className="input-field" 
              style={{ paddingLeft: '1rem' }} 
              required
            />
          </div>
        )}

        <div style={{ position: 'relative' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email Address</label>
          <div style={{ position: 'relative' }}>
             <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
             <input 
               type="email" 
               placeholder="aisha@example.com" 
               className="input-field" 
               style={{ paddingLeft: '2.5rem' }} 
               required
             />
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem' }}>
             <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Password</label>
             {isLogin && <a href="#" style={{ fontSize: '0.8rem', color: 'var(--gold-primary)', fontWeight: 500 }}>Forgot Password?</a>}
          </div>
          <div style={{ position: 'relative' }}>
             <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
             <input 
               type="password" 
               placeholder="••••••••" 
               className="input-field" 
               style={{ paddingLeft: '2.5rem' }} 
               required
             />
          </div>
        </div>

        <button type="submit" style={{ width: '100%', backgroundColor: 'var(--text-primary)', color: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', fontWeight: 600, marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
           {isLogin ? <><LogIn size={18}/> Sign In</> : 'Create Account'}
        </button>

      </form>

      <div style={{ display: 'flex', alignItems: 'center', margin: '2rem 0' }}>
         <div style={{ flex: 1, backgroundColor: 'var(--border-color)', height: '1px' }}></div>
         <span style={{ margin: '0 1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>OR</span>
         <div style={{ flex: 1, backgroundColor: 'var(--border-color)', height: '1px' }}></div>
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button onClick={() => setIsLogin(!isLogin)} style={{ color: 'var(--gold-primary)', fontWeight: 600, textDecoration: 'underline' }}>
          {isLogin ? 'Sign up' : 'Sign in'}
        </button>
      </p>
    </div>
  );
}
