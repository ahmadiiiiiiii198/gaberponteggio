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
              <div className="font-display text-lg font-semibold">Sarda Ponteggi</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                Ponteggi · Ascensori · Coperture · Materiali Edili
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">Sede</div>
              <div className="leading-relaxed">
                Località S'Iscalone
                <br />
                07049 Usini (SS)
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-3">Contatti</div>
              <div className="leading-relaxed">
                <a href="tel:+393341922557" className="block hover:text-accent transition-colors">334 192 2557</a>
                <a href="mailto:info@sardaponteggi.it" className="block hover:text-accent transition-colors break-all">
                  info@sardaponteggi.it
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              © {new Date().getFullYear()} Sarda Ponteggi
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
