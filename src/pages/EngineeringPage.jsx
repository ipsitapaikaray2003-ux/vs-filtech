import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSearch, 
  Layers, 
  Compass, 
  Hammer, 
  ClipboardCheck, 
  Truck, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  Sparkles,
  PhoneCall,
  Calculator,
  Cpu,
  Wind,
  Gauge,
  Workflow,
  Maximize2,
  FileText,
  FileCheck2,
  AlertCircle
} from 'lucide-react';
import engineeringBg from '../assets/factory_bagfilter_plant_hd.jpg';
import casingImg from '../assets/client_service_casing_fabrication.jpg';
import pipingImg from '../assets/client_service_piping_control.jpg';
import AnimatedEngineeringBg from '../components/AnimatedEngineeringBg';
import QualityInspectionSection from '../components/QualityInspectionSection';
import './EngineeringPage.css';

// 17 Engineering & Design Services Capabilities
const engineeringServices = [
  {
    id: 'sizing',
    title: 'Bag Filter Sizing & Selection',
    lead: 'Online vs. offline compartment sizing matching process continuity.',
    desc: 'Determination of gross and net filtration capacity, compartment count, offline isolation dampers, and modular casing configuration.',
    icon: Compass,
    color: '#38bdf8'
  },
  {
    id: 'air-volume',
    title: 'Air Volume Calculation',
    lead: 'Actual m³/hr vs. Normal Nm³/hr thermal compensation.',
    desc: 'Calculations adjusting for operating gas temperature, altitude, barometric pressure, moisture percentage, and combustion excess air.',
    icon: Wind,
    color: '#60a5fa'
  },
  {
    id: 'air-cloth',
    title: 'Air-to-Cloth Ratio Calculation',
    lead: 'Conservative filtration velocity tailored to dust loading.',
    desc: 'Selecting true filtration velocity (typically 0.8 to 1.8 m/min) to prevent interstitial fabric pore clogging and excessive cake pressure.',
    icon: Sliders,
    color: '#818cf8'
  },
  {
    id: 'filtration-area',
    title: 'Filtration Area Calculation',
    lead: 'Net active area ensuring statutory continuous emission limits.',
    desc: 'Determining exact bag counts, diameter (120mm-160mm), and length (2m-8m) while factoring in offline cleaning cycle margins.',
    icon: Layers,
    color: '#a78bfa'
  },
  {
    id: 'pressure-drop',
    title: 'Pressure Drop Estimation',
    lead: 'Accurate static head estimation across clean and caked bags.',
    desc: 'Calculating housing loss, tube sheet ΔP, clean cloth resistance, residual dust cake coefficient (K2), and duct static resistances.',
    icon: Gauge,
    color: '#2dd4bf'
  },
  {
    id: 'bag-selection',
    title: 'Filter Bag Selection',
    lead: 'Chemical compatibility and thermal endurance matching.',
    desc: 'Specification of optimal media: Polyester, PPS (Ryton), Aramid (Nomex), Fiberglass, PTFE, and ePTFE membrane based on flue gas acids.',
    icon: FileCheck2,
    color: '#34d399'
  },
  {
    id: 'dust-loading',
    title: 'Dust Loading Assessment',
    lead: 'Grain loading evaluation (g/Nm³ or grains/cu.ft).',
    desc: 'Analyzing bulk density, particle size distribution (PSD), abrasiveness, and stickiness to design inlet deceleration baffles.',
    icon: FileSearch,
    color: '#fbbf24'
  },
  {
    id: 'temperature-eval',
    title: 'Temperature Evaluation',
    lead: 'Flue gas thermal dissipation & acid dew point calculation.',
    desc: 'Assessment of operating gas temperature peaks, acid dew point margins (SOx/HCl), and emergency cold-air dilution damper sizing.',
    icon: AlertCircle,
    color: '#f87171'
  },
  {
    id: 'duct-sizing',
    title: 'Duct Sizing & Velocity',
    lead: 'Transport velocity balancing preventing dust dropout.',
    desc: 'Engineering duct diameters at optimal transport speeds (18 - 22 m/s) to prevent particulate settling while minimizing abrasion and pressure drop.',
    icon: Workflow,
    color: '#38bdf8'
  },
  {
    id: 'hood-design',
    title: 'Capture Hood Design',
    lead: 'ACGIH industrial ventilation capture velocity standards.',
    desc: 'Aerodynamic design of canopy hoods, swing hoods, push-pull hoods, and enclosure drafts capturing 100% of fugitive industrial emissions.',
    icon: Compass,
    color: '#60a5fa'
  },
  {
    id: 'id-fan',
    title: 'ID Fan Selection',
    lead: 'Centrifugal fan curve matching and motor power sizing.',
    desc: 'Selecting backward-curved or radial-tipped industrial blowers matched precisely to total system static drop, temperature, and altitude.',
    icon: Cpu,
    color: '#818cf8'
  },
  {
    id: 'pulse-cleaning',
    title: 'Pulse Cleaning System Design',
    lead: 'Supersonic compressed air shockwave dynamics.',
    desc: 'Sizing compressed air header reservoirs, blowpipe nozzle diameters, pilot solenoid valves, and supersonic venturi profiles.',
    icon: Sparkles,
    color: '#a78bfa'
  },
  {
    id: 'hopper-design',
    title: 'Hopper Design',
    lead: 'Minimum 60° valley angle free-flowing geometry.',
    desc: 'Engineering pyramidal and trough hoppers with anti-bridging angles, strike plates, fluidization pads, and cleanout inspection doors.',
    icon: Layers,
    color: '#2dd4bf'
  },
  {
    id: 'outlet-manifold',
    title: 'Outlet Manifold Design',
    lead: 'Aerodynamic clean gas distribution without dead zones.',
    desc: 'Design of clean air plenum headers, bypass dampers, and stack connections ensuring uniform draft across all filter compartments.',
    icon: Workflow,
    color: '#34d399'
  },
  {
    id: 'emission-opt',
    title: 'Emission Optimisation',
    lead: 'Guaranteed statutory compliance (<10 mg/Nm³ CPCB).',
    desc: 'Optimizing surface filtration, zero particle bypass snap-band collars, and tubesheet hole CNC tolerances to beat statutory norms.',
    icon: ShieldCheck,
    color: '#fbbf24'
  },
  {
    id: 'retrofit-mod',
    title: 'Retrofit & Modification',
    lead: 'Capacity expansion of existing OEM baghouses.',
    desc: 'Conversion of old shaker or reverse-air baghouses into modern pulse jet systems, or tubular-to-pleated cartridge capacity doubling.',
    icon: Hammer,
    color: '#f87171'
  },
  {
    id: 'ga-drawings',
    title: 'GA Drawings & Fabrication BOM',
    lead: 'Complete General Arrangement, manufacturing details & BOM.',
    desc: 'Preparation of 3D CAD models, General Arrangement (GA) drawings, foundation load calculations, nozzle schedules, and Bill of Materials.',
    icon: FileText,
    color: '#38bdf8'
  }
];

