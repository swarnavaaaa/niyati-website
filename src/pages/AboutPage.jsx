import React, { useState } from 'react';
import { MosbyTab } from '../components/MosbyTab';
import { siteContent } from '../data/content';
import { Heart, Sparkles, Compass, Smile } from 'lucide-react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "My Therapeutic Approach", bgHex: "#F5A300", textColor: "#1F1B0E" },
    { label: "Areas I Can Help With", bgHex: "#FFEB99", textColor: "#1F1B0E" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-8 py-4 sm:py-8 select-none">
      
      {/* Top Header */}
      <div className="mb-6 sm:mb-10 max-w-3xl space-y-2.5 sm:space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1F1B0E] font-normal leading-[1.15] tracking-tight">
          About My Practice
        </h1>
        <p className="font-sans text-sm sm:text-lg md:text-xl text-[#3D3820] font-light leading-relaxed max-w-2xl">
          Learn about how I work and the core areas I support in individual and couples therapy.
        </p>
      </div>

      {/* THE SINGLE ABOUT FOLDER */}
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
        <div className="bg-[#F5A300] text-[#1F1B0E] px-3.5 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between border-b border-[#1F1B0E]/10">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="font-mono text-[11px] sm:text-xs opacity-75 font-bold">02 //</span>
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold">
              {tabs[activeTab]?.label}
            </span>
          </div>
          <div className="font-mono text-[11px] sm:text-sm tracking-wider uppercase opacity-90 font-medium">
            <span>About Practice</span>
          </div>
        </div>

        {/* FOLDER CONTENT */}
        <div className="bg-[#F5A300] text-[#1F1B0E] px-4 sm:px-10 md:px-12 py-6 sm:py-12 space-y-8">
          
          {/* TAB 1: About My Therapeutic Approach */}
          {activeTab === 0 && (
            <div className="space-y-6 sm:space-y-8 animate-fadeIn max-w-4xl">
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1F1B0E]">
                  How We'll Work Together
                </h2>
                <p className="font-sans text-sm sm:text-base md:text-lg text-[#1F1B0E] leading-relaxed font-light">
                  Therapy with me is conversational, warm, and collaborative. I don't sit in silence taking notes, nor do I give generic advice. We sit together to explore your inner world with kindness and practical clarity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="p-5 sm:p-6 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-xl space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#FFC72C]/40 text-[#1F1B0E] flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1F1B0E]">Understanding the Full Picture</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#3D3820] leading-relaxed font-light">
                    We look at both your past experiences and your current daily life to understand why certain feelings or reactions keep coming up.
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-xl space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#FFC72C]/40 text-[#1F1B0E] flex items-center justify-center">
                    <Heart className="w-4 h-4 text-[#FF8A3D]" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1F1B0E]">Calming Mind & Body</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#3D3820] leading-relaxed font-light">
                    Stress lives in the body. We use simple grounding tools to ease physical tension, slow down anxiety, and help your body feel calm again.
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-xl space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#FFC72C]/40 text-[#1F1B0E] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#FF8A3D]" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1F1B0E]">Living by Your Values</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#3D3820] leading-relaxed font-light">
                    We focus on helping you make choices that align with what genuinely matters to you, rather than feeling trapped by expectations.
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-xl space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#FFC72C]/40 text-[#1F1B0E] flex items-center justify-center">
                    <Smile className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1F1B0E]">Softening Self-Criticism</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#3D3820] leading-relaxed font-light">
                    Learning to quiet that harsh inner voice and building real, patient self-compassion so you can be a better friend to yourself.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Areas I Can Help With */}
          {activeTab === 1 && (
            <div className="space-y-6 sm:space-y-8 animate-fadeIn max-w-4xl">
              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1F1B0E]">
                  Areas I Can Help With
                </h2>
                <p className="font-sans text-xs sm:text-sm md:text-base text-[#1F1B0E] font-light">
                  Tailored support across several key areas of personal and relational well-being:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 sm:p-6 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-xl space-y-2.5 shadow-sm">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1F1B0E]">Individual Therapy</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#3D3820] leading-relaxed font-light">
                    A dedicated weekly space to talk through emotional struggles, untangle self-doubt, set healthier boundaries, and rediscover your confidence.
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-xl space-y-2.5 shadow-sm">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1F1B0E]">Stress, Anxiety & Burnout</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#3D3820] leading-relaxed font-light">
                    Helping high-achievers and overthinkers break free from constant worry, chronic fatigue, perfectionism, and work-related exhaustion.
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-xl space-y-2.5 shadow-sm">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1F1B0E]">Relationships & Couples</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#3D3820] leading-relaxed font-light">
                    Helping partners stop painful recurring arguments, heal old hurts, rebuild trust, and communicate with mutual honesty and warmth.
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-xl space-y-2.5 shadow-sm">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1F1B0E]">Life Transitions & Grief</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#3D3820] leading-relaxed font-light">
                    Support through major thresholds — changing careers, moving cities, navigating a breakup, or learning how to carry a deep loss.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
