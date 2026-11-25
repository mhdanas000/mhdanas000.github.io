import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileCheck2 } from 'lucide-react';
import { WORK_PROCESS } from '../data/siteData';

export default function WorkProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = WORK_PROCESS[activeIndex];

  return (
    <section id="process" className="relative bg-[#F6F8FB] py-20 sm:py-28 border-b border-[#DCE3EC] bg-blueprint-grid">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#D03231]" />
            <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#175D99]">
              05 // PROJECT EXECUTION METHODOLOGY
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B121B]">
            Six-Phase Engineering Delivery Framework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Every project progresses through gated engineering milestones, ensuring technical accuracy, site safety, and predictable handover.
          </p>
        </motion.div>

        {/* Horizontal Interactive Timeline (Desktop) + Vertical Stepper (Mobile) */}
        <div className="relative mb-8">
          {/* Progress Rail on Desktop */}
          <div className="hidden lg:block absolute top-6 left-8 right-8 h-[2px] bg-[#DCE3EC]">
            <motion.div
              className="h-full bg-[#175D99]"
              animate={{ width: `${(activeIndex / (WORK_PROCESS.length - 1)) * 100}%` }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
            {WORK_PROCESS.map((item, idx) => {
              const isSelected = idx === activeIndex;
              const isPassed = idx < activeIndex;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`group text-left p-5 lg:pt-0 lg:px-3 transition-all cursor-pointer flex lg:flex-col items-start gap-4 lg:gap-4 border lg:border-0 bg-white lg:bg-transparent ${
                    isSelected
                      ? 'border-[#175D99] shadow-md lg:shadow-none'
                      : 'border-[#DCE3EC] hover:border-[#175D99]/50'
                  }`}
                >
                  <div
                    className={`h-12 w-12 shrink-0 flex items-center justify-center font-mono-tech text-sm font-bold border-2 transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#175D99] border-[#175D99] text-white scale-105 shadow-md'
                        : isPassed
                        ? 'bg-[#EAF2FA] border-[#175D99] text-[#175D99]'
                        : 'bg-white border-[#DCE3EC] text-[#475569] group-hover:border-[#175D99] group-hover:text-[#175D99]'
                    }`}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3
                      className={`font-display text-sm font-bold leading-snug transition-colors ${
                        isSelected ? 'text-[#175D99]' : 'text-[#0B121B]'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#64748B] lg:hidden">
                      {item.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Inspection Panel */}
        <motion.div
          key={current.step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white border border-[#DCE3EC] p-6 sm:p-10 shadow-[0_12px_36px_rgba(8,19,33,0.05)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#D03231] text-white font-mono-tech text-xs font-bold px-2.5 py-1">
                  PHASE {current.step}
                </span>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-[#64748B]">
                  Execution Standard
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B121B]">
                {current.title}
              </h3>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#475569]">
                {current.summary}
              </p>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#DCE3EC] pt-6 lg:pt-0 lg:pl-8">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#175D99]">
                <FileCheck2 className="h-4 w-4" />
                <span>Key Milestone Output</span>
              </div>
              <p className="mt-2 font-display text-lg font-bold text-[#0B121B]">
                {current.deliverable}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#475569]">
                <CheckCircle2 className="h-4 w-4 text-[#D03231]" />
                <span>Gated QA/HSE Sign-Off Required</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
