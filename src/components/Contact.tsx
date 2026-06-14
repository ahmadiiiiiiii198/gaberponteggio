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
              <span className="italic font-light">senza impegno.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Sopralluogo gratuito in tutta la provincia di Cuneo e nel resto del Piemonte. Risposta entro 24 ore lavorative,
              preventivo personalizzato e dettagliato.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-4 md:gap-8 mt-12 md:mt-16">
          {/* Phone card */}
          <a
            href="tel:+393406847275"
            className="md:col-span-5 group relative bg-primary text-primary-foreground p-6 md:p-10 overflow-hidden hover:bg-primary-glow transition-colors"
          >
            <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 mb-4 md:mb-6">
              Telefono · Granda Ponteggi
            </div>
            <div className="font-display text-2xl md:text-5xl font-medium tracking-tight relative z-10">
              340 684 7275
            </div>
            <div className="mt-4 md:mt-6 flex items-center gap-3 text-xs md:text-sm relative z-10">
              <Phone className="h-3.5 w-3.5" />
              <span>Chiama ora</span>
              <ArrowRight className="h-3.5 w-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute -bottom-12 -right-12 w-32 md:w-48 h-32 md:h-48 border border-primary-foreground/10 rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-48 md:w-64 h-48 md:h-64 border border-primary-foreground/10 rounded-full" />
          </a>

          {/* WhatsApp Support */}
          <a
            href="https://wa.me/393406847275"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-3 bg-secondary p-6 md:p-8 hover:bg-accent hover:text-accent-foreground transition-colors group"
          >
            <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-accent-foreground/70 mb-4 md:mb-6">
              WhatsApp
            </div>
            <div className="font-display text-xl md:text-3xl font-medium tracking-tight">
              Invia Messaggio
            </div>
            <div className="mt-4 md:mt-6 text-[10px] md:text-xs font-mono uppercase tracking-wider opacity-70">
              Risposta immediata
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:grandaponteggi@gmail.com"
            className="md:col-span-4 border border-primary p-6 md:p-8 hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-primary-foreground/70 mb-4 md:mb-6 flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              Mail
            </div>
            <div className="font-display text-lg md:text-2xl font-medium tracking-tight break-all">
              grandaponteggi@gmail.com
            </div>
          </a>

          {/* Address */}
          <div className="md:col-span-12 border-t border-border pt-8 mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 mt-0.5 text-accent shrink-0" />
              <div>
                <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  Sede operativa
                </div>
                <div className="font-display text-lg md:text-xl">Via Circonvallazione G. Giolitti, 24 — 12030 Torre San Giorgio (CN)</div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Granda+Ponteggi+Torre+San+Giorgio+CN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold border-b border-primary pb-1 hover:gap-3 transition-all"
            >
              Apri in Google Maps
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
