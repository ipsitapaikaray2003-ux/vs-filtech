import pulseJetImg from '../assets/factory_bagfilter_plant_hd.jpg';
import baghouseImg from '../assets/hero_baghouse.jpg';
import pleatedImg from '../assets/pleated_cartridge_hd.jpg';
import cycloneImg from '../assets/cyclone_separator_hd.jpg';
import idFanImg from '../assets/id_fan_hd.jpg';
import filterBagImg from '../assets/filter_bag_hd.jpg';
import cageImg from '../assets/filter_cage_hd.jpg';
import venturiImg from '../assets/venturi_nozzle_hd.jpg';
import solenoidImg from '../assets/solenoid_valve_hd.jpg';
import ralImg from '../assets/rotary_airlock_hd.jpg';
import siloImg from '../assets/silo_filter_product.jpg';
import conveyorImg from '../assets/screw_conveyor_product.jpg';
import dpSwitchImg from '../assets/dp_transmitter_product.jpg';
import pressureSwitchImg from '../assets/pressure_switch_product.jpg';
import levelSensorImg from '../assets/level_sensor_product.jpg';
import hopperVibratorImg from '../assets/hopper_vibrator_product.jpg';
import explosionVentImg from '../assets/explosion_vent_product.jpg';
import vfdPlcImg from '../assets/vfd_plc_panel_product.jpg';
import controlPanelImg from '../assets/control_panel_mcc_product.jpg';
import cartridgeCollectorUnitImg from '../assets/cartridge_collector_unit_hd.jpg';

import peHtPanel from '../assets/pe_htpanel.jpg';
import peLtPanel from '../assets/pe_ltpanel.jpg';
import pePccPanel from '../assets/pe_pccpanel.webp';
import peMccPanel from '../assets/pe_mccpanel.jpg';
import peApfcPanel from '../assets/pe_apfcpanel.png';
import peBusDuct from '../assets/pe_busduct.jpg';
import peHero1 from '../assets/pe_hero1.jpg';
import peHero2 from '../assets/pe_hero2.jpg';
import peHero3 from '../assets/pe_hero3.jpg';
import peHero4 from '../assets/pe_hero4.jpg';

import ductingImg from '../assets/indoor_ducting.jpg';
import snapBandsImg from '../assets/snap_bands_cuff_hd.jpg';


export const PRODUCT_CATEGORIES = [
  {
    id: 'dust-collection',
    name: 'Dust Collection Equipment',
    shortName: 'Dust Collection',
    desc: 'Heavy-duty continuous industrial baghouses, cartridge collectors, offline/online filters and cyclone pre-separators.',
    badge: 'Core Systems'
  },
  {
    id: 'filter-components',
    name: 'Filter Components',
    shortName: 'Filter Components',
    desc: 'Precision filtration media, support cages, supersonic venturis, snap bands, pulse valves and differential instrumentation.',
    badge: 'OEM Spares'
  },
  {
    id: 'mechanical-equipment',
    name: 'Mechanical Equipment',
    shortName: 'Mechanical Equipment',
    desc: 'Airtight rotary airlock valves, screw conveyors, induced draft fans, hopper vibrators, and heavy-duty gas dampers.',
    badge: 'Dust Handling'
  },
  {
    id: 'electrical-automation',
    name: 'Electrical & Automation',
    shortName: 'Electrical & Automation',
    desc: 'Turnkey sequential pulse timers, PLC panels, energy-saving ID fan VFD drive panels, and DP monitoring systems.',
    badge: 'Process Automation'
  }
];

