import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid grid-cols-4 gap-8" style={{ marginBottom: '3rem' }}>
          
          {/* Brand Info */}
          <div className="flex-col gap-4">
             <div style={{ width: '150px' }}>
               {/* Display logo. Fallback handles via css inline or natural fail. Here we assume text fallback is handled */}
               <img src="/logo.png" alt="HAYAA Logo" style={{ maxHeight: '60px', objectFit: 'contain' }} onError={(e) => {
                 e.target.style.display = 'none';
                 e.target.nextElementSibling.style.display = 'block';
               }} />
               <span style={{ display: 'none', fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold-primary)' }}>
                 HAYAA
               </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '1rem', lineHeight: 1.6 }}>
              Shop With Hayaa — Modesty. Purpose. Community.<br/>
              Nigeria's foremost dedicated Islamic e-commerce marketplace built around trust and dignity.
            </p>
            <div className="flex gap-4" style={{ marginTop: '0.5rem' }}>
              <a href="#" style={{ color: 'var(--gold-primary)' }}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'var(--gold-primary)' }}><Twitter size={20} /></a>
              <a href="#" style={{ color: 'var(--gold-primary)' }}><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-col gap-2">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '1rem' }}>Shop</h4>
            <Link to="/category/modest-fashion" style={{ color: 'var(--text-secondary)' }}>Modest Fashion</Link>
            <Link to="/category/hijabs" style={{ color: 'var(--text-secondary)' }}>Hijabs & Scarves</Link>
            <Link to="/category/decor" style={{ color: 'var(--text-secondary)' }}>Islamic Home Decor</Link>
            <Link to="/category/prayer" style={{ color: 'var(--text-secondary)' }}>Prayer Essentials</Link>
            <Link to="/category/skincare" style={{ color: 'var(--text-secondary)' }}>Halal Skincare</Link>
          </div>

          {/* Legal & Help */}
          <div className="flex-col gap-2">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '1rem' }}>Help & Policies</h4>
            <Link to="/support" style={{ color: 'var(--text-secondary)' }}>Customer Support</Link>
            <Link to="/faq" style={{ color: 'var(--text-secondary)' }}>FAQs</Link>
            <Link to="/returns" style={{ color: 'var(--text-secondary)' }}>Return Policy</Link>
            <Link to="/shipping" style={{ color: 'var(--text-secondary)' }}>Shipping Information</Link>
            <Link to="/vendor-terms" style={{ color: 'var(--text-secondary)' }}>Vendor Terms of Service</Link>
          </div>

          {/* Newsletter */}
          <div className="flex-col gap-4">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Join Our Community</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Subscribe for updates on new collections and Ramadan deals.</p>
            <form className="flex" style={{ marginTop: '0.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="input-field"
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: 'none' }}
              />
              <button 
                type="submit" 
                style={{ backgroundColor: 'var(--gold-primary)', color: 'white', padding: '0 1.5rem', borderTopRightRadius: 'var(--radius-md)', borderBottomRightRadius: 'var(--radius-md)', fontWeight: 600 }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <p>&copy; {new Date().getFullYear()} Shop With Hayaa. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Payment method placeholders */}
            <span>Paystack Secure</span>
            <span>Flutterwave</span>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          footer .grid-cols-4 { grid-template-columns: 1fr; gap: 2rem; }
          footer .flex.justify-between { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
