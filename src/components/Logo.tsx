import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo-granda.png";

interface LogoProps {
  className?: string;
  /** Kept for API compatibility — the brand image already contains the wordmark. */
  showText?: boolean;
  /** Kept for API compatibility. */
  markOnly?: boolean;
}

/**
 * Granda Ponteggi SRLS — di Carta Gianluca.
 * Renders the official brand logo image. Control the size via `className`
 * (e.g. "h-12 w-auto" or "w-full h-auto").
 */
export const Logo = ({ className }: LogoProps) => {
  return (
    <img
      src={logoImg}
      alt="Granda Ponteggi SRLS — di Carta Gianluca"
      className={cn("object-contain select-none", className)}
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
};
