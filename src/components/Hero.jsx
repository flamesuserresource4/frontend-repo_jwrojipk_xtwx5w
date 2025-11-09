import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#070711]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(120,119,198,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#070711]/20 to-[#070711]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
          Blazing-fast cloud • Zero-downtime • Any scale
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Futuristic Hosting for Visionary Builders
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Deploy dynamic apps to a global edge in seconds. 3D-powered control, intelligent scaling, and a silky-smooth developer experience.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm sm:text-base font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:scale-[1.02] transition">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm sm:text-base font-medium text-white/90 hover:bg-white/10 transition">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
