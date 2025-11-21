import React, { useState } from "react";
import { MiniChart, TickerTape } from "react-ts-tradingview-widgets";
import { MessageCircle, TrendingUp, Layers, Zap } from "lucide-react";

const MarketDashboard = () => {
  const [activeTab, setActiveTab] = useState("forex");

  // Data terstruktur berdasarkan Kategori
  const marketData = {
    forex: [
      { symbol: "FX:EURUSD", name: "EUR/USD", sentiment: 65, discussion: 124 },
      { symbol: "FX:GBPUSD", name: "GBP/USD", sentiment: 40, discussion: 89 },
      { symbol: "FX:USDJPY", name: "USD/JPY", sentiment: 82, discussion: 210 },
    ],
    crypto: [
      {
        symbol: "BINANCE:BTCUSDT",
        name: "Bitcoin",
        sentiment: 90,
        discussion: 5400,
      },
      {
        symbol: "BINANCE:ETHUSDT",
        name: "Ethereum",
        sentiment: 75,
        discussion: 3200,
      },
      {
        symbol: "BINANCE:SOLUSDT",
        name: "Solana",
        sentiment: 55,
        discussion: 1200,
      },
    ],
    metal: [
      {
        symbol: "OANDA:XAUUSD",
        name: "Gold (Emas)",
        sentiment: 88,
        discussion: 450,
      },
      {
        symbol: "OANDA:XAGUSD",
        name: "Silver (Perak)",
        sentiment: 45,
        discussion: 80,
      },
      { symbol: "TVC:USOIL", name: "US Oil", sentiment: 60, discussion: 150 },
    ],
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-indigo-600 font-bold mb-2">
              <Zap size={18} className="fill-indigo-600" />
              <span className="uppercase tracking-wider text-xs">
                Market Intelligence
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900">
              Peluang Pasar <span className="text-indigo-600">Hari Ini</span>
            </h2>
            <p className="text-slate-600 mt-3">
              Lihat aset apa yang sedang panas diperbincangkan oleh komunitas
              kami.
            </p>
          </div>

          {/* CUSTOM TABS */}
          <div className="bg-white p-1.5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-1">
            {["forex", "crypto", "metal"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* DYNAMIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {marketData[activeTab].map((item) => (
            <div
              key={item.symbol}
              className="bg-white rounded-3xl p-5 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Card Header: Info Komunitas */}
              <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-3">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.sentiment > 50 ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                    Sentimen: {item.sentiment > 50 ? "Bullish" : "Bearish"}
                  </div>
                </div>

                {/* Badge Diskusi */}
                <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full text-xs font-bold">
                  <MessageCircle size={14} />
                  {item.discussion} Diskusi
                </div>
              </div>

              {/* Chart Container */}
              <div className="h-[250px] w-full rounded-2xl overflow-hidden relative border border-slate-100">
                {/* Widget */}
                <MiniChart
                  colorTheme="light"
                  width="100%"
                  height="100%"
                  symbol={item.symbol}
                  dateRange="12M"
                  trendLineColor="#4F46E5"
                  underLineColor="rgba(79, 70, 229, 0.15)"
                  isTransparent={true}
                  autosize
                />
              </div>

              {/* Footer Action */}
              <button className="w-full mt-4 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors flex items-center justify-center gap-2">
                <Layers size={16} />
                Lihat Analisa {item.name}
              </button>
            </div>
          ))}
        </div>

        {/* TICKER TAPE (Full Width Footer) */}
        <div className="rounded-xl overflow-hidden shadow-inner border border-slate-200 opacity-90">
          <TickerTape
            colorTheme="light"
            displayMode="compact"
            isTransparent={false}
          />
        </div>
      </div>
    </section>
  );
};

export default MarketDashboard;
