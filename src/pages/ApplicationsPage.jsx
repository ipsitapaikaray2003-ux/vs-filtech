import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  Flame, 
  Mountain, 
  Wheat, 
  FlaskConical, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Settings, 
  Wind, 
  Gauge, 
  Thermometer, 
  Clock, 
  Layers, 
  Boxes, 
  AlertCircle, 
  FileText, 
  Send,
  Cpu,
  Info
} from 'lucide-react';

import './ApplicationsPage.css';

// Photography Assets
import heroBg from '../assets/factory_bagfilter_plant_hd.jpg';
import steelImg from '../assets/industry_steel.jpg';
import cementImg from '../assets/industry_cement.jpg';
import metalsImg from '../assets/industry_metals.jpg';
import baghouseImg from '../assets/hero_baghouse.jpg';
import carbonImg from '../assets/industry_carbon_black.jpg';

// 5 Application Areas Data
const applicationAreas = [
  {
    id: 1,
    title: 'Steel & Foundry Industry',
    badge: 'Metallurgy & Casting',
    image: steelImg,
    icon: Flame,
    desc: 'Industrial processes such as furnaces, EAF operations, casting, material handling and other high-dust applications require reliable dust extraction and filtration systems.',
    reqTitle: 'Typical Requirements',
    requirements: [
      'High dust loading',
      'Fine particulate and fumes',
      'Elevated gas temperatures',
      'Continuous operation',
      'Low outlet emission requirements'
    ],
    solutions: [
      'Pulse Jet Bag Filters',
      'Filter Bags',
      'Filter Cages',
      'Pulse Cleaning Systems',
      'ID Fans',
      'Dampers',
      'Dust Handling Systems',
      'Control Panels & Instrumentation'
    ]
  },
  {
    id: 2,
    title: 'Cement & Mineral Processing',
    badge: 'Heavy Mineral Extraction',
    image: cementImg,
    icon: Mountain,
    desc: 'Dust is generated during crushing, grinding, conveying, screening, storage and material handling operations.',
    reqTitle: 'Typical Applications',
    requirements: [
      'Crushers & Screens',
      'Conveyors & Transfer points',
      'Raw & Ball Mills',
      'Hoppers & Storage Silos',
      'Packing & Loading areas'
    ],
    solutions: [
      'Bag Filters',
      'Filter Bags & Cages',
      'Cartridge Filters',
      'Rotary Air Lock Valves',
      'Screw Conveyors',
      'ID Fans',
      'Dust Extraction Systems'
    ]
  },
  {
    id: 3,
    title: 'Rice & Grain Mills',
    badge: 'Agro & Food Processing',
    image: baghouseImg,
    icon: Wheat,
    desc: 'Rice and grain processing generates fine particulate matter during cleaning, milling, conveying and material handling.',
    reqTitle: 'Typical Dust Sources',
    requirements: [
      'Rice cleaning & destoning',
      'Milling operations',
      'Husk & Bran handling',
      'Conveying systems',
      'Grading & Screening'
    ],
    solutions: [
      'Compact Bag Filters',
      'Dust Collectors',
      'Filter Bags',
      'Filter Cages',
      'Rotary Air Lock Valves',
      'Screw Conveyors',
      'Ducting & Extraction Systems'
    ]
  },
  {
    id: 4,
    title: 'Aluminium & Non-Ferrous Industries',
    badge: 'Smelting & Recycling',
    image: metalsImg,
    icon: Factory,
    desc: 'Aluminium and non-ferrous metal processing can generate fine particulate and process dust requiring carefully selected filtration media and cleaning systems.',
    reqTitle: 'Design Considerations',
    requirements: [
      'Dust characteristics & concentration',
      'Process gas temperature & moisture',
      'Filter media chemical compatibility',
      'Required stack emission level',
      'Explosion/fire risk assessment'
    ],
    solutions: [
      'Pulse Jet Bag Filters',
      'Application-specific Filter Bags',
      'Filter Cages',
      'Pulse Valves',
      'Dust Handling Equipment',
      'Control & Monitoring Systems'
    ]
  },
  {
    id: 5,
    title: 'Chemical & Process Industries',
    badge: 'Chemical & Specialty',
    image: carbonImg,
    icon: FlaskConical,
    desc: 'Different chemical processes generate dust with varying particle size, temperature and chemical characteristics. Filter media selection depends on actual process conditions.',
    reqTitle: 'We Consider',
    requirements: [
      'Dust composition & chemical reactivity',
      'Operating temperature & moisture',
      'Acid/alkali compatibility',
      'Dust loading & cleaning method',
      'Stringent required emission limits'
    ],
    solutions: [
      'Customised Bag Filters',
      'Specialised Filter Media',
      'PTFE / ePTFE Membrane Solutions',
      'PPS / Aramid / Polyester Media',
      'Pulse Cleaning Systems',
      'Instrumentation & Control Panels'
    ]
  }
];

