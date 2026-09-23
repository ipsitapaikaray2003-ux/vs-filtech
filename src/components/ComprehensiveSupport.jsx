import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Settings, 
  Package, 
  FileText, 
  ArrowRight, 
  Phone, 
  MessageCircle,
  ClipboardCheck
} from 'lucide-react';
import '../pages/ProductDetails.css';

const supportServicesData = [
  {
    title: 'Audit of Existing Bag Filters',
    icon: ClipboardCheck,
    desc: 'On-site technical evaluation of your operating dust collector—differential pressure analysis, dye leak detection, airflow profiling, and emission audit.'
  },
  {
    title: 'Preventive Maintenance',
    icon: Wrench,
    desc: 'Scheduled maintenance programs to ensure your dust collection systems operate at peak efficiency and minimize downtime.'
  },
  {
    title: 'Installation & Commissioning',
    icon: Settings,
    desc: 'Expert on-site installation, system commissioning, and performance testing to ensure your equipment is set up right from day one.'
  },
  {
    title: 'Spare Parts Supply',
    icon: Package,
    desc: 'Genuine spare parts readily available—filter bags, cages, solenoid valves, timers, and all critical components.'
  },
  {
    title: 'System Upgrades & Retrofits',
    icon: FileText,
    desc: 'Upgrade existing systems with latest technology for improved efficiency, compliance, and reduced operating costs.'
  }
];

const ComprehensiveSupport = () => {
  return (
    <section className="comprehensive-support-section" id="comprehensive-support">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="support-eyebrow">
            <span className="support-eyebrow-dot"></span> OUR SERVICES
          </div>
          <h2 className="support-main-title">
            Comprehensive Support
          </h2>
          <p className="support-main-subtitle">
            Our commitment doesn't end with installation. We provide complete after-sales support to keep your systems running efficiently.
          </p>
        </div>

        <div className="support-cards-grid">
          {supportServicesData.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="support-feature-card">
                <div className="support-icon-box">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <div className="support-content-col">
                  <h4 className="support-feature-title">{srv.title}</h4>
                  <p className="support-feature-desc">{srv.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Support Callout Box */}
        <div className="support-callout-card">
          <h3 className="support-callout-title">
            Need support for your existing system?
          </h3>
          <p className="support-callout-desc">
            Our service team is ready to help with maintenance, spares, and upgrades.
          </p>
          <div className="support-callout-buttons">
            <Link to="/contact" className="btn-quote-orange">
              <span>Get a Quote</span>
              <ArrowRight size={17} />
            </Link>
            <a href="tel:+918496978456" className="btn-call-outline">
              <Phone size={17} />
              <span>Call Now</span>
            </a>
            <a 
              href="https://wa.me/918496978456?text=Hi%20VS%20Filtech,%20I%20need%20support%20for%20my%20dust%20collection%20system." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-peach"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveSupport;
