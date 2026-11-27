import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Bug, Lightbulb, LayoutGrid, MessageCircle, Palette, Trophy } from "lucide-react";
import GameCover from "../components/GameCover";
import { featuredGame } from "../data/games";

const CONTACT_URL = "https://desiglo.com/contact";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const highlights = [
  { icon: LayoutGrid, label: "Three board sizes" },
  { icon: Palette, label: "Themes & block styles" },
  { icon: Trophy, label: "Relaxed or best-score runs" },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us — Desiglo Games";
  }, []);

  return (
    <>
      {/* Intro */}
      <section className="g-container py-16 md:py-24">
        <motion.span {...reveal()} className="eyebrow">About Us</motion.span>
        <motion.h1
          {...reveal(0.06)}
          className="mt-5 max-w-3xl text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1] tracking-[-0.05em]"
        >
          Small breaks.
          <br />
          <span className="text-gradient">Big fun.</span>
        </motion.h1>

        <div className="mt-10 grid gap-8 text-[17px] leading-8 text-(--muted) md:grid-cols-2 md:gap-12">
          <motion.p {...reveal(0.12)}>
            At Desiglo Games, we create games that are easy to pick up and satisfying to play. Whether you have a few
            spare minutes or want to beat your best score, we want to make that time enjoyable.
          </motion.p>
          <motion.p {...reveal(0.18)}>
            We’re an independent game studio founded by <strong className="text-(--ink)">Bassam Malik</strong>, with a
            focus on colorful visuals, simple controls, and thoughtful details. We care about how a game feels—from
            placing your first piece to finally clearing that tricky board.
          </motion.p>
        </div>
      </section>

      {/* Meet Glass Blast */}
      <section className="g-container pb-16 md:pb-24">
        <motion.div
          {...reveal()}
          className="grid overflow-hidden rounded-[32px] border border-(--line) bg-(--surface) lg:grid-cols-2"
        >
          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
            <GameCover game={featuredGame} />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="eyebrow">Meet {featuredGame.title.split(":")[0]}</span>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
              {featuredGame.title}
            </h2>
            <p className="mt-4 leading-7 text-(--muted)">
              {featuredGame.title} brings our love of color and puzzles together.
            </p>
            <p className="mt-3 leading-7 text-(--muted)">
              Choose from three board sizes, find your favorite themes and block styles, and play your way. Enjoy a
              relaxed round or challenge yourself to set a new personal best.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {highlights.map((h) => (
                <li
                  key={h.label}
                  className="flex items-center gap-2.5 rounded-xl border border-(--line) bg-(--surface-strong) px-3 py-2.5 text-sm"
                >
                  <h.icon size={16} className="shrink-0 text-(--accent)" />
                  {h.label}
                </li>
              ))}
            </ul>
            <Link
              to={`/games/${featuredGame.slug}`}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-(--ink) px-6 py-3.5 text-sm font-semibold text-(--page) transition hover:opacity-90"
            >
              View the game <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Built with care */}
      <section className="g-container pb-16 md:pb-24">
        <div className="grid gap-10 border-t border-(--line) pt-14 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <motion.h2
            {...reveal()}
            className="text-[clamp(1.9rem,3.4vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
          >
            Built with care,
            <br />
            <span className="text-(--muted)">improved with feedback.</span>
          </motion.h2>
          <div className="space-y-5 text-[17px] leading-8 text-(--muted)">
            <motion.p {...reveal(0.08)}>
              We believe a good game keeps getting better. That means listening to players, fixing frustrating
              problems, and making improvements that matter.
            </motion.p>
            <motion.p {...reveal(0.14)}>
              As our collection grows, our aim stays the same: make games that you enjoy opening again.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="g-container pb-24">
        <motion.div
          {...reveal()}
          className="relative overflow-hidden rounded-[32px] border border-(--line) bg-[linear-gradient(135deg,var(--surface),var(--surface-strong))] p-8 md:p-14"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-(--accent) opacity-20 blur-3xl" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex gap-2 text-(--accent)">
                <Lightbulb size={20} />
                <Bug size={20} />
                <MessageCircle size={20} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">Get in touch</h2>
              <p className="mt-3 max-w-lg leading-7 text-(--muted)">
                Have an idea, found a bug, or want to share your experience? We’d love to hear from you.
              </p>
            </div>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-(--accent) px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_var(--accent)] transition hover:bg-(--accent-hover)"
            >
              Open the contact form <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}