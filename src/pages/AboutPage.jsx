import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { 
  Factory, 
  ShieldCheck, 
  Settings, 
  Award, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  HardHat, 
  Target, 
  CheckCircle2, 
  Users, 
  Cpu, 
  HelpCircle, 
  Wrench, 
  Compass, 
  PhoneCall, 
  FileCheck2,
  Wind,
  Flame,
  Pill,
  Mountain,
  TreePine,
  Hammer,
  Utensils,
  Droplets,
  Zap,
  Activity,
  ChevronRight
} from 'lucide-react';
import './AboutPage.css';

import plantImg from '../assets/factory_bagfilter_plant_hd.jpg';
import baghouseImg from '../assets/hero_baghouse.jpg';
import ductingImg from '../assets/indoor_ducting.jpg';
import pleatedImg from '../assets/pleated_filter_bag.jpeg';
import filterBagImg from '../assets/filter_bag_hd.jpg';

// 5 Genuine High-Resolution Industrial Photography Assets
import industryCementImg from '../assets/industry_cement.jpg';
import industryPowerImg from '../assets/industry_power.jpg';
import industrySteelImg from '../assets/industry_steel.jpg';
import industryMetalsImg from '../assets/industry_metals.jpg';
import industryCarbonBlackImg from '../assets/industry_carbon_black.jpg';

import CountUpStat from '../components/CountUpStat';

// Corporate Verified Metrics
const executiveStats = [
  { end: 15, suffix: '+', decimals: 0, label: 'Years Engineering Excellence', desc: 'Continuous manufacturing track record across India' },
  { end: 100, suffix: '%', decimals: 0, label: 'Customized To Client Process', desc: 'Engineered for specific CFM, dust type & temperature' },
  { end: 99.9, suffix: '%', decimals: 1, label: 'Particulate Capture Efficiency', desc: 'Meeting statutory CPCB norms (<10 mg/Nm³)' },
  { end: 24, suffix: '/7', decimals: 0, label: 'On-Site & Technical Support', desc: 'Rapid response engineering and pan-India spares' }
];

// 4 Core Mission Tenets
const missionTenets = [
  {
    title: 'Safety First',
    icon: HardHat,
    accent: '#38bdf8',
    desc: 'The principles it encompasses form the foundation of our business. Ensuring safe, emission-compliant operational environments for plant personnel while eliminating combustible and hazardous industrial dust risks.'
  },
  {
    title: 'Uncompromising Integrity',
    icon: Award,
    accent: '#818cf8',
    desc: 'Honest, transparent engineering consultations, fair component pricing, and ethical business partnerships. We suggest only what is technically optimal for your plant.'
  },
  {
    title: 'Quality, Without Question',
    icon: ShieldCheck,
    accent: '#34d399',
    desc: 'Manufacturing to the highest industrial standards. Laser-cut tube sheets, automated cage welding, certified filter media, and zero-leakage structural casings.'
  },
  {
    title: 'Dedication to Employees & Clients',
    icon: Users,
    accent: '#fbbf24',
    desc: 'Focused on practical design, reliable operation, maintainability, and long-term performance. Total customer satisfaction is the key to our enduring growth.'
  }
];

// Why Choose Us Pillars
const whyChooseUsCards = [
  {
    icon: Target,
    title: 'Value for Money with Maximum Quality',
    desc: 'Our precision fabrics and filter articles help clients achieve maximum filtration efficiency in minimum turnaround time, lowering total cost of ownership.'
  },
  {
    icon: Compass,
    title: 'Total-Solution & Consultancy Expertise',
    desc: 'Based on our deep technical knowledge and field experience, we specialize in providing turnkey consultancy, sizing, and total solutions for challenging filtration problems.'
  },
  {
    icon: Settings,
    title: '100% Customized Bag & System Sizing',
    desc: 'We custom engineer bags, cages, duct velocities, and dust collector casings according to your exact dust characteristics, operating temperature, and airflow.'
  },
  {
    icon: Wrench,
    title: 'Comprehensive Troubleshooting & Support',
    desc: 'Our experienced engineering team assists with on-site diagnostics, differential pressure reduction, reverse engineering, and continuous operational support.'
  }
];

