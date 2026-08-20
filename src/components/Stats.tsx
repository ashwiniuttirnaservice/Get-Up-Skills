import { stats } from "@/data/site";
import CountUp from "./CountUp";

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label}>
            <CountUp value={s.value} className="block text-3xl font-extrabold text-white sm:text-4xl" />
            <div className="mt-1 text-sm font-medium text-white/80">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
