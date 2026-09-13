import React from 'react';
import { 
  CheckCircle2, 
  Settings, 
  ShieldCheck, 
  Layers, 
  RefreshCw, 
  Headphones, 
  Sparkles
} from 'lucide-react';

const blocks = [
  {
    icon: Settings,
    title: 'Application-Based Design',
    desc: 'Solutions developed around actual process conditions, gas chemistry, and dust properties.',
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a'
  },
  {
    icon: Layers,
    title: 'Customised Engineering',
    desc: 'Equipment configured to suit individual project requirements, plant space, and maintenance access.',
    color: '#4f46e5',
    bg: '#eef2ff',
    border: '#c7d2fe'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Inspection',
    desc: 'Inspection at relevant stages of fabrication, welding, dimensional checks, and assembly.',
    color: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0'
  },
  {
    icon: CheckCircle2,
    title: 'Complete Solutions',
    desc: 'From filtration equipment, ducting, and fans to replacement spares, instrumentation, and controls.',
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd'
  },
  {
    icon: RefreshCw,
    title: 'Retrofit Capability',
    desc: 'Modification, capacity enhancement, and replacement solutions for existing installations.',
    color: '#ea580c',
    bg: '#fff7ed',
    border: '#fed7aa'
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    desc: 'Engineering assistance and technical guidance from initial enquiry through site execution.',
    color: '#e11d48',
    bg: '#fff1f2',
    border: '#fecdd3'
  }
];

const WhyVSFiltech = () => {
  return (
    <section 
      className="light-graphic-isometric"
      style={{
        backgroundColor: '#ffffff',
        padding: '5.5rem 0',
        position: 'relative',
        borderBottom: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
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
            marginBottom: '12px',
            boxShadow: '0 2px 8px rgba(245, 158, 11, 0.1)'
          }}>
            <Sparkles size={14} style={{ color: '#d97706' }} /> CORE VALUE PROPOSITION
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '800',
            color: '#0f172a',
            lineHeight: '1.2',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            Why{' '}
            <span style={{
              background: 'linear-gradient(135deg, #d97706 0%, #ea580c 50%, #0284c7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              VS Filtech?
            </span>
          </h2>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#475569'
          }}>
            We combine practical dust collection engineering with disciplined fabrication and hands-on site support to deliver dependable filtration systems.
          </p>
        </div>

        {/* 6 Multi-Colored Blocks on White Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '28px 24px',
                  display: 'flex',
                  gap: '18px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = block.color;
                  e.currentTarget.style.boxShadow = '0 12px 28px -4px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(0, 0, 0, 0.05)';
                }}
              >
                {/* Colored Left Edge Indicator */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: '4px',
                  background: block.color
                }} />

                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: block.bg,
                  border: `1px solid ${block.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: block.color,
                  flexShrink: 0
                }}>
                  <Icon size={22} />
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.18rem',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '8px'
                  }}>
                    {block.title}
                  </h3>
                  <p style={{
                    fontSize: '0.92rem',
                    lineHeight: '1.6',
                    color: '#64748b',
                    margin: 0
                  }}>
                    {block.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyVSFiltech;
