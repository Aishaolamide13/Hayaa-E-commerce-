import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex' }}>
      {/* Left Image Section */}
      <div style={{ flex: 1, backgroundColor: 'var(--bg-secondary)', display: 'none', position: 'relative', overflow: 'hidden' }} id="auth-image">
         <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--gold-primary)', opacity: 0.1 }}></div>
         <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem', color: 'var(--text-primary)' }}>
           <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
             Modesty.<br/>Purpose.<br/>Community.
           </h1>
           <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '400px' }}>
             Join Nigeria's foremost dedicated Islamic e-commerce marketplace.
           </p>
         </div>
      </div>
      
      {/* Right Form Section */}
      <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem' }}>
           <div style={{ width: '150px' }}>
             <img src="/logo.png" alt="HAYAA Logo" style={{ maxHeight: '60px', objectFit: 'contain' }} onError={(e) => {
                 e.target.style.display = 'none';
                 e.target.nextElementSibling.style.display = 'block';
               }} />
               <span style={{ display: 'none', fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold-primary)' }}>
                 HAYAA
               </span>
           </div>
        </Link>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Outlet />
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          #auth-image { display: block !important; }
        }
      `}</style>
    </div>
  );
}
