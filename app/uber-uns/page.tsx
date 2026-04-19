"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBullseye, FaLightbulb, FaRocket, FaHandshake, FaInstagram, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

export default function UberUns() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- HEADER LİNKLERİ (TÜM SAYFALARDA AYNI) ---
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Leistung", href: "/#leistung" },
    { name: "Fähigkeiten", href: "/#fahigkeiten" },
    { name: "Referenzen", href: "/#referenzen" },
    { name: "Kontakt", href: "/#kontakt" },
  ];

  return (
    <main className="min-h-screen bg-[#E7E2C8] text-[#1C443C] font-sans selection:bg-[#F15A24] selection:text-white pb-20 overflow-x-hidden">
      
      {/* --- HEADER (TÜM SAYFALARDA BİREBİR AYNI) --- */}
      <nav className="max-w-6xl mx-auto px-5 md:px-6 flex justify-between items-center py-6 md:py-10 border-b border-[#1C443C]/10 mb-12 relative z-[100]">
        {/* Logo (Büyük) */}
        <div className="flex-1 flex justify-start">
          <a href="/">
            <img 
              src="/logo.png" 
              alt="AONSI DIGITAL" 
              className="w-28 md:w-32 block pointer-events-none select-none"
            />
          </a>
        </div>

        {/* Orta: Sallanan Buton (1sn Hareket + 2sn Durma) */}
<div className="flex-1 flex justify-center">
  <motion.a
    href="#kontakt"
    animate={{ 
      y: [0, -10, 0, -10, 0, 0, 0], // Sallanma hareketleri ve sonunda sabit kalma
    }}
    transition={{ 
      duration: 3, // Toplam döngü süresi
      repeat: Infinity, 
      ease: "easeInOut",
      times: [0, 0.1, 0.2, 0.3, 0.4, 0.7, 1], // Hareketin % kaçta duracağını belirler
    }}
    whileHover={{ scale: 1.1, backgroundColor: "#1C443C", color: "#E7E2C8" }}
    className="bg-[#F15A24] text-white px-8 py-3 md:px-12 md:py-5 rounded-full text-[11px] md:text-[13px] font-black uppercase tracking-[0.25em] shadow-2xl shadow-[#F15A24]/30 border border-transparent whitespace-nowrap transition-all duration-300"
  >
    Angebot anfordern
  </motion.a>
</div>

        {/* Sağ: Masaüstünde Linkler, Mobilde Burger */}
        <div className="flex-1 flex justify-end">
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.25em] font-bold opacity-60">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-[#F15A24] transition-colors">
                {link.name}
              </a>
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

      {/* MOBİL MENÜ (Sadece Mobilde) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-[#E7E2C8] z-[90] md:hidden flex flex-col items-center justify-center p-10"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-bold uppercase tracking-tighter hover:text-[#F15A24]"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-[#1C443C]/10">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center z-10 px-5"
        >
          <h1 className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F15A24] mb-4">Über AONSI DIGITAL</h1>
          <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
            Ihre digitale Vision, <br />
            <span className="italic font-light">Unsere Expertise.</span>
          </h2>
        </motion.div>
        {/* Arka plan dekorasyonu */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="w-full h-full border-[100px] border-[#1C443C] rounded-full scale-150" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 md:px-6">
  {/* --- DÜZELTİLMİŞ VE ANİMASYONLU METİN (MISSION) --- */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40 pt-16">
    <motion.div 
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">Willkommen bei <br/>AONSI DIGITAL.</h3>
      <p className="text-lg opacity-80 leading-relaxed">
        Wir sind ein leidenschaftliches Kollektiv aus Kreativen, Entwicklern und digitalen Strategen. Unsere Spezialisierung liegt darin, Unternehmen wie Ihrem zu helfen, im digitalen Raum nachhaltig erfolgreich zu sein.
      </p>
    </motion.div>
    
    <motion.div 
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#1C443C] text-[#E7E2C8] p-10 rounded-3xl"
    >
       <h4 className="text-[#F15A24] font-black uppercase text-[10px] tracking-widest mb-4">Mission</h4>
       <p className="text-xl font-medium leading-relaxed italic text-[#E7E2C8]">
         "Wir schaffen funktionale Ästhetik, die Ihre Marke stärkt und Ihre Geschäftsziele präzise unterstützt."
       </p>
    </motion.div> {/* Hata buradaydı, motion.div olarak kapatıldı */}
  </section>

        {/* --- WAS UNS AUSZEICHNET (GÜNCELLENMİŞ GRID) --- */}
        <section className="mb-40 pt-16 border-t border-[#1C443C]/10">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Was uns auszeichnet</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard Icon={FaBullseye} title="Lokale Expertise" desc="Verständnis für den regionalen Markt gepaart mit internationalem Standard." />
            <FeatureCard Icon={FaLightbulb} title="Individuell" desc="Keine Vorlagen. Jedes Design ist eine Maßanfertigung für Ihr Unternehmen." />
            <FeatureCard Icon={FaRocket} title="Innovation" desc="Wir nutzen die neuesten Technologien wie Next.js für maximale Performance." />
          </div>
        </section>

        {/* --- PARTNERSCHAFT (ANİMASYONLU DETAY) --- */}
        <motion.section 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative bg-white/30 rounded-[40px] p-8 md:p-20 overflow-hidden mb-40 border border-[#1C443C]/5 shadow-xl shadow-[#1C443C]/5"
        >
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8">Partnerschaftliche <br/> Zusammenarbeit.</h3>
            <p className="text-lg opacity-75 mb-10 leading-relaxed">
              Für uns sind Sie mehr als nur ein Auftraggeber. Wir verstehen uns als integraler Partner Ihres Erfolgs ve arbeiten eng mit Ihnen zusammen, um Ihre Vision Wirklichkeit werden zu lassen.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Responsive Design", "E-Commerce", "SEO Optimization", "Webhosting"].map((item) => (
                <span key={item} className="px-4 py-2 bg-[#1C443C]/5 border border-[#1C443C]/10 rounded-full text-[10px] font-bold uppercase tracking-widest">{item}</span>
              ))}
            </div>
          </div>
          <div className="absolute right-[-10%] bottom-[-10%] opacity-[0.05] hidden md:block">
            <FaHandshake size={400} />
          </div>
        </motion.section>

        {/* --- CALL TO ACTION (SON BÖLÜM) --- */}
        <motion.section 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="bg-[#F15A24] rounded-[40px] p-12 md:p-24 text-center text-white shadow-2xl shadow-[#F15A24]/30"
        >
          <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-8 italic leading-none">Bereit für den Erfolg?</h3>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
            Haben Sie eine Projektidee? Lassen Sie uns gemeinsam etwas Herausragendes schaffen.
          </p>
          <a 
            href="/kontakt" 
            className="inline-block bg-[#1C443C] text-[#E7E2C8] px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#F15A24] transition-all duration-500 shadow-lg shadow-[#1C443C]/20"
          >
            Kontaktieren Sie uns
          </a>
        </motion.section>

        {/* --- FOOTER (TÜM SAYFALARDA BİREBİR AYNI) --- */}
        <footer className="mt-40 pb-10 border-t border-[#1C443C]/5 pt-16">
          <div className="flex justify-center gap-10 mb-10 text-2xl text-[#1C443C]">
            <motion.a href="#" whileHover={{ y: -5, color: "#F15A24" }}><FaInstagram /></motion.a>
            <motion.a href="#" whileHover={{ y: -5, color: "#F15A24" }}><FaFacebook /></motion.a>
            <motion.a href="#" whileHover={{ y: -5, color: "#F15A24" }}><FaGoogle /></motion.a>
            <motion.a href="#" whileHover={{ y: -5, color: "#F15A24" }}><FaLinkedin /></motion.a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center opacity-40 text-center">
            <p className="text-[9px] tracking-[0.3em] uppercase font-black mb-4 md:mb-0">AONSI DIGITAL • © 2026 Engineering Aesthetics</p>
            <div className="flex gap-6 text-[9px] uppercase tracking-widest font-black">
              <a href="/Impressum" className="hover:text-[#F15A24]">Impressum</a>
              <a href="/Datenschutz" className="hover:text-[#F15A24]">Datenschutz</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

// Alt Bileşen (Card)
function FeatureCard({ Icon, title, desc }: { Icon: any, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }} 
      className="bg-white/40 border border-[#1C443C]/5 p-10 rounded-3xl shadow-lg shadow-[#1C443C]/5"
    >
      <div className="text-[#F15A24] text-4xl mb-6"><Icon /></div>
      <h4 className="text-xl font-bold uppercase mb-4 leading-tight">{title}</h4>
      <p className="text-sm opacity-70 leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}