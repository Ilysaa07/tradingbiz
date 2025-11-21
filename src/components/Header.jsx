import React, { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk scroll halus & menutup menu mobile
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); // Mencegah loncatan kasar
    setIsOpen(false); // Tutup menu mobile
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", target: "hero" },
    { name: "Market", target: "market" },
    { name: "Keunggulan", target: "features" }, // Link ke WhyChooseUs
    { name: "Forum", target: "forum" },
    { name: "About & Contact", target: "about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={(e) => handleNavClick(e, "hero")}
          >
            <div className="bg-indigo-100 p-2 rounded-lg">
              <TrendingUp className="text-indigo-600" size={24} />
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">
              Trading<span className="text-indigo-600">Biz</span>
            </h1>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.target}`}
                    onClick={(e) => handleNavClick(e, item.target)}
                    className="text-slate-600 font-medium hover:text-indigo-600 transition-colors relative group text-sm"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-200/50 text-sm">
              Daftar Gratis
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white border-t border-slate-100 py-4 space-y-4 animate-fade-in-down shadow-xl rounded-b-2xl px-2">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.target}`}
                    onClick={(e) => handleNavClick(e, item.target)}
                    className="block text-slate-600 font-medium hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-lg transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 px-4 pt-4 border-t border-slate-100">
              <button className="text-center text-slate-600 font-semibold py-2 hover:bg-slate-50 rounded-lg">
                Masuk
              </button>
              <button className="text-center bg-indigo-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-indigo-200">
                Daftar Sekarang
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
