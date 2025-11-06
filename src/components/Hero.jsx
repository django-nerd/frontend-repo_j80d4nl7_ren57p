import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onPrimaryClick }) {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <div>
          <p className="tracking-wide uppercase text-sm font-medium text-slate-500">Pavan Teja • AI Agent Implementation</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
            Turn Conversations Into Conversions —
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600"> Without Losing Your Human Touch.</span>
          </h1>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
            I help coaches, e-commerce founders, and hotel owners scale client communication using AI Agents that talk, think, and care like you do.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center justify-center rounded-md bg-blue-700 text-white px-6 py-3 font-medium shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition"
            >
              See How It Works
            </button>
            <a href="#contact" className="text-blue-700 hover:text-blue-800 font-medium">Book a Free Demo</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-slate-500 text-sm">
            <div>+40% customer satisfaction</div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div>2x faster responses</div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div>Human-first by design</div>
          </div>
        </div>

        {/* Spline Scene */}
        <div className="relative h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] rounded-2xl bg-slate-50 ring-1 ring-slate-200/70">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* soft gradient overlay to blend edges, doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 via-transparent to-white/60" />
        </div>
      </div>
    </section>
  );
}
