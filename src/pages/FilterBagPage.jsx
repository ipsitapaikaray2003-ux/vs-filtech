import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Flame, 
  Wind, 
  Layers, 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  ArrowRight, 
  X, 
  Sparkles, 
  Gauge, 
  Cpu, 
  ExternalLink,
  ChevronRight,
  Info,
  Maximize2
} from 'lucide-react';
import './FilterBagPage.css';

// Product images downloaded from AKJ page
import filterBagMainImg from '../assets/filter_bag_main.jpg';
import dustCollectorImg from '../assets/dust_collector_system.webp';
import idFanImg from '../assets/id_fan.jpg';
import cycloneImg from '../assets/cyclone_dust_collector.webp';
import pleatedBagImg from '../assets/pleated_filter_bag.jpeg';
import filterCageImg from '../assets/filter_cage.webp';
import venturiImg from '../assets/metal_venturi.jpg';
import solenoidValveImg from '../assets/solenoid_valve.webp';
import rotaryAirLockImg from '../assets/rotary_air_lock.webp';

// Features from AKJ page
const keyFeatures = [
  'High filtration efficiency with minimal pressure drop',
  'Excellent dust holding capacity for prolonged bag life',
  'High heat, chemical, and abrasive particulate resistance',
  'Custom sizes, collar styles, and fabric types available',
  'Easy snap-band installation and tubesheet replacement',
  'Long service life and significantly reduced maintenance costs',
  'Suitable for both gas emission control and liquid clarification'
];

// Specifications table from AKJ page
const specTableData = [
  {
    parameter: 'Media Material',
    description: 'The material from which the filter bag is made, affecting its durability and filtration efficiency',
    value: 'Woven Fiberglass, Nomex (Aramid), PPS (Ryton), PTFE (Teflon), Polyester, Polypropylene, P84'
  },
  {
    parameter: 'Bag Dimensions',
    description: 'The size and shape of the filter bag to ensure proper fit and functionality in OEM baghouses',
    value: 'Length: 3 to 12 feet (1m to 6m) | Diameter: 4 to 8 inches (100mm to 200mm)'
  },
  {
    parameter: 'Thickness',
    description: 'Fabric thickness determining particulate interception and mechanical integrity',
    value: '0.3 mm to 0.9 mm (Custom needlefelts up to 1.5 mm)'
  },
  {
    parameter: 'Fabric Weight',
    description: 'Weight of the filter bag media in grams per square meter',
    value: '350 g/m² to 900 g/m²'
  },
  {
    parameter: 'Filtration Efficiency',
    description: 'The ability of the filter bag to capture sub-micron dust particles',
    value: 'Exceeds 99.5% (Up to 99.9% with ePTFE membrane)'
  },
  {
    parameter: 'Air Permeability',
    description: 'Measurement of how easily air passes through clean filter media',
    value: '8 to 15 m³/m²/min @ 200 Pa'
  },
  {
    parameter: 'Temperature Resistance',
    description: 'Maximum operating temperature without thermal degradation or shrinkage',
    value: 'Up to 280°C (536°F) continuous; 290°C (554°F) short-term surge'
  },
  {
    parameter: 'Chemical Resistance',
    description: 'Resilience against acid dewpoint, alkaline flue gases, and organic solvents',
    value: 'Stable in most corrosive mediums; PTFE & PPS engineered for harsh acid/alkali conditions'
  },
  {
    parameter: 'Cleaning Method',
    description: 'Methods for dislodging the dust cake during active baghouse operation',
    value: 'Pulse Jet Cleaning, Reverse Air, Mechanical Shaking, Ultrasonic Bath'
  },
  {
    parameter: 'Customizations',
    description: 'Options for tailoring the filter bag to specific OEM plant needs',
    value: 'Spring Steel Snap Bands, Silicone O-Rings, Cord Tops, PTFE Seam Tape, Antistatic Ground Wires'
  }
];