// Representative Engineering Applications Data
const engineeringExamples = [
  {
    num: '01',
    title: 'EAF Dust Collection',
    process: 'Electric Arc Furnace',
    airVolume: 'Approx. 460,000 Nm³/hr',
    gasTemp: 'Approx. 120°C',
    dustType: 'Zinc oxide fumes',
    targetEmission: '< 10 mg/Nm³',
    filterType: 'Pulse Jet Baghouse',
    considerations: [
      'Required filtration area calculation',
      'Air-to-cloth ratio selection',
      'Filter media selection for zinc oxide fumes',
      'Inlet dust loading profile evaluation',
      'High-energy pulse cleaning arrangement',
      'Multi-compartment configuration',
      'Ducting and pressure-loss considerations',
      'Heavy-duty ID fan sizing & selection',
      'Continuous emission control verification'
    ],
    note: 'Representative engineering application provided to demonstrate our technical approach. Not presented as a completed VS Filtech project.'
  },
  {
    num: '02',
    title: 'Fine Iron Oxide / Additive Dust',
    process: 'Secondary Metallurgical Additives',
    airVolume: 'Approx. 200,000 Am³/hr',
    gasTemp: '100–140°C',
    dustType: 'Fine iron oxide & additive particulate',
    dustLoading: 'Approx. 5–7 g/Am³',
    filterType: 'Offline Bag Filter',
    compartments: '6 Compartments (Isolated)',
    bagDiameter: '150 mm Filter Bags',
    considerations: [
      'Offline compartmentalized cleaning arrangement',
      'Pneumatic compartment isolation dampers',
      'Cloth area selection for fine sub-micron cake',
      'Filter bag length and 150 mm diameter geometry',
      'High-performance pulse valve selection',
      'Hopper valley angle and dust discharge arrangement',
      'Low-velocity outlet clean-air manifold design',
      'Differential pressure drop optimization',
      'Long-term emission compliance performance'
    ],
    note: 'Representative application example and does not represent a completed VS Filtech installation.'
  },
  {
    num: '03',
    title: 'Fine Mineral / Process Dust',
    process: 'Mineral Sizing & Grinding Stream',
    airVolume: 'Approx. 80,000 Am³/hr',
    gasTemp: '80–120°C',
    dustType: 'Fine process / mineral particulate',
    dustLoading: 'Approx. 3 g/Am³ max',
    targetEmission: 'Approx. 30 mg/Nm³',
    filterType: 'Continuous Pulse Jet Collector',
    considerations: [
      'Filtration area calculation based on bulk density',
      'Optimal can velocity & filtration velocity',
      'Abrasion-resistant filter media selection',
      'Internal bag pitch & cage configuration',
      'On-demand differential pulse cleaning',
      'Hopper design with anti-bridging geometry',
      'Fan static pressure and duct friction-loss assessment'
    ],
    note: 'Representative engineering application demonstrating system selection and calculation parameters.'
  }
];

// Engineering Approach 11 Parameters
const approachParameters = [
  {
    title: 'Air Volume',
    desc: 'm³/hr or Nm³/hr flow capacity required for process capture',
    icon: Wind
  },
  {
    title: 'Operating Temperature',
    desc: 'Continuous & surge gas temperatures in °C for media selection',
    icon: Thermometer
  },
  {
    title: 'Dust Type',
    desc: 'Physical, chemical, and abrasive particulate characteristics',
    icon: Layers
  },
  {
    title: 'Dust Loading',
    desc: 'Inlet dust concentration in g/m³ or mg/Nm³',
    icon: Gauge
  },
  {
    title: 'Particle Size',
    desc: 'Micron distribution to establish fabric permeability & pore size',
    icon: Boxes
  },
  {
    title: 'Moisture Content',
    desc: 'Gas humidity, dew point risk, and hydrolysis assessment',
    icon: Flame
  },
  {
    title: 'Required Outlet Emission',
    desc: 'Statutory compliance limit (e.g., <10 mg/Nm³ or client target)',
    icon: ShieldCheck
  },
  {
    title: 'Operating Hours',
    desc: 'Batch processing vs 24/7 continuous industrial duty cycle',
    icon: Clock
  },
  {
    title: 'Cleaning Method',
    desc: 'Online pulse jet, offline compartmentalized, or reverse air',
    icon: Settings
  },
  {
    title: 'Available Installation Space',
    desc: 'Footprint limits, overhead clearance, and structural layout',
    icon: Factory
  },
  {
    title: 'Process Pressure / Vacuum',
    desc: 'System static pressure, housing design gauge, and casing reinforcement',
    icon: Cpu
  }
];

