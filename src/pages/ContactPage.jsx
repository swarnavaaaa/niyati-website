import React, { useState, useEffect } from 'react';
import { siteContent } from '../data/content';
import ContactForm from '../components/ContactForm';
import {
  Video,
  Clock,
  Sparkles,
  ChevronDown,
  Calendar,
  ArrowRight,
  BadgeIndianRupee
} from 'lucide-react';

export default function ContactPage() {
  // FAQs closed by default per request
  const [openFaq, setOpenFaq] = useState(-1);
  const { faqs, sessions } = siteContent.home;

  useEffect(() => {
    document.title = "Getting Started & Appointments — Lost & Found Therapy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Book an online therapy session directly or submit an enquiry to schedule a 15-minute consultation with Niyati Bagla.");
    }
  }, []);

  return (
    <div className="w-full space-y-16 sm:space-y-24 md:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pt-10 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF3F0] via-[#FAF8F5] to-[#E8F2F7] -z-10" />
        <div className="absolute top-1/3 left-0 -ml-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#DF9C87]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D8E4DC] text-xs sm:text-sm text-[#527965] font-medium shadow-subtle mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-[#527965] shrink-0" />
              <span>GETTING STARTED</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1A2421] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight">
              If you’d like to begin, here are <span className="font-serif italic font-normal text-[#527965]">two ways</span> to reach me.
            </h1>

            <p className="font-sans text-sm sm:text-lg md:text-xl text-[#46544E] font-normal leading-relaxed max-w-2xl mx-auto italic">
              And if you’re still unsure, that’s okay. You don’t have to make a big decision today. You can simply start a conversation.
            </p>

          </div>
        </div>
      </section>

      {/* 2. THE TWO WAYS TO REACH ME + PRACTICE DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Booking Options */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Booking Card (Option label removed, heading updated) */}
            <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#194B4E] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-[#194B4E]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
                    Book a session directly
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
                If you already know you’d like to begin, you can choose a convenient slot.
              </p>
              <a
                href={siteContent.practice.topmateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white text-xs font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-all min-h-[46px]"
              >
                <Calendar className="w-4 h-4 text-[#BDDBE7]" />
                <span>Book session</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* About The Work (Format, Mode & Fees) */}
            <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-subtle space-y-5">
              <div>
                <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
                  {sessions.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421] mt-1">
                  {sessions.sectionHeading}
                </h3>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#E3ECE6] text-xs sm:text-sm text-[#46544E]">
                
                {/* Duration and Mode */}
                <div className="p-4 rounded-xl bg-white border border-[#E3ECE6] space-y-2">
                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-4 h-4 text-[#194B4E]" />
                    <span className="font-serif text-lg font-medium text-[#1A2421]">{sessions.duration}</span>
                  </div>
                  <p className="text-[#5B6D64]">{sessions.durationSubtext}</p>
                  <div className="pt-2 border-t border-[#E3ECE6]/60 flex items-center space-x-2 text-[#46544E]">
                    <Video className="w-3.5 h-3.5 text-[#527965]" />
                    <span>{sessions.mode}</span>
                  </div>
                </div>

                {/* Fees with consistent styling */}
                <div className="p-4 rounded-xl bg-white border border-[#E3ECE6] space-y-2">
                  <div className="flex items-center space-x-2.5">
                    <BadgeIndianRupee className="w-4 h-4 text-[#C67D63]" />
                    <span className="font-serif text-lg font-medium text-[#1A2421]">{sessions.feesDisplay}</span>
                  </div>
                  <p className="text-[#5B6D64]">{sessions.feesSubtext}</p>
                </div>

                {/* Sliding scale subtext */}
                <div className="p-3.5 rounded-xl bg-white/70 border border-[#E3ECE6] text-[#5B6D64] leading-relaxed text-xs">
                  {sessions.slidingScale}
                </div>

              </div>

              {/* Status Banner */}
              <div className="p-3.5 rounded-xl bg-[#E8EFEA] border border-[#D2DFD6] flex items-center space-x-3 text-xs text-[#2A483B]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#527965] animate-pulse shrink-0" />
                <span>{siteContent.practice.status}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6 sm:space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
            {faqs.tag}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1A2421] font-normal">
            {faqs.heading}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.items.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={item.id}
                className="bg-white border border-[#E3ECE6] rounded-2xl overflow-hidden shadow-subtle transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 focus-visible:outline-none min-h-[52px]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-lg text-[#1A2421] font-medium">
                    {item.q.replace(/^[“”"]/g, '').replace(/[“”"]$/g, '')}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-[#E3ECE6] transition-transform duration-200 ${
                      isOpen ? 'bg-[#194B4E] text-white rotate-180' : 'bg-[#FAF8F5] text-[#527965]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5B6D64] leading-relaxed border-t border-[#E3ECE6]/50">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
