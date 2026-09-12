import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  Wind, 
  Settings, 
  HardHat,
  ShieldCheck,
  RefreshCw,
  Layers,
  Wrench,
  Package,
  PhoneCall,
  Sparkles,
  Flame,
  Pill,
  Mountain,
  TreePine,
  Hammer,
  Utensils,
  Cpu,
  Droplets
} from 'lucide-react';
import heroImg from '../assets/factory_bagfilter_plant_hd.jpg';
import baghouseImg from '../assets/hero_baghouse.jpg';

const specs = [
  { label: 'Material of Construction (MOC)', value: 'Heavy Gauge IS 2062 Mild Steel (MS), SS 304, SS 316, Corten Steel' },
  { label: 'Filter Media Options', value: 'Polyester Needlefelt, Nomex/Aramid (240°C), PPS/Ryton (190°C), PTFE Membrane, Polypropylene, Fiberglass' },
  { label: 'Airflow Capacity', value: 'Custom Engineered from 1,000 CFM to 1,50,000+ CFM' },
  { label: 'Pulse Jet Cleaning Modes', value: 'Online Continuous Mode or Offline Compartmentalized Mode' },
  { label: 'Air Distribution', value: 'Engineered Inlet Baffles with Controlled Downward Can Velocity' },
  { label: 'Access Mechanism', value: 'Top-Access Snap-In/Snap-Out from Clean Air Plenum via Roof Gasketed Hatches' },
  { label: 'Cleaning System', value: 'High-speed pilot diaphragm solenoid valves, pulse header, and sequential timer' },
  { label: 'Operating Temperature', value: 'Ambient up to 260°C continuous' },
  { label: 'Guaranteed Emission Norm', value: '< 10 mg/Nm³ (CPCB & State Pollution Control Board certified)' }
];

const cleaningModes = [
  {
    mode: 'Online Pulse Cleaning Mode',
    badge: 'Continuous 24/7 Operation',
    highlight: 'No Compartment Isolation Required',
    desc: 'The filter bags are pulsed row-by-row with supersonic compressed air bursts while dust-laden airflow continues moving through the baghouse. Perfect for standard continuous industrial processes where production cannot be paused.',
    features: [
      'Row-by-row automatic sequential pulsing without plant shutdown',
      'Lower initial capital cost — no isolation poppet dampers needed',
      'Constant airflow volume and static pressure regulation',
      'Controlled by micro-processor sequential timer or DP switch'
    ]
  },
  {
    mode: 'Offline Compartmentalized Cleaning Mode',
    badge: 'Deep Zero-Velocity Cleaning',
    highlight: 'Isolated Chambers with Maintenance Access',
    desc: 'The baghouse is divided into multiple independent airtight compartments fitted with pneumatic poppet dampers. When a compartment needs cleaning, its damper closes, stopping airflow so that pulse cleaning occurs in completely stagnant air.',
    features: [
      'Eliminates dust re-entrainment — dislodged cake drops immediately into hopper',
      'Achieves up to 35% higher cleaning efficiency for light or sticky dusts',
      'Enables online maintenance and bag inspection inside one isolated chamber while the rest of the plant operates at full capacity',
      'Extends overall filter bag service life and reduces compressed air usage'
    ]
  }
];

const technicalHighlights = [
  {
    title: 'Engineered Gas & Dust Distribution',
    subtitle: 'Aerodynamic Downward Can Velocity',
    icon: Wind,
    desc: 'Our specialized inlet flow diffusers and baffle plates ensure uniform airflow across all filter rows, creating a true negative downward can velocity. This design prevents fine dust particles from being re-entrained back onto neighboring bags, significantly minimizing fabric abrasion and maximizing overall filter efficiency.'
  },
  {
    title: 'Filter Bags & Precision Support Cages',
    subtitle: 'Dust-Tight Seal & Structural Integrity',
    icon: Layers,
    desc: 'Bags are fabricated from high-grade woven and needlefelt fabrics with stainless steel spring snap-rings for a certified dust-tight seal on laser-cut tube sheets. Support cages feature CNC automated longitudinal wire welding (MS / SS) that prevents fabric pinching, allows optimal flexing during pulsing, and ensures rapid cake release.'
  },
  {
    title: 'Top-Access Clean-Air Maintenance',
    subtitle: 'Toolless Snap-In / Snap-Out Replacement',
    icon: ShieldCheck,
    desc: 'All bag and cage replacement is conducted cleanly and safely from the clean air plenum on the roof through weather-tight gasketed access doors. Maintenance technicians are never exposed to toxic, abrasive, or high-temperature process dust inside the housing.'
  }
];

