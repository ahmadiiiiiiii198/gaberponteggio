import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contatti" className="py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (06) Contatti
          </div>
          <div className="md:col-span-10">
            <h2 className="font-display text-balance text-5xl md:text-8xl font-medium leading-[0.92] tracking-[-0.03em]">
              Parliamone
              <br />
              <span className="italic font-light">davanti a un caffè.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Sopralluogo gratuito ovunque a Torino e provincia. Risposta entro 24 ore lavorative,
              preventivo dettagliato in 48.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 lg:gap-8 mt-16">
          {/* Phone card */}
          <a
            href="tel:+393476852324"
            className="md:col-span-5 group relative bg-primary text-primary-foreground p-8 md:p-10 overflow-hidden hover:bg-primary-glow transition-colors"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-6">
              Cellulare · Soliman
            </div>
            <div className="font-display text-3xl md:text-5xl font-medium tracking-tight">
              347 685 23 24
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4" />
              <span>Chiama ora</span>
              <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-primary-foreground/10 rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-primary-foreground/10 rounded-full" />
          </a>

          {/* Office */}
          <a
            href="tel:+390397442190"
            className="md:col-span-3 bg-secondary p-8 hover:bg-accent hover:text-accent-foreground transition-colors group"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-accent-foreground/70 mb-6">
              Ufficio
            </div>
            <div className="font-display text-2xl md:text-3xl font-medium tracking-tight">
              344 744 21 90
            </div>
            <div className="mt-6 text-xs font-mono uppercase tracking-wider opacity-70">
              Lun—Ven · 8:00–18:00
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info.solimanponteggi@gmail.com"
            className="md:col-span-4 border border-primary p-8 hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-primary-foreground/70 mb-6 flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              Mail
            </div>
            <div className="font-display text-xl md:text-2xl font-medium tracking-tight break-all">
              info.solimanponteggi
              <br />
              @gmail.com
            </div>
          </a>

          {/* Address */}
          <div className="md:col-span-12 border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 mt-0.5 text-accent" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  Sede operativa
                </div>
                <div className="font-display text-xl">Via Coppino, 39 — 10147 Torino (TO)</div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Via+Coppino+39+Torino"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold border-b border-primary pb-1 hover:gap-3 transition-all"
            >
              Apri in Google Maps
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
