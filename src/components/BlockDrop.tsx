import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Looping hero animation: pieces drop onto a 6x6 board, the bottom rows
 * fill up, flash, and shatter — a nod to Glass Blast.
 */
const N = 6;
type Cell = { r: number; c: number; s: number };
const pieces: Cell[][] = [
  [{ r: 5, c: 0, s: 0 }, { r: 5, c: 1, s: 0 }, { r: 4, c: 0, s: 0 }],
  [{ r: 5, c: 4, s: 1 }, { r: 5, c: 5, s: 1 }, { r: 4, c: 5, s: 1 }],
  [{ r: 3, c: 2, s: 2 }, { r: 4, c: 2, s: 2 }, { r: 4, c: 3, s: 2 }],
  [{ r: 4, c: 1, s: 1 }, { r: 3, c: 1, s: 1 }],
  [{ r: 5, c: 2, s: 0 }, { r: 5, c: 3, s: 0 }],
  [{ r: 4, c: 4, s: 2 }, { r: 3, c: 4, s: 2 }, { r: 2, c: 4, s: 2 }],
];
const fills = [
  "linear-gradient(145deg,#8fb6ff,#2f7bff)",
  "linear-gradient(145deg,#ffffff,#aeb9cc)",
  "linear-gradient(145deg,#5c98ff,#1d4fb8)",
];

export default function BlockDrop() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(reduce ? pieces.length : 0);
  const [clearing, setClearing] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => {
      if (step < pieces.length) setStep(step + 1);
      else if (!clearing) setClearing(true);
      else { setClearing(false); setStep(0); }
    }, step < pieces.length ? 650 : clearing ? 700 : 500);
    return () => clearTimeout(t);
  }, [step, clearing, reduce]);

  const placed = pieces.slice(0, step).flat();
  const fullRows = new Set(
    Array.from({ length: N }, (_, r) => r).filter((r) => placed.filter((p) => p.r === r).length === N),
  );

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div className="absolute inset-6 rounded-[40px] bg-[var(--accent)] opacity-20 blur-3xl" />
      <div
        className="relative grid h-full w-full gap-1.5 rounded-[28px] border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_85%,transparent)] p-4 shadow-[var(--shadow)] backdrop-blur"
        style={{ gridTemplateColumns: `repeat(${N},1fr)`, gridTemplateRows: `repeat(${N},1fr)` }}
        aria-hidden="true"
      >
        {Array.from({ length: N * N }, (_, i) => (
          <div key={i} className="rounded-[10px] bg-[var(--ink)] opacity-[0.05]"
            style={{ gridRow: Math.floor(i / N) + 1, gridColumn: (i % N) + 1 }} />
        ))}
        <AnimatePresence>
          {placed.map((p) => {
            const shatter = clearing && fullRows.has(p.r);
            return (
              <motion.div
                key={`${p.r}-${p.c}`}
                initial={{ y: -60, opacity: 0, scale: 0.9 }}
                animate={shatter
                  ? { scale: [1, 1.12, 0], opacity: [1, 1, 0], rotate: [0, 0, (p.c % 2 ? 1 : -1) * 25], transition: { duration: 0.6 } }
                  : { y: 0, opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.25 } }}
                transition={{ type: "spring", stiffness: 420, damping: 24 }}
                className="relative rounded-[10px] shadow-[inset_0_1px_0_#ffffff80,0_6px_16px_-6px_#2f7bff]"
                style={{ gridRow: p.r + 1, gridColumn: p.c + 1, background: fills[p.s] }}
              >
                <span className="absolute inset-x-1.5 top-1.5 h-[18%] rounded-full bg-white/50" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold tracking-[0.08em] text-[var(--muted)] shadow-[var(--shadow)]"
        animate={{ scale: clearing ? [1, 1.08, 1] : 1 }}
      >
        {clearing ? <span className="text-[var(--accent)]">LINE CLEAR!</span> : "GLASS BLAST"}
      </motion.div>
    </div>
  );
}
