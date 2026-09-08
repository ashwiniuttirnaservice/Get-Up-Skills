"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/site";
import Reveal from "./Reveal";

// Same brand palette cycled elsewhere on the site.
const ACCENTS = ["#53B8EC", "#485DAC", "#E9577C", "#C7DA40"];

function FAQItem({ index, question, answer, accent }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-[22px] border bg-white transition-all duration-300 hover:-translate-y-1.5"
      style={{
        borderColor: open ? `${accent}80` : `${accent}30`,
        boxShadow: open
          ? `0 28px 55px -14px ${accent}40, 0 0 0 1px ${accent}22`
          : `0 10px 26px -18px ${accent}55, 0 1px 2px rgba(15,23,42,0.04)`,
      }}
    >
      {/* Left accent bar, thicker + rounded when open */}
      <div
        className="absolute inset-y-2 left-0 w-[3px] rounded-full transition-all duration-300"
        style={{ backgroundColor: accent, opacity: open ? 1 : 0.45, width: open ? 4 : 3 }}
      />

      {/* Soft accent wash, always faintly present, deepens when open */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{ background: `linear-gradient(135deg, ${accent}14, transparent 55%)`, opacity: open ? 1 : 0.4 }}
      />

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="relative flex w-full items-center gap-4 px-5 py-5 text-left"
      >
        <span className="relative shrink-0">
          {/* Pulsing ring while open, for a bit of life */}
          {open && (
            <span
              className="absolute inset-0 animate-ping rounded-xl opacity-40 motion-reduce:hidden"
              style={{ backgroundColor: accent }}
            />
          )}
          <span
            className="relative flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm ring-1 transition-all duration-300"
            style={{
              backgroundImage: open
                ? `linear-gradient(135deg, ${accent}, ${accent}cc)`
                : `linear-gradient(135deg, ${accent}26, ${accent}14)`,
              color: open ? "#fff" : accent,
              transform: open ? "scale(1.08) rotate(-6deg)" : "scale(1)",
              boxShadow: open ? `0 10px 20px ${accent}55` : "none",
              "--tw-ring-color": `${accent}35`,
            }}
          >
            <HelpCircle size={18} />
          </span>
        </span>

        <span className="flex-1">
          <span
            className="block text-[10px] font-bold uppercase tracking-widest transition-colors duration-300"
            style={{ color: open ? accent : "#94a3b8" }}
          >
            Question {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="mt-0.5 block font-bold leading-snug text-slate-900 transition-colors duration-300"
            style={{ color: open ? accent : undefined }}
          >
            {question}
          </span>
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? "rotate-180" : "group-hover:-translate-y-0.5"
          }`}
          style={{
            backgroundColor: open ? `${accent}1a` : `${accent}0d`,
            color: open ? accent : "#64748b",
          }}
        >
          <ChevronDown size={18} />
        </span>
      </button>
      <div
        className={`relative grid overflow-hidden px-5 text-sm leading-6 text-slate-600 transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 pl-15">
          <div className="border-t border-slate-100 pt-3">{answer}</div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-28 overflow-hidden py-20">
      <div className="courses-glow pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] rounded-full bg-[#53B8EC]/8 blur-[100px]" />
      <div className="courses-glow-alt pointer-events-none absolute bottom-0 right-0 h-64 w-[420px] rounded-full bg-[#E9577C]/6 blur-[90px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,42,0.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm">
            <span className="badge-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-black/5 to-transparent motion-reduce:hidden" />
            <HelpCircle className="icon-float relative h-3.5 w-3.5 text-[#53B8EC]" />
            <span className="relative">FAQ</span>
          </div>
          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
            Still unsure about something? Here are the answers our learners ask for most.
          </p>
        </Reveal>

        <div className="mt-8 flex justify-center">
          <span className="h-px w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>

        {/* Framed panel gives the whole list a single premium "surface"
            instead of cards floating loose on the page background. */}
        <Reveal delay={80}>
          <div
            className="relative mt-10 rounded-[32px] border border-white/60 bg-white/50 p-4 shadow-[0_30px_80px_-30px_rgba(72,93,172,0.25)] backdrop-blur-xl sm:p-7"
          >
            {/* Two-column reflow on larger screens — CSS multi-column instead of
                grid so one item opening taller doesn't stretch its row-mate. */}
            <div className="lg:columns-2 lg:gap-6">
              {faqs.map((f, i) => (
                <Reveal key={f.id} delay={i * 60} className="mb-5 break-inside-avoid">
                  <div className="animate-card-pop" style={{ animationDelay: `${i * 90}ms` }}>
                    <FAQItem
                      index={i}
                      question={f.question}
                      answer={f.answer}
                      accent={ACCENTS[i % ACCENTS.length]}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
