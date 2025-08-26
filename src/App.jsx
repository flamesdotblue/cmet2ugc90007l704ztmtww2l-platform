import React, { useEffect, useMemo, useRef, useState } from "react";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const sections = useMemo(
    () => [
      { id: "features", label: "Features" },
      { id: "robots", label: "Robots" },
      { id: "process", label: "Process" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <Header
        sections={sections}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        dark={dark}
        setDark={setDark}
      />
      <main>
        <Hero />
        <Features />
        <Robots />
        <Process />
        <Metrics />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header({ sections, mobileOpen, setMobileOpen, dark, setDark }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight">MechMind Robotics</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="rounded-md border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            {dark ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          >
            Get a quote
          </button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="rounded-md border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Open menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white"
            >
              Get a quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
        <div className="absolute -left-24 -top-16 h-72 w-72 rounded-full bg-blue-500/30" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan-400/20" />
        <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-fuchsia-400/10" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:py-24 md:grid-cols-2 md:gap-8 sm:px-6">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-300">
            <BoltIcon className="h-4 w-4" />
            Industry-grade robotics, delivered fast
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            We build robots that build your business
          </h1>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
            From autonomous mobile robots to high-precision manipulators, MechMind
            designs, integrates, and supports robotics that scale your operations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-blue-700"
            >
              Get a custom quote
            </button>
            <button
              onClick={() => scrollTo("robots")}
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Explore robots
            </button>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2"><ShieldIcon className="h-4 w-4"/>ISO 10218 compliant</div>
            <div className="flex items-center gap-2"><ClockIcon className="h-4 w-4"/>8–12 week delivery</div>
            <div className="flex items-center gap-2"><SupportIcon className="h-4 w-4"/>24/7 support</div>
          </div>
        </div>
        <div className="relative">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const data = [
    {
      title: "Vision that sees everything",
      desc: "3D cameras and AI perception for reliable picking, assembly, and inspection.",
      icon: <EyeIcon className="h-6 w-6" />,
    },
    {
      title: "Manipulation you can trust",
      desc: "Force control and path planning achieve sub-millimeter accuracy under load.",
      icon: <ArmIcon className="h-6 w-6" />,
    },
    {
      title: "Autonomy that adapts",
      desc: "Fleet management and SLAM keep AMRs moving safely in dynamic spaces.",
      icon: <BrainIcon className="h-6 w-6" />,
    },
    {
      title: "Safety first, always",
      desc: "Functional safety design with e-stops, light curtains, and risk assessments.",
      icon: <ShieldIcon className="h-6 w-6" />,
    },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">Built for real factories</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600 dark:text-slate-300">
        Proven hardware, modern software, and a delivery model that gets robots
        on your floor fast.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((f) => (
          <div key={f.title} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 group-hover:scale-105 dark:bg-blue-900/20 dark:text-blue-300">
              {f.icon}
            </div>
            <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Robots() {
  const robots = [
    {
      name: "AssemblyBot A1",
      blurb:
        "6-axis collaborative arm for precision fastening and assembly with force feedback.",
      spec: "Payload 7kg • Reach 900mm • ±0.03mm repeatability",
      Accent: () => <ArmBotSVG />,
    },
    {
      name: "Picker P200",
      blurb:
        "High-speed vision picking for e-commerce and kitting with AI grasping.",
      spec: "1200 picks/hr • 3D vision • Multi-bin",
      Accent: () => <PickerSVG />,
    },
    {
      name: "AMR Scout",
      blurb:
        "Autonomous mobile robot for material movement and line-side delivery.",
      spec: "Payload 300kg • 1.5m/s • LiDAR + V-SLAM",
      Accent: () => <AMRSVG />,
    },
  ];
  return (
    <section id="robots" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">Robots that ship</h2>
          <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-300">
            Pre-engineered cells and AMRs tailored to your workflow. Integrate fast,
            expand as you grow.
          </p>
        </div>
        <span className="hidden text-sm text-slate-500 sm:block">Lead time: 8–12 weeks</span>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {robots.map((r) => (
          <div key={r.name} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="relative h-44 w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-850">
              <div className="absolute inset-0 flex items-center justify-center">
                <r.Accent />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold">{r.name}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{r.blurb}</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <ChipIcon className="h-4 w-4" />
                {r.spec}
              </div>
              <div className="mt-5 flex gap-2">
                <button className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                  Datasheet
                </button>
                <button className="rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700">
                  Request demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Discovery",
      text: "We map your process, success metrics, and constraints in a free consult.",
    },
    { title: "Design", text: "We simulate, fixture, and plan safety per ISO & OSHA." },
    { title: "Deploy", text: "We install, train, and ramp to target throughput." },
    { title: "Support", text: "Remote monitoring and on-site service keep uptime high." },
  ];
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-bold sm:text-3xl">From idea to ROI</h2>
      <div className="relative mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="font-semibold">{s.title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Metrics() {
  const counters = [
    { label: "Deployments", value: 120 },
    { label: "Avg. ROI months", value: 11 },
    { label: "Uptime", value: 99.3, suffix: "%" },
    { label: "Countries", value: 7 },
  ];
  const [vals, setVals] = useState(counters.map(() => 0));
  useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1200;
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setVals(
        counters.map((c) =>
          Number((c.value * easeOutCubic(p)).toFixed(c.suffix ? 1 : 0))
        )
      );
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-4">
        {counters.map((c, i) => (
          <div key={c.label} className="flex flex-col items-center">
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {vals[i]}
              {c.suffix || ""}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {c.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "What industries do you serve?",
      a: "Automotive, electronics, e-commerce, aerospace, food & beverage, and general manufacturing.",
    },
    {
      q: "Do you provide full integration?",
      a: "Yes. We handle mechanical, electrical, safety, PLC/robot programming, and operator training.",
    },
    {
      q: "How do you ensure safety compliance?",
      a: "We perform risk assessments and design to ISO 10218/TS 15066, with documented validation.",
    },
    {
      q: "Can robots be reconfigured later?",
      a: "Absolutely. Our modular cells and AMRs support quick tooling and software changes.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
      <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
        {items.map((it, i) => (
          <div key={it.q}>
            <button
              onClick={() => setOpen((o) => (o === i ? -1 : i))}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <span className="font-medium">{it.q}</span>
              <span className="text-slate-500">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300">{it.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid";
    if (form.message.trim().length < 10) errs.message = "Min 10 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 900);
  };
  return (
    <section id="contact" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-blue-50/60 to-transparent dark:from-blue-900/10" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">Tell us about your project</h2>
          <p className="mt-2 max-w-md text-slate-600 dark:text-slate-300">
            Share a few details and we’ll respond within one business day with the next steps.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-blue-600"/>Free discovery session</li>
            <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-blue-600"/>Simulation-based proposal</li>
            <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-blue-600"/>Fixed-price delivery</li>
          </ul>
        </div>
        <div>
          <form onSubmit={submit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            {done ? (
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Request received</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  We’ll reach out shortly. Thanks for considering MechMind Robotics.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className={`mt-1 w-full rounded-md border bg-white px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 dark:bg-slate-950 ${
                      errors.name
                        ? "border-red-400 focus:ring-2 focus:ring-red-300"
                        : "border-slate-300 focus:ring-2 focus:ring-blue-300 dark:border-slate-700"
                    }`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className={`mt-1 w-full rounded-md border bg-white px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 dark:bg-slate-950 ${
                      errors.email
                        ? "border-red-400 focus:ring-2 focus:ring-red-300"
                        : "border-slate-300 focus:ring-2 focus:ring-blue-300 dark:border-slate-700"
                    }`}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium">Project details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    className={`mt-1 w-full rounded-md border bg-white px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 dark:bg-slate-950 ${
                      errors.message
                        ? "border-red-400 focus:ring-2 focus:ring-red-300"
                        : "border-slate-300 focus:ring-2 focus:ring-blue-300 dark:border-slate-700"
                    }`}
                    placeholder="What process are you looking to automate? Current throughput, part sizes, goals..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>
                <button
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <Spinner className="h-4 w-4" /> Sending...
                    </span>
                  ) : (
                    "Request quote"
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <Logo className="h-7 w-7" />
          <div>
            <div className="text-sm font-semibold">MechMind Robotics</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">We build robots that build your business.</div>
          </div>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} MechMind Robotics, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// Utility & Icons
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function Logo({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" stroke="url(#g)" strokeWidth="4" />
      <path d="M20 36a12 12 0 0 1 24 0v4a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4v-4Z" fill="url(#g)" opacity="0.2" />
      <circle cx="32" cy="28" r="8" stroke="url(#g)" strokeWidth="4" />
    </svg>
  );
}

function MenuIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function SunIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}
function MoonIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
    </svg>
  );
}
function BoltIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 21 5 13h6L7 3h10l-4 8h6l-8 10z" />
    </svg>
  );
}
function ShieldIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function ClockIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}
function SupportIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M7 10v4M17 10v4M12 17v2M12 5v2" />
    </svg>
  );
}
function EyeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function ArmIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21h4l4-8 6 2 4-8" />
      <circle cx="7" cy="21" r="1.5" fill="currentColor" />
    </svg>
  );
}
function BrainIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 6a3 3 0 0 1 6 0 3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3 3 3 0 0 1-6 0 3 3 0 0 1-3-3v-1a3 3 0 0 1 0-6V9a3 3 0 0 1 3-3z" />
    </svg>
  );
}
function ChipIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M4 10v4M20 10v4M10 4h4M10 20h4" />
    </svg>
  );
}
function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function Spinner({ className }) {
  return (
    <svg className={className + " animate-spin"} viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"></path>
    </svg>
  );
}

// Simple inline SVG illustrations for robots
function ArmBotSVG() {
  return (
    <svg viewBox="0 0 220 120" className="h-40 w-full text-slate-700 dark:text-slate-300">
      <defs>
        <linearGradient id="armg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="10" y="80" width="200" height="20" rx="6" fill="url(#armg)" opacity="0.3" />
      <circle cx="60" cy="80" r="12" fill="url(#armg)" />
      <rect x="54" y="50" width="12" height="30" fill="currentColor" opacity="0.6" />
      <rect x="66" y="40" width="60" height="12" rx="6" fill="url(#armg)" />
      <rect x="120" y="25" width="12" height="30" rx="6" fill="currentColor" opacity="0.6" />
      <rect x="132" y="20" width="40" height="10" rx="5" fill="url(#armg)" />
      <rect x="168" y="18" width="12" height="14" rx="3" fill="currentColor" />
    </svg>
  );
}
function PickerSVG() {
  return (
    <svg viewBox="0 0 220 120" className="h-40 w-full text-slate-700 dark:text-slate-300">
      <defs>
        <linearGradient id="pickg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect x="20" y="85" width="180" height="15" rx="6" fill="url(#pickg)" opacity="0.3" />
      <rect x="40" y="70" width="24" height="24" rx="4" fill="currentColor" opacity="0.6" />
      <rect x="72" y="60" width="24" height="34" rx="4" fill="currentColor" opacity="0.6" />
      <rect x="104" y="65" width="24" height="29" rx="4" fill="currentColor" opacity="0.6" />
      <rect x="136" y="55" width="24" height="39" rx="4" fill="currentColor" opacity="0.6" />
      <rect x="90" y="20" width="40" height="8" rx="4" fill="url(#pickg)" />
      <rect x="108" y="28" width="6" height="30" fill="currentColor" />
      <path d="M100 58h28l-8 8h-12z" fill="url(#pickg)" />
    </svg>
  );
}
function AMRSVG() {
  return (
    <svg viewBox="0 0 220 120" className="h-40 w-full text-slate-700 dark:text-slate-300">
      <defs>
        <linearGradient id="amrg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect x="40" y="70" width="140" height="30" rx="8" fill="url(#amrg)" />
      <circle cx="70" cy="105" r="10" fill="currentColor" />
      <circle cx="150" cy="105" r="10" fill="currentColor" />
      <rect x="70" y="56" width="80" height="12" rx="6" fill="url(#amrg)" opacity="0.5" />
      <circle cx="110" cy="80" r="6" fill="white" opacity="0.6" />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
      <svg viewBox="0 0 600 450" className="h-full w-full">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect x="40" y="280" width="520" height="30" rx="8" fill="url(#grad)" opacity="0.25" />
        <g>
          <circle cx="160" cy="280" r="20" fill="url(#grad)" />
          <rect x="152" y="220" width="16" height="60" fill="#0ea5e9" opacity="0.5" />
          <rect x="168" y="190" width="160" height="18" rx="9" fill="url(#grad)" />
          <rect x="322" y="160" width="18" height="48" rx="9" fill="#64748b" opacity="0.6" />
          <rect x="340" y="150" width="90" height="12" rx="6" fill="url(#grad)" />
          <rect x="428" y="147" width="16" height="18" rx="4" fill="#334155" />
        </g>
        <g>
          <rect x="110" y="320" width="380" height="40" rx="10" fill="#0f172a" opacity="0.7" />
          <rect x="120" y="330" width="360" height="20" rx="6" fill="#334155" opacity="0.6" />
          <circle cx="140" cy="340" r="6" fill="#22d3ee" />
          <circle cx="160" cy="340" r="6" fill="#a78bfa" />
        </g>
      </svg>
    </div>
  );
}
