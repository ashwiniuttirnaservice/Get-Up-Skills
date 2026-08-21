"use client";

import { useEffect, useRef } from "react";

/**
 * A soft light that follows the cursor across the section it's layered
 * inside — the "premium dev-tool" spotlight effect. Tracks mousemove on
 * the window (not the element itself) so it isn't blocked by content
 * sitting on top of it, and stays inert for prefers-reduced-motion.
 */
export default function HeroSpotlight({ color }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleMove(e) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom) return;
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spot-x", `${x}%`);
      el.style.setProperty("--spot-y", `${y}%`);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 transition-opacity duration-300 motion-reduce:hidden"
      style={{
        background: `radial-gradient(480px circle at var(--spot-x, 50%) var(--spot-y, 20%), ${color}4d, transparent 70%)`,
      }}
    />
  );
}