// Technical Superiority: Online vs Offline Pulse Cleaning
const cleaningTechnology = [
  {
    title: 'Online Pulse Cleaning Mode',
    tag: 'Live 24/7 Production',
    accent: '#38bdf8',
    desc: 'Continuous row-by-row high-velocity compressed air purging during active plant operation without isolating compartments.',
    points: [
      'No compartment isolation dampers required — lower initial investment',
      'Continuous uninterrupted airflow and constant process draft',
      'Microprocessor sequential timer and differential pressure regulation',
      'Ideal for standard continuous processing plants'
    ]
  },
  {
    title: 'Offline Compartmentalized Cleaning Mode',
    tag: 'Deep Zero-Velocity Cleaning',
    accent: '#818cf8',
    desc: 'Multi-chamber baghouse architecture fitted with automated pneumatic poppet isolation dampers for deep cake removal.',
    points: [
      'Chamber isolated in stagnant zero-velocity air during pulse release',
      'Zero dust re-entrainment — dislodged cake drops directly into hopper',
      'Up to 35% higher cleaning efficiency for light or sticky dusts',
      'Enables online maintenance and bag inspection without plant shutdown'
    ]
  }
];

// All 14 Products Brief Directory
const completeProductsBrief = [
  { name: 'Pulse Jet Bag Filters', tag: 'Turnkey OEM', desc: 'Continuous automated industrial dust collectors with high-pressure pulse jet cleaning and <10 mg/Nm³ emission guarantee.' },
  { name: 'Silo Filters', tag: 'Pneumatic Venting', desc: 'Top-mounted venting filters safely venting displaced air while capturing fine powders in silos and bins.' },
  { name: 'Cyclone Filters', tag: 'Pre-Separators', desc: 'Centrifugal pre-separators removing coarse and abrasive dust before the fabric baghouse to extend bag life.' },
  { name: 'ID Fans (Induced Draft)', tag: 'Air Handling', desc: 'Heavy-duty centrifugal fans engineered for high static pressures, continuous flue gas extraction, and dynamic balance.' },
  { name: 'Filter Bags', tag: 'Filtration Media', desc: 'Custom manufactured in woven and needlefelt media (Polyester, Nomex 240°C, PPS, PTFE Membrane, Polypropylene).' },
  { name: 'Cages with Venturi', tag: 'Structural Support', desc: 'Precision CNC multi-wire support cages with supersonic expansion venturi nozzles to prevent fabric pinch-points.' },
  { name: 'Solenoid Valves', tag: 'Pulse Cleaning', desc: 'High-speed pilot and integral diaphragm pulse valves delivering millisecond compressed air shockwaves.' },
  { name: 'RAL - Rotary Air Lock Valve', tag: 'Airtight Discharge', desc: 'Precision-machined continuous rotary airlocks maintaining airtight vacuum seals while discharging collected dust.' },
  { name: 'Screw Conveyors', tag: 'Mechanical Handling', desc: 'Heavy-duty enclosed auger dust conveyors transporting collected dust from multiple hoppers to central discharge.' },
  { name: 'Differential Pressure Switch', tag: 'Smart Control', desc: 'High-accuracy DP switches and transmitters initiating cleaning cycles on actual demand, saving compressed air.' },
  { name: 'Pressure Switch', tag: 'Safety Interlock', desc: 'Essential compressed air header pressure monitoring ensuring sufficient cleaning pressure before pulsing.' },
  { name: 'Level Sensor', tag: 'Spill Prevention', desc: 'Rotary paddle and RF capacitance level switches preventing catastrophic dust buildup in hopper cones.' },
  { name: 'Hopper Vibrator', tag: 'Anti-Bridging', desc: 'Pneumatic piston and electric vibrators eliminating material bridging, caking, and rat-holing in hoppers.' },
  { name: 'Explosion Vents', tag: 'ATEX Safety', desc: 'Certified rupture relief panels providing safe overpressure venting against combustible industrial dust deflagration.' }
];

