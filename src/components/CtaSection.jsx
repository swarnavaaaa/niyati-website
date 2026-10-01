import React from 'react';
import { MessageCircle, Calendar, ArrowRight, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { siteContent } from '../data/content';

export default function CtaSection() {
  const phoneDigits = siteContent.practice.phone.replace(/[^0-9]/g, '');
  const whatsappMessage = encodeURIComponent(
    "Hi Niyati, I visited your website and would like to book a free 15-minute consultation with you."
  );
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${whatsappMessage}`;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-12">
      <div className="relative overflow-hidden bg-gradient-to-tr from-[#FAF3F0] via-white to-[#E8F2F7] border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-12 shadow-card">
        
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#BDDBE7]/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#C67D63]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3.5 sm:space-y-4 mb-6 sm:mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D8E4DC] text-[11px] sm:text-xs text-[#527965] font-medium shadow-subtle mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#527965] shrink-0" />
            <span>Taking New Clients • In-Person & Online</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A2421] font-normal leading-[1.2]">
            Ready to take the <span className="font-serif italic text-[#527965]">next step</span>?
          </h2>

          <p className="font-sans text-xs sm:text-base text-[#5B6D64] leading-relaxed max-w-xl mx-auto">
            Reaching out is simple, gentle, and completely confidential. Whether you're ready to schedule or just have a few questions, you are warmly invited to get in touch.
          </p>
        </div>

        {/* 2 Action Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          
          {/* Option 1: WhatsApp Discovery Call */}
          <div className="bg-white/90 backdrop-blur-sm border border-[#E3ECE6] rounded-2xl p-5 sm:p-7 flex flex-col justify-between space-y-4 sm:space-y-5 shadow-subtle hover:border-[#527965]/40 transition-all duration-300">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#EBF7F0] text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#1EBE5D]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1A2421]">
                    Free 15-Min Discovery Call
                  </h3>
                  <span className="text-[11px] text-[#527965] font-medium">Quick & Informal</span>
                </div>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed pt-0.5">
                A brief chat over WhatsApp or phone to talk about what you're looking for and see if working together feels like the right fit.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] active:bg-[#159A47] text-white font-sans text-xs font-medium tracking-wide rounded-full transition-all shadow-subtle hover:shadow min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-0.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Option 2: Schedule a Full Therapy Session */}
          <div className="bg-white/90 backdrop-blur-sm border border-[#E3ECE6] rounded-2xl p-5 sm:p-7 flex flex-col justify-between space-y-4 sm:space-y-5 shadow-subtle hover:border-[#194B4E]/40 transition-all duration-300">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#194B4E] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-[#194B4E]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1A2421]">
                    Schedule a Therapy Session
                  </h3>
                  <span className="text-[11px] text-[#194B4E] font-medium">50-Min Weekly Space</span>
                </div>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed pt-0.5">
                Book a 50-minute individual or couples session at our Koregaon Park studio or over secure video call nationwide.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${siteContent.practice.email}?subject=Booking%20a%20Therapy%20Session&body=Hi%20Niyati,%20I%20would%20like%20to%20schedule%20a%20therapy%20session%20with%20you.`}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white font-sans text-xs font-medium tracking-wide rounded-full transition-all shadow-subtle hover:shadow min-h-[48px]"
              >
                <Calendar className="w-4 h-4 text-[#BDDBE7] shrink-0" />
                <span>Email to Schedule</span>
                <ArrowRight className="w-4 h-4 ml-0.5 shrink-0" />
              </a>
            </div>
          </div>

        </div>

        {/* Reassurance Footer */}
        <div className="relative z-10 pt-5 mt-5 border-t border-[#E3ECE6]/80 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#5B6D64]">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-[#527965] shrink-0" />
            <span>Strictly Confidential</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-[#527965] shrink-0" />
            <span>Personal reply within 1–2 days</span>
          </div>
        </div>

      </div>
    </section>
  );
}
