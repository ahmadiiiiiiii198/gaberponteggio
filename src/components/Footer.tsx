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
              <div className="font-display text-lg font-semibold">Italponteggi S.r.l.</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                Noleggio · Montaggio · Smontaggio Ponteggi
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">Sede</div>
              <div className="leading-relaxed">
                Via Della Fisica, 2-4
                <br />
                30176 Malcontenta (VE)
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">Contatti</div>
              <div className="leading-relaxed">
                <a href="tel:+390415470791" className="block hover:text-accent transition-colors">041 547 0791</a>
                <a href="https://italmarcato.it" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">italmarcato.it</a>
                <a href="mailto:info@italmarcato.it" className="block hover:text-accent transition-colors break-all">
                  info@italmarcato.it
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              © {new Date().getFullYear()} Italponteggi S.r.l.
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
