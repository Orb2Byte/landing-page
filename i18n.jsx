// i18n.jsx — bilingual dictionary (Spanish default) + LangProvider + useLang hook

const STRINGS = {
  es: {
    nav: {
      links: ["Soluciones", "Cómo trabajamos", "Sobre nosotros", "Contacto"],
      hrefs: ["#solution", "#process", "about.html", "#cta"],
      bookDemo: "Agendar demo",
    },
    hero: {
      badge: "Software B2B de nueva generación",
      titleA: "Digitaliza tu negocio.",
      titleB: " Sin complicaciones.",
      subtitle: "Desarrollamos software SaaS a medida para PYMES. Ahorra tiempo, automatiza procesos y controla tus datos desde un solo lugar.",
      ctaPrimary: "Agenda una demo gratuita",
      ctaSecondary: "Cómo trabajamos",
      trust: ["100% en la nube", "Hecho a tu medida", "En semanas, no meses"],
      chaosLabel: "Procesos manuales",
      orderLabel: "Todo bajo control",
      bento: {
        savedLabel: "Tiempo ahorrado esta semana",
        savedValue: "+15h",
        savedSub: "frente a la gestión manual",
        notif: "Reserva confirmada por WhatsApp",
        notifTime: "ahora",
        calLabel: "Tu semana, organizada",
        calDays: ["L", "M", "X", "J", "V"],
      },
    },
    problem: {
      eyebrow: "El cambio",
      title: "De herramientas improvisadas a un sistema que controlas.",
      oldWay: "Lo de siempre",
      withUs: "Con Orb2Byte",
      pains: [
        { t: "Hojas de cálculo dispersas", d: "Datos críticos atrapados en decenas de archivos Excel en los que nadie confía del todo." },
        { t: "Papel por todas partes", d: "Facturas, órdenes de trabajo y formularios que se pierden, manchan o duplican." },
        { t: "Sin control real", d: "Sin una única fuente de verdad, y sin saber quién cambió qué, ni cuándo." },
        { t: "Atado a un escritorio", d: "Herramientas que solo funcionan en el ordenador de la oficina, nunca sobre la marcha." },
      ],
      gains: [
        { t: "Cero Excel", d: "Datos estructurados y validados en un solo sistema conectado: se acabó el copiar y pegar." },
        { t: "Cero papel", d: "Flujos digitales de principio a fin: presupuesto, trabajo, factura, firma." },
        { t: "100% en la nube", d: "Acceso desde cualquier dispositivo, en cualquier lugar, con copias de seguridad permanentes." },
        { t: "Tus datos, seguros", d: "Información cifrada, respaldada y siempre bajo tu control." },
      ],
    },
    process: {
      eyebrow: "Sencillo de principio a fin",
      title: "Cómo trabajamos",
      desc: "Tres pasos, sin tecnicismos. Tú nos cuentas el problema; nosotros ponemos la tecnología.",
      steps: [
        { n: "01", t: "Nos sentamos contigo", d: "Auditamos tu negocio y detectamos qué tareas te hacen perder tiempo." },
        { n: "02", t: "Diseñamos tu solución", d: "No pagas por software genérico: construimos solo las herramientas que tu equipo necesita." },
        { n: "03", t: "Despliegue y soporte", d: "Te damos las llaves de tu plataforma en la nube y nos encargamos del mantenimiento." },
      ],
    },
    cta: {
      title: "¿Listo para llevar tu negocio al siguiente nivel?",
      desc: "Agenda una llamada de 30 minutos. Mapeamos tus procesos y te mostramos los módulos exactos que encajan, sin compromiso.",
      primary: "Habla con nuestro equipo",
    },
    footer: {
      about: "Sobre nosotros",
      contact: "Contacto",
      copyright: "© 2026 Orb2Byte. Todos los derechos reservados.",
      dataBadge: "Datos seguros y alojados en Europa",
    },
    modal: {
      title: "Agenda tu demo",
      sub: "30 minutos · adaptado a tus procesos",
      name: "Nombre completo", namePh: "Juan Pérez",
      email: "Correo de trabajo", emailPh: "juan@empresa.com",
      company: "Empresa", companyPh: "Taller Acme",
      sector: "Sector",
      sectors: ["Automoción", "Deporte y fitness", "Clínicas y salud", "Logística", "Otro"],
      size: "Tamaño del equipo",
      submit: "Solicitar demo",
      privacy: "Al enviar aceptas nuestra política de privacidad.",
      required: "Obligatorio",
      invalidEmail: "Introduce un correo válido",
      successTitle: "¡Todo listo, {name}!",
      successA: "Te contactaremos en ", successB: " en menos de un día hábil para agendar tu demo.",
      done: "Listo",
    },
  },

  en: {
    nav: {
      links: ["Solutions", "How we work", "About us", "Contact"],
      hrefs: ["#solution", "#process", "about.html", "#cta"],
      bookDemo: "Book a demo",
    },
    hero: {
      badge: "Next-generation B2B software",
      titleA: "Digitize your business.",
      titleB: " Without the headaches.",
      subtitle: "We build tailored SaaS for small & mid-sized businesses. Save time, automate processes, and own your data — all from a single place.",
      ctaPrimary: "Book a free demo",
      ctaSecondary: "How we work",
      trust: ["100% cloud-native", "Built around you", "Live in weeks, not months"],
      chaosLabel: "Manual processes",
      orderLabel: "Everything under control",
      bento: {
        savedLabel: "Time saved this week",
        savedValue: "+15h",
        savedSub: "vs. doing it by hand",
        notif: "Booking confirmed via WhatsApp",
        notifTime: "now",
        calLabel: "Your week, organized",
        calDays: ["M", "T", "W", "T", "F"],
      },
    },
    problem: {
      eyebrow: "The shift",
      title: "From duct-tape tools to a system you control.",
      oldWay: "The old way",
      withUs: "With Orb2Byte",
      pains: [
        { t: "Scattered spreadsheets", d: "Critical data trapped across dozens of Excel files nobody fully trusts." },
        { t: "Paper everywhere", d: "Invoices, work orders and forms that get lost, smudged or duplicated." },
        { t: "No real control", d: "No single source of truth — and no idea who changed what, or when." },
        { t: "Tied to one desk", d: "Tools that only work on the office computer, never on the move." },
      ],
      gains: [
        { t: "Zero Excel", d: "Structured, validated data in one connected system — no more copy-paste." },
        { t: "Zero paper", d: "Digital workflows end to end: quote, job, invoice, signature." },
        { t: "100% in the cloud", d: "Access from any device, anywhere, with always-on backups." },
        { t: "Your data, secure", d: "Encrypted, backed up and always under your control." },
      ],
    },
    process: {
      eyebrow: "Simple from start to finish",
      title: "How we work",
      desc: "Three steps, no jargon. You tell us the problem; we bring the technology.",
      steps: [
        { n: "01", t: "We sit down with you", d: "We audit your business and pinpoint the tasks that drain your time." },
        { n: "02", t: "We design your solution", d: "You don't pay for generic software — we build only the tools your team needs." },
        { n: "03", t: "Launch & support", d: "We hand you the keys to your cloud platform and take care of maintenance." },
      ],
    },
    cta: {
      title: "Ready to take your business to the next level?",
      desc: "Book a 30-minute call. We'll map your processes and show you the exact modules that fit — no commitment.",
      primary: "Talk to our team",
    },
    footer: {
      about: "About us",
      contact: "Contact",
      copyright: "© 2026 Orb2Byte. All rights reserved.",
      dataBadge: "Secure data, hosted in Europe",
    },
    modal: {
      title: "Book your demo",
      sub: "30 minutes · tailored to your processes",
      name: "Full name", namePh: "Jane Doe",
      email: "Work email", emailPh: "jane@company.com",
      company: "Company", companyPh: "Acme Workshop",
      sector: "Sector",
      sectors: ["Auto & motor", "Sports & fitness", "Clinics & health", "Logistics", "Other"],
      size: "Team size",
      submit: "Request demo",
      privacy: "By submitting you agree to our privacy policy.",
      required: "Required",
      invalidEmail: "Enter a valid email",
      successTitle: "You're all set, {name}!",
      successA: "We'll reach out at ", successB: " within one business day to schedule your demo.",
      done: "Done",
    },
  },
};

const LangContext = React.createContext({ lang: "es", setLang: () => {}, t: STRINGS.es });

function LangProvider({ children }) {
  const [lang, setLangState] = React.useState(() => {
    try { return localStorage.getItem("os_lang") || "es"; } catch (e) { return "es"; }
  });
  React.useEffect(() => {
    try { localStorage.setItem("os_lang", lang); } catch (e) {}
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = React.useCallback((l) => setLangState(l), []);
  const value = { lang, setLang, t: STRINGS[lang] || STRINGS.es };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

function useLang() {
  return React.useContext(LangContext);
}

Object.assign(window, { STRINGS, LangProvider, useLang });
