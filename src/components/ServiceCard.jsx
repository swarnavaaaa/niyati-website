import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, focusAreas, index }) {
  return (
    <div className="group relative bg-sand-50/70 hover:bg-sand-100/90 border border-sand-200/90 hover:border-sand-300 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-soft">
      <div>
        {/* Subtle numbering */}
        <span className="text-xs font-mono uppercase text-warmgray-400 font-medium mb-4 block">
          0{index + 1}
        </span>

        {/* Service Title */}
        <h3 className="font-serif text-xl sm:text-2xl text-warmgray-900 mb-3 group-hover:text-terracotta-dark transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-warmgray-600 leading-relaxed mb-6 font-normal">
          {description}
        </p>

        {/* Tags / Sub-focus areas */}
        {focusAreas && focusAreas.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-sand-200/60">
            {focusAreas.map((area, i) => (
              <span
                key={i}
                className="text-[12px] text-warmgray-600 bg-sand-200/60 px-2.5 py-1 rounded-md"
              >
                {area}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-6 mt-6">
        <Link
          to="/contact"
          className="inline-flex items-center text-xs uppercase tracking-widest text-warmgray-700 group-hover:text-terracotta font-medium transition-colors"
        >
          <span>Inquire about this</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
