import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wind, 
  Sparkles, 
  ShieldCheck, 
  Leaf, 
  ArrowRight, 
  Activity, 
  Gauge, 
  CheckCircle2 
} from 'lucide-react';
import './BrandSloganSection.css';

const pillars = [
  {
    icon: ShieldCheck,
    badge: 'STATUTORY COMPLIANCE',
    metric: '< 10',
    unit: 'mg/Nm³',
    title: 'CPCB Clean Air Emission',
    desc: 'Guaranteed stack emission limits strictly complying with CPCB and State environmental norms.',
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.25)'
  },
  {
    icon: Wind,
    badge: 'ULTRA-FINE RECOVERY',
    metric: '99.9',
    unit: '%',
    title: 'High-Purity Air Filtration',
    desc: 'Precision needle-felt and membrane media trapping sub-micron particulates & process fumes.',
    accent: '#10b981',
    glow: 'rgba(16, 185, 129, 0.25)'
  },
  {
    icon: Gauge,
    badge: 'OPTIMIZED ENERGY',
    metric: 'Low ΔP',
    unit: 'Steady Flow',
    title: 'Smart Differential Pressure',
    desc: 'Aerodynamic airflow paths and demand-based pulsing for reduced compressed air demand.',
    accent: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.25)'
  },
  {
    icon: Leaf,
    badge: 'GREEN INDUSTRY',
    metric: '100',
    unit: '% Eco',
    title: 'Zero-Leakage Integrity',
    desc: 'Laser-cut tube sheets, precision venturis, and snap-band cuffs eliminating fugitive emissions.',
    accent: '#a78bfa',
    glow: 'rgba(167, 139, 250, 0.25)'
  }
];

const BrandSloganSection = () => {
  return (
    <section className="brand-slogan-section" aria-label="VS Filtech Clean Air Commitment">
      {/* ── Background Airflow Waves & Ambient Particle Canvas ── */}
      <div className="slogan-bg-canvas" aria-hidden="true">
        <div className="slogan-ambient-orb orb-cyan" />
        <div className="slogan-ambient-orb orb-emerald" />
        <div className="slogan-ambient-orb orb-purple" />
        
        {/* Animated Clean Air Wave Paths (SVG Flowing Currents) */}
        <svg className="slogan-airflow-svg" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path 
            className="airflow-stream stream-1" 
            d="M-100,120 C250,60 500,200 850,140 C1150,80 1350,160 1600,110" 
          />
          <path 
            className="airflow-stream stream-2" 
            d="M-100,280 C200,340 550,180 900,290 C1200,380 1400,240 1600,270" 
          />
          <path 
            className="airflow-stream stream-3" 
            d="M-100,440 C300,380 600,490 950,420 C1250,360 1450,450 1600,430" 
          />
        </svg>

        {/* Floating Luminous Micro-Particles */}
        <div className="clean-air-particles">
          <span className="air-particle p1" />
          <span className="air-particle p2" />
          <span className="air-particle p3" />
          <span className="air-particle p4" />
          <span className="air-particle p5" />
          <span className="air-particle p6" />
          <span className="air-particle p7" />
          <span className="air-particle p8" />
        </div>

        {/* Precision Blueprint Dot Grid */}
        <div className="slogan-grid-overlay" />
      </div>

      <div className="container slogan-container">
        {/* ── Central Brand & Animated Slogan Hero ── */}
        <div className="slogan-hero-content">
          {/* Eyebrow Pill */}
          <div className="slogan-eyebrow-pill">
            <span className="slogan-pulse-dot" />
            <Wind size={15} className="slogan-wind-icon" />
            <span>OUR CORE PHILOSOPHY & PROMISE</span>
            <span className="slogan-sparkle-icon">✦</span>
          </div>

          {/* Majestic Brand Name with Back-Glow */}
          <div className="brand-name-wrapper">
            <span className="brand-back-glow" aria-hidden="true">VS FILTECH</span>
            <h2 className="brand-main-title">
              VS <span className="brand-title-accent">FILTECH</span>
            </h2>
          </div>

          {/* Animated Slogan with Sweeping Light Shimmer */}
          <div className="slogan-statement-banner">
            <div className="slogan-shimmer-box">
              <span className="slogan-quote quote-left">“</span>
              <h3 className="slogan-dynamic-text">We Care for Clean Air</h3>
              <span className="slogan-quote quote-right">”</span>
            </div>
            <div className="slogan-underline-beam" />
          </div>

          {/* Narrative Text */}
          <p className="slogan-narrative">
            At <strong>VS Filtech</strong>, clean industrial air isn't just an engineering objective — it is our daily commitment. 
            We design, fabricate, and deliver turnkey <strong>Pulse Jet Bag Filters</strong>, 
            high-temperature filtration solutions, and retrofit systems engineered to protect plant personnel, 
            recover valuable process materials, and keep our skies unpolluted.
          </p>

          {/* Quick CTA Actions */}
          <div className="slogan-action-bar">
            <Link to="/products" className="slogan-btn-explore">
              <span>Explore Clean Air Systems</span>
              <ArrowRight size={17} />
            </Link>
            <Link to="/contact" className="slogan-btn-quote">
              <Activity size={16} />
              <span>Request Emission Sizing</span>
            </Link>
          </div>
        </div>

        {/* ── 4 Premium Animated Clean Air Pillar Cards ── */}
        <div className="slogan-pillars-grid">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="slogan-pillar-card"
                style={{ '--pillar-accent': item.accent, '--pillar-glow': item.glow }}
              >
                <div className="pillar-card-border-glow" />
                
                <div className="pillar-header">
                  <div className="pillar-icon-box">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <span className="pillar-badge">{item.badge}</span>
                </div>

                <div className="pillar-metric-row">
                  <span className="pillar-metric-val">{item.metric}</span>
                  <span className="pillar-metric-unit">{item.unit}</span>
                </div>

                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-desc">{item.desc}</p>

                <div className="pillar-card-footer">
                  <CheckCircle2 size={13} className="pillar-check" />
                  <span>Engineered Performance</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandSloganSection;
