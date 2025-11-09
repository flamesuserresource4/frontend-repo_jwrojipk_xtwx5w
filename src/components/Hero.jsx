import React from 'react';
import { ArrowRight, Rocket, ShieldCheck, Globe2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative isolate mt-28 min-h-[70vh] overflow-hidden">
      {/* Lightweight visual background (SVG grid + gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
            <radialGradient id="softGlow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#e879f9" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05" />
            </radialGradient>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          <rect width="100" height="100" fill="url(#softGlow)" />
        </svg>
        <div className="absolute -top-24 right-[-10%] h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-fuchsia-300" />
          Next‑gen Cloud Hosting
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Lightning‑fast, cyberpunk‑styled infrastructure
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Deploy globally in seconds. Auto‑scale, secure by default, fully observable. Built for teams that ship at lightspeed.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(217,70,239,0.35)]">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/90 hover:bg-white/10">
            Explore Features
          </a>
        </div>

        {/* Mini highlights row */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 text-left text-sm text-white/70 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <ShieldCheck className="h-4 w-4 text-emerald-300" />
            Enterprise‑grade security
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <Globe2 className="h-4 w-4 text-cyan-300" />
            Global edge network
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <Rocket className="h-4 w-4 text-fuchsia-300" />
            60s deploys
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
