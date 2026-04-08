import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';

export default function Wishlist() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '60vh', padding: '4rem 0' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '500px' }}>
        <div style={{ display: 'inline-flex', backgroundColor: 'var(--gold-light)', padding: '2rem', borderRadius: '50%', color: 'var(--gold-primary)', marginBottom: '2rem' }}>
          <Heart size={48} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem' }}>Your Wishlist</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          Items you love will appear here. Browse our collections and tap the ♡ icon to save products for later.
        </p>
        <Link to="/category/modest-fashion" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--gold-primary)', color: 'white', padding: '1rem 2rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
          <ShoppingBag size={20} /> Start Shopping
        </Link>
      </div>
    </div>
  );
}
