import { Award, Code2, MessageSquareText, Rocket, ShieldCheck, Users2 } from "lucide-react";

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

export default function CourseHighlights() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          What You&apos;ll Get
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#485DAC]/10 text-[#485DAC]">
                <h.icon size={20} />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
