import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldAlert, Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Twitter, BookOpen } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] text-[#2D2913] border-t border-[#1A180E]/15 text-xs pt-8 sm:pt-12 pb-10 sm:pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 pb-6 sm:pb-8 border-b border-[#1A180E]/10">
          
          {/* Col 1: Practice Name & Social Media Links */}
          <div className="sm:col-span-2 md:col-span-4 space-y-2.5 sm:space-y-3">
            <span className="font-serif font-medium text-[#1A180E] text-base sm:text-lg block">
              {siteContent.practice.name}
            </span>
            <p className="text-xs sm:text-sm text-[#2D2913]/80 leading-relaxed">
              A private counseling practice offering thoughtful, supportive therapy for individuals and couples in Pune and online.
            </p>

            {/* Social Media Link Icons with touch friendly size */}
            <div className="flex items-center space-x-3 pt-1.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-[#1A180E]/20 bg-[#FFFDE0] hover:bg-[#FDFF6D] flex items-center justify-center text-[#1A180E] transition-colors shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-[#1A180E]/20 bg-[#FFFDE0] hover:bg-[#FDFF6D] flex items-center justify-center text-[#1A180E] transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-[#1A180E]/20 bg-[#FFFDE0] hover:bg-[#FDFF6D] flex items-center justify-center text-[#1A180E] transition-colors shadow-sm"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-[#1A180E]/20 bg-[#FFFDE0] hover:bg-[#FDFF6D] flex items-center justify-center text-[#1A180E] transition-colors shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-2 space-y-2.5 sm:space-y-3">
            <span className="text-[#1A180E] font-bold text-[11px] sm:text-xs uppercase tracking-wider block font-mono">
              Explore
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteContent.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="hover:text-[#FF7F3F] transition-colors flex items-center justify-between text-[#1A180E] py-0.5"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Details */}
          <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
            <span className="text-[#1A180E] font-bold text-[11px] sm:text-xs uppercase tracking-wider block font-mono">
              Get in Touch
            </span>
            <div className="space-y-2 text-xs sm:text-sm text-[#2D2913]">
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#FF7F3F] shrink-0" />
                <a href={`mailto:${siteContent.practice.email}`} className="hover:text-[#FF7F3F] transition-colors font-medium text-[#1A180E] break-all">
                  {siteContent.practice.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#FF7F3F] shrink-0" />
                <a href={`tel:${siteContent.practice.phone.replace(/\s+/g, '')}`} className="hover:text-[#FF7F3F] transition-colors font-medium text-[#1A180E]">
                  {siteContent.practice.phone}
                </a>
              </div>
              <div className="flex items-start space-x-2.5 text-xs text-[#2D2913]/80">
                <MapPin className="w-4 h-4 text-[#FF7F3F] shrink-0 mt-0.5" />
                <span>Koregaon Park, Pune & Video</span>
              </div>
            </div>
          </div>

          {/* Col 4: Articles Button */}
          <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
            <span className="text-[#1A180E] font-bold text-[11px] sm:text-xs uppercase tracking-wider block font-mono">
              Articles
            </span>
            <div className="space-y-2">
              <p className="text-xs text-[#2D2913]/80 leading-relaxed">
                Short essays and gentle thoughts on mental health, relationships, and well-being.
              </p>
              <a
                href="#articles"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Articles & Writing section coming soon!");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#FDFF6D] hover:bg-[#E5E84A] text-[#1A180E] font-mono text-xs uppercase tracking-wider font-bold border border-[#1A180E] rounded transition-colors shadow-sm min-h-[40px]"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#1A180E]" />
                <span>Read Articles</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Caring Emergency Disclaimer & Copyright */}
        <div className="space-y-3 sm:space-y-4 pt-1">
          <div className="p-3.5 sm:p-4 border border-[#FF7F3F]/40 bg-[#FFFDE0] rounded-lg text-xs text-[#1A180E] flex items-start space-x-2.5 sm:space-x-3 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-[#FF7F3F] shrink-0 mt-0.5" />
            <span>{siteContent.footer.disclaimer}</span>
          </div>

          <div className="text-xs text-[#2D2913]/60 pt-1 text-center sm:text-left">
            <p>{siteContent.footer.copyright}</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
