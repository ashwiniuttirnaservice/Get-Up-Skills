import Image from "next/image";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import CodeShowcase from "./CodeShowcase";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import HeroSpotlight from "./HeroSpotlight";
import TiltCard from "./TiltCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f9ff] via-white to-[#fff5f7]">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#53B8EC]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#E9577C]/20 blur-3xl" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full opacity-60 blur-[110px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(83,184,236,0.20), rgba(72,93,172,0.16), rgba(233,87,124,0.14))",
        }}
      />
      <HeroSpotlight color="#485DAC" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-20 [perspective:1000px]">
        <Reveal delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_10px_30px_rgba(70,100,160,0.12)] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            New batch starting soon — limited seats
            <Sparkles size={14} className="text-sky-400" />
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[64px]">
            Build skills that{" "}
            <span className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(72,93,172,0.18)]">
              launch careers
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-7 text-slate-500">
            Industry-designed courses and bootcamps in web development, data
            analytics, UI/UX design and digital marketing — built around
            real-world projects, live mentor-led sessions, and verifiable
            certificates. Learn at your own pace and get dedicated career
            and interview support to land your first (or next) tech role.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#485DAC] px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_35px_rgba(72,93,172,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(72,93,172,0.38)] active:translate-y-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Explore Courses
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#why-us"
              className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/70 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-[0_10px_30px_rgba(70,90,140,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <PlayCircle size={18} className="text-[#485DAC]" />
              How it works
            </a>
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-4">
            {[
              { value: "8,000+", label: "Students Trained" },
              { value: "40+", label: "Expert Courses" },
              { value: "4.8/5", label: "Average Rating" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/80 bg-white/60 px-5 py-3.5 shadow-[0_10px_30px_rgba(70,90,140,0.08)] backdrop-blur-xl"
              >
                <CountUp value={s.value} className="block text-xl font-extrabold text-slate-900 sm:text-2xl" />
                <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-tr from-sky-300/25 via-purple-300/15 to-pink-300/25 blur-3xl" />

            {/* Abstract patterned backdrop, peeking out top-right — granola.ai's prism-burst accent */}
            <div
              className="absolute -right-10 -top-10 hidden h-56 w-44 -rotate-6 overflow-hidden rounded-2xl border-4 border-white shadow-[0_20px_45px_rgba(30,41,80,0.2)] sm:block"
              style={{
                backgroundImage:
                  "conic-gradient(from 120deg, #53B8EC, #485DAC, #E9577C, #C7DA40, #53B8EC), radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1.5px)",
                backgroundSize: "auto, 10px 10px",
              }}
            />

            {/* Striped "book spine" bar, peeking out bottom-left */}
            <div
              className="absolute -bottom-8 -left-8 hidden h-40 w-14 rotate-3 rounded-lg border-4 border-white shadow-[0_20px_45px_rgba(30,41,80,0.2)] sm:block"
              style={{
                backgroundColor: "#C7DA40",
                backgroundImage:
                  "repeating-linear-gradient(180deg, rgba(255,255,255,0.35) 0 2px, transparent 2px 10px)",
              }}
            />

            <TiltCard className="relative">
              <CodeShowcase />
            </TiltCard>

            {/* Stacked photo thumbnails, overlapping the card's bottom-right corner */}
            <div className="absolute -bottom-6 -right-4 hidden flex-col gap-1.5 rounded-2xl border-2 border-slate-900 bg-slate-900 p-1.5 shadow-[0_20px_45px_rgba(30,41,80,0.25)] md:flex">
              {["full-stack-web-dev.svg", "ui-ux-design.svg"].map((src) => (
                <div key={src} className="h-11 w-14 overflow-hidden rounded-lg">
                  <Image
                    src={`/courses/${src}`}
                    alt=""
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
