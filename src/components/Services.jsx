import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, Layers, X } from 'lucide-react';
import { SERVICES } from '../data/siteData';

export default function Services({ onInquireService }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="relative bg-[#F6F8FB] py-20 sm:py-28 border-b border-[#DCE3EC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-[#D03231]" />
              <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#175D99]">
                02 // CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B121B]">
              Integrated Engineering &amp; Construction Services
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#475569] leading-relaxed">
            From foundational civil works and heavy infrastructure to flagship commercial towers, we execute every discipline under unified technical governance.
          </p>
        </motion.div>

        {/* 8 Services Architectural Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
              className="group flex flex-col bg-white border border-[#DCE3EC] hover:border-[#175D99] transition-all duration-300 shadow-[0_2px_12px_rgba(11,18,27,0.03)] hover:shadow-[0_18px_40px_rgba(23,93,153,0.12)]"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-[#081321]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/75 via-[#081321]/15 to-transparent" />
                <div className="absolute top-3.5 left-3.5 bg-[#081321]/85 backdrop-blur-sm px-2.5 py-1 border border-white/15">
                  <span className="font-mono-tech text-[11px] font-semibold tracking-wider text-white">
                    {service.code}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B121B] group-hover:text-[#175D99] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EDF2F7] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#175D99] hover:text-[#D03231] transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                  <span className="h-1.5 w-1.5 bg-[#DCE3EC] group-hover:bg-[#D03231] transition-colors" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Service Specification Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#081321]/75 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white border border-[#DCE3EC] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-56 sm:h-64 bg-[#081321]">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/90 via-[#081321]/40 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  aria-label="Close service details"
                  className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center bg-[#081321]/80 text-white hover:bg-[#D03231] transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#93C5FD]">
                    {selectedService.code} // TECHNICAL CAPABILITY
                  </span>
                  <h3 id="service-modal-title" className="mt-1 font-display text-2xl sm:text-3xl font-extrabold">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-base leading-relaxed text-[#334155]">
                  {selectedService.fullDesc}
                </p>

                <div className="bg-[#F6F8FB] border border-[#DCE3EC] p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#175D99] mb-3.5">
                    <Layers className="h-4 w-4" />
                    <span>Key Engineering Scope &amp; Deliverables</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#1E293B]">
                        <Check className="h-4 w-4 text-[#D03231] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#DCE3EC]">
                  <div>
                    <p className="font-mono-tech text-[11px] uppercase tracking-wider text-[#64748B]">
                      Reference Standard
                    </p>
                    <p className="text-sm font-semibold text-[#0B121B]">
                      {selectedService.standard}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const title = selectedService.title;
                      setSelectedService(null);
                      if (onInquireService) onInquireService(`Service Inquiry: ${title}`);
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-[#175D99] hover:bg-[#104472] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors cursor-pointer"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
