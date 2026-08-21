import Link from "next/link";
import { BookOpen, MessagesSquare, Milestone, PlaySquare } from "lucide-react";

const tabs = [
  { href: "/resources/blog", label: "Blog", icon: BookOpen },
  { href: "/resources/youtube", label: "Videos", icon: PlaySquare },
  { href: "/resources/interview-prep", label: "Interview Prep", icon: MessagesSquare },
  { href: "/resources/career-roadmaps", label: "Roadmaps", icon: Milestone },
];

/** Sub-nav shared by every Resources page — turns four standalone pages
 * into one cohesive "hub" you can hop between. `active` is the current
 * page's href. */
export default function ResourcesNav({ active }) {
  return (
    <div className="border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8">
        {tabs.map((tab) => {
          const isActive = tab.href === active;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex items-center gap-1.5 whitespace-nowrap border-b-2 px-3 py-3.5 text-sm font-semibold transition ${
                isActive
                  ? "border-[#485DAC] text-[#485DAC]"
                  : "border-transparent text-slate-600 hover:text-[#485DAC]"
              }`}
            >
              <tab.icon size={15} />
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
