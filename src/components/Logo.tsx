import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({ className, showText = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg viewBox="0 0 400 400" className="h-full w-auto" fill="none" aria-label="Soliman Ponteggi Elseidy">
        <defs>
          <path id="topArc" d="M 60,200 A 140,140 0 0 1 340,200" />
          <path id="botArc" d="M 70,200 A 130,130 0 0 0 330,200" />
        </defs>
        <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="6" fill="none" />
        <circle cx="200" cy="200" r="172" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <text fontFamily="Inter, sans-serif" fontWeight="800" fontSize="30" letterSpacing="2.5" fill="currentColor">
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">
            SOLIMAN PONTEGGI
          </textPath>
        </text>
        <text fontFamily="Inter, sans-serif" fontWeight="800" fontSize="30" letterSpacing="3" fill="currentColor">
          <textPath href="#botArc" startOffset="50%" textAnchor="middle">
            ELSEIDY
          </textPath>
        </text>
        {/* Scaffolding grid */}
        <g stroke="currentColor" strokeWidth="9" strokeLinecap="round" fill="none">
          <line x1="160" y1="135" x2="160" y2="265" />
          <line x1="240" y1="135" x2="240" y2="265" />
          <line x1="135" y1="170" x2="265" y2="170" />
          <line x1="135" y1="230" x2="265" y2="230" />
          <line x1="160" y1="170" x2="240" y2="230" strokeWidth="4" />
          <line x1="240" y1="170" x2="160" y2="230" strokeWidth="4" />
        </g>
        {/* S monogram overlay */}
        <path
          d="M 235 145 Q 165 145 165 185 Q 165 200 200 200 Q 235 200 235 215 Q 235 255 165 255"
          stroke="currentColor"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-base tracking-tight">Soliman Ponteggi</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Elseidy · Torino</span>
        </div>
      )}
    </div>
  );
};
