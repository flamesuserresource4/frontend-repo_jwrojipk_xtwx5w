export default function Footer() {
  return (
    <footer className="bg-[#0A0A14] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} NebulaHost. All rights reserved.</p>
        <div className="flex items-center gap-6 text-white/70 text-sm">
          <a href="#" className="hover:text-white transition">Status</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}
