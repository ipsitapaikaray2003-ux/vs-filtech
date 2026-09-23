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
  X,
  Wind,
  Cpu,
  Wrench,
  Gauge,
  Workflow
} from 'lucide-react';

import pulseJetImg from '../assets/factory_bagfilter_plant_hd.jpg';
import pleatedImg from '../assets/pleated_cartridge_hd.jpg';
import baghouseCycloneImg from '../assets/hero_baghouse.jpg';
import fumeImg from '../assets/indoor_ducting.jpg';
import filterBagImg from '../assets/filter_bag_hd.jpg';
import solenoidImg from '../assets/solenoid_valve_hd.jpg';
import idFanImg from '../assets/id_fan_hd.jpg';
import cycloneImg from '../assets/cyclone_separator_hd.jpg';
import cageImg from '../assets/filter_cage_hd.jpg';
import venturiImg from '../assets/venturi_nozzle_hd.jpg';
import ralImg from '../assets/rotary_airlock_hd.jpg';
import conveyorImg from '../assets/screw_conveyor_product.jpg';
import hopperVibratorImg from '../assets/hopper_vibrator_product.jpg';
import dpSwitchImg from '../assets/dp_transmitter_product.jpg';
import pressureSwitchImg from '../assets/pressure_switch_product.jpg';
import vfdPlcImg from '../assets/vfd_plc_panel_product.jpg';
import peHtPanel from '../assets/pe_htpanel.jpg';
import peMccPanel from '../assets/pe_mccpanel.jpg';

// 5 Genuine High-Resolution Industrial Photography Assets
import industryCementImg from '../assets/industry_cement.jpg';
import industryPowerImg from '../assets/industry_power.jpg';
import industrySteelImg from '../assets/industry_steel.jpg';
import industryMetalsImg from '../assets/industry_metals.jpg';
import industryFoundryCastingImg from '../assets/industry_foundry_casting.jpg';

import './Products.css';

