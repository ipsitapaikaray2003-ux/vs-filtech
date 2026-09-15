import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Wind, 
  ShieldCheck, 
  Sparkles,
  PhoneCall,
  Search,
  Filter
} from 'lucide-react';

import pulseJetImg from '../assets/factory_bagfilter_plant_hd.jpg';
import baghouseImg from '../assets/hero_baghouse.jpg';
import pleatedImg from '../assets/pleated_filter_bag.jpeg';
import cycloneImg from '../assets/cyclone_dust_collector.webp';
import idFanImg from '../assets/id_fan.jpg';
import filterBagImg from '../assets/filter_bag_hd.jpg';
import cageImg from '../assets/filter_cage.webp';
import solenoidImg from '../assets/solenoid_valve.webp';
import ralImg from '../assets/rotary_air_lock.webp';
import siloImg from '../assets/silo_filter_product.jpg';
import conveyorImg from '../assets/screw_conveyor_product.jpg';
import dpSwitchImg from '../assets/dp_transmitter_product.jpg';
import pressureSwitchImg from '../assets/pressure_switch_product.jpg';
import levelSensorImg from '../assets/level_sensor_product.jpg';
import hopperVibratorImg from '../assets/hopper_vibrator_product.jpg';
import explosionVentImg from '../assets/explosion_vent_product.jpg';
import peHtPanel from '../assets/pe_htpanel.jpg';
import peLtPanel from '../assets/pe_ltpanel.jpg';
import pePccPanel from '../assets/pe_pccpanel.webp';
import peMccPanel from '../assets/pe_mccpanel.jpg';
import peApfcPanel from '../assets/pe_apfcpanel.png';
import peBusDuct from '../assets/pe_busduct.jpg';
import vfdPlcImg from '../assets/vfd_plc_panel_product.jpg';

