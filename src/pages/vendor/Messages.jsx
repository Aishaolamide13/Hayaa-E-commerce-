import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

const threads = [
  { name: 'Aisha M.', lastMsg: 'Thank you! When will my order ship?', time: '2 min ago', unread: true },
  { name: 'Fatimah B.', lastMsg: 'Can I exchange for a different size?', time: '1 hour ago', unread: true },
  { name: 'Khadijah U.', lastMsg: 'Lovely quality, JazakAllah Khair!', time: 'Yesterday', unread: false },
  { name: 'Support Team', lastMsg: 'Your verification is approved ✓', time: '2 days ago', unread: false },
];

export default function VendorMessages() {
  return (
    <div className="animate-fade-in">
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem' }}>Messages</h1>
      
      <div style={{ display: 'flex', gap: '1.5rem', height: 'calc(100vh - 220px)' }}>
        {/* Thread List */}
        <div style={{ width: '320px', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>
            <input placeholder="Search conversations..." className="input-field" style={{ width: '100%' }} />
          </div>
          {threads.map((t, i) => (
            <div key={i} style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)', cursor: 'pointer', backgroundColor: i === 0 ? 'var(--gold-light)' : 'transparent' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 600 }}>{t.name}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.time}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>{t.lastMsg}</p>
                {t.unread && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold-primary)' }}></div>}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Area */}
        <div style={{ flex: 1, backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)', fontWeight: 600 }}>Aisha M. — Re: Order #ORD-9452</div>
          <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto' }}>
            <div style={{ alignSelf: 'flex-start', backgroundColor: 'var(--bg-secondary)', padding: '0.75rem 1rem', borderRadius: '0 var(--radius-md) var(--radius-md) var(--radius-md)', maxWidth: '70%' }}>
              <p style={{ fontSize: '0.9rem' }}>Assalamu Alaikum! I placed an order for the Dubai Silk Abaya. When will it ship?</p>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>10:43 AM</span>
            </div>
            <div style={{ alignSelf: 'flex-end', backgroundColor: 'var(--gold-primary)', color: 'white', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md) 0 var(--radius-md) var(--radius-md)', maxWidth: '70%' }}>
              <p style={{ fontSize: '0.9rem' }}>Wa Alaikum Assalam! Your order is being packed today and will ship tomorrow, In Shaa Allah. You'll receive a tracking number by SMS.</p>
              <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>10:45 AM</span>
            </div>
            <div style={{ alignSelf: 'flex-start', backgroundColor: 'var(--bg-secondary)', padding: '0.75rem 1rem', borderRadius: '0 var(--radius-md) var(--radius-md) var(--radius-md)', maxWidth: '70%' }}>
              <p style={{ fontSize: '0.9rem' }}>Thank you! When will my order ship?</p>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>10:47 AM</span>
            </div>
          </div>
          <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.75rem' }}>
            <input placeholder="Type your message..." className="input-field" style={{ flex: 1 }} />
            <button style={{ backgroundColor: 'var(--gold-primary)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}><Send size={18} /> Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
