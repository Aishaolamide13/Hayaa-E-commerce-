import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, ArrowRight, Clock, Star, Gift, Share2 } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

export default function Home() {
  return (
    <div className="animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section style={{ position: 'relative', backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', minHeight: '600px', padding: '4rem 1.5rem' }}>
          
          <div style={{ flex: 1, zIndex: 10, maxWidth: '600px' }}>
            <span style={{ display: 'inline-block', backgroundColor: 'var(--gold-light)', color: 'var(--gold-primary)', padding: '6px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '1px' }}>
              RAMADAN COLLECTION 2026
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Elevate Your Modesty with Purpose.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '500px' }}>
              Discover curated luxury abayas, halal skincare, and Islamic decor from verified premium vendors.
            </p>
            <div className="flex gap-4">
              <Link to="/category/modest-fashion" style={{ backgroundColor: 'var(--gold-primary)', color: 'white', padding: '1rem 2rem', borderRadius: 'var(--radius-md)', fontWeight: 600, hover: { backgroundColor: 'var(--gold-secondary)' }, transition: 'background-color 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Shop Collection <ArrowRight size={20} />
              </Link>
              <Link to="/auth/login" style={{ backgroundColor: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '1rem 2rem', borderRadius: 'var(--radius-md)', fontWeight: 600, transition: 'border-color 0.2s', display: 'flex', alignItems: 'center' }}>
                Become a Vendor
              </Link>
            </div>
          </div>

          {/* Hero Images Grid */}
          <div style={{ flex: 1, position: 'relative', display: 'none', height: '100%' }} id="hero-images">
             <div style={{ position: 'absolute', right: '5%', top: '5%', width: '300px', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', zIndex: 2 }}>
               <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80" alt="Elegant Abaya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <div style={{ position: 'absolute', right: '35%', top: '25%', width: '250px', height: '350px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', zIndex: 1 }}>
               <img src="https://images.unsplash.com/photo-1584553421349-355eaec4d7df?auto=format&fit=crop&w=600&q=80" alt="Islamic Art" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
          </div>
          
        </div>
        
        {/* Subtle Background Pattern */}
        <div style={{ position: 'absolute', right: '-10%', top: '-20%', opacity: 0.05, pointerEvents: 'none' }}>
           <svg width="600" height="600" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
             <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="var(--gold-primary)" />
           </svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{ backgroundColor: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)', padding: '1.5rem 0' }}>
         <div className="container flex justify-between items-center flex-wrap gap-4" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
            <div className="flex items-center gap-2">
              <ShieldCheck style={{ color: 'var(--gold-primary)' }} size={24} />
              <span>Escrow Protected Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Star style={{ color: 'var(--gold-primary)' }} size={24} />
              <span>Verified Islamic Vendors</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck style={{ color: 'var(--gold-primary)' }} size={24} />
              <span>Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 style={{ color: 'var(--gold-primary)' }} size={24} />
              <span>Affiliate Rewards Program</span>
            </div>
         </div>
      </section>

      {/* 2. FEATURED CATEGORIES */}
      <section className="container" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.25rem' }}>Shop by Category</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Explore curations tailored for your lifestyle.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" id="categories-grid">
           {[
             { name: "Modest Fashion", slug: "modest-fashion", img: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=400&q=80" },
             { name: "Hijabs & Scarves", slug: "hijabs", img: "https://images.unsplash.com/photo-1589312683070-6539bf36b9e2?w=400&q=80" },
             { name: "Islamic Decor", slug: "islamic-decor", img: "https://images.unsplash.com/photo-1584553421349-355eaec4d7df?w=400&q=80" },
             { name: "Halal Skincare", slug: "halal-skincare", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80" },
             { name: "Men's Wear", slug: "mens-wear", img: "https://images.unsplash.com/photo-1583344075193-706f9473b6aa?w=400&q=80" },
             { name: "Prayer Essentials", slug: "prayer-essentials", img: "https://images.unsplash.com/photo-1601201524330-80dc9e5f5835?w=400&q=80" },
             { name: "Qurans & Books", slug: "books", img: "https://images.unsplash.com/photo-1603504179374-fb4df87f9189?w=400&q=80" },
             { name: "Kids & Gifts", slug: "kids", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80" }
           ].map((cat, i) => (
             <Link to={`/category/${cat.slug}`} key={i} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', display: 'block', height: '220px' }} className="group">
               <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="group-hover:scale-110" />
               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)' }}></div>
               <h3 style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: 'white', fontWeight: 600, fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>{cat.name}</h3>
             </Link>
           ))}
        </div>
      </section>

      {/* 3. FLASH DEALS / BARAKAH FRIDAY */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '5rem 0' }}>
         <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ backgroundColor: '#ef4444', color: 'white', padding: '4px 12px', borderRadius: 'var(--radius-sm)', fontWeight: 'bold', fontSize: '0.8rem' }}>LIVE</span>
                  <h2 style={{ fontSize: '2.25rem', margin: 0 }}>Barakah Friday Deals</h2>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>Limited stock! Up to 60% off premium items.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--bg-white)', padding: '1rem 1.5rem', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-sm)' }}>
                <Clock size={20} style={{ color: '#ef4444' }} />
                <div style={{ display: 'flex', gap: '0.5rem', fontWeight: 700 }}>
                  <span style={{ backgroundColor: 'var(--bg-secondary)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>12h</span> : 
                  <span style={{ backgroundColor: 'var(--bg-secondary)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>45m</span> : 
                  <span style={{ backgroundColor: '#ef4444', color: 'white', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>30s</span>
                </div>
              </div>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             <ProductCard id="d1" title="Luxury Dubai Silk Abaya" price={45000} originalPrice={85000} image="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&q=80" vendor="Elegance Store" />
             <ProductCard id="d2" title="Oud Wood Premium Perfume Oil" price={12000} originalPrice={20000} image="https://images.unsplash.com/photo-1598285558965-025555c82970?w=400&q=80" vendor="Halal Scents" />
             <ProductCard id="d3" title="Gold Plated Ayatul Kursi Cuff" price={18500} originalPrice={30000} image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80" vendor="Islamic Jewels" />
             <ProductCard id="d4" title="Interactive Kids Prayer Mat" price={22000} originalPrice={35000} image="https://images.unsplash.com/photo-1601201524330-80dc9e5f5835?w=400&q=80" vendor="Deen Kids" />
           </div>
         </div>
      </section>

      {/* 4. SHARIAH VERIFIED TRUST SECTION */}
      <section className="container" style={{ padding: '6rem 1.5rem' }}>
        <div style={{ backgroundColor: 'var(--accent-emerald)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', display: 'flex', position: 'relative' }} className="flex-col lg:flex-row">
           <div style={{ padding: '4rem', flex: 1, color: 'white', zIndex: 10 }}>
             <ShieldCheck size={48} style={{ color: 'var(--gold-primary)', marginBottom: '1.5rem' }} />
             <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Shariah Verified Marketplace</h2>
             <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem', lineHeight: 1.6 }}>
               Every vendor and product on Shop With Hayaa goes through strict moderation to ensure adherence to Islamic ethics. 
               <br/><br/>
               • Escrow-protected funds holding<br/>
               • No Riba (interest) or hidden charges<br/>
               • Guaranteed Halal product sourcing
             </p>
              <Link to="/ethics" style={{ display: 'inline-block', backgroundColor: 'var(--gold-primary)', color: 'white', padding: '1rem 2rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
                Read Our Ethics Policy
              </Link>
           </div>
           <div style={{ flex: 1, minHeight: '300px', backgroundImage: 'url(https://images.unsplash.com/photo-1584553421349-355eaec4d7df?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 }}></div>
           
           <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '50%', background: 'linear-gradient(to right, var(--accent-emerald) 0%, transparent 100%)', zIndex: 5, pointerEvents: 'none', display: 'none' }} id="shariah-gradient"></div>
        </div>
      </section>

      {/* 5. RECOMMENDED FOR YOU */}
      <section style={{ backgroundColor: 'var(--bg-white)', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Personalized For You</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Based on trending items in Lagos and Abuja.</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             <ProductCard id="r1" title="Minimalist Linen Thobe - White" price={32000} image="https://images.unsplash.com/photo-1583344075193-706f9473b6aa?w=400&q=80" vendor="Sunnah Wear" isHalalVerified={true} badge="Top Rated" />
             <ProductCard id="r2" title="Velvet Premium Prayer Mat" price={15000} image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80" vendor="Home & Deen" />
             <ProductCard id="r3" title="Rose Water Hydrating Toner" price={8500} image="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80" vendor="Halal Glow" />
             <ProductCard id="r4" title="Silk Chiffon Hijab - Nude" price={6500} image="https://images.unsplash.com/photo-1589312683070-6539bf36b9e2?w=400&q=80" vendor="Modesty Co" isHalalVerified={true} />
          </div>
        </div>
      </section>

      {/* 6. GIFTING & AFFILIATE */}
      <section className="container" style={{ padding: '5rem 1.5rem', paddingBottom: '8rem' }}>
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Gifting */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem', borderRadius: 'var(--radius-xl)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <Gift size={32} style={{ color: 'var(--gold-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem' }}>The Gift of Hayaa</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '80%' }}>
                Send beautifully packaged Eid hampers, wedding registries, or simple gifts to loved ones. Add a personalized message at checkout.
              </p>
              <Link to="/category/kids" style={{ display: 'inline-block', backgroundColor: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--text-primary)', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
                Explore Hampers
              </Link>
            </div>
            {/* Decoration */}
            <div style={{ position: 'absolute', right: '-10%', bottom: '-20%', opacity: 0.1, color: 'var(--gold-primary)' }}>
               <Gift size={300} />
            </div>
          </div>

          {/* Affiliate */}
          <div style={{ backgroundColor: 'var(--gold-light)', padding: '3rem', borderRadius: 'var(--radius-xl)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <Share2 size={32} style={{ color: 'var(--gold-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem' }}>Earn With Us</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '80%' }}>
                Join the Hayaa Affiliate program. Share your unique link and earn up to 7% commission on every sale you generate.
              </p>
              <Link to="/auth/login" style={{ display: 'inline-block', backgroundColor: 'var(--gold-primary)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
                Join Program
              </Link>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          #hero-images { display: block !important; }
          #shariah-gradient { display: block !important; }
        }
        @media (max-width: 1023px) {
          .grid-cols-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .grid-cols-4 { grid-template-columns: 1fr !important; }
          .grid-cols-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
