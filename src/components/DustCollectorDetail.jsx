import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  Wrench,
  Package,
  Activity,
  Maximize,
  X
} from 'lucide-react';

import heroBgImg from '../assets/dust_collector_hero_bg.jpg';
import cutawayImg from '../assets/dust_collector_cutaway_hd.jpg';
import baghousePlantImg from '../assets/factory_bagfilter_plant_hd.jpg';
import cartridgeUnitImg from '../assets/cartridge_collector_unit_hd.jpg';
import cycloneImg from '../assets/cyclone_separator_hd.jpg';
import siloImg from '../assets/silo_filter_product.jpg';
import serviceTurnkeyImg from '../assets/service_turnkey_hd.jpg';
import serviceFabricationImg from '../assets/service_fabrication_hd.jpg';
import ductingImg from '../assets/indoor_ducting.jpg';
import plantClearImg from '../assets/crystal_clear_plant_bg.jpg';

import './DustCollectorDetail.css';

const collectorTypes = [
  {
    title: 'Pulse Jet Baghouse Dust Collectors',
    badge: 'Turnkey Flagship • Continuous 24/7',
    image: baghousePlantImg,
    desc: 'High-volume structural fabric filter baghouses designed for continuous 24/7 operation with automatic row-by-row reverse pulse cleaning.',
    specs: [
      { label: 'Airflow Range', val: '5,000 to 250,000+ CFM' },
      { label: 'Emission Limit', val: '< 10 mg/Nm³ (CPCB Certified)' },
      { label: 'Cleaning Mode', val: 'Online & Offline Compartment' },
      { label: 'Key Applications', val: 'Cement, Boilers, Steel, Smelters' }
    ],
    slug: '/products/pulse-jet-bag-filters'
  },
  {
    title: 'Pleated Cartridge Dust Collectors',
    badge: 'Compact Footprint • 99.99% @ 0.3µm',
    image: cartridgeUnitImg,
    desc: 'Space-saving modular units with 300% higher filtration surface area, engineered for laser cutting, welding smoke, and fine chemical powders.',
    specs: [
      { label: 'Airflow Range', val: '500 to 45,000 CFM' },
      { label: 'Efficiency', val: '99.99% capture @ 0.3 micron' },
      { label: 'Media', val: 'Spunbond / PTFE Nanofiber' },
      { label: 'Key Applications', val: 'Laser/Plasma CNC, Welding, Pharma' }
    ],
    slug: '/products/cartridge-filters'
  },
  {
    title: 'Centrifugal Cyclone Pre-Separators',
    badge: 'Heavy Particulate & Spark Drop-Out',
    image: cycloneImg,
    desc: 'Mechanical aerodynamic pre-separators removing 85%+ coarse abrasive particulates and incandescent sparks upstream of fabric baghouses.',
    specs: [
      { label: 'Efficiency', val: '85% to 95% on particles ≥ 10µm' },
      { label: 'Pressure Drop', val: 'Low drop (70 to 120 mm WG)' },
      { label: 'Protection', val: 'Extinguishes furnace sparks' },
      { label: 'Key Applications', val: 'Woodworking, Sand Plants, Boilers' }
    ],
    slug: '/products/cyclone-dust-collector'
  },
  {
    title: 'Silo Top Venting Dust Collectors',
    badge: 'Flanged Silo Mount • Zero Loss',
    image: siloImg,
    desc: 'Direct-flanged weatherproof venting collectors mounted on storage silos to vent pneumatic filling air while retaining bulk powder.',
    specs: [
      { label: 'Mounting', val: 'Direct silo circular / square flange' },
      { label: 'Cleaning', val: 'Integrated reverse air pulse-jet' },
      { label: 'Casing', val: 'Heavy weatherproof outdoor casing' },
      { label: 'Key Applications', val: 'Cement, Fly Ash, Lime, Flour' }
    ],
    slug: '/products/silo-filters'
  }
];

