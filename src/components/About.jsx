import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  ShieldCheck, 
  Layers, 
  Cpu,
  Sparkles,
  Award,
  Users,
  Target,
  FileCheck2,
  HardHat,
  Sliders,
  Wind
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

// 8K Cinematic Commercial Industrial Photography: Factory Plant with Bag Filter System
import factoryBagfilterImg from '../assets/factory_bagfilter_plant_hd.jpg';
import CountUpStat from './CountUpStat';

// Client Mission 4 Tenets
const missionTenets = [
  {
    title: 'Safety First',
    icon: HardHat,
    desc: 'Ensuring safe, emission-compliant, and hazard-free operations across every plant installation.'
  },
  {
    title: 'Uncompromising Integrity',
    icon: Award,
    desc: 'Honest, transparent engineering consultations and ethical long-term business partnerships.'
  },
  {
    title: 'Quality, Without Question',
    icon: ShieldCheck,
    desc: 'Precision manufacturing to the highest industrial tolerances and CPCB pollution standards.'
  },
  {
    title: 'Dedication to Employees & Clients',
    icon: Users,
    desc: 'Committed to understanding client process challenges and delivering tailored total-solutions.'
  }
];

// Complete 14 Products with Brief from Client
const clientProductsBrief = [
  { name: 'Pulse Jet Bag Filters', desc: 'Continuous automated industrial dust collection with compressed-air pulse cleaning.' },
  { name: 'Silo Filters', desc: 'Top-mounted venting filters for powder storage silos, bins, and pneumatic receivers.' },
  { name: 'Cyclone Filters', desc: 'Centrifugal pre-separators for capturing coarse, heavy, and abrasive dust particles.' },
  { name: 'ID Fans (Induced Draft)', desc: 'High-efficiency industrial centrifugal blowers designed for specific airflow & static pressure.' },
  { name: 'Filter Bags', desc: 'Precision woven and non-woven filter sleeves for sub-micron particulate filtration.' },
  { name: 'Cages with Venturi', desc: 'Heavy-duty wire mesh support cages with aerodynamic cast or pressed venturi nozzles.' },
  { name: 'Solenoid Valves', desc: 'High-speed pilot and remote solenoid pulse valves for instantaneous pulse cleaning.' },
  { name: 'RAL - Rotary Air Lock Valve', desc: 'Airtight rotary feeder for continuous dust discharge from baghouse collection hoppers.' },
  { name: 'Screw Conveyors', desc: 'Heavy-duty enclosed mechanical dust conveying systems beneath hopper collection troughs.' },
  { name: 'Differential Pressure Switch / Transmitter', desc: 'Accurate real-time differential pressure (DP) monitoring across tube sheets.' },
  { name: 'Pressure Switch', desc: 'Safety compressed air pressure monitoring for pulse manifold headers.' },
  { name: 'Hopper Level Sensors', desc: 'Paddle and capacitive level sensors detecting high-level dust accumulation in hoppers.' },
  { name: 'Hopper Vibrators', desc: 'Pneumatic and electric vibrators preventing dust bridging, caking, and rat-holing.' },
  { name: 'Explosion Vents', desc: 'ATEX-certified burst relief panels for combustible dust hazard mitigation and safety.' }
];

// Industries Served from Client Copy
const industriesList = [
  'Food & Beverage', 'Pharmaceutical', 'Chemical & Agro Chemicals', 'Fertilizer',
  'Ferro Alloys & Mining', 'Metal & Refining', 'Paper & Woodworking', 'Cement & Ceramics',
  'Health-care', 'Rubber & Tyres', 'Calcium Carbide', 'Rice Mills & Flour Mills',
  'Thermal Power Plants & Furnaces'
];

