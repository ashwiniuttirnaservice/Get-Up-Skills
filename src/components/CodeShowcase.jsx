"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const CODE_LINES = [
  "function fibonacci(n) {",
  "  let a = 0, b = 1;",
  "  for (let i = 0; i < n; i++) {",
  "    [a, b] = [b, a + b];",
  "  }",
  "  return a;",
  "}",
];

const COMMAND = "node fibonacci.js --terms 3";

const OUTPUT_LINES = ["fib(0) = 0", "fib(1) = 1", "fib(2) = 1"];

const FULL_CODE = CODE_LINES.join("\n");

const CODE_TYPE_SPEED = 45; // ms per character (code)
const CMD_TYPE_SPEED = 70; // ms per character (command)
const LINE_DELAY = 260; // ms between revealed output lines
const HOLD_TIME = 2600; // ms to hold the finished state before looping
const RESTART_DELAY = 500; // ms pause before typing starts again

function highlight(line) {
  return line
    .replace(/(function|return|let|for)/g, '<span class="text-[#E9577C]">$1</span>')
    .replace(/(fibonacci)/g, '<span class="text-[#53B8EC]">$1</span>');
}

export default function CodeShowcase() {
  const [codeTyped, setCodeTyped] = useState(0); // characters of FULL_CODE typed
  const [typedCommand, setTypedCommand] = useState("");
  const [visibleLines, setVisibleLines] = useState(0);
  const [phase, setPhase] = useState("code"); // "code" | "command" | "output" | "done"

  useEffect(() => {
    let timer;

    if (phase === "code") {
      if (codeTyped < FULL_CODE.length) {
        timer = setTimeout(() => setCodeTyped((c) => c + 1), CODE_TYPE_SPEED);
      } else {
        timer = setTimeout(() => setPhase("command"), 500);
      }
    } else if (phase === "command") {
      if (typedCommand.length < COMMAND.length) {
        timer = setTimeout(() => {
          setTypedCommand(COMMAND.slice(0, typedCommand.length + 1));
        }, CMD_TYPE_SPEED);
      } else {
        timer = setTimeout(() => setPhase("output"), 400);
      }
    } else if (phase === "output") {
      if (visibleLines < OUTPUT_LINES.length) {
        timer = setTimeout(() => setVisibleLines((v) => v + 1), LINE_DELAY);
      } else {
        timer = setTimeout(() => setPhase("done"), HOLD_TIME);
      }
    } else {
      timer = setTimeout(() => {
        setCodeTyped(0);
        setTypedCommand("");
        setVisibleLines(0);
        setPhase("code");
      }, RESTART_DELAY);
    }

    return () => clearTimeout(timer);
  }, [phase, codeTyped, typedCommand, visibleLines]);

  const typedCode = FULL_CODE.slice(0, codeTyped);
  const typedCodeLines = typedCode.split("\n");
  const isTypingCode = phase === "code";

  return (
    <div className="relative">
      {/* Floating "live" badge */}
      <div className="absolute -top-3 right-6 z-10 flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300 shadow-lg ring-1 ring-white/10">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        live · getupskill.dev
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-xs text-slate-400">~/getupskill — zsh</span>
          <span className="font-mono text-xs text-slate-600">v1.0.0</span>
        </div>

        {/* Body */}
        <div className="min-h-[320px] p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
          {CODE_LINES.map((line, i) => {
            const revealed = typedCodeLines[i] ?? "";
            const isCurrentLine = isTypingCode && i === typedCodeLines.length - 1;
            return (
              <div key={i} className="text-slate-400">
                <span className="mr-3 select-none text-slate-600">{i + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: highlight(revealed) }} />
                {isCurrentLine && (
                  <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-slate-300 align-middle" />
                )}
              </div>
            );
          })}

          {phase !== "code" && (
            <div className="mt-4 flex items-center text-slate-200">
              <span className="mr-2 text-emerald-400">$</span>
              <span>{typedCommand}</span>
              {phase === "command" && (
                <span className="ml-0.5 h-4 w-2 animate-pulse bg-slate-300" />
              )}
            </div>
          )}

          {(phase === "output" || phase === "done") && (
            <div className="mt-3 space-y-1">
              {OUTPUT_LINES.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-slate-300 animate-[fadein_0.25s_ease-out]"
                >
                  <CheckCircle2 size={14} className="shrink-0 text-emerald-400" />
                  <span>{line}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