const cutawayComponents = [
  {
    title: 'CNC Laser-Cut Tubesheet',
    desc: 'Laser-cut from 5mm to 8mm structural steel with calibrated deburred apertures ensuring 100% dust-tight snap-band collar seating.'
  },
  {
    title: 'Supersonic Venturi Nozzles',
    desc: 'Aerodynamic converging-diverging nozzles inducing 4x secondary ambient air volume to deliver powerful acoustic shockwaves down bags.'
  },
  {
    title: 'Pulse Solenoid Valves',
    desc: 'Fast-acting pilot diaphragm valves firing in < 30ms bursts at 5.5 to 6.5 bar compressed air to shatter stubborn dust cakes instantly.'
  },
  {
    title: 'Aerodynamic Can-Velocity Diffuser',
    desc: 'Engineered intake baffle plate generating a true negative downward velocity so dislodged dust cannot re-entrain onto adjacent bags.'
  },
  {
    title: 'Continuous Rotary Airlock (RAL)',
    desc: 'Precision-machined CI / MS rotary airlock feeder discharging collected dust smoothly while maintaining complete vacuum pressure sealing.'
  },
  {
    title: 'Induced Draft (ID) Exhaust Fan',
    desc: 'Dynamically balanced ISO G2.5 centrifugal blower pulling clean, scrubbed air through the plenum and exhausting below < 10 mg/Nm³.'
  }
];

const mediaMatrix = [
  { dust: 'Cement Raw Mill & Kiln', a2c: '1.1 : 1', media: 'Polyester / Acrylic with PTFE membrane', temp: '130°C - 160°C', features: 'High moisture, abrasive clinker dust' },
  { dust: 'Coal / Biomass Boilers', a2c: '1.0 : 1', media: 'PPS (Ryton) / PTFE / Fiberglass', temp: '170°C - 220°C', features: 'High SOx, spark risk, acid dew point resistant' },
  { dust: 'Steel Induction Furnaces', a2c: '1.2 : 1', media: 'Nomex (Aramid) / PTFE Membrane', temp: '180°C - 200°C', features: 'Sub-micron metal oxide fumes' },
  { dust: 'Woodworking & Planers', a2c: '2.0 : 1', media: 'Antistatic Needlefelt Polyester', temp: 'Ambient', features: 'Combustible, low density, high volume' },
  { dust: 'Laser / Plasma Cutting', a2c: '1.5 : 1', media: 'Pleated Spunbond with Nanofibers', temp: 'Ambient', features: 'Ultra-fine oily smoke, sparks mitigation' },
  { dust: 'Pharma & Food Starches', a2c: '1.2 : 1', media: 'FDA Certified Antistatic Polyester', temp: 'Ambient to 90°C', features: 'Sanitary food grade, hygienic mirror polish' }
];

const technicalSpecs = [
  { param: 'Airflow Capacity', val: '1,000 CFM to 250,000+ CFM (Custom modular sizing)' },
  { param: 'Statutory Emission Level', val: '< 10 mg/Nm³ Guaranteed (CPCB / SPCB norms)' },
  { param: 'Filtration Efficiency', val: '> 99.99% sub-micron capture (down to 0.5 µm)' },
  { param: 'Air-to-Cloth Ratio', val: '0.8 to 2.2 m/min (tailored to particulate aerodynamics)' },
  { param: 'Casing Construction (MOC)', val: '4mm - 8mm IS 2062 Grade B Mild Steel / Corten / SS 304 / SS 316' },
  { param: 'Design Static Pressure', val: '± 5,000 Pa to ± 10,000 Pa structural channel stiffening' },
  { param: 'Cleaning Air Pressure', val: '5.0 to 6.5 bar clean, dry, oil-free compressed air' },
  { param: 'Tube Sheet Precision', val: 'CNC fiber-laser cut with calibrated snap-ring apertures' },
  { param: 'Discharge Equipment', val: 'Heavy-duty Rotary Airlock (RAL), motorized screw conveyor & slide gate' },
  { param: 'Control Instrumentation', val: 'Microprocessor sequential pulse timer with digital DP transmitter' }
];

