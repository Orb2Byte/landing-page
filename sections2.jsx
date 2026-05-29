// sections2.jsx — Hero, Problem vs Solution, How we work (process)
function Hero({ onBookDemo }) {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section id="top" className="relative pt-36 sm:pt-44 pb-20 sm:pb-28">
      {/* aura */}
      <div className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 h-[460px] w-[760px] max-w-[92vw] rounded-full pulse-glow"
      style={{ background: "radial-gradient(closest-side, rgba(var(--glow),0.22), transparent 70%)", filter: "blur(20px)" }} />

      <div className="relative mx-auto max-w-7xl px-5 text-center">
        <Reveal delay={80}>
          <h1 className="font-display mt-7 text-balance text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.02] tracking-tight text-white">
            {h.titleA}
            <br className="hidden sm:block" />
            <span className="text-gradient">{h.titleB}</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg sm:text-xl leading-relaxed text-slate-300/90">
            {h.subtitle}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={onBookDemo} className="btn-primary inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[15px] font-600 text-white w-full sm:w-auto justify-center">
              {h.ctaPrimary} <I.Arrow size={17} />
            </button>
            <a href="#process" className="btn-ghost inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[15px] font-600 text-white w-full sm:w-auto justify-center">
              {h.ctaSecondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl">
            <ChaosOrder />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><I.Cloud size={16} style={{ color: "var(--a-soft)" }} /> {h.trust[0]}</span>
            <span className="inline-flex items-center gap-2"><I.Sparkle size={16} style={{ color: "var(--a-soft)" }} /> {h.trust[1]}</span>
            <span className="inline-flex items-center gap-2"><I.Bolt size={16} style={{ color: "var(--a-soft)" }} /> {h.trust[2]}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Problem vs Solution ---------- */
function ProblemSolution() {
  const { t } = useLang();
  const p = t.problem;
  const painIcons = [I.Files, I.Receipt, I.Lock, I.Globe];
  const gainIcons = [I.Files, I.Cloud, I.Globe, I.Shield];
  const pains = p.pains.map((x, i) => ({ ...x, icon: painIcons[i] }));
  const gains = p.gains.map((x, i) => ({ ...x, icon: gainIcons[i] }));

  return (
    <section id="solution" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-600 uppercase tracking-[0.18em]" style={{ color: "var(--a-soft)" }}>{p.eyebrow}</p>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-700 tracking-tight text-white text-balance">
            {p.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          {/* the old way */}
          <Reveal delay={60}>
            <div className="h-full rounded-3xl border border-white/8 bg-white/[0.015] p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs font-600 text-slate-400">
                {p.oldWay}
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {pains.map((pn) => (
                  <div key={pn.t} className="rounded-2xl p-4 bg-white/[0.02] border border-white/5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400">
                      <pn.icon size={20} />
                    </div>
                    <h3 className="mt-3 font-display font-600 text-white/90">{pn.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{pn.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* with Orb2Byte */}
          <Reveal delay={140}>
            <div className="relative h-full rounded-3xl p-6 sm:p-8 overflow-hidden"
            style={{ border: "1px solid rgba(var(--glow),0.22)", background: "linear-gradient(160deg, rgba(var(--glow),0.08), rgba(var(--glow2),0.04) 60%, transparent)" }}>
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(var(--glow),0.25), transparent)" }} />
              <div className="relative inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-600 text-white"
              style={{ background: "rgba(var(--glow),0.15)", border: "1px solid rgba(var(--glow),0.3)" }}>
                <I.Sparkle size={13} /> {p.withUs}
              </div>
              <div className="relative mt-6 grid sm:grid-cols-2 gap-4">
                {gains.map((g) => (
                  <div key={g.t} className="card-hover rounded-2xl p-4 bg-white/[0.04] border border-white/8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: "linear-gradient(120deg,var(--a1),var(--a2))" }}>
                      <g.icon size={20} />
                    </div>
                    <h3 className="mt-3 font-display font-600 text-white inline-flex items-center gap-1.5">
                      <I.Check size={15} style={{ color: "var(--a-soft)" }} /> {g.t}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300/80">{g.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- How we work — 3 simple steps ---------- */
function Process() {
  const { t } = useLang();
  const p = t.process;
  const icons = [I.Users, I.Sparkle, I.Rocket];
  const steps = p.steps.map((s, i) => ({ ...s, icon: icons[i] }));

  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-600 uppercase tracking-[0.18em]" style={{ color: "var(--a-soft)" }}>{p.eyebrow}</p>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-700 tracking-tight text-white text-balance">
            {p.title}
          </h2>
          <p className="mt-4 text-lg text-slate-300/85 text-pretty">{p.desc}</p>
        </Reveal>

        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={80 + i * 90}>
              <div className="card-hover relative h-full rounded-3xl glass p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                        style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", boxShadow: "0 14px 34px -14px rgba(var(--glow2),0.8)" }}>
                    <s.icon size={24} />
                  </span>
                  <span className="font-display text-5xl font-800 leading-none"
                        style={{ color: "transparent", WebkitTextStroke: "1.5px var(--hairline)" }}>
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-700 text-white text-balance">{s.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-300/80 text-pretty">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, ProblemSolution, Process });
