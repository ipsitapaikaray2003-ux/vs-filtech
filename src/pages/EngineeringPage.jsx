import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSearch, 
  Layers, 
  Compass, 
  Hammer, 
  ClipboardCheck, 
  Truck, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import engineeringBg from '../assets/factory_bagfilter_plant_hd.jpg';
import casingImg from '../assets/client_service_casing_fabrication.jpg';
import pipingImg from '../assets/client_service_piping_control.jpg';

const engineeringSteps = [
  {
    step: '01',
    title: 'Process Data Collection',
    lead: 'Air volume, operating temperature, dust characteristics, and installation conditions.',
    details: [
      'Measurement of actual volumetric flow (m³/hr or CFM) and operating static pressure.',
      'Analysis of particulate bulk density, particle size distribution, moisture, and abrasiveness.',
      'Flue gas chemistry assessment (acid dew point, SOx, NOx, moisture percentage).',
      'Site constraints evaluation: available footprint, ceiling headroom, crane access, and wind load.'
    ]
  },
  {
    step: '02',
    title: 'Filtration Design',
    lead: 'Filter area, air-to-cloth ratio, bag dimensions, and compartment arrangement.',
    details: [
      'Selection of design filtration velocity (Air-to-Cloth ratio) specific to process dust.',
      'Determination of total net and gross filtration area required for continuous service.',
      'Bag diameter (120mm to 165mm) and length (1.5m to 8.0m) optimization.',
      'Can velocity calculation to prevent dislodged dust from re-entraining during pulsing cycles.'
    ]
  },
  {
    step: '03',
    title: 'Equipment Design',
    lead: 'Housing, hopper, tube sheet, cages, inlet/outlet, cleaning system, and dust discharge.',
    details: [
      'Structural design of 4mm-6mm casing plates reinforced with external rolled channels.',
      'Hopper valley angle design (minimum 60°) to guarantee free-flow dust evacuation.',
      'Laser-cut tube sheet with calibrated snap-band seal tolerances for zero particulate leakage.',
      'High-speed pilot diaphragm solenoid valves, supersonic venturi profiles, and compressed air headers.'
    ]
  },
  {
    step: '04',
    title: 'Manufacturing',
    lead: 'Fabrication, assembly, and strict dimensional control.',
    details: [
      'CNC laser plate cutting, hydraulic press brake forming, and precision jigging.',
      'Sub-assembly alignment of hopper cones, casing modules, clean-air plenum roof, and walk-in doors.',
      'Automated multi-needle stitching for fabric filter bags and robotic welding for support cages.',
      'Airtight seal testing and surface grit blasting prior to primer application.'
    ]
  },
  {
    step: '05',
    title: 'Inspection',
    lead: 'Visual, dimensional, welding, and comprehensive quality documentation.',
    details: [
      'Incoming raw material inspection with Mill Test Certificate (MTC) verification.',
      'Fit-up squareness, root opening, and weld seam integrity inspection.',
      'Dimensional verification of tube sheet hole diameters, pitch spacing, and flange drillings.',
      'Compilation of inspection reports, trial fitment records, and dispatch release documents.'
    ]
  },
  {
    step: '06',
    title: 'Delivery & Support',
    lead: 'Supply, installation support, and commissioning assistance as applicable.',
    details: [
      'Careful section-wise packing with protective timber crating and lifting lug verification.',
      'On-site erection supervision to ensure proper gasket sealing and structural alignment.',
      'Bag & cage installation oversight ensuring snap-bands seat securely without fabric chafing.',
      'Differential pressure calibration, sequential pulse timer tuning, and handover testing.'
    ]
  }
];

const EngineeringPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="engineering-page" style={{ background: '#0a1628', minHeight: '100vh', paddingTop: '80px', color: '#ffffff' }}>
      
      {/* Hero Header */}
      <section style={{
        position: 'relative',
        background: `linear-gradient(180deg, rgba(10, 22, 40, 0.9) 0%, rgba(7, 14, 26, 0.98) 100%), url(${engineeringBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5.5rem 0 4rem',
        borderBottom: '1px solid rgba(56, 189, 248, 0.15)'
      }}>
        {/* Engineering CAD Grid Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(14, 165, 233, 0.12)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            padding: '6px 18px',
            borderRadius: '999px',
            color: '#38bdf8',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            boxShadow: '0 2px 10px rgba(14, 165, 233, 0.15)'
          }}>
            <Sparkles size={14} style={{ color: '#38bdf8' }} /> PROCESS-DRIVEN FILTRATION DESIGN
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.18',
            marginBottom: '1.5rem'
          }}>
            Engineering Based on <br />
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8 0%, #60a5fa 50%, #93c5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Process Requirements</span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.7',
            color: '#cbd5e1',
            maxWidth: '820px',
            margin: '0 auto 2.5rem'
          }}>
            A dust collector cannot be selected only on air volume. Process conditions, dust characteristics, temperature, moisture, particle size, filtration velocity, pressure drop and cleaning requirements all influence the final design.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-amber" style={{ padding: '12px 28px', fontSize: '0.95rem', borderRadius: '10px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>Submit Process Sizing Data</span>
              <ArrowRight size={16} />
            </Link>
            <a 
              href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20would%20like%20to%20discuss%20engineering%20sizing%20for%20a%20dust%20collection%20system."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                padding: '12px 22px',
                fontSize: '0.95rem',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38bdf8',
                background: 'rgba(14, 165, 233, 0.1)',
                borderRadius: '10px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>WhatsApp Technical Desk</span>
            </a>
          </div>

        </div>
      </section>

      {/* 6-Step In-Depth Process Breakdown */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#070e1a' }}>
        <div className="container" style={{ maxWidth: '1040px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              END-TO-END EXECUTION LIFECYCLE
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', fontWeight: '800', color: '#ffffff' }}>
              Our 6-Step Engineering Approach
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {engineeringSteps.map((step, idx) => {
              const colors = [
                { border: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8' },
                { border: '#818cf8', bg: 'rgba(129, 140, 248, 0.15)', text: '#818cf8' },
                { border: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8' },
                { border: '#60a5fa', bg: 'rgba(96, 165, 250, 0.15)', text: '#60a5fa' },
                { border: '#2dd4bf', bg: 'rgba(45, 212, 191, 0.15)', text: '#2dd4bf' },
                { border: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8' }
              ];
              const theme = colors[idx % colors.length];

              return (
                <div 
                  key={idx}
                  style={{
                    background: '#0f2040',
                    border: '1px solid rgba(56, 189, 248, 0.16)',
                    borderRadius: '18px',
                    padding: '32px 28px',
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '24px',
                    alignItems: 'start',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                    borderLeft: `4px solid ${theme.border}`
                  }}
                >
                  {/* Number Badge */}
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: theme.bg,
                    border: `1px solid ${theme.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.text,
                    fontSize: '1.4rem',
                    fontWeight: '800'
                  }}>
                    {step.step}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: theme.text, fontWeight: '600', marginBottom: '16px' }}>
                      {step.lead}
                    </p>
                    
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {step.details.map((d, dIdx) => (
                        <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                          <CheckCircle2 size={16} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '4px' }} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Engineering Parameters Philosophy */}
      <section style={{ padding: '5rem 0', background: '#0a1628', borderTop: '1px solid rgba(56, 189, 248, 0.12)' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div style={{
            background: '#0f2040',
            border: '1px solid rgba(56, 189, 248, 0.22)',
            borderRadius: '20px',
            padding: '40px 36px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)'
          }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              Why Process Conditions Dictate System Sizing
            </h3>

            <p style={{ fontSize: '1.02rem', lineHeight: '1.75', color: '#cbd5e1', marginBottom: '20px' }}>
              Two installations handling identical 50,000 m³/hr air volume will require completely different baghouses if one operates on dry cement dust at 70°C and the other operates on moisture-laden coal boiler flue gas at 180°C.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '28px' }}>
              <div style={{ background: '#0a1628', padding: '18px', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.16)', borderTop: '3px solid #38bdf8' }}>
                <div style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>Air-to-Cloth Ratio</div>
                <div style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.55' }}>Conservative filtration velocity prevents fine dust from embedding permanently into fabric pores.</div>
              </div>

              <div style={{ background: '#0a1628', padding: '18px', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.16)', borderTop: '3px solid #60a5fa' }}>
                <div style={{ color: '#60a5fa', fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>Can Velocity Distribution</div>
                <div style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.55' }}>Controlled upward gas speed inside the housing ensures pulsed dust drops straight into hoppers.</div>
              </div>

              <div style={{ background: '#0a1628', padding: '18px', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.16)', borderTop: '3px solid #38bdf8' }}>
                <div style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>Dew Point Margin</div>
                <div style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.55' }}>Thermal insulation and hopper heating prevent acid condensation and caked bag blindness.</div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link to="/contact" className="btn-amber" style={{ padding: '12px 32px', display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '10px', textDecoration: 'none' }}>
                <span>Consult Our Engineers on Your Application</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default EngineeringPage;
