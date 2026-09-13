import { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page-view" style={{ paddingTop: '60px', minHeight: '85vh', background: '#0a1628' }}>
      <ContactSection />
    </div>
  );
};

export default Contact;
