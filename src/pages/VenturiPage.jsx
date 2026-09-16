import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MessageCircle, 
  Maximize2, 
  Wrench, 
  Cpu, 
  ChevronRight,
  PhoneCall,
  Wind,
  Zap,
  Flame,
  ArrowLeft,
  FileCheck2,
  X
} from 'lucide-react';

import venturiHdImg from '../assets/venturi_nozzle_hd.jpg';
import metalVenturiImg from '../assets/metal_venturi.jpg';
import cageHdImg from '../assets/filter_cage_hd.jpg';
import solenoidImg from '../assets/solenoid_valve_hd.jpg';
import filterBagImg from '../assets/filter_bag_hd.jpg';
import snapBandsImg from '../assets/snap_bands_cuff_hd.jpg';

import './VenturiPage.css';

// Metallurgy Profiles
const metallurgyTypes = [
  {
    id: 'aluminum',
    name: 'Die-Cast Aluminum Alloy (LM6 / ADC12)',
    tag: 'Flagship Aerodynamic Performance',
    badge: 'Standard Industrial',
    desc: 'Engineered from high-purity die-cast aluminum alloy with precision CNC-machined converging-diverging profiles. The ultra-smooth inner throat minimizes aerodynamic turbulence and generates maximum acoustic amplification during reverse pulsing.',
    pros: [
      'CFD-optimized Bellmouth geometry maximizing secondary air entrainment',
      'Ultra-smooth internal finish eliminates friction and pressure drop',
      'Lightweight construction reduces tubesheet dead load',
      'Naturally corrosion-resistant against ambient moisture and flue gases'
    ],
    idealFor: 'Cement mills, metal grinding, grain silos, woodworking, and general pulse-jet baghouses.',
    tempLimit: 'Ambient up to 160°C'
  },
  {
    id: 'spun-steel',
    name: 'Deep-Drawn Spun Mild Steel / Galvanized',
    tag: 'Rugged Mechanical Strength',
    badge: 'Heavy-Duty & Economical',
    desc: 'Formed from 1.2mm to 1.6mm cold-rolled sheet steel or hot-dip galvanized steel using precision CNC metal spinning. Designed specifically to be resistance spot-welded directly atop filter support cage collars for permanent monolithic assembly.',
    pros: [
      'High structural impact resistance against high-pressure pulsing shockwaves',
      'Spot-welded directly to top cage collar for zero field assembly labor',
      'Electro-galvanized or silicone-coated for rust prevention',
      'Highly economical solution for high-capacity multi-thousand bag installations'
    ],
    idealFor: 'Asphalt batching plants, coal handling, foundry sand reclamation, and mining dust extraction.',
    tempLimit: 'Ambient up to 200°C'
  },
  {
    id: 'stainless',
    name: 'Grade SS 304 & SS 316 Stainless Steel',
    tag: 'Extreme Chemical & Thermal Durability',
    badge: 'High-Temperature & Acidic',
    desc: 'Manufactured from austenitic Stainless Steel (SS 304, SS 316, SS 316L) via precision spinning or investment casting with passivated surface treatment. Delivers complete resistance to acid condensation and aggressive chemical flue gases.',
    pros: [
      'Continuous thermal resistance up to 450°C without dimensional distortion',
      'Complete chemical immunity against sulfuric (SOx) and nitric (NOx) acid condensates',
      'Mirror-polished sanitary finish meets FDA and sanitary pharmaceutical standards',
      'Zero scaling, rust spalling, or fabric abrasion over decades of continuous operation'
    ],
    idealFor: 'Coal-fired utility boilers, waste incinerators, ferro-alloy furnaces, and pharmaceutical dryers.',
    tempLimit: 'Continuous up to 450°C'
  }
];

