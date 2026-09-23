import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

// Product images - Crystal Clear HD Industrial Assets
import filterBagMainImg from '../assets/filter_bag_hd.jpg';
import filterBagHdImg from '../assets/filter_bag_hd.jpg';
import pageBgImg from '../assets/filter_bag_page_bg.jpg';
import plantStitchingImg from '../assets/slide_new_4.jpg';
import dustCollectorImg from '../assets/factory_bagfilter_plant_hd.jpg';
import idFanImg from '../assets/id_fan_hd.jpg';
import cycloneImg from '../assets/cyclone_separator_hd.jpg';
import pleatedBagImg from '../assets/pleated_cartridge_hd.jpg';
import filterCageImg from '../assets/filter_cage_hd.jpg';
import venturiImg from '../assets/venturi_nozzle_hd.jpg';
import solenoidValveImg from '../assets/solenoid_valve_hd.jpg';
import rotaryAirLockImg from '../assets/rotary_airlock_hd.jpg';

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

// Material Comparison Table (Requested by User)
const materialComparisonData = [
  {
    material: 'Polyester',
    application: 'General dust collection',
    temp: '130°C - 150°C',
    features: 'High mechanical strength, cost-effective, singed/glazed/antistatic/OWR finishes',
    badge: 'badge-cyan'
  },
  {
    material: 'PPS (Polyphenylene Sulfide)',
    application: 'High-temperature / chemical applications',
    temp: '190°C continuous',
    features: 'Exceptional acid resistance, coal-fired boiler flue gas, SOx chemical resistance',
    badge: 'badge-blue'
  },
  {
    material: 'Aramid (Nomex)',
    application: 'High-temperature applications',
    temp: '200°C - 220°C',
    features: 'Superior thermal endurance, flame retardant, asphalt plants & metallurgical foundries',
    badge: 'badge-amber'
  },
  {
    material: 'PTFE (Teflon)',
    application: 'Aggressive chemical applications',
    temp: '240°C - 260°C',
    features: 'Universal pH 0-14 chemical inertness, municipal incinerators, chemical reactor off-gas',
    badge: 'badge-rose'
  },
  {
    material: 'Fiberglass',
    application: 'High-temperature applications',
    temp: '260°C continuous',
    features: 'Woven filament with acid-resistant silicone/PTFE finish, zero stretch, cement kilns',
    badge: 'badge-purple'
  },
  {
    material: 'ePTFE membrane',
    application: 'Low-emission applications',
    temp: 'Base media rating',
    features: 'Surface filtration stopping sub-micron dust, ultra-low emissions (< 5 mg/Nm³)',
    badge: 'badge-emerald'
  },
  {
    material: 'Other Media',
    application: 'Other application-specific media',
    temp: 'Custom',
    features: 'Polypropylene (moisture/alkali), P84 Polyimide (tri-lobal high surface area), Acrylic',
    badge: 'badge-cyan'
  }
];

// Available Configurations (Requested by User)
const availableConfigurations = [
  {
    parameter: 'Diameter',
    value: '100 / 120 / 130 / 150 / 160 / 180 mm and customized',
    description: 'Precision sized to OEM tubesheet cell plates with strict ±0.2mm tolerance.'
  },
  {
    parameter: 'Length',
    value: 'As per equipment requirement (1.0m to 10.0m+)',
    description: 'Custom engineered lengths for pulse jet, shaker, and reverse air baghouses.'
  },
  {
    parameter: 'Finish',
    value: 'Singed / Glazed / Calendared / Heat-Set',
    description: 'Thermal surface singeing prevents fiber shedding and optimizes dust cake release.'
  },
  {
    parameter: 'Construction',
    value: 'Needle felt / Scrim supported / Woven filament',
    description: 'Reinforced with high-denier woven scrims preventing elongation and bag collapse.'
  },
  {
    parameter: 'Membrane',
    value: 'ePTFE membrane laminated available',
    description: 'Microporous fluoropolymer surface stopping PM2.5 and sticky sub-micron dust.'
  },
  {
    parameter: 'Top Cuff Fitting',
    value: 'Spring steel snap band, raw top, cord collar, ring top',
    description: 'Toolless, airtight mechanical seal verifying zero particle bypass.'
  }
];

