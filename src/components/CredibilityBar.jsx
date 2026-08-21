import { heroStats } from "@/data/site";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function CredibilityBar() {
  return (
    <section className="border-y border-slate-100 bg-white py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center sm:px-6 md:grid-cols-5 lg:px-8">
        {heroStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 60}>
            <CountUp value={s.value} className="block text-2xl font-extrabold text-slate-900 sm:text-3xl" />
            <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
