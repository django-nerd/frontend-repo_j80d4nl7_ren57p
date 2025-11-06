import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onPrimaryClick }) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b1020] via-[#0c0f1a] to-white">
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <div>
          <p className="tracking-wide uppercase text-sm font-medium text-slate-400">Pavan Teja • AI Agent Implementation</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Turn Conversations Into Conversions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300"> With Futuristic AI Agents.</span>
          </h1>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed max-w-xl">
            Human-first communication, automated. Launch voice and chat agents that feel personal—and scale effortlessly.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center justify-center rounded-md bg-violet-600 text-white px-6 py-3 font-medium shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#0c0f1a] transition"
            >
              See How It Works
            </button>
            <a href="#contact" className="text-cyan-300 hover:text-cyan-200 font-medium">Book a Free Demo</a>
          </div>

          {/* Infographic style KPI chips */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            {[
              { label: '+40% Client Satisfaction' },
              { label: '2x Faster Responses' },
              { label: '24/7 Lead Handling' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                className="rounded-full bg-white/10 text-slate-200 backdrop-blur px-4 py-2 ring-1 ring-white/15"
              >
                {item.label}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spline Scene */}
        <div className="relative h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] rounded-2xl ring-1 ring-white/15 bg-gradient-to-b from-white/5 to-white/0">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/10 to-cyan-400/20 blur-2xl" aria-hidden />
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* gradient veil to blend edges; doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-white/70" />
        </div>
      </div>
    </section>
  );
}
