import { stats } from "@/data/site";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] py-16">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
              <CountUp value={s.value} className="block text-3xl font-extrabold text-white sm:text-4xl" />
              <div className="mt-1.5 text-[13px] font-medium text-white/75">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
