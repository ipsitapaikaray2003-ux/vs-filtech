import React from 'react';
import { 
  Factory, 
  RefreshCw, 
  Wrench, 
  Package, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  FileCheck2,
  Cpu,
  Wind,
  ShieldCheck,
  Activity,
  Sliders
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

// Ultra-High-Definition Commercial Industrial Photography (Accurately Matched to Bag Filter Capabilities)
import turnkeyImg from '../assets/service_turnkey_hd.jpg';
import retrofitImg from '../assets/service_retrofit_hd.jpg';
import fabricationImg from '../assets/service_fabrication_hd.jpg';
import sparesImg from '../assets/service_spares_hd.jpg';

// 4 Primary Client Capabilities
const clientServices = [
  {
    id: 'turnkey-erection',
    tagline: 'SERVICE CAPABILITY 01',
    title: 'Design, Manufacturing, Erection & Commissioning of Bag Filters',
    lead: 'We at VS Filtech design, manufacture, erect, and commission complete turnkey Pulse Jet Bag Filters tailored to your exact process conditions.',
    photo: turnkeyImg,
    badge: 'Turnkey Bag Filter Plants',
    badgeClass: 'badge-blue',
    icon: Factory,
    iconColor: '#2563eb',
    desc: 'End-to-end engineering of Pulse Jet Bag Filters and Dust Collectors. Custom calculated for exact CFM airflow volume, air-to-cloth ratio, operating temperature, and dust load with guaranteed statutory emission compliance.',
    bullets: [
      'Custom CFM aerodynamic sizing & air-to-cloth ratio engineering',
      'Turnkey structural erection, crane rigging & heavy ducting layout',
      'Guaranteed compliance with statutory <10 mg/Nm³ emission limits',
      'Fully integrated electrical control panels, digital timers & ID fans'
    ],
    metric: 'Emission: <10 mg/Nm³',
    link: '/contact?service=turnkey-commissioning'
  },
  {
    id: 'retrofitting-upgradation',
    tagline: 'SERVICE CAPABILITY 02',
    title: 'Retrofit & Upgradation of Existing Bag Filters',
    lead: 'We do retrofit and modernization of existing bag filters to increase air capacity, lower differential pressure, and achieve strict emission norms.',
    photo: retrofitImg,
    badge: '<10 mg/Nm³ Emission Guarantee',
    badgeClass: 'badge-emerald',
    icon: RefreshCw,
    iconColor: '#059669',
    desc: 'Modernizing older, inefficient, or undersized dust collectors to meet stringent pollution board norms (<10 mg/Nm³) without the capital cost of total unit replacement. Optimize airflow and slash compressed air costs.',
    bullets: [
      'Bag-to-Pleated Bag conversions (expanding filtration area by 200%-300%)',
      'Pulse jet cleaning modernization & venturi aerodynamics optimization',
      'Differential Pressure (DP) reduction by up to 35%',
      'Compressed air energy consumption cut by 30% to 40% without casing change'
    ],
    metric: 'Airflow: Up to +40% Capacity',
    link: '/contact?service=retrofitting'
  },
  {
    id: 'custom-fabrication',
    tagline: 'SERVICE CAPABILITY 03',
    title: 'Fabrication of Bag Filter Items',
    lead: 'We do in-house custom fabrication of all critical bag filter items to precise CAD drawings and strict industrial tolerances.',
    photo: fabricationImg,
    badge: 'Precision CAD Fabrication',
    badgeClass: 'badge-purple',
    icon: Wrench,
    iconColor: '#7c3aed',
    desc: 'Complete in-house manufacturing of all baghouse items — rectangular casings, collection hoppers, laser-cut tube sheets, clean air plenums, blow pipes, support structures, access ladders, and industrial ducting to CAD specifications.',
    bullets: [
      'Rectangular casings, clean air plenums & pyramid/trough dust hoppers',
      'CNC laser-cut tube sheets with zero-bypass tight circular hole tolerances',
      'Heavy-gauge IS 2062 Carbon Steel, SS 304, SS 316 & Corten Steel construction',
      'Certified structural welding with corrosion-resistant & heat-proof coatings'
    ],
    metric: 'Tolerance: CNC Laser Cut',
    link: '/contact?service=fabrication'
  },
  {
    id: 'spares-supply',
    tagline: 'SERVICE CAPABILITY 04',
    title: 'Supply of All Spares Related to Bag Filters',
    lead: 'We supply all genuine spares related to bag filters under one roof with high ready inventory for pan-India rapid dispatch.',
    photo: sparesImg,
    badge: 'Pan-India Ready Dispatch',
    badgeClass: 'badge-amber',
    icon: Package,
    iconColor: '#d97706',
    desc: 'Single-source inventory for all pulse jet bag filter spares, hardware, and instrumentation across India under one roof, guaranteeing uninterrupted plant operation and zero downtime.',
    bullets: [
      'Pulse jet filter bags: Nomex (240°C), Ryton, PTFE Membrane, Polypropylene & Epitropic',
      'Wire mesh support filter cages in MS, GI & SS with integrated cast/pressed venturis',
      'Solenoid pulse valves, replacement diaphragm kits & digital sequential timers',
      'Rotary Air Lock (RAL) valves, vibrosieves, screw conveyors & DP transmitters'
    ],
    metric: 'Dispatch: 24-48 Hours',
    link: '/products'
  }
];

// Additional Points Under "Etc" Requested by Client
const additionalServices = [
  {
    icon: Wind,
    title: 'Industrial Ducting & Stack Piping',
    desc: 'Turnkey engineering, aerodynamic routing, in-house fabrication, and erection of industrial round and rectangular ductwork, dampers, expansion joints, and exhaust chimney stacks.'
  },
  {
    icon: ShieldCheck,
    title: 'Annual Maintenance Contracts (AMC)',
    desc: 'Scheduled preventive maintenance agreements, periodic pulse valve overhauls, bag alignment, and full emergency breakdown re-bagging support for zero plant downtime.'
  },
  {
    icon: Activity,
    title: 'Technical Audits & <10 mg/Nm³ Testing',
    desc: 'On-site system diagnostics: inlet CFM airflow measurements, duct velocity balancing, fan performance curve matching, and fluorescent tracer dye leak detection testing.'
  },
  {
    icon: Sliders,
    title: 'Control Panels & Sequential Timers',
    desc: 'In-house wiring and programming of microprocessor-based solid-state sequential timers, differential pressure (DP) switches, transmitters, and motor starter MCC panels.'
  }
];

const workflowSteps = [
  {
    step: '01',
    title: 'Process & Dust Analysis',
    desc: 'We analyze dust type, particle micron size, inlet grain loading, temperature, and moisture.'
  },
  {
    step: '02',
    title: 'Aerodynamic CAD Sizing',
    desc: 'Calculating optimum CFM, air-to-cloth ratio, can velocity, and differential pressure modelling.'
  },
  {
    step: '03',
    title: 'In-House CNC Fabrication',
    desc: 'Heavy-gauge steel fabrication, laser-cut tube sheets, certified welding, and epoxy coatings.'
  },
  {
    step: '04',
    title: 'Turnkey Erection & Start-Up',
    desc: 'Site installation, ducting connections, electrical panel wiring, and start-up commissioning.'
  },
  {
    step: '05',
    title: 'Emission Testing & Spares',
    desc: 'Verification of <10 mg/Nm³ emission standards with ongoing lifecycle spares supply.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section-v2">
      <div className="container">
        
        {/* ── Section Header ── */}
        <div className="services-header-wrap">
          <div className="services-eyebrow-pill">
            <Sparkles size={14} /> WE AT VS FILTECH · CORE SERVICES & ENGINEERING
          </div>

          <h2 className="services-main-title">
            What We Do at VS Filtech <br />
            <span className="text-gradient">Complete Bag Filter Lifecycle Services</span>
          </h2>

          <p className="services-main-desc">
            We at <strong>VS Filtech</strong> specialize in the design, manufacturing, erection & commissioning of bag filters, 
            retrofitting & upgradation of existing systems to &lt;10 mg/Nm³ emission levels, in-house custom fabrication of all bag filter items, 
            and supply of all related spares under one roof across India.
          </p>
        </div>

        {/* ── 4 Core Capabilities Grid (2x2 Grid) ── */}
        <div className="services-cards-grid">
          {clientServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="premium-service-card">
                
                {/* Ultra-HD Real Image Container */}
                <div className="service-img-wrapper">
                  <img 
                    src={svc.photo} 
                    alt={svc.title} 
                    className="service-card-photo" 
                    loading="lazy"
                  />
                  <div className="service-img-overlay" />

                  {/* Top Badge */}
                  <div className={`service-top-badge ${svc.badgeClass}`}>
                    {svc.badge}
                  </div>

                  {/* Floating Icon Box */}
                  <div className="service-floating-icon" style={{ color: svc.iconColor }}>
                    <Icon size={24} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="service-card-body">
                  <div className="service-card-tagline">{svc.tagline}</div>
                  <h3 className="service-card-title">{svc.title}</h3>
                  <p className="service-card-desc">
                    <strong style={{ color: 'var(--navy-900, #0a1628)' }}>{svc.lead}</strong> {svc.desc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="service-bullets-list">
                    {svc.bullets.map((bullet, idx) => (
                      <div key={idx} className="service-bullet-item">
                        <CheckCircle2 size={16} className="bullet-check-icon" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Bottom: Metric Pill + Inquire Link */}
                  <div className="service-card-bottom">
                    <div className="service-metric-tag">
                      <Cpu size={13} style={{ color: svc.iconColor }} />
                      <span>{svc.metric}</span>
                    </div>

                    <Link to={svc.link} className="service-inquire-link">
                      <span>Inquire Now</span>
                      <ArrowRight size={15} className="arrow-icon" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ── Additional Specialized Services & Support ("Etc") ── */}
        <div className="services-more-points-wrap">
          <div className="more-points-header">
            <div className="more-points-title-group">
              <h4>
                <Sparkles size={18} style={{ color: 'var(--accent-secondary, #2563eb)' }} />
                Additional Specialized Services & Engineering Support
              </h4>
              <p>Comprehensive turnkey engineering solutions supporting your dust collection plant lifecycle.</p>
            </div>
            <Link to="/contact" className="btn btn-sm btn-outline">
              Request Site Visit <ArrowRight size={14} />
            </Link>
          </div>

          <div className="more-points-grid">
            {additionalServices.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="more-point-card">
                  <div className="more-point-icon-box">
                    <ItemIcon size={22} />
                  </div>
                  <h5 className="more-point-title">{item.title}</h5>
                  <p className="more-point-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 5-Stage Engineering Execution Workflow Timeline ── */}
        <div className="services-workflow-wrap">
          <div className="workflow-header">
            <div className="workflow-eyebrow">
              <FileCheck2 size={13} /> QUALITY ASSURANCE PROCESS
            </div>
            <h3 className="workflow-title">Our 5-Stage Engineering Delivery Workflow</h3>
            <p className="workflow-subtitle">
              Every dust collection project is engineered with mathematical rigor to guarantee zero emission exceedances and minimal lifecycle operational costs.
            </p>
          </div>

          <div className="workflow-steps-grid">
            {workflowSteps.map((ws, idx) => (
              <div key={idx} className="workflow-step-card">
                <div className="workflow-step-num">{ws.step}</div>
                <h4 className="workflow-step-title">{ws.title}</h4>
                <p className="workflow-step-desc">{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom High-Impact Consultation Banner ── */}
        <div className="services-cta-banner-v2">
          <div className="cta-left-content">
            <div className="cta-tag-row">
              <PhoneCall size={13} /> EXPERT TECHNICAL CONSULTATION
            </div>
            <h3 className="cta-main-heading">
              Need a Custom Bag Filter Design or Retrofit Solution?
            </h3>
            <p className="cta-sub-text">
              Share your airflow (CFM), dust type, operating temperature, and current differential pressure. 
              Our application engineers will review your requirement and deliver a comprehensive sizing proposal within 24 hours.
            </p>
          </div>

          <div className="cta-actions-wrap">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Request Technical Proposal</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/products" className="btn btn-outline btn-lg">
              <span>View Spares Catalog</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
