import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CtaSection from './components/CtaSection';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421] selection:bg-[#527965] selection:text-white">
        <Navbar />

        <main className="flex-grow pt-16 sm:pt-20 pb-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          {/* CTA Section across all pages */}
          <CtaSection />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
