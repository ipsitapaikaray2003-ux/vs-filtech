import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  PhoneCall,
  Layers,
  Cpu,
  Factory,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Authentic Assets
import factoryPlantImg from '../assets/factory_bagfilter_plant_hd.jpg';
import baghouseImg from '../assets/hero_baghouse.jpg';
import slideNew1 from '../assets/slide_new_1.png';
import dustCollectorSys from '../assets/dust_collector_system.webp';
import indoorBaghouse from '../assets/client_service_indoor_baghouse.jpg';
import multiHopper from '../assets/client_service_multi_hopper.jpg';

import filterBagHd from '../assets/filter_bag_hd.jpg';
import filterBagMain from '../assets/filter_bag_main.jpg';
import ppLineup from '../assets/pp_lineup.jpg';
import highTempBags from '../assets/high_temp_bags_hd.jpg';
import pleatedBag from '../assets/pleated_filter_bag.jpeg';

import cageWebp from '../assets/filter_cage.webp';
import metalVenturi from '../assets/metal_venturi.jpg';
import casingFab from '../assets/client_service_casing_fabrication.jpg';

import solenoidWebp from '../assets/solenoid_valve.webp';
import pipingControl from '../assets/client_service_piping_control.jpg';
import dpTransmitter from '../assets/dp_transmitter_product.jpg';
import pressureSwitch from '../assets/pressure_switch_product.jpg';

import controlPanelMcc from '../assets/control_panel_mcc_product.jpg';
import panelImg3 from '../assets/slide_new_3.png';
import panelImg2 from '../assets/slide_new_2.jpg';

