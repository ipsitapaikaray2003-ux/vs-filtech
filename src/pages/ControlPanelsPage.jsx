import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, CheckCircle2, Zap } from 'lucide-react';
import slide2 from '../assets/slide_new_2.jpg';

const components = [
  'Sequential Timers (Microprocessor Based)',
  'Solenoid Valves (Pulse Valves)',
  'Differential Pressure Transmitters',
  'Pressure Switches',
  'Vibrometers',
  'Hopper Level Sensors',
  'Rotary Air Locks (RAL)',
  'Screw Conveyor Controls'
];

const ControlPanelsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page" style={{ background: 'var(--bg-primary)', paddingBottom: '80px' }}>
      <section style={{ background: 'var(--bg-secondary)', padding: '120px 0 60px', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ color: 'var(--accent-secondary)', fontWeight: '600', letterSpacing: '2px', fontSize: '14px', marginBottom: '15px' }}>
                Automation & Control for Dust Collection Systems
              </div>
              <h1 style={{ color: 'var(--text-primary)', fontSize: '3.5rem', marginBottom: '20px', lineHeight: '1.2' }}>
                Control <span style={{ color: 'var(--accent-secondary)' }}>Panels</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '15px' }}>
                VS Filtech & Control Panels Systems also provides electrical control panels for dust collection and filtration equipment.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px' }}>
                Our control systems can be designed to provide automatic operation and monitoring of the bag filter system.
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <Link to="/contact" className="btn btn-primary">
                  Request Automation Audit <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <img src={slide2} alt="Control Panels" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <Zap size={48} style={{ color: 'var(--accent-secondary)', margin: '0 auto 20px' }} />
            <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '15px' }}>Typical Control Functions</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              Control panels can be customized to perform the following functions based on your process requirements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              'Pulse-jet sequence control', 'Solenoid valve operation', 'Differential pressure monitoring',
              'Timer-based cleaning', 'Auto/manual operation', 'Fan control',
              'Rotary airlock control', 'Alarm indication', 'Interlocking',
              'Emergency stop', 'Fault indication'
            ].map((comp, idx) => (
              <div key={idx} style={{ background: '#fff', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                <CheckCircle2 size={24} style={{ color: 'var(--accent-secondary)', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-primary)', fontWeight: '500', fontSize: '1.1rem' }}>{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ControlPanelsPage;
