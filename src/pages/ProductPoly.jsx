import { useState, useEffect } from 'react';
import { 
  Droplet, 
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
  Factory,
  Filter,
  ArrowRight,
  FlaskConical,
  Beaker,
  ChevronDown
} from 'lucide-react';
import './ProductPoly.css';

// High definition assets
import ppFeaturedImg from '../assets/pp_featured.jpg';

// AKJ Features
const keyFeatures = [
  {
    title: 'Virgin High-Purity PP Media',
    desc: 'Crafted from 100% pure virgin polypropylene fibers, silicone-free, and FDA Title 21 compliant for food, beverage, and pharma applications.'
  },
  {
    title: 'pH 1 to 14 Chemical Resistance',
    desc: 'Exceptional chemical inertness across aggressive mineral acids, caustics, strong alkalis, and organic solvents with zero media breakdown.'
  },
  {
    title: 'High Dirt-Holding Depth Matrix',
    desc: 'Graded-density needlefelt fiber structure traps high volumes of particulate matter, extending bag life and minimizing operational downtime.'
  },
  {
    title: '100% Ultrasonic Welded Seams',
    desc: 'Thermal fusion joints eliminate needle puncture holes completely, guaranteeing bypass-free filtration and zero leakage of unfiltered fluid.'
  },
  {
    title: 'Calibrated Micron Precision (1–200 µm)',
    desc: 'Available in nominal and absolute micron ratings (1, 5, 10, 25, 50, 75, 100, 200 µm) calibrated for exact solid-liquid separation.'
  },
  {
    title: 'Glazed Fiber-Free Surface',
    desc: 'Heat-singed outer surface prevents fiber shedding and fiber migration downstream into critical high-purity liquid streams.'
  }
];

// Media Variations
const mediaVariations = [
  {
    name: 'PP Needlefelt (Depth)',
    tag: 'Liquid Clarification',
    micron: '1 to 200 µm',
    temp: '90°C Cont. / 100°C Peak',
    desc: 'Non-woven depth filtration media with thermal calendered finish. Captures gelatinous and solid contaminants throughout fiber depth.',
    bestFor: 'Water, Chemical Solutions, Inks, Edible Oils'
  },
  {
    name: 'PP Monofilament Mesh',
    tag: 'Surface Filtration',
    micron: '25 to 800 µm',
    temp: '90°C Cont. / 100°C Peak',
    desc: 'Precision square-weave single-strand mesh. Washable and reusable with high tensile strength for high-viscosity process liquids.',
    bestFor: 'Paints, Resins, Viscous Glues, Wastewater'
  },
  {
    name: 'Extended Life PEX Felt',
    tag: '5x Longer Lifecycle',
    micron: '1 to 100 µm',
    temp: '90°C Cont. / 100°C Peak',
    desc: 'Graduated multi-density depth matrix providing up to 5 times the dirt-holding capacity of standard needlefelts, reducing changeout costs.',
    bestFor: 'Continuous High-Flow Industrial Lines'
  },
  {
    name: 'Oleophilic Oil-Absorbing',
    tag: 'Hydrocarbon Removal',
    micron: '5 to 50 µm',
    temp: '80°C Cont. / 90°C Peak',
    desc: 'Specially treated meltblown polypropylene layers capable of absorbing up to 20x their weight in trace free oils and hydrocarbons.',
    bestFor: 'Condensate, Bilge Water, Degreasing Baths'
  }
];

// Standard Sizes Table
const standardSizes = [
  { size: 'Size 1', diameter: '7 inches (178 mm)', length: '17 inches (430 mm)', area: '0.25 m²', flow: 'Up to 20 m³/h', badge: 'Standard Small' },
  { size: 'Size 2', diameter: '7 inches (178 mm)', length: '32 inches (810 mm)', area: '0.50 m²', flow: 'Up to 40 m³/h', badge: 'Most Popular' },
  { size: 'Size 3', diameter: '4 inches (102 mm)', length: '9 inches (230 mm)', area: '0.05 m²', flow: 'Up to 6 m³/h', badge: 'Compact' },
  { size: 'Size 4', diameter: '4 inches (102 mm)', length: '15 inches (380 mm)', area: '0.10 m²', flow: 'Up to 12 m³/h', badge: 'Compact Tall' },
  { size: 'Custom Fabrications', diameter: 'Per client CAD / sample', length: 'Up to 6000 mm', area: 'Engineered', flow: 'Per specification', badge: 'Custom' }
];

