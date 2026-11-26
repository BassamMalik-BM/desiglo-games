import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Game } from "../data/games";
import GameCover from "./GameCover";

/** Card that tilts toward the cursor and glows blue on hover. */
export default function GameCard({ game, index = 0 }: { game: Game; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [6, -6]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(px, [0, 1], [-8, 8]), { stiffness: 200, damping: 18 });
  const locked = game.status === "coming-soon";

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current!.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => { px.set(0.5); py.set(0.5); };

  const body = (
    <>
      <div className="aspect-[4/3] overflow-hidden rounded-[18px] border border-[var(--line)]">
        <GameCover game={game} className={locked ? "" : "transition duration-500 group-hover:scale-[1.04]"} />
      </div>
      <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{game.genre}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${
                locked ? "border border-[var(--line)] text-[var(--muted)]" : "bg-[var(--accent-soft)] text-[var(--accent)]"
              }`}
            >
              {locked ? "Coming soon" : "Out now"}
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em]">{game.title}</h3>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{game.tagline}</p>
        </div>
        {!locked && (
          <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--line)] transition group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={ref}
        onPointerMove={locked ? undefined : onMove}
        onPointerLeave={reset}
        style={{ rotateX: locked ? 0 : rx, rotateY: locked ? 0 : ry, transformStyle: "preserve-3d" }}
        className={`group rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-3 transition-shadow duration-300 ${
          locked ? "opacity-80" : "hover:border-[color-mix(in_srgb,var(--accent)_50%,var(--line))] hover:shadow-[0_20px_60px_-20px_var(--accent)]"
        }`}
      >
        {locked ? (
          <div aria-label={`${game.title}, coming soon`}>{body}</div>
        ) : (
          <Link to={`/games/${game.slug}`} className="block">{body}</Link>
        )}
      </motion.div>
    </motion.div>
  );
}