export const allProductsData = [
  {
    id: 'dust-collector-system',
    slugs: [
      'dust-collectors', 
      'dust-collector', 
      'dust-collector-system', 
      'industrial-dust-collectors', 
      'industrial-dust-collector', 
      'pulse-jet-dust-collector', 
      'turnkey-dust-collector',
      'dust-collection-equipment'
    ],
    title: 'Industrial Dust Collector Systems (Turnkey Baghouses & Centralized Extraction)',
    shortTitle: 'Industrial Dust Collectors',
    category: 'Turnkey Filtration Systems',
    mainCategory: 'Dust Collection Equipment',
    tag: 'Flagship Heavy-Duty Dust Extraction',
    image: pulseJetImg,
    heroImage: baghouseImg,
    shortDesc: 'Continuous online automated reverse-pulse jet baghouse dust collection systems custom-engineered for heavy manufacturing plants across India with guaranteed < 10 mg/Nm³ emissions.',
    overview: 'VS Filtech designs, manufactures, erects, and commissions heavy-duty industrial dust collector systems tailored to your specific process parameters. Engineered for continuous 24/7 operation under heavy dust loadings, our baghouse dust collectors integrate CNC laser-cut tubesheets, aerodynamic downward can-velocity inlet diffusers, and microprocessor-controlled sequential reverse-pulse jet cleaning. From modular bin vents to high-volume centralized baghouses, our systems capture 99.9%+ of sub-micron particulates, ensuring 100% statutory CPCB and State Pollution Control Board compliance.',
    features: [
      { title: 'Reverse Pulse-Jet Cleaning', desc: 'Online row-by-row high-pressure compressed air purging ensures uninterrupted continuous plant draft without shutdown.' },
      { title: 'Downward Can Velocity', desc: 'Aerodynamic inlet baffles prevent dislodged dust from re-entraining back onto adjacent filter bags.' },
      { title: 'Top-Access Clean Air Plenum', desc: 'Toolless snap-band bag and cage changeout safely conducted from the weather-tight roof plenum.' },
      { title: 'Guaranteed CPCB Compliance', desc: 'Engineered particulate capture efficiency exceeding 99.9% delivering outlet emission levels below 10 mg/Nm³.' },
      { title: 'Heavy Gauge Construction', desc: 'Fabricated from 4mm to 6mm IS 2062 mild steel or stainless steel plates with structural stiffeners designed for ±5000 Pa static pressure.' },
      { title: 'Automated Dust Discharge', desc: 'Equipped with heavy-duty rotary airlock valves, motorized screw conveyors, and hopper vibrators for continuous dust evacuation.' }
    ],
    specs: [
      { parameter: 'Airflow Capacity', value: '1,000 CFM to 250,000+ CFM (custom modular plant sizing)' },
      { parameter: 'Filtration Efficiency', value: '> 99.9% sub-micron capture (< 10 mg/Nm³ guaranteed outlet emission)' },
      { parameter: 'Material of Construction (MOC)', value: '4mm - 8mm IS 2062 Mild Steel / Corten Steel / SS 304 / SS 316' },
      { parameter: 'Cleaning Mechanism', value: 'High-energy reverse pulse jet via supersonic venturis (5.0 - 6.5 bar clean dry air)' },
      { parameter: 'Filter Bag Configuration', value: 'Standard Dia 120mm - 160mm, lengths up to 6.5m in woven/needlefelt fabrics' },
      { parameter: 'Operating Temperature', value: 'Ambient up to 260°C continuous service (with Nomex/PTFE media)' },
      { parameter: 'Tubesheet Design', value: 'CNC laser-cut tubesheet with calibrated snap-ring apertures' },
      { parameter: 'Discharge Equipment', value: 'Heavy-duty rotary airlock valve (RAL), motorized screw conveyor & slide gate' },
      { parameter: 'Control System', value: 'Microprocessor sequential pulse timer with digital DP display & Modbus telemetry' },
      { parameter: 'Safety Systems', value: 'Explosion relief vents, spark detection, and emergency cold air dilution dampers' }
    ],
    principle: 'Dust-laden process air is drawn into the dust collector through aerodynamic inlet baffles. Heavy particles drop directly into the collection hopper by gravitational inertia, while fine dust rises toward the vertical filter bags. Sub-micron particulates form a permeable dust cake on the exterior of the bags while clean air passes through the interior into the clean-air plenum and is drawn out by the ID fan. A sequential electronic timer activates pulse valves, sending supersonic compressed air shockwaves down through venturi nozzles to dislodge accumulated dust cakes into the collection hopper without halting plant draft.',
    applications: [
      'Cement & Clinker Grinding Plants', 'Steel & Induction Melting Furnaces', 'Thermal Power Plant Boilers', 
      'Carbon Black & Chemical Processing', 'Non-Ferrous Smelters & Foundries', 'Woodworking, Grain & Food Processing',
      'Shot Blasting & Plasma/Laser Cutting', 'Bulk Silo Storage & Truck Loading Terminals'
    ],
    relatedIds: ['filter-bag', 'filter-cages', 'solenoid-valve', 'id-fans', 'rotary-air-lock']
  },
  {
    id: 'cartridge-filters',
    slugs: [
      'cartridge-filters', 
      'cartridge-filter', 
      'pleated-cartridge-filter', 
      'cartridge-dust-collector', 
      'pleated-cartridge-dust-collector'
    ],
    title: 'Pleated Cartridge Dust Collectors (Compact Sub-Micron Filtration)',
    shortTitle: 'Cartridge Dust Collectors',
    category: 'Turnkey Filtration Systems',
    mainCategory: 'Dust Collection Equipment',
    tag: 'Compact High-Efficiency Fume Extraction',
    image: pleatedImg,
    heroImage: cartridgeCollectorUnitImg,
    shortDesc: 'Ultra-compact reverse pulse-jet pleated cartridge dust collectors delivering 3x higher filtration surface area for sub-micron fumes, welding smoke, and fine powders.',
    overview: 'VS Filtech manufactures high-efficiency Pleated Cartridge Dust Collectors engineered for industrial applications requiring maximum filtration surface area in a compact physical footprint. Utilizing spunbonded polyester, PTFE membranes, and nanofiber media, our cartridge units capture ultra-fine fumes and powders with 99.99% efficiency down to 0.3 micron while consuming 50% less floor space than conventional baghouses.',
    features: [
      { title: '300% Higher Filtration Area', desc: 'Pleated cylindrical geometry provides triple the filtration area compared to fabric bags of identical length.' },
      { title: 'Sub-Micron Fume Capture', desc: 'Nanofiber and expanded PTFE membrane media trap particulates as fine as 0.3 micron with 99.99% efficiency.' },
      { title: 'Compact Factory Footprint', desc: 'Ideal for indoor factory installations, CNC laser cutting machines, and localized work cell extraction.' },
      { title: 'Toolless Quick-Release Cartridges', desc: 'Cam-lock or twist-lock cartridge mounting allows rapid maintenance without specialized tools.' },
      { title: 'Downward Cross-Flow Design', desc: 'Inlet airflow moves downward parallel to cartridges, ensuring dislodged dust falls straight into the collection bin.' },
      { title: 'Integrated Spark Arrestor', desc: 'Built-in drop-out baffle and perforated spark arrestor screen protect filter media from hot embers.' }
    ],
    specs: [
      { parameter: 'Airflow Capacity', value: '500 CFM to 50,000 CFM (modular scalable units)' },
      { parameter: 'Filtration Efficiency', value: '99.99% at 0.3 micron (HEPA grade secondary filter options available)' },
      { parameter: 'Cartridge Media', value: 'Spunbonded Polyester, Cellulose Blend, PTFE Membrane, Antistatic Aluminized' },
      { parameter: 'Cleaning Mechanism', value: 'Downward reverse pulse-jet compressed air purging (4.0 to 6.0 bar)' },
      { parameter: 'Cartridge Orientation', value: 'Vertical hanging or horizontal slide-in cartridge arrangements' },
      { parameter: 'Material of Construction (MOC)', value: '3mm - 4.5mm IS 2062 Mild Steel powder-coated / SS 304 / SS 316' },
      { parameter: 'Dust Discharge', value: 'Quick-release clamp dust collection drawer or continuous rotary airlock valve' },
      { parameter: 'Control Instrumentation', value: 'Digital sequential pulse timer with DP differential pressure gauge' }
    ],
    principle: 'Dust and fumes enter the collector, flowing downward through pleated filter elements. The media pleats trap fine particulates on the outer surface while purified air exits through the cartridge core into the exhaust plenum. High-speed pulse valves periodically fire reverse blasts of compressed air inside each cartridge, flexing the pleats and ejecting cake directly into the collection drawer.',
    applications: [
      'Laser & CNC Plasma Cutting Fumes', 'Robotic Welding Smoke Extraction', 'Pharmaceutical Powder Processing',
      'Powder Coating Spray Booths', 'Battery Cell Manufacturing', 'Sand Blasting & Metal Grinding'
    ],
    relatedIds: ['dust-collector-system', 'solenoid-valve', 'rotary-air-lock', 'differential-pressure-switch']
  },
  {
    id: 'id-fans',
    slugs: ['id-fans', 'induced-draft-fans', 'centrifugal-fans'],
    title: 'ID Fans (Induced Draft Centrifugal Fans)',
    shortTitle: 'ID Fans',
    category: 'Airflow & Draft Equipment',
    mainCategory: 'Mechanical Equipment',
    tag: 'Heavy-Duty Blower',
    image: idFanImg,
    heroImage: ductingImg,
    shortDesc: 'Industrial heavy-duty centrifugal ID fans dynamically balanced to ISO 1940 standards for high-static negative draft flue gas extraction.',
    overview: 'VS Filtech manufactures high-performance industrial Induced Draft (ID) centrifugal fans designed specifically for dusty, corrosive, and high-temperature flue gas handling. Precision dynamically balanced in multiple planes, our fans sustain continuous negative draft across expansive duct networks, cyclones, and baghouse tube sheets with minimum vibration, low acoustic noise, and maximum electrical efficiency.',
    features: [
      { title: 'Dynamic Precision Balancing', desc: 'Impellers dynamically balanced to ISO 1940 Grade G2.5 for vibration-free continuous operation.' },
      { title: 'Abrasion-Resistant Liners', desc: 'Blades and housing scrolls fitted with replaceable Hardox wear liners for handling abrasive dust.' },
      { title: 'Heavy Plummer Block Bearings', desc: 'Self-aligning spherical roller bearings housed in oil or grease bath plummer blocks with RTD sensors.' },
      { title: 'Aerodynamic Efficiency', desc: 'Optimized backward-curved or radial-tipped blade geometry delivering up to 85% mechanical efficiency.' }
    ],
    specs: [
      { parameter: 'Volumetric Flow Range', value: '1,000 to 2,50,000 m³/hr (500 to 1,50,000 CFM)' },
      { parameter: 'Static Pressure Range', value: '150 mm WG to 1,800 mm WG' },
      { parameter: 'Impeller Profiles', value: 'Backward curved, backward inclined, radial tipped, aerofoil' },
      { parameter: 'Drive Arrangements', value: 'Direct coupled with flexible spacer coupling, or heavy V-belt drive' },
      { parameter: 'Balancing Standard', value: 'ISO 1940 Grade G2.5 / G6.3 multi-plane dynamic balancing' },
      { parameter: 'Operating Temperature', value: 'Ambient up to 350°C continuous service' },
      { parameter: 'Shaft Sealing', value: 'Gland packing / labyrinth seals with purge air connection' },
      { parameter: 'Vibration Level', value: '< 2.5 mm/s RMS at full operating velocity' }
    ],
    principle: 'As the high-speed centrifugal impeller rotates, centrifugal force accelerates incoming flue gas outward toward the scroll casing. This conversion of kinetic velocity into static pressure draws dusty air continuously through upstream ductwork and bag filter compartments, discharging clean gas safely through the chimney stack into the atmosphere.',
    applications: [
      'Boiler Flue Gas Extraction', 'Rotary Kilns & Preheaters', 'Baghouse Exhaust Systems', 
      'Furnace Fume Extraction', 'Foundry Cupolas', 'Hot Gas Recirculation'
    ],
    relatedIds: ['dust-collector-system', 'cyclone-dust-collector', 'fume-extraction-system']
  },
  {
    id: 'cyclone-dust-collector',
    slugs: [
      'cyclone-dust-collector', 
      'cyclone-separators', 
      'cyclone-separator', 
      'cyclone-filters', 
      'centrifugal-separator'
    ],
    title: 'Cyclone Dust Collector & Pre-Separator',
    shortTitle: 'Cyclone Dust Collector',
    category: 'Mechanical Pre-Separators',
    tag: 'Pre-Separator',
    image: cycloneImg,
    heroImage: baghouseImg,
    shortDesc: 'Centrifugal pre-separators extracting 80%+ coarse and abrasive particulates before flue gases enter the fabric baghouse.',
    overview: 'VS Filtech manufactures high-efficiency aerodynamic cyclone dust collectors designed as mechanical pre-separators upstream of fabric baghouses. Utilizing centrifugal force, our cyclones drop out heavy, abrasive, and combustible spark particles from the gas stream, lowering the particulate burden on fabric filter bags by over 80% and extending bag lifecycle by 2.5x to 3x.',
    features: [
      { title: 'Centrifugal Heavy Particle Capture', desc: 'Extracts 85% to 95% of coarse particulates (> 10 microns) without filter media.' },
      { title: 'Zero Moving Parts', desc: 'Robust static design provides continuous maintenance-free operation with low wear.' },
      { title: 'Replaceable Wear Plates', desc: 'High-impact scroll entries and cone sections fitted with Hardox wear plates.' },
      { title: 'Spark Extinguishment', desc: 'Long cyclonic residence time extinguishes incandescent sparks, protecting baghouses from fire.' }
    ],
    specs: [
      { parameter: 'Collection Efficiency', value: '85% to 95% on particles ≥ 10 µm' },
      { parameter: 'Inlet Gas Velocity', value: '15 to 22 m/s engineered cyclonic entry velocity' },
      { parameter: 'Static Pressure Drop', value: 'Low resistance (70 mm to 120 mm WG)' },
      { parameter: 'Material of Construction', value: '4mm - 8mm IS 2062 Mild Steel / Hardox 400 liners / SS304' },
      { parameter: 'Configuration Options', value: 'Single cyclone, twin dual cyclones, or quad multi-cyclone banks' },
      { parameter: 'Dust Discharge', value: 'Bottom flanged conical outlet with rotary air lock or counterweighted flap valve' },
      { parameter: 'Operating Temperature', value: 'Ambient up to 450°C continuous service' },
      { parameter: 'Paint & Finish', value: 'Heat-resistant aluminum / epoxy primer with polyurethane enamel' }
    ],
    principle: 'Dust-laden air enters tangentially into the cylindrical cyclone casing at high velocity, creating a downward spiral vortex. Centrifugal force drives dense dust particles against the outer walls where they slide down into the conical hopper. Near the bottom, clean gas reverses direction, ascending through the central vortex finder tube into the exhaust duct.',
    applications: [
      'Woodworking & Planer Shavings', 'Foundry Sand Reclaim Plants', 'Grain Elevators & Flour Mills', 
      'Coal Crushing & Screening', 'Biomass Boiler Fly Ash', 'Shot Blasting Units'
    ],
    relatedIds: ['dust-collector-system', 'rotary-air-lock', 'id-fans']
  },
  {
    id: 'filter-bag',
    slugs: ['filter-bag', 'filter-bags', 'industrial-filter-bags'],
    title: 'Industrial Filter Bags (Woven & Needlefelt)',
    shortTitle: 'Filter Bags',
    category: 'Filtration Media',
    mainCategory: 'Filter Components',
    tag: 'OEM Media',
    image: filterBagImg,
    heroImage: pleatedImg,
    shortDesc: 'Custom-stitched non-woven needlefelt and woven filter bags with stainless spring snap-band collars for 100% dust-tight tube sheet sealing.',
    overview: 'VS Filtech manufactures high-precision industrial filter bags tailored for all major baghouse configurations. Fabricated on automated multi-needle chain-stitch machines using virgin needlefelts with scrim reinforcement, our bags feature thermal surface singeing, heat-setting, and stainless spring snap-band collars for airtight, leak-free installation into cell plate openings.',
    features: [
      { title: 'Stainless Spring Snap-Band', desc: 'Double-beaded spring band collar expands securely into laser-cut holes for a dust-tight seal.' },
      { title: 'Surface Treatments', desc: 'Available with water/oil repellent (OWR), PTFE membrane, and antistatic epitropic fibers.' },
      { title: 'High-Tenacity Stitching', desc: 'Heavy 3-needle/4-needle lock chain stitching with high-temperature PTFE/Aramid threads.' },
      { title: 'Wide Temperature Range', desc: 'Fabrics tailored from ambient up to 260°C continuous for aggressive flue gas chemistry.' }
    ],
    specs: [
      { parameter: 'Available Media Polymers', value: 'Polyester, Nomex / Aramid (240°C), PPS / Ryton (190°C), PTFE (260°C), Polypropylene, Fiberglass' },
      { parameter: 'Fabric Weight', value: '400 to 650 GSM with heavy-duty woven scrim' },
      { parameter: 'Air Permeability', value: '10 to 18 m³/m²/min @ 200 Pa differential pressure' },
      { parameter: 'Standard Diameters', value: 'Ø100mm, Ø115mm, Ø125mm, Ø130mm, Ø150mm, Ø160mm' },
      { parameter: 'Length Range', value: '1.0 meter to 10.0+ meters' },
      { parameter: 'Top Collar Designs', value: 'Stainless snap band, raw edge, cord collar, flange ring top' },
      { parameter: 'Bottom Construction', value: 'Reinforced double-layered disc bottom or reinforced wear cuff' },
      { parameter: 'Guaranteed Emission', value: '< 10 mg/Nm³ (down to < 5 mg/Nm³ with ePTFE membrane)' }
    ],
    principle: 'Dust-laden air passes from outside to inside of the fabric bag. The needlefelt fibers trap microscopic particulates on the outer surface cake, while clean filtered gas flows through the porous matrix into the clean-air plenum. During cleaning, reverse compressed air pulses expand the bag rapidly away from the cage, fracturing and dropping the dust cake.',
    applications: [
      'Cement Kilns & Raw Mills', 'Thermal Power Boilers', 'Steel Arc Furnaces & LRF', 
      'Metals & Secondary Smelting', 'Carbon Black Chemical Plants', 'Grain & Flour Milling'
    ],
    relatedIds: ['filter-cages', 'pleated-filter-bag', 'solenoid-valve', 'filter-cage-venturi']
  },
  {
    id: 'pleated-filter-bag',
    slugs: ['pleated-filter-bag', 'pleated-cartridge-bag-filter', 'pleated-cartridge'],
    title: 'Pleated Filter Bag (Cartridge Media)',
    shortTitle: 'Pleated Filter Bag',
    category: 'High-Efficiency Filtration Media',
    tag: 'Pleated Media',
    image: pleatedImg,
    heroImage: filterBagImg,
    shortDesc: 'Compact pleated filter cartridges delivering 2.5x to 3x higher filtration surface area, directly retrofitting into existing cell plates.',
    overview: 'VS Filtech manufactures molded pleated filter bag cartridges engineered as direct drop-in replacements for standard tubular bags and wire cages. By pleating continuous spunbond polyester media, each pleated cartridge provides 200% to 300% more surface area within the exact same tube sheet footprint, slashing can velocity and eliminating capacity bottlenecks without expanding the baghouse housing.',
    features: [
      { title: '2.5x - 3x Surface Area', desc: 'Triples filtration area per cell plate hole, allowing higher CFM throughput in existing baghouses.' },
      { title: 'Direct Tube Sheet Retrofit', desc: 'Replaces both the filter bag and support cage as a single integrated assembly.' },
      { title: 'Surface Filtration Efficiency', desc: 'Rigid spunbond media with ePTFE membrane collects dust on the surface, preventing blinding.' },
      { title: 'Lower Compressed Air Use', desc: 'Low differential pressure drop reduces pulsing frequency and saves up to 30% compressed air.' }
    ],
    specs: [
      { parameter: 'Surface Area Multiplier', value: '2.0x to 3.0x standard tubular bag area' },
      { parameter: 'Filtration Media', value: '100% Spunbond polyester with optional ePTFE membrane or aluminized antistatic' },
      { parameter: 'Top Collar Construction', value: 'Molded polyurethane (PU) or cast aluminum / stainless steel flanged collar' },
      { parameter: 'Internal Core', value: 'Heavy-gauge perforated galvanized steel / SS304 core' },
      { parameter: 'Temperature Limits', value: '90°C (standard PU) / up to 200°C (metal-top silicone construction)' },
      { parameter: 'Outer Diameter', value: 'Ø115mm to Ø165mm to match standard tube sheet hole sizes' },
      { parameter: 'Available Lengths', value: '500mm, 1000mm, 1500mm, 2000mm' },
      { parameter: 'Particulate Capture', value: '99.99% efficiency down to 0.5 micron particulates' }
    ],
    principle: 'Rigid pleated media holds its shape under continuous suction without a separate wire cage. Particulates deposit uniformly along the deep pleats on the exterior face. When pulsed, the shallow pleats flex and eject the dust cake cleanly down into the hopper, maintaining lower running differential pressure across the baghouse.',
    applications: [
      'Plant Capacity Expansions', 'Silo Top Venting Filters', 'Powder Coating & Paints', 
      'Pharmaceutical Tablet Processing', 'Fine Pigment & Toner Recovery', 'Foundry Sand Handling'
    ],
    relatedIds: ['filter-bag', 'dust-collector-system', 'solenoid-valve']
  },
  {
    id: 'filter-cages',
    slugs: ['filter-cages', 'support-cages', 'bag-cages', 'dust-collector-cages', 'cages-with-venturi'],
    title: 'Filter Cages (6 to 24-Wire Support Cages)',
    shortTitle: 'Filter Cages',
    category: 'Baghouse Structural Hardware',
    tag: 'Structural Wire Framework',
    image: cageImg,
    heroImage: cageImg,
    shortDesc: 'Rigid longitudinal wire support cages fabricated on automated robotic CNC welding machines with zero burrs.',
    overview: 'VS Filtech manufactures precision wire support cages engineered to hold filter bags open against high inward vacuum draft. Fabricated on automated CNC multi-spot welding machines, our cages feature smooth longitudinal wires with zero burrs or weld spatter that could abrade or pierce filter fabrics, ensuring maximum bag operational lifespan.',
    features: [
      { title: 'Automated Robotic CNC Welding', desc: 'Precision automated multi-wire resistance welding guarantees uniform joint strength and zero sharp edges.' },
      { title: 'Rigid Multi-Wire Construction', desc: 'Available with 8, 10, 12, 16, 20, or 24 longitudinal wires for maximum radial rigidity.' },
      { title: 'Corrosion-Resistant Finishes', desc: 'Finished with electro-galvanizing, silicone epoxy coating, or passivated stainless steel.' },
      { title: 'Modular Section Joints', desc: 'Available in single piece up to 4 meters, or multi-section bayonet/twist-lock joints for low-headroom plants.' }
    ],
    specs: [
      { parameter: 'Longitudinal Wire Count', value: '8, 10, 12, 16, 20, or 24 longitudinal wires' },
      { parameter: 'Wire Gauge / Diameter', value: '3.0mm to 4.5mm high-tensile wire' },
      { parameter: 'Materials of Construction', value: 'Mild Steel (MS), Galvanized Iron (GI), SS 304, SS 316' },
      { parameter: 'Ring Pitch Spacing', value: '150mm to 200mm circular wire ring spacing' },
      { parameter: 'Top Collar Styles', value: 'Rolled flange collar, split collar, snap-in collar with integral venturi' },
      { parameter: 'Bottom Construction', value: 'Welded flat bottom pan or recessed dish cap' },
      { parameter: 'Joint Mechanisms', value: 'Single length, or 2-piece/3-piece bayonet twist-lock / slide joints' },
      { parameter: 'Surface Coating', value: 'Zinc electroplating, silicone epoxy paint, PTFE fluoropolymer coating' }
    ],
    principle: 'During filtration, high negative draft draws dust-laden air toward the inside of the bag. The internal wire cage acts as an unyielding skeleton, supporting the fabric under high differential pressures and ensuring open airflow channels throughout the entire length of the filter bag.',
    applications: [
      'Pulse Jet Baghouses', 'Reverse Air Baghouses', 'High-Moisture Flue Gas Scrubbers', 
      'High-Temperature Boiler Filtration', 'Cement Clinker Collectors', 'Chemical Processing'
    ],
    relatedIds: ['filter-bag', 'filter-cage-venturi', 'snap-bands', 'solenoid-valve']
  },
  {
    id: 'filter-cage-venturi',
    slugs: ['filter-cage-venturi', 'venturis', 'venturi', 'venturi-nozzle', 'venturi-nozzles', 'pulse-jet-venturi'],
    title: 'Supersonic Venturis (Cast Aluminum & Spun Steel Nozzles)',
    shortTitle: 'Venturis (Alu & Steel)',
    category: 'Pulse-Jet Aerodynamic Nozzles',
    tag: 'Sonic Jet Induction',
    image: venturiImg,
    heroImage: venturiImg,
    shortDesc: 'Aerodynamically contoured supersonic Bellmouth nozzles inducing up to 400% secondary clean air volume for deep reverse-pulse cleaning.',
    overview: 'VS Filtech manufactures aerodynamically contoured supersonic venturi nozzles engineered for reverse pulse-jet dust collectors. By exploiting the Bernoulli effect, our venturis convert high-pressure primary compressed air pulses into a supersonic kinetic core, drawing a secondary volume of ambient clean air up to 4 times the primary blast. This multiplies cleaning shockwave energy to shatter dust cakes across bags up to 8 meters long.',
    features: [
      { title: '4x Secondary Air Induction', desc: 'Induces surrounding clean ambient air to multiply cleaning pulse volume by up to 400%.' },
      { title: 'Tuned Converging-Diverging Profile', desc: 'Bellmouth nozzle geometry converts compressed air pressure into supersonic kinetic shockwaves.' },
      { title: 'Dual Metallurgy Options', desc: 'Precision die-cast aluminum alloy (LM6/ADC12), deep-drawn spun steel, and acid-resistant SS 304/SS 316.' },
      { title: 'Universal Mounting Methods', desc: 'Available drop-in tubesheet flanged models or spot-welded directly atop filter support cage collars.' }
    ],
    specs: [
      { parameter: 'Materials of Construction', value: 'Die-cast aluminum alloy (LM6), Deep-drawn spun mild steel, SS 304, SS 316' },
      { parameter: 'Nozzle Profiles', value: 'Aerodynamic bellmouth converging-diverging profile (CFD optimized)' },
      { parameter: 'Throat Diameters', value: 'Ø28mm, Ø32mm, Ø36mm, Ø40mm, Ø45mm tuned to blowpipe orifice sizing' },
      { parameter: 'Tuned Lengths', value: '150mm, 200mm, 250mm, 300mm length options for 2m to 8m bags' },
      { parameter: 'Mounting Style', value: 'Drop-in cast tubesheet flange or integral resistance spot-welded to cage' },
      { parameter: 'Air Amplification Factor', value: '3.5x to 4.5x induced secondary clean air volume' },
      { parameter: 'Pulse Pressure Rating', value: 'Optimized for 4.0 bar to 7.0 bar compressed air pulses' },
      { parameter: 'Finish', value: 'Vibratory deburred smooth surface, passivated stainless, or zinc plated' }
    ],
    principle: 'When the pulse solenoid valve fires, high-velocity compressed air shoots down through the blowpipe orifice directly into the venturi throat. The sudden pressure drop in the throat draws a substantial volume of surrounding clean air from the plenum into the stream. This combined air mass expands as a supersonic shockwave that travels down the entire filter bag, snapping the fabric outward to shatter the dust cake.',
    applications: [
      'High-Velocity Pulse Jet Baghouses', 'Long Bags (> 4m up to 8m length)', 'Dense Sticky Dust Cakes', 
      'Fly Ash Filtration', 'Cement Kiln Exhausts', 'Furnace Metallurgy Baghouses'
    ],
    relatedIds: ['filter-cages', 'solenoid-valve', 'filter-bag', 'snap-bands']
  },
  {
    id: 'solenoid-valve',
    slugs: ['solenoid-valve', 'solenoid-valves', 'pulse-valve', 'pulse-valves', 'pulse-solenoid-valve'],
    title: 'Pulse Jet Solenoid Valve (Pilot Diaphragm)',
    shortTitle: 'Solenoid Valve',
    category: 'Pulse Automation & Valves',
    tag: 'Fast Response',
    image: solenoidImg,
    heroImage: controlPanelImg,
    shortDesc: 'High-speed pilot diaphragm pulse valves delivering millisecond compressed air bursts for rapid dust cake dislodgement.',
    overview: 'VS Filtech supplies heavy-duty fast-acting pilot diaphragm pulse valves engineered for reverse pulse-jet cleaning systems. With opening response times under 30 milliseconds, our valves release maximum sonic compressed air volume into blowpipes with minimal compressed air consumption. Molded Buna and Viton diaphragms are certified for over 1 million pulsing cycles without pressure loss.',
    features: [
      { title: 'Sub-30ms Opening Speed', desc: 'Fast-opening pilot releases supersonic compressed air shockwaves for instantaneous dust cake release.' },
      { title: '1 Million+ Cycle Life', desc: 'High-fatigue molded Buna-N and Viton diaphragms tested for over 1,000,000 continuous pulse cycles.' },
      { title: 'High Flow Cv Value', desc: 'Aerodynamic internal body profiling delivers maximum volumetric airflow with minimum pressure drop.' },
      { title: 'Direct OEM Compatibility', desc: 'Standard threaded, dresser nut, and flanged connections compatible with all baghouse brands.' }
    ],
    specs: [
      { parameter: 'Port Sizes Available', value: '3/4", 1", 1.5", 2", 2.5", 3" BSP / NPT threaded, dresser nut, or flanged' },
      { parameter: 'Operating Pressure Range', value: '0.5 bar to 8.5 bar (7 to 125 psi)' },
      { parameter: 'Diaphragm Materials', value: 'Heavy-duty molded Buna-N (-20°C to 85°C) / Viton (-20°C to 200°C high temp)' },
      { parameter: 'Solenoid Coil Ratings', value: '24V DC, 110V AC, 220V AC (50/60 Hz) IP65 weatherproof DIN connector' },
      { parameter: 'Response Time', value: '< 30 milliseconds opening; < 50 milliseconds closing' },
      { parameter: 'Valve Body Material', value: 'Die-cast aluminum alloy with corrosion-resistant passivation' },
      { parameter: 'Internal Spring & Fasteners', value: 'Grade 304 Stainless Steel' },
      { parameter: 'Control Options', value: 'Direct integral solenoid coil pilot or remote pneumatic pilot box' }
    ],
    principle: 'Under static conditions, compressed air fills the reservoir and enters the chamber above the diaphragm through a small bleed hole, holding the main diaphragm shut against the blowpipe seat. When the sequential timer energizes the pilot coil, the armature lifts, venting the upper chamber to atmosphere. The higher reservoir pressure below instantaneously pushes the diaphragm open, discharging full header air into the blowpipe.',
    applications: [
      'Pulse Jet Baghouses', 'Pleated Cartridge Dust Collectors', 'Silo Top Venting Filters', 
      'Pneumatic Conveying Receivers', 'Asphalt Plant Collectors', 'Foundry Dust Extraction'
    ],
    relatedIds: ['dust-collector-system', 'filter-cage-venturi', 'control-panels', 'pressure-switch']
  },
  {
    id: 'rotary-air-lock',
    slugs: ['rotary-air-lock', 'rotary-air-locks', 'rotary-air-lock-valve', 'ral-valve', 'rotary-airlock'],
    title: 'Rotary Air Lock Valve (RAL - Dust Discharge Feeder)',
    shortTitle: 'Rotary Air Lock',
    category: 'Airtight Dust Discharge',
    tag: 'Airtight Discharge',
    image: ralImg,
    heroImage: conveyorImg,
    shortDesc: 'Precision-machined continuous rotary discharge feeders maintaining an airtight vacuum barrier while discharging dust.',
    overview: 'VS Filtech manufactures precision-machined heavy-duty rotary air lock valves (RAL) installed beneath dust collector hoppers. Serving as continuous rotary discharge feeders, they allow collected dust to gravity-drain smoothly into disposal bins or screw conveyors while maintaining an airtight pressure barrier against the high negative vacuum draft inside the baghouse casing.',
    features: [
      { title: 'Zero Vacuum Air Leakage', desc: 'Precision CNC machined rotor-to-casing clearances (< 0.10 mm) prevent atmospheric air ingress.' },
      { title: 'Robust Heavy-Duty Casing', desc: 'Heavy-section graded cast iron or fabricated steel casing engineered for abrasive continuous duty.' },
      { title: 'Outboard Sealed Bearings', desc: 'Shaft bearings are mounted externally on outriggers, completely isolated from process dust.' },
      { title: 'Replaceable Rotor Wipers', desc: 'Available with adjustable brass or polyurethane flexible wiper tips for handling abrasive fines.' }
    ],
    specs: [
      { parameter: 'Casing Material', value: 'Graded Cast Iron (CI), Fabricated MS, SS 304, SS 316' },
      { parameter: 'Rotor Designs', value: '6-vane or 8-vane closed-end or open-end rotor with replaceable wiper tips' },
      { parameter: 'Machined Clearances', value: '< 0.10 mm rotor-to-housing radial and axial clearance' },
      { parameter: 'Drive System', value: 'Foot-mounted inline helical geared motor with chain sprocket or direct coupling' },
      { parameter: 'Standard Sizes', value: '150mm, 200mm, 250mm, 300mm, 350mm, 400mm inlet/outlet diameter' },
      { parameter: 'Flange Configurations', value: 'Standard round circular or square ANSI / IS drilling pattern' },
      { parameter: 'Shaft Sealing', value: 'Multi-ring gland packing with bronze lantern ring and purge port' },
      { parameter: 'Pressure Differential', value: 'Maintains airtight seal up to ± 600 mm WG differential pressure' }
    ],
    principle: 'As the geared motor turns the multi-vane rotor, the pockets between the vanes fill with collected dust under the hopper inlet. The rotating rotor carries the dust around the sealed cylindrical casing to the bottom discharge port, dropping it into the bin. At all times, at least two rotor vanes maintain contact with the casing wall, sealing the baghouse vacuum.',
    applications: [
      'Dust Collector Hoppers', 'Cyclone Discharge', 'Pneumatic Conveying Feeding', 
      'Fly Ash Silo Bottoms', 'Grain Elevators & Flour Bins', 'Cement Clinker Transfer'
    ],
    relatedIds: ['dust-collector-system', 'screw-conveyor', 'cyclone-dust-collector']
  },
  {
    id: 'screw-conveyor',
    slugs: ['screw-conveyor', 'screw-conveyors', 'auger-conveyor'],
    title: 'Screw Conveyor Systems (Hopper Collection Troughs)',
    shortTitle: 'Screw Conveyor',
    category: 'Mechanical Dust Handling',
    tag: 'Mechanical Handling',
    image: conveyorImg,
    heroImage: ralImg,
    shortDesc: 'Heavy-duty enclosed tubular and U-trough dust conveyors transporting collected particulate from multi-hopper baghouses.',
    overview: 'VS Filtech manufactures heavy-duty enclosed U-trough and tubular screw conveyors designed to gather and transport accumulated fly ash and process dust from multiple hopper collection troughs to a centralized rotary airlock. Featuring continuous sectional auger flights, dust-tight gasketed covers, and outboard pillow block bearings, our conveyors ensure reliable continuous material transport.',
    features: [
      { title: 'Enclosed Dust-Tight Design', desc: 'Heavy-gauge steel troughs with gasketed bolted covers prevent any fugitive dust emissions.' },
      { title: 'Hardfaced Auger Flights', desc: 'Sectional spiral flights hardfaced on flight peripheries for maximum resistance against abrasive wear.' },
      { title: 'Outboard Bearings', desc: 'Shaft seals isolate external pillow block bearings from dust contamination for long life.' },
      { title: 'Zero-Speed Safety Interlock', desc: 'Includes non-contact zero-speed rotation sensor to immediately alert operators if rotation stalls.' }
    ],
    specs: [
      { parameter: 'Trough Configurations', value: 'Heavy-duty U-trough with bolted dust covers, or enclosed tubular design' },
      { parameter: 'Trough Thickness', value: '4mm to 8mm IS 2062 Mild Steel / Hardox liner / SS 304' },
      { parameter: 'Screw Diameter', value: '150mm, 200mm, 250mm, 300mm, 400mm, 500mm' },
      { parameter: 'Conveyor Length', value: 'Custom engineered up to 30+ meters to span multi-hopper layouts' },
      { parameter: 'Drive Mechanism', value: 'Shaft-mounted or foot-mounted helical gear reducer with TEFC motor' },
      { parameter: 'Internal Hanger Bearings', value: 'Self-lubricating split bronze / hardfaced stellite hanger bearings' },
      { parameter: 'Shaft Seals', value: 'Multi-stage split gland packing with outboard pedestal bearings' },
      { parameter: 'Safety Sensors', value: 'Zero-speed rotation monitor & emergency pull-cord switch' }
    ],
    principle: 'As the motorized screw shaft rotates inside the enclosed trough, the continuous spiral auger flight pushes accumulated dust forward along the bottom of the trough. The material moves steadily from all hopper discharge cones to a single common outlet where it feeds into a rotary airlock or bucket elevator.',
    applications: [
      'Multi-Hopper Baghouses', 'ESP Bottom Troughs', 'Fly Ash Pneumatic Transport', 
      'Cement Plant Return Dust', 'Foundry Sand Reclamation', 'Boiler Ash Conveying'
    ],
    relatedIds: ['rotary-air-lock', 'dust-collector-system', 'level-sensor']
  },
  {
    id: 'differential-pressure-switch',
    slugs: [
      'differential-pressure-switch', 
      'dp-switches', 
      'dp-switch', 
      'dp-transmitter', 
      'differential-pressure-transmitter', 
      'differential-pressure-monitoring',
      'pressure-transmitters',
      'pressure-transmitter'
    ],
    title: 'Differential Pressure Switch & Transmitter (DP Gauge)',
    shortTitle: 'DP Transmitter',
    category: 'Instrumentation & Process Monitoring',
    tag: 'Smart Control',
    image: dpSwitchImg,
    heroImage: controlPanelImg,
    shortDesc: 'High-accuracy DP instruments measuring airflow resistance across tube sheets, initiating cleaning cycles on actual demand.',
    overview: 'VS Filtech supplies industrial differential pressure switches and transmitters engineered to measure pressure drop (resistance) across clean and dirty plenum tube sheets. By monitoring real-time filter bag dust cake loading, our instruments trigger automated pulse cleaning only when required (on-demand cleaning), saving up to 40% compressed air and significantly extending filter bag operational life.',
    features: [
      { title: 'On-Demand Pulse Triggering', desc: 'Triggers cleaning cycles only when DP rises to preset high limits, saving compressed air.' },
      { title: '4-20mA Output Transmission', desc: 'Transmits real-time differential pressure analog signals directly to plant DCS / SCADA.' },
      { title: 'Dual Alarm Relay Contacts', desc: 'Provides high and high-high differential pressure alarm contacts for preventative maintenance.' },
      { title: 'Dual Scale Local Dial', desc: 'Combines bright digital LCD readings with a calibrated analog dial gauge for local visual checks.' }
    ],
    specs: [
      { parameter: 'Measurement Range', value: '0 to 250 mm WG / 0 to 500 mm WG (0 to 2.5 kPa / 0 to 5.0 kPa)' },
      { parameter: 'Signal Output', value: '4-20 mA 2-wire analog signal + 2 SPDT adjustable relay contacts' },
      { parameter: 'Accuracy Rating', value: '± 1.0% of full scale calibrated accuracy' },
      { parameter: 'Enclosure Protection', value: 'Die-cast aluminum IP65 / NEMA 4X weatherproof housing' },
      { parameter: 'Process Connections', value: '1/8" or 1/4" NPT female high and low pressure brass impulse ports' },
      { parameter: 'Ambient Temperature', value: '-10°C to 60°C operating temperature rating' },
      { parameter: 'Display System', value: 'Dual-scale analog dial gauge or 4-digit bright LED display' }
    ],
    principle: 'Impulse lines connected to the dirty-air plenum and clean-air plenum transmit atmospheric pressure levels to opposite sides of a flexible sensing diaphragm. As dust builds on the bags, airflow resistance increases the pressure differential. The sensor converts diaphragm deflection into an accurate electrical signal that signals the PLC to clean.',
    applications: [
      'Pulse Jet Baghouses', 'Cartridge Dust Collectors', 'Cleanroom HEPA Monitoring', 
      'Silo Venting Systems', 'Fume Extraction Systems', 'Fan Filter Units'
    ],
    relatedIds: ['control-panels', 'solenoid-valve', 'pressure-switch']
  },
  {
    id: 'pressure-switch',
    slugs: ['pressure-switch', 'header-pressure-switch', 'air-pressure-switch'],
    title: 'Compressed Air Header Pressure Switch (Safety Interlock)',
    shortTitle: 'Pressure Switch',
    category: 'Instrumentation & Safety',
    tag: 'Safety Interlock',
    image: pressureSwitchImg,
    heroImage: solenoidImg,
    shortDesc: 'Pneumatic safety switch monitoring compressed air manifold pressure, preventing ineffective pulsing below threshold.',
    overview: 'VS Filtech supplies industrial pneumatic pressure switches designed to monitor compressed air header reservoir tanks. Interlocked with the cleaning sequential timer or PLC, the pressure switch prevents weak, ineffective pulsing cycles if plant compressed air falls below the minimum required pressure (typically 4.5 bar), preventing bag blinding and alerting operators to air supply failures.',
    features: [
      { title: 'Pneumatic Header Interlock', desc: 'Prevents pulsing cycles when reservoir pressure is insufficient, protecting bags from cake buildup.' },
      { title: 'Adjustable Setpoint Dial', desc: 'Precision calibrated thumbwheel dial for quick, tamper-proof setpoint adjustments.' },
      { title: 'Heavy Snap-Action Microswitch', desc: 'SPDT contact mechanism rated for long electrical life under continuous industrial vibration.' },
      { title: 'Weatherproof Housing', desc: 'IP66 die-cast aluminum enclosure with internal terminal block and cable gland.' }
    ],
    specs: [
      { parameter: 'Adjustable Pressure Range', value: '1.0 bar to 10.0 bar (15 psi to 145 psi)' },
      { parameter: 'Differential (Deadband)', value: '0.4 bar to 1.5 bar adjustable switching deadband' },
      { parameter: 'Contact Rating', value: 'SPDT snap-action microswitch (15A @ 250V AC / 0.5A @ 125V DC)' },
      { parameter: 'Pressure Connection', value: '1/4" BSP / NPT brass or Grade 316 Stainless Steel port' },
      { parameter: 'Maximum Overpressure', value: 'Tested to withstand overpressure up to 16 bar' },
      { parameter: 'Enclosure Rating', value: 'IP66 weatherproof die-cast housing' },
      { parameter: 'Operating Temperature', value: '-20°C to 80°C ambient temperature rating' }
    ],
    principle: 'Compressed air from the pulse header manifold acts on an internal bellows or piston opposed by an adjustable range spring. When pressure drops below the low threshold, the spring trips the snap-action switch, sending a safety lockout signal to the cleaning timer and sounding an alarm.',
    applications: [
      'Pulse Jet Header Manifolds', 'Pneumatic Air Receivers', 'Air Compressor Monitoring', 
      'Pneumatic Conveying Interlocks', 'Baghouse Automation Panels'
    ],
    relatedIds: ['differential-pressure-switch', 'solenoid-valve', 'control-panels']
  },
  {
    id: 'level-sensor',
    slugs: ['level-sensor', 'hopper-level-sensor', 'hopper-level-switch'],
    title: 'Hopper Level Sensors (Rotary Paddle & RF Capacitive)',
    shortTitle: 'Level Sensor',
    category: 'Instrumentation & Spill Prevention',
    mainCategory: 'Electrical & Automation',
    tag: 'Spill Prevention',
    image: levelSensorImg,
    heroImage: ralImg,
    shortDesc: 'Heavy-duty rotary paddle and RF capacitance level switches preventing catastrophic dust backup in hoppers.',
    overview: 'VS Filtech supplies industrial hopper level sensors designed for dust collector hopper cones. Available in rotary paddle, RF capacitance, and vibrating fork configurations, these switches detect high dust accumulation caused by jammed airlocks or screw conveyors, alerting operators before dust submerges and destroys filter bags.',
    features: [
      { title: 'Catastrophic Spill Prevention', desc: 'Detects high dust level before hoppers overfill and submerge filter bags in abrasive particulate.' },
      { title: 'Abrasive-Resistant Paddle', desc: 'Heavy-duty folding stainless steel measuring paddle with triple lip shaft dust seals.' },
      { title: 'De-energized Motor on Rest', desc: 'Motor stops rotating when material arrests paddle movement, dramatically extending motor lifespan.' },
      { title: 'High-Temperature Construction', desc: 'Extended shaft designs with thermal barrier fins for high-temperature flue gas hoppers.' }
    ],
    specs: [
      { parameter: 'Sensing Principles', value: 'Synchronous motor rotary paddle / RF admittance capacitance probe' },
      { parameter: 'Mounting Connection', value: '1.5" or 2.0" BSP / NPT threaded socket or 4-bolt flanged mount' },
      { parameter: 'Output Contacts', value: 'DPDT potential-free relay contacts (5A @ 230V AC)' },
      { parameter: 'Shaft Length', value: 'Standard 150mm insertion, or extended shafts up to 1,500mm with protection guard' },
      { parameter: 'Material of Construction', value: 'SS 304 measuring paddle & shaft; die-cast aluminum housing' },
      { parameter: 'Temperature Tolerance', value: 'Standard up to 80°C / High-temperature models up to 250°C' },
      { parameter: 'Enclosure Protection', value: 'IP66 dust-tight and weatherproof' }
    ],
    principle: 'A low-speed synchronous motor slowly rotates the stainless paddle inside the hopper. When rising dust touches the paddle, rotation is halted. The reaction torque shifts the motor housing, tripping two microswitches: one shuts down the motor to prevent burnout, and the other triggers the high-level alarm to empty the hopper.',
    applications: [
      'Baghouse Hopper Cones', 'Cyclone Bottom Hoppers', 'Fly Ash Storage Silos', 
      'Cement Blending Bins', 'Pneumatic Conveying Surge Bins'
    ],
    relatedIds: ['rotary-air-lock', 'hopper-vibrator', 'screw-conveyor']
  },
  {
    id: 'hopper-vibrator',
    slugs: ['hopper-vibrator', 'hopper-vibrators', 'pneumatic-vibrator'],
    title: 'Hopper Vibrator (Electric & Pneumatic Linear Piston)',
    shortTitle: 'Hopper Vibrator',
    category: 'Dust Flow Promotion',
    tag: 'Flow Promotion',
    image: hopperVibratorImg,
    heroImage: levelSensorImg,
    shortDesc: 'Pneumatic piston and electric rotary vibrators eliminating material bridging, caking, and rat-holing in hoppers.',
    overview: 'VS Filtech supplies industrial pneumatic linear piston vibrators and electric rotary vibrators mounted on dust collector hopper walls. By transmitting focused high-frequency vibrational energy into the sloped steel panels, they break material bridges, eliminate rat-holing, and promote smooth gravity discharge of sticky, cohesive, or hygroscopic dusts into rotary airlocks.',
    features: [
      { title: 'Eliminates Material Bridging', desc: 'Breaks cohesive dust arches and eliminates rat-holing above rotary airlock inlets.' },
      { title: 'Adjustable Frequency & Force', desc: 'Force and frequency easily modulated by regulating inlet compressed air pressure.' },
      { title: 'Reinforced Channel Mount', desc: 'Channel-iron mounting base distributes vibrational energy across hopper steel without cracking.' },
      { title: 'Intermittent Automated Pulsing', desc: 'Controlled by the cleaning timer to pulse intermittently during rotary valve operation.' }
    ],
    specs: [
      { parameter: 'Vibrator Technologies', value: 'Pneumatic linear piston vibrator, pneumatic turbine, unbalance electric motor' },
      { parameter: 'Centrifugal Impact Force', value: 'Adjustable from 50 kg to 2,500 kg force' },
      { parameter: 'Operating Frequency', value: '1,200 to 9,000 vibrations per minute (VPM)' },
      { parameter: 'Operating Air Pressure', value: '2.0 bar to 6.0 bar (30 to 90 psi)' },
      { parameter: 'Air Consumption', value: '100 to 450 liters/min (during active pulse bursts)' },
      { parameter: 'Mounting Base Plate', value: 'Heavy channel-mount with pre-drilled hardened mounting bolts' },
      { parameter: 'Housing Construction', value: 'High-tensile ductile cast iron / hard-anodized aircraft aluminum' }
    ],
    principle: 'A hardened steel piston reciprocates at high speed inside a precision cylinder cushioned by compressed air. Each stroke impacts the base plate, sending vibrational shockwaves radiating through the hopper sidewalls. The shear waves overcome internal particle friction, causing cohesive dust cakes to liquefy and gravity-drain.',
    applications: [
      'Bag Filter Collection Hoppers', 'Cyclone Hoppers', 'Fly Ash Storage Bins', 
      'Lime & Calcium Carbonate Silos', 'Clay & Ceramic Dust Handling'
    ],
    relatedIds: ['rotary-air-lock', 'level-sensor', 'dust-collector-system']
  },
  {
    id: 'explosion-vents',
    slugs: ['explosion-vents', 'explosion-vent', 'burst-panels'],
    title: 'Explosion Vents (ATEX-Certified Rupture Relief Panels)',
    shortTitle: 'Explosion Vents',
    category: 'Industrial Safety Devices',
    tag: 'ATEX Safety',
    image: explosionVentImg,
    heroImage: baghouseImg,
    shortDesc: 'ATEX-certified stainless steel rupture relief panels providing safe overpressure venting against combustible dust deflagrations.',
    overview: 'VS Filtech supplies certified industrial explosion relief vents designed to mitigate combustible dust deflagration hazards in baghouses, cyclones, and silos. When combustible industrial dusts (e.g., coal, wood, flour, aluminum, starch) ignite, these precision-calibrated stainless steel burst membranes rupture in milliseconds, safely venting fireball overpressure outside the factory and preventing structural destruction.',
    features: [
      { title: 'ATEX / EN 14797 Certified', desc: 'Manufactured and calibrated in compliance with European and international dust explosion codes.' },
      { title: 'Instantaneous Millisecond Burst', desc: 'Precision laser-slotted cross-ribbed membrane ruptures at exact set pressure without fragmentation.' },
      { title: 'Vacuum & Pressure Cycling Resistant', desc: 'Integrated fluoropolymer vacuum support handles continuous reverse-pulse pressure cycles without fatigue.' },
      { title: 'Integral Burst Sensor Option', desc: 'Integrated sensor wire breaks upon burst to immediately shut down fans and sound plant alarms.' }
    ],
    specs: [
      { parameter: 'Compliance Certification', value: 'ATEX Directive 2014/34/EU / EN 14797 / NFPA 68' },
      { parameter: 'Calibrated Static Burst Pressure', value: 'Standard 0.10 bar (1.5 psi) ± 15% (custom 0.05 to 0.50 bar available)' },
      { parameter: 'Membrane Materials', value: 'Multi-layer composite Stainless Steel 304/316 with fluoropolymer FEP vacuum seal' },
      { parameter: 'Standard Shapes & Dimensions', value: 'Rectangular (300x500mm up to 1000x2000mm) / Circular flanged (Ø300mm to Ø1200mm)' },
      { parameter: 'Venting Efficiency Factor', value: 'Vent efficiency parameter (k) = 1.0 (100% full venting relief area)' },
      { parameter: 'Weather Resistance', value: 'Weather-tight perimeter gasket with optional outdoor rain deflector hood' },
      { parameter: 'Electrical Burst Indicator', value: 'Intrinsic safety break-wire loop circuit for DCS / PLC emergency shutdown' }
    ],
    principle: 'If combustible dust ignites inside the collector, deflagration pressure builds rapidly at rates exceeding 200 bar/s. Long before the pressure can reach the yield strength of the steel casing, the calibrated vent membrane fractures along precision laser scores, venting the flame jet and combustion gases safely outward into an unoccupied discharge zone.',
    applications: [
      'Coal Mill & Boiler Baghouses', 'Woodworking & Furniture Dust', 'Grain Elevators, Flour & Starch', 
      'Sugar & Spice Processing', 'Plastic & Polymer Powder Processing', 'Metal Powder Handling'
    ],
    relatedIds: ['dust-collector-system', 'silo-filters', 'control-panels']
  },
  {
    id: 'silo-filters',
    slugs: ['silo-filters', 'silo-venting-filter', 'silo-dust-collector'],
    title: 'Silo Filters (Top-Mounted Venting Dust Collectors)',
    shortTitle: 'Silo Filters',
    category: 'Venting & Silo Top Filtration',
    tag: 'Pneumatic Venting',
    image: siloImg,
    heroImage: pleatedImg,
    shortDesc: 'Round flanged venting dust collectors mounted on storage silos to vent displaced pneumatic air cleanly.',
    overview: 'VS Filtech manufactures circular top-mounted silo venting dust collectors designed for storage silos, bulk cement bins, and pneumatic conveying receivers. When bulk powder tankers discharge into silos under positive pressure, our venting filters separate fine powder from the exhaust airstream, returning 100% of the valuable product into the silo while venting pristine clean air to atmosphere.',
    features: [
      { title: 'Direct Flanged Silo Mounting', desc: 'Compact circular bottom flange bolts directly to silo roof aperture with weather-tight gasket.' },
      { title: 'Reverse Jet Pulse Cleaning', desc: 'Integrated pulse timer and manifold discharge reverse compressed air bursts without stopping filling.' },
      { title: 'Weatherproof Stainless/MS Hood', desc: 'Hinged stainless steel weather-hood protects filter media from rain, wind, and harsh weather.' },
      { title: 'Pleated Cartridge Media', desc: 'Utilizes high-surface-area pleated cartridges for maximum airflow in a compact circular footprint.' }
    ],
    specs: [
      { parameter: 'Filtration Surface Area', value: '14 m² to 55 m² via high-efficiency pleated cartridges' },
      { parameter: 'Volumetric Airflow Range', value: '800 CFM to 3,500 CFM (1,200 to 6,000 m³/hr)' },
      { parameter: 'Collection Efficiency', value: '> 99.9% particulate separation (< 10 mg/Nm³ emission)' },
      { parameter: 'Cleaning System', value: 'Integrated 24V / 230V automated reverse jet pulse cleaning' },
      { parameter: 'Casing Construction', value: 'Stainless Steel 304 or epoxy-coated heavy gauge Mild Steel' },
      { parameter: 'Access Hood', value: 'Gas-strut assisted hinged weather-cover with quick-release latches' },
      { parameter: 'Compressed Air Connection', value: '1/2" BSP pneumatic supply with air regulator and filter' }
    ],
    principle: 'Pneumatic tankers pump bulk powder into the silo under 1.5 to 2.0 bar pressure. The displaced air escapes upward through the silo roof into the cylindrical filter housing. Pleated media cartridges trap powder on their outer surfaces while clean air vents out through the weather-hood. The automated reverse-pulse timer cleans the cartridges, dropping captured powder straight back into the silo.',
    applications: [
      'Cement & Clinker Storage Silos', 'Fly Ash Pneumatic Bins', 'Quicklime & Hydrated Lime Silos', 
      'Flour, Grain & Starch Silos', 'Plastic Resin Pellet Tanks', 'Foundry Bentonite Storage'
    ],
    relatedIds: ['pleated-filter-bag', 'solenoid-valve', 'explosion-vents']
  },
  {
    id: 'control-panels',
    slugs: ['control-panels', 'bag-filter-control-panels', 'plc-automation-panels'],
    title: 'Industrial Electrical & Automation Control Panels (HT, LT, MCC, VFD, APFC)',
    shortTitle: 'Control Panels & Automation',
    category: 'Electrical & Automation Panels',
    tag: 'Turnkey Electrical & Automation',
    image: peMccPanel,
    heroImage: peHtPanel,
    shortDesc: 'Comprehensive industrial electrical control panels including HT Switchgear, LT Distribution, MCC Panels, VFD Fan Drives, PCC, APFC, and Baghouse PLC Automation.',
    overview: 'VS Filtech designs, manufactures, and integrates turnkey electrical switchgear and automation control panels for dust collection systems, heavy process plants, and industrial substations. From primary 33 kV HT switchboards and high-amperage 6300A Power Control Centers (PCC) to energy-saving Variable Frequency Drive (VFD) ID fan panels and microprocessor-based sequential pulse jet timers, our panels are engineered to international IEC 61439 and IS standards with branded components (Siemens, Schneider, ABB, L&T, Danfoss).',
    features: [
      { title: 'Complete Voltage Range Coverage', desc: 'Custom engineered solutions from 33 kV High Tension (HT) switchgear down to 415V LT distribution, MCC motor starters, and 24V DC PLC automation.' },
      { title: 'Bag Filter Process Automation', desc: 'Integrated closed-loop differential pressure (DP) monitoring, sequential pulse jet timer firing, and dust discharge interlocks.' },
      { title: '25% - 40% VFD Energy Conservation', desc: 'Dynamic fan speed modulation based on duct static pressure, eliminating damper throttling losses.' },
      { title: 'Power Quality & Unity Power Factor', desc: 'Automatic Power Factor Control (APFC) panels maintaining 0.99 PF with detuned harmonic filter reactors.' }
    ],
    specs: [
      { parameter: 'Panel Types Manufactured', value: 'HT Panels (up to 33kV), LT Panels, MCC Panels, VFD Drive Panels, PCC Panels, APFC Panels, Bus Ducts' },
      { parameter: 'Rated Voltage Coverage', value: '415 V AC to 33,000 V (33 kV) AC, 50 Hz / 60 Hz, 3-Phase' },
      { parameter: 'Current Handling Capacity', value: 'Up to 6300 A continuous busbar rating with 65 kA / 1 sec short circuit withstand' },
      { parameter: 'Enclosure Rating', value: 'IP42 / IP54 / IP55 / IP65 powder-coated CRCA sheet steel (1.6mm - 3.0mm)' },
      { parameter: 'Switchgear & Drive Brands', value: 'Siemens, Schneider Electric, ABB, L&T, Danfoss, Delta, Rockwell Automation' },
      { parameter: 'Automation & PLC Protocols', value: 'Modbus RTU / RS485, Profinet, Ethernet/IP, SCADA / DCS integration' },
      { parameter: 'Design Compliance', value: 'IEC 61439-1 & 2, IEC 62271-200, IS 8623, IS 3427, CPRI Type Tested designs' }
    ],
    principle: 'The electrical and automation panels form the vital nervous and circulatory system of any modern industrial plant and filtration facility. Incoming high or low-voltage power is safely isolated, stepped down, conditioned, and distributed through PCC/LT panels, while MCC and VFD panels intelligently regulate motor speeds, and PLC sequential timers maintain pulse jet cleaning cycles in precise synchronization with process demand.',
    applications: [
      'Turnkey Pulse Jet Baghouses', 'Centralized Dust Collection & Fume Plants', 'Cement & Clinker Plants', 
      'Steel Rolling Mills & Induction Furnaces', 'Power Plants & Boiler Flue Gas Cleaning', 'Chemical & Pharmaceutical Complexes'
    ],
    relatedIds: ['ht-panel', 'lt-panel', 'mcc-panel', 'vfd-panel', 'pcc-panel', 'apfc-panel']
  },
  {
    id: 'ht-panel',
    slugs: ['ht-panel', 'ht-panels', 'high-tension-panel', 'vcb-panel', '11kv-panel', '33kv-panel'],
    title: 'HT Panels (High Tension 11kV / 22kV / 33kV Switchgear Panels)',
    shortTitle: 'HT Panels',
    category: 'Electrical & Automation Panels',
    tag: 'High Tension Switchgear',
    image: peHtPanel,
    heroImage: peHero1,
    shortDesc: 'High Tension (HT) switchgear panels up to 33 kV with Vacuum Circuit Breakers (VCB), numerical protection relays, and arc-resistant compartmentalization for heavy industries.',
    overview: 'VS Filtech supplies industrial HT (High Tension) electrical panels engineered for primary power intake and distribution in industrial manufacturing plants, substations, and large-scale process facilities operating at 11 kV, 22 kV, or 33 kV. Built with branded Vacuum Circuit Breakers (VCB) or SF6 gas circuit breakers, microprocessor numerical protection relays, instrument transformers (CT/PT), and multi-compartment arc-resistant enclosures, our HT switchboards ensure uninterrupted power distribution and maximum operator safety under the most demanding industrial conditions.',
    features: [
      { title: 'Vacuum Circuit Breaker (VCB) Technology', desc: 'Premium branded motorized draw-out VCBs offering rapid arc quenching, 26.3 kA to 31.5 kA breaking capacity, and long mechanical endurance.' },
      { title: 'Numerical Multi-Function Protection', desc: 'Integrated microprocessor relays provide comprehensive overcurrent, short-circuit, earth fault, under/over voltage, and motor differential protection.' },
      { title: 'Safety Interlocks & Arc Containment', desc: 'Foolproof mechanical and electrical interlocks prevent accidental rack-in or rack-out under load, with internal arc-classified safety relief flaps.' },
      { title: 'Heavy-Duty CRCA Steel Housing', desc: 'Fabricated from 2.0mm to 3.0mm CRCA sheet steel treated with automated 9-tank pre-treatment and electrostatic powder coating.' }
    ],
    specs: [
      { parameter: 'Rated Operating Voltage', value: 'Up to 33 kV (11 kV, 22 kV, and 33 kV configurations available)' },
      { parameter: 'Rated Frequency', value: '50 Hz ± 5% / 60 Hz' },
      { parameter: 'Rated Normal Current', value: '630 A, 1250 A, 1600 A, 2000 A, 2500 A' },
      { parameter: 'Short-Circuit Breaking Capacity', value: 'Up to 26.3 kA / 31.5 kA for 3 seconds' },
      { parameter: 'Enclosure Protection Rating', value: 'IP42 / IP54 / IP55 (Indoor / Outdoor kiosk designs)' },
      { parameter: 'Circuit Breaker Types', value: 'Draw-out Vacuum Circuit Breaker (VCB) / SF6 Gas Insulated' },
      { parameter: 'Busbar Material', value: 'High-conductivity Electrolytic Copper / Aluminium with heat-shrinkable insulation' },
      { parameter: 'Standard Compliance', value: 'IEC 62271-200, IS 3427, IS 13118' }
    ],
    principle: 'HT panels receive medium-to-high voltage electrical power (11kV to 33kV) from the electricity board grid or captive power generators. When short-circuit or phase faults occur, numerical protection relays detect transient anomalies within milliseconds and trigger the spring-charged vacuum breaker mechanism, extinguishing high-energy electrical arcs inside sealed vacuum bottles before downstream equipment can be damaged.',
    applications: [
      'Industrial Primary Substations', 'Cement, Steel & Sponge Iron Plants', 'Captive Power Generation Facilities',
      'Large High-Volume Baghouse Substations', 'Heavy Chemical & Fertilizer Complexes', 'Commercial Infrastructure & Utility Networks'
    ],
    relatedIds: ['lt-panel', 'pcc-panel', 'mcc-panel', 'vfd-panel', 'control-panels']
  },
  {
    id: 'lt-panel',
    slugs: ['lt-panel', 'lt-panels', 'low-tension-panel', 'lt-distribution-panel', 'main-lt-panel'],
    title: 'LT Panels (Low Tension 415V Power Distribution Panels)',
    shortTitle: 'LT Distribution Panels',
    category: 'Electrical & Automation Panels',
    tag: 'Low Tension Distribution',
    image: peLtPanel,
    heroImage: peHero2,
    shortDesc: 'Low Tension (LT) power distribution switchboards engineered for dependable 415V, 3-Phase power management across factories and bag filter installations.',
    overview: 'VS Filtech manufactures and supplies robust Low Tension (LT) electrical panels engineered for safe, efficient 415V, 3-phase, 4-wire power distribution. Connecting downstream from step-down distribution transformers, our LT panels house branded Air Circuit Breakers (ACB), Molded Case Circuit Breakers (MCCB), energy metering, and compartmentalized busbar chambers to distribute electrical energy reliably across plant machinery, bag filter systems, ventilation fans, and plant utilities.',
    features: [
      { title: 'High-Conductivity Busbar System', desc: 'Electrolytic grade copper and aluminum busbars engineered for low temperature rise, minimal I²R transmission losses, and high short-circuit withstand.' },
      { title: 'Modular Compartmentalized Design', desc: 'Individual feeder compartments allow technicians to inspect or service specific breakers safely without disconnecting neighboring operational loads.' },
      { title: 'Multi-Tier Fault Protection', desc: 'Complete coordinated protection against thermal overload, instantaneous short-circuits, ground faults, and phase failures.' },
      { title: 'Digital Power Quality Monitoring', desc: 'Equipped with digital multi-function meters (MFM) displaying Voltage, Current, Frequency, PF, kW, and kVA with RS485 SCADA connectivity.' }
    ],
    specs: [
      { parameter: 'Operating Voltage', value: '415 V AC ± 10%, 3-Phase, 4-Wire, 50 Hz' },
      { parameter: 'Rated Insulation Voltage', value: '1000 V AC' },
      { parameter: 'Rated Current Capacity', value: 'Up to 4000 A continuous rating' },
      { parameter: 'Short Circuit Withstand', value: '35 kA / 50 kA for 1 second' },
      { parameter: 'Enclosure Rating', value: 'IP42 / IP54 / IP65 powder-coated CRCA sheet steel (1.6mm / 2.0mm)' },
      { parameter: 'Form of Separation', value: 'Form 2b / Form 3b / Form 4b as per IEC 61439-1 & 2' },
      { parameter: 'Finishing & Painting', value: '7-tank chemical pre-treatment with RAL 7035 / RAL 7032 powder coat' },
      { parameter: 'Standard Compliance', value: 'IEC 61439-1 & 2, IS 8623' }
    ],
    principle: 'The LT panel serves as the main low-voltage power distribution hub of an industrial building. It takes 415V power from the distribution transformer secondary winding and partitions it into individual branch feeders feeding Motor Control Centers (MCC), bag filter control panels, lighting, and auxiliary utility equipment.',
    applications: [
      'Factory Substation Distribution', 'Dust Collection Plant Power Feeds', 'Manufacturing & Assembly Lines',
      'Textile, Paper & Packaging Mills', 'Food & Beverage Processing Facilities', 'Foundry & Forging Plants'
    ],
    relatedIds: ['pcc-panel', 'mcc-panel', 'ht-panel', 'apfc-panel', 'control-panels']
  },
  {
    id: 'mcc-panel',
    slugs: ['mcc-panel', 'mcc-panels', 'motor-control-center', 'motor-control-centre', 'bag-filter-mcc'],
    title: 'MCC Panels (Motor Control Centre Panels for Bag Filters & Process Plants)',
    shortTitle: 'MCC Panels',
    category: 'Electrical & Automation Panels',
    tag: 'Motor Control Center',
    image: peMccPanel,
    heroImage: peHero4,
    shortDesc: 'Centralized Motor Control Center (MCC) panels delivering coordinated motor starting, overload protection, and process interlocks for bag filter fans and auxiliary drives.',
    overview: 'VS Filtech manufactures custom Motor Control Centre (MCC) panels specifically engineered to control, sequence, and protect electrical motors in dust collection systems and industrial process lines. Regulating everything from high-horsepower Induced Draft (ID) fans and secondary booster blowers to rotary airlock valves, hopper screw conveyors, slide gates, and vibratory feeders, our MCC panels feature compartmentalized Form 3b/4b construction, DOL / Star-Delta / Soft starter combinations, and fail-safe process interlocking.',
    features: [
      { title: 'Individual Starter Compartments', desc: 'Each motor feeder possesses its own isolated door-interlocked isolator handle, contactor, MPCB / overload relay, and run/trip/stop indication lamps.' },
      { title: 'Versatile Starter Configurations', desc: 'Configurable with Direct-On-Line (DOL), Automatic Star-Delta, Electronic Soft Starters, and Variable Frequency Drive (VFD) modules.' },
      { title: 'Baghouse Process Sequencing Interlocks', desc: 'Built-in interlocking ensures dust discharge devices (rotary airlock and screw conveyor) start before the main ID fan, preventing hopper blockages.' },
      { title: 'Draw-Out & Fixed Modular Flexibility', desc: 'Available in both fully draw-out and fixed modular arrangements for rapid replacement and zero-downtime maintenance.' }
    ],
    specs: [
      { parameter: 'Operating Voltage', value: '415 V AC ± 10%, 3-Phase, 50 Hz' },
      { parameter: 'Main Busbar Rating', value: 'Up to 3200 A Electrolytic Copper / Aluminium' },
      { parameter: 'Starter Ratings Handled', value: 'Fractional 0.5 HP up to 350+ HP heavy industrial motors' },
      { parameter: 'Starter Options', value: 'DOL, Star-Delta, Soft Starter, VFD (Variable Frequency Drive)' },
      { parameter: 'Short Circuit Withstand', value: '50 kA RMS for 1 second' },
      { parameter: 'Ingress Protection Class', value: 'IP54 / IP55 powder-coated CRCA steel' },
      { parameter: 'Internal Separation', value: 'Form 3b / Form 4b as per IEC 61439' },
      { parameter: 'Control Voltage', value: '110V AC / 230V AC / 24V DC control circuits' }
    ],
    principle: 'Centralizes the control, protection, and operational monitoring of all plant motors into a single organized switchboard. It prevents catastrophic motor burnouts from single phasing, overloads, or locked rotor currents, and automates bag filter startup/shutdown procedures.',
    applications: [
      'Baghouse ID Fans & Booster Blowers', 'Rotary Airlock & Screw Conveyor Feeds', 'Hopper Piston & Rotary Vibrators',
      'Pneumatic Conveying Compressors', 'Cement & Steel Bulk Material Handling', 'Crushing & Screening Plants'
    ],
    relatedIds: ['vfd-panel', 'control-panels', 'lt-panel', 'rotary-air-lock', 'screw-conveyor']
  },
  {
    id: 'vfd-panel',
    slugs: ['vfd-panel', 'vfd-panels', 'vfd-drive-panel', 'vfd-drive-panels', 'vfd-drive', 'id-fan-vfd-panel'],
    title: 'VFD Drive Panels (Variable Frequency Drive Panels for Bag Filter ID Fans)',
    shortTitle: 'VFD Drive Panels',
    category: 'Electrical & Automation Panels',
    tag: 'Airflow & Energy Saving',
    image: vfdPlcImg,
    heroImage: peHero3,
    shortDesc: 'High-efficiency Variable Frequency Drive (VFD) panels designed for bag filter ID fans, delivering dynamic closed-loop draft modulation and 25% to 40% electrical power savings.',
    overview: 'VS Filtech specializes in engineering dedicated VFD (Variable Frequency Drive) Control Panels designed specifically for dust collector ID (Induced Draft) fans and industrial ventilation blowers. By dynamically modulating motor speed in real time based on 4-20mA differential pressure (DP) and duct static pressure transmitter feedback, our VFD panels eliminate wasteful damper throttling and slash electrical energy consumption by 25% to 40%. Featuring integrated line chokes, dV/dt filters, thermostatically controlled forced cooling, and intuitive touchscreen PLC interfaces, they protect motors and extend baghouse filter life.',
    features: [
      { title: 'Closed-Loop PID Airflow Modulation', desc: 'Automatically regulates ID fan RPM to maintain constant suction pressure at collection hoods, compensating for filter cake accumulation.' },
      { title: '25% - 40% Power Savings (Affinity Laws)', desc: 'Fan power consumption varies with the cube of speed (P ∝ N³) — a minor 20% reduction in fan RPM cuts electrical power demand by almost 50%.' },
      { title: 'Smooth Soft Starting & Zero Inrush', desc: 'Eliminates peak electrical startup currents and prevents mechanical torque shock on fan impellers, V-belts, and pillow block bearings.' },
      { title: 'Built-in Harmonic & dV/dt Filtration', desc: 'Integrated AC line reactors and dV/dt output filters protect motor windings against voltage spikes and satisfy IEEE 519 harmonic standards.' },
      { title: 'Manual / Auto Bypass Operation', desc: 'Equipped with an automatic or manual Star-Delta bypass circuit so the bag filter can continue operating during drive servicing.' }
    ],
    specs: [
      { parameter: 'Motor Power Ratings Handled', value: '5.5 kW to 350+ kW (7.5 HP to 500 HP)' },
      { parameter: 'Operating Supply', value: '380V - 480V AC ± 10%, 3-Phase, 50/60 Hz' },
      { parameter: 'Drive Manufacturers', value: 'Danfoss, Siemens, Schneider Electric, ABB, Delta, Yaskawa' },
      { parameter: 'Control Algorithm', value: 'Closed-loop PID based on 4-20mA static duct pressure or baghouse DP' },
      { parameter: 'Bypass Architecture', value: 'Integrated DOL / Star-Delta bypass switch with electrical interlocking' },
      { parameter: 'Harmonic Suppression', value: 'Built-in DC Choke + AC Line Reactor (IEEE 519 compliant)' },
      { parameter: 'Enclosure Cooling', value: 'IP54 / IP55 with forced filtered ventilation or top-mount air conditioning' },
      { parameter: 'Communications', value: 'Modbus RTU / RS485, Profinet, Ethernet/IP, analog 4-20mA retransmission' }
    ],
    principle: 'Conventional baghouse systems run ID fans at full speed and throttle airflow with manual dampers, wasting massive electricity against closed louvers. The VFD drive panel reads the real-time duct suction pressure and baghouse differential pressure, automatically adjusting the fan motor frequency (Hz) to deliver exact required CFM with minimum power.',
    applications: [
      'Bag Filter Induced Draft (ID) Fans', 'Boiler Exhaust Flue Gas Blowers', 'Fume Extraction Systems',
      'Pneumatic Dilute Phase Conveying Blowers', 'Foundry Furnace Hood Suction Fans', 'Cement Kiln & Mill Venting Fans'
    ],
    relatedIds: ['mcc-panel', 'differential-pressure-switch', 'id-fans', 'control-panels', 'dust-collector-system']
  },
  {
    id: 'pcc-panel',
    slugs: ['pcc-panel', 'pcc-panels', 'power-control-centre', 'power-control-center', 'main-pcc-panel'],
    title: 'PCC Panels (Power Control Centre Panels up to 6300A)',
    shortTitle: 'PCC Panels',
    category: 'Electrical & Automation Panels',
    tag: 'Main Power Distribution',
    image: pePccPanel,
    heroImage: peHero3,
    shortDesc: 'Heavy-duty Power Control Centre (PCC) panels designed for main factory electrical power distribution up to 6300A with 65kA fault withstand capacity.',
    overview: 'VS Filtech manufactures high-capacity Power Control Centre (PCC) panels engineered as the main electrical backbone of heavy industrial facilities. Installed immediately downstream of step-down transformers or captive generator sets, our PCC panels handle continuous currents up to 6300A with high short-circuit withstand capacity (up to 65 kA for 1 second). Designed with Form 4 compartmentalization, motorized draw-out Air Circuit Breakers (ACB), precision metering, and transient surge suppression, they provide uncompromised power reliability for entire industrial complexes.',
    features: [
      { title: 'Heavy-Duty Air Circuit Breakers (ACB)', desc: 'High breaking capacity microprocessor-based ACBs with adjustable Long, Short, Instantaneous, and Ground Fault (LSIG) trip settings.' },
      { title: 'High-Purity Busbar Architecture', desc: 'Electrolytic copper and aluminum busbars engineered for low impedance, superior heat dissipation, and short-circuit electrodynamic bracing.' },
      { title: 'Automatic Source Transfer (AMF/ATS)', desc: 'Seamless motorized bus coupler interlocking allows automatic transfer between utility transformer supply and emergency diesel generators (DG).' },
      { title: 'Form 4b Compartmental Isolation', desc: 'Physical steel barriers between busbars, functional breaker units, and external cable terminations prevent arc flash propagation.' }
    ],
    specs: [
      { parameter: 'Rated Operating Voltage', value: '415 V AC ± 10%, 3-Phase, 4-Wire, 50 Hz' },
      { parameter: 'Rated Current Carrying Capacity', value: '800 A to 6300 A continuous rating' },
      { parameter: 'Short-Circuit Breaking Capacity', value: '50 kA / 65 kA / 85 kA for 1 second' },
      { parameter: 'Rated Insulation Voltage', value: '1000 V AC' },
      { parameter: 'Enclosure Protection Rating', value: 'IP42 / IP54 / IP55 powder-coated CRCA steel (2.0mm / 2.5mm)' },
      { parameter: 'Form of Internal Separation', value: 'Form 3b / Form 4b as per IEC 61439-2' },
      { parameter: 'Breaker Units Supported', value: 'Draw-out 3-pole / 4-pole ACBs (Schneider, ABB, Siemens, L&T)' },
      { parameter: 'Standard Compliance', value: 'IEC 61439-1 & 2, IS 8623, CPRI Type Tested' }
    ],
    principle: 'PCC panels receive primary low-voltage electrical power from substation transformers or captive DG sets, safeguard the entire factory network with high-breaking-capacity ACBs, and distribute power cleanly across sub-distribution LT panels, MCCs, and APFC banks.',
    applications: [
      'Central Factory Power Substations', 'Integrated Steel Plants & Rolling Mills', 'Cement & Clinker Complexes',
      'Large Multi-Baghouse Environmental Plants', 'Chemical & Petrochemical Refineries', 'Automobile & Heavy Engineering Facilities'
    ],
    relatedIds: ['ht-panel', 'lt-panel', 'apfc-panel', 'bus-duct', 'mcc-panel']
  },
  {
    id: 'apfc-panel',
    slugs: ['apfc-panel', 'apfc-panels', 'automatic-power-factor-control', 'capacitor-panel'],
    title: 'APFC Panels (Automatic Power Factor Control Panels)',
    shortTitle: 'APFC Panels',
    category: 'Electrical & Automation Panels',
    tag: 'Power Factor Optimization',
    image: peApfcPanel,
    heroImage: peHero1,
    shortDesc: 'Intelligent Automatic Power Factor Control (APFC) panels maintaining near-unity power factor (0.99) to eliminate utility penalty surcharges and reduce electrical losses.',
    overview: 'VS Filtech designs and builds Automatic Power Factor Control (APFC) panels equipped with microprocessor-controlled multi-stage capacitor banks and detuned harmonic filter reactors. Industrial induction motors powering bag filter ID fans, blowers, and air compressors operate at low lagging power factor (0.75 - 0.85), drawing excess reactive current that incurs heavy electricity board penalties and overheats transformers. Our APFC panels continuously calculate reactive KVAR demand and automatically switch heavy-duty capacitor stages to maintain a constant power factor of 0.98 to 0.99 lag.',
    features: [
      { title: 'Intelligent Microprocessor Controller', desc: 'Advanced APFC relay dynamically calculates required reactive power and rotates capacitor switching steps to equalize capacitor run hours.' },
      { title: 'Detuned Harmonic Filter Reactors (7% / 14%)', desc: 'Prevents dangerous harmonic resonance amplified by nonlinear VFD drives, protecting capacitor banks from overcurrent and premature failure.' },
      { title: 'Heavy-Duty Self-Healing MPP Capacitors', desc: 'Equipped with metallized polypropylene (MPP) capacitors featuring internal overpressure tear-off disconnectors for fire safety.' },
      { title: 'Specialized Capacitor Duty Contactors', desc: 'Equipped with early-make damping resistor blocks to suppress dangerous inrush currents during step switching.' }
    ],
    specs: [
      { parameter: 'Operating Voltage', value: '415 V AC ± 10%, 3-Phase, 50 Hz' },
      { parameter: 'Capacity Rating', value: '50 kVAR to 1200+ kVAR (custom modular sizing)' },
      { parameter: 'Target Power Factor', value: '0.98 to 0.999 lag automatically maintained' },
      { parameter: 'Controller Steps', value: '6, 8, 12, 14, or 16-step microprocessor APFC relay' },
      { parameter: 'Detuned Reactors', value: '7% (189 Hz) or 14% (134 Hz) copper/aluminium detuned reactors' },
      { parameter: 'Capacitor Types', value: 'Heavy-duty MPP cylindrical / box capacitors with internal discharge resistors' },
      { parameter: 'Protection Class', value: 'IP42 / IP54 CRCA sheet steel with thermostatic cooling fans' },
      { parameter: 'Standard Compliance', value: 'IS 13340 / IS 13341, IEC 60831-1 & 2' }
    ],
    principle: 'Inductive motor loads draw reactive power (KVAR), lowering plant power factor. The APFC panel measures CT/PT phase angle in real time, calculating the exact capacitive KVAR needed and pulsing capacitor contactors into the bus to cancel inductive reactance automatically.',
    applications: [
      'Industrial Plants with Heavy Induction Motors', 'Dust Collector & Fan Substations', 'Rolling Mills & Foundries',
      'Textile & Paper Processing Facilities', 'Chemical & Plastic Manufacturing Plants', 'Commercial Complexes & Data Centers'
    ],
    relatedIds: ['pcc-panel', 'lt-panel', 'mcc-panel', 'vfd-panel', 'control-panels']
  },
  {
    id: 'bus-duct',
    slugs: ['bus-duct', 'bus-duct-systems', 'bus-trunking', 'sandwich-bus-duct', 'copper-bus-duct'],
    title: 'Bus Duct Systems (Modular Sandwich & Air Insulated Power Distribution)',
    shortTitle: 'Bus Duct Systems',
    category: 'Electrical & Automation Panels',
    tag: 'High Current Power Transmission',
    image: peBusDuct,
    heroImage: peHero2,
    shortDesc: 'Compact sandwich-type copper and aluminum bus duct trunking systems rated up to 6300A for efficient, low-loss power distribution between transformers, PCC, and MCC panels.',
    overview: 'VS Filtech supplies industrial Sandwich Bus Duct and Air-Insulated Busbar Trunking Systems designed for safe, compact, high-amperage electrical power transmission. Replacing bulky parallel multiple cable runs, our modular bus ducts connect transformers to main Power Control Centers (PCC) and route power directly to Motor Control Centers (MCC) and baghouse installations with lower voltage drop, exceptional short-circuit withstand, and superior fire safety.',
    features: [
      { title: 'Compact Sandwich Construction', desc: 'Eliminates air space between conductors, achieving minimum impedance, high electrodynamic strength, and lowest voltage drop.' },
      { title: 'Electrolytic Copper & Aluminium Conductors', desc: 'Fabricated with 99.9% pure ETP copper or high-conductivity aluminium with silver/tin plating at all joint connections.' },
      { title: 'Class F / Class H Certified Insulation', desc: 'Multi-layer Mylar / epoxy insulation guarantees high dielectric strength and flame retardancy under severe fault conditions.' },
      { title: 'Plug-In Tap-Off Boxes with Isolators', desc: 'Enables safe, flexible power tapping along the run without interrupting main electrical distribution to the rest of the factory.' }
    ],
    specs: [
      { parameter: 'Rated Operational Voltage', value: 'Up to 690 V / 1000 V AC, 50/60 Hz' },
      { parameter: 'Current Carrying Rating', value: '100 A to 6300 A continuous rating' },
      { parameter: 'Conductor Material', value: '99.9% Electrolytic Grade Copper / High-Conductivity Aluminium Alloy' },
      { parameter: 'Insulation Class', value: 'Class F (155°C) / Class H (180°C) halogen-free epoxy film' },
      { parameter: 'Short-Circuit Withstand', value: 'Up to 100 kA RMS for 1 second' },
      { parameter: 'Ingress Protection', value: 'IP54 / IP55 (Indoor) / IP65 / IP67 (Outdoor weatherproof with canopy)' },
      { parameter: 'Enclosure Housing', value: 'Extruded Aluminium housing providing low resistance integral ground path' },
      { parameter: 'Standard Compliance', value: 'IEC 61439-6, IS 8623-2' }
    ],
    principle: 'Instead of laying dozens of heavy, expensive, and heat-generating power cables in crowded cable trays, a prefabricated rigid bus duct enclosure carries thousands of amperes compactly with superior heat radiation and minimal electromagnetic interference.',
    applications: [
      'Transformer to Main PCC Incomer Links', 'Substation Interconnections', 'Heavy Baghouse Blower Substation Feeders',
      'Multi-Story Industrial Buildings', 'Steel, Cement & Petrochemical Plants', 'Continuous Process Manufacturing Facilities'
    ],
    relatedIds: ['pcc-panel', 'ht-panel', 'lt-panel', 'mcc-panel', 'control-panels']
  },
  {
    id: 'reverse-air-bag-filters',
    slugs: ['reverse-air-bag-filters', 'reverse-air-filter', 'offline-bag-filters', 'offline-bag-filter'],
    title: 'Reverse Air Bag Filters (Offline Multi-Compartment Baghouse)',
    shortTitle: 'Reverse Air Bag Filters',
    category: 'Turnkey Filtration Systems',
    mainCategory: 'Dust Collection Equipment',
    tag: 'Heavy Duty Thermal Gas Cleaning',
    image: baghouseImg,
    heroImage: pulseJetImg,
    shortDesc: 'Multi-compartment offline cleaning fabric filter baghouses engineered for high-volume, high-temperature furnace and kiln exhaust gases.',
    overview: 'VS Filtech designs and manufactures Reverse Air Bag Filters and Offline Compartment Baghouses engineered for utility boilers, cement kilns, and metallurgical smelters. Each compartment is pneumatically isolated using poppet dampers before gentle reverse air flow collapses the filter bags to discharge accumulated dust cakes without high-pressure mechanical shock, dramatically extending bag life in high-temperature service.',
    features: [
      { title: 'Offline Compartment Isolation', desc: 'Fast-acting pneumatic poppet dampers isolate each section for zero-flow quiescent cleaning and online maintenance.' },
      { title: 'Gentle Reverse Air Cleaning', desc: 'Low-velocity reverse gas flow collapses woven fiberglass or PTFE bags gently without abrasive fiber fatigue.' },
      { title: 'High-Temperature Endurance', desc: 'Rated for continuous gas temperatures up to 260°C with thermal casing expansion joints and rockwool insulation.' },
      { title: 'Internal Anti-Collapse Rings', desc: 'Filter bags equipped with sewn-in stainless steel anti-collapse rings to ensure uniform gas permeability.' }
    ],
    specs: [
      { parameter: 'Airflow Capacity', value: '25,000 to 500,000+ CFM custom compartment configurations' },
      { parameter: 'Gas Operating Temperature', value: '120°C to 280°C continuous service' },
      { parameter: 'Compartments', value: '4 to 16 isolated compartments with bypass & isolation poppet dampers' },
      { parameter: 'Filter Bag Length', value: 'Up to 10 meters (Dia 200mm - 300mm with anti-collapse rings)' },
      { parameter: 'Filtration Velocity', value: '0.45 to 0.75 m/min (Air-to-Cloth ratio 1.5:1 to 2.5:1)' },
      { parameter: 'Casing Construction', value: '5mm - 8mm structural steel plate with stiffeners and walk-in plenums' }
    ],
    principle: 'Flue gas enters the hopper and rises inside the tubular bags. Dust collects on the inside surface while clean gas exits through the exterior into the outlet manifold. For cleaning, an automated damper isolates the compartment and reverse air fan gently back-purges the bags, causing the dust cake to crack and drop into the collection hopper.',
    applications: [
      'Cement Rotary Kiln Exhaust', 'Coal-Fired Power Station Boilers', 'Ferro-Alloy & Submerged Arc Furnaces',
      'Waste-to-Energy Incineration Plants', 'Copper & Zinc Smelters', 'Carbon Black Primary Gas Streams'
    ],
    relatedIds: ['dust-collector-system', 'filter-bag', 'id-fans', 'rotary-air-lock', 'control-panels']
  },
  {
    id: 'dampers',
    slugs: ['dampers', 'isolation-dampers', 'poppet-dampers', 'butterfly-dampers', 'multilouver-dampers'],
    title: 'Industrial Dampers & Airflow Isolation Valves',
    shortTitle: 'Dampers & Airflow Controls',
    category: 'Mechanical Dust Handling',
    mainCategory: 'Mechanical Equipment',
    tag: 'Airtight Gas Balancing',
    image: ductingImg,
    heroImage: baghouseImg,
    shortDesc: 'Pneumatically and motorized multi-louver, butterfly, and zero-leakage poppet isolation dampers engineered for baghouse gas balancing.',
    overview: 'VS Filtech manufactures heavy-duty industrial dampers engineered for precise airflow modulation and 100% gastight isolation in dust extraction networks and baghouse compartments. Available in Poppet, Multi-Louver, Butterfly, and Guillotine slide configurations with pneumatic cylinder or electric actuator operation.',
    features: [
      { title: 'Zero Leakage Sealing', desc: 'Metallic or resilient Viton/silicone elastomeric perimeter seals deliver up to 99.9% seal tightness.' },
      { title: 'High-Temperature Construction', desc: 'Rated for flue gas temperatures up to 450°C with thermal expansion clearances and outboard bearings.' },
      { title: 'Actuator Compatibility', desc: 'Supplied with double-acting pneumatic cylinders with NAMUR solenoid valves, limit switches, or modulating electric actuators.' },
      { title: 'Aerodynamic Blade Profile', desc: 'Streamlined airfoil blades minimize static pressure drop across duct runs during full-open flow.' }
    ],
    specs: [
      { parameter: 'Types Available', value: 'Poppet Dampers, Multi-Louver, Butterfly Dampers, Guillotine Isolation Gates' },
      { parameter: 'Operating Temperature', value: 'Ambient up to 450°C continuous service' },
      { parameter: 'Duct Diameter / Size', value: 'Round Ø200mm to Ø2500mm | Rectangular 300x300mm to 3000x3000mm' },
      { parameter: 'Material of Construction (MOC)', value: 'IS 2062 Mild Steel, Corten Steel, SS 304, SS 316, Hardox liners' },
      { parameter: 'Drive Options', value: 'Pneumatic cylinder (with air accumulator), Electric motorized rotary actuator, Manual handwheel' },
      { parameter: 'Seal Tightness', value: 'Class II to Class IV (99.0% to 99.95% volumetric shutoff with air seal purge)' }
    ],
    principle: 'Dampers modulate airflow resistance across branching duct networks to balance capture velocities at extraction hoods. Poppet dampers at baghouse compartment inlets and outlets actuate within 3 seconds to seal off sections completely during cleaning or maintenance without stopping the process fan.',
    applications: [
      'Baghouse Offline Compartment Isolation', 'ID Fan Inlet Vane Control & Draft Modulation', 'Furnace Canopy Hood Balancing',
      'Boiler Flue Gas Recirculation', 'Emergency Fresh Air Dilution Dampers', 'Cement Clinker Cooler Exhaust Balancing'
    ],
    relatedIds: ['dust-collector-system', 'id-fans', 'control-panels', 'screw-conveyor']
  },
  {
    id: 'snap-bands',
    slugs: ['snap-bands', 'snap-band-collars', 'filter-bag-cuff', 'tube-sheet-seals', 'clamps'],
    title: 'Snap Bands & Clamps (Tubesheet Cuff Seals & Retaining Rings)',
    shortTitle: 'Snap Bands & Clamps',
    category: 'Tubesheet Sealing Hardware',
    mainCategory: 'Filter Components',
    tag: 'Airtight Tubesheet Seal',
    image: snapBandsImg,
    heroImage: snapBandsImg,
    shortDesc: 'Calibrated tempered spring steel snap ring bands wrapped in double-beaded needlefelt gaskets for toolless airtight tubesheet locking.',
    overview: 'VS Filtech manufactures precision snap band cuffs and stainless steel retaining clamps engineered to lock filter bags airtight into CNC laser-cut baghouse tubesheet cell plates. Wrapped in dense multi-layered needlefelt with calibrated spring steel cores, our snap bands seat firmly with an audible "snap", guaranteeing zero dust bypass (<10 mg/Nm³ statutory emission integrity) without tools.',
    features: [
      { title: 'Audible Snap-Fit Verification', desc: 'Locks securely into tubesheet cell plate grooves, preventing bag drop under heavy dust load or pulsing recoil.' },
      { title: 'Zero Particle Bypass', desc: 'Double-beaded felt gasket compresses against hole edges to guarantee statutory <10 mg/Nm³ emission integrity.' },
      { title: 'Toolless Installation & Removal', desc: 'Allows operators to replace filter bags quickly and safely from the clean-air plenum roof.' },
      { title: 'Corrosion-Resistant Metallurgy', desc: 'High-fatigue spring steel retainers available in tempered high-carbon steel, SS 301, and SS 304.' }
    ],
    specs: [
      { parameter: 'Tubesheet Hole Diameters', value: 'Ø100mm, Ø120mm, Ø130mm, Ø150mm, Ø160mm, Ø180mm (toleranced to ±0.2mm)' },
      { parameter: 'Spring Band Core Material', value: 'Tempered high-carbon spring steel, Grade 301 / 304 Stainless Steel' },
      { parameter: 'Sealing Gasket Media', value: 'High-density Polyester needlefelt, Nomex, PTFE, EPDM, Silicone' },
      { parameter: 'Cuff & Clamp Styles', value: 'Double-beaded snap band, single-beaded ring, worm-drive SS clamp, quick-release band' },
      { parameter: 'Operating Temperature', value: 'Ambient up to 260°C continuous service (300°C peak)' },
      { parameter: 'Emission Standard Compliance', value: 'Guarantees particulate leak tightness <10 mg/Nm³ CPCB statutory limits' }
    ],
    principle: 'When compressed inward by hand into a heart shape, the snap band is placed through the tubesheet hole. Releasing it allows the spring steel to snap outward into the calibrated groove, compressing the felt bead firmly against both the top and bottom edges of the plate for a mechanical hermetic seal.',
    applications: [
      'Pulse Jet Baghouse Tubesheets', 'Top-Removal Dust Collectors', 'Silo Top Venting Filters',
      'Food & Pharmaceutical Powder Collectors', 'Extreme Vacuum Industrial Baghouses'
    ],
    relatedIds: ['filter-bag', 'filter-cages', 'filter-cage-venturi']
  },
  {
    id: 'sequential-pulse-controllers',
    slugs: ['sequential-pulse-controllers', 'pulse-timer-panel', 'pulse-jet-controller', 'sequential-timer'],
    title: 'Sequential Pulse Controllers & DP Cleaning Panels',
    shortTitle: 'Sequential Pulse Controllers',
    category: 'Electrical & Automation Panels',
    mainCategory: 'Electrical & Automation',
    tag: 'Microprocessor Pulse Timing',
    image: controlPanelImg,
    heroImage: vfdPlcImg,
    shortDesc: 'Solid-state microprocessor sequential timers with integrated differential pressure monitoring for demand-based compressed air cleaning.',
    overview: 'VS Filtech engineers advanced microprocessor Sequential Pulse Controllers designed to automate reverse pulse-jet cleaning cycles. Operating either on timed intervals or intelligent Differential Pressure (DP) on-demand mode, our controllers trigger pulse solenoid valves in exact sequence, minimizing compressed air consumption and prolonging filter bag lifecycle.',
    features: [
      { title: 'Demand-Based DP Cleaning', desc: 'Fires pulse valves only when baghouse differential pressure exceeds the preset high limit, saving 35%+ plant air.' },
      { title: 'Solid-State Triac Outputs', desc: 'Fast, arc-free solid-state switching rated for millions of operations driving 24V DC, 110V AC, or 230V AC solenoids.' },
      { title: 'Digital LED / HMI Display', desc: 'Displays active pulse channel, pulse duration (milliseconds), interval time (seconds), and live DP (mm WG).' },
      { title: 'RS485 Modbus / SCADA Telemetry', desc: 'Optional communication interface linking pulse diagnostics and baghouse pressure directly to the plant DCS.' }
    ],
    specs: [
      { parameter: 'Output Channels', value: '4, 8, 12, 16, 24, 32, 48, 64, 128 channels (modular expandability)' },
      { parameter: 'Pulse On-Time Duration', value: '20 ms to 1000 ms adjustable (typical setting 50ms - 100ms)' },
      { parameter: 'Pulse Off-Time Interval', value: '1 sec to 999 sec adjustable' },
      { parameter: 'Input Supply Voltage', value: '230V AC ±10%, 50/60 Hz or 110V AC / 24V DC options' },
      { parameter: 'Output Valve Drive Rating', value: 'Solid-state Triac / Optoisolated FET rated 2.0A per channel' },
      { parameter: 'Enclosure Rating', value: 'IP65 Weatherproof CRCA powder coated / Polycarbonate enclosure' }
    ],
    principle: 'The controller energizes solenoid coils one row at a time. The pilot solenoid vents compressed air from above the valve diaphragm, allowing reservoir header pressure to pop the diaphragm wide open in milliseconds. A supersonic acoustic shockwave travels down the blowpipe through the venturi, flexing the filter bag outward and discharging the cake.',
    applications: [
      'Pulse Jet Fabric Baghouses', 'Pleated Cartridge Dust Collectors', 'Silo Venting Systems',
      'Pneumatic Conveying Receivers', 'Combustion Flue Gas Cleaning Units'
    ],
    relatedIds: ['solenoid-valve', 'differential-pressure-switch', 'control-panels', 'vfd-panel']
  },
  {
    id: 'temperature-instruments',
    slugs: ['temperature-instruments', 'thermocouple-flue-gas', 'rtd-sensor', 'temp-transmitter'],
    title: 'Industrial Temperature Instruments & Flue Gas Thermal Monitoring',
    shortTitle: 'Temperature Instruments',
    category: 'Instrumentation & Safety',
    mainCategory: 'Electrical & Automation',
    tag: 'Thermal Protection Interlock',
    image: dpSwitchImg,
    heroImage: controlPanelImg,
    shortDesc: 'Duplex thermocouples, RTD Pt100 sensors, and 4-20mA smart transmitters protecting filter bags from thermal degradation and acid condensation.',
    overview: 'VS Filtech supplies industrial temperature sensing instruments and head-mounted transmitters engineered for baghouse inlet and outlet duct monitoring. Providing continuous thermal feedback to the plant PLC, these sensors trigger emergency fresh-air dilution dampers when process gas spikes, protecting expensive filter bags from thermal burn-out and preventing acid dewpoint corrosion.',
    features: [
      { title: 'High-Temperature Duplex Sensing', desc: 'Duplex Type K / Type N thermocouples and RTD Pt100 elements provide dual redundancy for safety interlocks.' },
      { title: 'High-Velocity Thermowells', desc: 'Precision-machined bar stock thermowells in SS 316, Inconel, and ceramic coatings withstand particulate abrasion.' },
      { title: 'HART / 4-20mA Output', desc: 'Head-mounted digital transmitters provide isolated 4-20mA signal transmission resistant to electrical noise.' },
      { title: 'Cold-Junction & Acid Dewpoint Interlocks', desc: 'Integrated with baghouse PLC to alarm on low gas temperatures near the acid dew point to prevent bag clogging.' }
    ],
    specs: [
      { parameter: 'Element Types', value: 'Thermocouple Type K, N, J, R, S or Simplex/Duplex RTD Pt100 (Class A)' },
      { parameter: 'Temperature Range', value: '-50°C to 1200°C (-58°F to 2192°F)' },
      { parameter: 'Thermowell MOC', value: 'SS 316L, SS 310, Inconel 600, Hastelloy C-276, Ceramic' },
      { parameter: 'Output Signal', value: '4-20 mA with HART protocol / Fieldbus / Modbus RS485' },
      { parameter: 'Enclosure Rating', value: 'IP66 / IP68 Flameproof / Explosion-Proof (ATEX / PESO / IECEx certified)' }
    ],
    principle: 'Positioned at the dirty gas inlet manifold, the sensor continuously monitors incoming flue gas temperature. If temperatures exceed the bag media limit (e.g. 130°C for Polyester or 200°C for Nomex), the PLC instantly actuates cold air dilution dampers or shifts the system into safety bypass mode.',
    applications: [
      'Baghouse Inlet Flue Gas Monitoring', 'Furnace & Boiler Exhaust Gas Lines', 'Thermal Oxidizer & Incinerator Outlets',
      'Rotary Kiln Clinker Cooler Exhaust', 'Asphalt Plant Dryers & Smelters'
    ],
    relatedIds: ['differential-pressure-switch', 'control-panels', 'filter-bag', 'dampers']
  }

];

export const getProductByIdOrSlug = (idOrSlug) => {
  if (!idOrSlug) return null;
  let clean = '';
  try {
    clean = decodeURIComponent(idOrSlug).toLowerCase().trim();
  } catch (e) {
    clean = idOrSlug.toLowerCase().trim();
  }

  const normalized = clean.replace(/[\s_]+/g, '-');
  const singular = normalized.endsWith('s') ? normalized.slice(0, -1) : normalized;
  const plural = normalized.endsWith('s') ? normalized : normalized + 's';

  const candidates = [clean, normalized, singular, plural];

  return allProductsData.find(p => {
    if (candidates.includes(p.id)) return true;
    if (p.slugs && p.slugs.some(s => candidates.includes(s))) return true;
    return false;
  }) || null;
};