const coreIndustries = [
  { name: 'Foundry & Furnaces', icon: Flame, desc: 'Fume extraction, induction furnace melting, sand plant & pouring emissions.' },
  { name: 'Pharmaceutical & Cleanrooms', icon: Pill, desc: 'Sterile high-containment dust collection with certified particulate capture.' },
  { name: 'Cement, Lime & Kiln Exhaust', icon: Mountain, desc: 'High-temperature kiln flue gas, raw mill, ball mill & bulk packing transfer.' },
  { name: 'Woodworking & Timber', icon: TreePine, desc: 'High-volume sawdust, fine wood sanding dust, and shavings collection.' },
  { name: 'Metalworking & Grinding', icon: Hammer, desc: 'Laser cutting, CNC plasma cutting, shot blasting, and grinding fumes.' },
  { name: 'Food Processing & Grain Milling', icon: Utensils, desc: 'Sanitary grade filtration for flour mills, rice mills, starch & spice powder.' },
  { name: 'Mining, Minerals & Ferro Alloys', icon: Factory, desc: 'Heavy-duty extraction from primary crushers, vibrating screens & conveyors.' },
  { name: 'Chemical & Fertilizer Plants', icon: Droplets, desc: 'Acid and moisture-resistant dust collection handling aggressive chemistry.' }
];

const supportServices = [
  {
    title: 'Preventive Maintenance Programs',
    icon: Wrench,
    desc: 'Scheduled plant inspection and health check programs ensuring your dust collection system consistently operates at peak efficiency with zero unplanned downtime.'
  },
  {
    title: 'On-Site Installation & Commissioning',
    icon: HardHat,
    desc: 'Expert mechanical erection, ductwork installation, fan dynamic balancing, PLC timer calibration, and emission performance verification right from day one.'
  },
  {
    title: 'Ready Spare Parts Supply',
    icon: Package,
    desc: 'Immediate pan-India dispatch of OEM-spec filter bags, cages, venturis, solenoid pulse valves, sequential timers, and rotary airlocks from ready inventory.'
  },
  {
    title: 'System Upgrades & Retrofitting',
    icon: RefreshCw,
    desc: 'Modernize older, failing, or undersized dust collectors with modern pulse-jet technology, pleated bags, and VFD controls for compliance and reduced operating costs.'
  }
];

