import { useEffect, useRef, useState } from "react";
import buildingOld from "@/assets/building-old.jpg";
import buildingScaffold from "@/assets/building-scaffold.jpg";
import buildingRenovated from "@/assets/building-renovated.jpg";

const STAGES = [
  {
    label: "Stato di fatto",
    code: "01 / Sopralluogo",
    italian: "Prima",
    stamp: "DA RESTAURARE",
    title: (
      <>
        Ogni palazzo
        <br />
        racconta una <em className="font-light">storia</em>.
      </>
    ),
    body: "Facciate segnate dal tempo, intonaci che si sgretolano sotto il cielo del Veneto. È da qui che cominciamo: ascoltare la pietra prima di toccarla.",
    quote: "« Il restauro è un atto d'amore verso la città. »",
  },
  {
    label: "Cantiere in allestimento",
    code: "02 / Montaggio",
    italian: "Durante",
    stamp: "LAVORI IN CORSO",
    title: (
      <>
        Costruiamo
        <br />
        l'<em className="font-light">impalcatura</em>{" "}
        del <span className="text-accent">cambiamento</span>.
      </>
    ),
    body: "Ponteggi certificati, ascensori da cantiere, coperture provvisorie. Ogni tubo, ogni nodo, calcolato secondo PiMUS e norme EN 12810.",
    quote: "« Sicurezza prima di tutto, bellezza subito dopo. »",
  },
  {
    label: "Restauro completato",
    code: "03 / Consegna",
    italian: "Dopo",
    stamp: "FATTO A REGOLA D'ARTE",
    title: (
      <>
        E poi torna
        <br />
        a <em className="font-light">risplendere</em>.
      </>
    ),
    body: "Smontiamo in sicurezza e lasciamo il territorio un po' più bello. Un edificio alla volta, con la cura artigiana di chi ama la propria terra.",
    quote: "« La bellezza è una promessa di felicità. »",
  },
];

const ITALIAN_PHRASES = [
  "Bellezza",
  "Restauro",
  "Mestiere",
  "Sicurezza",
  "Tradizione",
  "Cantiere",
  "Maestria",
  "Architettura",
];