const galleryItems = [
  // 1. Pulse Jet Bag Filter
  {
    id: 1,
    category: 'Pulse Jet bag filter',
    title: 'Turnkey Pulse Jet Baghouse Plant',
    desc: 'Heavy-duty industrial pulse jet bag filter system with continuous online compressed air cleaning.',
    src: factoryPlantImg,
    tag: 'Pulse Jet Bag Filter'
  },
  {
    id: 2,
    category: 'Pulse Jet bag filter',
    title: 'High-Capacity Industrial Baghouse',
    desc: 'Multi-compartment pulse jet dust collector installed for cement kiln dust extraction.',
    src: baghouseImg,
    tag: 'Pulse Jet Bag Filter'
  },
  {
    id: 3,
    category: 'Pulse Jet bag filter',
    title: 'Heavy Industry Baghouse Fabrication',
    desc: 'Custom-fabricated structural bag filter casing engineered for high-temperature flue gases.',
    src: slideNew1,
    tag: 'Pulse Jet Bag Filter'
  },
  {
    id: 4,
    category: 'Pulse Jet bag filter',
    title: 'Compact Industrial Dust Collector',
    desc: 'Modular dust collector system for localized grinding and pneumatic transfer extraction.',
    src: dustCollectorSys,
    tag: 'Pulse Jet Bag Filter'
  },
  {
    id: 5,
    category: 'Pulse Jet bag filter',
    title: 'Indoor Baghouse Extraction System',
    desc: 'In-plant dust collection baghouse with acoustic enclosure and clean air recirculation.',
    src: indoorBaghouse,
    tag: 'Pulse Jet Bag Filter'
  },
  {
    id: 6,
    category: 'Pulse Jet bag filter',
    title: 'Multi-Hopper Continuous Dust Extraction',
    desc: 'Multiple pyramid hoppers fitted with rotary airlocks and continuous screw conveyors.',
    src: multiHopper,
    tag: 'Pulse Jet Bag Filter'
  },

  // 2. Filter Bags
  {
    id: 7,
    category: 'Filter bags',
    title: 'PTFE Membrane Woven Filter Bags',
    desc: 'High-efficiency micro-porous PTFE laminated membrane filter bags for <5 mg/Nm³ emission limits.',
    src: filterBagHd,
    tag: 'Filter Bags'
  },
  {
    id: 8,
    category: 'Filter bags',
    title: 'Precision Needlefelt Filter Media',
    desc: 'Hydrophobic & oleophobic treated polyester needlefelt filter bags for moisture resistance.',
    src: filterBagMain,
    tag: 'Filter Bags'
  },
  {
    id: 9,
    category: 'Filter bags',
    title: 'Polypropylene Chemical Filter Bags',
    desc: 'Acid & alkali resistant polypropylene felt bags for chemical, fertilizer, and wet applications.',
    src: ppLineup,
    tag: 'Filter Bags'
  },
  {
    id: 10,
    category: 'Filter bags',
    title: 'High-Temperature Nomex / Aramid Bags',
    desc: 'Heat-resistant Aramid/Nomex and PPS filter bags operating continuously up to 240°C.',
    src: highTempBags,
    tag: 'Filter Bags'
  },
  {
    id: 11,
    category: 'Filter bags',
    title: 'Pleated Compact Filter Bags',
    desc: 'Extended surface area pleated filter cartridges replacing traditional bags to double airflow capacity.',
    src: pleatedBag,
    tag: 'Filter Bags'
  },

  // 3. Cages
  {
    id: 12,
    category: 'Cages',
    title: 'Multi-Wire Filter Support Cages',
    desc: 'Heavy-duty 12 to 24 wire structural support cages in galvanized and stainless steel.',
    src: cageWebp,
    tag: 'Cages & Venturi'
  },
  {
    id: 13,
    category: 'Cages',
    title: 'Aerodynamic Spun & Cast Venturi',
    desc: 'Integral venturi nozzles welded to cage collars for supersonic expansion of pulse air bursts.',
    src: metalVenturi,
    tag: 'Cages & Venturi'
  },
  {
    id: 14,
    category: 'Cages',
    title: 'Cage Fabrication & Tube Sheet Fitment',
    desc: 'CNC automated cage welding ensuring exact outer diameter tolerances and zero burrs.',
    src: casingFab,
    tag: 'Cages & Venturi'
  },

  // 4. Solenoid Valves
  {
    id: 15,
    category: 'Solenoid Valves',
    title: 'High-Flow Pulse Solenoid Valves',
    desc: 'Fast-response 1.5" & 2" diaphragm pulse valves for compressed air blowpipe headers.',
    src: solenoidWebp,
    tag: 'Solenoid Valves'
  },
  {
    id: 16,
    category: 'Solenoid Valves',
    title: 'Pulse Header Manifold & Valve Array',
    desc: 'Complete assembled pulse air reservoir manifold with pre-piped solenoid valves and blowpipes.',
    src: pipingControl,
    tag: 'Solenoid Valves'
  },
  {
    id: 17,
    category: 'Solenoid Valves',
    title: 'Differential Pressure Pulse Control Transmitter',
    desc: 'High-precision dual-port DP transmitter integrated for demand-based automated pulse valve firing.',
    src: dpTransmitter,
    tag: 'Solenoid Valves'
  },
  {
    id: 18,
    category: 'Solenoid Valves',
    title: 'Compressed Air Header Pressure Switch',
    desc: 'Precision pressure interlock switch monitoring manifold pressure to ensure effective pulse cleaning.',
    src: pressureSwitch,
    tag: 'Solenoid Valves'
  },

  // 5. Control Panels (MCC, HT, LT, VFD, etc.)
  {
    id: 19,
    category: 'Control panels',
    title: 'MCC Dust Collector Automation System',
    desc: 'Motor Control Center (MCC) panel with integrated VFD drives and PLC touchscreen interface.',
    src: controlPanelMcc,
    tag: 'Control Panels (MCC, HT, LT, VFD)'
  },
  {
    id: 20,
    category: 'Control panels',
    title: 'HT & LT Power Distribution Panels',
    desc: 'Heavy-duty industrial LT and HT switchgear panels custom-engineered for dust collector plants.',
    src: panelImg2,
    tag: 'Control Panels (MCC, HT, LT, VFD)'
  },
  {
    id: 21,
    category: 'Control panels',
    title: 'VFD Speed Modulation & PLC Panel',
    desc: 'Variable Frequency Drive panel regulating fan speed according to real-time duct static pressure.',
    src: panelImg3,
    tag: 'Control Panels (MCC, HT, LT, VFD)'
  }
];

