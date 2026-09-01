import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal
        as="div"
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#05060f] px-8 py-16 text-center shadow-[0_40px_90px_-25px_rgba(10,15,40,0.55)] sm:px-16 sm:py-20"
      >
        {/* Mesh glow, echoing the hero */}
        <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[#53B8EC]/25 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#E9577C]/25 blur-[100px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 70% 90% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 90% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[11px] font-bold tracking-wide text-slate-200 shadow-sm backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            JOIN 8,000+ LEARNERS
          </div>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[44px]">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#7ad0f5] via-[#8b9cf0] to-[#f194ac] bg-clip-text text-transparent">
              start learning?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-slate-400">
            Join thousands of students who are transforming their careers through
            practical, job-focused education at GetUpSkill.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#courses"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_40px_rgba(83,184,236,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(233,87,124,0.4)] active:translate-y-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Sign Up Today
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
            >
              Browse Courses
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
