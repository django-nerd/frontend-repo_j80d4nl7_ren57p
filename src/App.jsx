import React, { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const howRef = useRef(null);

  const handleSeeHowItWorks = () => {
    const el = document.getElementById('how');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold text-slate-900">Pavan Teja</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#how" className="hover:text-slate-900">How It Works</a>
            <a href="#results" className="hover:text-slate-900">Results</a>
            <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
            <a href="#contact" className="hover:text-slate-900">Book a Demo</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero onPrimaryClick={handleSeeHowItWorks} />
        <About />
        <div ref={howRef}>
          <Process />
        </div>
        <Results />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
