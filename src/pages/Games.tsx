import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import GameCard from "../components/GameCard";
import { games, genres } from "../data/games";

export default function Games() {
  const [genre, setGenre] = useState("All");
  const list = genre === "All" ? games : games.filter((g) => g.genre === genre);

  return (
    <section className="g-container py-16 md:py-24">
      <span className="eyebrow">All games</span>
      <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.05em]">
        The game <span className="text-gradient">library.</span>
      </h1>
      <p className="mt-5 max-w-lg text-[17px] leading-8 text-[var(--muted)]">
        Every Desiglo game in one place. Play what's out now and keep an eye on what's coming next.
      </p>

      <LayoutGroup>
        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter by genre">
          {genres.map((g) => {
            const count = g === "All" ? games.length : games.filter((x) => x.genre === g).length;
            const active = g === genre;
            return (
              <button
                key={g}
                role="tab"
                aria-selected={active}
                onClick={() => setGenre(g)}
                className={`relative rounded-full border px-4 py-2 text-sm transition ${
                  active ? "border-transparent text-white" : "border-[var(--line)] text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {active && (
                  <motion.span layoutId="chip" className="absolute inset-0 rounded-full bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                )}
                <span className="relative">{g} <span className="opacity-60">{count}</span></span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((g, i) => <GameCard key={`${genre}-${g.slug}`} game={g} index={i} />)}
      </div>
    </section>
  );
}
