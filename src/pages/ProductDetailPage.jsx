import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  PhoneCall, 
  Send, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Wind, 
  Sparkles, 
  ChevronRight, 
  Maximize2, 
  Settings, 
  FileText,
  Clock,
  Award,
  Factory,
  ArrowLeft,
  Flame,
  Mountain,
  Zap,
  FlaskConical,
  Hammer
} from 'lucide-react';
import { getProductByIdOrSlug, allProductsData } from '../data/productsData';
import PowerEngineersPanelDetail from '../components/PowerEngineersPanelDetail';
import dustCollectorHeroBg from '../assets/dust_collector_hero_bg.jpg';

const cleaningModes = [
  {
    mode: 'Online Pulse Jet Mode',
    badge: 'Continuous 24/7 Cleaning',
    highlight: 'Continuous row-by-row pulsing during operation without compartment isolation.',
    desc: 'Filter bags are pulsed row-by-row with supersonic compressed air bursts while dust-laden process airflow continues moving through the baghouse. Ensures constant draft without stopping production.',
    features: [
      'Continuous cleaning during operation; no damper isolation needed',
      'Automatic sequential pulsing controlled by micro-timer or DP sensor',
      'Lower initial capital cost & compact modular footprint',
      'Ideal for cement mills, boiler flue gas, and continuous manufacturing'
    ]
  },
  {
    mode: 'Offline Pulse Jet Mode',
    badge: 'Compartmentalized Isolation',
    highlight: 'Pneumatic damper isolation per compartment for zero-velocity cleaning.',
    desc: 'Each compartment is isolated from the main gas stream using pneumatic poppet dampers before pulsing. Dislodged dust drops immediately into the hopper in stagnant air, completely preventing re-entrainment.',
    features: [
      'Compartmentalized design with automatic pneumatic isolation dampers',
      'Zero-velocity cleaning eliminates dust re-entrainment on neighboring bags',
      'Allows online inspection & bag replacement of individual chambers during plant operation',
      'Up to 35% higher cleaning efficiency for ultra-fine, abrasive, or sticky dust'
    ]
  }
];

const industryDetails = {
  'Cement & Clinker Plants': {
    icon: Mountain,
    desc: 'Kiln exhaust, clinker coolers, raw & ball mill ventilation and bulk silo venting.'
  },
  'Steel & Induction Furnaces': {
    icon: Flame,
    desc: 'EAF canopy hoods, ladle refining furnace (LRF) extraction & primary smelting fumes.'
  },
  'Thermal Power Boilers': {
    icon: Zap,
    desc: 'Stoker boilers, pulverized coal flue gas cleaning & ESP-to-baghouse conversions.'
  },
  'Carbon Black & Chemical': {
    icon: FlaskConical,
    desc: 'Sub-micron particle collection, synthetic resins & pneumatic transfer systems.'
  },
  'Non-Ferrous Smelters': {
    icon: Hammer,
    desc: 'Secondary aluminium smelting, lead rotary furnaces & copper refining off-gas.'
  },
  'Foundries & Sand Plants': {
    icon: Factory,
    desc: 'Sand reclamation, core making, shakeout tables & automated shot blasting booths.'
  }
};
import './ProductDetails.css';

