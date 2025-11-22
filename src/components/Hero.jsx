import React from "react";
import {
  Star,
  CheckCircle,
  PlayCircle,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

// Gambar diganti dengan nuansa yang lebih gelap/serius atau tetap human tapi lighting bagus
const heroimg =
  "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&w=800&q=80";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] pt-34 pb-24">
      {/* --- 1. BACKGROUND DECORATION (Grid Pattern) --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hero-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0H20L0 20M40 40V20L20 40"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Ambient Glow (Pengganti Blob) */}
      <div className="absolute top-0 right-0 -translate-y-20 translate-x-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-20 -translate-x-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- BAGIAN KIRI: Konten Teks --- */}
          <div className="text-left space-y-8">
            {/* Social Proof Badge (Dark Mode Style) */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 animate-fade-in-up">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-slate-800 object-cover"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt={`Member ${i}`}
                  />
                ))}
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xs font-bold text-white">
                  5.000+ Trader
                </span>
                <span className="text-[10px] text-slate-400">
                  Telah bergabung di grup VIP
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
              Trading Tidak Harus <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 relative">
                Bikin Pusing.
                {/* Underline SVG */}
                <svg
                  className="absolute w-full h-3 -bottom-2 left-0 text-blue-500 opacity-60"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 15 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl border-l-4 border-slate-700 pl-6">
              Stop menebak arah pasar. Bergabunglah dengan komunitas yang
              menggunakan <strong>logika & data</strong>, bukan emosi. Belajar
              dari nol sampai profit konsisten.
            </p>

            {/* Checklist */}
            <div className="grid gap-3">
              {[
                "Signal Harian Akurasi 80%+",
                "Live Trading bareng Mentor (Zoom)",
                "Full Modul: Basic to Pro",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-slate-300 font-medium"
                >
                  <div className="p-1 rounded-full bg-green-500/20 text-green-400">
                    <CheckCircle size={18} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                Mulai Sekarang Gratis
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="group px-8 py-4 rounded-full font-semibold text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-3">
                <PlayCircle
                  size={22}
                  className="text-cyan-400 group-hover:scale-110 transition-transform"
                />
                Lihat Hasil Member
              </button>
            </div>
          </div>

          {/* --- BAGIAN KANAN: Visual & Floating Cards --- */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-[500px]">
            {/* Floating Card 1: Signal Profit (Atas Kiri) */}
            <div className="absolute -left-4 sm:-left-12 top-8 z-30 bg-[#1e293b] p-4 rounded-xl shadow-2xl border border-slate-700 animate-bounce-slow w-48">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-400">
                  XAUUSD (Gold)
                </span>
                <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                  BUY
                </span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-white">+$450</span>
                <span className="text-xs text-green-400 mb-1">TP Hit ✅</span>
              </div>
            </div>

            {/* Floating Card 2: Trust (Bawah Kanan) */}
            <div className="absolute -right-4 sm:-right-8 bottom-12 z-30 bg-[#1e293b]/90 backdrop-blur p-4 rounded-xl shadow-2xl border border-slate-700 animate-pulse-slow">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Broker Terverifikasi
                  </p>
                  <p className="text-xs text-slate-400">
                    Dana member aman 100%
                  </p>
                </div>
              </div>
            </div>

            {/* Main Image Frame */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-cyan-500/10 border-4 border-slate-800 bg-slate-800 h-[550px] group">
              {/* Image Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 opacity-80"></div>

              <img
                src={heroimg}
                alt="Trading Chart Analysis"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
              />

              {/* Chart Overlay di dalam gambar (Bawah) */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="text-green-400" size={20} />
                    <span className="text-sm font-semibold text-white">
                      Analisa Market Hari Ini
                    </span>
                  </div>
                  {/* Mockup Grafik Batang Sederhana */}
                  <div className="flex items-end gap-2 h-12">
                    <div className="w-1/5 h-1/3 bg-slate-700 rounded-t"></div>
                    <div className="w-1/5 h-2/3 bg-slate-600 rounded-t"></div>
                    <div className="w-1/5 h-1/2 bg-slate-700 rounded-t"></div>
                    <div className="w-1/5 h-full bg-gradient-to-t from-green-600 to-green-400 rounded-t"></div>
                    <div className="w-1/5 h-4/5 bg-slate-600 rounded-t"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow di belakang gambar */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] z-[-1] opacity-20 blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
