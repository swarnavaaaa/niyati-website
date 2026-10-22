import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile drawer on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
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

  // Sync active section on initial load or hash changes
  useEffect(() => {
    if (location.pathname === '/') {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        if (['what-we-can-work-on', 'what-we-work-on', 'about-the-work', 'sessions', 'faqs'].includes(id)) {
          setActiveSection(id);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    }
  }, [location.pathname, location.hash]);

  // Scroll spy to highlight the correct section on the homepage
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const handleScroll = () => {
      // If user reaches near the bottom of the page, FAQ or footer is in view
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isBottom) {
        setActiveSection('faqs');
        return;
      }

      // If near the top
      if (window.scrollY < 300) {
        setActiveSection('home');
        return;
      }

      // Check sections from bottom to top order
      const sections = ['faqs', 'about-the-work', 'sessions', 'what-we-can-work-on', 'what-we-work-on'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Header is ~80px, threshold 180px gives natural triggering as section scrolls in
          if (rect.top <= 180) {
            setActiveSection(id);
            return;
          }
        }
      }

      setActiveSection('home');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Determine whether a nav link is active
  const isItemActive = (item) => {
    if (location.pathname === '/about') {
      return item.href === '/about';
    }
    if (location.pathname === '/contact') {
      return item.href === '/contact';
    }
    if (location.pathname === '/') {
      if (item.href === '/') {
        return activeSection === 'home';
      }
      if (item.href.includes('#what-we-can-work-on') || item.href.includes('#what-we-work-on')) {
        return activeSection === 'what-we-can-work-on' || activeSection === 'what-we-work-on';
      }
      if (item.href.includes('#about-the-work') || item.href.includes('#sessions')) {
        return activeSection === 'about-the-work' || activeSection === 'sessions';
      }
      if (item.href.includes('#faqs')) {
        return activeSection === 'faqs';
      }
    }
    return false;
  };

  // Smooth scroll and navigation click handler
  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);

    if (href.includes('#')) {
      const hash = href.substring(href.indexOf('#'));
      const targetId = hash.replace('#', '');

      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
          setActiveSection(targetId);
        }
      } else {
        navigate(href);
      }
    } else if (href === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
        setActiveSection('home');
      } else {
        navigate('/');
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E3ECE6] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Name (Text only, logo removed as requested) */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center space-x-2 group focus-visible:outline-none min-h-[44px] shrink-0"
            aria-label={`${siteContent.practice.brandName} Home`}
          >
            <div className="flex flex-col min-w-0 whitespace-nowrap">
              <span className="font-serif text-lg sm:text-2xl font-medium tracking-tight text-[#1A2421] group-hover:text-[#194B4E] transition-colors">
                Lost <span className="text-[#8A4834] font-normal">&</span> Found Therapy
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] text-[#697A72] tracking-wide font-normal">
                Therapy with {siteContent.practice.therapistName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean single line with active highlighting */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7 text-sm font-sans flex-nowrap whitespace-nowrap" aria-label="Main Navigation">
            {siteContent.navigation.map((item) => {
              const active = isItemActive(item);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-all duration-200 py-2 font-medium relative text-[13px] tracking-wide min-h-[44px] flex items-center whitespace-nowrap cursor-pointer ${
                    active
                      ? 'text-[#194B4E] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#527965] after:rounded-full'
                      : 'text-[#46544E] hover:text-[#194B4E]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

            {/* Book a session as a text link in the same line */}
            <a
              href={siteContent.practice.topmateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 py-2 font-medium text-[13px] tracking-wide min-h-[44px] flex items-center text-[#194B4E] hover:text-[#527965] whitespace-nowrap"
            >
              Book a session
            </a>
          </nav>

          {/* Mobile menu toggle button */}
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
                <span className="text-xs text-[#697A72]">Online Therapy for Adults</span>
              </div>

              {siteContent.navigation.map((item, idx) => {
                const active = isItemActive(item);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all min-h-[52px] whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-[#E8EFEA] text-[#194B4E] border-[#527965] font-semibold shadow-subtle'
                        : 'bg-white text-[#1A2421] border-[#E3ECE6] active:bg-[#F2F7F4]'
                    }`}
                  >
                    <span className="font-serif text-base sm:text-lg">{item.name}</span>
                    <span
                      className={`text-[11px] font-sans font-medium px-2 py-0.5 rounded-full border ${
                        active
                          ? 'bg-[#527965] text-white border-[#527965]'
                          : 'bg-[#FAF8F5] text-[#697A72] border-[#E3ECE6]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#E3ECE6] flex flex-col space-y-3 bg-white p-4 sm:p-5 rounded-2xl border border-[#E3ECE6] mt-4 shadow-subtle">
              <div>
                <p className="text-[#194B4E] font-medium text-xs">Lost & Found Therapy</p>
                <p className="text-xs text-[#697A72] mt-0.5">{siteContent.practice.mode}</p>
              </div>
              <a
                href={siteContent.practice.topmateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-[#194B4E] hover:text-[#527965] font-sans text-xs font-medium transition-colors flex items-center justify-center space-x-1.5 whitespace-nowrap border border-[#D8E4DC] rounded-full bg-[#FAF8F5]"
              >
                <span>Book a session</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
