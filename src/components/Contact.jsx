import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact({ subject = '', onSubjectChange }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState(null); // null | 'demo-validated' | 'error'

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Please provide a valid corporate or personal email address.';
    }
    const phoneDigits = form.phone.replace(/[\s\-()+]/g, '');
    if (!phoneDigits || phoneDigits.length < 7 || !/^\d+$/.test(phoneDigits)) {
      nextErrors.phone = 'Please enter a valid contact phone number (at least 7 digits).';
    }
    if (!subject.trim() || subject.trim().length < 3) {
      nextErrors.subject = 'Please specify a project or inquiry subject.';
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      nextErrors.message = 'Please include brief project details (at least 15 characters).';
    }
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'subject') {
      if (onSubjectChange) onSubjectChange(value);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitState('error');
      return;
    }

    setErrors({});
    // Honest static-frontend handling: never pretend a message was transmitted to a live backend.
    setSubmitState('demo-validated');
  };

  const whatsappHref = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello ECO & LUX team, I would like to discuss a construction/engineering inquiry.`
  )}`;

  return (
    <section id="contact" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#D03231]" />
            <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#175D99]">
              09 // PROJECT CONSULTATION &amp; INQUIRIES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B121B]">
            Initiate a Project Discussion
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Connect with our contracting and civil engineering leadership for tender requests, design-build consultations, or general trading partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Corporate Contact Coordinates & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#081321] text-white p-8 space-y-6">
              <div>
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#93C5FD]">
                  Corporate Desk (Editable Placeholders)
                </p>
                <h3 className="mt-1 font-display text-xl font-bold">
                  {COMPANY_INFO.legalName}
                </h3>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="h-5 w-5 text-[#D03231] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Head Office Address</p>
                    <p className="text-slate-300 mt-0.5">{COMPANY_INFO.contact.addressLine1}</p>
                    <p className="text-slate-400">{COMPANY_INFO.contact.addressLine2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="h-5 w-5 text-[#60A5FA] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Direct Telephone</p>
                    <p className="text-slate-300 mt-0.5">{COMPANY_INFO.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="h-5 w-5 text-[#60A5FA] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Corporate Email</p>
                    <p className="text-slate-300 mt-0.5">{COMPANY_INFO.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="h-5 w-5 text-[#60A5FA] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Operating Hours</p>
                    <p className="text-slate-300 mt-0.5">{COMPANY_INFO.contact.officeHours}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct CTA */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 bg-[#128C7E] hover:bg-[#0E7367] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Engineering Desk</span>
                </a>
                <p className="mt-2 text-[11px] text-slate-400 text-center">
                  Update `whatsappNumber` in src/data/siteData.js before publishing
                </p>
              </div>
            </div>

            {/* Google Maps Integration Placeholder */}
            <div className="border border-[#DCE3EC] bg-[#F6F8FB] p-6 bg-blueprint-grid">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[#175D99]">
                  Google Maps Integration Placeholder
                </span>
                <span className="h-2 w-2 rounded-full bg-[#D03231]" />
              </div>
              <p className="font-mono-tech text-xs text-[#334155]">
                {COMPANY_INFO.contact.mapCoordinatesLabel}
              </p>
              <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                Replace this interactive locator block with your verified Google Maps embed URL or API key once your office coordinates are finalized.
              </p>
              <a
                href={COMPANY_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#175D99] hover:text-[#D03231] transition-colors"
              >
                <span>Open Maps Placeholder</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Validated Corporate Inquiry Form */}
          <div className="lg:col-span-7 border border-[#DCE3EC] bg-[#F6F8FB] p-6 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-[#0B121B]">
              Project &amp; Tender Inquiry Form
            </h3>
            <p className="mt-1.5 text-sm text-[#475569]">
              All fields are validated before submission. Connect a backend API or email gateway to transmit live inquiries.
            </p>

            {/* Status Feedback Banners */}
            {submitState === 'error' && (
              <div
                role="alert"
                className="mt-6 flex items-start gap-3 border border-[#D03231]/40 bg-[#FEF2F2] p-4 text-sm text-[#991B1B]"
              >
                <AlertCircle className="h-5 w-5 text-[#D03231] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Please review the highlighted fields below.</p>
                  <p className="text-xs mt-0.5">
                    One or more required fields contain invalid or incomplete information.
                  </p>
                </div>
              </div>
            )}

            {submitState === 'demo-validated' && (
              <div
                role="status"
                className="mt-6 flex items-start gap-3 border border-[#175D99]/35 bg-[#EAF2FA] p-4 text-sm text-[#0F3C66]"
              >
                <CheckCircle2 className="h-5 w-5 text-[#175D99] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    Form Validated (Front-End Preview Mode — Not Transmitted)
                  </p>
                  <p className="text-xs mt-1 leading-relaxed">
                    Your inquiry passed all validation checks, but no backend mail server is connected to this static preview yet. Please connect your API endpoint (e.g., Formspree, Resend, or custom backend) or reach out via the WhatsApp / Email placeholders.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(INITIAL_FORM);
                      if (onSubjectChange) onSubjectChange('');
                      setSubmitState(null);
                    }}
                    className="mt-2.5 text-xs font-bold uppercase tracking-wider underline hover:text-[#D03231] cursor-pointer"
                  >
                    Clear &amp; Reset Form
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#0B121B] mb-2">
                    Full Name <span className="text-[#D03231]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Al-Mansoor"
                    aria-invalid={Boolean(errors.name)}
                    className={`w-full bg-white border px-4 py-3 text-sm text-[#0B121B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#175D99]/25 ${
                      errors.name ? 'border-[#D03231]' : 'border-[#DCE3EC] focus:border-[#175D99]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-medium text-[#D03231]">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0B121B] mb-2">
                    Email Address <span className="text-[#D03231]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    aria-invalid={Boolean(errors.email)}
                    className={`w-full bg-white border px-4 py-3 text-sm text-[#0B121B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#175D99]/25 ${
                      errors.email ? 'border-[#D03231]' : 'border-[#DCE3EC] focus:border-[#175D99]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs font-medium text-[#D03231]">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#0B121B] mb-2">
                    Phone Number <span className="text-[#D03231]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+000 00 000 0000"
                    aria-invalid={Boolean(errors.phone)}
                    className={`w-full bg-white border px-4 py-3 text-sm text-[#0B121B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#175D99]/25 ${
                      errors.phone ? 'border-[#D03231]' : 'border-[#DCE3EC] focus:border-[#175D99]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-medium text-[#D03231]">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#0B121B] mb-2">
                    Subject / Discipline <span className="text-[#D03231]">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={subject}
                    onChange={handleChange}
                    placeholder="e.g. Commercial Construction Tender"
                    aria-invalid={Boolean(errors.subject)}
                    className={`w-full bg-white border px-4 py-3 text-sm text-[#0B121B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#175D99]/25 ${
                      errors.subject ? 'border-[#D03231]' : 'border-[#DCE3EC] focus:border-[#175D99]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs font-medium text-[#D03231]">{errors.subject}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#0B121B] mb-2">
                  Project Scope &amp; Message <span className="text-[#D03231]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Outline your site location, project sector, target timeline, or engineering requirements..."
                  aria-invalid={Boolean(errors.message)}
                  className={`w-full bg-white border px-4 py-3 text-sm text-[#0B121B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#175D99]/25 resize-y ${
                    errors.message ? 'border-[#D03231]' : 'border-[#DCE3EC] focus:border-[#175D99]'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs font-medium text-[#D03231]">{errors.message}</p>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#175D99] hover:bg-[#104472] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors shadow-sm cursor-pointer"
                >
                  <span>Validate &amp; Submit Inquiry</span>
                  <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-[#64748B]">
                  Protected by client-side validation.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
