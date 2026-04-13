"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ConsentManager: Sadeleştirilmiş Çerez Onay Mekanizması.
 * Sadece Onayla ve Reddet seçenekleri içerir.
 */
export default function ConsentManager() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("aon_consent_status");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (status: "granted" | "denied") => {
    localStorage.setItem("aon_consent_status", status);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[9999] md:left-auto md:right-10 md:max-w-[320px]"
        >
          <div className="bg-[#1C443C] text-[#E7E2C8] p-6 rounded-[30px] shadow-2xl border border-white/10 backdrop-blur-md text-center">
            <div className="bg-[#F15A24] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white text-lg">🍪</span>
            </div>
            
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-3">
              Cookie-Einstellungen
            </h4>

            <p className="text-[10px] leading-relaxed opacity-70 uppercase font-bold tracking-wider mb-6">
              Wir verwenden Cookies, um Ihre Erfahrung zu optimieren. 
              Sind Sie mit der Nutzung einverstanden?
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleAction("granted")}
                className="w-full bg-[#F15A24] text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#ff6a33] transition-all active:scale-95"
              >
                Akzeptieren
              </button>
              <button
                onClick={() => handleAction("denied")}
                className="w-full bg-white/5 text-[#E7E2C8]/60 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all border border-white/5"
              >
                Ablehnen
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex justify-center">
  <a 
    href="https://www.instagram.com/aoncreative__/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-[10px] opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 tracking-[0.2em] uppercase font-black"
  >
    <span>Instagram</span>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  </a>
</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}