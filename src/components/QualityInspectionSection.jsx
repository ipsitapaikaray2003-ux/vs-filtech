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
  Award,
  FileCheck2,
  Scale,
  Shield,
  Layers,
  Wrench
} from 'lucide-react';
import './QualityInspectionSection.css';

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

const authenticDeliverables = [
  {
    id: 'mtc',
    title: 'Material Test Certificates (MTC)',
    subtitle: 'EN 10204 Type 3.1 & IS 2062',
    desc: 'Complete chemical composition and mechanical tensile test certificates for all steel plates, pipes, structural beams, and filter fabric media.',
    icon: FileCheck2,
    badge: 'Raw Material Traceability'
  },
  {
    id: 'inspection-reports',
    title: 'Inspection Reports',
    subtitle: 'Stage-Wise QA Dossier',
    desc: 'Comprehensive stage-by-stage quality clearance records signed off by qualified QC engineers from incoming plate to final crating.',
    icon: FileText,
    badge: 'Stage QA Clearance'
  },
  {
    id: 'dimensional-inspection',
    title: 'Dimensional Inspection',
    subtitle: 'Laser & Vernier Calibrated Logs',
    desc: 'Point-to-point measurement logs for tube sheet hole pitch tolerances (±0.5 mm), casing diagonal squareness, and hopper flange PCDs.',
    icon: Maximize2,
    badge: 'Tolerance Verifications'
  },
  {
    id: 'visual-inspection',
    title: 'Visual Inspection',
    subtitle: '100% Surface Clearance',
    desc: 'Detailed visual examination report certifying zero porosity, absence of weld undercuts, slag removal, and smooth interior gas-contact surfaces.',
    icon: Eye,
    badge: '100% Surface Checked'
  },
  {
    id: 'welding-inspection',
    title: 'Welding Inspection (WPS / PQR / WPQ)',
    subtitle: 'ASME Sec IX & AWS D1.1 Compliant',
    desc: 'Certified Welding Procedure Specification (WPS), Procedure Qualification Record (PQR), and Welder Performance Qualification (WPQ) records.',
    icon: Flame,
    badge: 'Code Qualified Welding'
  },
  {
    id: 'tpi',
    title: 'Third-Party Inspection (TPI)',
    subtitle: 'TUV, BV, SGS, DNV & Client Agencies',
    desc: 'Full staging, test setup facilitation, and coordination for inspection clearance by international third-party agencies or client deputed inspectors.',
    icon: Award,
    badge: 'Customer & Agency Witness'
  },
  {
    id: 'compliance-docs',
    title: 'Compliance Documentation',
    subtitle: 'CPCB & State Pollution Control Norms',
    desc: 'Statutory compliance declarations certifying guaranteed outlet emission levels (< 10 mg/Nm³ or < 5 mg/Nm³) and noise compliance limits.',
    icon: Shield,
    badge: 'Statutory CPCB Compliant'
  },
  {
    id: 'test-certificates',
    title: 'Test Certificates',
    subtitle: 'Pressure Drop & Dynamic Balance',
    desc: 'Factory Acceptance Test (FAT) certificates: compressed air manifold pneumatic tests, ID fan ISO 1940 dynamic balancing, and motor insulation tests.',
    icon: Scale,
    badge: 'Factory FAT Reports'
  }
];

