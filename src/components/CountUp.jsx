"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Animates a stat string (e.g. "95%", "8,000+", "25+") counting up from 0
 * the first time it scrolls into view. Parses the leading number out of the
 * string and re-attaches whatever prefix/suffix it had (%, +, commas).
 */
export default function CountUp({ value, duration = 1400, className = "" }) {
  const ref = useRef(null);

  const parsed = useMemo(() => {
    const match = String(value).match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!match) return null;
    const [, prefix, numStr, suffix] = match;
    return {
      prefix,
      suffix,
      target: parseFloat(numStr.replace(/,/g, "")),
      useCommas: numStr.includes(","),
      decimals: (numStr.split(".")[1] || "").length,
    };
  }, [value]);

  const startDisplay = parsed ? `${parsed.prefix}0${parsed.suffix}` : value;
  const [display, setDisplay] = useState(startDisplay);

  // Reset to the zeroed start state whenever the target value itself
  // changes, so a re-used instance re-animates instead of freezing on the
  // old number. Adjusted during render (React's recommended pattern) rather
  // than in an effect.
  const [lastStart, setLastStart] = useState(startDisplay);
  if (startDisplay !== lastStart) {
    setLastStart(startDisplay);
    setDisplay(startDisplay);
  }

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = parsed.target * eased;
          const formatted = parsed.decimals
            ? current.toFixed(parsed.decimals)
            : Math.round(current).toString();
          const withCommas = parsed.useCommas
            ? Number(formatted).toLocaleString("en-IN")
            : formatted;
          setDisplay(`${parsed.prefix}${withCommas}${parsed.suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [parsed, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
