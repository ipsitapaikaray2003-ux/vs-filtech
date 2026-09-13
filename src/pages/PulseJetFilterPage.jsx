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
  Droplets,
  FileText,
  Phone,
  MessageCircle
} from 'lucide-react';
import heroImg from '../assets/factory_bagfilter_plant_hd.jpg';
import baghouseImg from '../assets/hero_baghouse.jpg';
import './ProductDetails.css';

const availableConfigurations = [
  {
    title: 'Online Pulse Jet Bag Filter',
    desc: 'Continuous row-by-row compressed air pulse cleaning while dust-laden process gas continuously passes through the filter.'
  },
  {
    title: 'Offline Pulse Jet Bag Filter',
    desc: 'Compartmentalized design where individual chambers are isolated in zero-velocity air during cleaning to eliminate dust re-entrainment.'
  },
  {
    title: 'Single / Multiple Module Arrangements',
    desc: 'Scalable modular structures customized for localized individual machines up to large multi-module centralized plants.'
  },
  {
    title: 'Top-Entry Bag Removal Arrangements',
    desc: 'Clean-air plenum snap-ring bag removal via weather-tight roof doors without exposing technicians to process dust.'
  },
  {
    title: 'Side / Bottom Inlet Arrangements',
    desc: 'Engineered baffle plate diffusers for downward can velocity, tailored according to site space and duct routing.'
  },
  {
    title: 'Custom Outlet Configurations',
    desc: 'Duct plenum geometries optimized for minimal static pressure drop and direct mating to ID fans or exhaust stacks.'
  },
  {
    title: 'Custom Hopper Arrangements',
    desc: 'Pyramidal, trough, or multi-outlet hoppers equipped with rotary airlocks, screw conveyors, vibrators, or manual slide gates.'
  }
];

const designParameters = [
  { label: 'Gas Flow Rate', value: 'As per application & process CFM calculations' },
  { label: 'Operating Temperature', value: 'As per process conditions (ambient up to high-temperature gas streams)' },
  { label: 'Filter Media', value: 'Application-specific: Polyester, Polypropylene, Acrylic, PPS, Aramid, PTFE, Fiberglass' },
  { label: 'Bag Diameter & Length', value: 'As per engineering design (standard Ø 120mm - 160mm, lengths up to 6m+)' },
  { label: 'Number of Bags', value: 'Calculated according to required filtration area and air-to-cloth ratio' },
  { label: 'Number of Modules', value: 'Configured according to total air volume and online/offline arrangement' },
  { label: 'Cleaning System', value: 'Compressed-air pulse jet with solenoid valves & sequential micro-controller' },
  { label: 'Dust Discharge Arrangement', value: 'Rotary airlock / screw conveyor / double flap valve / slide gate as applicable' },
  { label: 'Material of Construction (MOC)', value: 'Heavy Gauge IS 2062 Mild Steel (MS) / SS 304 / SS 316 / Corten Steel' },
  { label: 'Access Mechanism', value: 'Top-access clean-air plenum with weather-tight gasketed roof doors' }
];

