import { companies } from "@/data/site";

export default function Companies() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Our Alumni Work at Top Companies
          </h2>
          <p className="mt-3 text-slate-600">
            Join 8,000+ learners who&apos;ve transformed their careers with GetUpSkill.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {companies.map((c) => (
            <div
              key={c}
              className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-6 text-center font-semibold text-slate-500 shadow-sm transition hover:text-[#485DAC] hover:shadow-md"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
