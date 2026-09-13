import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cpu, Sliders, ArrowRight } from 'lucide-react';

const ProcessCapabilityBanner = () => {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #070b14 0%, #0b1324 100%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '4.5rem 0'
    }}>
      <div className="container">
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            padding: '6px 16px',
            borderRadius: '999px',
            color: '#38bdf8',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem'
          }}>
            <Sliders size={14} /> PROCESS-DRIVEN FILTRATION ENGINEERING
          </div>

          {/* Main Statement */}
          <h2 style={{
            fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.25',
            marginBottom: '1.25rem',
            letterSpacing: '-0.01em'
          }}>
            Engineered for Your Process. Built for Reliable Filtration.
          </h2>

          {/* Description */}
          <p style={{
            fontSize: '1.15rem',
            lineHeight: '1.75',
            color: '#94a3b8',
            maxWidth: '820px',
            margin: '0 auto 2.5rem'
          }}>
            VS Filtech provides customised dust collection and filtration solutions designed around process requirements, air volume, dust characteristics, operating temperature and installation conditions.
          </p>

          {/* Process Parameter Highlights */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            textAlign: 'left'
          }}>
            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '16px 18px'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                Parameter 01
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                Air Volume & Static
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.4' }}>
                Calculated to sustain required hood capture velocities.
              </div>
            </div>

            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '16px 18px'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                Parameter 02
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                Dust Characteristics
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.4' }}>
                Particle size distribution, bulk density & flowability.
              </div>
            </div>

            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '16px 18px'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                Parameter 03
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                Gas Temperature
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.4' }}>
                Continuous vs peak surge ratings for media integrity.
              </div>
            </div>

            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '16px 18px'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                Parameter 04
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                Installation Space
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.4' }}>
                Footprint, head clearance & structural support load.
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link 
              to="/engineering" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#38bdf8',
                fontSize: '0.95rem',
                fontWeight: '700',
                textDecoration: 'none'
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
