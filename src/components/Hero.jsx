import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Building2, Compass, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#081321] text-white"
    >
      {/* Background Architectural Photography with Subtle Ken Burns Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 14, ease: 'easeOut' }}
          src="/images/hero-skyline-bridge.jpg"
          alt="Large-scale civil engineering skyline and tower crane infrastructure"
          className="h-full w-full object-cover object-center"
        />
        {/* Multi-layer directional dark corporate gradient scrim for razor-sharp readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081321]/95 via-[#081321]/80 to-[#081321]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-[#081321]/50" />
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-40" />
      </div>

      {/* Top Spacer for Fixed Header */}
      <div className="h-24 sm:h-28" />

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="inline-flex items-center gap-3 border border-white/15 bg-white/5 backdrop-blur-md px-4 py-2 mb-7"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#D03231]" />
            <span className="font-mono-tech text-[11px] font-medium uppercase tracking-[0.2em] text-slate-200">
              General Trading &amp; Contracting // Civil &amp; Infrastructure
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.06] tracking-tight text-white"
          >
            Building Tomorrow.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CFE5FA] to-[#7CB9F0]">
              Engineering Excellence Today.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38 }}
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 font-normal"
          >
            {COMPANY_INFO.heroSubheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.48 }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection('#projects')}
              className="group inline-flex items-center justify-center gap-3 bg-[#175D99] hover:bg-[#1E71B8] px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-200 shadow-lg shadow-[#175D99]/25 cursor-pointer"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center justify-center gap-3 border border-white/30 bg-white/5 hover:bg-white hover:text-[#081321] backdrop-blur-sm px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-200 cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Engineering Telemetry Bar + Scroll Indicator */}
      <div className="relative z-10 border-t border-white/10 bg-[#081321]/75 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <Compass className="h-5 w-5 text-[#60A5FA] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  Integrated EPC Delivery
                </p>
                <p className="text-[11px] text-slate-400">Design, Civil &amp; Turnkey Contracting</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#D03231] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  QA/QC &amp; HSE Rigor
                </p>
                <p className="text-[11px] text-slate-400">Safety-First Field Governance</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-[#60A5FA] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  Multi-Sector Capability
                </p>
                <p className="text-[11px] text-slate-400">Infrastructure, Commercial &amp; Industrial</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('#about')}
            className="hidden md:inline-flex items-center gap-2.5 text-xs font-mono-tech uppercase tracking-[0.18em] text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Scroll to Explore</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-4 w-4 text-[#D03231]" />
            </motion.span>
          </button>
        </div>
      </div>
    </section>
  );
}
