import { Lock } from "lucide-react";
import type { Game } from "../data/games";

/** Glass tiles for the Glass Blast cover: [row, col, shade] on an 8x8 board. */
const tiles: [number, number, number][] = [
  [1, 2, 0], [1, 3, 0], [2, 3, 0],
  [2, 6, 1], [3, 6, 1], [4, 6, 1], [4, 5, 1],
  [4, 1, 2], [5, 1, 2], [5, 2, 2],
  [6, 0, 0], [6, 1, 0], [6, 2, 1], [6, 3, 1], [6, 4, 2], [6, 5, 2], [6, 6, 0], [6, 7, 0],
  [7, 0, 1], [7, 1, 2], [7, 3, 0], [7, 4, 0], [7, 6, 1], [7, 7, 2],
];
const shades = [
  ["#2f7bff", "#8fb6ff"],
  ["#c8d1df", "#ffffff"],
  ["#1d4fb8", "#5c98ff"],
];

function GlassBlastArt() {
  const size = 8, cell = 34, gap = 4, pad = 18;
  const board = size * cell + (size - 1) * gap + pad * 2;
  return (
    <svg viewBox={`0 0 ${board} ${board}`} className="h-full w-full" role="img" aria-label="Glass Blast board with glass blocks">
      <defs>
        {shades.map(([a, b], i) => (
          <linearGradient key={i} id={`gb-${i}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={b} stopOpacity=".95" />
            <stop offset="1" stopColor={a} stopOpacity=".75" />
          </linearGradient>
        ))}
      </defs>
      {Array.from({ length: size * size }, (_, i) => {
        const r = Math.floor(i / size), c = i % size;
        return (
          <rect key={i} x={pad + c * (cell + gap)} y={pad + r * (cell + gap)} width={cell} height={cell} rx="7"
            fill="currentColor" opacity=".06" />
        );
      })}
      {tiles.map(([r, c, s], i) => {
        const x = pad + c * (cell + gap), y = pad + r * (cell + gap);
        return (
          <g key={i}>
            <rect x={x} y={y} width={cell} height={cell} rx="7" fill={`url(#gb-${s})`} />
            <rect x={x + 4} y={y + 4} width={cell - 8} height="7" rx="3.5" fill="#fff" opacity=".45" />
          </g>
        );
      })}
    </svg>
  );
}

export default function GameCover({ game, className = "" }: { game: Game; className?: string }) {
  if (game.image) {
    return <img src={game.image} alt={`${game.title} cover`} className={`h-full w-full object-cover ${className}`} />;
  }
  if (game.cover === "glass-blast") {
    return (
      <div className={`relative grid h-full w-full place-items-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,#2f7bff40,transparent_60%),linear-gradient(160deg,#0d1a33,#050a14)] p-6 text-white ${className}`}>
        <div className="aspect-square h-full max-h-full">
          <GlassBlastArt />
        </div>
      </div>
    );
  }
  return (
    <div className={`locked-shimmer relative grid h-full w-full place-items-center overflow-hidden bg-[var(--surface-strong)] ${className}`}>
      <div className="absolute -left-6 top-6 h-24 w-24 rounded-2xl bg-[var(--accent)] opacity-20 blur-2xl" />
      <div className="absolute bottom-4 right-8 h-20 w-28 rounded-full bg-[var(--silver)] opacity-15 blur-2xl" />
      <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)]">
        <Lock size={18} />
      </div>
    </div>
  );
}
