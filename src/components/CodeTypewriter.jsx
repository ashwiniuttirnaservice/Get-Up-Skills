"use client";

import { useEffect, useState } from "react";

const CODE_LINES = [
  "function fibonacci(n) {",
  "  let a = 0, b = 1;",
  "  for (let i = 0; i < n; i++) {",
  "    const next = a + b;",
  "    a = b;",
  "    b = next;",
  "  }",
  "  return a;",
  "}",
  "console.log(fibonacci(10)); // 55",
];
const FULL_CODE = CODE_LINES.join("\n");
const OUTPUT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const KEYWORD_RE = /(function|let|const|for|return|fibonacci|\/\/ 55)/g;
const KEYWORD_CLASS = {
  function: "text-pink-400",
  let: "text-pink-400",
  const: "text-pink-400",
  for: "text-pink-400",
  return: "text-pink-400",
  fibonacci: "text-sky-400",
  "// 55": "text-emerald-400",
};

/** Colors known keywords within an already-typed (possibly partial) line. */
function highlight(line) {
  return line.split(KEYWORD_RE).map((part, i) => {
    const cls = KEYWORD_CLASS[part];
    return cls ? (
      <span key={i} className={cls}>
        {part}
      </span>
    ) : (
      part
    );
  });
}

const TYPE_SPEED = 18; // ms per character
const OUTPUT_STEP = 120; // ms between each revealed output line
const HOLD_TIME = 2200; // ms to pause once fully typed before looping

/**
 * Types the Fibonacci snippet out character-by-character, then reveals the
 * matching console output line-by-line, holds, and loops — a small "live
 * demo" for the Hero code editor mockup. Pauses on the finished state for
 * prefers-reduced-motion instead of animating.
 */
export default function CodeTypewriter() {
  const [charCount, setCharCount] = useState(0);
  const [outputCount, setOutputCount] = useState(0);
  const [reducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reducedMotion) return;
    let timer;

    if (charCount < FULL_CODE.length) {
      timer = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED);
    } else if (outputCount < OUTPUT.length) {
      timer = setTimeout(() => setOutputCount((c) => c + 1), OUTPUT_STEP);
    } else {
      timer = setTimeout(() => {
        setCharCount(0);
        setOutputCount(0);
      }, HOLD_TIME);
    }

    return () => clearTimeout(timer);
  }, [charCount, outputCount, reducedMotion]);

  const typedCode = reducedMotion ? FULL_CODE : FULL_CODE.slice(0, charCount);
  const typedLines = typedCode.split("\n");
  const stillTyping = !reducedMotion && charCount < FULL_CODE.length;
  const revealedOutput = reducedMotion ? OUTPUT : OUTPUT.slice(0, outputCount);

  return (
    <div className="grid grid-cols-1 gap-0 sm:grid-cols-[1.3fr_1fr]">
      {/* Code */}
      <div className="p-4 font-mono text-[11px] leading-relaxed text-slate-300 sm:text-[12.5px]">
        {typedLines.map((line, i) => (
          <div key={i}>
            <span className="mr-3 select-none text-slate-600">{i + 1}</span>
            {highlight(line)}
            {stillTyping && i === typedLines.length - 1 && (
              <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-slate-300 align-middle" />
            )}
          </div>
        ))}
      </div>

      {/* Output panel */}
      <div className="border-t border-white/10 bg-[#0f1830] p-4 sm:border-l sm:border-t-0">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <h5 className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Output</h5>
        </div>
        <div className="rounded-lg border border-white/5 bg-black/30 p-3 font-mono text-[11px] leading-relaxed text-emerald-300 shadow-inner">
          {revealedOutput.map((n) => (
            <div key={n}>{n}</div>
          ))}
          <span className="inline-block h-3 w-1.5 animate-pulse bg-emerald-400/80 align-middle" />
        </div>
      </div>
    </div>
  );
}
