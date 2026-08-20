import { ArrowUpRight, Clock, Users } from "lucide-react";

export default function CourseQueueItem({ course, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group w-full rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold text-white"
            style={{ backgroundColor: course.color }}
          >
            {course.code}
          </span>
          <div className="min-w-0">
            <h4 className="truncate text-sm font-bold text-slate-900">{course.title}</h4>
            <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
              {course.category}
            </div>
          </div>
        </div>
        <ArrowUpRight
          size={16}
          className="shrink-0 text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          style={{ color: "currentColor" }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <div className="flex items-center gap-3 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <Clock size={11} /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={11} /> {course.students}
          </span>
        </div>
        <span className="text-sm font-extrabold text-slate-900">{course.price}</span>
      </div>
    </button>
  );
}
