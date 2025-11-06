import React from 'react';
import Hero from './components/Hero';
import Process from './components/Process';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
  const handleSeeHowItWorks = () => {
    const el = document.getElementById('how');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold text-slate-900">Pavan Teja</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#how" className="hover:text-slate-900">How It Works</a>
            <a href="#results" className="hover:text-slate-900">Results</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero onPrimaryClick={handleSeeHowItWorks} />
        <Process />
        <Results />
        <Footer />
      </main>
    </div>
  );
}

export default App;
