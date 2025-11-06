import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="rounded-3xl bg-white/80 backdrop-blur border border-slate-200 p-8 md:p-12 shadow">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Your Time Is Precious. Let AI Handle the Busywork.</h2>
          <p className="mt-4 text-slate-600 max-w-2xl">Schedule a free 20‑minute walkthrough to see how an AI Agent can boost satisfaction and surface more qualified leads—without losing your voice.</p>
          <div className="mt-8">
            <a href="mailto:pavanteja@example.com" className="inline-flex items-center justify-center rounded-md bg-blue-700 text-white px-6 py-3 font-medium shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition">Book a Free Demo</a>
          </div>
          <div className="mt-4 text-sm text-slate-500">Prefer socials? Find me on <a className="text-blue-700 hover:underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a> or <a className="text-blue-700 hover:underline" href="https://x.com" target="_blank" rel="noreferrer">X</a>.</div>
        </div>
      </div>
    </section>
  );
}
