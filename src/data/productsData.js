import pulseJetImg from '../assets/factory_bagfilter_plant_hd.jpg';
import baghouseImg from '../assets/hero_baghouse.jpg';
import pleatedImg from '../assets/pleated_filter_bag.jpeg';
import cycloneImg from '../assets/cyclone_dust_collector.webp';
import idFanImg from '../assets/id_fan.jpg';
import filterBagImg from '../assets/filter_bag_hd.jpg';
import cageImg from '../assets/filter_cage.webp';
import venturiImg from '../assets/metal_venturi.jpg';
import solenoidImg from '../assets/solenoid_valve.webp';
import ralImg from '../assets/rotary_air_lock.webp';
import siloImg from '../assets/silo_filter_product.jpg';
import conveyorImg from '../assets/screw_conveyor_product.jpg';
import dpSwitchImg from '../assets/dp_transmitter_product.jpg';
import pressureSwitchImg from '../assets/pressure_switch_product.jpg';
import levelSensorImg from '../assets/level_sensor_product.jpg';
import hopperVibratorImg from '../assets/hopper_vibrator_product.jpg';
import explosionVentImg from '../assets/explosion_vent_product.jpg';
import controlPanelImg from '../assets/control_panel_mcc_product.jpg';
import ductingImg from '../assets/indoor_ducting.jpg';

