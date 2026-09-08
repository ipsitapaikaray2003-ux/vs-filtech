import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Flame, Droplets, Layers } from 'lucide-react';
import logoImg from '../assets/logo_dark_theme.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="VS Filtech - Cleaner Air Brighter Tomorrow" className="navbar-logo-img" />
        </Link>

        <nav className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            About Us
          </Link>

          <a href="/#services" className="nav-link">
            Services
          </a>

          <div 
            className={`nav-dropdown-container ${dropdownOpen ? 'dropdown-active' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              type="button"
              className={`nav-link dropdown-trigger ${location.pathname.startsWith('/products') ? 'active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>Products</span>
              <ChevronDown size={15} className={`chevron-icon ${dropdownOpen ? 'rotate' : ''}`} />
            </button>
            
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <Link to="/products/filter-bag" className="dropdown-item">
                <div className="dropdown-item-icon" style={{ background: 'rgba(0, 229, 255, 0.12)', color: '#00e5ff' }}>
                  <Layers size={20} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">Filter Bag Manufacturers</span>
                  <span className="dropdown-item-subtitle">Bag Filter Manufacturers in India</span>
                </div>
                <span className="dropdown-tag">Featured</span>
              </Link>

              <Link to="/products/high-temperature" className="dropdown-item">
                <div className="dropdown-item-icon icon-flame">
                  <Flame size={20} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">High Temperature Filter Bag</span>
                  <span className="dropdown-item-subtitle">Manufacturers, Suppliers</span>
                </div>
                <span className="dropdown-tag">Up to 280°C</span>
              </Link>

              <Link to="/products/polypropylene" className="dropdown-item">
                <div className="dropdown-item-icon icon-droplets">
                  <Droplets size={20} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">Polypropylene Filter Bag</span>
                  <span className="dropdown-item-subtitle">Manufacturers from Ghaziabad, India</span>
                </div>
                <span className="dropdown-tag">1-200 µm</span>
              </Link>

              <div className="dropdown-divider"></div>

              <Link to="/#products" className="dropdown-item dropdown-item-sub">
                <div className="dropdown-item-icon icon-layers">
                  <Layers size={18} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">All Bag Filter Systems</span>
                  <span className="dropdown-item-subtitle">Cages, Venturies & Accessories</span>
                </div>
              </Link>
            </div>
          </div>

          <a href="/#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <div className="navbar-right">
          <a href="/#contact" className="btn btn-outline nav-btn hide-mobile">
            Get a Quote
          </a>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
