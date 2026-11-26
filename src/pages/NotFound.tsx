import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  useEffect(() => { document.title = "Page not found — Desiglo Games"; }, []);
  return (
    <section className="g-container grid min-h-[60vh] place-items-center py-24 text-center">
      <div>
        <div className="mx-auto grid w-fit grid-cols-3 gap-1.5" aria-hidden="true">
          {[1, 0, 1, 1, 1, 1, 0, 0, 1].map((on, i) => (
            <span key={i} className={`h-7 w-7 rounded-lg ${on ? "bg-[var(--accent)]" : "bg-[var(--surface-strong)]"}`} />
          ))}
        </div>
        <h1 className="mt-8 text-5xl font-semibold tracking-[-0.05em]">Game over.</h1>
        <p className="mt-4 text-[var(--muted)]">This page doesn't exist, or the game hasn't launched yet.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
        >
          <ArrowLeft size={16} /> Back to games
        </Link>
      </div>
    </section>
  );
}
