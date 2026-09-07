import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { 
  ShieldCheck, 
  Droplet, 
  Factory, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Gauge, 
  Filter, 
  Send,
  MessageCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductDetails.css';

import heroBg from '../assets/slide_new_4.jpg';

const advantages = [
  {
    icon: <ShieldCheck size={30} />,
    title: 'pH 1 to 14 Chemical Resistance',
    desc: 'Unmatched resistance to aggressive acids, strong caustic alkalis, and organic solvents, eliminating media breakdown in harsh chemical processes.'
  },
  {
    icon: <Droplet size={30} />,
    title: 'High Flow & Solid-Liquid Separation',
    desc: 'High dirt-holding capacity and deep-bed fiber matrix ensure high flow rates with crystal clear filtrate and minimal pressure drop.'
  },
  {
    icon: <Layers size={30} />,
    title: 'Ultrasonic Welded Seams (Bypass-Free)',
    desc: 'Thermal fusion joins eliminate needle puncture holes, ensuring 100% leak-proof performance and preventing bypass of unfiltered particles.'
  },
  {
    icon: <Filter size={30} />,
    title: '1 to 200 Micron Precision',
    desc: 'Broad spectrum of nominal and absolute micron ratings (1, 5, 10, 25, 50, 75, 100, 200 µm) calibrated for exact particulate capture.'
  },
  {
    icon: <Factory size={30} />,
    title: 'Glazed / Singed Surface Finish',
    desc: 'Heat-calendered outer surface prevents fiber shedding and fiber migration downstream into critical purified liquids.'
  },
  {
    icon: <Gauge size={30} />,
    title: 'Multiple Collar Options',
    desc: 'Available with molded polypropylene flange collars with ergonomic handles, stainless steel rings, carbon steel rings, or heavy-duty drawstrings.'
  }
];

const standardSizes = [
  { size: 'Size 1', diameter: '7 inches (178 mm)', length: '17 inches (430 mm)', area: '0.25 m²', typicalFlow: 'Up to 20 m³/h' },
  { size: 'Size 2', diameter: '7 inches (178 mm)', length: '32 inches (810 mm)', area: '0.50 m²', typicalFlow: 'Up to 40 m³/h' },
  { size: 'Size 3', diameter: '4 inches (102 mm)', length: '9 inches (230 mm)', area: '0.05 m²', typicalFlow: 'Up to 6 m³/h' },
  { size: 'Size 4', diameter: '4 inches (102 mm)', length: '15 inches (380 mm)', area: '0.10 m²', typicalFlow: 'Up to 12 m³/h' },
  { size: 'Custom Fabrications', diameter: 'Per client CAD / sample', length: 'Up to 6000 mm', area: 'Tailored', typicalFlow: 'Engineered specification' }
];

const applications = [
  { title: 'Water Treatment & RO Pre-Filtration', desc: 'Pre-reverse osmosis guard, demineralization plants, borehole water, and municipal wastewater clarification.' },
  { title: 'Chemical & Petrochemical Processing', desc: 'Solvents, organic acids, inorganic salts, caustic wash solutions, and chemical reaction intermediate purification.' },
  { title: 'Paints, Inks & Industrial Coatings', desc: 'Filtering agglomerates, pigment slurries, varnishes, automotive coatings, and adhesives for smooth defect-free finishes.' },
  { title: 'Pharmaceutical & Cosmetics', desc: 'Sanitary grade solid-liquid separation, glycerin, active ingredients, and clean utility water streams.' },
  { title: 'Food, Beverage & Edible Oils', desc: 'Syrup clarification, beer polishing, vegetable oils, process water, and vinegar filtration.' },
  { title: 'Automotive Oils & Machining Coolants', desc: 'Metal chip separation, cutting fluids, lube oils, washing baths, and hydraulic oil filtering.' }
];

const ProductPoly = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    size: 'Size 2 (7" x 32")',
    micron: '5 Micron',
    collar: 'Polypropylene Molded Ring with Handle',
    quantity: '',
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
`*RFQ: Polypropylene Filter Bags - VS Filtech*
----------------------------------------
👤 *Contact / Company:* ${formData.name}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email}
📐 *Bag Size:* ${formData.size}
🎯 *Micron Rating:* ${formData.micron}
🔒 *Collar Style:* ${formData.collar}
📝 *Requirement / Details:* ${formData.message || 'Please provide technical datasheet & quotation.'}
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
          <div className="section-label">MANUFACTURING FROM GHAZIABAD, INDIA</div>
          <h1 className="product-title">Polypropylene Filter Bag Manufacturers from Ghaziabad, India</h1>
          <p className="product-subtitle">
            Reliable, economical, and high-efficiency solid-liquid separation solutions. VS Filtech manufactures premium Polypropylene (PP) filter bags designed for high dirt retention, exceptional chemical resistance, and bypass-free liquid clarification across all industrial processes.
          </p>
        </div>
      </section>

      <section className="product-content">
        <div className="container">
          
          {/* Key Advantages */}
          <div className="product-section">
            <h2 className="section-heading">Key Features & Technical Advantages</h2>
            <div className="features-grid">
              {advantages.map((adv, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-icon">{adv.icon}</div>
                  <h3 className="feature-title">{adv.title}</h3>
                  <p className="feature-desc">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Sizes Table */}
          <div className="product-section">
            <h2 className="section-heading">Standard Bag Dimensions & Flow Capacity</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '750px', margin: '-1rem auto 2rem' }}>
              We supply industry-standard liquid filter vessel sizes as well as custom-stitched or ultrasonically welded filter bags fabricated to custom vessel drawings.
            </p>
            <div className="comparison-table-container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Filter Bag Size</th>
                    <th>Diameter</th>
                    <th>Length</th>
                    <th>Surface Area</th>
                    <th>Max Clean Water Flow</th>
                  </tr>
                </thead>
                <tbody>
                  {standardSizes.map((s, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600, color: '#ffffff' }}>{s.size}</td>
                      <td>{s.diameter}</td>
                      <td>{s.length}</td>
                      <td>{s.area}</td>
                      <td>{s.typicalFlow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="product-section">
            <h2 className="section-heading">Product Specifications & Parameters</h2>
            <div className="specs-table-container">
              <table className="specs-table">
                <tbody>
                  <tr>
                    <th>Base Filter Media</th>
                    <td>100% Virgin Polypropylene (PP) Needle Punched Felt / PP Monofilament Mesh</td>
                  </tr>
                  <tr>
                    <th>Available Micron Ratings</th>
                    <td>1, 5, 10, 25, 50, 75, 100, 150, 200 Microns</td>
                  </tr>
                  <tr>
                    <th>Max Operating Temperature</th>
                    <td>Continuous: Up to 90°C (194°F) | Peak: 100°C (212°F)</td>
                  </tr>
                  <tr>
                    <th>pH / Chemical Resistance</th>
                    <td>pH 1 to 14 (Excellent stability with Acids, Alkalis, and Solvents)</td>
                  </tr>
                  <tr>
                    <th>Surface Finish</th>
                    <td>Glazed, singed, and calendered to eliminate fiber shedding</td>
                  </tr>
                  <tr>
                    <th>Seam Construction</th>
                    <td>Fully Welded Ultrasonic Seams (Bypass-free) OR Heavy-Duty 5-thread Stitched</td>
                  </tr>
                  <tr>
                    <th>Collar Types</th>
                    <td>Molded Polypropylene Top with Handle, Galvanized Steel Ring, SS304/SS316 Ring, Drawstring</td>
                  </tr>
                  <tr>
                    <th>Filtration Category</th>
                    <td>Liquid solid-liquid separation and industrial dust collection</td>
                  </tr>
                  <tr>
                    <th>Manufacturing Origin</th>
                    <td>Ghaziabad, Uttar Pradesh, India (Bulk Orders & Custom Fabrication)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications Grid */}
          <div className="product-section">
            <h2 className="section-heading">Target Industrial Applications</h2>
            <div className="product-apps-grid">
              {applications.map((app, i) => (
                <div key={i} className="app-card">
                  <h4 className="app-card-title">{app.title}</h4>
                  <p className="app-card-desc">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Quote Form */}
          <div className="product-quote-section">
            <div className="quote-header">
              <span className="badge-pill">GHAZIABAD DIRECT FACTORY QUOTE</span>
              <h3>Request a Polypropylene Filter Bag Quote</h3>
              <p>
                Specify your desired size, micron rating, collar style, and quantity. Our Ghaziabad manufacturing team will dispatch technical datasheets and competitive volume pricing within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="form-success-banner">
                Thank you! Your Polypropylene Filter Bag RFQ has been received. Our Ghaziabad sales desk will contact you immediately.
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
                      placeholder="e.g. Amit Verma (Apex Chemicals)"
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
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Bag Size</label>
                    <select 
                      className="form-select"
                      value={formData.size}
                      onChange={(e) => setFormData({...formData, size: e.target.value})}
                    >
                      <option value="Size 1 (7&quot; x 17&quot;)">Size 1 (7" Dia x 17" L)</option>
                      <option value="Size 2 (7&quot; x 32&quot;)">Size 2 (7" Dia x 32" L) - Most Popular</option>
                      <option value="Size 3 (4&quot; x 9&quot;)">Size 3 (4" Dia x 9" L)</option>
                      <option value="Size 4 (4&quot; x 15&quot;)">Size 4 (4" Dia x 15" L)</option>
                      <option value="Custom Size">Custom Size (Fabricated to Drawing)</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Micron Rating</label>
                    <select 
                      className="form-select"
                      value={formData.micron}
                      onChange={(e) => setFormData({...formData, micron: e.target.value})}
                    >
                      <option value="1 Micron">1 Micron</option>
                      <option value="5 Micron">5 Micron</option>
                      <option value="10 Micron">10 Micron</option>
                      <option value="25 Micron">25 Micron</option>
                      <option value="50 Micron">50 Micron</option>
                      <option value="100 Micron">100 Micron</option>
                      <option value="200 Micron">200 Micron</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Collar Ring Style</label>
                    <select 
                      className="form-select"
                      value={formData.collar}
                      onChange={(e) => setFormData({...formData, collar: e.target.value})}
                    >
                      <option value="PP Molded Ring with Handle">Polypropylene Molded Ring with Handle (Welded)</option>
                      <option value="Stainless Steel Ring">Stainless Steel Ring (SS304 / SS316)</option>
                      <option value="Galvanized Ring">Galvanized Steel Ring</option>
                      <option value="Drawstring">Drawstring Collar</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Order Quantity & Fluid Details</label>
                  <textarea 
                    className="form-textarea" 
                    placeholder="Provide estimated quantity (e.g. 200 pcs/month), fluid type (water, solvents, paint, acid), and operating flow rate..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="quote-submit-row">
                  <button type="submit" className="btn btn-primary" style={{ minWidth: 280, background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', borderColor: '#25D366' }}>
                    <MessageCircle size={18} style={{ marginRight: 8 }} />
                    Request Factory Pricing via WhatsApp
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

export default ProductPoly;
