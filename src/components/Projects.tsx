import { ArrowUpRight } from "lucide-react";

const projects = [
  { ref: "SS·112", name: "Complesso Residenziale, Sassari Centro", year: "2024", type: "Restauro facciata", height: "22 m" },
  { ref: "SS·115", name: "Villa Storica, Alghero", year: "2024", type: "Ristrutturazione esterna", height: "15 m" },
  { ref: "SS·118", name: "Capannone Industriale, Porto Torres", year: "2024", type: "Copertura provvisoria", height: "14 m" },
  { ref: "SS·121", name: "Condominio Moderno, Olbia", year: "2025", type: "Ponteggio + ascensore", height: "28 m" },
  { ref: "SS·124", name: "Restauro Basilica, Sassari", year: "2025", type: "Restauro conservativo", height: "26 m" },
];

export const Projects = () => {
  return (
    <section id="progetti" className="py-24 md:py-36 bg-secondary/40">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8 mb-12 items-end">
          <div className="md:col-span-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (05) Progetti
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display text-balance text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em]">
              Cantieri recenti
              <br />
              <span className="italic font-light">in tutta la Sardegna.</span>
            </h2>
          </div>
        </div>

        <div className="border-t border-primary/20">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-[100px_2fr_1fr_1fr_80px_40px] gap-4 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground border-b border-border">
            <span>Rif.</span>
            <span>Progetto</span>
            <span>Tipologia</span>
            <span>Anno</span>
            <span>H</span>
            <span></span>
          </div>

          {projects.map((p) => (
            <a
              key={p.ref}
              href="#contatti"
              className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[100px_2fr_1fr_1fr_80px_40px] gap-x-4 gap-y-1 py-5 md:py-8 border-b border-border hover:bg-background transition-colors group items-center"
            >
              <span className="font-mono text-[10px] md:text-xs text-accent">{p.ref}</span>
              <span className="font-display text-lg md:text-2xl font-medium tracking-tight group-hover:italic transition-all truncate">
                {p.name}
              </span>
              <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all justify-self-end" />
              
              <div className="col-start-2 flex flex-wrap gap-x-4 gap-y-1 md:hidden">
                <span className="text-[10px] text-muted-foreground">{p.type}</span>
                <span className="font-mono text-[10px] text-muted-foreground/60">{p.year}</span>
                <span className="font-mono text-[10px] text-muted-foreground/60">H: {p.height}</span>
              </div>

              <span className="hidden md:inline text-sm text-muted-foreground">{p.type}</span>
              <span className="hidden md:inline font-mono text-sm">{p.year}</span>
              <span className="hidden md:inline font-mono text-sm">{p.height}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
