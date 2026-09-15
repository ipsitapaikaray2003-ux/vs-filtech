import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ProductsPage from './pages/ProductsPage';
import PulseJetFilterPage from './pages/PulseJetFilterPage';
import FilterBagsCagesPage from './pages/FilterBagsCagesPage';
import ControlPanelsPage from './pages/ControlPanelsPage';
import EngineeringPage from './pages/EngineeringPage';
import RetrofitPage from './pages/RetrofitPage';
import IndustriesPage from './pages/IndustriesPage';
import ProjectsPage from './pages/ProjectsPage';

// Old routes for backwards compatibility
import ProductPoly from './pages/ProductPoly';
import ProductHighTemp from './pages/ProductHighTemp';
import FilterBagPage from './pages/FilterBagPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/engineering" element={<EngineeringPage />} />
            <Route path="/retrofit" element={<RetrofitPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Services & Gallery backwards compatibility */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<ProjectsPage />} />

            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/pulse-jet-filter" element={<PulseJetFilterPage />} />
            <Route path="/products/pulse_jet_filter" element={<PulseJetFilterPage />} />
            <Route path="/products/pulse-jet-bag-filters" element={<PulseJetFilterPage />} />
            <Route path="/products/pulse-jet-dust-collector" element={<PulseJetFilterPage />} />
            <Route path="/products/filter-bags-cages" element={<FilterBagsCagesPage />} />
            <Route path="/products/control-panels" element={<ControlPanelsPage />} />
            
            <Route path="/products/filter-bag" element={<FilterBagPage />} />
            <Route path="/products/bag-filter" element={<FilterBagPage />} />
            <Route path="/products/filter-bag-manufacturers" element={<FilterBagPage />} />
            <Route path="/products/polypropylene" element={<ProductPoly />} />
            <Route path="/products/polypropylene-filter-bag" element={<ProductPoly />} />
            <Route path="/polypropylene-filter-bag" element={<ProductPoly />} />
            <Route path="/products/high-temperature" element={<ProductHighTemp />} />
            <Route path="/products/high-temperature-filter-bags" element={<ProductHighTemp />} />
            <Route path="/high-temperature-filter-bags" element={<ProductHighTemp />} />

            {/* Dynamic Individual Product & Spare Detail Route */}
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <MobileActionBar />
      </div>
    </Router>
  );
}

export default App;