const About = () => {
  return (
    <section id="about" className="about-section-premium">
      {/* ── Multi-Layered Ultra-Premium Executive Background ── */}
      <div className="about-luxury-canvas-bg" />
      <div className="about-aurora-orb about-aurora-1" />
      <div className="about-aurora-orb about-aurora-2" />
      <div className="about-aurora-orb about-aurora-3" />
      <div className="about-hud-grid-matrix" />
      
      {/* Subtle Technical Engineering Watermark / Coordinate Accents */}
      <div className="about-technical-hud-meta" aria-hidden="true">
        <span className="hud-meta-code">SYS // VS-FILTECH-OEM-CORE</span>
        <span className="hud-meta-divider">|</span>
        <span className="hud-meta-code">CPCB EMISSION NORM: &lt;10 mg/Nm³</span>
        <span className="hud-meta-divider">|</span>
        <span className="hud-meta-code">SPEC: ISO 9001:2015 CERTIFIED</span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* ── Top Main Split Grid (About VS Filtech & Factory Bag Filter Showcase) ── */}
        <div className="about-grid-premium">
          
          {/* Left Column: Corporate Story & Client Content */}
          <div className="about-content-premium">
            <div className="about-eyebrow-graphic">
              <span className="pulse-dot-cyan" />
              <span>ABOUT VS FILTECH · AIR FILTRATION & DUST CONTROL</span>
            </div>

            <h2 className="about-title-premium">
              Design & Manufacturer of <br />
              <span className="about-title-gradient">Bag Filters & Dust Collectors</span> <br />
              in India
            </h2>

            <p className="about-lead-premium">
              <strong>VS Filtech</strong> is one of India&apos;s premier Design and Manufacturers of high-capacity Bag Filters and Dust Collectors. 
              We are an end-to-end manufacturer and supplier of Air Filtration Equipments, Accessories & Spares — delivering precision engineering, 
              statutory pollution compliance (&lt;10 mg/Nm³), and turnkey systems nationwide.
            </p>

            {/* Why Choose Us & Comprehensive Consultancy Services Box */}
            <div className="about-consultancy-box">
              <div className="about-consultancy-title">
                <Target size={18} className="text-accent" />
                <span>Why Choose Us? · Comprehensive Consultancy & Total Solutions</span>
              </div>
              <p className="about-consultancy-text">
                Our precision fabrics and filter articles help clients achieve maximum value for money with highest filtration quality in minimum time. 
                At VS Filtech, we not only provide top-notch equipment but also offer comprehensive consultancy services. 
                Our experienced engineering team assists with product selection, system design, CFM sizing, and on-site troubleshooting. 
                Our maximum products are 100% customized according to customer needs.
              </p>
            </div>

            {/* Our Mission 4 Key Tenets */}
            <div className="about-mission-grid">
              {missionTenets.map((tenet, idx) => {
                const Icon = tenet.icon;
                return (
                  <div key={idx} className="about-mission-card">
                    <div className="about-mission-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="about-mission-title">{tenet.title}</h4>
                      <span className="about-mission-sub">Verified Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="about-actions-row">
              <Link to="/products" className="btn btn-primary btn-lg">
                <span>Explore Products & Spares</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                <span>Our Turnkey Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Grand Factory Bag Filter Plant Showcase */}
          <div className="about-visual-showcase">
            <div className="about-factory-img-card">
              <img 
                src={factoryBagfilterImg} 
                alt="VS Filtech Industrial Bag Filter Manufacturing Plant" 
                className="about-factory-img"
              />
              <div className="about-factory-overlay" />
              
              {/* Top Bar: Facility Status Tag */}
              <div className="about-factory-tag">
                <span className="live-facility-pulse" />
                <Factory size={13} />
                <span>State-of-the-Art Bag Filter Plant</span>
              </div>

              {/* Floating Badge 1: 15+ Years Experience */}
              <div className="about-floating-experience">
                <div className="experience-badge-top">
                  <Award size={14} className="text-accent" />
                  <span>PROVEN TRACK RECORD</span>
                </div>
                <div className="experience-number">
                  <CountUpStat end={15} suffix="+" />
                </div>
                <div className="experience-label">Years Engineering Expertise</div>
              </div>

              {/* Floating Badge 2: 99.9% Efficiency */}
              <div className="about-floating-efficiency">
                <div className="efficiency-icon-wrap">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="efficiency-value">
                    <CountUpStat end={99.9} decimals={1} suffix="%" />
                  </div>
                  <div className="efficiency-label">Dust Capture Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 14 Products Brief Directory (From Client List) ── */}
        <div className="about-products-catalog-panel">
          <div className="catalog-panel-header">
            <div>
              <div className="catalog-panel-title">
                <Cpu size={20} className="text-accent" />
                <span>Complete Range of Air Filtration Equipments, Accessories & Spares</span>
              </div>
              <p className="catalog-panel-subtitle">
                Engineered, manufactured, and supplied under one roof for zero plant downtime across India.
              </p>
            </div>
            <Link to="/products" className="btn btn-sm btn-outline catalog-header-btn">
              <span>View All Products</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="catalog-products-grid">
            {clientProductsBrief.map((prod, idx) => (
              <div key={idx} className="catalog-product-card">
                <div className="catalog-product-top">
                  <span className="catalog-product-idx">{(idx + 1).toString().padStart(2, '0')}</span>
                  <CheckCircle2 size={14} className="catalog-check-icon" />
                </div>
                <div className="catalog-item-name">
                  <span>{prod.name}</span>
                </div>
                <p className="catalog-item-desc">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Woven & Non-Woven Filter Materials + Industries We Serve ── */}
        <div className="about-materials-industries-box">
          <div className="materials-header">
            <div className="materials-title">
              <Layers size={20} style={{ color: '#38bdf8' }} />
              <span>Woven & Non-Woven Filter Materials for Diverse Process Industries</span>
            </div>
            <p className="materials-desc">
              VS FILTECH deals in specialized woven and non-woven filter media (Polyester, Nomex/Aramid to 240°C, Ryton/PPS, PTFE Membrane, Polypropylene, Fiberglass to 260°C, and Antistatic Epitropic media) serving core heavy industries nationwide:
            </p>
          </div>

          <div className="industries-chips-wrap">
            {industriesList.map((ind, idx) => (
              <span key={idx} className="industry-badge-chip">
                {ind}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
