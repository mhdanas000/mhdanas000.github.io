import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Info, MapPin, X } from 'lucide-react';
import { PROJECT_CATEGORIES, PROJECTS } from '../data/siteData';

export default function Projects({ onInquireProject }) {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All Projects'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative bg-white py-20 sm:py-28 border-b border-[#DCE3EC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Demo Portfolio Disclosure */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-[#D03231]" />
              <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#175D99]">
                03 // INFRASTRUCTURE &amp; BUILDING PORTFOLIO
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B121B]">
              Signature Project Showcase
            </h2>
          </div>

          <div className="flex items-start gap-2.5 bg-[#EAF2FA] border border-[#175D99]/20 px-4 py-3 max-w-md">
            <Info className="h-4 w-4 text-[#175D99] shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-[#1E3A5F]">
              <span className="font-bold">Illustrative Demo Portfolio:</span> Entries below represent placeholder architectural &amp; civil concepts illustrating sector scope until verified project records are published.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-2 pb-10 border-b border-[#DCE3EC] mb-10"
          role="tablist"
          aria-label="Filter projects by sector"
        >
          {PROJECT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#175D99] text-white border-[#175D99] shadow-sm'
                    : 'bg-white text-[#475569] border-[#DCE3EC] hover:border-[#175D99] hover:text-[#175D99]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Editorial Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isWide = activeCategory === 'All Projects' && (idx === 0 || idx === 5);
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative overflow-hidden bg-[#081321] cursor-pointer border border-[#DCE3EC] ${
                    isWide ? 'md:col-span-2 aspect-[16/9] md:aspect-[21/10]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Architectural Dark Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/45 to-[#081321]/15 transition-opacity duration-300 group-hover:opacity-95" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="bg-[#175D99]/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                      {project.category}
                    </span>
                    <span className="font-mono-tech bg-[#081321]/80 backdrop-blur-sm border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-wider text-slate-200">
                      {project.status}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-white">
                    <div className="flex items-center gap-2 text-xs text-slate-300 mb-2">
                      <MapPin className="h-3.5 w-3.5 text-[#D03231]" />
                      <span>{project.location}</span>
                    </div>

                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold leading-snug group-hover:text-[#93C5FD] transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 max-w-xl">
                          {project.summary}
                        </p>
                      </div>
                      <span className="shrink-0 h-10 w-10 flex items-center justify-center border border-white/25 bg-white/10 group-hover:bg-[#D03231] group-hover:border-[#D03231] transition-colors">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Dossier Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#081321]/80 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-white border border-[#DCE3EC] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64 sm:h-80 bg-[#081321]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/90 via-[#081321]/30 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project dossier"
                  className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center bg-[#081321]/80 text-white hover:bg-[#D03231] transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-[#175D99] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest">
                      {selectedProject.category}
                    </span>
                    <span className="font-mono-tech text-[11px] uppercase tracking-wider text-slate-300">
                      {selectedProject.code} · {selectedProject.status}
                    </span>
                  </div>
                  <h3 id="project-modal-title" className="font-display text-2xl sm:text-3xl font-extrabold">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-2 text-sm font-medium text-[#475569]">
                  <MapPin className="h-4 w-4 text-[#D03231]" />
                  <span>{selectedProject.location}</span>
                </div>

                <p className="text-base leading-relaxed text-[#1E293B]">
                  {selectedProject.summary}
                </p>

                <div className="bg-[#F6F8FB] border border-[#DCE3EC] p-5 space-y-3">
                  <p className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#175D99]">
                    Illustrative Engineering Scope
                  </p>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    {selectedProject.scope}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProject.specs.map((spec) => (
                      <span
                        key={spec}
                        className="border border-[#DCE3EC] bg-white px-3 py-1 font-mono-tech text-[11px] text-[#0B121B]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#DCE3EC]">
                  <p className="text-xs text-[#64748B]">
                    Demo capability profile — contact our engineering desk for sector-specific credentials.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      if (onInquireProject) onInquireProject(`Project Capability Inquiry: ${title}`);
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-[#175D99] hover:bg-[#104472] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors shrink-0 cursor-pointer"
                  >
                    <span>Discuss Similar Scope</span>
                    <ArrowUpRight className="h-4 w-4" />
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
