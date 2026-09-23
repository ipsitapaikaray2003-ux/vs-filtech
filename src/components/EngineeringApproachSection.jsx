import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSearch, 
  Layers, 
  Compass, 
  Hammer, 
  ClipboardCheck, 
  Truck, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import crystalClearPlantBg from '../assets/crystal_clear_plant_bg.jpg';
import './EngineeringApproachSection.css';

const steps = [
  {
    number: '01',
    title: 'Process Data Collection',
    desc: 'Air volume, operating temperature, dust characteristics, moisture, chemistry, and site constraints.',
    icon: FileSearch,
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd'
  },
  {
    number: '02',
    title: 'Filtration Design',
    desc: 'Filtration area, air-to-cloth (velocity) ratio, bag dimensions, can velocity, and module layout.',
    icon: Layers,
    color: '#0ea5e9',
    bg: '#f0f9ff',
    border: '#bae6fd'
  },
  {
    number: '03',
    title: 'Equipment Design',
    desc: 'Structural casing, 60° hopper angles, laser-cut tube sheet, cages, baffles, and pulse cleaning.',
    icon: Compass,
    color: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0'
  },
  {
    number: '04',
    title: 'Manufacturing',
    desc: 'Precision plate shearing, CNC bending, automated seam welding, and dimensional jig control.',
    icon: Hammer,
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd'
  },
  {
    number: '05',
    title: 'Inspection',
    desc: 'MTC raw material check, fit-up inspection, weld checks, leak tests, and documentation.',
    icon: ClipboardCheck,
    color: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0'
  },
  {
    number: '06',
    title: 'Delivery & Support',
    desc: 'Timber crated dispatch, structural erection support, timer tuning, and performance handover.',
    icon: Truck,
    color: '#0d9488',
    bg: '#f0fdfa',
    border: '#99f6e4'
  }
];

const EngineeringApproachSection = () => {
  return (
    <section 
      style={{
        position: 'relative',
        padding: '4.5rem 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        overflow: 'hidden'
      }}
    >
      {/* Blurred Industrial Background Layer */}
      <div 
        style={{
          position: 'absolute',
          top: '-15px',
          left: '-15px',
          right: '-15px',
          bottom: '-15px',
          backgroundImage: `url(${crystalClearPlantBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 38%',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(5px)',
          transform: 'scale(1.03)',
          zIndex: 1
        }}
      />

      {/* Subtle Light Contrast Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.10)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header - Compact Sleek Box */}
        <div style={{ 
          maxWidth: '680px', 
          margin: '0 auto 2.25rem', 
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '18px',
          padding: '1.4rem 1.75rem 1.25rem',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 12px 30px rgba(15, 23, 42, 0.10)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.74rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            color: '#0284c7',
            background: 'rgba(2, 132, 199, 0.10)',
            border: '1px solid rgba(2, 132, 199, 0.30)',
            padding: '4px 14px',
            borderRadius: '999px',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            <Sparkles size={12} style={{ color: '#0284c7' }} /> SYSTEMATIC METHODOLOGY
          </div>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
            fontWeight: '800',
            color: '#0f172a',
            lineHeight: '1.2',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            Engineering Based on{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Process Requirements
            </span>
          </h2>

          <p style={{
            fontSize: '0.94rem',
            lineHeight: '1.55',
            color: '#475569',
            maxWidth: '620px',
            margin: '0 auto'
          }}>
            A dust collector cannot be selected only on air volume. Process conditions, dust characteristics, temperature, moisture, and cleaning requirements influence the design.
          </p>
        </div>

        {/* 6-Step Visual Grid: Exactly 3-3 boxes per line */}
        <div className="engineering-steps-grid">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  borderRadius: '16px',
                  padding: '18px 18px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = step.color;
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.08)';
                }}
              >
                {/* Colored Top Border Indicator */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: step.color
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: step.bg,
                    border: `1px solid ${step.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: step.color
                  }}>
                    <Icon size={18} />
                  </div>

                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: '900',
                    color: step.color,
                    letterSpacing: '0.5px'
                  }}>
                    {step.number}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '6px',
                  lineHeight: '1.3'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '0.84rem',
                  lineHeight: '1.5',
                  color: '#475569',
                  margin: 0,
                  flex: 1
                }}>
                  {step.desc}
                </p>

                {/* Bottom Step Flow Indicator */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '12px',
                  paddingTop: '10px',
                  borderTop: '1px solid #f1f5f9',
                  fontSize: '0.74rem',
                  fontWeight: '700',
                  color: step.color,
                  letterSpacing: '0.02em'
                }}>
                  <span>Step {step.number} of 06</span>
                  <span style={{ color: '#cbd5e1' }}>•</span>
                  <span style={{ color: '#64748b', fontWeight: '500' }}>VS Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact CTA Banner */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          borderRadius: '18px',
          padding: '20px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          boxShadow: '0 12px 30px rgba(15, 23, 42, 0.10)'
        }}>
          <div>
            <div style={{ color: '#0284c7', fontSize: '0.74rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>
              PRECISE PROCESS SIZING
            </div>
            <h3 style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: '800', margin: 0 }}>
              Need filtration velocity and air-to-cloth calculations for your dust stream?
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/engineering" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 22px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
              color: '#ffffff',
              fontSize: '0.88rem',
              fontWeight: '700',
              textDecoration: 'none',
              boxShadow: '0 6px 16px rgba(2, 132, 199, 0.3)',
              transition: 'all 0.25s ease'
            }}>
              <span>Engineering Specs</span>
              <ArrowRight size={14} />
            </Link>

            <a 
              href="tel:+918496978456" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 20px',
                borderRadius: '999px',
                background: '#ffffff',
                border: '1.5px solid #0284c7',
                color: '#0284c7',
                fontSize: '0.88rem',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 2px 10px rgba(2, 132, 199, 0.10)',
                transition: 'all 0.25s ease'
              }}
            >
              <PhoneCall size={14} />
              <span>Contact Support</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringApproachSection;
