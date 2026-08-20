import { FileText, MessagesSquare, Search, Target } from "lucide-react";
import type { Course } from "@/data/courses";

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

export default function JobAssistance({ course }: { course: Course }) {
  return (
    <section id="career" className="scroll-mt-28 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#E9577C]">
              Career Support
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Job Placement & Career Support
            </h2>
            <p className="mt-4 text-slate-600">
              This course is designed to get you hired, not just certified. Practical
              job assistance is built into every step — so you graduate ready for
              roles like:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {course.outcomes.map((role) => (
                <span
                  key={role}
                  className="rounded-full px-3 py-1.5 text-sm font-semibold"
                  style={{ backgroundColor: `${course.color}1a`, color: course.color }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#485DAC]/10 text-[#485DAC]">
                  <item.icon size={20} />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
