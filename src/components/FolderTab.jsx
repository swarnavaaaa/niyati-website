import React from 'react';

/**
 * Pixel-perfect Mosby Files curved folder ear tab component
 * Uses overlapping bezier curves that merge seamlessly into the folder body with 0 gaps.
 */
export function FolderTab({ label, isActive, onClick, bgHex }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex items-end select-none cursor-pointer transition-all duration-150 focus-visible:outline-none -mb-[1px] ${
        isActive ? 'z-20 scale-[1.01]' : 'z-10 opacity-90 hover:opacity-100'
      }`}
    >
      {/* Left swoop curve into folder */}
      <svg
        className="w-5 sm:w-7 h-9 sm:h-11 shrink-0"
        style={{ fill: bgHex }}
        viewBox="0 0 28 44"
        preserveAspectRatio="none"
      >
        <path d="M0,44 C16,44 14,0 28,0 L28,44 Z" />
      </svg>

      {/* Center tab label */}
      <div
        className="h-9 sm:h-11 px-2 sm:px-4 flex items-center justify-center font-serif text-sm sm:text-base text-white whitespace-nowrap"
        style={{ backgroundColor: bgHex }}
      >
        <span className={`tracking-normal ${isActive ? 'font-medium underline underline-offset-4' : 'font-normal opacity-95 group-hover:opacity-100'}`}>
          {label}
        </span>
      </div>

      {/* Right swoop curve into folder */}
      <svg
        className="w-5 sm:w-7 h-9 sm:h-11 shrink-0"
        style={{ fill: bgHex }}
        viewBox="0 0 28 44"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C14,0 12,44 28,44 L0,44 Z" />
      </svg>
    </button>
  );
}
