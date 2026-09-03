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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFEF7]/95 backdrop-blur-md border-b border-[#FFE28A] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center space-x-3 group focus-visible:outline-none"
        >
          <div className="w-8 h-8 bg-[#FFC72C] border border-[#1F1B0E] flex items-center justify-center shadow-sm rounded-sm">
            <span className="font-mono text-xs font-bold text-[#1F1B0E]">NB</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-medium text-[#1F1B0E]">
              {siteContent.practice.name}
            </span>
            <span className="font-sans text-[11px] text-[#3D3820]/75 hidden sm:block">
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
                    ? 'text-[#1F1B0E] border-[#FF8A3D]'
                    : 'text-[#3D3820] border-transparent hover:text-[#1F1B0E] hover:border-[#FFC72C]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#FFC72C] hover:bg-[#F5A300] text-[#1F1B0E] font-medium border border-[#1F1B0E] transition-all duration-200 text-xs rounded shadow-sm"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1F1B0E] border border-[#FFE28A] focus-visible:outline-none bg-[#FFEB99] rounded"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#FFFEF7] z-40 p-6 flex flex-col justify-between border-t border-[#FFE28A]">
          <div className="flex flex-col space-y-6 pt-4">
            <span className="text-xs text-[#3D3820]/70 font-semibold uppercase tracking-wider font-mono">
              Menu
            </span>
            {siteContent.navigation.map((item, idx) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `text-2xl font-serif flex items-center justify-between py-3 border-b border-[#FFE28A] ${
                    isActive ? 'text-[#FF8A3D] font-medium' : 'text-[#1F1B0E] hover:text-[#FF8A3D]'
                  }`
                }
              >
                <span>{item.name}</span>
                <span className="text-xs text-[#3D3820]/60 font-mono">0{idx + 1}</span>
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-[#FFE28A] flex flex-col space-y-4 text-xs text-[#3D3820]">
            <div>
              <p className="text-[#1F1B0E] font-semibold text-sm">{siteContent.practice.location}</p>
            </div>
            <Link
              to="/contact"
              className="w-full text-center py-3 bg-[#FFC72C] hover:bg-[#F5A300] text-[#1F1B0E] tracking-wide font-medium border border-[#1F1B0E] rounded"
            >
              Let's talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
