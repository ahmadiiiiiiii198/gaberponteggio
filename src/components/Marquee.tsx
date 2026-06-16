export const Marquee = () => {
  const items = [
    "Noleggio Ponteggi",
    "Montaggio Sicuro",
    "Smontaggio Rapido",
    "Ascensori da Cantiere",
    "Coperture Provvisorie",
    "Videosorveglianza H24",
    "Allarme Antifurto",
    "Trasporto Carichi Pesanti",
    "Consegna in Cantiere",
    "100% Sicurezza",
    "Cantieri in Veneto",
  ];
  return (
    <div className="bg-primary text-primary-foreground border-y border-primary-glow/30 overflow-hidden ticker-wrap">
      <div className="flex marquee whitespace-nowrap py-5">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 md:gap-8 px-6 md:px-8">
            <span className="font-display text-xl md:text-4xl font-light italic">{item}</span>
            <span className="text-accent text-2xl md:text-3xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
