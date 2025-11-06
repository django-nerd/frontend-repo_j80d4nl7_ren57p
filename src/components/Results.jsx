import React from 'react';
import { Star, Timer, Shield } from 'lucide-react';

const cards = [
  { icon: Star, stat: '+40%', label: 'Client Satisfaction' },
  { icon: Timer, stat: '2x', label: 'Faster Response Time' },
  { icon: Shield, stat: '24/7', label: 'Lead Handling Without Burnout' },
];

export default function Results() {
  return (
    <section id="results" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">The Results Speak for Themselves</h2>
        <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
          Implementations focus on measurable outcomes—happier clients, faster replies, and more qualified conversations.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, stat, label }, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-blue-700 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-4">
                <div className="text-3xl font-semibold text-slate-900">{stat}</div>
                <div className="text-slate-600 mt-1">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
