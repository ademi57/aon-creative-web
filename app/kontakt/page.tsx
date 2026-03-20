"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebook, FaGoogle, FaLinkedin, FaChevronDown } from "react-icons/fa";

export default function Kontakt() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    "Shopify Debugging & Performance",
    "Custom UI/UX Store-Design",
    "Strategische Beratung",
    "E-Commerce Skalierung",
    "Technical SEO & Audit",
    "App Integration & Setup"
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Über Uns", href: "/uber-uns" },
    { name: "Leistung", href: "/#leistung" },
    { name: "Fähigkeiten", href: "/#fahigkeiten" },
    { name: "Referenzen", href: "/#referenzen" },
  ];

  return (
    <main className="min-h-screen bg-[#E7E2C8] text-[#1C443C] font-sans selection:bg-[#F15A24] selection:text-white pb-20 overflow-x-hidden">
      
      {/* --- HEADER (TÜM SAYFALARDA AYNI) --- */}
      <nav className="max-w-6xl mx-auto px-5 md:px-6 flex justify-between items-center py-6 md:py-10 border-b border-[#1C443C]/10 mb-12 relative z-[100]">
        <div className="flex-1">
          <a href="/">
            <img src="/logo.png" alt="AON Creative" className="w-36 md:w-44 block pointer-events-none select-none" />
          </a>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.25em] opacity-60">
          {navLinks.map((l) => (
            <a key={l.name} href={l.href} className="hover:text-[#F15A24] transition-colors">{l.name}</a>
          ))}
        </div>

        <div className="flex-1 flex justify-end md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
              {isMenuOpen ? "✕" : "☰"}
            </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* --- BAŞLIK --- */}
        <header className="mb-20">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6"
          >
            Lass uns <br /> <span className="text-[#F15A24]">starten.</span>
          </motion.h1>
          <p className="text-lg md:text-xl opacity-70 max-w-lg font-medium leading-relaxed">
            Haben Sie ein Projekt im Kopf oder benötigen Sie Hilfe bei Ihrem Shopify Store? Füllen Sie das Formular aus – wir melden uns umgehend.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* --- FORM ALANI --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/40 border border-[#1C443C]/5 p-8 md:p-12 rounded-[40px] shadow-2xl shadow-[#1C443C]/5"
          >
            <form className="space-y-8">
              {/* İsim & Şirket */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest opacity-40 ml-2">Name</label>
                  <input type="text" placeholder="Max Mustermann" className="w-full bg-[#E7E2C8]/30 border border-[#1C443C]/10 rounded-2xl px-6 py-4 outline-none focus:border-[#F15A24] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest opacity-40 ml-2">E-Mail</label>
                  <input type="email" placeholder="max@example.com" className="w-full bg-[#E7E2C8]/30 border border-[#1C443C]/10 rounded-2xl px-6 py-4 outline-none focus:border-[#F15A24] transition-colors" />
                </div>
              </div>

              {/* SERVICE COMBOBOX (Hizmet Seçimi) */}
              <div className="space-y-2 relative">
                <label className="text-[10px] uppercase font-black tracking-widest opacity-40 ml-2">Gewünschte Leistung</label>
                <div className="relative group">
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#E7E2C8]/30 border border-[#1C443C]/10 rounded-2xl px-6 py-4 outline-none focus:border-[#F15A24] appearance-none cursor-pointer transition-colors"
                  >
                    <option value="" disabled>Wählen Sie einen Service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-hover:text-[#F15A24]">
                    <FaChevronDown size={14} />
                  </div>
                </div>
              </div>

              {/* Mesaj */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest opacity-40 ml-2">Nachricht</label>
                <textarea rows={5} placeholder="Erzählen Sie uns von Ihrem Projekt..." className="w-full bg-[#E7E2C8]/30 border border-[#1C443C]/10 rounded-2xl px-6 py-4 outline-none focus:border-[#F15A24] transition-colors resize-none"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#F15A24] text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-xl shadow-[#F15A24]/20 hover:bg-[#1C443C] transition-all duration-300"
              >
                Anfrage Senden
              </motion.button>
            </form>
          </motion.div>

          {/* --- YAN BİLGİ ALANI --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-between py-10"
          >
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] uppercase font-black tracking-widest text-[#F15A24] mb-4">Direkt Kontakt</h4>
                <p className="text-3xl font-bold tracking-tighter">hello@aon-creative.com</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase font-black tracking-widest text-[#F15A24] mb-4">Let's Connect</h4>
                <div className="flex gap-6 text-2xl">
                  <a href="#" className="hover:text-[#F15A24]"><FaInstagram /></a>
                  <a href="#" className="hover:text-[#F15A24]"><FaFacebook /></a>
                  <a href="#" className="hover:text-[#F15A24]"><FaGoogle /></a>
                  <a href="#" className="hover:text-[#F15A24]"><FaLinkedin /></a>
                </div>
              </div>
            </div>

            <div className="p-10 bg-[#1C443C] text-[#E7E2C8] rounded-[32px] mt-12 md:mt-0">
               <h4 className="text-[10px] uppercase font-black tracking-widest text-[#F15A24] mb-4">Support-Garantie</h4>
               <p className="text-lg italic font-medium">"Wir antworten in der Regel innerhalb von 24 Stunden mit einer detaillierten Analyse Ihrer Anfrage."</p>
            </div>
          </motion.div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-40 border-t border-[#1C443C]/5 pt-16">
          <p className="text-[9px] tracking-[0.3em] uppercase font-black opacity-40 text-center">AON CREATIVE • © 2026 Engineering Aesthetics</p>
        </footer>
      </div>
    </main>
  );
}