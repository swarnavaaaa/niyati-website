import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FolderTab } from './FolderTab';
import { siteContent } from '../data/content';
import ContactForm from './ContactForm';
import { ArrowRight, CornerDownRight, ShieldCheck, Mail, Phone, Clock, MapPin, Check, Feather } from 'lucide-react';

export default function FolderSystem() {
  const location = useLocation();
  const navigate = useNavigate();

  const getFolderFromPath = (path) => {
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/contact')) return 'contact';
    return 'home';
  };

  const [activeFolder, setActiveFolder] = useState(getFolderFromPath(location.pathname));
  const [homeSubTab, setHomeSubTab] = useState(0);
  const [aboutSubTab, setAboutSubTab] = useState(0);
  const [contactSubTab, setContactSubTab] = useState(0);

  useEffect(() => {
    setActiveFolder(getFolderFromPath(location.pathname));
  }, [location.pathname]);

  const selectFolder = (folderKey, path) => {
    setActiveFolder(folderKey);
    navigate(path);
  };

  const homeTabs = [
    { label: "Overview & Hero", id: "overview" },
    { label: "Areas of Focus", id: "services" },
    { label: "Clinical Philosophy", id: "philosophy" },
    { label: "What to Expect", id: "experience" },
  ];

  const aboutTabs = [
    { label: "Niyati Sharma", id: "bio" },
    { label: "Approach & Modalities", id: "modalities" },
    { label: "Who I Work With", id: "who" },
    { label: "Credentials & Training", id: "credentials" },
  ];

  const contactTabs = [
    { label: "Case Intake Form", id: "form" },
    { label: "Direct Channels & Studio", id: "direct" },
    { label: "Clinical FAQ", id: "faq" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-6">
      
      {/* ========================================================================= */}
      {/* UNIFIED CONTINUOUS FOLDER STACK (ONE PHYSICAL DOSSIER) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden rounded-t-lg shadow-2xl flex flex-col">

        {/* ----------------------------------------------------------------------- */}
        {/* 1. FOLDER 01: HOME / ARCHIVE (COBALT BLUE #1E4BD7)                      */}
        {/* ----------------------------------------------------------------------- */}
        <div className="w-full flex flex-col">
          
          {/* Tabs row for Folder 1 */}
          <div className="flex items-end px-3 sm:px-8 overflow-x-auto no-scrollbar z-10 bg-transparent">
            {homeTabs.map((tab, idx) => (
              <FolderTab
                key={tab.id}
                label={tab.label}
                isActive={activeFolder === 'home' && homeSubTab === idx}
                bgHex="#1E4BD7"
                onClick={() => {
                  selectFolder('home', '/');
                  setHomeSubTab(idx);
                }}
              />
            ))}
          </div>

          {/* Folder 1 Header Bar */}
          <div
            onClick={() => selectFolder('home', '/')}
            className="cursor-pointer bg-[#1E4BD7] text-white px-4 sm:px-8 py-3.5 flex items-center justify-between font-mono text-xs sm:text-sm tracking-wider uppercase select-none transition-colors border-t border-white/10"
          >
            <div className="flex items-center space-x-3">
              <span className="font-bold bg-black/25 px-2 py-0.5 rounded text-[11px]">01</span>
              <span className="font-semibold tracking-tight">HOME // PRACTICE ARCHIVE & CLINICAL FOCUS</span>
            </div>
            <div className="flex items-center space-x-2 text-[11px] opacity-85">
              <span className="hidden sm:inline">Organic & Clinical Modernism</span>
              <span className="font-bold text-sm">{activeFolder === 'home' ? '∨' : '<'}</span>
            </div>
          </div>

          {/* Folder 1 Open Content Body */}
          {activeFolder === 'home' && (
            <div className="bg-[#1E4BD7] text-white px-6 sm:px-12 py-10 space-y-12 transition-all">
              
              {/* Sub-tab selection indicator bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/20 font-mono text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-white/70 uppercase mr-2">[ SECTIONS ]:</span>
                  {homeTabs.map((tab, idx) => (
                    <button
                      key={tab.id}
                      onClick={() => setHomeSubTab(idx)}
                      className={`px-3 py-1 text-xs rounded transition-colors uppercase ${
                        homeSubTab === idx
                          ? 'bg-white text-dark-900 font-bold'
                          : 'bg-black/20 hover:bg-black/40 text-white/90'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <span className="text-[11px] opacity-75">STATUS: ACTIVE 1:1 INTAKES</span>
              </div>

              {/* 01. Overview & Hero */}
              {homeSubTab === 0 && (
                <div className="space-y-10 max-w-4xl">
                  <div className="space-y-6">
                    <div className="inline-block px-3 py-1 bg-black/20 text-[11px] font-mono tracking-widest uppercase">
                      ARCHIVE ISSUE // VOL. 2026
                    </div>
                    <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.1] tracking-tight">
                      {siteContent.home.hero.title}
                    </h1>
                    <p className="font-sans text-lg sm:text-2xl text-white/90 font-light leading-relaxed max-w-3xl">
                      {siteContent.home.hero.subtitle}
                    </p>
                  </div>

                  <div className="p-6 bg-black/20 border border-white/15 rounded-lg space-y-3 font-mono text-xs">
                    <span className="text-white/70 uppercase font-bold block">[ PRACTICE MANIFESTO ]</span>
                    <p className="font-sans text-base text-white/95 leading-relaxed font-light">
                      {siteContent.home.philosophy.thesis1}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={() => setHomeSubTab(1)}
                      className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white text-dark-900 font-mono text-xs uppercase font-bold tracking-wider hover:bg-parchment-200 transition-colors"
                    >
                      <span>BROWSE CLINICAL DOSSIERS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => selectFolder('contact', '/contact')}
                      className="inline-flex items-center space-x-2 px-6 py-3.5 border border-white/40 hover:border-white text-white font-mono text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>OPEN CONTACT FOLDER</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* 02. Areas of Focus */}
              {homeSubTab === 1 && (
                <div className="space-y-8">
                  <div className="max-w-3xl space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/70 block">
                      CLINICAL DOSSIER CATALOGUE
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl">
                      Areas of Specialized Psychotherapy
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {siteContent.dossiers.map((dossier) => (
                      <div
                        key={dossier.id}
                        className="p-6 bg-black/25 border border-white/15 rounded-lg space-y-4 flex flex-col justify-between hover:bg-black/30 transition-colors"
                      >
                        <div className="space-y-3">
                          <div className="flex justify-between items-center font-mono text-xs text-white/70 border-b border-white/10 pb-2">
                            <span className="font-bold text-white">[{dossier.code}]</span>
                            <span>{dossier.category}</span>
                          </div>
                          <h3 className="font-serif text-2xl text-white font-normal">
                            {dossier.tabTitle}
                          </h3>
                          <p className="font-sans text-sm text-white/85 leading-relaxed font-light">
                            {dossier.dossierOverview}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex justify-between items-center font-mono text-xs">
                          <span className="text-[11px] text-white/70">{dossier.sessionStructure}</span>
                          <button
                            onClick={() => selectFolder('contact', '/contact')}
                            className="hover:underline text-white font-bold"
                          >
                            INQUIRE &gt;
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 03. Clinical Philosophy */}
              {homeSubTab === 2 && (
                <div className="space-y-8 max-w-4xl">
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/70 block">
                      {siteContent.home.philosophy.chapter}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
                      {siteContent.home.philosophy.headline}
                    </h2>
                  </div>

                  <div className="font-sans text-base sm:text-lg text-white/90 space-y-4 leading-relaxed font-light">
                    <p>{siteContent.home.philosophy.thesis1}</p>
                    <p>{siteContent.home.philosophy.thesis2}</p>
                  </div>

                  <div className="p-6 bg-black/25 border border-white/15 rounded-lg space-y-2">
                    <p className="font-serif italic text-xl sm:text-2xl text-white">
                      {siteContent.home.quote.statement}
                    </p>
                    <p className="font-mono text-xs text-white/60 uppercase">
                      — {siteContent.home.quote.citation}
                    </p>
                  </div>
                </div>
              )}

              {/* 04. What to Expect */}
              {homeSubTab === 3 && (
                <div className="space-y-8">
                  <div className="max-w-3xl space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/70 block">
                      CLINICAL CADENCE
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-normal">
                      The Psychotherapeutic Experience
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {siteContent.home.principles.map((pr) => (
                      <div key={pr.num} className="p-6 bg-black/25 border border-white/15 rounded-lg space-y-4">
                        <div className="font-mono text-xs text-white/70 pb-2 border-b border-white/10 flex justify-between">
                          <span>CLAUSE {pr.num}</span>
                          <span>{pr.label}</span>
                        </div>
                        <h3 className="font-serif text-xl font-normal text-white">
                          {pr.title}
                        </h3>
                        <p className="font-sans text-sm text-white/80 leading-relaxed font-light">
                          {pr.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 2. FOLDER 02: ABOUT / PRACTITIONER DOSSIER (FOREST TEAL #125E4B)        */}
        {/* ----------------------------------------------------------------------- */}
        <div className="w-full flex flex-col">
          
          {/* Tabs row for Folder 2 (directly flush with Folder 1 above) */}
          <div className="flex items-end px-3 sm:px-8 overflow-x-auto no-scrollbar z-10 bg-transparent">
            {aboutTabs.map((tab, idx) => (
              <FolderTab
                key={tab.id}
                label={tab.label}
                isActive={activeFolder === 'about' && aboutSubTab === idx}
                bgHex="#125E4B"
                onClick={() => {
                  selectFolder('about', '/about');
                  setAboutSubTab(idx);
                }}
              />
            ))}
          </div>

          {/* Folder 2 Header Bar */}
          <div
            onClick={() => selectFolder('about', '/about')}
            className="cursor-pointer bg-[#125E4B] text-white px-4 sm:px-8 py-3.5 flex items-center justify-between font-mono text-xs sm:text-sm tracking-wider uppercase select-none transition-colors border-t border-white/10"
          >
            <div className="flex items-center space-x-3">
              <span className="font-bold bg-black/25 px-2 py-0.5 rounded text-[11px]">02</span>
              <span className="font-semibold tracking-tight">ABOUT // PRACTITIONER MONOGRAPH & BACKGROUND</span>
            </div>
            <div className="flex items-center space-x-2 text-[11px] opacity-85">
              <span className="hidden sm:inline">Expressive & Relational</span>
              <span className="font-bold text-sm">{activeFolder === 'about' ? '∨' : '<'}</span>
            </div>
          </div>

          {/* Folder 2 Open Content Body */}
          {activeFolder === 'about' && (
            <div className="bg-[#125E4B] text-white px-6 sm:px-12 py-10 space-y-12 transition-all">
              
              {/* Sub-tab selection bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/20 font-mono text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-white/70 uppercase mr-2">[ SECTIONS ]:</span>
                  {aboutTabs.map((tab, idx) => (
                    <button
                      key={tab.id}
                      onClick={() => setAboutSubTab(idx)}
                      className={`px-3 py-1 text-xs rounded transition-colors uppercase ${
                        aboutSubTab === idx
                          ? 'bg-white text-dark-900 font-bold'
                          : 'bg-black/20 hover:bg-black/40 text-white/90'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <span className="text-[11px] opacity-75">LIC: MH-54921 // PUNE & ONLINE</span>
              </div>

              {/* 01. Niyati Sharma Bio */}
              {aboutSubTab === 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-4 p-6 bg-black/25 border border-white/15 rounded-lg space-y-6 text-center">
                    <div className="w-28 h-28 mx-auto border border-white/40 flex items-center justify-center bg-black/30">
                      <span className="font-mono text-3xl font-bold tracking-widest">NS</span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-mono text-lg font-bold uppercase">{siteContent.practice.therapistName}</h3>
                      <p className="font-mono text-xs text-white/70">{siteContent.practice.credentials}</p>
                    </div>
                    <div className="text-[11px] font-mono text-left space-y-1.5 pt-4 border-t border-white/10 text-white/80">
                      <p>• LICENSED LMFT</p>
                      <p>• 10+ YEARS CLINICAL EXPERIENCE</p>
                      <p>• PUNE STUDIO & GLOBAL VIDEO</p>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-6">
                    <div className="space-y-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-white/70 block">
                        PRIMARY CLINICAL MONOGRAPH
                      </span>
                      <h2 className="font-serif text-3xl sm:text-5xl font-normal">
                        Niyati Sharma, LMFT
                      </h2>
                    </div>
                    <div className="font-sans text-base sm:text-lg text-white/90 space-y-4 leading-relaxed font-light">
                      {siteContent.about.narrative.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 02. Approach & Modalities */}
              {aboutSubTab === 1 && (
                <div className="space-y-8">
                  <div className="max-w-3xl space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/70 block">
                      CLINICAL FRAMEWORK INDEX
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-normal">
                      Therapeutic Modalities Utilized
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {siteContent.about.clinicalPillars.map((pillar) => (
                      <div key={pillar.code} className="p-6 bg-black/25 border border-white/15 rounded-lg space-y-3">
                        <span className="font-mono text-xs font-bold text-emerald-300">[{pillar.code}]</span>
                        <h3 className="font-serif text-2xl font-normal">{pillar.name}</h3>
                        <p className="font-sans text-sm text-white/85 leading-relaxed font-light">
                          {pillar.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 03. Who I Work With */}
              {aboutSubTab === 2 && (
                <div className="space-y-8 max-w-4xl">
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/70 block">
                      PATIENT RESONANCE
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-normal">
                      Is this clinical space right for you?
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Individuals feeling depleted by high-functioning perfectionism and chronic burnout.",
                      "Those navigating destabilizing life thresholds — career transitions, relationship shifts, or loss.",
                      "People wrestling with recurring attachment scripts who desire secure, mutual intimacy.",
                      "Clients seeking deep somatic nervous system ease alongside cognitive insight.",
                    ].map((text, idx) => (
                      <div key={idx} className="p-5 bg-black/25 border border-white/15 rounded-lg flex items-start space-x-4">
                        <span className="font-mono text-xs text-emerald-300 font-bold mt-0.5">0{idx + 1} //</span>
                        <p className="font-sans text-base text-white/90 font-light">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 04. Credentials & Timeline */}
              {aboutSubTab === 3 && (
                <div className="space-y-8 max-w-4xl">
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/70 block">
                      LEDGER OF PRACTICE
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-normal">
                      Training, Degrees & Affiliations
                    </h2>
                  </div>

                  <div className="border-t border-white/15 divide-y divide-white/15 font-mono text-xs">
                    {siteContent.about.timeline.map((item, idx) => (
                      <div key={idx} className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <div>
                          <p className="font-sans text-base font-medium text-white">{item.role}</p>
                          <p className="text-white/70 text-xs mt-0.5">{item.place}</p>
                        </div>
                        <span className="text-white/60 tracking-wider shrink-0">{item.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 3. FOLDER 03: CONTACT / INTAKE DISPATCH (CRIMSON TERRACOTTA #C83220)    */}
        {/* ----------------------------------------------------------------------- */}
        <div className="w-full flex flex-col">
          
          {/* Tabs row for Folder 3 (directly flush with Folder 2 above) */}
          <div className="flex items-end px-3 sm:px-8 overflow-x-auto no-scrollbar z-10 bg-transparent">
            {contactTabs.map((tab, idx) => (
              <FolderTab
                key={tab.id}
                label={tab.label}
                isActive={activeFolder === 'contact' && contactSubTab === idx}
                bgHex="#C83220"
                onClick={() => {
                  selectFolder('contact', '/contact');
                  setContactSubTab(idx);
                }}
              />
            ))}
          </div>

          {/* Folder 3 Header Bar */}
          <div
            onClick={() => selectFolder('contact', '/contact')}
            className="cursor-pointer bg-[#C83220] text-white px-4 sm:px-8 py-3.5 flex items-center justify-between font-mono text-xs sm:text-sm tracking-wider uppercase select-none transition-colors border-t border-white/10"
          >
            <div className="flex items-center space-x-3">
              <span className="font-bold bg-black/25 px-2 py-0.5 rounded text-[11px]">03</span>
              <span className="font-semibold tracking-tight">CONTACT // CASE INTAKE DISPATCH & FAQ</span>
            </div>
            <div className="flex items-center space-x-2 text-[11px] opacity-85">
              <span className="hidden sm:inline">Contextual & Transitional</span>
              <span className="font-bold text-sm">{activeFolder === 'contact' ? '∨' : '<'}</span>
            </div>
          </div>

          {/* Folder 3 Open Content Body */}
          {activeFolder === 'contact' && (
            <div className="bg-[#C83220] text-white px-6 sm:px-12 py-10 space-y-12 transition-all">
              
              {/* Sub-tab selection bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/20 font-mono text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-white/70 uppercase mr-2">[ SECTIONS ]:</span>
                  {contactTabs.map((tab, idx) => (
                    <button
                      key={tab.id}
                      onClick={() => setContactSubTab(idx)}
                      className={`px-3 py-1 text-xs rounded transition-colors uppercase ${
                        contactSubTab === idx
                          ? 'bg-white text-dark-900 font-bold'
                          : 'bg-black/20 hover:bg-black/40 text-white/90'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <span className="text-[11px] opacity-75">ENCRYPTED TRANSMISSION</span>
              </div>

              {/* 01. Case Intake Form */}
              {contactSubTab === 0 && (
                <div className="space-y-8">
                  <div className="max-w-3xl space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/70 block">
                      CONFIDENTIAL CASE DISPATCH
                    </span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-normal">
                      Initiate Case Consultation
                    </h2>
                    <p className="font-sans text-base text-white/90 font-light">
                      Please submit the form below. Niyati Sharma will review your note and respond personally within 24–48 business hours.
                    </p>
                  </div>

                  <div className="max-w-3xl">
                    <ContactForm />
                  </div>
                </div>
              )}

              {/* 02. Direct Channels & Studio */}
              {contactSubTab === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                  <div className="p-6 bg-black/25 border border-white/15 rounded-lg space-y-6">
                    <span className="font-mono text-xs uppercase font-bold text-white/70 block">
                      [ DIRECT DISPATCH CHANNELS ]
                    </span>
                    <div className="space-y-4 font-mono text-xs">
                      <div>
                        <span className="text-white/60 block">EMAIL INQUIRIES:</span>
                        <a href={`mailto:${siteContent.practice.email}`} className="text-white text-sm hover:underline">
                          {siteContent.practice.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-white/60 block">TELEPHONE:</span>
                        <a href={`tel:${siteContent.practice.phone.replace(/\s+/g, '')}`} className="text-white text-sm hover:underline">
                          {siteContent.practice.phone}
                        </a>
                      </div>
                      <div>
                        <span className="text-white/60 block">OPERATING HOURS (IST):</span>
                        <p className="text-white text-xs whitespace-pre-line mt-0.5">
                          {siteContent.practice.officeHours}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-black/25 border border-white/15 rounded-lg space-y-6">
                    <span className="font-mono text-xs uppercase font-bold text-white/70 block">
                      [ STUDIO SPECIFICATIONS ]
                    </span>
                    <div className="space-y-3 font-sans text-sm text-white/90">
                      <p className="font-semibold text-white">Koregaon Park Clinical Studio</p>
                      <p className="text-xs font-mono text-white/70">18.5362° N, 73.8958° E • Pune, India</p>
                      <p className="text-xs text-white/80 font-light pt-2">
                        Designed with tranquil natural lighting and acoustic privacy for in-person psychotherapy sessions.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 03. Clinical FAQ */}
              {contactSubTab === 2 && (
                <div className="space-y-6 max-w-4xl">
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/70 block">
                      CLINICAL PROTOCOLS
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-normal">
                      Frequently Answered Inquiries
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {siteContent.contact.faq.map((item) => (
                      <div key={item.id} className="p-6 bg-black/25 border border-white/15 rounded-lg space-y-2">
                        <div className="flex items-center space-x-2 font-mono text-xs text-white/70">
                          <span className="font-bold text-white">[{item.id}]</span>
                          <span className="font-serif text-base text-white">{item.q}</span>
                        </div>
                        <p className="font-sans text-sm text-white/85 leading-relaxed font-light pt-1">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

      </div>

    </div>
  );
}
