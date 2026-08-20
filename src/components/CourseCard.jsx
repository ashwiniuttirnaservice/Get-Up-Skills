import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Radio, Star, Users } from "lucide-react";

const badgeStyles = {
  Bestseller: "bg-slate-900 text-white",
  "Highly Rated": "bg-amber-100 text-amber-700",
  "In Demand": "bg-rose-100 text-rose-700",
  "Brand New": "bg-emerald-100 text-emerald-700",
  "Live Now": "bg-emerald-500 text-white",
  // Batch status, straight from the LMS.
  Upcoming: "bg-amber-100 text-amber-700",
  Ongoing: "bg-emerald-100 text-emerald-700",
  Completed: "bg-slate-200 text-slate-600",
};

function discountPercent(price, original) {
  if (!original) return null;
  const p = Number(price.replace(/[^\d]/g, ""));
  const o = Number(original.replace(/[^\d]/g, ""));
  if (!o || o <= p) return null;
  return Math.round(((o - p) / o) * 100);
}

export default function CourseCard({ course, compact = false }) {
  const discount = discountPercent(course.price, course.originalPrice);
  const href = course.href || `/courses/${course.id}`;

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
      style={{ "--accent": course.color }}
    >
      {/* Banner */}
      <Link
        href={href}
        className={`relative block overflow-hidden ${compact ? "h-20" : "h-40"}`}
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {course.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold shadow-sm ${badgeStyles[course.badge]}`}
          >
            {course.badge}
          </span>
        )}
        {discount && (
          <span className="absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-emerald-600 shadow-sm">
            {discount}% OFF
          </span>
        )}
      </Link>

      <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-6"}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-md font-mono text-[10px] font-bold"
              style={{ backgroundColor: `${course.color}1a`, color: course.color }}
            >
              {course.code}
            </span>
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${course.color}1a`, color: course.color }}
            >
              {course.category}
            </span>
          </div>
          {!compact && <span className="text-xs font-medium text-slate-500">{course.level}</span>}
        </div>

        <h3
          className={`font-bold leading-snug text-slate-900 transition group-hover:text-[var(--accent)] ${
            compact ? "mt-2 text-base" : "mt-4 text-xl"
          }`}
        >
          <Link href={href}>{course.title}</Link>
        </h3>

        {!compact && (
          <>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">{course.desc}</p>

            {course.skills?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </>
        )}

        <div
          className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 ${
            compact ? "mt-2" : "mt-5"
          }`}
        >
          {course.duration && (
            <span className="flex items-center gap-1">
              <Clock size={14} /> {course.duration}
            </span>
          )}
          {!compact && course.mode && (
            <span className="flex items-center gap-1">
              <Radio size={14} /> {course.mode}
            </span>
          )}
          {course.students && (
            <span className="flex items-center gap-1">
              <Users size={14} /> {course.students}
            </span>
          )}
          {course.rating && (
            <span className="flex items-center gap-1 font-semibold text-amber-500">
              <Star size={14} fill="currentColor" /> {course.rating}
              {!compact && course.reviews && (
                <span className="font-normal text-slate-400">({course.reviews})</span>
              )}
            </span>
          )}
          {!compact && course.batchDates && (
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {course.batchDates}
            </span>
          )}
        </div>

        <div
          className={`flex items-center justify-between border-t border-slate-100 ${
            compact ? "mt-3 pt-3" : "mt-5 pt-4"
          }`}
        >
          {course.price ? (
            <div>
              <div className="flex items-baseline gap-2">
                <span className={`font-extrabold text-slate-900 ${compact ? "text-base" : "text-xl"}`}>
                  {course.price}
                </span>
                {course.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">{course.originalPrice}</span>
                )}
              </div>
              {!compact && <p className="text-[11px] text-slate-400">Incl. of all taxes</p>}
            </div>
          ) : (
            <span />
          )}
          <Link
            href={href}
            className={`flex items-center gap-1 rounded-lg font-semibold text-white shadow-sm transition group-hover:gap-2 ${
              compact ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm"
            }`}
            style={{ backgroundColor: course.color }}
          >
            View
            <ArrowRight size={compact ? 12 : 15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
