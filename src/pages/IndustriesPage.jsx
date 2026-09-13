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
    <div className="industries-page" style={{ background: '#040711', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* Hero Header */}
      <section style={{
        position: 'relative',
        background: `linear-gradient(180deg, rgba(4, 7, 17, 0.85) 0%, rgba(4, 7, 17, 0.98) 100%), url(${cementImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5.5rem 0 4rem',
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
            <Sparkles size={14} /> FIELD-PROVEN INDUSTRIAL APPLICATIONS
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.18',
            marginBottom: '1.5rem'
          }}>
            Industries <span style={{
              background: 'linear-gradient(135deg, #38bdf8 0%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>We Serve</span>
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

          <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 26px' }}>
            <span>Request Application Sizing</span>
            <ArrowRight size={16} />
          </Link>

        </div>
      </section>

      {/* 11 Industries Grid */}
      <section style={{ padding: '5.5rem 0', background: '#070b14' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {industriesList.map((ind) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={ind.id}
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '18px',
                    overflow: 'hidden',
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
                  <div style={{ height: '170px', position: 'relative', overflow: 'hidden', background: '#020617' }}>
                    <img 
                      src={ind.image} 
                      alt={ind.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 60%)'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#38bdf8',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '700'
                    }}>
                      <Icon size={14} />
                      <span>{ind.name}</span>
                    </div>
                  </div>

                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                      {ind.name}
                    </h3>
                    
                    <p style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: '600', marginBottom: '16px' }}>
                      {ind.lead}
                    </p>

                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
                        Process Challenge:
                      </div>
                      <div style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                        {ind.challenges}
                      </div>
                    </div>

                    <div style={{ marginBottom: '20px', flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
                        Engineered Solution:
                      </div>
                      <div style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: '1.5' }}>
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
                        borderRadius: '10px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        color: '#38bdf8',
                        fontSize: '0.86rem',
                        fontWeight: '700',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Inquire for {ind.name.split(' ')[0]}</span>
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
