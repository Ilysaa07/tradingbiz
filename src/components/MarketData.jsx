import React, { useState } from "react";
import { MiniChart, TickerTape } from "react-ts-tradingview-widgets";
import { MessageCircle, Zap, ArrowRight, BarChart2 } from "lucide-react";

const MarketDashboard = () => {
  const [activeTab, setActiveTab] = useState("forex");

  const marketData = {
    forex: [
      {
        symbol: "FX:EURUSD",
        name: "EUR/USD",
        sentiment: 65,
        discussion: 124,
        type: "Bullish",
      },
      {
        symbol: "FX:GBPUSD",
        name: "GBP/USD",
        sentiment: 40,
        discussion: 89,
        type: "Bearish",
      },
      {
        symbol: "FX:USDJPY",
        name: "USD/JPY",
        sentiment: 82,
        discussion: 210,
        type: "Bullish",
      },
    ],
    crypto: [
      {
        symbol: "BINANCE:BTCUSDT",
        name: "Bitcoin",
        sentiment: 90,
        discussion: 5400,
        type: "Bullish",
      },
      {
        symbol: "BINANCE:ETHUSDT",
        name: "Ethereum",
        sentiment: 75,
        discussion: 3200,
        type: "Bullish",
      },
      {
        symbol: "BINANCE:SOLUSDT",
        name: "Solana",
        sentiment: 45,
        discussion: 1200,
        type: "Bearish",
      },
    ],
    metal: [
      {
        symbol: "OANDA:XAUUSD",
        name: "Gold (Emas)",
        sentiment: 88,
        discussion: 450,
        type: "Bullish",
      },
      {
        symbol: "OANDA:XAGUSD",
        name: "Silver (Perak)",
        sentiment: 45,
        discussion: 80,
        type: "Bearish",
      },
      {
        symbol: "TVC:USOIL",
        name: "US Oil",
        sentiment: 60,
        discussion: 150,
        type: "Bullish",
      },
    ],
  };

  return (
    <section
      id="market"
      className="py-24 bg-[#0f172a] relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-cyan-400 font-bold mb-3">
              <Zap size={18} className="fill-cyan-400" />
              <span className="uppercase tracking-widest text-xs">
                Market Intelligence
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Peluang Pasar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Hari Ini
              </span>
            </h2>
            <p className="text-slate-400 mt-4 text-lg leading-relaxed">
              Pantau aset yang sedang panas. Data sentimen diambil dari
              aktivitas trading komunitas global.
            </p>
          </div>

          {/* --- CUSTOM GLASS TABS --- */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-1.5 rounded-xl border border-slate-700 flex items-center gap-1">
            {["forex", "crypto", "metal"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-blue-900/50"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* --- DYNAMIC GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {marketData[activeTab].map((item) => (
            <div
              key={item.symbol}
              className="bg-[#1e293b] rounded-3xl p-1 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-xl shadow-black/20"
            >
              <div className="bg-[#0f172a]/50 rounded-[1.4rem] p-5 h-full flex flex-col">
                {/* Card Header */}
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h3 className="font-bold text-white text-xl flex items-center gap-2">
                      {item.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.symbol}
                    </span>
                  </div>

                  {/* Discussion Badge */}
                  <div className="flex items-center gap-1.5 bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-700">
                    <MessageCircle size={12} />
                    {item.discussion}
                  </div>
                </div>

                {/* Sentiment Bar (Visualisasi Data) */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span
                      className={
                        item.sentiment > 50 ? "text-green-400" : "text-red-400"
                      }
                    >
                      {item.type} ({item.sentiment}%)
                    </span>
                    <span className="text-slate-500">Market Sentiment</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden flex">
                    <div
                      className={`h-full rounded-full ${
                        item.sentiment > 50
                          ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${item.sentiment}%` }}
                    ></div>
                  </div>
                </div>

                {/* Chart Widget */}
                <div className="h-[200px] w-full rounded-xl overflow-hidden relative border border-slate-700/50 bg-slate-800/30">
                  <MiniChart
                    colorTheme="dark"
                    width="100%"
                    height="100%"
                    symbol={item.symbol}
                    dateRange="12M"
                    trendLineColor={item.sentiment > 50 ? "#4ade80" : "#f87171"} // Hijau jika Bullish, Merah jika Bearish
                    underLineColor={
                      item.sentiment > 50
                        ? "rgba(74, 222, 128, 0.1)"
                        : "rgba(248, 113, 113, 0.1)"
                    }
                    isTransparent={true}
                    autosize
                  />
                </div>

                {/* Action Button */}
                <button className="w-full mt-5 py-3 rounded-xl border border-slate-700 text-slate-300 font-semibold text-sm hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-cyan-900/20">
                  <BarChart2 size={16} />
                  Analisa Lengkap
                  <ArrowRight
                    size={14}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- TICKER TAPE (Bottom) --- */}
        {/* Catatan: Karena di Header sudah ada Ticker, bagian ini opsional. 
            Tapi jika ingin tetap ada, gunakan style gelap ini. */}
        <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl opacity-80 hover:opacity-100 transition-opacity">
          <TickerTape
            colorTheme="dark"
            displayMode="compact"
            isTransparent={false}
            symbols={[
              { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
              { proName: "FOREXCOM:NSXUSD", title: "US 100" },
              { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
              { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
              { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default MarketDashboard;
