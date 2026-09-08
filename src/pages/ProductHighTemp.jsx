import { useState, useEffect } from 'react';
import { 
  Flame, 
  Wind, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Gauge, 
  Send,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Maximize2,
  X,
  Cpu,
  Factory,
  Thermometer,
  Wrench,
  ShieldAlert
} from 'lucide-react';
import './ProductHighTemp.css';

// High definition assets
import highTempBagsHd from '../assets/high_temp_bags_hd.jpg';
import highTempPageBg from '../assets/high_temp_page_bg.jpg';
import plantFloorImg from '../assets/slide_new_4.jpg';
import highTempAkjImg from '../assets/high_temp_akj.jpg';

// Features from AKJ high temp page
const keyFeatures = [
  'Excellent heat resistance for extreme thermal operations (up to 280°C continuous, 290°C peak surges)',
  'Strong and durable construction with woven scrim backing for prolonged bag lifecycle',
  'High filtration efficiency exceeding 99.5% with minimal particulate emission (<5 mg/Nm³ with ePTFE)',
  'Outstanding chemical resistance against acidic flue gases, SOx, NOx, and moisture hydrolysis',
  'Low maintenance requirement, non-stick dust cake release, and quick snap-band tubesheet installation',
  'Engineered for continuous 24/7 industrial operations without thermal degradation or shrinkage'
];

// Media Portfolio (Nomex, Fiberglass, PPS, PTFE, P84)
const mediaPortfolio = [
  {
    name: 'Woven Fiberglass + ePTFE',
    tag: 'Up to 280°C',
    tempMax: '280°C continuous / 290°C surge',
    acidRating: 'Excellent',
    alkaliRating: 'Fair',
    desc: 'Highest tensile strength and non-combustible media. Equipped with expanded PTFE membrane for ultra-low emission capture in heavy cement kilns and coal boilers.',
    bestFor: 'Cement Kilns, Power Boilers, Carbon Black'
  },
  {
    name: 'Nomex (Aramid) Filter Bags',
    tag: 'Up to 220°C',
    tempMax: '200°C - 220°C continuous',
    acidRating: 'Fair',
    alkaliRating: 'Good',
    desc: 'High mechanical abrasion resilience and thermal endurance. Preferred industry standard for asphalt mixing drum dryers and non-ferrous foundry baghouses.',
    bestFor: 'Asphalt Plants, Metal Foundries, Rotary Dryers'
  },
  {
    name: 'PPS (Ryton) Filter Bags',
    tag: 'Up to 200°C Acid Proof',
    tempMax: '190°C - 200°C continuous',
    acidRating: 'Exceptional',
    alkaliRating: 'Excellent',
    desc: 'Superior resistance against sulfur oxides (SOx) and acid dewpoint condensation in combustion flue gases. Widely installed in waste-to-energy incinerators.',
    bestFor: 'Coal Boilers, Waste Incinerators, Smelters'
  },
  {
    name: 'PTFE (Teflon) Filter Bags',
    tag: 'Universal Chemical Proof',
    tempMax: '260°C continuous',
    acidRating: 'Maximum (Universal)',
    alkaliRating: 'Maximum (Universal)',
    desc: '100% pure fluoropolymer synthetic fiber. Unmatched chemical inertness across the entire pH 0-14 spectrum for the harshest corrosive industrial environments.',
    bestFor: 'Chemical Reactors, Hazardous Waste, Titanium Plants'
  },
  {
    name: 'P84 (Polyimide) Filter Bags',
    tag: '3x Surface Area',
    tempMax: '240°C - 260°C continuous',
    acidRating: 'Very Good',
    alkaliRating: 'Fair',
    desc: 'Trilobal multi-lobe fiber structure providing 3x higher active filtration surface area. Yields lowest differential pressure and superior sub-micron dust retention.',
    bestFor: 'Cement Clinker Mills, Smelting, Glass Furnaces'
  }
];

