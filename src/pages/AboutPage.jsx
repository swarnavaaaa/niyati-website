import React, { useEffect } from 'react';
import { siteContent } from '../data/content';
import {
  Heart,
  Sparkles,
  Calendar,
  Map as MapIcon,
  MessageCircle,
  Instagram,
  Linkedin
} from 'lucide-react';

export default function AboutPage() {
  const { about } = siteContent;

  useEffect(() => {
    document.title = "About Niyati Bagla — Lost & Found Therapy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Meet Niyati Bagla, Counselling Psychologist & Psychotherapist with a Master's degree in Clinical Psychology. Human first, therapist later.");
    }
  }, []);

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

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#1A2421] font-normal leading-[1.15] tracking-tight">
              Human first, <span className="font-serif italic font-normal text-[#527965]">therapist later.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg md:text-xl text-[#46544E] font-normal leading-relaxed max-w-2xl mx-auto">
              A warm, supportive, collaborative and safe space to slow down, understand yourself, and navigate the ups and downs of life.
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
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. A LITTLE ABOUT ME (Spotlight on Niyati) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-start">
            
            {/* Bio Card (Photo bigger, credentials ordered cleanly, no online/duration info here) */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E3ECE6] rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-subtle lg:sticky lg:top-28">
              
              {/* Photo Circle - Larger */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-tr from-[#194B4E] to-[#527965] text-white flex items-center justify-center font-serif text-3xl sm:text-4xl shadow-card border-4 border-white">
                NB
              </div>

              {/* Name & Credentials: Counselling psychologist first, MSc later, once only */}
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
            </div>

            {/* Narrative Story - Consistent with Home Page */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center space-x-1.5 text-xs text-[#527965] font-semibold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" />
                <span>{about.hero.tag}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421] leading-tight font-normal">
                {about.hero.headline}
              </h2>

              {/* Intro text - bigger and bold */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E3ECE6]">
                <p className="font-sans text-sm sm:text-base font-medium text-[#1A2421] leading-relaxed">
                  {about.hero.intro}
                </p>
              </div>

              {/* Narrative paragraphs */}
              <div className="font-sans text-xs sm:text-sm text-[#46544E] space-y-4 leading-relaxed font-normal">
                <p>{about.paragraphs[0]}</p>
                <p>{about.paragraphs[1]}</p>
                <p>{about.paragraphs[2]}</p>
                <p>{about.paragraphs[3]}</p>
                
                {/* Paragraph 5 with bold phrase */}
                <p>
                  I see therapy as a partnership, rather than a relationship between an “expert” and a client. It’s two humans coming together to explore your story, make sense of your experiences, and help you reconnect with and rediscover yourself. <strong className="font-semibold text-[#1A2421]">In our work together, we might look at patterns that keep showing up, things you find hard to talk about, or ways you’ve learnt to cope.</strong> Therapy won’t always be easy, and I won’t have all the answers. But I hope we can stay curious together about what’s going on, what you need, and what might help.
                </p>

                {/* Paragraph 6 */}
                <p className="p-3.5 rounded-xl bg-[#F6F8F7] border border-[#E1ECE6] font-medium text-[#1A2421]">
                  Therapy is a space where you feel seen, heard, and supported as you work towards building a life that feels more true to YOU.
                </p>

                <p>{about.paragraphs[6]}</p>
              </div>

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

      {/* 3. THE MAP METAPHOR (WHAT THERAPY CAN BE LIKE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-tr from-[#FAF3F0] via-[#FAF8F5] to-[#E8F2F7] border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 shadow-card space-y-8">
          
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E8EFEA] text-xs text-[#527965] font-medium">
              <MapIcon className="w-3.5 h-3.5" />
              <span>{about.mapMetaphor.tag}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A2421] leading-tight font-normal">
              {about.mapMetaphor.headline}
            </h2>
          </div>

          {/* Image of aesthetic map before the text begins */}
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#E3ECE6] shadow-subtle bg-white">
            <img
              src={about.mapMetaphor.image}
              alt="An aesthetic map illustrating the therapeutic journey"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Single clean text format (boxes and subheadings removed per request) */}
          <div className="max-w-3xl mx-auto space-y-4 text-xs sm:text-sm text-[#46544E] leading-relaxed font-normal">
            {about.mapMetaphor.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