export default function DustCollectorDetail({ product }) {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    airflow: '15,000 CFM',
    dustType: 'Cement / Clinker',
    operatingTemp: 'Ambient to 120°C',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const waText = 
`*Dust Collector Technical Inquiry - VS Filtech*
----------------------------------------
👤 *Name:* ${formData.name} ${formData.company ? `(${formData.company})` : ''}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || 'Not provided'}
💨 *Required CFM:* ${formData.airflow}
🏭 *Dust / Process:* ${formData.dustType}
🌡️ *Temperature:* ${formData.operatingTemp}
📝 *Requirement:* ${formData.message || 'Please share turnkey dust collector engineering sizing, drawings, and commercial quotation.'}
----------------------------------------
_Sent from vsfiltech.com/products/dust-collectors_`;

    window.open(`https://wa.me/918496978456?text=${encodeURIComponent(waText)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="dc-detail-page">
      
      {/* 1. BREADCRUMBS */}
      <div style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '14px 0', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', color: '#64748b' }}>
          <Link to="/" style={{ color: '#475569', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" style={{ color: '#475569', textDecoration: 'none', fontWeight: '500' }}>Products</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#0284c7', fontWeight: '700' }}>Industrial Dust Collectors</span>
        </div>
      </div>

      {/* 2. HERO SECTION WITH 100% CLEAR BACKGROUND IMAGE */}
      <section className="dc-hero-container">
        <div 
          className="dc-hero-bg"
          style={{ backgroundImage: `url(${heroBgImg})` }}
        />
        <div className="dc-hero-scrim" />

        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="dc-hero-card">
            
            <div className="dc-badge-flagship">
              <Sparkles size={14} />
              <span>TURNKEY FILTRATION SYSTEMS &bull; CPCB COMPLIANT (&lt; 10 mg/Nm³)</span>
            </div>

            <h1 className="dc-hero-title">
              Industrial Dust Collector Systems
            </h1>

            <p className="dc-hero-desc">
              VS Filtech designs, manufactures, and commissions heavy-duty industrial pulse jet baghouse dust collectors, compact cartridge units, and cyclone pre-separators engineered for continuous 24/7 particulate extraction across India.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a 
                href="#rfq-form" 
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)',
                  color: '#ffffff',
                  boxShadow: '0 4px 18px rgba(2, 132, 199, 0.35)',
                  textDecoration: 'none'
                }}
              >
                <FileText size={18} />
                <span>Request Quotation / RFQ</span>
              </a>

              <a 
                href="https://wa.me/918496978456?text=Hi%20VS%20Filtech,%20I%20am%20interested%20in%20Industrial%20Dust%20Collector%20Systems.%20Please%20share%20engineering%20drawings%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '13px 22px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Technical Inquiry</span>
              </a>

              <a 
                href="tel:+918496978456" 
                className="btn btn-outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 20px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1.5px solid #cbd5e1',
                  color: '#0f172a',
                  textDecoration: 'none'
                }}
              >
                <PhoneCall size={17} style={{ color: '#0284c7' }} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="dc-metrics-bar">
              <div className="dc-metric-item">
                <ShieldCheck size={26} className="dc-metric-icon" />
                <div>
                  <div className="dc-metric-label">Emission Standard</div>
                  <div className="dc-metric-val">&lt; 10 mg/Nm³ Certified</div>
                </div>
              </div>

              <div className="dc-metric-item">
                <Factory size={26} className="dc-metric-icon" />
                <div>
                  <div className="dc-metric-label">Airflow Capacity</div>
                  <div className="dc-metric-val">1,000 to 250,000+ CFM</div>
                </div>
              </div>

              <div className="dc-metric-item">
                <Award size={26} className="dc-metric-icon" />
                <div>
                  <div className="dc-metric-label">Efficiency Rating</div>
                  <div className="dc-metric-val">99.99% Sub-Micron</div>
                </div>
              </div>

              <div className="dc-metric-item">
                <Clock size={26} className="dc-metric-icon" />
                <div>
                  <div className="dc-metric-label">Manufacturing Hub</div>
                  <div className="dc-metric-val">Ghaziabad, UP (Pan-India)</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUR MAJOR DUST COLLECTOR CONFIGURATIONS WE ENGINEER */}
      <section style={{ padding: '5.5rem 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
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
              <Layers size={14} /> EQUIPMENT PORTFOLIO
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
              Turnkey Dust Collection Systems We Manufacture
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Depending on your gas chemistry, dust density, temperature, and space constraints, VS Filtech designs and builds custom filtration configurations:
            </p>
          </div>

          <div className="dc-types-grid">
            {collectorTypes.map((item, idx) => (
              <div key={idx} className="dc-type-card">
                <div className="dc-type-img-wrap" onClick={() => setLightboxImg(item.image)}>
                  <img src={item.image} alt={item.title} className="dc-type-img" />
                  <div className="dc-type-badge">{item.badge}</div>
                  <button 
                    type="button" 
                    onClick={(e) => { e.stopPropagation(); setLightboxImg(item.image); }}
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      color: '#ffffff',
                      borderRadius: '8px',
                      padding: '5px 10px',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Maximize2 size={13} />
                    <span>View HD</span>
                  </button>
                </div>

                <div className="dc-type-body">
                  <h3 className="dc-type-title">{item.title}</h3>
                  <p className="dc-type-desc">{item.desc}</p>

                  <div className="dc-type-specs">
                    {item.specs.map((sp, sIdx) => (
                      <div key={sIdx} className="dc-type-spec-row">
                        <span>{sp.label}:</span>
                        <strong>{sp.val}</strong>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={item.slug} 
                    className="btn btn-outline"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      borderRadius: '10px',
                      fontSize: '0.88rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      marginTop: 'auto',
                      border: '1.5px solid #0284c7',
                      color: '#0284c7'
                    }}
                  >
                    <span>View Detailed Model Specifications</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. 3D TECHNICAL CUTAWAY & ANATOMY OF A DUST COLLECTOR */}
      <section style={{ padding: '5.5rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem' }}>
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
              <Settings size={14} /> INTERNAL 3D CUTAWAY &amp; WORKING PRINCIPLE
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
              How Our Industrial Dust Collectors Operate
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.65' }}>
              A technical 3D cutaway visualization revealing the internal flow dynamics, filtration media, and high-velocity reverse pulse cleaning mechanics:
            </p>
          </div>

          <div className="dc-cutaway-container">
            <div className="dc-cutaway-img-wrap" onClick={() => setLightboxImg(cutawayImg)}>
              <img 
                src={cutawayImg} 
                alt="3D Technical Cutaway Diagram of Industrial Pulse Jet Dust Collector" 
                className="dc-cutaway-img"
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38bdf8',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)'
              }}>
                <Maximize size={15} />
                <span>Click to Inspect 8K Diagram</span>
              </div>
            </div>

            <div className="dc-components-grid">
              {cutawayComponents.map((comp, idx) => (
                <div key={idx} className="dc-component-item">
                  <div className="dc-comp-num">{idx + 1}</div>
                  <div>
                    <div className="dc-comp-title">{comp.title}</div>
                    <p className="dc-comp-desc">{comp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. SPECIFICATIONS MATRIX & DESIGN PARAMETERS (BLUE CORPORATE THEME) */}
      <section className="pd-section-blue" style={{ padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
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
              ENGINEERING SPECIFICATIONS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
              Technical Standard Parameters
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>
              Every dust collector is custom-fabricated to strict engineering tolerances and tested under pressure:
            </p>
          </div>

          <div style={{
            background: 'rgba(15, 32, 64, 0.75)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '20px',
            overflow: 'hidden'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#ffffff', fontSize: '0.92rem' }}>
              <tbody>
                {technicalSpecs.map((spec, idx) => (
                  <tr 
                    key={idx}
                    style={{
                      borderBottom: idx === technicalSpecs.length - 1 ? 'none' : '1px solid rgba(56, 189, 248, 0.12)',
                      background: idx % 2 === 0 ? 'transparent' : 'rgba(56, 189, 248, 0.04)'
                    }}
                  >
                    <td style={{ padding: '16px 24px', fontWeight: '700', color: '#38bdf8', width: '38%' }}>
                      {spec.param}
                    </td>
                    <td style={{ padding: '16px 24px', color: '#e2e8f0', fontWeight: '500' }}>
                      {spec.val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 6. AIR-TO-CLOTH RATIO & MEDIA SELECTION GUIDE BY INDUSTRIAL DUST */}
      <section style={{ padding: '5.5rem 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
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
              <Activity size={14} /> SIZING GUIDE BY APPLICATION
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
              Dust-Specific Air-to-Cloth &amp; Media Selection
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Proper sizing of filtration velocity (Air-to-Cloth ratio) and chemical media compatibility is critical to prevent premature bag blinding:
            </p>
          </div>

          <div className="dc-matrix-table-wrap">
            <table className="dc-matrix-table">
              <thead>
                <tr>
                  <th>Industrial Dust / Application</th>
                  <th>Recommended A/C Ratio</th>
                  <th>Filter Fabric / Media</th>
                  <th>Gas Temperature</th>
                  <th>Process Conditions</th>
                </tr>
              </thead>
              <tbody>
                {mediaMatrix.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: '700', color: '#0f172a' }}>{row.dust}</td>
                    <td style={{ fontWeight: '700', color: '#0284c7' }}>{row.a2c}</td>
                    <td>{row.media}</td>
                    <td><span className="dc-tag-temp">{row.temp}</span></td>
                    <td style={{ color: '#64748b' }}>{row.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 7. AUTHENTIC WORKSHOP FABRICATION & FIELD INSTALLATION GALLERY */}
      <section style={{ padding: '5.5rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
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
              <Wrench size={14} /> FIELD DEPLOYMENTS &amp; MANUFACTURING
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
              Real Dust Collector Installations in India
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Photographs from our Ghaziabad fabrication facility and customer manufacturing plants:
            </p>
          </div>

          <div className="dc-gallery-grid">
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)'
            }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }} onClick={() => setLightboxImg(serviceTurnkeyImg)}>
                <img src={serviceTurnkeyImg} alt="Turnkey Baghouse Erection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(15, 23, 42, 0.85)', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: '700' }}>
                  On-Site Erection
                </div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>Turnkey Baghouse Erection</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                  Complete structural installation including hoppers, walk-in plenums, stairs, and structural steel supporting towers.
                </p>
              </div>
            </div>

            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)'
            }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }} onClick={() => setLightboxImg(serviceFabricationImg)}>
                <img src={serviceFabricationImg} alt="Workshop Casing Fabrication" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(15, 23, 42, 0.85)', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: '700' }}>
                  Factory Workshop
                </div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>Heavy Plate Fabrication</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                  5mm – 8mm structural steel casing welding, external stiffeners, and laser-cut cell plates built for high vacuum.
                </p>
              </div>
            </div>

            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)'
            }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }} onClick={() => setLightboxImg(ductingImg)}>
                <img src={ductingImg} alt="Industrial Extraction Ducting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(15, 23, 42, 0.85)', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: '700' }}>
                  Duct Network
                </div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>Extraction Hooding &amp; Ducts</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                  Aerodynamically balanced collection hoods at process pick-up points connected to heavy industrial duct lines.
                </p>
              </div>
            </div>

            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)'
            }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }} onClick={() => setLightboxImg(plantClearImg)}>
                <img src={plantClearImg} alt="Commissioned Plant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(15, 23, 42, 0.85)', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: '700' }}>
                  Commissioned Plant
                </div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>CPCB Emission Testing</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                  Certified stack emission testing validating outlet particulates below &lt; 10 mg/Nm³ under continuous operation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. TECHNICAL SIZING & RFQ FORM (BLUE THEME) */}
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
                <MessageCircle size={14} /> DUST COLLECTOR SIZING &amp; RFQ DESK
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
                Request Turnkey Dust Collector Quotation
              </h2>
              
              <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: '1.6' }}>
                Share your CFM, dust type, and operating temperature. Our engineering department will calculate your Air-to-Cloth ratio and provide layout drawings within 24 hours.
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
                <span>Technical inquiry generated! WhatsApp chat opened with our chief engineer.</span>
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                    Contact Person Name *
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
                    placeholder="e.g. Tata Steel / UltraTech Cement"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="pd-dark-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                    WhatsApp Mobile Number *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pd-dark-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                    Official Email ID
                  </label>
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pd-dark-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                    Estimated Airflow (CFM / m³/hr)
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 15,000 CFM or 25,000 m³/hr"
                    value={formData.airflow}
                    onChange={(e) => setFormData({ ...formData, airflow: e.target.value })}
                    className="pd-dark-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                    Dust Type / Industry
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Boiler Fly Ash, Foundry Sand, Wood Shavings"
                    value={formData.dustType}
                    onChange={(e) => setFormData({ ...formData, dustType: e.target.value })}
                    className="pd-dark-input"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>
                  Technical Scope &amp; Specific Operating Challenges
                </label>
                <textarea 
                  rows={4}
                  placeholder="Describe your inlet dust loading, available footprint, continuous vs batch operation, or current emission challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="pd-dark-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit"
                className="btn btn-primary btn-lg"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '15px 28px',
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  boxShadow: '0 6px 20px rgba(2, 132, 199, 0.4)',
                  cursor: 'pointer',
                  border: 'none',
                  color: '#ffffff'
                }}
              >
                <Send size={18} />
                <span>Submit Technical RFQ &amp; Open WhatsApp Desk</span>
              </button>
            </form>

          </div>

        </div>
      </section>

      {/* 9. ESSENTIAL REPLACEMENT COMPONENTS & SPARES */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
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
              <Package size={14} /> OEM REPLACEMENT SPARES
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>
              Compatible Spares for Any Make Baghouse
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem' }}>
              In addition to new turnkey systems, VS Filtech supplies precision-fabricated OEM components:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Industrial Filter Bags', desc: 'Needlefelt Polyester, PTFE, Nomex', link: '/products/filter-bag' },
              { name: 'Wire Support Cages', desc: '12-24 wire CNC automated welding', link: '/products/filter-cages' },
              { name: 'Supersonic Venturis', desc: 'Cast aluminium & deep drawn steel', link: '/products/venturis' },
              { name: 'Pulse Solenoid Valves', desc: 'Pilot diaphragm 3/4" to 3" sizes', link: '/products/pulse-valves' },
              { name: 'Rotary Air Lock Valves', desc: 'Continuous CI & MS airtight feeders', link: '/products/rotary-air-locks' },
              { name: 'ID Centrifugal Fans', desc: 'High-static backward curved draft fans', link: '/products/id-fans' }
            ].map((sp, idx) => (
              <Link 
                key={idx}
                to={sp.link}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0284c7'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>
                  {sp.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '12px' }}>
                  {sp.desc}
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', fontWeight: '700', color: '#0284c7' }}>
                  <span>View Specifications</span>
                  <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxImg && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 10, 20, 0.95)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setLightboxImg(null)}
        >
          <button 
            type="button"
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: '#ffffff',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={24} />
          </button>
          <img 
            src={lightboxImg} 
            alt="Full Resolution Inspection" 
            style={{
              maxWidth: '92vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)'
            }}
          />
        </div>
      )}

    </div>
  );
}