// 6 Filter Bag Varieties
const filterBagVarieties = [
  {
    name: 'Pleated Filter Bags',
    tag: '3x Surface Area',
    desc: 'Provides larger filtration area and superior dust removal efficiency without increasing baghouse footprint.'
  },
  {
    name: 'Nomex (Aramid) Filter Bags',
    tag: 'Up to 220°C',
    desc: 'High thermal endurance for asphalt mixing, metal foundries, cement kiln exhaust, and smelting operations.'
  },
  {
    name: 'Polyester Filter Bags',
    tag: 'General Industrial',
    desc: 'High mechanical strength and cost-effective filtration for woodworking, grain processing, and cement mills.'
  },
  {
    name: 'PTFE (Teflon) Filter Bags',
    tag: 'Universal Chemical',
    desc: 'Unmatched chemical resistance for highly acidic environments, municipal waste incinerators, and chemical plants.'
  },
  {
    name: 'Anti-Static Filter Bags',
    tag: 'Explosion Proof',
    desc: 'Woven with conductive stainless steel or carbon fibers to prevent static charge buildup in explosive atmospheres.'
  },
  {
    name: 'Liquid Filter Bags',
    tag: '1 to 200 Micron',
    desc: 'Engineered for industrial water treatment, solvents, paints, chemical processing, and beverage clarification.'
  }
];

