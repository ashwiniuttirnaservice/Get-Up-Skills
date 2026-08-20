import { Check, Minus, X } from "lucide-react";
import type { Course } from "@/data/courses";

type Cell = boolean | "partial";

const rows: { label: string; self: Cell; others: Cell; getup: Cell }[] = [
  { label: "Live mentor-led sessions", self: false, others: "partial", getup: true },
  { label: "Real, production-grade projects", self: false, others: true, getup: true },
  { label: "1:1 doubt resolution & code review", self: false, others: "partial", getup: true },
  { label: "Resume & LinkedIn optimization", self: false, others: "partial", getup: true },
  { label: "Mock interviews & job leads", self: false, others: false, getup: true },
  { label: "Lifetime access to content", self: true, others: "partial", getup: true },
  { label: "Certificate of completion", self: false, others: true, getup: true },
];

function Cell({ value }: { value: boolean | "partial" }) {
  if (value === true) return <Check size={18} className="mx-auto text-emerald-500" />;
  if (value === "partial") return <Minus size={18} className="mx-auto text-amber-500" />;
  return <X size={18} className="mx-auto text-slate-300" />;
}

export default function WhyDifferent({ course }: { course: Course }) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#485DAC]">
            The Difference
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Why This Bootcamp Beats Self-Study
          </h2>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500">
                <th className="p-4 text-left font-medium">What you get</th>
                <th className="p-4 text-center font-medium">Self-Study</th>
                <th className="p-4 text-center font-medium">Other Bootcamps</th>
                <th
                  className="p-4 text-center font-bold"
                  style={{ color: course.color }}
                >
                  GetUpSkill
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                >
                  <td className="p-4 text-slate-700">{row.label}</td>
                  <td className="p-4">
                    <Cell value={row.self} />
                  </td>
                  <td className="p-4">
                    <Cell value={row.others} />
                  </td>
                  <td
                    className="p-4"
                    style={{ backgroundColor: `${course.color}0d` }}
                  >
                    <Cell value={row.getup} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
