import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { 
  Factory, 
  ShieldCheck, 
  Settings, 
  Award, 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Sparkles,
  FlaskConical,
  Gauge
} from 'lucide-react';
import './AboutPage.css';
import plantImg from '../assets/hero_manufacturing.png';

const stats = [
  { value: '15+', label: 'Years Engineering Experience' },
  { value: '500,000+', label: 'Filter Bags Fabricated' },
  { value: '99.8%', label: 'Particulate Separation Efficiency' },
  { value: '280°C', label: 'Max Thermal Resilience' }
];

const capabilities = [
  {
    icon: <Factory size={28} />,
    title: 'Automated Multi-Needle Stitching',
    desc: 'Heavy-duty 3-needle and 4-needle chain stitch machines utilizing high-tenacity PTFE and Nomex threads for leak-proof seam integrity.'
  },
  {
    icon: <Cpu size={28} />,
    title: 'Ultrasonic & Thermal Fusion',
    desc: 'State-of-the-art ultrasonic welding technology producing 100% bypass-free seams without needle perforation for critical liquid filtration.'
  },
  {
    icon: <Layers size={28} />,
    title: 'Custom Collar & Snap Band Fitting',
    desc: 'Precision spring steel snap bands, silicone cords, molded polypropylene tops, and stainless steel rings custom-fitted for all OEM baghouses.'
  },
  {
    icon: <FlaskConical size={28} />,
    title: 'Certified Media Sourcing',
    desc: 'Virgin high-grade fibers including ePTFE membrane laminates, woven fiberglass, PPS (Ryton), P84, Aramid (Nomex), and antistatic needle felts.'
  }
];

const industries = [
  { name: 'Cement & Clinker', desc: 'Raw mill, kiln exhaust, clinker cooler, coal mills.' },
  { name: 'Steel & Metallurgy', desc: 'Electric arc furnaces (EAF), blast furnaces, sinter plants.' },
  { name: 'Thermal Power Plants', desc: 'Coal-fired boilers, fly ash handling, biomass generation.' },
  { name: 'Chemical & Fertilizer', desc: 'Acid mist, aggressive particulate, pigment and pesticide filters.' },
  { name: 'Pharmaceuticals & Food', desc: 'Sanitary grade, dust extraction, fluid bed dryers (FBD).' },
  { name: 'Asphalt & Foundries', desc: 'Aggregate dryers, sand reclamation, cupola emissions.' }
];