// Essential Manufacturing Components (from AKJ text)
const essentialComponents = [
  {
    icon: <Flame size={24} />,
    amber: true,
    title: 'High-Temp Media Needlefelts',
    desc: 'Virgin synthetic fibers (Nomex, PPS, PTFE, P84) and texturized woven fiberglass calibrated for exact air permeability and particulate interception.'
  },
  {
    icon: <ShieldCheck size={24} />,
    amber: false,
    title: 'High-Tensile Base Scrim Cloth',
    desc: 'Woven monofilament reinforcement scrim integrated inside the needlefelt to eliminate longitudinal bag elongation and pulse-flex fatigue.'
  },
  {
    icon: <Wrench size={24} />,
    amber: true,
    title: '100% Heat-Resistant PTFE Threads',
    desc: 'Sewn exclusively with multi-ply PTFE fluoropolymer and aramid threads that resist high operating temperatures and aggressive chemical fumes.'
  },
  {
    icon: <Layers size={24} />,
    amber: false,
    title: 'Reinforced Snap Collar & Wear Cuffs',
    desc: 'Laser-welded stainless steel spring snap bands, double-layer bottom wear cuffs, and reinforced collar cuffs ensuring zero gas bypass.'
  },
  {
    icon: <Activity size={24} />,
    amber: true,
    title: 'Protective ePTFE Membrane & Dips',
    desc: 'Optional expanded PTFE membrane lamination, silicone-graphite coating, and oleophobic chemical bath for effortless dust cake discharge.'
  },
  {
    icon: <Gauge size={24} />,
    amber: false,
    title: 'Precision Support Metal Cages',
    desc: 'Manufactured with 10 to 24 longitudinal wires in galvanized or SS304/SS316 steel with integral venturis for laminar reverse pulse jet flow.'
  }
];

// Engineering Specification Table
const specTableData = [
  { param: 'Media Materials', desc: 'High-temperature synthetic needlefelts and woven glass textiles', val: 'Woven Fiberglass, Nomex (Aramid), PPS (Ryton), PTFE (Teflon), P84' },
  { param: 'Continuous Temperature', desc: 'Standard operating thermal limit without fabric shrinkage', val: 'Up to 280°C (536°F) continuous' },
  { param: 'Peak Surge Temperature', desc: 'Short-term thermal excursion limit without fiber damage', val: 'Up to 290°C (554°F) peak surges' },
  { param: 'Fabric Weight', desc: 'Mass density of filter media per unit area', val: '450 g/m² to 900 g/m² (Custom heavy weights available)' },
  { param: 'Fabric Thickness', desc: 'Calibrated depth filtration layer thickness', val: '0.4 mm to 1.8 mm' },
  { param: 'Filtration Efficiency', desc: 'Sub-micron particulate collection rate under high velocity', val: 'Exceeds 99.5% (>99.9% with micro-porous ePTFE membrane)' },
  { param: 'Air Permeability', desc: 'Air passage volume under nominal differential pressure', val: '8 to 15 m³/m²/min @ 200 Pa' },
  { param: 'Acid & Chemical Resilience', desc: 'Resistance against SOx, NOx, hydrochloric, and organic acids', val: 'PPS & PTFE provide maximum resilience; Fiberglass acid-dipped' },
  { param: 'Top Collar Styles', desc: 'Tubesheet mounting mechanisms for quick replacement', val: 'Spring Steel Snap Band, Cord Top, Flange Ring, Raw Edge' },
  { param: 'Cleaning Compatibility', desc: 'Industrial baghouse dust dislodgement systems', val: 'High-Pressure Pulse Jet (3 to 6 bar), Reverse Air, Shaker' }
];

// Applications
const applicationsList = [
  { title: 'Cement & Lime Plants', desc: 'Kiln exhaust baghouses, preheater towers, raw mills, and clinker coolers handling high heat loads up to 280°C.' },
  { title: 'Steel & Foundries', desc: 'Electric Arc Furnaces (EAF), induction melting furnaces, cupola exhausts, and blast furnace off-gas cleaning.' },
  { title: 'Thermal Power Boilers', desc: 'Pulverized coal boilers, circulating fluidized bed combustion (CFBC), and fly ash extraction systems.' },
  { title: 'Waste Incinerators', desc: 'Municipal solid waste, hazardous chemical incinerators, and acid gas scrubbing baghouses.' },
  { title: 'Asphalt & Aggregate Plants', desc: 'Rotary drum dryers, hot stone aggregate elevators, and asphalt batch mix dust collectors.' },
  { title: 'Non-Ferrous Smelting', desc: 'Secondary aluminum, copper smelters, and lead recovery smelting foundries with corrosive flue gases.' }
];

