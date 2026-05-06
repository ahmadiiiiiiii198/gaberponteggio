import { ArrowUpRight, Construction, Building2, Layers, ShieldCheck, Camera, BellRing, Truck } from "lucide-react";
import scaffoldImg from "@/assets/scaffold-detail.jpg";
import copertureImg from "@/assets/coperture.jpg";
import ascensoreImg from "@/assets/ascensore.jpg";
import { useReveal } from "@/hooks/use-reveal";

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
    label: "01",
    title: "100% Sicurezza",
    desc: "Strutture a norma CE, DPI e formazione costante della squadra.",
    accent: "from-accent/30 to-transparent",
  },
  {
    icon: Camera,
    label: "02",
    title: "Videosorveglianza",
    desc: "Telecamere H24 per proteggere il cantiere e i materiali.",
    accent: "from-primary/20 to-transparent",
  },
  {
    icon: BellRing,
    label: "03",
    title: "Allarme antifurto",
    desc: "Sensori dedicati al ponteggio contro intrusioni notturne.",
    accent: "from-accent/30 to-transparent",
  },
  {
    icon: Truck,
    label: "04",
    title: "Trasporto & consegna",
    desc: "Mezzi propri per carichi pesanti, consegna puntuale in cantiere.",
    accent: "from-primary/20 to-transparent",
  },
];

export const Services = () => {
  const header = useReveal<HTMLDivElement>();
  const highlightsRef = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const cardsRef = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="servizi" className="py-20 md:py-36 relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <div
          ref={header.ref}
          className={`grid md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-24 items-end reveal-on-scroll ${
            header.visible ? "is-visible" : ""
          }`}
        >
          <div className="md:col-span-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (02) Servizi
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display text-balance text-4xl sm:text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em]">
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

        {/* Highlights — animated showcase */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent">
              ✦ Sempre incluso
            </span>
            <span className="flex-1 h-px bg-border" />
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">
              04 / Servizi extra
            </span>
          </div>

          <div
            ref={highlightsRef.ref}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 reveal-stagger ${
              highlightsRef.visible ? "is-visible" : ""
            }`}
          >
            {highlights.map((h, idx) => (
              <article
                key={h.title}
                className="highlight-card-anim group relative bg-card border border-border hover:border-primary p-6 md:p-7 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              >
                {/* Diagonal accent */}
                <div
                  className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl ${h.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rotate-45`}
                />

                {/* Number watermark */}
                <span className="absolute -bottom-4 -right-1 font-display text-[6rem] leading-none font-bold text-primary/[0.04] select-none pointer-events-none">
                  {h.label}
                </span>

                <div className="relative flex items-start justify-between gap-4">
                  <div className="highlight-icon w-12 h-12 md:w-14 md:h-14 bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                    <h.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 mt-2">
                    {h.label} / 04
                  </span>
                </div>

                <div className="relative">
                  <h3 className="font-display text-2xl md:text-[1.7rem] font-medium tracking-tight text-primary leading-tight">
                    {h.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {h.desc}
                  </p>
                </div>

                {/* Bottom line that draws on hover */}
                <span className="absolute bottom-0 left-0 h-0.5 bg-accent w-0 group-hover:w-full transition-all duration-700" />
              </article>
            ))}
          </div>
        </div>

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary">
            ✦ I servizi principali
          </span>
          <span className="flex-1 h-px bg-border" />
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">
            03 / Discipline
          </span>
        </div>

        {/* Service cards */}
        <div
          ref={cardsRef.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 reveal-stagger ${
            cardsRef.visible ? "is-visible" : ""
          }`}
        >
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative bg-card border border-border overflow-hidden hover:border-primary transition-all duration-500 flex flex-col"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Image */}
              <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden bg-muted relative">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground bg-primary/80 backdrop-blur-sm px-2 py-1">
                  {s.n} / 03
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 md:w-10 md:h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center text-primary">
                  <s.icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-8 space-y-4 md:space-y-5 flex-grow flex flex-col">
                <div>
                  <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1 md:mb-2">
                    {s.sub}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">{s.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] md:text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-1 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contatti"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link pt-2 mt-auto"
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
