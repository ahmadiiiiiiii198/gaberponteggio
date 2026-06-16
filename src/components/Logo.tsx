import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Kept for API compatibility — the brand mark already contains the wordmark. */
  showText?: boolean;
  /** Kept for API compatibility. */
  markOnly?: boolean;
}

/**
 * Italponteggi S.r.l. — official brand mark.
 * Rendered inline as SVG so it inherits the surrounding text color via
 * `currentColor` (navy on light, white on the navy footer, etc.).
 * Control the size via `className` (e.g. "h-12 w-auto" or "w-full h-auto").
 */
export const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      role="img"
      aria-label="Italponteggi S.r.l."
      className={cn("object-contain select-none", className)}
    >
      <defs>
        <path id="ip-topArc" d="M 64,200 A 136,136 0 0 1 336,200" />
        <path id="ip-botArc" d="M 72,200 A 128,128 0 0 0 328,200" />
      </defs>

      {/* Badge rings */}
      <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="6" fill="none" />
      <circle cx="200" cy="200" r="172" stroke="currentColor" strokeWidth="2.5" fill="none" />

      {/* Curved wordmark */}
      <text fontFamily="'Inter','Helvetica',sans-serif" fontWeight="800" fontSize="40" letterSpacing="3" fill="currentColor">
        <textPath href="#ip-topArc" startOffset="50%" textAnchor="middle">
          ITALPONTEGGI
        </textPath>
      </text>
      <text fontFamily="'Inter','Helvetica',sans-serif" fontWeight="700" fontSize="22" letterSpacing="6" fill="currentColor">
        <textPath href="#ip-botArc" startOffset="50%" textAnchor="middle">
          NOLEGGIO · MONTAGGIO
        </textPath>
      </text>

      {/* Decorative side dots */}
      <circle cx="40" cy="200" r="5" fill="currentColor" />
      <circle cx="360" cy="200" r="5" fill="currentColor" />

      {/* Scaffolding tower frame */}
      <g stroke="currentColor" strokeWidth="9" strokeLinecap="round" fill="none">
        <line x1="158" y1="120" x2="158" y2="280" />
        <line x1="242" y1="120" x2="242" y2="280" />
        <line x1="158" y1="120" x2="242" y2="120" />
        <line x1="158" y1="173" x2="242" y2="173" />
        <line x1="158" y1="227" x2="242" y2="227" />
        <line x1="158" y1="280" x2="242" y2="280" />
      </g>

      {/* Diagonal bracing */}
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none">
        <line x1="158" y1="120" x2="242" y2="173" />
        <line x1="242" y1="173" x2="158" y2="227" />
        <line x1="158" y1="227" x2="242" y2="280" />
      </g>

      {/* Bold "I" monogram standing in the tower */}
      <g fill="currentColor">
        <rect x="190" y="120" width="20" height="160" rx="3" />
        <rect x="168" y="120" width="64" height="18" rx="3" />
        <rect x="168" y="262" width="64" height="18" rx="3" />
      </g>
    </svg>
  );
};
