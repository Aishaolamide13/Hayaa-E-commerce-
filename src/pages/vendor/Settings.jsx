import React from 'react';
import { Store, MapPin, Globe, Camera, Save } from 'lucide-react';

export default function VendorSettings() {
  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.25rem' }}>Shop Settings</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage your store profile and preferences</p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--gold-primary)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
          <Save size={18} /> Save Changes
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Store Profile */}
        <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '2rem' }}>
          <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Store size={20} /> Store Profile</h3>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', fontWeight: 700, fontSize: '2rem', position: 'relative' }}>
              ME
              <div style={{ position: 'absolute', bottom: -5, right: -5, backgroundColor: 'var(--gold-primary)', padding: '4px', borderRadius: '50%', color: 'white' }}><Camera size={14} /></div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Store Name</label>
                  <input className="input-field" defaultValue="Modest Elegance Shop" style={{ width: '100%' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Business Category</label>
                  <select className="input-field" style={{ width: '100%' }}>
                    <option>Women's Fashion</option><option>Men's Wear</option><option>Home Decor</option><option>Skincare</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Store Description</label>
            <textarea className="input-field" rows={3} style={{ width: '100%', resize: 'vertical' }} defaultValue="Premium modest fashion sourced directly from Dubai and Turkey. Every piece is crafted with love and attention to quality." />
          </div>
        </div>

        {/* Address */}
        <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '2rem' }}>
          <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={20} /> Business Address</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Street</label><input className="input-field" defaultValue="14 Adeola Odeku" style={{ width: '100%' }} /></div>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>City</label><input className="input-field" defaultValue="Victoria Island" style={{ width: '100%' }} /></div>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>State</label><select className="input-field" style={{ width: '100%' }}><option>Lagos</option><option>Abuja</option><option>Kano</option></select></div>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Phone</label><input className="input-field" defaultValue="+234 801 234 5678" style={{ width: '100%' }} /></div>
          </div>
        </div>

        {/* Bank */}
        <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '2rem' }}>
          <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Globe size={20} /> Payout Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Bank Name</label><select className="input-field" style={{ width: '100%' }}><option>GTBank</option><option>First Bank</option><option>Zenith Bank</option><option>UBA</option></select></div>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Account Number</label><input className="input-field" defaultValue="0123456789" style={{ width: '100%' }} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
