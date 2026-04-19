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
      
      {/* --- NAVIGATION --- */}
      <nav className="max-w-6xl mx-auto px-5 md:px-6 flex justify-between items-center py-6 md:py-10 border-b border-[#1C443C]/10 relative z-[1000]">
        <div className="flex-1 flex justify-start">
          <Link href="/">
            <img src="/logo.png" alt="AONSI DIGITAL" className="w-32 md:w-40 block" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <Link href="/kontakt" className="bg-[#F15A24] text-white px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#F15A24]/20 transition-all duration-300 whitespace-nowrap min-w-fit text-center">
            Angebot anfordern
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.25em] font-bold opacity-60 mr-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#F15A24] transition-colors">{link.name}</Link>
            ))}
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 relative z-[2100] outline-none"
          >
            <motion.span animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className={`w-8 h-[2px] block origin-center ${isMenuOpen ? 'bg-[#F15A24]' : 'bg-[#1C443C]'}`}/>
            <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-8 h-[2px] bg-[#1C443C] block"/>
            <motion.span animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className={`w-8 h-[2px] block origin-center ${isMenuOpen ? 'bg-[#F15A24]' : 'bg-[#1C443C]'}`}/>
          </button>
        </div>
      </nav>

      {/* --- CONTENT --- */}
      <div className="max-w-4xl mx-auto px-5 py-20 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-16 text-[#F15A24]">Impressum</h1>
        
        <div className="space-y-16 opacity-90 text-sm leading-relaxed">
          
          {/* Angaben gemäß § 5 TMG */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-[10px] font-black uppercase tracking-widest opacity-40">Angaben gemäß § 5 TMG</h2>
              <p className="text-xl font-bold uppercase tracking-tight">Ozcan Kabakaya<br />AONSI DIGITAL</p>
              <p className="text-lg">
                Schlesier Str. 1<br />
                76275 Ettlingen<br />
                Deutschland
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[10px] font-black uppercase tracking-widest opacity-40">Kontakt</h2>
              <p className="text-lg font-bold">E-Mail: <span className="underline decoration-[#F15A24]">info@aoncreative.de</span></p>
              {/* Varsa telefon numaranı buraya ekleyebilirsin */}
              {/* <p className="text-lg font-bold">Telefon: +49 (0) XXX XXXXXXX</p> */}
            </div>
          </section>

          {/* Steuer-ID & Berufsbezeichnung */}
          <section className="space-y-4 pt-8 border-t border-[#1C443C]/10">
            <h2 className="text-[10px] font-black uppercase tracking-widest opacity-40">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <strong>31123/31503</strong>
            </p>
            <p className="text-[11px] opacity-60 uppercase font-bold tracking-wider italic">
              
            </p>
          </section>

          {/* Haftungsausschluss (Disclaimer) */}
          <section className="space-y-8 pt-8 border-t border-[#1C443C]/10">
            <div className="space-y-3">
              <h3 className="font-black uppercase tracking-widest text-[11px]">Haftung für Inhalte</h3>
              <p className="opacity-70">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-black uppercase tracking-widest text-[11px]">Haftung für Links</h3>
              <p className="opacity-70">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-black uppercase tracking-widest text-[11px]">Urheberrecht</h3>
              <p className="opacity-70">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </section>

          {/* EU-Streitschlichtung */}
          <section className="space-y-4 pt-8 border-t border-[#1C443C]/10">
            <h2 className="text-[10px] font-black uppercase tracking-widest opacity-40">EU-Streitschlichtung</h2>
            <p className="opacity-70">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="ml-1 underline hover:text-[#F15A24]">https://ec.europa.eu/consumers/odr/</a>.
              <br />Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="max-w-6xl mx-auto px-5 py-12 border-t border-[#1C443C]/10 mt-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] tracking-[0.3em] uppercase font-black opacity-40 text-center md:text-left">
            AONSI DIGITAL • © 2026 Engineering Aesthetics
          </p>
          <div className="flex gap-6 text-[9px] uppercase tracking-widest font-black">
            <Link href="/impressum" className="hover:text-[#F15A24] text-[#F15A24]">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-[#F15A24]">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}