// 4 Industrial Divisions (Complete Dust Collection Solution Provider)
const productDivisions = [
  {
    id: 'dust-collection',
    name: 'Dust Collection Equipment',
    shortName: 'Dust Collection',
    tag: 'CORE SYSTEMS',
    headline: 'Continuous Online & Offline Baghouse Systems & Pre-Separators',
    icon: Wind,
    products: [
      {
        title: 'Pulse Jet Bag Filters',
        tag: 'ONLINE CLEANING',
        tagClass: 'badge-cyan',
        image: pulseJetImg,
        lead: 'Custom-engineered online compressed-air reverse pulse jet bag filters for continuous industrial dust collection.',
        bullets: [
          'High air volume range: 1,000 to 150,000+ CFM',
          'Downflow negative can velocity baffling prevents dust re-entrainment',
          'Top-access toolless snap-band bag & cage changeout from roof doors'
        ],
        detailsLink: '/products/pulse-jet-filter',
        quoteLink: '/contact?product=Pulse-Jet-Bag-Filters'
      },
      {
        title: 'Reverse Air Bag Filters',
        tag: 'OFFLINE MULTI-COMPARTMENT',
        tagClass: 'badge-blue',
        image: baghouseCycloneImg,
        lead: 'Multi-compartment offline cleaning baghouses with gentle back-purge flow for high-temperature kilns and boilers.',
        bullets: [
          'Pneumatic poppet isolation dampers for quiescent offline bag cleaning',
          'Thermal rating up to 260°C for coal boilers and cement kilns',
          'Anti-collapse ring supported bags minimizing mechanical fabric stress'
        ],
        detailsLink: '/products/reverse-air-bag-filters',
        quoteLink: '/contact?product=Reverse-Air-Bag-Filters'
      },
      {
        title: 'Dust Collectors',
        tag: 'COMPLETE INSTALLATIONS',
        tagClass: 'badge-purple',
        image: baghouseCycloneImg,
        lead: 'Turnkey industrial dust collection systems including capture hoods, aerodynamic ducting, baghouse, and fan.',
        bullets: [
          'Custom MOC: 4mm-6mm IS 2062 plate, Corten steel, or SS 304/316',
          'Integrated hoppers with 60° valley angles and inspection hatches',
          'Guaranteed statutory emission compliance (<10 mg/Nm³ CPCB limits)'
        ],
        detailsLink: '/products/dust-collector-system',
        quoteLink: '/contact?product=Dust-Collectors'
      },
      {
        title: 'Cartridge Filters',
        tag: 'HIGH SURFACE AREA',
        tagClass: 'badge-emerald',
        image: pleatedImg,
        lead: 'Compact pleated cartridge dust collectors delivering 2.5x to 3x higher filtration surface area in small footprints.',
        bullets: [
          'Direct retrofit cartridges into existing baghouse tubesheet cell plates',
          'Spunbond polyester media with microporous ePTFE surface membranes',
          'Dramatically reduces can velocity and solves capacity bottlenecks'
        ],
        detailsLink: '/products/pleated-filter-bag',
        quoteLink: '/contact?product=Cartridge-Filters'
      },
      {
        title: 'Cyclone Separators',
        tag: 'PRE-SEPARATION',
        tagClass: 'badge-amber',
        image: cycloneImg,
        lead: 'Aerodynamic centrifugal cyclone pre-separators extracting heavy, coarse, and abrasive particulate before baghouses.',
        bullets: [
          'Removes 85-92% coarse abrasive particles, extending bag life 2.5x',
          'Low static pressure drop (75-120 mm WG) with zero moving parts',
          'Abrasion-resistant Hardox wear plate liners in high-velocity zones'
        ],
        detailsLink: '/products/cyclone-dust-collector',
        quoteLink: '/contact?product=Cyclone-Separators'
      }
    ]
  },
  {
    id: 'filter-components',
    name: 'Filter Components',
    shortName: 'Filter Components',
    tag: 'FILTRATION MEDIA & SPARES',
    headline: 'In-House Filter Bags, Precision Support Cages, Venturis & Valves',
    icon: Layers,
    products: [
      {
        title: 'Filter Bags',
        tag: 'OEM MEDIA FABRICATION',
        tagClass: 'badge-cyan',
        image: filterBagImg,
        lead: 'Industrial filter bags engineered for high particulate capture, long operating lifecycle, and harsh chemical atmospheres.',
        bullets: [
          'Media: Polyester, PPS (Ryton), Aramid (Nomex), Fiberglass, PTFE & ePTFE',
          'Standard diameters: 100, 120, 130, 150, 160, 180 mm and customized lengths',
          'Finishes: Singed, glazed, calendared, antistatic, and oil/water repellent'
        ],
        detailsLink: '/products/filter-bag',
        quoteLink: '/contact?product=Filter-Bags'
      },
      {
        title: 'Dust Collector Cages',
        tag: 'SUPPORT CAGES',
        tagClass: 'badge-blue',
        image: cageImg,
        lead: 'Precision-welded 6, 8, 10, 12, 16, and 20-wire support cages preventing filter bag collapse under heavy suction.',
        bullets: [
          '6 / 8 / 10 / 12 / 20 longitudinal wire construction with zero burrs',
          'Materials: Galvanized Mild Steel (GI), SS 304, and SS 316',
          'Split cage configurations with twist-lock couplings for low-headroom plants'
        ],
        detailsLink: '/products/filter-cages',
        quoteLink: '/contact?product=Filter-Cages'
      },
      {
        title: 'Venturis',
        tag: 'PULSE AMPLIFICATION',
        tagClass: 'badge-purple',
        image: venturiImg,
        lead: 'Cast aluminum and pressed steel supersonic venturis inducing 4x secondary clean air volume down the filter bag.',
        bullets: [
          'Aerodynamically profiled Bellmouth design maximizing acoustic shockwave',
          'Seamless integration with support cages (welded, snap-in, or drop-in)',
          'Uniform bag cleaning from top collar to bottom disc'
        ],
        detailsLink: '/products/filter-cage-venturi',
        quoteLink: '/contact?product=Venturis'
      },
      {
        title: 'Snap Bands',
        tag: 'AIRTIGHT TUBESHEET SEAL',
        tagClass: 'badge-amber',
        image: filterBagImg,
        lead: 'Calibrated spring steel snap ring bands wrapped in double-beaded felt gaskets for toolless leak-proof sealing.',
        bullets: [
          'Audible snap fit into CNC tubesheet holes ensuring zero particle bypass',
          'High-fatigue spring steel retainers in high carbon steel and SS 304',
          'Available for hole diameters 100mm, 120mm, 130mm, 150mm, 160mm, 180mm'
        ],
        detailsLink: '/products/snap-bands',
        quoteLink: '/contact?product=Snap-Bands'
      },
      {
        title: 'Solenoid Valves',
        tag: 'PILOT ACTUATION',
        tagClass: 'badge-emerald',
        image: solenoidImg,
        lead: 'Fast-response pilot solenoid valves discharging instantaneous compressed air pulses to shock bags clean.',
        bullets: [
          'Millisecond response (<30 ms opening time) minimizing air loss',
          'Operating pressure range: 3 to 8.5 bar with molded Buna/Viton diaphragms',
          'Available in 24V DC, 110V AC, and 230V AC coils with IP65 protection'
        ],
        detailsLink: '/products/solenoid-valve',
        quoteLink: '/contact?product=Solenoid-Valves'
      },
      {
        title: 'Pulse Valves / Diaphragm Valves',
        tag: 'PULSE JET VALVES',
        tagClass: 'badge-rose',
        image: solenoidImg,
        lead: 'Heavy-duty angle-body and dresser nut pulse jet diaphragm valves rated for over 1 million operating cycles.',
        bullets: [
          'Port sizes: 3/4", 1", 1.5", 2", 2.5", 3" BSP / Threaded / Dresser nut',
          'High peak pressure pulse discharge for deep bag dust penetration',
          'High-temperature Viton diaphragms rated up to 180°C available'
        ],
        detailsLink: '/products/solenoid-valve',
        quoteLink: '/contact?product=Pulse-Valves'
      },
      {
        title: 'DP Switches',
        tag: 'SMART CLEANING',
        tagClass: 'badge-cyan',
        image: dpSwitchImg,
        lead: 'Precision differential pressure switches monitoring tube sheet resistance across dirty and clean plenums.',
        bullets: [
          'Triggers automated on-demand pulse cleaning, saving 35-40% compressed air',
          'Adjustable set-point SPDT relay outputs with local analog dial',
          'Die-cast IP65 weatherproof enclosure for tough plant environments'
        ],
        detailsLink: '/products/differential-pressure-switch',
        quoteLink: '/contact?product=DP-Switches'
      },
      {
        title: 'Pressure Transmitters',
        tag: 'SCADA 4-20mA TELEMETRY',
        tagClass: 'badge-blue',
        image: pressureSwitchImg,
        lead: 'Continuous electronic differential pressure transmitters providing 4-20mA signals directly to PLC/SCADA systems.',
        bullets: [
          'High-accuracy piezoresistive silicon sensor with digital LCD display',
          'Dual range measurement (0-250 mm WG / 0-500 mm WG / 0-5 kPa)',
          'Header compressed air pressure monitoring with low-pressure alarm safety'
        ],
        detailsLink: '/products/differential-pressure-switch',
        quoteLink: '/contact?product=Pressure-Transmitters'
      }
    ]
  },
  {
    id: 'mechanical-equipment',
    name: 'Mechanical Equipment',
    shortName: 'Mechanical Equipment',
    tag: 'DUST HANDLING & AIRFLOW',
    headline: 'Airtight Rotary Airlocks, Screw Conveyors, Heavy ID Fans & Dampers',
    icon: Wrench,
    products: [
      {
        title: 'Rotary Air Lock Valves',
        tag: 'AIRTIGHT DISCHARGE',
        tagClass: 'badge-blue',
        image: ralImg,
        lead: 'Continuous rotary feeder valves installed beneath baghouse hoppers discharging dust while sealing vacuum draft.',
        bullets: [
          'Precision-machined 6 to 8-vane closed/open rotors with <0.10mm clearance',
          'Maintains airtight seal under high negative pressure (-500 mm WG)',
          'Heavy-duty cast iron, fabricated MS, or SS 304 with direct geared motor'
        ],
        detailsLink: '/products/rotary-air-lock',
        quoteLink: '/contact?product=Rotary-Air-Lock'
      },
      {
        title: 'Screw Conveyors',
        tag: 'DUST CONVEYING',
        tagClass: 'badge-cyan',
        image: conveyorImg,
        lead: 'Enclosed tubular and U-trough dust conveyors transporting collected particulate from multi-hopper troughs.',
        bullets: [
          'Heavy gauge continuous sectional flights with wear-resistant hardfacing',
          'Outboard dust-sealed flange bearings preventing bearing contamination',
          'Gasketed dust-tight top covers with safety grid and inspection doors'
        ],
        detailsLink: '/products/screw-conveyor',
        quoteLink: '/contact?product=Screw-Conveyor'
      },
      {
        title: 'ID Fans (Induced Draft Fans)',
        tag: 'CENTRIFUGAL BLOWERS',
        tagClass: 'badge-purple',
        image: idFanImg,
        lead: 'Heavy-duty centrifugal process draft fans dynamically balanced to ISO 1940 for continuous 24/7 baghouse ventilation.',
        bullets: [
          'Airflow matched to system static resistance up to 1800 mm WG',
          'Backward curved, aerofoil, and radial tipped impellers with wear liners',
          'Direct coupled or V-belt driven with water-cooled bearings for hot gas'
        ],
        detailsLink: '/products/id-fans',
        quoteLink: '/contact?product=ID-Fans'
      },
      {
        title: 'Hopper Vibrators',
        tag: 'ANTI-BRIDGING',
        tagClass: 'badge-amber',
        image: hopperVibratorImg,
        lead: 'Electric unbalance and pneumatic piston vibrators eliminating rat-holing and material bridging on hopper slopes.',
        bullets: [
          'Promotes smooth free-flowing gravity discharge into rotary airlocks',
          'Adjustable centrifugal impact force from 50 kg to 2,000 kg',
          'Automatically pulsed by the baghouse cleaning controller'
        ],
        detailsLink: '/products/hopper-vibrator',
        quoteLink: '/contact?product=Hopper-Vibrators'
      },
      {
        title: 'Dampers & Airflow Controls',
        tag: 'GASTIGHT ISOLATION',
        tagClass: 'badge-emerald',
        image: fumeImg,
        lead: 'Multi-louver, butterfly, and pneumatic poppet dampers engineered for gas balancing and compartment isolation.',
        bullets: [
          'Fast-acting 3-second poppet isolation for offline bag cleaning cycles',
          'Class II to Class IV seal tightness (99.0% - 99.95% volumetric shutoff)',
          'High-temperature thermal ratings up to 450°C continuous service'
        ],
        detailsLink: '/products/dampers',
        quoteLink: '/contact?product=Dampers'
      }
    ]
  },
  {
    id: 'electrical-automation',
    name: 'Electrical & Automation',
    shortName: 'Electrical & Automation',
    tag: 'INTELLIGENT CONTROL & INSTRUMENTATION',
    headline: 'Turnkey Bag Filter Control Panels, PLC Panels, VFD Energy Savers & DP Controllers',
    icon: Cpu,
    products: [
      {
        title: 'Bag Filter Control Panels',
        tag: 'CENTRALIZED CONTROL',
        tagClass: 'badge-rose',
        image: peHtPanel,
        lead: 'Integrated MCC/PCC automation panels managing baghouse fan interlocks, pulse timers, and rotary valve sequencing.',
        bullets: [
          'Fail-safe starting interlock (Airlock & Conveyor starts before ID fan)',
          'Built-in motor protection: overload, single phasing, short circuit, and phase reversal',
          'IP55/IP65 weatherproof double-door enclosures with status mimic LEDs'
        ],
        detailsLink: '/products/control-panels',
        quoteLink: '/contact?product=Bag-Filter-Control-Panels'
      },
      {
        title: 'PLC Panels',
        tag: 'TOUCHSCREEN SCADA',
        tagClass: 'badge-purple',
        image: vfdPlcImg,
        lead: 'Industrial PLC panels with color touchscreen HMIs and Ethernet/Modbus SCADA links for automated dust collection.',
        bullets: [
          'Tier-1 PLCs: Siemens, Schneider, Rockwell Allen-Bradley, and Delta',
          'Interactive color HMI displaying real-time DP trends, fan RPM, and alarms',
          'Remote telemetry, emergency trip interlocks, and historical fault logging'
        ],
        detailsLink: '/products/control-panels',
        quoteLink: '/contact?product=PLC-Panels'
      },
      {
        title: 'VFD Panels',
        tag: 'ENERGY SAVING (25-40%)',
        tagClass: 'badge-cyan',
        image: vfdPlcImg,
        lead: 'Variable Frequency Drive (VFD) panels dynamically modulating ID fan speed to slash electrical power consumption.',
        bullets: [
          'Closed-loop PID speed modulation based on duct static pressure feedback',
          'Delivers 25% to 40% electrical energy savings compared to damper throttling',
          'Built-in line input chokes, dV/dt harmonic filters, and bypass contactors'
        ],
        detailsLink: '/products/vfd-panel',
        quoteLink: '/contact?product=VFD-Panels'
      },
      {
        title: 'Differential Pressure Monitoring',
        tag: 'DP TRANSMITTERS',
        tagClass: 'badge-blue',
        image: dpSwitchImg,
        lead: 'Smart electronic DP monitoring systems giving continuous visibility into filter bag condition and cake thickness.',
        bullets: [
          'Real-time continuous 4-20mA feedback preventing baghouse overpressure',
          'Programmable high DP warning alarms alerting operators to bag blinding',
          'Digital local display calibrated in mm WG, Pascals, or millibar'
        ],
        detailsLink: '/products/differential-pressure-switch',
        quoteLink: '/contact?product=DP-Monitoring'
      },
      {
        title: 'Sequential Pulse Controllers',
        tag: 'PULSE AUTOMATION',
        tagClass: 'badge-emerald',
        image: peMccPanel,
        lead: 'Solid-state microprocessor sequential timers firing pulse solenoid valves in exact programmed sequences.',
        bullets: [
          'Modular outputs from 4 to 128 channels with solid-state triac drivers',
          'Demand-based cleaning mode saves up to 40% compressed air',
          'Adjustable pulse on-time (20ms-1000ms) and off-time (1s-999s)'
        ],
        detailsLink: '/products/sequential-pulse-controllers',
        quoteLink: '/contact?product=Sequential-Pulse-Controllers'
      }
    ]
  }
];