// 9 Industrial Systems & Spares (Promo Boxes with Read More)
const promoProducts = [
  {
    id: 'dust-collector-system',
    title: 'Dust Collector System',
    img: dustCollectorImg,
    shortDesc: 'Implementing advanced dust collector systems to enhance workplace safety and environmental responsibility.',
    fullDesc: 'VS Filtech designs, manufactures, and commissions industrial pulse-jet dust collector systems. Engineered to handle large volumetric gas flows with continuous automated cleaning, heavy-duty tubesheets, and modular casing for seamless plant expansion.',
    specs: ['Flow Range: 1,000 to 150,000 CFM', 'Efficiency: >99.9% particulate collection', 'Cleaning: Automated timer-controlled pulse jet', 'Tubesheet: CNC laser cut 4mm-6mm mild/stainless steel'],
    apps: ['Cement Plants', 'Steel & Foundry', 'Power Generation', 'Chemical Plants']
  },
  {
    id: 'id-fans',
    title: 'ID Fans (Induced Draft Fans)',
    img: idFanImg,
    shortDesc: 'Deploying efficient ID fans for optimal ventilation and process control in industrial operations.',
    fullDesc: 'High-efficiency heavy-duty industrial Induced Draft (ID) fans precision balanced to ISO 1940 standards. Designed to sustain negative draft across complex duct networks, cyclones, and baghouse compartments under extreme dust loading.',
    specs: ['Airflow: Up to 250,000 m³/hr', 'Static Pressure: 150 mm to 1800 mm WG', 'Impeller: Backward curved, radial tipped, aerofoil', 'Balancing: Dynamic multi-plane balancing'],
    apps: ['Boiler Exhaust', 'Rotary Kilns', 'Baghouse Ventilation', 'Furnace Draft']
  },
  {
    id: 'cyclone-dust-collector',
    title: 'Cyclone Dust Collector',
    img: cycloneImg,
    shortDesc: 'Utilizing cyclone dust collectors for effective particulate separation and cleaner air in industrial environments.',
    fullDesc: 'Mechanical centrifugal separators installed as effective pre-cleaners upstream of baghouses. Captures abrasive and coarse particles (above 10 microns), significantly decreasing dust loading on fabric filter bags and extending bag lifecycle by up to 2.5x.',
    specs: ['Efficiency: 85-92% on coarse particulate', 'Inlet Velocity: 15 to 22 m/s', 'Construction: Abrasion-resistant Hardox / MS liner', 'Pressure Drop: Low 70 - 120 mm WG'],
    apps: ['Woodworking Mills', 'Grain Handling', 'Sand Blasting', 'Pre-filtration for Baghouses']
  },
  {
    id: 'filter-bag',
    title: 'Industrial Filter Bags',
    img: filterBagMainImg,
    shortDesc: 'Enhancing air quality with high-performance filter bags in industrial filtration systems.',
    fullDesc: 'Fabricated using automated multi-needle chain stitching with virgin non-woven needlefelts and woven scrim reinforcements. Engineered with thermal surface singeing and heat-setting to guarantee zero fiber shedding and high particulate release during pulse cycles.',
    specs: ['Sizes: Diameters 100-200mm, Lengths up to 10 meters', 'Stitching: 3-needle / 4-needle chain stitch', 'Seam Integrity: 100% leak-free precision', 'Top Fitting: Snap band, raw top, cord collar'],
    apps: ['Cement & Clinker', 'Thermal Boilers', 'Food & Pharma', 'Asphalt Plants']
  },
  {
    id: 'pleated-filter-bag',
    title: 'Pleated Filter Bag',
    img: pleatedBagImg,
    shortDesc: 'Improving filtration efficiency with pleated filter bags for enhanced air quality in industrial applications.',
    fullDesc: 'Molded pleated cartridges that retrofit directly into existing tubesheets without modifying the collector cage layout. Increases available filtration area by 200% to 300%, cutting can velocity in half and resolving severe capacity bottlenecks instantly.',
    specs: ['Surface Area: 2x to 3x conventional tubular bags', 'Media: Spunbond polyester with PTFE membrane', 'Temperature: Up to 150°C (standard) / 200°C (special)', 'Cleaning: Pulse-jet compatible with lower air pressure'],
    apps: ['Capacity Upgrades', 'Fine Dust Extraction', 'Powder Coating', 'Pharmaceutical FBD']
  },
  {
    id: 'filter-cages',
    title: 'Filter Cages (Support Cages)',
    img: filterCageImg,
    shortDesc: 'Supporting filter bag stability and performance with durable filter cages in industrial filtration systems.',
    fullDesc: 'Precision-welded 8, 10, 12, 16, 20, and 24-wire support cages that keep filter bags open against inward gas pressure. Constructed on automated robotic cage welding machines with zero burrs or sharp points that could abrade or puncture the filter fabric.',
    specs: ['Wires: 8, 10, 12, 16, 20, 24 longitudinal wires', 'Materials: Galvanized GI, Mild Steel, SS304, SS316', 'Coating: Epoxy powder coated, passivated, silicone painted', 'Design: Single piece or multi-section bayonet locking'],
    apps: ['Pulse Jet Baghouses', 'Reverse Air Collectors', 'Corrosive Gas Scrubbers', 'High Moisture Streams']
  },
  {
    id: 'filter-cage-venturi',
    title: 'Filter Cage Venturi',
    img: venturiImg,
    shortDesc: 'Utilizing Filter Cage Venturi for efficient air movement and ventilation in industrial applications.',
    fullDesc: 'Aerodynamically profiled cast aluminum and spun steel venturies integrated at the top of filter cages. Induces a secondary volume of clean air up to 4x the primary compressed air pulse, maximizing shockwave propagation down the entire length of the bag.',
    specs: ['Material: Cast aluminum alloy, deep-drawn GI, SS304', 'Length: 150mm to 300mm tuned profile', 'Attachment: Spot-welded, snap-in collar, or drop-in cast flange', 'Aerodynamics: Optimized Bellmouth nozzle geometry'],
    apps: ['High-Velocity Pulse Jet', 'Long Bags (up to 8m)', 'Heavy Dust Deposition', 'Fly Ash Filtration']
  },
  {
    id: 'solenoid-valve',
    title: 'Pulse Jet Solenoid Valve',
    img: solenoidValveImg,
    shortDesc: 'Controlling fluid or gas flow with precision using solenoid valves in industrial systems.',
    fullDesc: 'High-speed diaphragm pulse valves delivering millisecond opening times for rapid compressed air releases into the blowpipes. Designed with molded Buna/Viton diaphragms rated for over 1 million pulsing cycles without pressure leakage.',
    specs: ['Sizes: 3/4", 1", 1.5", 2", 2.5", 3" ports', 'Operating Pressure: 0.5 bar to 8.5 bar', 'Voltage: 24V DC, 110V AC, 220V AC', 'Response Time: <30 milliseconds opening'],
    apps: ['Pulse Jet Baghouses', 'Silo Top Collectors', 'Cartridge Dust Collectors', 'Automated Cleaning']
  },
  {
    id: 'rotary-air-lock',
    title: 'Rotary Air Lock Valve',
    img: rotaryAirLockImg,
    shortDesc: 'Ensuring efficient material handling and airlock sealing with rotary air locks in industrial processes.',
    fullDesc: 'Precision-machined rotary valves installed beneath dust collector hoppers. Discharges collected particulate continuously into bins or conveyors while preventing ambient air from entering the negative pressure baghouse casing.',
    specs: ['Rotor: 6 to 8-vane closed or open end design', 'Housing: Cast iron, carbon steel, SS316', 'Drive: Geared motor with chain/direct drive', 'Clearance: Machined to <0.10mm for tight air sealing'],
    apps: ['Hopper Discharge', 'Pneumatic Conveying', 'Fly Ash Silos', 'Continuous Batch Discharging']
  }
];

const FilterBagPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    productType: 'Industrial Filter Bags',
    dimensions: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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
`*Inquiry: Filter Bags & Systems - VS Filtech*
----------------------------------------
👤 *Name / Company:* ${formData.name} ${formData.company ? `(${formData.company})` : ''}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || 'Not provided'}
🏭 *Product Interest:* ${formData.productType}
📐 *Dimensions/Quantity:* ${formData.dimensions || 'Standard / Custom'}
📝 *Requirement:* ${formData.message || 'Please provide quotation and specifications.'}
----------------------------------------
_Sent via vsfiltech.com_`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/911234567890?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  const handleInquireModal = (productTitle) => {
    setFormData(prev => ({ ...prev, productType: productTitle }));
    setSelectedProduct(null);
    const formElement = document.getElementById('filter-bag-rfq');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="filter-bag-page">
      {/* 1. HERO SECTION */}
      <section className="fb-hero">
        <div className="fb-hero-ambient"></div>
        <div className="container relative z-10">
          <div className="fb-hero-badge">
            <Sparkles size={14} className="badge-sparkle" />
            <span>PREMIER INDUSTRIAL AIR FILTRATION</span>
          </div>

          <h1 className="fb-hero-title">
            Filter Bag Manufacturers, Suppliers | <span className="text-gradient">Bag Filter Manufacturers in India</span>
          </h1>

          <p className="fb-hero-subtitle">
            VS Filtech is one of the trusted filter bags manufacturers, known for providing durable and high-performance industrial filtration and dust extraction systems for industrial applications across India.
          </p>

          <div className="fb-hero-cta-row">
            <a href="#filter-bag-rfq" className="btn btn-primary">
              <MessageCircle size={18} />
              <span>Get WhatsApp Quotation</span>
            </a>
            <a href="#specifications" className="btn btn-outline">
              <span>View Technical Specs</span>
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Quick Metrics Bar */}
            <div className="fb-metrics-ribbon">
              <div className="metric-box">
                <span className="metric-val">&gt;99.5%</span>
                <span className="metric-lbl">Filtration Efficiency</span>
              </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">Up to 280°C</span>
              <span className="metric-lbl">Thermal Resilience</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">1m to 12m</span>
              <span className="metric-lbl">Custom Bag Lengths</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-box">
              <span className="metric-val">Ghaziabad, UP</span>
              <span className="metric-lbl">Manufacturing Facility</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & FEATURES SECTION */}
      <section className="fb-overview-section">
        <div className="container">
          <div className="fb-split-grid">
            {/* Left: Product Imagery with CAD frame */}
            <div className="fb-media-col">
              <div className="fb-image-card">
                <img 
                  src={filterBagMainImg} 
                  alt="Industrial Filter Bag Manufacturer - VS Filtech" 
                  className="fb-featured-img" 
                />
                <div className="fb-image-overlay-card">
                  <ShieldCheck size={28} className="overlay-icon" />
                  <div>
                    <h4>Heavy-Duty Industrial Grade</h4>
                    <p>Woven scrim reinforcement & multi-needle chain stitch seams</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed Content */}
            <div className="fb-text-col">
              <div className="fb-section-tag">ENGINEERED POLLUTION CONTROL</div>
              <h2 className="fb-section-title">Bag Filter Manufacturers in India</h2>
              <p className="fb-paragraph">
                Our bag filters are designed to effectively remove dust, particulate matter, and airborne contaminants from industrial exhaust systems, helping industries maintain a clean and safe working environment while meeting environmental regulations.
              </p>
              <p className="fb-paragraph">
                Manufactured using premium-quality materials and advanced engineering techniques, our bag filters provide excellent filtration efficiency, durability, and reliable performance. These systems are widely used in industries such as cement, pharmaceuticals, food processing, chemicals, power plants, steel, foundries, and manufacturing units.
              </p>

              {/* Bullet Features Grid */}
              <div className="fb-features-list">
                <h3 className="features-list-title">Features of Dust Filter Bags:</h3>
                <div className="features-grid">
                  {keyFeatures.map((feat, idx) => (
                    <div key={idx} className="feat-item">
                      <CheckCircle2 size={18} className="feat-check" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTER BAG VARIETIES */}
      <section className="fb-varieties-section">
        <div className="container">
          <div className="fb-section-header text-center">
            <div className="fb-section-tag">MEDIA PORTFOLIO</div>
            <h2 className="fb-section-title">Comprehensive Filter Bag Media Range</h2>
            <p className="fb-section-subtitle">
              At VS Filtech, we manufacture a wide range of filter bags engineered for small to large scale high-demand applications.
            </p>
          </div>

          <div className="varieties-cards-grid">
            {filterBagVarieties.map((item, idx) => (
              <div key={idx} className="variety-card">
                <div className="variety-card-header">
                  <span className="variety-tag">{item.tag}</span>
                </div>
                <h3 className="variety-title">{item.name}</h3>
                <p className="variety-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPECIFICATION TABLE */}
      <section id="specifications" className="fb-spec-section">
        <div className="container">
          <div className="fb-section-header text-center">
            <div className="fb-section-tag">ENGINEERING DATA</div>
            <h2 className="fb-section-title">Dust Collector Filter Bag Specification</h2>
            <p className="fb-section-subtitle">
              Technical parameters and typical fabrication standards for industrial filter bags.
            </p>
          </div>

          <div className="spec-table-container">
            <table className="spec-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Specification</th>
                  <th style={{ width: '38%' }}>Engineering Description</th>
                  <th style={{ width: '40%' }}>Typical Values / Standards</th>
                </tr>
              </thead>
              <tbody>
                {specTableData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="spec-name">{row.parameter}</td>
                    <td className="spec-desc">{row.description}</td>
                    <td className="spec-val">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. 9 PROMO BOXES WITH READ MORE */}
      <section className="fb-promo-section">
        <div className="container">
          <div className="fb-section-header text-center">
            <div className="fb-section-tag">AIR FILTRATION EQUIPMENTS & SPARES</div>
            <h2 className="fb-section-title">Industrial Baghouse Systems & Components</h2>
            <p className="fb-section-subtitle">
              Click <strong>Read More</strong> on any product below to view detailed technical specifications, applications, and instant RFQ.
            </p>
          </div>

          <div className="promo-cards-grid">
            {promoProducts.map((prod) => (
              <div key={prod.id} className="promo-card">
                <div className="promo-img-wrapper">
                  <img src={prod.img} alt={prod.title} className="promo-img" />
                  <div className="promo-overlay-badge">Industrial Spares</div>
                </div>

                <div className="promo-body">
                  <h3 className="promo-title">{prod.title}</h3>
                  <p className="promo-desc">{prod.shortDesc}</p>

                  <button 
                    type="button" 
                    className="btn-read-more"
                    onClick={() => setSelectedProduct(prod)}
                  >
                    <span>Read More</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE "READ MORE" MODAL */}
      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedProduct(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-grid">
              <div className="modal-media-col">
                <img src={selectedProduct.img} alt={selectedProduct.title} className="modal-img" />
                <div className="modal-plant-tag">
                  <Sparkles size={14} />
                  <span>Fabricated in Ghaziabad, UP</span>
                </div>
              </div>

              <div className="modal-info-col">
                <div className="modal-eyebrow">PRODUCT SPECIFICATIONS</div>
                <h3 className="modal-title">{selectedProduct.title}</h3>
                <p className="modal-desc">{selectedProduct.fullDesc}</p>

                <div className="modal-specs-block">
                  <h4 className="modal-specs-heading">Key Technical Specifications:</h4>
                  <ul className="modal-specs-list">
                    {selectedProduct.specs.map((s, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="modal-spec-check" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-apps-block">
                  <span className="modal-apps-label">Key Applications:</span>
                  <div className="modal-apps-chips">
                    {selectedProduct.apps.map((app, i) => (
                      <span key={i} className="app-chip">{app}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-cta-row">
                  <button 
                    className="btn btn-whatsapp-submit modal-wa-btn"
                    onClick={() => handleInquireModal(selectedProduct.title)}
                  >
                    <MessageCircle size={18} />
                    <span>Inquire for {selectedProduct.title}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. RFQ INQUIRY FORM */}
      <section id="filter-bag-rfq" className="fb-rfq-section">
        <div className="container">
          <div className="fb-rfq-card">
            <div className="rfq-header">
              <div className="rfq-badge">
                <MessageCircle size={15} />
                <span>DIRECT WHATSAPP RFQ DESK</span>
              </div>
              <h2 className="rfq-title">Request Quotation & Engineering Drawings</h2>
              <p className="rfq-subtitle">
                Fill details below — submitting opens your inquiry directly in WhatsApp with our technical engineers at <strong>+91 1234567890</strong>.
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
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Company / Factory Name</label>
                  <input 
                    type="text" 
                    className="field-input" 
                    placeholder="e.g. UltraTech / Jindal / Thermal Plant"
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
                  <label className="field-label">Product / Spare Interest *</label>
                  <select 
                    className="field-select"
                    value={formData.productType}
                    onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                  >
                    <option value="Industrial Filter Bags">Industrial Filter Bags (General / Pulse Jet)</option>
                    <option value="High Temperature Filter Bags (Nomex, Fiberglass, PTFE, PPS)">High Temperature Filter Bags (Nomex, Fiberglass, PTFE, PPS)</option>
                    <option value="Pleated Filter Bags">Pleated Filter Bags (Extended Surface)</option>
                    <option value="Polypropylene Filter Bags">Polypropylene Liquid Filter Bags</option>
                    <option value="Filter Cages & Venturies">Support Filter Cages & Venturies</option>
                    <option value="Dust Collector System">Complete Dust Collector System</option>
                    <option value="ID Fans">ID Fans (Induced Draft)</option>
                    <option value="Cyclone Dust Collector">Cyclone Dust Collector</option>
                    <option value="Solenoid Valve">Pulse Jet Solenoid Valve</option>
                    <option value="Rotary Air Lock">Rotary Air Lock Valve</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="field-label">Bag Dimensions / Quantity (Optional)</label>
                  <input 
                    type="text" 
                    className="field-input" 
                    placeholder="e.g. Dia 160mm x Length 3000mm, 500 pcs"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">Requirement Details / Operating Conditions</label>
                <textarea 
                  rows="3" 
                  className="field-textarea" 
                  placeholder="Mention operating temperature, gas type, moisture level, or existing tubesheet layout..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-whatsapp-submit">
                <MessageCircle size={20} />
                <span>Send Technical Inquiry via WhatsApp</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterBagPage;
