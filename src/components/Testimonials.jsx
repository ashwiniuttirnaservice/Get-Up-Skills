import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import Reveal from "./Reveal";

// Same brand palette cycled elsewhere on the site — kept consistent rather
// than introducing new colors.
const ACCENTS = ["#53B8EC", "#485DAC", "#E9577C", "#C7DA40"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-28 overflow-hidden bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#E9577C]">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What Our Students Say
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Reveal key={t.id} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  {/* Top accent bar */}
                  <span
                    className="absolute inset-x-0 top-0 h-1 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                    style={{ backgroundColor: accent }}
                  />
                  {/* Oversized watermark quote mark */}
                  <Quote
                    className="pointer-events-none absolute -right-2 -top-2 opacity-[0.07]"
                    size={90}
                    style={{ color: accent }}
                    fill={accent}
                  />

                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm"
                    style={{ backgroundImage: `linear-gradient(135deg, ${accent}, #0f172a)` }}
                  >
                    <Quote size={18} fill="currentColor" />
                  </div>

                  <div className="mt-3 flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={13} fill="currentColor" />
                    ))}
                  </div>

                  <p className="relative mt-3 text-sm leading-relaxed text-slate-700">
                    &ldquo;{t.feedback}&rdquo;
                  </p>

                  <div className="relative mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full font-semibold text-white"
                      style={{ backgroundImage: `linear-gradient(135deg, ${accent}, #0f172a)` }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
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