const qualitySteps = [
  {
    step: '01',
    title: 'Raw Material Testing',
    detail: 'Every roll of needle felt and woven fabric undergoes air permeability, weight (g/m²), thickness, and tensile elongation verification.'
  },
  {
    step: '02',
    title: 'Computerized Precision Cutting',
    detail: 'Automated fabric laying and pattern cutters ensure precise tubular geometries with tight tolerances for exact cage fitment.'
  },
  {
    step: '03',
    title: 'Reinforced Construction',
    detail: 'Triple-stitched bottom cups, high-strength top collar attachments, and thermal-treated thread preventing joint unraveling.'
  },
  {
    step: '04',
    title: 'Dimensional & Leak Testing',
    detail: 'Individual seam checks and collar tolerance measurements ensuring tight bag-to-tubesheet sealing with zero dust bypass.'
  }
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from('.about-page-hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out'
      });

      gsap.from('.stat-card', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.4
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page">
      {/* Hero Header */}
      <section className="about-page-hero">
        <div className="about-page-hero-overlay"></div>
        <div className="container relative z-10">
          <div className="about-page-hero-content">
            <span className="badge-pill">
              <Sparkles size={14} /> Design & Manufacturing Excellence
            </span>
            <h1 className="about-page-title">
              Engineering the Standard in <br />
              <span className="text-gradient">Industrial Bag Filtration.</span>
            </h1>
            <p className="about-page-lead">
              VS Filtech is a premier design and manufacturing facility for high-performance industrial filter bags, dust collector filters, support cages, and gas extraction systems. We help industries comply with environmental emission standards while maximizing operational lifespan.
            </p>
            <div className="about-page-cta-group">
              <Link to="/contact" className="btn btn-primary">
                Request Facility Consultation <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </Link>
              <Link to="/products/high-temperature" className="btn btn-outline">
                View High Temp Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((item, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Overview & Manufacturing Core */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <div className="section-label">WHO WE ARE</div>
              <h2 className="story-heading">
                Specialized Manufacturers, <br />
                <span className="text-gradient">Not Just Resellers.</span>
              </h2>
              <p className="story-paragraph">
                At VS Filtech, our dedicated focus is the technical design and precision manufacturing of industrial dust collector filter bags and liquid filtration media. Unlike generic distributors, we control every manufacturing parameter—from raw needle felt inspection to custom seam reinforcement and collar fabrication.
              </p>
              <p className="story-paragraph">
                Whether retrofitting existing pulse jet baghouses or engineering solutions for new high-temperature incinerator systems, our engineers calculate the ideal air-to-cloth ratio, gas velocity, and fabric finishes to eliminate blinding, withstand aggressive chemistries, and yield ultra-low emissions (&lt;5 mg/Nm³).
              </p>

              <div className="key-highlights-list">
                <div className="highlight-item">
                  <CheckCircle2 size={20} className="highlight-icon" />
                  <span>Custom dimensional fabrication (lengths up to 12m, diameters from 100mm to 300mm)</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={20} className="highlight-icon" />
                  <span>Seamless compatibility with all major OEM baghouses and pulse-jet collectors</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={20} className="highlight-icon" />
                  <span>Specialist treatments: ePTFE membrane, oleophobic/hydrophobic bath, antistatic carbon scrim</span>
                </div>
              </div>
            </div>

            <div className="story-card-box">
              <div className="story-image-wrap">
                <img src={plantImg} alt="VS Filtech Bag Filter Manufacturing Plant" className="story-plant-img" />
                <div className="story-image-badge">
                  <Factory size={15} /> In-House Stitching & Collar Assembly (Ghaziabad)
                </div>
              </div>

              <div className="glass-card-accent">
                <div className="card-badge">PRODUCTION ASSURANCE</div>
                <h3>Engineered for Zero Downtime</h3>
                <p>
                  A failed filter bag can halt an entire plant kiln or melting line. That is why our manufacturing process incorporates strict quality gates, heavy-grade thermal sewing threads, and stress-tested weld lines built to survive millions of pulse cleaning shockwaves.
                </p>
                <div className="spec-feature-strip">
                  <div className="spec-item">
                    <Gauge size={22} className="spec-icon" />
                    <div>
                      <strong>Low Differential Pressure</strong>
                      <p>Reduces draft fan energy draw</p>
                    </div>
                  </div>
                  <div className="spec-item">
                    <Flame size={22} className="spec-icon" />
                    <div>
                      <strong>High Heat Endurance</strong>
                      <p>Up to 280°C continuous duty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Engineering Capabilities */}
      <section className="about-capabilities-section">
        <div className="container">
          <div className="capabilities-header text-center">
            <div className="section-label">INFRASTRUCTURE</div>
            <h2 className="section-title">Our Manufacturing Capabilities</h2>
            <p className="capabilities-intro">
              State-of-the-art production machinery configured to deliver pinpoint dimensional accuracy and rapid turnaround for bulk industrial orders.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((item, idx) => (
              <div key={idx} className="capability-card">
                <div className="capability-icon-wrap">{item.icon}</div>
                <h3 className="capability-title">{item.title}</h3>
                <p className="capability-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Workflow */}
      <section className="about-qc-section">
        <div className="container">
          <div className="qc-header">
            <div className="section-label">QUALITY DISCIPLINE</div>
            <h2 className="section-title">4-Stage Quality Assurance</h2>
            <p className="qc-lead">
              Ensuring continuous compliance with environmental norms and long service life.
            </p>
          </div>

          <div className="qc-steps-grid">
            {qualitySteps.map((q, idx) => (
              <div key={idx} className="qc-step-card">
                <div className="qc-step-number">{q.step}</div>
                <h3 className="qc-step-title">{q.title}</h3>
                <p className="qc-step-desc">{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="about-industries-section">
        <div className="container">
          <div className="text-center">
            <div className="section-label">SECTOR COVERAGE</div>
            <h2 className="section-title">Industries Relying on Our Bag Filters</h2>
          </div>

          <div className="industries-grid">
            {industries.map((ind, idx) => (
              <div key={idx} className="industry-box">
                <div className="industry-bullet"></div>
                <h4 className="industry-name">{ind.name}</h4>
                <p className="industry-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="about-cta-banner">
        <div className="container">
          <div className="cta-banner-content">
            <Award size={48} className="cta-icon" />
            <h2>Need Custom Sizing or Technical Baghouse Audit?</h2>
            <p>
              Our application engineers are available to analyze your gas composition, operating temperature, and dust characteristics to recommend the optimal bag filter media.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Technical Team
              </Link>
              <Link to="/products/polypropylene" className="btn btn-outline">
                Explore Polypropylene Bags
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
