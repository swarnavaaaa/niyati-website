import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import {
  Compass,
  Heart,
  Sparkles,
  Smile,
  CheckCircle2,
  GraduationCap,
  Award,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MapPin,
  Check,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF3F0] via-[#FAF8F5] to-[#E8F2F7] -z-10" />
        <div className="absolute top-1/3 right-0 -mr-24 w-96 h-96 rounded-full bg-[#BDDBE7]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D8E4DC] text-xs text-[#527965] font-medium shadow-subtle mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-[#527965]" />
              <span>About Niyati Bagla • Clinical Psychotherapist</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1A2421] font-normal leading-[1.18] tracking-tight">
              Hi, I'm <span className="font-serif italic font-normal text-[#527965]">Niyati</span>.
            </h1>

            <p className="font-sans text-base sm:text-lg md:text-xl text-[#46544E] font-normal leading-relaxed max-w-2xl mx-auto">
              {siteContent.about.hero.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#194B4E] hover:bg-[#133A3C] text-white text-xs font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-all min-h-[46px]"
              >
                <Calendar className="w-4 h-4 text-[#BDDBE7]" />
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MY STORY / JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-[#E3ECE6] rounded-3xl p-6 sm:p-10 md:p-14 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-8 text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#194B4E] to-[#527965] text-white flex items-center justify-center font-serif text-3xl shadow-subtle">
                  NB
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#1A2421]">Niyati Bagla</h3>
                  <p className="text-xs text-[#527965] font-medium mt-1">LMFT, Master’s in Psychology</p>
                  <p className="text-[11px] text-[#697A72] mt-0.5">Licensed Marriage & Family Therapist</p>
                </div>
                <div className="pt-4 border-t border-[#E3ECE6] text-xs text-[#5B6D64] space-y-1 text-left">
                  <p className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-[#527965] shrink-0" />
                    <span>Koregaon Park Studio, Pune</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#527965] shrink-0" />
                    <span>Licensed Clinical Practice</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
                My Story
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A2421] leading-snug">
                Walking alongside you with <span className="font-serif italic font-normal text-[#527965]">clarity & warmth</span>
              </h2>
              <div className="font-sans text-sm sm:text-base text-[#46544E] space-y-4 leading-relaxed font-normal">
                {siteContent.about.story.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MY THERAPEUTIC APPROACH (The 4 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
            Therapeutic Modalities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A2421]">
            How We Will <span className="font-serif italic font-normal text-[#527965]">Work Together</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
            Therapy is conversational, unhurried, and collaborative. We sit together to explore your experiences with genuine kindness and evidence-backed tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="bg-white border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 space-y-3.5 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#E8EFEA] text-[#527965] flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#527965]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
              Looking at the Full Picture
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
              We look at both your past foundations and current daily patterns to understand why you react the way you do, and what you would like to gently shift.
            </p>
          </div>

          <div className="bg-white border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 space-y-3.5 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#FAF3F0] text-[#C67D63] flex items-center justify-center">
              <Heart className="w-5 h-5 text-[#C67D63]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
              Calming Your Mind & Body
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
              Stress lives in the nervous system. We use simple, somatic and mindfulness grounding practices to ease tension, slow down a racing heart, and feel centered.
            </p>
          </div>

          <div className="bg-white border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 space-y-3.5 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#194B4E] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#194B4E]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
              Focusing on What Matters to You
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
              Helping you make authentic life and relationship decisions grounded in your core personal values, rather than what others expect of you.
            </p>
          </div>

          <div className="bg-white border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 space-y-3.5 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#F4F7F5] text-[#436554] flex items-center justify-center">
              <Smile className="w-5 h-5 text-[#436554]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
              Being Kind to Yourself
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
              Learning how to quiet the harsh inner critic that insists you are never doing enough, and nurturing real, sustainable self-compassion.
            </p>
          </div>

        </div>
      </section>

      {/* 4. WHO I WORK WITH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-3xl p-6 sm:p-10 md:p-14 shadow-subtle space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
              Client Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421]">
              Who I Typically <span className="font-serif italic font-normal text-[#527965]">Work With</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
              I specialize in helping adults and couples navigating these common challenges:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {siteContent.about.whoIWorkWith.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E3ECE6] rounded-2xl p-5 sm:p-6 flex items-start space-x-3.5 shadow-subtle"
              >
                <div className="w-5 h-5 rounded-full bg-[#EBF7F0] text-[#527965] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#46544E] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRAINING & CREDENTIALS TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-[#E3ECE6] rounded-3xl p-6 sm:p-10 md:p-12 shadow-card space-y-8">
          <div className="space-y-2">
            <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
              Qualifications
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A2421]">
              Education & Clinical Licensure
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#5B6D64]">
              Rigorous academic grounding combined with continuous professional clinical supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {siteContent.about.training.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-6 space-y-2"
              >
                <span className="text-xs text-[#527965] font-medium font-sans">
                  {item.year}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#1A2421]">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#5B6D64]">
                  {item.place}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
