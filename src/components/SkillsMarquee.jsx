const SKILLS = [
  "React",
  "Node.js",
  "Python",
  "SQL",
  "Figma",
  "AWS",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "Google Ads",
  "SEO",
  "Pandas",
  "Scikit-learn",
  "CI/CD",
];

// Same brand palette used elsewhere on the site, cycled per chip.
const ACCENTS = ["#53B8EC", "#485DAC", "#E9577C", "#C7DA40"];

function SkillRow({ ariaHidden = false }) {
  return (
    <div className="flex shrink-0 items-center gap-3" aria-hidden={ariaHidden}>
      {SKILLS.map((skill, i) => (
        <span
          key={`${skill}-${i}`}
          className="flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm"
        >
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
          />
          {skill}
        </span>
      ))}
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
        Master the tools top companies hire for
      </p>

      <div
        className="marquee-track relative mt-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-3">
          <SkillRow />
          <SkillRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
