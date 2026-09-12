import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from 'lucide-react';
import logoImg from '../assets/logo_dark_theme.png';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--navy-900, #0a1628)', color: '#ffffff' }}>

      {/* Top CTA Band */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '40px 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '6px' }}>
              Ready to discuss your dust collection requirement?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem' }}>
              Get a technical quote — share your airflow, dust type, and temperature.
            </p>
          </div>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '0.85rem 2rem',
            background: 'var(--accent-gradient)',
            color: '#fff',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700',
            fontSize: '0.95rem',
            borderRadius: '999px',
            textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(37,99,235,0.5)',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}>
            Contact Us <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container" style={{ padding: '60px 2rem 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.4fr',
          gap: '48px',
          marginBottom: '48px'
        }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <img src={logoImg} alt="VS Filtech" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '20px' }}>
              Design and manufacturer of industrial bag filters, dust collectors, and complete air filtration systems. Trusted across cement, steel, food, and chemical industries.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[Facebook, Linkedin, Twitter].map((Icon, idx) => (
                <div key={idx} style={{
                  width: '36px', height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  color: 'rgba(255,255,255,0.6)'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.3)'; e.currentTarget.style.color = '#60a5fa'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Contact', to: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to} style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
              Products
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Pulse Jet Bag Filters', to: '/products/pulse-jet-filter' },
                { label: 'Filter Bags', to: '/products/filter-bags-cages' },
                { label: 'Cages & Venturis', to: '/products/filter-bags-cages' },
                { label: 'Control Panels', to: '/products/control-panels' },
                { label: 'All Products', to: '/products' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to} style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={15} style={{ color: '#60a5fa', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  Ghaziabad, Uttar Pradesh, India
                </span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={15} style={{ color: '#60a5fa', flexShrink: 0 }} />
                <a href="tel:+911234567890" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  +91 1234567890
                </a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={15} style={{ color: '#60a5fa', flexShrink: 0 }} />
                <a href="mailto:sales@vsfiltech.com" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  sales@vsfiltech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '28px' }} />

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.83rem' }}>
            © {new Date().getFullYear()} VS Filtech — Industrial Bag Filter Manufacturers. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.83rem' }}>
            Designed by{' '}
            <a href="https://www.qubnixtechnology.com/" target="_blank" rel="noopener noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'none' }}>
              Qubnix Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
