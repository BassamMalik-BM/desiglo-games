import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Gamepad2, Sparkles } from "lucide-react";
import BlockDrop from "../components/BlockDrop";
import GameCard from "../components/GameCard";
import GameCover from "../components/GameCover";
import { featuredGame, games, releasedGames } from "../data/games";

const rise = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Home() {
  const hero = useRef<HTMLElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = hero.current!;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
    el.style.setProperty("--glow", "1");
  };

  return (
    <>
      {/* Hero */}
      <section
        ref={hero}
        onPointerMove={onMove}
        onPointerLeave={() => hero.current?.style.setProperty("--glow", "0")}
        className="relative overflow-hidden"
      >
        <div className="glow-grid" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.12] blur-[120px]" />
        <div className="g-container relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.span {...rise()} className="eyebrow">Desiglo Games</motion.span>
            <motion.h1
              {...rise(0.08)}
              className="mt-6 text-[clamp(2.6rem,6vw,4.8rem)] font-semibold leading-[1] tracking-[-0.05em]"
            >
              Small games.
              <br />
              <span className="text-gradient">Made with care.</span>
            </motion.h1>
            <motion.p {...rise(0.16)} className="mt-6 max-w-md text-[17px] leading-8 text-[var(--muted)]">
              The same attention to detail we put into websites, now in games you can play in your browser.
              Quick to start, hard to put down.
            </motion.p>
            <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap gap-3">
              <Link
                to={`/games/${featuredGame.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_var(--accent)] transition hover:bg-[var(--accent-hover)]"
              >
                <Gamepad2 size={17} /> Meet {featuredGame.title.split(":")[0]}
              </Link>
              <Link
                to="/games"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold transition hover:border-[var(--accent)]"
              >
                All games <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.dl {...rise(0.32)} className="mt-12 flex gap-10 border-t border-[var(--line)] pt-6">
              {[
                [String(releasedGames.length), releasedGames.length === 1 ? "Game out now" : "Games out now"],
                [String(games.length - releasedGames.length), "In the works"],
                ["0", "Downloads needed"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="text-2xl font-semibold tracking-[-0.03em]">{n}</dd>
                  <dd className="mt-1 text-xs text-[var(--muted)]">{l}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
          <motion.div {...rise(0.2)}>
            <BlockDrop />
          </motion.div>
        </div>
      </section>

      {/* Featured game */}
      <section className="g-container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--surface)] lg:grid-cols-2"
        >
          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
            <GameCover game={featuredGame} />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="eyebrow">Featured game</span>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
              {featuredGame.title}
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">{featuredGame.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[featuredGame.genre, ...featuredGame.platforms].map((t) => (
                <span key={t} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">{t}</span>
              ))}
            </div>
            <Link
              to={`/games/${featuredGame.slug}`}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-[var(--page)] transition hover:opacity-90"
            >
              View game <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Library */}
      <section className="g-container pb-16 md:pb-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">The library</span>
            <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
              One out now. <span className="text-[var(--muted)]">More on the way.</span>
            </h2>
          </div>
          <Link to="/games" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
            Browse all games <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {games.slice(0, 6).map((g, i) => <GameCard key={g.slug} game={g} index={i} />)}
        </div>
      </section>

      {/* Coming soon strip */}
      <section className="g-container pb-24">
        <div className="relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-[linear-gradient(135deg,var(--surface),var(--surface-strong))] p-8 md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--accent)] opacity-20 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Sparkles className="text-[var(--accent)]" size={22} />
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">New games are on the workbench.</h2>
              <p className="mt-2 max-w-lg text-[var(--muted)]">
                Five more projects are in progress. Check back soon, or see what else the Desiglo studio is building.
              </p>
            </div>
            <a
              href="https://desiglo.com"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--page)] px-6 py-3.5 text-sm font-semibold transition hover:border-[var(--accent)]"
            >
              Visit desiglo.com <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
