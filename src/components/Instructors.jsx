import { Sparkles } from "lucide-react";
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
      `Mentoring aspiring professionals at GetUpSkill${
        hasExperience ? ` with over ${years} years of frontline expertise` : ""
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
      className="relative isolate min-h-[680px] overflow-hidden py-20 sm:py-24"
    >
      {/* =====================================================
          MAIN BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-[#e7f7ff] via-[#f4efff] to-[#fff3f7]" />

      {/* =====================================================
          LEFT BLUE GLOW
      ====================================================== */}

      <div
        className="absolute -left-32 top-24 -z-20 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(83,184,236,0.38), rgba(83,184,236,0.08) 55%, transparent 72%)",
        }}
      />

      {/* =====================================================
          RIGHT PINK GLOW
      ====================================================== */}

      <div
        className="absolute -right-32 top-16 -z-20 h-[500px] w-[500px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(233,87,124,0.25), rgba(199,218,64,0.08) 55%, transparent 72%)",
        }}
      />

      {/* =====================================================
          BOTTOM PURPLE GLOW
      ====================================================== */}

      <div
        className="absolute bottom-[-220px] left-[25%] -z-20 h-[500px] w-[700px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(193,59,232,0.18), rgba(83,184,236,0.12), transparent 70%)",
        }}
      />

      {/* =====================================================
          FLOATING 3D BUBBLE
      ====================================================== */}

      <div className="instructor-float absolute left-[23%] top-[-28px] -z-10 h-20 w-20 rounded-full border border-white/70 bg-gradient-to-br from-white/80 via-sky-100/60 to-purple-200/40 shadow-[inset_-10px_-10px_25px_rgba(120,160,220,0.12),0_15px_35px_rgba(80,120,180,0.12)]" />

      <div className="instructor-float-delay-1 absolute right-[12%] top-12 -z-10 h-16 w-16 rounded-full border border-white/80 bg-gradient-to-br from-white via-pink-100/70 to-purple-200/40 shadow-[inset_-8px_-8px_20px_rgba(220,120,180,0.15),0_12px_30px_rgba(100,100,180,0.12)]" />

      {/* =====================================================
          SMALL FLOATING BUBBLES
      ====================================================== */}

      <div className="instructor-float-delay-2 absolute left-[20%] top-[160px] -z-10 h-4 w-4 rounded-full bg-white/80 shadow-[0_4px_15px_rgba(100,140,200,0.3)]" />

      <div className="instructor-float-delay-3 absolute right-[18%] top-[120px] -z-10 h-3 w-3 rounded-full bg-white/90 shadow-[0_4px_15px_rgba(100,140,200,0.3)]" />

      {/* =====================================================
          LEFT POLYGON
      ====================================================== */}

      <div
        className="polygon-float absolute left-[10%] top-[90px] -z-10 h-16 w-16 rotate-12 opacity-50"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 85% 85%, 25% 100%, 0% 45%)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(160,190,245,0.25))",
        }}
      />

      {/* =====================================================
          RIGHT POLYGON
      ====================================================== */}

      <div
        className="polygon-float-delay absolute right-[7%] top-[190px] -z-10 h-20 w-20 -rotate-12 opacity-35"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 85% 85%, 25% 100%, 0% 45%)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(220,150,220,0.25))",
        }}
      />

      {/* =====================================================
          ABSTRACT WAVE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-[-100px] left-[-10%] -z-20 h-[260px] w-[120%] rotate-[-3deg] rounded-[50%] border border-white/40 bg-gradient-to-r from-sky-200/20 via-purple-200/20 to-pink-200/25 shadow-[0_-30px_80px_rgba(100,140,220,0.08)] blur-[1px]" />

      <div className="pointer-events-none absolute bottom-[-160px] left-[10%] -z-20 h-[250px] w-[90%] rotate-[4deg] rounded-[50%] border border-white/30 bg-white/20 backdrop-blur-sm" />

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
            Learn From Industry Experts
          </h2>

          {/* Description */}

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px]">
            GetUpSkill instructors bring real-world experience and practical
            knowledge to help you build confidence, skills, and career-ready
            expertise.
          </p>
        </div>

        {/* ===================================================
            TRAINER CAROUSEL
        ==================================================== */}

        <InstructorCarousel instructors={instructors} />
      </div>
    </section>
  );
}
