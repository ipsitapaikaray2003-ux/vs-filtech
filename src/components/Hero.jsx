import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import './Hero.css';
import { scrollToSection } from '../utils/scrollUtils';

import slideManufacturing from '../assets/hero_manufacturing.png';
import slide2 from '../assets/slide_new_2.jpg';
import slide3 from '../assets/slide_new_3.png';
import slide4 from '../assets/slide_new_4.jpg';

const slides = [
  {
    badge: 'WELCOME TO VS FILTECH',
    titlePrefix: 'Design & Manufacturer of ',
    titleHighlight: 'Industrial Bag Filters',
    subtitle: 'Custom bag filter stitching, high-temperature thermal media, and zero-leakage filtration systems manufactured in Ghaziabad.',
    primaryLink: '/contact',
    primaryText: 'Get a Quote',
    secondaryLink: '/about',
    secondaryText: 'About Our Factory',
    image: slideManufacturing
  },
  {
    badge: 'HIGH TEMPERATURE SPECIALISTS',
    titlePrefix: 'High Temperature ',
    titleHighlight: 'Filter Bags & Suppliers',
    subtitle: 'Continuous 280°C thermal filtration media from Woven Fiberglass, Nomex, PPS, and PTFE for industrial kilns and boilers.',
    primaryLink: '/products/high-temperature',
    primaryText: 'View High Temp Bags',
    secondaryLink: '/contact',
    secondaryText: 'Request Quote',
    image: slide2
  },
  {
    badge: 'SOLID-LIQUID FILTRATION',
    titlePrefix: 'Polypropylene ',
    titleHighlight: 'Filter Bag Manufacturers',
    subtitle: '1 to 200 micron liquid clarification bags with ultrasonic welded seams and molded collar rings from Ghaziabad.',
    primaryLink: '/products/polypropylene',
    primaryText: 'View Polypropylene Bags',
    secondaryLink: '/contact',
    secondaryText: 'Request Sample',
    image: slide4
  },
  {
    badge: 'STRUCTURAL SUPPORT & ACCESSORIES',
    titlePrefix: 'Heavy-Duty ',
    titleHighlight: 'Filter Cages & Spares',
    subtitle: 'Precision 8 to 24-wire cages and baghouse accessories engineered to eliminate fabric wear and maximize lifespan.',
    primaryLink: '/contact',
    primaryText: 'Contact Us',
    secondaryLink: '/#services',
    secondaryText: 'Our Services',
    image: slide3
  }
];

const stats = [
  { label: 'Filtration Efficiency', value: '>99.5%' },
  { label: 'Thermal Resistance', value: 'Up to 280°C' },
  { label: 'Manufacturing Facility', value: 'Ghaziabad, India' },
  { label: 'Custom Lengths', value: '1m to 12m' }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleHeroLinkClick = (e, link) => {
    if (link && (link.startsWith('/#') || link.startsWith('#'))) {
      const targetId = link.replace('/#', '').replace('#', '');
      e.preventDefault();
      const scrolled = scrollToSection(targetId);
      if (scrolled) {
        window.history.pushState(null, '', `/#${targetId}`);
      }
    }
  };

  return (
    <section className="hero">
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div 
            key={index} 
            className={`hero-slide ${isActive ? 'active' : ''}`}
            aria-hidden={!isActive}
          >
            <img src={slide.image} alt={slide.titleHighlight} className="hero-slide-img" />
            <div className="hero-overlay"></div>
            
            <div className="container hero-container">
              {/* Clean Content Without Box */}
              <div className="hero-content">
                <div className="hero-badge">
                  <Sparkles size={14} className="hero-badge-sparkle" />
                  <span>{slide.badge}</span>
                </div>

                <h1 className="hero-title">
                  <span className="hero-title-white">{slide.titlePrefix.trim()}</span>
                  <span className="hero-title-highlight text-gradient">{slide.titleHighlight}</span>
                </h1>

                <p className="hero-subtitle">{slide.subtitle}</p>

                <div className="hero-buttons">
                  <Link 
                    to={slide.primaryLink} 
                    className="btn hero-btn-main"
                    onClick={(e) => handleHeroLinkClick(e, slide.primaryLink)}
                  >
                    {slide.primaryText} <ArrowRight size={18} style={{ marginLeft: 6 }} />
                  </Link>
                  <Link 
                    to={slide.secondaryLink} 
                    className="btn hero-btn-sub"
                    onClick={(e) => handleHeroLinkClick(e, slide.secondaryLink)}
                  >
                    {slide.secondaryText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Prev / Next Navigation Arrows */}
      <button 
        type="button" 
        className="hero-arrow hero-arrow-left" 
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        type="button" 
        className="hero-arrow hero-arrow-right" 
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>


      {/* Bottom Floating Stats Bar */}
      <div className="hero-stats-bar">
        <div className="container">
          <div className="hero-stats-inner">
            {stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-col">
                <span className="hero-stat-val">{stat.value}</span>
                <span className="hero-stat-lbl">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
