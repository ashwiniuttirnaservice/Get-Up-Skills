"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessagesSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ResourcesNav from "@/components/ResourcesNav";
import { interviewCategories } from "@/data/resources";

const ACCENTS = ["#485DAC", "#E9577C", "#53B8EC"];

function QAItem({ q, a, accent }) {
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
          style={{ backgroundColor: open ? accent : `${accent}1a`, color: open ? "#fff" : accent }}
        >
          <HelpCircle size={16} />
        </span>
        <span className="flex-1 font-medium text-slate-900">{q}</span>
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
        <div className="min-h-0 pl-12">{a}</div>
      </div>
    </div>
  );
}

export default function InterviewPrepPage() {
  const [activeCat, setActiveCat] = useState(interviewCategories[0].id);
  const current = interviewCategories.find((c) => c.id === activeCat);
  const currentIndex = interviewCategories.findIndex((c) => c.id === activeCat);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
        <ResourcesNav active="/resources/interview-prep" />
      </div>
      <main>
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#485DAC]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#485DAC]">
                <MessagesSquare size={12} /> Interview Prep
              </span>
              <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Practice Questions
              </h1>
              <p className="mt-4 text-slate-600">
                A starter set of technical, behavioral and system-design questions to
                practice with.
              </p>
            </Reveal>

            {/* App-style split layout: category sidebar + question pane */}
            <Reveal delay={150} className="mt-12 grid gap-6 lg:grid-cols-[220px_1fr]">
              <div className="flex gap-2 overflow-x-auto lg:sticky lg:top-32 lg:h-fit lg:flex-col lg:overflow-visible">
                {interviewCategories.map((cat, i) => {
                  const isActive = cat.id === activeCat;
                  const accent = ACCENTS[i % ACCENTS.length];
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCat(cat.id)}
                      className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                        isActive ? "text-white shadow-md" : "bg-white text-slate-600 hover:bg-slate-100"
                      }`}
                      style={isActive ? { backgroundColor: accent } : {}}
                    >
                      {cat.label}
                      <span
                        className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {cat.questions.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3">
                {current.questions.map((item, i) => (
                  <Reveal key={item.q} delay={i * 60}>
                    <QAItem q={item.q} a={item.a} accent={ACCENTS[currentIndex % ACCENTS.length]} />
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
