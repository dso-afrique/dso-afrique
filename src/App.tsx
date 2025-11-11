import ReactPixel from 'react-facebook-pixel';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYouPage from './pages/ThankYouPage';

function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    const pixelId = '464139726058212'; // 👉 remplace par ton vrai Pixel ID
    ReactPixel.init(pixelId);
    ReactPixel.pageView();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <PixelTracker />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
