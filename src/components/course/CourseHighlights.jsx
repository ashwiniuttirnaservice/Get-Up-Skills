import { Award, Code2, MessageSquareText, Rocket, ShieldCheck, Users2 } from "lucide-react";
import Reveal from "../Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Real-World Projects",
    desc: "Build a portfolio of production-grade projects, not just toy examples.",
  },
  {
    icon: Users2,
    title: "Mentor Support",
    desc: "Learn directly from industry practitioners with unlimited doubt resolution.",
  },
  {
    icon: Rocket,
    title: "Job Assistance",
    desc: "Resume prep, mock interviews, and job leads to help you land your next role.",
  },
  {
    icon: Award,
    title: "Certificate",
    desc: "A verifiable certificate of completion to showcase on LinkedIn & resumes.",
  },
  {
    icon: MessageSquareText,
    title: "Community Access",
    desc: "Join a private community of learners and mentors for networking & support.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Access",
    desc: "Revisit course content anytime — no expiry, learn at your own pace.",
  },
];

// Same brand palette cycled elsewhere on the site (Instructors, etc.) — kept
// consistent rather than introducing new colors.
const ACCENTS = ["#53B8EC", "#485DAC", "#E9577C", "#C7DA40"];

export default function CourseHighlights() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#485DAC]">
            Everything Included
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What You&apos;ll Get
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Reveal key={h.title} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  {/* Top accent bar */}
                  <span
                    className="absolute inset-x-0 top-0 h-1 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                    style={{ backgroundColor: accent }}
                  />
                  {/* Soft glow behind the icon on hover */}
                  <div
                    className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: `${accent}40` }}
                  />

                  <div
                    className="relative flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundImage: `linear-gradient(135deg, ${accent}, #0f172a)` }}
                  >
                    <h.icon size={22} />
                  </div>
                  <h3 className="relative mt-4 font-bold text-slate-900">{h.title}</h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-slate-600">{h.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
