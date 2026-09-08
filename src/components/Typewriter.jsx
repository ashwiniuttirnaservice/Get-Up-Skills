"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through `words`, typing each one out then deleting it before
 * moving to the next — the classic rotating-headline effect. Pure timers,
 * no animation library, and pauses (rather than jumping) for
 * prefers-reduced-motion so the final word just stays put.
 */
export default function Typewriter({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  holdTime = 1800,
  className = "",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  // Read once at mount time (lazy initializer, not an effect) so the reduced-
  // motion branch below never has to call setState from inside an effect.
  const [reducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reducedMotion) return;

    const current = words[wordIndex % words.length];
    let timer;

    if (!deleting) {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timer = setTimeout(() => setDeleting(true), holdTime);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
      } else {
        timer = setTimeout(() => {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }, deleteSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, holdTime, reducedMotion]);

  return (
    <span className={className}>
      {reducedMotion ? words[0] : text}
      <span className="ml-0.5 inline-block h-[0.85em] w-[3px] animate-pulse bg-current align-middle motion-reduce:hidden" />
    </span>
  );
}
