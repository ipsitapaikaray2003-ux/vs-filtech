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
import pleatedImg from '../assets/pleated_cartridge_hd.jpg';
import cycloneImg from '../assets/cyclone_separator_hd.jpg';
import idFanImg from '../assets/id_fan_hd.jpg';
import filterBagImg from '../assets/filter_bag_hd.jpg';
import cageImg from '../assets/filter_cage_hd.jpg';
import solenoidImg from '../assets/solenoid_valve_hd.jpg';
import ralImg from '../assets/rotary_airlock_hd.jpg';
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

import venturiImg from '../assets/venturi_nozzle_hd.jpg';
import ductingImg from '../assets/indoor_ducting.jpg';

const products = [
  // 1. Dust Collection Equipment
  {
    id: 'pulse-jet-bag-filters',
    title: 'Pulse Jet Bag Filters',
    category: 'Dust Collection Equipment',
    img: pulseJetImg,
    badge: 'Online Continuous Cleaning',
    brief: 'Continuous online compressed-air automated pulse cleaning dust collectors. Engineered for heavy industrial operations handling high air volumes and sub-micron particulate loads with <10 mg/Nm³ emissions.',
    specs: ['Airflow: 1,000 to 150,000+ CFM', 'Cleaning: Automatic pulse jet timer / DP mode', 'Efficiency: 99.9% particulate separation', 'Compliance: CPCB & State Pollution Board certified'],
    link: '/products/pulse-jet-filter'
  },
  {
    id: 'reverse-air-bag-filters',
    title: 'Reverse Air Bag Filters',
    category: 'Dust Collection Equipment',
    img: baghouseImg,
    badge: 'Offline Multi-Compartment',
    brief: 'Multi-compartment offline cleaning baghouses with gentle back-purge flow engineered for high-temperature furnace and kiln flue gases up to 260°C.',
    specs: ['Airflow: 25,000 to 500,000+ CFM', 'Isolation: Fast pneumatic poppet dampers', 'Temperature: Up to 260°C continuous service', 'Media: Anti-collapse ring supported woven bags'],
    link: '/products/reverse-air-bag-filters'
  },
  {
    id: 'dust-collector-baghouse-cyclone',
    title: 'Dust Collector Systems (Baghouse & Turnkey Systems)',
    category: 'Dust Collection Equipment',
    img: baghouseImg,
    badge: 'Turnkey Installation',
    brief: 'Complete engineered dust extraction systems combining aerodynamic capture hoods, duct networks, multi-hopper baghouse, rotary airlock, and exhaust blower.',
    specs: ['Pre-Separation: 80%+ coarse particle removal', 'Casing: Heavy-duty 5mm/6mm IS 2062 plate', 'Hopper: Multi-trough with rotary airlock', 'Access: Clean-air plenum top walk-in doors'],
    link: '/products/dust-collector-system'
  },
  {
    id: 'pleated-cartridge-bag-filter',
    title: 'Cartridge Filters (Pleated Cartridge Bag Filters)',
    category: 'Dust Collection Equipment',
    img: pleatedImg,
    badge: '3x Filtration Area',
    brief: 'Compact high-efficiency dust collector cartridges offering 2.5x to 3x greater filtration surface area than conventional tubular bags, cutting baghouse footprint in half.',
    specs: ['Surface Area: 2.5x - 3x conventional bags', 'Cleaning: Reverse pulse-jet cleaning', 'Efficiency: 99.9%+ sub-micron capture', 'Installation: Direct retrofit into existing cell plates'],
    link: '/products/pleated-filter-bag'
  },
  {
    id: 'cyclone-filters',
    title: 'Cyclone Separators & Pre-Collectors',
    category: 'Dust Collection Equipment',
    img: cycloneImg,
    badge: 'Pre-Separator',
    brief: 'High-efficiency aerodynamic centrifugal separators that extract heavy, coarse, and abrasive dust particles before the airstream enters the fabric baghouse, extending bag life 2.5x.',
    specs: ['Design: High efficiency & high throughput cyclone profiles', 'Pressure Drop: Low static resistance (75-120 mm WG)', 'Particle Size: 10µm and larger coarse separation', 'Maintenance: Zero moving parts, high abrasion resistance'],
    link: '/products/cyclone-dust-collector'
  },
  {
    id: 'silo-filters',
    title: 'Silo Venting Dust Collectors',
    category: 'Dust Collection Equipment',
    img: siloImg,
    badge: 'Pneumatic Venting',
    brief: 'Top-mounted circular and flanged venting dust collectors designed specifically for powder storage silos, cement bins, and pneumatic conveying receivers.',
    specs: ['Mounting: Direct circular / flanged silo top', 'Weatherproof: Heavy gauge outdoor casing', 'Cleaning: Integrated pulse-jet reverse air', 'Applications: Cement, Fly Ash, Lime, Flour'],
    link: '/products/silo-filters'
  },

  // 2. Filter Components
  {
    id: 'filter-bags',
    title: 'Industrial Filter Bags',
    category: 'Filter Components',
    img: filterBagImg,
    badge: 'Flagship Media Fabrication',
    brief: 'Custom-manufactured industrial filter bags in non-woven needlefelt and woven media. Available in Polyester, Nomex, PPS, PTFE, Fiberglass, and ePTFE membrane with custom snap-bands.',
    specs: ['Diameters: 100, 120, 130, 150, 160, 180 mm & custom', 'Finishes: Singed, glazed, calendared, antistatic', 'Construction: Needle felt / scrim supported', 'Efficiency: >99.5% (Up to 99.9% with ePTFE)'],
    link: '/products/filter-bag'
  },
  {
    id: 'cages-with-venturi',
    title: 'Dust Collector Filter Cages',
    category: 'Filter Components',
    img: cageImg,
    badge: '6 to 20-Wire Construction',
    brief: 'Precision robotic-welded 6, 8, 10, 12, 16, and 20-wire structural support cages fabricated in GI mild steel, SS 304, and SS 316. Available in single-piece or twist-lock split designs.',
    specs: ['Wire Configuration: 6, 8, 10, 12, 16, or 20 longitudinal wires', 'Finish: Electro-galvanized (GI), epoxy coated, or passivated', 'Venturi: Cast aluminum or spun steel supersonic bellmouth', 'Split Cages: Bayonet twist-lock couplings for low-ceiling rooms'],
    link: '/products/filter-cages'
  },
  {
    id: 'venturis',
    title: 'Supersonic Venturis (Cast Aluminum & Spun Steel)',
    category: 'Filter Components',
    img: venturiImg,
    badge: 'Sonic Jet Expansion',
    brief: 'Aerodynamically tuned Bellmouth venturis integrated at the top of filter cages to induce 4x secondary clean air volume down the full length of the filter bag during pulse cleaning.',
    specs: ['MOC: Graded Cast Aluminum alloy or deep-drawn spun steel', 'Profile: Aerodynamic converging-diverging Bellmouth nozzle', 'Mounting: Welded, snap-in collar, or drop-in cast flange', 'Length: 150mm to 300mm tuned profile for bag lengths up to 8m'],
    link: '/products/filter-cage-venturi'
  },
  {
    id: 'snap-bands',
    title: 'Snap Bands & Tubesheet Cuff Seals',
    category: 'Filter Components',
    img: filterBagImg,
    badge: 'Airtight Mechanical Seal',
    brief: 'Calibrated spring steel snap bands wrapped in multi-layered felt gaskets ensuring toolless, leak-free locking inside CNC laser-cut baghouse tubesheet cell plates.',
    specs: ['Diameters: 100mm, 120mm, 130mm, 150mm, 160mm, 180mm', 'Spring Steel: High-carbon tempered spring steel / SS 301 / SS 304', 'Installation: Toolless snap-in from clean-air top plenum', 'Fit: Zero particle bypass guaranteeing <10 mg/Nm³ emissions'],
    link: '/products/snap-bands'
  },
  {
    id: 'solenoid-valves',
    title: 'Solenoid Valves (Pilot Actuation)',
    category: 'Filter Components',
    img: solenoidImg,
    badge: 'Fast Millisecond Response',
    brief: 'High-speed pilot solenoid valves triggering rapid compressed air purging down blowpipes to shock filter bags clean while minimizing air consumption.',
    specs: ['Response Time: <30 milliseconds opening time', 'Operating Pressure: 3 to 8.5 bar (45 to 125 psi)', 'Voltage: 24V DC, 110V AC, 230V AC coils', 'Enclosure: IP65 weatherproof die-cast aluminum'],
    link: '/products/solenoid-valve'
  },
  {
    id: 'pulse-valves',
    title: 'Pulse Valves / Diaphragm Valves',
    category: 'Filter Components',
    img: solenoidImg,
    badge: 'High Peak Pressure Burst',
    brief: 'Heavy-duty angle body and dresser nut reverse pulse jet diaphragm valves engineered for over 1 million pulsing cycles in heavy dust baghouses.',
    specs: ['Port Sizes: 3/4", 1", 1.5", 2", 2.5", 3" BSP / Threaded / Dresser nut', 'Diaphragm: Durable molded Buna-N or Viton (rated up to 180°C)', 'Peak Pressure: Instantaneous high-thrust shockwave release', 'Mounting: Integral pilot or remote pneumatic pilot headers'],
    link: '/products/solenoid-valve'
  },
  {
    id: 'differential-pressure-switch',
    title: 'DP Switches (Differential Pressure Switches)',
    category: 'Filter Components',
    img: dpSwitchImg,
    badge: 'Smart Cleaning Interlock',
    brief: 'High-precision differential pressure switches measuring static resistance across dirty and clean plenum tube sheets to automate on-demand pulse cleaning.',
    specs: ['Range: 0 - 250 mm WG / 0 - 500 mm WG (0 - 5 kPa)', 'Output: Adjustable SPDT relay contacts for automatic timer trigger', 'Enclosure: IP65 weatherproof die-cast aluminum housing', 'Display: Dual scale local dial indicator with high-DP warning flag'],
    link: '/products/differential-pressure-switch'
  },
  {
    id: 'pressure-switch',
    title: 'Pressure Transmitters & Header Switches',
    category: 'Filter Components',
    img: pressureSwitchImg,
    badge: 'Air Header Safety',
    brief: 'Compressed air header reservoir pressure monitoring switches and continuous transmitters interlocking with the pulse controller to prevent pulsing under low pressure.',
    specs: ['Pressure Range: 1 to 10 bar adjustable setting', 'Signal: 4-20 mA analog output + SPDT alarm contacts', 'Connection: 1/4" or 1/2" NPT / BSP brass or SS connector', 'Protection: Weatherproof and flameproof enclosure options'],
    link: '/products/pressure-switch'
  },
  {
    id: 'explosion-vents',
    title: 'Explosion Vents (ATEX Burst Panels)',
    category: 'Filter Components',
    img: explosionVentImg,
    badge: 'Safety Relief',
    brief: 'Certified rupture membrane relief panels designed to vent combustible dust deflagrations safely away from plant personnel, protecting baghouses from overpressure.',
    specs: ['Certification: ATEX compliant combustible dust explosion relief', 'Burst Pressure: Precision calibrated (typically 0.1 bar / 1.5 psi)', 'Construction: Stainless steel composite with fluoropolymer seal', 'Accessories: Weather hoods, burst sensors, and rupture indicators'],
    link: '/products/explosion-vents'
  },

  // 3. Mechanical Equipment
  {
    id: 'rotary-air-lock',
    title: 'Rotary Air Lock Valves (RAL)',
    category: 'Mechanical Equipment',
    img: ralImg,
    badge: 'Airtight Hopper Discharge',
    brief: 'Precision-machined continuous rotary feeder valves installed beneath baghouse hoppers. Discharges accumulated dust continuously while maintaining an airtight pressure barrier.',
    specs: ['Casing: Graded Cast Iron / Fabricated MS / SS 304', 'Rotor: 6 to 8 vane closed or open ended with replaceable tips', 'Drive: Geared motor with chain sprocket / direct drive', 'Pressure Seal: Holds vacuum up to ±500 mm WG without leakage'],
    link: '/products/rotary-air-lock'
  },
  {
    id: 'screw-conveyor',
    title: 'Screw Conveyors',
    category: 'Mechanical Equipment',
    img: conveyorImg,
    badge: 'Continuous Dust Transport',
    brief: 'Heavy-duty enclosed tubular and U-trough screw conveyors transporting collected dust from multiple hopper collection troughs to a centralized discharge airlock.',
    specs: ['Trough: Heavy gauge MS / SS with dust-tight gasketed covers', 'Flight: Continuous sectional spiral screw flights with hardfacing', 'Bearings: Dust-sealed external hanger and outboard end bearings', 'Length & Dia: Custom designed to baghouse footprint'],
    link: '/products/screw-conveyor'
  },
  {
    id: 'id-fans',
    title: 'ID Fans (Induced Draft Centrifugal Fans)',
    category: 'Mechanical Equipment',
    img: idFanImg,
    badge: 'Heavy-Duty Process Blower',
    brief: 'Industrial heavy-duty centrifugal fans designed to draw flue gases and dust-laden air through ductwork and filter media, discharging clean air through the exhaust stack.',
    specs: ['Capacity: Custom CFM matched to system static drop', 'Impeller: Backward curved / radial bladed with wear liners', 'Drive: Direct coupled or V-belt driven with vibration dampers', 'Temperature: Ambient up to 350°C continuous rating'],
    link: '/products/id-fans'
  },
  {
    id: 'hopper-vibrator',
    title: 'Hopper Vibrators (Electric & Pneumatic)',
    category: 'Mechanical Equipment',
    img: hopperVibratorImg,
    badge: 'Anti-Bridging Equipment',
    brief: 'Pneumatic piston and electric rotary vibrators installed on hopper sloped walls to eliminate material rat-holing, bridging, and ensure smooth gravity discharge.',
    specs: ['Types: Electric unbalance motor or pneumatic ball/piston', 'Force: Adjustable centrifugal force from 50 kg to 2,000 kg', 'Mounting: Reinforced channel-mount mounting bracket', 'Control: Automatic pulse cycling via cleaning sequential timer'],
    link: '/products/hopper-vibrator'
  },
  {
    id: 'dampers',
    title: 'Industrial Dampers & Airflow Controls',
    category: 'Mechanical Equipment',
    img: ductingImg,
    badge: 'Gastight Isolation',
    brief: 'Multi-louver, butterfly, and fast-acting pneumatic poppet dampers engineered for baghouse gas balancing, fresh-air dilution, and offline compartment isolation.',
    specs: ['Types: Poppet Dampers, Multi-Louver, Butterfly, Guillotine Gates', 'Operating Temp: Ambient up to 450°C continuous rating', 'Seal Tightness: 99.0% to 99.95% volumetric shutoff', 'Actuation: Pneumatic cylinder, electric motorized, or manual'],
    link: '/products/dampers'
  },

  // 4. Electrical & Automation
  {
    id: 'control-panels-seq',
    title: 'Bag Filter Control Panels',
    category: 'Electrical & Automation',
    img: peMccPanel,
    badge: 'Centralized Plant Control',
    brief: 'Custom-engineered Motor Control Center (MCC) and automation panels managing baghouse fan interlocks, rotary airlock sequencing, and safety trips.',
    specs: ['Operating Voltage: 415V AC, 3-Phase, 50 Hz', 'Interlocks: Fail-safe conveyor/airlock start before ID fan', 'Starters: DOL, Automatic Star-Delta, Soft Starters', 'Enclosure: IP55 / IP65 double-door CRCA powder-coated'],
    link: '/products/control-panels'
  },
  {
    id: 'plc-panels',
    title: 'PLC Panels & Touchscreen HMI',
    category: 'Electrical & Automation',
    img: vfdPlcImg,
    badge: 'SCADA & Automation',
    brief: 'Microprocessor PLC automation panels equipped with color touchscreen HMIs and RS485 Modbus/Ethernet links for automated dust collection control.',
    specs: ['PLCs: Siemens, Schneider, Allen-Bradley, Delta', 'HMI: 7.0" to 15.0" high-resolution color touchscreen', 'Telemetry: Real-time DP logging, fan RPM, and alarm history', 'Safety: Emergency trip interlocks and automatic bypass routing'],
    link: '/products/control-panels'
  },
  {
    id: 'vfd-panel',
    title: 'VFD Panels (Variable Frequency Drive for ID Fans)',
    category: 'Electrical & Automation',
    img: vfdPlcImg,
    badge: '25-40% Energy Savings',
    brief: 'High-efficiency VFD panels dynamically modulating baghouse ID fan speed based on duct static pressure, slashing electrical power consumption by up to 40%.',
    specs: ['Ratings: 5.5 kW to 350+ kW (7.5 - 500 HP)', 'Brands: Danfoss, Siemens, Schneider, ABB, Delta', 'Control: Closed-loop PID on 4-20mA DP feedback', 'Protection: Built-in line chokes & dV/dt filters'],
    link: '/products/vfd-panel'
  },
  {
    id: 'dp-monitoring',
    title: 'Differential Pressure Monitoring Systems',
    category: 'Electrical & Automation',
    img: dpSwitchImg,
    badge: 'Continuous 4-20mA Telemetry',
    brief: 'Digital electronic differential pressure transmitters providing continuous 4-20mA signals to the plant DCS/SCADA to prevent bag blinding and overpressure.',
    specs: ['Accuracy: ±0.5% of calibrated span', 'Range: 0 - 250 mm WG / 0 - 500 mm WG / 0 - 5 kPa', 'Output: 4-20 mA with HART protocol / Modbus RS485', 'Enclosure: IP66 / IP68 die-cast weatherproof housing'],
    link: '/products/differential-pressure-switch'
  },
  {
    id: 'sequential-pulse-controllers',
    title: 'Sequential Pulse Controllers',
    category: 'Electrical & Automation',
    img: peMccPanel,
    badge: 'Pulse Automation',
    brief: 'Solid-state microprocessor sequential timers with digital differential pressure transmitters and solid-state triac outputs for automated reverse pulse cleaning.',
    specs: ['Channels: 4, 8, 16, 24, 32, 64, 128 channels', 'Outputs: 24V DC / 110V AC / 230V AC solid-state triacs', 'Cleaning Mode: Continuous cycle or on-demand DP mode', 'Enclosure: IP65 double-door weatherproof CRCA'],
    link: '/products/control-panels'
  },
  {
    id: 'mcc-panel',
    title: 'MCC Panels (Motor Control Centre)',
    category: 'Electrical & Automation',
    img: peMccPanel,
    badge: 'Motor Control Center',
    brief: 'Centralized Motor Control Center (MCC) panels housing DOL, Star-Delta, and Soft Starters with fail-safe interlocks for dust collection systems.',
    specs: ['Operating Voltage: 415 V AC, 3-Phase, 50 Hz', 'Busbar Capacity: Up to 3200 A Copper/Aluminium', 'Starters: DOL, Automatic Star-Delta, Soft Starters', 'Separation: Form 3b / Form 4b (IEC 61439)'],
    link: '/products/mcc-panel'
  },
  {
    id: 'apfc-panel',
    title: 'APFC Panels (Automatic Power Factor Control)',
    category: 'Electrical & Automation',
    img: peApfcPanel,
    badge: 'Target 0.99 PF',
    brief: 'Microprocessor-controlled capacitor banks with 7%/14% detuned harmonic filter reactors maintaining power factor at 0.99 lag to eliminate utility penalty charges.',
    specs: ['Capacity Range: 50 kVAR to 1200+ kVAR modular', 'Target PF: 0.98 to 0.999 lag automatically maintained', 'Reactors: 7% (189 Hz) / 14% (134 Hz) detuned', 'Capacitors: Self-healing MPP with internal disconnectors'],
    link: '/products/apfc-panel'
  }
];

const categories = [
  'All Equipment',
  'Dust Collection Equipment',
  'Filter Components',
  'Mechanical Equipment',
  'Electrical & Automation'
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
