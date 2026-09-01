import { heroStats } from "@/data/site";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function CredibilityBar() {
  return (
    <section className="relative border-y border-slate-100 bg-white py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
        {heroStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 60}>
            <div className="group rounded-2xl border border-transparent px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-slate-100 hover:bg-slate-50/80 hover:shadow-[0_15px_35px_rgba(70,90,150,0.08)]">
              <CountUp
                value={s.value}
                className="block bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl"
              />
              <div className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:text-[13px]">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
