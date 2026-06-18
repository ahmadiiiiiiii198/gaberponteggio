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
              <div className="font-display text-lg font-semibold">Gaber Ponteggi S.r.l.</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                Noleggio · Montaggio · Smontaggio Ponteggi
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">Sede</div>
              <div className="leading-relaxed">
                Via Papa Giovanni XXIII, 11
                <br />
                40056 Valsamoggia (BO)
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">Contatti</div>
              <div className="leading-relaxed">
                <a href="tel:+393888891993" className="block hover:text-accent transition-colors">388 889 1993</a>
                <a href="https://maps.google.com/?q=Gaber+Ponteggi+Via+Papa+Giovanni+XXIII+11+Valsamoggia+BO" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">Indicazioni stradali</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              © {new Date().getFullYear()} Gaber Ponteggi S.r.l.
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/40 mt-1">
              Tutti i diritti riservati
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
