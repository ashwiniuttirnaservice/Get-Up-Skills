import type { Course } from "@/data/courses";

export default function EnrollBar({ course }: { course: Course }) {
  return (
    <div className="sticky bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-slate-900">{course.price}</span>
            {course.originalPrice && (
              <span className="text-xs text-slate-400 line-through">{course.originalPrice}</span>
            )}
          </div>
          <p className="text-[11px] text-slate-400">Incl. of all taxes</p>
        </div>
        <a
          href="#"
          className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white shadow-lg"
          style={{ backgroundColor: course.color }}
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
}
