import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Factory, 
  Building2, 
  Zap, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight, 
  ArrowUpRight,
  PhoneCall,
  FileText,
  Activity,
  Award
} from 'lucide-react';

import peHero1 from '../assets/pe_hero1.jpg';
import peHero2 from '../assets/pe_hero2.jpg';
import peHero3 from '../assets/pe_hero3.jpg';
import peHero4 from '../assets/pe_hero4.jpg';

import peHtPanel from '../assets/pe_htpanel.jpg';
import peLtPanel from '../assets/pe_ltpanel.jpg';
import pePccPanel from '../assets/pe_pccpanel.webp';
import peMccPanel from '../assets/pe_mccpanel.jpg';
import peApfcPanel from '../assets/pe_apfcpanel.png';
import peBusDuct from '../assets/pe_busduct.jpg';
import vfdPlcImg from '../assets/vfd_plc_panel_product.jpg';

import './PowerEngineersPanelDetail.css';

// Exact configurations from thepowerengineers.com
const panelDetailsMap = {
  'ht-panel': {
    bannerTitle: 'HT Panels',
    bannerSubtitle: 'High Tension Electrical Panels for Industrial Power Distribution',
    bannerImg: peHero1,
    productImage: peHtPanel,
    productHeadline: 'High Tension Electrical Panels',
    overview1: 'HT Panels are manufactured using premium quality components to ensure safe and reliable power distribution in industrial plants, substations and commercial facilities.',
    overview2: 'Our panels are designed according to industry standards with maximum safety, durability and operational efficiency.',
    features: [
      { title: 'High Safety', desc: 'Designed with advanced protection systems for maximum electrical safety.' },
      { title: 'Robust Construction', desc: 'Built using premium quality CRCA sheets and branded components.' },
      { title: 'Reliable Performance', desc: 'Ensures uninterrupted power distribution with long service life.' },
      { title: 'Easy Maintenance', desc: 'User-friendly design for quick inspection and maintenance.' }
    ],
    applications: [
      'Manufacturing Industries',
      'Commercial Buildings',
      'Power Plants',
      'Textile Industries',
      'Pharmaceutical Units',
      'Food Processing Plants'
    ],
    specs: [
      { parameter: 'Rated Voltage', value: 'Up to 33 KV' },
      { parameter: 'Frequency', value: '50 Hz' },
      { parameter: 'Protection', value: 'IP42 / IP54 / IP65' },
      { parameter: 'Material', value: 'CRCA Sheet Steel' },
      { parameter: 'Painting', value: 'Powder Coated' },
      { parameter: 'Standards', value: 'IEC / IS Standards' }
    ],
    ctaTitle: 'Looking For High Quality HT Panels?',
    ctaDesc: 'Contact our experts for customized High Tension Panel solutions designed according to your industrial requirements.'
  },

  'lt-panel': {
    bannerTitle: 'LT Panels',
    bannerSubtitle: 'Reliable Low Tension Distribution Panels for Industrial & Commercial Applications',
    bannerImg: peHero2,
    productImage: peLtPanel,
    productHeadline: 'Low Tension Electrical Panels',
    overview1: 'LT Panels are designed for safe and efficient power distribution in commercial buildings, industries and infrastructure projects.',
    overview2: 'Manufactured with premium components, our LT Panels provide reliable performance, maximum safety and long operational life.',
    features: [
      { title: 'High Reliability', desc: 'Designed for uninterrupted power distribution.' },
      { title: 'Premium Components', desc: 'Manufactured using branded electrical accessories.' },
      { title: 'Easy Maintenance', desc: 'Compact design for easy servicing and operation.' },
      { title: 'Long Service Life', desc: 'Strong construction with corrosion resistant finish.' }
    ],
    applications: [
      'Manufacturing Industries',
      'Commercial Buildings',
      'Power Plants',
      'Dust Collector Substations',
      'Chemical & Process Plants',
      'Infrastructure Projects'
    ],
    specs: [
      { parameter: 'Rated Voltage', value: '415 V' },
      { parameter: 'Frequency', value: '50 Hz' },
      { parameter: 'Protection', value: 'IP42 / IP54 / IP65' },
      { parameter: 'Material', value: 'CRCA Sheet Steel' },
      { parameter: 'Finish', value: 'Powder Coated' },
      { parameter: 'Standards', value: 'IEC / IS Standards' }
    ],
    ctaTitle: 'Need Premium LT Panels?',
    ctaDesc: 'Contact our experts for customized Low Tension Panel solutions.'
  },

  'pcc-panel': {
    bannerTitle: 'PCC Panels',
    bannerSubtitle: 'Premium Power Control Centre Panels for Safe & Efficient Power Distribution',
    bannerImg: peHero3,
    productImage: pePccPanel,
    productHeadline: 'Power Control Centre Panels',
    overview1: 'PCC Panels are designed for centralized power distribution and control in industrial and commercial applications.',
    overview2: 'Manufactured with premium quality components to ensure maximum safety, efficiency and uninterrupted operation.',
    features: [
      { title: 'Reliable Power Control', desc: 'Efficient monitoring and control of electrical systems.' },
      { title: 'Premium Components', desc: 'Built with high-quality branded electrical equipment.' },
      { title: 'High Safety', desc: 'Designed according to industry safety standards.' },
      { title: 'Easy Maintenance', desc: 'Compact modular design for hassle-free servicing.' }
    ],
    applications: [
      'Industrial Primary Substations',
      'Heavy Process Plants',
      'Cement & Steel Plants',
      'Power Generation Stations',
      'Chemical Refineries',
      'Commercial Complexes'
    ],
    specs: [
      { parameter: 'Rated Voltage', value: '415 V' },
      { parameter: 'Frequency', value: '50 Hz' },
      { parameter: 'Current Rating', value: 'Up to 6300 A' },
      { parameter: 'Protection', value: 'IP42 / IP54 / IP65' },
      { parameter: 'Material', value: 'CRCA Sheet Steel' },
      { parameter: 'Finish', value: 'Powder Coated' }
    ],
    ctaTitle: 'Looking For PCC Panels?',
    ctaDesc: 'Contact our experts for customized Power Control Centre Panel solutions.'
  },

  'mcc-panel': {
    bannerTitle: 'MCC Panels',
    bannerSubtitle: 'Premium Motor Control Centre Panels for Safe & Efficient Motor Control Applications',
    bannerImg: peHero4,
    productImage: peMccPanel,
    productHeadline: 'Motor Control Centre Panels',
    overview1: 'MCC Panels are designed to provide centralized control and protection for multiple motors in industrial plants.',
    overview2: 'Manufactured with premium electrical components for reliable operation, safety and long service life.',
    features: [
      { title: 'Motor Protection', desc: 'Provides safe and reliable motor control.' },
      { title: 'Modular Design', desc: 'Easy installation, maintenance and future expansion.' },
      { title: 'High Safety', desc: 'Designed according to industrial safety standards.' },
      { title: 'Energy Efficient', desc: 'Optimized design for efficient power utilization.' }
    ],
    applications: [
      'Baghouse ID Fan & Blower Motors',
      'Rotary Airlocks & Screw Conveyors',
      'Manufacturing Industries',
      'Material Handling Systems',
      'Textile & Paper Mills',
      'Crushing & Screening Units'
    ],
    specs: [
      { parameter: 'Rated Voltage', value: '415 V' },
      { parameter: 'Frequency', value: '50 Hz' },
      { parameter: 'Protection', value: 'IP42 / IP54 / IP65' },
      { parameter: 'Starters', value: 'DOL / Star-Delta / Soft Starter' },
      { parameter: 'Material', value: 'CRCA Sheet Steel' },
      { parameter: 'Finish', value: 'Powder Coated' }
    ],
    ctaTitle: 'Need Reliable MCC Panels?',
    ctaDesc: 'Contact our experts for customized Motor Control Centre Panel solutions.'
  },

  'apfc-panel': {
    bannerTitle: 'APFC Panels',
    bannerSubtitle: 'Automatic Power Factor Control Panels for Efficient Power Management and Energy Saving',
    bannerImg: peHero1,
    productImage: peApfcPanel,
    productHeadline: 'Automatic Power Factor Control Panels',
    overview1: 'APFC Panels are designed to improve power factor, reduce electricity losses and optimize energy efficiency.',
    overview2: 'Manufactured with intelligent controllers and premium components to ensure reliable and automatic power factor correction.',
    features: [
      { title: 'Automatic Power Factor Correction', desc: 'Maintains optimum power factor automatically.' },
      { title: 'Energy Saving', desc: 'Reduces electricity losses and utility penalties.' },
      { title: 'Intelligent Controller', desc: 'Fast response with accurate capacitor switching.' },
      { title: 'Long Service Life', desc: 'Premium quality components for reliable operation.' }
    ],
    applications: [
      'Manufacturing Industries with Motor Loads',
      'Bag Filter Blower Substations',
      'Commercial Buildings',
      'Rolling Mills & Foundries',
      'Textile Industries',
      'Data Centers & Infrastructure'
    ],
    specs: [
      { parameter: 'Rated Voltage', value: '415 V' },
      { parameter: 'Frequency', value: '50 Hz' },
      { parameter: 'Power Factor', value: 'Up to 0.99' },
      { parameter: 'Protection', value: 'IP42 / IP54 / IP65' },
      { parameter: 'Material', value: 'CRCA Sheet Steel' },
      { parameter: 'Finish', value: 'Powder Coated' }
    ],
    ctaTitle: 'Need APFC Panels?',
    ctaDesc: 'Contact our experts for customized APFC Panel solutions.'
  },

  'bus-duct': {
    bannerTitle: 'Bus Duct System',
    bannerSubtitle: 'Efficient Power Distribution Solutions For Industrial & Commercial Applications',
    bannerImg: peHero2,
    productImage: peBusDuct,
    productHeadline: 'Bus Duct Distribution System',
    overview1: 'Bus Duct Systems provide a safe, reliable and efficient method of electrical power distribution for industrial and commercial facilities.',
    overview2: 'Designed using premium quality materials, our Bus Ducts ensure low maintenance, excellent conductivity and long service life.',
    features: [
      { title: 'Compact Design', desc: 'Space-saving and modular design for easy installation.' },
      { title: 'High Conductivity', desc: 'Copper and aluminium bus bars ensure efficient power transmission.' },
      { title: 'Fire Resistant', desc: 'Manufactured with high-quality insulated materials for maximum safety.' },
      { title: 'Low Maintenance', desc: 'Robust construction with long operational life and minimum maintenance.' }
    ],
    applications: [
      'Manufacturing Industries',
      'Commercial Buildings',
      'Power Plants',
      'Data Centers',
      'Shopping Malls',
      'Infrastructure Projects'
    ],
    specs: [
      { parameter: 'Rated Voltage', value: 'Up to 690 V' },
      { parameter: 'Rated Current', value: '100 A – 6300 A' },
      { parameter: 'Frequency', value: '50 / 60 Hz' },
      { parameter: 'Protection', value: 'IP42 / IP54 / IP65' },
      { parameter: 'Conductor', value: 'Copper / Aluminium' },
      { parameter: 'Standards', value: 'IEC 61439 / IS Standards' }
    ],
    ctaTitle: 'Looking For Reliable Bus Duct Systems?',
    ctaDesc: 'Contact our experts for customized Bus Duct solutions designed for industrial, commercial and infrastructure applications.'
  },

  'vfd-panel': {
    bannerTitle: 'VFD Drive Panels',
    bannerSubtitle: 'Variable Frequency Drive Panels for Bag Filter ID Fans & Process Ventilation',
    bannerImg: peHero3,
    productImage: vfdPlcImg,
    productHeadline: 'Variable Frequency Drive Panels for ID Fans',
    overview1: 'VFD Drive Panels are designed to dynamically modulate fan speed according to real-time duct differential pressure, eliminating damper throttling and saving 25% to 40% electrical power.',
    overview2: 'Manufactured with branded Danfoss, Siemens, Schneider, and ABB drives with line chokes and dV/dt output filters for smooth, soft-starting motor protection.',
    features: [
      { title: 'Closed-Loop Airflow Regulation', desc: 'Automatically regulates ID fan speed based on 4-20mA differential pressure feedback.' },
      { title: '25% - 40% Energy Savings', desc: 'Applies fan affinity cube laws to dramatically reduce kWh electricity consumption.' },
      { title: 'Zero-Inrush Soft Starting', desc: 'Eliminates mechanical stress on impellers, bearings, and V-belts.' },
      { title: 'Harmonics & Motor Protection', desc: 'Built-in DC chokes and dV/dt filters protect motor insulation from voltage spikes.' }
    ],
    applications: [
      'Baghouse Induced Draft (ID) Fans',
      'Boiler Exhaust Flue Gas Blowers',
      'Fume Extraction Plants',
      'Pneumatic Conveying Blowers',
      'Foundry Furnace Suction Fans',
      'Cement Kiln & Raw Mill Venting'
    ],
    specs: [
      { parameter: 'Rated Voltage', value: '380V - 480V AC, 3-Phase, 50/60 Hz' },
      { parameter: 'Motor Power', value: '5.5 kW to 350+ kW (7.5 - 500 HP)' },
      { parameter: 'Speed Modulation', value: 'Closed-loop PID on 4-20mA DP feedback' },
      { parameter: 'Bypass Circuit', value: 'Integrated Star-Delta bypass switch' },
      { parameter: 'Protection', value: 'IP54 / IP55 forced cooling / AC' },
      { parameter: 'Standards', value: 'IEEE 519, IEC 61439' }
    ],
    ctaTitle: 'Need Energy-Saving VFD Drive Panels for Bag Filters?',
    ctaDesc: 'Contact our experts for customized Variable Frequency Drive panel solutions.'
  },

  'control-panels': {
    bannerTitle: 'Sequential Pulse Timer & Baghouse Control Panels',
    bannerSubtitle: 'Automated Reverse Pulse-Jet Cleaning Controllers & PLC Automation',
    bannerImg: peHero1,
    productImage: peMccPanel,
    productHeadline: 'Baghouse PLC & Sequential Pulse Timer Panels',
    overview1: 'Sequential Pulse Timer Panels provide micro-timed pulsing of solenoid diaphragm valves to dislodge dust cake from filter bags while conserving compressed air.',
    overview2: 'Manufactured with digital differential pressure transmitters, solid-state triac outputs, and touch-screen HMI interfaces for complete baghouse automation.',
    features: [
      { title: 'On-Demand DP Cleaning', desc: 'Initiates pulse cleaning only when bag differential pressure exceeds target setpoint.' },
      { title: 'Solid-State Triac Outputs', desc: 'Controls 4 to 128 solenoid channels with zero mechanical switch wear.' },
      { title: 'Safety Interlocks', desc: 'Integrated header low-pressure alarm and hopper level sensors.' },
      { title: 'Weatherproof Enclosure', desc: 'IP65 double-door CRCA powder-coated housing for harsh outdoor environments.' }
    ],
    applications: [
      'Pulse Jet Bag Filters & Baghouses',
      'Silo Venting Filters',
      'Pneumatic Conveying Systems',
      'Cement & Steel Dust Collectors',
      'Foundry Induction Furnaces',
      'Chemical & Fertilizer Plants'
    ],
    specs: [
      { parameter: 'Channel Count', value: '4, 8, 16, 24, 32, 64, 128 channels' },
      { parameter: 'Output Supply', value: '24V DC / 110V AC / 230V AC triac' },
      { parameter: 'Pulse Width Setting', value: '50 ms to 500 ms adjustable' },
      { parameter: 'Pulse Interval Setting', value: '1 sec to 99 sec adjustable' },
      { parameter: 'Enclosure Rating', value: 'IP65 double-door powder-coated CRCA' },
      { parameter: 'Standards', value: 'IEC 61439, IS Standards' }
    ],
    ctaTitle: 'Need Baghouse Automation & Sequential Pulse Panels?',
    ctaDesc: 'Contact our electrical engineers for custom PLC control panels and differential pressure pulse timers.'
  }
};

