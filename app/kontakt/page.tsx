"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebook, FaGoogle, FaLinkedin, FaChevronDown, FaCheckCircle } from "react-icons/fa";
import { sendEmail } from "./actions";
import Link from "next/link";

export default function Kontakt() {
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Pop-up durumu
  const [isSending, setIsSending] = useState(false); // Gönderiliyor durumu
  const [status, setStatus] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const navLinks = [
    { name: "Über Uns", href: "/uber-uns" },
    { name: "Leistung", href: "/#leistung" },
    { name: "Faehigkeiten", href: "/#faehigkeiten" },
    { name: "Referenzen", href: "/#referenzen" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  async function handleForm(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setStatus("Bitte füllen Sie alle Felder aus."); 
      return;
    }

    setIsSending(true);
    setStatus(""); // Eski statüsü temizle

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setShowSuccessModal(true); // Pop-up'ı aç
        formRef.current?.reset();
      } else {
        setStatus("Fehler! Bitte versuchen Sie es später erneut.");
      }
    } catch (err) {
      setStatus("Ein Fehler ist aufgetreten.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#E7E2C8] text-[#1C443C] font-sans selection:bg-[#F15A24] selection:text-white overflow-x-hidden">
      
      {/* --- SUCCESS MODAL (POP-UP) --- */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center p-5">
            {/* Arka Plan Karartma */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-[#1C443C]/60 backdrop-blur-sm"
            />
            {/* Pop-up Kutusu */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#E7E2C8] p-8 md:p-12 rounded-[40px] shadow-2xl relative z-10 max-w-md w-full text-center border border-[#F15A24]/20"
            >
              <div className="w-20 h-20 bg-[#F15A24] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F15A24]/30">
                <FaCheckCircle className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Vielen Dank!</h3>
              <p className="text-sm leading-relaxed opacity-80 mb-8 font-medium">
                Ihre Nachricht wurde erfolgreich übermittelt. Wir haben Ihnen eine Bestätigungs-E-Mail gesendet und melden uns in Kürze bei Ihnen.
              </p>
<input 
  type="text" 
  name="aon_honeypot" 
  style={{ display: 'none' }} 
  tabIndex={-1} 
  autoComplete="off" 
/>

              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-[#1C443C] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#F15A24] transition-all duration-300 shadow-lg"
              >
                Verstanden
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- HEADER / NAVIGATION --- */}
      <nav className="max-w-6xl mx-auto px-5 md:px-6 flex justify-between items-center py-6 md:py-10 border-b border-[#1C443C]/10 relative z-[1000]">
        <div className="flex-1 flex justify-start items-center">
          <Link href="/" className="inline-block">
            <img src="/logo.png" alt="AON Creative" className="w-full h-auto max-w-[120px] md:max-w-[180px] block pointer-events-none select-none transition-all duration-300 object-contain" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <Link href="/kontakt" className="bg-[#F15A24] text-white px-4 py-2.5 md:px-8 md:py-3.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#F15A24]/20 transition-all duration-300 whitespace-nowrap inline-block">
              Angebot anfordern
            </Link>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.25em] font-bold opacity-60 mr-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#F15A24] transition-colors">{link.name}</Link>
            ))}
          </div>
          {/* GÜNCELLENEN BUTON */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 outline-none relative z-[3000]"
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
              className={`w-8 h-[2.5px] block origin-center transition-colors ${isMenuOpen ? 'bg-[#F15A24]' : 'bg-[#1C443C]'}`} 
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="w-8 h-[2.5px] bg-[#1C443C] block" 
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
              className={`w-8 h-[2.5px] block origin-center transition-colors ${isMenuOpen ? 'bg-[#F15A24]' : 'bg-[#1C443C]'}`} 
            />
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} className="fixed inset-0 bg-[#E7E2C8] z-[2000] flex flex-col items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#1C443C] hover:text-[#F15A24] transition-colors">{link.name}</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FORM CONTENT --- */}
      <div className="max-w-6xl mx-auto px-5 md:px-6 pt-20 pb-20 relative z-10">
        <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-12">
          <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#1C443C]">
            <span className="w-1.5 h-1.5 bg-[#F15A24] rounded-full animate-pulse shadow-[0_0_8px_rgba(241,90,36,0.5)]" /> Technical Debug Jäger
          </div>
          <div className="hidden md:block w-[1px] h-4 bg-[#1C443C]/20" /> 
          <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#1C443C]/60">
            <span className="w-1.5 h-1.5 border border-[#1C443C]/40 rounded-full" /> Creative Design Studio
          </div>
        </div>

        <header className="mb-16">
          <h2 className="text-[#F15A24] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Kontakt</h2>
          <p className="text-xl md:text-3xl font-medium max-w-3xl leading-snug opacity-90">
            Haben Sie ein Projekt im Kopf oder benötigen Sie Hilfe bei Ihrem Shopify Store? Füllen Sie das Formular aus – wir melden uns umgehend.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#F2EFE0]/60 backdrop-blur-md p-8 md:p-12 rounded-[40px] shadow-2xl border border-white/40">
            <form ref={formRef} action={handleForm} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50 ml-4">Name</label>
                  <input name="name" type="text" placeholder="Max Mustermann" required className="w-full bg-[#E7E2C8]/60 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#F15A24] outline-none transition-all placeholder:opacity-20 text-[#1C443C]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50 ml-4">E-Mail</label>
                  <input name="email" type="email" placeholder="max@example.com" required className="w-full bg-[#E7E2C8]/60 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#F15A24] outline-none transition-all placeholder:opacity-20 text-[#1C443C]" />
                </div>
              </div>

              <div className="space-y-2 relative">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50 ml-4">Gewünschte Leistung</label>
                <div className="relative">
                  <select name="service" required className="w-full bg-[#E7E2C8]/60 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#F15A24] outline-none transition-all cursor-pointer appearance-none text-sm font-medium opacity-70 text-[#1C443C]">
                    <option value="">Wählen Sie einen Service</option>
                    <option value="Webdesign">Website erstellen</option>
                    <option value="Shopify Debugging">Shopify Optimierung & Bugs</option>
                    <option value="Store Setup">Shopify Store Setup</option>
                    <option value="SEO Audit">Technisches SEO & Audit</option>
                  </select>
                  <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-30" size={12} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50 ml-4">Nachricht</label>
                <textarea name="message" rows={4} required placeholder="Erzählen Sie uns von Ihrem Projekt..." className="w-full bg-[#E7E2C8]/60 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#F15A24] outline-none transition-all placeholder:opacity-20 resize-none text-[#1C443C]" />
              </div>

              <button 
                type="submit" 
                disabled={isSending}
                className="w-full bg-[#F15A24] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-[#F15A24]/40 hover:bg-[#d94e1c] hover:-translate-y-1 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Wird gesendet..." : "Anfrage Senden"}
              </button>

              {status && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-xs font-bold uppercase tracking-widest mt-4 italic text-[#F15A24]">
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* SAĞ TARAF: BİLGİ ALANI */}
          <div className="space-y-16 lg:pl-12">
            <section className="space-y-4 pt-10">
              <h4 className="text-[#F15A24] text-[10px] font-black uppercase tracking-widest">Direkt Kontakt</h4>
              <a href="mailto:info@aoncreative.com" className="text-3xl md:text-5xl font-black tracking-tighter hover:text-[#F15A24] transition-colors duration-300 underline underline-offset-8 decoration-[#F15A24]/20">
                info@aoncreative.com
              </a>
            </section>

            <section className="space-y-4">
              <h4 className="text-[#F15A24] text-[10px] font-black uppercase tracking-widest">Let's Connect</h4>
              <div className="flex gap-8">
                <a href="#" className="hover:text-[#F15A24] hover:-translate-y-1 transition-all duration-300"><FaInstagram size={24} /></a>
                <a href="#" className="hover:text-[#F15A24] hover:-translate-y-1 transition-all duration-300"><FaFacebook size={24} /></a>
                <a href="#" className="hover:text-[#F15A24] hover:-translate-y-1 transition-all duration-300"><FaGoogle size={24} /></a>
                <a href="#" className="hover:text-[#F15A24] hover:-translate-y-1 transition-all duration-300"><FaLinkedin size={24} /></a>
              </div>
            </section>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-[#1C332D] text-white p-10 rounded-[35px] shadow-2xl relative overflow-hidden">
              <h4 className="text-[#F15A24] text-[10px] font-black uppercase tracking-widest mb-6">Support-Garantie</h4>
              <p className="text-xl md:text-2xl font-serif italic leading-relaxed opacity-90 relative z-10">
                "Wir antworten in der Regel innerhalb von 24 Stunden mit einer detaillierten Analyse Ihrer Anfrage."
              </p>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#F15A24]/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto px-5 py-12 border-t border-[#1C443C]/10 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] tracking-[0.3em] uppercase font-black opacity-40 text-center md:text-left">
            AON CREATIVE • © 2026 Engineering Aesthetics
          </p>
          <div className="flex gap-6 text-[9px] uppercase tracking-widest font-black">
            <Link href="/impressum" className="hover:text-[#F15A24] transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-[#F15A24] transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}