const categoryList = [
  'All Equipment',
  'Pulse Jet bag filter',
  'Filter bags',
  'Cages',
  'Solenoid Valves',
  'Control panels ( MCC, HT,LT,VFD, etc)'
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Equipment');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'All Equipment') return true;
    if (activeCategory === 'Control panels ( MCC, HT,LT,VFD, etc)') return item.category === 'Control panels';
    return item.category === activeCategory;
  });

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="gallery-page" style={{ background: 'var(--bg-primary, #070b14)', minHeight: '100vh', paddingTop: '80px', color: '#fff' }}>
      
      {/* Header */}
      <section style={{
        background: 'radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.12) 0%, transparent 65%), #0b1120',
        padding: '5rem 0 3.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            padding: '6px 16px',
            borderRadius: '999px',
            color: '#38bdf8',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem'
          }}>
            <Sparkles size={14} /> INFRASTRUCTURE & INSTALLATION GALLERY
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.15',
            marginBottom: '1.25rem'
          }}>
            Manufacturing & Equipment <span style={{
              background: 'linear-gradient(135deg, #38bdf8 0%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Gallery</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.65',
            color: '#94a3b8',
            marginBottom: '2.5rem'
          }}>
            Explore our state-of-the-art baghouse manufacturing, precision filter media stitching, support cages, pulse solenoid valves, and industrial automation control panels.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center'
          }}>
            {categoryList.map((cat, idx) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '999px',
                    border: isActive ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.12)',
                    background: isActive ? 'rgba(56, 189, 248, 0.22)' : 'rgba(15, 23, 42, 0.65)',
                    color: isActive ? '#38bdf8' : '#cbd5e1',
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 0 15px rgba(56, 189, 248, 0.2)' : 'none'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: '4.5rem 0 6rem' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            color: '#94a3b8',
            fontSize: '0.9rem'
          }}>
            <span>Showing {filteredItems.length} Photographs</span>
            {activeCategory !== 'All Equipment' && (
              <button
                onClick={() => setActiveCategory('All Equipment')}
                style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', textDecoration: 'underline' }}
              >
                View All Categories
              </button>
            )}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(14, 165, 233, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
                }}
              >
                <div style={{ height: '260px', position: 'relative', overflow: 'hidden', background: '#020617' }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />

                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(7, 11, 20, 0.9) 0%, rgba(7, 11, 20, 0.2) 60%, transparent 100%)'
                  }} />

                  {/* Top Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    color: '#38bdf8',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backdropFilter: 'blur(8px)'
                  }}>
                    {item.tag}
                  </div>

                  {/* Zoom Icon Button */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(8px)'
                  }}>
                    <ZoomIn size={16} />
                  </div>

                  {/* Bottom Captions */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '20px'
                  }}>
                    <h3 style={{
                      fontSize: '1.15rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '6px'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '0.84rem',
                      lineHeight: '1.45',
                      color: '#cbd5e1',
                      margin: 0
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(2, 6, 23, 0.95)',
            backdropFilter: 'blur(12px)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px'
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>

          {/* Lightbox Content Container */}
          <div 
            style={{
              maxWidth: '960px',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 5
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              style={{
                maxWidth: '100%',
                maxHeight: '68vh',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            />
            <div style={{
              textAlign: 'center',
              marginTop: '16px',
              maxWidth: '700px'
            }}>
              <span style={{
                display: 'inline-block',
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '3px 12px',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}>
                {filteredItems[lightboxIndex].tag}
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffffff', marginBottom: '6px' }}>
                {filteredItems[lightboxIndex].title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', margin: 0 }}>
                {filteredItems[lightboxIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%)',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1rem' }}>
            Looking for Custom Manufacturing or Installation?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
            We manufacture Pulse Jet Bag Filters, Cages, Filter Bags, and Control Panels with custom dimensions and specifications.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ background: '#fff', color: '#0369a1' }}>
              <PhoneCall size={17} />
              <span>Contact Technical Team</span>
            </Link>
            <a 
              href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20am%20interested%20in%20your%20bag%20filters%20and%20control%20panels."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}
            >
              <span>WhatsApp +91 1234567890</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GalleryPage;
