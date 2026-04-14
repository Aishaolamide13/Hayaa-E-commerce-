import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CAMPAIGNS = [
  {
    id: 1,
    title: "Ramadan Collection 2026",
    subtitle: "Elevate Your Modesty with Purpose.",
    dateLabel: "MAR 1 - APR 15",
    image: "/images/ramadan_carousel.png",
    link: "/deals",
    tag: "LIVE NOW"
  },
  {
    id: 2,
    title: "Barakah Friday Deals",
    subtitle: "Up to 60% off Premium Abayas & Oud.",
    dateLabel: "NOV 25 - NOV 30",
    image: "/images/barakah_friday_carousel.png",
    link: "/deals",
    tag: "UPCOMING"
  },
  {
    id: 3,
    title: "Umrah & Hajj Essentials",
    subtitle: "Everything you need for the sacred journey.",
    dateLabel: "MAY 1 - JUL 30",
    image: "/images/umrah_hajj_carousel.png",
    link: "/category/prayer-essentials",
    tag: "RESTOCKED"
  },
  {
    id: 4,
    title: "Sallah / Eid Festivities",
    subtitle: "Curated Hampers and Gifts for your Loved Ones.",
    dateLabel: "APR 10 - APR 20",
    image: "/images/sallah_eid_carousel.png",
    link: "/category/kids",
    tag: "EARLY ACCESS"
  },
  {
    id: 5,
    title: "Back to Islamic School",
    subtitle: "Modest schoolwear, notebooks, and supplies.",
    dateLabel: "AUG 15 - SEP 15",
    image: "/images/back_school_carousel.png",
    link: "/category/modest-fashion",
    tag: "NEW SEASON"
  }
];

export default function CampaignCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAMPAIGNS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CAMPAIGNS.length) % CAMPAIGNS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAMPAIGNS.length);
  };

  return (
    <section style={{ position: 'relative', width: '100%', height: 'calc(100vh - 150px)', maxHeight: '700px', minHeight: '500px', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)' }}>
      {CAMPAIGNS.map((campaign, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={campaign.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: isActive ? 10 : 0
            }}
          >
            {/* Background Image */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${campaign.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.7)'
            }} />

            {/* Overlay Gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(20,20,20,0.8) 0%, rgba(20,20,20,0.2) 100%)' }} />

            {/* Content */}
            <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', zIndex: 20 }}>
              <div style={{ maxWidth: '600px', color: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ backgroundColor: 'var(--gold-primary)', color: 'white', padding: '6px 12px', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px' }}>
                    {campaign.tag}
                  </span>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', fontWeight: 600 }}>
                    {campaign.dateLabel}
                  </span>
                </div>

                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  {campaign.title}
                </h1>

                <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', lineHeight: 1.6, textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  {campaign.subtitle}
                </p>

                <Link to={campaign.link} style={{ backgroundColor: 'var(--gold-primary)', color: 'white', padding: '1rem 2.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600, display: 'inline-block', boxShadow: '0 4px 14px rgba(200, 150, 46, 0.4)', transition: 'transform 0.2s', ':hover': { transform: 'translateY(-2px)' } }}>
                  Explore Campaign
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '1rem', zIndex: 30 }}>
        {CAMPAIGNS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '40px',
              height: '4px',
              backgroundColor: index === currentIndex ? 'var(--gold-primary)' : 'rgba(255,255,255,0.4)',
              borderRadius: '2px',
              transition: 'background-color 0.3s'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handlePrev}
        style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', border: '1px solid rgba(255,255,255,0.2)', zIndex: 30 }}
        className="carousel-btn hidden md:flex hover:bg-white/20 transition-all"
      >
        <ArrowLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', border: '1px solid rgba(255,255,255,0.2)', zIndex: 30 }}
        className="carousel-btn hidden md:flex hover:bg-white/20 transition-all"
      >
        <ArrowRight size={24} />
      </button>

      <style>{`
        @media (max-width: 768px) {
          .carousel-btn { display: none !important; }
        }
      `}</style>
    </section>
  );
}
