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
import whyVsFiltechBg from '../assets/why_vs_filtech_bg.jpg';
import './WhyVSFiltech.css';

const blocks = [
  {
    icon: Settings,
    title: 'Application-Based Design',
    desc: 'Solutions developed around actual process conditions, gas chemistry, moisture profile, and dust properties.',
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd'
  },
  {
    icon: Layers,
    title: 'Customised Engineering',
    desc: 'Equipment configured to suit individual project requirements, plant headroom, and maintenance access.',
    color: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Inspection',
    desc: 'Rigorous inspection at all stages: raw material MTC, weld seams, dimensional accuracy, and trial assembly.',
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd'
  },
  {
    icon: CheckCircle2,
    title: 'Complete Solutions',
    desc: 'From primary pulse jet filtration, ducting, and ID fans to replacement filter bags, cages, and control panels.',
    color: '#0ea5e9',
    bg: '#f0f9ff',
    border: '#bae6fd'
  },
  {
    icon: RefreshCw,
    title: 'Retrofit Capability',
    desc: 'Modification, capacity enhancement, baghouse upgrades, and turnkey replacement for existing installations.',
    color: '#15803d',
    bg: '#f0fdf4',
    border: '#bbf7d0'
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    desc: 'Dedicated engineering assistance and technical guidance from initial CFM sizing through on-site execution.',
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd'
  }
];

const WhyVSFiltech = () => {
  return (
    <section 
      style={{
        position: 'relative',
        padding: '4.5rem 0',
        backgroundImage: `url(${whyVsFiltechBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderBottom: '1px solid rgba(2, 132, 199, 0.15)',
        overflow: 'hidden'
      }}
    >
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
            <Sparkles size={12} style={{ color: '#0284c7' }} /> CORE VALUE PROPOSITION
          </div>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
            fontWeight: '800',
            color: '#0f172a',
            lineHeight: '1.2',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            Why{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #0284c7 0%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              VS Filtech?
            </span>
          </h2>

          <p style={{
            fontSize: '0.94rem',
            lineHeight: '1.55',
            color: '#475569',
            maxWidth: '620px',
            margin: '0 auto'
          }}>
            We combine practical dust collection engineering with disciplined fabrication and hands-on site support to deliver dependable, high-efficiency filtration systems.
          </p>
        </div>

        {/* 6 Small Compact Value Cards: Exactly 3-3 boxes per line */}
        <div className="why-filtech-grid">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  borderRadius: '16px',
                  padding: '18px 18px 16px',
                  display: 'flex',
                  gap: '14px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.5)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(2, 132, 199, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.08)';
                }}
              >
                {/* Left Blue Accent Bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: '3.5px',
                  background: 'linear-gradient(180deg, #0284c7 0%, #2563eb 100%)'
                }} />

                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  flexShrink: 0,
                  boxShadow: '0 6px 14px rgba(2, 132, 199, 0.3)'
                }}>
                  <Icon size={20} />
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '4px',
                    lineHeight: '1.3'
                  }}>
                    {block.title}
                  </h3>
                  <p style={{
                    fontSize: '0.84rem',
                    lineHeight: '1.5',
                    color: '#475569',
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
