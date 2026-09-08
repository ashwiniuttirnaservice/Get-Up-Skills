import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import { stats } from "@/data/site";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

// Ordered to line up with the `stats` array in data/site.js (students,
// courses, mentors, completion rate). Falls back to Award if the copy ever
// grows past this list.
const ICONS = [Users, BookOpen, GraduationCap, Award];

// Per-card icon-chip tint, cycling alongside ICONS so each stat reads as its
// own color moment against the shared gradient background.
const ICON_TINTS = [
  "from-cyan-300/40 to-cyan-300/5 text-cyan-50",
  "from-indigo-300/40 to-indigo-300/5 text-indigo-50",
  "from-fuchsia-300/40 to-fuchsia-300/5 text-fuchsia-50",
  "from-rose-300/40 to-rose-300/5 text-rose-50",
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      {/* Faint dot-grid texture for depth, same treatment as the WhyUs dark card */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8">
        {stats.map((s, i) => {
          const Icon = ICONS[i % ICONS.length];
          const tint = ICON_TINTS[i % ICON_TINTS.length];
          return (
            <Reveal key={s.label} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/10 px-5 py-7 text-center shadow-[0_8px_30px_rgba(5,10,30,0.15)] backdrop-blur-xl transition-all duration-300 [background:linear-gradient(160deg,rgba(255,255,255,0.22),rgba(255,255,255,0.05))] hover:-translate-y-2 hover:border-white/50 hover:shadow-[0_24px_55px_rgba(5,10,30,0.3)]">
                {/* Soft inner ring for extra glass depth */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
                {/* Shimmer sweep on hover */}
                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100 motion-reduce:hidden" />

                <div
                  className={`relative mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-br shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${tint}`}
                >
                  <Icon size={20} strokeWidth={2.25} />
                </div>

                <CountUp
                  value={s.value}
                  className="relative mt-4 block bg-gradient-to-b from-white to-white/80 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent drop-shadow-sm sm:text-4xl lg:text-[2.5rem]"
                />
                <div className="relative mt-2 text-[13px] font-semibold uppercase tracking-wide text-white/80">
                  {s.label}
                </div>

                {/* Underline accent that grows in on hover */}
                <span className="relative mx-auto mt-3 block h-0.5 w-8 rounded-full bg-white/40 transition-all duration-500 group-hover:w-14 group-hover:bg-white/70" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
