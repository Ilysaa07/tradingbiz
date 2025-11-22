import React from "react";
import {
  ShieldCheck,
  PlayCircle,
  TrendingUp,
  MessageCircle,
  Star,
  Users,
  Lock,
  Zap,
} from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section
      className="py-24 bg-[#0f172a] relative overflow-hidden"
      id="features"
    >
      {/* Background Glow Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADLINE */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 font-bold text-xs rounded-full mb-6 uppercase tracking-wider">
              <ShieldCheck size={14} />
              Values & Trust
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Lebih Dari Sekadar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Platform Trading.
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-md leading-relaxed text-right md:text-left border-l-4 border-slate-700 pl-6">
            Kami membangun ekosistem di mana keamanan dana dan pertumbuhan skill
            Anda adalah prioritas nomor satu.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1: SECURITY (Utama) */}
          <div className="md:col-span-2 bg-[#1e293b] rounded-[2rem] p-8 border border-slate-700 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
            {/* Background Icon Decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Lock size={150} className="text-cyan-400" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="mb-8">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner border border-slate-700 mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  100% Aman & Tergulasi
                </h3>
                <p className="text-slate-400 max-w-md leading-relaxed">
                  Kami hanya bermitra dengan broker yang memiliki lisensi resmi
                  <span className="text-white font-semibold"> Bappebti</span>.
                  Dana Anda disimpan di rekening terpisah (Segregated Account)
                  untuk keamanan maksimal.
                </p>
              </div>

              {/* Visual Trust Badge (Glassmorphism) */}
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 inline-flex items-center gap-5 max-w-fit hover:bg-white/10 transition-colors">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Official Partner
                  </span>
                  <span className="font-bold text-white text-lg">
                    Bappebti & JFX
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-slate-600"></div>
                <div className="flex items-center gap-2 text-green-400 font-bold text-sm bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                  <ShieldCheck size={16} /> Verified
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: EDUCATION (Video) */}
          <div className="bg-gradient-to-br from-slate-900 to-[#1e293b] rounded-[2rem] p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-slate-700">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-50"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10 text-cyan-300">
                  <PlayCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Akademi Gratis</h3>
                <p className="text-slate-300 text-sm">
                  Akses 50+ jam materi video premium. Dari pemula hingga expert.
                </p>
              </div>

              {/* Mockup Video Player Kecil */}
              <div className="mt-6 bg-black/40 rounded-xl p-3 backdrop-blur-sm border border-white/10 flex items-center gap-3 cursor-pointer hover:bg-black/60 transition-colors group-hover:translate-x-1">
                <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/40">
                  <PlayCircle size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] text-cyan-300 font-medium uppercase tracking-wider">
                    Now Playing
                  </p>
                  <p className="text-sm font-bold text-white">
                    Strategi Scalping M15
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: SIGNAL (Profit Visual) */}
          <div className="bg-[#1e293b] rounded-[2rem] p-8 border border-slate-700 shadow-sm hover:shadow-xl hover:border-green-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 text-green-400 border border-green-500/20">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sinyal Akurat</h3>
            <p className="text-slate-400 text-sm mb-6">
              Analisa teknikal harian dengan tingkat akurasi yang teruji data.
            </p>

            {/* Visual Chart Mini (Dark Mode) */}
            <div className="bg-[#0f172a] rounded-xl p-4 border border-slate-700 group-hover:border-green-500/30 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-slate-400">
                  Win Rate (Bulan Ini)
                </span>
                <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">
                  +12.4%
                </span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-400 h-full w-[78%] rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              </div>
              <p className="text-right text-xs font-bold text-green-400 mt-2">
                78% Profitable
              </p>
            </div>
          </div>

          {/* CARD 4: COMMUNITY (Full Width) */}
          <div className="md:col-span-2 bg-gradient-to-r from-blue-900 to-[#0f172a] rounded-[2rem] p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-blue-800/50">
            {/* Dekorasi */}
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-cyan-300 border border-white/10">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Komunitas Anti-Toxic
                </h3>
                <p className="text-blue-100 mb-6 text-sm leading-relaxed max-w-sm">
                  Bergabunglah dengan ribuan trader yang saling mendukung. Tidak
                  ada pertanyaan "bodoh" di sini. Kita profit bersama.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 25}`}
                        alt="Member"
                        className="w-10 h-10 rounded-full border-2 border-[#0f172a]"
                      />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-[#1e293b] text-cyan-400 flex items-center justify-center text-xs font-bold border-2 border-cyan-500/30">
                      +2k
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    <p className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-yellow-500 text-yellow-500"
                      />
                      4.9/5 Rating
                    </p>
                    <p className="text-blue-200 text-xs">dari member aktif</p>
                  </div>
                </div>
              </div>

              {/* Chat Bubble Visual (Dark Glassmorphism) */}
              <div className="bg-[#1e293b]/90 backdrop-blur-md border border-slate-600 p-5 rounded-t-2xl rounded-bl-2xl rounded-br-sm shadow-xl max-w-xs transform md:rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <div className="flex items-start gap-3">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="User"
                    className="w-10 h-10 rounded-full border border-slate-500"
                  />
                  <div>
                    <p className="text-xs font-bold text-cyan-400 mb-1 flex items-center gap-1">
                      Dhani, Surabaya{" "}
                      <span className="text-slate-500 font-normal">
                        • 2m ago
                      </span>
                    </p>
                    <p className="text-sm text-slate-200 font-medium leading-snug">
                      "Baru seminggu gabung udah ngerti cara baca candlestick.
                      Mentornya sabar banget, gila!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
