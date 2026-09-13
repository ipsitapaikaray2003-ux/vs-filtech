import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  Factory, 
  Flame, 
  Mountain, 
  Layers,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  X
} from 'lucide-react';

import pulseJetImg from '../assets/factory_bagfilter_plant_hd.jpg';
import pleatedImg from '../assets/pleated_filter_bag.jpeg';
import baghouseCycloneImg from '../assets/hero_baghouse.jpg';
import fumeImg from '../assets/indoor_ducting.jpg';
import filterBagImg from '../assets/filter_bag_hd.jpg';
import solenoidImg from '../assets/solenoid_valve.webp';

// 5 Genuine High-Resolution Industrial Photography Assets
import industryCementImg from '../assets/industry_cement.jpg';
import industryPowerImg from '../assets/industry_power.jpg';
import industrySteelImg from '../assets/industry_steel.jpg';
import industryMetalsImg from '../assets/industry_metals.jpg';
import industryCarbonBlackImg from '../assets/industry_carbon_black.jpg';

import controlPanelMcc from '../assets/control_panel_mcc_product.jpg';

import './Products.css';

// 6 Core Product Categories
const systemProducts = [
  {
    title: 'Pulse Jet Bag Filters',
    tag: 'CORE EQUIPMENT',
    tagClass: 'badge-cyan',
    image: pulseJetImg,
    lead: 'Custom-engineered online and offline pulse jet bag filters for industrial dust collection applications.',
    bullets: [
      'Continuous online or offline compartmentalized cleaning',
      'Configured for high air volumes and process dust loads',
      'Laser-cut tube sheets with clean-air plenum roof access'
    ],
    detailsLink: '/products/pulse-jet-filter',
    quoteLink: '/contact?product=Pulse-Jet-Bag-Filters'
  },
  {
    title: 'Dust Collection Systems',
    tag: 'COMPLETE INSTALLATIONS',
    tagClass: 'badge-blue',
    image: baghouseCycloneImg,
    lead: 'Complete systems including hoods, ducting, dampers, bag filters, fans and dust discharge arrangements.',
    bullets: [
      'Articulated capture hoods & aerodynamic duct design',
      'Integrated cyclone pre-separators & fabric baghouses',
      'Heavy-duty ID fans & rotary airlock discharge systems'
    ],
    detailsLink: '/products/dust-collector-system',
    quoteLink: '/contact?product=Dust-Collection-Systems'
  },
  {
    title: 'Filter Bags & Cages',
    tag: 'FILTRATION MEDIA & CAGES',
    tagClass: 'badge-amber',
    image: filterBagImg,
    lead: 'Replacement filter bags and cages selected according to application, temperature, dust characteristics and filtration requirements.',
    bullets: [
      'Polyester, Aramid, PPS, PTFE, and Fiberglass media',
      'Rigid 8 to 24-wire precision-welded anti-collapse cages',
      'Airtight snap-band collar sealing with supersonic venturis'
    ],
    detailsLink: '/products/filter-bags-cages',
    quoteLink: '/contact?product=Filter-Bags-Cages'
  },
  {
    title: 'Cartridge Filters',
    tag: 'COMPACT HIGH SURFACE AREA',
    tagClass: 'badge-emerald',
    image: pleatedImg,
    lead: 'Compact filtration solutions for applications where high filtration area is required in limited space.',
    bullets: [
      '2.5x to 3x higher filtration surface area in compact footprint',
      'Pleated spunbond polyester media with ePTFE membranes',
      'Direct retrofit options into existing baghouse tube sheets'
    ],
    detailsLink: '/products/pleated-filter-bag',
    quoteLink: '/contact?product=Cartridge-Filters'
  },
  {
    title: 'Dampers & Accessories',
    tag: 'AIRFLOW & SYSTEM ACCESSORIES',
    tagClass: 'badge-purple',
    image: fumeImg,
    lead: 'Industrial dampers, valves and accessories for airflow control and dust collection systems.',
    bullets: [
      'Isolation poppet dampers, butterfly valves & multi-louvers',
      'Rotary airlocks, screw conveyors & double flap valves',
      'Engineered for reliable gas balancing and dust isolation'
    ],
    detailsLink: '/products/cyclone-dust-collector',
    quoteLink: '/contact?product=Dampers-Accessories'
  },
  {
    title: 'Control Panel & Automation Systems',
    tag: 'ELECTRICAL & AUTOMATION',
    tagClass: 'badge-rose',
    image: controlPanelMcc,
    lead: 'Electrical control panels and automation solutions for bag-filter cleaning, monitoring and system operation.',
    bullets: [
      'Microprocessor sequential pulse cleaning timers',
      'Real-time differential pressure (DP) monitoring & on-demand pulse',
      'VFD ID fan speed modulation, motor starters & safety interlocks'
    ],
    detailsLink: '/products/control-panels',
    quoteLink: '/contact?product=Control-Panels'
  }
];

