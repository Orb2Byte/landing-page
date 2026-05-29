// app.jsx — assembles the page + Tweaks (accent palette + typography)
const { useEffect: useEffectApp } = React;

const ACCENTS = {
  Cyan:   { "--a1": "#22d3ee", "--a2": "#3b82f6", "--a-soft": "#67e8f9", "--glow": "34, 211, 238",  "--glow2": "59, 130, 246" },
  Purple: { "--a1": "#a855f7", "--a2": "#6366f1", "--a-soft": "#c4b5fd", "--glow": "168, 85, 247",  "--glow2": "99, 102, 241" },
  Blue:   { "--a1": "#60a5fa", "--a2": "#2563eb", "--a-soft": "#93c5fd", "--glow": "59, 130, 246",  "--glow2": "37, 99, 235"  },
};

const TYPES = {
  Sora:    { "--font-display": "'Sora', system-ui, sans-serif",          "--font-body": "'Inter', system-ui, sans-serif"   },
  Grotesk: { "--font-display": "'Space Grotesk', system-ui, sans-serif", "--font-body": "'Inter', system-ui, sans-serif"   },
  Outfit:  { "--font-display": "'Outfit', system-ui, sans-serif",        "--font-body": "'Manrope', system-ui, sans-serif" },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "Light",
  "accent": "Cyan",
  "typeface": "Sora"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const { lang } = useLang();
  const [demo, setDemo] = React.useState(false);

  useEffectApp(() => {
    const root = document.documentElement;
    const vars = { ...ACCENTS[t.accent || "Cyan"], ...TYPES[t.typeface || "Sora"] };
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [t.accent, t.typeface]);

  useEffectApp(() => {
    document.documentElement.dataset.theme = (t.theme || "Light") === "Dark" ? "dark" : "light";
  }, [t.theme]);

  const openDemo = () => setDemo(true);

  const TW = lang === "es"
    ? { theme: "Tema", light: "Claro", dark: "Oscuro", accent: "Paleta de acento", color: "Color", type: "Tipografía", face: "Fuente" }
    : { theme: "Theme", light: "Light", dark: "Dark", accent: "Accent palette", color: "Color", type: "Typography", face: "Typeface" };

  return (
    <>
      <Navbar onBookDemo={openDemo} />
      <main>
        <Hero onBookDemo={openDemo} />
        <ProblemSolution />
        <Process />
        <FinalCTA onBookDemo={openDemo} />
      </main>
      <Footer />
      <DemoModal open={demo} onClose={() => setDemo(false)} />

      <TweaksPanel>
        <TweakSection label={TW.theme} />
        <TweakRadio
          label={TW.theme}
          value={t.theme}
          options={["Light", "Dark"]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakSection label={TW.accent} />
        <TweakRadio
          label={TW.color}
          value={t.accent}
          options={["Cyan", "Purple", "Blue"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label={TW.type} />
        <TweakRadio
          label={TW.face}
          value={t.typeface}
          options={["Sora", "Grotesk", "Outfit"]}
          onChange={(v) => setTweak("typeface", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <LangProvider>
    <App />
  </LangProvider>
);
