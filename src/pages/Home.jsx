import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import BrandSloganSection from '../components/BrandSloganSection';
import ProcessCapabilityBanner from '../components/ProcessCapabilityBanner';
import Products from '../components/Products';
import EngineeringApproachSection from '../components/EngineeringApproachSection';
import QualityInspectionSection from '../components/QualityInspectionSection';
import WhyVSFiltech from '../components/WhyVSFiltech';
import ContactSection from '../components/ContactSection';
import { scrollToSection } from '../utils/scrollUtils';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    let targetId = null;
    if (location.hash) {
      targetId = location.hash.replace('#', '');
    }

    if (targetId) {
      const timer = setTimeout(() => {
        scrollToSection(targetId);
      }, 120);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Hero />
      <BrandSloganSection />
      <ProcessCapabilityBanner />
      <Products />
      <EngineeringApproachSection />
      <QualityInspectionSection />
      <WhyVSFiltech />
      <ContactSection />
    </>
  );
};

export default Home;
