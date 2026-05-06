import { ArrowUpRight } from "lucide-react";

const projects = [
  { ref: "TO·087", name: "Palazzo storico, San Salvario", year: "2024", type: "Restauro facciata", height: "28 m" },
  { ref: "TO·091", name: "Edificio residenziale, Vanchiglia", year: "2024", type: "Cappotto termico", height: "18 m" },
  { ref: "TO·094", name: "Capannone industriale, Mirafiori", year: "2024", type: "Copertura provvisoria", height: "12 m" },
  { ref: "TO·098", name: "Condominio, Crocetta", year: "2025", type: "Ponteggio + ascensore", height: "32 m" },
  { ref: "TO·102", name: "Chiesa, Centro storico", year: "2025", type: "Restauro conservativo", height: "24 m" },
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
              <span className="italic font-light">a Torino e provincia.</span>
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
              className="grid grid-cols-2 md:grid-cols-[100px_2fr_1fr_1fr_80px_40px] gap-4 py-6 md:py-8 border-b border-border hover:bg-background transition-colors group items-center"
            >
              <span className="font-mono text-xs text-accent col-span-2 md:col-span-1">{p.ref}</span>
              <span className="font-display text-xl md:text-2xl font-medium tracking-tight col-span-2 md:col-span-1 group-hover:italic transition-all">
                {p.name}
              </span>
              <span className="text-sm text-muted-foreground">{p.type}</span>
              <span className="font-mono text-sm">{p.year}</span>
              <span className="font-mono text-sm">{p.height}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
