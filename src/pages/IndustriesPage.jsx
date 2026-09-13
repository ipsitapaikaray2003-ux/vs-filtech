import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  Flame, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Mountain,
  Trees,
  Pill,
  Wheat,
  Zap,
  FlaskConical,
  Hammer
} from 'lucide-react';

import cementImg from '../assets/industry_cement.jpg';
import steelImg from '../assets/industry_steel.jpg';
import metalsImg from '../assets/industry_metals.jpg';
import powerImg from '../assets/industry_power.jpg';
import carbonImg from '../assets/industry_carbon_black.jpg';
import baghouseImg from '../assets/hero_baghouse.jpg';

const industriesList = [
  {
    id: 'cement-building',
    name: 'Cement & Building Materials',
    icon: Mountain,
    lead: 'Kiln exhaust, raw mills, clinker coolers, and silo venting systems.',
    challenges: 'High gas volumes, abrasive clinker dust, elevated temperatures up to 260°C, and acid dewpoint risks.',
    solutions: 'Heavy-duty reverse pulse baghouses with PTFE membrane fiberglass or Aramid media, circular silo venting filters, and abrasion-resistant inlet baffles.',
    image: cementImg
  },
  {
    id: 'steel-foundry',
    name: 'Steel & Foundry',
    icon: Flame,
    lead: 'Induction furnaces, electric arc furnaces (EAF), cupolas, and sand preparation plants.',
    challenges: 'Sub-micron metallic fume, incandescent sparks, severe thermal fluctuations, and heavy cyclic loading.',
    solutions: 'Multi-cyclone spark arrestors, water-cooled ducting, pulse jet baghouses with flame-retardant polyester/Nomex bags, and high-static ID fans.',
    image: steelImg
  },
  {
    id: 'aluminium-nonferrous',
    name: 'Aluminium & Non-Ferrous Industries',
    icon: Factory,
    lead: 'Smelters, dross processing, die-casting, and secondary remelting furnaces.',
    challenges: 'Sticky chloride/fluoride fumes, hygroscopic dust, and corrosive flue gas chemistry.',
    solutions: 'Dry scrubber baghouse systems with sorbent injection, specialized ePTFE membrane bags, and heated hopper walls.',
    image: metalsImg
  },
  {
    id: 'rice-food',
    name: 'Rice & Food Processing',
    icon: Wheat,
    lead: 'Grain elevators, flour milling, starch drying, rice husk boilers, and spice grinding.',
    challenges: 'Combustible organic dusts, high moisture content, food-grade contact hygiene, and static charge buildup.',
    solutions: 'Stainless steel contact parts, certified ATEX explosion vents, anti-static conductive filter bags, and smooth sanitary welds.',
    image: baghouseImg
  },
  {
    id: 'minerals-processing',
    name: 'Minerals & Minerals Processing',
    icon: Mountain,
    lead: 'Crushing and screening plants, lime kilns, gypsum calcining, and silica sand processing.',
    challenges: 'Extremely abrasive particulate, high dust concentration at transfer points, and outdoor ambient exposure.',
    solutions: 'Wear-lined cyclone pre-separators, heavy gauge 5mm/6mm casing plates, and large hopper trough screw conveyors.',
    image: cementImg
  },
  {
    id: 'chemical-industries',
    name: 'Chemical Industries',
    icon: FlaskConical,
    lead: 'Pigment manufacturing, carbon black, synthetic resins, and specialty chemical batch processing.',
    challenges: 'Corrosive acidic or basic vapours, ultrafine sub-micron particles, and toxic containment requirements.',
    solutions: 'SS304 / SS316 stainless steel housings, Ryton (PPS) or PTFE needlefelts, and zero-leakage snap-band tube sheets.',
    image: carbonImg
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical Industries',
    icon: Pill,
    lead: 'Fluid bed dryers (FBD), tablet coating, micronizing, and bulk active ingredient packaging.',
    challenges: 'Cross-contamination risks, high-potency powders, strict GMP hygiene standards, and CIP washdown.',
    solutions: 'Sanitary polish SS316L housings, antistatic liquid/dry pharmaceutical filter media, and clean-in-place spray nozzles.',
    image: baghouseImg
  },
  {
    id: 'fertilizer',
    name: 'Fertilizer Industries',
    icon: Layers,
    lead: 'Urea prilling towers, NPK granulators, phosphoric acid plants, and bagging stations.',
    challenges: 'Highly hygroscopic salts, cake moisture absorption, and severe chemical corrosion.',
    solutions: 'Acid-resistant coatings, heated purge air pulse headers, PTFE needlefelts, and continuous airlock discharging.',
    image: carbonImg
  },
  {
    id: 'power-energy',
    name: 'Power & Energy',
    icon: Zap,
    lead: 'Biomass boilers, pulverized coal boilers, waste-to-energy plants, and fly ash pneumatic conveying.',
    challenges: 'High continuous volumetric flow, fly ash abrasiveness, SOx presence, and boiler trip spark conditions.',
    solutions: 'Multi-compartment offline pulse jet baghouses with bypass dampers, PPS/PTFE media, and heavy-duty centrifugal ID blowers.',
    image: powerImg
  },
  {
    id: 'wood-biomass',
    name: 'Wood & Biomass',
    icon: Trees,
    lead: 'Sawmills, particleboard manufacturing, furniture machining, and biomass briquetting plants.',
    challenges: 'High volume wood shavings, combustible dust deflagration risks, and fibrous clogging.',
    solutions: 'Primary cyclone drop-out collectors, high-volume reverse air baghouses, rotary airlocks, and explosion suppression panels.',
    image: baghouseImg
  },
  {
    id: 'general-manufacturing',
    name: 'General Manufacturing',
    icon: Hammer,
    lead: 'Shot blasting, metal grinding, thermal spray coating, plasma cutting, and CNC machining.',
    challenges: 'Varied intermittent dust loads, shop floor space limitations, and indoor noise constraints.',
    solutions: 'Compact pleated cartridge dust collectors with integrated acoustic fan attenuators and recirculating clean air filters.',
    image: metalsImg
  }
];

const IndustriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="industries-page" style={{ background: '#0a1628', minHeight: '100vh', paddingTop: '80px', color: '#ffffff' }}>
      
      {/* Hero Header */}
      <section style={{
        position: 'relative',
        background: `linear-gradient(180deg, rgba(10, 22, 40, 0.9) 0%, rgba(7, 14, 26, 0.98) 100%), url(${cementImg})`,
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
            <Sparkles size={14} style={{ color: '#38bdf8' }} /> FIELD-PROVEN INDUSTRIAL APPLICATIONS
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.18',
            marginBottom: '1.5rem'
          }}>
            Industries <span style={{ color: '#38bdf8' }}>We Serve</span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.7',
            color: '#cbd5e1',
            maxWidth: '820px',
            margin: '0 auto 2.5rem'
          }}>
            VS Filtech designs, manufactures, and retrofits dust collection systems tailored to the exact operating conditions, moisture levels, temperatures, and statutory emission requirements of core manufacturing sectors.
          </p>

          <Link to="/contact" className="btn-amber" style={{ padding: '12px 28px', borderRadius: '10px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
            <span>Request Application Sizing</span>
            <ArrowRight size={16} />
          </Link>

        </div>
      </section>

      {/* 11 Industries Grid */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#070e1a' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              PROVEN PERFORMANCE ACROSS KEY SECTORS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', fontWeight: '800', color: '#ffffff' }}>
              Engineered Solutions by Sector
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {industriesList.map((ind, idx) => {
              const Icon = ind.icon;
              const accentColors = ['#38bdf8', '#60a5fa', '#38bdf8', '#818cf8', '#2dd4bf', '#38bdf8'];
              const accent = accentColors[idx % accentColors.length];

              return (
                <div 
                  key={ind.id}
                  style={{
                    background: '#0f2040',
                    border: '1px solid rgba(56, 189, 248, 0.16)',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                    borderTop: `3px solid ${accent}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 14px 32px rgba(2, 132, 199, 0.25)';
                    e.currentTarget.style.borderColor = accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.16)';
                    e.currentTarget.style.borderTop = `3px solid ${accent}`;
                  }}
                >
                  <div style={{ height: '170px', position: 'relative', overflow: 'hidden', background: '#020617' }}>
                    <img 
                      src={ind.image} 
                      alt={ind.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10, 22, 40, 0.8) 0%, transparent 60%)'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(10, 22, 40, 0.95)',
                      border: `1px solid ${accent}`,
                      color: accent,
                      padding: '4px 12px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      backdropFilter: 'blur(8px)'
                    }}>
                      <Icon size={14} />
                      <span>{ind.name}</span>
                    </div>
                  </div>

                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                      {ind.name}
                    </h3>
                    
                    <p style={{ fontSize: '0.9rem', color: accent, fontWeight: '600', marginBottom: '16px' }}>
                      {ind.lead}
                    </p>

                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#f59e0b', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.04em' }}>
                        Process Challenge:
                      </div>
                      <div style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                        {ind.challenges}
                      </div>
                    </div>

                    <div style={{ marginBottom: '20px', flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.04em' }}>
                        Engineered Solution:
                      </div>
                      <div style={{ fontSize: '0.86rem', color: '#e2e8f0', lineHeight: '1.5' }}>
                        {ind.solutions}
                      </div>
                    </div>

                    <Link 
                      to={`/contact?industry=${encodeURIComponent(ind.name)}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 16px',
                        background: '#0a1628',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        borderRadius: '10px',
                        color: '#38bdf8',
                        textDecoration: 'none',
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(56, 189, 248, 0.15)';
                        e.currentTarget.style.borderColor = '#38bdf8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#0a1628';
                        e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.25)';
                      }}
                    >
                      <span>Consult Sizing for {ind.name.split(' ')[0]}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default IndustriesPage;
