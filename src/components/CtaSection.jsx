import React from 'react';
import { MessageCircle, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteContent } from '../data/content';

export default function CtaSection() {
  const phoneDigits = siteContent.practice.phone.replace(/[^0-9]/g, '');
  const whatsappMessage = encodeURIComponent(
    "Hi Niyati, I visited your website and would like to book a free 15-minute consultation with you."
  );
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${whatsappMessage}`;

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-8 py-4 sm:py-8 select-none">
      <div className="bg-[#FFFFFF] border border-[#1A180E]/15 rounded-xl p-4 sm:p-7 shadow-lg space-y-4 sm:space-y-5">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 pb-3 border-b border-[#1A180E]/10">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1A180E] font-normal">
              Ready to take the next step?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#2D2913] font-light mt-0.5">
              Reaching out is simple, unpressured, and completely confidential.
            </p>
          </div>

          <div className="flex items-center space-x-1.5 text-[11px] sm:text-xs font-sans text-[#1A180E]/80 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7F3F]" />
            <span>Replies in 1–2 days</span>
          </div>
        </div>

        {/* 2 Compact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          
          {/* Option 1: WhatsApp Free 15-min call */}
          <div className="bg-[#FFFDE0] border border-[#1A180E]/15 rounded-lg p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-[#25D366]/20 text-[#128C7E] flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A180E]">
                  Free 15-min Consultation
                </h3>
              </div>
              <p className="font-sans text-xs text-[#2D2913] font-light leading-relaxed pl-8">
                An informal chat over WhatsApp to ask questions and see if we're a good fit.
              </p>
            </div>

            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 sm:py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono text-xs uppercase tracking-wider font-bold rounded transition-colors shadow-sm min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Option 2: Book a Therapy Session */}
          <div className="bg-[#FFFDE0] border border-[#1A180E]/15 rounded-lg p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-[#FDFF6D] text-[#1A180E] flex items-center justify-center border border-[#1A180E]/20">
                  <Calendar className="w-3.5 h-3.5 text-[#1A180E]" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A180E]">
                  Book a Therapy Session
                </h3>
              </div>
              <p className="font-sans text-xs text-[#2D2913] font-light leading-relaxed pl-8">
                Schedule a full 50-minute individual or couples session in Pune or via video.
              </p>
            </div>

            <div className="pt-1">
              <a
                href={`mailto:${siteContent.practice.email}?subject=Booking%20a%20Therapy%20Session&body=Hi%20Niyati,%20I%20would%20like%20to%20schedule%20a%20therapy%20session%20with%20you.`}
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 sm:py-2.5 bg-[#1A180E] hover:bg-[#332F1A] text-[#FFFEFA] font-mono text-xs uppercase tracking-wider font-bold rounded border border-[#1A180E] transition-colors shadow-sm min-h-[44px]"
              >
                <Calendar className="w-4 h-4 text-[#FDFF6D]" />
                <span>Email to Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