const products = [
  {
    id: 'pulse-jet-bag-filters',
    title: 'Pulse Jet Bag Filters',
    category: 'Filtration Systems',
    img: pulseJetImg,
    badge: 'Flagship Equipment',
    brief: 'Continuous online compressed-air automated pulse cleaning dust collectors. Engineered for heavy industrial continuous operations handling high air volumes and sub-micron particulate loads with <10 mg/Nm³ emissions.',
    specs: ['Airflow: 1,000 to 1,50,000+ CFM', 'Cleaning: Automatic pulse jet timer / DP mode', 'Efficiency: 99.9% particulate separation', 'Compliance: CPCB & State Pollution Board certified'],
    link: '/products/dust-collector-system'
  },
  {
    id: 'pleated-cartridge-bag-filter',
    title: 'Pleated Cartridge Bag Filter',
    category: 'Filtration Systems',
    img: pleatedImg,
    badge: 'Pleated Media',
    brief: 'Compact high-efficiency dust collector cartridges offering 2.5x to 3x greater filtration surface area than conventional tubular bags. Dramatically reduces baghouse footprint while handling high dust loads.',
    specs: ['Surface Area: 2.5x - 3x conventional bags', 'Cleaning: Reverse pulse-jet cleaning', 'Efficiency: 99.9%+ sub-micron capture', 'Installation: Direct retrofit into existing cell plates'],
    link: '/products/pleated-filter-bag'
  },
  {
    id: 'dust-collector-baghouse-cyclone',
    title: 'Dust Collector (Baghouse / Cyclone)',
    category: 'Filtration Systems',
    img: baghouseImg,
    badge: 'Baghouse & Cyclone',
    brief: 'Integrated two-stage dust extraction system combining aerodynamic cyclone centrifugal pre-separation with a high-capacity multi-hopper fabric baghouse for extreme dust loads.',
    specs: ['Pre-Separation: 80%+ coarse particle removal', 'Casing: Heavy-duty 5mm/6mm IS 2062 plate', 'Hopper: Multi-trough with rotary airlock', 'Access: Clean-air plenum top walk-in doors'],
    link: '/products/dust-collector-system'
  },
  {
    id: 'silo-filters',
    title: 'Silo Filters (Venting Dust Collectors)',
    category: 'Filtration Systems',
    img: siloImg,
    badge: 'Pneumatic Venting',
    brief: 'Top-mounted venting dust collector designed specifically for powder storage silos, cement bins, and pneumatic conveying receivers. Safely vents displaced air while capturing fine particles.',
    specs: ['Mounting: Direct circular / flanged silo top', 'Weatherproof: Heavy gauge outdoor casing', 'Cleaning: Integrated pulse-jet reverse air', 'Applications: Cement, Fly Ash, Lime, Flour'],
    link: '/products/silo-filters'
  },
  {
    id: 'cyclone-filters',
    title: 'Cyclone Filters & Dust Collectors',
    category: 'Pre-Separators',
    img: cycloneImg,
    badge: 'Pre-Separator',
    brief: 'High-efficiency aerodynamic centrifugal separators that extract heavy, coarse, and abrasive dust particles before the airstream enters the fabric baghouse, greatly extending filter bag service life.',
    specs: ['Design: High efficiency & high throughput cyclone profiles', 'Pressure Drop: Low static resistance (75-120 mm WG)', 'Particle Size: 10µm and larger coarse separation', 'Maintenance: Zero moving parts, high abrasion resistance'],
    link: '/products/cyclone-dust-collector'
  },
  {
    id: 'id-fans',
    title: 'ID Fans (Induced Draft Centrifugal Fans)',
    category: 'Airflow Equipment',
    img: idFanImg,
    badge: 'Heavy-Duty Blower',
    brief: 'Industrial heavy-duty centrifugal fans designed to draw flue gases and dust-laden air through ductwork and filter media, discharging clean air through the exhaust stack into the atmosphere.',
    specs: ['Capacity: Custom CFM matched to system static drop', 'Impeller: Backward curved / radial bladed with wear liners', 'Drive: Direct coupled or V-belt driven with vibration dampers', 'Temperature: Ambient up to 350°C continuous rating'],
    link: '/products/id-fans'
  },
  {
    id: 'filter-bags',
    title: 'Filter Bags (Woven & Non-Woven)',
    category: 'Filtration Media',
    img: filterBagImg,
    badge: 'OEM Filter Media',
    brief: 'Custom-manufactured filter bags in woven and non-woven needlefelt media. Available in Polyester, Nomex (Aramid), PPS (Ryton), PTFE (Teflon), Fiberglass, and Polypropylene with anti-adhesive ePTFE membranes.',
    specs: ['Treatments: Water & Oil Repellent, PTFE Membrane, Antistatic', 'Temperature Range: Up to 260°C continuous service', 'Configurations: Snap band, raw top, ring top, cord bottom', 'Pore Size: Sub-micron particle retention capability'],
    link: '/products/filter-bag'
  },
  {
    id: 'cages-with-venturi',
    title: 'Cages with Venturi',
    category: 'Structural Support',
    img: cageImg,
    badge: 'Structural Support',
    brief: 'Precision wire-mesh structural support cages fabricated from MS, GI, SS 304, or SS 316 wire. Equipped with integral cast aluminum or spun metal venturi to amplify cleaning sonic shockwaves.',
    specs: ['Wire Configuration: 8, 10, 12, 16, 20, or 24 longitudinal wires', 'Finish: Zinc electroplated, galvanized, silicone epoxy coated', 'Venturi: Cast aluminum / pressed steel for supersonic jet expansion', 'Fit: Close tolerance for bag fit without chafing'],
    link: '/products/filter-cages'
  },
  {
    id: 'solenoid-valves',
    title: 'Solenoid Pulse Valves',
    category: 'Pulse Cleaning',
    img: solenoidImg,
    badge: 'Fast Response',
    brief: 'High-speed pilot and integral diaphragm pulse jet valves engineered to discharge supersonic compressed air bursts in milliseconds, shocking filter bags clean while minimizing compressed air consumption.',
    specs: ['Port Sizes: 3/4", 1", 1.5", 2", 2.5", 3" BSP / Threaded / Dresser nut', 'Operating Pressure: 3 to 8 bar (45 to 115 psi)', 'Diaphragm: Durable molded Buna-N or Viton (high temp)', 'Control: Direct pilot solenoid or remote pneumatic pilot'],
    link: '/products/solenoid-valve'
  },
  {
    id: 'rotary-air-lock',
    title: 'RAL - Rotary Air Lock Valve',
    category: 'Dust Handling',
    img: ralImg,
    badge: 'Airtight Discharge',
    brief: 'Precision-machined continuous rotary feeder valves installed beneath baghouse hoppers. Discharges accumulated dust continuously into collection bins while maintaining an airtight pressure barrier.',
    specs: ['Casing: Graded Cast Iron / Fabricated MS / SS 304', 'Rotor: 6 to 8 vane closed or open ended with replaceable tips', 'Drive: Geared motor with chain sprocket / direct drive', 'Pressure Seal: Holds vacuum up to ±500 mm WG without leakage'],
    link: '/products/rotary-air-lock'
  },
  {
    id: 'screw-conveyor',
    title: 'Screw Conveyor Systems',
    category: 'Dust Handling',
    img: conveyorImg,
    badge: 'Mechanical Handling',
    brief: 'Heavy-duty enclosed tubular and U-trough screw conveyors designed to transport collected fly ash and dust from multiple hopper collection troughs to a centralized discharge airlock or storage bin.',
    specs: ['Trough: Heavy gauge MS / SS with dust-tight gasketed covers', 'Flight: Continuous sectional spiral screw flights with hardfacing', 'Bearings: Dust-sealed external hanger and outboard end bearings', 'Length & Dia: Custom designed to baghouse footprint'],
    link: '/products/screw-conveyor'
  },
  {
    id: 'differential-pressure-switch',
    title: 'Differential Pressure Switch & Transmitter',
    category: 'Instrumentation',
    img: dpSwitchImg,
    badge: 'Smart Cleaning',
    brief: 'High-precision differential pressure instruments that measure resistance across clean and dirty plenum tube sheets. Triggers pulse cleaning cycles only when required, saving up to 40% compressed air.',
    specs: ['Range: 0 - 250 mm WG / 0 - 500 mm WG (0 - 5 kPa)', 'Output: 4-20mA analog signal + adjustable SPDT relay contacts', 'Enclosure: IP65 weatherproof die-cast aluminum housing', 'Display: Dual scale local dial or bright digital LED indicator'],
    link: '/products/differential-pressure-switch'
  },
  {
    id: 'pressure-switch',
    title: 'Pressure Switch (Header Monitoring)',
    category: 'Instrumentation',
    img: pressureSwitchImg,
    badge: 'Safety Interlock',
    brief: 'Critical safety switch monitoring compressed air header reservoir pressure. Interlocks with the PLC/sequential timer to alert operators if plant air pressure drops below effective pulse cleaning thresholds.',
    specs: ['Pressure Range: 1 to 10 bar adjustable setting', 'Electrical Rating: Heavy-duty snap action micro-switch', 'Connection: 1/4" or 1/2" NPT / BSP brass or SS connector', 'Protection: Explosion-proof and weatherproof options'],
    link: '/products/pressure-switch'
  },
  {
    id: 'level-sensor',
    title: 'Hopper Level Sensors',
    category: 'Instrumentation',
    img: levelSensorImg,
    badge: 'Spill Prevention',
    brief: 'Rotary paddle, RF capacitance, and vibrating fork level switches installed on hopper cones. Detects high dust levels to prevent hopper backup that can submerge filter bags and cause bag failure.',
    specs: ['Sensing Mechanism: Rotary paddle, RF admittance, vibrating rod', 'Temperature: High temperature options up to 250°C', 'Output: DPDT potential free relay contacts for alarm & shutdown', 'Housing: Cast aluminum IP66 dust-tight enclosure'],
    link: '/products/level-sensor'
  },
  {
    id: 'hopper-vibrator',
    title: 'Hopper Vibrator (Electric & Pneumatic)',
    category: 'Dust Handling',
    img: hopperVibratorImg,
    badge: 'Bridging Prevention',
    brief: 'Pneumatic piston and electric rotary vibrators installed on hopper sloped walls. Breaks material bridges, eliminates rat-holing, and ensures smooth free-flowing dust gravity discharge into rotary valves.',
    specs: ['Types: Electric unbalance motor or pneumatic ball/piston', 'Force: Adjustable centrifugal force from 50 kg to 2,000 kg', 'Mounting: Reinforced channel-mount mounting bracket', 'Control: Automatic pulse cycling via cleaning sequential timer'],
    link: '/products/hopper-vibrator'
  },
  {
    id: 'explosion-vents',
    title: 'Explosion Vents (ATEX Burst Panels)',
    category: 'Safety Devices',
    img: explosionVentImg,
    badge: 'Safety Relief',
    brief: 'Certified rupture membrane relief panels designed to vent combustible dust deflagrations safely away from plant personnel, protecting the bag filter structural casing from catastrophic overpressure.',
    specs: ['Certification: ATEX compliant combustible dust explosion relief', 'Burst Pressure: Precision calibrated (typically 0.1 bar / 1.5 psi)', 'Construction: Stainless steel composite with fluoropolymer seal', 'Accessories: Weather hoods, burst sensors, and rupture indicators'],
    link: '/products/explosion-vents'
  },
  {
    id: 'vfd-panel',
    title: 'VFD Drive Panels (Variable Frequency Drive for ID Fans)',
    category: 'Electrical & Automation Panels',
    img: vfdPlcImg,
    badge: 'Airflow & Energy Saving',
    brief: 'High-efficiency Variable Frequency Drive (VFD) panels designed for bag filter ID fans. Dynamically modulates fan RPM based on duct static pressure, delivering 25% to 40% electrical power savings.',
    specs: ['Ratings: 5.5 kW to 350+ kW (7.5 - 500 HP)', 'Brands: Danfoss, Siemens, Schneider, ABB, Delta', 'Control: Closed-loop PID on 4-20mA DP feedback', 'Protection: Built-in line chokes & dV/dt filters'],
    link: '/products/vfd-panel'
  },
  {
    id: 'mcc-panel',
    title: 'MCC Panels (Motor Control Centre for Bag Filters)',
    category: 'Electrical & Automation Panels',
    img: peMccPanel,
    badge: 'Motor Control Center',
    brief: 'Centralized Motor Control Center (MCC) panels housing DOL, Star-Delta, and Soft Starters with fail-safe interlocks ensuring dust discharge valves start before the bag filter ID fan.',
    specs: ['Operating Voltage: 415 V AC, 3-Phase, 50 Hz', 'Busbar Capacity: Up to 3200 A Copper/Aluminium', 'Starters: DOL, Automatic Star-Delta, Soft Starters', 'Separation: Form 3b / Form 4b (IEC 61439)'],
    link: '/products/mcc-panel'
  },
  {
    id: 'ht-panel',
    title: 'HT Panels (High Tension 11kV / 22kV / 33kV Switchgear)',
    category: 'Electrical & Automation Panels',
    img: peHtPanel,
    badge: 'Up to 33 kV Switchgear',
    brief: 'High Tension (HT) switchgear panels with Vacuum Circuit Breakers (VCB) or SF6 breakers and numerical protection relays, engineered for primary plant substations and large dust collection plants.',
    specs: ['Voltage Rating: 11 kV, 22 kV, 33 kV (50 Hz)', 'Current Rating: 630 A to 2500 A', 'Breaking Capacity: Up to 31.5 kA for 3 seconds', 'Standard: IEC 62271-200 / IS 3427'],
    link: '/products/ht-panel'
  },
  {
    id: 'lt-panel',
    title: 'LT Panels (Low Tension 415V Power Distribution)',
    category: 'Electrical & Automation Panels',
    img: peLtPanel,
    badge: '415V Power Distribution',
    brief: 'Industrial Low Tension (LT) distribution switchboards with Air Circuit Breakers (ACB), MCCBs, and digital multifunction power meters for safe, uninterrupted power management.',
    specs: ['Operating Voltage: 415 V AC, 3-Phase, 50 Hz', 'Continuous Current: Up to 4000 A rating', 'Fault Level: 35 kA / 50 kA for 1 second', 'Enclosure: IP42 / IP54 / IP65 powder-coated CRCA'],
    link: '/products/lt-panel'
  },
  {
    id: 'pcc-panel',
    title: 'PCC Panels (Power Control Centre up to 6300A)',
    category: 'Electrical & Automation Panels',
    img: pePccPanel,
    badge: 'Main Power Backbone',
    brief: 'High-capacity Power Control Centre (PCC) switchboards with motorized draw-out ACBs and automatic generator source transfer (AMF/ATS) handling continuous currents up to 6300A.',
    specs: ['Current Rating: 800 A to 6300 A continuous', 'Short Circuit Withstand: 50 kA / 65 kA for 1 sec', 'Busbars: High-purity Electrolytic Copper / Aluminium', 'Form of Separation: Form 4b compartmentalization'],
    link: '/products/pcc-panel'
  },
  {
    id: 'apfc-panel',
    title: 'APFC Panels (Automatic Power Factor Control)',
    category: 'Electrical & Automation Panels',
    img: peApfcPanel,
    badge: 'Target 0.99 PF',
    brief: 'Microprocessor-controlled capacitor banks with 7%/14% detuned harmonic filter reactors. Automatically maintains power factor at 0.99 lag to eliminate electricity board penalty surcharges.',
    specs: ['Capacity Range: 50 kVAR to 1200+ kVAR modular', 'Target PF: 0.98 to 0.999 lag automatically maintained', 'Reactors: 7% (189 Hz) / 14% (134 Hz) detuned', 'Capacitors: Self-healing MPP with internal disconnectors'],
    link: '/products/apfc-panel'
  },
  {
    id: 'control-panels-seq',
    title: 'Baghouse PLC & Sequential Pulse Timer Panels',
    category: 'Electrical & Automation Panels',
    img: peMccPanel,
    badge: 'Pulse Automation',
    brief: 'Microprocessor sequential pulse timers with digital differential pressure transmitters and solid-state triac outputs for automated, on-demand reverse pulse-jet bag cleaning.',
    specs: ['Channels: 4, 8, 16, 24, 32, 64, 128 channels', 'Outputs: 24V DC / 110V AC / 230V AC triacs', 'Interface: Digital LED / 7.0" color touchscreen HMI', 'Enclosure: IP65 double-door weatherproof CRCA'],
    link: '/products/control-panels'
  },
  {
    id: 'bus-duct',
    title: 'Bus Duct Systems (Modular Sandwich Power Transmission)',
    category: 'Electrical & Automation Panels',
    img: peBusDuct,
    badge: 'High Amperage Feeder',
    brief: 'Prefabricated compact sandwich-type copper and aluminum busbar trunking systems rated up to 6300A, connecting transformers to PCC and heavy baghouse ID fan MCCs with low voltage drop.',
    specs: ['Voltage Rating: Up to 690 V / 1000 V AC', 'Current Capacity: 100 A to 6300 A continuous', 'Conductors: 99.9% Electrolytic Copper / Aluminium', 'Protection: IP54 / IP55 / IP65 / IP67 rating'],
    link: '/products/bus-duct'
  }
];