const relatedPanelsList = [
  { title: 'HT Panel', link: '/products/ht-panel' },
  { title: 'LT Panel', link: '/products/lt-panel' },
  { title: 'PCC Panel', link: '/products/pcc-panel' },
  { title: 'MCC Panel', link: '/products/mcc-panel' },
  { title: 'APFC Panel', link: '/products/apfc-panel' },
  { title: 'VFD Drive Panel', link: '/products/vfd-panel' },
  { title: 'Bus Duct', link: '/products/bus-duct' }
];

// Helper to choose an icon for each application box
const getAppIcon = (name) => {
  const lower = (name || '').toLowerCase();
  if (lower.includes('building') || lower.includes('commercial') || lower.includes('mall') || lower.includes('complex')) {
    return <Building2 size={22} className="pe-app-icon" />;
  }
  if (lower.includes('power') || lower.includes('substation') || lower.includes('energy') || lower.includes('station') || lower.includes('grid')) {
    return <Zap size={22} className="pe-app-icon" />;
  }
  if (lower.includes('baghouse') || lower.includes('filter') || lower.includes('automation') || lower.includes('fan') || lower.includes('blower')) {
    return <Cpu size={22} className="pe-app-icon" />;
  }
  if (lower.includes('chemical') || lower.includes('pharma') || lower.includes('process') || lower.includes('refiner') || lower.includes('unit')) {
    return <Activity size={22} className="pe-app-icon" />;
  }
  return <Factory size={22} className="pe-app-icon" />;
};

