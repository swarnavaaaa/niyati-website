import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import {
  Compass,
  Heart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Video,
  CheckCircle2,
  Map,
  MessageCircle,
  Instagram,
  Linkedin
} from 'lucide-react';

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <div className="w-full space-y-16 sm:space-y-24 md:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pt-10 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF3F0] via-[#FAF8F5] to-[#E8F2F7] -z-10" />
        <div className="absolute top-1/3 right-0 -mr-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#BDDBE7]/25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D8E4DC] text-xs sm:text-sm text-[#527965] font-medium shadow-subtle mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-[#527965] shrink-0" />
              <span>{about.hero.tag}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1A2421] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight">
              {about.hero.headline}
            </h1>

            <p className="font-sans text-sm sm:text-lg md:text-xl text-[#46544E] font-normal leading-relaxed max-w-2xl mx-auto">
              {about.hero.intro}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={siteContent.practice.topmateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white text-xs sm:text-sm font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-all min-h-[48px]"
              >
                <Calendar className="w-4 h-4 text-[#BDDBE7]" />
                <span>Book a session</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-white hover:bg-[#F2F7F4] active:bg-[#E8EFEA] text-[#194B4E] border border-[#D8E4DC] text-xs sm:text-sm font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-all min-h-[48px]"
              >
                <span>Reach out first</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MY PHILOSOPHY & STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-start">
            
            {/* Bio Card */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-subtle">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-gradient-to-tr from-[#194B4E] to-[#527965] text-white flex items-center justify-center font-serif text-2xl sm:text-3xl shadow-subtle border-4 border-white">
                  NB
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#1A2421]">{siteContent.practice.therapistName}</h3>
                  <p className="text-xs text-[#527965] font-medium mt-1">{siteContent.practice.title}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                  {about.hero.credentials.map((cred, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white border border-[#D8E4DC] text-xs text-[#46544E]"
                    >
                      {cred}
                    </span>
                  ))}
                </div>

                {/* Social media connections */}
                <div className="flex items-center justify-center space-x-3 pt-3 border-t border-[#E3ECE6]">
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

                <div className="pt-3 border-t border-[#E3ECE6] text-xs text-[#5B6D64] space-y-2 text-left">
                  <p className="flex items-center space-x-2">
                    <Video className="w-3.5 h-3.5 text-[#527965] shrink-0" />
                    <span>{siteContent.practice.mode}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#527965] shrink-0" />
                    <span>Confidential, online clinical practice</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Story */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center space-x-1.5 text-xs text-[#527965] font-semibold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" />
                <span>My Approach</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A2421] leading-snug font-normal">
                Walking alongside you with <span className="font-serif italic text-[#527965]">clarity, safety & warmth</span>
              </h2>
              <div className="font-sans text-xs sm:text-sm md:text-base text-[#46544E] space-y-4 leading-relaxed font-normal">
                {about.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE MAP METAPHOR (WHAT THERAPY CAN BE LIKE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-tr from-[#FAF3F0] via-[#FAF8F5] to-[#E8F2F7] border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 shadow-card space-y-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#D8E4DC] text-xs text-[#527965] font-medium shadow-subtle">
              <Map className="w-3.5 h-3.5" />
              <span>{about.mapMetaphor.tag}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A2421] font-normal">
              {about.mapMetaphor.subheading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white/95 rounded-2xl p-6 sm:p-8 space-y-4 border border-[#E3ECE6] shadow-subtle">
              <div className="w-10 h-10 rounded-full bg-[#E8EFEA] text-[#527965] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
                Unfolding the map together
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#46544E] leading-relaxed">
                {about.mapMetaphor.paragraphs[0]}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#46544E] leading-relaxed">
                {about.mapMetaphor.paragraphs[1]}
              </p>
            </div>

            <div className="bg-white/95 rounded-2xl p-6 sm:p-8 space-y-4 border border-[#E3ECE6] shadow-subtle">
              <div className="w-10 h-10 rounded-full bg-[#FAF3F0] text-[#C67D63] flex items-center justify-center shrink-0">
                <Map className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
                Reading the terrain
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#46544E] leading-relaxed">
                {about.mapMetaphor.paragraphs[2]}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#46544E] leading-relaxed">
                {about.mapMetaphor.paragraphs[3]}
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