// From Requirement to Solution (6 Steps)
const workflowSteps = [
  {
    num: '01',
    title: 'Understand the Process',
    desc: 'We collect the process and operating data from your site or design engineering team.'
  },
  {
    num: '02',
    title: 'Analyse the Application',
    desc: 'Dust characteristics, temperature, air volume and statutory emission requirements are evaluated.'
  },
  {
    num: '03',
    title: 'Select the Filtration System',
    desc: 'Filter type, filtration area, air-to-cloth ratio, bag dimensions and cleaning arrangement are considered.'
  },
  {
    num: '04',
    title: 'Select Components',
    desc: 'Filter bags, cages, pulse valves, RAL, screw conveyor, ID fan, dampers and instrumentation are selected as required.'
  },
  {
    num: '05',
    title: 'Engineering & Documentation',
    desc: 'GA drawings, BOMs, technical specifications and relevant engineering documentation are prepared according to project requirements.'
  },
  {
    num: '06',
    title: 'Supply & Support',
    desc: 'Equipment and precision components are supplied with complete technical support throughout the requirement.'
  }
];

const ApplicationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="applications-page">
      
      {/* 1. Hero Header Section */}
      <section className="app-hero-section">
        <div className="app-hero-bg-wrapper">
          <img 
            src={heroBg} 
            alt="VS Filtech Industrial Dust Collection Plant" 
            className="app-hero-bg-img" 
          />
          <div className="app-hero-overlay" />
        </div>

        <div className="container app-hero-container">
          <div className="app-hero-badge">
            <Sparkles size={14} />
            <span>Industrial Air Filtration &amp; Dust Extraction</span>
          </div>

          <h1 className="app-hero-title">
            Industrial Air Filtration &amp; <br />
            <span className="app-hero-title-highlight">Dust Collection Applications</span>
          </h1>

          <p className="app-hero-lead">
            At VS Filtech, we provide application-oriented solutions for industrial dust collection, air filtration and process emission control. Our approach begins with understanding the process conditions, dust characteristics, air volume, temperature and required emission level before selecting the appropriate filtration system and components.
          </p>

          {/* Capabilities Summary Bar */}
          <div className="app-capabilities-bar">
            {[
              'Bag Filter Selection',
              'Filter Bags',
              'Filter Cages',
              'Pulse-Cleaning Systems',
              'Dust Handling Equipment',
              'ID Fans',
              'Instrumentation',
              'Control Panels'
            ].map((cap, idx) => (
              <span key={idx} className="app-capability-chip">
                ✓ {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Technical Experience vs Company Establishment Distinction Banner */}
      <section className="experience-banner-section">
        <div className="container">
          <div className="experience-grid">
            
            {/* Technical Team Experience Card */}
            <div className="experience-card tech-card">
              <div className="experience-header-row">
                <div className="experience-icon-wrap tech">
                  <Settings size={22} />
                </div>
                <div>
                  <span className="experience-subtitle">Core Capability</span>
                  <h3 className="experience-title">Our Technical Experience</h3>
                </div>
              </div>
              <p className="experience-text">
                With extensive experience in industrial dust collection and bag filter applications, our technical team understands the requirements involved in filter selection, system design, fabrication, filter bags, cages, pulse-cleaning systems and associated equipment.
              </p>
            </div>

            {/* Company Establishment Card */}
            <div className="experience-card company-card">
              <div className="experience-header-row">
                <div className="experience-icon-wrap company">
                  <Factory size={22} />
                </div>
                <div>
                  <span className="experience-subtitle">Company Profile</span>
                  <h3 className="experience-title">VS Filtech Establishment</h3>
                </div>
              </div>
              <p className="experience-text">
                VS Filtech — Established to provide industrial air filtration, dust collection and control-panel solutions. We deliver application-engineered solutions built around genuine operating data, quality fabrication, and reliable component selection.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Application Areas (5 Core Industries) */}
      <section className="app-areas-section" id="application-areas">
        <div className="container">
          
          <div className="section-intro-block">
            <div className="section-badge">
              <Factory size={14} />
              <span>Core Industry Sectors</span>
            </div>
            <h2 className="section-title">Our Application Areas</h2>
            <p className="section-subtitle">
              Application-oriented filtration engineered to withstand the specific thermal, chemical, and particulate dynamics of core manufacturing sectors.
            </p>
          </div>

          <div className="industry-cards-grid">
            {applicationAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.id} className="industry-card">
                  {/* Photo Top Frame */}
                  <div className="industry-card-img-wrap">
                    <img 
                      src={area.image} 
                      alt={area.title} 
                      className="industry-card-img" 
                    />
                    <div className="industry-card-overlay" />
                    <span className="industry-card-badge">{area.badge}</span>
                    <div className="industry-card-icon-floater">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="industry-card-body">
                    <span className="industry-card-number">Sector {area.id < 10 ? `0${area.id}` : area.id}</span>
                    <h3 className="industry-card-title">{area.title}</h3>
                    <p className="industry-card-desc">{area.desc}</p>

                    {/* Requirements / Considerations Box */}
                    <div className="industry-spec-box">
                      <div className="spec-box-title req-title">
                        <AlertCircle size={14} />
                        <span>{area.reqTitle}</span>
                      </div>
                      <ul className="spec-list">
                        {area.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="spec-chip req-chip">
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions Box */}
                    <div className="industry-spec-box solutions-box">
                      <div className="spec-box-title sol-title">
                        <CheckCircle2 size={14} />
                        <span>Solutions</span>
                      </div>
                      <ul className="spec-list">
                        {area.solutions.map((sol, sIdx) => (
                          <li key={sIdx} className="spec-chip sol-chip">
                            <span>✓</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Representative Engineering Applications (3 Detailed Case Examples) */}
      <section className="rep-engineering-section" id="representative-applications">
        <div className="container">
          
          <div className="section-intro-block">
            <div className="section-badge rep-badge">
              <Cpu size={14} />
              <span>Technical Demonstrations</span>
            </div>
            <h2 className="section-title rep-title">Representative Engineering Applications</h2>
            <p className="section-subtitle rep-subtitle">
              The following examples demonstrate our approach to industrial dust-collection system selection and engineering.
            </p>
          </div>

          {/* Prominent Notice Banner */}
          <div className="rep-disclaimer-banner">
            <Info size={22} className="text-cyan flex-shrink-0" />
            <p>
              <strong>Engineering Transparency Notice:</strong> The application examples shown below are representative engineering models provided to demonstrate our technical sizing methodology, calculation parameters, and component selection approach. They are not presented as completed VS Filtech customer projects.
            </p>
          </div>

          {/* 3 Technical Case Cards */}
          <div className="rep-cases-grid">
            {engineeringExamples.map((ex, idx) => (
              <div key={idx} className="rep-case-card">
                <div className="case-card-top">
                  <span className="case-num-tag">Application Example {ex.num}</span>
                  <span className="case-disclaimer-pill">Representative Model</span>
                </div>

                <h3 className="case-title">{ex.title}</h3>

                {/* Technical Specifications Grid */}
                <div className="case-data-grid">
                  <div className="case-data-item">
                    <span className="case-data-label">Process</span>
                    <span className="case-data-val">{ex.process}</span>
                  </div>
                  <div className="case-data-item">
                    <span className="case-data-label">Air Volume</span>
                    <span className="case-data-val">{ex.airVolume}</span>
                  </div>
                  <div className="case-data-item">
                    <span className="case-data-label">Gas Temperature</span>
                    <span className="case-data-val">{ex.gasTemp}</span>
                  </div>
                  <div className="case-data-item">
                    <span className="case-data-label">Dust Type</span>
                    <span className="case-data-val">{ex.dustType}</span>
                  </div>

                  {ex.dustLoading && (
                    <div className="case-data-item">
                      <span className="case-data-label">Dust Loading</span>
                      <span className="case-data-val">{ex.dustLoading}</span>
                    </div>
                  )}

                  {ex.filterType && (
                    <div className="case-data-item">
                      <span className="case-data-label">Filter Type</span>
                      <span className="case-data-val">{ex.filterType}</span>
                    </div>
                  )}

                  {ex.compartments && (
                    <div className="case-data-item">
                      <span className="case-data-label">Compartments</span>
                      <span className="case-data-val">{ex.compartments}</span>
                    </div>
                  )}

                  {ex.bagDiameter && (
                    <div className="case-data-item">
                      <span className="case-data-label">Bag Diameter</span>
                      <span className="case-data-val">{ex.bagDiameter}</span>
                    </div>
                  )}

                  {ex.targetEmission && (
                    <div className="case-data-item" style={{ gridColumn: 'span 2' }}>
                      <span className="case-data-label">Target Emission Level</span>
                      <span className="case-data-val target-emission">{ex.targetEmission}</span>
                    </div>
                  )}
                </div>

                {/* Engineering Considerations / Focus List */}
                <div className="case-considerations-box">
                  <div className="case-considerations-title">
                    <Settings size={14} />
                    <span>Engineering Considerations &amp; Focus</span>
                  </div>
                  <ul className="case-considerations-list">
                    {ex.considerations.map((item, cIdx) => (
                      <li key={cIdx} className="case-con-item">
                        <span className="case-con-dot" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="case-footnote">
                  Note: {ex.note}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Engineering Approach (11 Design Parameters) */}
      <section className="eng-approach-section" id="engineering-approach">
        <div className="container">
          
          <div className="section-intro-block">
            <div className="section-badge">
              <Gauge size={14} />
              <span>System Design Methodology</span>
            </div>
            <h2 className="section-title">Our Engineering Approach</h2>
            <p className="section-subtitle">
              Every dust-collection application is different. Before recommending a bag filter or filter media, we systematically evaluate 11 essential operational parameters.
            </p>
          </div>

          <div className="params-grid-wrap">
            {approachParameters.map((param, pIdx) => {
              const Icon = param.icon;
              return (
                <div key={pIdx} className="param-card">
                  <div className="param-icon-wrap">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="param-title">{param.title}</h4>
                    <p className="param-desc">{param.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="approach-footer-callout">
            <p>
              These parameters form the engineering basis for appropriate filter selection, air-to-cloth ratio sizing, can velocity optimization, and reliable long-term system design.
            </p>
          </div>

        </div>
      </section>

      {/* 6. From Requirement to Solution (6 Steps) */}
      <section className="workflow-section" id="process-workflow">
        <div className="container">
          
          <div className="section-intro-block">
            <div className="section-badge">
              <FileText size={14} />
              <span>Step-by-Step Execution</span>
            </div>
            <h2 className="section-title">From Requirement to Solution</h2>
            <p className="section-subtitle">
              How our engineering team transforms initial plant operating data into a commissioned, high-efficiency filtration installation.
            </p>
          </div>

          <div className="steps-grid">
            {workflowSteps.map((step, sIdx) => (
              <div key={sIdx} className="step-card">
                <div className="step-number-bar">
                  <span className="step-digit">{step.num}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Looking for a Dust Collection Solution? (CTA Checklist) */}
      <section className="app-cta-section" id="solution-inquiry">
        <div className="container">
          <div className="app-cta-card">
            <div className="app-cta-grid">
              
              <div className="cta-left">
                <h2>Looking for a Dust Collection Solution?</h2>
                <p>
                  Share your process details with us and our team can help evaluate the appropriate filtration solution.
                </p>

                <div className="checklist-title">Send us your process parameters:</div>
                <div className="cta-checklist-grid">
                  {[
                    'Air Volume (m³/hr or CFM)',
                    'Gas Temperature (°C)',
                    'Dust Type & Particulate Nature',
                    'Inlet Dust Loading',
                    'Moisture Content',
                    'Required Emission Standard',
                    'Process Application Details',
                    'Existing Filter Details (if any)',
                    'GA / Plant Layout / Drawing'
                  ].map((item, idx) => (
                    <div key={idx} className="cta-check-item">
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cta-right">
                <Send size={36} style={{ color: '#38bdf8', marginBottom: '14px' }} />
                <h3 style={{ color: '#ffffff', fontSize: '1.28rem', fontWeight: '800', marginBottom: '8px' }}>
                  Get a Technical Quote
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: '1.45', marginBottom: '16px' }}>
                  Submit your plant requirements for sizing calculations and equipment recommendations.
                </p>
                <Link to="/contact" className="cta-quote-btn">
                  <span>Submit Your Requirement</span>
                  <ArrowRight size={17} />
                </Link>
                <span className="cta-support-hint">
                  Pan-India technical consultation • Direct engineering team review
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. Important Note Disclaimer Box */}
      <section className="app-note-section">
        <div className="container">
          <div className="important-note-card">
            <div className="note-icon-wrap">
              <AlertCircle size={24} />
            </div>
            <div className="note-content">
              <h4>Important Engineering Note</h4>
              <p>
                The application examples shown on this page are representative engineering examples intended to demonstrate our technical understanding and approach. They should not be interpreted as completed projects executed by VS Filtech unless specifically identified as such.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ApplicationsPage;
