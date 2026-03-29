"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Über Uns", href: "/uber-uns" },
    { name: "Leistung", href: "/#leistung" },
    { name: "Faehigkeiten", href: "/#faehigkeiten" },
    { name: "Referenzen", href: "/#referenzen" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <>
      <nav className="w-full bg-[#E7E2C8] border-b border-[#1C443C]/10 py-6 md:py-10 relative z-[100]">
        <div className="max-w-6xl mx-auto px-5 md:px-6 flex justify-between items-center">
          <div className="flex-1 flex justify-start">
            <a href="/">
              <img src="/logo.png" alt="AON Creative" className="w-32 md:w-40 block" />
            </a>
          </div>

          <div className="flex-1 flex justify-center">
            <motion.a
              href="/kontakt"
              animate={{ y: [0, -10, 0, -10, 0, 0, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-[#F15A24] text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em]"
            >
              Angebot anfordern
            </motion.a>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="hidden md:flex gap-8 text-[10px] uppercase font-bold opacity-60">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-[#F15A24] transition-colors">{link.name}</a>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex flex-col gap-1.5">
              <motion.span animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-8 h-[2px] bg-[#1C443C] block"/>
              <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-8 h-[2px] bg-[#1C443C] block"/>
              <motion.span animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-8 h-[2px] bg-[#1C443C] block"/>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} className="fixed inset-0 bg-[#E7E2C8] z-[90] md:hidden flex flex-col items-center justify-center p-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold uppercase mb-8">{link.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}