import { Logo } from "./Logo";
import { Phone } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 text-primary h-10">
          <Logo className="h-10" showText />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#servizi" className="hover:text-primary-glow transition-colors">Servizi</a>
          <a href="#progetti" className="hover:text-primary-glow transition-colors">Progetti</a>
          <a href="#processo" className="hover:text-primary-glow transition-colors">Processo</a>
          <a href="#azienda" className="hover:text-primary-glow transition-colors">Azienda</a>
          <a href="#contatti" className="hover:text-primary-glow transition-colors">Contatti</a>
        </nav>
        <a
          href="tel:+393476852324"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary-glow transition-colors"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline font-mono-tight">347.685.23.24</span>
          <span className="sm:hidden">Chiama</span>
        </a>
      </div>
    </header>
  );
};