// Specifications
const venturiSpecs = [
  {
    parameter: 'Nozzle Aerodynamic Profile',
    value: 'Converging-Diverging Bellmouth Nozzle (CFD Tuned)',
    detail: 'Converts primary high-pressure static air into supersonic kinetic shockwave.'
  },
  {
    parameter: 'Secondary Air Induction Factor',
    value: '3.5x to 4.5x (up to 400% secondary clean air volume)',
    detail: 'Entrains surrounding ambient plenum air to multiply cleaning volume.'
  },
  {
    parameter: 'Standard Throat Diameters',
    value: 'Ø 28mm, Ø 32mm, Ø 36mm, Ø 40mm, Ø 45mm',
    detail: 'Toleranced to match blowpipe pulse orifice diameters (Ø 8mm - Ø 14mm).'
  },
  {
    parameter: 'Tubesheet Collar / Flange OD',
    value: 'Ø 120mm, Ø 130mm, Ø 150mm, Ø 160mm, Ø 180mm',
    detail: 'Precision stepped flange seats securely into cell plate hole.'
  },
  {
    parameter: 'Tuned Venturi Overall Length',
    value: '150mm, 200mm, 250mm, 300mm length options',
    detail: 'Selected based on bag length (150mm for 2-3m bags; 300mm for 6-8m bags).'
  },
  {
    parameter: 'Materials of Construction (MOC)',
    value: 'Die-Cast Aluminum (LM6), Spun Steel, SS 304, SS 316',
    detail: 'Application-matched for thermal, chemical, and acoustic performance.'
  },
  {
    parameter: 'Mounting Styles Available',
    value: 'Drop-In Tubesheet Flange or Spot-Welded Cage Collar',
    detail: 'Enables toolless drop-in installation or permanent integrated cage fitment.'
  },
  {
    parameter: 'Compressed Air Pulse Pressure',
    value: '4.0 bar to 7.0 bar (60 to 100 PSI working pressure)',
    detail: 'Generates supersonic Mach 1.2+ pressure front through throat.'
  }
];

