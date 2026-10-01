import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ code, title, desc, points, index }) {
  // Rotate soft accent colors across cards
  const accents = [
    { badgeBg: 'bg-[#E8EFEA]', badgeText: 'text-[#527965]', border: 'group-hover:border-[#527965]/40' },
    { badgeBg: 'bg-[#E8F2F7]', badgeText: 'text-[#194B4E]', border: 'group-hover:border-[#194B4E]/40' },
    { badgeBg: 'bg-[#FAF3F0]', badgeText: 'text-[#C67D63]', border: 'group-hover:border-[#C67D63]/40' },
    { badgeBg: 'bg-[#F4F7F5]', badgeText: 'text-[#436554]', border: 'group-hover:border-[#436554]/40' },
  ];
  const accent = accents[index % accents.length];

  return (
    <div
      className={`group bg-white border border-[#E3ECE6] ${accent.border} rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="space-y-4">
        {/* Top Code Badge */}
        <div className="flex items-center justify-between">
          <span className={`w-8 h-8 rounded-full ${accent.badgeBg} ${accent.badgeText} text-xs font-semibold flex items-center justify-center font-serif`}>
            {code || `0${index + 1}`}
          </span>
          <span className="text-[11px] text-[#889B92] tracking-wider uppercase">
            Specialized Care
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421] group-hover:text-[#194B4E] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
          {desc}
        </p>

        {/* Bullet Points */}
        {points && points.length > 0 && (
          <div className="pt-2 border-t border-[#E3ECE6]/70 space-y-2">
            {points.map((pt, i) => (
              <div key={i} className="flex items-center space-x-2 text-xs text-[#46544E]">
                <div className="w-4 h-4 rounded-full bg-[#EBF7F0] text-[#527965] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </div>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-6 mt-4">
        <Link
          to="/contact"
          className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#194B4E] hover:text-[#527965] transition-colors group-hover:translate-x-1 duration-200"
        >
          <span>Inquire about this</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </Link>
      </div>
    </div>
  );
}
