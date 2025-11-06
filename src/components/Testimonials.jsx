import React from 'react';

const TESTIMONIALS = [
  {
    quote:
      "We went from inbox chaos to clarity. Bookings increased and I finally have my evenings back.",
    author: 'Maya R., Executive Coach',
  },
  {
    quote:
      "Pre‑sales questions now get handled instantly with the same warmth our brand is known for.",
    author: 'Daniel K., E‑commerce Founder',
  },
  {
    quote:
      "Guests receive thoughtful replies at any hour. Our team focuses on hospitality again, not triage.",
    author: 'Sofia L., Boutique Hotel Owner',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">Real Stories, Real Time Saved</h2>
        <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
          From coaches to hotels, leaders are reclaiming hours while improving client experience.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-600">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
