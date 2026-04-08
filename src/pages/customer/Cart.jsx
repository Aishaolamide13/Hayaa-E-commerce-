import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export default function Cart() {
  const { items, updateQuantity, removeItem, total } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Your cart is empty</h2>
        <Link to="/" style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>Browse Shop</Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '3rem 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '2rem' }}>Shopping Cart</h1>
        
        <div className="flex-col lg:flex-row" style={{ display: 'flex', gap: '3rem' }}>
          
          <div style={{ flex: 1 }}>
             <div style={{ backgroundColor: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                {items.map((item, idx) => (
                  <div key={`${item.id}-${item.size}`} style={{ display: 'flex', gap: '1.5rem', paddingBottom: '1.5rem', borderBottom: idx !== items.length - 1 ? '1px solid var(--border-color)' : 'none', marginBottom: idx !== items.length - 1 ? '1.5rem' : 0 }}>
                     <div style={{ width: '100px', height: '120px', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem' }}>
                       {item.emoji}
                     </div>
                     <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                         <h3 style={{ fontWeight: 600, fontSize: '1.1rem' }}>{item.name}</h3>
                         <button onClick={() => removeItem(item.id, item.size)} style={{ color: 'var(--text-muted)' }}><Trash2 size={20} /></button>
                       </div>
                       <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>Vendor: {item.vendor || 'Hayaa Store'} | Size: {item.size} {item.color && `| Color: ${item.color}`}</p>
                       <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                           <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} style={{ padding: '0.5rem' }}><Minus size={16} /></button>
                           <span style={{ padding: '0 1rem', fontWeight: 600 }}>{item.quantity}</span>
                           <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} style={{ padding: '0.5rem' }}><Plus size={16} /></button>
                         </div>
                         <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>₦{(item.price * item.quantity).toLocaleString()}</span>
                       </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div style={{ width: '100%', maxWidth: '350px' }}>
             <div style={{ backgroundColor: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
               <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Order Summary</h3>
               
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                 <span>Subtotal ({items.reduce((s,i)=>s+i.quantity, 0)} items)</span>
                 <span>₦{total.toLocaleString()}</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                 <span>Shipping</span>
                 <span>Calculated at checkout</span>
               </div>
               
               <hr style={{ borderTop: '1px solid var(--border-color)', margin: '1.5rem 0' }} />
               
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontWeight: 700, fontSize: '1.25rem' }}>
                 <span>Estimated Total</span>
                 <span>₦{total.toLocaleString()}</span>
               </div>
               
               <button onClick={() => navigate('/checkout')} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--text-primary)', color: 'white', padding: '1rem', borderRadius: 'var(--radius-lg)', fontWeight: 600, transition: 'background-color 0.2s' }}>
                 Proceed to Checkout <ArrowRight size={20} />
               </button>

               <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                 <ShieldCheck size={16} /> Secure Checkout with Escrow
               </div>
             </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          .lg\\:flex-row { flex-direction: column !important; }
          .lg\\:flex-row > div:last-child { max-width: 100% !important; }
        }
      `}</style>
    </div>
  );
}
