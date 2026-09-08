import {
  GraduationCap,
  Clock,
  Briefcase,
  Users,
  BadgeCheck,
  Rocket,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  BookOpen,
  Star,
} from "lucide-react";
import { features, stats } from "@/data/site";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const icons = {
  GraduationCap,
  Clock,
  Briefcase,
  Users,
  BadgeCheck,
  Rocket,
};

const statIcons = {
  "Happy Students": Users,
  "Expert-Led Courses": BookOpen,
  "Industry Mentors": Star,
  "Completion Rate": TrendingUp,
};

export default function WhyUs() {
  const [featured, ...rest] = features;
  const FeaturedIcon = icons[featured.icon];
  const allStats = stats;

  return (
    <section id="why-us" className="relative overflow-hidden">

      {/* ── STATS STRIP ── */}
      <div
        className="relative py-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 35%, #9333EA 65%, #EC4899 100%)",
        }}
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {allStats.map((s, i) => {
              const key = Object.keys(statIcons).find((k) =>
                s.label.toLowerCase().includes(k.toLowerCase().split(" ")[0])
              );
              const StatIcon = key ? statIcons[key] : TrendingUp;
              return (
                <Reveal key={s.label} delay={i * 80}>
                  <div
                    className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                  >
                    <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-white/10 blur-xl group-hover:bg-white/20 transition-all" />
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      <StatIcon size={20} className="text-white" strokeWidth={2} />
                    </div>
                    <CountUp
                      value={s.value}
                      className="block text-3xl sm:text-4xl font-black text-white tracking-tight"
                    />
                    <span className="text-sm font-medium text-white/70">{s.label}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── FEATURES SECTION ── */}
      <div className="relative bg-slate-50 py-28 overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[120px]" />
        <div className="absolute -bottom-48 -right-48 h-[500px] w-[500px] rounded-full bg-pink-400/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Reveal className="mx-auto max-w-2xl text-center">
            <div
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2"
              style={{
                background: "rgba(59,130,246,0.06)",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Why GetUpSkill</span>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Choose Us?
              </span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 max-w-xl mx-auto">
              Everything is engineered for one outcome — getting you{" "}
              <span className="text-slate-900 font-semibold">job-ready, faster</span> than traditional paths.
            </p>
          </Reveal>

          {/* Bento Grid */}
          <div className="mt-16 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[290px]">

            {/* Featured Card */}
            <Reveal className="md:col-span-2 row-span-1 h-full">
              <div
                className="group relative h-full flex flex-col justify-center overflow-hidden rounded-[28px] p-10 transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(99,102,241,0.05) 100%)",
                  border: "1px solid rgba(15,23,42,0.08)",
                  boxShadow: "0 4px 24px rgba(15,23,42,0.05)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[28px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                <div
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-[80px] transition-all duration-700 group-hover:opacity-40"
                  style={{ backgroundColor: featured.accent }}
                />

                <div className="relative z-10 flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div
                      className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl text-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: `linear-gradient(135deg, ${featured.accent}, ${featured.accent}99)`,
                        boxShadow: `0 16px 40px ${featured.accent}55`,
                      }}
                    >
                      <FeaturedIcon size={34} strokeWidth={2} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                      style={{
                        background: "rgba(15,23,42,0.05)",
                        border: "1px solid rgba(15,23,42,0.08)",
                        color: "rgba(15,23,42,0.55)",
                      }}
                    >
                      <Sparkles size={11} className="text-blue-500" /> #1 Feature
                    </div>
                    <h3 className="mt-3 text-2xl font-extrabold text-slate-900 transition-colors group-hover:text-blue-600">
                      {featured.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-7 text-slate-600">{featured.desc}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      Backed by 25+ industry mentors across every course
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Completion Rate Card */}
            <Reveal delay={100} className="md:col-span-1 row-span-1 h-full">
              <div
                className="group relative h-full flex flex-col justify-between overflow-hidden rounded-[28px] p-8 text-white transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(145deg, #3B82F6 0%, #7C3AED 100%)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 16px 40px rgba(99,102,241,0.25)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div
                  className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full blur-[70px] transition-all duration-700 group-hover:scale-125"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,0.25), transparent)" }}
                />
                <div
                  className="absolute -top-12 -left-12 h-40 w-40 rounded-full blur-[50px]"
                  style={{ background: "rgba(236,72,153,0.25)" }}
                />

                <div className="relative z-10">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white"
                    style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
                  >
                    <TrendingUp size={13} /> Completion Rate
                  </div>
                  <CountUp
                    value="95%"
                    className="mt-3 block text-[5.5rem] leading-none font-black tracking-tighter bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent"
                  />
                </div>

                <p className="relative z-10 text-sm leading-relaxed text-white/80">
                  Learners who start a GetUpSkill course finish it — structured cohorts & mentor check-ins keep you on track.
                </p>
              </div>
            </Reveal>

            {/* Smaller Feature Cards */}
            {rest.map((f, i) => {
              const Icon = icons[f.icon];
              return (
                <Reveal key={f.title} delay={200 + i * 80} className="col-span-1 row-span-1 h-full">
                  <div
                    className="group relative h-full flex flex-col justify-between overflow-hidden rounded-[28px] p-7 transition-all duration-500 hover:-translate-y-1.5"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(15,23,42,0.08)",
                      boxShadow: "0 4px 20px rgba(15,23,42,0.05)",
                      "--accent": f.accent,
                    }}
                  >
                    <div
                      className="absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-0 blur-[55px] transition-all duration-500 group-hover:opacity-25"
                      style={{ backgroundColor: f.accent }}
                    />
                    <div
                      className="absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ boxShadow: `inset 0 0 0 1px ${f.accent}55` }}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <div
                        className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-[var(--accent)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:text-white"
                        style={{ background: `${f.accent}18` }}
                      >
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{ backgroundColor: f.accent }}
                        />
                        <Icon size={24} strokeWidth={2} className="relative z-10" />
                      </div>
                      <span className="text-5xl font-black" style={{ color: `${f.accent}22` }}>
                        {String(i + 2).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-lg font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-[var(--accent)]">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
