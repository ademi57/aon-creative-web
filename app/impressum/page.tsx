"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Impressum() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Über Uns", href: "/uber-uns" },
    { name: "Leistung", href: "/#leistung" },
    { name: "Faehigkeiten", href: "/#faehigkeiten" },
    { name: "Referenzen", href: "/#referenzen" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <main className="min-h-screen bg-[#E7E2C8] text-[#1C443C] font-sans selection:bg-[#F15A24] selection:text-white overflow-x-hidden">
      
      {/* --- NAVIGATION (Tüm sayfalarda aynı olmalı) --- */}
      <nav className="max-w-6xl mx-auto px-5 md:px-6 flex justify-between items-center py-6 md:py-10 border-b border-[#1C443C]/10 relative z-[1000]">
        <div className="flex-1 flex justify-start">
          <Link href="/">
            <img src="/logo.png" alt="AON Creative" className="w-32 md:w-40 block" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <Link href="/kontakt" className="bg-[#F15A24] text-white px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#F15A24]/20 transition-all duration-300 whitespace-nowrap min-w-fit text-center">
            Angebot anfordern
          </Link>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.25em] font-bold opacity-60 mr-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#F15A24] transition-colors">{link.name}</Link>
            ))}
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 relative z-[2100]"
          >
            <motion.span animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className={`w-8 h-[2px] block origin-center ${isMenuOpen ? 'bg-[#F15A24]' : 'bg-[#1C443C]'}`}/>
            <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-8 h-[2px] bg-[#1C443C] block"/>
            <motion.span animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className={`w-8 h-[2px] block origin-center ${isMenuOpen ? 'bg-[#F15A24]' : 'bg-[#1C443C]'}`}/>
          </button>
        </div>
      </nav>

      {/* --- CONTENT --- */}
      <div className="max-w-4xl mx-auto px-5 py-20">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-16 text-[#F15A24]">Impressum</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-90 text-sm leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-widest opacity-40">Angaben gemäß § 5 TMG</h2>
            <p className="text-xl font-bold uppercase">Ozcan Kabakaza / AonStore</p>
            <p>Schlesier str.<br />76275 / Ettlingen</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-widest opacity-40">Kontakt</h2>
            <p className="text-xl font-bold underline decoration-[#F15A24]">info@aoncreative.com</p>
          </section>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="max-w-6xl mx-auto px-5 py-12 border-t border-[#1C443C]/10 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] tracking-[0.3em] uppercase font-black opacity-40 text-center md:text-left">
            AON CREATIVE • © 2026 Engineering Aesthetics
          </p>
          <div className="flex gap-6 text-[9px] uppercase tracking-widest font-black">
            <Link href="/impressum" className="hover:text-[#F15A24]">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-[#F15A24]">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}