// 5 Dedicated Core Industries with Genuine Photography (Thermax Benchmark)
const industriesWeServe = [
  {
    id: 'cement',
    name: 'Cement',
    headline: 'Kiln Exhaust & Silo Venting',
    image: industryCementImg,
    badge: 'HEAVY PROCESS',
    solutions: [
      'Kiln exhaust & raw mill baghouses with acid-tolerant PTFE membrane media',
      'Clinker cooler gas cleaning with specialized high-temperature heat dissipation',
      'Coal mill dust collectors equipped with certified ATEX explosion vents',
      'Circular flanged silo venting filters for cement, lime, and fly ash storage'
    ],
    emissionNorm: '< 10 mg/Nm³ CPCB Compliance',
    mediaRecommendation: 'PTFE Membrane on Fiberglass / Nomex / Polyimide'
  },
  {
    id: 'power',
    name: 'Power',
    headline: 'Boilers & Fly Ash Handling',
    image: industryPowerImg,
    badge: 'HIGH TEMPERATURE',
    solutions: [
      'Flue gas desulfurization (FGD) and boiler particulate emission control',
      'Fly ash pneumatic conveying reception filters with automatic pulse purging',
      'Biomass, pulverized coal, and stoker boiler flue gas filtration',
      'Heavy-duty backward curved ID fans handling high static pressures'
    ],
    emissionNorm: '< 10 mg/Nm³ Guaranteed',
    mediaRecommendation: 'PPS (Ryton) & P84 Polyimide with Acid-Resistant Finish'
  },
  {
    id: 'steel',
    name: 'Steel',
    headline: 'Furnaces & Rolling Mills',
    image: industrySteelImg,
    badge: 'METALLURGY',
    solutions: [
      'Electric Arc Furnace (EAF) 4th-hole direct evacuation and canopy hoods',
      'Ladle Refining Furnace (LRF) and blast furnace secondary fume extraction',
      'Continuous casting, sinter plant waste gas, and pelletizing baghouses',
      'Heavy rolling mill scale collection and slab scarfing dust systems'
    ],
    emissionNorm: 'Continuous 24/7 Heavy Duty',
    mediaRecommendation: 'Singed Polyester Needlefelt with Oil & Water Repellent (OWR)'
  },
  {
    id: 'metals',
    name: 'Metals',
    headline: 'Foundries & Smelters',
    image: industryMetalsImg,
    badge: 'SMELTING & CASTING',
    solutions: [
      'Induction melting furnace swing hoods with automatic damper control',
      'Foundry return sand reclamation, shakeout, and shot-blasting filtration',
      'Secondary Aluminium, Copper, Zinc & Lead refining baghouses',
      'Inline spark arrestor chambers preventing burning embers from entering bags'
    ],
    emissionNorm: 'Zero Fugitive Emission Capture',
    mediaRecommendation: 'High-Density Needlefelt with Spark Arrestor Protection'
  },
  {
    id: 'carbon-black',
    name: 'Carbon Black',
    headline: 'Sub-Micron Particulate Recovery',
    image: industryCarbonBlackImg,
    badge: 'SUB-MICRON RECOVERY',
    solutions: [
      'High-temperature reactor process baghouses for valuable product recovery',
      'Sub-micron particulate capture with ePTFE micro-pore surface filtration',
      'Pelletizer dryer exhaust cleaning and pneumatic transfer receiver collectors',
      'Epitropic antistatic conductive cages and certified explosion relief panels'
    ],
    emissionNorm: '99.99% Sub-Micron Product Capture',
    mediaRecommendation: 'Conductive Antistatic Needlefelt with Microporous ePTFE'
  }
];

