import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 text-sm">© {new Date().getFullYear()} Pavan Teja. All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm">
          <a href="mailto:pavanteja@example.com" className="text-slate-600 hover:text-slate-900">Contact</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">LinkedIn</a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">X</a>
        </div>
      </div>
    </footer>
  );
}
