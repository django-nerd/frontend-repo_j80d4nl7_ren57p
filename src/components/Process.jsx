import React from 'react';
import { Search, Bot, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Analyze your current client workflow',
    desc: 'We map your conversations, channels, and outcomes to uncover high-impact opportunities for automation.'
  },
  {
    icon: Bot,
    title: 'Build your AI Agent',
    desc: 'We craft an agent trained on your brand voice, FAQs, and playbooks—ready to talk, think, and care like you do.'
  },
  {
    icon: Rocket,
    title: 'Launch and optimize for conversions',
    desc: 'Deploy across web, chat, and email. Then iterate using real data to boost satisfaction and capture more qualified leads.'
  }
];

export default function Process() {
  return (
    <section id="how" className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-slate-900">How It Works</h2>
        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          A clear, human-first process that respects your time and your clients.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-blue-700 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
