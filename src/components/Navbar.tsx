import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Phone, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { label: "Servizi", href: "#servizi" },
    { label: "Progetti", href: "#progetti" },
    { label: "Processo", href: "#processo" },
    { label: "Azienda", href: "#azienda" },
    { label: "Contatti", href: "#contatti" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center text-primary h-12 md:h-14">
          <Logo className="h-full w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-primary-glow transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+393888891993"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary-glow transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline font-mono-tight">388.889.1993</span>
            <span className="sm:hidden">Chiama</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:bg-primary/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 top-16 bg-background z-40 transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        <nav className="relative container py-12 flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-4xl font-medium tracking-tight hover:italic hover:translate-x-2 transition-all"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-12 pt-12 border-t border-border space-y-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">Sede</div>
              <div className="font-display text-xl leading-snug">
                Via Papa Giovanni XXIII, 11
                <br />
                40056 Valsamoggia (BO)
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">Contatti</div>
              <a href="tel:+393888891993" className="font-display text-2xl font-medium text-primary">
                388 889 1993
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
