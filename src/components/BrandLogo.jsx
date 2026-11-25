import React from 'react';
import logoImg from '../assets/eco-lux-logo.jpg';

/**
 * Renders the exact uploaded ECO & LUX circular seal without altering,
 * recoloring, or distorting its original artwork. The rounded-full frame
 * clips only the exterior black corners of the source JPEG.
 */
export default function BrandLogo({ size = 'md', theme = 'dark', showWordmark = true }) {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-14 w-14',
    xl: 'h-16 w-16',
  };

  return (
    <div className="inline-flex items-center gap-3.5 select-none">
      <div
        className={`${sizeClasses[size] || sizeClasses.md} relative shrink-0 rounded-full overflow-hidden bg-white ring-1 ring-black/10 shadow-sm`}
      >
        <img
          src={logoImg}
          alt="ECO & LUX General Trading & Contracting Company Logo"
          className="h-full w-full object-cover scale-[1.01]"
        />
      </div>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display text-lg font-extrabold tracking-tight ${
              theme === 'light' ? 'text-[#0B121B]' : 'text-white'
            }`}
          >
            ECO <span className="text-[#D03231]">&amp;</span> LUX
          </span>
          <span
            className={`mt-1 text-[10px] font-medium uppercase tracking-[0.16em] ${
              theme === 'light' ? 'text-[#475569]' : 'text-slate-300'
            }`}
          >
            Trading &amp; Contracting
          </span>
        </div>
      )}
    </div>
  );
}
