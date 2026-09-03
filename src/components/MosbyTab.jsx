import React from 'react';

/**
 * Mobile-First Mosby Files curved tab component
 */
export function MosbyTab({ label, isActive, onClick, bgHex, textColor = '#1F1B0E', isFirst = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex items-end select-none cursor-pointer focus-visible:outline-none transition-all duration-150 shrink-0 touch-manipulation ${
        isActive ? 'z-20 scale-[1.01]' : 'z-10 opacity-90 hover:opacity-100'
      }`}
      style={{ marginBottom: '-1px' }}
    >
      {/* Left flared fillet curve (flush rounded corner if first tab) */}
      {!isFirst ? (
        <svg
          className="w-3 sm:w-6 md:w-8 h-8 sm:h-10 shrink-0"
          style={{ fill: bgHex }}
          viewBox="0 0 32 40"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C16,40 18,0 32,0 L32,40 Z" />
        </svg>
      ) : (
        <div
          className="w-2 sm:w-3.5 h-8 sm:h-10 rounded-tl-md sm:rounded-tl-lg shrink-0"
          style={{ backgroundColor: bgHex }}
        />
      )}

      {/* Middle text bar */}
      <div
        className="h-8 sm:h-10 px-2 sm:px-3 md:px-5 flex items-center justify-center font-serif text-[11px] sm:text-sm md:text-base whitespace-nowrap"
        style={{ backgroundColor: bgHex, color: textColor }}
      >
        <span className={`tracking-tight ${isActive ? 'font-bold' : 'font-normal'}`}>
          {label}
        </span>
      </div>

      {/* Right flared fillet curve */}
      <svg
        className="w-3 sm:w-6 md:w-8 h-8 sm:h-10 shrink-0"
        style={{ fill: bgHex }}
        viewBox="0 0 32 40"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C14,0 16,40 32,40 L0,40 Z" />
      </svg>
    </button>
  );
}
