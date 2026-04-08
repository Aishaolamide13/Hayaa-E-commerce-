import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Truck, HelpCircle, FileText, Mail, Phone, MapPin } from 'lucide-react';

const pages = {
  support: {
    title: 'Customer Support',
    icon: Mail,
    sections: [
      { heading: 'How can we help?', body: 'Our dedicated support team is available Saturday through Thursday, 9AM - 6PM WAT. We aim to respond within 2-4 hours during business hours.' },
      { heading: 'Contact Us', body: '📧 support@shopwithhayaa.com\n📞 +234 801 234 5678\n📍 14 Adeola Odeku, Victoria Island, Lagos' },
      { heading: 'Live Chat', body: 'Our live chat feature is available during business hours. Click the chat icon in the bottom right corner of any page to connect with a support agent instantly.' },
      { heading: 'Order Issues', body: 'For order-related issues including tracking, returns, or refunds, please have your order number ready (format: #ORD-XXXXX). This helps us resolve your issue faster.' },
    ]
  },
  faq: {
    title: 'Frequently Asked Questions',
    icon: HelpCircle,
    sections: [
      { heading: 'What is Shop With Hayaa?', body: 'Shop With Hayaa is Nigeria\'s first dedicated Islamic e-commerce marketplace. We connect verified Muslim vendors with conscious consumers who value modesty, quality, and ethical commerce.' },
      { heading: 'How does the Escrow Protection work?', body: 'When you make a purchase, your payment is held securely in escrow. The vendor only receives the funds after you confirm delivery and satisfaction. This protects both buyers and sellers.' },
      { heading: 'What does "Halal Verified" mean?', body: 'Products marked as Halal Verified have undergone our internal review process. We check ingredient lists, sourcing practices, and vendor certifications to ensure compliance with Islamic standards.' },
      { heading: 'How long does shipping take?', body: 'Standard shipping takes 3-5 business days within Nigeria. Express delivery (1-2 days) is available in Lagos, Abuja, and Kano for an additional ₦2,500.' },
      { heading: 'Can I return an item?', body: 'Yes! We offer a 7-day return policy for unworn items in original packaging. Refer to our Returns Policy page for full details.' },
      { heading: 'How do I become a vendor?', body: 'Navigate to the Auth page and sign up as a vendor. We review all applications within 48 hours to ensure alignment with our marketplace ethics.' },
    ]
  },
  returns: {
    title: 'Return Policy',
    icon: Truck,
    sections: [
      { heading: 'Return Window', body: 'All items can be returned within 7 calendar days of delivery, provided they are unworn, unwashed, and in their original packaging with tags attached.' },
      { heading: 'How to Initiate a Return', body: '1. Log into your account and go to Order History\n2. Select the order containing the item(s) to return\n3. Click "Request Return" and select a reason\n4. Print the prepaid shipping label\n5. Pack the item securely and drop off at any designated courier point' },
      { heading: 'Refund Processing', body: 'Refunds are processed within 3-5 business days after we inspect the returned item. The refund will be credited back to your original payment method.' },
      { heading: 'Non-Returnable Items', body: 'For hygiene reasons, the following items cannot be returned: skincare products (if opened), perfumes (if opened), undergarments, and customized/personalized items.' },
    ]
  },
  shipping: {
    title: 'Shipping Information',
    icon: Truck,
    sections: [
      { heading: 'Delivery Coverage', body: 'We currently deliver to all 36 states in Nigeria and the FCT. International shipping is coming soon.' },
      { heading: 'Shipping Rates', body: '• Standard Delivery (3-5 business days): ₦2,500\n• Express Delivery (1-2 business days): ₦5,000\n• Free shipping on orders above ₦50,000' },
      { heading: 'Order Tracking', body: 'Once your order ships, you\'ll receive an SMS and email with a tracking number. You can track your package in real-time through your account dashboard.' },
      { heading: 'Delivery Partners', body: 'We work with trusted logistics partners including GIG Logistics, DHL Nigeria, and our own last-mile delivery network in Lagos and Abuja.' },
    ]
  },
  ethics: {
    title: 'Our Ethics Policy',
    icon: ShieldCheck,
    sections: [
      { heading: 'Our Promise', body: 'Shop With Hayaa is built on the Islamic principle of Hayaa (حياء) — modesty, dignity, and ethical conduct. Every aspect of our marketplace is designed to uphold these values.' },
      { heading: 'Vendor Verification', body: 'Every vendor undergoes a rigorous verification process. We check business registration, product sourcing, and ensure alignment with Islamic ethics. Vendors must agree to our Code of Conduct.' },
      { heading: 'No Riba (Interest)', body: 'Our payment system is designed to avoid interest-based transactions. We do not charge interest on any payment plans or vendor payouts.' },
      { heading: 'Halal Product Standards', body: 'All skincare, wellness, and food products on our platform must provide Halal certification or detailed ingredient lists for review. Our moderators check each listing before approval.' },
      { heading: 'Escrow-Based Commerce', body: 'Funds are held in trust (Amanah) until the buyer confirms delivery. This eliminates fraud risk and ensures fair dealings for all parties.' },
      { heading: 'Community First', body: 'A portion of our platform fees is directed toward community programs including education sponsorships and small vendor empowerment initiatives across Nigeria.' },
    ]
  },
  'vendor-terms': {
    title: 'Vendor Terms of Service',
    icon: FileText,
    sections: [
      { heading: 'Eligibility', body: 'Vendors must be registered businesses or sole proprietors in Nigeria. All product listings must comply with our Halal standards and community guidelines.' },
      { heading: 'Commission Structure', body: 'Shop With Hayaa charges a 10% commission on each successful sale. No monthly fees, no hidden charges. You only pay when you earn.' },
      { heading: 'Payout Schedule', body: 'Vendor payouts are processed every Friday for all confirmed deliveries. Funds are transferred directly to your registered bank account within 24 hours.' },
      { heading: 'Product Listing Standards', body: 'All product photos must be high-quality, original images. Descriptions must be accurate and honest. Misleading listings will be removed and may result in account suspension.' },
      { heading: 'Disputes', body: 'In cases of buyer disputes, our moderation team reviews the evidence from both parties. Decisions are final and made in accordance with our Ethics Policy.' },
    ]
  },
};

export default function InfoPage() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const page = pages[slug] || pages.support;
  const Icon = page.icon;

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '80vh', padding: '3rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link> <ChevronRight size={14} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{page.title}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <div style={{ backgroundColor: 'var(--gold-light)', padding: '1rem', borderRadius: 'var(--radius-md)', color: 'var(--gold-primary)' }}>
            <Icon size={32} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>{page.title}</h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {page.sections.map((s, i) => (
            <div key={i} style={{ backgroundColor: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '1rem' }}>{s.heading}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
