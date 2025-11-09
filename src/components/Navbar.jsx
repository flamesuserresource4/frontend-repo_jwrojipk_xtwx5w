import { Rocket, Shield, User, Globe } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400" />
            <span className="text-white font-semibold tracking-wide">NebulaHost</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
            <a href="#global" className="text-white/80 hover:text-white transition">Global</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm">
              <User className="h-4 w-4" />
              Sign in
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-400/20 transition">
              <Rocket className="h-4 w-4" />
              Launch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