export const allProductsData = [
  {
    id: 'dust-collector-system',
    slugs: ['dust-collector-system', 'pulse-jet-bag-filters', 'pulse-jet-dust-collector'],
    title: 'Industrial Pulse Jet Dust Collector System',
    shortTitle: 'Dust Collector System',
    category: 'Turnkey Filtration Systems',
    tag: 'Flagship Equipment',
    image: pulseJetImg,
    heroImage: baghouseImg,
    shortDesc: 'Continuous online automated reverse-pulse jet baghouse dust collection systems engineered for heavy process manufacturing plants across India.',
    overview: 'VS Filtech designs, manufactures, and commissions heavy-duty industrial pulse jet baghouse dust collectors. Engineered for continuous 24/7 operation under extreme particulate loadings, our baghouses feature laser-cut tube sheets, aerodynamic downward can velocity distribution baffles, and automated microprocessor reverse-pulse cleaning. Every unit is customized to the client’s exact CFM airflow, gas chemistry, moisture profile, and operating temperature to guarantee statutory outlet emission compliance (< 10 mg/Nm³).',
    features: [
      { title: 'Reverse Pulse-Jet Cleaning', desc: 'Online row-by-row high-pressure compressed air purging ensures uninterrupted continuous plant draft.' },
      { title: 'Downward Can Velocity', desc: 'Aerodynamic inlet baffles prevent dislodged dust from re-entraining back onto adjacent filter bags.' },
      { title: 'Top-Access Clean Air Plenum', desc: 'Toolless snap-band bag and cage changeout safely conducted from the clean-air roof plenum.' },
      { title: 'Guaranteed CPCB Compliance', desc: 'Engineered particulate capture efficiency exceeding 99.9% meeting strict pollution control board limits.' }
    ],
    specs: [
      { parameter: 'Airflow Capacity', value: '1,000 to 1,50,000+ CFM (custom modular sizing)' },
      { parameter: 'Particulate Collection Efficiency', value: '> 99.9% sub-micron capture (< 10 mg/Nm³ outlet emission)' },
      { parameter: 'Material of Construction (MOC)', value: '4mm - 6mm IS 2062 Mild Steel / Corten / SS 304 / SS 316' },
      { parameter: 'Cleaning Mechanism', value: 'Reverse pulse jet via supersonic venturi and sequential timer' },
      { parameter: 'Compressed Air Requirement', value: '5.0 to 6.5 bar clean, dry, oil-free compressed air' },
      { parameter: 'Operating Temperature', value: 'Ambient up to 260°C continuous service' },
      { parameter: 'Tubesheet Fabrication', value: 'CNC laser-cut with calibrated snap-band seal holes' },
      { parameter: 'Discharge Equipment', value: 'Heavy-duty rotary airlock valve (RAL) & manual slide gate' }
    ],
    principle: 'Dust-laden air enters through engineered intake baffles, dropping coarse particulates immediately into the collection hopper by inertial gravity. Fine particulates travel upward and are captured on the outer surface of high-efficiency needlefelt filter bags. Clean air passes through the interior into the clean-air plenum and is drawn out by the ID fan. At programmed intervals, the sequential controller fires pulse solenoid valves, releasing short supersonic compressed air shockwaves down through venturi nozzles to dislodge dust cakes directly into the hopper.',
    applications: [
      'Cement & Clinker Plants', 'Steel & Induction Furnaces', 'Thermal Power Boilers', 
      'Carbon Black & Chemical', 'Non-Ferrous Smelters', 'Foundries & Sand Plants'
    ],
    relatedIds: ['filter-bag', 'filter-cages', 'solenoid-valve', 'id-fans', 'rotary-air-lock']
  },
  {
    id: 'id-fans',
    slugs: ['id-fans', 'induced-draft-fans', 'centrifugal-fans'],
    title: 'ID Fans (Induced Draft Centrifugal Fans)',
    shortTitle: 'ID Fans',
    category: 'Airflow & Draft Equipment',
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
    slugs: ['cyclone-dust-collector', 'cyclone-filters', 'centrifugal-separator'],
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
    principle: 'Dust-laden air enters tangentially at high velocity into the cylindrical upper body, setting up a downward helical vortex. Centrifugal force drives dense dust particles against the outer walls, where they decelerate and slide down into the conical hopper. Clean gas reaches the bottom of the cone and reverses upward in an inner vortex to exit through the central vortex finder tube.',
    applications: [
      'Woodworking & Sawmills', 'Grain Elevators & Flour Mills', 'Sand Blasting & Shot Peening', 
      'Biomass & Coal Boilers', 'Primary Crusher Pre-Filtration', 'Sparks Mitigation'
    ],
    relatedIds: ['dust-collector-system', 'rotary-air-lock', 'id-fans']
  },
  {
    id: 'filter-bag',
    slugs: ['filter-bag', 'filter-bags', 'industrial-filter-bags'],
    title: 'Industrial Filter Bags (Woven & Needlefelt)',
    shortTitle: 'Filter Bags',
    category: 'Filtration Media',
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
    slugs: ['filter-cages', 'cages-with-venturi', 'support-cages'],
    title: 'Filter Cages (Support Cages With Venturi)',
    shortTitle: 'Filter Cages',
    category: 'Structural Support',
    tag: 'Structural Support',
    image: cageImg,
    heroImage: venturiImg,
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
    relatedIds: ['filter-bag', 'filter-cage-venturi', 'dust-collector-system']
  },
  {
    id: 'filter-cage-venturi',
    slugs: ['filter-cage-venturi', 'venturi-nozzle', 'pulse-jet-venturi'],
    title: 'Filter Cage Venturi (Supersonic Jet Nozzles)',
    shortTitle: 'Cage Venturi',
    category: 'Pulse Jet Cleaning Components',
    tag: 'Pulse Component',
    image: venturiImg,
    heroImage: cageImg,
    shortDesc: 'Aerodynamically profiled supersonic nozzles atop filter cages that induce secondary clean air for deep bag pulse cleaning.',
    overview: 'VS Filtech manufactures aerodynamically contoured supersonic venturi nozzles designed to be integrated directly atop filter support cages. By exploiting the Bernoulli effect, our venturies induce a secondary volume of ambient clean air up to 4 times the primary compressed air pulse, amplifying cleaning shockwaves to clean long filter bags (up to 8 meters) from top to bottom.',
    features: [
      { title: '4x Secondary Air Induction', desc: 'Draws secondary ambient air to multiply the cleaning pulse air volume by up to 400%.' },
      { title: 'Tuned Converging-Diverging Profile', desc: 'Bellmouth nozzle geometry converts compressed air pressure into high-velocity kinetic shockwaves.' },
      { title: 'Smooth Aerodynamic Finish', desc: 'Precision-machined inner surfaces minimize turbulence and static pressure loss during pulsing.' },
      { title: 'Universal Mounting', desc: 'Available spot-welded directly to cage collars, or as drop-in cast flange inserts for tube sheets.' }
    ],
    specs: [
      { parameter: 'Materials of Construction', value: 'Die-cast aluminum alloy, deep-drawn galvanized steel, SS 304, SS 316' },
      { parameter: 'Nozzle Profiles', value: 'Aerodynamic bellmouth converging-diverging geometry' },
      { parameter: 'Tuned Lengths', value: '150mm, 200mm, 250mm, 300mm length options' },
      { parameter: 'Collar Attachment', value: 'Integral resistance spot-welded to cage, or drop-in cast flange' },
      { parameter: 'Amplification Factor', value: '3.5x to 4.5x induced secondary clean air volume' },
      { parameter: 'Pulse Pressure Rating', value: 'Optimized for 4.0 bar to 7.0 bar compressed air pulses' },
      { parameter: 'Finish', value: 'Smooth cast deburred finish, passivated stainless, or zinc plated' }
    ],
    principle: 'When the pulse solenoid valve fires, high-velocity compressed air shoots down through the blowpipe orifice directly into the venturi throat. The sudden pressure drop in the throat draws a substantial volume of surrounding clean air from the plenum into the stream. This combined air mass expands as a supersonic shockwave that travels down the entire filter bag, snapping the fabric outward to shatter the dust cake.',
    applications: [
      'High-Velocity Pulse Jet Baghouses', 'Long Bags (> 4m up to 8m length)', 'Dense Sticky Dust Cakes', 
      'Fly Ash Filtration', 'Cement Kiln Exhausts', 'Furnace Metallurgy Baghouses'
    ],
    relatedIds: ['filter-cages', 'solenoid-valve', 'filter-bag']
  },
  {
    id: 'solenoid-valve',
    slugs: ['solenoid-valve', 'solenoid-valves', 'pulse-valve'],
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
    slugs: ['rotary-air-lock', 'rotary-air-lock-valve', 'ral-valve'],
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
    slugs: ['differential-pressure-switch', 'dp-transmitter', 'differential-pressure-transmitter'],
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
    slugs: ['control-panels', 'sequential-timers', 'mcc-panel', 'plc-panel'],
    title: 'MCC & PLC Automation Control Panels (Sequential Pulse Timers)',
    shortTitle: 'Control Panels',
    category: 'Automation & Electrical Panels',
    tag: 'Pulse Automation',
    image: controlPanelImg,
    heroImage: solenoidImg,
    shortDesc: 'Dust collector automation control panels incorporating microprocessor sequential timers, differential pressure displays, and VFDs.',
    overview: 'VS Filtech designs and builds complete electrical and automation control panels for dust collection systems. Incorporating programmable microprocessor sequential pulse timers, digital differential pressure transmitters, VFD motor drives for ID fans, and plant DCS / SCADA communication interfaces, our control panels ensure automated, energy-efficient baghouse operation.',
    features: [
      { title: 'Microprocessor Sequential Pulse Timer', desc: 'Precision digital timer regulates pulse duration (50-200ms) and pulse intervals across all solenoid rows.' },
      { title: 'DP On-Demand Cleaning Logic', desc: 'Automatically switches from continuous cycling to on-demand cleaning based on differential pressure.' },
      { title: 'VFD Speed Modulation for ID Fans', desc: 'Variable Frequency Drives adjust fan speed according to actual process draft demands, saving power.' },
      { title: 'Complete Safety Interlocks', desc: 'Comprehensive monitoring of header pressure, motor overload, high temperature, and hopper level.' }
    ],
    specs: [
      { parameter: 'Enclosure Rating', value: 'IP55 / IP65 powder-coated CRCA sheet steel with double door' },
      { parameter: 'Operating Supply', value: '415V AC ± 10%, 3-Phase, 50 Hz / 230V AC Single Phase' },
      { parameter: 'Pulse Channels Supported', value: '4, 8, 16, 24, 32, 64, 128 solenoid valve output channels' },
      { parameter: 'Pulse Timing Range', value: 'Pulse Duration: 50ms to 500ms; Pulse Interval: 1 sec to 99 sec' },
      { parameter: 'PLC / Controller Brands', value: 'Siemens, Schneider Electric, Delta, Rockwell / Allen Bradley' },
      { parameter: 'HMI Screen Options', value: '4.3", 7.0", or 10.0" full color industrial touchscreen HMI' },
      { parameter: 'Communication Protocols', value: 'Modbus RTU / RS485, Profinet, Ethernet/IP for plant DCS integration' }
    ],
    principle: 'The control panel is the central nervous system of the filtration plant. It continuously reads differential pressure across the baghouse and compressed air pressure in the header. When cleaning is required, it fires output triacs/relays in sequence to energize solenoid valves row by row, while monitoring system safety and motor currents.',
    applications: [
      'Turnkey Pulse Jet Baghouses', 'Centralized Dust Collection Plants', 'Fume Extraction Systems', 
      'Multi-Compartment Offline Baghouses', 'Silo Top Automation'
    ],
    relatedIds: ['solenoid-valve', 'differential-pressure-switch', 'pressure-switch', 'dust-collector-system']
  }
];

export const getProductByIdOrSlug = (idOrSlug) => {
  if (!idOrSlug) return null;
  const clean = idOrSlug.toLowerCase().trim();
  return allProductsData.find(p => p.id === clean || (p.slugs && p.slugs.includes(clean))) || null;
};
