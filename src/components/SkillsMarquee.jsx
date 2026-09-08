import {
  Atom,
  BarChart3,
  Boxes,
  Brain,
  Cloud,
  Container,
  Database,
  GitBranch,
  Megaphone,
  PenTool,
  Search,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";

const SKILLS = [
  { name: "React", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Terminal },
  { name: "SQL", icon: Database },
  { name: "Figma", icon: PenTool },
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Container },
];

const SKILLS_ROW_2 = [
  { name: "Kubernetes", icon: Boxes },
  { name: "MongoDB", icon: Database },
  { name: "Google Ads", icon: Megaphone },
  { name: "SEO", icon: Search },
  { name: "Pandas", icon: BarChart3 },
  { name: "Scikit-learn", icon: Brain },
  { name: "CI/CD", icon: GitBranch },
];

// Same brand palette used elsewhere on the site. Each chip pairs an accent
// with the next color in the cycle for a two-tone gradient badge.
const ACCENTS = ["#53B8EC", "#485DAC", "#E9577C", "#C7DA40"];

function SkillRow({ skills, reverse = false, ariaHidden = false }) {
  return (
    <div
      className={`flex w-max shrink-0 items-center gap-4 py-2 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {[skills, skills].flat().map(({ name, icon: Icon }, i) => {
        const accent = ACCENTS[i % ACCENTS.length];
        const accent2 = ACCENTS[(i + 1) % ACCENTS.length];
        return (
          <div
            key={`${name}-${i}`}
            aria-hidden={ariaHidden || undefined}
            className="group relative flex shrink-0 cursor-pointer items-center gap-3 overflow-hidden rounded-full border border-white/80 bg-white/80 py-2.5 pl-2.5 pr-5 shadow-[0_12px_30px_rgba(72,93,172,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white hover:shadow-[0_22px_48px_rgba(72,93,172,0.18)]"
          >
            {/* Hover glow wash */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: `radial-gradient(circle at 20% 30%, ${accent}1f, transparent 70%)` }}
            />

            <div
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-[0_6px_16px_rgba(15,23,42,0.18)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
              style={{ backgroundImage: `linear-gradient(135deg, ${accent}, ${accent2})` }}
            >
              <Icon size={19} strokeWidth={2} />
            </div>

            <span className="relative whitespace-nowrap text-sm font-bold tracking-tight text-slate-700 transition-colors duration-300 group-hover:text-slate-900">
              {name}
            </span>

            {/* Ring that lights up on hover, echoing the chip's own gradient */}
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ boxShadow: `inset 0 0 0 2px ${accent}55` }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-[#f7f5f0] py-14">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[90px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(83,184,236,0.35), rgba(233,87,124,0.25))",
        }}
      />

      <div className="relative flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 shadow-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E9577C] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E9577C]" />
          </span>
          Master the tools top companies hire for
          <Sparkles size={13} className="text-[#485DAC]" />
        </span>
      </div>

      <div
        className="marquee-track relative mt-8 flex flex-col gap-4 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <SkillRow skills={SKILLS} />
        <SkillRow skills={SKILLS_ROW_2} reverse ariaHidden />
      </div>
    </section>
  );
}