// Filter Bag Applications (10 Core Industries Requested by User)
const filterBagApplications = [
  {
    name: 'Cement',
    desc: 'Kiln exhaust, raw mill, coal mill, clinker cooler, and bulk storage silo venting.',
    media: 'Fiberglass with PTFE, Nomex, PTFE Membrane'
  },
  {
    name: 'Steel',
    desc: 'Blast furnace, induction furnaces, secondary fume extraction, sintering, and rolling mills.',
    media: 'Polyester Needlefelt with OWR, Nomex'
  },
  {
    name: 'Foundry',
    desc: 'Return sand reclamation, shakeout lines, shot blasting, and cupola furnace melting.',
    media: 'High-Density Polyester, Nomex'
  },
  {
    name: 'EAF',
    desc: 'Electric Arc Furnace 4th-hole direct evacuation, canopy hood extraction, and ladle refining.',
    media: 'High-Temp Nomex, Woven Fiberglass, PTFE'
  },
  {
    name: 'Aluminium',
    desc: 'Potline fluoride dry scrubbers, dross recycling, holding furnaces, and anode baking.',
    media: 'Polyester Needlefelt, PTFE Membrane'
  },
  {
    name: 'Power',
    desc: 'Pulverized coal boilers, biomass boilers, stoker furnaces, and fly ash pneumatic conveying.',
    media: 'PPS (Ryton), P84 Polyimide, PTFE Membrane'
  },
  {
    name: 'Rice Mills',
    desc: 'Paddy husk-fired boilers, grain elevators, rice hulling, cleaning, and bran polishing.',
    media: 'Glazed Polyester, Antistatic Conductive'
  },
  {
    name: 'Chemical',
    desc: 'Pigment dryers, acid reactor off-gases, fertilizer granulation, and powder handling.',
    media: '100% PTFE, Polypropylene, PPS'
  },
  {
    name: 'Minerals',
    desc: 'Lime kilns, gypsum calcining, clay drying, silica grinding, and aggregate processing.',
    media: 'Polyester Needlefelt, Acrylic, Nomex'
  },
  {
    name: 'Food Processing',
    desc: 'Milk powder spray dryers, starch, flour handling, sugar processing, and cereal silos.',
    media: 'Certified Food-Grade Polyester with ePTFE'
  }
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
    category: 'Dust Collection Equipment',
    isStudio: false,
    img: dustCollectorImg,
    shortDesc: 'Implementing advanced dust collector systems to enhance workplace safety and environmental responsibility.',
    fullDesc: 'VS Filtech designs, manufactures, and commissions industrial pulse-jet dust collector systems. Engineered to handle large volumetric gas flows with continuous automated cleaning, heavy-duty tubesheets, and modular casing for seamless plant expansion.',
    specs: ['Flow Range: 1,000 to 150,000 CFM', 'Efficiency: >99.9% particulate collection', 'Cleaning: Automated timer-controlled pulse jet', 'Tubesheet: CNC laser cut 4mm-6mm mild/stainless steel'],
    apps: ['Cement Plants', 'Steel & Foundry', 'Power Generation', 'Chemical Plants']
  },
  {
    id: 'id-fans',
    title: 'ID Fans (Induced Draft Fans)',
    category: 'Mechanical Equipment',
    isStudio: true,
    img: idFanImg,
    shortDesc: 'Deploying efficient ID fans for optimal ventilation and process control in industrial operations.',
    fullDesc: 'High-efficiency heavy-duty industrial Induced Draft (ID) fans precision balanced to ISO 1940 standards. Designed to sustain negative draft across complex duct networks, cyclones, and baghouse compartments under extreme dust loading.',
    specs: ['Airflow: Up to 250,000 m³/hr', 'Static Pressure: 150 mm to 1800 mm WG', 'Impeller: Backward curved, radial tipped, aerofoil', 'Balancing: Dynamic multi-plane balancing'],
    apps: ['Boiler Exhaust', 'Rotary Kilns', 'Baghouse Ventilation', 'Furnace Draft']
  },
  {
    id: 'cyclone-dust-collector',
    title: 'Cyclone Dust Collector',
    category: 'Dust Collection Equipment',
    isStudio: true,
    img: cycloneImg,
    shortDesc: 'Utilizing cyclone dust collectors for effective particulate separation and cleaner air in industrial environments.',
    fullDesc: 'Mechanical centrifugal separators installed as effective pre-cleaners upstream of baghouses. Captures abrasive and coarse particles (above 10 microns), significantly decreasing dust loading on fabric filter bags and extending bag lifecycle by up to 2.5x.',
    specs: ['Efficiency: 85-92% on coarse particulate', 'Inlet Velocity: 15 to 22 m/s', 'Construction: Abrasion-resistant Hardox / MS liner', 'Pressure Drop: Low 70 - 120 mm WG'],
    apps: ['Woodworking Mills', 'Grain Handling', 'Sand Blasting', 'Pre-filtration for Baghouses']
  },
  {
    id: 'filter-bag',
    title: 'Industrial Filter Bags',
    category: 'Filter Components',
    isStudio: true,
    img: filterBagMainImg,
    shortDesc: 'Enhancing air quality with high-performance filter bags in industrial filtration systems.',
    fullDesc: 'Fabricated using automated multi-needle chain stitching with virgin non-woven needlefelts and woven scrim reinforcements. Engineered with thermal surface singeing and heat-setting to guarantee zero fiber shedding and high particulate release during pulse cycles.',
    specs: ['Sizes: Diameters 100-200mm, Lengths up to 10 meters', 'Stitching: 3-needle / 4-needle chain stitch', 'Seam Integrity: 100% leak-free precision', 'Top Fitting: Snap band, raw top, cord collar'],
    apps: ['Cement & Clinker', 'Thermal Boilers', 'Food & Pharma', 'Asphalt Plants']
  },
  {
    id: 'pleated-filter-bag',
    title: 'Pleated Filter Bag',
    category: 'Filter Components',
    isStudio: true,
    img: pleatedBagImg,
    shortDesc: 'Improving filtration efficiency with pleated filter bags for enhanced air quality in industrial applications.',
    fullDesc: 'Molded pleated cartridges that retrofit directly into existing tubesheets without modifying the collector cage layout. Increases available filtration area by 200% to 300%, cutting can velocity in half and resolving severe capacity bottlenecks instantly.',
    specs: ['Surface Area: 2x to 3x conventional tubular bags', 'Media: Spunbond polyester with PTFE membrane', 'Temperature: Up to 150°C (standard) / 200°C (special)', 'Cleaning: Pulse-jet compatible with lower air pressure'],
    apps: ['Capacity Upgrades', 'Fine Dust Extraction', 'Powder Coating', 'Pharmaceutical FBD']
  },
  {
    id: 'filter-cages',
    title: 'Filter Cages (Support Cages)',
    category: 'Filter Components',
    isStudio: true,
    img: filterCageImg,
    shortDesc: 'Supporting filter bag stability and performance with durable filter cages in industrial filtration systems.',
    fullDesc: 'Precision-welded 8, 10, 12, 16, 20, and 24-wire support cages that keep filter bags open against inward gas pressure. Constructed on automated robotic cage welding machines with zero burrs or sharp points that could abrade or puncture the filter fabric.',
    specs: ['Wires: 8, 10, 12, 16, 20, 24 longitudinal wires', 'Materials: Galvanized GI, Mild Steel, SS304, SS316', 'Coating: Epoxy powder coated, passivated, silicone painted', 'Design: Single piece or multi-section bayonet locking'],
    apps: ['Pulse Jet Baghouses', 'Reverse Air Collectors', 'Corrosive Gas Scrubbers', 'High Moisture Streams']
  },
  {
    id: 'filter-cage-venturi',
    title: 'Filter Cage Venturi',
    category: 'Filter Components',
    isStudio: true,
    img: venturiImg,
    shortDesc: 'Utilizing Filter Cage Venturi for efficient air movement and ventilation in industrial applications.',
    fullDesc: 'Aerodynamically profiled cast aluminum and spun steel venturies integrated at the top of filter cages. Induces a secondary volume of clean air up to 4x the primary compressed air pulse, maximizing shockwave propagation down the entire length of the bag.',
    specs: ['Material: Cast aluminum alloy, deep-drawn GI, SS304', 'Length: 150mm to 300mm tuned profile', 'Attachment: Spot-welded, snap-in collar, or drop-in cast flange', 'Aerodynamics: Optimized Bellmouth nozzle geometry'],
    apps: ['High-Velocity Pulse Jet', 'Long Bags (up to 8m)', 'Heavy Dust Deposition', 'Fly Ash Filtration']
  },
  {
    id: 'solenoid-valve',
    title: 'Pulse Jet Solenoid Valve',
    category: 'Filter Components',
    isStudio: true,
    img: solenoidValveImg,
    shortDesc: 'Controlling fluid or gas flow with precision using solenoid valves in industrial systems.',
    fullDesc: 'High-speed diaphragm pulse valves delivering millisecond opening times for rapid compressed air releases into the blowpipes. Designed with molded Buna/Viton diaphragms rated for over 1 million pulsing cycles without pressure leakage.',
    specs: ['Sizes: 3/4", 1", 1.5", 2", 2.5", 3" ports', 'Operating Pressure: 0.5 bar to 8.5 bar', 'Voltage: 24V DC, 110V AC, 220V AC', 'Response Time: <30 milliseconds opening'],
    apps: ['Pulse Jet Baghouses', 'Silo Top Collectors', 'Cartridge Dust Collectors', 'Automated Cleaning']
  },
  {
    id: 'rotary-air-lock',
    title: 'Rotary Air Lock Valve',
    category: 'Mechanical Equipment',
    isStudio: true,
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
  const [activeView, setActiveView] = useState('hd'); // 'hd' | 'plant' | 'ref'
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
    window.open(`https://wa.me/918496978456?text=${encoded}`, '_blank');
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
      {/* 1. HERO SECTION WITH CINEMATIC INDUSTRIAL BACKGROUND */}
      <section 
        className="fb-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(6, 10, 18, 0.72) 0%, rgba(6, 10, 18, 0.93) 80%, #060a12 100%), url(${pageBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="fb-hero-ambient"></div>
        <div className="container relative z-10">
          <div className="fb-hero-badge">
            <Sparkles size={14} className="badge-sparkle" />
            <span>PREMIER INDUSTRIAL AIR FILTRATION</span>
          </div>

          <h1 className="fb-hero-title">
            Industrial Filter Bags | <span className="text-gradient">Engineered for Reliable Dust Collection &amp; Long Service Life</span>
          </h1>

          <p className="fb-hero-subtitle">
            Filter bags engineered for reliable dust collection and long service life. Available in Polyester Needle Felt, PPS, Aramid, Fiberglass, PTFE, ePTFE membrane laminated fabrics, and other application-specific media.
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
            {/* Left: Product Imagery with CAD frame & View Switcher */}
            <div className="fb-media-col">
              <div className="fb-view-toggle-bar">
                <button 
                  type="button"
                  className={`fb-toggle-btn ${activeView === 'hd' ? 'active' : ''}`}
                  onClick={() => setActiveView('hd')}
                >
                  <Sparkles size={14} />
                  <span>Ultra HD Studio (4K)</span>
                </button>
                <button 
                  type="button"
                  className={`fb-toggle-btn ${activeView === 'plant' ? 'active' : ''}`}
                  onClick={() => setActiveView('plant')}
                >
                  <Cpu size={14} />
                  <span>Stitching Floor</span>
                </button>
                <button 
                  type="button"
                  className={`fb-toggle-btn ${activeView === 'lineup' ? 'active' : ''}`}
                  onClick={() => setActiveView('lineup')}
                >
                  <Layers size={14} />
                  <span>Media Varieties</span>
                </button>
              </div>

              <div className="fb-image-card" onClick={() => setLightboxOpen(true)}>
                <img 
                  src={
                    activeView === 'hd' ? filterBagHdImg : 
                    activeView === 'plant' ? plantStitchingImg : 
                    filterBagMainImg
                  } 
                  alt="Industrial Filter Bag Manufacturer - VS Filtech" 
                  className="fb-featured-img fb-featured-img-hd" 
                />
                
                {/* Fullscreen HD trigger button */}
                <button 
                  type="button"
                  className="fb-zoom-trigger"
                  onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
                  aria-label="View Fullscreen HD"
                >
                  <Maximize2 size={16} />
                  <span>Full HD View</span>
                </button>

                {/* Top Badge */}
                <div className="fb-image-top-tag">
                  <span className="live-dot-cyan"></span>
                  <span>
                    {activeView === 'hd' && '4K Studio Photography'}
                    {activeView === 'plant' && 'Multi-Needle Plant Floor'}
                    {activeView === 'lineup' && 'Complete Media Range'}
                  </span>
                </div>

                <div className="fb-image-overlay-card">
                  <ShieldCheck size={28} className="overlay-icon" />
                  <div>
                    <h4>Heavy-Duty Industrial Grade</h4>
                    <p>Woven scrim reinforcement & multi-needle chain stitch seams</p>
                  </div>
                </div>
              </div>

              {/* Interactive Thumbnail Previews */}
              <div className="fb-thumbnails-row">
                <div 
                  className={`fb-thumb-item ${activeView === 'hd' ? 'active' : ''}`}
                  onClick={() => setActiveView('hd')}
                >
                  <img src={filterBagHdImg} alt="Ultra HD Studio View" />
                  <span>Ultra HD Studio</span>
                </div>
                <div 
                  className={`fb-thumb-item ${activeView === 'plant' ? 'active' : ''}`}
                  onClick={() => setActiveView('plant')}
                >
                  <img src={plantStitchingImg} alt="Plant Stitching Floor" />
                  <span>Factory Floor</span>
                </div>
                <div 
                  className={`fb-thumb-item ${activeView === 'lineup' ? 'active' : ''}`}
                  onClick={() => setActiveView('lineup')}
                >
                  <img src={filterBagMainImg} alt="Media Variety Range" />
                  <span>Media Range</span>
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

              {/* Quick Quality Assurance Badges */}
              <div className="fb-assurance-pills">
                <div className="assurance-pill">
                  <span className="assurance-dot"></span>
                  <span>100% Leak-Proof Snap Bands</span>
                </div>
                <div className="assurance-pill">
                  <span className="assurance-dot"></span>
                  <span>Zero Particle Bypass</span>
                </div>
                <div className="assurance-pill">
                  <span className="assurance-dot"></span>
                  <span>OEM Precision Fit</span>
                </div>
              </div>

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

              <div className="fb-overview-cta">
                <a href="#filter-bag-rfq" className="btn btn-primary">
                  <MessageCircle size={18} />
                  <span>Get Custom Sizing & Quotation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2B. AVAILABLE CONFIGURATIONS SHOWCASE */}
      <section className="fb-config-section">
        <div className="container">
          <div className="fb-section-header text-center">
            <div className="fb-section-tag">ENGINEERED FABRICATION</div>
            <h2 className="fb-section-title">Available Filter Bag Configurations</h2>
            <p className="fb-section-subtitle">
              Manufactured with precise tolerances matching OEM cell plates across global baghouse designs.
            </p>
          </div>

          <div className="fb-config-grid">
            {availableConfigurations.map((cfg, idx) => (
              <div key={idx} className="fb-config-card">
                <span className="fb-config-label">{cfg.parameter}</span>
                <h3 className="fb-config-val">{cfg.value}</h3>
                <p className="fb-config-desc">{cfg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2C. MATERIAL VS. TYPICAL APPLICATION COMPARISON TABLE */}
      <section className="fb-material-table-section">
        <div className="container">
          <div className="fb-section-header text-center">
            <div className="fb-section-tag">MEDIA SELECTION GUIDE</div>
            <h2 className="fb-section-title">Filter Bag Media vs. Typical Applications</h2>
            <p className="fb-section-subtitle">
              Select the optimal filtration media based on process gas chemistry, operating temperature, and emission targets.
            </p>
          </div>

          <div className="fb-table-responsive">
            <table className="fb-material-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Material</th>
                  <th style={{ width: '28%' }}>Typical Application</th>
                  <th style={{ width: '18%' }}>Max Continuous Temp</th>
                  <th style={{ width: '32%' }}>Engineering &amp; Chemical Properties</th>
                </tr>
              </thead>
              <tbody>
                {materialComparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="mat-col-name">
                      <strong>{row.material}</strong>
                    </td>
                    <td className="mat-col-app">{row.application}</td>
                    <td className="mat-col-temp">
                      <span className="temp-badge">{row.temp}</span>
                    </td>
                    <td className="mat-col-desc">{row.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="fb-table-callout">
            <div className="callout-icon">
              <ShieldCheck size={22} style={{ color: '#38bdf8' }} />
            </div>
            <div className="callout-text">
              <strong>Need application-specific fabric matching or baghouse retrofits?</strong>
              <span>Our filtration engineers evaluate your particulate bulk density, moisture levels, acid dew points, and gas velocities to determine the optimum air-to-cloth ratio and media selection.</span>
            </div>
            <a href="#filter-bag-rfq" className="btn-table-cta">
              <span>Consult Engineering Desk</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* 2D. FILTER BAG APPLICATIONS (10 CORE INDUSTRIES) */}
      <section className="fb-applications-section">
        <div className="container">
          <div className="fb-section-header text-center">
            <div className="fb-section-tag">CORE INDUSTRY EXPERTISE</div>
            <h2 className="fb-section-title">Filter Bag Applications</h2>
            <p className="fb-section-subtitle">
              Engineered fabric media customized for severe thermal, abrasive, and corrosive operating environments across India.
            </p>
          </div>

          <div className="fb-apps-grid">
            {filterBagApplications.map((app, idx) => (
              <div key={idx} className="fb-app-card">
                <div className="fb-app-card-header">
                  <span className="app-card-idx">{(idx + 1).toString().padStart(2, '0')}</span>
                  <h3 className="app-card-title">{app.name}</h3>
                </div>
                <p className="app-card-desc">{app.desc}</p>
                <div className="app-card-media-rec">
                  <span className="rec-lbl">Recommended Media:</span>
                  <strong className="rec-val">{app.media}</strong>
                </div>
              </div>
            ))}
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
                <Link 
                  to={`/products/${prod.id}`} 
                  className={`promo-img-wrapper ${prod.isStudio ? 'promo-img-studio' : ''}`} 
                  style={{ display: 'block', textDecoration: 'none' }}
                >
                  <img 
                    src={prod.img} 
                    alt={prod.title} 
                    className={`promo-img ${prod.isStudio ? 'promo-img-contain' : ''}`} 
                  />
                  <div className="promo-overlay-badge">{prod.category || 'Industrial Equipment'}</div>
                </Link>

                <div className="promo-body">
                  <Link to={`/products/${prod.id}`} style={{ textDecoration: 'none' }}>
                    <h3 className="promo-title">{prod.title}</h3>
                  </Link>
                  <p className="promo-desc">{prod.shortDesc}</p>

                  <Link 
                    to={`/products/${prod.id}`}
                    className="btn-read-more"
                  >
                    <span>Read More</span>
                    <ArrowRight size={15} />
                  </Link>
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
                Fill details below — submitting opens your inquiry directly in WhatsApp with our technical engineers.
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

      {/* 8. ULTRA-HD LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="fb-lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <div className="fb-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="fb-lightbox-close" 
              onClick={() => setLightboxOpen(false)}
              aria-label="Close High Resolution View"
            >
              <X size={26} />
            </button>
            <div className="fb-lightbox-media-wrapper">
              <img 
                src={
                  activeView === 'hd' ? filterBagHdImg : 
                  activeView === 'plant' ? plantStitchingImg : 
                  filterBagMainImg
                } 
                alt="High Resolution Filter Bag Inspection - VS Filtech" 
                className="fb-lightbox-img" 
              />
            </div>
            <div className="fb-lightbox-footer">
              <div className="fb-lightbox-badge">
                <Sparkles size={14} />
                <span>ULTRA HIGH DEFINITION INSPECTION</span>
              </div>
              <h3 className="fb-lightbox-title">
                {activeView === 'hd' && '4K Studio Photography: Heavy-Duty Industrial Filter Bags with Precision Snap-Band Collars'}
                {activeView === 'plant' && 'Industrial Manufacturing Floor: Automated Multi-Needle Stitching Plant'}
                {activeView === 'lineup' && 'Engineered Media Range: Nomex, Polyester, PTFE & Pleated Bag Configurations'}
              </h3>
              <p className="fb-lightbox-sub">
                Manufactured by VS Filtech with reinforced triple-needle chain stitching, custom woven scrims, and certified heat & acid resilience.
              </p>
              <div className="fb-lightbox-actions">
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
                  className={`btn-lightbox-switch ${activeView === 'lineup' ? 'active' : ''}`}
                  onClick={() => setActiveView('lineup')}
                >
                  Media Lineup
                </button>
                <a href="#filter-bag-rfq" className="btn btn-primary" onClick={() => setLightboxOpen(false)}>
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

export default FilterBagPage;