const cleaningModes = [
  {
    mode: 'Online Mode',
    badge: 'Continuous Cleaning',
    highlight: 'Continuous cleaning during operation; no need for compartment isolation.',
    desc: 'The filter bags are pulsed row-by-row with supersonic compressed air bursts while dust-laden airflow continues moving through the baghouse. Continuous cleaning during operation ensures constant process draft without needing compartment isolation.',
    features: [
      'Continuous cleaning during operation; no need for compartment isolation',
      'Row-by-row automatic sequential pulsing without plant shutdown',
      'Lower initial capital cost & compact footprint',
      'Controlled by micro-processor sequential pulse timer or differential pressure (DP)'
    ]
  },
  {
    mode: 'Offline Mode',
    badge: 'Compartmentalized Isolation',
    highlight: 'Compartmentalized design with isolation dampers—ideal for intensive cleaning or maintenance while the plant remains in operation.',
    desc: 'Compartmentalized design with isolation dampers—ideal for intensive cleaning or maintenance while the plant remains in operation. Cleaning occurs in zero-velocity stagnant air, ensuring maximum dust release without re-entrainment.',
    features: [
      'Compartmentalized design with pneumatic isolation dampers',
      'Ideal for intensive cleaning or maintenance while the plant remains in operation',
      'Dislodged dust drops immediately into the hopper in zero-velocity air',
      'Up to 35% higher cleaning efficiency for fine, light, or sticky dust particles'
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
  { name: 'Foundry', icon: Flame, desc: 'Induction melting furnaces, pouring emissions, shakeout & sand reclamation.' },
  { name: 'Pharmaceutical', icon: Pill, desc: 'Fluid bed dryers (FBD), tablet coating, micronizing & sterile cleanrooms.' },
  { name: 'Cement / Kiln', icon: Mountain, desc: 'Kiln exhaust, raw mill, clinker coolers, ball mills & bulk silo venting.' },
  { name: 'Woodworking', icon: TreePine, desc: 'High-volume sawdust, fine wood sanding dust, and planar shavings collection.' },
  { name: 'Metalworking', icon: Hammer, desc: 'Laser cutting, CNC plasma cutting, shot blasting, welding & grinding fumes.' },
  { name: 'Food Processing', icon: Utensils, desc: 'Flour mills, rice husk boilers, grain elevators, starch & spice grinding.' },
  { name: 'Manufacturing', icon: Factory, desc: 'Assembly plants, powder coating booths, packaging & secondary processing.' },
  { name: 'Chemical & Fertilizer', icon: Droplets, desc: 'Pigment manufacturing, synthetic resins, acid & bulk fertilizer containment.' }
];

const supportServices = [
  {
    title: 'Preventive Maintenance',
    icon: Wrench,
    desc: 'Scheduled maintenance programs to ensure your dust collection systems operate at peak efficiency and minimize downtime.'
  },
  {
    title: 'Installation & Commissioning',
    icon: Settings,
    desc: 'Expert on-site installation, system commissioning, and performance testing to ensure your equipment is set up right from day one.'
  },
  {
    title: 'Spare Parts Supply',
    icon: Package,
    desc: 'Genuine spare parts readily available—filter bags, cages, solenoid valves, timers, and all critical components.'
  },
  {
    title: 'System Upgrades',
    icon: FileText,
    desc: 'Upgrade existing systems with latest technology for improved efficiency, compliance, and reduced operating costs.'
  }
];

const PulseJetFilterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page" style={{ background: '#ffffff', paddingBottom: '80px', color: '#0f172a' }}>
      
      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(240, 247, 255, 0.96) 100%), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0 70px',
        borderBottom: '1px solid #e2e8f0'
      }}>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 540px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(2, 132, 199, 0.1)',
                border: '1px solid rgba(2, 132, 199, 0.3)',
                padding: '6px 16px',
                borderRadius: '999px',
                color: '#0284c7',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '18px'
              }}>
                <Sparkles size={14} style={{ color: '#0284c7' }} /> HIGH-EFFICIENCY CONTINUOUS DUST COLLECTION
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: '800',
                color: '#0f172a',
                lineHeight: '1.15',
                marginBottom: '20px'
              }}>
                Pulse Jet <span style={{ color: '#0284c7' }}>Bag Filters</span>
              </h1>

              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.7',
                color: '#475569',
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
                  className="btn btn-lg"
                  style={{ border: '1px solid #10b981', color: '#059669', background: '#ffffff', borderRadius: '10px' }}
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
                border: '1px solid #e2e8f0',
                boxShadow: '0 15px 35px rgba(2, 132, 199, 0.12)'
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
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #bae6fd',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}>
                  <div>
                    <div style={{ color: '#0284c7', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>CPCB Compliant</div>
                    <div style={{ color: '#0f172a', fontSize: '1rem', fontWeight: '700' }}>Emissions: &lt; 10 mg/Nm³</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#64748b', fontSize: '0.78rem' }}>Efficiency</div>
                    <div style={{ color: '#1d4ed8', fontSize: '1.1rem', fontWeight: '800' }}>99.9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Pulse-Jet Cleaning Operating Modes: Online vs Offline */}
      <section className="light-graphic-dots" style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
            <div style={{ color: '#0284c7', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              CLEANING TECHNOLOGY
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
              Pulse-Jet Cleaning: <span style={{ color: '#1d4ed8' }}>Online vs Offline Modes</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Depending on your plant's dust loading, particle adhesion, and operational schedule, VS Filtech designs bag filters in both Online and Offline pulse configurations:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {cleaningModes.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  borderTop: '4px solid #1d4ed8'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0284c7';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(2, 132, 199, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.borderTop = '4px solid #1d4ed8';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{
                    background: 'rgba(2, 132, 199, 0.1)',
                    border: '1px solid rgba(2, 132, 199, 0.3)',
                    color: '#0284c7',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase'
                  }}>
                    {item.badge}
                  </span>
                  <Wind size={20} style={{ color: '#0284c7' }} />
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                  {item.mode}
                </h3>

                <div style={{ color: '#1d4ed8', fontSize: '0.9rem', fontWeight: '600', marginBottom: '16px' }}>
                  {item.highlight}
                </div>

                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '24px', flex: 1 }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} style={{ color: '#0284c7', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ color: '#334155', fontSize: '0.88rem', lineHeight: '1.5' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Available Configurations */}
      <section className="light-graphic-blueprint" style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
            <div style={{ color: '#0284c7', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              CUSTOM BUILT FOR PROCESS NEEDS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
              Available <span style={{ color: '#1d4ed8' }}>Configurations</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Every plant has specific physical layout constraints, dust loadings, and operational requirements. We engineer our Pulse Jet Bag Filters in tailored configurations:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {availableConfigurations.map((cfg, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0284c7';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(2, 132, 199, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: '#f0f7ff',
                    border: '1px solid #bae6fd',
                    color: '#1d4ed8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '0.85rem'
                  }}>
                    {idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                    {cfg.title}
                  </h3>
                </div>
                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                  {cfg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Gas & Dust Distribution + Filter Bags & Cages Architecture */}
      <section className="light-graphic-dots" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 40px' }}>
            <div style={{ color: '#0284c7', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              PROPRIETARY ENGINEERING
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#0f172a', marginBottom: '18px' }}>
              GAS &amp; DUST <span style={{ color: '#1d4ed8' }}>DISTRIBUTION</span>
            </h2>
            
            {/* Hallmark Feature Callout Box */}
            <div style={{
              background: '#ffffff',
              border: '1.5px solid #bae6fd',
              borderRadius: '16px',
              padding: '24px 30px',
              boxShadow: '0 4px 20px rgba(2, 132, 199, 0.08)',
              textAlign: 'left'
            }}>
              <p style={{
                color: '#1e293b',
                fontSize: '1.1rem',
                lineHeight: '1.75',
                margin: 0,
                fontWeight: '500'
              }}>
                A hallmark of VS Filtech engineering, our <strong style={{ color: '#0284c7' }}>distribution system</strong> ensures a uniform flow across the filter bags, creating a true negative can velocity. This prevents dust re-entrainment, reduces wear, and maximizes filter efficiency.
              </p>
            </div>
          </div>

          {/* Cards for Filter Bags & Cages + Top-Access Replacement */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
            {/* Card 1: Filter Bags & Cages */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              borderTop: '4px solid #0284c7'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: '#f0f7ff',
                  border: '1px solid #bae6fd',
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Layers size={22} />
                </div>
                <div>
                  <span style={{ color: '#0284c7', fontSize: '0.76rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    MEDIA &amp; SUPPORT CAGES
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                    Filter Bags &amp; Cages
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7', marginTop: '7px', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: '#334155', fontSize: '0.94rem', lineHeight: '1.6' }}>
                    <strong style={{ color: '#0f172a' }}>Bags:</strong> High-quality fabrics with stainless steel snap rings for a dust-tight seal and easy installation.
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7', marginTop: '7px', flexShrink: 0 }} />
                  <p style={{ margin: 0, color: '#334155', fontSize: '0.94rem', lineHeight: '1.6' }}>
                    <strong style={{ color: '#0f172a' }}>Cages:</strong> Precision-welded mild steel or stainless steel frames that prevent abrasion, allow proper flexing, and ensure smooth dust release during cleaning.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Top-Access Snap-In/Snap-Out Replacement */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              borderTop: '4px solid #10b981'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <span style={{ color: '#059669', fontSize: '0.76rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    CLEAN-AIR PLENUM SERVICING
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                    Top-Access Maintenance
                  </h3>
                </div>
              </div>

              <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
                Top-access, snap-in/snap-out bag replacement from the clean air side through roof-mounted, gasketed doors. Designed for safe, quick maintenance without production losses.
              </p>

              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '12px 16px',
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                <span style={{ fontSize: '0.86rem', color: '#475569', fontWeight: '500' }}>
                  Zero technician exposure to hazardous interior hopper dust.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Industries Served Grid (Matches Reference Layout) */}
      <section className="light-graphic-blueprint" style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 45px' }}>
            <div style={{ color: '#ea580c', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              INDUSTRIES SERVED
            </div>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3rem)', fontWeight: '800', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Trusted across India’s core industries.
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Our pulse jet dust collectors are custom engineered to handle unique temperature profiles, corrosive gas streams, and particulate abrasiveness across primary sectors:
            </p>
          </div>

          <div className="core-industries-grid">
            {coreIndustries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <Link 
                  to="/industries"
                  key={idx}
                  className="core-industry-card"
                >
                  <div className="core-industry-icon-wrap">
                    <Icon size={26} strokeWidth={2.2} />
                  </div>

                  <h3 className="core-industry-title">
                    {ind.name}
                  </h3>

                  <p className="core-industry-desc">
                    {ind.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR SERVICES - Comprehensive Support */}
      <section className="comprehensive-support-section" id="services-support">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="support-eyebrow">
              <span className="support-eyebrow-dot"></span> OUR SERVICES
            </div>
            <h2 className="support-main-title">
              Comprehensive Support
            </h2>
            <p className="support-main-subtitle">
              Our commitment doesn't end with installation. We provide complete after-sales support to keep your systems running efficiently.
            </p>
          </div>

          <div className="support-cards-grid">
            {supportServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div key={idx} className="support-feature-card">
                  <div className="support-icon-box">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <div className="support-content-col">
                    <h4 className="support-feature-title">{srv.title}</h4>
                    <p className="support-feature-desc">{srv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dedicated Support Callout Box */}
          <div className="support-callout-card">
            <h3 className="support-callout-title">
              Need support for your existing system?
            </h3>
            <p className="support-callout-desc">
              Our service team is ready to help with maintenance, spares, and upgrades.
            </p>
            <div className="support-callout-buttons">
              <Link to="/contact" className="btn-quote-orange">
                <span>Get a Quote</span>
                <ArrowRight size={17} />
              </Link>
              <a href="tel:+911234567890" className="btn-call-outline">
                <Phone size={17} />
                <span>Call Now</span>
              </a>
              <a 
                href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20need%20support%20for%20my%20dust%20collection%20system." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp-peach"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Design Parameters Matrix */}
      <section className="light-graphic-blueprint" style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
            <div style={{ color: '#0284c7', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              TECHNICAL MATRIX
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
              Design Parameters Matrix
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem' }}>
              Standard design baseline parameters engineered for custom industrial applications:
            </p>
          </div>

          <div style={{
            maxWidth: '880px',
            margin: '0 auto',
            background: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
          }}>
            {designParameters.map((item, idx) => (
              <div 
                key={idx} 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  padding: '16px 24px',
                  borderBottom: idx !== designParameters.length - 1 ? '1px solid #e2e8f0' : 'none',
                  background: idx % 2 === 0 ? '#f8fafc' : '#ffffff'
                }}
              >
                <div style={{ flex: '1 1 260px', fontWeight: '700', color: '#1d4ed8', fontSize: '0.92rem' }}>
                  {item.label}
                </div>
                <div style={{ flex: '2 1 360px', color: '#334155', fontSize: '0.92rem', lineHeight: '1.5' }}>
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
