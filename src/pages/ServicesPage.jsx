import React, { useEffect } from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page-root" style={{ paddingTop: '75px', minHeight: '100vh', background: '#ffffff' }}>
      <Services />
    </div>
  );
};

export default ServicesPage;
