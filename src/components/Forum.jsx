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
} from "lucide-react";

const Forum = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Helper: Mendapatkan warna konsisten berdasarkan nama
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
      "bg-fuchsia-500",
      "bg-pink-500",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // Data: Featured Posts (Topik Hangat/Penting)
  const featuredPosts = [
    {
      id: 101,
      tag: "Analisa Mentor",
      title: "Pekan Depan: Siap-siap Volatilitas NFP & FOMC",
      excerpt:
        "Data ekonomi AS minggu depan akan sangat krusial. Hindari open posisi di jam-jam berikut...",
      author: "Coach Raka",
      bgGradient: "from-indigo-600 to-blue-700",
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
      bgGradient: "from-slate-800 to-slate-900",
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
    <section className="py-20 bg-slate-50" id="forum">
      <div className="container mx-auto px-6">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Suara <span className="text-indigo-600">Komunitas</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Tempat berbagi ilmu, strategi, dan cerita perjalanan trading Anda.
            </p>
          </div>

          {/* Modern Search Bar */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm"
              placeholder="Cari topik diskusi..."
            />
          </div>
        </div>

        {/* --- FEATURED GRID (MAGAZINE STYLE) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className={`rounded-3xl p-8 relative overflow-hidden text-white shadow-xl bg-gradient-to-br ${post.bgGradient} group cursor-pointer hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Decorative Circle */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-4 border border-white/10">
                    {post.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-indigo-100 text-sm line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3">
                    {/* AVATAR INISIAL HURUF */}
                    <div
                      className={`w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center font-bold text-sm shadow-md ${getAvatarColor(
                        post.author
                      )}`}
                    >
                      {post.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{post.author}</p>
                      <p className="text-xs text-indigo-200">Verified Mentor</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm font-medium">
                    <div className="flex items-center gap-1">
                      <Heart size={16} className="fill-white/20" /> {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={16} /> {post.comments}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MAIN CONTENT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* LEFT: NAVIGATION (Desktop) */}
          <div className="hidden lg:block space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Menu Forum
            </h4>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveFilter(cat.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeFilter === cat.name
                    ? "bg-indigo-50 text-indigo-600 shadow-sm ring-1 ring-indigo-200"
                    : "text-slate-600 hover:bg-white hover:shadow-sm"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}

            <div className="pt-8">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Trending Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {["#XAUUSD", "#Scalping", "#Psikologi", "#MC", "#News"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-slate-100 text-slate-500 text-xs rounded-lg hover:border-indigo-300 hover:text-indigo-600 cursor-pointer transition-colors"
                    >
                      {tag}
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
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap ${
                    activeFilter === cat.name
                      ? "bg-indigo-600 text-white"
                      : "bg-white border border-slate-200 text-slate-600"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Header Feed */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Diskusi Terbaru
              </h3>
              <button className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm transition-all hover:shadow-md">
                <Filter size={16} /> Filter
              </button>
            </div>

            {/* Post List Cards */}
            <div className="space-y-4">
              {discussions.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex gap-5">
                    {/* AVATAR INISIAL HURUF */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-110 transition-transform duration-300 ${getAvatarColor(
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
                          <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                            {item.category}
                          </span>
                          <span className="text-xs text-slate-400">
                            • {item.time}
                          </span>
                        </div>
                        <MoreHorizontal
                          size={16}
                          className="text-slate-300 hover:text-slate-600"
                        />
                      </div>

                      <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-semibold text-slate-700">
                            {item.author}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              item.role === "Pro Member"
                                ? "bg-indigo-100 text-indigo-600"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {item.role}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-slate-400 text-sm">
                          {item.isHot && (
                            <span className="flex items-center gap-1 text-orange-500 font-bold text-xs bg-orange-50 px-2 py-1 rounded-full">
                              <Flame size={12} /> Hot
                            </span>
                          )}
                          <div className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                            <MessageCircle size={16} /> {item.replies}
                          </div>
                          <div className="flex items-center gap-1 hover:text-red-500 transition-colors">
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
            <button className="w-full mt-8 py-4 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center justify-center gap-2">
              Muat Lebih Banyak <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
