import { Briefcase, FileText, MessagesSquare, Search, Target } from "lucide-react";
import Reveal from "../Reveal";

const items = [
  {
    icon: FileText,
    title: "Resume & LinkedIn",
    desc: "Get your resume and LinkedIn profile optimized to pass recruiter screens.",
  },
  {
    icon: MessagesSquare,
    title: "Mock Interviews",
    desc: "Practice with mentors through realistic, role-specific mock interviews.",
  },
  {
    icon: Search,
    title: "Job Leads",
    desc: "Access curated job openings shared with our alumni community first.",
  },
  {
    icon: Target,
    title: "Interview Playbook",
    desc: "A structured guide to ace technical and HR rounds with confidence.",
  },
];

export default function JobAssistance({ course }) {
  return (
    <section id="career" className="relative scroll-mt-28 overflow-hidden py-16">
      {/* Soft decorative glow, tucked behind the content */}
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-[0.12] blur-3xl"
        style={{ backgroundColor: course.color }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: `${course.color}1a`, color: course.color }}
            >
              <Briefcase size={12} /> Career Support
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Job Placement & Career Support
            </h2>
            <p className="mt-4 text-slate-600">
              This course is designed to get you hired, not just certified. Practical
              job assistance is built into every step — so you graduate ready for
              roles like:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {course.outcomes.map((role) => (
                <span
                  key={role}
                  className="rounded-full px-3.5 py-1.5 text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: `${course.color}1a`, color: course.color }}
                >
                  {role}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={150 + i * 80}>
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span
                    className="absolute inset-x-0 top-0 h-1 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                    style={{ backgroundColor: course.color }}
                  />
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ backgroundImage: `linear-gradient(135deg, ${course.color}, #0f172a)` }}
                  >
                    <item.icon size={20} />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
