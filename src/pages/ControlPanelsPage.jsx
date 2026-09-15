import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Gauge, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  MessageCircle, 
  FileText, 
  Settings, 
  Layers, 
  X, 
  Sparkles, 
  Filter, 
  ChevronRight,
  TrendingDown,
  Power,
  RotateCw
} from 'lucide-react';

import peHtPanel from '../assets/pe_htpanel.jpg';
import peLtPanel from '../assets/pe_ltpanel.jpg';
import pePccPanel from '../assets/pe_pccpanel.webp';
import peMccPanel from '../assets/pe_mccpanel.jpg';
import peApfcPanel from '../assets/pe_apfcpanel.png';
import peBusDuct from '../assets/pe_busduct.jpg';
import vfdPlcImg from '../assets/vfd_plc_panel_product.jpg';
import solenoidImg from '../assets/solenoid_valve.webp';
import dpSwitchImg from '../assets/dp_transmitter_product.jpg';
import controlPanelsHeroBg from '../assets/control_panels_hero_bg.jpg';

import './ControlPanelsPage.css';

const panelProducts = [
  {
    id: 'ht-panel',
    slug: 'ht-panel',
    title: 'HT Panels (High Tension Switchgear up to 33 kV)',
    shortTitle: 'HT Panels',
    category: 'HT & LT Power',
    ratingBadge: 'Up to 33 kV / 2500A',
    image: peHtPanel,
    lead: 'Primary medium/high-voltage switchboards equipped with Vacuum Circuit Breakers (VCB) or SF6 breakers, numerical relays, and arc-containment barriers.',
    features: [
      'Motorized drawout Vacuum Circuit Breakers (VCB) with 26.3 kA / 31.5 kA breaking',
      'Microprocessor numerical protection relays (overcurrent, earth fault, differential)',
      'Arc-resistant Form-segregated compartments with safety interlocks and flaps',
      'Heavy-duty 2mm-3mm CRCA sheet steel with 9-tank powder coated finish'
    ],
    specs: [
      { label: 'Rated Voltage', val: '11 kV, 22 kV, 33 kV (50 Hz)' },
      { label: 'Rated Current', val: '630 A to 2500 A' },
      { label: 'Breaking Capacity', val: '26.3 kA / 31.5 kA for 3s' },
      { label: 'Standards', val: 'IEC 62271-200, IS 3427' }
    ],
    bagFilterRole: 'Supplies incoming primary substation power to heavy cement, steel & plant baghouse fan transformers.'
  },
  {
    id: 'lt-panel',
    slug: 'lt-panel',
    title: 'LT Panels (Low Tension 415V Power Distribution)',
    shortTitle: 'LT Distribution Panels',
    category: 'HT & LT Power',
    ratingBadge: '415V / Up to 4000A',
    image: peLtPanel,
    lead: 'Main low-voltage factory distribution switchboards distributing 415V 3-phase power through Air Circuit Breakers (ACB) and MCCBs with zero downtime.',
    features: [
      'High-conductivity electrolytic copper / aluminium busbar chamber',
      'Air Circuit Breakers (ACB) and MCCB outgoing feeders with thermal/magnetic trips',
      'Modular Form 3b/4b compartments allowing isolated feeder servicing',
      'Digital multifunction power meters (MFM) with RS485 Modbus SCADA linking'
    ],
    specs: [
      { label: 'Operating Voltage', val: '415 V AC ± 10%, 3-Phase, 50 Hz' },
      { label: 'Current Capacity', val: 'Up to 4000 A continuous' },
      { label: 'Fault Withstand', val: '35 kA / 50 kA for 1 second' },
      { label: 'Standards', val: 'IEC 61439-1 & 2, IS 8623' }
    ],
    bagFilterRole: 'Distributes 415V power downstream of transformers to bag filter MCCs, compressors, and blowers.'
  },
  {
    id: 'mcc-panel',
    slug: 'mcc-panel',
    title: 'MCC Panels (Motor Control Centre for Bag Filters)',
    shortTitle: 'MCC Panels',
    category: 'MCC & VFD Drives',
    ratingBadge: 'Form 3b/4b / Up to 3200A',
    image: peMccPanel,
    lead: 'Centralized motor control panels housing DOL, Star-Delta, and Soft Starters with fail-safe baghouse startup/shutdown sequencing and motor thermal protection.',
    features: [
      'Individual starter compartments with door-interlocked isolators and run/trip lamps',
      'Starter topologies: Direct-On-Line (DOL), Automatic Star-Delta, Electronic Soft Starters',
      'Integrated dust discharge sequencing: starts rotary airlocks before the main ID fan',
      'Phase failure, thermal overload, and locked-rotor protection across all motor drives'
    ],
    specs: [
      { label: 'Operating Voltage', val: '415 V AC, 3-Phase, 50 Hz' },
      { label: 'Busbar Rating', val: 'Up to 3200 A Copper/Aluminium' },
      { label: 'Motor Range', val: '0.5 HP to 350+ HP' },
      { label: 'Protection Class', val: 'IP54 / IP55 powder coated' }
    ],
    bagFilterRole: 'Centralizes control of ID fan, rotary airlock valve, screw conveyor, and hopper vibration motors.'
  },
  {
    id: 'vfd-panel',
    slug: 'vfd-panel',
    title: 'VFD Drive Panels (Variable Frequency Drive for ID Fans)',
    shortTitle: 'VFD Drive Panels',
    category: 'MCC & VFD Drives',
    ratingBadge: '25% - 40% Energy Savings',
    image: vfdPlcImg,
    lead: 'Specialized Variable Frequency Drive panels for bag filter Induced Draft (ID) fans providing dynamic closed-loop draft modulation based on duct differential pressure.',
    features: [
      'Closed-loop PID airflow modulation: maintains constant suction CFM at collection hoods',
      '25% to 40% electrical power reduction: exploits fan affinity cube laws (P ∝ N³)',
      'Smooth soft starting: zero inrush current spikes and zero shock on fan belts and impellers',
      'Integrated AC line chokes & dV/dt filters meeting IEEE 519 harmonic standards',
      'Manual / Automatic bypass circuit guarantees uninterrupted filtration during servicing'
    ],
    specs: [
      { label: 'Motor Power Ratings', val: '5.5 kW to 350+ kW (7.5 - 500 HP)' },
      { label: 'Drive Brands', val: 'Danfoss, Siemens, Schneider, ABB, Delta' },
      { label: 'Feedback Input', val: '4-20mA duct static / baghouse DP' },
      { label: 'Cooling Class', val: 'IP54 / IP55 forced air / panel AC' }
    ],
    bagFilterRole: 'Dynamically varies ID fan speed as filter cake builds up, saving massive kWh power.'
  },
  {
    id: 'pcc-panel',
    slug: 'pcc-panel',
    title: 'PCC Panels (Power Control Centre up to 6300A)',
    shortTitle: 'PCC Panels',
    category: 'Power Quality (APFC & PCC)',
    ratingBadge: 'Up to 6300A / 65 kA',
    image: pePccPanel,
    lead: 'Heavy-duty primary power distribution centers handling up to 6300A with motorized drawout Air Circuit Breakers (ACB) and automatic source transfer (AMF/ATS).',
    features: [
      'Microprocessor draw-out ACBs with full LSIG (Long, Short, Instantaneous, Ground fault) protection',
      'High-purity electrolytic copper/aluminium busbars with fiberglass phase barriers',
      'Automatic Mains Failure (AMF/ATS) synchronization between Grid and Diesel Generators',
      'Form 4b physical barrier isolation preventing arc-fault propagation between chambers'
    ],
    specs: [
      { label: 'Rated Current', val: '800 A to 6300 A continuous' },
      { label: 'Breaking Capacity', val: '50 kA / 65 kA / 85 kA for 1 sec' },
      { label: 'Separation Form', val: 'Form 3b / Form 4b (IEC 61439-2)' },
      { label: 'Protection Rating', val: 'IP42 / IP54 / IP55' }
    ],
    bagFilterRole: 'Serves as the main plant electrical intake switchboard powering large-scale multi-compartment baghouses.'
  },
  {
    id: 'apfc-panel',
    slug: 'apfc-panel',
    title: 'APFC Panels (Automatic Power Factor Control)',
    shortTitle: 'APFC Panels',
    category: 'Power Quality (APFC & PCC)',
    ratingBadge: 'Target 0.99 Power Factor',
    image: peApfcPanel,
    lead: 'Microprocessor-controlled capacitor banks with detuned harmonic filter reactors maintaining near-unity 0.99 power factor and eliminating utility penalties.',
    features: [
      'Intelligent microprocessor APFC relay automatically rotates capacitor steps to balance run hours',
      'Detuned harmonic reactors (7% / 14%) protect capacitor banks from VFD harmonic resonance',
      'Heavy-duty self-healing MPP capacitors with burst-proof internal overpressure tear-off mechanisms',
      'Specialized damping resistor contactors eliminate severe step-switching inrush current transients'
    ],
    specs: [
      { label: 'Capacity Range', val: '50 kVAR to 1200+ kVAR modular' },
      { label: 'Target PF', val: '0.98 to 0.999 lag maintained' },
      { label: 'Reactor Types', val: '7% (189 Hz) / 14% (134 Hz) detuned' },
      { label: 'Standards', val: 'IS 13340/13341, IEC 60831-1 & 2' }
    ],
    bagFilterRole: 'Cancels reactive KVAR drawn by heavy ID fan induction motors, avoiding power company fines.'
  },
  {
    id: 'bag-filter-automation',
    slug: 'control-panels',
    title: 'Baghouse PLC & Sequential Pulse Timer Panels',
    shortTitle: 'Sequential Pulse Panels',
    category: 'Bag Filter Automation',
    ratingBadge: '4 to 128 Solenoid Channels',
    image: solenoidImg,
    lead: 'Automated reverse pulse-jet cleaning controllers featuring digital differential pressure transmitters, solid-state triac solenoid firing, and HMI touchscreens.',
    features: [
      'High-speed microprocessor timer regulating pulse width (50-500ms) and interval (1-99s)',
      'On-Demand DP Cleaning: automatically initiates cleaning only when baghouse delta-P reaches high setpoint',
      'Comprehensive safety interlocks: compressed air header low pressure cutoff & hopper level alarms',
      'Weatherproof IP65 double-door outdoor enclosure with transparent viewing window'
    ],
    specs: [
      { label: 'Channel Count', val: '4, 8, 16, 24, 32, 64, 128 channels' },
      { label: 'Output Supply', val: '24V DC / 110V AC / 230V AC triac' },
      { label: 'Display Options', val: 'Digital LED / 7" color touchscreen HMI' },
      { label: 'Enclosure', val: 'IP65 double-door powder-coated CRCA' }
    ],
    bagFilterRole: 'Directly fires pulse solenoid valves row by row to dislodge filter cake and maintain constant airflow.'
  },
  {
    id: 'bus-duct',
    slug: 'bus-duct',
    title: 'Bus Duct Systems (Sandwich Power Distribution)',
    shortTitle: 'Bus Duct Systems',
    category: 'Bag Filter Automation',
    ratingBadge: '100A to 6300A / Up to 690V',
    image: peBusDuct,
    lead: 'Prefabricated modular sandwich-type copper and aluminum busbar trunking replacing bulky cable trays between transformers, PCC, and heavy baghouse MCCs.',
    features: [
      'Compact sandwich design eliminating internal air gaps for lowest impedance and minimal voltage drop',
      '99.9% Electrolytic copper or high-conductivity aluminium conductors with Class F/H insulation',
      'Plug-in tap-off boxes allow downstream branch isolation without shutting down main plant feeds',
      'Extruded aluminium housing provides high mechanical strength and continuous integral ground path'
    ],
    specs: [
      { label: 'Rated Voltage', val: 'Up to 690 V / 1000 V AC, 50/60 Hz' },
      { label: 'Current Ratings', val: '100 A to 6300 A continuous' },
      { label: 'Conductor MOC', val: 'Electrolytic Copper / Aluminium' },
      { label: 'Protection Rating', val: 'IP54 / IP55 (Indoor) / IP65 (Outdoor)' }
    ],
    bagFilterRole: 'Carries high-amperage power from transformer substations directly to baghouse blower MCCs.'
  }
];

