import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import CodeShowcase from "./CodeShowcase";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#f0f9ff] via-white to-[#fff5f7]">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#53B8EC]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#E9577C]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-14">
        <Reveal delay={0}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#485DAC]/10 px-4 py-1.5 text-sm font-semibold text-[#485DAC]">
            <Sparkles size={14} /> New batch starting soon — limited seats
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Learn skills that{" "}
            <span className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-transparent">
              get you hired
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Practical, industry-designed bootcamps and courses in development,
            data, design and marketing — with real projects, mentor support
            and job assistance to take you from beginner to job-ready.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-md bg-[#485DAC] px-6 py-3 font-semibold text-white shadow-lg shadow-[#485DAC]/25 transition hover:bg-[#3a4b8a] hover:shadow-xl active:scale-95"
            >
              Explore Courses
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#why-us"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 font-semibold text-slate-700 transition hover:text-[#485DAC] active:scale-95"
            >
              <PlayCircle size={20} />
              How it works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-500">
            <div>
              <CountUp value="8,000+" className="block text-2xl font-extrabold text-slate-900" />
              Students Trained
            </div>
            <div>
              <CountUp value="40+" className="block text-2xl font-extrabold text-slate-900" />
              Expert Courses
            </div>
            <div>
              <CountUp value="4.8/5" className="block text-2xl font-extrabold text-slate-900" />
              Average Rating
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <CodeShowcase />
        </Reveal>
      </div>
    </section>
  );
}
