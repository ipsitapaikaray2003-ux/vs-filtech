import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Play } from 'lucide-react';
import './Hero.css';
import CountUpStat from './CountUpStat';

import slide1 from '../assets/factory_bagfilter_plant_hd.jpg';
import slide2 from '../assets/hero_baghouse.jpg';
import slide3 from '../assets/slide_new_1.png';
import slide4 from '../assets/slide_new_4.jpg';

const slides = [
  {
    badge: 'ENGINEERED AIR FILTRATION & DUST EXTRACTION',
    titleLine1: 'Industrial Dust Collection',
    titleHighlight: '& Filtration',
    titleLine2: 'Solutions',
    subtitle: 'Engineered Pulse Jet Bag Filters, Dust Collection Systems, Retrofit Solutions, Filter Bags, Cages & Control Panel Systems for Industrial Applications.',
    primaryLink: '/contact',
    primaryText: 'GET A QUOTATION',
    secondaryLink: '/products',
    secondaryText: 'VIEW PRODUCTS',
    image: slide1
  },
  {
    badge: 'PROCESS-SPECIFIC SYSTEMS',
    titleLine1: 'Custom-Engineered',
    titleHighlight: 'Pulse Jet',
    titleLine2: 'Bag Filters',
    subtitle: 'Online and offline pulse jet bag filter systems designed around air volume, operating temperature, dust characteristics and CPCB emission compliance.',
    primaryLink: '/contact',
    primaryText: 'GET A QUOTATION',
    secondaryLink: '/products',
    secondaryText: 'VIEW PRODUCTS',
    image: slide2
  },
  {
    badge: 'BAG FILTER RETROFIT SOLUTIONS',
    titleLine1: 'Existing Baghouse',
    titleHighlight: 'Retrofit & Upgrade',
    titleLine2: 'Services',
    subtitle: 'Enhance filtration area, lower differential pressure, and improve pulse cleaning performance without replacing the complete installation.',
    primaryLink: '/contact',
    primaryText: 'GET A QUOTATION',
    secondaryLink: '/retrofit',
    secondaryText: 'VIEW RETROFIT SERVICES',
    image: slide3
  }
];

const stats = [
  { label: 'CPCB Emission Norms', prefix: '< ', end: 10, suffix: ' mg/Nm³', decimals: 0 },
  { label: 'Custom Solutions', end: 100, suffix: '%', decimals: 0 },
  { label: 'Filtration Efficiency', end: 99.9, suffix: '%', decimals: 1 },
  { label: 'Technical Support', end: 24, suffix: '/7', decimals: 0 }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const prev = () => setCurrent(p => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent(p => (p + 1) % slides.length);

  return (
    <section className="hero" aria-label="Hero Slider">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`hero-slide${idx === current ? ' active' : ''}`}
          aria-hidden={idx !== current}
        >
          <img src={slide.image} alt={slide.titleHighlight} className="hero-slide-img" loading={idx === 0 ? 'eager' : 'lazy'} />
          <div className="hero-overlay" />

          {idx === current && (
            <div className="container hero-container">
              <div key={current} className="hero-inner">
                <div className="hero-badge">
                  <Sparkles size={13} />
                  <span>{slide.badge}</span>
                </div>

                <h1 className="hero-title">
                  {slide.titleLine1}{' '}
                  <span className="hero-title-highlight">{slide.titleHighlight}</span>{' '}
                  {slide.titleLine2}
                </h1>

                <p className="hero-subtitle">{slide.subtitle}</p>

                <div className="hero-buttons">
                  <Link to={slide.primaryLink} className="hero-btn-primary">
                    <span>{slide.primaryText}</span>
                    <ArrowRight size={17} />
                  </Link>
                  <Link to={slide.secondaryLink} className="hero-btn-secondary">
                    <span>{slide.secondaryText}</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Arrows */}
      <button type="button" className="hero-arrow hero-arrow-left" onClick={prev} aria-label="Previous">
        <ChevronLeft size={22} />
      </button>
      <button type="button" className="hero-arrow hero-arrow-right" onClick={next} aria-label="Next">
        <ChevronRight size={22} />
      </button>


      {/* Stats Bar */}
      <div className="hero-stats-bar">
        <div className="container">
          <div className="hero-stats-inner">
            {stats.map((s, idx) => (
              <div key={idx} className="hero-stat-col">
                <span className="hero-stat-val">
                  <CountUpStat prefix={s.prefix || ''} end={s.end} decimals={s.decimals} suffix={s.suffix} />
                </span>
                <span className="hero-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
