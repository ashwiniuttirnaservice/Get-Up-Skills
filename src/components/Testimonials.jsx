import { Quote, Sparkles, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import Reveal from "./Reveal";

// Same brand palette cycled elsewhere on the site — kept consistent rather
// than introducing new colors.
const ACCENTS = ["#53B8EC", "#485DAC", "#E9577C", "#C7DA40"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-28 overflow-hidden bg-slate-50 py-20">
      {/* Soft color blobs for depth, matching the rest of the page's gradient language */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#53B8EC]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#E9577C]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#E9577C]" />
            TESTIMONIALS
          </div>
          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Real outcomes from learners who put in the work — in their own words.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Reveal key={t.id} delay={i * 100}>
                <div
                  className="group relative h-full overflow-hidden rounded-3xl bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_50px_-15px_rgba(15,23,42,0.2)]"
                  style={{ "--accent": accent }}
                >
                  {/* Top accent bar, always visible as a slim hint, blooms on hover */}
                  <span
                    className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-[0.18] opacity-60 transition-transform duration-500 group-hover:scale-x-100 group-hover:opacity-100"
                    style={{ backgroundColor: accent }}
                  />
                  {/* Oversized watermark quote mark */}
                  <Quote
                    className="pointer-events-none absolute -right-3 -top-3 opacity-[0.06] transition-transform duration-500 group-hover:scale-110"
                    size={100}
                    style={{ color: accent }}
                    fill={accent}
                  />

                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-md transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                      style={{ backgroundImage: `linear-gradient(135deg, ${accent}, #0f172a)` }}
                    >
                      <Quote size={19} fill="currentColor" />
                    </div>
                    <div className="flex gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="relative mt-5 text-sm leading-relaxed text-slate-700">
                    &ldquo;{t.feedback}&rdquo;
                  </p>

                  <div className="relative mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-semibold text-white shadow-sm ring-2 ring-white transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `linear-gradient(135deg, ${accent}, #0f172a)` }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                      <div className="text-xs font-medium" style={{ color: accent }}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
