import Image from "next/image";
import { Quote } from "lucide-react";
import { instructors as fallbackInstructors } from "@/data/site";
import { getTrainers, trainerPhotoUrl } from "@/lib/api";
import Reveal from "./Reveal";

// Same brand palette used across course cards/highlights — cycled per
// instructor so the grid feels colorful without introducing new colors.
const ACCENTS = ["#53B8EC", "#485DAC", "#E9577C", "#C7DA40"];

// Flat illustrated avatars (see public/instructors/) used whenever a trainer
// has no uploaded profile photo — on-brand placeholder art instead of a
// plain initial, cycled to match each card's accent color.
const DUMMY_AVATARS = [
  "/instructors/avatar-1.svg",
  "/instructors/avatar-2.svg",
  "/instructors/avatar-3.svg",
  "/instructors/avatar-4.svg",
];

/** Maps a live /api/trainer/all-profile record to the card shape this
 * section renders. Falls back gracefully when a field is blank/"NA". */
function mapTrainer(t, i) {
  const clean = (v) => (v && v !== "NA" ? v.trim().replace(/\s+/g, " ") : "");

  // The LMS seeds every trainer with totalExperience "0" until someone fills
  // it in — treat that (or anything non-positive) as "no data yet" instead
  // of showing a meaningless "0 Years Experience".
  const years = parseFloat(t.totalExperience);
  const hasExperience = Number.isFinite(years) && years > 0;
  const experienceLabel = hasExperience ? `${years}+ Years Experience` : "";

  return {
    id: t._id,
    name: clean(t.fullName) || "GetUpSkill Trainer",
    title: clean(t.title) || clean(t.highestQualification) || "Trainer",
    bio:
      clean(t.summary) ||
      `Mentors learners at GetUpSkill${hasExperience ? ` with ${years}+ years of industry experience` : ""}.`,
    tag: experienceLabel || "GetUpSkill Mentor",
    photo: trainerPhotoUrl(t.profilePhotoTrainer) || DUMMY_AVATARS[i % DUMMY_AVATARS.length],
  };
}

export default async function Instructors() {
  const live = await getTrainers();
  const instructors = live.length ? live.map(mapTrainer).slice(0, 6) : fallbackInstructors;

  return (
    <section id="instructors" className="scroll-mt-28 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#53B8EC]">
            Practitioners Who Teach
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Learn from Industry Experts
          </h2>
        </Reveal>

        {/* Horizontal, quote-led layout — deliberately different from the
            banner-topped CourseCard grid used elsewhere on this page. */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {instructors.map((ins, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Reveal key={ins.id} delay={(i % 2) * 100}>
                <div
                  className="group flex gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:shadow-xl hover:ring-transparent"
                  style={{ "--accent": accent }}
                >
                  {/* Blob-shaped photo, not a plain circle — visually distinct
                      from the course cards' rectangular banner images. */}
                  <div
                    className="relative h-24 w-24 shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    style={{ borderRadius: "42% 58% 63% 37% / 45% 40% 60% 55%" }}
                  >
                    <Image src={ins.photo} alt={ins.name} fill className="object-cover" sizes="96px" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <Quote size={20} className="opacity-70" style={{ color: accent }} fill={accent} />
                    <h3 className="mt-1 truncate font-bold text-slate-900">{ins.name}</h3>
                    <p className="text-sm font-semibold" style={{ color: accent }}>
                      {ins.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{ins.bio}</p>
                    <span
                      className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: `${accent}1a`, color: accent }}
                    >
                      {ins.tag}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
