import { ArrowRight, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-20 bg-primary text-primary-foreground">
      {/* Subtle background grid for the text panel */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="relative grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] min-h-[calc(100vh-5rem)]">
        {/* LEFT — Text & buttons (no video here) */}
        <div className="relative order-2 lg:order-1 flex flex-col justify-between px-5 sm:px-6 md:px-12 lg:px-16 py-10 md:py-16 reveal-up overflow-hidden">
          {/* Top: location bar + credentials */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              <span>Località S'Iscalone — 07049 Usini (SS)</span>
              <span className="w-8 h-px bg-primary-foreground/30 mx-1" />
              <span>Sardegna</span>
            </div>

            {/* Credentials strip (moved from the video) */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/15 px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                <span className="text-primary-foreground/90">Videosorveglianza H24</span>
              </div>
              <div className="inline-flex items-center bg-primary-foreground/5 border border-primary-foreground/15 px-3 py-1.5">
                <span className="text-primary-foreground/90">Allarme antifurto</span>
              </div>
              <div className="inline-flex items-center bg-accent/15 border border-accent/30 px-3 py-1.5">
                <span className="text-accent">100% Sicurezza</span>
              </div>
            </div>
          </div>

          {/* Middle: heading + paragraph */}
          <div className="my-10 lg:my-0">
            <h1 className="font-display font-medium text-[clamp(2rem,11vw,6.5rem)] leading-[0.95] tracking-[-0.03em] break-words">
              Costruiamo
              <br />
              <span className="italic font-light text-primary-foreground/90">l'impalcatura</span>
              <br />
              del tuo <span className="text-accent">cantiere.</span>
            </h1>

            <p className="mt-6 md:mt-8 text-sm md:text-lg text-primary-foreground/80 max-w-xl leading-relaxed font-light">
              Noleggio, montaggio, progettazione e vendita di ponteggi per cantieri, ascensori e coperture provvisorie.
              Fornitore di materiali edili di eccellenza per tutta la Sardegna, con sede a Usini (Sassari).
              Garantiamo massima professionalità e sicurezza in conformità con tutte le normative vigenti.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contatti"
                className="group relative inline-flex items-center justify-between gap-6 sm:gap-8 bg-accent text-accent-foreground px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 overflow-hidden"
              >
                <span className="relative z-10">Richiedi un preventivo</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#servizi"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Esplora i servizi
              </a>
            </div>
          </div>

          {/* Bottom: section index */}
          <div className="flex items-center gap-3 sm:gap-6 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">
            <span className="text-primary-foreground whitespace-nowrap">01 — Hero</span>
            <span className="w-6 sm:w-12 h-px bg-primary-foreground/30" />
            <span className="whitespace-nowrap">02 — Servizi</span>
            <span className="w-12 h-px bg-primary-foreground/30 hidden md:inline-block" />
            <span className="hidden md:inline whitespace-nowrap">03 — Processo</span>
          </div>
        </div>

        {/* RIGHT — Video (clean, nothing on top) */}
        <div className="relative order-1 lg:order-2 min-h-[55vh] lg:min-h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Decorative tape strip on left edge of video */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-1.5 tape" />
        </div>
      </div>

      {/* Bottom stats bar — full width across both columns */}
      <div className="relative border-t border-primary-foreground/15 bg-primary text-primary-foreground">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/15">
          {[
            { k: "4.8 ★", v: "Valutazione Google" },
            { k: "4", v: "Recensioni Clienti" },
            { k: "100%", v: "Sicurezza Certificata" },
            { k: "Regionale", v: "Copertura Sardegna" },
          ].map((s) => (
            <div key={s.v} className="px-4 md:px-8 py-5">
              <div className="font-display text-3xl md:text-4xl font-medium tracking-tight">{s.k}</div>
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mt-1">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
