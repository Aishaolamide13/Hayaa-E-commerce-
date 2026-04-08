import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ChevronRight, MapPin, CreditCard, Lock } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const shipping = 2500;

  if (items.length === 0 && step !== 4) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Your cart is empty</h2>
        <Link to="/" style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>Return to Shop</Link>
      </div>
    );
  }

  const handleComplete = (e) => {
    e.preventDefault();
    clearCart();
    setStep(4); // Success step
  };

  if (step === 4) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center', minHeight: '60vh' }}>
        <div style={{ display: 'inline-flex', backgroundColor: '#ecfdf5', padding: '2rem', borderRadius: '50%', color: 'var(--accent-emerald)', marginBottom: '2rem' }}>
          <CheckCircle2 size={64} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem' }}>Order Confirmed!</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
          Thank you for shopping with Hayaa. Your order #ORD-84392 has been placed successfully and is protected by our Escrow guarantee.
        </p>
        <button onClick={() => navigate('/')} style={{ backgroundColor: 'var(--gold-primary)', color: 'white', padding: '1rem 2rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '3rem 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '2rem' }}>Checkout</h1>
        
        <div className="flex-col lg:flex-row" style={{ display: 'flex', gap: '3rem' }}>
          
          {/* Main Checkout Flow */}
          <div style={{ flex: 1 }}>
             {/* Progress Bar */}
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', fontSize: '0.85rem', fontWeight: 600 }}>
                <span style={{ color: step >= 1 ? 'var(--text-primary)' : 'var(--text-muted)' }}>1. Shipping Details</span>
                <ChevronRight size={16} style={{ color: 'var(--text-muted)', margin: '0 0.5rem' }} />
                <span style={{ color: step >= 2 ? 'var(--text-primary)' : 'var(--text-muted)' }}>2. Payment</span>
                <ChevronRight size={16} style={{ color: 'var(--text-muted)', margin: '0 0.5rem' }} />
                <span style={{ color: step >= 3 ? 'var(--text-primary)' : 'var(--text-muted)' }}>3. Confirmation</span>
             </div>

             {step === 1 && (
               <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="animate-fade-in" style={{ backgroundColor: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <MapPin style={{ color: 'var(--gold-primary)' }} />
                    <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>Shipping Address</h2>
                 </div>
                 <div className="grid grid-cols-2 gap-4" style={{ marginBottom: '1rem' }}>
                    <input type="text" placeholder="First Name" className="input-field" required />
                    <input type="text" placeholder="Last Name" className="input-field" required />
                 </div>
                 <input type="text" placeholder="Street Address" className="input-field" style={{ marginBottom: '1rem' }} required />
                 <div className="grid grid-cols-2 gap-4" style={{ marginBottom: '2rem' }}>
                    <input type="text" placeholder="City" className="input-field" required />
                    <select className="input-field" required>
                      <option value="">Select State...</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">FCT Abuja</option>
                      <option value="Kano">Kano</option>
                    </select>
                 </div>
                 <button type="submit" style={{ width: '100%', backgroundColor: 'var(--text-primary)', color: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
                   Continue to Payment
                 </button>
               </form>
             )}

             {step === 2 && (
               <form onSubmit={handleComplete} className="animate-fade-in" style={{ backgroundColor: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <CreditCard style={{ color: 'var(--gold-primary)' }} />
                    <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>Payment Method</h2>
                 </div>
                 
                 <div style={{ border: '1px solid var(--gold-primary)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '1.5rem', backgroundColor: 'var(--gold-light)' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600, cursor: 'pointer' }}>
                      <input type="radio" name="payment" checked readOnly style={{ width: '18px', height: '18px', accentColor: 'var(--gold-primary)' }} />
                      Paystack Secure Checkout (Card / Transfer)
                    </label>
                 </div>

                 <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '2rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600, cursor: 'pointer' }}>
                      <input type="radio" name="payment" disabled style={{ width: '18px', height: '18px' }} />
                      <span style={{ color: 'var(--text-muted)' }}>Wallet Balance (Coming Soon)</span>
                    </label>
                 </div>

                 <div style={{ backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1rem', marginBottom: '2rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <Lock size={20} style={{ color: '#0f172a' }} />
                    <p>Your payment is 100% secure and protected by our Escrow guarantee. Vendors are only paid when you confirm delivery.</p>
                 </div>

                 <div style={{ display: 'flex', gap: '1rem' }}>
                   <button type="button" onClick={() => setStep(1)} style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>Back</button>
                   <button type="submit" style={{ flex: 1, backgroundColor: 'var(--gold-primary)', color: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
                     Pay ₦{(total + shipping).toLocaleString()} Now
                   </button>
                 </div>
               </form>
             )}
          </div>

          {/* Order Summary */}
          <div style={{ width: '100%', maxWidth: '380px' }}>
             <div style={{ backgroundColor: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
               <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Order Summary</h3>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                 {items.map(item => (
                   <div key={`${item.id}-${item.size}`} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                     <div style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                       {item.emoji}
                     </div>
                     <div style={{ flex: 1 }}>
                       <div style={{ fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.2, marginBottom: '0.2rem' }}>{item.name}</div>
                       <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Size {item.size} • Qty {item.quantity}</div>
                     </div>
                     <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                       ₦{(item.price * item.quantity).toLocaleString()}
                     </div>
                   </div>
                 ))}
               </div>
               
               <hr style={{ borderTop: '1px solid var(--border-color)', margin: '1.5rem 0' }} />

               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                 <span>Subtotal</span>
                 <span>₦{total.toLocaleString()}</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                 <span>Shipping</span>
                 <span>₦{shipping.toLocaleString()}</span>
               </div>
               
               <hr style={{ borderTop: '1px solid var(--border-color)', margin: '1.5rem 0' }} />
               
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 700, fontSize: '1.25rem' }}>
                 <span>Total</span>
                 <span>₦{(total + shipping).toLocaleString()}</span>
               </div>

               <div style={{ backgroundColor: '#ecfdf5', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--accent-emerald)' }}>
                  <ShieldCheck size={18} />
                  <strong>Escrow Protected Transaction</strong>
               </div>
             </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          .lg\\:flex-row { flex-direction: column-reverse !important; }
          .lg\\:flex-row > div:last-child { max-width: 100% !important; }
        }
      `}</style>
    </div>
  );
}
