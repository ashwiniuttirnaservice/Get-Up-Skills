import Link from "next/link";
import { courses as staticCourses } from "@/data/courses";
import { getCourses } from "@/lib/api";
import { toCardCourse } from "@/lib/mapApiCourse";
import CourseCarousel from "./CourseCarousel";

export default async function Courses() {
  const apiCourses = await getCourses();
  // Fall back to the static catalog only if the LMS backend has nothing yet.
  const courses = apiCourses.length ? apiCourses.map(toCardCourse) : staticCourses;

  return (
    <section id="courses" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#E9577C]">
            Our Courses
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Featured Courses
          </h2>
          <p className="mt-4 text-slate-600">
            Hand-picked, industry-relevant programs designed to take you from
            fundamentals to a job-ready portfolio.
          </p>
        </div>

        <CourseCarousel courses={courses} />

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center rounded-md border-2 border-[#485DAC] px-6 py-3 font-semibold text-[#485DAC] transition hover:bg-[#485DAC] hover:text-white"
          >
            View All Courses
          </Link>
          <span className="text-sm font-semibold text-slate-500">
            🛡️ GetUpSkill Promise — Excellence or 100% Refund
          </span>
        </div>
      </div>
    </section>
  );
}
