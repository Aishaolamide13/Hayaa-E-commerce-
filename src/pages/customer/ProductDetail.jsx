import React, { useState } from 'react';
import { Share2, Heart, Star, ShoppingBag, ShieldCheck, Truck, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const images = [
    "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583344075193-706f9473b6aa?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589312683070-6539bf36b9e2?auto=format&fit=crop&w=800&q=80"
  ];

  const handleAdd = () => {
    addItem({ id: '1', name: 'Luxury Dubai Silk Abaya with Intricate Gold Embroidery', price: 45000, emoji: '✨', vendor: 'Elegance Store' }, '56', 'Charcoal Black');
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '5rem' }}>
      
      {/* Breadcrumb */}
      <div style={{ borderBottom: '1px solid var(--border-color)', padding: '1rem 0', backgroundColor: 'var(--bg-white)' }}>
         <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link> <ChevronRight size={14} /> 
            <Link to="/category/modest-fashion" style={{ color: 'var(--text-muted)' }}>Women</Link> <ChevronRight size={14} />
            <Link to="/category/modest-fashion" style={{ color: 'var(--text-muted)' }}>Abayas</Link> <ChevronRight size={14} />
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Luxury Dubai Silk Abaya</span>
         </div>
      </div>

      <div className="container" style={{ marginTop: '3rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
           
           {/* Left Image Gallery */}
           <div style={{ flex: '1 1 500px' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                 {/* Thumbnails */}
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '80px' }}>
                   {images.map((img, idx) => (
                     <div key={idx} onClick={() => setActiveImage(idx)} style={{ width: '80px', height: '100px', border: activeImage === idx ? '2px solid var(--gold-primary)' : '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden', cursor: 'pointer' }}>
                       <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`thumb ${idx}`} />
                     </div>
                   ))}
                 </div>
                 {/* Main Image */}
                 <div style={{ flex: 1, backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '600px' }}>
                    <img src={images[activeImage]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Product Main" />
                 </div>
              </div>
           </div>

           {/* Right Product Info */}
           <div style={{ flex: '1 1 400px' }}>
             
             {/* Vendor & Badges */}
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
               <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                 <p style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Elegance Store</p>
                 <div style={{ backgroundColor: '#ecfdf5', color: 'var(--accent-emerald)', padding: '4px 8px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                   <ShieldCheck size={14} /> Verified Vendor
                 </div>
               </div>
               <div style={{ display: 'flex', gap: '1rem' }}>
                 <button style={{ color: 'var(--text-muted)' }}><Share2 size={20} /></button>
                 <button style={{ color: '#ef4444' }}><Heart size={20} /></button>
               </div>
             </div>

             <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>Luxury Dubai Silk Abaya with Intricate Gold Embroidery</h1>
             
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
               <div style={{ display: 'flex', color: 'var(--gold-primary)' }}>
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="white" />
               </div>
               <span style={{ fontWeight: 600 }}>4.8</span>
               <span style={{ color: 'var(--text-blue)', textDecoration: 'underline', cursor: 'pointer' }}>124 Reviews</span>
               <span style={{ color: 'var(--text-muted)' }}>| 430+ Sold</span>
             </div>

             {/* Pricing */}
             <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '2rem' }}>
               <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>₦45,000</span>
               <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>₦85,000</span>
               <span style={{ backgroundColor: '#ef4444', color: 'white', padding: '4px 8px', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: '0.85rem' }}>-47% OFF</span>
             </div>

             <hr style={{ borderTop: '1px solid var(--border-color)', marginBottom: '1.5rem' }} />

             {/* Variants */}
             <div style={{ marginBottom: '1.5rem' }}>
               <h4 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Color: <span style={{ fontWeight: 400 }}>Charcoal Black</span></h4>
               <div style={{ display: 'flex', gap: '0.5rem' }}>
                 {['#1C1C1C', '#0B3D2E', '#6d433b'].map((color, i) => (
                   <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: color, border: i === 0 ? '2px solid var(--gold-primary)' : '2px solid transparent', cursor: 'pointer' }}></div>
                 ))}
               </div>
             </div>

             <div style={{ marginBottom: '2.5rem' }}>
               <h4 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Size</h4>
               <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                 {['52', '54', '56', '58', '60'].map((size, i) => (
                   <div key={i} style={{ padding: '0.5rem 1rem', border: i === 2 ? '1px solid var(--gold-primary)' : '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer', backgroundColor: i === 2 ? 'var(--gold-light)' : 'transparent', color: i === 2 ? 'var(--gold-primary)' : 'var(--text-primary)', fontWeight: i === 2 ? 600 : 400 }}>
                     Size {size}
                   </div>
                 ))}
               </div>
               <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'underline' }}>View Size Guide</p>
             </div>

             {/* Add to Cart */}
             <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
               <button onClick={handleAdd} style={{ flex: 1, backgroundColor: 'var(--gold-primary)', color: 'white', padding: '1.25rem', borderRadius: 'var(--radius-lg)', fontWeight: 600, fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }} className="hover:bg-[var(--gold-secondary)] transition-colors">
                  <ShoppingBag size={20} /> Add to Cart
               </button>
               <button onClick={() => { handleAdd(); navigate('/checkout'); }} style={{ flex: 1, backgroundColor: 'var(--text-primary)', color: 'white', padding: '1.25rem', borderRadius: 'var(--radius-lg)', fontWeight: 600, fontSize: '1.1rem' }} className="hover:bg-gray-800 transition-colors">
                  Buy Now
               </button>
             </div>

             {/* Trust Card */}
             <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <ShieldCheck size={24} style={{ color: 'var(--gold-primary)', marginTop: '2px' }} />
                <div>
                   <h5 style={{ fontWeight: 600, marginBottom: '0.2rem' }}>Escrow Protected</h5>
                   <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Your payment is held securely until delivery is confirmed. Shop with confidence.</p>
                </div>
             </div>

             {/* Delivery options */}
             <div style={{ marginTop: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
               <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                 <Truck size={20} style={{ color: 'var(--text-secondary)' }} />
                 <div><div style={{ fontWeight: 600 }}>Standard Delivery</div><div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>3-5 Business days (₦2,500)</div></div>
               </div>
               <div style={{ borderTop: '1px solid var(--border-color)', margin: '0.5rem 0' }}></div>
               <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
                 <Truck size={20} style={{ color: 'var(--gold-primary)' }} />
                 <div><div style={{ fontWeight: 600 }}>Express Delivery</div><div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>1-2 Business days (₦5,000)</div></div>
               </div>
             </div>

           </div>
        </div>

        {/* Tabs Section */}
        <div style={{ marginTop: '5rem' }}>
           <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid var(--border-color)', marginBottom: '2rem' }}>
             <button onClick={() => setActiveTab('description')} style={{ paddingBottom: '1rem', borderBottom: activeTab === 'description' ? '2px solid var(--gold-primary)' : '2px solid transparent', fontWeight: 600, fontSize: '1.1rem', color: activeTab === 'description' ? 'var(--text-primary)' : 'var(--text-muted)' }}>Description</button>
             <button onClick={() => setActiveTab('reviews')} style={{ paddingBottom: '1rem', borderBottom: activeTab === 'reviews' ? '2px solid var(--gold-primary)' : '2px solid transparent', fontWeight: 600, fontSize: '1.1rem', color: activeTab === 'reviews' ? 'var(--text-primary)' : 'var(--text-muted)' }}>Reviews (124)</button>
             <button onClick={() => setActiveTab('vendor')} style={{ paddingBottom: '1rem', borderBottom: activeTab === 'vendor' ? '2px solid var(--gold-primary)' : '2px solid transparent', fontWeight: 600, fontSize: '1.1rem', color: activeTab === 'vendor' ? 'var(--text-primary)' : 'var(--text-muted)' }}>Vendor Details</button>
           </div>
           
           {activeTab === 'description' && (
           <div style={{ maxWidth: '800px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
             <p>This premium Dubai silk abaya is carefully handcrafted to provide both elegance and comfort. The fabric flows beautifully and features hand-stitched gold embellishments along the borders.</p>
             <br/>
             <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
               <li>100% Premium Dubai Silk</li>
               <li>Breathable and lightweight</li>
               <li>Includes matching hijab</li>
               <li>Hand-wash recommended</li>
             </ul>
           </div>
           )}

           {activeTab === 'reviews' && (
           <div style={{ maxWidth: '800px' }}>
             {[{name:'Amina S.',rating:5,text:'Absolutely gorgeous! The silk quality is outstanding and the embroidery detail is far better than expected. Delivered in 3 days to Lagos.',date:'2 weeks ago'},{name:'Fatimah O.',rating:4,text:'Beautiful abaya, runs slightly large. I recommend sizing down. The customer service was excellent when I had questions.',date:'1 month ago'},{name:'Khadijah M.',rating:5,text:'This is my third purchase from this vendor. Consistent quality every time. The matching hijab is a lovely bonus.',date:'3 weeks ago'}].map((rev,i) => (
               <div key={i} style={{ paddingBottom:'1.5rem', borderBottom:'1px solid var(--border-color)', marginBottom:'1.5rem' }}>
                 <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'0.5rem' }}>
                   <div style={{ fontWeight:600 }}>{rev.name}</div>
                   <span style={{ color:'var(--text-muted)', fontSize:'0.85rem' }}>{rev.date}</span>
                 </div>
                 <div style={{ display:'flex', gap:'2px', marginBottom:'0.75rem', color:'var(--gold-primary)' }}>
                   {[...Array(rev.rating)].map((_,j) => <Star key={j} size={14} fill="currentColor" />)}
                 </div>
                 <p style={{ color:'var(--text-secondary)', lineHeight:1.6 }}>{rev.text}</p>
               </div>
             ))}
           </div>
           )}

           {activeTab === 'vendor' && (
           <div style={{ maxWidth:'800px' }}>
             <div style={{ display:'flex', gap:'1.5rem', alignItems:'center', marginBottom:'2rem' }}>
               <div style={{ width:'70px', height:'70px', borderRadius:'50%', backgroundColor:'var(--gold-light)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:'1.5rem', color:'var(--gold-primary)' }}>ES</div>
               <div>
                 <h3 style={{ fontWeight:700, fontSize:'1.25rem', marginBottom:'0.25rem' }}>Elegance Store</h3>
                 <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', color:'var(--accent-emerald)', fontSize:'0.85rem' }}><ShieldCheck size={14}/> Verified Vendor · Member since 2024</div>
               </div>
             </div>
             <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'1.5rem', marginBottom:'2rem' }}>
               <div style={{ backgroundColor:'var(--bg-secondary)', padding:'1rem', borderRadius:'var(--radius-md)', textAlign:'center' }}><div style={{ fontWeight:700, fontSize:'1.5rem' }}>4.8</div><div style={{ fontSize:'0.85rem', color:'var(--text-muted)' }}>Avg Rating</div></div>
               <div style={{ backgroundColor:'var(--bg-secondary)', padding:'1rem', borderRadius:'var(--radius-md)', textAlign:'center' }}><div style={{ fontWeight:700, fontSize:'1.5rem' }}>430+</div><div style={{ fontSize:'0.85rem', color:'var(--text-muted)' }}>Products Sold</div></div>
               <div style={{ backgroundColor:'var(--bg-secondary)', padding:'1rem', borderRadius:'var(--radius-md)', textAlign:'center' }}><div style={{ fontWeight:700, fontSize:'1.5rem' }}>98%</div><div style={{ fontSize:'0.85rem', color:'var(--text-muted)' }}>Positive Reviews</div></div>
             </div>
             <p style={{ color:'var(--text-secondary)', lineHeight:1.8 }}>Elegance Store specializes in premium Dubai-inspired modest fashion. Every piece is sourced directly from artisan workshops in Dubai and Turkey, ensuring authentic craftsmanship and premium quality.</p>
           </div>
           )}
        </div>
      </div>
    </div>
  );
}