const PulseJetFilterPage = () => {
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
                <Sparkles size={14} /> HIGH-EFFICIENCY CONTINUOUS DUST COLLECTION
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: '1.15',
                marginBottom: '20px'
              }}>
                Pulse Jet <span style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Bag Filters</span>
              </h1>

              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.7',
                color: '#94a3b8',
                marginBottom: '32px'
              }}>
                VS Filtech designs, manufactures, erects, and commissions heavy-duty industrial Pulse Jet Bag Filters engineered for continuous 24/7 dust extraction. Built with aerodynamic gas distribution, top-access clean-air plenum, and guaranteed emission levels below &lt;10 mg/Nm³.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span>Request Engineering Quotation</span>
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20am%20interested%20in%20your%20Pulse%20Jet%20Bag%20Filters."
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-lg"
                  style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
                >
                  <span>WhatsApp Desk</span>
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
                  src={heroImg} 
                  alt="Industrial Pulse Jet Bag Filter Plant" 
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>CPCB Compliant</div>
                    <div style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700' }}>Emissions: &lt; 10 mg/Nm³</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.78rem' }}>Efficiency</div>
                    <div style={{ color: '#38bdf8', fontSize: '1.1rem', fontWeight: '800' }}>99.9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Pulse-Jet Cleaning Operating Modes: Online vs Offline */}
      <section style={{ padding: '80px 0', background: '#070b14' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
            <div style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              CLEANING TECHNOLOGY
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              Pulse-Jet Cleaning: <span style={{ color: '#38bdf8' }}>Online vs Offline Modes</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Depending on your plant's dust loading, particle adhesion, and operational schedule, VS Filtech designs bag filters in both Online and Offline pulse configurations:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {cleaningModes.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.3s ease, transform 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
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

                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                  {item.mode}
                </h3>

                <div style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: '600', marginBottom: '16px' }}>
                  {item.highlight}
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '24px', flex: 1 }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px' }}>
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.5' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Gas & Dust Distribution + Clean Air Top Access Architecture */}
      <section style={{ padding: '80px 0', background: '#0b1120', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
            <div style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              PROPRIETARY ENGINEERING
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              Gas Distribution & <span style={{ color: '#38bdf8' }}>Top-Access Media</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Engineered flow dynamics and ergonomic maintenance access ensure zero re-entrainment and seamless bag servicing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {technicalHighlights.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(15, 23, 42, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '18px',
                    padding: '32px 26px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'rgba(14, 165, 233, 0.12)',
                    border: '1px solid rgba(14, 165, 233, 0.25)',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <Icon size={24} />
                  </div>

                  <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                    {tech.subtitle}
                  </span>

                  <h3 style={{ fontSize: '1.28rem', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
                    {tech.title}
                  </h3>

                  <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
                    {tech.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Core Industries Served Grid */}
      <section style={{ padding: '80px 0', background: '#070b14' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
            <div style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              INDUSTRIES SERVED
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              Trusted Across India's <span style={{ color: '#38bdf8' }}>Core Industries</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Our pulse jet dust collectors are custom engineered to handle unique temperature profiles, corrosive gas streams, and particulate abrasiveness across primary sectors:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {coreIndustries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '24px',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <Icon size={22} />
                  </div>

                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                    {ind.name}
                  </h4>

                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.55', margin: 0 }}>
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Comprehensive Lifecycle Support Services */}
      <section style={{ padding: '80px 0', background: '#0b1120', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
            <div style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              OUR SERVICES
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              Comprehensive <span style={{ color: '#38bdf8' }}>Support & Maintenance</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Our commitment does not end with installation. We provide complete after-sales support to keep your baghouse running at peak efficiency with zero downtime.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {supportServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(15, 23, 42, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '16px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(14, 165, 233, 0.1)',
                    border: '1px solid rgba(14, 165, 233, 0.25)',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}>
                    <Icon size={22} />
                  </div>

                  <h4 style={{ fontSize: '1.18rem', fontWeight: '700', color: '#ffffff', marginBottom: '10px' }}>
                    {srv.title}
                  </h4>

                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, flex: 1 }}>
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Dedicated Support Callout Box */}
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
              Need Support for Your Existing Dust Collection System?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '680px', margin: '0 auto 24px' }}>
              Our dedicated engineering service desk is ready to assist with scheduled maintenance, emergency spare parts dispatch, and system upgrade audits across India.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>Get a Service Quote</span>
                <ArrowRight size={16} />
              </Link>
              <a 
                href="tel:+911234567890" 
                className="btn btn-outline" 
                style={{ borderColor: '#38bdf8', color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <PhoneCall size={16} />
                <span>Call +91 1234567890</span>
              </a>
              <a 
                href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20need%20service%20support%20for%20my%20bag%20filter%20system."
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline" 
                style={{ borderColor: '#22c55e', color: '#4ade80' }}
              >
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technical Specifications Table */}
      <section style={{ padding: '80px 0', background: '#070b14' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
              Engineering Specifications
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
              Standard technical parameters for VS Filtech Pulse Jet Baghouse installations:
            </p>
          </div>

          <div style={{
            maxWidth: '880px',
            margin: '0 auto',
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            overflow: 'hidden'
          }}>
            {specs.map((item, idx) => (
              <div 
                key={idx} 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  padding: '16px 24px',
                  borderBottom: idx !== specs.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                  background: idx % 2 === 0 ? 'rgba(2, 6, 23, 0.4)' : 'transparent'
                }}
              >
                <div style={{ flex: '1 1 260px', fontWeight: '700', color: '#38bdf8', fontSize: '0.92rem' }}>
                  {item.label}
                </div>
                <div style={{ flex: '2 1 360px', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.5' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default PulseJetFilterPage;
