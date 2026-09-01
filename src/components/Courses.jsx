import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { courses as staticCourses } from "@/data/courses";
import { getCourses } from "@/lib/api";
import { toCardCourse } from "@/lib/mapApiCourse";
import CourseCarousel from "./CourseCarousel";
import Reveal from "./Reveal";

export default async function Courses() {
  const apiCourses = await getCourses();
  // Fall back to the static catalog only if the LMS backend has nothing yet.
  const courses = apiCourses.length ? apiCourses.map(toCardCourse) : staticCourses;

  return (
    <section id="courses" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#E9577C]" />
              OUR COURSES
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Featured Courses
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-4 text-slate-600">
              Hand-picked, industry-relevant programs designed to take you from
              fundamentals to a job-ready portfolio.
            </p>
          </Reveal>
        </div>

        <Reveal delay={450}>
          <CourseCarousel courses={courses} />
        </Reveal>

        <div className="mt-14 flex flex-col items-center gap-5 text-center">
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_35px_rgba(72,93,172,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(72,93,172,0.36)] active:translate-y-0"
          >
            View All Courses
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500">
            <ShieldCheck size={16} className="text-emerald-500" />
            GetUpSkill Promise — Excellence or 100% Refund
          </span>
        </div>
      </div>
    </section>
  );
}
