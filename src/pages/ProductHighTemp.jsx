import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { 
  Flame, 
  Wind, 
  Activity, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Gauge, 
  Wrench, 
  Send,
  MessageCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductDetails.css';

import heroBg from '../assets/slide_new_2.jpg';

const features = [
  {
    icon: <Flame size={30} />,
    title: 'Extreme Heat Endurance',
    desc: 'Continuous operating resilience up to 280°C (536°F) and peak surges of 290°C (554°F) without dimensional shrinkage or fabric embrittlement.'
  },
  {
    icon: <ShieldCheck size={30} />,
    title: 'Chemical & Acid Resistance',
    desc: 'Chemically inert media resistant to sulfur oxides (SOx), nitrogen oxides (NOx), acids, and moisture common in combustion flue gases.'
  },
  {
    icon: <Wind size={30} />,
    title: 'High Airflow Permeability',
    desc: 'Precision 8 to 15 m³/m²/min air permeability reduces baghouse differential pressure, lowering ID fan power consumption.'
  },
  {
    icon: <Activity size={30} />,
    title: 'Heavy-Duty Abrasion Shield',
    desc: 'Triple-stitched bottom cups, cuff reinforcement, and heat-resistant PTFE sewing thread withstand abrasive fly ash and clinker dust.'
  },
  {
    icon: <Layers size={30} />,
    title: 'ePTFE Membrane Technology',
    desc: 'Optional expanded PTFE membrane lamination captures sub-micron particulates with surface filtration, enabling ultra-low emissions (<5 mg/Nm³).'
  },
  {
    icon: <Gauge size={30} />,
    title: 'Over 99.5% Separation Efficiency',
    desc: 'Ensures strict compliance with environmental pollution norms across high-temperature kiln exhausts and smelting furnaces.'
  }
];

const mediaComparison = [
  { media: 'Woven Fiberglass', maxTemp: '260°C - 280°C', acidResist: 'Excellent', alkaliResist: 'Fair', bestFor: 'Cement Kilns, Power Boilers, Carbon Black' },
  { media: 'Aramid (Nomex)', maxTemp: '200°C - 220°C', acidResist: 'Fair', alkaliResist: 'Good', bestFor: 'Asphalt Plants, Smelters, Sand Dryers' },
  { media: 'PPS (Ryton)', maxTemp: '190°C - 200°C', acidResist: 'Exceptional', alkaliResist: 'Excellent', bestFor: 'Coal-Fired Power Boilers, Waste Incinerators' },
  { media: 'PTFE (Teflon)', maxTemp: '260°C continuous', acidResist: 'Maximum (Universal)', alkaliResist: 'Maximum (Universal)', bestFor: 'Harsh Chemical Plants, Hazardous Waste Kilns' },
  { media: 'P84 (Polyimide)', maxTemp: '240°C - 260°C', acidResist: 'Very Good', alkaliResist: 'Fair', bestFor: 'High Efficiency Dust Collection, Cement Clinker' }
];

const applications = [
  { title: 'Cement & Lime Plants', desc: 'Kiln exhaust, raw mill, clinker cooler, and preheater baghouses handling high thermal loads.' },
  { title: 'Steel & Metallurgical Smelters', desc: 'Electric Arc Furnaces (EAF), blast furnaces, ladle refining, and sinter plant off-gas filtration.' },
  { title: 'Thermal Power Generation', desc: 'Pulverized coal boilers, circulating fluidized beds (CFBC), and fly ash extraction systems.' },
  { title: 'Chemical & Waste Incineration', desc: 'Hazardous waste combustors, titanium dioxide processing, and acid gas scrubbing baghouses.' },
  { title: 'Asphalt & Aggregate Mixers', desc: 'Drum dryers and rotary kilns producing high-temperature aggregate dust.' },
  { title: 'Foundries & Die-Casting', desc: 'Cupola furnaces, induction melting furnaces, and sand reclamation baghouses.' }
];

const ProductHighTemp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    material: 'Woven Fiberglass',
    temp: 'Up to 260°C',
    dimensions: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.from('.product-title', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
      
      gsap.from('.product-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });
    });
    
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = 
`*RFQ: High Temperature Filter Bags - VS Filtech*
----------------------------------------
👤 *Contact / Company:* ${formData.name}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email}
🔥 *Media Material:* ${formData.material}
📐 *Dimensions/Specs:* ${formData.dimensions || 'Standard / Custom'}
📝 *Gas / Dust Conditions:* ${formData.message || 'Please provide technical datasheet & quotation.'}
----------------------------------------
_Sent via vsfiltech.com_`;
    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/911234567890?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="product-page">
      <section className="product-hero">
        <div 
          className="product-hero-bg" 
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="product-hero-content">
          <div className="section-label">PREMIUM INDUSTRIAL PRODUCT</div>
          <h1 className="product-title">High Temperature Filter Bag Manufacturers, Suppliers</h1>
          <p className="product-subtitle">
            Engineered for high heat conditions. VS Filtech manufactures and supplies premier high temperature bag filters using fiberglass, aramid (Nomex), PPS, PTFE, and P84, ensuring excellent thermal resistance, chemical stability, and extended service life.
          </p>
        </div>
      </section>

      <section className="product-content">
        <div className="container">
          
          {/* Engineering Highlights */}
          <div className="product-section">
            <h2 className="section-heading">Key Features & Engineering Advantages</h2>
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Media Comparison Table */}
          <div className="product-section">
            <h2 className="section-heading">High Temperature Filter Media Selection</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '750px', margin: '-1rem auto 2rem' }}>
              We manufacture filter bags from multiple high-performance synthetic and inorganic fibers matched to your flue gas chemistry and operating temperatures.
            </p>
            <div className="comparison-table-container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Filter Media</th>
                    <th>Max Operating Temp</th>
                    <th>Acid Resistance</th>
                    <th>Alkali Resistance</th>
                    <th>Primary Industrial Applications</th>
                  </tr>
                </thead>
                <tbody>
                  {mediaComparison.map((m, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600, color: '#ffffff' }}>{m.media}</td>
                      <td>{m.maxTemp}</td>
                      <td>{m.acidResist}</td>
                      <td>{m.alkaliResist}</td>
                      <td>{m.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="product-section">
            <h2 className="section-heading">Engineering & Product Specifications</h2>
            <div className="specs-table-container">
              <table className="specs-table">
                <tbody>
                  <tr>
                    <th>Filter Media Options</th>
                    <td>Woven Fiberglass, Aramid (Nomex), PPS (Ryton), PTFE (Teflon), P84 (Polyimide)</td>
                  </tr>
                  <tr>
                    <th>Dimensions</th>
                    <td>Length: 3 to 12 feet (custom up to 30 ft) | Diameter: 4 to 8 inches (100mm to 200mm)</td>
                  </tr>
                  <tr>
                    <th>Fabric Thickness</th>
                    <td>0.3 mm to 0.9 mm</td>
                  </tr>
                  <tr>
                    <th>Media Weight</th>
                    <td>350 g/m² to 900 g/m²</td>
                  </tr>
                  <tr>
                    <th>Filtration Efficiency</th>
                    <td>Exceeds 99.5% (Emissions down to &lt;5 mg/Nm³ with ePTFE membrane)</td>
                  </tr>
                  <tr>
                    <th>Air Permeability</th>
                    <td>8 to 15 m³/m²/min (controlled for optimal differential pressure)</td>
                  </tr>
                  <tr>
                    <th>Temperature Resistance</th>
                    <td>Continuous: Up to 280°C (536°F) | Short-Term Peak: 290°C (554°F)</td>
                  </tr>
                  <tr>
                    <th>Surface Coatings & Finishes</th>
                    <td>ePTFE Membrane Lamination, Silicone/Graphite Bath, Acid-Resistant Finish, Spark Resistant</td>
                  </tr>
                  <tr>
                    <th>Top & Bottom Construction</th>
                    <td>Snap band with double-beaded silicone/felt cord, steel ring collar, triple-stitched reinforced bottom cup</td>
                  </tr>
                  <tr>
                    <th>Sewing Thread</th>
                    <td>100% PTFE (Teflon) or Nomex high-tenacity thread with triple chain stitch</td>
                  </tr>
                  <tr>
                    <th>Cleaning Compatibility</th>
                    <td>Pulse Jet, Mechanical Shaker, and Reverse Air Baghouses</td>
                  </tr>
                  <tr>
                    <th>Cage Recommendation</th>
                    <td>10 to 24 vertical wire cages in SS304, SS316, or Epoxy finish to avoid bag wear</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Industrial Applications Grid */}
          <div className="product-section">
            <h2 className="section-heading">Industrial Applications</h2>
            <div className="product-apps-grid">
              {applications.map((app, i) => (
                <div key={i} className="app-card">
                  <h4 className="app-card-title">{app.title}</h4>
                  <p className="app-card-desc">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Technical Quote Form */}
          <div className="product-quote-section">
            <div className="quote-header">
              <span className="badge-pill">FAST TECHNICAL QUOTATION</span>
              <h3>Request a High Temperature Filter Bag Quote</h3>
              <p>
                Provide your bag dimensions, temperature range, and baghouse conditions. Our engineering team in Ghaziabad will calculate fabric compatibility and provide direct factory pricing within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="form-success-banner">
                Thank you! Your high-temperature filter bag RFQ has been received. Our engineering specialist will contact you shortly.
              </div>
            ) : (
              <form className="product-quote-form" onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Your Name / Company *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="e.g. Rahul Sharma (Ultratech / Jindal)"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      className="form-input" 
                      placeholder="+91 1234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Media Material</label>
                    <select 
                      className="form-select"
                      value={formData.material}
                      onChange={(e) => setFormData({...formData, material: e.target.value})}
                    >
                      <option value="Woven Fiberglass">Woven Fiberglass (Up to 280°C)</option>
                      <option value="Aramid (Nomex)">Aramid / Nomex (Up to 220°C)</option>
                      <option value="PPS (Ryton)">PPS / Ryton (Up to 190°C, High Acid)</option>
                      <option value="PTFE (Teflon)">PTFE / Teflon (260°C, Universal)</option>
                      <option value="P84 (Polyimide)">P84 Polyimide (240°C)</option>
                      <option value="Not Sure - Recommend">Not Sure - Engineering Recommendation</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Dimensions / Baghouse Specs (Length, Diameter, Quantity)</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Dia 160mm x Length 6000mm, Snap Band Collar, Qty: 500 pcs"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({...formData, dimensions: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Operating Gas Temperature & Dust Details</label>
                  <textarea 
                    className="form-textarea" 
                    placeholder="Describe your flue gas composition, operating temperature, moisture level, or existing issues (e.g. blinding, premature tear)..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="quote-submit-row">
                  <button type="submit" className="btn btn-primary" style={{ minWidth: 280, background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', borderColor: '#25D366' }}>
                    <MessageCircle size={18} style={{ marginRight: 8 }} />
                    Submit Technical RFQ via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ProductHighTemp;
