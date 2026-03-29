"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Daha önce onay verilip verilmediğini kontrol et
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:w-[400px] z-[9999]"
        >
          <div className="bg-[#1C443C] text-[#E7E2C8] p-6 rounded-[32px] shadow-2xl border border-[#F15A24]/20 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍪</span>
                <h3 className="font-bold uppercase tracking-widest text-xs text-[#F15A24]">
                  Cookie-Einstellungen
                </h3>
              </div>
              
              <p className="text-sm leading-relaxed opacity-80">
                Wir nutzen Cookies, um Ihre Erfahrung auf **AON Creative** zu verbessern. 
                Sind Sie damit einverstanden?
              </p>

              <div className="flex gap-3 mt-2">
                <button
                  onClick={acceptCookies}
                  className="flex-1 bg-[#F15A24] text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-full hover:bg-white hover:text-[#1C443C] transition-all duration-300"
                >
                  Akzeptieren
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="flex-1 bg-transparent border border-[#E7E2C8]/20 text-[#E7E2C8] text-[10px] font-black uppercase tracking-widest py-3 rounded-full hover:bg-[#E7E2C8]/10 transition-all"
                >
                  Ablehnen
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}