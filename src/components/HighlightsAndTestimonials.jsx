import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Briefcase, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CAREERS_OPENINGS, COMPANY_STATS, TESTIMONIALS } from '../data/siteData';

function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(start + (target - start) * eased);
      setCount(next);
      if (progress < 1) requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HighlightsAndTestimonials({ onApplyCareer }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentQuote = TESTIMONIALS[activeTestimonial];

  return (
    <>
      {/* G. Statistics / Company Highlights */}
      <section id="highlights" className="relative bg-[#175D99] text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b border-white/20 mb-10">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#CFE5FA]">
                06 // COMPANY HIGHLIGHTS
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold">
                Operational Scale &amp; Performance Benchmarks
              </h2>
            </div>
            <p className="font-mono-tech text-[11px] uppercase tracking-wider text-[#CFE5FA] bg-white/10 px-3 py-1.5 border border-white/15">
              Editable Placeholder Figures · Configurable in siteData.js
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {COMPANY_STATS.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="border-l-2 border-white/30 pl-5"
              >
                <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm sm:text-base font-semibold text-white">
                  {stat.label}
                </p>
                <p className="mt-1 font-mono-tech text-[10px] uppercase tracking-widest text-[#CFE5FA]/80">
                  [{stat.note}]
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* H. Client Testimonials */}
      <section id="testimonials" className="relative bg-white py-20 sm:py-28 border-b border-[#DCE3EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-[#D03231]" />
                <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#175D99]">
                  07 // CLIENT PERSPECTIVES
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B121B]">
                Stakeholder Endorsements
              </h2>
            </div>

            <span className="font-mono-tech text-[11px] uppercase tracking-wider text-[#475569] bg-[#F6F8FB] border border-[#DCE3EC] px-3.5 py-2 self-start md:self-auto">
              Sample Testimonials — Illustrative Placeholder Content
            </span>
          </div>

          <div className="bg-[#F6F8FB] border border-[#DCE3EC] p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-9">
                <Quote className="h-10 w-10 text-[#175D99]/30 mb-6" />
                <motion.blockquote
                  key={currentQuote.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="font-display text-xl sm:text-2xl lg:text-[1.7rem] font-medium leading-relaxed text-[#0B121B]"
                >
                  &ldquo;{currentQuote.quote}&rdquo;
                </motion.blockquote>

                <div className="mt-8 pt-6 border-t border-[#DCE3EC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-base font-bold text-[#0B121B]">
                      {currentQuote.author}
                    </p>
                    <p className="text-sm text-[#475569]">{currentQuote.role}</p>
                  </div>
                  <span className="font-mono-tech text-xs text-[#175D99] bg-white border border-[#DCE3EC] px-3 py-1.5 self-start sm:self-auto">
                    {currentQuote.projectRef}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="h-11 w-11 flex items-center justify-center border border-[#DCE3EC] bg-white hover:border-[#175D99] hover:text-[#175D99] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="h-11 w-11 flex items-center justify-center border border-[#DCE3EC] bg-white hover:border-[#175D99] hover:text-[#175D99] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((t, i) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTestimonial(i)}
                      aria-label={`Select testimonial ${i + 1}`}
                      className={`h-2 transition-all cursor-pointer ${
                        i === activeTestimonial ? 'w-8 bg-[#D03231]' : 'w-2 bg-[#CBD5E1]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Band (Supports Navbar Careers Link) */}
      <section id="careers" className="relative bg-[#F6F8FB] py-16 sm:py-20 border-b border-[#DCE3EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-[#D03231]" />
                <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#175D99]">
                  08 // CAREERS AT ECO &amp; LUX
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B121B]">
                Build Your Engineering Career With Us
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                We seek disciplined civil engineers, structural specialists, project controls managers, and HSE leaders committed to delivering enduring infrastructure.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#DCE3EC] border border-[#DCE3EC] bg-white">
              {CAREERS_OPENINGS.map((role) => (
                <div
                  key={role.code}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F8FAFC] transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <Briefcase className="h-4 w-4 text-[#175D99]" />
                      <span className="font-mono-tech text-[11px] font-semibold text-[#D03231]">
                        {role.code}
                      </span>
                      <span className="text-xs text-[#64748B]">· {role.location}</span>
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#0B121B]">
                      {role.title}
                    </h3>
                    <p className="text-xs text-[#475569] mt-0.5">{role.type}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onApplyCareer && onApplyCareer(`Career Inquiry: ${role.title}`)}
                    className="inline-flex items-center justify-center gap-2 border border-[#175D99] text-[#175D99] hover:bg-[#175D99] hover:text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
                  >
                    <span>Inquire / Apply</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
