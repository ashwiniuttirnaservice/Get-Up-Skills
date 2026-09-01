import { notFound } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { courses, getCourse } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import Instructors from "@/components/Instructors";
import FAQ from "@/components/FAQ";
import CourseHero from "@/components/course/CourseHero";
import SectionTabs from "@/components/course/SectionTabs";
import CourseHighlights from "@/components/course/CourseHighlights";
import CourseCurriculum from "@/components/course/CourseCurriculum";
import JobAssistance from "@/components/course/JobAssistance";
import EnrollBar from "@/components/course/EnrollBar";

export function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = getCourse(id);
  if (!course) return {};
  return {
    title: `${course.title} — GetUpSkill`,
    description: course.desc,
  };
}

export default async function CourseDetailPage({ params }) {
  const { id } = await params;
  const course = getCourse(id);
  if (!course) notFound();

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
          <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700">
              <ShieldCheck size={18} className="text-[#485DAC]" />
              GetUpSkill Promise — Excellence or 100% Refund
            </span>
          </Reveal>
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
