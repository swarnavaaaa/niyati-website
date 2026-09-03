import React, { useState } from 'react';
import { MosbyTab } from '../components/MosbyTab';
import { siteContent } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Testimonials", bgHex: "#FF8A3D", textColor: "#FFFEF7" },
    { label: "Direct Info & FAQ", bgHex: "#FFC72C", textColor: "#1F1B0E" },
  ];

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
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-8 py-4 sm:py-8 select-none">
      
      {/* Top Header */}
      <div className="mb-6 sm:mb-10 max-w-3xl space-y-2.5 sm:space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1F1B0E] font-normal leading-[1.15] tracking-tight">
          Client Reflections & Info
        </h1>
        <p className="font-sans text-sm sm:text-lg md:text-xl text-[#3D3820] font-light leading-relaxed max-w-2xl">
          Read what working together has felt like for others, along with direct contact details and answers to common questions.
        </p>
      </div>

      {/* THE SINGLE CONTACT FOLDER */}
      <div className="w-full flex flex-col shadow-lg rounded-t-lg overflow-hidden">
        
        {/* TABS ROW */}
        <div className="flex items-end pl-0 overflow-x-auto no-scrollbar z-10 -space-x-1 sm:space-x-0">
          {tabs.map((tab, idx) => (
            <MosbyTab
              key={tab.label}
              label={tab.label}
              isFirst={idx === 0}
              isActive={activeTab === idx}
              bgHex={tab.bgHex}
              textColor={tab.textColor}
              onClick={() => setActiveTab(idx)}
            />
          ))}
        </div>

        {/* FOLDER COVER BAR */}
        <div className="bg-[#FF8A3D] text-[#FFFEF7] px-3.5 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between border-b border-[#1F1B0E]/10">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="font-mono text-[11px] sm:text-xs opacity-75 font-bold">03 //</span>
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold">
              {tabs[activeTab]?.label}
            </span>
          </div>
          <div className="font-mono text-[11px] sm:text-sm tracking-wider uppercase opacity-90 font-medium">
            <span>Experiences</span>
          </div>
        </div>

        {/* FOLDER CONTENT */}
        <div className="bg-[#FF8A3D] text-[#FFFEF7] px-4 sm:px-10 md:px-12 py-6 sm:py-12 space-y-8">
          
          {/* TAB 1: Testimonials */}
          {activeTab === 0 && (
            <div className="space-y-6 sm:space-y-8 animate-fadeIn max-w-5xl">
              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white">
                  Kind Words from Clients
                </h2>
                <p className="font-sans text-xs sm:text-sm md:text-base text-white/85 font-light">
                  A few reflections shared by individuals and couples I've worked alongside (names anonymized for privacy):
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 bg-[#FFFEF7] text-[#1F1B0E] border border-[#1F1B0E]/20 rounded-xl space-y-3.5 shadow-sm flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between border-b border-[#FFE28A] pb-2 text-xs">
                        <span className="font-mono font-bold text-[#1F1B0E] tracking-wider text-xs sm:text-sm">
                          {item.initials}
                        </span>
                        <span className="text-[#3D3820]/75 font-sans text-[11px] sm:text-xs">{item.tag}</span>
                      </div>

                      <p className="font-serif text-xs sm:text-sm md:text-base text-[#1F1B0E] leading-relaxed italic">
                        "{item.quote}"
                      </p>
                    </div>

                    <div className="pt-1 flex items-center space-x-2 text-[11px] sm:text-xs font-sans text-[#3D3820] bg-[#FFEB99]/40 p-2 sm:p-2.5 rounded-lg border border-[#FFE28A]/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A3D] shrink-0" />
                      <span>{item.takeaway}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Direct Info & FAQ */}
          {activeTab === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl animate-fadeIn">
              <div className="p-5 sm:p-6 bg-[#FFFEF7] text-[#1F1B0E] border border-[#1F1B0E] rounded-xl space-y-3.5 text-xs font-sans shadow-sm">
                <span className="font-bold uppercase font-mono block pb-2 border-b border-[#FFE28A]">
                  Ways to reach me
                </span>
                <div>
                  <span className="text-[#3D3820] block text-[11px]">Email:</span>
                  <a href={`mailto:${siteContent.practice.email}`} className="text-[#1F1B0E] text-xs sm:text-sm hover:underline font-bold break-all">
                    {siteContent.practice.email}
                  </a>
                </div>
                <div>
                  <span className="text-[#3D3820] block text-[11px]">Phone:</span>
                  <a href={`tel:${siteContent.practice.phone.replace(/\s+/g, '')}`} className="text-[#1F1B0E] text-xs sm:text-sm hover:underline font-bold">
                    {siteContent.practice.phone}
                  </a>
                </div>
                <div>
                  <span className="text-[#3D3820] block text-[11px]">Hours:</span>
                  <p className="text-[#1F1B0E] whitespace-pre-line mt-0.5 text-xs sm:text-sm leading-relaxed">{siteContent.practice.officeHours}</p>
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-[#FFFEF7] text-[#1F1B0E] border border-[#1F1B0E] rounded-xl space-y-3.5 text-xs font-sans shadow-sm">
                <span className="font-bold uppercase font-mono block pb-2 border-b border-[#FFE28A]">
                  Common questions
                </span>
                <div className="space-y-3">
                  {siteContent.contact.faq.map((item) => (
                    <div key={item.id} className="space-y-0.5">
                      <p className="font-serif text-xs sm:text-sm text-[#1F1B0E] font-medium">{item.q}</p>
                      <p className="text-xs text-[#3D3820] leading-relaxed font-light">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
