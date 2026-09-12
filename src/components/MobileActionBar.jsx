import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './MobileActionBar.css';

const MobileActionBar = () => {
  return (
    <div className="mobile-action-bar-wrap" aria-label="Quick Mobile Contact Actions">
      <div className="mobile-action-bar-inner">
        {/* Call Now */}
        <a 
          href="tel:+911234567890" 
          className="mob-action-btn mob-btn-call"
          aria-label="Call VS Filtech"
        >
          <Phone size={18} />
          <span>Call</span>
        </a>

        {/* Inquiry Form */}
        <Link 
          to="/contact" 
          className="mob-action-btn mob-btn-inquiry"
          aria-label="Send Inquiry to VS Filtech"
        >
          <Mail size={18} />
          <span>Inquiry</span>
        </Link>

        {/* WhatsApp Chat */}
        <a 
          href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20am%20interested%20in%20your%20industrial%20bag%20filter%20products." 
          target="_blank" 
          rel="noopener noreferrer"
          className="mob-action-btn mob-btn-whatsapp"
          aria-label="Chat on WhatsApp with VS Filtech"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;