// 5 Dedicated Core Industries with Genuine Photography (Thermax Benchmark)
const coreIndustries = [
  {
    name: 'Cement',
    headline: 'Kiln Exhaust & Silo Venting',
    desc: 'High-temp kiln flue gas baghouses, clinker cooler cleaning, and ATEX coal mill collectors.',
    image: industryCementImg,
    badge: 'HEAVY PROCESS',
    icon: Mountain
  },
  {
    name: 'Power',
    headline: 'Boilers & Fly Ash Handling',
    desc: 'Flue gas desulfurization (FGD), fly ash pneumatic filters, and stoker boiler emission systems.',
    image: industryPowerImg,
    badge: 'HIGH TEMPERATURE',
    icon: Flame
  },
  {
    name: 'Steel',
    headline: 'Furnaces & Rolling Mills',
    desc: 'EAF direct evacuation, canopy fume hoods, secondary LRF baghouses, and sinter collectors.',
    image: industrySteelImg,
    badge: 'METALLURGY',
    icon: Factory
  },
  {
    name: 'Metals',
    headline: 'Foundries & Smelters',
    desc: 'Induction furnace swing hoods, return sand reclamation, and non-ferrous smelter scrubbers.',
    image: industryMetalsImg,
    badge: 'SMELTING & CASTING',
    icon: Hammer
  },
  {
    name: 'Carbon Black',
    headline: 'Sub-Micron Recovery',
    desc: 'Sub-micron black recovery with conductive antistatic felts and microporous ePTFE membranes.',
    image: industryCarbonBlackImg,
    badge: 'SUB-MICRON RECOVERY',
    icon: Droplets
  }
];

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from('.premium-hero-animate', {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-premium-page">
      
      {/* ── 1. Executive Hero Header ── */}
      <section className="about-premium-hero">
        <div className="ambient-glow-orb ambient-orb-1" />
        <div className="ambient-glow-orb ambient-orb-2" />
        <div className="hud-grid-overlay" />

        <div className="container relative z-10">
          <div className="hero-content-wrapper">
            
            <div className="premium-hero-animate">
              <span className="executive-badge">
                <span className="pulse-dot" />
                <Sparkles size={14} />
                <span>ABOUT VS FILTECH & CONTROL PANELS SYSTEMS</span>
              </span>
            </div>

            <h1 className="premium-hero-animate executive-title">
              Engineering Industrial <br />
              <span className="luxury-gradient-text">Filtration Solutions.</span>
            </h1>

            <p className="premium-hero-animate executive-lead">
              <strong>VS Filtech & Control Panels Systems</strong> is one of India&apos;s premier design and manufacturers of industrial 
              Bag Filters, Dust Collectors, ID Fans, and precision filtration accessories. We deliver turnkey air pollution control systems 
              guaranteed to satisfy statutory emission limits (&lt;10 mg/Nm³) with maximum reliability.
            </p>

            <div className="premium-hero-animate executive-actions">
              <Link to="/contact" className="btn-luxury-primary">
                <PhoneCall size={18} />
                <span>Request Engineering Consultation</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/products" className="btn-luxury-secondary">
                <span>Explore Technical Catalog</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Executive Stat Cards Bar ── */}
      <section className="executive-stats-bar">
        <div className="container">
          <div className="stats-cards-grid">
            {executiveStats.map((stat, idx) => (
              <div key={idx} className="luxury-stat-card">
                <div className="stat-top-row">
                  <span className="stat-number">
                    <CountUpStat end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
                  </span>
                  <Activity size={18} className="stat-icon-spark" />
                </div>
                <div className="stat-title">{stat.label}</div>
                <div className="stat-subtext">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Interactive Corporate Showcase (Tabbed Navigation) ── */}
      <section className="about-interactive-showcase">
        <div className="container">
          
          <div className="showcase-nav-bar">
            <button 
              className={`showcase-nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <Factory size={16} />
              <span>Who We Are & Infrastructure</span>
            </button>
            <button 
              className={`showcase-nav-btn ${activeTab === 'philosophy' ? 'active' : ''}`}
              onClick={() => setActiveTab('philosophy')}
            >
              <Settings size={16} />
              <span>Engineering Philosophy</span>
            </button>
            <button 
              className={`showcase-nav-btn ${activeTab === 'consultancy' ? 'active' : ''}`}
              onClick={() => setActiveTab('consultancy')}
            >
              <Compass size={16} />
              <span>Consultancy & Sizing</span>
            </button>
            <button 
              className={`showcase-nav-btn ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              <ShieldCheck size={16} />
              <span>Our Mission (4 Tenets)</span>
            </button>
          </div>

          <div className="showcase-tab-content">
            
            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="tab-grid-split">
                <div className="tab-text-side">
                  <div className="luxury-eyebrow">PREMIER OEM IN INDIA</div>
                  <h2 className="tab-heading">
                    Design & Manufacturer of <br />
                    <span className="luxury-gradient-text">Bag Filters & Dust Collectors</span>
                  </h2>
                  <p className="tab-paragraph">
                    <strong>VS Filtech</strong> is one of the premier Design and Manufacturers of Bag Filters and Dust Collectors in India. We introduce ourselves as a full-scale Manufacturer and Supplier of Air Filtration Equipments, Accessories & Spares — including Pulse Jet Bag Filters, Dust Collectors, Manual Dust Collectors, Centrifugal ID Fans, Pulse Jet Filter Bags, Pleated Filter Bags, Support Cages with Aerodynamic Venturis, Solenoid Pulse Valves, Sequential Timers, Rotary Air Locks (RAL), Vibrosieves, Screw Conveyors, Differential Pressure Transmitters, Pressure Switches, Hopper Level Sensors, and associated dust handling systems.
                  </p>
                  <p className="tab-paragraph">
                    Our precision fabrics and filter articles help our clients to get true value for money with maximum filtration quality in minimum time. Total satisfaction of our customers is the key to the growth of VS FILTECH in the field of industrial fabrics and filtration accessories.
                  </p>

                  <div className="tab-feature-checks">
                    <div className="feature-check-item">
                      <CheckCircle2 size={18} className="text-cyan" />
                      <span>Single-source manufacturer: casing, media, cages & instrumentation</span>
                    </div>
                    <div className="feature-check-item">
                      <CheckCircle2 size={18} className="text-cyan" />
                      <span>Guaranteed statutory compliance with CPCB norms (&lt;10 mg/Nm³)</span>
                    </div>
                    <div className="feature-check-item">
                      <CheckCircle2 size={18} className="text-cyan" />
                      <span>Complete CAD design, site rigging, duct layout & turnkey commissioning</span>
                    </div>
                  </div>
                </div>

                <div className="tab-visual-side">
                  <div className="visual-image-frame">
                    <img src={plantImg} alt="VS Filtech Industrial Manufacturing Plant" className="visual-img" />
                    <div className="visual-floating-pill">
                      <Factory size={15} />
                      <span>Full Turnkey Bag Filter Plant</span>
                    </div>
                    <div className="visual-stats-badge">
                      <span className="badge-num">&lt; 10 mg/Nm³</span>
                      <span className="badge-lbl">Guaranteed Clean-Air Emission</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Philosophy */}
            {activeTab === 'philosophy' && (
              <div className="tab-grid-split">
                <div className="tab-text-side">
                  <div className="luxury-eyebrow">APPLICATION-FIRST ENGINEERING</div>
                  <h2 className="tab-heading">
                    Engineered Around <br />
                    <span className="luxury-gradient-text">Your Exact Industrial Process</span>
                  </h2>
                  <p className="tab-paragraph">
                    We understand that every industrial process is different. Dust type, particle size distribution, temperature spikes, moisture content, airflow dynamics, dust concentration, and plant operating cycles can significantly affect the performance of a filtration system.
                  </p>
                  <p className="tab-paragraph">
                    Therefore, our approach is to understand the application first and then develop a suitable solution. We focus on practical design, reliable operation, maintainability, and long-term performance. We can design bags and baghouses as per your exact process needs — our maximum products are 100% customized according to customer needs.
                  </p>

                  <div className="philosophy-highlight-box">
                    <div className="phi-title">
                      <Zap size={18} className="text-cyan" />
                      <span>The VS Filtech Design Creed</span>
                    </div>
                    <p>
                      &ldquo;We never impose off-the-shelf catalog units on complex industrial processes. Every CFM, can velocity, and filter fabric is mathematically selected for your plant's dust chemistry.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="tab-visual-side">
                  <div className="visual-image-frame">
                    <img src={baghouseImg} alt="Baghouse Engineering Analysis" className="visual-img" />
                    <div className="visual-floating-pill">
                      <Settings size={15} />
                      <span>Application-Specific Design</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Consultancy */}
            {activeTab === 'consultancy' && (
              <div className="tab-grid-split">
                <div className="tab-text-side">
                  <div className="luxury-eyebrow">TOTAL-SOLUTION PARTNERSHIP</div>
                  <h2 className="tab-heading">
                    Comprehensive <br />
                    <span className="luxury-gradient-text">Consultancy Services</span>
                  </h2>
                  <p className="tab-paragraph">
                    At VS Filtech, we not only provide top-notch products but also offer comprehensive consultancy services. Our team of experienced professionals is dedicated to understanding your specific filtration requirements and providing tailored solutions that meet your needs.
                  </p>
                  <p className="tab-paragraph">
                    Whether you are seeking assistance with product selection, airflow & CFM calculations, system design, duct velocity optimization, differential pressure troubleshooting, or reverse engineering of existing equipment, our engineering desk is here to help.
                  </p>

                  <div className="consultancy-services-list">
                    {whyChooseUsCards.map((card, idx) => {
                      const Icon = card.icon;
                      return (
                        <div key={idx} className="consultancy-item-row">
                          <div className="con-icon-box">
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="con-title">{card.title}</div>
                            <div className="con-desc">{card.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="tab-visual-side">
                  <div className="visual-image-frame">
                    <img src={ductingImg} alt="Industrial Consultancy and Ducting" className="visual-img" />
                    <div className="visual-floating-pill">
                      <Compass size={15} />
                      <span>Engineering Audit & Sizing</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Mission */}
            {activeTab === 'mission' && (
              <div className="mission-tenets-full">
                <div className="luxury-eyebrow text-center">FOUNDATIONAL TENETS</div>
                <h2 className="tab-heading text-center" style={{ marginBottom: '40px' }}>
                  Our Mission: <span className="luxury-gradient-text">4 Core Principles</span>
                </h2>
                <div className="mission-cards-grid">
                  {missionTenets.map((tenet, idx) => {
                    const Icon = tenet.icon;
                    return (
                      <div key={idx} className="luxury-mission-card">
                        <div className="mission-card-icon-wrap" style={{ color: tenet.accent, borderColor: `${tenet.accent}33`, background: `${tenet.accent}14` }}>
                          <Icon size={26} />
                        </div>
                        <h3 className="mission-card-title">{tenet.title}</h3>
                        <p className="mission-card-desc">{tenet.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ── 4. Technical Superiority: Online vs Offline & Gas Distribution ── */}
      <section className="about-tech-superiority">
        <div className="container">
          
          <div className="section-head-center">
            <span className="luxury-eyebrow">CLEANING INNOVATION & DUST DYNAMICS</span>
            <h2 className="section-headline">
              Pulse-Jet Cleaning: <span className="luxury-gradient-text">Online vs Offline Modes</span>
            </h2>
            <p className="section-subtext">
              Engineered according to process continuousness, dust adhesiveness, and compartment isolation demands:
            </p>
          </div>

          <div className="tech-modes-grid">
            {cleaningTechnology.map((item, idx) => (
              <div key={idx} className="luxury-tech-mode-card">
                <div className="tech-mode-header">
                  <span className="tech-mode-pill" style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}15` }}>
                    {item.tag}
                  </span>
                  <Wind size={22} style={{ color: item.accent }} />
                </div>
                <h3 className="tech-mode-title">{item.title}</h3>
                <p className="tech-mode-desc">{item.desc}</p>
                <div className="tech-mode-points">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="tech-mode-pt">
                      <CheckCircle2 size={16} style={{ color: item.accent, flexShrink: 0 }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Gas & Dust Distribution Callout Card */}
          <div className="gas-distribution-card">
            <div className="gas-dist-icon">
              <Wind size={32} />
            </div>
            <div className="gas-dist-content">
              <h3>Aerodynamic Gas & Dust Distribution Technology</h3>
              <p>
                Our specialized inlet flow diffusers and baffle plates ensure uniform airflow across all filter rows, creating a true negative 
                downward can velocity. This design prevents fine dust particles from being re-entrained back onto neighboring filter sleeves, 
                significantly reducing fabric abrasion and extending filter bag service life by up to 50%.
              </p>
            </div>
            <div className="gas-dist-badge">
              <ShieldCheck size={20} className="text-cyan" />
              <span>Zero Re-Entrainment</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. Complete 14 Products & Spares Directory ── */}
      <section className="about-products-directory">
        <div className="container">
          
          <div className="section-head-center">
            <span className="luxury-eyebrow">COMPLETE CATALOGUE UNDER ONE ROOF</span>
            <h2 className="section-headline">
              Air Filtration Equipments, <span className="luxury-gradient-text">Accessories & Spares</span>
            </h2>
            <p className="section-subtext">
              Comprehensive manufacturing and supply of dust collectors, media, and auxiliary spare parts across India:
            </p>
          </div>

          <div className="products-brief-grid">
            {completeProductsBrief.map((prod, idx) => (
              <div key={idx} className="luxury-product-brief-card">
                <div className="prod-card-top">
                  <span className="prod-idx">{(idx + 1).toString().padStart(2, '0')}</span>
                  <span className="prod-tag-pill">{prod.tag}</span>
                </div>
                <h4 className="prod-title">{prod.name}</h4>
                <p className="prod-desc">{prod.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '45px' }}>
            <Link to="/products" className="btn-luxury-primary" style={{ display: 'inline-flex' }}>
              <span>View Full Technical Products Catalog</span>
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 6. Photographic Core Industries Showcase (Thermax Inspired) ── */}
      <section className="about-industries-section">
        <div className="container">
          
          <div className="section-head-center">
            <span className="luxury-eyebrow">TRUSTED NATIONWIDE</span>
            <h2 className="section-headline">
              Industries <span className="luxury-gradient-text">We Serve</span>
            </h2>
            <p className="section-subtext">
              Engineering customized air pollution control systems, reverse pulse-jet baghouses, and specialized filter media across India&apos;s primary industrial processing sectors:
            </p>
          </div>

          <div className="about-thermax-cards-grid">
            {coreIndustries.map((ind, idx) => {
              return (
                <div key={idx} className="about-thermax-card">
                  <img src={ind.image} alt={ind.name} className="about-thermax-img" loading="lazy" />
                  <div className="about-thermax-overlay" />
                  <div className="about-thermax-content">
                    <span className="about-thermax-badge">{ind.badge}</span>
                    <h3 className="about-thermax-title">{ind.name}</h3>
                    <p className="about-thermax-headline">{ind.headline}</p>
                    <p className="about-thermax-desc">{ind.desc}</p>
                    <Link to={`/contact?industry=${ind.name.toLowerCase()}`} className="about-thermax-link">
                      <span>Inquire for {ind.name} Solutions</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 7. Grand Executive Call to Action ── */}
      <section className="about-luxury-cta">
        <div className="container">
          <div className="luxury-cta-box">
            <div className="cta-ambient-circle" />
            <div className="cta-inner-content">
              <div className="cta-badge">
                <PhoneCall size={15} />
                <span>DIRECT TECHNICAL DESK</span>
              </div>
              <h2>Ready to Design Your Custom Filtration System?</h2>
              <p>
                Share your airflow (CFM/m³/hr), dust type, operating temperature, and emissions target. 
                Our engineering team provides comprehensive sizing, manufacturing, and turnkey support nationwide.
              </p>
              <div className="cta-buttons-row">
                <Link to="/contact" className="btn-cta-white">
                  <PhoneCall size={18} />
                  <span>Contact Engineering Team</span>
                </Link>
                <a 
                  href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20would%20like%20to%20discuss%20a%20filtration%20requirement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-translucent"
                >
                  <span>WhatsApp: +91 1234567890</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
