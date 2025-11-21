import React from "react";
import { MapPin, Mail, Phone, Send, Globe, Clock } from "lucide-react";

const AboutContact = () => {
  return (
    <section
      className="py-24 bg-slate-900 text-white overflow-hidden relative"
      id="about"
    >
      {/* --- BACKGROUND DECORATION --- */}
      {/* Grid Pattern Halus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600 rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- KIRI: STORY & MISSION --- */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-900/30 backdrop-blur-md rounded-full text-indigo-300 font-semibold text-sm mb-8 border border-indigo-500/30">
              <Globe size={16} />
              <span>Our Story & Vision</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Misi Kami: Mencetak <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                Trader Mandiri
              </span>
            </h2>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-10">
              <p>
                TradingBiz didirikan pada tahun 2020 dengan satu tujuan
                sederhana:
                <span className="text-white font-semibold">
                  {" "}
                  Menghapus stigma
                </span>{" "}
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
              <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-colors group">
                <h4 className="text-4xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                  15K+
                </h4>
                <p className="text-slate-400 text-sm">Member Aktif</p>
              </div>
              <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-colors group">
                <h4 className="text-4xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                  4.8/5
                </h4>
                <p className="text-slate-400 text-sm">Rating Komunitas</p>
              </div>
            </div>
          </div>

          {/* --- KANAN: CONTACT CARD --- */}
          <div className="bg-white text-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-black/20 border border-slate-100 relative">
            {/* Human Touch: Support Avatar */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Hubungi Kami
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Tim support kami akan membalas dalam 5 menit.
                </p>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 25}`}
                    alt="Support"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>

            {/* Contact Info List (Clickable) */}
            <div className="space-y-5 mb-8">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="bg-indigo-50 p-2.5 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">
                    Markas Pusat
                  </p>
                  <p className="text-slate-600 text-sm">
                    Menara Trading Lt. 12, Sudirman, Jakarta
                  </p>
                </div>
              </a>

              <a
                href="mailto:support@tradingbiz.id"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="bg-indigo-50 p-2.5 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">
                    Email Support
                  </p>
                  <p className="text-slate-600 text-sm">
                    support@tradingbiz.id
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                <div className="bg-indigo-50 p-2.5 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">
                    Jam Operasional
                  </p>
                  <p className="text-slate-600 text-sm">
                    Senin - Jumat, 09:00 - 17:00 WIB
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Pesan Anda
                </label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-sm resize-none"
                  placeholder="Halo, saya ingin bertanya tentang..."
                ></textarea>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-200">
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
