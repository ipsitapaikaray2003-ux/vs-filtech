import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Wind, 
  Layers, 
  Settings, 
  Cpu, 
  ArrowRight, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
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
              className={`dropdown-menu mega-menu ${dropdownOpen ? 'show' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mega-menu-grid">
                {/* Column 1: Dust Collection Equipment */}
                <div className="mega-menu-col">
                  <div className="mega-col-header header-dust">
                    <div className="mega-col-icon">
                      <Wind size={16} />
                    </div>
                    <div>
                      <span className="mega-col-title">Dust Collection</span>
                      <span className="mega-col-subtitle">Systems & Equipment</span>
                    </div>
                  </div>
                  <ul className="mega-col-links">
                    <li>
                      <Link to="/products/pulse-jet-bag-filters" onClick={closeMobileMenu}>
                        Pulse Jet Bag Filters
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/reverse-air-bag-filters" onClick={closeMobileMenu}>
                        Reverse Air Bag Filters
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/dust-collectors" onClick={closeMobileMenu}>
                        Dust Collectors (Turnkey)
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/cartridge-filters" onClick={closeMobileMenu}>
                        Cartridge Dust Collectors
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/cyclone-separators" onClick={closeMobileMenu}>
                        Cyclone Separators
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2: Filter Components */}
                <div className="mega-menu-col">
                  <div className="mega-col-header header-components">
                    <div className="mega-col-icon">
                      <Layers size={16} />
                    </div>
                    <div>
                      <span className="mega-col-title">Filter Components</span>
                      <span className="mega-col-subtitle">Media & Spares</span>
                    </div>
                  </div>
                  <ul className="mega-col-links">
                    <li>
                      <Link to="/products/filter-bag" onClick={closeMobileMenu} className="highlighted-link">
                        <span>Filter Bags</span>
                        <span className="badge-flagship">Flagship</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/filter-cages" onClick={closeMobileMenu} className="highlighted-link">
                        <span>Filter Cages</span>
                        <span className="badge-flagship">Flagship</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/venturis" onClick={closeMobileMenu}>
                        Venturis (Alu &amp; Steel)
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/snap-bands" onClick={closeMobileMenu}>
                        Snap Bands &amp; Clamps
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/pulse-valves" onClick={closeMobileMenu}>
                        Pulse &amp; Solenoid Valves
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: Mechanical Equipment */}
                <div className="mega-menu-col">
                  <div className="mega-col-header header-mechanical">
                    <div className="mega-col-icon">
                      <Settings size={16} />
                    </div>
                    <div>
                      <span className="mega-col-title">Mechanical</span>
                      <span className="mega-col-subtitle">Discharge & Air Handling</span>
                    </div>
                  </div>
                  <ul className="mega-col-links">
                    <li>
                      <Link to="/products/rotary-air-locks" onClick={closeMobileMenu}>
                        Rotary Air Lock Valves
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/screw-conveyors" onClick={closeMobileMenu}>
                        Screw Conveyors
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/id-fans" onClick={closeMobileMenu}>
                        Heavy-Duty ID Fans
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/hopper-vibrators" onClick={closeMobileMenu}>
                        Hopper Bin Vibrators
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/dampers" onClick={closeMobileMenu}>
                        Butterfly &amp; Poppet Dampers
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 4: Electrical & Automation */}
                <div className="mega-menu-col">
                  <div className="mega-col-header header-electrical">
                    <div className="mega-col-icon">
                      <Cpu size={16} />
                    </div>
                    <div>
                      <span className="mega-col-title">Electrical &amp; Auto</span>
                      <span className="mega-col-subtitle">Panels &amp; Instrumentation</span>
                    </div>
                  </div>
                  <ul className="mega-col-links">
                    <li>
                      <Link to="/products/control-panels" onClick={closeMobileMenu}>
                        Bag Filter Control Panels
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/control-panels" onClick={closeMobileMenu}>
                        PLC &amp; VFD Automation Panels
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/sequential-pulse-controllers" onClick={closeMobileMenu}>
                        Sequential Pulse Controllers
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/dp-switches" onClick={closeMobileMenu}>
                        DP Switches &amp; Transmitters
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Mega Menu Action Bar */}
              <div className="mega-menu-footer">
                <Link to="/products" className="mega-footer-link" onClick={closeMobileMenu}>
                  <span>Explore Complete Equipment Catalog (19+ Solutions)</span>
                  <ChevronRight size={15} />
                </Link>
                <Link to="/engineering" className="mega-footer-eng" onClick={closeMobileMenu}>
                  <Sparkles size={14} />
                  <span>Engineering Sizing &amp; Design</span>
                </Link>
              </div>
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
            to="/applications" 
            className={`nav-link ${location.pathname === '/applications' || location.pathname === '/projects' ? 'active' : ''}`} 
            onClick={closeMobileMenu}
          >
            Applications
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
