import React from 'react';
import { 
  CheckCircle2, 
  Settings, 
  ShieldCheck, 
  Layers, 
  RefreshCw, 
  Headphones, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const blocks = [
  {
    icon: Settings,
    title: 'Application-Based Design',
    desc: 'Solutions developed around actual process conditions, gas chemistry, and dust properties.'
  },
  {
    icon: Layers,
    title: 'Customised Engineering',
    desc: 'Equipment configured to suit individual project requirements, plant space, and maintenance access.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Inspection',
    desc: 'Inspection at relevant stages of fabrication, welding, dimensional checks, and assembly.'
  },
  {
    icon: CheckCircle2,
    title: 'Complete Solutions',
    desc: 'From filtration equipment, ducting, and fans to replacement spares, instrumentation, and controls.'
  },
  {
    icon: RefreshCw,
    title: 'Retrofit Capability',
    desc: 'Modification, capacity enhancement, and replacement solutions for existing installations.'
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    desc: 'Engineering assistance and technical guidance from initial enquiry through site execution.'
  }
];

const WhyVSFiltech = () => {
  return (
    <section style={{
      background: '#040711',
      padding: '5.5rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        
        <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            color: '#38bdf8',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            CORE VALUE PROPOSITION
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.2',
            marginBottom: '1.25rem'
          }}>
            Why VS Filtech?
          </h2>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#94a3b8'
          }}>
            We combine practical dust collection engineering with disciplined fabrication and hands-on site support to deliver dependable filtration systems.
          </p>
        </div>

        {/* 6 Simple Blocks */}
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
                  background: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px',
                  transition: 'transform 0.25s ease, border-color 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8',
                  flexShrink: 0
                }}>
                  <Icon size={22} />
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.18rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '8px'
                  }}>
                    {block.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: '#94a3b8',
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
