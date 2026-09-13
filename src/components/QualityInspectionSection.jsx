import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Search, 
  Compass, 
  Flame, 
  Eye, 
  Maximize2, 
  FileText
} from 'lucide-react';

const qualityStages = [
  {
    step: '01',
    title: 'Incoming Material Inspection',
    desc: 'Verification of mill test certificates (MTC), plate thickness tolerances, and structural steel metallurgy.',
    icon: Search
  },
  {
    step: '02',
    title: 'Fit-up & Edge Preparation',
    desc: 'Beveling, root gap inspection, and squareness verification of casing panels before active welding.',
    icon: Compass
  },
  {
    step: '03',
    title: 'Welding & Fabrication',
    desc: 'Continuous fillet and butt welding using qualified WPS procedures to ensure airtight casing integrity.',
    icon: Flame
  },
  {
    step: '04',
    title: 'Visual Inspection',
    desc: '100% surface examination for porosity, undercut, slag inclusions, and spatter removal.',
    icon: Eye
  },
  {
    step: '05',
    title: 'Dimensional Inspection',
    desc: 'CNC tube sheet hole diameter verification, diagonal squareness, and hopper outlet flange alignment.',
    icon: Maximize2
  },
  {
    step: '06',
    title: 'Assembly Inspection',
    desc: 'Trial fitment of access doors, dampers, cage locking collars, and compressed air manifold alignment.',
    icon: ShieldCheck
  },
  {
    step: '07',
    title: 'Final Inspection & Paint',
    desc: 'Surface preparation, primer coating, DFT measurement, and exterior industrial finish inspection.',
    icon: CheckCircle2
  },
  {
    step: '08',
    title: 'Quality Documentation',
    desc: 'Compilation of inspection reports, dimensional logs, motor test certificates, and dispatch documentation.',
    icon: FileText
  }
];

const QualityInspectionSection = () => {
  return (
    <section 
      className="light-graphic-dots"
      style={{
        backgroundColor: '#f8fafc',
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
            color: '#065f46',
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            padding: '6px 18px',
            borderRadius: '999px',
            textTransform: 'uppercase',
            marginBottom: '12px',
            boxShadow: '0 2px 8px rgba(16, 185, 129, 0.1)'
          }}>
            <ShieldCheck size={14} style={{ color: '#059669' }} /> FABRICATION ASSURANCE &amp; QUALITY CONTROL
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '800',
            color: '#0f172a',
            lineHeight: '1.2',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            Quality &amp;{' '}
            <span style={{
              background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Inspection Process
            </span>
          </h2>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#475569'
          }}>
            Quality is incorporated throughout the engineering, fabrication and inspection process. Every baghouse casing, hopper, and tube sheet undergoes systematic staged inspection prior to dispatch.
          </p>
        </div>

        {/* 8-Stage Inspection Sequence with Emerald & Amber Badges on White Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '3rem'
        }}>
          {qualityStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isEven = idx % 2 === 0;
            const accentColor = isEven ? '#059669' : '#d97706';
            const accentBg = isEven ? '#ecfdf5' : '#fffbeb';
            const accentBorder = isEven ? '#a7f3d0' : '#fde68a';

            return (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 18px -2px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = accentColor;
                  e.currentTarget.style.boxShadow = '0 12px 28px -4px rgba(0, 0, 0, 0.09)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 18px -2px rgba(0, 0, 0, 0.05)';
                }}
              >
                {/* Top Color Accent Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3.5px',
                  background: accentColor
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: accentBg,
                    border: `1px solid ${accentBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: accentColor
                  }}>
                    <Icon size={20} />
                  </div>

                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    color: accentColor,
                    background: accentBg,
                    border: `1px solid ${accentBorder}`,
                    padding: '3px 12px',
                    borderRadius: '999px'
                  }}>
                    STAGE {stage.step}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.12rem',
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '8px'
                }}>
                  {stage.title}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  lineHeight: '1.55',
                  color: '#64748b',
                  margin: 0,
                  flex: 1
                }}>
                  {stage.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quality Assurance Bottom Strip on White Card */}
        <div style={{
          textAlign: 'center',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: '22px 30px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '28px',
          boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.94rem', fontWeight: '600' }}>
            <CheckCircle2 size={18} style={{ color: '#059669' }} />
            <span>100% Casing Airtightness Guarantee</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.94rem', fontWeight: '600' }}>
            <CheckCircle2 size={18} style={{ color: '#059669' }} />
            <span>Certified Material Test Reports (MTC)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontSize: '0.94rem', fontWeight: '600' }}>
            <CheckCircle2 size={18} style={{ color: '#d97706' }} />
            <span>Statutory CPCB Emission Compliance (&lt;10 mg/Nm³)</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QualityInspectionSection;
