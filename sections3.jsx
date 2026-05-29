// sections3.jsx — Final CTA, Footer, Demo modal
const { useState: useState3, useEffect: useEffect3 } = React;

function FinalCTA({ onBookDemo }) {
  const { t } = useLang();
  const c = t.cta;
  return (
    <section id="cta" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] p-8 sm:p-14 text-center"
          style={{ border: "1px solid rgba(var(--glow),0.25)" }}>
            {/* gradient bg */}
            <div className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(var(--glow),0.20), rgba(var(--glow2),0.12) 45%, rgba(124,92,246,0.16))" }} />
            <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-72 w-[680px] max-w-[90vw] rounded-full pulse-glow"
            style={{ background: "radial-gradient(closest-side, rgba(var(--glow),0.3), transparent)" }} />

            <div className="relative">
              <h2 className="font-display mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-800 leading-[1.05] tracking-tight text-white text-balance">
                {c.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-slate-200/90 text-pretty">
                {c.desc}
              </p>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button onClick={onBookDemo} className="btn-primary inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-base font-700 text-white w-full sm:w-auto justify-center">
                  {c.primary} <I.Arrow size={18} />
                </button>
                <a href="mailto:orb2byte@gmail.com" className="btn-ghost inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-base font-600 text-white w-full sm:w-auto justify-center">
                  <I.Mail size={17} /> orb2byte@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="relative border-t border-white/8 pt-12 pb-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Logo />
          <nav className="flex items-center gap-7">
            <a href="#" className="text-sm font-500 text-slate-300 hover:text-white transition-colors">{f.about}</a>
            <a href="#cta" className="text-sm font-500 text-slate-300 hover:text-white transition-colors">{f.contact}</a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/8 pt-6 text-sm text-slate-500">
          <span>{f.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Demo modal ---------- */
function DemoModal({ open, onClose }) {
  const { t } = useLang();
  const m = t.modal;
  const [form, setForm] = useState3({ name: "", email: "", company: "", sector: m.sectors[0], size: "1–10" });
  const [sent, setSent] = useState3(false);
  const [errors, setErrors] = useState3({});

  useEffect3(() => {
    if (open) { setSent(false); setErrors({}); }
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  useEffect3(() => {
    setForm((f) => m.sectors.includes(f.sector) ? f : { ...f, sector: m.sectors[0] });
  }, [m]);

  if (!open) return null;

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = m.required;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = m.invalidEmail;
    if (!form.company.trim()) er.company = m.required;
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  const field = (label, k, type = "text", ph = "") => (
    <label className="block">
      <span className="text-xs font-600 text-slate-300">{label}</span>
      <input
        type={type} value={form[k]} onChange={set(k)} placeholder={ph}
        className="mt-1.5 w-full rounded-xl bg-white/[0.04] border px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:bg-white/[0.06]"
        style={{ borderColor: errors[k] ? "rgba(248,113,113,0.6)" : "var(--border)" }}
        onFocus={(e) => !errors[k] && (e.target.style.borderColor = "rgba(var(--glow),0.5)")}
        onBlur={(e) => !errors[k] && (e.target.style.borderColor = "var(--border)")}
      />
      {errors[k] && <span className="mt-1 block text-xs text-red-400">{errors[k]}</span>}
    </label>
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}
      style={{ animation: "fade .3s ease" }} />
      <div className="relative w-full max-w-lg glass-strong rounded-3xl p-6 sm:p-8 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.95)]"
      style={{ animation: "pop .35s cubic-bezier(.2,.8,.3,1)" }}>
        <style>{`@keyframes fade{from{opacity:0}to{opacity:1}}@keyframes pop{from{opacity:0;transform:translateY(16px) scale(.97)}to{opacity:1;transform:none}}`}</style>
        <button onClick={onClose} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-white/8 hover:text-white transition-colors">
          <I.X size={18} />
        </button>

        {sent ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white"
            style={{ background: "linear-gradient(120deg,var(--a1),var(--a2))", boxShadow: "0 0 40px -6px rgba(var(--glow),0.6)" }}>
              <I.Check size={30} />
            </div>
            <h3 className="font-display mt-5 text-2xl font-700 text-white">{m.successTitle.replace("{name}", form.name.split(" ")[0])}</h3>
            <p className="mt-2 text-slate-300/85">{m.successA}<span className="text-white">{form.email}</span>{m.successB}</p>
            <button onClick={onClose} className="btn-primary mt-6 rounded-xl px-6 py-3 text-sm font-600 text-white">{m.done}</button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: "linear-gradient(120deg,var(--a1),var(--a2))" }}>
                <I.Rocket size={20} />
              </span>
              <div>
                <h3 className="font-display text-xl font-700 text-white">{m.title}</h3>
                <p className="text-xs text-slate-400">{m.sub}</p>
              </div>
            </div>

            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {field(m.name, "name", "text", m.namePh)}
                {field(m.email, "email", "email", m.emailPh)}
              </div>
              {field(m.company, "company", "text", m.companyPh)}
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-600 text-slate-300">{m.sector}</span>
                  <select value={form.sector} onChange={set("sector")} className="mt-1.5 w-full rounded-xl bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-sm text-white outline-none">
                    {m.sectors.map((s) => <option key={s} className="bg-ink-900">{s}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-600 text-slate-300">{m.size}</span>
                  <select value={form.size} onChange={set("size")} className="mt-1.5 w-full rounded-xl bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-sm text-white outline-none">
                    {["1–10", "11–50", "51–200", "200+"].map((s) => <option key={s} className="bg-ink-900">{s}</option>)}
                  </select>
                </label>
              </div>
              <button type="submit" className="btn-primary w-full rounded-xl px-6 py-3.5 text-sm font-700 text-white inline-flex items-center justify-center gap-2">
                {m.submit} <I.Arrow size={16} />
              </button>
              <p className="text-center text-xs text-slate-500">{m.privacy}</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { FinalCTA, Footer, DemoModal });
