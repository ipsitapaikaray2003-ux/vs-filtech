import { 
  Layers, 
  Flame, 
  Droplets, 
  ShieldCheck, 
  Gauge, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Factory, 
  Sparkles,
  Scissors
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const servicesList = [
  {
    id: 'stitching',
    icon: Scissors,
    badge: 'OEM SEAM FABRICATION',
    title: 'Custom Filter Bag Stitching & Tailoring',
    desc: 'Heavy-duty multi-needle chain stitching with high-strength PTFE threads. Fabricated in lengths up to 12 meters with custom disc bottoms, wear strips, and reinforced cuffs for pulse-jet and reverse-air baghouses.',
    features: [
      'Snap-band, rubber cord & clamp collar fittings',
      'Double & triple-needle locked seams for zero dust leakage',
      'Custom tube diameters (115mm to 200mm+)',
      'Reinforced base disc & anti-abrasion wear collars'
    ],
    link: '/contact',
    linkText: 'Inquire Stitching Service'
  },
  {
    id: 'high-temp',
    icon: Flame,
    badge: 'CONTINUOUS 280°C / PEAK 290°C',
    title: 'High-Temperature Media Engineering',
    desc: 'Thermal media engineering for severe industrial flue gas environments. We fabricate bags using Woven Fiberglass, Aramid (Nomex), PPS (Ryton), P84, and pure PTFE to resist acid dew point corrosion and thermal shocks.',
    features: [
      'Cement kilns, coal-fired boilers & steel smelters',
      'ePTFE membrane lamination for sub-micron capture',
      'Acid, alkali & oxidation resistant chemical finishes',
      'Antistatic conductive stainless steel wire scrims'
    ],
    link: '/products/high-temperature',
    linkText: 'Explore High Temp Bags'
  },
  {
    id: 'liquid-pp',
    icon: Droplets,
    badge: '1 TO 200 MICRON ACCURACY',
    title: 'Polypropylene Liquid Bag Manufacturing',
    desc: '100% virgin polypropylene needle felt and monofilament mesh fabrication with ultrasonic welded seams for 100% bypass-free liquid clarification and industrial slurry separation.',
    features: [
      'Ultrasonic welded seams (zero needle puncture holes)',
      'Injection-molded polypropylene & steel collar rings',
      'Standard industry sizes (Size 1, 2, 3, 4)',
      'Broad chemical compatibility across pH 1 to 14'
    ],
    link: '/products/polypropylene',
    linkText: 'Explore PP Liquid Bags'
  },
  {
    id: 'cages',
    icon: ShieldCheck,
    badge: '8 TO 24 LONGITUDINAL WIRES',
    title: 'Baghouse Support Cages & Venturis',
    desc: 'Precision automated resistance-welded cages built to support filter bags without pinching or fabric abrasion. Fabricated in GI, SS304, SS316, and anti-corrosive epoxy finishes.',
    features: [
      '8, 10, 12, 16, 20 & 24 longitudinal wire configurations',
      'Integrated machined cast aluminum & spun venturies',
      'Split cages with claw / bayonet couplings for low headroom',
      '100% burr-free ring joints to protect bag integrity'
    ],
    link: '/contact',
    linkText: 'Request Cage Specifications'
  },
  {
    id: 'reverse-eng',
    icon: Gauge,
    badge: 'SAMPLE-TO-SPEC FABRICATION',
    title: 'OEM Reverse Engineering & Reproduction',
    desc: 'Send us your used or worn bag sample, or tubesheet drawing. Our engineers analyze media weight, air permeability, fiber type, and dimensional fit to fabricate identical or upgraded OEM replacements.',
    features: [
      'Exact reverse-engineering for Thermax, BHEL, FLSmidth, ACC',
      'Air permeability (CFM) & seam tensile strength testing',
      'Upgraded media recommendations to increase service life',
      'Rapid batch prototyping and fast-track delivery'
    ],
    link: '/contact',
    linkText: 'Send Bag Sample for RFQ'
  },
  {
    id: 'maintenance',
    icon: Wrench,
    badge: 'ON-SITE FIELD SUPPORT',
    title: 'Baghouse Maintenance & Emission Auditing',
    desc: 'Comprehensive baghouse health monitoring and maintenance services. We assist plant engineers in diagnosing high differential pressure, duct leakage, and emission spikes to achieve <5 mg/Nm³ clean air.',
    features: [
      'Fluorescent powder leak detection testing',
      'Pulse-jet solenoid valve & timer sequence inspection',
      'Full turnkey filter bag and cage changeout guidance',
      'Tubesheet alignment & venturi seating verification'
    ],
    link: '/contact',
    linkText: 'Schedule Technical Consultation'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <div className="services-eyebrow">
            <Factory size={15} className="services-eyebrow-icon" />
            <span>END-TO-END FILTRATION CAPABILITIES</span>
          </div>
          <h2 className="services-title">
            Our Manufacturing & <span className="text-gradient">Engineering Services</span>
          </h2>
          <p className="services-subtitle">
            From precision filter bag stitching and snap-band collar fitting to high-temperature thermal media engineering and reverse-engineering OEM replacements, we deliver complete turnkey filtration solutions from our Ghaziabad manufacturing plant.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComponent size={26} />
                  </div>
                  <span className="service-badge">{service.badge}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>

                <div className="service-features-list">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="service-feature-item">
                      <CheckCircle2 size={15} className="service-check-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card-footer">
                  <Link to={service.link} className="service-action-link">
                    <span>{service.linkText}</span>
                    <ArrowRight size={16} className="action-arrow" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Manufacturing Commitment */}
        <div className="services-commitment-banner">
          <div className="commitment-content">
            <div className="commitment-title-row">
              <Sparkles size={20} className="commitment-sparkle" />
              <h4>Custom Dimensional Fabrication Available for All Baghouses</h4>
            </div>
            <p>
              Have non-standard tubesheet hole diameters, extreme acidic flue gases, or unique collar requirements? Our Ghaziabad engineering team custom-tailors every filter bag with precision tolerances.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary commitment-btn">
            Request Custom Quotation <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
