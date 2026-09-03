import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MosbyTab } from './MosbyTab';
import { siteContent } from '../data/content';
import ContactForm from './ContactForm';

export default function MosbyStack() {
  const location = useLocation();
  const navigate = useNavigate();

  // Map URL paths directly to the 3 main pages/folders:
  // '/' -> 0 (Home), '/about' -> 1 (About Me), '/contact' -> 2 (Get in Touch)
  const getGroupFromPath = (path) => {
    if (path.startsWith('/about')) return 1;
    if (path.startsWith('/contact')) return 2;
    return 0;
  };

  const [activeGroup, setActiveGroup] = useState(getGroupFromPath(location.pathname));
  const [activeSubTab, setActiveSubTab] = useState(0);

  useEffect(() => {
    const grp = getGroupFromPath(location.pathname);
    setActiveGroup(grp);
  }, [location.pathname]);

  const selectGroup = (groupIndex, path, subTab = 0) => {
    setActiveGroup(groupIndex);
    setActiveSubTab(subTab);
    navigate(path);
  };

  // Exactly 3 physical folders matching the 3 pages: Home, About Me, Contact
  const groups = [
    {
      id: "home-folder",
      index: "01",
      path: "/",
      bgHex: "#FFEB99", // Secondary surface: vivid soft sunshine yellow
      textColor: "#1F1B0E",
      category: "A Quiet Place to Talk",
      desc: "Therapy should feel calm, supportive, and human. We'll take things one step at a time to help you make sense of what you're carrying.",
      tabs: [
        { label: "Welcome", bgHex: "#FFEB99", textColor: "#1F1B0E" },
        { label: "What We Can Work On", bgHex: "#FFC72C", textColor: "#1F1B0E" },
        { label: "My Approach", bgHex: "#FF8A3D", textColor: "#FFFEF7" },
      ],
    },
    {
      id: "about-folder",
      index: "02",
      path: "/about",
      bgHex: "#F5A300", // Hover/deep state: saturated amber
      textColor: "#1F1B0E",
      category: "About Niyati",
      desc: "A little about who I am, how we'll work together in sessions, and what you can expect when you come in.",
      tabs: [
        { label: "Meet Niyati", bgHex: "#F5A300", textColor: "#1F1B0E" },
        { label: "The Way We'll Work", bgHex: "#FFEB99", textColor: "#1F1B0E" },
        { label: "Background & Degrees", bgHex: "#1F1B0E", textColor: "#FFFEF7" },
      ],
    },
    {
      id: "contact-folder",
      index: "03",
      path: "/contact",
      bgHex: "#FF8A3D", // Pop accent: warm coral-orange
      textColor: "#FFFEF7",
      category: "Get in Touch",
      desc: "Reaching out is easy and unpressured. Send me a quick note below or take a look at the common questions.",
      tabs: [
        { label: "Send a Note", bgHex: "#FF8A3D", textColor: "#FFFEF7" },
        { label: "Direct Info & FAQ", bgHex: "#FFC72C", textColor: "#1F1B0E" },
      ],
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto select-none">
      
      {/* 3 CONTINUOUS FOLDERS */}
      <div className="w-full flex flex-col bg-transparent shadow-xl rounded-t-lg overflow-hidden border border-[#FFE28A]">
        
        {groups.map((group, groupIdx) => {
          const isOpen = activeGroup === groupIdx;

          return (
            <div key={group.id} className="w-full flex flex-col">
              
              {/* TABS ROW */}
              <div className="flex items-end px-4 sm:px-10 overflow-x-auto no-scrollbar z-10">
                {group.tabs.map((tab, tabIdx) => {
                  const isTabActive = isOpen && activeSubTab === tabIdx;
                  return (
                    <MosbyTab
                      key={tab.label}
                      label={tab.label}
                      isActive={isTabActive}
                      bgHex={tab.bgHex}
                      textColor={tab.textColor}
                      onClick={() => selectGroup(groupIdx, group.path, tabIdx)}
                    />
                  );
                })}
              </div>

              {/* FOLDER COVER BAR */}
              <div
                onClick={() => selectGroup(groupIdx, group.path, 0)}
                className="cursor-pointer px-4 sm:px-10 py-3.5 sm:py-4 flex items-center justify-between transition-opacity duration-150 border-t border-[#1F1B0E]/15"
                style={{ backgroundColor: group.bgHex, color: group.textColor }}
              >
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs opacity-75 hidden sm:inline font-bold">
                    0{groupIdx + 1} //
                  </span>
                  <span className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold">
                    {group.tabs[0]?.label}
                  </span>
                </div>

                <div className="flex items-center space-x-2 font-mono text-xs sm:text-sm tracking-wider uppercase opacity-90 font-medium">
                  <span>{group.category}</span>
                  <span className="text-sm font-bold">{isOpen ? 'v' : '<'}</span>
                </div>
              </div>

              {/* FOLDER EXPANDED CONTENT */}
              {isOpen && (
                <div
                  className="w-full px-6 sm:px-12 py-10 sm:py-14 space-y-10 transition-all duration-300 border-t border-[#1F1B0E]/10"
                  style={{ backgroundColor: group.bgHex, color: group.textColor }}
                >
                  
                  {/* Intro Description */}
                  <div className="max-w-3xl font-sans text-sm sm:text-base leading-relaxed pb-6 border-b border-[#1F1B0E]/15 opacity-95">
                    <p>{group.desc}</p>
                  </div>

                  {/* ------------------------------------------------------------- */}
                  {/* FOLDER 1 (PAGE 1): HOME CONTENT                               */}
                  {/* ------------------------------------------------------------- */}
                  {groupIdx === 0 && (
                    <div className="space-y-10 animate-fadeIn">
                      
                      {/* Subtab 0: Welcome */}
                      {activeSubTab === 0 && (
                        <div className="space-y-6 max-w-3xl">
                          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#1F1B0E]">
                            {siteContent.home.hero.title}
                          </h2>
                          <p className="font-sans text-base sm:text-xl font-light leading-relaxed text-[#3D3820]">
                            {siteContent.home.hero.subtitle}
                          </p>
                          <div className="flex flex-wrap gap-4 pt-2">
                            <button
                              onClick={() => setActiveSubTab(1)}
                              className="px-6 py-3.5 bg-[#FFC72C] hover:bg-[#F5A300] text-[#1F1B0E] font-mono text-xs uppercase font-bold tracking-wider transition-colors border border-[#1F1B0E] shadow-sm rounded"
                            >
                              See what we can work on &gt;
                            </button>
                            <button
                              onClick={() => selectGroup(2, '/contact', 0)}
                              className="px-6 py-3.5 bg-[#FFFEF7] hover:bg-[#FFC72C] text-[#1F1B0E] font-mono text-xs uppercase tracking-wider transition-colors border border-[#1F1B0E] rounded"
                            >
                              Send a note &gt;
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Subtab 1: What We Can Work On */}
                      {activeSubTab === 1 && (
                        <div className="space-y-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {siteContent.home.services.map((item) => (
                              <div key={item.id} className="p-6 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-lg space-y-3 shadow-sm">
                                <h3 className="font-serif text-2xl text-[#1F1B0E]">{item.title}</h3>
                                <p className="font-sans text-sm text-[#3D3820] leading-relaxed font-light">
                                  {item.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Subtab 2: My Approach */}
                      {activeSubTab === 2 && (
                        <div className="space-y-6 max-w-3xl">
                          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1B0E]">
                            {siteContent.home.intro.heading}
                          </h2>
                          <div className="font-sans text-base text-[#3D3820] space-y-3 leading-relaxed font-light">
                            <p>{siteContent.home.intro.p1}</p>
                            <p>{siteContent.home.intro.p2}</p>
                          </div>
                          <div className="p-5 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-lg space-y-1">
                            <p className="font-serif italic text-lg text-[#1F1B0E]">
                              {siteContent.home.quote.statement}
                            </p>
                            <p className="font-mono text-xs text-[#3D3820] uppercase font-semibold">
                              — {siteContent.home.quote.citation}
                            </p>
                          </div>
                        </div>
                      )}

                    </div>
                  )}

                  {/* ------------------------------------------------------------- */}
                  {/* FOLDER 2 (PAGE 2): ABOUT ME CONTENT                           */}
                  {/* ------------------------------------------------------------- */}
                  {groupIdx === 1 && (
                    <div className="space-y-8 animate-fadeIn">
                      
                      {/* Subtab 0: Meet Niyati */}
                      {activeSubTab === 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                          <div className="lg:col-span-4 p-6 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-lg space-y-4 text-center shadow-sm">
                            <div className="w-20 h-20 mx-auto border-2 border-[#1F1B0E] bg-[#FFC72C] flex items-center justify-center rounded">
                              <span className="font-mono text-2xl font-bold text-[#1F1B0E]">NS</span>
                            </div>
                            <div>
                              <h3 className="font-sans text-base font-bold text-[#1F1B0E]">{siteContent.practice.therapistName}</h3>
                              <p className="font-mono text-xs text-[#3D3820]">{siteContent.practice.credentials}</p>
                            </div>
                            <div className="text-xs font-sans text-left space-y-1 pt-3 border-t border-[#FFE28A] text-[#3D3820]">
                              <p>• 10+ years of experience</p>
                              <p>• In-person in Pune & online video</p>
                            </div>
                          </div>

                          <div className="lg:col-span-8 space-y-4">
                            <h2 className="font-serif text-2xl sm:text-4xl text-[#1F1B0E]">
                              Hi, I'm Niyati.
                            </h2>
                            <div className="font-sans text-sm sm:text-base text-[#1F1B0E] space-y-3 leading-relaxed font-light">
                              {siteContent.about.story.map((p, i) => (
                                <p key={i}>{p}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Subtab 1: The Way We'll Work */}
                      {activeSubTab === 1 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {siteContent.about.howIWork.map((item, idx) => (
                            <div key={idx} className="p-6 bg-[#FFFEF7] border border-[#1F1B0E]/20 rounded-lg space-y-2 shadow-sm">
                              <h3 className="font-serif text-xl text-[#1F1B0E]">{item.title}</h3>
                              <p className="font-sans text-sm text-[#3D3820] leading-relaxed font-light">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Subtab 2: Background & Degrees */}
                      {activeSubTab === 2 && (
                        <div className="border border-[#1F1B0E]/20 divide-y divide-[#1F1B0E]/15 font-sans text-xs max-w-3xl bg-[#FFFEF7] p-6 rounded-lg">
                          {siteContent.about.training.map((item, idx) => (
                            <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                              <div>
                                <p className="text-sm font-semibold text-[#1F1B0E]">{item.title}</p>
                                <p className="text-[#3D3820] text-xs">{item.place}</p>
                              </div>
                              <span className="text-[#3D3820]/75 font-mono text-xs shrink-0">{item.year}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  )}

                  {/* ------------------------------------------------------------- */}
                  {/* FOLDER 3 (PAGE 3): GET IN TOUCH CONTENT                       */}
                  {/* ------------------------------------------------------------- */}
                  {groupIdx === 2 && (
                    <div className="space-y-8 animate-fadeIn">
                      
                      {/* Subtab 0: Send a Note */}
                      {activeSubTab === 0 && (
                        <div className="space-y-6 max-w-3xl">
                          <h2 className="font-serif text-2xl sm:text-4xl text-white">
                            Send a note
                          </h2>
                          <ContactForm />
                        </div>
                      )}

                      {/* Subtab 1: Direct Info & FAQ */}
                      {activeSubTab === 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                          <div className="p-6 bg-[#FFFEF7] text-[#1F1B0E] border border-[#1F1B0E] rounded-lg space-y-4 text-xs font-sans shadow-sm">
                            <span className="font-bold uppercase font-mono block pb-2 border-b border-[#FFE28A]">
                              Ways to reach me
                            </span>
                            <div>
                              <span className="text-[#3D3820] block text-[11px]">Email:</span>
                              <a href={`mailto:${siteContent.practice.email}`} className="text-[#1F1B0E] text-sm hover:underline font-bold">
                                {siteContent.practice.email}
                              </a>
                            </div>
                            <div>
                              <span className="text-[#3D3820] block text-[11px]">Phone:</span>
                              <a href={`tel:${siteContent.practice.phone.replace(/\s+/g, '')}`} className="text-[#1F1B0E] text-sm hover:underline font-bold">
                                {siteContent.practice.phone}
                              </a>
                            </div>
                            <div>
                              <span className="text-[#3D3820] block text-[11px]">Hours:</span>
                              <p className="text-[#1F1B0E] whitespace-pre-line mt-0.5">{siteContent.practice.officeHours}</p>
                            </div>
                          </div>

                          <div className="p-6 bg-[#FFFEF7] text-[#1F1B0E] border border-[#1F1B0E] rounded-lg space-y-4 text-xs font-sans shadow-sm">
                            <span className="font-bold uppercase font-mono block pb-2 border-b border-[#FFE28A]">
                              Common questions
                            </span>
                            <div className="space-y-3">
                              {siteContent.contact.faq.slice(0, 2).map((item) => (
                                <div key={item.id} className="space-y-0.5">
                                  <p className="font-serif text-sm text-[#1F1B0E] font-medium">{item.q}</p>
                                  <p className="text-xs text-[#3D3820] leading-relaxed font-light">{item.a}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  )}

                </div>
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
}
