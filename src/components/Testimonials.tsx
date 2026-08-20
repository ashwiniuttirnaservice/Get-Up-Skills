import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#E9577C]">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What Our Students Say
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md"
            >
              <Quote className="text-[#53B8EC]" size={28} />
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                &ldquo;{t.feedback}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#53B8EC] to-[#485DAC] font-semibold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
