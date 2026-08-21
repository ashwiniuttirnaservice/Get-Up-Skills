"use client";

import { useState } from "react";
import { BookOpen, ChevronDown, Layers, ListChecks, PlayCircle, Target } from "lucide-react";
import Reveal from "../Reveal";

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

  // Real data from the LMS API, when the backend has it — takes priority
  // over the generated placeholder content below.
  const highlightsModule = course.keyFeatures?.length
    ? [
        {
          title: "What This Course Covers",
          meta: "From the GetUpSkill LMS",
          deliverable: "A course built around these key features",
          topics: course.keyFeatures,
        },
      ]
    : [];

  const capstoneTopics = course.learningOutcomes?.length
    ? course.learningOutcomes
    : [
        `End-to-end project using ${course.skills.join(", ")}`,
        "Code/design review with a mentor",
        "Portfolio-ready presentation",
      ];

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
    ...highlightsModule,
    ...skillModules,
    {
      title: "Capstone Project",
      meta: "6 lectures · 2h 10m",
      deliverable: "A portfolio-ready end-to-end project",
      topics: capstoneTopics,
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

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/** Converts the real modules from GET /api/courses/:id/curriculum (backend)
 * into the shape this section renders — actual lecture titles, not
 * generated text. */
function buildLiveModules(liveModules) {
  // The backend's flat "Course Content" fallback (no Phase/Week/Chapter data
  // yet) — split it into week-sized chunks so it doesn't render as one huge
  // list.
  if (liveModules.length === 1 && liveModules[0].title === "Course Content") {
    const groups = chunk(liveModules[0].lectures, 8);
    return groups.map((group, i) => ({
      title: `Week ${i + 1}`,
      weekLabel: `Week ${i + 1}`,
      meta: `${group.length} lectures`,
      deliverable: "Watch all lectures in this week",
      topics: group.map((l) => l.title),
    }));
  }

  return liveModules.map((mod) => {
    const lectureTitles = mod.lectures.map((l) => l.title);
    const meta = [
      mod.lectures.length ? `${mod.lectures.length} lectures` : null,
      mod.assignments.length ? `${mod.assignments.length} assignments` : null,
    ]
      .filter(Boolean)
      .join(" · ");
    return {
      title: mod.title,
      weekLabel: mod.weekLabel || mod.title,
      meta: meta || "From the GetUpSkill LMS",
      deliverable: mod.assignments[0]?.title || "Complete this module's lectures",
      topics: mod.topics?.length ? mod.topics : lectureTitles,
    };
  });
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

export default function CourseCurriculum({ course, liveModules }) {
  const hasLive = liveModules?.length > 0;
  const modules = hasLive
    ? buildLiveModules(liveModules)
    : withWeekLabels(buildModules(course), course.duration);
  const [openIndex, setOpenIndex] = useState(0);

  const totalTopics = modules.reduce((sum, m) => sum + m.topics.length, 0);
  const statChips = course.lecturesCount
    ? [
        { icon: PlayCircle, label: `${course.lecturesCount} lectures` },
        course.assignmentsCount ? { icon: ListChecks, label: `${course.assignmentsCount} assignments` } : null,
        { icon: Layers, label: `${modules.length} modules` },
      ].filter(Boolean)
    : [
        { icon: BookOpen, label: `${modules.length} modules` },
        { icon: PlayCircle, label: `${totalTopics} lessons` },
        { icon: Layers, label: course.duration },
      ];

  return (
    <section id="curriculum" className="relative scroll-mt-28 overflow-hidden bg-slate-50 py-16">
      {/* Faint dot-pattern texture, matching the hero's decorative language */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#485DAC]">
              Week by Week
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Curriculum
            </h2>
          </div>

          {/* Stat chips replace the plain text summary */}
          <div className="flex flex-wrap gap-2">
            {statChips.map((chip) => (
              <span
                key={chip.label}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
              >
                <chip.icon size={13} style={{ color: course.color }} />
                {chip.label}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col">
          {modules.map((mod, i) => {
            const open = openIndex === i;
            const isLast = i === modules.length - 1;
            return (
              <Reveal key={`${mod.title}-${i}`} delay={Math.min(i * 60, 480)}>
                <div className="relative flex gap-4">
                  {/* Timeline rail */}
                  <div className="flex flex-col items-center">
                    <span
                      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white transition-transform duration-300 ${
                        open ? "scale-110" : ""
                      }`}
                      style={{ backgroundImage: `linear-gradient(135deg, ${course.color}, #0f172a)` }}
                    >
                      {open && (
                        <span
                          className="absolute inset-0 animate-ping rounded-full opacity-40"
                          style={{ backgroundColor: course.color }}
                        />
                      )}
                      <span className="relative">{i + 1}</span>
                    </span>
                    {!isLast && <span className="w-px flex-1 bg-slate-200" />}
                  </div>

                  <div
                    className={`mb-4 flex-1 overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 ${
                      open ? "shadow-lg" : "hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                    style={{ borderColor: open ? course.color : "#e2e8f0" }}
                  >
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
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
                        style={{ backgroundColor: open ? `${course.color}1a` : "transparent" }}
                      >
                        <ChevronDown
                          size={18}
                          className="shrink-0 transition-transform duration-300"
                          style={{
                            color: open ? course.color : "#64748b",
                            transform: open ? "rotate(180deg)" : "none",
                          }}
                        />
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden px-5 transition-all duration-300 ${
                        open ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 border-t border-slate-100 pt-3">
                        <ul className="space-y-2 text-sm text-slate-600">
                          {mod.topics.map((t, ti) => (
                            <li key={ti} className="flex items-start gap-2">
                              <PlayCircle size={14} className="mt-0.5 shrink-0" style={{ color: course.color }} />
                              {t}
                            </li>
                          ))}
                        </ul>
                        <div
                          className="mt-3 flex items-start gap-2 rounded-lg p-3 text-xs text-slate-600"
                          style={{ backgroundColor: `${course.color}0d` }}
                        >
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
