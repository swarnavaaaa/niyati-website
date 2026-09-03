import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFF6D]/95 backdrop-blur-md border-b-2 border-[#1A180E] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center space-x-3 group focus-visible:outline-none"
          >
            <div className="w-8 h-8 bg-[#1A180E] border border-[#1A180E] flex items-center justify-center shadow-sm rounded-sm">
              <span className="font-mono text-xs font-bold text-[#FDFF6D]">NB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-medium text-[#1A180E]">
                {siteContent.practice.name}
              </span>
              <span className="font-sans text-[11px] text-[#1A180E]/75 hidden sm:block">
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
                  `transition-colors duration-200 py-1 border-b-2 font-medium ${
                    isActive
                      ? 'text-[#1A180E] border-[#1A180E]'
                      : 'text-[#1A180E]/75 border-transparent hover:text-[#1A180E] hover:border-[#1A180E]/50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#1A180E] hover:bg-[#332F1A] text-[#FFFEFA] font-medium border border-[#1A180E] transition-all duration-200 text-xs rounded shadow-sm"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FDFF6D]" />
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A180E] border-2 border-[#1A180E] focus-visible:outline-none bg-[#FFFFFF] hover:bg-[#FFFDE0] rounded-lg shadow-sm"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu (Outside header to prevent backdrop-filter clipping) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Dark Blurred Backdrop */}
          <div
            className="fixed inset-0 bg-[#1A180E]/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Solid Opaque Drawer */}
          <div className="fixed top-16 sm:top-20 left-0 right-0 bottom-0 bg-[#FFFFFF] flex flex-col justify-between p-5 sm:p-7 border-t-2 border-[#1A180E] shadow-2xl overflow-y-auto z-50">
            <div className="flex flex-col space-y-3 pt-1">
              <div className="flex items-center justify-between pb-2 border-b border-[#1A180E]/15">
                <span className="text-xs text-[#1A180E] font-bold uppercase tracking-wider font-mono">
                  Menu
                </span>
                <span className="text-[11px] font-mono text-[#2D2913]/70">Niyati Bagla</span>
              </div>

              {siteContent.navigation.map((item, idx) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between p-4 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-[#FDFF6D] text-[#1A180E] border-2 border-[#1A180E] font-bold shadow-sm'
                        : 'bg-[#FFFDE0] text-[#1A180E] border border-[#1A180E]/20 hover:border-[#1A180E] hover:bg-[#FDFF6D]/50'
                    }`
                  }
                >
                  <span className="font-serif text-lg">{item.name}</span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#FFFFFF] border border-[#1A180E]/20 rounded">
                    0{idx + 1}
                  </span>
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-[#1A180E]/15 flex flex-col space-y-3 bg-[#FFFDE0] p-4 rounded-xl border border-[#1A180E]/15 mt-6">
              <div>
                <p className="text-[#1A180E] font-bold text-xs uppercase font-mono">Location & Practice</p>
                <p className="text-xs text-[#2D2913] mt-0.5">{siteContent.practice.location}</p>
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 bg-[#1A180E] hover:bg-[#332F1A] text-[#FFFEFA] font-mono text-xs uppercase tracking-wider font-bold border-2 border-[#1A180E] rounded-lg shadow-md flex items-center justify-center space-x-2"
              >
                <span>Let's talk</span>
                <ArrowUpRight className="w-4 h-4 text-[#FDFF6D]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
