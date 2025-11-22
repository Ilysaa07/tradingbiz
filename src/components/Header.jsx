import React, { useState, useEffect } from "react";
import { Menu, X, TrendingUp, User, Lock } from "lucide-react";
import { TickerTape } from "react-ts-tradingview-widgets";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Market", target: "market" },
    { name: "Edukasi", target: "features" },
    { name: "Signal VIP", target: "pricing" },
    { name: "Broker Partner", target: "about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled
          ? "bg-[#0f172a]/95 backdrop-blur-md border-slate-800 shadow-xl"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* --- 1. TICKER TAPE (Widget) --- */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out bg-black ${
          isScrolled
            ? "max-h-[60px] opacity-100 border-b border-slate-800" // PERBAIKAN: Height dinaikkan ke 60px agar tidak terpotong
            : "max-h-0 opacity-0 border-none"
        }`}
      >
        {/* Container widget diberi sedikit padding vertical agar lega */}
        <div className="pointer-events-none opacity-90 h-[60px] flex items-center">
          <TickerTape
            colorTheme="dark"
            displayMode="compact"
            autosize
            symbols={[
              { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
              { proName: "OANDA:XAUUSD", title: "GOLD" },
              { proName: "BITSTAMP:BTCUSD", title: "BTC/USD" },
              { proName: "FX_IDC:USDIDR", title: "USD/IDR" },
            ]}
          />
        </div>
      </div>

      {/* --- 2. MAIN NAVBAR --- */}
      <div
        className={`w-full transition-all duration-500 ${
          isScrolled ? "py-2" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={(e) => handleNavClick(e, "hero")}
            >
              <div
                className={`p-2 rounded-lg transition-all duration-500 ${
                  isScrolled
                    ? "bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg"
                    : "bg-white/5 backdrop-blur-md border border-white/10"
                }`}
              >
                <TrendingUp
                  className="text-white"
                  size={isScrolled ? 20 : 24}
                />
              </div>
              <div className="flex flex-col leading-none">
                <h1
                  className={`font-bold text-white tracking-tight transition-all ${
                    isScrolled ? "text-lg" : "text-xl"
                  }`}
                >
                  Trading<span className="text-cyan-400">Biz</span>
                </h1>
                <span
                  className={`text-[10px] text-slate-400 font-medium tracking-widest uppercase hidden sm:block transition-all ${
                    isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"
                  }`}
                >
                  By Bizshare
                </span>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:block">
              <ul
                className={`flex items-center space-x-1 transition-all duration-500 ${
                  isScrolled
                    ? "bg-transparent"
                    : "bg-black/20 backdrop-blur-md rounded-full px-2 py-1 border border-white/5"
                }`}
              >
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={`#${item.target}`}
                      onClick={(e) => handleNavClick(e, item.target)}
                      className="text-slate-300 text-sm font-medium px-4 py-2 rounded-full hover:text-white hover:bg-white/10 transition-all duration-300 relative block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ACTIONS */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-slate-300 font-medium hover:text-white text-sm flex items-center gap-2 transition-colors">
                <Lock size={14} />
                Masuk
              </button>
              <button
                className={`
                font-bold rounded-full transition-all duration-300 flex items-center gap-2
                ${
                  isScrolled
                    ? "bg-cyan-600 text-white px-5 py-2 text-xs hover:bg-cyan-500"
                    : "bg-white text-slate-900 px-6 py-2.5 text-sm hover:bg-slate-200 shadow-lg shadow-white/10"
                }
              `}
              >
                <User size={16} />
                Buka Akun
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white focus:outline-none bg-white/5 p-2 rounded-lg backdrop-blur-sm border border-white/10"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {/* MOBILE DROPDOWN ... (Sama seperti sebelumnya) */}
          {isOpen && (
            <div className="md:hidden mt-4 bg-[#0f172a] border border-slate-700 rounded-2xl p-4 shadow-2xl absolute left-4 right-4 top-full animate-in fade-in slide-in-from-top-2">
              {/* Isi Mobile Menu */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
