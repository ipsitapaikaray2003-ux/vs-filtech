import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Factory, 
  Flame, 
  Gauge, 
  Sparkles,
  Award,
  Layers,
  Zap
} from 'lucide-react';
import bgFactoryImg from '../assets/slide_new_1.png';
import './About.css';

const stats = [
  { value: '15+', label: 'Years OEM Leadership', icon: Award },
  { value: '500K+', label: 'Filter Bags Fabricated', icon: Factory },
  { value: '280°C', label: 'Continuous Thermal Limit', icon: Flame },
  { value: '<5 mg', label: 'Emission Clean Air Target', icon: Zap }
];

const pillars = [
  {
    num: '01',
    icon: Factory,
    title: 'Custom Bag Filter Stitching',
    desc: 'Precision multi-needle chain stitching using high-tensile PTFE thread. Tailored in custom lengths up to 12m with reinforced disc bottoms, wear collars, and snap-band rings.'
  },
  {
    num: '02',
    icon: Flame,
    title: 'High-Temp Media Engineering',
    desc: 'Engineered for extreme continuous thermal service up to 280°C in cement kilns, smelters, and boilers using Woven Fiberglass, Nomex, PPS, and pure PTFE with ePTFE membrane.'
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Resistance-Welded Cages',
    desc: 'Heavy-duty 8 to 24-wire cages in GI, SS304, SS316, and anti-corrosive Epoxy finishes with built-in machined venturies to protect bags from friction abrasion.'
  },
  {
    num: '04',
    icon: Gauge,
    title: 'Zero Bypass Seam Sealing',
    desc: 'Ultrasonic welded liquid filter bags and triple-stitched baghouse seams delivering separation efficiency exceeding 99.5% for complete particulate emission control.'
  }
];

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef([]);
  const bgRef = useRef(null);
  const orbsRef = useRef([]);

  useEffect(() => {
    // Parallax background graphic
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // Glowing Orbs Animation
    orbsRef.current.forEach((orb, index) => {
      if (!orb) return;
      gsap.to(orb, {
        y: index === 0 ? 80 : -80,
        x: index === 0 ? 40 : -40,
        duration: 8 + index * 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      {/* High-Tech Industrial Background Graphic */}
      <div 
        className="about-bg" 
        ref={bgRef}
        style={{ backgroundImage: `url(${bgFactoryImg})` }}
      >
        <div className="about-bg-overlay"></div>
        <div className="about-bg-grid"></div>
      </div>

      {/* Floating Cyber Ambient Orbs */}
      <div className="ambient-orb orb-1" ref={el => orbsRef.current[0] = el}></div>
      <div className="ambient-orb orb-2" ref={el => orbsRef.current[1] = el}></div>
      <div className="ambient-orb orb-3"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="about-header" ref={headerRef}>
          <div className="about-eyebrow">
            <span className="about-live-dot"></span>
            <Sparkles size={14} className="eyebrow-sparkle" />
            <span>MANUFACTURING & ENGINEERING LEADERSHIP</span>
          </div>

          <h2 className="section-title">
            Mastering Industrial <br />
            <span className="text-gradient-animated">Bag Filter Systems.</span>
          </h2>

          <p className="about-intro">
            We are dedicated entirely to the precision engineering, custom design, and high-volume manufacturing of industrial filter bags, dust collector filters, and support cages. Designed to exceed stringent environmental emission standards with zero bypass.
          </p>
        </div>

        {/* Interactive Stats Ribbon with Glowing Counters */}
        <div className="about-stats-ribbon">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="about-stat-box">
                <div className="stat-icon-wrapper">
                  <IconComp size={20} />
                </div>
                <div className="stat-content">
                  <span className="stat-val">{stat.value}</span>
                  <span className="stat-lbl">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* 4 Pillars Glassmorphism Cards Grid */}
        <div className="about-grid">
          {pillars.map((pillar, index) => {
            const PillarIcon = pillar.icon;
            return (
              <div 
                key={index}
                className="about-card" 
                ref={el => itemsRef.current[index] = el}
              >
                <div className="about-card-glow"></div>
                <div className="about-num">{pillar.num}</div>
                
                <div className="about-icon-wrapper">
                  <PillarIcon size={26} />
                </div>
                
                <div className="about-content">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>

                <div className="about-card-badge">
                  <CheckCircle2 size={13} className="badge-check" />
                  <span>ISO Grade Precision</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full About Page */}
        <div className="about-cta-container">
          <Link to="/about" className="btn btn-primary about-profile-btn">
            Discover Our Complete Factory Profile <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
