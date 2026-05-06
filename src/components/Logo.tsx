import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  /**
   * When true, renders only the round logo mark with no inline label
   * (useful for big standalone placements like the About card).
   */
  markOnly?: boolean;
}

export const Logo = ({ className, showText = false, markOnly = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src="/logo.png"
        alt="Soliman Ponteggi Elseidy — Torino"
        className={cn("h-full w-auto object-contain select-none", markOnly && "max-w-full")}
        draggable={false}
        loading="eager"
      />
      {showText && !markOnly && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-base tracking-tight">Soliman Ponteggi</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Elseidy · Torino
          </span>
        </div>
      )}
    </div>
  );
};
