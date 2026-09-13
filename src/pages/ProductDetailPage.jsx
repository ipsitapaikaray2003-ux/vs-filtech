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
  ArrowLeft
} from 'lucide-react';
import { getProductByIdOrSlug, allProductsData } from '../data/productsData';
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

      {/* 2. HERO SECTION */}
      <section 
        className="light-graphic-blueprint"
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)',
          padding: '4.5rem 0 3.5rem',
          borderBottom: '1px solid #e2e8f0'
        }}
      >
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '860px' }}>
            
            {/* Tag Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#f0f9ff',
              border: '1px solid #bae6fd',
              padding: '6px 14px',
              borderRadius: '999px',
              color: '#0284c7',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              boxShadow: '0 2px 8px rgba(2, 132, 199, 0.1)'
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
              letterSpacing: '-0.02em'
            }}>
              {product.title}
            </h1>

            {/* Short Description */}
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.65',
              color: '#475569',
              marginBottom: '2rem',
              maxWidth: '780px'
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
                  background: '#ffffff',
                  border: '1.5px solid #cbd5e1',
                  color: '#0f172a',
                  textDecoration: 'none'
                }}
              >
                <PhoneCall size={17} style={{ color: '#0284c7' }} />
                <span>+91 1234567890</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              padding: '18px 22px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)'
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

      {/* 3. PRODUCT OVERVIEW & PHOTOGRAPHY SPLIT */}
      <section 
        className="light-graphic-blueprint"
        style={{ padding: '5rem 0 4rem', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
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

              {/* Key Features List */}
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>
                  Distinguishing Engineering Advantages:
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
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

            </div>

          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE SPECIFICATIONS TABLE */}
      <section style={{ padding: '4.5rem 0', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              color: '#0284c7',
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              ENGINEERING MATRIX
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
              Standard Technical Parameters
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6' }}>
              Every unit is engineered to close tolerances. Custom configurations, special alloys, and custom dimensions are available on demand.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)', borderBottom: '1px solid #0284c7' }}>
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
                      borderBottom: idx === product.specs.length - 1 ? 'none' : '1px solid #e2e8f0',
                      background: idx % 2 === 0 ? '#ffffff' : '#f8fafc'
                    }}
                  >
                    <td style={{ padding: '16px 24px', color: '#0f172a', fontWeight: '700', fontSize: '0.92rem' }}>
                      {item.parameter}
                    </td>
                    <td style={{ padding: '16px 24px', color: '#334155', fontSize: '0.9rem', lineHeight: '1.55' }}>
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. PROCESS & INDUSTRIAL APPLICATIONS */}
      <section style={{ padding: '4.5rem 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px'
          }}>
            {product.applications.map((app, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'border-color 0.2s ease, transform 0.2s ease, background 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0284c7';
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#0284c7',
                  boxShadow: '0 0 8px rgba(2, 132, 199, 0.5)'
                }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#0f172a' }}>{app}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TECHNICAL RFQ & DRAWINGS INQUIRY FORM */}
      <section id="rfq-form" style={{ padding: '5rem 0', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          <div style={{
            background: '#ffffff',
            border: '1px solid #bae6fd',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            boxShadow: '0 15px 45px rgba(2, 132, 199, 0.08)'
          }}>
            
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#f0f9ff',
                border: '1px solid #bae6fd',
                padding: '6px 16px',
                borderRadius: '999px',
                color: '#0284c7',
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}>
                <MessageCircle size={14} /> INSTANT TECHNICAL RFQ DESK
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>
                Request Quotation for {product.shortTitle || product.title}
              </h2>
              
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.6' }}>
                Fill out the technical requirements below. Submitting opens a direct WhatsApp chat with our engineers at <strong>+91 1234567890</strong> for immediate quotation and drawings.
              </p>
            </div>

            {submitted && (
              <div style={{
                background: '#f0fdf4',
                border: '1px solid #86efac',
                color: '#15803d',
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
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
                    Contact Person *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#ffffff',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
                    Company / Plant Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. UltraTech Cement / Tata Steel"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#ffffff',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
                    WhatsApp Mobile Number *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 1234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#ffffff',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
                    Email Address (Optional)
                  </label>
                  <input 
                    type="email" 
                    placeholder="procurement@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#ffffff',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
                    Dimensions / Drawing Model / Quantity
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Dia 160mm x Length 3m, 200 pcs / 50,000 CFM"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#ffffff',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
                    Operating Temperature &amp; Flue Gas Type
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 180°C, Coal boiler flue gas, high moisture"
                    value={formData.operatingConditions}
                    onChange={(e) => setFormData({ ...formData, operatingConditions: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#ffffff',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
                  Specific Technical Notes / Replacement Requirements
                </label>
                <textarea 
                  rows="3" 
                  placeholder="Mention OEM part number, existing baghouse brand, or specific delivery timeline needed..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: '#ffffff',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
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
                  border: 'none',
                  color: '#ffffff',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(2, 132, 199, 0.35)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <MessageCircle size={20} />
                <span>Send Technical RFQ via WhatsApp to +91 1234567890</span>
                <Send size={16} />
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* 7. RELATED INDUSTRIAL SPARES & EQUIPMENT */}
      {relatedProducts.length > 0 && (
        <section style={{ padding: '4.5rem 0 5.5rem', background: '#ffffff' }}>
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

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}>
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
                  <div style={{ height: '170px', overflow: 'hidden', background: '#020617', position: 'relative' }}>
                    <img 
                      src={rel.image} 
                      alt={rel.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(15, 23, 42, 0.88)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      color: '#38bdf8',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '0.7rem',
                      fontWeight: '700'
                    }}>
                      {rel.tag}
                    </div>
                  </div>

                  <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                      {rel.shortTitle || rel.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5', marginBottom: '16px', flex: 1 }}>
                      {rel.shortDesc}
                    </p>
                    <Link 
                      to={`/products/${rel.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '9px 14px',
                        borderRadius: '8px',
                        background: '#f0f9ff',
                        border: '1px solid #bae6fd',
                        color: '#0284c7',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0284c7';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f0f9ff';
                        e.currentTarget.style.color = '#0284c7';
                      }}
                    >
                      <span>View Specifications</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
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
