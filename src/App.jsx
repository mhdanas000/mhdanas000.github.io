import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import WorkProcess from './components/WorkProcess';
import HighlightsAndTestimonials from './components/HighlightsAndTestimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [prefilledSubject, setPrefilledSubject] = useState('');

  const handleInquiryJump = (subjectText) => {
    setPrefilledSubject(subjectText);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0B121B]">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onInquireService={handleInquiryJump} />
        <Projects onInquireProject={handleInquiryJump} />
        <WhyChooseUs />
        <WorkProcess />
        <HighlightsAndTestimonials onApplyCareer={handleInquiryJump} />
        <Contact subject={prefilledSubject} onSubjectChange={setPrefilledSubject} />
      </main>
      <Footer />
    </div>
  );
}
