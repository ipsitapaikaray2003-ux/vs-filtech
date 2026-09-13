import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Layers, 
  Flame, 
  Mountain, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Maximize2,
  X
} from 'lucide-react';

import plantHd from '../assets/factory_bagfilter_plant_hd.jpg';
import baghouseImg from '../assets/hero_baghouse.jpg';
import casingImg from '../assets/client_service_casing_fabrication.jpg';
import multiHopperImg from '../assets/client_service_multi_hopper.jpg';
import pipingImg from '../assets/client_service_piping_control.jpg';
import indoorImg from '../assets/client_service_indoor_baghouse.jpg';
import cementImg from '../assets/industry_cement.jpg';
import metalsImg from '../assets/industry_metals.jpg';

const projectsData = [
  {
    id: 1,
    industry: 'Cement & Building Materials',
    title: 'Clinker Cooler & Raw Mill Exhaust Baghouse Plant',
    clientType: 'Large Scale Cement Manufacturing Facility',
    application: 'Capturing abrasive clinker and lime dust from kiln exhaust streams',
    equipmentSupplied: '1,20,000 CFM multi-compartment offline pulse jet bag filter, PTFE membrane bags, 16-wire SS cages, and rotary airlock valves',
    outcome: 'Guaranteed stack emissions < 8 mg/Nm³ with continuous uninterrupted kiln draft',
    image: plantHd
  },
  {
    id: 2,
    industry: 'Aluminium & Non-Ferrous',
    title: 'Dross Processing & Smelter Fume Extraction System',
    clientType: 'Secondary Aluminium Recycling & Ingot Foundry',
    application: 'Dry scrubbing of corrosive chloride and fluoride fumes from melting furnaces',
    equipmentSupplied: '65,000 CFM pulse jet baghouse with lime sorbent injection duct, Ryton (PPS) needlefelt bags, and heavy-duty backward curved ID fan',
    outcome: 'Zero visible chimney plume, full compliance with State Pollution Control Board norms',
    image: baghouseImg
  },
  {
    id: 3,
    industry: 'Steel & Foundry',
    title: 'Induction Furnace Canopy Hood & Bag Filter System',
    clientType: 'Precision Ferrous & Alloy Steel Casting Plant',
    application: 'Capturing high-temperature iron oxide fumes and sparks during charging and tapping',
    equipmentSupplied: 'Multi-stage inline spark arrestor, 45,000 CFM pulse jet dust collector, Nomex (Aramid) high-temp filter bags, and microprocessor timer panel',
    outcome: 'Safe shop-floor ambient working environment with 100% spark extinguishment',
    image: multiHopperImg
  },
  {
    id: 4,
    industry: 'Minerals & Mining',
    title: 'Silica Sand Crushing & Screening Dust Extraction',
    clientType: 'Industrial Quartz & Mineral Processing Plant',
    application: 'High-dust-load suppression across vibrating screens, crushers, and belt conveyors',
    equipmentSupplied: 'Two-stage system: High-efficiency cyclone pre-separator followed by 35,000 CFM modular baghouse with Hardox wear plates',
    outcome: 'Extended fabric bag life by 2.8x by dropping 85% coarse sand in the cyclone pre-cleaner',
    image: casingImg
  },
  {
    id: 5,
    industry: 'Chemical Processing',
    title: 'Pigment & Carbon Powder Containment System',
    clientType: 'Specialty Industrial Chemical Manufacturer',
    application: 'Capturing ultrafine sub-micron chemical dust without cross-batch contamination',
    equipmentSupplied: 'SS304 stainless steel pulse jet baghouse, antistatic stainless-scrim filter bags, and explosion relief burst panels',
    outcome: '100% airtight containment with tool-less top plenum bag inspection',
    image: pipingImg
  },
  {
    id: 6,
    industry: 'General Manufacturing',
    title: 'Centralized Metal Grinding & Shot Blasting Extraction',
    clientType: 'Automotive Component & Machine Tool Fabrication Unit',
    application: 'Indoor extraction from 12 grinding booths and automated shot-blasting tumblers',
    equipmentSupplied: '25,000 CFM compact pleated cartridge dust collector with acoustic attenuation and air recirculation dampers',
    outcome: 'Quiet indoor operation below 75 dBA and reduced heating/cooling energy costs',
    image: indoorImg
  }
];

const categories = ['All Industries', 'Cement & Building Materials', 'Aluminium & Non-Ferrous', 'Steel & Foundry', 'Minerals & Mining', 'Chemical Processing', 'General Manufacturing'];

