import React from 'react';
import { ArrowUp, Globe, Mail, MapPin, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO, NAV_LINKS, SERVICES } from '../data/siteData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-[#081321] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo size="lg" theme="dark" />
            <p className="text-sm leading-relaxed text-slate-300 max-w-sm">
              {COMPANY_INFO.legalName} — delivering disciplined civil engineering, structural construction, and resilient infrastructure development.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                aria-label="LinkedIn Placeholder"
                className="h-9 w-9 flex items-center justify-center border border-white/15 text-slate-300 hover:border-[#175D99] hover:bg-[#175D99] hover:text-white transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                aria-label="Website Portal"
                className="h-9 w-9 flex items-center justify-center border border-white/15 text-slate-300 hover:border-[#175D99] hover:bg-[#175D99] hover:text-white transition-colors"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                aria-label="Email ECO & LUX"
                className="h-9 w-9 flex items-center justify-center border border-white/15 text-slate-300 hover:border-[#D03231] hover:bg-[#D03231] hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-[0.18em] text-[#93C5FD] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-[0.18em] text-[#93C5FD] mb-4">
              Engineering Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => scrollTo(e, '#services')}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-[0.18em] text-[#93C5FD]">
              Contact Details
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#D03231] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.contact.addressLine1}
                  <br />
                  {COMPANY_INFO.contact.addressLine2}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#60A5FA] shrink-0" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#60A5FA] shrink-0" />
                <span className="break-all">{COMPANY_INFO.contact.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {CURRENT_YEAR} {COMPANY_INFO.legalName}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={(e) => scrollTo(e, '#home')}
            className="inline-flex items-center gap-2 font-mono-tech uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#D03231]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
