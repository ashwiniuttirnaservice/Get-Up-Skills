import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import CodeShowcase from "./CodeShowcase";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f2]">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-20">
        <Reveal delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white">
            New
            <span className="h-1 w-1 rounded-full bg-white/40" />
            Batches starting this month
          </span>

          <h1
            className="mt-7 text-[44px] leading-[1.04] tracking-tight text-slate-900 sm:text-6xl lg:text-[76px]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 480 }}
          >
            Skills that
            <br />
            launch <span className="italic text-[#485DAC]">careers</span>.
          </h1>

          <p className="mt-6 max-w-sm text-lg leading-7 text-slate-500">
            Practical courses in web dev, data and design.
            <br />
            Built by mentors. Not just a syllabus.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-full bg-[#485DAC] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3c4e93]"
            >
              Explore Courses
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              4.8/5 from 8,000+ learners
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            {/* Prism-burst backdrop, echoing granola.ai's colorful abstract accent */}
            <div
              className="pointer-events-none absolute -right-10 -top-16 h-[420px] w-[420px] opacity-70 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 90deg, #53B8EC, #485DAC, #E9577C, #C7DA40, #53B8EC)",
                borderRadius: "38% 62% 60% 40% / 45% 40% 60% 55%",
              }}
            />

            {/* Course-cover photo, peeking out behind the code card */}
            <div className="absolute -right-6 -top-8 hidden w-40 rotate-6 overflow-hidden rounded-xl border-4 border-white shadow-[0_20px_45px_rgba(30,41,80,0.2)] sm:block">
              <Image
                src="/courses/data-science-bootcamp.svg"
                alt="Data Science Bootcamp"
                width={800}
                height={450}
                className="h-24 w-full object-cover"
              />
            </div>

            <TiltCard className="relative">
              <CodeShowcase />
            </TiltCard>

            {/* Floating overlap card, granola-style */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_20px_45px_rgba(30,41,80,0.15)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <ArrowRight size={16} className="rotate-[-45deg]" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">95% completion</div>
                <div className="text-xs text-slate-400">learners finish what they start</div>
              </div>
            </div>

            {/* Second course-cover photo, small, overlapping bottom-right */}
            <div className="absolute -bottom-8 right-6 hidden w-28 -rotate-6 overflow-hidden rounded-xl border-4 border-white shadow-[0_20px_45px_rgba(30,41,80,0.2)] md:block">
              <Image
                src="/courses/ui-ux-design.svg"
                alt="UI/UX Design"
                width={800}
                height={450}
                className="h-16 w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
