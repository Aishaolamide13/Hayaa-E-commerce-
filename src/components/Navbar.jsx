import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="navbar-wrapper flex-col">
      {/* Top utility bar */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '0.5rem 0', fontSize: '0.8rem', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container flex justify-between items-center text-muted">
          <div className="flex gap-4">
            <Link to="/support">Customer Support</Link>
            <Link to="/support">Track Order</Link>
          </div>
          <div className="flex gap-4">
            <Link to="/vendor">Vendor Portal</Link>
            <Link to="/admin">Admin</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div style={{ backgroundColor: 'var(--bg-white)', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid var(--border-color)' }}>
        <div className="container flex justify-between items-center gap-8">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div style={{ width: '120px', display: 'flex', alignItems: 'center' }}>
               {/* Fixed robust logo fallback */}
               <img src="/logo.png" alt="HAYAA Logo" style={{ maxHeight: '40px', objectFit: 'contain' }} onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 if (e.currentTarget.nextElementSibling) e.currentTarget.nextElementSibling.style.display = 'block';
               }} />
               <span style={{ display: 'none', fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--gold-primary)' }}>
                 HAYAA
               </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="flex-1" style={{ maxWidth: '600px', display: 'none' }} id="desktop-search">
            <div style={{ position: 'relative', width: '100%' }}>
              <input 
                type="text" 
                placeholder="Search for modest fashion, decor, and more..." 
                className="input-field"
                style={{ paddingLeft: '2.5rem', borderRadius: 'var(--radius-full)' }}
              />
              <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link to="/auth/login" className="flex items-center gap-2 text-primary" style={{ transition: 'color 0.2s', ':hover': { color: 'var(--gold-primary)' }}}>
              <User size={24} />
              <span style={{ display: 'none' }} id="user-text">Account</span>
            </Link>
            <Link to="/wishlist" className="flex items-center gap-2 text-primary" style={{ display: 'none' }} id="wishlist-icon">
              <Heart size={24} />
            </Link>
            <Link to="/cart" className="flex items-center gap-2 text-primary relative">
              <ShoppingBag size={24} />
              {count > 0 && (
                <span style={{ position: 'absolute', top: -5, right: -10, backgroundColor: 'var(--gold-primary)', color: 'white', fontSize: '0.75rem', padding: '0px 6px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>
                  {count}
                </span>
              )}
            </Link>
            <button className="flex items-center text-primary" style={{ display: 'none' }} id="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links - Desktop */}
      <div style={{ backgroundColor: 'var(--bg-white)', padding: '0.75rem 0', borderBottom: '1px solid var(--border-color)', display: 'none' }} id="desktop-nav">
        <div className="container flex gap-8 justify-center" style={{ fontWeight: 500, fontSize: '0.95rem' }}>
          <Link to="/category/modest-fashion">Modest Fashion</Link>
          <Link to="/category/hijabs">Hijabs</Link>
          <Link to="/category/mens-wear">Men's Wear</Link>
          <Link to="/category/islamic-decor">Islamic Decor</Link>
          <Link to="/category/prayer-essentials">Prayer Essentials</Link>
          <Link to="/category/books">Qurans & Books</Link>
          <Link to="/category/halal-skincare">Halal Skincare</Link>
          <Link to="/category/kids">Kids & Gifts</Link>
          <Link to="/deals" style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>Ramadan Deals</Link>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div style={{ position: 'absolute', top: '120px', left: 0, width: '100%', backgroundColor: 'var(--bg-white)', zIndex: 90, borderBottom: '1px solid var(--border-color)', padding: '1rem', boxShadow: 'var(--shadow-md)' }} className="animate-slide-up">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>
             <Link to="/category/modest-fashion" onClick={() => setIsMobileMenuOpen(false)}>Modest Fashion</Link>
             <Link to="/category/hijabs" onClick={() => setIsMobileMenuOpen(false)}>Hijabs & Scarves</Link>
             <Link to="/category/islamic-decor" onClick={() => setIsMobileMenuOpen(false)}>Islamic Decor</Link>
             <Link to="/deals" style={{ color: 'var(--accent-emerald)', fontWeight: 600 }} onClick={() => setIsMobileMenuOpen(false)}>Ramadan Deals</Link>
             <hr style={{ borderTop: '1px solid var(--border-color)' }} />
             <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Heart size={20}/> Wishlist</Link>
           </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          #desktop-search { display: block !important; }
          #desktop-nav { display: block !important; }
          #user-text { display: inline-block !important; }
          #wishlist-icon { display: block !important; }
        }
        @media (max-width: 767px) {
          #mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
