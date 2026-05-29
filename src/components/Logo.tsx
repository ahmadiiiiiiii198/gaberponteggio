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

const MoorHead = () => (
  <g>
    {/* Head/Hair black silhouette */}
    <path
      d="M22,35 C20,35 18,33 17,31 C15,32 12,32 10,31 C8,30 7,28 7,26 C7,24 8,23 9.5,22 C8.5,20.5 8,19 8,17 C8,12 11.5,8 17.5,8 C23.5,8 26.5,12 26.5,17 C26.5,19.5 25.5,22 24.5,23.5 C25,25 25,27 24,29 C23.5,30.5 24,32 23,34 L22,35 Z"
      fill="#0f172a"
    />
    {/* Bandana (white band across forehead) */}
    <path
      d="M8.2,16 C12,14.5 19,14 25.8,16 C25.5,17.5 25,18.5 24.5,19 C18.5,17.5 12,17.5 8.5,19 C8.3,18 8.2,17 8.2,16 Z"
      fill="white"
      stroke="#0f172a"
      strokeWidth="0.5"
    />
    {/* Bandana knot/tails on the right */}
    <path
      d="M25.5,15.5 C27,15 29.5,14 30,15.5 C30.5,17 28.5,18.5 25.8,18 Z"
      fill="white"
      stroke="#0f172a"
      strokeWidth="0.5"
    />
  </g>
);

export const Logo = ({ className, showText = false, markOnly = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 160 160"
        className={cn("h-full w-auto select-none", markOnly && "max-w-full")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* White background square */}
        <rect x="10" y="10" width="140" height="110" rx="4" fill="white" stroke="#E31E24" strokeWidth="2" />
        
        {/* Red Cross */}
        <rect x="74" y="10" width="12" height="110" fill="#E31E24" />
        <rect x="10" y="59" width="140" height="12" fill="#E31E24" />
        
        {/* Four Moors' Heads (one in each quadrant) */}
        {/* Top-Left Quadrant */}
        <g transform="translate(24, 18) scale(0.9)">
          <MoorHead />
        </g>
        
        {/* Top-Right Quadrant */}
        <g transform="translate(98, 18) scale(0.9)">
          <MoorHead />
        </g>
        
        {/* Bottom-Left Quadrant */}
        <g transform="translate(24, 69) scale(0.9)">
          <MoorHead />
        </g>
        
        {/* Bottom-Right Quadrant */}
        <g transform="translate(98, 69) scale(0.9)">
          <MoorHead />
        </g>
        
        {/* Red Bottom Bar with text */}
        <rect x="6" y="128" width="148" height="24" rx="2" fill="#E31E24" />
        <text
          x="80"
          y="144"
          fill="white"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="11.5"
          letterSpacing="0.02em"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          SARDA PONTEGGI
        </text>
      </svg>
      {showText && !markOnly && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-base tracking-tight text-foreground">Sarda Ponteggi</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            Usini · Sassari
          </span>
        </div>
      )}
    </div>
  );
};
