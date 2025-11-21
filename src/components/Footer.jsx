import React from "react";
import {
  TrendingUp,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  // Fungsi untuk scroll halus ke section tertentu
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800 font-sans">
      <div className="container mx-auto px-6">
        {/* --- BAGIAN ATAS: Grid 4 Kolom --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Kolom 1: Identitas Brand */}
          <div className="space-y-6">
            <div
              className="flex items-center gap-2 text-white cursor-pointer"
              onClick={(e) => scrollToSection(e, "hero")}
            >
              <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-900/20">
                <TrendingUp size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Trading<span className="text-indigo-500">Biz</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Platform komunitas trader #1 di Indonesia. Kami mengubah pemula
              menjadi profesional melalui edukasi, data real-time, dan
              lingkungan yang suportif.
            </p>
            <div className="flex gap-3 pt-2">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>

          {/* Kolom 2: Navigasi Halaman (Sesuai App.jsx) */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Jelajahi</h3>
            <ul className="space-y-4 text-sm">
              <FooterLink
                text="Beranda & Intro"
                targetId="hero"
                onClick={scrollToSection}
              />
              <FooterLink
                text="Data Pasar Live"
                targetId="market"
                onClick={scrollToSection}
              />
              <FooterLink
                text="Keunggulan Kami"
                targetId="features"
                onClick={scrollToSection}
              />
              <FooterLink
                text="Forum Diskusi"
                targetId="forum"
                onClick={scrollToSection}
              />
              <FooterLink
                text="Tentang Kami"
                targetId="about"
                onClick={scrollToSection}
              />
            </ul>
          </div>

          {/* Kolom 3: Kontak & Bantuan */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Bantuan</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin
                  size={18}
                  className="text-indigo-500 mt-0.5 flex-shrink-0"
                />
                <span>Menara Trading Lt. 12, Jend. Sudirman, Jakarta</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-indigo-500 flex-shrink-0" />
                <span>support@tradingbiz.id</span>
              </li>
              {/* Link ke Contact Form */}
              <FooterLink
                text="Kirim Pesan / Support"
                targetId="about"
                onClick={scrollToSection}
              />
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Market Update</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Dapatkan sinyal trading harian dan rekap berita ekonomi langsung
              ke inbox Anda.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="bg-slate-800/50 text-white border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-indigo-900/20 flex items-center justify-center gap-2 text-sm group">
                Langganan Gratis
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>

        {/* --- GARIS PEMBATAS --- */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* --- BAGIAN BAWAH --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <p className="text-[11px] text-slate-600 leading-relaxed">
              <strong className="text-slate-500">Peringatan Risiko:</strong>{" "}
              Trading Forex dan CFD melibatkan risiko signifikan terhadap modal
              yang Anda investasikan. Harap baca dan pastikan Anda memahami
              sepenuhnya Pengungkapan Risiko kami sebelum bertransaksi.
            </p>
          </div>
          <div className="text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} TradingBiz Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

// Komponen Link Navigasi dengan Scroll
const FooterLink = ({ text, targetId, onClick }) => (
  <li>
    <a
      href={`#${targetId}`}
      onClick={(e) => onClick(e, targetId)}
      className="text-slate-400 hover:text-indigo-400 transition-all hover:translate-x-1 inline-block cursor-pointer"
    >
      {text}
    </a>
  </li>
);

// Komponen Social Icon
const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="bg-slate-800 p-2.5 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 text-slate-400 hover:-translate-y-1 border border-slate-700 hover:border-indigo-500"
  >
    {icon}
  </a>
);

export default Footer;
