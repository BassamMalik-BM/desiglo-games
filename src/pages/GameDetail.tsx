import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Play } from "lucide-react";
import GameCard from "../components/GameCard";
import GameCover from "../components/GameCover";
import { games } from "../data/games";
import NotFound from "./NotFound";

export default function GameDetail() {
  const { slug } = useParams();
  const game = games.find((g) => g.slug === slug && g.status === "released");

  useEffect(() => {
    if (game) document.title = `${game.title} — Desiglo Games`;
  }, [game]);

  if (!game) return <NotFound />;
  const others = games.filter((g) => g.slug !== game.slug).slice(0, 3);

  return (
    <>
      <section className="g-container py-12 md:py-20">
        <Link to="/games" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)]">
          <ArrowLeft size={16} /> All games
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-square overflow-hidden rounded-[32px] border border-[var(--line)] shadow-[var(--shadow)] sm:aspect-[4/3]"
          >
            <GameCover game={game} />
          </motion.div>

          <div>
            <span className="eyebrow">{game.genre}</span>
            <h1 className="mt-5 text-[clamp(2.2rem,4.4vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.05em]">{game.title}</h1>
            <p className="mt-3 text-lg text-[var(--silver)]">{game.tagline}</p>
            <p className="mt-5 leading-7 text-[var(--muted)]">{game.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {game.platforms.map((p) => (
                <span key={p} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{p}</span>
              ))}
            </div>

            <div className="mt-8">
              {game.playUrl ? (
                <a
                  href={game.playUrl}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[var(--accent)] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_36px_-10px_var(--accent)] transition hover:bg-[var(--accent-hover)]"
                >
                  <Play size={18} fill="currentColor" /> Play now
                </a>
              ) : (
                <div className="flex flex-col items-start gap-3">
                  <button
                    disabled
                    className="inline-flex items-center gap-2.5 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-8 py-4 text-base font-semibold text-[var(--muted)]"
                  >
                    <Clock size={18} /> Play — coming soon
                  </button>
                  <p className="text-sm text-[var(--muted)]">The playable version is almost ready. Check back soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-7 md:p-9">
            <h2 className="text-xl font-semibold tracking-[-0.02em]">How to play</h2>
            <ol className="mt-5 space-y-4">
              {game.howToPlay.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[var(--accent-soft)] text-xs font-semibold text-[var(--accent)]">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 leading-6 text-[var(--muted)]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-7 md:p-9">
            <h2 className="text-xl font-semibold tracking-[-0.02em]">Controls</h2>
            <dl className="mt-5 divide-y divide-[var(--line)]">
              {game.controls.map((c) => (
                <div key={c.action} className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="text-[var(--muted)]">{c.action}</dt>
                  <dd className="rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-sm">{c.input}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="g-container pb-24">
        <h2 className="mb-8 text-2xl font-semibold tracking-[-0.03em]">More from Desiglo Games</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((g, i) => <GameCard key={g.slug} game={g} index={i} />)}
        </div>
      </section>
    </>
  );
}
