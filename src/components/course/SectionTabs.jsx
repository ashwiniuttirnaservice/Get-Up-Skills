"use client";

const tabs = [
  { label: "Overview", href: "#overview" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Career Support", href: "#career" },
  { label: "Instructors", href: "#instructors" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

// Rendered right under <Navbar/> inside a shared sticky wrapper (see the
// course detail pages) — no sticky/top offset of its own, so it always sits
// flush against the navbar with zero gap instead of guessing its pixel height.
export default function SectionTabs({ accent }) {
  return (
    <div className="border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8">
        {tabs.map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            style={{ "--accent": accent }}
            className="whitespace-nowrap border-b-2 border-transparent py-3.5 text-sm font-semibold text-slate-500 transition hover:text-[var(--accent)] hover:border-[var(--accent)]"
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