// Typical Design Inputs Checklist
const typicalDesignInputs = [
  {
    category: 'Process Gas Parameters',
    inputs: [
      { name: 'Volumetric Airflow Rate', unit: 'm³/hr or CFM', desc: 'Actual operating gas volume at process temperature' },
      { name: 'Operating Gas Temperature', unit: '°C (Normal / Peak Surge)', desc: 'Continuous temperature and maximum thermal excursions' },
      { name: 'Gas Moisture Percentage', unit: '% Volume / Dew Point °C', desc: 'Water vapor percentage determining hydrolysis risk' },
      { name: 'Gas Chemical Composition', unit: 'SOx, NOx, HCl, HF, O2', desc: 'Presence of corrosive acid gases impacting media selection' }
    ]
  },
  {
    category: 'Particulate Characteristics',
    inputs: [
      { name: 'Dust Bulk Density', unit: 'kg/m³ or lb/ft³', desc: 'Weight of aerated dust impacting hopper discharge and can velocity' },
      { name: 'Inlet Dust Loading', unit: 'g/Nm³ or grains/cu.ft', desc: 'Concentration of dust entering baghouse from process' },
      { name: 'Particle Size Distribution (PSD)', unit: '% < 5µm, % < 10µm', desc: 'Sub-micron fraction determining needlefelt vs membrane media' },
      { name: 'Particulate Behavior', unit: 'Abrasive, Hygroscopic, Sticky', desc: 'Tendency to cake, agglomerate, or abrade casing and bags' }
    ]
  },
  {
    category: 'Site Constraints & Utilities',
    inputs: [
      { name: 'Compressed Air Availability', unit: 'bar (g) & CFM', desc: 'Supply pressure (typically 5.0 - 6.5 bar) and dryer dew point' },
      { name: 'Site Physical Footprint', unit: 'L x W x Height clearance', desc: 'Available floor space, crane hook height, and access clearances' },
      { name: 'Target Emission Limit', unit: 'mg/Nm³', desc: 'Statutory compliance norm (e.g. <10 mg/Nm³ or <5 mg/Nm³)' },
      { name: 'Electrical Power Supply', unit: '415V AC, 3-Phase, 50 Hz', desc: 'Substation capacity for ID fan motor, airlocks, and control panel' }
    ]
  }
];

