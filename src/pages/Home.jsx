import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Products from '../components/Products';
import ContactSection from '../components/ContactSection';
import { scrollToSection } from '../utils/scrollUtils';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    let targetId = null;
    if (location.hash) {
      targetId = location.hash.replace('#', '');
    } else if (location.pathname === '/services') {
      targetId = 'services';
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
      <Services />
      <About />
      <Products />
      <ContactSection />
    </>
  );
};

export default Home;
