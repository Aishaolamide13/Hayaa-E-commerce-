import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag, ShieldCheck, Check } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function ProductCard({ 
  id, 
  title, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviewsCount, 
  vendor, 
  isHalalVerified,
  badge
}) {
  const { addItem } = useCart();
  const [added, setAdded] = React.useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAdd = (e) => {
    e.preventDefault();
    addItem({ id: id || '1', name: title || 'Premium Abaya', price: price || 45000, emoji: '🛍️', vendor: vendor || 'Hayaa Verified' }, 'M', 'Default');
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }} className="group hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
      
      {/* Badges & Actions */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', display: 'flex', justifyContent: 'space-between', zIndex: 10 }}>
        <div>
          {badge && (
            <span style={{ backgroundColor: 'var(--accent-emerald)', color: 'white', fontSize: '0.75rem', fontWeight: 600, padding: '4px 8px', borderRadius: 'var(--radius-sm)' }}>
              {badge}
            </span>
          )}
          {discount > 0 && !badge && (
            <span style={{ backgroundColor: '#ef4444', color: 'white', fontSize: '0.75rem', fontWeight: 600, padding: '4px 8px', borderRadius: 'var(--radius-sm)' }}>
              -{discount}%
            </span>
          )}
        </div>
        <button style={{ backgroundColor: 'white', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', color: 'var(--text-muted)' }} className="hover:text-red-500 transition-colors">
          <Heart size={18} />
        </button>
      </div>

      {/* Image */}
      <Link to={`/product/${id || '1'}`} style={{ display: 'block', paddingBottom: '100%', position: 'relative', backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
        <img 
          src={image || "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80"} 
          alt={title} 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          className="group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{vendor || 'Hayaa Verified'}</p>
          {isHalalVerified && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', color: 'var(--accent-emerald)', fontSize: '0.75rem', fontWeight: 600 }}>
              <ShieldCheck size={14} /> verified
            </div>
          )}
        </div>

        <Link to={`/product/${id || '1'}`} style={{ marginBottom: '0.5rem', display: 'block' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {title || 'Premium Elegant Modest Abaya with Gold Embellishments'}
          </h3>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <div style={{ display: 'flex', color: 'var(--gold-primary)' }}>
            <Star size={14} fill="currentColor" />
          </div>
          <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{rating || '4.8'}</span>
          <span>({reviewsCount || 124})</span>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              ₦{price ? price.toLocaleString() : '45,000'}
            </span>
            {originalPrice && (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '0.5rem' }}>
                ₦{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Quick Add Button */}
      <div style={{ padding: '0 1rem 1rem 1rem' }}>
        <button onClick={handleAdd} disabled={added} style={{ width: '100%', padding: '0.6rem', backgroundColor: added ? 'var(--accent-emerald)' : 'var(--gold-primary)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', transition: 'background-color 0.2s' }} className={added ? '' : "hover:bg-[var(--gold-secondary)]"}>
          {added ? <><Check size={18} /> Added</> : <><ShoppingBag size={18} /> Add to Cart</>}
        </button>
      </div>

      <style>{`
        .group:hover img { transform: scale(1.05); }
        .group:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
      `}</style>
    </div>
  );
}
