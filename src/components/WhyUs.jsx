import { GraduationCap, Clock, Briefcase, Users } from "lucide-react";
import { features } from "@/data/site";
import Reveal from "./Reveal";

const icons = {
  GraduationCap,
  Clock,
  Briefcase,
  Users,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#53B8EC]">
            Why GetUpSkill
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Why Choose Us?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Reveal key={f.title} delay={i * 80}>
                <div
                  className="rounded-xl border-l-4 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  style={{ borderColor: f.accent }}
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${f.accent}1a`, color: f.accent }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
