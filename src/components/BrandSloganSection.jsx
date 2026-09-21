import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wind, 
  ArrowRight, 
  Activity 
} from 'lucide-react';
import logoDark from '../assets/logo_dark_theme.png';
import './BrandSloganSection.css';

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

          {/* Official Brand Logo with 'We Care for Clean Air' Slogan */}
          <div className="slogan-brand-logo-wrapper">
            <img 
              src={logoDark} 
              alt="VS Filtech - We Care for Clean Air" 
              className="slogan-brand-logo-img" 
            />
          </div>

          {/* Clean Air Glow Beam Divider */}
          <div className="slogan-underline-beam" />

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
      </div>
    </section>
  );
};

export default BrandSloganSection;
