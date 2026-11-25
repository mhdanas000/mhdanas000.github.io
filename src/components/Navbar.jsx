import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { NAV_LINKS } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);

      const offsets = NAV_LINKS.map((link) => {
        const el = document.querySelector(link.href);
        if (!el) return { href: link.href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { href: link.href, top: Math.abs(rect.top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0]) setActiveHref(offsets[0].href);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#DCE3EC] shadow-[0_8px_30px_rgba(8,19,33,0.06)] py-3'
            : 'bg-[#081321]/55 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#175D99]"
            aria-label="ECO & LUX Home"
          >
            <BrandLogo size="md" theme={scrolled ? 'light' : 'dark'} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
            {NAV_LINKS.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`relative px-3.5 py-2 text-[13px] font-semibold tracking-wide transition-colors ${
                    scrolled
                      ? isActive
                        ? 'text-[#175D99]'
                        : 'text-[#1E293B] hover:text-[#175D99]'
                      : isActive
                      ? 'text-white'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-bar"
                      className="absolute inset-x-3.5 -bottom-[1px] h-[2px] bg-[#D03231]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-200 ${
                scrolled
                  ? 'bg-[#175D99] text-white hover:bg-[#104472] shadow-sm'
                  : 'bg-white text-[#081321] hover:bg-[#EAF2FA]'
              }`}
            >
              <span>Consult With Us</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#D03231]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className={`inline-flex lg:hidden h-10 w-10 items-center justify-center border transition-colors ${
                scrolled
                  ? 'border-[#DCE3EC] text-[#0B121B] hover:bg-slate-100'
                  : 'border-white/25 text-white hover:bg-white/10'
              }`}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#081321] text-white pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-4">
                Navigation Directory
              </p>
              <nav className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                {NAV_LINKS.map((item, idx) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="flex items-center justify-between py-4 text-lg font-display font-semibold text-white hover:text-[#60A5FA] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono-tech text-xs text-[#D03231]">
                        0{idx + 1}
                      </span>
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 space-y-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="flex w-full items-center justify-center gap-2 bg-[#175D99] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-[#104472]"
              >
                Request Project Consultation
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="text-center text-xs text-slate-400">
                ECO &amp; LUX General Trading &amp; Contracting Company
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