const Products = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <section id="products" className="products-showcase-section">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="products-section-header">
          <div className="products-luxury-tag">
            <Sparkles size={14} style={{ color: '#0284c7' }} /> 
            <span>INDUSTRIAL FILTRATION &amp; DUST EXTRACTION</span>
          </div>

          <h2 className="products-main-title">
            Engineered Systems &amp; <span style={{
              background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>High-Efficiency Collectors</span>
          </h2>

          <p className="products-main-lead">
            Custom engineered for heavy-duty industrial continuous operations, guaranteed statutory emission limits (&lt;10 mg/Nm³), 
            and maximum uptime across manufacturing plants in India.
          </p>
        </div>

        {/* 6 Featured Product Cards (Matching Reference Layout) */}
        <div className="umiya-product-cards-grid">
          {systemProducts.map((prod, idx) => (
            <div key={idx} className="umiya-product-card">
              {/* Image with Tag */}
              <div className="umiya-card-media">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="umiya-card-img"
                  loading="lazy"
                />
                <div className="umiya-media-gradient" />
                <span className={`umiya-card-tag ${prod.tagClass || ''}`}>{prod.tag}</span>
              </div>

              {/* Body */}
              <div className="umiya-card-body">
                <h3 className="umiya-card-title">{prod.title}</h3>

                {prod.lead && (
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.5', marginBottom: '14px' }}>
                    {prod.lead}
                  </p>
                )}

                {/* Bullet Points with Orange Markers */}
                <ul className="umiya-bullet-list">
                  {prod.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="umiya-bullet-item">
                      <span className="umiya-orange-dot" />
                      <span className="umiya-bullet-text">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Dual Action Buttons */}
                <div className="umiya-buttons-row">
                  <Link to={prod.detailsLink} className="umiya-btn-view">
                    VIEW DETAILS
                  </Link>

                  <Link to={prod.quoteLink} className="umiya-btn-quote">
                    <span>GET QUOTE</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Industries We Serve (Thermax Photographic Showcase) ── */}
        <div className="thermax-industries-wrapper">
          <div className="thermax-section-header">
            <h3 className="thermax-title">Industries We Serve</h3>
            <p className="thermax-lead">
              Precision air pollution control systems engineered for extreme dust loadings, toxic fumes, 
              and high process temperatures across core manufacturing sectors.
            </p>
          </div>

          {/* 5 Dedicated Photographic Cards */}
          <div className="thermax-cards-container">
            {industriesWeServe.map((ind) => (
              <div
                key={ind.id}
                className="thermax-industry-card"
                onClick={() => setSelectedIndustry(ind)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedIndustry(ind);
                  }
                }}
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="thermax-card-img"
                  loading="lazy"
                />
                <div className="thermax-card-overlay" />

                {/* Centered Title Exactly Like Reference */}
                <div className="thermax-card-content">
                  <span className="thermax-badge">{ind.badge}</span>
                  <h4 className="thermax-card-title">{ind.name}</h4>
                  <p className="thermax-card-sub">{ind.headline}</p>
                  
                  <div className="thermax-hover-cta">
                    <span>Explore {ind.name} Solutions</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal / Detailed Drawer for Selected Industry */}
          {selectedIndustry && (
            <div className="industry-modal-backdrop" onClick={() => setSelectedIndustry(null)}>
              <div 
                className="industry-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="industry-modal-close"
                  onClick={() => setSelectedIndustry(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <div className="industry-modal-header">
                  <span className="industry-modal-pill">{selectedIndustry.badge}</span>
                  <h3>{selectedIndustry.name} Industry Filtration Systems</h3>
                  <p>{selectedIndustry.headline}</p>
                </div>

                <div className="industry-modal-body">
                  <div className="modal-img-wrap">
                    <img src={selectedIndustry.image} alt={selectedIndustry.name} />
                  </div>

                  <div className="modal-details-col">
                    <h4>Engineered Applications for {selectedIndustry.name}</h4>
                    <ul className="modal-solutions-list">
                      {selectedIndustry.solutions.map((sol, sIdx) => (
                        <li key={sIdx}>
                          <CheckCircle2 size={16} className="modal-check-icon" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="modal-specs-grid">
                      <div className="modal-spec-box">
                        <span className="spec-label">Guaranteed Emission</span>
                        <strong className="spec-val">{selectedIndustry.emissionNorm}</strong>
                      </div>
                      <div className="modal-spec-box">
                        <span className="spec-label">Recommended Media</span>
                        <strong className="spec-val">{selectedIndustry.mediaRecommendation}</strong>
                      </div>
                    </div>

                    <div className="modal-cta-row">
                      <Link 
                        to={`/contact?industry=${selectedIndustry.id}`}
                        className="btn-modal-quote"
                        onClick={() => setSelectedIndustry(null)}
                      >
                        <span>Request {selectedIndustry.name} Proposal</span>
                        <ArrowRight size={16} />
                      </Link>
                      <a 
                        href="tel:+911234567890" 
                        className="btn-modal-call"
                      >
                        <PhoneCall size={16} />
                        <span>Call +91 1234567890</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Catalog Link */}
        <div className="products-explore-bar">
          <div className="explore-text-col">
            <h4>Looking for Specific Spares, Cages, or Replacement Bags?</h4>
            <p>We manufacture and supply all 14 industrial equipment, instruments, valves, and filter media types.</p>
          </div>
          <Link to="/products" className="btn-explore-catalog">
            <span>Explore All 14 Equipment Items</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;

