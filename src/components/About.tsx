import { Logo } from "./Logo";

export const About = () => {
  return (
    <section id="azienda" className="py-20 md:py-36">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-5 flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-[320px] md:max-w-md aspect-square group/card">
              {/* Layered paper backdrops */}
              <div className="absolute inset-0 bg-secondary/70 -rotate-[4deg] shadow-sm" />
              <div className="absolute inset-0 bg-secondary/40 rotate-[2deg]" />
              <div className="absolute inset-0 border border-primary -rotate-[1.5deg]" />

              {/* Front card */}
              <div className="absolute inset-2 md:inset-3 bg-background border border-primary/15">
                {/* Architectural corner brackets */}
                <span className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/40" />
                <span className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/40" />
                <span className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/40" />
                <span className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/40" />

                {/* Vertical mono label on the left */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-muted-foreground/80">
                  Originale · Torino · IT
                </div>

                {/* Coordinates / serial */}
                <div className="absolute top-3 right-4 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-muted-foreground/70">
                  N° 045·2014
                </div>

                {/* Logo center with rotating accent ring on hover */}
                <div className="absolute inset-8 md:inset-10 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Decorative concentric ring */}
                    <span
                      className="absolute inset-0 rounded-full border border-dashed border-primary/15 group-hover/card:border-accent/50 group-hover/card:rotate-180 transition-all duration-[3s] ease-[cubic-bezier(.22,1,.36,1)]"
                      aria-hidden
                    />
                    <Logo
                      markOnly
                      className="h-full max-h-[80%] transition-transform duration-700 group-hover/card:scale-105"
                    />
                  </div>
                </div>

                {/* Bottom signature line */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-primary/70">
                  <span className="w-3 h-px bg-primary/40" />
                  <span>Soliman · Elseidy</span>
                  <span className="w-3 h-px bg-primary/40" />
                </div>
              </div>

              {/* Yellow stamp — pinned bottom-right */}
              <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 bg-accent text-accent-foreground px-3.5 py-1.5 md:px-4 md:py-2 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] shadow-lg shadow-accent/30">
                Est. Torino · 2014
              </div>

              {/* Top-left tag */}
              <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 bg-primary text-primary-foreground px-3 py-1.5 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                Marchio registrato
              </div>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 md:mb-6">
              (04) Azienda
            </div>
            <h2 className="font-display text-balance text-3xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em]">
              Un nome,
              <br />
              <span className="italic font-light">una stretta di mano,</span>
              <br />
              dieci anni di Torino sulle spalle.
            </h2>
            <div className="mt-6 md:mt-8 grid sm:grid-cols-2 gap-5 md:gap-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                Soliman Elseidy ha fondato l'impresa nel cuore industriale di Torino con un'idea semplice:
                un ponteggio è prima di tutto fiducia. Fiducia di chi ci lavora sopra, di chi ci passa sotto,
                di chi firma la commessa.
              </p>
              <p>
                Oggi la squadra opera in tutto il Piemonte, dal restauro di palazzi storici al cantiere
                industriale, mantenendo la stessa promessa: arrivare in orario, montare in sicurezza,
                lasciare l'area come fosse la propria.
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-3 border-t border-border pt-6 md:pt-8 gap-4">
              <div>
                <div className="font-display text-2xl md:text-4xl font-medium">CCNL</div>
                <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Edilizia
                </div>
              </div>
              <div>
                <div className="font-display text-2xl md:text-4xl font-medium">DURC</div>
                <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  In regola
                </div>
              </div>
              <div>
                <div className="font-display text-2xl md:text-4xl font-medium">RC</div>
                <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Assicurata
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
