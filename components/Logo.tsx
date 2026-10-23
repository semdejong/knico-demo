import { useId, type ReactNode } from "react";

const letters: { char: string; angle: number; Glyph: () => ReactNode }[] = [
  { char: "N", angle: 0, Glyph: N },
  { char: "I", angle: 72, Glyph: I },
  { char: "C", angle: 144, Glyph: C },
  { char: "O", angle: 216, Glyph: O },
  { char: "K", angle: 288, Glyph: K },
];

function LogoMark({ className = "h-12 w-12", face = "#111111" }: { className?: string; face?: string }) {
  const grad = `knico-depth-${useId().replace(/:/g, "")}`;

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={grad} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1D6FA5" />
          <stop offset="45%" stopColor="#2686C5" />
          <stop offset="100%" stopColor="#D7F0FA" />
        </linearGradient>
      </defs>
      <g className="logo-ring-spin">
        {letters.map((letter) => (
          <g key={letter.char} transform={`translate(50 50) rotate(${letter.angle}) translate(0 -28)`}>
            <g transform="translate(2.4 2.8)" fill="none" stroke={`url(#${grad})`} strokeWidth="8" strokeLinejoin="miter" strokeLinecap="butt">
              <letter.Glyph />
            </g>
            <g fill="none" stroke={face} strokeWidth="6.2" strokeLinejoin="miter" strokeLinecap="butt">
              <letter.Glyph />
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}

function K() {
  return <path d="M-9 -11 V11 M-9 0 L8 -11 M-9 0 L9 11" />;
}

function N() {
  return <path d="M-8 -11 V11 M-8 -11 L8 11 M8 -11 V11" />;
}

function I() {
  return <path d="M0 -11 V11" />;
}

function C() {
  return <path d="M7 -9 A11 11 0 1 0 7 9" />;
}

function O() {
  return <circle r="9" />;
}

export default function Logo({
  tone = "light",
  markClass = "h-12 w-12",
  compact = false,
}: {
  tone?: "light" | "dark";
  markClass?: string;
  compact?: boolean;
}) {
  const sub = tone === "dark" ? "text-white/90" : "text-wordmark";

  return (
    <span className="inline-flex items-center gap-2">
      <LogoMark className={markClass} face={tone === "dark" ? "#F4F7F8" : "#111111"} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-accent ${compact ? "text-[1.35rem] sm:text-[1.55rem]" : "text-[1.55rem]"}`}
          style={{ letterSpacing: 0 }}
        >
          KNICO
        </span>
        <span className={`mt-0.5 text-[0.68rem] leading-tight sm:text-[0.72rem] ${sub}`}>CNC Metaalbewerking</span>
      </span>
    </span>
  );
}
