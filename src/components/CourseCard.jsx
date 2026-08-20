import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Radio, Star, Users } from "lucide-react";

const badgeStyles = {
  Bestseller: "bg-slate-900 text-white",
  "Highly Rated": "bg-amber-100 text-amber-700",
  "In Demand": "bg-rose-100 text-rose-700",
  "Brand New": "bg-emerald-100 text-emerald-700",
};

function discountPercent(price, original) {
  if (!original) return null;
  const p = Number(price.replace(/[^\d]/g, ""));
  const o = Number(original.replace(/[^\d]/g, ""));
  if (!o || o <= p) return null;
  return Math.round(((o - p) / o) * 100);
}

export default function CourseCard({ course }) {
  const discount = discountPercent(course.price, course.originalPrice);

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
      style={{ "--accent": course.color }}
    >
      {/* Banner */}
      <Link href={`/courses/${course.id}`} className="relative block h-40 overflow-hidden">
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

      <div className="flex flex-1 flex-col p-6">
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
          <span className="text-xs font-medium text-slate-500">{course.level}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-[var(--accent)]">
          <Link href={`/courses/${course.id}`}>{course.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">{course.desc}</p>

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

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Radio size={14} /> {course.mode}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} /> {course.students}
          </span>
          <span className="flex items-center gap-1 font-semibold text-amber-500">
            <Star size={14} fill="currentColor" /> {course.rating}
            <span className="font-normal text-slate-400">({course.reviews})</span>
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-slate-900">{course.price}</span>
              {course.originalPrice && (
                <span className="text-sm text-slate-400 line-through">{course.originalPrice}</span>
              )}
            </div>
            <p className="text-[11px] text-slate-400">Incl. of all taxes</p>
          </div>
          <Link
            href={`/courses/${course.id}`}
            className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-white shadow-sm transition group-hover:gap-2"
            style={{ backgroundColor: course.color }}
          >
            View
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
