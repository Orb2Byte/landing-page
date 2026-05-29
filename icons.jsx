// icons.jsx — lucide-style line icons + scroll-reveal helper
const { useEffect, useRef, useState } = React;

// Generic icon wrapper
function Icon({ children, size = 24, className = "", strokeWidth = 1.6, ...rest }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round"
      className={className} {...rest}
    >
      {children}
    </svg>
  );
}

const I = {
  Rocket: (p) => <Icon {...p}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></Icon>,
  Arrow: (p) => <Icon {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></Icon>,
  Menu: (p) => <Icon {...p}><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></Icon>,
  X: (p) => <Icon {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></Icon>,
  Check: (p) => <Icon {...p}><path d="M20 6 9 17l-5-5"/></Icon>,
  Sparkle: (p) => <Icon {...p}><path d="M9.94 14.06 12 21l2.06-6.94L21 12l-6.94-2.06L12 3 9.94 9.94 3 12z"/></Icon>,
  Cloud: (p) => <Icon {...p}><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.3 4 4 0 0 0 6.5 19z"/></Icon>,
  Shield: (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></Icon>,
  Bolt: (p) => <Icon {...p}><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></Icon>,
  Files: (p) => <Icon {...p}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/></Icon>,
  Calendar: (p) => <Icon {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></Icon>,
  Box: (p) => <Icon {...p}><path d="M21 8v8a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.73l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></Icon>,
  Receipt: (p) => <Icon {...p}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><path d="M8 7h8M8 11h8M8 15h5"/></Icon>,
  Users: (p) => <Icon {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Icon>,
  Chart: (p) => <Icon {...p}><path d="M3 3v18h18"/><path d="m7 14 3-3 3 3 5-6"/></Icon>,
  Layers: (p) => <Icon {...p}><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></Icon>,
  Lock: (p) => <Icon {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></Icon>,
  Cpu: (p) => <Icon {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></Icon>,
  Plug: (p) => <Icon {...p}><path d="M12 22v-5M9 8V2M15 8V2M18 8H6v4a6 6 0 0 0 12 0z"/></Icon>,
  Globe: (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Icon>,
  Mail: (p) => <Icon {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></Icon>,
  Message: (p) => <Icon {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></Icon>,
  Clock: (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>,
  Sheet: (p) => <Icon {...p}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5"/><path d="M8 13h2M14 13h2M8 17h2M14 17h2"/></Icon>,
  Note: (p) => <Icon {...p}><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11l5-5V5a2 2 0 0 0-2-2z"/><path d="M15 21v-5a1 1 0 0 1 1-1h5"/></Icon>,
  CheckCircle: (p) => <Icon {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></Icon>,
};

// Scroll-reveal wrapper — applies end-state via INLINE styles (always win the cascade)
function Reveal({ children, as: Tag = "div", delay = 0, className = "", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown(true); return; }
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
    const check = () => {
      if (done || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92 && r.bottom > 0) reveal();
    };
    check();
    const t1 = setTimeout(check, 60);
    const t2 = setTimeout(check, 300);
    // failsafe: never leave content hidden
    const t3 = setTimeout(reveal, 1200);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        // opacity is tied DIRECTLY to state (no transition) so content can never
        // get stuck at the start value on renderers that don't advance transitions.
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(34px)",
        // only the slide animates; it degrades harmlessly if a surface freezes it
        transition: "transform .8s cubic-bezier(.2,.7,.3,1)",
        transitionDelay: shown ? `${delay}ms` : "0ms",
        willChange: "transform",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

Object.assign(window, { Icon, I, Reveal });