const QualityInspectionSection = () => {
  return (
    <section 
      style={{
        backgroundColor: '#0a1628',
        padding: '5.5rem 0',
        position: 'relative',
        borderTop: '1px solid rgba(56, 189, 248, 0.12)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.12)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            color: '#38bdf8',
            background: 'rgba(14, 165, 233, 0.12)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            padding: '6px 18px',
            borderRadius: '999px',
            textTransform: 'uppercase',
            marginBottom: '12px',
            boxShadow: '0 2px 10px rgba(14, 165, 233, 0.15)'
          }}>
            <ShieldCheck size={14} style={{ color: '#38bdf8' }} /> FABRICATION ASSURANCE &amp; QUALITY CONTROL
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.2',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            Quality &amp;{' '}
            <span style={{ color: '#38bdf8' }}>
              Inspection Process
            </span>
          </h2>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#94a3b8'
          }}>
            Quality is incorporated throughout the engineering, fabrication, and testing lifecycle. Every baghouse casing, hopper, and tube sheet undergoes systematic staged verification prior to dispatch.
          </p>
        </div>

        {/* 8-Stage Inspection Sequence */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '4.5rem'
        }}>
          {qualityStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isEven = idx % 2 === 0;
            const accentColor = isEven ? '#38bdf8' : '#60a5fa';
            const accentBg = isEven ? 'rgba(56, 189, 248, 0.12)' : 'rgba(96, 165, 250, 0.12)';
            const accentBorder = isEven ? 'rgba(56, 189, 248, 0.35)' : 'rgba(96, 165, 250, 0.35)';

            return (
              <div 
                key={idx}
                style={{
                  background: '#0f2040',
                  border: '1px solid rgba(56, 189, 248, 0.16)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = accentColor;
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(2, 132, 199, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.16)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.25)';
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
                  color: '#ffffff',
                  marginBottom: '8px'
                }}>
                  {stage.title}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  lineHeight: '1.55',
                  color: '#cbd5e1',
                  margin: 0,
                  flex: 1
                }}>
                  {stage.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── AUTHENTIC QUALITY ASSURANCE & DOCUMENTATION DELIVERABLES SECTION ── */}
        <div style={{
          background: 'linear-gradient(180deg, #0f2040 0%, #0c1830 100%)',
          border: '1px solid rgba(56, 189, 248, 0.28)',
          borderRadius: '24px',
          padding: '40px 32px',
          marginBottom: '3rem',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle glow accent */}
          <div style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.75rem',
              fontWeight: '800',
              color: '#38bdf8',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              padding: '4px 14px',
              borderRadius: '999px',
              marginBottom: '10px'
            }}>
              <FileCheck2 size={13} /> DISPATCH DOCUMENTATION DOSSIER
            </div>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em'
            }}>
              Quality Assurance &amp; <span style={{ color: '#38bdf8' }}>Documentation Deliverables</span>
            </h3>
            <p style={{ fontSize: '0.98rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
              Industrial clients receive a comprehensive, verified quality dossier with every equipment delivery. We maintain complete traceability and welcome client and third-party inspection agencies.
            </p>
          </div>

          {/* 8 Deliverables Grid (3 + 3 + 2 centered) */}
          <div className="deliverables-grid">
            {authenticDeliverables.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="deliverable-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8'
                    }}>
                      <ItemIcon size={18} />
                    </div>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      color: '#38bdf8',
                      background: 'rgba(56, 189, 248, 0.08)',
                      border: '1px solid rgba(56, 189, 248, 0.22)',
                      padding: '3px 10px',
                      borderRadius: '999px'
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  <h4 style={{
                    fontSize: '1.02rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '3px',
                    lineHeight: '1.3'
                  }}>
                    {item.title}
                  </h4>

                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    color: '#60a5fa',
                    marginBottom: '8px'
                  }}>
                    {item.subtitle}
                  </span>

                  <p style={{
                    fontSize: '0.84rem',
                    lineHeight: '1.5',
                    color: '#94a3b8',
                    margin: 0,
                    flex: 1
                  }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality Assurance Bottom Strip on Navy Card */}
        <div style={{
          textAlign: 'center',
          background: '#0f2040',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          borderRadius: '16px',
          padding: '22px 30px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '28px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.94rem', fontWeight: '600' }}>
            <CheckCircle2 size={18} style={{ color: '#38bdf8' }} />
            <span>100% Casing Airtightness Guarantee</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.94rem', fontWeight: '600' }}>
            <CheckCircle2 size={18} style={{ color: '#38bdf8' }} />
            <span>Certified Material Test Reports (MTC 3.1)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.94rem', fontWeight: '600' }}>
            <CheckCircle2 size={18} style={{ color: '#60a5fa' }} />
            <span>Statutory CPCB Emission Compliance (&lt;10 mg/Nm³)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.94rem', fontWeight: '600' }}>
            <CheckCircle2 size={18} style={{ color: '#38bdf8' }} />
            <span>Third-Party Inspection (TPI) Ready</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QualityInspectionSection;
