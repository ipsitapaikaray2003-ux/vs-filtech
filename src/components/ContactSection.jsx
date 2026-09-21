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
  ShieldCheck,
  FileText
} from 'lucide-react';
import contactGraphicBg from '../assets/contact_graphic_bg.jpg';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    industry: 'Cement & Building Materials',
    application: '',
    airVolume: '',
    operatingTemp: '',
    dustMaterial: '',
    existingBagFilter: 'No',
    requirementDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Construct formatted WhatsApp engineering inquiry message
    const waText = 
`*Preliminary Engineering RFQ - VS Filtech*
----------------------------------------
👤 *Contact Person:* ${formData.name || 'Not provided'}
🏢 *Company:* ${formData.company || 'Not provided'}
📱 *Mobile / WhatsApp:* ${formData.phone}
✉️ *Email:* ${formData.email || 'Not provided'}
🏭 *Industry:* ${formData.industry}
⚙️ *Process Application:* ${formData.application || 'Not specified'}
💨 *Air Volume:* ${formData.airVolume ? `${formData.airVolume} Nm³/hr` : 'To be calculated'}
🌡️ *Operating Temperature:* ${formData.operatingTemp ? `${formData.operatingTemp} °C` : 'Ambient'}
🌪️ *Dust / Material:* ${formData.dustMaterial || 'General industrial particulate'}
🔄 *Existing Bag Filter?:* ${formData.existingBagFilter}
📝 *Requirement Details:* ${formData.requirementDetails || 'Please provide technical proposal, sizing, and quotation.'}
----------------------------------------
_Sent via vsfiltech.com/contact_`;

    const encoded = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/911234567890?text=${encoded}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="contact-section"
      style={{ backgroundImage: `url(${contactGraphicBg})` }}
    >
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="contact-section-header">
          <div className="contact-eyebrow">
            <span className="contact-live-dot"></span>
            <Sparkles size={14} className="contact-sparkle" />
            <span>ENGINEERING ASSESSMENT &amp; QUOTATION DESK</span>
          </div>

          <h2 className="contact-main-title">
            Tell Us About <span style={{ color: '#38bdf8' }}>Your Requirement</span>
          </h2>

          <p className="contact-main-subtitle">
            Provide your process airflow, temperature, and dust properties below for a preliminary bag-filter assessment, sizing verification, and formal quotation.
          </p>
        </div>

        {/* 2-Column Contact & Form Layout */}
        <div className="contact-layout-grid">
          {/* Left Column: Plant Info & Map */}
          <div className="contact-info-column">
            <div className="contact-cards-group">
              {/* Phone & WhatsApp Card */}
              <div className="contact-detail-card highlight-card">
                <div className="detail-icon-box icon-wa">
                  <MessageCircle size={24} />
                </div>
                <div className="detail-text-box">
                  <span className="detail-label">WhatsApp Technical Desk</span>
                  <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="detail-link wa-link">
                    Chat on WhatsApp
                  </a>
                  <span className="detail-hint">Direct engineering assistance & drawing review</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-detail-card">
                <div className="detail-icon-box">
                  <Mail size={22} />
                </div>
                <div className="detail-text-box">
                  <span className="detail-label">Official Engineering Email</span>
                  <a href="mailto:sales@vsfiltech.com" className="detail-link">
                    sales@vsfiltech.com
                  </a>
                  <span className="detail-hint">Send datasheets, tender specs & CAD drawings</span>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-detail-card">
                <div className="detail-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="detail-text-box">
                  <span className="detail-label">Ghaziabad Works & Facility</span>
                  <p className="detail-address">
                    Pawan Puri Industrial Area, Muradnagar,<br />
                    Ghaziabad, Uttar Pradesh — 201206, India
                  </p>
                  <span className="detail-hint">Plant inspection & client visits by appointment</span>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="contact-map-card">
              <div className="map-header-bar">
                <div className="map-title-row">
                  <MapPin size={16} className="map-pin-icon" />
                  <span>VS Filtech Manufacturing Facility (Ghaziabad, UP)</span>
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
                  height="260"
                  style={{ border: 0, minHeight: '260px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Questionnaire Form */}
          <div className="contact-form-column">
            <div className="contact-form-glass">
              <div className="form-header-row">
                <div className="form-header-badge">
                  <FileText size={15} />
                  <span>PRELIMINARY BAG-FILTER QUESTIONNAIRE</span>
                </div>
                <span className="form-header-status">
                  <ShieldCheck size={14} /> Confidential
                </span>
              </div>

              <h3 className="form-box-title">Tell Us About Your Requirement</h3>
              <p className="form-box-subtitle">
                This allows our engineers to calculate air-to-cloth ratio, media selection, and casing dimensions accurately.
              </p>

              {submitted && (
                <div className="form-success-banner">
                  <CheckCircle2 size={18} className="success-icon" />
                  <span>Requirement formatted! WhatsApp chat launched in a new tab.</span>
                </div>
              )}

              <form onSubmit={handleWhatsAppSubmit} className="contact-actual-form">
                {/* 1. Name & Company */}
                <div className="form-row-2">
                  <div className="form-field">
                    <label className="field-label">Name *</label>
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
                    <label className="field-label">Company *</label>
                    <input 
                      type="text" 
                      required
                      className="field-input" 
                      placeholder="e.g. UltraTech / Jindal / Plant Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                {/* 2. Mobile & Email */}
                <div className="form-row-2">
                  <div className="form-field">
                    <label className="field-label">Mobile / WhatsApp *</label>
                    <input 
                      type="tel" 
                      required 
                      className="field-input" 
                      placeholder="Enter mobile / WhatsApp number"
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

                {/* 3. Industry & Application */}
                <div className="form-row-2">
                  <div className="form-field">
                    <label className="field-label">Industry</label>
                    <select 
                      className="field-select"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    >
                      <option value="Cement & Building Materials">Cement &amp; Building Materials</option>
                      <option value="Foundries & Casting">Foundries &amp; Casting</option>
                      <option value="Steel & Induction Furnaces">Steel &amp; Induction Furnaces</option>
                      <option value="Aluminium & Non-Ferrous Industries">Aluminium &amp; Non-Ferrous Industries</option>
                      <option value="Rice & Food Processing">Rice &amp; Food Processing</option>
                      <option value="Minerals & Minerals Processing">Minerals &amp; Minerals Processing</option>
                      <option value="Chemical Industries">Chemical Industries</option>
                      <option value="Pharmaceutical Industries">Pharmaceutical Industries</option>
                      <option value="Fertilizer Industries">Fertilizer Industries</option>
                      <option value="Power & Energy">Power &amp; Energy</option>
                      <option value="Wood & Biomass">Wood &amp; Biomass</option>
                      <option value="General Manufacturing">General Manufacturing</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="field-label">Application</label>
                    <input 
                      type="text" 
                      className="field-input" 
                      placeholder="e.g. Boiler Flue Gas / Kiln Exhaust / Grinding"
                      value={formData.application}
                      onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                    />
                  </div>
                </div>

                {/* 4. Air Volume & Operating Temperature */}
                <div className="form-row-2">
                  <div className="form-field">
                    <label className="field-label">Air Volume (Nm³/hr or CFM)</label>
                    <input 
                      type="text" 
                      className="field-input" 
                      placeholder="e.g. 50,000 Nm³/hr or 30,000 CFM"
                      value={formData.airVolume}
                      onChange={(e) => setFormData({ ...formData, airVolume: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">Operating Temperature (°C)</label>
                    <input 
                      type="text" 
                      className="field-input" 
                      placeholder="e.g. 180°C continuous / 210°C surge"
                      value={formData.operatingTemp}
                      onChange={(e) => setFormData({ ...formData, operatingTemp: e.target.value })}
                    />
                  </div>
                </div>

                {/* 5. Dust / Material & Existing Bag Filter */}
                <div className="form-row-2">
                  <div className="form-field">
                    <label className="field-label">Dust / Material</label>
                    <input 
                      type="text" 
                      className="field-input" 
                      placeholder="e.g. Coal Fly Ash / Silica Sand / Wood Shavings"
                      value={formData.dustMaterial}
                      onChange={(e) => setFormData({ ...formData, dustMaterial: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">Existing Bag Filter? (Yes / No)</label>
                    <select 
                      className="field-select"
                      value={formData.existingBagFilter}
                      onChange={(e) => setFormData({ ...formData, existingBagFilter: e.target.value })}
                    >
                      <option value="No (New Green-field Installation)">No (New Installation)</option>
                      <option value="Yes (Retrofit / Replacement / Upgradation)">Yes (Retrofit / Replacement)</option>
                      <option value="Only Spares Required (Bags, Cages, Valves)">Only Spares Required</option>
                    </select>
                  </div>
                </div>

                {/* 6. Requirement Details */}
                <div className="form-field">
                  <label className="field-label">Requirement Details</label>
                  <textarea 
                    rows="3" 
                    className="field-textarea" 
                    placeholder="Mention moisture conditions, statutory emission target, footprint constraints or specific project timeline..."
                    value={formData.requirementDetails}
                    onChange={(e) => setFormData({ ...formData, requirementDetails: e.target.value })}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-whatsapp-submit">
                  <MessageCircle size={20} className="btn-wa-icon" />
                  <span>GET QUOTATION</span>
                  <Send size={16} className="btn-send-icon" />
                </button>
              </form>

              {/* Direct WhatsApp Callout */}
              <div className="direct-wa-bar">
                <span>Direct technical WhatsApp line:</span>
                <a 
                  href="https://wa.me/911234567890?text=Hi%20VS%20Filtech,%20I%20have%20an%20inquiry%20regarding%20industrial%20dust%20collection." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="direct-wa-link"
                >
                  <MessageCircle size={15} /> Chat on WhatsApp
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
