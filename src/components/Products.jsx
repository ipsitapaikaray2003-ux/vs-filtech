import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Flame, 
  Droplets, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Factory,
  Sparkles
} from 'lucide-react';
import './Products.css';

import imgHighTemp from '../assets/slide_new_2.jpg'; 
import imgPoly from '../assets/slide_new_4.jpg'; 
import imgCages from '../assets/slide_new_3.png'; 
import imgSpares from '../assets/slide_new_1.png';

const products = [
  {
    id: 'high-temperature',
    link: '/products/high-temperature',
    title: 'High Temperature Filter Bags',
    category: 'CEMENT KILNS & POWER BOILERS',
    badge: 'Up to 280°C Continuous',
    badgeIcon: Flame,
    desc: 'Engineered using Woven Fiberglass, Nomex (Aramid), PPS (Ryton), P84, and pure PTFE to resist corrosive acid flue gases and extreme thermal spikes.',
    specs: ['Fiberglass & Nomex', 'Continuous 280°C', 'PTFE Seam Threads'],
    image: imgHighTemp,
    imgPos: 'center 75%'
  },
  {
    id: 'polypropylene',
    link: '/products/polypropylene',
    title: 'Polypropylene Filter Bags',
    category: 'LIQUID & DUST FILTRATION',
    badge: '1 - 200 Micron Ratings',
    badgeIcon: Droplets,
    desc: 'Precision solid-liquid separation and dust capture made from 100% virgin PP needle felt and mesh, featuring bypass-free ultrasonic welded seams and molded collars.',
    specs: ['pH 1-14 Resistance', 'Ultrasonic Welded', 'Sizes 1 to 4'],
    image: imgPoly,
    imgPos: 'center 50%'
  },
  {
    id: 'filter-cages',
    link: '/contact',
    title: 'Support Filter Cages & Venturies',
    category: 'STRUCTURAL SUPPORT SPARES',
    badge: '8 to 24 Longitudinal Wires',
    badgeIcon: ShieldCheck,
    desc: 'Heavy-duty resistance-welded cages in SS304, SS316, GI, and Epoxy finishes built to support bags, prevent fabric rubbing, and ensure uniform pulse propagation.',
    specs: ['8-24 Wire Cages', 'Integrated Venturis', '100% Burr-Free'],
    image: imgCages,
    imgPos: 'center 45%'
  },
  {
    id: 'accessories',
    link: '/contact',
    title: 'Pulse Valves & Baghouse Spares',
    category: 'AUTOMATION & AIRFLOW SPARES',
    badge: 'Direct OEM Replacement',
    badgeIcon: Cpu,
    desc: 'High-speed solenoid pulse valves, sequential timer controllers, rotary airlocks, and differential pressure gauges engineered for continuous industrial baghouses.',
    specs: ['High-Speed Response', 'Sequential Timers', 'Direct OEM Fit'],
    image: imgSpares,
    imgPos: 'center 50%'
  }
];

const Products = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="products-header">
          <div className="products-eyebrow">
            <Factory size={15} className="products-eyebrow-icon" />
            <span>MANUFACTURING CATALOG</span>
          </div>
          <h2 className="products-title">
            Industrial Filtration <span className="text-gradient">Engineered Solutions</span>
          </h2>
          <p className="products-subtitle">
            Engineered at our Ghaziabad facility for high separation efficiency, long bag service life, and strict emission compliance across cement, steel, chemical, and power industries.
          </p>
        </div>
        
        {/* Compact Premium 2x2 Grid */}
        <div className="products-grid">
          {products.map((product) => {
            const BadgeIcon = product.badgeIcon;
            return (
              <div key={product.id} className="product-card-compact">
                {/* Image Section */}
                <div className="product-card-media">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="product-card-img"
                    style={{ objectPosition: product.imgPos }}
                  />
                  <div className="product-media-overlay"></div>
                  
                  {/* Floating Badge */}
                  <div className="product-media-badge">
                    <BadgeIcon size={14} className="badge-icon" />
                    <span>{product.badge}</span>
                  </div>
                </div>

                {/* Compact Info Body */}
                <div className="product-card-body">
                  <span className="product-card-cat">{product.category}</span>
                  <h3 className="product-card-title">{product.title}</h3>
                  <p className="product-card-desc">{product.desc}</p>

                  {/* Technical Specs Chips */}
                  <div className="product-specs-row">
                    {product.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="product-spec-chip">
                        <CheckCircle2 size={12} className="spec-check" />
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="product-card-actions">
                    <Link to={product.link} className="btn product-btn-main">
                      Explore Specifications <ArrowRight size={16} />
                    </Link>
                    <Link to="/contact" className="btn product-btn-quote">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="products-bottom-bar">
          <div className="products-bottom-text">
            <Sparkles size={18} className="bottom-sparkle" />
            <span>Need Custom Dimensions or Media Analysis for Your Baghouse?</span>
          </div>
          <Link to="/contact" className="btn btn-outline products-bottom-btn">
            Send Sample for OEM Matching <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
