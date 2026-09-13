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
  ChevronRight
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Process Data Collection',
    desc: 'Air volume, temperature, dust characteristics, moisture, chemical nature, and site operating conditions.',
    icon: FileSearch
  },
  {
    number: '02',
    title: 'Filtration Design',
    desc: 'Required filter area, air-to-cloth (filtration velocity) ratio, bag dimensions, can velocity, and module arrangement.',
    icon: Layers
  },
  {
    number: '03',
    title: 'Equipment Design',
    desc: 'Structural casing, hopper valley angles, laser-cut tube sheet, cages, inlet/outlet baffles, cleaning system and dust discharge.',
    icon: Compass
  },
  {
    number: '04',
    title: 'Manufacturing',
    desc: 'Precision plate shearing, CNC bending, automated seam welding, sub-assembly alignment and dimensional control.',
    icon: Hammer
  },
  {
    number: '05',
    title: 'Inspection',
    desc: 'Raw material verification, fit-up inspection, welding checks, dimensional verification and documentation.',
    icon: ClipboardCheck
  },
  {
    number: '06',
    title: 'Delivery & Support',
    desc: 'Carefully crated dispatch, structural erection support, commissioning assistance, and performance verification.',
    icon: Truck
  }
];

const EngineeringApproachSection = () => {
  return (
    <section style={{
      background: '#040711',
      padding: '5.5rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '820px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            color: '#38bdf8',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            SYSTEMATIC METHODOLOGY
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.2',
            marginBottom: '1.25rem'
          }}>
            Engineering Based on Process Requirements
          </h2>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#94a3b8'
          }}>
            A dust collector cannot be selected only on air volume. Process conditions, dust characteristics, temperature, moisture, particle size, filtration velocity, pressure drop and cleaning requirements all influence the final design.
          </p>
        </div>

        {/* 6-Step Visual Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8'
                  }}>
                    <Icon size={22} />
                  </div>

                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: '800',
                    color: 'rgba(56, 189, 248, 0.5)',
                    letterSpacing: '1px'
                  }}>
                    {step.number}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '10px'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.6',
                  color: '#94a3b8',
                  margin: 0,
                  flex: 1
                }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div style={{
          textAlign: 'center',
          background: 'rgba(15, 23, 42, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '14px',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <span style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
            Need preliminary air-to-cloth ratio and filter sizing for your plant?
          </span>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link 
              to="/engineering" 
              className="btn btn-outline"
              style={{ padding: '8px 18px', fontSize: '0.88rem' }}
            >
              <span>Read Full Engineering Process</span>
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.88rem' }}
            >
              <span>Submit Process Data</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringApproachSection;
