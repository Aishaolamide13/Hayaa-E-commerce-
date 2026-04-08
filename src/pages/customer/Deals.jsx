import React from 'react';
import { Clock } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

export default function Deals() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', padding: '3rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#ef4444', color: 'white', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem' }}>LIVE NOW</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '0.5rem' }}>Ramadan & Eid Deals</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>Up to 60% off curated modest essentials. Limited time only.</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--bg-white)', padding: '1rem 2rem', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-sm)' }}>
            <Clock size={20} style={{ color: '#ef4444' }} />
            <div style={{ display: 'flex', gap: '0.5rem', fontWeight: 700 }}>
              <span style={{ backgroundColor: 'var(--bg-secondary)', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>12h</span> :
              <span style={{ backgroundColor: 'var(--bg-secondary)', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>45m</span> :
              <span style={{ backgroundColor: '#ef4444', color: 'white', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>30s</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard id="d1" title="Luxury Dubai Silk Abaya" price={45000} originalPrice={85000} image="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&q=80" vendor="Elegance Store" isHalalVerified={true} badge="Flash Deal" />
          <ProductCard id="d2" title="Oud Wood Premium Perfume Oil" price={12000} originalPrice={20000} image="https://images.unsplash.com/photo-1598285558965-025555c82970?w=400&q=80" vendor="Halal Scents" />
          <ProductCard id="d3" title="Gold Plated Ayatul Kursi Cuff" price={18500} originalPrice={30000} image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80" vendor="Islamic Jewels" isHalalVerified={true} />
          <ProductCard id="d4" title="Interactive Kids Prayer Mat" price={22000} originalPrice={35000} image="https://images.unsplash.com/photo-1601201524330-80dc9e5f5835?w=400&q=80" vendor="Deen Kids" />
          <ProductCard id="d5" title="Premium Medina Dates Gift Box" price={8500} originalPrice={15000} image="https://images.unsplash.com/photo-1603504179374-fb4df87f9189?w=400&q=80" vendor="Barakah Foods" badge="70% Off" />
          <ProductCard id="d6" title="Silk Chiffon Hijab Collection" price={6500} originalPrice={12000} image="https://images.unsplash.com/photo-1589312683070-6539bf36b9e2?w=400&q=80" vendor="Modesty Co" isHalalVerified={true} />
          <ProductCard id="d7" title="Rose & Saffron Halal Skincare Set" price={15000} originalPrice={28000} image="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80" vendor="Halal Glow" />
          <ProductCard id="d8" title="Minimalist White Linen Thobe" price={25000} originalPrice={42000} image="https://images.unsplash.com/photo-1583344075193-706f9473b6aa?w=400&q=80" vendor="Sunnah Wear" isHalalVerified={true} badge="Best Seller" />
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .grid-cols-4 { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .grid-cols-4, .grid-cols-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