const ProjectsPage = () => {
  const [selectedCat, setSelectedCat] = useState('All Industries');
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projectsData.filter(p => 
    selectedCat === 'All Industries' || p.industry === selectedCat
  );

  return (
    <div className="projects-page" style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '80px', color: '#0f172a' }}>
      
      {/* Hero Header */}
      <section style={{
        position: 'relative',
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(240, 247, 255, 0.96) 100%), url(${plantHd})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5.5rem 0 4rem',
        borderBottom: '1px solid #e2e8f0'
      }}>
        {/* Engineering CAD Grid Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(2, 132, 199, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 132, 199, 0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(2, 132, 199, 0.1)',
            border: '1px solid rgba(2, 132, 199, 0.3)',
            padding: '6px 18px',
            borderRadius: '999px',
            color: '#0284c7',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem'
          }}>
            <Sparkles size={14} style={{ color: '#0284c7' }} /> FIELD INSTALLATIONS &amp; CASE STUDIES
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
            fontWeight: '800',
            color: '#0f172a',
            lineHeight: '1.18',
            marginBottom: '1.5rem'
          }}>
            Our <span style={{ color: '#0284c7' }}>Projects</span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.7',
            color: '#475569',
            maxWidth: '820px',
            margin: '0 auto 2.5rem'
          }}>
            Representative industrial air filtration projects executed across core manufacturing plants. Every installation is engineered around process airflow, dust chemistry, and plant layout.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCat(cat)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '999px',
                  border: selectedCat === cat ? '1px solid #1d4ed8' : '1px solid #cbd5e1',
                  background: selectedCat === cat ? 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)' : '#ffffff',
                  color: selectedCat === cat ? '#ffffff' : '#334155',
                  fontSize: '0.84rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: selectedCat === cat ? '0 4px 14px rgba(29, 78, 216, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className="light-graphic-blueprint" style={{ padding: '5.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px'
          }}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  borderTop: '3px solid #1d4ed8'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#0284c7';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(2, 132, 199, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.borderTop = '3px solid #1d4ed8';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                }}
              >
                {/* Image */}
                <div 
                  style={{ height: '220px', position: 'relative', overflow: 'hidden', background: '#f1f5f9', cursor: 'pointer' }}
                  onClick={() => setActiveModalProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.4) 0%, transparent 60%)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #0284c7',
                    color: '#1d4ed8',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '0.74rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }}>
                    {project.industry}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', marginBottom: '12px', lineHeight: '1.3' }}>
                    {project.title}
                  </h3>

                  <div style={{ marginBottom: '12px', background: '#f0f7ff', padding: '12px 14px', borderRadius: '10px', border: '1px solid #bae6fd' }}>
                    <span style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '3px' }}>
                      Application:
                    </span>
                    <span style={{ fontSize: '0.86rem', color: '#334155', lineHeight: '1.4' }}>
                      {project.application}
                    </span>
                  </div>

                  <div style={{ marginBottom: '16px', flex: 1 }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '3px' }}>
                      Equipment Supplied:
                    </span>
                    <span style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.5' }}>
                      {project.equipmentSupplied}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.82rem',
                    color: '#059669',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    marginBottom: '18px'
                  }}>
                    <CheckCircle2 size={15} style={{ flexShrink: 0, color: '#059669' }} />
                    <span style={{ fontWeight: '600' }}>{project.outcome}</span>
                  </div>

                  <Link 
                    to="/contact"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 16px',
                      borderRadius: '10px',
                      background: 'rgba(2, 132, 199, 0.08)',
                      border: '1px solid rgba(2, 132, 199, 0.25)',
                      color: '#0284c7',
                      fontSize: '0.86rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#1d4ed8';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(2, 132, 199, 0.08)';
                      e.currentTarget.style.color = '#0284c7';
                    }}
                  >
                    <span>Request Similar Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Fullscreen Photo Inspection Lightbox */}
      {activeModalProject && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(2, 6, 23, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: '#070b14',
              borderRadius: '20px',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1.05rem' }}>
                {activeModalProject.title}
              </div>
              <button 
                type="button"
                onClick={() => setActiveModalProject(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
            
            <div style={{ padding: '16px', background: '#020617', textAlign: 'center' }}>
              <img 
                src={activeModalProject.image} 
                alt={activeModalProject.title} 
                style={{ maxHeight: '65vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '10px' }} 
              />
            </div>

            <div style={{ padding: '16px 20px', background: '#040711', color: '#cbd5e1', fontSize: '0.9rem' }}>
              <strong>Equipment:</strong> {activeModalProject.equipmentSupplied}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectsPage;
