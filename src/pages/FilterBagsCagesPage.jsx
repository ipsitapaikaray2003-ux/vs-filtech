import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import bagImg from '../assets/filter_bag_main.jpg';

const materials = [
  { name: 'Non Woven Polyester', temp: '150°C', app: 'General dust collection, Cement, Steel' },
  { name: 'Polypropylene', temp: '90°C', app: 'Chemical, Food processing, High moisture' },
  { name: 'Homopolymer Acrylic', temp: '130°C', app: 'Power plants, Dryers' },
  { name: 'PPS (Ryton)', temp: '190°C', app: 'Coal-fired boilers, Incinerators' },
  { name: 'P84 (Polyimide)', temp: '260°C', app: 'Smelters, High-temp kilns' },
  { name: 'Woven Fiberglass', temp: '280°C', app: 'Cement kiln exhaust, Carbon black' },
  { name: 'Aramid (Nomex)', temp: '200°C', app: 'Asphalt plants, Foundry' },
  { name: 'PTFE (Teflon)', temp: '260°C', app: 'Aggressive chemicals, Extreme conditions' }
];

const FilterBagsCagesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page" style={{ background: 'var(--bg-primary)', paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section style={{ background: 'var(--bg-secondary)', padding: '120px 0 60px', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ color: 'var(--accent-secondary)', fontWeight: '600', letterSpacing: '2px', fontSize: '14px', marginBottom: '15px' }}>
                SPARE PARTS & MEDIA
              </div>
              <h1 style={{ color: 'var(--text-primary)', fontSize: '3.5rem', marginBottom: '20px', lineHeight: '1.2' }}>
                Filter Bags <span style={{ color: 'var(--accent-secondary)' }}>& Cages</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px' }}>
                We manufacture and supply a comprehensive range of Pulse Jet Filter Bags, Pleated Filter Bags, Support Cages, and Venturies. Available in woven and non-woven materials for extreme industrial environments.
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <Link to="/contact" className="btn btn-primary">
                  Request Specifications <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <img src={bagImg} alt="Filter Bags and Cages" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Table */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '15px' }}>Filter Media for Reliable Filtration</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 30px' }}>
              Filter bags are one of the most important components of a bag filter system. We can supply filter bags in different materials and configurations according to operating conditions.
            </p>
            
            <div style={{ background: 'var(--bg-primary)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'inline-block', textAlign: 'left', marginBottom: '40px' }}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '15px' }}>Filter Bag Selection Depends On:</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {['Operating temperature', 'Dust characteristics', 'Chemical composition', 'Moisture content', 'Filtration requirements', 'Gas composition', 'Cleaning method'].map((criteria, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)' }}></div>
                    <span style={{ fontSize: '0.95rem' }}>{criteria}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', padding: '15px 20px', background: 'var(--accent-primary)', color: '#fff', fontWeight: '600' }}>
              <div style={{ flex: '2' }}>Material</div>
              <div style={{ flex: '1' }}>Max Temp</div>
              <div style={{ flex: '3' }}>Typical Applications</div>
            </div>
            {materials.map((mat, idx) => (
              <div key={idx} style={{ display: 'flex', padding: '15px 20px', borderBottom: idx !== materials.length - 1 ? '1px solid var(--border-color)' : 'none', background: idx % 2 === 0 ? 'var(--bg-secondary)' : '#fff' }}>
                <div style={{ flex: '2', fontWeight: '600', color: 'var(--text-primary)' }}>{mat.name}</div>
                <div style={{ flex: '1', color: 'var(--accent-secondary)', fontWeight: '600' }}>{mat.temp}</div>
                <div style={{ flex: '3', color: 'var(--text-secondary)' }}>{mat.app}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cages Section */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div style={{ background: 'var(--bg-secondary)', padding: '50px', borderRadius: '24px', border: '1px solid var(--border-color)', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '20px' }}>Filter Cages</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                Filter cages provide internal support to the filter bags and help maintain their shape during filtration and pulse cleaning. Cages can be supplied in suitable configurations and materials according to the bag filter design.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['MOC: Mild Steel (MS), SS 304, SS 316', 'Wire configurations: 8, 10, 12, 20, 24 wires', 'Anti-corrosive coatings available', 'Integral or split design venturies'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--accent-secondary)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterBagsCagesPage;
