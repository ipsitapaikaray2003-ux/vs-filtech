import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import ProductPoly from './pages/ProductPoly';
import ProductHighTemp from './pages/ProductHighTemp';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/polypropylene" element={<ProductPoly />} />
            <Route path="/products/polypropylene-filter-bag" element={<ProductPoly />} />
            <Route path="/products/high-temperature" element={<ProductHighTemp />} />
            <Route path="/products/high-temperature-filter-bags" element={<ProductHighTemp />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
