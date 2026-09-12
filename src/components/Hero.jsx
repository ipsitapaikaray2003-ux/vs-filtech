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
    badge: 'DESIGN & MANUFACTURER · BAG FILTERS IN INDIA',
    titleLine1: 'Industrial Pulse Jet',
    titleHighlight: 'Bag Filters',
    titleLine2: '& Dust Collectors',
    subtitle: 'Premier manufacturer & turnkey supplier of Pulse Jet Bag Filters, Dust Collectors, ID Fans, Filter Bags, Cages, and complete Air Filtration Systems across India.',
    primaryLink: '/products',
    primaryText: 'Explore Products',
    secondaryLink: '/contact',
    secondaryText: 'Get a Quote',
    image: slide1
  },
  {
    badge: 'COMPLETE FILTRATION SOLUTIONS',
    titleLine1: 'Design, Manufacture',
    titleHighlight: 'Erect & Commission',
    titleLine2: 'End-to-End',
    subtitle: 'From engineering design to site commissioning — we deliver complete dust collection systems customized for your specific process, dust type, and temperature.',
    primaryLink: '/services',
    primaryText: 'Our Services',
    secondaryLink: '/about',
    secondaryText: 'Learn More',
    image: slide2
  },
  {
    badge: 'RETROFIT & UPGRADATION',
    titleLine1: 'Upgrade Your Existing',
    titleHighlight: 'Bag Filter System',
    titleLine2: 'For Better Efficiency',
    subtitle: 'We retrofit existing bag filters, replace aging filter media, upgrade control panels, and optimize your dust collection system for lower emissions and operational costs.',
    primaryLink: '/products',
    primaryText: 'View Products',
    secondaryLink: '/contact',
    secondaryText: 'Request Audit',
    image: slide3
  },
  {
    badge: 'SPARES & ACCESSORIES',
    titleLine1: 'All Bag Filter Spares',
    titleHighlight: 'Under One Roof',
    titleLine2: 'Ready to Supply',
    subtitle: 'Filter bags, cages, solenoid valves, sequential timers, rotary air locks, screw conveyors, and all instrumentation — available for fast delivery across India.',
    primaryLink: '/products',
    primaryText: 'View Spares',
    secondaryLink: '/contact',
    secondaryText: 'Contact Us',
    image: slide4
  }
];

const stats = [
  { label: 'Years Expertise', end: 15, suffix: '+', decimals: 0 },
  { label: 'Industries Served', end: 20, suffix: '+', decimals: 0 },
  { label: 'Custom Solutions', end: 100, suffix: '%', decimals: 0 },
  { label: 'Filtration Efficiency', end: 99.9, suffix: '%', decimals: 1 }
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
                  <CountUpStat end={s.end} decimals={s.decimals} suffix={s.suffix} />
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
