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
  ShieldAlert,
} from "lucide-react";

const Footer = () => {
  // Fungsi untuk scroll halus ke section tertentu
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset sedikit agar tidak tertutup header sticky
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-24 pb-10 border-t border-slate-800 font-sans relative overflow-hidden">
      {/* Dekorasi Background Halus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- BAGIAN ATAS: Grid 4 Kolom --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Kolom 1: Identitas Brand */}
          <div className="space-y-6">
            <div
              className="flex items-center gap-3 text-white cursor-pointer group"
              onClick={(e) => scrollToSection(e, "hero")}
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2.5 rounded-xl shadow-lg shadow-cyan-900/20 group-hover:scale-105 transition-transform">
                <TrendingUp size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Trading<span className="text-cyan-400">Biz</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Platform komunitas trader #1 di Indonesia. Kami mengubah pemula
              menjadi profesional melalui edukasi terstruktur, data real-time,
              dan lingkungan yang suportif.
            </p>
            <div className="flex gap-3 pt-2">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>

          {/* Kolom 2: Navigasi Halaman */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
              Jelajahi
            </h3>
            <ul className="space-y-3 text-sm">
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
              <li className="flex items-start gap-3 text-slate-400 group">
                <MapPin
                  size={18}
                  className="text-cyan-500 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors"
                />
                <span className="group-hover:text-slate-200 transition-colors">
                  Menara Trading Lt. 12, Jend. Sudirman, Jakarta
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 group">
                <Mail
                  size={18}
                  className="text-cyan-500 flex-shrink-0 group-hover:text-white transition-colors"
                />
                <span className="group-hover:text-slate-200 transition-colors">
                  support@tradingbiz.id
                </span>
              </li>

              <div className="pt-2 space-y-2">
                <FooterLink
                  text="Kirim Pesan Support"
                  targetId="about"
                  onClick={scrollToSection}
                />
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-cyan-400 transition-all hover:translate-x-1 inline-block"
                  >
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-cyan-400 transition-all hover:translate-x-1 inline-block"
                  >
                    Kebijakan Privasi
                  </a>
                </li>
              </div>
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
                className="bg-[#1e293b] text-white border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all placeholder-slate-500 shadow-inner"
              />
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 text-sm group hover:-translate-y-0.5">
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
          <div className="max-w-3xl bg-[#1e293b]/50 p-4 rounded-xl border border-slate-800/50">
            <div className="flex gap-2 mb-1 justify-center md:justify-start">
              <ShieldAlert size={14} className="text-orange-500 mt-0.5" />
              <strong className="text-slate-300 text-xs uppercase tracking-wider">
                Peringatan Risiko
              </strong>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Trading Forex dan CFD melibatkan risiko signifikan terhadap modal
              yang Anda investasikan. Tingkat leverage yang tinggi dapat bekerja
              melawan Anda maupun untuk Anda. Harap baca dan pastikan Anda
              memahami sepenuhnya Pengungkapan Risiko kami sebelum bertransaksi.
            </p>
          </div>
          <div className="text-sm text-slate-500 font-medium whitespace-nowrap">
            &copy; {new Date().getFullYear()} TradingBiz Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

// Komponen Link Navigasi
const FooterLink = ({ text, targetId, onClick }) => (
  <li>
    <a
      href={`#${targetId}`}
      onClick={(e) => onClick(e, targetId)}
      className="text-slate-400 hover:text-cyan-400 transition-all hover:translate-x-1 inline-block cursor-pointer"
    >
      {text}
    </a>
  </li>
);

// Komponen Social Icon
const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="bg-[#1e293b] p-2.5 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-300 text-slate-400 hover:-translate-y-1 border border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30"
  >
    {icon}
  </a>
);

export default Footer;
