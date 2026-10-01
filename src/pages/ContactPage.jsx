import React, { useState } from 'react';
import { siteContent } from '../data/content';
import ContactForm from '../components/ContactForm';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  Star,
  Quote,
} from 'lucide-react';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const testimonials = [
    {
      initials: "M. P.",
      tag: "Individual Therapy • 1 Year",
      quote: "Working with Niyati completely changed how I speak to myself. For years, I carried around an intense inner critic and constant anxiety. She created a space where I felt truly listened to without judgment.",
      takeaway: "Gained emotional calm and confidence in setting boundaries.",
    },
    {
      initials: "A. & R.",
      tag: "Couples Counseling • 8 Months",
      quote: "We were stuck in the same exhausting arguments week after week. Niyati helped us slow down, understand what was actually beneath the frustration, and start talking to each other with warmth again.",
      takeaway: "Rebuilt open communication and emotional closeness.",
    },
    {
      initials: "S. K.",
      tag: "Burnout & Stress • 6 Months",
      quote: "As someone who always prioritized work over well-being, I was running on empty. Sessions with Niyati gave me practical, grounding ways to step off the treadmill and take care of my mind and body.",
      takeaway: "Recovered from chronic fatigue and learned healthy pacing.",
    },
    {
      initials: "D. V.",
      tag: "Life Transitions • 9 Months",
      quote: "Navigating a major career shift and a painful breakup at the same time felt overwhelming. Having Niyati as a steady, compassionate sounding board made all the difference.",
      takeaway: "Found clarity and self-trust during a major life change.",
    },
  ];

  return (
    <div className="w-full space-y-12 sm:space-y-20 md:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-2 pb-8 sm:pt-8 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF3F0] via-[#FAF8F5] to-[#E8F2F7] -z-10" />
        <div className="absolute top-1/3 left-0 -ml-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#DF9C87]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-8">
            
            <div className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/90 border border-[#D8E4DC] text-[11px] sm:text-xs text-[#527965] font-medium shadow-subtle mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-[#527965] shrink-0" />
              <span>Get in Touch • Confidential & Unpressured</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1A2421] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight">
              Let's start a <span className="font-serif italic font-normal text-[#527965]">conversation</span>.
            </h1>

            <p className="font-sans text-sm sm:text-lg md:text-xl text-[#46544E] font-normal leading-relaxed max-w-2xl mx-auto">
              {siteContent.contact.hero.subtitle}
            </p>

          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT INFO + CONTACT FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-card space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
                  Clinic Details
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421] mt-1">
                  Ways to Reach Me
                </h3>
                <p className="text-xs text-[#5B6D64] mt-1 leading-relaxed">
                  {siteContent.practice.responseTime}
                </p>
              </div>

              <div className="space-y-3.5 pt-2 border-t border-[#E3ECE6] text-xs sm:text-sm text-[#46544E]">
                
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#E8EFEA] text-[#527965] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-[#697A72] block">Direct Email</span>
                    <a
                      href={`mailto:${siteContent.practice.email}`}
                      className="font-medium text-[#1A2421] hover:text-[#527965] transition-colors break-all py-0.5 inline-block"
                    >
                      {siteContent.practice.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#E8EFEA] text-[#527965] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#697A72] block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${siteContent.practice.phone.replace(/\s+/g, '')}`}
                      className="font-medium text-[#1A2421] hover:text-[#527965] transition-colors py-0.5 inline-block"
                    >
                      {siteContent.practice.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#E8EFEA] text-[#527965] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#697A72] block">Studio Location</span>
                    <p className="text-[#1A2421]">{siteContent.practice.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#E8EFEA] text-[#527965] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#697A72] block">Office Hours</span>
                    <p className="text-[#1A2421] whitespace-pre-line leading-relaxed">{siteContent.practice.officeHours}</p>
                  </div>
                </div>

              </div>

              {/* Status Banner */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#E8EFEA] border border-[#D2DFD6] flex items-center space-x-3 text-xs text-[#2A483B]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#527965] animate-pulse shrink-0" />
                <span>{siteContent.practice.status}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* 3. KIND WORDS FROM CLIENTS / TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
            Client Reflections
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A2421]">
            Kind Words from <span className="font-serif italic font-normal text-[#527965]">Clients</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
            A few reflections shared by individuals and couples I have worked alongside (names anonymized for privacy):
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-5 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-2.5">
                    <span className="font-serif text-sm sm:text-base font-semibold text-[#1A2421] px-2.5 py-1 bg-[#FAF8F5] border border-[#E3ECE6] rounded-full">
                      {item.initials}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#697A72]">{item.tag}</span>
                  </div>
                  <div className="flex text-[#C67D63]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C67D63]" />
                    ))}
                  </div>
                </div>

                <p className="font-serif italic text-xs sm:text-base text-[#1A2421] leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#E3ECE6] flex items-center space-x-2 text-xs text-[#344F41]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#527965] shrink-0" />
                <span>{item.takeaway}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS (Accordion with min-h-[52px] touch targets) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6 sm:space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
            Common Inquiries
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1A2421]">
            Frequently Asked <span className="font-serif italic font-normal text-[#527965]">Questions</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5B6D64]">
            Helpful answers to common questions about starting therapy.
          </p>
        </div>

        <div className="space-y-3">
          {siteContent.contact.faq.map((item, idx) => {
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
                    {item.q}
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
