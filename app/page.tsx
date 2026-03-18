"use client";
import { useState, useEffect } from "react";
import TerminalLoader from "../components/TerminalLoader";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Über Uns", href: "#" },
    { name: "Leistung", href: "#" },
    { name: "Fähigkeiten", href: "#" },
    { name: "Referenzen", href: "#" },
    { name: "Kontakt", href: "#" },
  ];

  return (
    <main className="min-h-screen bg-[#E7E2C8] text-[#1C443C] selection:bg-[#F15A24] selection:text-white font-sans overflow-x-hidden text-[15px]">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <TerminalLoader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-6xl mx-auto px-5 md:px-6"
          >
            {/* --- HEADER & NAVIGATION --- */}
            <nav className="flex justify-between items-center py-6 md:py-8 border-b border-[#1C443C]/10 mb-12 md:mb-20 relative z-[100]">
              <div className="flex-1 flex justify-start">
                <img 
                  src="/logo.png" 
                  alt="AON Creative" 
                  className="w-20 md:w-32 mix-blend-multiply contrast-[1.2] brightness-[1.1] opacity-95 block pointer-events-none select-none"
                />
              </div>

              {/* Orta: Sallanan Aksiyon Butonu */}
              <div className="flex-1 flex justify-center">
                <motion.a
                  href="#kontakt"
                  animate={{ y: [0, -4, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05, backgroundColor: "#1C443C", color: "#E7E2C8" }}
                  className="bg-[#F15A24] text-white px-5 py-2 md:px-7 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-[#F15A24]/20 border border-transparent whitespace-nowrap transition-all duration-300"
                >
                  Angebot anfordern
                </motion.a>
              </div>

              {/* Sağ: Burger Menü (Hem Masaüstü Hem Mobil) */}
              <div className="flex-1 flex justify-end">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 outline-none group"
                >
                  <motion.span animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-8 h-[2px] bg-[#1C443C] block origin-center group-hover:bg-[#F15A24]"/>
                  <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-8 h-[2px] bg-[#1C443C] block group-hover:bg-[#F15A24]"/>
                  <motion.span animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-8 h-[2px] bg-[#1C443C] block origin-center group-hover:bg-[#F15A24]"/>
                </button>
              </div>
            </nav>

            {/* FULLSCREEN MENU OVERLAY */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed inset-0 bg-[#E7E2C8] z-[90] flex flex-col items-center justify-center p-10"
                >
                  <div className="flex flex-col items-center gap-6 md:gap-8">
                    {navLinks.map((link, i) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-4xl md:text-7xl font-bold uppercase tracking-tighter hover:text-[#F15A24] transition-colors"
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* --- HERO SECTION --- */}
            <header className="max-w-5xl mb-24 md:mb-40 mt-6 md:mt-12">
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-[#1C443C] text-[#E7E2C8] px-3 py-1 rounded text-[9px] font-bold tracking-[0.3em] uppercase w-fit">Technical Debug Jäger</div>
                <div className="bg-transparent border border-[#1C443C]/20 text-[#1C443C] px-3 py-1 rounded text-[9px] font-bold tracking-[0.3em] uppercase w-fit">Creative Design Studio</div>
              </div>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-10 uppercase"
              >
                Präzision trifft <br />
                <span className="text-[#F15A24]">Digitale</span> <span className="italic font-light">Ästhetik.</span>
              </motion.h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 border-l border-[#1C443C]/10 pl-6 md:pl-0 md:border-none">
                <p className="text-base md:text-xl font-medium leading-relaxed opacity-70">
                  Wir eliminieren technische Schwachstellen in Ihrem Shopify-System ve gestalten gleichzeitig Web-Erlebnisse, die Ihre Marke nachhaltig stärken.
                </p>
                <div className="hidden md:flex items-center gap-4 border-l border-[#1C443C]/10 pl-8">
                  <ul className="text-xs font-bold uppercase tracking-widest space-y-3">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#F15A24] rounded-full"/> Shopify Optimierung</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#41BDCC] rounded-full"/> High-End Webdesign</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#1C443C] rounded-full"/> Qualitätssicherung</li>
                  </ul>
                </div>
              </div>
            </header>

            {/* --- 4 TEMEL PRENSİP (UNSER VERSPRECHEN) --- */}
            <section className="mb-32 md:mb-48">
              <div className="mb-12">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-black opacity-40 mb-4 text-[#F15A24]">Prinzipien</h2>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">Unser Versprechen</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <MethodCard title="Begleitung" desc="Lückenlose Betreuung Ihrer technischen Infrastruktur rund um die Uhr." style="bg-white/40 border border-[#1C443C]/5" />
                <MethodCard title="Agilität" desc="Prozesse, die sich exakt an Ihren Projektzyklus anpassen – on-demand." style="bg-[#41BDCC] text-white" />
                <MethodCard title="Transparenz" desc="Klare Preismodelle ohne versteckte Kosten oder böse Überraschungen." style="bg-[#F15A24] text-white shadow-lg shadow-[#F15A24]/20" />
                <MethodCard title="Exzellenz" desc="Zertifizierte Fachkompetenz nach höchsten Industriestandards für Ihre Systeme." style="bg-[#1C443C] text-white" />
              </div>
            </section>

            {/* --- EXPERTISE (SKILLS) --- */}
            <section className="mb-32 md:mb-48 border-t border-[#1C443C]/10 pt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                <div className="space-y-12">
                  <h2 className="text-[10px] uppercase tracking-[0.5em] font-black opacity-40 text-[#F15A24]">Fähigkeiten</h2>
                  <SkillItem title="Creative Web-Architecture" desc="Minimalistisches, funktionales Design, das konvertiert. Wir bauen digitale Flagship-Stores." />
                  <SkillItem title="Shopify Hunter-Mode" desc="Unsere Debug-Jäger finden Fehler in Liquid-Files ve Apps, bevor diese die Performance beeinträchtigen." />
                  <SkillItem title="UX / UI Excellence" desc="Einzigartige Nutzerführung, die Ihre Markenidentität durch visuelle Klarheit stärkt." />
                </div>
                
                <div className="bg-[#1C443C] rounded-3xl p-10 text-[#E7E2C8] flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
                   <div className="relative z-10">
                      <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4 leading-none">Datenbasierte <br/>Kreativität.</h3>
                      <p className="opacity-60 text-xs md:text-sm leading-relaxed max-w-xs mb-8">Wir kombinieren das Auge eines Designers mit der Seele eines Ingenieurs.</p>
                      <button className="bg-[#F15A24] text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">Portfolio ansehen</button>
                   </div>
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <div className="w-40 h-40 border border-white rounded-full flex items-center justify-center">
                        <div className="w-20 h-20 border border-[#F15A24] rotate-45" />
                      </div>
                   </div>
                </div>
              </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="pb-10 flex flex-col md:flex-row justify-between items-center border-t border-[#1C443C]/5 pt-10 opacity-40">
              <p className="text-[9px] tracking-[0.3em] uppercase font-black">AON CREATIVE • © 2026 Engineering Aesthetics</p>
              <div className="flex gap-6 text-[9px] uppercase tracking-widest font-black">
                <a href="#" className="hover:text-[#F15A24] transition-colors">Impressum</a>
                <a href="#" className="hover:text-[#F15A24] transition-colors">Datenschutz</a>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function SkillItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group border-b border-[#1C443C]/5 pb-6">
      <h4 className="font-bold uppercase text-lg mb-2 group-hover:text-[#F15A24] transition-colors leading-tight">{title}</h4>
      <p className="text-[13px] opacity-70 leading-relaxed font-medium max-w-sm">{desc}</p>
    </div>
  );
}

function MethodCard({ title, desc, style }: { title: string; desc: string; style: string }) {
  return (
    <div className={`p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${style}`}>
      <h4 className="font-bold uppercase text-[10px] mb-3 tracking-widest leading-tight">{title}</h4>
      <p className="text-[11px] leading-relaxed opacity-90 font-medium">{desc}</p>
    </div>
  );
}