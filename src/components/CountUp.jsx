"use client";

import { useEffect, useRef, useState } from "react";

/** Splits a display string like "8,000+", "4.8/5", "95%" into its
 * animatable numeric part plus the surrounding prefix/suffix text. */
function parseValue(str) {
  const match = str.match(/[\d,]+(\.\d+)?/);
  if (!match) {
    return { prefix: "", number: 0, decimals: 0, suffix: str, hasComma: false };
  }
  const numStr = match[0];
  const idx = match.index ?? 0;
  const prefix = str.slice(0, idx);
  const suffix = str.slice(idx + numStr.length);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const hasComma = numStr.includes(",");
  const number = parseFloat(numStr.replace(/,/g, ""));
  return { prefix, number, decimals, suffix, hasComma };
}

export default function CountUp({ value, duration = 1600, className }) {
  const ref = useRef(null);
  const started = useRef(false);
  const { prefix, number, decimals, suffix, hasComma } = parseValue(value);
  const [display, setDisplay] = useState(decimals > 0 ? (0).toFixed(decimals) : "0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          const current = number * eased;
          const formatted =
            decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
          setDisplay(hasComma ? Number(formatted).toLocaleString("en-US") : formatted);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number, duration, decimals, hasComma]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
