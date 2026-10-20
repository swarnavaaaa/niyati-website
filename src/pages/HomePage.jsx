import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Video,
  Clock,
  Heart,
  MessageCircle,
  CheckCircle2,
  Instagram,
  Linkedin,
  Compass,
  Map,
  ChevronDown,
  Info,
  BadgeIndianRupee,
  Globe,
  HelpCircle,
  Sparkle
} from 'lucide-react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const { hero, landedHere, aboutSnapshot, therapyExperience, whatWeWorkOn, sessions, faqs } = siteContent.home;

  useEffect(() => {
    document.title = "Lost & Found Therapy — Therapy with Niyati Bagla";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Therapy that feels warm, human and at-home – for when things feel difficult. Online therapy for adults with Niyati Bagla, Counselling Psychologist & Psychotherapist.");
    }
  }, []);

  return (
    <div className="w-full space-y-16 sm:space-y-24 md:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pt-10 sm:pb-24">
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF3F0] via-[#FAF8F5] to-[#E8F2F7] -z-10" />
        <div className="absolute top-1/4 right-0 -mr-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#BDDBE7]/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 -ml-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#DF9C87]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            
            {/* Online Therapy Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D8E4DC] text-xs sm:text-sm text-[#527965] font-medium shadow-subtle mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-[#527965] shrink-0" />
              <span>{hero.badge}</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1A2421] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight">
              Therapy that feels <span className="font-serif italic font-normal text-[#527965]">warm, human</span> and at-home – for when things feel difficult.
            </h1>

            {/* Reassuring Subtitles */}
            <div className="space-y-3 font-sans text-sm sm:text-base md:text-lg text-[#46544E] font-normal leading-relaxed max-w-2xl mx-auto">
              <p>{hero.subtitles[0]}</p>
              <p className="text-xs sm:text-base text-[#5B6D64]">{hero.subtitles[1]}</p>
            </div>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={siteContent.practice.topmateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white text-xs sm:text-sm font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-all duration-300 min-h-[48px]"
              >
                <Calendar className="w-4 h-4 text-[#BDDBE7]" />
                <span>{hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-white hover:bg-[#F2F7F4] active:bg-[#E8EFEA] text-[#194B4E] border border-[#D8E4DC] text-xs sm:text-sm font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-all duration-300 min-h-[48px]"
              >
                <span>{hero.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 ml-0.5 opacity-70" />
              </Link>
            </div>

            {/* Gentle Reminder Card */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#D8E4DC] shadow-subtle max-w-2xl mx-auto text-left flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-full bg-[#E8EFEA] text-[#527965] flex items-center justify-center shrink-0 mt-0.5">
                <Heart className="w-4 h-4" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#46544E] leading-relaxed">
                <strong className="text-[#194B4E] font-medium">A little reminder:</strong> You can come as you are. You don’t need the right words, a perfect explanation, or everything figured out before you begin.
              </p>
            </div>

            {/* Trust Chips Bar */}
            <div className="pt-5 sm:pt-6 border-t border-[#E3ECE6]/80 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#5B6D64]">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#527965] shrink-0" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Video className="w-4 h-4 text-[#527965] shrink-0" />
                <span>Google Meet & Zoom</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Heart className="w-4 h-4 text-[#527965] shrink-0" />
                <span>Trauma-Informed & Relational</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. IF YOU’VE LANDED HERE */}
      <section id="landed-here" className="max-w-5xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 shadow-card space-y-8 sm:space-y-10">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
              {landedHere.tag}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A2421] leading-tight font-normal">
              Maybe things <span className="font-serif italic text-[#527965]">haven’t felt quite right</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-xs sm:text-sm text-[#46544E] leading-relaxed">
            <div className="space-y-4">
              <p>{landedHere.paragraphs[0]}</p>
              <p>{landedHere.paragraphs[1]}</p>
              <p>{landedHere.paragraphs[2]}</p>
            </div>
            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E3ECE6] text-[#1A2421] font-medium leading-relaxed">
                {landedHere.paragraphs[3]}
              </div>
              <p>{landedHere.paragraphs[4]}</p>
              <p>{landedHere.paragraphs[5]}</p>
            </div>
          </div>

          <div className="pt-2 text-xs sm:text-sm text-[#46544E] leading-relaxed max-w-3xl mx-auto text-center border-t border-[#E3ECE6]">
            <p className="pt-4">{landedHere.paragraphs[6]}</p>
          </div>

          {/* Reassurance Callout Card */}
          <div className="bg-[#FAF3F0] border border-[#ECCDC0] rounded-2xl p-5 sm:p-7 text-center max-w-xl mx-auto shadow-subtle">
            <p className="font-serif italic text-base sm:text-xl text-[#8A4834]">
              “{landedHere.closingReassurance}”
            </p>
          </div>

        </div>
      </section>

      {/* 3. A LITTLE ABOUT ME (Spotlight on Niyati) */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-start">
            
            {/* Left Col: Therapist Bio Card */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-subtle lg:sticky lg:top-28">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-gradient-to-tr from-[#194B4E] to-[#527965] text-[#FAF8F5] flex items-center justify-center shadow-subtle border-4 border-white">
                <span className="font-serif text-2xl sm:text-3xl font-medium tracking-wider">NB</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-medium">
                  {siteContent.practice.therapistName}
                </h3>
                <p className="font-sans text-xs text-[#527965] font-medium mt-1">
                  {siteContent.practice.title}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
                  {aboutSnapshot.credentials.map((cred, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-white border border-[#D8E4DC] text-[11px] text-[#46544E]"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>

              <p className="font-sans text-xs text-[#5B6D64] leading-relaxed pt-2 border-t border-[#E3ECE6]">
                {aboutSnapshot.intro}
              </p>

              {/* Social icons */}
              <div className="flex items-center justify-center space-x-3 pt-2">
                <a
                  href={`https://wa.me/${siteContent.practice.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#EBF7F0] hover:border-[#1EBE5D] flex items-center justify-center text-[#1EBE5D] transition-all shadow-subtle"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={siteContent.practice.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#FAF3F0] hover:border-[#C67D63] flex items-center justify-center text-[#C67D63] transition-all shadow-subtle"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteContent.practice.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#E8EFEA] hover:border-[#527965] flex items-center justify-center text-[#194B4E] transition-all shadow-subtle"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-2 text-left space-y-2 border-t border-[#E3ECE6] text-xs text-[#5B6D64]">
                <p className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#527965] shrink-0" />
                  <span>{siteContent.practice.mode}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#527965] shrink-0" />
                  <span>Duration: 50-60 mins per session</span>
                </p>
              </div>
            </div>

            {/* Right Col: Personal Philosophy & Words */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center space-x-1.5 text-xs text-[#527965] font-semibold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" />
                <span>{aboutSnapshot.tag}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421] leading-tight font-normal">
                {aboutSnapshot.headline}
              </h2>

              <div className="font-sans text-xs sm:text-sm md:text-base text-[#46544E] space-y-4 leading-relaxed font-normal">
                {aboutSnapshot.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={siteContent.practice.topmateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white text-xs font-medium tracking-wide rounded-full shadow-subtle transition-colors min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 text-[#BDDBE7]" />
                  <span>Book a session</span>
                </a>
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#E8EFEA] hover:bg-[#D8E4DC] active:bg-[#C2D7CB] text-[#194B4E] text-xs font-medium tracking-wide rounded-full transition-colors min-h-[44px]"
                >
                  <span>More about my background</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHAT THERAPY CAN BE LIKE (Unfolding the Map) */}
      <section id="therapy-experience" className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="bg-gradient-to-tr from-[#FAF8F5] via-white to-[#E8F2F7] border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 shadow-card space-y-8 sm:space-y-10">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E8EFEA] text-xs text-[#527965] font-medium">
              <Map className="w-3.5 h-3.5" />
              <span>{therapyExperience.tag}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A2421] leading-tight font-normal">
              {therapyExperience.subheading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            <div className="bg-white/90 border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 space-y-4 shadow-subtle">
              <div className="w-10 h-10 rounded-full bg-[#FAF3F0] text-[#C67D63] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
                Unfolding the map together
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#46544E] leading-relaxed">
                {therapyExperience.paragraphs[0]}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#46544E] leading-relaxed">
                {therapyExperience.paragraphs[1]}
              </p>
            </div>

            <div className="bg-white/90 border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 space-y-4 shadow-subtle flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#194B4E] flex items-center justify-center shrink-0">
                  <Map className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
                  Discovering new pathways
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#46544E] leading-relaxed">
                  {therapyExperience.paragraphs[2]}
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#46544E] leading-relaxed">
                  {therapyExperience.paragraphs[3]}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3ECE6] text-xs text-[#527965] font-medium">
                <span>Relational, Trauma-Informed, Collaborative</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. WHAT WE CAN WORK ON (22 topics) */}
      <section id="what-we-work-on" className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24 space-y-8 sm:space-y-10">
        
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
            {whatWeWorkOn.tag}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A2421] leading-tight font-normal">
            {whatWeWorkOn.headline}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5B6D64] leading-relaxed">
            {whatWeWorkOn.subheading}
          </p>
        </div>

        {/* 22 Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {whatWeWorkOn.topics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E3ECE6] hover:border-[#527965]/40 rounded-2xl p-4 sm:p-5 flex items-center space-x-3 shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-6 h-6 rounded-full bg-[#EBF7F0] text-[#527965] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="font-sans text-xs sm:text-sm font-medium text-[#1A2421]">
                {topic}
              </span>
            </div>
          ))}
        </div>

        {/* Non-exhaustive closing note */}
        <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-4 sm:p-6 text-center max-w-2xl mx-auto shadow-subtle">
          <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
            <Info className="w-4 h-4 inline-block mr-1.5 text-[#527965] -mt-0.5" />
            {whatWeWorkOn.closingNote}
          </p>
        </div>

      </section>

      {/* 6. ABOUT THE SESSIONS (Duration, Fees, Sliding scale, Online Mode) */}
      <section id="sessions" className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-card space-y-8 sm:space-y-10">
          
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
              {sessions.tag}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A2421] font-normal">
              Session Format & Fees
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#5B6D64]">
              Clear, transparent details so you know exactly what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Card 1: Duration & Mode */}
            <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 space-y-4 shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#194B4E] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#194B4E]" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#1A2421]">
                  Duration & Mode
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-[#46544E] leading-relaxed">
                  <p className="font-medium text-[#194B4E]">{sessions.duration}</p>
                  <p>{sessions.mode}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E3ECE6] text-xs text-[#527965]">
                <span>Weekly or bi-weekly cadence</span>
              </div>
            </div>

            {/* Card 2: Session Fees */}
            <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 space-y-4 shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF3F0] text-[#C67D63] flex items-center justify-center shrink-0">
                  <BadgeIndianRupee className="w-5 h-5 text-[#C67D63]" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#1A2421]">
                  Session Investment
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-[#46544E] leading-relaxed">
                  <p className="font-medium text-[#1A2421]">{sessions.feesIndia}</p>
                  <p className="text-[#5B6D64]">{sessions.feesInternational}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E3ECE6] text-xs text-[#527965]">
                <span>Paid securely online prior to session</span>
              </div>
            </div>

            {/* Card 3: Sliding Scale */}
            <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 space-y-4 shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EBF7F0] text-[#527965] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-[#527965]" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#1A2421]">
                  Sliding Scale
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#46544E] leading-relaxed">
                  {sessions.slidingScale}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E3ECE6] text-xs text-[#527965]">
                <span>Mention in enquiry form if needed</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. BEFORE WE BEGIN (FAQs accordion) */}
      <section id="faqs" className="max-w-4xl mx-auto px-4 sm:px-8 scroll-mt-24 space-y-6 sm:space-y-8">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
            {faqs.tag}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1A2421] font-normal">
            {faqs.heading}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5B6D64]">
            Helpful answers to common questions about starting therapy.
          </p>
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
