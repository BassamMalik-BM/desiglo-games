import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import logo from "../assets/logos/desiglo-logo.webp";

const nav = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/about", label: "About" },
];

function Logo() {
  return (
    <Link to="/" aria-label="Desiglo Games home" className="inline-flex items-center gap-2.5">
      <img src={logo} alt="" aria-hidden="true" className="h-9 w-auto object-contain" />
      <span className="text-lg font-semibold tracking-[-0.02em]">Desiglo</span>
      <span className="rounded-md border border-[var(--line)] bg-[var(--accent-soft)] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Games
      </span>
    </Link>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? "dark");
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("desiglo-theme", next); } catch { /* storage unavailable */ }
    setTheme(next);
  };
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition hover:text-[var(--ink)]"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

const titles: Record<string, string> = { "/": "Games", "/games": "All games", "/about": "About" };

export default function Layout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
    if (titles[pathname]) document.title = `${titles[pathname]} — Desiglo`;
  }, [pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm transition ${isActive ? "bg-[var(--accent)] text-white" : "text-[var(--muted)] hover:text-[var(--ink)]"}`;

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--page)_80%,transparent)] backdrop-blur-xl">
        <div className="g-container flex h-[72px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1 md:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} className={linkClass}>{n.label}</NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://desiglo.com"
              className="hidden items-center gap-1.5 rounded-full bg-[var(--ink)] px-4 py-2.5 text-sm font-medium text-[var(--page)] transition hover:opacity-90 sm:inline-flex"
            >
              desiglo.com <ArrowUpRight size={15} />
            </a>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-[var(--line)] md:hidden"
            >
              <div className="g-container flex flex-col gap-1 py-4">
                {nav.map((n) => (
                  <NavLink key={n.to} to={n.to} end={n.to === "/"} className={linkClass}>{n.label}</NavLink>
                ))}
                <a href="https://desiglo.com" className="px-4 py-2 text-sm text-[var(--muted)]">desiglo.com ↗</a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="g-container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-sm text-[var(--muted)]">Small games, made with the same care as our websites.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
            {nav.map((n) => <Link key={n.to} to={n.to} className="hover:text-[var(--ink)]">{n.label}</Link>)}
            <a href="https://desiglo.com" className="hover:text-[var(--ink)]">Desiglo studio ↗</a>
            <a href="https://desiglo.com/contact" className="hover:text-[var(--ink)]">Contact ↗</a>
          </div>
        </div>
        <div className="g-container border-t border-[var(--line)] py-5 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Desiglo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
