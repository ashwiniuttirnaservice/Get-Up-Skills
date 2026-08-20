"use client";

import { useState } from "react";
import { ChevronDown, PlayCircle, Target } from "lucide-react";

function buildModules(course) {
  const skillModules = course.skills.map((skill, i) => ({
    title: `Mastering ${skill}`,
    meta: `${4 + i} lectures · ${1 + i}h ${20 + i * 5}m`,
    deliverable: `Ship a working ${skill} mini-project`,
    topics: [
      `${skill} fundamentals & core concepts`,
      `Hands-on ${skill} exercises`,
      `Real-world ${skill} project walkthrough`,
      "Best practices & common pitfalls",
    ],
  }));

  return [
    {
      title: "Welcome to the Bootcamp",
      meta: "5 lectures · 35m · Free",
      deliverable: "Set up your dev environment & tools",
      topics: [
        "Bootcamp orientation & how to make the most of it",
        "Is this course right for you?",
        "Support, community & doubt resolution",
        "Time commitment & system requirements",
      ],
    },
    ...skillModules,
    {
      title: "Capstone Project",
      meta: "6 lectures · 2h 10m",
      deliverable: "A portfolio-ready end-to-end project",
      topics: [
        `End-to-end project using ${course.skills.join(", ")}`,
        "Code/design review with a mentor",
        "Portfolio-ready presentation",
      ],
    },
    {
      title: "Career Prep & Job Assistance",
      meta: "8 lectures · 1h 45m",
      deliverable: "Job-ready resume, LinkedIn & portfolio site",
      topics: [
        "Resume & LinkedIn optimization",
        "Mock interviews & interview playbook",
        "Job application strategy",
        "Portfolio website setup",
      ],
    },
  ];
}

/** Spreads modules across the course's stated duration as "Week X" or
 * "Week X-Y" labels, mirroring codebasics.io's week-by-week breakdown. */
function withWeekLabels(modules, duration) {
  const totalWeeks = Math.max(parseInt(duration, 10) || modules.length, modules.length);
  const span = totalWeeks / modules.length;
  let cursor = 1;
  return modules.map((mod) => {
    const start = Math.round(cursor);
    cursor += span;
    const end = Math.min(totalWeeks, Math.round(cursor) - 1);
    const weekLabel = end > start ? `Week ${start}–${end}` : `Week ${start}`;
    return { ...mod, weekLabel };
  });
}

export default function CourseCurriculum({ course }) {
  const modules = withWeekLabels(buildModules(course), course.duration);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="curriculum" className="scroll-mt-28 bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#485DAC]">
              Week by Week
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Curriculum
            </h2>
          </div>
          <span className="text-sm text-slate-500">
            {modules.length} modules · {course.duration}
          </span>
        </div>

        <div className="mt-8 flex flex-col">
          {modules.map((mod, i) => {
            const open = openIndex === i;
            const isLast = i === modules.length - 1;
            return (
              <div key={mod.title} className="relative flex gap-4">
                {/* Timeline rail */}
                <div className="flex flex-col items-center">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: course.color }}
                  >
                    {i + 1}
                  </span>
                  {!isLast && <span className="w-px flex-1 bg-slate-200" />}
                </div>

                <div className="mb-4 flex-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-wide"
                        style={{ color: course.color }}
                      >
                        {mod.weekLabel}
                      </span>
                      <div className="font-semibold text-slate-900">{mod.title}</div>
                      <div className="mt-0.5 text-xs text-slate-500">{mod.meta}</div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden px-5 transition-all duration-300 ${
                      open ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 border-t border-slate-100 pt-3">
                      <ul className="space-y-2 text-sm text-slate-600">
                        {mod.topics.map((t) => (
                          <li key={t} className="flex items-start gap-2">
                            <PlayCircle size={14} className="mt-0.5 shrink-0 text-[#485DAC]" />
                            {t}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex items-start gap-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
                        <Target size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                        <span>
                          <strong className="font-semibold text-slate-800">Deliverable:</strong>{" "}
                          {mod.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