// Technical Specifications Table
const technicalSpecs = [
  { param: 'Fiber Polymer Composition', spec: '100% Virgin Polypropylene (PP) Homopolymer' },
  { param: 'Continuous Operating Temperature', spec: 'Up to 90°C (194°F)' },
  { param: 'Maximum Surge Temperature', spec: 'Up to 100°C (212°F)' },
  { param: 'Chemical Resistance (pH)', spec: 'pH 1 to 14 (Universal acid, alkali & solvent resistance)' },
  { param: 'Available Micron Ratings', spec: '1, 5, 10, 25, 50, 75, 100, 150, 200 µm' },
  { param: 'Seam Construction Options', spec: '100% Ultrasonic Thermal Fusion Welded or 5-Thread Lockstitched' },
  { param: 'Top Collar Ring Styles', spec: 'Molded PP Snap Ring with Handle, SS304/316 Steel Ring, Carbon Steel Ring, Drawstring' },
  { param: 'Surface Treatment', spec: 'Glazed / Heat-Singed (Anti-fiber migration)' },
  { param: 'Regulatory Compliance', spec: 'FDA Title 21 CFR Compliant for Food & Beverage contact' }
];

// Industrial Applications
const applications = [
  {
    num: '01',
    title: 'Water Treatment & RO Pre-Filtration',
    desc: 'Pre-reverse osmosis membrane guard, demineralization beds, municipal borehole clarification, and cooling tower loop filtration.'
  },
  {
    num: '02',
    title: 'Chemical & Petrochemical Processing',
    desc: 'Inorganic and organic acids, caustic wash solutions, chemical intermediate purification, solvents, and salt brine filtration.'
  },
  {
    num: '03',
    title: 'Paints, Inks, Resins & Coatings',
    desc: 'Removing pigment agglomerates, unreacted resin clumps, and particulate matter to ensure flawless, defect-free liquid coating finishes.'
  },
  {
    num: '04',
    title: 'Pharmaceutical & Cosmetics',
    desc: 'Sanitary solid-liquid separation, active ingredient filtration, glycerin polishing, and clean utility water streams.'
  },
  {
    num: '05',
    title: 'Food, Beverage & Edible Oils',
    desc: 'Syrup clarification, beer and beverage polishing, cooking oil purification, vinegar, and process utility water filtration.'
  },
  {
    num: '06',
    title: 'Automotive Coolants & Machining Oils',
    desc: 'Separating abrasive metal fines from cutting fluids, parts washing baths, hydraulic oils, and metal stamping lubricants.'
  }
];

// Technical Guides (Accordion)
const technicalGuides = [
  {
    q: 'How to choose between PP Needlefelt and PP Monofilament Mesh?',
    a: 'PP Needlefelt provides deep-bed filtration where particles are trapped throughout the 3D fiber matrix. It is ideal for low-to-medium viscosity liquids with sub-micron and deformable contaminants. PP Monofilament Mesh offers precise, rigid square pores for surface filtration, allowing higher flow rates and easy backwashing/cleaning for viscous liquids like resins and varnishes.'
  },
  {
    q: 'Why are Ultrasonic Welded Seams essential for high-purity liquid filtration?',
    a: 'Traditional stitched filter bags have needle puncture holes along the seam line that can be 2 to 4 times larger than the bag’s micron rating, allowing unfiltered fluid bypass. VS Filtech ultrasonic welded bags fuse the polypropylene fibers thermally, creating a 100% hermetic joint with zero needle holes and zero bypass.'
  },
  {
    q: 'What is the recommended Differential Pressure (ΔP) for bag replacement?',
    a: 'We recommend changing the filter bag when differential pressure reaches 1.0 to 1.5 bar (15 to 22 psi). Operating above this threshold risks compressing trapped contaminants through the media or causing bag rupture against the support basket.'
  },
  {
    q: 'Are VS Filtech Polypropylene Filter Bags compatible with standard filter housings?',
    a: 'Yes, our Size 1, Size 2, Size 3, and Size 4 bags are precision engineered to fit standard commercial single and multi-bag pressure vessels from manufacturers including Eaton, FSI, Parker, Rosedale, and Cuno.'
  }
];