const ProductHighTemp = () => {
  const [activeView, setActiveView] = useState('hd'); // 'hd' | 'plant' | 'akj'
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    material: 'Woven Fiberglass + ePTFE (Up to 280°C)',
    temp: 'Up to 260°C',
    dimensions: '',
    message: ''
  });

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const waText = 
`*RFQ: High Temperature Filter Bags - VS Filtech*
----------------------------------------
👤 *Name / Company:* ${formData.name} ${formData.company ? `(${formData.company})` : ''}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || 'Not provided'}
🔥 *Media Material:* ${formData.material}
🌡️ *Operating Temperature:* ${formData.temp}
📐 *Dimensions/Quantity:* ${formData.dimensions || 'Standard / Custom'}
📝 *Gas / Dust Conditions:* ${formData.message || 'Please provide technical datasheet & quotation.'}
----------------------------------------
_Sent via vsfiltech.com_`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/911234567890?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="high-temp-page">
      {/* 1. HERO SECTION (NO CLIPPING, AMPLE BREATHING ROOM) */}
      <section 
        className="ht-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(6, 10, 18, 0.76) 0%, rgba(6, 10, 18, 0.92) 80%, #060a12 100%), url(${highTempPageBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="ht-hero-ambient"></div>
        <div className="container relative z-10">
          <div className="ht-hero-badge">
            <Flame size={15} className="ht-badge-fire" />
            <span>THERMAL RESILIENCE UP TO 280°C (SURGE 290°C)</span>
          </div>

          <h1 className="ht-hero-title">
            High Temperature Filter Bag Manufacturers, Suppliers | <span className="text-gradient">High Temperature Bag Filter Suppliers in India</span>
          </h1>

          <p className="ht-hero-subtitle">
            VS Filtech manufactures and supplies premier high temperature bag filters using premium quality materials like fiberglass, aramid (Nomex), PPS, PTFE, and P84, ensuring excellent thermal resistance, chemical stability, and long service life across demanding industrial operations.
          </p>

          <div className="ht-hero-cta-row">
            <a href="#high-temp-rfq" className="btn btn-primary">
              <MessageCircle size={18} />
              <span>Get WhatsApp Quotation</span>
            </a>
            <a href="#technical-specs" className="btn btn-outline">
              <span>View Technical Specs</span>
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="ht-metrics-ribbon">
            <div className="ht-metric-box">
              <span className="ht-metric-val val-amber">Up to 280°C</span>
              <span className="ht-metric-lbl">Continuous Rating</span>
            </div>
            <div className="ht-metric-divider"></div>
            <div className="ht-metric-box">
              <span className="ht-metric-val">290°C Peak</span>
              <span className="ht-metric-lbl">Surge Tolerance</span>
            </div>
            <div className="ht-metric-divider"></div>
            <div className="ht-metric-box">
              <span className="ht-metric-val val-amber">&lt;5 mg/Nm³</span>
              <span className="ht-metric-lbl">ePTFE Particulate Limit</span>
            </div>
            <div className="ht-metric-divider"></div>
            <div className="ht-metric-box">
              <span className="ht-metric-val">0% Shrink</span>
              <span className="ht-metric-lbl">Thermal Stability</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & PRODUCT SHOWCASE */}
      <section className="ht-overview-section">
        <div className="container">
          <div className="ht-split-grid">
            
            {/* Left: Product Imagery with CAD frame & View Switcher */}
            <div className="ht-media-col">
              <div className="ht-view-toggle-bar">
                <button 
                  type="button"
                  className={`ht-toggle-btn ${activeView === 'hd' ? 'active' : ''}`}
                  onClick={() => setActiveView('hd')}
                >
                  <Sparkles size={14} />
                  <span>4K Studio Lineup</span>
                </button>
                <button 
                  type="button"
                  className={`ht-toggle-btn ${activeView === 'plant' ? 'active' : ''}`}
                  onClick={() => setActiveView('plant')}
                >
                  <Cpu size={14} />
                  <span>Stitching Floor</span>
                </button>
                <button 
                  type="button"
                  className={`ht-toggle-btn ${activeView === 'akj' ? 'active' : ''}`}
                  onClick={() => setActiveView('akj')}
                >
                  <Layers size={14} />
                  <span>AKJ Reference Spec</span>
                </button>
              </div>

              <div className="ht-image-card" onClick={() => setLightboxOpen(true)}>
                <img 
                  src={
                    activeView === 'hd' ? highTempBagsHd : 
                    activeView === 'plant' ? plantFloorImg : 
                    highTempAkjImg
                  } 
                  alt="High Temperature Filter Bag Manufacturer - VS Filtech" 
                  className="ht-featured-img" 
                />
                
                {/* Fullscreen HD trigger button */}
                <button 
                  type="button"
                  className="ht-zoom-trigger"
                  onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
                  aria-label="View Fullscreen HD"
                >
                  <Maximize2 size={16} />
                  <span>Full HD View</span>
                </button>

                {/* Top Badge */}
                <div className="ht-image-top-tag">
                  <span className="live-dot-amber"></span>
                  <span>
                    {activeView === 'hd' && '4K High-Temp Media Lineup'}
                    {activeView === 'plant' && 'Industrial Plant Stitching Floor'}
                    {activeView === 'akj' && 'High Temperature Baghouse Media'}
                  </span>
                </div>

                <div className="ht-image-overlay-card">
                  <Flame size={28} className="ht-overlay-icon" />
                  <div>
                    <h4>Certified High-Temperature Grade</h4>
                    <p>Woven scrim, PTFE seam thread & laser snap-band collars</p>
                  </div>
                </div>
              </div>

              {/* Interactive Thumbnail Previews */}
              <div className="ht-thumbnails-row">
                <div 
                  className={`ht-thumb-item ${activeView === 'hd' ? 'active' : ''}`}
                  onClick={() => setActiveView('hd')}
                >
                  <img src={highTempBagsHd} alt="4K Studio Lineup" />
                  <span>4K Studio View</span>
                </div>
                <div 
                  className={`ht-thumb-item ${activeView === 'plant' ? 'active' : ''}`}
                  onClick={() => setActiveView('plant')}
                >
                  <img src={plantFloorImg} alt="Plant Stitching Floor" />
                  <span>Factory Floor</span>
                </div>
                <div 
                  className={`ht-thumb-item ${activeView === 'akj' ? 'active' : ''}`}
                  onClick={() => setActiveView('akj')}
                >
                  <img src={highTempAkjImg} alt="AKJ Reference Spec" />
                  <span>Reference Spec</span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Content */}
            <div className="ht-text-col">
              <div className="ht-section-tag">HIGH HEAT DUST EXTRACTION</div>
              <h2 className="ht-section-title">High Temperature Bag Filter Suppliers in India</h2>
              <p className="ht-paragraph">
                High temperature filter bags are widely used in industries such as cement, steel, power plants, chemical processing, and foundries where filtration under high heat conditions is essential.
              </p>
              <p className="ht-paragraph">
                These filter bags are engineered to provide efficient dust collection and air filtration while maintaining consistent performance even in demanding conditions. With advanced stitching techniques and precision design, they ensure minimal leakage and maximum filtration efficiency.
              </p>

              {/* Quality Assurance Pills */}
              <div className="ht-assurance-pills">
                <div className="ht-assurance-pill">
                  <span className="ht-assurance-dot"></span>
                  <span>Zero Thermal Shrinkage</span>
                </div>
                <div className="ht-assurance-pill">
                  <span className="ht-assurance-dot"></span>
                  <span>Acid & Alkali Resistant</span>
                </div>
                <div className="ht-assurance-pill">
                  <span className="ht-assurance-dot"></span>
                  <span>PTFE Thread Sewn</span>
                </div>
                <div className="ht-assurance-pill">
                  <span className="ht-assurance-dot"></span>
                  <span>100% Snap-Band Sealed</span>
                </div>
              </div>

              {/* Bullet Features Grid */}
              <div className="ht-features-list">
                <h3 className="ht-features-title">Features of High Temperature Filter Bags:</h3>
                <div className="ht-features-grid">
                  {keyFeatures.map((feat, idx) => (
                    <div key={idx} className="ht-feat-item">
                      <CheckCircle2 size={18} className="ht-feat-check" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ht-overview-cta">
                <a href="#high-temp-rfq" className="btn btn-primary">
                  <MessageCircle size={18} />
                  <span>Get Custom High-Temp Quotation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIGH TEMP MEDIA CARDS (Nomex, Fiberglass, PPS, PTFE, P84) */}
      <section className="ht-media-section">
        <div className="container">
          <div className="ht-section-header text-center">
            <div className="ht-section-tag">MEDIA PORTFOLIO</div>
            <h2 className="ht-section-title">Engineered High Temperature Media Range</h2>
            <p className="ht-hero-subtitle">
              At VS Filtech, our high-temperature media are specifically selected to withstand aggressive chemical flue gases, severe thermal surges, and mechanical pulse jet cleaning.
            </p>
          </div>

          <div className="ht-media-cards-grid">
            {mediaPortfolio.map((media, idx) => (
              <div key={idx} className="ht-media-card">
                <div className="ht-media-card-header">
                  <span className="ht-temp-tag">
                    <Thermometer size={13} />
                    <span>{media.tag}</span>
                  </span>
                </div>
                <h3 className="ht-media-title">{media.name}</h3>
                <p className="ht-media-desc">{media.desc}</p>
                <div className="ht-media-specs-row">
                  <div className="ht-spec-mini">
                    <span className="ht-spec-mini-lbl">Acid Resistance</span>
                    <span className="ht-spec-mini-val">{media.acidRating}</span>
                  </div>
                  <div className="ht-spec-mini">
                    <span className="ht-spec-mini-lbl">Alkali Resistance</span>
                    <span className="ht-spec-mini-val">{media.alkaliRating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ESSENTIAL MANUFACTURING COMPONENTS (From AKJ text) */}
      <section className="ht-components-section">
        <div className="container">
          <div className="ht-section-header text-center">
            <div className="ht-section-tag">PRECISION FABRICATION</div>
            <h2 className="ht-section-title">Essential Construction Components</h2>
            <p className="ht-hero-subtitle">
              Our high-performance industrial bag filters are manufactured using essential components engineered for uncompromising durability under extreme thermal loads.
            </p>
          </div>

          <div className="ht-components-grid">
            {essentialComponents.map((comp, idx) => (
              <div key={idx} className="ht-component-card">
                <div className={`ht-comp-icon-box ${comp.amber ? 'amber' : ''}`}>
                  {comp.icon}
                </div>
                <h3 className="ht-comp-title">{comp.title}</h3>
                <p className="ht-comp-desc">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPECIFICATION TABLE */}
      <section id="technical-specs" className="ht-spec-section">
        <div className="container">
          <div className="ht-section-header text-center">
            <div className="ht-section-tag">ENGINEERING DATA</div>
            <h2 className="ht-section-title">High Temperature Filter Bag Specifications</h2>
            <p className="ht-hero-subtitle">
              Verified physical, thermal, and chemical tolerances for industrial baghouse applications.
            </p>
          </div>

          <div className="ht-table-card">
            <div className="ht-table-responsive">
              <table className="ht-spec-table">
                <thead>
                  <tr>
                    <th>Specification Parameter</th>
                    <th>Engineering Description</th>
                    <th>Typical Values / Standards</th>
                  </tr>
                </thead>
                <tbody>
                  {specTableData.map((row, idx) => (
                    <tr key={idx}>
                      <td className="ht-param-col">{row.param}</td>
                      <td>{row.desc}</td>
                      <td className="ht-val-col">{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. APPLICATIONS SECTION */}
      <section className="ht-apps-section">
        <div className="container">
          <div className="ht-section-header text-center">
            <div className="ht-section-tag">INDUSTRIAL DEPLOYMENT</div>
            <h2 className="ht-section-title">Key Industrial Applications</h2>
            <p className="ht-hero-subtitle">
              Designed for mission-critical dust extraction and flue gas filtration in high-heat industrial environments across India.
            </p>
          </div>

          <div className="ht-apps-grid">
            {applicationsList.map((app, idx) => (
              <div key={idx} className="ht-app-card">
                <h3 className="ht-app-card-title">
                  <span className="ht-app-dot"></span>
                  <span>{app.title}</span>
                </h3>
                <p className="ht-app-card-desc">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RFQ INQUIRY SECTION */}
      <section id="high-temp-rfq" className="ht-rfq-section">
        <div className="container">
          <div className="ht-rfq-card">
            <div className="ht-rfq-header">
              <div className="ht-rfq-badge">
                <MessageCircle size={15} />
                <span>DIRECT WHATSAPP RFQ DESK</span>
              </div>
              <h2 className="ht-rfq-title">Request High-Temperature Engineering Quotation</h2>
              <p className="ht-rfq-subtitle">
                Fill details below — submitting opens your inquiry directly in WhatsApp with our filtration specialists at <strong>+91 1234567890</strong>.
              </p>
            </div>

            {submitted && (
              <div className="form-success-banner">
                <CheckCircle2 size={18} />
                <span>Inquiry formatted! WhatsApp chat launched in a new tab.</span>
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit} className="rfq-form">
              <div className="form-row-2">
                <div className="form-field">
                  <label className="field-label">Your Name / Contact Person *</label>
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
                  <label className="field-label">Company / Plant Name</label>
                  <input 
                    type="text" 
                    className="field-input" 
                    placeholder="e.g. UltraTech Cement / JSW Steel"
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
                    placeholder="+91 1234567890"
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

              <div className="form-row-2">
                <div className="form-field">
                  <label className="field-label">Target Media Material *</label>
                  <select 
                    className="field-select"
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                  >
                    <option value="Woven Fiberglass + ePTFE (Up to 280°C)">Woven Fiberglass + ePTFE Membrane (Up to 280°C)</option>
                    <option value="Nomex (Aramid) Filter Bags (Up to 220°C)">Nomex (Aramid) Filter Bags (Up to 220°C)</option>
                    <option value="PPS (Ryton) Filter Bags (Up to 200°C Acid Proof)">PPS (Ryton) Filter Bags (Up to 200°C Acid Proof)</option>
                    <option value="PTFE (Teflon) Filter Bags (Universal 260°C)">PTFE (Teflon) Filter Bags (Universal Chemical 260°C)</option>
                    <option value="P84 (Polyimide) Filter Bags (Up to 260°C)">P84 (Polyimide) Filter Bags (Up to 260°C)</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="field-label">Operating Gas Temperature</label>
                  <input 
                    type="text" 
                    className="field-input" 
                    placeholder="e.g. 180°C continuous, 220°C peak"
                    value={formData.temp}
                    onChange={(e) => setFormData({ ...formData, temp: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-field">
                  <label className="field-label">Bag Dimensions / Quantity</label>
                  <input 
                    type="text" 
                    className="field-input" 
                    placeholder="e.g. Dia 150mm x Length 3000mm, 600 pcs"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Process Industry / Equipment</label>
                  <input 
                    type="text" 
                    className="field-input" 
                    placeholder="e.g. Kiln Baghouse / Asphalt Dryer"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">Flue Gas Chemistry & Particulate Conditions</label>
                <textarea 
                  rows="3" 
                  className="field-textarea" 
                  placeholder="Mention moisture levels, acid dew point, presence of SOx/NOx, or existing baghouse differential pressure..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-whatsapp-submit">
                <MessageCircle size={20} />
                <span>Send High-Temp RFQ via WhatsApp</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. ULTRA-HD LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="ht-lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <div className="ht-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="ht-lightbox-close" 
              onClick={() => setLightboxOpen(false)}
              aria-label="Close High Resolution View"
            >
              <X size={26} />
            </button>
            <div className="ht-lightbox-media-wrapper">
              <img 
                src={
                  activeView === 'hd' ? highTempBagsHd : 
                  activeView === 'plant' ? plantFloorImg : 
                  highTempAkjImg
                } 
                alt="High Resolution High Temperature Filter Bag Inspection - VS Filtech" 
                className="ht-lightbox-img" 
              />
            </div>
            <div className="ht-lightbox-footer">
              <div className="ht-lightbox-badge">
                <Sparkles size={14} />
                <span>ULTRA HIGH DEFINITION INSPECTION</span>
              </div>
              <h3 className="ht-lightbox-title">
                {activeView === 'hd' && '4K Studio Photography: High Temperature Filter Bags (Nomex, Fiberglass, PPS, PTFE, P84)'}
                {activeView === 'plant' && 'Industrial Manufacturing Floor: Automated Multi-Needle Heavy-Duty Stitching'}
                {activeView === 'akj' && 'High Temperature Bag Filter Media Construction'}
              </h3>
              <p className="ht-lightbox-sub">
                Engineered by VS Filtech with thermal-resistant PTFE sewing thread, laser-welded snap bands, and reinforced double cuffs.
              </p>
              <div className="ht-lightbox-actions">
                <button 
                  type="button" 
                  className={`btn-lightbox-switch ${activeView === 'hd' ? 'active' : ''}`}
                  onClick={() => setActiveView('hd')}
                >
                  Ultra HD Studio
                </button>
                <button 
                  type="button" 
                  className={`btn-lightbox-switch ${activeView === 'plant' ? 'active' : ''}`}
                  onClick={() => setActiveView('plant')}
                >
                  Factory Floor
                </button>
                <button 
                  type="button" 
                  className={`btn-lightbox-switch ${activeView === 'akj' ? 'active' : ''}`}
                  onClick={() => setActiveView('akj')}
                >
                  AKJ Reference
                </button>
                <a href="#high-temp-rfq" className="btn btn-primary" onClick={() => setLightboxOpen(false)}>
                  <MessageCircle size={16} />
                  <span>Get Quotation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductHighTemp;
