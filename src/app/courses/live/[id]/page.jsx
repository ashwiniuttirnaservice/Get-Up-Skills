import { notFound } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { getCourseById } from "@/lib/api";
import { toCardCourse } from "@/lib/mapApiCourse";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Instructors from "@/components/Instructors";
import FAQ from "@/components/FAQ";
import CourseHero from "@/components/course/CourseHero";
import SectionTabs from "@/components/course/SectionTabs";
import CourseHighlights from "@/components/course/CourseHighlights";
import CourseCurriculum from "@/components/course/CourseCurriculum";
import JobAssistance from "@/components/course/JobAssistance";
import EnrollBar from "@/components/course/EnrollBar";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const apiCourse = await getCourseById(id);
  if (!apiCourse) return {};
  return {
    title: `${apiCourse.title} — GetUpSkill`,
    description: apiCourse.description?.slice(0, 160),
  };
}

// Same page template as the static /courses/[id] detail page — this one is
// just fed by a real getCourseById() API call instead of the static catalog.
export default async function LiveCourseDetailPage({ params }) {
  const { id } = await params;
  const apiCourse = await getCourseById(id);
  if (!apiCourse) notFound();

  const course = toCardCourse(apiCourse);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
        <SectionTabs accent={course.color} />
      </div>
      <main>
        <CourseHero course={course} />
        <CourseHighlights />
        <CourseCurriculum course={course} />
        <JobAssistance course={course} />

        <section className="py-4">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700">
              <ShieldCheck size={18} className="text-[#485DAC]" />
              GetUpSkill Promise — Excellence or 100% Refund
            </span>
          </div>
        </section>

        <Instructors />
        <Testimonials />
        <FAQ />
      </main>
      <EnrollBar course={course} />
      <Footer />
    </>
  );
}
