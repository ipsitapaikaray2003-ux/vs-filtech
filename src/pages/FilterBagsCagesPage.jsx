import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Wrench, 
  PhoneCall, 
  Sparkles, 
  FileCheck2,
  Settings,
  Cpu
} from 'lucide-react';
import bagImg from '../assets/filter_bag_hd.jpg';
import pleatedImg from '../assets/pleated_filter_bag.jpeg';

const filterMediaList = [
  {
    name: 'Polyester',
    badge: 'Standard & Versatile',
    desc: 'High-tensile non-woven polyester needlefelt available with singed, glazed, antistatic, or water/oil repellent finishes. Engineered for general industrial dust collection, cement transfer, and material handling.',
    features: ['High mechanical strength', 'Water & oil repellent finishes', 'Antistatic conductive fiber options']
  },
  {
    name: 'Polypropylene',
    badge: 'Moisture & Chemical Resistant',
    desc: 'Synthetic polymer media providing exceptional chemical resistance against strong acids and alkalis. Ideal for wet or moisture-laden industrial processes, chemical drying, and food ingredient processing.',
    features: ['Superior acid & alkali resistance', 'Zero moisture absorption', 'Smooth cake release surface']
  },
  {
    name: 'Acrylic',
    badge: 'Acidic Gas Filtration',
    desc: 'Homopolymer acrylic needlefelt engineered specifically for applications with acidic flue gases, dryers, and industrial utility boilers requiring robust resistance to chemical degradation.',
    features: ['Excellent hydrolytic resistance', 'Stable in acidic environments', 'Uniform air permeability']
  },
  {
    name: 'PPS (Polyphenylene Sulfide)',
    badge: 'Coal & Sulfur Resistance',
    desc: 'Engineered for coal-fired boiler flue gas, waste incineration, and smelters. Offers outstanding resistance to sulfur oxides (SOx) and acidic attack under demanding operating conditions.',
    features: ['High sulfur oxide (SOx) resistance', 'Proven boiler flue gas track record', 'Long operational lifespan']
  },
  {
    name: 'Aramid (Nomex)',
    badge: 'Dry Flue Gas Applications',
    desc: 'High-strength aromatic polyamide media engineered for hot gas filtration in asphalt plants, metallurgy, rotary dryers, and metal casting operations with non-acidic gas streams.',
    features: ['Flame-retardant fiber structure', 'High tensile durability', 'Thermal dimensional stability']
  },
  {
    name: 'PTFE',
    badge: 'Severe Chemical Environments',
    desc: '100% polytetrafluoroethylene synthetic media and ePTFE membrane laminates delivering extreme chemical inertness across the entire pH 0-14 range and superior non-stick dust cake discharge.',
    features: ['Complete pH 0-14 chemical inertness', 'ePTFE membrane surface filtration', 'Ultra-low emission capture']
  },
  {
    name: 'Fiberglass',
    badge: 'High-Temperature Flue Gas',
    desc: 'Woven filament fiberglass media treated with specialized chemical finishes (acid-resistant silicone/graphite/PTFE). Engineered for cement kiln exhausts, incinerators, and ferro-alloy smelters.',
    features: ['High-temperature woven filament structure', 'Acid-resistant protective finish', 'Zero fabric elongation']
  },
  {
    name: 'Other Application-Specific Media',
    badge: 'Custom Engineered',
    desc: 'Custom engineered hybrid blends, micro-denier needlefelts, antistatic stainless steel fiber blends, and PTFE surface membranes tailored precisely for challenging process chemistries.',
    features: ['Custom blend formulations', 'Application-matched finishes', 'Tailored air-to-cloth compatibility']
  }
];

const filterCagesFeatures = [
  {
    title: 'Stainless Steel (SS) Cages',
    desc: 'Fabricated in SS 304 or SS 316 for corrosive chemical environments, food-grade processing, and high-temperature installations.'
  },
  {
    title: 'Mild Steel (MS) Cages',
    desc: 'Manufactured from premium heavy-gauge drawn wire with electro-galvanized (GI) or high-temperature protective coatings.'
  },
  {
    title: 'Multi-Wire Configurations',
    desc: 'Engineered with 8, 10, 12, 16, 20, or 24 longitudinal wires to provide uniform circumferential fabric support and prevent bag collapse.'
  },
  {
    title: 'Venturi-Compatible Cages',
    desc: 'Supplied with integrated pressed venturis, cast aluminum venturis, or precision machined snap-lock venturi bells.'
  },
  {
    title: 'Various Lengths & Configurations',
    desc: 'Custom manufactured in single-piece or modular split designs (with twist-lock or claw couplings) for height-constrained baghouses.'
  },
  {
    title: 'Replacement as per Sample / Drawing',
    desc: 'Precision reverse engineering and dimensional fabrication matching any existing OEM baghouse cage drawing or physical sample.'
  }
];

