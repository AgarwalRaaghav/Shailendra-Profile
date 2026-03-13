import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';
import ConsultationPage from './pages/Consultation';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="consultation" element={<ConsultationPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