const VenturiPage = () => {
  const [activeMetallurgy, setActiveMetallurgy] = useState(metallurgyTypes[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(venturiHdImg);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    material: 'Die-Cast Aluminum Alloy (LM6)',
    throatDia: 'Ø 36 mm (Standard)',
    flangeOD: 'Ø 150 mm (Compatible with 160mm bags)',
    length: '200 mm Length',
    mounting: 'Drop-In Tubesheet Flange',
    quantity: '500 pcs',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const waText = 
`*Inquiry: Supersonic Venturi Nozzles - VS Filtech*
----------------------------------------
👤 *Name:* ${formData.name} ${formData.company ? `(${formData.company})` : ''}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || 'Not provided'}
⚙️ *Material:* ${formData.material}
📐 *Dimensions:* Throat ${formData.throatDia} | Flange ${formData.flangeOD}
📏 *Length:* ${formData.length} | *Mounting:* ${formData.mounting}
📦 *Quantity:* ${formData.quantity}
📝 *Notes:* ${formData.message || 'Please provide quotation, GA drawings, and dispatch schedule.'}
----------------------------------------
_Sent from vsfiltech.com/products/venturis_`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/911234567890?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="venturi-page">
      {/* 1. HERO SECTION WITH AUTHENTIC VENTURI BACKGROUND */}
      <section 
        className="vp-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(7, 15, 30, 0.76) 0%, rgba(7, 15, 30, 0.94) 80%, #070f1e 100%), url(${venturiHdImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="vp-hero-ambient"></div>
        <div className="container relative z-10">
          
          {/* Tag Badge */}
          <div className="vp-hero-badge">
            <Sparkles size={14} className="badge-sparkle" />
            <span>PULSE-JET AERODYNAMIC JET AMPLIFICATION</span>
          </div>

          <h1 className="vp-hero-title">
            Supersonic Venturis | <span className="text-gradient">Cast Aluminum &amp; Spun Steel</span>
          </h1>

          <p className="vp-hero-subtitle">
            Aerodynamically contoured converging-diverging nozzles engineered to induce up to 400% secondary clean air volume. 
            Multiplies reverse pulse shockwave energy to shatter dust cakes across long filter bags (up to 8m) cleanly from top to bottom.
          </p>

          <div className="vp-hero-cta-row">
            <a href="#venturi-rfq" className="btn btn-primary">
              <MessageCircle size={18} />
              <span>Get WhatsApp Quotation</span>
            </a>
            <a href="#metallurgy-comparison" className="btn btn-outline">
              <span>Compare Metallurgy Options</span>
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="vp-metrics-ribbon">
            <div className="metric-box">
              <span className="metric-val">3.5x - 4.5x</span>
              <span className="metric-lbl">Secondary Air Induction</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">Mach 1.2+</span>
              <span className="metric-lbl">Supersonic Shockwave</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">Up to 8 Meters</span>
              <span className="metric-lbl">Cleaning Depth Reach</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">Alu / Steel / SS</span>
              <span className="metric-lbl">OEM Metallurgy</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHOTOGRAPHIC SHOWCASE & TECHNICAL INTRO */}
      <section className="vp-showcase-section">
        <div className="container">
          <div className="vp-showcase-grid">
            
            {/* Left: HD Photo Showcase with Zoom */}
            <div className="vp-media-col">
              <div className="vp-main-image-card" onClick={() => setLightboxOpen(true)}>
                <img 
                  src={activePhoto} 
                  alt="Industrial Supersonic Venturi Nozzle - VS Filtech" 
                  className="vp-featured-img" 
                />
                
                <button 
                  type="button" 
                  className="vp-zoom-btn"
                  onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
                >
                  <Maximize2 size={16} />
                  <span>Inspect High Resolution</span>
                </button>

                <div className="vp-image-badge">
                  <span className="live-dot"></span>
                  <span>Bernoulli Aerodynamic Bellmouth</span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="vp-thumbnails-grid">
                <div 
                  className={`vp-thumb ${activePhoto === venturiHdImg ? 'active' : ''}`}
                  onClick={() => setActivePhoto(venturiHdImg)}
                >
                  <img src={venturiHdImg} alt="Cast Aluminum Venturi" />
                  <span>Cast Aluminum</span>
                </div>
                <div 
                  className={`vp-thumb ${activePhoto === metalVenturiImg ? 'active' : ''}`}
                  onClick={() => setActivePhoto(metalVenturiImg)}
                >
                  <img src={metalVenturiImg} alt="Spun Steel Venturi" />
                  <span>Spun Steel</span>
                </div>
                <div 
                  className={`vp-thumb ${activePhoto === cageHdImg ? 'active' : ''}`}
                  onClick={() => setActivePhoto(cageHdImg)}
                >
                  <img src={cageHdImg} alt="Cage Top Integration" />
                  <span>Cage Mounting</span>
                </div>
                <div 
                  className={`vp-thumb ${activePhoto === solenoidImg ? 'active' : ''}`}
                  onClick={() => setActivePhoto(solenoidImg)}
                >
                  <img src={solenoidImg} alt="Pulse Jet Valve Delivery" />
                  <span>Pulse Jet Orifice</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Features Breakdown */}
            <div className="vp-content-col">
              <div className="vp-tag">AERODYNAMIC SUPERSONIC ENGINEERING</div>
              <h2 className="vp-section-title">Why Supersonic Venturis are Vital for Pulse Cleaning</h2>
              <p className="vp-lead-p">
                Without an aerodynamically tuned venturi, compressed air escaping the blowpipe expands prematurely in the top 30cm of the filter bag, leaving the lower 80% under-cleaned and causing blinding, high differential pressure, and excessive energy consumption.
              </p>

              <div className="vp-benefits-stack">
                <div className="vp-benefit-card">
                  <div className="benefit-icon-box">
                    <Wind size={20} />
                  </div>
                  <div>
                    <h4 className="benefit-heading">400% Secondary Air Entrainment</h4>
                    <p className="benefit-desc">
                      The Bernoulli throat depression pulls ambient clean air from the plenum, multiplying the mass volume of the cleaning blast to thoroughly flex 6m to 8m long bags.
                    </p>
                  </div>
                </div>

                <div className="vp-benefit-card">
                  <div className="benefit-icon-box">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="benefit-heading">Full-Length Cake Ejection</h4>
                    <p className="benefit-desc">
                      Propagates a high-energy acoustic shockwave down the entire vertical axis, shattering tenacious dust cakes and dislodging fine particulates directly into the hopper.
                    </p>
                  </div>
                </div>

                <div className="vp-benefit-card">
                  <div className="benefit-icon-box">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="benefit-heading">30% Compressed Air Savings</h4>
                    <p className="benefit-desc">
                      Because secondary air does the heavy lifting, baghouses require lower pulse header pressures (4.0 - 5.0 bar instead of 7.0 bar), drastically reducing plant compressor electricity bills.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. METALLURGY & CONSTRUCTION COMPARISON TABS */}
      <section id="metallurgy-comparison" className="vp-metallurgy-section">
        <div className="container">
          <div className="vp-section-header text-center">
            <div className="vp-tag">METALLURGY SELECTION</div>
            <h2 className="vp-section-title text-white">Engineered Metallurgy for Every Process Gas</h2>
            <p className="vp-section-desc">
              Select the optimal venturi metallurgy to resist abrasion, chemical condensation, and extreme furnace flue gas temperatures.
            </p>
          </div>

          {/* Metallurgy Selector Tabs */}
          <div className="vp-tabs-container">
            {metallurgyTypes.map((met) => (
              <button
                key={met.id}
                type="button"
                className={`vp-tab-btn ${activeMetallurgy.id === met.id ? 'active' : ''}`}
                onClick={() => setActiveMetallurgy(met)}
              >
                <span className="tab-title">{met.name.split('(')[0]}</span>
                <span className="tab-badge">{met.badge}</span>
              </button>
            ))}
          </div>

          {/* Active Metallurgy Display Card */}
          <div className="vp-metallurgy-card">
            <div className="vp-meta-header">
              <div>
                <span className="meta-tag">{activeMetallurgy.tag}</span>
                <h3 className="meta-name">{activeMetallurgy.name}</h3>
              </div>
              <div className="meta-temp-box">
                <Flame size={18} />
                <span>{activeMetallurgy.tempLimit}</span>
              </div>
            </div>

            <p className="meta-desc">{activeMetallurgy.desc}</p>

            <div className="meta-grid">
              <div className="meta-col">
                <h4 className="meta-col-title">Key Engineering Highlights</h4>
                <ul className="meta-bullets">
                  {activeMetallurgy.pros.map((pro, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={16} className="bullet-icon" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="meta-col">
                <h4 className="meta-col-title">Recommended Operating Scope</h4>
                <div className="meta-scope-box">
                  <p><strong>Primary Applications:</strong> {activeMetallurgy.idealFor}</p>
                  <p><strong>Operating Temperature:</strong> {activeMetallurgy.tempLimit}</p>
                  <p><strong>Mounting Compatibility:</strong> Drop-in tubesheet flanged seating or resistance spot-welded atop wire support cages.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BERNOULLI EFFECT & SHOCKWAVE PHYSICS EXPLAINER */}
      <section className="vp-physics-section">
        <div className="container">
          <div className="vp-section-header text-center">
            <div className="vp-tag">FLUID DYNAMICS PRINCIPLE</div>
            <h2 className="vp-section-title">The Bernoulli Effect in Reverse Pulse-Jet Cleaning</h2>
            <p className="vp-section-desc">
              How a fraction of a second compressed air blast transforms into an expanding supersonic cleaning shockwave.
            </p>
          </div>

          <div className="vp-physics-steps-grid">
            <div className="physics-step-card">
              <div className="step-num">01</div>
              <h4 className="step-title">Primary Supersonic Jet</h4>
              <p className="step-desc">
                When the pilot solenoid fires, compressed air (4 - 6 bar) discharges through the blowpipe orifice directly into the converging venturi throat at high velocity.
              </p>
            </div>

            <div className="physics-step-card">
              <div className="step-num">02</div>
              <h4 className="step-title">Throat Vacuum Depression</h4>
              <p className="step-desc">
                In accordance with Bernoulli’s principle, fluid acceleration creates a localized low-pressure depression inside the throat, pulling air inward.
              </p>
            </div>

            <div className="physics-step-card">
              <div className="step-num">03</div>
              <h4 className="step-title">400% Secondary Induction</h4>
              <p className="step-desc">
                Surrounding clean ambient air from the clean-air plenum is sucked into the diverging cone, multiplying total cleaning air volume by up to 4.5x.
              </p>
            </div>

            <div className="physics-step-card">
              <div className="step-num">04</div>
              <h4 className="step-title">Uniform Bag Expansion</h4>
              <p className="step-desc">
                The amplified air volume travels down the entire 6m to 8m length of the bag as a supersonic acoustic shockwave, shattering the outer dust cake cleanly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HARDWARE ROLES COMPARISON: VENTURIS VS CAGES VS BAGS */}
      <section className="vp-roles-section">
        <div className="container">
          <div className="vp-section-header text-center">
            <div className="vp-tag">SYSTEM ARCHITECTURE</div>
            <h2 className="vp-section-title text-white">How Venturis, Filter Cages &amp; Bags Work Together</h2>
            <p className="vp-section-desc">
              Each component performs an essential, complementary mechanical function inside the pulse-jet baghouse.
            </p>
          </div>

          <div className="vp-roles-grid">
            {/* Role 1: Filter Bag */}
            <div className="vp-role-card">
              <div className="role-img-wrap">
                <img src={filterBagImg} alt="Filter Bag" />
                <span className="role-badge">Filtration Media</span>
              </div>
              <div className="role-content">
                <h4 className="role-title">1. Industrial Filter Bag</h4>
                <p className="role-desc">
                  The active micro-porous membrane (Polyester, PPS, PTFE, Nomex) that traps dust particulates on the outer surface to meet statutory &lt;10 mg/Nm³ emission limits.
                </p>
                <Link to="/products/filter-bag" className="role-link">
                  <span>Explore Filter Bags</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Role 2: Filter Cage */}
            <div className="vp-role-card">
              <div className="role-img-wrap">
                <img src={cageHdImg} alt="Filter Cage" />
                <span className="role-badge">Structural Skeleton</span>
              </div>
              <div className="role-content">
                <h4 className="role-title">2. Wire Support Cage</h4>
                <p className="role-desc">
                  The rigid internal multi-wire skeleton (6 to 24 wires) that holds the bag fully open against high inward vacuum suction (-150 to -600 mm WG).
                </p>
                <Link to="/products/filter-cages" className="role-link">
                  <span>Explore Filter Cages</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Role 3: Supersonic Venturi */}
            <div className="vp-role-card highlighted">
              <div className="role-img-wrap">
                <img src={venturiHdImg} alt="Venturi Nozzle" />
                <span className="role-badge active">Aerodynamic Amplifier</span>
              </div>
              <div className="role-content">
                <h4 className="role-title">3. Supersonic Venturi</h4>
                <p className="role-desc">
                  The aerodynamic Bellmouth nozzle seated atop the cage that induces 4x secondary clean air to project pulse shockwaves all the way down to the bottom pan.
                </p>
                <span className="role-active-indicator">Current Product Specification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DETAILED SPECIFICATIONS TABLE */}
      <section className="vp-specs-section">
        <div className="container">
          <div className="vp-section-header text-center">
            <div className="vp-tag">ENGINEERING PARAMETERS</div>
            <h2 className="vp-section-title">Standard Dimensional &amp; Aerodynamic Sizing</h2>
            <p className="vp-section-desc">
              VS Filtech manufactures venturis precision-toleranced to match international tubesheet diameters and blowpipe hole sizes.
            </p>
          </div>

          <div className="vp-specs-table-wrap">
            <table className="vp-specs-table">
              <thead>
                <tr>
                  <th>Technical Parameter</th>
                  <th>Engineering Standard / Options</th>
                  <th>Functional Detail</th>
                </tr>
              </thead>
              <tbody>
                {venturiSpecs.map((spec, sIdx) => (
                  <tr key={sIdx}>
                    <td className="spec-param">{spec.parameter}</td>
                    <td className="spec-val">{spec.value}</td>
                    <td className="spec-detail">{spec.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. RFQ FORM WITH WHATSAPP & DIRECT CALL */}
      <section id="venturi-rfq" className="vp-rfq-section">
        <div className="container">
          <div className="vp-rfq-grid">
            
            {/* Left: Contact Info */}
            <div className="vp-rfq-info">
              <div className="vp-tag">OEM DIRECT QUOTATION</div>
              <h2 className="vp-rfq-title">Request a Custom Venturi Quotation &amp; GA Drawings</h2>
              <p className="vp-rfq-desc">
                Need drop-in replacement venturis, tubesheet retrofits, or custom Bellmouth profiles engineered for specialized chemical or high-temperature processes?
              </p>

              <div className="vp-contact-pills">
                <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="vp-pill whatsapp">
                  <MessageCircle size={18} />
                  <span>Direct WhatsApp Engineering Desk</span>
                </a>
                <a href="tel:+911234567890" className="vp-pill call">
                  <PhoneCall size={18} />
                  <span>Call OEM Technical Team</span>
                </a>
              </div>

              <div className="vp-assurance-list">
                <div className="assurance-item">
                  <CheckCircle2 size={18} className="assur-icon" />
                  <span>Exact OEM dimensional interchangeability (toleranced to ±0.2mm)</span>
                </div>
                <div className="assurance-item">
                  <CheckCircle2 size={18} className="assur-icon" />
                  <span>Direct dispatch across India with mill test certificates (MTC)</span>
                </div>
                <div className="assurance-item">
                  <CheckCircle2 size={18} className="assur-icon" />
                  <span>Free sample evaluation for bulk retrofit orders</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive RFQ Form */}
            <div className="vp-rfq-form-card">
              {submitted ? (
                <div className="vp-success-state">
                  <CheckCircle2 size={48} style={{ color: '#22c55e', margin: '0 auto 16px' }} />
                  <h3>Quotation Request Generated!</h3>
                  <p>Your technical requirements have been formatted. Opening WhatsApp to connect with our senior baghouse engineer.</p>
                  <button 
                    type="button" 
                    className="btn btn-outline" 
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: '20px' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleWhatsAppSubmit}>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Company / Plant Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. UltraTech Cement, JSW Steel" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        placeholder="procurement@plant.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Venturi Metallurgy</label>
                      <select 
                        value={formData.material}
                        onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      >
                        <option value="Die-Cast Aluminum Alloy (LM6)">Die-Cast Aluminum Alloy (LM6)</option>
                        <option value="Deep-Drawn Spun Mild Steel / GI">Deep-Drawn Spun Mild Steel / GI</option>
                        <option value="Grade 304 Stainless Steel">Grade 304 Stainless Steel (SS 304)</option>
                        <option value="Grade 316L Stainless Steel">Grade 316L Stainless Steel (SS 316L)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Throat Diameter</label>
                      <select 
                        value={formData.throatDia}
                        onChange={(e) => setFormData({ ...formData, throatDia: e.target.value })}
                      >
                        <option value="Ø 28 mm (Short Bags)">Ø 28 mm (For 1m - 2.5m Bags)</option>
                        <option value="Ø 32 mm (Medium Bags)">Ø 32 mm (For 3m - 4m Bags)</option>
                        <option value="Ø 36 mm (Standard)">Ø 36 mm (Industrial Standard)</option>
                        <option value="Ø 40 mm (Long Bags)">Ø 40 mm (For 5m - 6m Bags)</option>
                        <option value="Ø 45 mm (High Capacity)">Ø 45 mm (For 7m - 8m Bags)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Mounting Style</label>
                      <select 
                        value={formData.mounting}
                        onChange={(e) => setFormData({ ...formData, mounting: e.target.value })}
                      >
                        <option value="Drop-In Tubesheet Flange">Drop-In Tubesheet Flange</option>
                        <option value="Spot-Welded atop Cage Collar">Spot-Welded atop Cage Collar</option>
                        <option value="Snap-In Internal Ring">Snap-In Internal Ring</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Estimated Quantity</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 500 pcs, 2000 pcs" 
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Additional Requirements / Drawing Notes</label>
                    <textarea 
                      rows={3} 
                      placeholder="Specify tubesheet hole diameter, blowpipe orifice size, or operating gas temperature..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    <MessageCircle size={18} />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 8. COMPLEMENTARY HARDWARE & SPARES */}
      <section className="vp-related-section">
        <div className="container">
          <div className="vp-section-header text-center">
            <div className="vp-tag">RELATED HARDWARE</div>
            <h2 className="vp-section-title">Related Pulse-Jet Baghouse Spares</h2>
            <p className="vp-section-desc">
              Complete the reverse-pulse cleaning assembly with precision-matched cages, pulse valves, and tubesheet seals.
            </p>
          </div>

          <div className="vp-related-grid">
            <div className="vp-rel-card">
              <img src={cageHdImg} alt="Filter Support Cages" className="rel-img" />
              <div className="rel-body">
                <span className="rel-tag">Structural Skeleton</span>
                <h4 className="rel-title">Wire Support Cages</h4>
                <p className="rel-desc">6 to 24-wire CNC resistance-welded cages in GI, SS 304, and twist-lock split configurations.</p>
                <Link to="/products/filter-cages" className="rel-link">
                  <span>View Filter Cages</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="vp-rel-card">
              <img src={solenoidImg} alt="Pulse Solenoid Valves" className="rel-img" />
              <div className="rel-body">
                <span className="rel-tag">Cleaning Valve</span>
                <h4 className="rel-title">Pulse Solenoid Valves</h4>
                <p className="rel-desc">Fast-acting pilot diaphragm valves firing supersonic air bursts to feed venturi nozzles.</p>
                <Link to="/products/solenoid-valve" className="rel-link">
                  <span>View Solenoid Valves</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="vp-rel-card">
              <img src={snapBandsImg} alt="Snap Bands & Clamps" className="rel-img" />
              <div className="rel-body">
                <span className="rel-tag">Tubesheet Seal</span>
                <h4 className="rel-title">Snap Bands &amp; Clamps</h4>
                <p className="rel-desc">Tempered spring steel snap ring bands with double-beaded felt gaskets for toolless seal.</p>
                <Link to="/products/snap-bands" className="rel-link">
                  <span>View Snap Bands</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="vp-lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="vp-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="vp-lightbox-close" 
              onClick={() => setLightboxOpen(false)}
            >
              <X size={24} />
            </button>
            <img src={activePhoto} alt="Venturi High Resolution Inspection" />
            <div className="vp-lightbox-caption">
              <span>VS Filtech Aerodynamic Venturi Nozzle Inspection &bull; Precision Bellmouth Geometry</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default VenturiPage;
