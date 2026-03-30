"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * ConsentManager: DSGVO uyumlu çerez onay banner'ı.
 * Kullanıcı deneyimini bozmadan şık bir onay mekanizması sunar.
 */
export default function ConsentManager() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Daha önce onay verilmiş mi kontrol et
    const consent = localStorage.getItem("aon_consent_status");
    if (!consent) {
      // Sayfa yüklendikten 2 saniye sonra nazikçe belirsin
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("aon_consent_status", "granted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 z-[9999] md:left-auto md:right-10 md:max-w-sm"
        >
          <div className="bg-[#1C443C] text-[#E7E2C8] p-6 rounded-[32px] shadow-2xl border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-[#F15A24] w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg rotate-3">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white leading-tight">
                Datenschutz & <br /> Privatsphäre
              </h4>
            </div>

            <p className="text-[10px] leading-relaxed opacity-70 uppercase font-bold tracking-wider mb-6">
              Wir verwenden Cookies, um Ihre Erfahrung auf AON Creative zu optimieren. 
              Durch Klicken auf "Akzeptieren" stimmen Sie der Datennutzung zu.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleAccept}
                className="w-full bg-[#F15A24] text-white py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.25em] hover:bg-[#ff6a33] transition-all active:scale-95 shadow-xl shadow-[#F15A24]/20"
              >
                Akzeptieren
              </button>
              <Link
                href="/datenschutz"
                className="w-full bg-white/5 text-[#E7E2C8] text-center py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white/10 transition-all border border-white/5"
              >
                Einstellungen
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}