// 5 Dedicated Core Industries with Genuine Photography
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
    name: 'Metals & Smelters',
    headline: 'Secondary Smelting & Non-Ferrous Refining',
    image: industryMetalsImg,
    badge: 'NON-FERROUS & SMELTING',
    solutions: [
      'Secondary Aluminium, Copper, Zinc & Lead rotary refining furnaces',
      'Continuous ingot casting, dross cooling, and extrusion press extraction',
      'Inline spark arrestor chambers preventing burning embers from entering bags',
      'Corrosive flux & fluoride off-gas dry injection treatment systems'
    ],
    emissionNorm: 'Zero Fugitive Emission Capture',
    mediaRecommendation: 'High-Density Needlefelt with Spark Arrestor Protection'
  },
  {
    id: 'foundries-casting',
    name: 'Foundries & Casting',
    headline: 'Induction Furnaces, Pouring & Sand Reclamation',
    image: industryFoundryCastingImg,
    badge: 'FOUNDRY & CASTING',
    solutions: [
      'Induction melting furnace close-capture swing hoods with automatic motorized dampers',
      'Foundry sand reclamation, sand mullers, shakeout tables, and shot blasting baghouses',
      'Cupola furnace exhaust gas cleaning with inline multi-cyclone spark arrestor chambers',
      'Die casting, pouring line emissions, and core shop binder fume containment'
    ],
    emissionNorm: '< 10 mg/Nm³ (CPCB Compliant Clean Air)',
    mediaRecommendation: 'Flame-Retardant Singed Polyester Needlefelt / High-Temp Aramid Nomex'
  }
];

