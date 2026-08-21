"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/site";
import Reveal from "./Reveal";

// Same brand palette cycled elsewhere on the site.
const ACCENTS = ["#53B8EC", "#485DAC", "#E9577C", "#C7DA40"];

function FAQItem({ question, answer, accent }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300"
      style={{ borderColor: open ? accent : "#e2e8f0" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
      >
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors"
          style={{
            backgroundColor: open ? accent : `${accent}1a`,
            color: open ? "#fff" : accent,
          }}
        >
          <HelpCircle size={16} />
        </span>
        <span className="flex-1 font-medium text-slate-900">{question}</span>
        <ChevronDown
          size={18}
          className="shrink-0 transition-transform duration-300"
          style={{ color: open ? accent : "#64748b", transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>
      <div
        className={`grid overflow-hidden px-5 text-sm text-slate-600 transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 pl-12">{answer}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#53B8EC]">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.id} delay={i * 60}>
              <FAQItem
                question={f.question}
                answer={f.answer}
                accent={ACCENTS[i % ACCENTS.length]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
