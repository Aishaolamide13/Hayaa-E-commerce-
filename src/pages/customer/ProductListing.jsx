import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

export default function ProductListing() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">
        
        {/* Header Area */}
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Women's Modest Fashion</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Showing 1 - 24 of 1,452 results</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sort by:</span>
            <button style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-white)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Popular <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          
          {/* Left Filter Sidebar */}
          <aside style={{ width: '250px', flexShrink: 0, display: 'none' }} id="desktop-filters">
            <div style={{ backgroundColor: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: '100px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.1rem' }}>
                <Filter size={20} /> Filters
              </div>

              {/* Verified Halal Toggle */}
              <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 500, color: 'var(--accent-emerald)' }}>Verified Halal Only</span>
                <div style={{ width: '40px', height: '22px', backgroundColor: 'var(--accent-emerald)', borderRadius: 'var(--radius-full)', position: 'relative', cursor: 'pointer' }}>
                  <div style={{ width: '18px', height: '18px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', right: '2px' }}></div>
                </div>
              </div>

              {/* Categories */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Category</h4>
                <div className="flex-col gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-[var(--gold-primary)]"><input type="checkbox" checked readOnly/> Abayas</label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-[var(--gold-primary)]"><input type="checkbox"/> Jilbabs</label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-[var(--gold-primary)]"><input type="checkbox"/> Modest Dresses</label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-[var(--gold-primary)]"><input type="checkbox"/> Skirts</label>
                </div>
              </div>

              {/* Price */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Price Range (₦)</h4>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input type="number" placeholder="Min" className="input-field" style={{ padding: '0.5rem', fontSize: '0.8rem' }} />
                  <span>-</span>
                  <input type="number" placeholder="Max" className="input-field" style={{ padding: '0.5rem', fontSize: '0.8rem' }} />
                </div>
                <button style={{ width: '100%', marginTop: '1rem', padding: '0.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                  Apply
                </button>
              </div>

              {/* Vendor Rating */}
              <div style={{ marginBottom: '1rem' }}>
                 <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Vendor Rating</h4>
                 <div className="flex-col gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox"/> 4 Stars & Up</label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox"/> 3 Stars & Up</label>
                </div>
              </div>

            </div>
          </aside>

          {/* Product Grid */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }} id="mobile-filter-btn">
              <button style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-white)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Filter size={16} /> Filters
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <ProductCard 
                  key={i}
                  id={i}
                  title={`Premium Elegant Collection Item ${i+1}`}
                  price={35000 + (i * 1000)}
                  originalPrice={i % 3 === 0 ? 55000 + (i * 1000) : null}
                  image={`https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80&sig=${i}`}
                  rating={4.5 + (i % 5)*0.1}
                  isHalalVerified={i % 2 === 0}
                  vendor={`Vendor Style ${i}`}
                />
              ))}
            </div>

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', gap: '0.5rem' }}>
               <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</button>
               <button style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--gold-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</button>
               <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</button>
               <span style={{ display: 'flex', alignItems: 'center' }}>...</span>
               <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>12</button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          #desktop-filters { display: block !important; }
          #mobile-filter-btn { display: none !important; }
        }
      `}</style>
    </div>
  );
}
