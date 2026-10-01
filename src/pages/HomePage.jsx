import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import ServiceCard from '../components/ServiceCard';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Video,
  Clock,
  Heart,
  MessageCircle,
  GraduationCap,
  Award,
  CheckCircle,
  CheckCircle2,
  Instagram,
  Linkedin,
  Youtube,
  Compass,
  Smile,
  Coffee,
} from 'lucide-react';

export default function HomePage() {
  const [credentialTab, setCredentialTab] = useState('credentials'); // 'credentials' | 'experience'

  return (
    <div className="w-full space-y-12 sm:space-y-20 md:space-y-24">
      
      {/* 1. HERO SECTION (Humraahi & Being Brave aesthetic) */}
      <section className="relative overflow-hidden pt-2 pb-8 sm:pt-8 sm:pb-20">
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF3F0] via-[#FAF8F5] to-[#E8F2F7] -z-10" />
        <div className="absolute top-1/4 right-0 -mr-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#BDDBE7]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 -ml-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#DF9C87]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-8">
            
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/90 border border-[#D8E4DC] text-[11px] sm:text-xs text-[#527965] font-medium shadow-subtle mx-auto max-w-full text-left sm:text-center">
              <Sparkles className="w-3.5 h-3.5 text-[#527965] shrink-0" />
              <span className="truncate">10+ Years Experience • Koregaon Park & Online</span>
            </div>

            {/* Editorial Headline with italic accent */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1A2421] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight">
              Healing <span className="font-serif italic font-normal text-[#527965]">Hearts</span>, Nurturing Minds
            </h1>

            {/* Reassuring Subtitle */}
            <p className="font-sans text-sm sm:text-lg md:text-xl text-[#46544E] font-normal leading-relaxed max-w-2xl mx-auto">
              {siteContent.home.hero.subtitle}
            </p>

            {/* Dual CTA Buttons (Stack on mobile, row on tablet+) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white text-xs font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-all duration-300 min-h-[48px]"
              >
                <Calendar className="w-4 h-4 text-[#BDDBE7]" />
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-white hover:bg-[#F2F7F4] active:bg-[#E8EFEA] text-[#194B4E] border border-[#D8E4DC] text-xs font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-all duration-300 min-h-[48px]"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Chips Bar */}
            <div className="pt-5 sm:pt-6 border-t border-[#E3ECE6]/80 flex flex-wrap items-center justify-center gap-3 sm:gap-8 text-xs text-[#5B6D64]">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#527965] shrink-0" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-[#527965] shrink-0" />
                <span>Koregaon Park Studio</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Video className="w-4 h-4 text-[#527965] shrink-0" />
                <span>Pan-India Telehealth</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THERAPIST WELCOME NOTE & PROFILE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-14 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 md:gap-12 items-center">
            
            {/* Left Col: Therapist Bio Card */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-5 sm:p-8 text-center space-y-4 shadow-subtle">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-tr from-[#194B4E] to-[#527965] text-[#FAF8F5] flex items-center justify-center shadow-subtle border-4 border-white">
                <span className="font-serif text-2xl sm:text-3xl font-medium tracking-wider">NB</span>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421] font-medium">
                  {siteContent.practice.therapistName}
                </h3>
                <p className="font-sans text-xs text-[#527965] font-medium mt-1">
                  Psychotherapist & Counselor
                </p>
                <p className="font-sans text-[11px] text-[#697A72] mt-0.5">
                  {siteContent.practice.credentials}
                </p>
              </div>

              {/* Social icons (44px touch targets) */}
              <div className="flex items-center justify-center space-x-3 pt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#E8EFEA] hover:border-[#527965] flex items-center justify-center text-[#194B4E] transition-all shadow-subtle"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#E8EFEA] hover:border-[#527965] flex items-center justify-center text-[#194B4E] transition-all shadow-subtle"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-full border border-[#D8E4DC] bg-white hover:bg-[#E8EFEA] hover:border-[#527965] flex items-center justify-center text-[#194B4E] transition-all shadow-subtle"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              <div className="text-xs text-left space-y-2 pt-4 border-t border-[#E3ECE6] text-[#5B6D64]">
                <p className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#527965] shrink-0"></span>
                  <span>In-person in Koregaon Park, Pune</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#527965] shrink-0"></span>
                  <span>Secure video sessions nationwide</span>
                </p>
              </div>
            </div>

            {/* Right Col: Personal Welcome Letter */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center space-x-1.5 text-xs text-[#527965] font-medium uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" />
                <span>A Warm Welcome</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A2421] leading-tight">
                A warm note from me to <span className="font-serif italic font-normal text-[#527965]">you</span>
              </h2>

              <div className="font-sans text-sm sm:text-base text-[#46544E] space-y-3 sm:space-y-3.5 leading-relaxed font-normal">
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
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#E8EFEA] hover:bg-[#D8E4DC] active:bg-[#C2D7CB] text-[#194B4E] text-xs font-medium tracking-wide rounded-full transition-colors min-h-[44px]"
                >
                  <span>Learn About My Approach</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white text-xs font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-colors min-h-[44px]"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTRO / PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#F2F7F4] border border-[#D8E4DC] rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 text-center max-w-4xl mx-auto space-y-3.5 sm:space-y-4">
          <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
            Our Philosophy
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A2421] leading-snug">
            {siteContent.home.intro.heading}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#46544E] leading-relaxed max-w-2xl mx-auto">
            {siteContent.home.intro.p1}
          </p>
          <p className="font-sans text-sm sm:text-base text-[#46544E] leading-relaxed max-w-2xl mx-auto">
            {siteContent.home.intro.p2}
          </p>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-20 space-y-8 sm:space-y-10">
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E8EFEA] text-xs text-[#527965] font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>How We Can Work Together</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A2421] leading-tight">
            Thoughtful Support for <span className="font-serif italic font-normal text-[#527965]">Every Stage</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
            Tailored psychotherapy designed to help you untangle stress, rebuild confidence, and foster meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {siteContent.home.services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              code={service.code}
              title={service.title}
              desc={service.desc}
              points={service.points}
              index={idx}
            />
          ))}
        </div>
      </section>

      {/* 5. MODES OF CARE (Humraahi Signature Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-tr from-[#FAF3F0] via-white to-[#E8F2F7] border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-14 shadow-card space-y-6 sm:space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
              Modes of Therapy
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A2421]">
              Choose the care that's <span className="font-serif italic font-normal text-[#527965]">best for you</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
              We know that beginning therapy can be both a hopeful and vulnerable step. Whether you prefer meeting face-to-face or connecting from the comfort of your home, choose the setting where you feel safest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Mode 1: In-Person */}
            <div className="bg-white border border-[#E3ECE6] rounded-2xl p-5 sm:p-8 space-y-4 shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF3F0] text-[#C67D63] flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5 text-[#C67D63]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
                  In-Person Therapy Sessions
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
                  If you find comfort in face-to-face connection, you are warmly invited to our quiet, thoughtfully designed studio in Koregaon Park, Pune. Settle in over a warm cup of tea in a grounded physical space that supports deep, unhurried emotional reflection.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3ECE6] flex items-center justify-between text-xs text-[#527965] font-medium min-h-[44px]">
                <span>Koregaon Park, Pune</span>
                <Link to="/contact" className="hover:underline flex items-center py-2">
                  Book In-Person <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Mode 2: Online Telehealth */}
            <div className="bg-white border border-[#E3ECE6] rounded-2xl p-5 sm:p-8 space-y-4 shadow-subtle flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F2F7] text-[#194B4E] flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-[#194B4E]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
                  Secure Online Video Sessions
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
                  Connect from the privacy and comfort of your own home anywhere in India or internationally. Video therapy is conducted via a secure, HIPAA-compliant platform, giving you flexibility without compromising confidentiality or connection.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3ECE6] flex items-center justify-between text-xs text-[#194B4E] font-medium min-h-[44px]">
                <span>Across India & Worldwide</span>
                <Link to="/contact" className="hover:underline flex items-center py-2">
                  Book Online <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. THE THERAPY EXPERIENCE / HOW SESSIONS FEEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
            Session Culture
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A2421]">
            What Working Together <span className="font-serif italic font-normal text-[#527965]">Feels Like</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
            Therapy is not an exam, nor is it clinical interrogation. Here is what you can expect each week:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteContent.home.experience.map((item, idx) => (
            <div
              key={item.num}
              className="bg-white border border-[#E3ECE6] rounded-2xl p-5 sm:p-8 space-y-2.5 sm:space-y-3 shadow-subtle"
            >
              <span className="font-serif text-2xl text-[#527965] font-semibold block">
                {item.num}
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-[#1A2421]">
                {item.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CREDENTIALS & WORK EXPERIENCE TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-12 shadow-card space-y-6 sm:space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-[#E3ECE6]">
            <div>
              <span className="text-xs text-[#527965] font-semibold uppercase tracking-wider">
                Clinical Background
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A2421] mt-1">
                Training & Experience
              </h2>
            </div>

            {/* Toggle Tabs (Responsive grid on mobile, inline on desktop) */}
            <div className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex p-1 bg-[#F2F7F4] border border-[#D8E4DC] rounded-full">
              <button
                type="button"
                onClick={() => setCredentialTab('credentials')}
                className={`py-2 px-3 sm:px-4 rounded-full text-xs font-medium transition-all text-center min-h-[40px] flex items-center justify-center ${
                  credentialTab === 'credentials'
                    ? 'bg-[#194B4E] text-white shadow-subtle'
                    : 'text-[#46544E] hover:text-[#194B4E]'
                }`}
              >
                Education
              </button>
              <button
                type="button"
                onClick={() => setCredentialTab('experience')}
                className={`py-2 px-3 sm:px-4 rounded-full text-xs font-medium transition-all text-center min-h-[40px] flex items-center justify-center ${
                  credentialTab === 'experience'
                    ? 'bg-[#194B4E] text-white shadow-subtle'
                    : 'text-[#46544E] hover:text-[#194B4E]'
                }`}
              >
                Work History
              </button>
            </div>
          </div>

          {/* TAB 1: Credentials */}
          {credentialTab === 'credentials' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-fadeIn">
              
              <div className="p-4 sm:p-6 bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#E8EFEA] text-[#527965] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base sm:text-xl text-[#1A2421]">Master of Arts in Clinical Psychology</h3>
                <p className="font-sans text-xs text-[#527965] font-medium">SNDT Women's University, Mumbai (2013 – 2015)</p>
                <p className="font-sans text-xs text-[#5B6D64] leading-relaxed pt-1">
                  Specialized clinical training in adult psychotherapy, cognitive modalities, and ethical counseling protocols.
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#E8EFEA] text-[#527965] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base sm:text-xl text-[#1A2421]">Licensed Marriage & Family Therapist (LMFT)</h3>
                <p className="font-sans text-xs text-[#527965] font-medium">Licensed Clinical Practice (2015 – Present)</p>
                <p className="font-sans text-xs text-[#5B6D64] leading-relaxed pt-1">
                  Certified for independent psychotherapy with individuals, couples, and systemic relational dynamics.
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#E8EFEA] text-[#527965] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base sm:text-xl text-[#1A2421]">Bachelor of Arts in Psychology (Honors)</h3>
                <p className="font-sans text-xs text-[#527965] font-medium">Fergusson College, Pune (2010 – 2013)</p>
                <p className="font-sans text-xs text-[#5B6D64] leading-relaxed pt-1">
                  Strong foundation in behavioral psychology, personality theory, and psychometric principles.
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#E8EFEA] text-[#527965] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base sm:text-xl text-[#1A2421]">Advanced Professional Certifications</h3>
                <p className="font-sans text-xs text-[#527965] font-medium">Ongoing Continuing Clinical Education</p>
                <p className="font-sans text-xs text-[#5B6D64] leading-relaxed pt-1">
                  Trained in Acceptance & Commitment Therapy (ACT), Somatic grounding, and Emotion-Focused Couples Therapy.
                </p>
              </div>

            </div>
          )}

          {/* TAB 2: Work Experience */}
          {credentialTab === 'experience' && (
            <div className="space-y-4 divide-y divide-[#E3ECE6] animate-fadeIn">
              
              <div className="pt-4 first:pt-0 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-serif text-base sm:text-lg text-[#1A2421]">
                    Private Psychotherapy Practice — Founder & Lead Therapist
                  </h3>
                  <span className="text-xs text-[#527965] font-medium">2015 – Present</span>
                </div>
                <p className="text-xs text-[#697A72]">Pune Studio & Nationwide Telehealth</p>
                <p className="text-xs sm:text-sm text-[#5B6D64] leading-relaxed pt-1">
                  Providing ongoing weekly therapy for adults and couples dealing with anxiety, burnout, relationship friction, and life transitions.
                </p>
              </div>

              <div className="pt-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-serif text-base sm:text-lg text-[#1A2421]">
                    Hospital Outpatient Mental Health Unit — Clinical Counselor
                  </h3>
                  <span className="text-xs text-[#527965] font-medium">2014 – 2015</span>
                </div>
                <p className="text-xs text-[#697A72]">Pune, India</p>
                <p className="text-xs sm:text-sm text-[#5B6D64] leading-relaxed pt-1">
                  Conducted diagnostic intakes, supportive crisis counseling, and structured anxiety reduction sessions for outpatient clients.
                </p>
              </div>

              <div className="pt-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-serif text-base sm:text-lg text-[#1A2421]">
                    University Counseling Center — Graduate Counselor
                  </h3>
                  <span className="text-xs text-[#527965] font-medium">2013 – 2014</span>
                </div>
                <p className="text-xs text-[#697A72]">Mumbai, India</p>
                <p className="text-xs sm:text-sm text-[#5B6D64] leading-relaxed pt-1">
                  Supported students and young adults managing academic stress, perfectionism, self-esteem questions, and family challenges.
                </p>
              </div>

              <div className="pt-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-serif text-base sm:text-lg text-[#1A2421]">
                    Community Mental Health & Wellness Workshops — Facilitator
                  </h3>
                  <span className="text-xs text-[#527965] font-medium">2015 – Present</span>
                </div>
                <p className="text-xs text-[#697A72]">Corporate & Community Settings</p>
                <p className="text-xs sm:text-sm text-[#5B6D64] leading-relaxed pt-1">
                  Designed and facilitated interactive workshops on preventing burnout, setting healthy boundaries, and managing workplace stress.
                </p>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* 8. CARL ROGERS QUOTE SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
        <div className="bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-14 shadow-subtle space-y-3.5">
          <span className="font-serif text-3xl sm:text-4xl text-[#BDDBE7]">“</span>
          <p className="font-serif italic text-base sm:text-2xl md:text-3xl text-[#1A2421] leading-relaxed max-w-2xl mx-auto -mt-2">
            {siteContent.home.quote.statement.replace(/[“”]/g, '')}
          </p>
          <p className="font-sans text-[11px] sm:text-xs text-[#527965] font-medium uppercase tracking-widest pt-1">
            — {siteContent.home.quote.citation}
          </p>
        </div>
      </section>

    </div>
  );
}
