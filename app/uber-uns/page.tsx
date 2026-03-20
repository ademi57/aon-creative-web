"use client";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaHandshake, FaRocket } from "react-icons/fa";

export default function UberUns() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <main className="min-h-screen bg-[#E7E2C8] text-[#1C443C] font-sans selection:bg-[#F15A24] selection:text-white pb-20">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-[#1C443C]/10">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center z-10 px-5"
        >
          <h1 className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F15A24] mb-4">Über AON Creative</h1>
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

      <div className="max-w-6xl mx-auto px-5 md:px-6 py-20">
        {/* --- MISSION STATEMENT --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">Willkommen in der <br/>Zukunft des Webdesigns.</h3>
            <p className="text-lg opacity-80 leading-relaxed">
              AON Creative ist nicht nur eine Agentur – wir sind ein Kollektiv aus Visionären, Entwicklern und Strategen. In Ettlingen verwurzelt, agieren wir mit einer globalen Denkweise, um digitale Erlebnisse zu schaffen, die weit über das Standardmaß hinausgehen.
            </p>
          </motion.div>
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#1C443C] text-[#E7E2C8] p-10 rounded-3xl flex flex-col justify-center"
          >
            <h4 className="text-[#F15A24] font-black uppercase text-[10px] tracking-widest mb-4">Unsere Mission</h4>
            <p className="text-xl font-medium leading-relaxed italic">
              "Wir schaffen funktionale Ästhetik, die Ihre Marke nachhaltig stärkt, Geschäftsziele präzise erreicht und digitales Wachstum messbar macht."
            </p>
          </motion.div>
        </section>

        {/* --- WAS UNS AUSZEICHNET (GRID) --- */}
        <section className="mb-40">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Was uns auszeichnet</h3>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <FeatureCard 
              Icon={FaBullseye}
              title="Lokale Expertise"
              desc="Als Unternehmen aus Ettlingen verstehen wir den regionalen Markt perfekt ve kombinieren dies mit globalen Technologietrends."
            />
            <FeatureCard 
              Icon={FaLightbulb}
              title="Individuelle Lösungen"
              desc="Jedes Projekt ist ein Unikat. Wir bieten maßgeschneiderte Architekturen, die exakt auf Ihre Anforderungen zugeschnitten sind."
            />
            <FeatureCard 
              Icon={FaRocket}
              title="Innovation & Qualität"
              desc="Durch den Einsatz modernster Frameworks garantieren wir langlebige, performante ve visuell beeindruckende Ergebnisse."
            />
          </motion.div>
        </section>

        {/* --- PARTNERSCHAFT (DETAYLI BÖLÜM) --- */}
        <section className="relative bg-white/30 rounded-[40px] p-8 md:p-20 overflow-hidden mb-40">
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8">Partnerschaftliche <br/> Zusammenarbeit.</h3>
            <p className="text-lg opacity-75 mb-10 leading-relaxed">
              Für uns sind Sie mehr als nur ein Auftraggeber. Wir verstehen uns als integraler Partner Ihres Erfolgs. Von der ersten Konzeption bis zur langfristigen Wartung begleiten wir Ihre Vision mit Leidenschaft ve technischer Präzision.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-[#1C443C]/5 border border-[#1C443C]/10 rounded-full text-[10px] font-bold uppercase tracking-widest">Responsive Design</span>
              <span className="px-4 py-2 bg-[#1C443C]/5 border border-[#1C443C]/10 rounded-full text-[10px] font-bold uppercase tracking-widest">E-Commerce</span>
              <span className="px-4 py-2 bg-[#1C443C]/5 border border-[#1C443C]/10 rounded-full text-[10px] font-bold uppercase tracking-widest">SEO Optimization</span>
              <span className="px-4 py-2 bg-[#1C443C]/5 border border-[#1C443C]/10 rounded-full text-[10px] font-bold uppercase tracking-widest">Webhosting</span>
            </div>
          </div>
          <div className="absolute right-[-10%] bottom-[-10%] opacity-[0.05] hidden md:block">
            <FaHandshake size={400} />
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <motion.section 
          whileHover={{ scale: 1.01 }}
          className="bg-[#F15A24] rounded-[40px] p-12 md:p-24 text-center text-white shadow-2xl shadow-[#F15A24]/30"
        >
          <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-8 italic">Bereit für den Erfolg?</h3>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
            Haben Sie eine Projektidee? Lassen Sie uns gemeinsam etwas Herausragendes schaffen.
          </p>
          <a 
            href="/kontakt" 
            className="inline-block bg-[#1C443C] text-[#E7E2C8] px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#F15A24] transition-all duration-500"
          >
            Kontaktieren Sie uns
          </a>
        </motion.section>
      </div>
    </main>
  );
}

function FeatureCard({ Icon, title, desc }: { Icon: any, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white/40 border border-[#1C443C]/5 p-10 rounded-3xl"
    >
      <div className="text-[#F15A24] text-4xl mb-6">
        <Icon />
      </div>
      <h4 className="text-xl font-bold uppercase tracking-tighter mb-4 leading-tight">{title}</h4>
      <p className="text-sm opacity-70 leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}