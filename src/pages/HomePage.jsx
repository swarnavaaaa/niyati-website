import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MosbyTab } from '../components/MosbyTab';
import { siteContent } from '../data/content';
import { Instagram, Linkedin, Youtube, Award, GraduationCap, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Photo & Short Note", bgHex: "#FFFFFF", textColor: "#1A180E" },
    { label: "Credentials", bgHex: "#FFDE59", textColor: "#1A180E" },
    { label: "Work Experience", bgHex: "#FF7F3F", textColor: "#FFFFFF" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-8 py-4 sm:py-8 select-none">
      
      {/* Top Welcome Title */}
      <div className="mb-6 sm:mb-10 max-w-3xl space-y-2.5 sm:space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1A180E] font-normal leading-[1.15] tracking-tight">
          {siteContent.home.hero.title}
        </h1>
        <p className="font-sans text-sm sm:text-lg md:text-xl text-[#2D2913] font-medium leading-relaxed max-w-2xl">
          {siteContent.home.hero.subtitle}
        </p>
      </div>

      {/* THE SINGLE HOME FOLDER */}
      <div className="w-full flex flex-col shadow-xl rounded-t-xl overflow-hidden border border-[#1A180E]/15">
        
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
        <div
          className="px-3.5 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between border-b border-[#1A180E]/15 transition-colors duration-200"
          style={{ backgroundColor: tabs[activeTab]?.bgHex, color: tabs[activeTab]?.textColor }}
        >
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="font-mono text-[11px] sm:text-xs opacity-75 font-bold">01 //</span>
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold">
              {tabs[activeTab]?.label}
            </span>
          </div>
          <div className="font-mono text-[11px] sm:text-sm tracking-wider uppercase opacity-90 font-medium">
            <span>Home</span>
          </div>
        </div>

        {/* FOLDER CONTENT */}
        <div
          className="px-4 sm:px-10 md:px-12 py-6 sm:py-12 space-y-8 transition-colors duration-200"
          style={{ backgroundColor: tabs[activeTab]?.bgHex, color: tabs[activeTab]?.textColor }}
        >
          
          {/* TAB 1: Photo & Short Note */}
          {activeTab === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start animate-fadeIn">
              
              <div className="lg:col-span-4 p-5 sm:p-6 bg-[#FFFFFF] border border-[#1A180E]/15 rounded-xl space-y-3.5 text-center shadow-sm">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto border-2 border-[#1A180E] bg-[#FDFF6D] flex items-center justify-center rounded-lg shadow-sm">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-[#1A180E]">NB</span>
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A180E]">{siteContent.practice.therapistName}</h3>
                  <p className="font-sans text-xs text-[#2D2913] mt-0.5">Psychotherapist & Counselor</p>
                </div>

                <div className="flex items-center justify-center space-x-3 pt-1">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 sm:w-7 sm:h-7 rounded-full border border-[#1A180E]/20 bg-[#FFFDE0] hover:bg-[#FDFF6D] flex items-center justify-center text-[#1A180E] transition-colors"
                  >
                    <Instagram className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 sm:w-7 sm:h-7 rounded-full border border-[#1A180E]/20 bg-[#FFFDE0] hover:bg-[#FDFF6D] flex items-center justify-center text-[#1A180E] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 sm:w-7 sm:h-7 rounded-full border border-[#1A180E]/20 bg-[#FFFDE0] hover:bg-[#FDFF6D] flex items-center justify-center text-[#1A180E] transition-colors"
                  >
                    <Youtube className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                  </a>
                </div>

                <div className="text-xs font-sans text-left space-y-1 pt-3 border-t border-[#1A180E]/10 text-[#2D2913]">
                  <p>• In-person in Koregaon Park, Pune</p>
                  <p>• Secure video sessions worldwide</p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A180E]">
                  A warm note from me
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#1A180E] space-y-3 leading-relaxed font-light">
                  <p>
                    Hello and welcome. Taking the first step toward therapy can feel a little daunting, but you don't have to carry everything by yourself.
                  </p>
                  <p>
                    In our work together, there is no pressure to perform or have all the answers. We create a calm, unhurried space where you can speak honestly, untangle what's been weighing on you, and move forward at your own pace.
                  </p>
                  <p>
                    Whether you're feeling burned out by daily demands, wrestling with self-doubt, or navigating a difficult relationship, you are warmly invited to reach out.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setActiveTab(1)}
                    className="w-full sm:w-auto px-5 py-3 bg-[#FDFF6D] hover:bg-[#E5E84A] text-[#1A180E] font-mono text-xs uppercase font-bold tracking-wider transition-colors border border-[#1A180E] shadow-sm rounded text-center min-h-[44px] flex items-center justify-center"
                  >
                    View Credentials &gt;
                  </button>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-5 py-3 bg-[#1A180E] hover:bg-[#332F1A] text-[#FFFEFA] font-mono text-xs uppercase tracking-wider transition-colors border border-[#1A180E] rounded text-center min-h-[44px] flex items-center justify-center shadow-sm"
                  >
                    Get in Touch &gt;
                  </Link>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Credentials */}
          {activeTab === 1 && (
            <div className="space-y-5 sm:space-y-6 max-w-4xl animate-fadeIn">
              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A180E]">
                  Education & Clinical Credentials
                </h2>
                <p className="font-sans text-xs sm:text-sm md:text-base text-[#2D2913] font-light">
                  Rigorous formal training combined with continuous professional development.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#1A180E]/15 rounded-xl space-y-2.5 shadow-sm text-[#1A180E]">
                  <div className="w-8 h-8 rounded-full bg-[#FDFF6D] text-[#1A180E] flex items-center justify-center border border-[#1A180E]/20">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1A180E]">Master of Arts in Clinical Psychology</h3>
                  <p className="font-sans text-xs text-[#2D2913]">SNDT Women's University, Mumbai (2013 – 2015)</p>
                  <p className="font-sans text-xs text-[#2D2913]/80 leading-relaxed pt-1">
                    Specialized training in adult psychotherapy, psychological assessment, and counseling ethics.
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#1A180E]/15 rounded-xl space-y-2.5 shadow-sm text-[#1A180E]">
                  <div className="w-8 h-8 rounded-full bg-[#FDFF6D] text-[#1A180E] flex items-center justify-center border border-[#1A180E]/20">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1A180E]">Licensed Marriage & Family Therapist (LMFT)</h3>
                  <p className="font-sans text-xs text-[#2D2913]">Licensed Professional Practice (2015 – Present)</p>
                  <p className="font-sans text-xs text-[#2D2913]/80 leading-relaxed pt-1">
                    Certified for independent clinical practice for individuals, couples, and family systems.
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#1A180E]/15 rounded-xl space-y-2.5 shadow-sm text-[#1A180E]">
                  <div className="w-8 h-8 rounded-full bg-[#FDFF6D] text-[#1A180E] flex items-center justify-center border border-[#1A180E]/20">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1A180E]">Bachelor of Arts in Psychology (Honors)</h3>
                  <p className="font-sans text-xs text-[#2D2913]">Fergusson College, Pune (2010 – 2013)</p>
                  <p className="font-sans text-xs text-[#2D2913]/80 leading-relaxed pt-1">
                    Foundation in behavioral science, developmental psychology, and research methodologies.
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#1A180E]/15 rounded-xl space-y-2.5 shadow-sm text-[#1A180E]">
                  <div className="w-8 h-8 rounded-full bg-[#FDFF6D] text-[#1A180E] flex items-center justify-center border border-[#1A180E]/20">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1A180E]">Advanced Certifications</h3>
                  <p className="font-sans text-xs text-[#2D2913]">Ongoing Clinical Education</p>
                  <p className="font-sans text-xs text-[#2D2913]/80 leading-relaxed pt-1">
                    Acceptance & Commitment Therapy (ACT), Anxiety & Stress Management, and Emotion-Focused Couples Therapy.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Work Experience */}
          {activeTab === 2 && (
            <div className="space-y-5 sm:space-y-6 max-w-4xl animate-fadeIn">
              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white">
                  Professional Work Experience
                </h2>
                <p className="font-sans text-xs sm:text-sm md:text-base text-white/90 font-light">
                  Over a decade of hands-on experience supporting individuals and couples through life's pivotal moments.
                </p>
              </div>

              <div className="border border-[#1A180E]/15 divide-y divide-[#1A180E]/10 font-sans text-xs bg-[#FFFFFF] text-[#1A180E] p-4 sm:p-6 rounded-xl shadow-sm space-y-1">
                
                <div className="py-3.5 sm:py-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-1">
                    <p className="text-sm sm:text-base font-semibold text-[#1A180E]">Private Psychotherapy Practice — Founder & Lead Therapist</p>
                    <span className="text-[#2D2913] font-mono text-xs shrink-0 font-bold">2015 – Present</span>
                  </div>
                  <p className="text-xs text-[#2D2913]/75">Pune Studio & Nationwide Telehealth</p>
                  <p className="text-xs text-[#2D2913] leading-relaxed pt-1 font-light">
                    Providing ongoing weekly therapy for adults and couples dealing with anxiety, burnout, relationship friction, and life transitions.
                  </p>
                </div>

                <div className="py-3.5 sm:py-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-1">
                    <p className="text-sm sm:text-base font-semibold text-[#1A180E]">Hospital Outpatient Mental Health Unit — Clinical Counselor</p>
                    <span className="text-[#2D2913] font-mono text-xs shrink-0 font-bold">2014 – 2015</span>
                  </div>
                  <p className="text-xs text-[#2D2913]/75">Pune, India</p>
                  <p className="text-xs text-[#2D2913] leading-relaxed pt-1 font-light">
                    Conducted diagnostic intakes, supportive crisis counseling, and structured anxiety reduction sessions for outpatient clients.
                  </p>
                </div>

                <div className="py-3.5 sm:py-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-1">
                    <p className="text-sm sm:text-base font-semibold text-[#1A180E]">University Counseling Center — Graduate Counselor</p>
                    <span className="text-[#2D2913] font-mono text-xs shrink-0 font-bold">2013 – 2014</span>
                  </div>
                  <p className="text-xs text-[#2D2913]/75">Mumbai, India</p>
                  <p className="text-xs text-[#2D2913] leading-relaxed pt-1 font-light">
                    Supported students and young adults managing academic stress, perfectionism, self-esteem questions, and family challenges.
                  </p>
                </div>

                <div className="py-3.5 sm:py-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-1">
                    <p className="text-sm sm:text-base font-semibold text-[#1A180E]">Community Mental Health & Wellness Workshops — Facilitator</p>
                    <span className="text-[#2D2913] font-mono text-xs shrink-0 font-bold">2015 – Present</span>
                  </div>
                  <p className="text-xs text-[#2D2913]/75">Corporate & Community Settings</p>
                  <p className="text-xs text-[#2D2913] leading-relaxed pt-1 font-light">
                    Designed and facilitated interactive workshops on preventing burnout, setting healthy boundaries, and managing workplace stress.
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
