import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Flame, Droplets, Layers, ArrowRight, Cpu } from 'lucide-react';
import logoColor from '../assets/logo_transparent.png';
import logoDark from '../assets/logo_dark_theme.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

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
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  }, [location]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    // 300ms grace period so cursor can transition smoothly across any gap without disappearing
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled;
  const currentLogo = isTransparent ? logoDark : logoColor;

  return (
    <header className={`navbar ${isTransparent ? 'navbar-transparent' : (scrolled ? 'navbar-scrolled' : 'navbar-solid')}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu} aria-label="VS Filtech Home">
          <img 
            src={currentLogo} 
            alt="VS Filtech - Engineering A Cleaner Tomorrow" 
            className="navbar-logo-img" 
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
            About
          </Link>

          <div 
            ref={dropdownRef}
            className={`nav-dropdown-container ${dropdownOpen ? 'dropdown-active' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              type="button"
              className={`nav-link dropdown-trigger ${location.pathname.startsWith('/products') ? 'active' : ''}`}
              onClick={handleDropdownToggle}
              aria-expanded={dropdownOpen}
            >
              <span>Products</span>
              <ChevronDown size={15} className={`chevron-icon ${dropdownOpen ? 'rotate' : ''}`} />
            </button>
            
            <div 
              className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/products/pulse-jet-filter" className="dropdown-item" onClick={closeMobileMenu}>
                <div className="dropdown-item-icon icon-flame">
                  <Flame size={18} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">Pulse Jet Bag Filters</span>
                  <span className="dropdown-item-subtitle">Online & offline baghouses</span>
                </div>
              </Link>

              <Link to="/products/dust-collector-system" className="dropdown-item" onClick={closeMobileMenu}>
                <div className="dropdown-item-icon icon-layers">
                  <Layers size={18} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">Dust Collection Systems</span>
                  <span className="dropdown-item-subtitle">Complete turnkey installations</span>
                </div>
              </Link>

              <Link to="/products/filter-bags-cages" className="dropdown-item" onClick={closeMobileMenu}>
                <div className="dropdown-item-icon icon-layers">
                  <Layers size={18} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">Filter Bags & Cages</span>
                  <span className="dropdown-item-subtitle">Replacement media & support cages</span>
                </div>
              </Link>

              <Link to="/products/pleated-filter-bag" className="dropdown-item" onClick={closeMobileMenu}>
                <div className="dropdown-item-icon icon-layers">
                  <Layers size={18} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">Cartridge Filters</span>
                  <span className="dropdown-item-subtitle">Compact high surface area solutions</span>
                </div>
              </Link>

              <Link to="/products/cyclone-dust-collector" className="dropdown-item" onClick={closeMobileMenu}>
                <div className="dropdown-item-icon icon-droplets">
                  <Droplets size={18} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">Dampers & Accessories</span>
                  <span className="dropdown-item-subtitle">Valves, airlocks & duct accessories</span>
                </div>
              </Link>

              <Link to="/products/control-panels" className="dropdown-item" onClick={closeMobileMenu}>
                <div className="dropdown-item-icon icon-cpu">
                  <Cpu size={18} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">Control Panels & Electrical</span>
                  <span className="dropdown-item-subtitle">HT, LT, MCC, VFD &amp; APFC Panels</span>
                </div>
              </Link>

              <div className="dropdown-divider"></div>

              <Link to="/products" className="dropdown-item dropdown-item-sub" onClick={closeMobileMenu}>
                <div className="dropdown-item-icon icon-layers">
                  <Layers size={16} />
                </div>
                <div className="dropdown-item-info">
                  <span className="dropdown-item-title">All Products & Systems</span>
                  <span className="dropdown-item-subtitle">View complete equipment catalog</span>
                </div>
              </Link>
            </div>
          </div>

          <Link 
            to="/engineering" 
            className={`nav-link ${location.pathname === '/engineering' ? 'active' : ''}`} 
            onClick={closeMobileMenu}
          >
            Engineering
          </Link>

          <Link 
            to="/retrofit" 
            className={`nav-link ${location.pathname === '/retrofit' ? 'active' : ''}`} 
            onClick={closeMobileMenu}
          >
            Retrofit
          </Link>

          <Link 
            to="/industries" 
            className={`nav-link ${location.pathname === '/industries' ? 'active' : ''}`} 
            onClick={closeMobileMenu}
          >
            Industries
          </Link>

          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} 
            onClick={closeMobileMenu}
          >
            Projects
          </Link>

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
