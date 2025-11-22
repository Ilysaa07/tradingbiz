import React, { useState } from "react";
import {
  MessageCircle,
  Heart,
  ArrowRight,
  Search,
  Zap,
  TrendingUp,
  MoreHorizontal,
  Flame,
  BookOpen,
  HelpCircle,
  Filter,
  Hash,
} from "lucide-react";

const Forum = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Helper: Warna Avatar (Tetap cerah agar kontras di dark mode)
  const getAvatarColor = (name) => {
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-amber-500",
      "bg-green-500",
      "bg-emerald-500",
      "bg-teal-500",
      "bg-cyan-500",
      "bg-blue-500",
      "bg-indigo-500",
      "bg-violet-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // Data: Featured Posts
  const featuredPosts = [
    {
      id: 101,
      tag: "Analisa Mentor",
      title: "Pekan Depan: Siap-siap Volatilitas NFP & FOMC",
      excerpt:
        "Data ekonomi AS minggu depan akan sangat krusial. Hindari open posisi di jam-jam berikut...",
      author: "Coach Raka",
      bgGradient: "from-blue-900 to-[#0f172a]", // Adjusted for dark theme
      border: "border-blue-500/30",
      likes: 245,
      comments: 56,
    },
    {
      id: 102,
      tag: "Edukasi",
      title: "Stop MC! Rumus Money Management 1% yang Wajib Tahu",
      excerpt:
        "Banyak yang jago analisa tapi hancur di mental. Ini cara hitung lot size biar tidur nyenyak.",
      author: "Sinta Pro",
      bgGradient: "from-slate-800 to-[#0f172a]",
      border: "border-slate-600",
      likes: 189,
      comments: 34,
    },
  ];

  // Data: Recent Discussions
  const discussions = [
    {
      id: 1,
      category: "Forex",
      title: "Ada yang hold XAUUSD dari 2020? Take profit di mana?",
      author: "Budi Santoso",
      role: "Member",
      replies: 23,
      likes: 5,
      time: "15m lalu",
      isHot: true,
    },
    {
      id: 2,
      category: "Crypto",
      title: "Bitcoin halving sudah dekat, altcoin apa yang potensial?",
      author: "Dani Kripto",
      role: "Member",
      replies: 12,
      likes: 8,
      time: "1j lalu",
      isHot: false,
    },
    {
      id: 3,
      category: "Curhat",
      title: "Habis loss besar karena serakah. Butuh motivasi bang...",
      author: "Rian Sad",
      role: "Newbie",
      replies: 45,
      likes: 120,
      time: "3j lalu",
      isHot: true,
    },
    {
      id: 4,
      category: "Teknikal",
      title: "Indikator RSI vs Stochastic, mana yang lebih akurat untuk H1?",
      author: "Sarah T.",
      role: "Pro Member",
      replies: 8,
      likes: 2,
      time: "5j lalu",
      isHot: false,
    },
  ];

  const categories = [
    { name: "All", icon: <Zap size={16} /> },
    { name: "Analisa", icon: <TrendingUp size={16} /> },
    { name: "Edukasi", icon: <BookOpen size={16} /> },
    { name: "Tanya Jawab", icon: <HelpCircle size={16} /> },
  ];

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden" id="forum">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Suara{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Komunitas
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Tempat berbagi ilmu, strategi, dan cerita perjalanan trading Anda.
            </p>
          </div>

          {/* Modern Search Bar (Dark Mode) */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3.5 border border-slate-700 rounded-xl leading-5 bg-[#1e293b] text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all shadow-lg"
              placeholder="Cari topik diskusi..."
            />
          </div>
        </div>

        {/* --- FEATURED GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className={`rounded-3xl p-8 relative overflow-hidden text-white shadow-2xl bg-gradient-to-br ${post.bgGradient} border ${post.border} group cursor-pointer hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Texture Overlay */}
              <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold mb-4 border border-white/10 text-cyan-300">
                    {post.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-cyan-200 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 text-sm line-clamp-2 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center font-bold text-sm shadow-lg ${getAvatarColor(
                        post.author
                      )}`}
                    >
                      {post.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">
                        {post.author}
                      </p>
                      <p className="text-[10px] text-cyan-300 uppercase tracking-wider font-bold">
                        Verified Mentor
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm font-medium text-slate-300">
                    <div className="flex items-center gap-1">
                      <Heart size={16} className="text-slate-400" />{" "}
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={16} className="text-slate-400" />{" "}
                      {post.comments}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MAIN CONTENT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT: NAVIGATION (Desktop) */}
          <div className="hidden lg:block space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 pl-2">
                Menu Forum
              </h4>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveFilter(cat.name)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeFilter === cat.name
                        ? "bg-gradient-to-r from-cyan-900/50 to-blue-900/50 text-cyan-400 border border-cyan-700/50 shadow-lg shadow-cyan-900/20"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white border border-transparent"
                    }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 pl-2">
                Trending Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {["#XAUUSD", "#Scalping", "#Psikologi", "#MC", "#News"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[#1e293b] border border-slate-700 text-slate-400 text-xs rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 cursor-pointer transition-all flex items-center gap-1"
                    >
                      <Hash size={10} />
                      {tag.replace("#", "")}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* CENTER: DISCUSSION FEED */}
          <div className="lg:col-span-3">
            {/* Mobile Category Tabs */}
            <div className="flex lg:hidden overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveFilter(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                    activeFilter === cat.name
                      ? "bg-cyan-600 text-white"
                      : "bg-[#1e293b] border border-slate-700 text-slate-400"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Header Feed */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Diskusi Terbaru</h3>
              <button className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white bg-[#1e293b] px-4 py-2 rounded-lg border border-slate-700 shadow-sm transition-all hover:border-slate-500">
                <Filter size={16} /> Filter
              </button>
            </div>

            {/* Post List Cards */}
            <div className="space-y-4">
              {discussions.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/50 shadow-lg hover:shadow-cyan-900/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex gap-5">
                    {/* AVATAR */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 ${getAvatarColor(
                          item.author
                        )}`}
                      >
                        {item.author.charAt(0).toUpperCase()}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-800 text-slate-400 rounded border border-slate-700">
                            {item.category}
                          </span>
                          <span className="text-xs text-slate-500">
                            • {item.time}
                          </span>
                        </div>
                        <MoreHorizontal
                          size={16}
                          className="text-slate-500 hover:text-white"
                        />
                      </div>

                      <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium text-slate-400">
                            {item.author}
                          </span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full border ${
                              item.role === "Pro Member"
                                ? "bg-cyan-900/20 text-cyan-400 border-cyan-500/30"
                                : "bg-slate-800 text-slate-500 border-slate-700"
                            }`}
                          >
                            {item.role}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-slate-500 text-sm">
                          {item.isHot && (
                            <span className="flex items-center gap-1 text-orange-400 font-bold text-[10px] bg-orange-400/10 px-2 py-0.5 rounded-full border border-orange-400/20">
                              <Flame size={12} /> Hot
                            </span>
                          )}
                          <div className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                            <MessageCircle size={16} /> {item.replies}
                          </div>
                          <div className="flex items-center gap-1 hover:text-red-400 transition-colors">
                            <Heart size={16} /> {item.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <button className="w-full mt-8 py-4 bg-[#1e293b] border border-slate-700 text-slate-400 font-bold rounded-xl hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all flex items-center justify-center gap-2 group">
              Muat Lebih Banyak
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