export const Transformation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const oldOpacity = progress < 0.5 ? 1 - progress * 2 : 0;
  const scaffoldOpacity =
    progress < 0.5 ? progress * 2 : 1 - (progress - 0.5) * 2;
  const newOpacity = progress < 0.5 ? 0 : (progress - 0.5) * 2;

  const stageIndex = progress < 0.33 ? 0 : progress < 0.72 ? 1 : 2;
  const stage = STAGES[stageIndex];
  const scale = 1.04 + progress * 0.1;

  // Sun moves across the sky as we transform from grey to golden
  const sunX = 10 + progress * 80; // %
  const sunY = 70 - progress * 50; // % (rises)
  const sunOpacity = Math.max(0, (progress - 0.4) * 1.6);

  // Dust particles
  const particles = Array.from({ length: 18 }, (_, i) => i);

  return (
    <section
      id="trasformazione"
      ref={sectionRef}
      className="relative bg-primary"
      style={{ height: "300vh" }}
      aria-label="Da palazzo storico degradato a facciata restaurata"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* === Background image stack === */}
        <div className="absolute inset-0">
          <img
            src={buildingOld}
            alt="Palazzo storico veneziano in stato di degrado, intonaco scrostato"
            className="absolute inset-0 w-full h-full object-cover will-change-[opacity,transform]"
            style={{
              opacity: oldOpacity,
              transform: `scale(${scale}) translateY(${progress * -3}%)`,
              filter: `saturate(${0.6 + progress * 0.6}) contrast(${1 + progress * 0.1})`,
            }}
            width={1080}
            height={1920}
            loading="lazy"
          />
          <img
            src={buildingScaffold}
            alt="Stesso palazzo rivestito di ponteggi metallici durante i lavori"
            className="absolute inset-0 w-full h-full object-cover will-change-[opacity,transform]"
            style={{
              opacity: scaffoldOpacity,
              transform: `scale(${scale}) translateY(${progress * -3}%)`,
            }}
            width={1080}
            height={1920}
            loading="lazy"
          />
          <img
            src={buildingRenovated}
            alt="Palazzo storico veneziano restaurato, facciata ocra al tramonto"
            className="absolute inset-0 w-full h-full object-cover will-change-[opacity,transform]"
            style={{
              opacity: newOpacity,
              transform: `scale(${scale}) translateY(${progress * -3}%)`,
              filter: `saturate(${1 + progress * 0.4})`,
            }}
            width={1080}
            height={1920}
            loading="lazy"
          />

          {/* Animated Italian sun */}
          <div
            className="absolute pointer-events-none transition-[left,top,opacity] duration-700 ease-out"
            style={{
              left: `${sunX}%`,
              top: `${sunY}%`,
              opacity: sunOpacity,
            }}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 md:w-32 h-24 md:h-32 rounded-full bg-accent blur-3xl opacity-70" />
              <div className="absolute inset-0 m-auto w-12 md:w-16 h-12 md:h-16 rounded-full bg-accent shadow-[0_0_60px_20px_hsl(var(--accent)/0.6)]" />
            </div>
          </div>

          {/* Vignette gradient */}
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />

          {/* Blueprint grid fades out */}
          <div
            className="absolute inset-0 blueprint-grid mix-blend-overlay transition-opacity duration-700"
            style={{ opacity: 0.4 - progress * 0.35 }}
          />

          {/* Dust / pollen particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((i) => {
              const left = (i * 37) % 100;
              const delay = (i * 0.7) % 12;
              const duration = 14 + (i % 6) * 3;
              const size = 2 + (i % 3);
              const dx = ((i % 5) - 2) * 30;
              return (
                <span
                  key={i}
                  className="absolute bottom-0 rounded-full bg-accent/70"
                  style={{
                    left: `${left}%`,
                    width: size,
                    height: size,
                    animation: `float-dust ${duration}s linear ${delay}s infinite`,
                    // @ts-expect-error css var
                    "--dx": `${dx}px`,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* === Construction tape — top === */}
        <div className="absolute top-0 inset-x-0 h-6 md:h-7 tape tape-anim z-20" />
        {/* === Tricolore stripe — under tape === */}
        <div className="absolute top-6 md:top-7 inset-x-0 h-1 tricolore z-20 opacity-90" />

        {/* === Construction tape — bottom (reverse) === */}
        <div
          className="absolute bottom-0 inset-x-0 h-6 md:h-7 tape z-20"
          style={{ animation: "tape-scroll 1.2s linear infinite reverse" }}
        />

        {/* === Side stage index === */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60 z-10">
          {STAGES.map((s, i) => (
            <div key={s.code} className="flex items-center gap-3">
              <span
                className={`h-px transition-all duration-700 ${
                  i === stageIndex ? "bg-accent w-20" : "bg-primary-foreground/30 w-8"
                }`}
              />
              <span
                className={`transition-all duration-500 ${
                  i === stageIndex
                    ? "text-primary-foreground scale-110 origin-left"
                    : "text-primary-foreground/50"
                }`}
              >
                {s.code}
              </span>
            </div>
          ))}
        </div>

        {/* === Top eyebrow with running phrases === */}
        <div className="absolute top-10 md:top-14 inset-x-0 z-10 overflow-hidden ticker-wrap">
          <div className="flex marquee whitespace-nowrap py-2">
            {[...ITALIAN_PHRASES, ...ITALIAN_PHRASES, ...ITALIAN_PHRASES].map(
              (w, i) => (
                <span
                  key={i}
                  className="font-display italic text-primary-foreground/40 text-xl md:text-3xl px-6"
                >
                  {w} <span className="text-accent not-italic">✦</span>
                </span>
              )
            )}
          </div>
        </div>

        {/* === Big "Prima / Durante / Dopo" stamp === */}
        <div
          key={`stamp-${stageIndex}`}
          className="absolute top-[20%] right-4 md:right-20 z-10 pointer-events-none"
          style={{ animation: "stamp-in 0.8s cubic-bezier(.22,1,.36,1) both" }}
        >
          <div className="relative">
            <div className="border-2 md:border-4 border-accent/90 px-4 md:px-6 py-2 md:py-3 -rotate-12 backdrop-blur-sm bg-primary/20">
              <div className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-accent/80">
                {stage.italian}
              </div>
              <div className="font-display text-lg md:text-2xl font-bold text-primary-foreground tracking-tight">
                {stage.stamp}
              </div>
            </div>
          </div>
        </div>

        {/* === Bottom-anchored content === */}
        <div className="absolute inset-0 flex items-end pb-12 md:pb-16">
          <div className="container text-primary-foreground w-full">
            <div className="flex items-center gap-3 mb-4 md:mb-5 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-primary-foreground/80">
              <span className="w-6 md:w-8 h-px bg-accent" />
              <span>{stage.label}</span>
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent pulse-dot" />
            </div>

            {/* Sliding stage titles */}
            <div className="relative max-w-4xl min-h-[5rem] md:min-h-[clamp(7rem,18vw,16rem)]">
              {STAGES.map((s, i) => {
                const state =
                  i === stageIndex ? "in" : i < stageIndex ? "out-left" : "out-right";
                return (
                  <h2
                    key={i}
                    aria-hidden={i !== stageIndex}
                    className={`absolute inset-0 font-display font-medium text-balance text-[clamp(1.75rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em] transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
                      state === "in"
                        ? "opacity-100 translate-x-0 blur-0"
                        : state === "out-left"
                        ? "opacity-0 -translate-x-12 blur-sm pointer-events-none"
                        : "opacity-0 translate-x-12 blur-sm pointer-events-none"
                    }`}
                  >
                    {s.title}
                  </h2>
                );
              })}
            </div>

            <div className="mt-4 md:mt-6 grid md:grid-cols-2 gap-8 items-end">
              {/* Body copy */}
              <div className="relative max-w-xl min-h-[5.5rem]">
                {STAGES.map((s, i) => (
                  <p
                    key={i}
                    aria-hidden={i !== stageIndex}
                    className={`absolute inset-0 text-sm md:text-lg text-primary-foreground/90 leading-relaxed transition-all duration-700 ${
                      i === stageIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    {s.body}
                  </p>
                ))}
              </div>

              {/* Italian quote in a hand-drawn frame */}
              <div className="relative hidden md:block min-h-[5.5rem]">
                {STAGES.map((s, i) => (
                  <div
                    key={i}
                    aria-hidden={i !== stageIndex}
                    className={`absolute inset-0 transition-all duration-700 ${
                      i === stageIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <div className="relative pl-6 border-l-2 border-accent">
                      <p className="font-display italic text-xl text-primary-foreground/95 leading-snug">
                        {s.quote}
                      </p>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">
                        — Italponteggi
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === Big watermark word that morphs === */}
        <div className="absolute bottom-20 right-6 md:right-16 pointer-events-none select-none z-0 hidden sm:block">
          <span
            key={`wm-${stageIndex}`}
            className="font-display italic text-stroke text-[clamp(5rem,14vw,12rem)] leading-none tracking-tighter opacity-40"
            style={{ animation: "revealUp 1s var(--transition-elegant) both" }}
          >
            {stage.italian}
          </span>
        </div>
      </div>
    </section>
  );
};
