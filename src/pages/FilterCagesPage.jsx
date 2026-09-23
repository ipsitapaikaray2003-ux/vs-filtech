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
  X,
  FileCheck2
} from 'lucide-react';

import cageHdImg from '../assets/filter_cage_hd.jpg';
import cageWebp from '../assets/filter_cage.webp';
import venturiImg from '../assets/venturi_nozzle_hd.jpg';
import pageBgImg from '../assets/filter_bag_page_bg.jpg';
import fabricationImg from '../assets/client_service_casing_fabrication.jpg';
import filterBagImg from '../assets/filter_bag_hd.jpg';

import './FilterCagesPage.css';

// 6/8/10/12/20 Wire Construction Data
const wireConfigurations = [
  {
    wires: '6 & 8 Wire',
    tag: 'Standard Duty',
    diaRange: 'Ø 100mm - 120mm',
    bestFor: 'Light to moderate particulate loadings, small diameter shaker and pulse bags, ambient temperature systems.',
    benefits: ['Cost effective fabrication', 'Good basic support', 'Lightweight handling']
  },
  {
    wires: '10 Wire',
    tag: 'Industrial Standard',
    diaRange: 'Ø 120mm - 150mm',
    bestFor: 'Standard pulse-jet baghouses across cement, grain, and general metal processing facilities.',
    benefits: ['Uniform circumferential support', 'Prevents premature fabric pinching', 'Compatible with 160mm bags']
  },
  {
    wires: '12 Wire',
    tag: 'Heavy Process OEM',
    diaRange: 'Ø 130mm - 165mm',
    bestFor: 'High air-to-cloth ratios, high static vacuum (-350 to -600 mm WG), and heavy dust cake weights.',
    benefits: ['Maximum fabric lifecycle', 'Eliminates bag chafing against wire', 'Standard for cement & steel OEM']
  },
  {
    wires: '16 & 20 Wire',
    tag: 'High-Temperature & Severe Duty',
    diaRange: 'Ø 150mm - 200mm',
    bestFor: 'Fragile high-temperature media including woven fiberglass, PTFE, and acid-sensitive coal boiler baghouses.',
    benefits: ['Near-circular fabric support', 'Zero fabric sagging between wires', 'Essential for long 6m to 10m bags']
  }
];

// Specifications
const cageSpecs = [
  {
    parameter: 'Longitudinal Wire Count',
    value: '6, 8, 10, 12, 16, or 20 longitudinal wires',
    detail: 'Robotic multi-point resistance welded for burr-free smooth joints.'
  },
  {
    parameter: 'Longitudinal Wire Gauge',
    value: 'Ø 3.0 mm to Ø 4.5 mm (Standard: 3.2mm / 4.0mm)',
    detail: 'High tensile cold-drawn carbon steel or stainless steel wire.'
  },
  {
    parameter: 'Ring Pitch Spacing',
    value: '150 mm to 200 mm standard centers',
    detail: 'Heavy-gauge annular support rings maintaining circular profile.'
  },
  {
    parameter: 'Cage Diameter',
    value: '100 mm to 180 mm standard & custom diameters',
    detail: 'Toleranced to provide optimal 2mm - 4mm clearance inside bags.'
  },
  {
    parameter: 'Cage Length',
    value: '1.0 m to 8.0 m+ (Single-piece or modular split design)',
    detail: 'Straightness tolerance within 1.5mm per meter of overall length.'
  },
  {
    parameter: 'Material of Construction (MOC)',
    value: 'Mild Steel (MS), Carbon Steel, SS 304, SS 316, SS 316L',
    detail: 'Corrosion, acid, and high-temperature metallurgy options.'
  },
  {
    parameter: 'Surface Treatment Options',
    value: 'Electro-Galvanized (GI), Hot-Dip Galvanized, Silicone Epoxy, Passivated',
    detail: 'Protects wire frames against moisture, sulfur oxides, and acid dew points.'
  },
  {
    parameter: 'Venturi Integration',
    value: 'Integrated cast aluminum / spun steel supersonic venturis',
    detail: 'Induces secondary clean air flow to amplify pulse shockwaves.'
  },
  {
    parameter: 'Split Joint Mechanism',
    value: 'Bayonet twist-lock, claw coupler, internal sleeve with lock pins',
    detail: 'Enables quick toolless field assembly under low headroom obstructions.'
  }
];

