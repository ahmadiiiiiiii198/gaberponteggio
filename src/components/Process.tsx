import workerImg from "@/assets/worker.jpg";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { n: "01", title: "Sopralluogo", desc: "Rilievo dell'edificio, analisi dei vincoli e definizione del perimetro di lavoro." },
  { n: "02", title: "Progetto & PiMUS", desc: "Disegno tecnico, calcolo statico e Piano di Montaggio firmato dal nostro tecnico." },
  { n: "03", title: "Montaggio", desc: "Squadra qualificata, attrezzatura certificata, tempi rispettati al giorno." },
  { n: "04", title: "Manutenzione", desc: "Verifica periodica, integrazioni e pronto intervento per tutta la durata del cantiere." },
  { n: "05", title: "Smontaggio", desc: "Rimozione ordinata, pulizia dell'area, restituzione dello spazio pubblico." },
];

export const Process = () => {
  const header = useReveal<HTMLDivElement>();
  const list = useReveal<HTMLOListElement>({ threshold: 0.1 });
  const image = useReveal<HTMLDivElement>();

  return (
    <section id="processo" className="py-20 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="container relative">
        <div
          ref={header.ref}
          className={`grid md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-20 items-end reveal-on-scroll ${
            header.visible ? "is-visible" : ""
          }`}
        >
          <div className="md:col-span-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
            (03) Processo
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display text-balance text-4xl sm:text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em]">
              Cinque passi.
              <br />
              <span className="italic font-light text-primary-foreground/50">Zero</span> sorprese.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          {/* Image column */}
          <div
            ref={image.ref}
            className={`md:col-span-5 reveal-on-scroll ${image.visible ? "is-visible" : ""}`}
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={workerImg}
                alt="Operaio specializzato durante il montaggio di un ponteggio"
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 mix-blend-multiply" style={{ background: "hsl(var(--primary) / 0.4)" }} />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-primary-foreground">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                    On-site
                  </div>
                  <div className="font-display text-2xl mt-1">Gaber Ponteggi</div>
                </div>
                <span className="font-mono text-xs">→ BO·001</span>
              </div>
            </div>
          </div>

          {/* Steps column */}
          <div className="md:col-span-7">
            <ol
              ref={list.ref}
              className={`divide-y divide-primary-foreground/15 border-y border-primary-foreground/15 reveal-stagger ${
                list.visible ? "is-visible" : ""
              }`}
            >
              {steps.map((step, i) => (
                <li
                  key={step.n}
                  className="grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-baseline py-6 md:py-8 group cursor-default"
                >
                  <span className="font-mono text-[10px] md:text-sm text-accent">{step.n}</span>
                  <div>
                    <h3 className="font-display text-xl md:text-4xl font-medium tracking-tight group-hover:italic transition-all">
                      {step.title}
                    </h3>
                    <p className="mt-1 md:mt-2 text-xs md:text-base text-primary-foreground/65 max-w-xl leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-primary-foreground/40 hidden md:inline">
                    Step {i + 1}/5
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
