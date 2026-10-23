import { useId } from "react";

const letters: { char: string; angle: number }[] = [
  { char: "K", angle: -90 },
  { char: "N", angle: -18 },
  { char: "I", angle: 54 },
  { char: "C", angle: 126 },
  { char: "O", angle: 198 },
];

function LogoMark({ className = "h-12 w-12", face = "#111111" }: { className?: string; face?: string }) {
  const grad = `knico-depth-${useId().replace(/:/g, "")}`;
  const cut = face === "#111111" ? "#FFFFFF" : "#1E2226";

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1D6FA5" />
          <stop offset="55%" stopColor="#2686C5" />
          <stop offset="100%" stopColor="#BFE6F7" />
        </linearGradient>
      </defs>
      <circle cx="53" cy="51" r="33" fill="none" stroke={`url(#${grad})`} strokeWidth="21" />
      <circle cx="48" cy="48" r="33" fill="none" stroke={face} strokeWidth="21" />
      <g className="logo-ring-spin" style={{ transformOrigin: "48px 48px" }}>
        {letters.map((l) => (
          <text
            key={l.char}
            x="48"
            y="21"
            transform={`rotate(${l.angle} 48 48)`}
            textAnchor="middle"
            fontSize="20"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
            fill={cut}
          >
            {l.char}
          </text>
        ))}
      </g>
    </svg>
  );
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
