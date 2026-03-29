"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebook, FaGoogle, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { sendEmail } from "./actions";

export default function Kontakt() {
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

    setStatus("Senden...");
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus("Vielen Dank! Ihre Nachricht wurde gesendet.");
        formRef.current?.reset();
      } else {
        setStatus("Fehler! Bitte versuchen Sie es später erneut.");
      }
    } catch (err) {
      setStatus("Ein Fehler ist aufgetreten.");
    }
  }

  return (
    <main className="min-h-screen bg-[#E7E2C8] text-[#1C443C] font-sans selection:bg-[#F15A24] selection:text-white overflow-x-hidden">
      
      {/* --- HEADER / NAVIGATION --- */}
      <nav className="max-w-6xl mx-auto px-5 md:px-6 flex justify-between items-center py-6 md:py-10 border-b border-[#1C443C]/10 relative z-[1000]">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <a href="/">
            <img src="/logo.png" alt="AON Creative" className="w-32 md:w-40 block transition-all duration-300" />
          </a>
        </div>

        {/* Center Button - "Angebot anfordern" tek satır ve ortalı */}
        <div className="flex-1 flex justify-center items-center">
          <motion.a
            href="/kontakt"
            whileHover={{ scale: 1.05, backgroundColor: "#1C443C", color: "#E7E2C8" }}
            className="bg-[#F15A24] text-white px-4 py-2.5 md:px-8 md:py-3.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#F15A24]/20 transition-all duration-300 whitespace-nowrap min-w-fit text-center inline-block"
          >
            Angebot anfordern
          </motion.a>
        </div>

        {/* Nav Links & Burger Button */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.25em] font-bold opacity-60 mr-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-[#F15A24] transition-colors">{link.name}</a>
            ))}
          </div>
          
          {/* Burger / X Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 outline-none relative z-[2100]"
            aria-label="Menu"
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
          <motion.div 
            initial={{ opacity: 0, x: "100%" }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: "100%" }} 
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 bg-[#E7E2C8] z-[2000] flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1 }} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#1C443C] hover:text-[#F15A24] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            {/* Socials in Menu */}
            <div className="absolute bottom-12 flex gap-8 opacity-40">
               <FaInstagram size={20} />
               <FaFacebook size={20} />
               <FaLinkedin size={20} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FORM CONTENT --- */}
      <div className="max-w-6xl mx-auto px-5 md:px-6 pt-20 pb-20 relative z-10">
        <header className="mb-16">
          <h2 className="text-[#F15A24] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Kontakt</h2>
          <p className="text-xl md:text-3xl font-medium max-w-3xl leading-snug opacity-90">
            Haben Sie ein Projekt im Kopf oder benötigen Sie Hilfe bei Ihrem Shopify Store? 
            Füllen Sie das Formular aus – wir melden uns umgehend.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FORM KARTI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#F2EFE0]/60 backdrop-blur-md p-8 md:p-12 rounded-[40px] shadow-2xl border border-white/40"
          >
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
                    <option value="Webdesign">Webdesign erstellen</option>
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

              <button type="submit" className="w-full bg-[#F15A24] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-[#F15A24]/40 hover:bg-[#d94e1c] hover:-translate-y-1 active:scale-95 transition-all duration-300">
                Anfrage Senden
              </button>

              {status && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-xs font-bold uppercase tracking-widest mt-4 italic">
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* SAĞ TARAF: BİLGİ ALANI */}
          <div className="space-y-16 lg:pl-12">
            <section className="space-y-4 pt-10">
              <h4 className="text-[#F15A24] text-[10px] font-black uppercase tracking-widest">Direkt Kontakt</h4>
              <a href="mailto:info@aon-creative.com" className="text-3xl md:text-5xl font-black tracking-tighter hover:text-[#F15A24] transition-colors duration-300 underline underline-offset-8 decoration-[#F15A24]/20">
                info@aon-creative.com
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
    </main>
  );
}