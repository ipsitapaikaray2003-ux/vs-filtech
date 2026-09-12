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

const products = [
  {
    id: 'pulse-jet-bag-filters',
    title: 'Pulse Jet Bag Filters',
    category: 'Filtration Systems',
    img: pulseJetImg,
    badge: 'Flagship Equipment',
    brief: 'Continuous online compressed-air automated pulse cleaning dust collectors. Engineered for heavy industrial continuous operations handling high air volumes and sub-micron particulate loads with <10 mg/Nm³ emissions.',
    specs: ['Airflow: 1,000 to 1,50,000+ CFM', 'Cleaning: Automatic pulse jet timer / DP mode', 'Efficiency: 99.9% particulate separation', 'Compliance: CPCB & State Pollution Board certified'],
    link: '/products/pulse-jet-filter'
  },
  {
    id: 'pleated-cartridge-bag-filter',
    title: 'Pleated Cartridge Bag Filter',
    category: 'Filtration Systems',
    img: pleatedImg,
    badge: 'Pleated Media',
    brief: 'Compact high-efficiency dust collector cartridges offering 2.5x to 3x greater filtration surface area than conventional tubular bags. Dramatically reduces baghouse footprint while handling high dust loads.',
    specs: ['Surface Area: 2.5x - 3x conventional bags', 'Cleaning: Reverse pulse-jet cleaning', 'Efficiency: 99.9%+ sub-micron capture', 'Installation: Direct retrofit into existing cell plates'],
    link: '/products/filter-bags-cages'
  },
  {
    id: 'dust-collector-baghouse-cyclone',
    title: 'Dust Collector (Baghouse / Cyclone)',
    category: 'Filtration Systems',
    img: baghouseImg,
    badge: 'Baghouse & Cyclone',
    brief: 'Integrated two-stage dust extraction system combining aerodynamic cyclone centrifugal pre-separation with a high-capacity multi-hopper fabric baghouse for extreme dust loads.',
    specs: ['Pre-Separation: 80%+ coarse particle removal', 'Casing: Heavy-duty 5mm/6mm IS 2062 plate', 'Hopper: Multi-trough with rotary airlock', 'Access: Clean-air plenum top walk-in doors'],
    link: '/products/pulse-jet-filter'
  },
  {
    id: 'silo-filters',
    title: 'Silo Filters (Venting Dust Collectors)',
    category: 'Filtration Systems',
    img: siloImg,
    badge: 'Pneumatic Venting',
    brief: 'Top-mounted venting dust collector designed specifically for powder storage silos, cement bins, and pneumatic conveying receivers. Safely vents displaced air while capturing fine particles.',
    specs: ['Mounting: Direct circular / flanged silo top', 'Weatherproof: Heavy gauge outdoor casing', 'Cleaning: Integrated pulse-jet reverse air', 'Applications: Cement, Fly Ash, Lime, Flour'],
    link: '/contact?product=Silo-Filters'
  },
  {
    id: 'cyclone-filters',
    title: 'Cyclone Filters & Dust Collectors',
    category: 'Pre-Separators',
    img: cycloneImg,
    badge: 'Pre-Separator',
    brief: 'High-efficiency aerodynamic centrifugal separators that extract heavy, coarse, and abrasive dust particles before the airstream enters the fabric baghouse, greatly extending filter bag service life.',
    specs: ['Design: High efficiency & high throughput cyclone profiles', 'Pressure Drop: Low static resistance (75-120 mm WG)', 'Particle Size: 10µm and larger coarse separation', 'Maintenance: Zero moving parts, high abrasion resistance'],
    link: '/contact?product=Cyclone-Filters'
  },
  {
    id: 'id-fans',
    title: 'ID Fans (Induced Draft Centrifugal Fans)',
    category: 'Airflow Equipment',
    img: idFanImg,
    badge: 'Heavy-Duty Blower',
    brief: 'Industrial heavy-duty centrifugal fans designed to draw flue gases and dust-laden air through ductwork and filter media, discharging clean air through the exhaust stack into the atmosphere.',
    specs: ['Capacity: Custom CFM matched to system static drop', 'Impeller: Backward curved / radial bladed with wear liners', 'Drive: Direct coupled or V-belt driven with vibration dampers', 'Temperature: Ambient up to 350°C continuous rating'],
    link: '/contact?product=ID-Fans'
  },
  {
    id: 'filter-bags',
    title: 'Filter Bags (Woven & Non-Woven)',
    category: 'Filtration Media',
    img: filterBagImg,
    badge: 'OEM Filter Media',
    brief: 'Custom-manufactured filter bags in woven and non-woven needlefelt media. Available in Polyester, Nomex (Aramid), PPS (Ryton), PTFE (Teflon), Fiberglass, and Polypropylene with anti-adhesive ePTFE membranes.',
    specs: ['Treatments: Water & Oil Repellent, PTFE Membrane, Antistatic', 'Temperature Range: Up to 260°C continuous service', 'Configurations: Snap band, raw top, ring top, cord bottom', 'Pore Size: Sub-micron particle retention capability'],
    link: '/products/filter-bags-cages'
  },
  {
    id: 'cages-with-venturi',
    title: 'Cages with Venturi',
    category: 'Structural Support',
    img: cageImg,
    badge: 'Structural Support',
    brief: 'Precision wire-mesh structural support cages fabricated from MS, GI, SS 304, or SS 316 wire. Equipped with integral cast aluminum or spun metal venturi to amplify cleaning sonic shockwaves.',
    specs: ['Wire Configuration: 8, 10, 12, 16, 20, or 24 longitudinal wires', 'Finish: Zinc electroplated, galvanized, silicone epoxy coated', 'Venturi: Cast aluminum / pressed steel for supersonic jet expansion', 'Fit: Close tolerance for bag fit without chafing'],
    link: '/products/filter-bags-cages'
  },
  {
    id: 'solenoid-valves',
    title: 'Solenoid Pulse Valves',
    category: 'Pulse Cleaning',
    img: solenoidImg,
    badge: 'Fast Response',
    brief: 'High-speed pilot and integral diaphragm pulse jet valves engineered to discharge supersonic compressed air bursts in milliseconds, shocking filter bags clean while minimizing compressed air consumption.',
    specs: ['Port Sizes: 3/4", 1", 1.5", 2", 2.5", 3" BSP / Threaded / Dresser nut', 'Operating Pressure: 3 to 8 bar (45 to 115 psi)', 'Diaphragm: Durable molded Buna-N or Viton (high temp)', 'Control: Direct pilot solenoid or remote pneumatic pilot'],
    link: '/products/control-panels'
  },
  {
    id: 'rotary-air-lock',
    title: 'RAL - Rotary Air Lock Valve',
    category: 'Dust Handling',
    img: ralImg,
    badge: 'Airtight Discharge',
    brief: 'Precision-machined continuous rotary feeder valves installed beneath baghouse hoppers. Discharges accumulated dust continuously into collection bins while maintaining an airtight pressure barrier.',
    specs: ['Casing: Graded Cast Iron / Fabricated MS / SS 304', 'Rotor: 6 to 8 vane closed or open ended with replaceable tips', 'Drive: Geared motor with chain sprocket / direct drive', 'Pressure Seal: Holds vacuum up to ±500 mm WG without leakage'],
    link: '/contact?product=Rotary-Air-Lock'
  },
  {
    id: 'screw-conveyor',
    title: 'Screw Conveyor Systems',
    category: 'Dust Handling',
    img: conveyorImg,
    badge: 'Mechanical Handling',
    brief: 'Heavy-duty enclosed tubular and U-trough screw conveyors designed to transport collected fly ash and dust from multiple hopper collection troughs to a centralized discharge airlock or storage bin.',
    specs: ['Trough: Heavy gauge MS / SS with dust-tight gasketed covers', 'Flight: Continuous sectional spiral screw flights with hardfacing', 'Bearings: Dust-sealed external hanger and outboard end bearings', 'Length & Dia: Custom designed to baghouse footprint'],
    link: '/contact?product=Screw-Conveyor'
  },
  {
    id: 'differential-pressure-switch',
    title: 'Differential Pressure Switch & Transmitter',
    category: 'Instrumentation',
    img: dpSwitchImg,
    badge: 'Smart Cleaning',
    brief: 'High-precision differential pressure instruments that measure resistance across clean and dirty plenum tube sheets. Triggers pulse cleaning cycles only when required, saving up to 40% compressed air.',
    specs: ['Range: 0 - 250 mm WG / 0 - 500 mm WG (0 - 5 kPa)', 'Output: 4-20mA analog signal + adjustable SPDT relay contacts', 'Enclosure: IP65 weatherproof die-cast aluminum housing', 'Display: Dual scale local dial or bright digital LED indicator'],
    link: '/products/control-panels'
  },
  {
    id: 'pressure-switch',
    title: 'Pressure Switch (Header Monitoring)',
    category: 'Instrumentation',
    img: pressureSwitchImg,
    badge: 'Safety Interlock',
    brief: 'Critical safety switch monitoring compressed air header reservoir pressure. Interlocks with the PLC/sequential timer to alert operators if plant air pressure drops below effective pulse cleaning thresholds.',
    specs: ['Pressure Range: 1 to 10 bar adjustable setting', 'Electrical Rating: Heavy-duty snap action micro-switch', 'Connection: 1/4" or 1/2" NPT / BSP brass or SS connector', 'Protection: Explosion-proof and weatherproof options'],
    link: '/products/control-panels'
  },
  {
    id: 'level-sensor',
    title: 'Hopper Level Sensors',
    category: 'Instrumentation',
    img: levelSensorImg,
    badge: 'Spill Prevention',
    brief: 'Rotary paddle, RF capacitance, and vibrating fork level switches installed on hopper cones. Detects high dust levels to prevent hopper backup that can submerge filter bags and cause bag failure.',
    specs: ['Sensing Mechanism: Rotary paddle, RF admittance, vibrating rod', 'Temperature: High temperature options up to 250°C', 'Output: DPDT potential free relay contacts for alarm & shutdown', 'Housing: Cast aluminum IP66 dust-tight enclosure'],
    link: '/products/control-panels'
  },
  {
    id: 'hopper-vibrator',
    title: 'Hopper Vibrator (Electric & Pneumatic)',
    category: 'Dust Handling',
    img: hopperVibratorImg,
    badge: 'Bridging Prevention',
    brief: 'Pneumatic piston and electric rotary vibrators installed on hopper sloped walls. Breaks material bridges, eliminates rat-holing, and ensures smooth free-flowing dust gravity discharge into rotary valves.',
    specs: ['Types: Electric unbalance motor or pneumatic ball/piston', 'Force: Adjustable centrifugal force from 50 kg to 2,000 kg', 'Mounting: Reinforced channel-mount mounting bracket', 'Control: Automatic pulse cycling via cleaning sequential timer'],
    link: '/contact?product=Hopper-Vibrator'
  },
  {
    id: 'explosion-vents',
    title: 'Explosion Vents (ATEX Burst Panels)',
    category: 'Safety Devices',
    img: explosionVentImg,
    badge: 'Safety Relief',
    brief: 'Certified rupture membrane relief panels designed to vent combustible dust deflagrations safely away from plant personnel, protecting the bag filter structural casing from catastrophic overpressure.',
    specs: ['Certification: ATEX compliant combustible dust explosion relief', 'Burst Pressure: Precision calibrated (typically 0.1 bar / 1.5 psi)', 'Construction: Stainless steel composite with fluoropolymer seal', 'Accessories: Weather hoods, burst sensors, and rupture indicators'],
    link: '/contact?product=Explosion-Vents'
  }
];