const categories = [
  'All Equipment',
  'Electrical & Automation Panels',
  'Filtration Systems',
  'Filtration Media',
  'Structural Support',
  'Pulse Cleaning',
  'Dust Handling',
  'Instrumentation',
  'Safety Devices'
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Equipment');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesCat = selectedCategory === 'All Equipment' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.brief.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="products-page" style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* Page Header */}
      <section 
        className="light-graphic-blueprint"
        style={{ 
          background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)',
          padding: '5rem 0 3.5rem',
          borderBottom: '1px solid #e2e8f0'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#f0f9ff',
            border: '1px solid #bae6fd',
            padding: '6px 18px',
            borderRadius: '999px',
            color: '#0284c7',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            boxShadow: '0 2px 8px rgba(2, 132, 199, 0.1)'
          }}>
            <Sparkles size={14} /> COMPLETE FILTRATION &amp; SPARES CATALOG
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
            fontWeight: '800',
            color: '#0f172a',
            lineHeight: '1.15',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            Industrial <span style={{ color: '#0284c7' }}>Products &amp; Spares</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.65',
            color: '#475569',
            marginBottom: '2.5rem'
          }}>
            From heavy-duty Pulse Jet Bag Filters to the smallest instrumentation spare. We design, manufacture, and supply complete air filtration equipment, accessories, and replacement parts under one roof.
          </p>

          {/* Search & Category Filter Controls */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            alignItems: 'center'
          }}>
            {/* Search Input */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px'
            }}>
              <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#0284c7' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bag filter, solenoid valve, screw conveyor, RAL..."
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 46px',
                  background: '#ffffff',
                  border: '1.5px solid #cbd5e1',
                  borderRadius: '12px',
                  color: '#0f172a',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#0284c7';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 132, 199, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#cbd5e1';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                }}
              />
            </div>

            {/* Category Filter Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center'
            }}>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    border: selectedCategory === cat ? '1px solid #0284c7' : '1px solid #e2e8f0',
                    background: selectedCategory === cat ? 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)' : '#ffffff',
                    color: selectedCategory === cat ? '#ffffff' : '#475569',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: selectedCategory === cat ? '0 4px 12px rgba(2, 132, 199, 0.25)' : '0 1px 4px rgba(0, 0, 0, 0.03)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section 
        className="light-graphic-dots"
        style={{ padding: '4.5rem 0 6rem', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            color: '#64748b',
            fontSize: '0.9rem'
          }}>
            <span>Showing <strong style={{ color: '#0f172a' }}>{filteredProducts.length}</strong> Equipment &amp; Spares Items</span>
            {selectedCategory !== 'All Equipment' && (
              <button 
                onClick={() => setSelectedCategory('All Equipment')}
                style={{ background: 'none', border: 'none', color: '#0284c7', cursor: 'pointer', textDecoration: 'underline', fontWeight: '600' }}
              >
                Clear Category Filter
              </button>
            )}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#0284c7';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(2, 132, 199, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                }}
              >
                {/* Product Image */}
                <Link to={product.link} style={{ display: 'block', height: '220px', position: 'relative', overflow: 'hidden', background: '#020617' }}>
                  <img
                    src={product.img}
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7) 0%, transparent 60%)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(15, 23, 42, 0.88)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    color: '#38bdf8',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backdropFilter: 'blur(8px)'
                  }}>
                    {product.badge}
                  </div>
                </Link>

                {/* Product Body */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#0284c7',
                    marginBottom: '6px'
                  }}>
                    {product.category}
                  </div>

                  <Link to={product.link} style={{ textDecoration: 'none' }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '800',
                      color: '#0f172a',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}>
                      {product.title}
                    </h3>
                  </Link>

                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: '#475569',
                    marginBottom: '18px',
                    flex: 1
                  }}>
                    {product.brief}
                  </p>

                  {/* Bullet Specs */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    marginBottom: '20px',
                    background: '#f8fafc',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0'
                  }}>
                    {product.specs.map((spec, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155' }}>
                        <CheckCircle2 size={13} style={{ color: '#0284c7', flexShrink: 0 }} />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <Link
                    to={product.link}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '11px 16px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(2, 132, 199, 0.25)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(2, 132, 199, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(2, 132, 199, 0.25)';
                    }}
                  >
                    <span>View Specifications &amp; RFQ</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Technical Inquiry Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)',
        padding: '4.5rem 0',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '800', marginBottom: '1rem', color: '#ffffff' }}>
            Need Custom Filtration Equipment or Spares?
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.65', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem' }}>
            We manufacture bags, cages, valves, and baghouses customized to your exact drawing and process requirements. Contact our engineers directly via WhatsApp or technical desk.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ background: '#ffffff', color: '#0369a1' }}>
              <PhoneCall size={17} />
              <span>Get Immediate Quotation</span>
            </Link>
            <a 
              href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20need%20a%20quotation%20for%20filtration%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#ffffff' }}
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;
