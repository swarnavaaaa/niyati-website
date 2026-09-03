import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CornerDownRight, CheckCircle, ExternalLink, Shield } from 'lucide-react';
import { siteContent } from '../data/content';

export default function DossierStack() {
  const [activeFolderIndex, setActiveFolderIndex] = useState(0);
  const activeDossier = siteContent.dossiers[activeFolderIndex];

  return (
    <div className="w-full">
      {/* Folder Tabs (Top Ear Tabs along the stack) */}
      <div className="flex items-end overflow-x-auto no-scrollbar space-x-1 sm:space-x-2 pt-4 px-2 sm:px-0">
        {siteContent.dossiers.map((dossier, idx) => {
          const isActive = activeFolderIndex === idx;
          return (
            <button
              key={dossier.id}
              onClick={() => setActiveFolderIndex(idx)}
              className={`group relative flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 font-mono text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 select-none border-t border-l border-r rounded-t-lg shrink-0 ${
                isActive
                  ? `${dossier.bgColor} ${dossier.textColor} border-transparent shadow-lg transform -translate-y-1 z-20`
                  : 'bg-dark-850 text-textMuted hover:text-white border-white/10 hover:bg-dark-800 z-10'
              }`}
            >
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-textMuted'}`}>
                {dossier.code}
              </span>
              <span className="font-medium whitespace-nowrap">
                {dossier.tabTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Active Dossier Document Container */}
      <div className={`relative ${activeDossier.bgColor} ${activeDossier.textColor} rounded-b-xl sm:rounded-tr-xl p-6 sm:p-12 transition-all duration-300 shadow-dossier border border-white/10 overflow-hidden`}>
        
        {/* Subtle Archival Watermark */}
        <div className="absolute right-4 sm:right-8 bottom-4 sm:bottom-8 font-mono text-7xl sm:text-9xl font-bold opacity-10 pointer-events-none select-none">
          {activeDossier.number}
        </div>

        {/* Top Dossier Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/20 font-mono text-xs uppercase tracking-wider">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 bg-black/20 text-white font-semibold rounded text-[11px]">
              CLASSIFICATION: {activeDossier.category}
            </span>
            <span className="hidden sm:inline opacity-70">|</span>
            <span className="opacity-80">FILE REF: {activeDossier.code}</span>
          </div>

          <div className="flex items-center space-x-2 text-[11px] opacity-80">
            <Shield className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL CLINICAL RECORD</span>
          </div>
        </div>

        {/* Dossier Body Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-start">
          
          {/* Left Column: Headline & Overview */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-tight">
              {activeDossier.headline}
            </h3>

            <p className="text-base sm:text-xl font-light leading-relaxed opacity-95">
              {activeDossier.lead}
            </p>

            <div className="p-5 sm:p-6 bg-black/20 rounded-lg border border-white/15 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-widest block opacity-75 font-semibold">
                CLINICAL RATIONALE & APPROACH
              </span>
              <p className="text-sm sm:text-base leading-relaxed opacity-90 font-light">
                {activeDossier.dossierOverview}
              </p>
            </div>
          </div>

          {/* Right Column: Frameworks & Logistics */}
          <div className="lg:col-span-5 space-y-6 font-mono text-xs">
            
            {/* Modalities & Tools Pill Stack */}
            <div className="p-6 bg-black/25 rounded-lg border border-white/15 space-y-4">
              <span className="uppercase tracking-widest text-[11px] opacity-80 font-bold block">
                [ CLINICAL FRAMEWORKS UTILIZED ]
              </span>
              <div className="space-y-2">
                {activeDossier.frameworks.map((fw, i) => (
                  <div key={i} className="flex items-center space-x-2.5 py-1.5 border-b border-white/10 last:border-0 text-white">
                    <CornerDownRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
                    <span className="font-sans text-sm">{fw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Session Logistics Spec */}
            <div className="p-5 bg-black/20 rounded-lg border border-white/10 space-y-1">
              <span className="text-[10px] uppercase tracking-widest opacity-70 block font-bold">
                SESSION SPECIFICATION
              </span>
              <p className="text-sm font-sans font-medium text-white">
                {activeDossier.sessionStructure}
              </p>
            </div>

            {/* Action CTA for this specific dossier */}
            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-between px-6 py-4 bg-white text-dark-900 font-mono text-xs uppercase tracking-wider font-bold hover:bg-parchment-200 transition-colors shadow-md rounded"
              >
                <span>CONSULT ON THIS FOCUS AREA [{activeDossier.code}]</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
