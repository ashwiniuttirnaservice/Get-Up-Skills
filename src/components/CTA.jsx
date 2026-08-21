import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="py-20">
      <Reveal
        as="div"
        className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-br from-[#485DAC] to-[#E9577C] px-8 py-16 text-center shadow-xl sm:px-16"
      >
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Start Learning?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">
          Join thousands of students who are transforming their careers through
          practical, job-focused education at GetUpSkill.
        </p>
        <a
          href="#courses"
          className="group mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-[#485DAC] shadow-lg transition hover:bg-slate-100 active:scale-95"
        >
          Sign Up Today
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>
    </section>
  );
}
