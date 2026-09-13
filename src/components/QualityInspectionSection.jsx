import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Search, 
  Compass, 
  Flame, 
  Eye, 
  Maximize2, 
  FileText,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const qualityStages = [
  {
    step: '01',
    title: 'Incoming Material Inspection',
    desc: 'Verification of mill test certificates (MTC), plate thickness tolerances, and structural steel metallurgy.'
  },
  {
    step: '02',
    title: 'Fit-up & Edge Preparation',
    desc: 'Beveling, root gap inspection, and squareness verification of casing panels before active welding.'
  },
  {
    step: '03',
    title: 'Welding & Fabrication',
    desc: 'Continuous fillet and butt welding using qualified WPS procedures to ensure airtight casing integrity.'
  },
  {
    step: '04',
    title: 'Visual Inspection',
    desc: '100% surface examination for porosity, undercut, slag inclusions, and spatter removal.'
  },
  {
    step: '05',
    title: 'Dimensional Inspection',
    desc: 'CNC tube sheet hole diameter verification, diagonal squareness, and hopper outlet flange alignment.'
  },
  {
    step: '06',
    title: 'Assembly Inspection',
    desc: 'Trial fitment of access doors, dampers, cage locking collars, and compressed air manifold alignment.'
  },
  {
    step: '07',
    title: 'Final Inspection & Paint',
    desc: 'Surface preparation, primer coating, DFT measurement, and exterior industrial finish inspection.'
  },
  {
    step: '08',
    title: 'Quality Documentation',
    desc: 'Compilation of inspection reports, dimensional logs, motor test certificates, and dispatch documentation.'
  }
];

const QualityInspectionSection = () => {
  return (
    <section style={{
      background: '#070b14',
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
            FABRICATION ASSURANCE
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.2',
            marginBottom: '1.25rem'
          }}>
            Quality & Inspection Process
          </h2>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#94a3b8'
          }}>
            Quality is incorporated throughout the engineering, fabrication and inspection process. Every baghouse casing, hopper, and tube sheet undergoes systematic staged inspection prior to dispatch.
          </p>
        </div>

        {/* 8-Stage Inspection Sequence */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '3rem'
        }}>
          {qualityStages.map((stage, idx) => (
            <div 
              key={idx}
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '22px 20px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px'
              }}>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  color: '#38bdf8',
                  background: 'rgba(56, 189, 248, 0.12)',
                  padding: '3px 8px',
                  borderRadius: '6px'
                }}>
                  STAGE {stage.step}
                </span>
                <CheckCircle2 size={16} style={{ color: '#34d399' }} />
              </div>

              <h4 style={{
                fontSize: '1.05rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '8px'
              }}>
                {stage.title}
              </h4>

              <p style={{
                fontSize: '0.85rem',
                lineHeight: '1.5',
                color: '#94a3b8',
                margin: 0
              }}>
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QualityInspectionSection;
