import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Compass, Cpu, HardHat, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/siteData';

const ICONS = {
  Compass,
  ShieldCheck,
  HardHat,
  Clock,
  Cpu,
  Award,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-[#081321] text-white py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-grid-dark opacity-50 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Visual & Positioning Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#D03231]" />
              <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#93C5FD]">
                04 // COMPETITIVE ADVANTAGE
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.12]">
              Why Global Partners Trust ECO &amp; LUX
            </h2>

            <p className="text-base leading-relaxed text-slate-300">
              Major capital developments demand certainty. We pair in-house structural engineering rigor with disciplined general trading logistics and unyielding site safety governance.
            </p>

            <div className="relative overflow-hidden border border-white/15 aspect-[16/10] bg-[#0B121B] mt-4">
              <img
                src="/images/service-structural.jpg"
                alt="Precision structural steel engineering truss architecture"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs">
                <span className="font-mono-tech uppercase tracking-wider text-slate-200">
                  Structural &amp; QA/QC Discipline
                </span>
                <span className="h-2 w-2 rounded-full bg-[#D03231]" />
              </div>
            </div>
          </motion.div>

          {/* Right 6-Pillar Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComponent = ICONS[item.icon] || Compass;
              return (
                <motion.div
                  key={item.code}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="group border border-white/12 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#175D99] p-6 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-11 w-11 flex items-center justify-center bg-[#175D99]/25 border border-[#175D99]/50 text-[#60A5FA] group-hover:bg-[#175D99] group-hover:text-white transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-mono-tech text-xs font-semibold text-slate-500 group-hover:text-[#D03231] transition-colors">
                      //{item.code}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