const ProductPoly = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [openGuide, setOpenGuide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    size: 'Size 2 (7" x 32" / 810mm)',
    micron: '5 Micron',
    collar: 'PP Molded Snap Collar with Handle',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = 
`*RFQ: Polypropylene Filter Bags - VS Filtech*
----------------------------------------
👤 *Name / Company:* ${formData.name}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email}
📐 *Bag Size:* ${formData.size}
🎯 *Micron Rating:* ${formData.micron}
🔒 *Collar Style:* ${formData.collar}
📦 *Estimated Quantity:* ${formData.quantity || 'Sample / Production'}
📝 *Requirement:* ${formData.message || 'Please share technical catalog and price quotation.'}
----------------------------------------
_Sent from VS Filtech Official Portal_`;
    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/911234567890?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="poly-page">
      {/* 1. HERO SECTION */}
      <section className="pp-hero">
        <div className="pp-hero-ambient"></div>
        <div className="container">
          <div className="pp-hero-badge">
            <Droplet size={14} className="pp-badge-icon" />
            <span>SOLID-LIQUID FILTRATION SPECIALISTS</span>
          </div>

          <h1 className="pp-hero-title">
            <span className="pp-hero-title-white">Polypropylene Filter Bag</span>
            <span className="pp-hero-title-highlight">Manufacturers from Ghaziabad, India</span>
          </h1>

          <p className="pp-hero-subtitle">
            Reliable, economical, and high-efficiency solid-liquid separation solutions. VS Filtech manufactures premium Polypropylene (PP) filter bags designed for high dirt retention, universal pH 1–14 chemical resistance, and bypass-free liquid clarification across all demanding industrial operations.
          </p>

          <div className="pp-hero-actions">
            <a href="#poly-rfq" className="pp-btn-rfq">
              <span>Get WhatsApp Quotation</span>
              <ArrowRight size={18} />
            </a>
            <a href="#poly-specs" className="pp-btn-specs">
              <span>Explore Technical Specs</span>
              <ChevronDown size={18} />
            </a>
          </div>

          {/* Metrics Ribbon */}
          <div className="pp-metrics-ribbon">
            <div className="pp-metric-card">
              <div className="pp-metric-val">1 - 200 µm</div>
              <div className="pp-metric-lbl">Micron Rating Spectrum</div>
            </div>
            <div className="pp-metric-card">
              <div className="pp-metric-val">pH 1 - 14</div>
              <div className="pp-metric-lbl">Universal Chemical Proof</div>
            </div>
            <div className="pp-metric-card">
              <div className="pp-metric-val">90°C / 100°C</div>
              <div className="pp-metric-lbl">Continuous & Surge Resilience</div>
            </div>
            <div className="pp-metric-card">
              <div className="pp-metric-val">Size 1 to 4</div>
              <div className="pp-metric-lbl">Standard & Custom Vessels</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4K SINGLE PRODUCT SHOWCASE */}
      <section className="pp-showcase-section">
        <div className="container">
          <div className="pp-showcase-card">
            <div className="pp-img-wrapper" onClick={() => setLightboxOpen(true)}>
              <img 
                src={ppFeaturedImg} 
                alt="Polypropylene Liquid Filter Bag with Molded Snap Collar" 
                className="pp-featured-img" 
              />
              <div className="pp-zoom-hint">
                <Maximize2 size={15} />
                <span>Click to Zoom 4K Ultra-HD</span>
              </div>
            </div>

            <div className="pp-showcase-info">
              <span className="pp-tag-pill">
                <Sparkles size={12} />
                <span>Factory Direct · ISO 9001 Quality</span>
              </span>

              <h2 className="pp-showcase-title">
                Engineered for 100% Leak-Proof Liquid Clarification
              </h2>

              <p className="pp-showcase-desc">
                Our Polypropylene filter bags feature ultrasonic fusion-welded seams and precision-molded self-sealing collar rings. By eliminating needle puncture holes, every single drop of process fluid is filtered through the depth matrix without risk of unfiltered contaminant bypass.
              </p>

              <div className="pp-highlights-list">
                <div className="pp-highlight-item">
                  <CheckCircle2 size={18} className="pp-check-icon" />
                  <span><strong>100% Ultrasonic Welded Seams:</strong> Thermo-bonded joints prevent bypass leakage</span>
                </div>
                <div className="pp-highlight-item">
                  <CheckCircle2 size={18} className="pp-check-icon" />
                  <span><strong>Ergonomic Molded Snap Collar:</strong> Hermetic seal with built-in lifting handles</span>
                </div>
                <div className="pp-highlight-item">
                  <CheckCircle2 size={18} className="pp-check-icon" />
                  <span><strong>Glazed & Singed Surface:</strong> Calendered finish eliminates fiber migration into clean fluid</span>
                </div>
                <div className="pp-highlight-item">
                  <CheckCircle2 size={18} className="pp-check-icon" />
                  <span><strong>Graded-Density Depth Matrix:</strong> Captures high contaminant volumes at low pressure drop</span>
                </div>
              </div>

              <div className="pp-showcase-footer">
                <a href="#poly-rfq" className="pp-btn-rfq">
                  <span>Inquire for Your Vessel</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES & TECHNICAL ADVANTAGES */}
      <section className="pp-section">
        <div className="container">
          <div className="pp-section-header">
            <div className="pp-section-tag">Core Technical Advantages</div>
            <h2 className="pp-section-title">Why Industries Choose VS Filtech PP Bags</h2>
            <p className="pp-section-desc">
              From water treatment RO membranes to high-purity chemical and food clarification, our polypropylene filter bags are built for superior operational stability and cost efficiency.
            </p>
          </div>

          <div className="pp-features-grid">
            {keyFeatures.map((feat, idx) => (
              <div key={idx} className="pp-feature-card">
                <div className="pp-feature-icon">
                  {idx === 0 && <Filter size={26} />}
                  {idx === 1 && <FlaskConical size={26} />}
                  {idx === 2 && <Layers size={26} />}
                  {idx === 3 && <ShieldCheck size={26} />}
                  {idx === 4 && <Gauge size={26} />}
                  {idx === 5 && <Factory size={26} />}
                </div>
                <h3 className="pp-feature-title">{feat.title}</h3>
                <p className="pp-feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEDIA VARIATIONS (Felt vs Mesh) */}
      <section className="pp-section">
        <div className="container">
          <div className="pp-section-header">
            <div className="pp-section-tag">Media Portfolio</div>
            <h2 className="pp-section-title">Polypropylene Media Varieties</h2>
            <p className="pp-section-desc">
              Select the optimal media configuration for your fluid viscosity, particulate load, and changeout parameters.
            </p>
          </div>

          <div className="pp-media-grid">
            {mediaVariations.map((media, idx) => (
              <div key={idx} className="pp-media-card">
                <div>
                  <div className="pp-media-tag">{media.tag}</div>
                  <h3 className="pp-media-name">{media.name}</h3>
                  <p className="pp-media-desc">{media.desc}</p>
                </div>
                <div>
                  <div className="pp-media-specs-row">
                    <span>Micron Range</span>
                    <span>{media.micron}</span>
                  </div>
                  <div className="pp-media-specs-row">
                    <span>Temperature</span>
                    <span>{media.temp}</span>
                  </div>
                  <div className="pp-media-specs-row">
                    <span>Target Fluids</span>
                    <span>{media.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STANDARD SIZES TABLE */}
      <section className="pp-section">
        <div className="container">
          <div className="pp-section-header">
            <div className="pp-section-tag">Vessel Compatibility</div>
            <h2 className="pp-section-title">Standard Bag Sizes & Flow Capacities</h2>
            <p className="pp-section-desc">
              Compatible with all major pressure vessel housings including Eaton, FSI, Parker, and custom multi-bag skids.
            </p>
          </div>

          <div className="pp-table-scroll-hint">
            <span>Scroll horizontally to view all specs &rarr;</span>
          </div>

          <div className="pp-sizes-table-wrap">
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Industry Size</th>
                  <th>Diameter</th>
                  <th>Length</th>
                  <th>Filtration Area</th>
                  <th>Typical Flow Rate</th>
                  <th>Classification</th>
                </tr>
              </thead>
              <tbody>
                {standardSizes.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.size}</strong></td>
                    <td>{row.diameter}</td>
                    <td>{row.length}</td>
                    <td>{row.area}</td>
                    <td>{row.flow}</td>
                    <td><span className="pp-badge-highlight">{row.badge}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL SPECIFICATIONS TABLE */}
      <section id="poly-specs" className="pp-section">
        <div className="container">
          <div className="pp-section-header">
            <div className="pp-section-tag">Engineering Parameters</div>
            <h2 className="pp-section-title">Technical Specifications Sheet</h2>
            <p className="pp-section-desc">
              Comprehensive physical, thermal, and chemical tolerance data for process engineering validation.
            </p>
          </div>

          <div className="pp-table-scroll-hint">
            <span>Scroll horizontally to view certified parameters &rarr;</span>
          </div>

          <div className="pp-specs-table-wrap">
            <table className="pp-table">
              <thead>
                <tr>
                  <th style={{ width: '38%' }}>Engineering Parameter</th>
                  <th>Certified Value & Specification</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, idx) => (
                  <tr key={idx}>
                    <td><strong>{spec.param}</strong></td>
                    <td>{spec.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. APPLICATIONS SECTION */}
      <section className="pp-section">
        <div className="container">
          <div className="pp-section-header">
            <div className="pp-section-tag">Target Industries</div>
            <h2 className="pp-section-title">Industrial Applications & Fluid Streams</h2>
            <p className="pp-section-desc">
              Delivering high-purity liquid clarification and equipment protection across heavy process industries.
            </p>
          </div>

          <div className="pp-app-grid">
            {applications.map((app, idx) => (
              <div key={idx} className="pp-app-card">
                <div className="pp-app-num">{app.num}</div>
                <h3 className="pp-app-title">{app.title}</h3>
                <p className="pp-app-desc">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNICAL READMORE ACCORDION */}
      <section className="pp-section">
        <div className="container">
          <div className="pp-section-header">
            <div className="pp-section-tag">Engineering Insights</div>
            <h2 className="pp-section-title">Technical FAQ & Sizing Guide</h2>
            <p className="pp-section-desc">
              Frequently requested technical parameters and best practices for baghouse and liquid filtration engineers.
            </p>
          </div>

          <div className="pp-readmore-box">
            {technicalGuides.map((guide, idx) => (
              <div key={idx} className="pp-accordion-item">
                <button 
                  type="button"
                  className="pp-accordion-header"
                  onClick={() => setOpenGuide(openGuide === idx ? -1 : idx)}
                >
                  <span>{guide.q}</span>
                  <ChevronDown 
                    size={20} 
                    className="pp-accordion-icon" 
                    style={{ transform: openGuide === idx ? 'rotate(180deg)' : 'none' }}
                  />
                </button>
                {openGuide === idx && (
                  <div className="pp-accordion-content">
                    <p>{guide.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHATSAPP RFQ DESK */}
      <section id="poly-rfq" className="pp-section">
        <div className="container">
          <div className="pp-rfq-wrap">
            <div className="pp-rfq-info">
              <div>
                <div className="pp-section-tag">Instant Technical RFQ</div>
                <h2 className="pp-showcase-title" style={{ marginBottom: '1.25rem' }}>
                  Request Fast Quotation for PP Filter Bags
                </h2>
                <p className="pp-showcase-desc" style={{ marginBottom: '2rem' }}>
                  Connect directly with our senior filtration engineers in Ghaziabad, India. We offer rapid dispatch for standard Size 1 & Size 2 bags, custom micron testing, and contract manufacturing.
                </p>

                <div className="pp-highlights-list">
                  <div className="pp-highlight-item">
                    <CheckCircle2 size={18} className="pp-check-icon" />
                    <span>Same-day dispatch on standard Size 1 & 2 bags</span>
                  </div>
                  <div className="pp-highlight-item">
                    <CheckCircle2 size={18} className="pp-check-icon" />
                    <span>Free sample bags for plant trial validation</span>
                  </div>
                  <div className="pp-highlight-item">
                    <CheckCircle2 size={18} className="pp-check-icon" />
                    <span>Custom CAD stitching & vessel fitting support</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '0.35rem' }}>
                  Direct Factory Desk:
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#00e5ff' }}>
                  +91 1234567890
                </div>
              </div>
            </div>

            <form className="pp-rfq-form" onSubmit={handleSubmit}>
              <div className="pp-form-row">
                <div className="pp-form-group">
                  <label className="pp-form-label">Full Name / Contact Person *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rajesh Sharma"
                    className="pp-form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="pp-form-group">
                  <label className="pp-form-label">WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 1234567890"
                    className="pp-form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="pp-form-row">
                <div className="pp-form-group">
                  <label className="pp-form-label">Company Email</label>
                  <input 
                    type="email" 
                    placeholder="procurement@company.com"
                    className="pp-form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="pp-form-group">
                  <label className="pp-form-label">Estimated Quantity</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 50 pcs / 200 pcs"
                    className="pp-form-input"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>
              </div>

              <div className="pp-form-row">
                <div className="pp-form-group">
                  <label className="pp-form-label">Bag Size</label>
                  <select 
                    className="pp-form-select"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  >
                    <option value='Size 2 (7" x 32" / 810mm)'>Size 2 (7" x 32" / 810mm) - Most Popular</option>
                    <option value='Size 1 (7" x 17" / 430mm)'>Size 1 (7" x 17" / 430mm)</option>
                    <option value='Size 3 (4" x 9" / 230mm)'>Size 3 (4" x 9" / 230mm)</option>
                    <option value='Size 4 (4" x 15" / 380mm)'>Size 4 (4" x 15" / 380mm)</option>
                    <option value="Custom Engineered Size">Custom Engineered Size</option>
                  </select>
                </div>
                <div className="pp-form-group">
                  <label className="pp-form-label">Micron Rating</label>
                  <select 
                    className="pp-form-select"
                    value={formData.micron}
                    onChange={(e) => setFormData({ ...formData, micron: e.target.value })}
                  >
                    <option value="1 Micron">1 Micron (Fine Liquid Polishing)</option>
                    <option value="5 Micron">5 Micron (Standard RO Guard)</option>
                    <option value="10 Micron">10 Micron</option>
                    <option value="25 Micron">25 Micron</option>
                    <option value="50 Micron">50 Micron</option>
                    <option value="75 Micron">75 Micron</option>
                    <option value="100 Micron">100 Micron</option>
                    <option value="200 Micron">200 Micron (Coarse Filtration)</option>
                  </select>
                </div>
              </div>

              <div className="pp-form-group">
                <label className="pp-form-label">Collar Ring Style</label>
                <select 
                  className="pp-form-select"
                  value={formData.collar}
                  onChange={(e) => setFormData({ ...formData, collar: e.target.value })}
                >
                  <option value="PP Molded Snap Collar with Handle">PP Molded Snap Collar with Ergonomic Handle (Hermetic Seal)</option>
                  <option value="Stainless Steel 304/316 Ring">Stainless Steel 304/316 Metal Collar</option>
                  <option value="Carbon Steel Snap Band">Carbon Steel Snap Band</option>
                  <option value="Drawstring Collar">Heavy-Duty Drawstring Collar</option>
                </select>
              </div>

              <div className="pp-form-group">
                <label className="pp-form-label">Application Details & Liquid Type</label>
                <textarea 
                  rows="3" 
                  placeholder="Describe your fluid, operating temperature, and any current issues with bag bypass or pressure drop..."
                  className="pp-form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="pp-form-submit">
                <MessageCircle size={20} />
                <span>Send WhatsApp RFQ to Technical Desk</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="pp-modal-overlay" onClick={() => setLightboxOpen(false)}>
          <div className="pp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="pp-modal-close" 
              onClick={() => setLightboxOpen(false)}
              aria-label="Close Preview"
            >
              <X size={24} />
            </button>
            <img 
              src={ppFeaturedImg} 
              alt="4K Full Resolution Polypropylene Filter Bag" 
              className="pp-modal-img" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPoly;
