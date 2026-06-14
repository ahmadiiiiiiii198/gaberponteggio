import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-glow/20">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 flex items-center gap-4">
            <div className="shrink-0">
              <Logo className="h-16 w-auto" />
            </div>
            <div>
              <div className="font-display text-lg font-semibold">Granda Ponteggi SRLS</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                di Carta Gianluca · Noleggio · Montaggio · Smontaggio
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">Sede</div>
              <div className="leading-relaxed">
                Via Circonvallazione G. Giolitti, 24
                <br />
                12030 Torre San Giorgio (CN)
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">Contatti</div>
              <div className="leading-relaxed">
                <a href="tel:+393406847275" className="block hover:text-accent transition-colors">340 684 7275</a>
                <a href="tel:+393383597518" className="block hover:text-accent transition-colors">338 359 7518</a>
                <a href="mailto:grandaponteggi@gmail.com" className="block hover:text-accent transition-colors break-all">
                  grandaponteggi@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              © {new Date().getFullYear()} Granda Ponteggi SRLS
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/40 mt-1">
              P.IVA 11757940017 · Tutti i diritti riservati
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
