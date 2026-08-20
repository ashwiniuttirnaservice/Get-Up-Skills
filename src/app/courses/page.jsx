import Link from "next/link";
import { getCourses, getCoursesWithType } from "@/lib/api";
import { toCardCourse } from "@/lib/mapApiCourse";
import { courses as staticCourses } from "@/data/courses";
import { courseMenu } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";

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
        <section className="bg-slate-50 py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#E9577C]">
                Our Courses
              </span>
              <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {level ? `${level} Courses` : "All Courses"}
              </h1>
              <p className="mt-2 text-slate-600">
                Every program in the GetUpSkill LMS, pulled live from the backend.
              </p>
            </div>

            {/* Level filter */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <Link
                href="/courses"
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  !level
                    ? "bg-[#485DAC] text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                All Levels
              </Link>
              {courseMenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                    level === item.label
                      ? "bg-[#485DAC] text-white"
                      : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {courses.length > 0 ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <p className="mt-6 text-center text-sm text-slate-500">
                No {level} courses right now — check back soon.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
