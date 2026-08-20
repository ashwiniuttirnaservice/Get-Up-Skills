import { courses } from "@/data/courses";
import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <section id="courses" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* futrainc-style numbered section header */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
          <span className="text-[#E9577C]">02</span>
          <span>—</span>
          <span>our courses</span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Six courses.{" "}
          <span className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-transparent">
            One outcome — hired.
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Each course solves a real skill gap on its own — and compounds into a
          job-ready portfolio when you take them together.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-md border-2 border-[#485DAC] px-6 py-3 font-semibold text-[#485DAC] transition hover:bg-[#485DAC] hover:text-white"
          >
            View All Courses
          </a>
          <span className="text-sm font-semibold text-slate-500">
            🛡️ GetUpSkill Promise — Excellence or 100% Refund
          </span>
        </div>
      </div>
    </section>
  );
}
