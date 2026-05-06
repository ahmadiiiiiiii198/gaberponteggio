import { Logo } from "./Logo";

export const About = () => {
  return (
    <section id="azienda" className="py-20 md:py-36">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-5 flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-[280px] md:max-w-sm aspect-square">
              <div className="absolute inset-0 bg-secondary -rotate-3" />
              <div className="absolute inset-0 border-2 border-primary rotate-2" />
              <div className="absolute inset-4 md:inset-6 bg-background flex items-center justify-center text-primary p-6 md:p-8">
                <Logo className="h-full w-full" />
              </div>
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-accent text-accent-foreground px-3 py-1.5 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em]">
                Est. Torino · 2014
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
