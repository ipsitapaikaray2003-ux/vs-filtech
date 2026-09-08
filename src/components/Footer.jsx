import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo_dark_theme.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoImg} alt="VS Filtech - Cleaner Air Brighter Tomorrow" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">
              Designers and manufacturers of high-performance industrial bag filters, high temperature filter bags, polypropylene liquid filtration media, and custom support cages.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="/#services">Manufacturing Services</a></li>
              <li><a href="/#products">Products Catalog</a></li>
              <li><Link to="/contact">Contact & RFQ</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li><Link to="/products/filter-bag">Filter Bag Manufacturers</Link></li>
              <li><Link to="/products/high-temperature">High Temperature Bags</Link></li>
              <li><Link to="/products/polypropylene">Polypropylene Bags</Link></li>
              <li><Link to="/products/filter-bag">Baghouse Spares & Cages</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Manufacturing Plant</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Industrial Area, Ghaziabad, Uttar Pradesh, India - 201206</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+911234567890" style={{ color: 'inherit' }}>+91 1234567890</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>sales@vsfiltech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VS Filtech - Industrial Bag Filter Manufacturers. All rights reserved.</p>
          <div className="footer-credits">
            Developed by{' '}
            <a 
              href="https://www.qubnixtechnology.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="credits-link"
            >
              Qubnix Technology
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
