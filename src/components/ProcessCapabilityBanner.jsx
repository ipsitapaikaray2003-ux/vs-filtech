import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Sliders, Flame, Layers, ArrowRight } from 'lucide-react';

const parameters = [
  {
    step: 'Parameter 01',
    title: 'Air Volume & Static',
    desc: 'Calculated to sustain required hood capture velocities and process draft.',
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd',
    icon: Wind
  },
  {
    step: 'Parameter 02',
    title: 'Dust Characteristics',
    desc: 'Particle size distribution, bulk density, abrasiveness & flowability.',
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
    icon: Sliders
  },
  {
    step: 'Parameter 03',
    title: 'Gas Temperature',
    desc: 'Continuous vs peak surge thermal ratings for fabric media integrity.',
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca',
    icon: Flame
  },
  {
    step: 'Parameter 04',
    title: 'Installation Space',
    desc: 'Footprint constraints, overhead clearance & civil foundation loads.',
    color: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0',
    icon: Layers
  }
];

const ProcessCapabilityBanner = () => {
  return (
    <section 
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '980px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Eyebrow in Royal Blue on Light Background */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#f0f9ff',
            border: '1px solid #bae6fd',
            padding: '6px 18px',
            borderRadius: '999px',
            color: '#0284c7',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            boxShadow: '0 2px 8px rgba(2, 132, 199, 0.1)'
          }}>
            <Sliders size={14} style={{ color: '#0284c7' }} /> PROCESS-DRIVEN FILTRATION ENGINEERING
          </div>

          {/* Main Statement */}
          <h2 style={{
            fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
            fontWeight: '800',
            color: '#0f172a',
            lineHeight: '1.25',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            Engineered for Your Process.{' '}
            <span style={{ color: '#0284c7' }}>
              Built for Reliable Filtration.
            </span>
          </h2>

          {/* Description */}
          <p style={{
            fontSize: '1.12rem',
            lineHeight: '1.75',
            color: '#475569',
            maxWidth: '840px',
            margin: '0 auto 2.75rem'
          }}>
            VS Filtech provides customised dust collection and filtration solutions designed around process requirements, air volume, dust characteristics, operating temperature and installation conditions.
          </p>

          {/* Process Parameter Highlights — 4 Distinct Colors on Crisp White Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '20px',
            textAlign: 'left'
          }}>
            {parameters.map((param, idx) => {
              const Icon = param.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = param.color;
                    e.currentTarget.style.boxShadow = '0 12px 30px -4px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  {/* Top Color Accent Line */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3.5px',
                    background: param.color
                  }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '0.74rem', color: param.color, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {param.step}
                    </span>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: param.bg,
                      border: `1px solid ${param.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: param.color
                    }}>
                      <Icon size={18} />
                    </div>
                  </div>

                  <div style={{ fontSize: '1.08rem', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                    {param.title}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.5' }}>
                    {param.desc}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '2.75rem' }}>
            <Link 
              to="/engineering" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#b45309',
                fontSize: '0.96rem',
                fontWeight: '700',
                textDecoration: 'none',
                padding: '10px 24px',
                borderRadius: '999px',
                background: '#fffbeb',
                border: '1px solid #fde68a',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 10px rgba(245, 158, 11, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fef3c7';
                e.currentTarget.style.borderColor = '#f59e0b';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fffbeb';
                e.currentTarget.style.borderColor = '#fde68a';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Explore our 6-step engineering methodology</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessCapabilityBanner;
