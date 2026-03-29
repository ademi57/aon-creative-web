"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function impressum() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#E7E2C8] text-[#1C443C] font-sans selection:bg-[#F15A24] selection:text-white">
      {/* Header (Kontakt sayfasındakiyle aynı yapıda tutuyoruz) */}
      <nav className="max-w-6xl mx-auto px-5 py-6 md:py-10 border-b border-[#1C443C]/10 flex justify-between items-center relative z-[1000]">
        <a href="/" className="font-black text-xl tracking-tighter uppercase">AON Creative</a>
        <a href="/kontakt" className="bg-[#F15A24] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Kontakt</a>
      </nav>

      {/* İçerik Alanı */}
      <div className="max-w-3xl mx-auto px-5 py-20">
        <h1 className="text-5xl font-black tracking-tighter mb-12 uppercase text-[#F15A24]">Impressum</h1>
        
        <div className="space-y-10 opacity-90 leading-relaxed text-sm">
          <section>
            <h2 className="font-black uppercase tracking-widest text-[10px] mb-2 opacity-50">Angaben gemäß § 5 TMG</h2>
            <p className="font-bold text-lg">[OZCAN KABAKAYA - AonStore]</p>
            <p>[Schlesier str.29]</p>
            <p>[76275/Ettlingen]</p>
          </section>

          <section>
            <h2 className="font-black uppercase tracking-widest text-[10px] mb-2 opacity-50">Kontakt</h2>
            <p>E-Mail: <span className="font-bold underline decoration-[#F15A24]">info@aon-creative.com</span></p>
          </section>

          <section>
            <h2 className="font-black uppercase tracking-widest text-[10px] mb-2 opacity-50">Vertreten durch</h2>
            <p>[Ozcan KABAKAYA]</p>
          </section>

          <section>
            <h2 className="font-black uppercase tracking-widest text-[10px] mb-2 opacity-50">Umsatzsteuer-ID</h2>
            <p>Gemäß § 27 a Umsatzsteuergesetz: [VERGİ NUMARAN]</p>
          </section>

          <div className="pt-10 border-t border-[#1C443C]/10 text-[10px] opacity-40 uppercase tracking-[0.2em]">
            AON Creative — © 2026 Digital Studio
          </div>
        </div>
      </div>
    </main>
  );
}