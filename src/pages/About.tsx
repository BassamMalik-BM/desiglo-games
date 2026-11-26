import { ArrowUpRight, Gauge, Heart, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Heart, title: "Made with care", text: "Every game gets the same attention to detail as a Desiglo website, from the first pixel to the last sound." },
  { icon: MonitorSmartphone, title: "Plays anywhere", text: "Built for the browser, so you can play on your laptop or your phone without installing anything." },
  { icon: Gauge, title: "Quick to start", text: "Simple rules, short rounds, and no sign-up. Open the page and you're playing." },
];

export default function About() {
  return (
    <section className="g-container py-16 md:py-24">
      <span className="eyebrow">About</span>
      <h1 className="mt-5 max-w-3xl text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.05em]">
        The playful side of <span className="text-gradient">Desiglo.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[var(--muted)]">
        Desiglo is an independent web design and development studio. Desiglo Games is where we build small,
        polished games: the kind you play for five minutes and come back to tomorrow.
      </p>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-7"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
              <v.icon size={20} />
            </div>
            <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{v.title}</h2>
            <p className="mt-2 leading-7 text-[var(--muted)]">{v.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-6 rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">Need a website, not a game?</h2>
          <p className="mt-2 text-[var(--muted)]">Desiglo designs and builds websites for businesses of every size.</p>
        </div>
        <a
          href="https://desiglo.com"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
        >
          Visit desiglo.com <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
