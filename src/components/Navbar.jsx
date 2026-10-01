import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E3ECE6] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center space-x-3.5 group focus-visible:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-[#194B4E] text-[#FAF8F5] flex items-center justify-center shadow-sm group-hover:bg-[#527965] transition-colors duration-300">
              <span className="font-serif text-sm font-semibold tracking-wider">NB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#1A2421] group-hover:text-[#194B4E] transition-colors">
                {siteContent.practice.name}
              </span>
              <span className="font-sans text-[11px] text-[#697A72] tracking-wide font-normal">
                {siteContent.practice.subBrand}
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-sans" aria-label="Main Navigation">
            {siteContent.navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `transition-all duration-200 py-1.5 font-medium relative text-[13px] tracking-wide ${
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
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#194B4E] hover:bg-[#133A3C] text-[#FFFFFF] font-sans font-medium text-xs tracking-wide rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5 text-[#BDDBE7]" />
              <span>Book a Consultation</span>
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A2421] bg-white border border-[#E3ECE6] rounded-full shadow-sm hover:bg-[#F2F7F4] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#194B4E]" /> : <Menu className="w-5 h-5 text-[#194B4E]" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Soft Dark Backdrop */}
          <div
            className="fixed inset-0 bg-[#1A2421]/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-[#FAF8F5] flex flex-col justify-between p-6 border-t border-[#E3ECE6] shadow-xl overflow-y-auto z-50">
            <div className="flex flex-col space-y-3 pt-2">
              <div className="flex items-center justify-between pb-3 border-b border-[#E3ECE6]">
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
                    `flex items-center justify-between p-4 rounded-2xl border transition-all ${
                      isActive
                        ? 'bg-[#E8EFEA] text-[#194B4E] border-[#527965] font-semibold'
                        : 'bg-white text-[#1A2421] border-[#E3ECE6] hover:bg-[#F2F7F4]'
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

            <div className="pt-4 border-t border-[#E3ECE6] flex flex-col space-y-3 bg-white p-5 rounded-2xl border border-[#E3ECE6] mt-6 shadow-sm">
              <div>
                <p className="text-[#194B4E] font-medium text-xs">Private Practice Studio</p>
                <p className="text-xs text-[#697A72] mt-0.5">{siteContent.practice.location}</p>
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#194B4E] hover:bg-[#133A3C] text-white font-sans text-xs font-medium rounded-full shadow-sm flex items-center justify-center space-x-2"
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