const FilterCagesPage = () => {
  const [selectedWireConfig, setSelectedWireConfig] = useState(wireConfigurations[2]); // Default 12 Wire
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(cageHdImg);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    wireCount: '12 Wire',
    material: 'Galvanized Mild Steel (GI)',
    diameter: '150 mm',
    length: '3000 mm',
    splitCage: 'No (Single Piece)',
    venturi: 'Yes (Cast Aluminum)',
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
`*Inquiry: Dust Collector Filter Cages - VS Filtech*
----------------------------------------
👤 *Name:* ${formData.name} ${formData.company ? `(${formData.company})` : ''}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || 'Not provided'}
⚙️ *Configuration:* ${formData.wireCount} | ${formData.material}
📐 *Dimensions:* Ø ${formData.diameter} x ${formData.length} Length
🧩 *Split Cage:* ${formData.splitCage} | *Venturi:* ${formData.venturi}
📦 *Quantity:* ${formData.quantity}
📝 *Notes:* ${formData.message || 'Please provide quotation and GA drawing.'}
----------------------------------------
_Sent via vsfiltech.com_`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/918496978456?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="filter-cages-page">
      {/* 1. HERO SECTION */}
      <section 
        className="fc-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(6, 10, 18, 0.75) 0%, rgba(6, 10, 18, 0.94) 80%, #060a12 100%), url(${cageHdImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="fc-hero-ambient"></div>
        <div className="container relative z-10">
          <div className="fc-hero-badge">
            <Sparkles size={14} className="badge-sparkle" />
            <span>PRECISION WIRE-MESH FABRICATION</span>
          </div>

          <h1 className="fc-hero-title">
            Dust Collector Filter Cages | <span className="text-gradient">6 to 20-Wire Support Cages</span>
          </h1>

          <p className="fc-hero-subtitle">
            Engineered structural support cages manufactured on automated multi-head welding machines with zero burrs. 
            Available in 6 / 8 / 10 / 12 / 16 / 20 longitudinal wire construction, stainless steel &amp; carbon steel options, 
            venturi-compatible tops, and twist-lock split configurations.
          </p>

          <div className="fc-hero-cta-row">
            <a href="#cage-rfq" className="btn btn-primary">
              <MessageCircle size={18} />
              <span>Get WhatsApp Quotation</span>
            </a>
            <a href="#wire-configurations" className="btn btn-outline">
              <span>View Wire Configurations</span>
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="fc-metrics-ribbon">
            <div className="metric-box">
              <span className="metric-val">6 to 20</span>
              <span className="metric-lbl">Longitudinal Wires</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">100 - 180 mm</span>
              <span className="metric-lbl">Standard Diameters</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">Up to 8+ Meters</span>
              <span className="metric-lbl">Single / Split Cages</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">SS 304 / GI</span>
              <span className="metric-lbl">Premium Metallurgy</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHOTOGRAPHIC SHOWCASE & TECHNICAL INTRO */}
      <section className="fc-showcase-section">
        <div className="container">
          <div className="fc-showcase-grid">
            {/* Left: HD Photo Showcase with Zoom */}
            <div className="fc-media-col">
              <div className="fc-main-image-card" onClick={() => setLightboxOpen(true)}>
                <img 
                  src={activePhoto} 
                  alt="Industrial Filter Cage Manufacturing - VS Filtech" 
                  className="fc-featured-img" 
                />
                
                <button 
                  type="button" 
                  className="fc-zoom-btn"
                  onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
                >
                  <Maximize2 size={16} />
                  <span>Inspect High Resolution</span>
                </button>

                <div className="fc-image-badge">
                  <span className="live-dot"></span>
                  <span>Robotic Multi-Spot Weld Integrity</span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="fc-thumbnails-grid">
                <div 
                  className={`fc-thumb ${activePhoto === cageHdImg ? 'active' : ''}`}
                  onClick={() => setActivePhoto(cageHdImg)}
                >
                  <img src={cageHdImg} alt="4K Filter Cage View" />
                  <span>4K Studio Cage</span>
                </div>
                <div 
                  className={`fc-thumb ${activePhoto === cageWebp ? 'active' : ''}`}
                  onClick={() => setActivePhoto(cageWebp)}
                >
                  <img src={cageWebp} alt="Filter Cage Frame" />
                  <span>Wire Profile</span>
                </div>
                <div 
                  className={`fc-thumb ${activePhoto === venturiImg ? 'active' : ''}`}
                  onClick={() => setActivePhoto(venturiImg)}
                >
                  <img src={venturiImg} alt="Integrated Venturi" />
                  <span>Cast Venturi</span>
                </div>
                <div 
                  className={`fc-thumb ${activePhoto === fabricationImg ? 'active' : ''}`}
                  onClick={() => setActivePhoto(fabricationImg)}
                >
                  <img src={fabricationImg} alt="Fabrication Floor" />
                  <span>Plant Floor</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Features Breakdown */}
            <div className="fc-content-col">
              <div className="fc-tag">PRECISION MANUFACTURING</div>
              <h2 className="fc-section-title">Engineered to Maximize Filter Bag Lifespan</h2>
              <p className="fc-lead-p">
                A filter cage does not simply hold a bag open; it controls how the fabric flexes under continuous 24/7 reverse pulse jet cycles. Poorly aligned cages or sharp weld burrs cause friction abrasions, pinching, and early fabric rupture.
              </p>
              <p className="fc-lead-p">
                At VS Filtech, our cages are fabricated using automated robotic multi-gun resistance welders ensuring flush, burr-free longitudinal wire connections that guarantee extended bag service life.
              </p>

              {/* Feature Highlights List */}
              <div className="fc-key-features">
                <div className="fc-feature-item">
                  <CheckCircle2 size={18} className="feature-check-icon" />
                  <div>
                    <strong>6 / 8 / 10 / 12 / 16 / 20 Wire Options:</strong>
                    <span>Engineered longitudinal wire counts providing ideal circumferential cloth support.</span>
                  </div>
                </div>

                <div className="fc-feature-item">
                  <CheckCircle2 size={18} className="feature-check-icon" />
                  <div>
                    <strong>Venturi Compatible Designs:</strong>
                    <span>Cast aluminum, spun steel, and drop-in supersonic venturis amplifying secondary cleaning air.</span>
                  </div>
                </div>

                <div className="fc-feature-item">
                  <CheckCircle2 size={18} className="feature-check-icon" />
                  <div>
                    <strong>SS &amp; Carbon Steel Options:</strong>
                    <span>Available in Galvanized Mild Steel (GI), SS 304, SS 316, and SS 316L for harsh chemicals.</span>
                  </div>
                </div>

                <div className="fc-feature-item">
                  <CheckCircle2 size={18} className="feature-check-icon" />
                  <div>
                    <strong>Surface-Treated Corrosion Finishes:</strong>
                    <span>Electro-galvanized, hot-dip galvanized, epoxy powder coated, or high-temperature silicone painted.</span>
                  </div>
                </div>

                <div className="fc-feature-item">
                  <CheckCircle2 size={18} className="feature-check-icon" />
                  <div>
                    <strong>Split Cages Where Required:</strong>
                    <span>Bayonet twist-lock couplings allowing installation in low-overhead height constrained buildings.</span>
                  </div>
                </div>
              </div>

              <div className="fc-action-row">
                <a href="#cage-rfq" className="btn btn-primary">
                  <MessageCircle size={18} />
                  <span>Request Custom Cage Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6 / 8 / 10 / 12 / 20 WIRE CONSTRUCTION BREAKDOWN */}
      <section id="wire-configurations" className="fc-wire-section">
        <div className="container">
          <div className="fc-section-header text-center">
            <div className="fc-tag">STRUCTURAL WIRE PROFILES</div>
            <h2 className="fc-section-title">6 / 8 / 10 / 12 / 20 Wire Construction Guide</h2>
            <p className="fc-section-subtitle">
              The number of vertical longitudinal wires determines bag deflection, cake release dynamics, and fabric fatigue resistance.
            </p>
          </div>

          <div className="fc-wire-cards-grid">
            {wireConfigurations.map((item, idx) => (
              <div 
                key={idx} 
                className={`fc-wire-card ${selectedWireConfig.wires === item.wires ? 'active-wire-card' : ''}`}
                onClick={() => setSelectedWireConfig(item)}
              >
                <div className="wire-card-header">
                  <span className="wire-pill">{item.tag}</span>
                  <span className="wire-dia">{item.diaRange}</span>
                </div>
                <h3 className="wire-title">{item.wires} Construction</h3>
                <p className="wire-best-for">{item.bestFor}</p>

                <div className="wire-benefits-list">
                  {item.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="wire-b-item">
                      <span className="wire-dot"></span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPLIT CAGES & VENTURI ENGINEERING SPOTLIGHT */}
      <section className="fc-split-section">
        <div className="container">
          <div className="fc-split-grid-row">
            {/* Box 1: Split Cages */}
            <div className="fc-spotlight-box">
              <div className="spotlight-tag">LOW HEADROOM SOLUTION</div>
              <h3 className="spotlight-title">Split Cages for Height-Constrained Baghouses</h3>
              <p className="spotlight-desc">
                When plant roofs or overhead piping prevent removing a full 6m or 8m filter cage in a single piece, VS Filtech supplies precision two-piece and three-piece <strong>Split Cages</strong>.
              </p>
              <ul className="spotlight-bullets">
                <li>
                  <CheckCircle2 size={16} className="spot-check" />
                  <span><strong>Bayonet Twist-Lock Couplers:</strong> Toolless 90-degree twist-to-lock connection with stainless steel spring locking detent.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="spot-check" />
                  <span><strong>Claw &amp; Sleeve Couplers:</strong> Heavy duty interlock collars for large-diameter flue gas filter cages.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="spot-check" />
                  <span><strong>Zero Outer Diameter Bulge:</strong> Precision flush coupling that does not abrade or stress the inner filter bag seam.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Venturi Integration */}
            <div className="fc-spotlight-box">
              <div className="spotlight-tag">CLEANING SHOCKWAVE AMPLIFICATION</div>
              <h3 className="spotlight-title">Venturi Compatible Cage Integration</h3>
              <p className="spotlight-desc">
                Supersonic venturis expand high-pressure compressed air jets, inducing secondary ambient air to create deep sonic shockwaves down the entire bag length.
              </p>
              <ul className="spotlight-bullets">
                <li>
                  <CheckCircle2 size={16} className="spot-check" />
                  <span><strong>Graded Cast Aluminum:</strong> Precision aerodynamically tuned Bellmouth nozzle profile for high sonic velocity.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="spot-check" />
                  <span><strong>Deep-Drawn Spun Steel:</strong> Light-gauge durable pressed steel venturis spot-welded securely to top collar.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="spot-check" />
                  <span><strong>Drop-In &amp; Snap-Lock Options:</strong> Removable venturis allowing top cage extraction while venturi remains seated.</span>
                </li>
              </ul>
              <div style={{ marginTop: '20px' }}>
                <Link 
                  to="/products/venturis" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    color: '#38bdf8', 
                    fontWeight: '700', 
                    fontSize: '0.92rem', 
                    textDecoration: 'none',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; }}
                >
                  <span>View Dedicated Supersonic Venturis Page</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DETAILED TECHNICAL SPECIFICATIONS TABLE */}
      <section className="fc-specs-section">
        <div className="container">
          <div className="fc-section-header text-center">
            <div className="fc-tag">ENGINEERING DATA</div>
            <h2 className="fc-section-title">Dust Collector Filter Cage Specifications</h2>
            <p className="fc-section-subtitle">
              Technical parameters and manufacturing tolerances for standard and custom industrial cages.
            </p>
          </div>

          <div className="fc-table-responsive">
            <table className="fc-specs-table">
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Parameter</th>
                  <th style={{ width: '35%' }}>Standard Specifications</th>
                  <th style={{ width: '40%' }}>Fabrication &amp; Quality Notes</th>
                </tr>
              </thead>
              <tbody>
                {cageSpecs.map((row, idx) => (
                  <tr key={idx}>
                    <td className="spec-label-col"><strong>{row.parameter}</strong></td>
                    <td className="spec-val-col">{row.value}</td>
                    <td className="spec-detail-col">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. RFQ / INQUIRY FORM */}
      <section id="cage-rfq" className="fc-rfq-section">
        <div className="container">
          <div className="fc-rfq-card">
            <div className="rfq-header text-center">
              <div className="rfq-badge">
                <MessageCircle size={15} />
                <span>DIRECT TECHNICAL RFQ DESK</span>
              </div>
              <h2 className="rfq-title">Request Filter Cage Sizing &amp; Quotation</h2>
              <p className="rfq-subtitle">
                Fill in your cage parameters below. Submitting opens a formatted inquiry directly in WhatsApp with our cage engineers.
              </p>
            </div>

            {submitted && (
              <div className="form-success-banner">
                <CheckCircle2 size={18} />
                <span>Inquiry formatted! WhatsApp chat launched in a new tab.</span>
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit} className="fc-form">
              <div className="form-row-2">
                <div className="form-field">
                  <label className="field-label">Contact Person Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="field-input" 
                    placeholder="e.g. Amit Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Company / Factory Name</label>
                  <input 
                    type="text" 
                    className="field-input" 
                    placeholder="e.g. Steel / Cement / Chemical Plant"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-field">
                  <label className="field-label">WhatsApp Mobile Number *</label>
                  <input 
                    type="tel" 
                    required 
                    className="field-input" 
                    placeholder="Enter WhatsApp mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Email Address</label>
                  <input 
                    type="email" 
                    className="field-input" 
                    placeholder="engineer@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-3">
                <div className="form-field">
                  <label className="field-label">Wire Construction *</label>
                  <select 
                    className="field-select"
                    value={formData.wireCount}
                    onChange={(e) => setFormData({ ...formData, wireCount: e.target.value })}
                  >
                    <option value="6 Wire">6 Wire Construction</option>
                    <option value="8 Wire">8 Wire Construction</option>
                    <option value="10 Wire">10 Wire Construction</option>
                    <option value="12 Wire">12 Wire Construction (OEM Standard)</option>
                    <option value="16 Wire">16 Wire Construction (Heavy Duty)</option>
                    <option value="20 Wire">20 Wire Construction (High Temperature)</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="field-label">Material of Construction (MOC) *</label>
                  <select 
                    className="field-select"
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                  >
                    <option value="Galvanized Mild Steel (GI)">Galvanized Mild Steel (GI)</option>
                    <option value="Stainless Steel 304 (SS 304)">Stainless Steel 304 (SS 304)</option>
                    <option value="Stainless Steel 316 (SS 316)">Stainless Steel 316 (SS 316)</option>
                    <option value="Mild Steel with Epoxy Paint">Mild Steel with Epoxy Paint</option>
                    <option value="High-Temp Silicone Coated">High-Temp Silicone Coated</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="field-label">Split Cage Required?</label>
                  <select 
                    className="field-select"
                    value={formData.splitCage}
                    onChange={(e) => setFormData({ ...formData, splitCage: e.target.value })}
                  >
                    <option value="No (Single Piece)">No (Single Piece)</option>
                    <option value="Yes - 2 Piece Twist Lock">Yes - 2 Piece Twist Lock</option>
                    <option value="Yes - 3 Piece Twist Lock">Yes - 3 Piece Twist Lock</option>
                  </select>
                </div>
              </div>

              <div className="form-row-3">
                <div className="form-field">
                  <label className="field-label">Cage Outer Diameter</label>
                  <input 
                    type="text" 
                    className="field-input" 
                    placeholder="e.g. 120mm / 150mm / 160mm"
                    value={formData.diameter}
                    onChange={(e) => setFormData({ ...formData, diameter: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Cage Overall Length</label>
                  <input 
                    type="text" 
                    className="field-input" 
                    placeholder="e.g. 3000mm / 6000mm"
                    value={formData.length}
                    onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Quantity Required</label>
                  <input 
                    type="text" 
                    className="field-input" 
                    placeholder="e.g. 200 pcs / 1000 pcs"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">Additional Operating Details / Existing OEM Model</label>
                <textarea 
                  rows="3" 
                  className="field-textarea" 
                  placeholder="Mention tubesheet hole diameter, existing OEM baghouse brand, gas temperature, or attach drawing via WhatsApp..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-whatsapp-submit">
                <MessageCircle size={20} />
                <span>Send Filter Cage Inquiry via WhatsApp</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 7. HIGH RESOLUTION LIGHTBOX */}
      {lightboxOpen && (
        <div className="fc-lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <div className="fc-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="fc-lightbox-close" 
              onClick={() => setLightboxOpen(false)}
            >
              <X size={26} />
            </button>
            <div className="fc-lightbox-img-wrap">
              <img src={activePhoto} alt="High Resolution Inspection" />
            </div>
            <div className="fc-lightbox-caption">
              <strong>VS Filtech Dust Collector Filter Cage</strong>
              <span>Robotic automated resistance welding ensures smooth, burr-free longitudinal wires with strict tolerance control.</span>
            </div>
          </div>
        </div>
      )}

      {/* 8. CROSS LINK TO FILTER BAGS */}
      <section className="fc-crosslink-bar">
        <div className="container">
          <div className="crosslink-content">
            <div>
              <h4>Pairing Cages with Filter Bags?</h4>
              <p>We manufacture matching needlefelt and high-temperature filter bags in Polyester, PPS, Nomex, and PTFE.</p>
            </div>
            <Link to="/products/filter-bag" className="btn btn-primary">
              <span>Explore Industrial Filter Bags</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterCagesPage;
