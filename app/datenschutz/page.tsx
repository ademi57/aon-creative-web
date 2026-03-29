"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function datenschutz() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#E7E2C8] text-[#1C443C] font-sans selection:bg-[#F15A24] selection:text-white">
      {/* Header - Aynı yapı */}
      <nav className="max-w-6xl mx-auto px-5 md:px-6 flex justify-between items-center py-6 md:py-10 border-b border-[#1C443C]/10 relative z-[1000]">
        <Link href="/"><img src="/logo.png" alt="AON Creative" className="w-32 md:w-40" /></Link>
        <Link href="/kontakt" className="bg-[#F15A24] text-white px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em]">Angebot anfordern</Link>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 py-24">
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-16 text-[#F15A24]">Datenschutz</h1>
        <div className="space-y-12 text-sm leading-relaxed opacity-90">
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4">1. Datenschutz auf einen Blick</h2>
            <p>Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.</p>
          </section>
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4">2. Datenerfassung</h2>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. im Kontaktformular).</p>
          </section>
        </div>
      </div>

      {/* Footer - Aynı yapı */}
      <footer className="max-w-6xl mx-auto px-5 py-12 border-t border-[#1C443C]/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] tracking-[0.3em] uppercase font-black opacity-40">AON CREATIVE • © 2026</p>
          <div className="flex gap-6 text-[9px] uppercase tracking-widest font-black">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}