const categories = [
  'All Panels',
  'HT & LT Power',
  'MCC & VFD Drives',
  'Power Quality (APFC & PCC)',
  'Bag Filter Automation'
];

const ControlPanelsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Panels');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState('VFD Drive Panel for ID Fan');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    panelType: 'VFD Drive Panel for ID Fan',
    motorHP: '50 HP / 37 kW',
    voltage: '415V, 3-Phase, 50 Hz',
    requirements: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPanels = panelProducts.filter(p => {
    if (activeCategory === 'All Panels') return true;
    return p.category === activeCategory;
  });

  const handleOpenQuote = (panelTitle) => {
    setSelectedPanel(panelTitle);
    setFormData(prev => ({ ...prev, panelType: panelTitle }));
    setQuoteModalOpen(true);
    setSubmitted(false);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const waText = 
`*Inquiry for ${formData.panelType} - VS Filtech*
----------------------------------------
👤 *Name:* ${formData.name} ${formData.company ? `(${formData.company})` : ''}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || 'Not provided'}
⚡ *Panel Type:* ${formData.panelType}
⚙️ *Motor HP / Rating:* ${formData.motorHP || 'As per engineering design'}
🔌 *Operating Voltage:* ${formData.voltage}
📝 *Requirements:* ${formData.requirements || 'Please send technical GA drawing, Single Line Diagram (SLD), and quotation.'}
----------------------------------------
_Sent from VS Filtech Electrical & Control Panels Portal_`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/911234567890?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="control-panels-page">
      {/* 1. Hero Section */}
      <section 
        className="cp-hero-section"
        style={{
          backgroundImage: `linear-gradient(105deg, rgba(11, 17, 32, 0.93) 0%, rgba(11, 17, 32, 0.82) 48%, rgba(11, 17, 32, 0.52) 80%, rgba(11, 17, 32, 0.75) 100%), url(${controlPanelsHeroBg})`
        }}
      >
        <div className="container">
          <div className="cp-hero-badge">
            <Zap size={15} />
            <span>Turnkey Electrical Switchgear & Automation</span>
          </div>
          
          <h1 className="cp-hero-title">
            Industrial Electrical Panels, HT/LT Switchgear &amp; <span className="text-gradient">Bag Filter Automation</span>
          </h1>

          <p className="cp-hero-desc">
            Complete custom-engineered electrical panels designed for harsh industrial environments and dust collection plants. 
            From primary <strong>33 kV HT Switchboards</strong> and <strong>6300A Power Control Centers (PCC)</strong> to energy-saving 
            <strong>VFD ID Fan Drive Panels</strong>, <strong>MCC Motor Centers</strong>, <strong>APFC Capacitor Banks</strong>, and 
            <strong>Microprocessor Sequential Pulse Jet Timers</strong>. Built to IEC 61439 &amp; IS Standards with Siemens, Schneider, ABB, L&amp;T, and Danfoss.
          </p>

          <div className="cp-hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => handleOpenQuote('Industrial Control Panel Solution')}
            >
              <FileText size={18} />
              <span>Request Panel Quote &amp; SLD</span>
            </button>
            <a 
              href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20am%20interested%20in%20your%20HT,%20LT,%20MCC,%20VFD%20and%20Bag%20Filter%20Panels." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Electrical Engineer</span>
            </a>
          </div>

          <div className="cp-hero-stats">
            <div className="cp-stat-box">
              <div className="cp-stat-number">Up to 33 kV</div>
              <div className="cp-stat-label">HT Switchgear Rated Voltage</div>
            </div>
            <div className="cp-stat-box">
              <div className="cp-stat-number">Up to 6300A</div>
              <div className="cp-stat-label">PCC Continuous Busbar Rating</div>
            </div>
            <div className="cp-stat-box">
              <div className="cp-stat-number">25% - 40%</div>
              <div className="cp-stat-label">VFD Fan Power Savings</div>
            </div>
            <div className="cp-stat-box">
              <div className="cp-stat-number">0.99 PF</div>
              <div className="cp-stat-label">APFC Near-Unity Power Factor</div>
            </div>
            <div className="cp-stat-box">
              <div className="cp-stat-number">IP55 / IP65</div>
              <div className="cp-stat-label">Dust-Tight &amp; Weatherproof</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Category Filter Tabs */}
      <section className="container">
        <div className="cp-tabs-container">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cp-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              <Filter size={15} />
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* 3. Panel Cards Grid */}
        <div className="cp-panels-grid">
          {filteredPanels.map(panel => (
            <div className="cp-panel-card" key={panel.id}>
              <div className="cp-panel-image-wrap">
                <img src={panel.image} alt={panel.title} className="cp-panel-image" />
                <span className="cp-panel-badge-float">{panel.category}</span>
                <span className="cp-panel-rating-float">{panel.ratingBadge}</span>
              </div>

              <div className="cp-panel-body">
                <h3 className="cp-panel-title">{panel.title}</h3>
                <p className="cp-panel-desc">{panel.lead}</p>

                <div className="cp-panel-actions">
                  <Link to={`/products/${panel.slug}`} className="cp-btn-primary">
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </Link>
                  <button 
                    type="button"
                    className="cp-btn-outline"
                    onClick={() => handleOpenQuote(panel.title)}
                  >
                    <FileText size={15} />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bag Filter VFD & Automation Engineering Spotlight */}
      <section className="cp-spotlight-section">
        <div className="container">
          <div className="cp-spotlight-box">
            <div className="cp-spotlight-grid">
              <div>
                <div className="cp-spotlight-badge">
                  <TrendingDown size={14} />
                  <span>Engineering Spotlight: Bag Filter Efficiency</span>
                </div>
                <h2 className="cp-spotlight-title">
                  Why VFD Drive Panels Are Essential for Modern Baghouses
                </h2>
                <p className="cp-spotlight-p">
                  Conventional dust collection systems operate Induced Draft (ID) fans at 100% constant speed, 
                  relying on manual butterfly dampers to restrict airflow. This wastes tremendous electricity against 
                  closed damper blades. By integrating a <strong>Variable Frequency Drive (VFD)</strong> with real-time 
                  <strong>differential pressure (DP) transmitter feedback</strong>, the system dynamically slows the fan down when 
                  filter bags are clean and speeds up smoothly only when bag differential pressure rises.
                </p>

                <div className="cp-energy-cards">
                  <div className="cp-energy-card">
                    <h4>Fan Affinity Cube Law</h4>
                    <p>Power is proportional to the cube of speed (P ∝ N³). A mere <strong>20% reduction in fan RPM cuts electrical power demand by nearly 50%</strong>.</p>
                  </div>
                  <div className="cp-energy-card">
                    <h4>Zero Inrush Soft Starting</h4>
                    <p>Eliminates the 6x - 8x inrush starting current spikes, preventing utility maximum demand penalties and mechanical belt slippage.</p>
                  </div>
                  <div className="cp-energy-card">
                    <h4>Extended Filter Bag Life</h4>
                    <p>Maintaining constant optimal air-to-cloth ratio prevents high interstitial velocity, dramatically reducing bag fabric abrasive wear.</p>
                  </div>
                  <div className="cp-energy-card">
                    <h4>Automatic Bypass Interlock</h4>
                    <p>Equipped with an integrated Star-Delta bypass circuit so baghouse draft continues uninterrupted even during drive maintenance.</p>
                  </div>
                </div>
              </div>

              <div className="cp-interlock-diagram">
                <div className="cp-interlock-title">
                  <ShieldCheck size={20} className="text-cyan" />
                  <span>Baghouse Automated Interlock Sequence</span>
                </div>

                <div className="cp-diagram-steps">
                  <div className="cp-diagram-step success">
                    <div className="cp-step-num">1</div>
                    <div className="cp-step-text">
                      <h5>Discharge Pre-Start</h5>
                      <p>Rotary airlock and screw conveyor start first. Flow switch verifies dust path is clear.</p>
                    </div>
                  </div>

                  <div className="cp-diagram-step">
                    <div className="cp-step-num">2</div>
                    <div className="cp-step-text">
                      <h5>Compressed Air Header Check</h5>
                      <p>Pressure switch verifies header reservoir is at &ge; 5.5 bar before firing cleaning cycle.</p>
                    </div>
                  </div>

                  <div className="cp-diagram-step">
                    <div className="cp-step-num">3</div>
                    <div className="cp-step-text">
                      <h5>VFD Soft-Start Acceleration</h5>
                      <p>VFD ramps ID fan smoothly over 45 seconds to preset duct static suction setpoint.</p>
                    </div>
                  </div>

                  <div className="cp-diagram-step warning">
                    <div className="cp-step-num">4</div>
                    <div className="cp-step-text">
                      <h5>On-Demand DP Cleaning Firing</h5>
                      <p>When tube sheet delta-P reaches 120 mm WG, sequential timer pulses solenoid valves row-by-row.</p>
                    </div>
                  </div>

                  <div className="cp-diagram-step success">
                    <div className="cp-step-num">5</div>
                    <div className="cp-step-text">
                      <h5>Fail-Safe Safety Trips</h5>
                      <p>Immediate alarm &amp; automated bypass damper trip upon high hopper level or high flue temperature.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Technical Matrix Table */}
      <section className="cp-matrix-section">
        <div className="container">
          <div className="cp-section-header">
            <h2 className="cp-section-title">Technical Specification Matrix</h2>
            <p className="cp-section-subtitle">
              Compare our industrial electrical switchgear and control panels across operational ratings, switchgear components, and bag filter applications.
            </p>
          </div>

          <div className="cp-table-responsive">
            <table className="cp-matrix-table">
              <thead>
                <tr>
                  <th>Panel Classification</th>
                  <th>Operating Voltage</th>
                  <th>Current Capacity</th>
                  <th>Key Switchgear / Drive</th>
                  <th>Enclosure &amp; Standards</th>
                  <th>Baghouse System Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>HT Panels</strong></td>
                  <td><span className="cp-badge-voltage">Up to 33 kV</span></td>
                  <td>630 A – 2500 A</td>
                  <td>Vacuum Circuit Breakers (VCB) / SF6 Breakers</td>
                  <td>IP42/IP54, IEC 62271-200, IS 3427</td>
                  <td>Primary incoming substation power intake</td>
                </tr>
                <tr>
                  <td><strong>LT Panels</strong></td>
                  <td><span className="cp-badge-voltage">415 V AC</span></td>
                  <td>Up to 4000 A</td>
                  <td>Air Circuit Breakers (ACB) &amp; MCCBs</td>
                  <td>IP42/IP54/IP65, IEC 61439-1 &amp; 2</td>
                  <td>Main low-voltage factory distribution</td>
                </tr>
                <tr>
                  <td><strong>MCC Panels</strong></td>
                  <td><span className="cp-badge-voltage">415 V AC</span></td>
                  <td>Up to 3200 A</td>
                  <td>DOL, Star-Delta, Soft Starters, MPCBs</td>
                  <td>IP54/IP55, Form 3b/4b, IEC 61439</td>
                  <td>ID fan, rotary airlock &amp; screw conveyor motor starter center</td>
                </tr>
                <tr>
                  <td><strong>VFD Drive Panels</strong></td>
                  <td><span className="cp-badge-voltage">380V - 480V</span></td>
                  <td>5.5 kW – 350+ kW</td>
                  <td>Danfoss / Siemens / ABB / Schneider VFDs</td>
                  <td>IP54/IP55 with Filtered Forced Cooling / AC</td>
                  <td>Closed-loop ID fan speed modulation &amp; 35% power savings</td>
                </tr>
                <tr>
                  <td><strong>PCC Panels</strong></td>
                  <td><span className="cp-badge-voltage">415 V AC</span></td>
                  <td>800 A – 6300 A</td>
                  <td>Heavy-duty 50/65kA ACBs with LSIG trip units</td>
                  <td>Form 4b separation, IEC 61439, IS 8623</td>
                  <td>Main power distribution from transformer/DG sets</td>
                </tr>
                <tr>
                  <td><strong>APFC Panels</strong></td>
                  <td><span className="cp-badge-voltage">415 V AC</span></td>
                  <td>50 – 1200+ kVAR</td>
                  <td>Microprocessor relay, 7%/14% Detuned reactors</td>
                  <td>IP42/IP54 with thermostatic cooling fans</td>
                  <td>Maintains 0.99 power factor for inductive blower loads</td>
                </tr>
                <tr>
                  <td><strong>Sequential Pulse Timers</strong></td>
                  <td><span className="cp-badge-voltage">24V DC / 230V</span></td>
                  <td>4 – 128 Channels</td>
                  <td>Solid-state triacs, DP transmitter, Touch HMI</td>
                  <td>IP65 double door weatherproof enclosure</td>
                  <td>Automated on-demand reverse pulse-jet bag cleaning</td>
                </tr>
                <tr>
                  <td><strong>Bus Duct Systems</strong></td>
                  <td><span className="cp-badge-voltage">Up to 690 V</span></td>
                  <td>100 A – 6300 A</td>
                  <td>Electrolytic Copper / Aluminium sandwich bars</td>
                  <td>IP54/IP65, IEC 61439-6, IS 8623-2</td>
                  <td>High-capacity power feeder from transformer to PCC/MCC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Partner Brands & Quality Standards */}
      <section className="cp-partners-section">
        <div className="container">
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
            Built With Tier-1 Switchgear &amp; Automation Partners
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '640px', margin: '0 auto' }}>
            We engineer our electrical switchboards and automation panels exclusively using internationally trusted components for maximum reliability and global spare availability.
          </p>
          <div className="cp-brands-grid">
            <div className="cp-brand-pill">SIEMENS</div>
            <div className="cp-brand-pill">SCHNEIDER ELECTRIC</div>
            <div className="cp-brand-pill">ABB</div>
            <div className="cp-brand-pill">LARSEN &amp; TOUBRO (L&amp;T)</div>
            <div className="cp-brand-pill">DANFOSS</div>
            <div className="cp-brand-pill">DELTA AUTOMATION</div>
            <div className="cp-brand-pill">ROCKWELL / ALLEN-BRADLEY</div>
            <div className="cp-brand-pill">PHOENIX CONTACT</div>
          </div>
        </div>
      </section>

      {/* 7. Quote Consultation Modal */}
      {quoteModalOpen && (
        <div className="cp-modal-overlay" onClick={() => setQuoteModalOpen(false)}>
          <div className="cp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cp-modal-close" onClick={() => setQuoteModalOpen(false)}>
              <X size={20} />
            </button>

            <h3 className="cp-modal-title">Request Panel Technical Proposal</h3>
            <p className="cp-modal-desc">
              Submit your project specifications below. Our electrical engineering team will provide a Single Line Diagram (SLD), GA drawings, and a competitive quotation.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <CheckCircle2 size={50} color="#10b981" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ color: '#ffffff', marginBottom: '8px' }}>Inquiry Dispatched!</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Your panel requirements have been forwarded to our electrical engineering team.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setQuoteModalOpen(false)}
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSubmit}>
                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label className="cp-form-label">Full Name *</label>
                    <input 
                      type="text" 
                      className="cp-form-input" 
                      required 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="cp-form-group">
                    <label className="cp-form-label">Company Name</label>
                    <input 
                      type="text" 
                      className="cp-form-input" 
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label className="cp-form-label">WhatsApp / Phone *</label>
                    <input 
                      type="tel" 
                      className="cp-form-input" 
                      required 
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="cp-form-group">
                    <label className="cp-form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="cp-form-input" 
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label className="cp-form-label">Panel Type Required</label>
                    <select 
                      className="cp-form-select"
                      value={formData.panelType}
                      onChange={(e) => setFormData({ ...formData, panelType: e.target.value })}
                    >
                      <option value="HT Panel (up to 33 kV)">HT Panel (up to 33 kV Switchgear)</option>
                      <option value="LT Distribution Panel (415V)">LT Distribution Panel (415V)</option>
                      <option value="MCC Panel (Motor Control Center)">MCC Panel (Motor Control Center)</option>
                      <option value="VFD Drive Panel for ID Fan">VFD Drive Panel for ID Fan</option>
                      <option value="PCC Panel (up to 6300A)">PCC Panel (Power Control Center)</option>
                      <option value="APFC Panel (Automatic Power Factor)">APFC Panel (Power Factor Correction)</option>
                      <option value="Baghouse Sequential Pulse Timer">Baghouse Sequential Pulse Timer</option>
                      <option value="Bus Duct System">Bus Duct System</option>
                    </select>
                  </div>
                  <div className="cp-form-group">
                    <label className="cp-form-label">Motor HP / Busbar Rating</label>
                    <input 
                      type="text" 
                      className="cp-form-input" 
                      placeholder="e.g. 75 HP Fan / 1600A ACB"
                      value={formData.motorHP}
                      onChange={(e) => setFormData({ ...formData, motorHP: e.target.value })}
                    />
                  </div>
                </div>

                <div className="cp-form-group">
                  <label className="cp-form-label">Specific Requirements / Application</label>
                  <textarea 
                    rows={3} 
                    className="cp-form-textarea"
                    placeholder="Provide details such as incoming supply, feeder breakdown, VFD brand preference, or bag filter parameters..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  />
                </div>

                <button type="submit" className="cp-btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                  <MessageCircle size={18} />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlPanelsPage;
