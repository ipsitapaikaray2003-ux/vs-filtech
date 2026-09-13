import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, 
  Wrench, 
  FileUp, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  Layers,
  Settings,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import retrofitBg from '../assets/service_retrofit_hd.jpg';
import baghouseImg from '../assets/hero_baghouse.jpg';
import pleatedImg from '../assets/pleated_filter_bag.jpeg';

const retrofitServices = [
  {
    title: 'Filter Bag Replacement',
    desc: 'Replacement bags in needlefelt Polyester, Nomex, PPS, PTFE, and Fiberglass tailored to existing tubesheet dimensions.'
  },
  {
    title: 'Cage Replacement',
    desc: 'Precision-welded 8, 10, 12, 16, and 24-wire support cages in Galvanized Iron, Mild Steel, SS304, and SS316.'
  },
  {
    title: 'Venturi Replacement',
    desc: 'Cast aluminum and spun metal supersonic venturis designed to amplify reverse-pulse compressed air cleaning energy.'
  },
  {
    title: 'Pulse Valve / Diaphragm Replacement',
    desc: 'Fast-response 3/4" to 3" pulse valves, replacement Buna-N and Viton diaphragms, and pilot repair kits.'
  },
  {
    title: 'Solenoid Valve Replacement',
    desc: 'Direct-acting pilot solenoid valves and integral pulse valve coils (24V DC, 110V AC, 230V AC) for all makes.'
  },
  {
    title: 'Tube Sheet Modifications',
    desc: 'CNC laser-cut tube sheet replacements and cell plate adaptations for converting raw top collars to spring snap-bands.'
  },
  {
    title: 'Hopper Modifications',
    desc: 'Hopper valley angle steepening, strike plates, fluidizing pads, and vibrator brackets to eliminate bridging.'
  },
  {
    title: 'Inlet / Outlet Modifications',
    desc: 'Internal drop-out baffles, diffuser plates, and damper retrofits to improve gas distribution and reduce bag abrasion.'
  },
  {
    title: 'Pulse Cleaning System Improvement',
    desc: 'Header tank volume expansion, blowpipe nozzle alignment, and header pressure stabilization upgrades.'
  },
  {
    title: 'Control Panel Replacement',
    desc: 'Microprocessor sequential timer panels, differential pressure transmitters, and PLC/HMI automation retrofits.'
  },
  {
    title: 'Filter Area Enhancement',
    desc: 'Converting conventional tubular bags to pleated cartridges to increase surface area by 2.5x to 3x within existing casing.'
  },
  {
    title: 'Existing Bag-Filter Inspection & Audit',
    desc: 'On-site technical evaluation of can velocity, pressure drop, leak detection, air consumption, and fan draft performance.'
  }
];

const RetrofitPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="retrofit-page" style={{ background: '#040711', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        background: `linear-gradient(180deg, rgba(4, 7, 17, 0.88) 0%, rgba(4, 7, 17, 0.98) 100%), url(${retrofitBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5.5rem 0 4.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(56, 189, 248, 0.12)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            padding: '6px 16px',
            borderRadius: '999px',
            color: '#38bdf8',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem'
          }}>
            <RefreshCw size={14} /> SYSTEM LIFE-EXTENSION & UPGRADATION
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.18',
            marginBottom: '1.5rem'
          }}>
            Bag Filter Retrofit & <br />
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8 0%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Replacement Solutions</span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.7',
            color: '#cbd5e1',
            maxWidth: '820px',
            margin: '0 auto 2.5rem'
          }}>
            Existing dust collection systems can often be upgraded to improve filtration performance, reliability and maintainability without replacing the complete installation.
          </p>

          {/* Primary CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/contact?type=drawing-upload" 
              className="btn btn-primary"
              style={{
                padding: '14px 28px',
                fontSize: '1rem',
                fontWeight: '700',
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.4)'
              }}
            >
              <FileUp size={18} />
              <span>SEND YOUR EXISTING DRAWING</span>
            </Link>

            <a 
              href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20have%20an%20existing%20bag%20filter%20drawing/specification%20for%20retrofit%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '14px 24px', fontSize: '1rem' }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Drawing / Photos</span>
            </a>
          </div>

        </div>
      </section>

      {/* 12 Retrofit Services Grid */}
      <section style={{ padding: '5.5rem 0', background: '#070b14' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              OUR RETROFIT CAPABILITIES
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
              Comprehensive Upgrade & Replacement Services
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Whether addressing high differential pressure, repeated bag failures, or pollution board compliance issues, our engineering team inspects and retrofits all OEM baghouse makes.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {retrofitServices.map((service, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <CheckCircle2 size={20} style={{ color: '#38bdf8', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.18rem', fontWeight: '700', color: '#ffffff', margin: 0 }}>
                    {service.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.92rem', lineHeight: '1.6', color: '#94a3b8', margin: 0, flex: 1 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Conversion Highlight: Pleated Cartridge Retrofit */}
      <section style={{ padding: '5rem 0', background: '#040711', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container" style={{ maxWidth: '1040px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 420px) 1fr',
            gap: '3rem',
            alignItems: 'center',
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '24px',
            padding: '36px',
            overflow: 'hidden'
          }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '300px', background: '#020617' }}>
              <img 
                src={pleatedImg} 
                alt="Pleated Cartridge Bag Filter Retrofit" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                CAPACITY EXPANSION WITHOUT HOUSING REPLACEMENT
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
                Pleated Cartridge Bag Retrofits
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '18px' }}>
                If your process airflow has increased but your baghouse footprint is fixed, retrofitting conventional cylindrical filter bags with pleated cartridges multiplies filtration surface area by 200% to 300% without modifying your casing.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} style={{ color: '#34d399' }} />
                  <span>Halves internal can velocity and eliminates dust re-entrainment</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} style={{ color: '#34d399' }} />
                  <span>Substantially lowers operating differential pressure (DP)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} style={{ color: '#34d399' }} />
                  <span>Direct drop-in fitment into standard cell plates</span>
                </li>
              </ul>

              <Link to="/contact?type=pleated-retrofit" className="btn btn-primary">
                <span>Inquire About Pleated Retrofits</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Drawing Submission CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0284c7 0%, #1d4ed8 100%)',
        padding: '5rem 0',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', marginBottom: '1.25rem', color: '#ffffff' }}>
            Have an Existing Baghouse Requiring Upgrades?
          </h2>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2.5rem' }}>
            Send us your current equipment drawing, tube sheet layout, or site photographs. Our engineers will review the design and recommend practical retrofit solutions.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/contact?type=drawing-upload" 
              className="btn btn-lg" 
              style={{ background: '#ffffff', color: '#0369a1', fontWeight: '800', padding: '14px 28px' }}
            >
              <FileUp size={18} />
              <span>SEND YOUR EXISTING DRAWING</span>
            </Link>
            <a 
              href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20here%20is%20our%20existing%20bag%20filter%20drawing%20for%20retrofit%20review."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.4)', padding: '14px 24px' }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Drawing to +91 1234567890</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RetrofitPage;