const ProductDetailPage = ({ defaultSlug }) => {
  const { slug } = useParams();
  const activeSlug = slug || defaultSlug;
  const navigate = useNavigate();
  const product = getProductByIdOrSlug(activeSlug);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    dimensions: '',
    operatingConditions: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmitted(false);
  }, [activeSlug]);

  if (!product) {
    return (
      <div className="product-page" style={{ paddingTop: '120px', paddingBottom: '80px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '20px',
            padding: '40px 24px',
            color: '#ffffff'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: '#f87171' }}>Product or Spare Not Found</h2>
            <p style={{ color: '#94a3b8', marginBottom: '24px', lineHeight: '1.6' }}>
              We could not find the exact product or spare with identifier <strong>"{slug}"</strong>. Please browse our complete catalog of industrial filtration equipment and spares.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn btn-primary">
                <Layers size={18} />
                <span>Browse All Products & Spares</span>
              </Link>
              <Link to="/products/filter-bag" className="btn btn-outline">
                <span>Filter Bags Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (
    product.category === 'Electrical & Automation Panels' || 
    ['ht-panel', 'lt-panel', 'pcc-panel', 'mcc-panel', 'apfc-panel', 'bus-duct', 'vfd-panel'].includes(product.id)
  ) {
    return <PowerEngineersPanelDetail product={product} />;
  }

  // Related products
  const relatedProducts = (product.relatedIds || [])
    .map(relId => getProductByIdOrSlug(relId))
    .filter(Boolean)
    .slice(0, 4);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const waText = 
`*Inquiry for ${product.title} - VS Filtech*
----------------------------------------
👤 *Contact Person:* ${formData.name} ${formData.company ? `(${formData.company})` : ''}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || 'Not provided'}
🏭 *Product:* ${product.title}
📐 *Size / Model / Qty:* ${formData.dimensions || 'Standard / Per Drawing'}
🌡️ *Operating Conditions:* ${formData.operatingConditions || 'Standard industrial atmosphere'}
📝 *Requirement:* ${formData.message || 'Please provide quotation, engineering specifications, and delivery lead time.'}
----------------------------------------
_Sent from vsfiltech.com/products/${product.id}_`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/911234567890?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="product-page" style={{ paddingTop: '80px', background: '#ffffff' }}>
      
      {/* 1. BREADCRUMBS & TOP NAV */}
      <div style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '14px 0',
        fontSize: '0.85rem'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', color: '#64748b' }}>
          <Link to="/" style={{ color: '#475569', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" style={{ color: '#475569', textDecoration: 'none', fontWeight: '500' }}>Products &amp; Spares</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#0284c7', fontWeight: '700' }}>{product.shortTitle || product.title}</span>
        </div>
      </div>

      {/* 2. HERO SECTION WITH DUST COLLECTOR BACKGROUND */}
      <section className="pd-hero-container">
        {/* Authentic Industrial Dust Collector System Background */}
        <div 
          className="pd-hero-bg"
          style={{
            backgroundImage: `url(${dustCollectorHeroBg})`
          }}
        />
        {/* Soft Multi-Stop Gradient Scrim Overlay for Crystal-Clear Text Legibility */}
        <div className="pd-hero-scrim" />

        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '860px' }}>
            
            {/* Tag Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(240, 249, 255, 0.95)',
              border: '1px solid #bae6fd',
              padding: '6px 14px',
              borderRadius: '999px',
              color: '#0284c7',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              boxShadow: '0 2px 10px rgba(2, 132, 199, 0.12)',
              backdropFilter: 'blur(8px)'
            }}>
              <Sparkles size={14} />
              <span>{product.category} &bull; {product.tag}</span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: '800',
              color: '#0f172a',
              lineHeight: '1.18',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 16px rgba(255, 255, 255, 0.95), 0 1px 4px #ffffff'
            }}>
              {product.title}
            </h1>

            {/* Short Description */}
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.65',
              color: '#1e293b',
              fontWeight: '500',
              marginBottom: '2rem',
              maxWidth: '780px',
              textShadow: '0 2px 12px rgba(255, 255, 255, 0.95), 0 1px 3px #ffffff'
            }}>
              {product.shortDesc}
            </p>

            {/* Quick Action CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a 
                href="#rfq-form" 
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)',
                  color: '#ffffff',
                  border: '1px solid rgba(56, 189, 248, 0.5)',
                  boxShadow: '0 4px 15px rgba(2, 132, 199, 0.3)',
                  textDecoration: 'none'
                }}
              >
                <FileText size={18} />
                <span>Request Quotation / RFQ</span>
              </a>

              <a 
                href={`https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20am%20interested%20in%20${encodeURIComponent(product.title)}.%20Please%20share%20specifications%20and%20quotation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '12px 22px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Inquiry</span>
              </a>

              <a 
                href="tel:+911234567890" 
                className="btn btn-outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1.5px solid #cbd5e1',
                  color: '#0f172a',
                  textDecoration: 'none',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <PhoneCall size={17} style={{ color: '#0284c7' }} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              padding: '18px 22px',
              background: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(2, 132, 199, 0.25)',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={24} style={{ color: '#0284c7', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600' }}>Quality Standard</div>
                  <div style={{ fontSize: '0.92rem', color: '#0f172a', fontWeight: '700' }}>100% OEM Precision</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Factory size={24} style={{ color: '#0284c7', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600' }}>Manufacturing Hub</div>
                  <div style={{ fontSize: '0.92rem', color: '#0f172a', fontWeight: '700' }}>Ghaziabad, UP, India</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={24} style={{ color: '#0284c7', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600' }}>Dispatch &amp; Supply</div>
                  <div style={{ fontSize: '0.92rem', color: '#0f172a', fontWeight: '700' }}>Pan-India Delivery</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={24} style={{ color: '#0284c7', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '600' }}>Pollution Compliance</div>
                  <div style={{ fontSize: '0.92rem', color: '#0f172a', fontWeight: '700' }}>CPCB &amp; State Norms</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 PULSE-JET CLEANING MODES: ONLINE VS OFFLINE - BLUE THEME */}
      <section className="pd-section-blue" style={{ padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 45px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.28)',
              padding: '4px 14px',
              borderRadius: '999px',
              color: '#38bdf8',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              <Sparkles size={13} /> CLEANING TECHNOLOGY
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#ffffff', marginBottom: '14px' }}>
              Pulse-Jet Cleaning: <span style={{ color: '#38bdf8' }}>Online vs Offline Modes</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Depending on your plant's particulate loading, gas temperature, and operating cycle, VS Filtech designs baghouses in both Online and Offline reverse-pulse configurations:
            </p>
          </div>

          <div className="pd-grid-2col">
            {cleaningModes.map((item, idx) => (
              <div 
                key={idx}
                className="pd-dark-card"
                style={{ borderTop: '4px solid #38bdf8' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                    color: '#38bdf8',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase'
                  }}>
                    {item.badge}
                  </span>
                  <Wind size={20} style={{ color: '#38bdf8' }} />
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                  {item.mode}
                </h3>

                <div style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: '600', marginBottom: '14px' }}>
                  {item.highlight}
                </div>

                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '22px', flex: 1 }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid rgba(56, 189, 248, 0.15)', paddingTop: '18px' }}>
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ color: '#e2e8f0', fontSize: '0.88rem', lineHeight: '1.5' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT OVERVIEW & PHOTOGRAPHY SPLIT - WHITE THEME */}
      <section 
        className="pd-section-white"
        style={{ padding: '5.5rem 0 4.5rem' }}
      >
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 460px) 1fr',
            gap: '3rem',
            alignItems: 'start'
          }}>
            
            {/* Left: Product Photo with High-Res Frame */}
            <div>
              <div 
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: '#f8fafc',
                  border: '1px solid #bae6fd',
                  boxShadow: '0 12px 30px rgba(2, 132, 199, 0.08)',
                  cursor: 'pointer'
                }}
                onClick={() => setLightboxOpen(true)}
              >
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{
                    width: '100%',
                    height: '380px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Fullscreen HD Zoom Trigger */}
                <button 
                  type="button"
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)'
                  }}
                  onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
                >
                  <Maximize2 size={14} />
                  <span>Inspect HD</span>
                </button>

                {/* Bottom Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  insetInline: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 100%)',
                  padding: '24px 20px 16px',
                  color: '#ffffff'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: '700', textTransform: 'uppercase' }}>
                    Authentic Industrial Component
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                    Fabricated &amp; Tested to Standard Tolerances
                  </div>
                </div>
              </div>

              {/* Quick Specs Snapshot */}
              <div style={{
                marginTop: '1.5rem',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '18px 20px'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#0284c7', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Engineering Assurance
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
                    <span>Zero bypass / 100% dust containment</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
                    <span>Custom drawings &amp; retrofit compatibility</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
                    <span>Tested for thermal &amp; abrasive durability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: In-depth Technical Overview */}
            <div>
              <div style={{
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                color: '#0284c7',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}>
                TECHNICAL SPECIFICATIONS &amp; ARCHITECTURE
              </div>

              <h2 style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                fontWeight: '800',
                color: '#0f172a',
                lineHeight: '1.25',
                marginBottom: '1.5rem'
              }}>
                About {product.title}
              </h2>

              <p style={{
                fontSize: '1.05rem',
                lineHeight: '1.75',
                color: '#334155',
                marginBottom: '1.5rem'
              }}>
                {product.overview}
              </p>

              {/* Working Principle Box */}
              {product.principle && (
                <div style={{
                  background: '#f0f9ff',
                  border: '1px solid #bae6fd',
                  borderRadius: '14px',
                  padding: '22px 24px',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#0369a1',
                    marginBottom: '10px'
                  }}>
                    <Settings size={18} />
                    <span>Operating Principle &amp; Functional Mechanism</span>
                  </div>
                  <p style={{ fontSize: '0.92rem', lineHeight: '1.65', color: '#334155', margin: 0 }}>
                    {product.principle}
                  </p>
                </div>
              )}

                {/* Key Features List - 2-2 Line Mai */}
                <div style={{ marginTop: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>
                    Distinguishing Engineering Advantages:
                  </h3>
                  <div className="pd-grid-2col" style={{ gap: '14px' }}>
                  {product.features.map((feat, idx) => (
                    <div 
                      key={idx} 
                      style={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0284c7', fontWeight: '700', fontSize: '0.92rem' }}>
                        <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
                        <span>{feat.title}</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Overview Quick Action Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '1.8rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #e2e8f0',
                flexWrap: 'wrap'
              }}>
                <a 
                  href={`https://wa.me/911234567890?text=${encodeURIComponent(`Hi VS Filtech, I am interested in ${product.title}. Please provide engineering sizing and quotation.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '11px 22px',
                    borderRadius: '10px',
                    background: '#25D366',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                    transition: 'transform 0.2s ease, background 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#1ebc59'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Technical Inquiry</span>
                </a>

                <a 
                  href="tel:+911234567890" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '11px 20px',
                    borderRadius: '10px',
                    background: '#ffffff',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0284c7'; e.currentTarget.style.color = '#0284c7'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.color = '#0f172a'; }}
                >
                  <PhoneCall size={17} style={{ color: '#0284c7' }} />
                  <span>Call Now</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE SPECIFICATIONS TABLE - BLUE THEME */}
      <section className="pd-section-blue" style={{ padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.28)',
              padding: '4px 14px',
              borderRadius: '999px',
              color: '#38bdf8',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              ENGINEERING MATRIX
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
              Standard Technical Parameters
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>
              Every unit is engineered to close tolerances. Custom configurations, special alloys, and custom dimensions are available on demand.
            </p>
          </div>

          <div style={{
            background: 'rgba(15, 32, 64, 0.88)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(56, 189, 248, 0.22)',
            borderRadius: '18px',
            overflow: 'hidden',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)', borderBottom: '1px solid rgba(56, 189, 248, 0.35)' }}>
                  <th style={{ padding: '16px 24px', color: '#ffffff', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', width: '35%' }}>
                    Technical Parameter
                  </th>
                  <th style={{ padding: '16px 24px', color: '#ffffff', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', width: '65%' }}>
                    Specification / Typical Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((item, idx) => (
                  <tr 
                    key={idx}
                    style={{
                      borderBottom: idx === product.specs.length - 1 ? 'none' : '1px solid rgba(56, 189, 248, 0.12)',
                      background: idx % 2 === 0 ? 'rgba(12, 27, 51, 0.75)' : 'rgba(16, 36, 68, 0.75)'
                    }}
                  >
                    <td style={{ padding: '16px 24px', color: '#38bdf8', fontWeight: '700', fontSize: '0.92rem' }}>
                      {item.parameter}
                    </td>
                    <td style={{ padding: '16px 24px', color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.55' }}>
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. PROCESS & INDUSTRIAL APPLICATIONS - WHITE THEME */}
      <section className="pd-section-white" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              color: '#0284c7',
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              FIELD-PROVEN DEPLOYMENTS
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
              Common Industrial Applications
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6' }}>
              Operating successfully across high-load continuous processing sectors in India:
            </p>
          </div>

          {/* Applications 2-2 Line Mai */}
          <div className="pd-grid-2col">
            {product.applications.map((app, idx) => {
              const details = industryDetails[app] || {
                icon: Factory,
                desc: 'Heavy industrial particulate containment & regulatory emission compliance.'
              };
              const IconComp = details.icon;
              return (
                <div key={idx} className="pd-app-card">
                  <div className="pd-app-icon-box">
                    <IconComp size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>
                      {app}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                      {details.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. TECHNICAL RFQ & DRAWINGS INQUIRY FORM - BLUE THEME */}
      <section id="rfq-form" className="pd-section-blue" style={{ padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div style={{
            background: 'rgba(15, 32, 64, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1.5px solid rgba(56, 189, 248, 0.32)',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)'
          }}>
            
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '6px 16px',
                borderRadius: '999px',
                color: '#38bdf8',
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}>
                <MessageCircle size={14} /> INSTANT TECHNICAL RFQ DESK
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
                Request Quotation for {product.shortTitle || product.title}
              </h2>
              
              <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: '1.6' }}>
                Fill out the technical requirements below. Submitting opens a direct WhatsApp chat with our engineers for immediate quotation and drawings.
              </p>
            </div>

            {submitted && (
              <div style={{
                background: 'rgba(5, 46, 22, 0.9)',
                border: '1px solid #22c55e',
                color: '#86efac',
                padding: '16px 20px',
                borderRadius: '12px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.95rem',
                fontWeight: '600'
              }}>
                <CheckCircle2 size={20} />
                <span>Inquiry formatted successfully! WhatsApp chat has opened in a new tab.</span>
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                    Contact Person *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pd-dark-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                    Company / Plant Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. UltraTech Cement / Tata Steel"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="pd-dark-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                    WhatsApp Mobile Number *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="Enter WhatsApp mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pd-dark-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                    Email Address (Optional)
                  </label>
                  <input 
                    type="email" 
                    placeholder="procurement@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pd-dark-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                    Dimensions / Drawing Model / Quantity
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Dia 160mm x Length 3m, 200 pcs / 50,000 CFM"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="pd-dark-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                    Operating Temperature &amp; Flue Gas Type
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 180°C, Coal boiler flue gas, high moisture"
                    value={formData.operatingConditions}
                    onChange={(e) => setFormData({ ...formData, operatingConditions: e.target.value })}
                    className="pd-dark-input"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                  Specific Technical Notes / Replacement Requirements
                </label>
                <textarea 
                  rows="3" 
                  placeholder="Mention OEM part number, existing baghouse brand, or specific delivery timeline needed..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="pd-dark-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit" 
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  color: '#ffffff',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(2, 132, 199, 0.4)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <MessageCircle size={20} />
                <span>Send Technical RFQ via WhatsApp</span>
                <Send size={16} />
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* 7. RELATED INDUSTRIAL SPARES & EQUIPMENT - WHITE THEME */}
      {relatedProducts.length > 0 && (
        <section className="pd-section-white" style={{ padding: '5rem 0 5.5rem' }}>
          <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  BAGHOUSE SPARES ECOSYSTEM
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginTop: '4px' }}>
                  Related Components &amp; Spares
                </h3>
              </div>
              
              <Link 
                to="/products" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#0284c7',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '700'
                }}
              >
                <span>View All 17 Spares &amp; Systems</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Spares 2-2 Line Mai */}
            <div className="pd-grid-2col" style={{ gap: '24px' }}>
              {relatedProducts.map((rel) => (
                <div 
                  key={rel.id}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                    transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = '#0284c7';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(2, 132, 199, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div style={{ 
                    height: '250px', 
                    background: '#ffffff', 
                    borderBottom: '1px solid #e2e8f0',
                    position: 'relative', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                    overflow: 'hidden' 
                  }}>
                    <img 
                      src={rel.image} 
                      alt={rel.title} 
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '100%', 
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                        filter: 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.08))',
                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }} 
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 23, 42, 0.9)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      color: '#38bdf8',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '0.72rem',
                      fontWeight: '700'
                    }}>
                      {rel.tag}
                    </div>
                  </div>

                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                      {rel.shortTitle || rel.title}
                    </h4>
                    <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.55', marginBottom: '16px', flex: 1 }}>
                      {rel.shortDesc}
                    </p>

                    {/* WhatsApp and Call Buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                      <a 
                        href={`https://wa.me/911234567890?text=${encodeURIComponent(`Hi VS Filtech, I am interested in ${rel.title}. Please share technical specifications and quotation.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          background: '#25D366',
                          color: '#ffffff',
                          fontSize: '0.84rem',
                          fontWeight: '700',
                          textDecoration: 'none',
                          boxShadow: '0 2px 8px rgba(37, 211, 102, 0.25)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#1ebc59'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = '#25D366'; }}
                      >
                        <MessageCircle size={15} />
                        <span>WhatsApp</span>
                      </a>

                      <a 
                        href="tel:+911234567890" 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          background: '#0284c7',
                          color: '#ffffff',
                          fontSize: '0.84rem',
                          fontWeight: '700',
                          textDecoration: 'none',
                          boxShadow: '0 2px 8px rgba(2, 132, 199, 0.25)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#0369a1'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = '#0284c7'; }}
                      >
                        <PhoneCall size={15} />
                        <span>Call Now</span>
                      </a>
                    </div>

                    <Link 
                      to={`/products/${rel.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '9px 14px',
                        borderRadius: '8px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#334155',
                        fontSize: '0.84rem',
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0284c7';
                        e.currentTarget.style.borderColor = '#0284c7';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f8fafc';
                        e.currentTarget.style.borderColor = '#cbd5e1';
                        e.currentTarget.style.color = '#334155';
                      }}
                    >
                      <span>View Specifications</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Spares Contact Banner with WhatsApp & Call Buttons */}
            <div style={{
              marginTop: '2.5rem',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '16px',
              padding: '24px 30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              flexWrap: 'wrap',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)'
            }}>
              <div>
                <div style={{ color: '#38bdf8', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                  Immediate Baghouse Engineering Assistance
                </div>
                <div style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: '800' }}>
                  Need urgent replacement spares or custom fabrication drawings?
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '4px' }}>
                  Direct dispatch support across India with OEM dimensional verification.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <a 
                  href={`https://wa.me/911234567890?text=${encodeURIComponent(`Hello VS Filtech, I need urgent pricing and delivery for Baghouse Spares (${product.title}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 22px',
                    borderRadius: '10px',
                    background: '#25D366',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
                    transition: 'transform 0.2s ease, background 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#1ebc59'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a 
                  href="tel:+911234567890"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 22px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1.5px solid rgba(255, 255, 255, 0.25)',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    backdropFilter: 'blur(8px)',
                    transition: 'transform 0.2s ease, background 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <PhoneCall size={18} style={{ color: '#38bdf8' }} />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>

          </div>
        </section>
      )}


      {/* 8. ULTRA-HD LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(2, 6, 23, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: '#070b14',
              borderRadius: '20px',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1.1rem' }}>
                {product.title} &bull; High Resolution Inspection
              </div>
              <button 
                type="button"
                onClick={() => setLightboxOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Close (ESC)
              </button>
            </div>
            
            <div style={{ padding: '16px', textAlign: 'center', background: '#020617' }}>
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} 
              />
            </div>

            <div style={{
              padding: '14px 20px',
              background: '#040711',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                VS Filtech Technical Assurance &bull; Ghaziabad, Uttar Pradesh
              </span>
              <a 
                href={`https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20am%20inquiring%20about%20${encodeURIComponent(product.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetailPage;
