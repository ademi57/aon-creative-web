"use client";

export default function datenschutz() {
  return (
    <main className="min-h-screen bg-[#E7E2C8] text-[#1C443C] font-sans selection:bg-[#F15A24] selection:text-white">
      <nav className="max-w-6xl mx-auto px-5 py-6 md:py-10 border-b border-[#1C443C]/10 flex justify-between items-center relative z-[1000]">
        <a href="/" className="font-black text-xl tracking-tighter uppercase">AON Creative</a>
        <a href="/kontakt" className="bg-[#F15A24] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Kontakt</a>
      </nav>

      <div className="max-w-3xl mx-auto px-5 py-20">
        <h1 className="text-5xl font-black tracking-tighter mb-12 uppercase text-[#F15A24]">Datenschutz</h1>
        
        <div className="space-y-10 opacity-90 leading-relaxed text-sm">
          <section>
            <h2 className="font-black uppercase tracking-widest text-[10px] mb-4 opacity-50 underline">1. Datenschutz auf einen Blick</h2>
            <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden auf dieser Webseite nur im technisch notwendigen Umfang erhoben.</p>
          </section>

          <section>
            <h2 className="font-black uppercase tracking-widest text-[10px] mb-4 opacity-50 underline">2. Datenerfassung</h2>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. im Kontaktformular).</p>
          </section>

          <section>
            <h2 className="font-black uppercase tracking-widest text-[10px] mb-4 opacity-50 underline">3. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung veya Löschung Ihrer gespeicherten personenbezogenen Daten.</p>
          </section>

          <div className="pt-10 border-t border-[#1C443C]/10 text-[10px] opacity-40 uppercase tracking-[0.2em]">
             AON Creative — Digital Studio Privacy Policy
          </div>
        </div>
      </div>
    </main>
  );
}