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
  Sparkles
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Process Data Collection',
    desc: 'Air volume, operating temperature, dust particle characteristics, moisture, chemical nature, and site installation conditions.',
    icon: FileSearch,
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd'
  },
  {
    number: '02',
    title: 'Filtration Design',
    desc: 'Required filtration area, air-to-cloth (filtration velocity) ratio, bag dimensions, can velocity, and module arrangement.',
    icon: Layers,
    color: '#7c3aed',
    bg: '#f5f3ff',
    border: '#ddd6fe'
  },
  {
    number: '03',
    title: 'Equipment Design',
    desc: 'Structural casing, hopper valley angles, laser-cut tube sheet, cages, inlet/outlet baffles, cleaning system and dust discharge.',
    icon: Compass,
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a'
  },
  {
    number: '04',
    title: 'Manufacturing',
    desc: 'Precision plate shearing, CNC bending, automated seam welding, sub-assembly alignment and dimensional control.',
    icon: Hammer,
    color: '#ea580c',
    bg: '#fff7ed',
    border: '#fed7aa'
  },
  {
    number: '05',
    title: 'Inspection',
    desc: 'Raw material verification, fit-up inspection, welding checks, dimensional verification and documentation.',
    icon: ClipboardCheck,
    color: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0'
  },
  {
    number: '06',
    title: 'Delivery & Support',
    desc: 'Carefully crated dispatch, structural erection support, commissioning assistance, and performance verification.',
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
        backgroundColor: '#ffffff',
        padding: '5.5rem 0',
        position: 'relative',
        borderBottom: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ maxWidth: '820px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            color: '#b45309',
            background: '#fffbeb',
            border: '1px solid #fde68a',
            padding: '6px 18px',
            borderRadius: '999px',
            textTransform: 'uppercase',
            marginBottom: '14px',
            boxShadow: '0 2px 8px rgba(245, 158, 11, 0.1)'
          }}>
            <Sparkles size={14} style={{ color: '#d97706' }} /> SYSTEMATIC METHODOLOGY
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '800',
            color: '#0f172a',
            lineHeight: '1.2',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            Engineering Based on{' '}
            <span style={{
              background: 'linear-gradient(135deg, #d97706 0%, #ea580c 45%, #0284c7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Process Requirements
            </span>
          </h2>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#475569'
          }}>
            A dust collector cannot be selected only on air volume. Process conditions, dust characteristics, temperature, moisture, particle size, filtration velocity, pressure drop and cleaning requirements all influence the final design.
          </p>
        </div>

        {/* 6-Step Visual Grid with Multi-Color Step Identities on White Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '3.5rem'
        }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = step.color;
                  e.currentTarget.style.boxShadow = '0 16px 36px -4px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(0, 0, 0, 0.05)';
                }}
              >
                {/* Colored Top Border Indicator */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3.5px',
                  background: step.color
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: step.bg,
                    border: `1px solid ${step.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: step.color
                  }}>
                    <Icon size={22} />
                  </div>

                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    color: step.color,
                    letterSpacing: '1px'
                  }}>
                    {step.number}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.24rem',
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '10px'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  margin: 0,
                  flex: 1
                }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner on Off-White Graphic Frame */}
        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '20px',
          padding: '32px 36px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.04)'
        }}>
          <div>
            <div style={{ color: '#b45309', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
              PRECISE PROCESS SIZING
            </div>
            <h3 style={{ color: '#0f172a', fontSize: '1.35rem', fontWeight: '800', margin: 0 }}>
              Need filtration velocity and air-to-cloth calculations for your dust stream?
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/engineering" className="btn-amber" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 26px',
              borderRadius: '999px',
              textDecoration: 'none'
            }}>
              <span>View Full Engineering Details</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '999px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0284c7';
              e.currentTarget.style.color = '#0284c7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#cbd5e1';
              e.currentTarget.style.color = '#0f172a';
            }}
            >
              <span>Request Sizing Verification</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringApproachSection;
