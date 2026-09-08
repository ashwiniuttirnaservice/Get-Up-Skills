import { MessageCircleQuestion, ShieldCheck, Sparkles, Users2 } from "lucide-react";
import { instructors as fallbackInstructors } from "@/data/site";
import { getTrainers, trainerPhotoUrl } from "@/lib/api";
import InstructorCarousel from "./InstructorCarousel";

const DUMMY_AVATARS = [
  "/instructors/avatar-1.svg",
  "/instructors/avatar-2.svg",
  "/instructors/avatar-3.svg",
  "/instructors/avatar-4.svg",
];

/* =========================================================
   CLEAN VALUE
========================================================= */

function cleanValue(value) {
  if (!value || value === "NA") {
    return "";
  }

  return String(value).trim().replace(/\s+/g, " ");
}

/* =========================================================
   MAP API TRAINER
========================================================= */

function mapTrainer(trainer, index) {
  const fullName = cleanValue(trainer.fullName) || "GetUpSkill Trainer";

  const title =
    cleanValue(trainer.title) ||
    cleanValue(trainer.highestQualification) ||
    "Industry Practitioner";

  const summary = cleanValue(trainer.summary);

  const years = parseFloat(trainer.totalExperience);

  const hasExperience = Number.isFinite(years) && years > 0;

  const experienceLabel = hasExperience
    ? `${years}+ Years Exp.`
    : "Industry Expert";

  /* =======================================================
     TRAINER IMAGE
  ======================================================= */

  let photo = "";

  try {
    photo = trainerPhotoUrl(trainer.profilePhotoTrainer);
  } catch (error) {
    console.error("Trainer photo URL error:", error);
  }

  const hasValidPhoto = typeof photo === "string" && photo.trim() !== "";

  if (!hasValidPhoto) {
    photo = DUMMY_AVATARS[index % DUMMY_AVATARS.length];
  }

  return {
    id: trainer._id || `trainer-${index}`,

    name: fullName,

    title,

    bio:
      summary ||
      `Mentoring aspiring professionals at GetUpSkill${hasExperience ? ` with over ${years} years of frontline expertise` : ""
      }.`,

    tag: experienceLabel,

    photo,
  };
}

/* =========================================================
   MAP FALLBACK TRAINER
========================================================= */

function mapFallbackTrainer(trainer, index) {
  const hasValidPhoto =
    typeof trainer.photo === "string" && trainer.photo.trim() !== "";

  return {
    id: trainer.id || `fallback-trainer-${index}`,

    name: trainer.name || "GetUpSkill Trainer",

    title: trainer.title || "Industry Practitioner",

    bio:
      trainer.bio ||
      "Industry expert helping learners build practical and career-ready skills.",

    tag: trainer.tag || "Industry Expert",

    photo: hasValidPhoto
      ? trainer.photo
      : DUMMY_AVATARS[index % DUMMY_AVATARS.length],
  };
}

/* =========================================================
   INSTRUCTORS SECTION
========================================================= */

export default async function Instructors() {
  let liveTrainers = [];

  /* =======================================================
     FETCH TRAINERS
  ======================================================= */

  try {
    const response = await getTrainers();

    /*
     * Make sure response is an array.
     */
    if (Array.isArray(response)) {
      liveTrainers = response;
    }
  } catch (error) {
    console.error(
      "Failed to fetch live trainers. Using fallback trainers:",
      error,
    );
  }

  /* =======================================================
     USE LIVE OR FALLBACK DATA
     
     IMPORTANT:
     No slice(0, 3)
     
     All trainers will be passed to carousel.
  ======================================================= */

  const instructors =
    liveTrainers.length > 0
      ? liveTrainers.map(mapTrainer)
      : fallbackInstructors.map(mapFallbackTrainer);

  return (
    <section
      id="instructors"
      className="relative isolate min-h-[680px] overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      {/* =====================================================
          BACKGROUND GLOW — same drifting-blob treatment as the
          Courses section, for a consistent look across the site
      ====================================================== */}

      <div
        className="courses-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-90 w-180 rounded-full opacity-50 blur-[110px]"
        style={{ background: "linear-gradient(135deg, rgba(83,184,236,0.25), rgba(233,87,124,0.18))" }}
      />
      <div
        className="courses-glow-alt pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-140 rounded-full opacity-40 blur-[100px]"
        style={{ background: "linear-gradient(135deg, rgba(199,218,64,0.22), rgba(72,93,172,0.16))" }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-4 py-1.5 text-[11px] font-bold tracking-wide text-slate-600 shadow-[0_8px_25px_rgba(100,130,180,0.12)] backdrop-blur-xl">
            <Sparkles className="sparkle-rotate h-3.5 w-3.5 text-sky-400" />

            <span>Expert Mentors</span>

            <span className="text-sky-300">✦</span>
          </div>

          {/* Heading */}

          <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-[#08123d] sm:text-4xl md:text-[42px]">
            Learn From{" "}
            <span className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-transparent">
              Industry Experts
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px]">
            GetUpSkill instructors bring real-world experience and practical
            knowledge to help you build confidence, skills, and career-ready
            expertise.
          </p>

          {/* Trust markers */}

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <Users2 size={15} className="text-[#485DAC]" />
              {instructors.length}+ Expert Mentors
            </span>
            <span className="hidden h-3 w-px bg-slate-300 sm:block" />
            <span className="flex items-center gap-1.5">
              <MessageCircleQuestion size={15} className="text-[#E9577C]" />
              1:1 Doubt Support
            </span>
            <span className="hidden h-3 w-px bg-slate-300 sm:block" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-500" />
              Verified Industry Practitioners
            </span>
          </div>
        </div>

        {/* ===================================================
            TRAINER CAROUSEL
        ==================================================== */}

        <InstructorCarousel instructors={instructors} />
      </div>
    </section>
  );
}
