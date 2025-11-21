import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// Pastikan path import ini sesuai dengan nama file yang Anda simpan (MarketData atau MarketDashboard)
import MarketData from "./components/MarketData"; 
import WhyChooseUs from "./components/WhyChooseUs"; // File Baru
import Forum from "./components/Forum";
import AboutContact from "./components/AboutContact"; // File Baru
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="bg-white font-sans antialiased text-slate-900">
      <Header />
      
      <main>
        {/* ID 'hero' untuk link Home */}
        <div id="hero">
          <Hero />
        </div>

        {/* ID 'market' untuk link Market */}
        <div id="market">
          <MarketData />
        </div>

        {/* ID 'features' untuk link Keunggulan */}
        <div id="features">
          <WhyChooseUs />
        </div>

        {/* ID 'forum' untuk link Forum */}
        <div id="forum">
          <Forum />
        </div>

        {/* ID 'about' untuk link About & Contact */}
        <div id="about">
          <AboutContact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;