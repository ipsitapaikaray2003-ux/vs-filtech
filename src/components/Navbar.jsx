import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Flame, Droplets, Layers, ArrowRight } from 'lucide-react';
import logoColor from '../assets/logo_transparent.png';
import logoWhite from '../assets/logo_white.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  return (
    <header className={`navbar ${isTransparent ? 'navbar-transparent' : (scrolled ? 'navbar-scrolled' : 'navbar-solid')}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu} aria-label="VS Filtech Home">
          <img 
            src={logoWhite} 
            alt="VS Filtech - Cleaner Air Brighter Tomorrow" 
            className="navbar-logo-img navbar-logo-white" 
          />
          <img 
            src={logoColor} 
            alt="VS Filtech - Cleaner Air Brighter Tomorrow" 
            className="navbar-logo-img navbar-logo-color" 
          />
        </Link>

        <nav className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' && !location.hash ? 'active' : ''}`} 
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
            onClick={closeMobileMenu}
          >
            About Us
          </Link>

          <Link 
            to="/services" 
            className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} 
            onClick={closeMobileMenu}
          >
            Services
          </Link>

          <Link 
            to="/gallery" 
            className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} 
            onClick={closeMobileMenu}
          >
            Gallery
          </Link>

          <div 
            className={`nav-dropdown-container ${dropdownOpen ? 'dropdown-active' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              type="button"
              className={`nav-link dropdown-trigger ${location.pathname.startsWith('/products') ? 'active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              <span>Products</span>
              <ChevronDown size={15} className={`chevron-icon ${dropdownOpen ? 'rotate' : ''}`} />
            </button>
            
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <Link to="/products/pulse-jet-filter" className="dropdown-item" onClick={closeMobileMenu}>
                <div className="dropdown-item-icon icon-flame">
                  <Flame size={20} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">Pulse Jet Bag Filters</span>
                  <span className="dropdown-item-subtitle">High-Efficiency Dust Collection</span>
                </div>
                <span className="dropdown-tag">Featured</span>
              </Link>

              <Link to="/products/filter-bags-cages" className="dropdown-item" onClick={closeMobileMenu}>
                <div className="dropdown-item-icon icon-layers">
                  <Layers size={20} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">Filter Bags & Cages</span>
                  <span className="dropdown-item-subtitle">Quality Filtration Media</span>
                </div>
              </Link>

              <Link to="/products/control-panels" className="dropdown-item" onClick={closeMobileMenu}>
                <div className="dropdown-item-icon icon-droplets">
                  <Droplets size={20} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">Control Panels</span>
                  <span className="dropdown-item-subtitle">Automation for Dust Collection</span>
                </div>
              </Link>

              <div className="dropdown-divider"></div>

              <Link to="/products" className="dropdown-item dropdown-item-sub" onClick={closeMobileMenu}>
                <div className="dropdown-item-icon icon-layers">
                  <Layers size={18} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">All Products & Systems</span>
                  <span className="dropdown-item-subtitle">View complete catalog</span>
                </div>
              </Link>
            </div>
          </div>

          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          {/* Mobile Only: Get a Quote inside Mobile Menu Drawer */}
          <Link to="/contact" className="nav-mobile-quote-btn" onClick={closeMobileMenu}>
            <span>Get a Quote</span>
            <ArrowRight size={17} />
          </Link>
        </nav>

        <div className="navbar-right">
          <Link to="/contact" className="nav-cta-btn hide-mobile">
            Get a Quote
          </Link>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
