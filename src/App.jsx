import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import ServicePage from './components/ServicePage/ServicePage';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="app-layout">
          <Header />
          <main className="main-content">
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Services Overview */}
              <Route path="/services" element={<Services />} />

              {/* Dynamic Reusable Service Page for all 8 verticals */}
              <Route path="/services/:slug" element={<ServicePage />} />

              {/* Selected Work / Portfolio */}
              <Route path="/work" element={<Work />} />

              {/* Contact Page */}
              <Route path="/contact" element={<Contact />} />

              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