// 6-Step In-Depth Approach
const engineeringSteps = [
  {
    step: '01',
    title: 'Process Data Collection',
    lead: 'Air volume, operating temperature, dust characteristics, and installation conditions.',
    details: [
      'Measurement of actual volumetric flow (m³/hr or CFM) and operating static pressure.',
      'Analysis of particulate bulk density, particle size distribution, moisture, and abrasiveness.',
      'Flue gas chemistry assessment (acid dew point, SOx, NOx, moisture percentage).',
      'Site constraints evaluation: available footprint, ceiling headroom, crane access, and wind load.'
    ]
  },
  {
    step: '02',
    title: 'Filtration Design',
    lead: 'Filter area, air-to-cloth ratio, bag dimensions, and compartment arrangement.',
    details: [
      'Selection of design filtration velocity (Air-to-Cloth ratio) specific to process dust.',
      'Determination of total net and gross filtration area required for continuous service.',
      'Bag diameter (120mm to 165mm) and length (1.5m to 8.0m) optimization.',
      'Can velocity calculation to prevent dislodged dust from re-entraining during pulsing cycles.'
    ]
  },
  {
    step: '03',
    title: 'Equipment Design',
    lead: 'Housing, hopper, tube sheet, cages, inlet/outlet, cleaning system, and dust discharge.',
    details: [
      'Structural design of 4mm-6mm casing plates reinforced with external rolled channels.',
      'Hopper valley angle design (minimum 60°) to guarantee free-flow dust evacuation.',
      'Laser-cut tube sheet with calibrated snap-band seal tolerances for zero particulate leakage.',
      'High-speed pilot diaphragm solenoid valves, supersonic venturi profiles, and compressed air headers.'
    ]
  },
  {
    step: '04',
    title: 'Manufacturing',
    lead: 'Fabrication, assembly, and strict dimensional control.',
    details: [
      'CNC laser plate cutting, hydraulic press brake forming, and precision jigging.',
      'Sub-assembly alignment of hopper cones, casing modules, clean-air plenum roof, and walk-in doors.',
      'Automated multi-needle stitching for fabric filter bags and robotic welding for support cages.',
      'Airtight seal testing and surface grit blasting prior to primer application.'
    ]
  },
  {
    step: '05',
    title: 'Inspection',
    lead: 'Visual, dimensional, welding, and comprehensive quality documentation.',
    details: [
      'Incoming raw material inspection with Mill Test Certificate (MTC) verification.',
      'Fit-up squareness, root opening, and weld seam integrity inspection.',
      'Dimensional verification of tube sheet hole diameters, pitch spacing, and flange drillings.',
      'Compilation of inspection reports, trial fitment records, and dispatch release documents.'
    ]
  },
  {
    step: '06',
    title: 'Delivery & Support',
    lead: 'Supply, installation support, and commissioning assistance as applicable.',
    details: [
      'Careful section-wise packing with protective timber crating and lifting lug verification.',
      'On-site erection supervision to ensure proper gasket sealing and structural alignment.',
      'Bag & cage installation oversight ensuring snap-bands seat securely without fabric chafing.',
      'Differential pressure calibration, sequential pulse timer tuning, and handover testing.'
    ]
  }
];

const EngineeringPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="engineering-page" style={{ background: '#0a1628', minHeight: '100vh', paddingTop: '80px', color: '#ffffff' }}>
      
      {/* 1. HERO HEADER */}
      <section className="eng-hero-section">
        <div className="eng-hero-bg-media">
          <img 
            src={engineeringBg} 
            alt="Engineering Process Plant Background" 
            className="eng-hero-bg-img"
          />
          <div className="eng-hero-overlay" />
        </div>

        <div className="container eng-hero-container">
          <div className="eng-hero-pill">
            <Sparkles size={14} style={{ color: '#38bdf8' }} /> 
            <span>APPLICATION-BASED DUST COLLECTION ENGINEERING</span>
          </div>

          <h1 className="eng-hero-title">
            Engineering &amp; Design Services | <br />
            <span style={{ color: '#38bdf8' }}>Bag Filter Design &amp; Manufacturing</span>
          </h1>

          <p className="eng-hero-lead">
            VS Filtech performs application-based dust collection engineering. Backed by deep expertise in bag filter sizing, 
            aerodynamic fluid modeling, and in-house fabrication, we understand complete dust-collection engineering — not just trading.
          </p>

          <div className="eng-hero-cta-row">
            <a href="#engineering-services" className="btn-hero-primary">
              <span>Explore All 17 Engineering Capabilities</span>
              <ArrowRight size={16} />
            </a>
            <a href="#design-inputs" className="btn-hero-outline">
              <FileSearch size={16} />
              <span>Review Typical Design Inputs</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="eng-metrics-bar">
            <div className="eng-metric-item">
              <span className="eng-metric-val">&lt; 10 mg/Nm³</span>
              <span className="eng-metric-lbl">Guaranteed Outlet Emission</span>
            </div>
            <div className="eng-metric-div" />
            <div className="eng-metric-item">
              <span className="eng-metric-val">17 Services</span>
              <span className="eng-metric-lbl">End-to-End Engineering Depth</span>
            </div>
            <div className="eng-metric-div" />
            <div className="eng-metric-item">
              <span className="eng-metric-val">Up to 260°C</span>
              <span className="eng-metric-lbl">High-Temperature Thermal Sizing</span>
            </div>
            <div className="eng-metric-div" />
            <div className="eng-metric-item">
              <span className="eng-metric-val">Full GA &amp; BOM</span>
              <span className="eng-metric-lbl">Manufacturing Drawings</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 17 ENGINEERING & DESIGN SERVICES GRID */}
      <section id="engineering-services" className="eng-services-section">
        <div className="container">
          <div className="eng-section-header text-center">
            <div className="eng-section-tag">COMPREHENSIVE ENGINEERING CAPABILITIES</div>
            <h2 className="eng-section-title">
              Engineering &amp; <span style={{ color: '#38bdf8' }}>Design Services</span>
            </h2>
            <p className="eng-section-subtitle">
              Our background is rooted in bag-filter design and manufacturing. Here is how our technical engineering outperforms competitors across every stage of the project:
            </p>
          </div>

          <div className="eng-services-grid">
            {engineeringServices.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div key={srv.id} className="eng-service-card">
                  <div className="service-card-top">
                    <div className="service-icon-box" style={{ background: `${srv.color}18`, borderColor: `${srv.color}45` }}>
                      <IconComp size={20} style={{ color: srv.color }} />
                    </div>
                    <span className="service-idx">{(idx + 1).toString().padStart(2, '0')}</span>
                  </div>

                  <h3 className="service-card-title">{srv.title}</h3>
                  <div className="service-card-lead" style={{ color: srv.color }}>{srv.lead}</div>
                  <p className="service-card-desc">{srv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. TYPICAL DESIGN INPUTS CHECKLIST */}
      <section id="design-inputs" className="eng-inputs-section">
        <div className="container">
          <div className="eng-section-header text-center">
            <div className="eng-section-tag">TECHNICAL SIZING PARAMETERS</div>
            <h2 className="eng-section-title">
              Typical Design Inputs <span style={{ color: '#38bdf8' }}>Required for Bag Filter Engineering</span>
            </h2>
            <p className="eng-section-subtitle">
              Proper dust collector selection requires real process parameters. Here is the engineering data we evaluate when sizing your system:
            </p>
          </div>

          <div className="eng-inputs-categories-grid">
            {typicalDesignInputs.map((cat, cIdx) => (
              <div key={cIdx} className="input-category-card">
                <div className="input-cat-header">
                  <span className="input-cat-num">0{cIdx + 1}</span>
                  <h3 className="input-cat-title">{cat.category}</h3>
                </div>

                <div className="input-items-list">
                  {cat.inputs.map((inp, iIdx) => (
                    <div key={iIdx} className="input-item-row">
                      <div className="input-item-main">
                        <strong className="input-name">{inp.name}</strong>
                        <span className="input-unit">({inp.unit})</span>
                      </div>
                      <p className="input-desc">{inp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Consultation CTA */}
          <div className="eng-inputs-callout">
            <div className="callout-left">
              <Calculator size={28} style={{ color: '#38bdf8' }} />
              <div>
                <h4>Have your process data ready? Or need on-site flow measurement?</h4>
                <p>Our engineers perform site airflow testing, duct static pressure surveys, and dust particle characterization.</p>
              </div>
            </div>
            <div className="callout-right">
              <Link to="/contact" className="btn-callout-action">
                <span>Submit Process Sizing Data</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6-STEP IN-DEPTH EXECUTION LIFECYCLE */}
      <section className="engineering-process-section">
        <AnimatedEngineeringBg />

        <div className="container" style={{ maxWidth: '1040px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div className="engineering-section-header text-center">
            <div className="eng-section-tag">END-TO-END EXECUTION LIFECYCLE</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
              Our 6-Step <span style={{ color: '#38bdf8' }}>Engineering Approach</span>
            </h2>
            <p className="eng-section-subtitle" style={{ maxWidth: '720px', margin: '0.75rem auto 0' }}>
              From initial process diagnostics to final CPCB statutory performance verification on site.
            </p>
          </div>

          <div className="engineering-steps-container">
            {engineeringSteps.map((step, idx) => {
              const colors = [
                { border: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8' },
                { border: '#818cf8', bg: 'rgba(129, 140, 248, 0.15)', text: '#818cf8' },
                { border: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8' },
                { border: '#60a5fa', bg: 'rgba(96, 165, 250, 0.15)', text: '#60a5fa' },
                { border: '#2dd4bf', bg: 'rgba(45, 212, 191, 0.15)', text: '#2dd4bf' },
                { border: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8' }
              ];
              const theme = colors[idx % colors.length];

              return (
                <div 
                  key={idx}
                  className="engineering-step-card"
                  style={{ '--card-border-color': theme.border }}
                >
                  <div 
                    className="step-number-box"
                    style={{
                      background: theme.bg,
                      border: `1.5px solid ${theme.border}`,
                      color: theme.text
                    }}
                  >
                    {step.step}
                  </div>

                  <div>
                    <h3 className="step-card-title">
                      {step.title}
                    </h3>
                    <p className="step-card-lead" style={{ color: theme.text }}>
                      {step.lead}
                    </p>
                    
                    <ul className="step-details-list">
                      {step.details.map((d, dIdx) => (
                        <li key={dIdx} className="step-detail-item">
                          <CheckCircle2 size={16} className="step-check-icon" style={{ color: theme.border }} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. QUALITY ASSURANCE & DOCUMENTATION INTEGRATION */}
      <QualityInspectionSection />

    </div>
  );
};

export default EngineeringPage;
