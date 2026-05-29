// sections1.jsx — Logo, Navbar, Hero, Dashboard mockup
const { useState: useState1, useEffect: useEffect1 } = React;

function Logo({ className = "" }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 group ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-9 w-9">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--a-soft)" />
              <stop offset="1" stopColor="var(--a2)" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="6.5" fill="url(#lg)" />
          <ellipse cx="20" cy="20" rx="16" ry="7" fill="none" stroke="var(--hairline)" strokeWidth="1.4" transform="rotate(-28 20 20)" />
          <circle cx="33" cy="13.5" r="2.4" fill="var(--a-soft)" />
        </svg>
      </span>
      <span className="font-display text-lg font-700 tracking-tight text-white">
        Orb2<span className="text-gradient">Byte</span>
      </span>
    </a>
  );
}

/* ---------- Language selector ---------- */
function LangToggle({ className = "" }) {
  const { lang, setLang } = useLang();
  const opts = [
    { id: "es", label: "ES" },
    { id: "en", label: "EN" },
  ];
  return (
    <div
      className={`relative inline-flex items-center rounded-xl glass p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {opts.map((o) => {
        const on = lang === o.id;
        return (
          <button
            key={o.id}
            onClick={() => setLang(o.id)}
            aria-pressed={on}
            className={`relative z-10 inline-flex items-center justify-center rounded-[10px] px-2.5 py-1.5 text-xs font-700 tracking-wide transition-colors ${
              on ? "text-white" : "text-slate-400 hover:text-slate-200"
            }`}
            style={on ? { background: "linear-gradient(120deg,var(--a1),var(--a2))", boxShadow: "0 6px 18px -8px rgba(var(--glow2),0.7)" } : {}}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function Navbar({ onBookDemo }) {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState1(false);
  const [open, setOpen] = useState1(false);

  useEffect1(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = t.nav.links.map((label, i) => ({ label, href: t.nav.hrefs[i] }));

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-500 ${scrolled ? "mt-2.5" : "mt-4"}`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 transition-all duration-500 ${
            scrolled
              ? "glass-strong h-14 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]"
              : "h-16 border border-transparent bg-transparent"
          }`}
        >
          <Logo />

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3.5 py-2 text-sm font-500 text-slate-300/90 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LangToggle className="hidden sm:inline-flex" />
            <button
              onClick={onBookDemo}
              className="hidden sm:inline-flex btn-primary items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-600 text-white"
            >
              {t.nav.bookDemo}
              <I.Arrow size={15} />
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl glass text-white"
              aria-label="Menu"
            >
              {open ? <I.X size={20} /> : <I.Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-strong rounded-2xl p-3 flex flex-col gap-1">
            <div className="flex items-center justify-between px-1 pb-1">
              <span className="text-[11px] font-600 uppercase tracking-wider text-slate-500">Idioma · Language</span>
              <LangToggle />
            </div>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-slate-200 hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); onBookDemo(); }}
              className="btn-primary mt-1 rounded-xl px-4 py-3 text-sm font-600 text-white"
            >
              {t.nav.bookDemo}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Chaos vs. Order — two overlapping glass cards ---------- */
function ChaosOrder() {
  const { t } = useLang();
  const h = t.hero;

  const messy = [
    { Icon: I.Sheet,    cls: "left-5 top-12 -rotate-12",  tint: "#f59e0b" },
    { Icon: I.Message,  cls: "right-6 top-8 rotate-6",    tint: "#fb923c" },
    { Icon: I.Note,     cls: "left-10 bottom-10 rotate-12", tint: "#f87171" },
    { Icon: I.Clock,    cls: "right-9 bottom-12 -rotate-6", tint: "#fbbf24" },
  ];

  return (
    <div className="relative mx-auto h-[340px] sm:h-[380px] w-full max-w-xl">
      {/* ── CHAOS card (left, tilted, dimmed, warm glow) ── */}
      <div
        className="absolute left-0 sm:left-2 top-7 z-10 h-[260px] sm:h-[300px] w-[58%] -rotate-6 rounded-3xl glass overflow-hidden"
        style={{
          opacity: 0.7,
          border: "1px solid rgba(248,113,113,0.28)",
          boxShadow: "0 24px 60px -28px rgba(239,68,68,0.45)",
        }}
      >
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full"
             style={{ background: "radial-gradient(closest-side, rgba(248,113,113,0.22), transparent)" }} />
        {messy.map((m, i) => (
          <span key={i} className={`absolute ${m.cls} flex h-11 w-11 items-center justify-center rounded-xl`}
                style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: m.tint }}>
            <m.Icon size={20} />
          </span>
        ))}
        <div className="absolute inset-x-0 bottom-5 flex justify-center">
          <span className="font-display text-sm font-600 text-rose-200/80"
                style={{ filter: "blur(1.4px)" }}>
            {h.chaosLabel}
          </span>
        </div>
      </div>

      {/* ── ORDER card (right, straight, bright, brand glow, floating) ── */}
      <div
        className="floaty absolute right-0 sm:right-2 top-1 z-20 h-[280px] sm:h-[320px] w-[60%] rounded-3xl glass-strong overflow-hidden"
        style={{
          border: "1px solid rgba(var(--glow),0.4)",
          boxShadow: "0 30px 70px -24px rgba(var(--glow2),0.6), 0 0 50px -12px rgba(var(--glow),0.4)",
        }}
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full pulse-glow"
             style={{ background: "radial-gradient(closest-side, rgba(var(--glow),0.3), transparent)" }} />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white"
                style={{ background: "linear-gradient(135deg, #22d3a5, var(--a2))", boxShadow: "0 0 36px -6px rgba(34,211,165,0.7)" }}>
            <I.CheckCircle size={34} />
          </span>
          <div className="mt-6 w-full space-y-2.5">
            {[100, 78, 90, 64].map((w, i) => (
              <div key={i} className="mx-auto flex items-center gap-2" style={{ width: `${w}%` }}>
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--a-soft)" }} />
                <span className="h-2.5 flex-1 rounded-full"
                      style={{ background: i === 0 ? "linear-gradient(90deg,var(--a1),var(--a2))" : "var(--line)" }} />
              </div>
            ))}
          </div>
          <span className="mt-7 font-display text-base font-700 text-white">{h.orderLabel}</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Logo, Navbar, ChaosOrder, LangToggle });
