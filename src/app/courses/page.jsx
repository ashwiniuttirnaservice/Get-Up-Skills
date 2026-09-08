import Link from "next/link";
import { Sparkles } from "lucide-react";
import { getCourses, getCoursesWithType } from "@/lib/api";
import { toCardCourse } from "@/lib/mapApiCourse";
import { courses as staticCourses } from "@/data/courses";
import { courseMenu } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import Reveal from "@/components/Reveal";

const LEVELS = ["Beginner", "Intermediate", "Advanced"];

export async function generateMetadata({ searchParams }) {
  const { type } = await searchParams;
  const level = LEVELS.includes(type) ? type : null;
  return {
    title: level ? `${level} Courses — GetUpSkill` : "All Courses — GetUpSkill",
    description: "Every training program in the GetUpSkill LMS, pulled live from the backend.",
  };
}

export default async function AllCoursesPage({ searchParams }) {
  const { type } = await searchParams;
  const level = LEVELS.includes(type) ? type : null;

  const apiCourses = level ? await getCoursesWithType() : await getCourses();
  const filtered = level ? apiCourses.filter((c) => c.type === level) : apiCourses;

  // Fall back to the static catalog only if the LMS backend has nothing yet
  // (and no level filter is active — the static catalog has no `type` field).
  const courses = filtered.length
    ? filtered.map(toCardCourse)
    : !level
      ? staticCourses
      : [];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16">
          {/* Soft brand-color glows, consistent with the rest of the site */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#53B8EC]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#E9577C]/10 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(rgba(15,23,42,0.9) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#E9577C]" />
                OUR COURSES
              </div>
              <h1 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {level ? (
                  <>
                    {level}{" "}
                    <span className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-transparent">
                      Courses
                    </span>
                  </>
                ) : (
                  <>
                    All{" "}
                    <span className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-transparent">
                      Courses
                    </span>
                  </>
                )}
              </h1>
              <p className="mt-3 text-slate-600">
                Every program in the GetUpSkill LMS, pulled live from the backend.
              </p>
            </Reveal>

            {/* Level filter */}
            <Reveal delay={100} className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
              <Link
                href="/courses"
                className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all duration-300 ${
                  !level
                    ? "bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] text-white shadow-[0_10px_25px_rgba(72,93,172,0.28)]"
                    : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                All Levels
              </Link>
              {courseMenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all duration-300 ${
                    level === item.label
                      ? "bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] text-white shadow-[0_10px_25px_rgba(72,93,172,0.28)]"
                      : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </Reveal>

            {courses.length > 0 ? (
              <>
                <Reveal delay={140} className="mt-8 text-center text-sm font-medium text-slate-500">
                  Showing {courses.length} {courses.length === 1 ? "course" : "courses"}
                </Reveal>
                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {courses.map((course, i) => (
                    <Reveal key={course.id} delay={Math.min(i * 60, 480)}>
                      <CourseCard course={course} />
                    </Reveal>
                  ))}
                </div>
              </>
            ) : (
              <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-dashed border-slate-300 bg-white/60 px-6 py-10 text-center">
                <p className="text-sm text-slate-500">
                  No {level} courses right now — check back soon.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
