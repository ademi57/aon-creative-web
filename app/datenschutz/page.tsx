"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Datenschutz() {
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
      
      {/* --- YENİ NESİL HEADER (S25 ULTRA UYUMLU) --- */}
      <nav className="max-w-6xl mx-auto px-5 md:px-6 flex justify-between items-center py-6 md:py-10 border-b border-[#1C443C]/10 relative z-[1000]">
        
        {/* LOGO BÖLÜMÜ */}
        <div className="flex-1 flex justify-start items-center">
          <Link href="/" className="inline-block">
            <img 
              src="/logo.png" 
              alt="AON Creative" 
              className="w-full h-auto max-w-[120px] landscape:max-w-[140px] md:max-w-[180px] block pointer-events-none select-none transition-all duration-300 object-contain" 
            />
          </Link>
        </div>

        {/* ORTA BÖLÜM - Teklif Butonu */}
        <div className="flex-1 flex justify-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link 
              href="/kontakt" 
              className="bg-[#F15A24] text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#F15A24]/20 border border-transparent whitespace-nowrap hover:bg-[#1C443C] transition-all duration-300"
            >
              Angebot anfordern
            </Link>
          </motion.div>
        </div>

        {/* SAĞ BÖLÜM - Masaüstü Menü & Hamburger */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.25em] font-bold opacity-60">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#F15A24] transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 outline-none"
          >
            <motion.span animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-8 h-[2px] bg-[#1C443C] block origin-center"/>
            <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-8 h-[2px] bg-[#1C443C] block"/>
            <motion.span animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-8 h-[2px] bg-[#1C443C] block origin-center"/>
          </button>
        </div>
      </nav>

      {/* --- MOBİL MENÜ OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: "100%" }} 
            className="fixed inset-0 bg-[#E7E2C8] z-[900] md:hidden flex flex-col items-center justify-center p-10"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                   <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="text-4xl font-bold uppercase tracking-tighter hover:text-[#F15A24] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CONTENT & ETİKETLER --- */}
      <div className="max-w-4xl mx-auto px-5 py-12 md:py-24">
        
        {/* YENİ ETİKET STİLİ (DEBUG JÄGER) */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-16">
          <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#1C443C]">
            <span className="w-1.5 h-1.5 bg-[#F15A24] rounded-full animate-pulse shadow-[0_0_8px_rgba(241,90,36,0.5)]" />
            Technical Debug Jäger
          </div>
          <div className="hidden md:block w-[1px] h-4 bg-[#1C443C]/20" /> 
          <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#1C443C]/60">
            <span className="w-1.5 h-1.5 border border-[#1C443C]/40 rounded-full" />
            Creative Design Studio
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-16 text-[#F15A24]">
          Datenschutz
        </h1>

        <div className="space-y-12 text-sm md:text-base leading-relaxed opacity-90 border-l border-[#1C443C]/10 pl-6 md:pl-10">
          
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-[#1C443C]">1. Datenschutz auf einen Blick</h2>
            <p>Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-[#1C443C]">2. Verantwortliche Stelle</h2>
            <p className="font-bold uppercase tracking-tight">
              Ozcan Kabakaya / AON Creative<br />
              Schlesier Str. 1<br />
              76275 Ettlingen<br />
              info@aoncreative.de
            </p>
          </section>

          <section>
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-[#1C443C]">3. Datenerfassung auf unserer Website</h2>
            <div className="space-y-4">
              <p><strong>Kontaktformular:</strong> Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
              <p><strong>Hosting (Vercel):</strong> Unsere Website wird bei Vercel Inc. gehostet. Informationen zur Einhaltung der DSGVO durch Vercel finden Sie in deren Datenschutzerklärung.</p>
              <p><strong>E-Mail (IONOS):</strong> Die Kommunikation via E-Mail erfolgt über die Server von IONOS, wobei eine TLS-Verschlüsselung nach aktuellem Standard eingesetzt wird.</p>
            </div>
          </section>

          <section>
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-[#1C443C]">4. Rechte der betroffenen Person</h2>
            <p>Sie haben das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-[#1C443C]">5. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar.</p>
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
            <Link href="/impressum" className="hover:text-[#F15A24] transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-[#F15A24] transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}