const PowerEngineersPanelDetail = ({ product }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.id]);

  const cleanId = (product.id || '').toLowerCase().trim();
  const peData = panelDetailsMap[cleanId] || {
    bannerTitle: product.title,
    bannerSubtitle: product.shortDesc,
    bannerImg: peHero1,
    productImage: product.image,
    productHeadline: product.title,
    overview1: product.shortDesc,
    overview2: product.overview,
    features: (product.features || []).map(f => ({ title: f.title, desc: f.desc })),
    applications: product.applications || [],
    specs: (product.specs || []).map(s => ({ parameter: s.parameter, value: s.value })),
    ctaTitle: `Looking For High Quality ${product.shortTitle || product.title}?`,
    ctaDesc: 'Contact our experts for customized electrical and automation control panel solutions.'
  };

  const currentRelated = relatedPanelsList
    .filter(p => !p.link.includes(cleanId))
    .slice(0, 4);

  const handleWhatsAppQuote = () => {
    const waText = 
`*Inquiry for ${peData.bannerTitle} - VS Filtech*
----------------------------------------
⚡ *Product:* ${peData.bannerTitle} (${peData.productHeadline})
🏭 *Application:* Industrial / Bag Filter Installation
📝 *Requirement:* Please send technical datasheet, Single Line Diagram (SLD), GA drawings, and official quotation.
----------------------------------------
_Inquiry via Electrical Panels Portal_`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/911234567890?text=${encoded}`, '_blank');
  };

  return (
    <div className="pe-panel-detail-page">
      {/* 1. Hero Banner (.product-banner) */}
      <section 
        className="pe-product-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.78), rgba(15, 23, 42, 0.88)), url(${peData.bannerImg})`
        }}
      >
        <div className="pe-banner-overlay">
          {/* Breadcrumb Navigation */}
          <div className="pe-banner-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={13} />
            <Link to="/products">Products</Link>
            <ChevronRight size={13} />
            <Link to="/control-panels">Electrical Panels</Link>
            <ChevronRight size={13} />
            <span className="current">{peData.bannerTitle}</span>
          </div>

          <div className="pe-banner-badge">
            <Zap size={14} className="pe-badge-icon" />
            <span>TYPE TESTED | IS / IEC STANDARDS</span>
          </div>

          <h1>{peData.bannerTitle}</h1>
          <p>{peData.bannerSubtitle}</p>
        </div>
      </section>

      {/* 2. Product Details Section (.product-details) */}
      <section className="pe-product-details">
        <div className="pe-product-image-container">
          <div className="pe-product-image">
            <img src={peData.productImage} alt={peData.bannerTitle} />
            <div className="pe-image-overlay-glow"></div>
          </div>
          <div className="pe-image-badge">
            <ShieldCheck size={16} />
            <span>100% Genuine Branded Switchgear</span>
          </div>
        </div>

        <div className="pe-product-content">
          <div className="pe-content-badge-row">
            <span className="pe-pill">
              <Sparkles size={14} />
              <span>OUR PRODUCT</span>
            </span>
            <span className="pe-secondary-pill">
              <Award size={13} />
              <span>Heavy Industry Grade</span>
            </span>
          </div>

          <h2>{peData.productHeadline}</h2>
          <p className="pe-lead-p">{peData.overview1}</p>
          <p>{peData.overview2}</p>

          <div className="pe-content-highlights">
            <div className="pe-highlight-item">
              <Check size={16} className="pe-highlight-check" />
              <span>Electrolytic Copper / Aluminium Busbars</span>
            </div>
            <div className="pe-highlight-item">
              <Check size={16} className="pe-highlight-check" />
              <span>Custom Engineered for Baghouse & Plant Loads</span>
            </div>
            <div className="pe-highlight-item">
              <Check size={16} className="pe-highlight-check" />
              <span>Factory Tested to IS 8623 / IEC 61439</span>
            </div>
          </div>

          <div className="pe-content-actions">
            <button 
              type="button" 
              className="pe-btn-primary"
              onClick={handleWhatsAppQuote}
            >
              <MessageCircle size={18} />
              <span>Request Technical SLD & Quote</span>
            </button>
            <Link to="/control-panels" className="pe-btn-outline">
              <span>Explore All Panels</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Key Features Section (.product-features) */}
      {peData.features && peData.features.length > 0 && (
        <section className="pe-product-features">
          <div className="pe-section-title">
            <span className="pe-section-tag">
              <Sparkles size={14} />
              <span>ENGINEERING HIGHLIGHTS</span>
            </span>
            <h2>Key Features</h2>
            <p className="pe-section-desc">Engineered for extreme duty industrial operating environments</p>
          </div>

          <div className="pe-feature-grid">
            {peData.features.map((feat, idx) => (
              <div 
                className="pe-feature-card" 
                key={idx}
                style={{ '--card-delay': `${idx * 0.1}s` }}
              >
                <div className="pe-feature-card-accent"></div>
                <div className="pe-feature-icon-bubble">
                  <Check size={18} className="check-icon" />
                </div>
                <h3>{feat.title.replace(/^✔\s*/, '')}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Applications Section (.applications) - White & Blue Luxury Cards */}
      {peData.applications && peData.applications.length > 0 && (
        <section className="pe-applications">
          <div className="pe-section-title">
            <span className="pe-section-tag">
              <Building2 size={14} />
              <span>APPLICATIONS</span>
            </span>
            <h2>Where {peData.bannerTitle} Are Used</h2>
            <p className="pe-section-desc">Proven across heavy manufacturing plants, substations, and dust extraction facilities</p>
          </div>

          <div className="pe-application-grid">
            {peData.applications.map((app, idx) => (
              <div 
                className="pe-application-box" 
                key={idx}
                style={{ '--card-delay': `${idx * 0.08}s` }}
              >
                <div className="pe-app-top">
                  <div className="pe-app-icon-wrap">
                    {getAppIcon(app)}
                  </div>
                  <div className="pe-app-arrow-wrap">
                    <ArrowUpRight size={18} className="pe-app-arrow" />
                  </div>
                </div>
                <div className="pe-app-info">
                  <span className="pe-app-title">{app}</span>
                  <span className="pe-app-sub">Mission-Critical Installation</span>
                </div>
                <div className="pe-app-shimmer"></div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Technical Specifications Section (.specifications) */}
      {peData.specs && peData.specs.length > 0 && (
        <section className="pe-specifications">
          <div className="pe-section-title">
            <span className="pe-section-tag">
              <FileText size={14} />
              <span>SPECIFICATIONS</span>
            </span>
            <h2>Technical Specifications</h2>
            <p className="pe-section-desc">Comprehensive electrical parameters and design standards</p>
          </div>

          <div className="pe-spec-table-wrap">
            <table className="pe-spec-table">
              <tbody>
                {peData.specs.map((row, idx) => (
                  <tr key={idx}>
                    <td className="pe-spec-label">{row.parameter}</td>
                    <td className="pe-spec-value">
                      <span>{row.value}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 6. Call to Action Section (.product-cta) */}
      <section 
        className="pe-product-cta"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 20, 45, 0.88), rgba(15, 23, 42, 0.94)), url(${peHero1})`
        }}
      >
        <div className="pe-product-cta-overlay">
          <div className="pe-cta-badge">
            <PhoneCall size={14} />
            <span>DIRECT FACTORY CONSULTATION</span>
          </div>
          <h2>{peData.ctaTitle}</h2>
          <p>{peData.ctaDesc}</p>
          
          <div className="pe-cta-btn-group">
            <button 
              type="button" 
              className="pe-quote-now"
              onClick={handleWhatsAppQuote}
            >
              <MessageCircle size={18} />
              <span>Get Fast Quote on WhatsApp →</span>
            </button>
            <a href="tel:+911234567890" className="pe-cta-call-btn">
              <PhoneCall size={17} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. Related Products Section (.related-products) */}
      <section className="pe-related-products">
        <div className="pe-section-title">
          <span className="pe-section-tag">
            <Cpu size={14} />
            <span>COMPLETE LINEUP</span>
          </span>
          <h2>You May Also Like</h2>
          <p className="pe-section-desc">Explore our full portfolio of industrial switchboards and automation panels</p>
        </div>

        <div className="pe-related-grid">
          {currentRelated.map((rel, idx) => (
            <Link to={rel.link} key={idx} className="pe-related-card">
              <div className="pe-related-icon-wrap">
                <Zap size={20} />
              </div>
              <span className="pe-related-title">{rel.title}</span>
              <span className="pe-related-action">
                <span>View Specs</span>
                <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PowerEngineersPanelDetail;