const categories = [
  'All Equipment',
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
    <div className="products-page" style={{ background: 'var(--bg-primary, #070b14)', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* Page Header */}
      <section style={{ 
        background: 'radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.12) 0%, transparent 60%), #0b1120',
        padding: '5rem 0 3.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            padding: '6px 16px',
            borderRadius: '999px',
            color: '#38bdf8',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem'
          }}>
            <Sparkles size={14} /> COMPLETE FILTRATION & SPARES CATALOG
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.15',
            marginBottom: '1.25rem'
          }}>
            Industrial <span style={{
              background: 'linear-gradient(135deg, #38bdf8 0%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Products & Spares</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.65',
            color: '#94a3b8',
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
              <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bag filter, solenoid valve, screw conveyor, RAL..."
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 46px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
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
                    border: selectedCategory === cat ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
                    background: selectedCategory === cat ? 'rgba(56, 189, 248, 0.2)' : 'rgba(15, 23, 42, 0.6)',
                    color: selectedCategory === cat ? '#38bdf8' : '#cbd5e1',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    cursor: 'pointer',
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
      <section style={{ padding: '4.5rem 0 6rem' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            color: '#94a3b8',
            fontSize: '0.9rem'
          }}>
            <span>Showing {filteredProducts.length} Equipment & Spares Items</span>
            {selectedCategory !== 'All Equipment' && (
              <button 
                onClick={() => setSelectedCategory('All Equipment')}
                style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', textDecoration: 'underline' }}
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
                  background: 'rgba(15, 23, 42, 0.75)',
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(14, 165, 233, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
                }}
              >
                {/* Product Image */}
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden', background: '#020617' }}>
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
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
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
                </div>

                {/* Product Body */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#38bdf8',
                    marginBottom: '6px'
                  }}>
                    {product.category}
                  </div>

                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}>
                    {product.title}
                  </h3>

                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: '#94a3b8',
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
                    background: 'rgba(2, 6, 23, 0.5)',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    {product.specs.map((spec, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1' }}>
                        <CheckCircle2 size={13} style={{ color: '#38bdf8', flexShrink: 0 }} />
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
                      padding: '10px 16px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      color: '#38bdf8',
                      fontSize: '0.88rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#0284c7';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)';
                      e.currentTarget.style.color = '#38bdf8';
                    }}
                  >
                    <span>Inquire / View Details</span>
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
        background: 'linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%)',
        padding: '4.5rem 0',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '800', marginBottom: '1rem', color: '#ffffff' }}>
            Need Custom Filtration Equipment or Spares?
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.65', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem' }}>
            We manufacture bags, cages, valves, and baghouses customized to your exact drawing and process requirements. Contact our engineers directly at <strong>+91 1234567890</strong>.
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
              <span>WhatsApp +91 1234567890</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;
