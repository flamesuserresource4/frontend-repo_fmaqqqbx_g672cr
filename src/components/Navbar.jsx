import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 shadow-md" />
            <span className="text-xl font-semibold tracking-tight text-slate-900">Fluxlane</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-600 hover:text-slate-900 text-sm">Sign in</a>
            <a
              href="#cta"
              className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800"
            >
              Get Started
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700"
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-4 text-sm text-slate-700">
            <a href="#features" className="block">Features</a>
            <a href="#how-it-works" className="block">How it works</a>
            <a href="#pricing" className="block">Pricing</a>
            <a href="#cta" className="block font-medium text-slate-900">Get Started</a>
          </div>
        )}
      </nav>
    </header>
  );
}
