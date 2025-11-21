import React from "react";
import { Star, CheckCircle, PlayCircle, ArrowRight } from "lucide-react";

// Menggunakan URL gambar online untuk menghindari error import file lokal
const heroimg =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const Hero = () => {
  return (
    <section className="bg-slate-50 relative overflow-hidden">
      {/* Elemen Dekorasi Latar Belakang (Blob Halus) */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* BAGIAN KIRI: Konten Teks (Human & Empathetic) */}
          <div className="text-left space-y-8">
            {/* Trust Badge Kecil dengan Foto Profil Berbeda */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
              <div className="flex -space-x-2">
                {/* Loop untuk menampilkan 3 foto berbeda */}
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    // Menggunakan index (i) + 10 agar mendapatkan ID gambar yang unik dari API pravatar
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt={`Member ${i}`}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-600 pl-1">
                Bergabung dengan 5.000+ Teman Trader
              </span>
            </div>

            {/* Headline yang Mengundang, Bukan Meneriaki */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Trading Tidak Harus <br />
              <span className="text-indigo-600 relative">
                Bikin Pusing.
                {/* Garis bawah dekoratif (kesan tulisan tangan) */}
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-amber-400 opacity-80"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Temukan komunitas yang suportif. Diskusikan strategi dengan
              santai, belajar dari mentor yang peduli, dan hindari kesalahan
              pemula bersama kami.
            </p>

            {/* Checklist Keuntungan (Mengurangi Kecemasan User) */}
            <div className="flex flex-col gap-3">
              {[
                "Bebas biaya pendaftaran (Gratis)",
                "Diskusi santai & ramah pemula",
                "Live session mingguan via Zoom",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle
                    className="text-green-500 flex-shrink-0"
                    size={20}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Mulai Gabung Gratis
                <ArrowRight size={18} />
              </button>

              <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-semibold transition-colors flex items-center justify-center gap-2 group">
                <PlayCircle
                  size={20}
                  className="text-indigo-600 group-hover:scale-110 transition-transform"
                />
                Tonton Video Intro
              </button>
            </div>
          </div>

          {/* BAGIAN KANAN: Gambar Visual (Human Connection) */}
          <div className="relative">
            {/* Card Dekoratif Floating (Testimonial) */}
            <div className="absolute -left-8 top-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] animate-bounce-slow hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xs">
                  R
                </div>
                <div className="text-xs font-bold text-slate-800">
                  Rian, Jakarta
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-snug">
                "Akhirnya nemu grup yang gak toxic. Thanks banget ilmunya!"
              </p>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={10}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
            </div>

            {/* Main Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-200 h-[500px]">
              <img
                src={heroimg}
                alt="Komunitas Trader Bahagia"
                className="w-full h-full object-cover hover:scale-105 transition-duration-700"
              />

              {/* Overlay Gradient Halus di bawah gambar */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-semibold">Live Analysis Session</p>
                  <p className="text-sm opacity-80">Setiap Rabu, 20:00 WIB</p>
                </div>
              </div>
            </div>

            {/* Dekorasi Dot Pattern */}
            <div className="absolute -bottom-6 -right-6 -z-10">
              <svg width="100" height="100" fill="none">
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    className="text-indigo-200 fill-current"
                  />
                </pattern>
                <rect width="100" height="100" fill="url(#dots)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
