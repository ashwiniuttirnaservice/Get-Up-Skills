import { GraduationCap, Clock, Briefcase, Users, Sparkles, TrendingUp } from "lucide-react";
import { features, stats } from "@/data/site";
import Reveal from "./Reveal";

const icons = {
  GraduationCap,
  Clock,
  Briefcase,
  Users,
};

export default function WhyUs() {
  const [featured, ...rest] = features;
  const FeaturedIcon = icons[featured.icon];
  // The completion-rate stat, reused here as the callout's headline number.
  const completion = stats.find((s) => s.label.toLowerCase().includes("completion")) ?? stats[0];

  return (
    <section id="why-us" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-[#485DAC]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold text-slate-500 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#53B8EC]" />
            WHY GETUPSKILL
          </div>
          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Everything about GetUpSkill is built around one outcome — getting you job-ready, faster.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Featured tile — spans two columns, carries a bigger visual moment */}
          <Reveal className="lg:col-span-2">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[26px] border border-white/80 bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_20px_55px_rgba(75,95,150,0.1)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(75,95,150,0.16)]">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundColor: featured.accent }}
              />
              <div className="relative">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${featured.accent}18`, color: featured.accent }}
                >
                  <FeaturedIcon size={26} />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-slate-900">{featured.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-7 text-slate-500">{featured.desc}</p>
              </div>

              <div className="relative mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
                <TrendingUp size={18} style={{ color: featured.accent }} />
                <span className="text-sm font-semibold text-slate-600">
                  Backed by 25+ industry mentors across every course
                </span>
              </div>
            </div>
          </Reveal>

          {/* Stat callout — dark, echoing the hero/CTA/footer treatment */}
          <Reveal delay={100}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[26px] bg-[#05060f] p-8 text-white shadow-[0_20px_55px_rgba(10,15,40,0.25)]">
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#53B8EC]/25 blur-3xl" />
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  {completion.label}
                </span>
                <div className="mt-3 text-5xl font-extrabold text-white">{completion.value}</div>
              </div>
              <p className="relative mt-6 text-sm leading-6 text-slate-400">
                Learners who start a GetUpSkill course finish it — structured
                cohorts and mentor check-ins keep you accountable.
              </p>
            </div>
          </Reveal>

          {/* Remaining features */}
          {rest.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Reveal key={f.title} delay={200 + i * 80}>
                <div className="group relative overflow-hidden rounded-[22px] border border-white/80 bg-white/70 p-6 shadow-[0_15px_45px_rgba(75,95,150,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_25px_60px_rgba(75,95,150,0.14)]">
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: f.accent }}
                  />
                  <div
                    className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: `${f.accent}18`, color: f.accent }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="relative mt-5 text-[16px] font-extrabold text-slate-900">{f.title}</h3>
                  <p className="relative mt-2 text-[13px] leading-6 text-slate-500">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
