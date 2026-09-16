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
import DustCollectorDetail from '../components/DustCollectorDetail';
import VenturiPage from './VenturiPage';
import FilterCagesPage from './FilterCagesPage';
import dustCollectorHeroBg from '../assets/dust_collector_hero_bg.jpg';
import plantHdImg from '../assets/factory_bagfilter_plant_hd.jpg';
import turnkeyHdImg from '../assets/service_turnkey_hd.jpg';
import fabricationHdImg from '../assets/service_fabrication_hd.jpg';
import ductingHdImg from '../assets/indoor_ducting.jpg';

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

const cartridgeTechModes = [
  {
    mode: 'Nanofiber Pleated Surface Filtration',
    badge: '99.99% Sub-Micron Efficiency',
    highlight: 'Advanced spunbond media with nanofiber web stops dust on the outer surface.',
    desc: 'Unlike conventional felt bags where fine dust penetrates deep into the fabric pores (causing blinding and high pressure drop), pleated cartridges capture particulates purely on the outer surface. Reverse pulses shed the entire dust cake instantly with 40% less compressed air demand.',
    features: [
      '300% greater filtration area within a 50% smaller machine footprint',
      'Certified 99.99% particulate capture down to 0.3 micron (HEPA grade available)',
      'Substantially lower operating differential pressure (ΔP) saving ID fan electricity',
      'Ideal for laser & plasma CNC cutting, robotic welding cells, and powder coating'
    ]
  },
  {
    mode: 'Downward Cross-Flow Aerodynamics',
    badge: 'Zero Dust Re-Entrainment',
    highlight: 'Engineered downward velocity matches gravity to purge dislodged dust directly into hoppers.',
    desc: 'In traditional baghouses, upward can-velocity causes dust dislodged during pulsing to re-deposit on neighboring bags. Our cartridge collectors direct incoming air downward across the pleats, ensuring dislodged cake drops straight down without re-entrainment.',
    features: [
      'Downward airflow trajectory completely prevents cake re-entrainment on pleats',
      'Quick-release toolless cam-lock / twist-lock cartridge changeout from service doors',
      'Integrated spark arrestor baffles extinguish hot incandescent embers safely',
      'Modular scalable architecture designed for compact indoor factory installations'
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

  if (
    product.id === 'dust-collector-system' ||
    ['dust-collectors', 'dust-collector', 'industrial-dust-collectors', 'turnkey-dust-collector', 'dust-collection-equipment'].includes(activeSlug) ||
    (product.slugs && product.slugs.includes('dust-collectors'))
  ) {
    return <DustCollectorDetail product={product} />;
  }

  if (
    product.id === 'filter-cage-venturi' ||
    ['venturis', 'venturi', 'filter-cage-venturi', 'venturi-nozzle', 'venturi-nozzles', 'pulse-jet-venturi'].includes(activeSlug) ||
    (product.slugs && product.slugs.includes('venturis'))
  ) {
    return <VenturiPage />;
  }

  if (
    product.id === 'filter-cages' ||
    ['filter-cages', 'filter-cage', 'support-cages', 'dust-collector-filter-cages', 'cages-with-venturi'].includes(activeSlug)
  ) {
    return <FilterCagesPage />;
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

      {/* 2. HERO SECTION WITH INDUSTRIAL DUST COLLECTOR BACKGROUND (TRANSPARENT BG IMAGE) */}
      <section className="pd-hero-container">
        {/* Authentic Product Background */}
        <div 
          className="pd-hero-bg"
          style={{
            backgroundImage: `url(${product.heroImage || product.image || dustCollectorHeroBg})`
          }}
        />
        {/* Soft Multi-Stop Gradient Scrim Overlay for Crystal-Clear Text Legibility */}
        <div className="pd-hero-scrim" />

        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="pd-hero-card">
            
            {/* Tag Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              padding: '6px 14px',
              borderRadius: '999px',
              color: '#38bdf8',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(8px)'
            }}>
              <Sparkles size={14} />
              <span>{product.category} &bull; {product.tag}</span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: '1.18',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
            }}>
              {product.title}
            </h1>

            {/* Short Description */}
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.65',
              color: '#cbd5e1',
              fontWeight: '500',
              marginBottom: '2rem',
              maxWidth: '740px',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
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
                  boxShadow: '0 4px 15px rgba(2, 132, 199, 0.4)',
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
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)'
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
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1.5px solid rgba(255, 255, 255, 0.35)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <PhoneCall size={17} style={{ color: '#38bdf8' }} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick Metrics Bar - 100% Transparent Dark Aesthetic */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              padding: '16px 0 0',
              borderTop: '1px solid rgba(56, 189, 248, 0.25)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={24} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700' }}>Quality Standard</div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: '800', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>100% OEM Precision</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Factory size={24} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700' }}>Manufacturing Hub</div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: '800', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>Ghaziabad, UP, India</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={24} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700' }}>Dispatch &amp; Supply</div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: '800', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>Pan-India Delivery</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={24} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700' }}>Pollution Compliance</div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: '800', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>CPCB &amp; State Norms</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 TAILORED TECHNOLOGY COMPARISON - BLUE THEME */}
      {(() => {
        const isCartridge = product.id === 'cartridge-filters' || (product.slugs && product.slugs.includes('cartridge-filters'));
        const isBagFilter = ['pulse-jet-bag-filters', 'pulse-jet-filter', 'bag-filter', 'filter-bag'].includes(product.id) || 
                            (product.category === 'Turnkey Filtration Systems' && !isCartridge);

        if (!isCartridge && !isBagFilter) return null;

        const currentModes = isCartridge ? cartridgeTechModes : cleaningModes;
        const sectionBadge = isCartridge ? 'CARTRIDGE MEDIA TECHNOLOGY' : 'CLEANING TECHNOLOGY';
        const sectionTitle = isCartridge 
          ? <>Pleated Cartridge Technology: <span style={{ color: '#38bdf8' }}>Surface vs Depth Media</span></>
          : <>Pulse-Jet Cleaning: <span style={{ color: '#38bdf8' }}>Online vs Offline Modes</span></>;
        const sectionDesc = isCartridge
          ? "Engineered for high surface area and sub-micron particulate containment with minimal factory floor footprint:"
          : "Depending on your plant's particulate loading, gas temperature, and operating cycle, VS Filtech designs baghouses in both Online and Offline reverse-pulse configurations:";

        return (
          <section className="pd-section-blue">
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
                  <Sparkles size={13} /> {sectionBadge}
                </div>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#ffffff', marginBottom: '14px' }}>
                  {sectionTitle}
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.65' }}>
                  {sectionDesc}
                </p>
              </div>

              <div className="pd-grid-2col">
                {currentModes.map((item, idx) => (
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
        );
      })()}

      {/* 3. PRODUCT OVERVIEW & PHOTOGRAPHY SPLIT - WHITE THEME */}
      <section 
        className="pd-section-white"
      >
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="pd-overview-layout">
            
            {/* Left: Product Photo with High-Res Frame */}
            <div>
              <div 
                className="pd-overview-img-card"
                onClick={() => setLightboxOpen(true)}
              >
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="pd-overview-img"
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
              <div className="pd-specs-snapshot-card">
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

              {/* Engineering Overview Quick Action Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '1.8rem',
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

          {/* 3-3 KARKE 2 LINE MAI - CENTERED KEY FEATURES SECTION */}
          {product.features && product.features.length > 0 && (
            <div className="pd-features-divider">
              <div className="pd-features-header">
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#e0f2fe',
                  border: '1px solid #bae6fd',
                  padding: '4px 14px',
                  borderRadius: '999px',
                  color: '#0284c7',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  <Sparkles size={14} /> ENGINEERING ADVANTAGES
                </div>
                <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>
                  Distinguishing Engineering Advantages:
                </h3>
                <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6' }}>
                  Key technical capabilities and aerodynamic design advantages built into our {product.shortTitle || product.title}:
                </p>
              </div>

              {/* 3-3 karke 2 line mai (3 columns desktop, 2 rows) */}
              <div className="pd-grid-3col">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="pd-feature-card">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#0284c7', fontWeight: '700', fontSize: '0.98rem', marginBottom: '8px' }}>
                      <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: '2px', color: '#0284c7' }} />
                      <span>{feat.title}</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Centered Inquiry Action Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                marginTop: '2.5rem',
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
                    padding: '12px 24px',
                    borderRadius: '10px',
                    background: '#25D366',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '0.95rem',
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
                    padding: '12px 22px',
                    borderRadius: '10px',
                    background: '#ffffff',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontWeight: '700',
                    fontSize: '0.95rem',
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
          )}
        </div>
      </section>

      {/* 4. COMPREHENSIVE SPECIFICATIONS TABLE - BLUE THEME */}
      <section className="pd-section-blue">
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
            overflowX: 'auto',
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
      <section className="pd-section-white">
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

      {/* 5.5 AUTHENTIC INDUSTRIAL PLANT & FABRICATION GALLERY */}
      <section className="pd-gallery-section">
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#e0f2fe',
              border: '1px solid #bae6fd',
              padding: '4px 14px',
              borderRadius: '999px',
              color: '#0284c7',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              <Sparkles size={13} /> REAL PLANT FABRICATION &amp; FIELD INSTALLATIONS
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
              Precision Engineering in Action
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6' }}>
              Every VS Filtech dust collector and filtration system is designed, CNC laser-fabricated, and erected to withstand severe industrial duty:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={plantHdImg} 
                  alt="Industrial Turnkey Dust Collector Plant" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  color: '#38bdf8',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  backdropFilter: 'blur(6px)'
                }}>
                  Field Plant Installation
                </div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                  Centralized Baghouse Plants
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                  Continuous online reverse-pulse dust extraction with walk-in roof plenums and multi-hopper rotary discharge.
                </p>
              </div>
            </div>

            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={fabricationHdImg} 
                  alt="Factory Heavy Plate Fabrication" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  color: '#38bdf8',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  backdropFilter: 'blur(6px)'
                }}>
                  Workshop Fabrication
                </div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                  Laser-Cut Cell Plates &amp; Casing
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                  CNC fiber-laser tube sheet apertures calibrated to 0.05mm tolerances for leak-proof snap-ring seals.
                </p>
              </div>
            </div>

            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={ductingHdImg} 
                  alt="Industrial Aerodynamic Ducting Network" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  color: '#38bdf8',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  backdropFilter: 'blur(6px)'
                }}>
                  Ventilation Ductwork
                </div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                  Can-Velocity Extraction Ducts
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                  Aerodynamically balanced intake hooding and duct branches engineered for uniform capture velocity.
                </p>
              </div>
            </div>

            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={turnkeyHdImg} 
                  alt="Turnkey Commissioning &amp; Pollution Testing" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  color: '#38bdf8',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  backdropFilter: 'blur(6px)'
                }}>
                  CPCB Commissioning
                </div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                  Erection &amp; Statutory Testing
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                  On-site stack isokinetic testing, airflow calibration, and certified &lt; 10 mg/Nm³ emission validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL RFQ & DRAWINGS INQUIRY FORM - BLUE THEME */}
      <section id="rfq-form" className="pd-section-blue">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div className="pd-rfq-card">
            
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
        <section className="pd-section-white">
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
