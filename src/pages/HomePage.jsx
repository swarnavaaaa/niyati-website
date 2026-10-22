import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  Clock,
  Heart,
  MessageCircle,
  Instagram,
  Linkedin,
  Map as MapIcon,
  ChevronDown,
  Info,
  BadgeIndianRupee,
  Video
} from 'lucide-react';

export default function HomePage() {
  // All FAQs closed by default as requested
  const [openFaq, setOpenFaq] = useState(-1);
  const { hero, landedHere, aboutSnapshot, therapyExperience, whatWeWorkOn, sessions, faqs } = siteContent.home;

  useEffect(() => {
    document.title = "Lost & Found Therapy — Therapy with Niyati Bagla";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Therapy that feels human. Your safe, judgement-free corner for support, growth and healing. Online therapy for adults with Niyati Bagla, Counselling Psychologist & Psychotherapist.");
    }
  }, []);

  return (
    <div className="w-full space-y-16 sm:space-y-24 md:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pt-10 sm:pb-20">
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF3F0] via-[#FAF8F5] to-[#E8F2F7] -z-10" />
        <div className="absolute top-1/4 right-0 -mr-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#BDDBE7]/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 -ml-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#DF9C87]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-14">
          
          {/* Top Hero Text */}
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D8E4DC] text-xs sm:text-sm text-[#527965] font-medium shadow-subtle mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-[#527965] shrink-0" />
              <span>{hero.badge}</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#1A2421] font-normal leading-[1.15] tracking-tight">
              Therapy that feels <span className="font-serif italic font-normal text-[#527965]">human.</span>
            </h1>

            {/* Subtext */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#46544E] font-normal leading-relaxed max-w-2xl mx-auto">
              {hero.subtext}
            </p>

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
          </div>

          {/* Visual Showcase: Therapy Room Image + "A Little Reminder" Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto pt-4">
            
            {/* Therapy Room Image & Subtext */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E3ECE6] shadow-card bg-white">
                <img
                  src={hero.image}
                  alt="A quiet, warm and welcoming therapy room corner"
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed italic text-center px-4">
                {hero.imageSubtext}
              </p>
            </div>

            {/* "A Little Reminder" Design (following screenshot design from previous document) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#F6EFEA]/80 border border-[#EBDED4] shadow-subtle flex flex-col items-center justify-center text-center overflow-hidden">
                
                {/* Soft decorative background aura with winding dotted path */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                  viewBox="0 0 360 320"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 30 260 C 90 280, 120 180, 180 160 C 240 140, 270 60, 330 40"
                    stroke="#C67D63"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle cx="30" cy="260" r="4" fill="#C67D63" />
                  <path d="M 326 35 L 334 40 L 326 45" fill="none" stroke="#C67D63" strokeWidth="1.5" />
                </svg>

                {/* Floating Reminder Inner Card */}
                <div className="relative z-10 w-full bg-white/95 backdrop-blur-sm border border-[#EADFD6] rounded-2xl p-6 sm:p-8 shadow-card space-y-4">
                  <span className="text-[10px] sm:text-xs text-[#8A4834] font-semibold uppercase tracking-[0.2em] block">
                    {hero.reminder.tag}
                  </span>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A2421] leading-tight font-normal">
                    {hero.reminder.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed max-w-xs mx-auto">
                    {hero.reminder.subtext}
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. IF YOU’VE LANDED HERE */}
      <section id="landed-here" className="max-w-6xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-card space-y-8 sm:space-y-10">
          
          {/* Left-aligned Heading per instructions */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider block">
              {landedHere.tag}
            </span>
            {/* Period matches the exact colour of the last word */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A2421] leading-tight font-normal">
              Maybe things don’t feel <span className="font-serif italic text-[#527965]">quite right.</span>
            </h2>
          </div>

          {/* Clean laptop and mobile layout with image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Narrative text (7 cols on desktop) */}
            <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-[#46544E] leading-relaxed">
              <p>{landedHere.paragraphs[0]}</p>
              <p>{landedHere.paragraphs[1]}</p>
              <p>{landedHere.paragraphs[2]}</p>

              {/* In the box - Welcome callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border-l-4 border-[#194B4E] border-y border-r border-[#E3ECE6] text-[#1A2421] font-medium leading-relaxed shadow-subtle my-2">
                {landedHere.calloutBox}
              </div>

              <p>{landedHere.subsequentParagraphs[0]}</p>
              <p>{landedHere.subsequentParagraphs[1]}</p>
            </div>

            {/* Added image in this section (5 cols on desktop) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden border border-[#E3ECE6] shadow-card bg-[#FAF8F5]">
                <img
                  src={landedHere.image}
                  alt="A tranquil, peaceful space to pause"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

          </div>

          {/* Last box */}
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
            
            {/* Left Col: Therapist Bio Card (Photo bigger, credentials ordered cleanly, no duplicate title, no online/duration info here) */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-subtle lg:sticky lg:top-28">
              
              {/* Photo circle - larger per request */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-tr from-[#194B4E] to-[#527965] text-[#FAF8F5] flex items-center justify-center shadow-card border-4 border-white">
                <span className="font-serif text-3xl sm:text-4xl font-medium tracking-wider">NB</span>
              </div>

              {/* Name & Credentials: Counselling psychologist first, MSc later, only once */}
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-medium">
                  {siteContent.practice.therapistName}
                </h3>
                <div className="space-y-1">
                  <p className="font-sans text-xs sm:text-sm text-[#527965] font-semibold">
                    Counselling Psychologist & Psychotherapist
                  </p>
                  <p className="font-sans text-xs text-[#697A72]">
                    MSc in Clinical Psychology
                  </p>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center justify-center space-x-3 pt-2 border-t border-[#E3ECE6]">
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
            </div>

            {/* Right Col: Personal Philosophy & Words */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center space-x-1.5 text-xs text-[#527965] font-semibold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" />
                <span>{aboutSnapshot.tag}</span>
              </div>

              {/* Heading consistent with About page */}
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421] leading-tight font-normal">
                {aboutSnapshot.headline}
              </h2>

              {/* Intro text - bigger and bold per request */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E3ECE6]">
                <p className="font-sans text-sm sm:text-base font-medium text-[#1A2421] leading-relaxed">
                  {aboutSnapshot.intro}
                </p>
              </div>

              {/* Narrative paragraphs with crisp revised text and bold accents */}
              <div className="font-sans text-xs sm:text-sm text-[#46544E] space-y-4 leading-relaxed font-normal">
                <p>{aboutSnapshot.paragraphs[0]}</p>
                <p>{aboutSnapshot.paragraphs[1]}</p>
                <p>{aboutSnapshot.paragraphs[2]}</p>
                <p>{aboutSnapshot.paragraphs[3]}</p>
                
                {/* Paragraph 5 with bold phrase */}
                <p>
                  I see therapy as a partnership, rather than a relationship between an “expert” and a client. It’s two humans coming together to explore your story, make sense of your experiences, and help you reconnect with and rediscover yourself. <strong className="font-semibold text-[#1A2421]">In our work together, we might look at patterns that keep showing up, things you find hard to talk about, or ways you’ve learnt to cope.</strong> Therapy won’t always be easy, and I won’t have all the answers. But I hope we can stay curious together about what’s going on, what you need, and what might help.
                </p>

                {/* Paragraph 6 */}
                <p className="p-3.5 rounded-xl bg-[#F6F8F7] border border-[#E1ECE6] font-medium text-[#1A2421]">
                  Therapy is a space where you feel seen, heard, and supported as you work towards building a life that feels more true to YOU.
                </p>

                <p>{aboutSnapshot.paragraphs[6]}</p>
              </div>

              {/* Only Book a session button kept, background link button removed */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={siteContent.practice.topmateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white text-xs font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-colors min-h-[46px]"
                >
                  <Calendar className="w-4 h-4 text-[#BDDBE7]" />
                  <span>Book a session</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHAT THERAPY CAN BE LIKE (The Map Metaphor) */}
      <section id="therapy-experience" className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="bg-gradient-to-tr from-[#FAF8F5] via-white to-[#E8F2F7] border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 shadow-card space-y-8 sm:space-y-10">
          
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E8EFEA] text-xs text-[#527965] font-medium">
              <MapIcon className="w-3.5 h-3.5" />
              <span>{therapyExperience.tag}</span>
            </div>
            {/* Map analogy heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A2421] leading-tight font-normal">
              {therapyExperience.headline}
            </h2>
          </div>

          {/* Image of aesthetic map before the text begins */}
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#E3ECE6] shadow-subtle bg-white">
            <img
              src={therapyExperience.image}
              alt="An aesthetic map illustrating the therapeutic journey"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Single clean text format (boxes and subheadings removed per request) */}
          <div className="max-w-3xl mx-auto space-y-4 text-xs sm:text-sm text-[#46544E] leading-relaxed font-normal">
            {therapyExperience.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHAT WE CAN WORK ON (Updated heading and bullets) */}
      <section id="what-we-can-work-on" className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24 space-y-8 sm:space-y-10">
        
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
            {whatWeWorkOn.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A2421] leading-tight font-normal">
            {whatWeWorkOn.headline}
          </h2>
          <div className="inline-block p-3 px-5 rounded-2xl bg-[#FAF8F5] border border-[#E3ECE6]">
            <p className="font-serif italic text-base sm:text-lg text-[#5B6D64]">
              {whatWeWorkOn.subheading}
            </p>
          </div>
        </div>

        {/* 22 Topics Grid - Soft bullet symbol instead of tick marks per request */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {whatWeWorkOn.topics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E3ECE6] hover:border-[#527965]/40 rounded-2xl p-4 sm:p-5 flex items-center space-x-3.5 shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#527965] shrink-0" />
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

      {/* 6. ABOUT THE WORK (Duration & Mode Box + Fees Box + Sliding scale subtext) */}
      <section id="about-the-work" className="max-w-5xl mx-auto px-4 sm:px-8 scroll-mt-24">
        {/* Also anchor for old #sessions link */}
        <div id="sessions" className="sr-only" />
        
        <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-card space-y-8 sm:space-y-10">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
              {sessions.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421] font-normal">
              {sessions.sectionHeading}
            </h2>
          </div>

          {/* Two distinct boxes: Duration and Mode & Fees (consistent styling) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            
            {/* Box 1: Duration and Mode */}
            <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 space-y-4 shadow-subtle flex flex-col justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#E8F2F7] text-[#194B4E] flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-[#194B4E]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-medium">
                {sessions.duration}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5B6D64]">
                {sessions.durationSubtext}
              </p>
              <div className="pt-3 border-t border-[#E3ECE6] text-xs text-[#46544E] flex items-center justify-center space-x-1.5">
                <Video className="w-3.5 h-3.5 text-[#527965]" />
                <span>Online via Google Meet or Zoom</span>
              </div>
            </div>

            {/* Box 2: Fees (consistent font colour and size for Indian and international fees) */}
            <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 space-y-4 shadow-subtle flex flex-col justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#FAF3F0] text-[#C67D63] flex items-center justify-center mx-auto">
                <BadgeIndianRupee className="w-6 h-6 text-[#C67D63]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-medium">
                {sessions.feesDisplay}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5B6D64]">
                {sessions.feesSubtext}
              </p>
              <div className="pt-3 border-t border-[#E3ECE6] text-xs text-[#527965]">
                <span>Standard individual session</span>
              </div>
            </div>

          </div>

          {/* Sliding scale mentioned as subtext in the same section */}
          <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-5 sm:p-6 text-center max-w-3xl mx-auto shadow-subtle">
            <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
              {sessions.slidingScale}
            </p>
          </div>

        </div>
      </section>

      {/* 7. BEFORE WE BEGIN (FAQs accordion - all closed by default) */}
      <section id="faqs" className="max-w-4xl mx-auto px-4 sm:px-8 scroll-mt-24 space-y-6 sm:space-y-8">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
            {faqs.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421] font-normal">
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
