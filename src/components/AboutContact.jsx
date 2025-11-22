import React from "react";
import { MapPin, Mail, Clock, Send, Globe, Info } from "lucide-react";

const AboutContact = () => {
  return (
    <section
      className="py-24 bg-[#0f172a] text-white overflow-hidden relative"
      id="about"
    >
      {/* --- BACKGROUND DECORATION --- */}
      {/* Grid Pattern Halus (Opacity dikurangi agar tidak ramai) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/20 rounded-full blur-[100px] opacity-40 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- KIRI: STORY & MISSION --- */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-900/30 backdrop-blur-md rounded-full text-cyan-400 font-bold text-xs mb-8 border border-blue-500/30 uppercase tracking-wider">
              <Globe size={14} />
              <span>Our Story & Vision</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Misi Kami: Mencetak <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Trader Mandiri
              </span>
            </h2>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
              <p>
                TradingBiz didirikan pada tahun 2020 dengan satu tujuan
                sederhana:
                <span className="text-white font-semibold mx-1">
                  Menghapus stigma
                </span>
                bahwa trading itu "judi" atau "penipuan".
              </p>
              <p>
                Kami percaya dengan edukasi yang tepat, disiplin psikologi, dan
                manajemen risiko, siapapun bisa meraih kebebasan finansial dari
                pasar global. Kami di sini untuk memandu Anda, bukan menyesatkan
                Anda.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1">
                <h4 className="text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  15K+
                </h4>
                <p className="text-slate-400 text-sm">Member Aktif</p>
              </div>
              <div className="p-6 bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1">
                <h4 className="text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  4.8/5
                </h4>
                <p className="text-slate-400 text-sm">Rating Komunitas</p>
              </div>
            </div>
          </div>

          {/* --- KANAN: CONTACT CARD (Dark Mode) --- */}
          <div className="bg-[#1e293b] text-slate-200 rounded-[2rem] p-8 lg:p-10 shadow-2xl shadow-black/50 border border-slate-700/50 relative">
            {/* Decoration Border Glow */}
            <div className="absolute inset-0 rounded-[2rem] border border-cyan-500/10 pointer-events-none"></div>

            {/* Header Contact */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white">Hubungi Kami</h3>
                <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
                  <Info size={14} className="text-cyan-400" />
                  Respon cepat (Maks 15 menit)
                </p>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 25}`}
                    alt="Support"
                    className="w-10 h-10 rounded-full border-2 border-[#1e293b]"
                  />
                ))}
              </div>
            </div>

            {/* Contact Info List (Clickable) */}
            <div className="space-y-4 mb-8">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700 transition-all group"
              >
                <div className="bg-slate-800 p-2.5 rounded-lg text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors border border-slate-700">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Markas Pusat</p>
                  <p className="text-slate-400 text-sm">
                    Menara Trading Lt. 12, Sudirman, Jakarta
                  </p>
                </div>
              </a>

              <a
                href="mailto:support@tradingbiz.id"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700 transition-all group"
              >
                <div className="bg-slate-800 p-2.5 rounded-lg text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors border border-slate-700">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Email Support</p>
                  <p className="text-slate-400 text-sm">
                    support@tradingbiz.id
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700 transition-all group">
                <div className="bg-slate-800 p-2.5 rounded-lg text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors border border-slate-700">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">
                    Jam Operasional
                  </p>
                  <p className="text-slate-400 text-sm">
                    Senin - Jumat, 09:00 - 17:00 WIB
                  </p>
                </div>
              </div>
            </div>

            {/* Form (Dark Inputs) */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 ml-1">
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none transition-all text-sm shadow-inner"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1.5 ml-1">
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none transition-all text-sm shadow-inner"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 ml-1">
                  Pesan Anda
                </label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none transition-all text-sm resize-none shadow-inner"
                  placeholder="Halo, saya ingin bertanya tentang..."
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50 transform hover:-translate-y-0.5">
                Kirim Pesan <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