const selectionCriteria = [
  'Process Gas & Dust Operating Temperature',
  'Dust Particle Characteristics & Abrasiveness',
  'Chemical Composition (Acids, Alkalis, Chlorides)',
  'Gas Moisture Content & Acid Dew Point',
  'Required Clean-Air Emission Target (mg/Nm³)',
  'Bag Cleaning Method & Compressed Air Pressure',
  'Can Velocity & Bag-to-Bag Clearance'
];

const FilterBagsCagesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page" style={{ background: 'var(--bg-primary, #070b14)', paddingBottom: '80px', color: '#fff' }}>
      
      {/* Hero Section */}
      <section style={{ 
        background: 'radial-gradient(circle at 75% 25%, rgba(14, 165, 233, 0.12) 0%, transparent 60%), #0b1120',
        padding: '120px 0 70px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 540px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '6px 16px',
                borderRadius: '999px',
                color: '#38bdf8',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '18px'
              }}>
                <Sparkles size={14} /> REPLACEMENT MEDIA & STRUCTURAL HARDWARE
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: '1.15',
                marginBottom: '20px'
              }}>
                Filter Bags <span style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>&amp; Cages</span>
              </h1>

              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.7',
                color: '#94a3b8',
                marginBottom: '32px'
              }}>
                Replacement filter bags and support cages selected according to application, temperature, dust characteristics, and operating conditions. Custom engineered for dependable particulate capture and maximum service life.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span>Request Bag / Cage Quote</span>
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20need%20a%20quotation%20for%20Filter%20Bags%20and%20Cages."
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-lg"
                  style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
                >
                  <span>WhatsApp Specifications</span>
                </a>
              </div>
            </div>

            <div style={{ flex: '1 1 440px' }}>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
              }}>
                <img 
                  src={bagImg} 
                  alt="Industrial Filter Bags and Cages" 
                  style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(15, 23, 42, 0.92)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>Precision Fit</div>
                    <div style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700' }}>Snap-Ring / Collar Top</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.78rem' }}>MOC</div>
                    <div style={{ color: '#38bdf8', fontSize: '0.95rem', fontWeight: '700' }}>MS / SS 304 / SS 316</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Selection Criteria Banner */}
      <section style={{ padding: '60px 0', background: '#070b14', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '36px 32px'
          }}>
            <div style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
              PROPER SIZING &amp; MEDIA SELECTION
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              Filter Bag Selection Depends On:
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '24px' }}>
              Selecting the appropriate filter media is vital for dust capture efficiency, bag life, and compressed air savings. We evaluate your complete process environment before recommending media:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '14px'
            }}>
              {selectionCriteria.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} style={{ color: '#38bdf8', flexShrink: 0 }} />
                  <span style={{ color: '#cbd5e1', fontSize: '0.92rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1. Filter Bags Section */}
      <section style={{ padding: '80px 0', background: '#0b1120' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
            <div style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              FILTRATION MEDIA
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              Application-Specific <span style={{ color: '#38bdf8' }}>Filter Bags</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.65' }}>
              We supply high-performance filter bags fabricated in diverse media types, surface finishes, and snap-ring configurations to match your exact dust collector:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {filterMediaList.map((media, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '18px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, border-color 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    color: '#38bdf8',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    textTransform: 'uppercase'
                  }}>
                    {media.badge}
                  </span>
                  <Layers size={18} style={{ color: '#38bdf8' }} />
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
                  {media.name}
                </h3>

                <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '20px', flex: 1 }}>
                  {media.desc}
                </p>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {media.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} style={{ color: '#38bdf8', flexShrink: 0 }} />
                      <span style={{ color: '#cbd5e1', fontSize: '0.84rem' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Filter Cages Section */}
      <section style={{ padding: '80px 0', background: '#070b14', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
            <div style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              STRUCTURAL INTERNAL SUPPORT
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              Support <span style={{ color: '#38bdf8' }}>Filter Cages</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Support cages maintain bag shape during continuous suction and withstand supersonic pulse jet cleaning without flexing or puncturing the fabric. Supplied in tailored specifications:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            {filterCagesFeatures.map((cage, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '0.85rem'
                  }}>
                    {idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.18rem', fontWeight: '700', color: '#ffffff', margin: 0 }}>
                    {cage.title}
                  </h3>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                  {cage.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Drawing & Sample CTA Box */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.12) 0%, rgba(37, 99, 235, 0.08) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            borderRadius: '20px',
            padding: '36px 32px',
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto'
          }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
              Need Replacement Cages or Bags for an Existing Baghouse?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '680px', margin: '0 auto 24px' }}>
              Send us your bag dimension, tube sheet hole diameter, cage length, or physical sample. We manufacture drop-in replacements compatible with all OEM dust collectors.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>Send Sizing / RFQ Details</span>
                <ArrowRight size={16} />
              </Link>
              <a 
                href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20have%20a%20drawing/sample%20for%20filter%20bags%20and%20cages."
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline" 
                style={{ borderColor: '#22c55e', color: '#4ade80' }}
              >
                <span>WhatsApp Drawing / Photos</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FilterBagsCagesPage;
