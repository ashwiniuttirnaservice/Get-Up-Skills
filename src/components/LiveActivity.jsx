"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const ACTIVITY = [
  { name: "Rohan", initials: "RS", color: "#53B8EC", action: "just enrolled in Full Stack Bootcamp", time: "2m ago" },
  { name: "Ananya", initials: "AI", color: "#E9577C", action: "rated UI/UX Design 5 stars", time: "6m ago" },
  { name: "Karan", initials: "KM", color: "#485DAC", action: "landed a job as Data Analyst", time: "18m ago" },
  { name: "Sneha", initials: "SP", color: "#C7DA40", action: "completed Digital Marketing Mastery", time: "31m ago" },
];

const HOLD_TIME = 4200; // ms each toast stays visible
const TRANSITION_TIME = 400; // ms fade/slide

/**
 * A small rotating social-proof toast — recent-activity notifications that
 * cycle in the corner of the hero. Purely decorative sample data, not a
 * live feed. Hidden for prefers-reduced-motion viewers (a static first
 * entry is shown instead of the cycling animation).
 */
export default function LiveActivity() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hold = setTimeout(() => setVisible(false), HOLD_TIME);
    return () => clearTimeout(hold);
  }, [index]);

  useEffect(() => {
    if (visible) return;
    const advance = setTimeout(() => {
      setIndex((i) => (i + 1) % ACTIVITY.length);
      setVisible(true);
    }, TRANSITION_TIME);
    return () => clearTimeout(advance);
  }, [visible]);

  const item = ACTIVITY[index];

  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-slate-200 bg-white py-3 pl-3 pr-4 shadow-md transition-all duration-300 motion-reduce:transition-none ${visible ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
        }`}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[11px] font-extrabold text-white shadow-sm"
        style={{ backgroundColor: item.color }}
      >
        {item.initials}
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
          <CheckCircle2 size={13} className="shrink-0 text-emerald-500" />
          <span className="truncate">
            {item.name} {item.action}
          </span>
        </div>
        <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          {item.time}
        </div>
      </div>
    </div>
  );
}
