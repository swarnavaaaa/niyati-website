import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldAlert, Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] text-[#46544E] border-t border-[#E3ECE6] text-xs pt-10 sm:pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-10 border-b border-[#E3ECE6]">
          
          {/* Col 1: Practice Name & Philosophy */}
          <div className="md:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#194B4E] text-[#FAF8F5] flex items-center justify-center font-serif text-xs font-semibold shrink-0">
                NB
              </div>
              <span className="font-serif font-medium text-[#1A2421] text-lg sm:text-xl">
                {siteContent.practice.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#5B6D64] leading-relaxed max-w-sm">
              A private counseling and psychotherapy practice offering thoughtful, human, and grounded care for individuals and couples in Koregaon Park, Pune and secure online therapy nationwide.
            </p>

            {/* Social Media Link Icons with 44x44px touch targets */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#E8EFEA] hover:border-[#527965] flex items-center justify-center text-[#194B4E] transition-all shadow-subtle"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#E8EFEA] hover:border-[#527965] flex items-center justify-center text-[#194B4E] transition-all shadow-subtle"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#E8EFEA] hover:border-[#527965] flex items-center justify-center text-[#194B4E] transition-all shadow-subtle"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#E8EFEA] hover:border-[#527965] flex items-center justify-center text-[#194B4E] transition-all shadow-subtle"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[#194B4E] font-medium text-xs uppercase tracking-wider block font-sans">
              Navigation
            </span>
            <ul className="space-y-1 text-xs sm:text-sm">
              {siteContent.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="hover:text-[#194B4E] transition-colors flex items-center justify-between text-[#5B6D64] min-h-[44px] py-1 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#527965]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & Office Details */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[#194B4E] font-medium text-xs uppercase tracking-wider block font-sans">
              Studio & Contact
            </span>
            <div className="space-y-3 text-xs sm:text-sm text-[#5B6D64]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#527965] shrink-0 mt-0.5" />
                <span>{siteContent.practice.location}</span>
              </div>
              <div className="flex items-center space-x-3 min-h-[44px]">
                <Mail className="w-4 h-4 text-[#527965] shrink-0" />
                <a href={`mailto:${siteContent.practice.email}`} className="hover:text-[#194B4E] transition-colors font-medium text-[#1A2421] break-all py-1">
                  {siteContent.practice.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 min-h-[44px]">
                <Phone className="w-4 h-4 text-[#527965] shrink-0" />
                <a href={`tel:${siteContent.practice.phone.replace(/\s+/g, '')}`} className="hover:text-[#194B4E] transition-colors font-medium text-[#1A2421] py-1">
                  {siteContent.practice.phone}
                </a>
              </div>
              <p className="text-[11px] text-[#788B81] pt-1 whitespace-pre-line leading-relaxed">
                {siteContent.practice.officeHours}
              </p>
            </div>
          </div>

        </div>

        {/* Crisis Helpline Disclaimer Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E3ECE6] shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] sm:text-xs text-[#5B6D64]">
          <div className="flex items-start sm:items-center space-x-3">
            <div className="w-7 h-7 rounded-full bg-[#FAF3F0] text-[#C67D63] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <p className="leading-relaxed">
              <strong className="text-[#1A2421] font-medium">Crisis Support Notice:</strong> {siteContent.footer.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#788B81] pt-1 text-center sm:text-left">
          <p>{siteContent.footer.copyright}</p>
          <div className="flex items-center space-x-1">
            <span>Clinical psychotherapy practice rooted in empathy & evidence</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
