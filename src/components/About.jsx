import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Eye, ShieldAlert, Target } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/siteData';

export default function About() {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <section id="about" className="relative bg-white py-20 sm:py-28 border-b border-[#DCE3EC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-[#D03231]" />
              <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#175D99]">
                {ABOUT_CONTENT.eyebrow}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B121B] leading-[1.1]">
              {ABOUT_CONTENT.headline}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {ABOUT_CONTENT.overview}
            </p>
          </div>
        </motion.div>

        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative overflow-hidden bg-[#081321] aspect-[4/3] sm:aspect-[16/11] shadow-xl">
              <img
                src={ABOUT_CONTENT.image}
                alt="ECO & LUX engineering team inspecting site plans"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between text-white">
                <div>
                  <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#93C5FD]">
                    Field Engineering Supervision
                  </p>
                  <p className="mt-1 font-display text-sm sm:text-base font-semibold">
                    Disciplined Execution from Foundation to Handover
                  </p>
                </div>
              </div>
            </div>

            {/* Quality & Safety Highlight Strip (Editorial, non-generic) */}
            <div className="mt-6 border-l-4 border-[#D03231] bg-[#F6F8FB] p-6">
              <div className="flex items-start gap-3.5">
                <ShieldAlert className="h-5 w-5 text-[#D03231] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#0B121B]">
                    Commitment to Quality &amp; Safety
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                    {ABOUT_CONTENT.safetyCommitment}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Narrative + Vision/Mission + Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <p className="text-base leading-relaxed text-[#334155] pb-8 border-b border-[#DCE3EC]">
              {ABOUT_CONTENT.secondaryCopy}
            </p>

            {/* Vision / Mission Editorial Switcher */}
            <div className="py-8 border-b border-[#DCE3EC]">
              <div className="flex items-center gap-6 border-b border-[#DCE3EC] mb-6">
                <button
                  type="button"
                  onClick={() => setActiveTab('vision')}
                  className={`pb-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors relative cursor-pointer ${
                    activeTab === 'vision'
                      ? 'text-[#175D99]'
                      : 'text-[#64748B] hover:text-[#0B121B]'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Our Vision
                  </span>
                  {activeTab === 'vision' && (
                    <motion.span
                      layoutId="about-tab-indicator"
                      className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-[#175D99]"
                    />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('mission')}
                  className={`pb-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors relative cursor-pointer ${
                    activeTab === 'mission'
                      ? 'text-[#175D99]'
                      : 'text-[#64748B] hover:text-[#0B121B]'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Our Mission
                  </span>
                  {activeTab === 'mission' && (
                    <motion.span
                      layoutId="about-tab-indicator"
                      className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-[#175D99]"
                    />
                  )}
                </button>
              </div>

              <p className="text-lg sm:text-xl font-display font-medium leading-relaxed text-[#0B121B]">
                {activeTab === 'vision' ? ABOUT_CONTENT.vision : ABOUT_CONTENT.mission}
              </p>
            </div>

            {/* Core Values Grid (Crisp Typographic Borders) */}
            <div className="pt-8">
              <p className="font-mono-tech text-xs font-semibold uppercase tracking-[0.18em] text-[#175D99] mb-5">
                Core Engineering Values
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {ABOUT_CONTENT.coreValues.map((val) => (
                  <div key={val.title} className="group">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#175D99] shrink-0" />
                      <h4 className="font-display text-sm font-bold text-[#0B121B]">
                        {val.title}
                      </h4>
                    </div>
                    <p className="mt-1.5 pl-6.5 text-sm leading-relaxed text-[#475569]">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
