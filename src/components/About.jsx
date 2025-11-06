import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square w-full max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100 p-1 ring-1 ring-slate-200">
            <div className="h-full w-full rounded-3xl bg-white flex items-center justify-center">
              {/* In a real project, replace with an actual portrait asset */}
              <User className="h-24 w-24 text-blue-700" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Bridging AI efficiency with authentic human connection</h2>
          <p className="mt-6 text-slate-600 leading-relaxed text-lg">
            I'm Pavan Teja. My mission is simple: help growing service businesses scale conversations without sacrificing warmth. I design AI Agents that mirror your tone, respect your brand, and support your clients like a thoughtful teammate.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Whether you're a coach booking sessions, an e‑commerce founder managing pre‑sales questions, or a hotel owner handling inquiries around the clock—I'll build an agent that listens, understands, and responds like you would.
          </p>
        </div>
      </div>
    </section>
  );
}
