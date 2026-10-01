import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Keyboard accessibility: Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E3ECE6] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center space-x-2.5 sm:space-x-3.5 group focus-visible:outline-none min-h-[44px]"
            aria-label={`${siteContent.practice.name} Home`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#194B4E] text-[#FAF8F5] flex items-center justify-center shadow-subtle group-hover:bg-[#527965] transition-colors duration-300 shrink-0">
              <span className="font-serif text-xs sm:text-sm font-semibold tracking-wider">NB</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-base sm:text-xl font-medium tracking-tight text-[#1A2421] group-hover:text-[#194B4E] transition-colors truncate">
                {siteContent.practice.name}
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] text-[#697A72] tracking-wide font-normal truncate">
                {siteContent.practice.subBrand}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8 text-sm font-sans" aria-label="Main Navigation">
            {siteContent.navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `transition-all duration-200 py-2 font-medium relative text-[13px] tracking-wide min-h-[44px] flex items-center ${
                    isActive
                      ? 'text-[#194B4E] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#527965] after:rounded-full'
                      : 'text-[#46544E] hover:text-[#194B4E]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#194B4E] hover:bg-[#133A3C] text-[#FFFFFF] font-sans font-medium text-xs tracking-wide rounded-full shadow-subtle hover:shadow transition-all duration-200 min-h-[44px]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#BDDBE7]" />
              <span>Book a Consultation</span>
            </Link>
          </nav>

          {/* Mobile menu toggle button (Touch-friendly 44x44px minimum) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 text-[#1A2421] bg-white border border-[#E3ECE6] rounded-full shadow-subtle hover:bg-[#F2F7F4] active:bg-[#E8EFEA] flex items-center justify-center transition-colors focus-visible:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#194B4E]" /> : <Menu className="w-5 h-5 text-[#194B4E]" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop with touch tap to close */}
          <div
            className="fixed inset-0 bg-[#1A2421]/45 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu Container */}
          <div
            className="fixed top-16 sm:top-20 left-0 right-0 bottom-0 bg-[#FAF8F5] flex flex-col justify-between p-4 sm:p-6 border-t border-[#E3ECE6] shadow-xl overflow-y-auto z-50 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile site navigation"
          >
            <div className="flex flex-col space-y-2.5 pt-1">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#E3ECE6]">
                <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
                  Menu
                </span>
                <span className="text-xs text-[#697A72]">Koregaon Park & Online</span>
              </div>

              {siteContent.navigation.map((item, idx) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all min-h-[52px] ${
                      isActive
                        ? 'bg-[#E8EFEA] text-[#194B4E] border-[#527965] font-semibold shadow-subtle'
                        : 'bg-white text-[#1A2421] border-[#E3ECE6] active:bg-[#F2F7F4]'
                    }`
                  }
                >
                  <span className="font-serif text-lg">{item.name}</span>
                  <span className="text-[11px] font-sans font-medium px-2 py-0.5 bg-[#FAF8F5] text-[#697A72] border border-[#E3ECE6] rounded-full">
                    0{idx + 1}
                  </span>
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E3ECE6] flex flex-col space-y-3 bg-white p-4 sm:p-5 rounded-2xl border border-[#E3ECE6] mt-4 shadow-subtle">
              <div>
                <p className="text-[#194B4E] font-medium text-xs">Private Practice Studio</p>
                <p className="text-xs text-[#697A72] mt-0.5">{siteContent.practice.location}</p>
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white font-sans text-xs font-medium rounded-full shadow-subtle flex items-center justify-center space-x-2 min-h-[48px]"
              >
                <Calendar className="w-4 h-4 text-[#BDDBE7]" />
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
