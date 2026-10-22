import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldAlert, Mail, Phone, Video, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteContent.practice.whatsappNumber}?text=${encodeURIComponent("Hi Niyati, I visited your website and would like to learn more about starting therapy.")}`;

  return (
    <footer className="bg-[#FAF8F5] text-[#46544E] border-t border-[#E3ECE6] text-xs pt-10 sm:pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-10 border-b border-[#E3ECE6]">
          
          {/* Col 1: Brand & Subtitle (LF logo removed) */}
          <div className="md:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="flex flex-col space-y-1">
              <span className="font-serif font-medium text-[#1A2421] text-lg sm:text-2xl block leading-tight">
                Lost <span className="text-[#8A4834] font-normal">&</span> Found Therapy
              </span>
              <span className="text-[11px] text-[#697A72]">
                {siteContent.practice.fullTitle}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#5B6D64] leading-relaxed max-w-sm">
              {siteContent.practice.tagline}
            </p>

            {/* Social Media Link Icons */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#EBF7F0] hover:border-[#1EBE5D] flex items-center justify-center text-[#1EBE5D] transition-all shadow-subtle"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteContent.practice.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#FAF3F0] hover:border-[#C67D63] flex items-center justify-center text-[#C67D63] transition-all shadow-subtle"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteContent.practice.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#E8EFEA] hover:border-[#527965] flex items-center justify-center text-[#194B4E] transition-all shadow-subtle"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[#194B4E] font-medium text-xs uppercase tracking-wider block font-sans">
              Navigation
            </span>
            <ul className="space-y-1 text-xs sm:text-sm">
              {siteContent.navigation.map((item) => {
                const isHash = item.href.includes('#');
                if (isHash) {
                  return (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="hover:text-[#194B4E] transition-colors flex items-center justify-between text-[#5B6D64] min-h-[44px] py-1 group"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#527965]" />
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="hover:text-[#194B4E] transition-colors flex items-center justify-between text-[#5B6D64] min-h-[44px] py-1 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#527965]" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Contact Info (Practice information & duration removed) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[#194B4E] font-medium text-xs uppercase tracking-wider block font-sans">
              Contact Info
            </span>
            <div className="space-y-3 text-xs sm:text-sm text-[#5B6D64]">
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
            </div>
          </div>

        </div>

        {/* Crisis Helpline Disclaimer Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E3ECE6] shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] sm:text-xs text-[#5B6D64]">
          <div className="flex items-start sm:items-center space-x-3">
            <div className="w-7 h-7 rounded-full bg-[#FAF3F0] text-[#C67D63] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <p className="leading-relaxed font-medium text-[#1A2421]">
                {siteContent.footer.disclaimer}
              </p>
              <p className="leading-relaxed text-[#697A72]">
                {siteContent.footer.emergencyNotice}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#788B81] pt-1 text-center sm:text-left">
          <p>{siteContent.footer.copyright}</p>
          <div className="flex items-center space-x-1">
            <span>{siteContent.practice.fullTitle}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
