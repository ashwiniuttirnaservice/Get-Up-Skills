"use client";

import { useEffect, useRef, useState } from "react";
import CourseCard from "./CourseCard";

const AUTO_ADVANCE_MS = 4500;
const SIDE_COUNT = 3;

export default function CourseCarousel({ courses }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % courses.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, [courses.length]);

  function goTo(index) {
    setActiveIndex(index);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % courses.length);
    }, AUTO_ADVANCE_MS);
  }

  const active = courses[activeIndex];

  // Next 3 courses in rotation order (wrapping), shown beside the big card.
  const side = Array.from({ length: SIDE_COUNT }, (_, n) => {
    const originalIndex = (activeIndex + n + 1) % courses.length;
    return { ...courses[originalIndex], originalIndex };
  });

  // Remaining courses — same course card UI, filling the space under the big card.
  const shownIndexes = new Set([activeIndex, ...side.map((c) => c.originalIndex)]);
  const below = courses.filter((_, i) => !shownIndexes.has(i));

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {/* Featured — big card, auto-advances */}
      <div className="lg:col-span-2 lg:row-start-1">
        <div key={active.id} className="animate-[fadein_0.4s_ease-out] max-w-md mx-auto sm:max-w-none">
          <CourseCard course={active} />
        </div>

        {/* Progress dots */}
        <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
          {courses.map((c, i) => (
            <button
              key={c.id}
              onClick={() => goTo(i)}
              aria-label={`Show ${c.title}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "28px" : "8px",
                backgroundColor: i === activeIndex ? c.color : "#e2e8f0",
              }}
            />
          ))}
        </div>
      </div>

      {/* Other courses — spans the full height of both rows */}
      <div className="lg:col-start-3 lg:row-start-1 lg:row-span-2">
        <div className="flex flex-col gap-3">
          {side.map((c) => (
            <div key={c.id} onClick={() => goTo(c.originalIndex)} className="cursor-pointer">
              <CourseCard course={c} compact />
            </div>
          ))}
        </div>
      </div>

      {/* More courses — fills the space right under the big card */}
      {below.length > 0 && (
        <div className="lg:col-span-2 lg:row-start-2 grid gap-6 sm:grid-cols-2">
          {below.map((c) => (
            <CourseCard key={c.id} course={c} compact />
          ))}
        </div>
      )}
    </div>
  );
}
