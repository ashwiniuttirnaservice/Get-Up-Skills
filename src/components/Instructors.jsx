import { instructors } from "@/data/site";

export default function Instructors() {
  return (
    <section id="instructors" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#53B8EC]">
            Practitioners Who Teach
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Learn from Industry Experts
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {instructors.map((ins) => (
            <div
              key={ins.id}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#53B8EC] via-[#485DAC] to-[#E9577C] text-xl font-bold text-white">
                {ins.name.charAt(0)}
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{ins.name}</h3>
              <p className="text-sm font-medium text-[#485DAC]">{ins.title}</p>
              <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {ins.tag}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{ins.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
