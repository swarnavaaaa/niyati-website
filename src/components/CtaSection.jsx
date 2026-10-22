import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles, MessageCircle, FileText, Instagram, Linkedin } from 'lucide-react';
import { siteContent } from '../data/content';

export default function CtaSection() {
  const { gettingStarted, quote, moreAboutMe } = siteContent.home;
  const whatsappUrl = `https://wa.me/${siteContent.practice.whatsappNumber}?text=${encodeURIComponent("Hi Niyati, I visited your website and would like to learn more about starting therapy.")}`;

  return (
    <section id="getting-started" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-14 scroll-mt-24 space-y-10 sm:space-y-12">
      
      {/* 1. GETTING STARTED MAIN CONTAINER */}
      <div className="relative overflow-hidden bg-gradient-to-tr from-[#FAF3F0] via-white to-[#E8F2F7] border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-card">
        
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#BDDBE7]/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#C67D63]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3.5 sm:space-y-4 mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D8E4DC] text-[11px] sm:text-xs text-[#527965] font-medium shadow-subtle mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#527965] shrink-0" />
            <span>{gettingStarted.tag}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A2421] font-normal leading-[1.2]">
            {gettingStarted.heading}
          </h2>
        </div>

        {/* 2 DISTINCT PATHWAYS */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          
          {/* Pathway 1: Book a session directly */}
          <div className="bg-white/95 backdrop-blur-sm border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-5 shadow-subtle hover:border-[#194B4E]/40 hover:shadow-card transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#194B4E] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-[#194B4E]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1A2421]">
                    {gettingStarted.option1.title}
                  </h3>
                </div>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed pt-1">
                {gettingStarted.option1.desc}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={gettingStarted.option1.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white font-sans text-xs font-medium tracking-wide rounded-full transition-all shadow-subtle hover:shadow min-h-[48px]"
              >
                <Calendar className="w-4 h-4 text-[#BDDBE7] shrink-0" />
                <span>{gettingStarted.option1.buttonText}</span>
                <ArrowRight className="w-4 h-4 ml-0.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Pathway 2: Book a consultation call first */}
          <div className="bg-white/95 backdrop-blur-sm border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-5 shadow-subtle hover:border-[#527965]/40 hover:shadow-card transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF3F0] text-[#C67D63] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#C67D63]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1A2421]">
                    {gettingStarted.option2.title}
                  </h3>
                </div>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed pt-1">
                {gettingStarted.option2.desc}
              </p>
            </div>

            <div className="pt-2">
              <Link
                to={gettingStarted.option2.url}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-white hover:bg-[#F2F7F4] active:bg-[#E8EFEA] text-[#194B4E] border border-[#D8E4DC] font-sans text-xs font-medium tracking-wide rounded-full transition-all shadow-subtle hover:shadow min-h-[48px]"
              >
                <FileText className="w-4 h-4 text-[#527965] shrink-0" />
                <span>{gettingStarted.option2.buttonText}</span>
                <ArrowRight className="w-4 h-4 ml-0.5 shrink-0" />
              </Link>
            </div>
          </div>

        </div>

        {/* Reassurance text */}
        <div className="relative z-10 pt-8 sm:pt-10 text-center max-w-xl mx-auto">
          <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed italic">
            {gettingStarted.reassurance}
          </p>
        </div>

      </div>

      {/* 2. CARL ROGERS QUOTE & MORE ABOUT ME SECTION */}
      <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center space-y-6 shadow-subtle max-w-4xl mx-auto">
        <div className="space-y-2">
          <span className="font-serif text-3xl sm:text-4xl text-[#BDDBE7]">“</span>
          <p className="font-serif italic text-lg sm:text-2xl text-[#1A2421] leading-relaxed max-w-2xl mx-auto -mt-2">
            The curious paradox is that when I accept myself just as I am, then I can change.
          </p>
          <span className="font-sans text-xs sm:text-sm text-[#697A72] block pt-1 font-medium">
            — Carl Rogers
          </span>
        </div>

        {/* MORE ABOUT ME BUTTONS */}
        <div className="pt-4 border-t border-[#E3ECE6] space-y-3">
          <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider block">
            {moreAboutMe.tag}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#EBF7F0] border border-[#CDE5D6] text-[#1EBE5D] hover:bg-[#D7EFE0] transition-colors text-xs font-medium min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={siteContent.practice.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white border border-[#D8E4DC] text-[#1A2421] hover:bg-[#F2F7F4] transition-colors text-xs font-medium min-h-[44px]"
            >
              <Instagram className="w-4 h-4 text-[#C67D63]" />
              <span>Instagram</span>
            </a>
            <a
              href={siteContent.practice.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white border border-[#D8E4DC] text-[#1A2421] hover:bg-[#F2F7F4] transition-colors text-xs font-medium min-h-[44px]"
            >
              <Linkedin className="w-4 h-4 text-[#194B4E]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
