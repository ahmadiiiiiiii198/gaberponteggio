import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-glow/20">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 flex items-center gap-4">
            <div className="h-16 w-16 bg-primary-foreground rounded-full flex items-center justify-center p-1.5 shrink-0">
              <Logo markOnly className="h-full" />
            </div>
            <div>
              <div className="font-display text-lg font-semibold">Soliman Ponteggi Elseidy</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                Ponteggi · Ascensori · Coperture
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">Sede</div>
              <div className="leading-relaxed">
                Via Coppino, 39
                <br />
                10147 Torino (TO)
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">Contatti</div>
              <div className="leading-relaxed">
                <a href="tel:+393476852324" className="block hover:text-accent transition-colors">347.685.23.24</a>
                <a href="mailto:info.solimanponteggi@gmail.com" className="block hover:text-accent transition-colors break-all">
                  info.solimanponteggi@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              © {new Date().getFullYear()} Soliman Ponteggi
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/40 mt-1">
              P.IVA · Tutti i diritti riservati
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