const Products = () => {
  const [activeDivisionId, setActiveDivisionId] = useState('dust-collection');
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const activeDivision = productDivisions.find(d => d.id === activeDivisionId) || productDivisions[0];

  return (
    <section id="products" className="products-showcase-section">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="products-section-header">
          <div className="products-luxury-tag">
            <Sparkles size={14} style={{ color: '#0284c7' }} /> 
            <span>COMPLETE DUST-COLLECTION SOLUTION PROVIDER</span>
          </div>

          <h2 className="products-main-title">
            Engineered Systems &amp; <span style={{ color: '#38bdf8' }}>Complete Equipment Portfolio</span>
          </h2>

          <p className="products-main-lead">
            VS Filtech is a complete dust-collection solution provider — from custom baghouse engineering and in-house filter media manufacturing to heavy dust handling mechanicals and intelligent PLC/VFD automation panels.
          </p>
        </div>

        {/* Complete Solution Provider Flow Architecture */}
        <div className="solution-architecture-banner">
          <div className="arch-banner-header">
            <Workflow size={18} className="arch-icon" />
            <span className="arch-title">END-TO-END DUST COLLECTION INTEGRATION</span>
            <span className="arch-badge">SINGLE-SOURCE OEM</span>
          </div>
          <div className="arch-steps-grid">
            <div className="arch-step-item">
              <span className="arch-step-num">01</span>
              <div className="arch-step-info">
                <strong>Gas Capture &amp; Ingress</strong>
                <span>Canopy Hoods &amp; Dampers</span>
              </div>
            </div>
            <div className="arch-step-arrow">→</div>
            <div className="arch-step-item">
              <span className="arch-step-num">02</span>
              <div className="arch-step-info">
                <strong>Pre-Separation</strong>
                <span>Cyclone Separators</span>
              </div>
            </div>
            <div className="arch-step-arrow">→</div>
            <div className="arch-step-item arch-step-highlight">
              <span className="arch-step-num">03</span>
              <div className="arch-step-info">
                <strong>Fabric Baghouse</strong>
                <span>Filter Bags, Cages &amp; Valves</span>
              </div>
            </div>
            <div className="arch-step-arrow">→</div>
            <div className="arch-step-item">
              <span className="arch-step-num">04</span>
              <div className="arch-step-info">
                <strong>Draft &amp; Exhaust</strong>
                <span>Heavy-Duty ID Fans</span>
              </div>
            </div>
            <div className="arch-step-arrow">→</div>
            <div className="arch-step-item">
              <span className="arch-step-num">05</span>
              <div className="arch-step-info">
                <strong>Dust Handling</strong>
                <span>Rotary Airlock &amp; Conveyors</span>
              </div>
            </div>
            <div className="arch-step-arrow">→</div>
            <div className="arch-step-item">
              <span className="arch-step-num">06</span>
              <div className="arch-step-info">
                <strong>System Control</strong>
                <span>PLC, VFD &amp; DP Monitoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Categorized Division Navigation Tabs */}
        <div className="product-category-tabs-container">
          <div className="product-category-tabs" role="tablist">
            {productDivisions.map((div) => {
              const IconComp = div.icon;
              const isActive = div.id === activeDivisionId;
              return (
                <button
                  key={div.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`product-cat-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveDivisionId(div.id)}
                >
                  <IconComp size={18} className="tab-btn-icon" />
                  <div className="tab-btn-text">
                    <span className="tab-btn-title">{div.name}</span>
                    <span className="tab-btn-count">{div.products.length} Products</span>
                  </div>
                  {isActive && <div className="tab-active-indicator" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Division Description Banner */}
        <div className="division-headline-bar">
          <div className="division-headline-left">
            <span className="division-tag">{activeDivision.tag}</span>
            <h3 className="division-title">{activeDivision.headline}</h3>
          </div>
          <Link to="/products" className="division-catalog-link">
            <span>View Full {activeDivision.shortName} Catalog</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        {/* Product Cards Grid for the Active Division */}
        <div className="umiya-product-cards-grid">
          {activeDivision.products.map((prod, idx) => (
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

        {/* ── Industries We Serve (Photographic Showcase) ── */}
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
                        href="tel:+918496978456" 
                        className="btn-modal-call"
                      >
                        <PhoneCall size={16} />
                        <span>Call Engineering Desk</span>
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
            <h4>Need Custom Engineering Sizing or Spares Sourcing?</h4>
            <p>We manufacture and supply all 24 industrial baghouses, filter media varieties, support cages, and automation panels.</p>
          </div>
          <Link to="/products" className="btn-explore-catalog">
            <span>Explore Complete 24-Equipment Catalog</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;
