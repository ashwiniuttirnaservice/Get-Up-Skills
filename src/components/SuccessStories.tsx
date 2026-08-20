import { ArrowRight } from "lucide-react";
import { successStories } from "@/data/site";

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#485DAC]">
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Real People, Real Career Transformations
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {successStories.map((s) => (
            <div
              key={s.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#53B8EC] to-[#485DAC] font-bold text-white">
                  {s.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{s.name}</div>
                  <span className="inline-block rounded-full bg-[#E9577C]/10 px-2.5 py-0.5 text-xs font-semibold text-[#E9577C]">
                    {s.tag}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="rounded-md bg-slate-100 px-2 py-1">{s.from}</span>
                <ArrowRight size={14} className="text-slate-400" />
                <span className="rounded-md bg-[#485DAC]/10 px-2 py-1 text-[#485DAC]">{s.to}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">&ldquo;{s.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
