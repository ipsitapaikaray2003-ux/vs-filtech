import React, { useEffect } from 'react';
import Services from '../components/Services';
import ComprehensiveSupport from '../components/ComprehensiveSupport';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page-root" style={{ paddingTop: '75px', minHeight: '100vh', background: '#ffffff' }}>
      <Services />
      <ComprehensiveSupport />
    </div>
  );
};

export default ServicesPage;

