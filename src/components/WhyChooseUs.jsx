import React from "react";
import {
  ShieldCheck,
  PlayCircle,
  TrendingUp,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="features">
      <div className="container mx-auto px-6">
        {/* HEADLINE: Fokus pada Empati & Solusi */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-full mb-4 uppercase tracking-wider">
              Values & Trust
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Lebih Dari Sekadar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
                Platform Trading.
              </span>
            </h2>
          </div>
          <p className="text-slate-600 text-lg max-w-md leading-relaxed text-right md:text-left">
            Kami membangun ekosistem di mana keamanan dana dan pertumbuhan skill
            Anda adalah prioritas nomor satu.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1: SECURITY (Besar & Utama) - Menekankan Rasa Aman */}
          <div className="md:col-span-2 bg-slate-50 rounded-[2rem] p-8 border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck size={120} className="text-indigo-600" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 text-indigo-600">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  100% Aman & Tergulasi
                </h3>
                <p className="text-slate-600 max-w-md">
                  Kami hanya bermitra dengan broker yang memiliki lisensi resmi
                  Bappebti. Dana Anda disimpan di rekening terpisah (Segregated
                  Account).
                </p>
              </div>
              {/* Visual Trust Badge */}
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200 inline-flex items-center gap-4 max-w-fit">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-bold uppercase">
                    Official Partner
                  </span>
                  <span className="font-bold text-slate-800">
                    Bappebti & JFX
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-slate-300"></div>
                <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                  <ShieldCheck size={16} /> Verified
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: EDUCATION (Visual Video) - Menekankan Kemudahan Belajar */}
          <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4">
                  <PlayCircle size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Akademi Gratis</h3>
                <p className="text-slate-300 text-sm">
                  Akses 50+ jam materi video premium tanpa biaya.
                </p>
              </div>

              {/* Mockup Video Player Kecil */}
              <div className="mt-6 bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10 flex items-center gap-3 cursor-pointer hover:bg-white/20 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <PlayCircle size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-indigo-200 font-medium">
                    Sedang ditonton
                  </p>
                  <p className="text-sm font-bold">Strategi Scalping M15</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: SIGNAL (Profit Oriented) - Menekankan Hasil */}
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 text-indigo-600">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Sinyal Akurat
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Analisa teknikal harian dengan tingkat akurasi tinggi.
            </p>

            {/* Visual Chart Mini */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-500">
                  Win Rate (Bulan Ini)
                </span>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                  +12.4%
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[78%] rounded-full"></div>
              </div>
              <p className="text-right text-xs font-bold text-indigo-600 mt-1">
                78% Profitable
              </p>
            </div>
          </div>

          {/* CARD 4: COMMUNITY (Human Element) - Menekankan Kebersamaan */}
          <div className="md:col-span-2 bg-indigo-600 rounded-[2rem] p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            {/* Dekorasi Circle */}
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 text-white">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Komunitas Anti-Toxic
                </h3>
                <p className="text-indigo-100 mb-6">
                  Bergabunglah dengan ribuan trader yang saling mendukung. Tidak
                  ada pertanyaan "bodoh" di sini.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 20}`}
                        alt="Member"
                        className="w-10 h-10 rounded-full border-2 border-indigo-600"
                      />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center text-xs font-bold border-2 border-indigo-600">
                      +2k
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    <p className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      4.9/5 Rating
                    </p>
                    <p className="text-indigo-200 text-xs">dari member aktif</p>
                  </div>
                </div>
              </div>

              {/* Chat Bubble Visual - Menambah kesan "Human" */}
              <div className="bg-white text-slate-800 p-4 rounded-t-2xl rounded-bl-2xl rounded-br-sm shadow-lg max-w-xs transform md:rotate-2 group-hover:rotate-0 transition-transform">
                <div className="flex items-start gap-3">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-xs font-bold text-slate-500 mb-1">
                      Dhani, Surabaya
                    </p>
                    <p className="text-sm font-medium leading-snug">
                      "Baru seminggu gabung udah ngerti cara baca candlestick.
                      Mentornya sabar banget!"
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
