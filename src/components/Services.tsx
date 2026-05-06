import { ArrowUpRight, Construction, Building2, Layers, ShieldCheck, Camera, BellRing, Truck } from "lucide-react";
import scaffoldImg from "@/assets/scaffold-detail.jpg";
import copertureImg from "@/assets/coperture.jpg";
import ascensoreImg from "@/assets/ascensore.jpg";

const services = [
  {
    n: "01",
    title: "Ponteggi",
    sub: "Montaggio · Smontaggio · Noleggio",
    desc: "Strutture certificate per facciate fino a 50 metri. Progettazione PiMUS, montaggio rapido, consegna inclusa e protezione completa con teli e videosorveglianza.",
    icon: Construction,
    image: scaffoldImg,
    tags: ["PiMUS", "Coperti con teli", "Videosorveglianza", "Allarme antifurto"],
  },
  {
    n: "02",
    title: "Ascensori da cantiere",
    sub: "Trasporto persone e materiali",
    desc: "Elevatori esterni installati in autonomia o integrati al ponteggio. Fino a 2.000 kg di portata, sicurezza europea e servizio di consegna in cantiere.",
    icon: Building2,
    image: ascensoreImg,
    tags: ["EN 12159", "2000 kg", "Velocità 40 m/min"],
  },
  {
    n: "03",
    title: "Coperture",
    sub: "Tetti provvisori e protezioni",
    desc: "Coperture mobili impermeabili e teli di rivestimento per restauri, demolizioni e protezione del cantiere in ogni stagione.",
    icon: Layers,
    image: copertureImg,
    tags: ["Antigrandine", "Modulari", "Teli traspiranti"],
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "100% Sicurezza",
    desc: "Strutture a norma CE, DPI e formazione costante della squadra.",
  },
  {
    icon: Camera,
    title: "Videosorveglianza",
    desc: "Telecamere H24 per proteggere il cantiere e i materiali.",
  },
  {
    icon: BellRing,
    title: "Allarme antifurto",
    desc: "Sensori dedicati al ponteggio contro intrusioni notturne.",
  },
  {
    icon: Truck,
    title: "Trasporto & consegna",
    desc: "Mezzi propri per carichi pesanti, consegna puntuale in cantiere.",
  },
];

export const Services = () => {
  return (
    <section id="servizi" className="py-24 md:py-36 relative">
      <div className="container">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="md:col-span-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (02) Servizi
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display text-balance text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em]">
              Tre discipline.
              <br />
              <span className="italic font-light text-muted-foreground">Una sola</span> firma.
            </h2>
          </div>
          <div className="md:col-span-3 text-sm text-muted-foreground leading-relaxed">
            Ogni intervento è studiato sull'edificio: rilievo, calcolo strutturale, installazione e collaudo.
            Una squadra unica, dal primo sopralluogo all'ultimo bullone.
          </div>
        </div>

        {/* Highlights strip — supporting features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-16 md:mb-20">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group bg-background hover:bg-secondary/60 transition-colors p-6 md:p-8 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 border border-primary/20 bg-primary/[0.03] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <h.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Incluso
                </span>
              </div>
              <div className="font-display text-xl md:text-2xl font-medium tracking-tight text-primary">
                {h.title}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative bg-card border border-border overflow-hidden hover:border-primary transition-all duration-500"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground bg-primary/80 backdrop-blur-sm px-2 py-1">
                  {s.n} / 03
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center text-primary">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    {s.sub}
                  </div>
                  <h3 className="font-display text-3xl font-medium tracking-tight">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-1 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contatti"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link pt-2"
                >
                  <span className="border-b border-primary/30 pb-0.5">Richiedi info</span>
                  <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
