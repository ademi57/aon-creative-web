"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface TerminalLoaderProps {
  onComplete: () => void;
}

export default function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#E7E2C8]" 
    >
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1.15 }}
          transition={{ duration: 3.2, ease: [0.2, 0, 0.2, 1] }}
          className="w-full max-w-[550px] md:max-w-[700px] px-12"
        >
          <img src="/logo.png" alt="AON" className="w-full h-auto mix-blend-multiply" />
        </motion.div>
        
        {/* SİLDİĞİMİZ KISIM BURADAYDI (Yüklenme Çizgisi) */}
        
      </div>
    </motion.div>
  );
}