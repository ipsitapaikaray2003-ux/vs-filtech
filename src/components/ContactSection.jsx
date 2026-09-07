import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    category: 'High Temperature Filter Bags (Nomex, Fiberglass, PTFE, PPS)',
    dimensions: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Construct formatted WhatsApp message
    const waText = 
`*New Filtration Inquiry - VS Filtech*
----------------------------------------
👤 *Contact Name:* ${formData.name || 'Not provided'}
🏢 *Company:* ${formData.company || 'Not provided'}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || 'Not provided'}
🏭 *Product Category:* ${formData.category}
📐 *Dimensions/Specs:* ${formData.dimensions || 'Standard / Custom'}
📝 *Message/Details:* ${formData.message || 'Please provide quotation and specifications.'}
----------------------------------------
_Sent via vsfiltech.com_`;

    const encoded = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/911234567890?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Subtle background ambient glows */}
      <div className="contact-ambient-glow glow-left"></div>
      <div className="contact-ambient-glow glow-right"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="contact-section-header">
          <div className="contact-eyebrow">
            <span className="contact-live-dot"></span>
            <Sparkles size={14} className="contact-sparkle" />
            <span>QUICK INQUIRY & PLANT CONTACT</span>
          </div>

          <h2 className="contact-main-title">
            Connect With Our <span className="text-gradient">Filtration Engineers</span>
          </h2>

          <p className="contact-main-subtitle">
            Need custom bag dimensions, sample reverse-engineering, or a fast manufacturing quotation? Submit your inquiry directly to our WhatsApp desk at <strong>+91 1234567890</strong> or visit our Ghaziabad plant.
          </p>
        </div>

        {/* 2-Column Contact & Map Layout */}
        <div className="contact-layout-grid">
          {/* Left Column: Plant Info & Interactive Google Map */}
          <div className="contact-info-column">
            {/* Quick Contact Cards */}
            <div className="contact-cards-group">
              {/* Phone & WhatsApp Card */}
              <div className="contact-detail-card highlight-card">
                <div className="detail-icon-box icon-wa">
                  <MessageCircle size={24} />
                </div>
                <div className="detail-text-box">
                  <span className="detail-label">WhatsApp & Phone Desk</span>
                  <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="detail-link wa-link">
                    +91 1234567890
                  </a>
                  <span className="detail-hint">Direct engineering assistance & instant RFQ</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-detail-card">
                <div className="detail-icon-box">
                  <Mail size={22} />
                </div>
                <div className="detail-text-box">
                  <span className="detail-label">Official Email</span>
                  <a href="mailto:sales@vsfiltech.com" className="detail-link">
                    sales@vsfiltech.com
                  </a>
                  <span className="detail-hint">Send drawings, RFQs & tender inquiries</span>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-detail-card">
                <div className="detail-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="detail-text-box">
                  <span className="detail-label">Ghaziabad Manufacturing Plant</span>
                  <p className="detail-address">
                    Pawan Puri Industrial Area, Muradnagar,<br />
                    Ghaziabad, Uttar Pradesh, India - 201206
                  </p>
                  <span className="detail-hint">Open Mon – Sat: 9:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="contact-map-container">
              <div className="map-header-bar">
                <div className="map-title-row">
                  <MapPin size={16} className="map-pin-icon" />
                  <span>VS Filtech Plant Location (Ghaziabad, UP)</span>
                </div>
                <a 
                  href="https://maps.google.com/?q=Ghaziabad+Uttar+Pradesh+India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-ext-link"
                >
                  Open in Maps <ExternalLink size={13} />
                </a>
              </div>
              <div className="map-iframe-wrapper">
                <iframe
                  title="VS Filtech Manufacturing Facility Ghaziabad"
                  src="https://maps.google.com/maps?q=Muradnagar%20Ghaziabad%20Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, minHeight: '280px' }}
                  allowFullScreen=""
                  loading="eager"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Premium WhatsApp Inquiry Form */}
          <div className="contact-form-column">
            <div className="contact-form-glass">
              <div className="form-header-row">
                <div className="form-header-badge">
                  <MessageCircle size={15} />
                  <span>DIRECT WHATSAPP ROUTING</span>
                </div>
                <span className="form-header-status">
                  <ShieldCheck size={14} /> Instant Response
                </span>
              </div>

              <h3 className="form-box-title">Request Quotation & Technical Specs</h3>
              <p className="form-box-subtitle">
                Fill details below — clicking submit opens your inquiry formatted directly into WhatsApp with our technical desk.
              </p>

              {submitted && (
                <div className="form-success-banner">
                  <CheckCircle2 size={18} className="success-icon" />
                  <span>Inquiry formatted! WhatsApp chat launched in a new tab.</span>
                </div>
              )}

              <form onSubmit={handleWhatsAppSubmit} className="contact-actual-form">
                <div className="form-row-2">
                  <div className="form-field">
                    <label className="field-label">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="field-input" 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">Company / Plant Name</label>
                    <input 
                      type="text" 
                      className="field-input" 
                      placeholder="e.g. Ultratech / BHEL / Thermal Plant"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label className="field-label">WhatsApp Mobile Number *</label>
                    <input 
                      type="tel" 
                      required 
                      className="field-input" 
                      placeholder="+91 1234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">Email Address</label>
                    <input 
                      type="email" 
                      className="field-input" 
                      placeholder="engineer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="field-label">Product / Technical Area of Interest *</label>
                  <select 
                    className="field-select"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="High Temperature Filter Bags (Nomex, Fiberglass, PTFE, PPS)">
                      High Temperature Filter Bags (Nomex, Fiberglass, PTFE, PPS)
                    </option>
                    <option value="Polypropylene Filter Bags (1-200 Micron Liquid Clarification)">
                      Polypropylene Filter Bags (1-200 Micron Liquid Clarification)
                    </option>
                    <option value="Support Filter Cages & Venturies (8 to 24-Wire GI / SS316)">
                      Support Filter Cages & Venturies (8 to 24-Wire GI / SS316)
                    </option>
                    <option value="Dust Collector Pulse Valves & Sequential Timers">
                      Dust Collector Pulse Valves & Sequential Timers
                    </option>
                    <option value="Custom Bag Filter Stitching & Reverse Engineering">
                      Custom Bag Filter Stitching & Reverse Engineering
                    </option>
                    <option value="Baghouse Technical Audit & Media Replacement">
                      Baghouse Technical Audit & Media Replacement
                    </option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="field-label">Bag Dimensions / Quantity (Optional)</label>
                  <input 
                    type="text" 
                    className="field-input" 
                    placeholder="e.g. Dia 160mm x Length 3000mm, Snap Band, 500 pcs"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Requirement Details / Message</label>
                  <textarea 
                    rows="3" 
                    className="field-textarea" 
                    placeholder="Provide operating temperature, gas type, moisture levels or tubesheet specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                {/* Primary WhatsApp Submit Button */}
                <button type="submit" className="btn btn-whatsapp-submit">
                  <MessageCircle size={20} className="btn-wa-icon" />
                  <span>Send Inquiry via WhatsApp</span>
                  <Send size={16} className="btn-send-icon" />
                </button>
              </form>

              {/* Direct WhatsApp Callout */}
              <div className="direct-wa-bar">
                <span>Prefer a quick direct chat?</span>
                <a 
                  href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20am%20interested%20in%20your%20industrial%20bag%20filter%20products." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="direct-wa-link"
                >
                  <MessageCircle size={15} /> WhatsApp +91 1234567890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
