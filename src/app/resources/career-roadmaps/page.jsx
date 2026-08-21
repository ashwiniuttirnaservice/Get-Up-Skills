"use client";

import { useState } from "react";
import { CheckCircle2, Milestone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ResourcesNav from "@/components/ResourcesNav";
import { roadmaps } from "@/data/resources";

export default function CareerRoadmapsPage() {
  const [activeId, setActiveId] = useState(roadmaps[0].id);
  const track = roadmaps.find((t) => t.id === activeId);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
        <ResourcesNav active="/resources/career-roadmaps" />
      </div>
      <main>
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C7DA40]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7c8a1f]">
                <Milestone size={12} /> Career Roadmaps
              </span>
              <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Step-by-Step Paths Into Tech
              </h1>
              <p className="mt-4 text-slate-600">
                Pick a track and follow the journey — each milestone maps loosely to a
                GetUpSkill course.
              </p>
            </Reveal>

            {/* Track selector */}
            <Reveal delay={100} className="mt-10 flex flex-wrap justify-center gap-2">
              {roadmaps.map((t) => {
                const isActive = t.id === activeId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveId(t.id)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all duration-200 ${
                      isActive ? "text-white" : "bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                    style={isActive ? { backgroundColor: t.color } : {}}
                  >
                    {t.track}
                  </button>
                );
              })}
            </Reveal>

            {/* Zigzag journey path */}
            <div className="relative mt-16 flex flex-col">
              <span
                className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 sm:block"
                style={{ backgroundColor: `${track.color}30` }}
              />
              {track.steps.map((step, i) => {
                const isRight = i % 2 === 1;
                return (
                  <Reveal key={`${track.id}-${step.title}`} delay={i * 90} className="relative mb-8 last:mb-0">
                    <div
                      className={`flex flex-col items-center gap-4 sm:flex-row ${
                        isRight ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      <div className={`w-full sm:w-1/2 ${isRight ? "sm:pl-10 sm:text-left" : "sm:pr-10 sm:text-right"}`}>
                        <div className="inline-block rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                          <div className="text-sm font-bold text-slate-900">{step.title}</div>
                          <div
                            className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold"
                            style={{ color: track.color }}
                          >
                            <CheckCircle2 size={12} /> {step.duration}
                          </div>
                        </div>
                      </div>

                      <span
                        className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-md"
                        style={{ backgroundColor: track.color }}
                      >
                        {i + 1}
                      </span>

                      <div className="hidden w-1/2 sm:block" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
