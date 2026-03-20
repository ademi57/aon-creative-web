"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBullseye, FaLightbulb, FaHandshake, FaRocket, FaInstagram, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

export default function UberUns() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Leistung", href: "/#leistung" },
    { name: "Kontakt", href: "/#kontakt" },
  ];

  return (
    <main className="min-h-screen bg-[#E7E2C8] text-[#1C443C] font-sans selection:bg-[#F15A24] selection:text-white pb-20 overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <nav className="max-w-6xl mx-auto px-5 md:px-6 flex justify-between items-center py-6 md:py-10 border-b border-[#1C443C]/10 relative z-[100]">
        <div className="flex-1">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="w-28 md:w-32 mix-blend-multiply" />
          </a>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-60">
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

      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-5"
        >
          <h1 className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F15A24] mb-4">Über AON Creative</h1>
          <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
            Digitale Vision, <br />
            <span className="italic font-light">Expertise.</span>
          </h2>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* --- İÇERİK BÖLÜMLERİ --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40 pt-10">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">Willkommen in Ettlingen.</h3>
            <p className="text-lg opacity-80 leading-relaxed">
              AON Creative ist Ihr Partner für Webdesign in Ettlingen. Wir kombinieren lokale Nähe mit globalen Trends ve modernster Technologie, um Ihre Marke sichtbar zu machen.
            </p>
          </div>
          <div className="bg-[#1C443C] text-[#E7E2C8] p-10 rounded-3xl">
             <h4 className="text-[#F15A24] font-black uppercase text-[10px] tracking-widest mb-4">Mission</h4>
             <p className="text-xl italic font-medium">"Wir schaffen digitale Erlebnisse, die nicht nur ansprechen, sondern nachhaltig wirken."</p>
          </div>
        </section>

        {/* --- ÖZELLİKLER (KARTLAR) --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
           <FeatureCard Icon={FaBullseye} title="Lokale Expertise" desc="Verständnis für den regionalen Markt gepaart mit internationalem Standard." />
           <FeatureCard Icon={FaLightbulb} title="Individuell" desc="Keine Vorlagen. Jedes Design ist eine Maßanfertigung für Ihr Unternehmen." />
           <FeatureCard Icon={FaRocket} title="Innovation" desc="Wir nutzen die neuesten Technologien wie Next.js für maximale Performance." />
        </section>

        {/* --- FOOTER --- */}
        <footer className="border-t border-[#1C443C]/10 pt-10 text-center">
            <div className="flex justify-center gap-8 mb-8 text-2xl">
                <a href="#" className="hover:text-[#F15A24]"><FaInstagram /></a>
                <a href="#" className="hover:text-[#F15A24]"><FaFacebook /></a>
                <a href="#" className="hover:text-[#F15A24]"><FaGoogle /></a>
                <a href="#" className="hover:text-[#F15A24]"><FaLinkedin /></a>
            </div>
            <p className="text-[9px] uppercase tracking-widest opacity-40">AON CREATIVE • © 2026</p>
        </footer>
      </div>
    </main>
  );
}

function FeatureCard({ Icon, title, desc }: { Icon: any, title: string, desc: string }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white/40 border border-[#1C443C]/5 p-10 rounded-3xl">
      <div className="text-[#F15A24] text-4xl mb-6"><Icon /></div>
      <h4 className="text-xl font-bold uppercase mb-4">{title}</h4>
      <p className="text-sm opacity-70 leading-relaxed">{desc}</p>
    </motion.div>
  );
}