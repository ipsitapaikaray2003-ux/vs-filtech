import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Facebook,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import logoImg from '../assets/logo_dark_theme.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-root">
      {/* Top Accent Gradient Line */}
      <div className="footer-glow-line" />

      {/* Top CTA Band */}
      <div className="footer-cta-band">
        <div className="container footer-cta-container">
          <div className="footer-cta-text">
            <h3 className="footer-cta-title">
              Ready to discuss your dust collection requirement?
            </h3>
            <p className="footer-cta-subtitle">
              Get a technical quote — share your airflow, dust type, and temperature with our engineering team.
            </p>
          </div>
          <Link to="/contact" className="footer-cta-btn" aria-label="Contact VS Filtech">
            <span>Contact Us</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container footer-main-container" style={{ paddingTop: '55px', paddingBottom: '35px' }}>
        <div className="footer-grid">

          {/* Column 1: Brand Information */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link" aria-label="VS Filtech Home">
              <img 
                src={logoImg} 
                alt="VS Filtech - Engineering a Cleaner Tomorrow" 
                className="footer-logo-image" 
              />
            </Link>
            <div style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              color: '#38bdf8',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: '8px',
              marginBottom: '10px'
            }}>
              &ldquo;We Care for Clean Air&rdquo;
            </div>
            <p className="footer-brand-desc">
              Turnkey design and manufacturer of industrial pulse jet bag filters, dust collectors, cages, filter bags, and automated control systems. Trusted across cement, steel, power, and chemical industries.
            </p>
            <div className="footer-social-row">
              {[
                { Icon: Facebook, label: 'Facebook', href: '#' },
                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                { Icon: Twitter, label: 'Twitter', href: '#' }
              ].map(({ Icon, label, href }, idx) => (
                <a 
                  key={idx} 
                  href={href} 
                  aria-label={label}
                  className="footer-social-icon"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-col-list">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services & Bag Filter Audit', to: '/services' },
                { label: 'Technical Engineering', to: '/engineering' },
                { label: 'Retrofit & Upgrades', to: '/retrofit' },
                { label: 'Industries Served', to: '/industries' },
                { label: 'Applications', to: '/applications' },
                { label: 'Contact & RFQ', to: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Equipment & Products */}
          <div className="footer-col">
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-col-list">
              {[
                { label: 'Pulse Jet Bag Filters', to: '/products/pulse-jet-bag-filters' },
                { label: 'Filter Bags (Flagship)', to: '/products/filter-bag', isSpecial: true },
                { label: 'Filter Cages (Flagship)', to: '/products/filter-cages', isSpecial: true },
                { label: 'Dust Collectors', to: '/products/dust-collectors' },
                { label: 'Cartridge Collectors', to: '/products/cartridge-filters' },
                { label: 'Control & VFD Panels', to: '/products/control-panels' },
                { label: 'All Equipment Catalog', to: '/products' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.to} 
                    className={`footer-nav-link ${link.isSpecial ? 'footer-special-link' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={18} className="footer-item-icon" />
                <span className="footer-item-text">
                  Pawan Puri Industrial Area, Muradnagar, Ghaziabad, Uttar Pradesh — 201206, India
                </span>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} className="footer-item-icon" />
                <a 
                  href="https://wa.me/911234567890" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-item-link"
                >
                  Call / WhatsApp Support
                </a>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} className="footer-item-icon" />
                <a 
                  href="mailto:sales@vsfiltech.com" 
                  className="footer-item-link"
                >
                  sales@vsfiltech.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} VS Filtech — Industrial Dust Collection Systems &amp; Bag Filter Manufacturers. All rights reserved.
          </p>
          <p className="footer-credits">
            Designed by{' '}
            <a 
              href="https://www.qubnixtechnology.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-credits-link"
            >
              Qubnix Technology
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
