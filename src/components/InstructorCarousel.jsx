"use client";

import {
  useEffect,
  useState,
} from "react";

import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Quote,
} from "lucide-react";

const ACCENTS = [
  "#53B8EC",
  "#485DAC",
  "#E9577C",
  "#C7DA40",
];

const DUMMY_AVATARS = [
  "/instructors/avatar-1.svg",
  "/instructors/avatar-2.svg",
  "/instructors/avatar-3.svg",
  "/instructors/avatar-4.svg",
];

/* =========================================================
   AVATAR COMPONENT
========================================================= */

function TrainerAvatar({
  src,
  alt,
  accent,
  index,
  label,
}) {
  const fallback =
    DUMMY_AVATARS[
    index % DUMMY_AVATARS.length
    ];

  const [imageSrc, setImageSrc] =
    useState(src || fallback);

  // Reset the shown image when the trainer's own src changes (e.g. carousel
  // recycling this component for a different trainer). Adjusted during
  // render instead of in an effect — React's recommended pattern for
  // resetting state in response to a prop change.
  const [lastSrc, setLastSrc] = useState(src);
  if (src !== lastSrc) {
    setLastSrc(src);
    setImageSrc(src || fallback);
  }

  return (
    <div
      className="relative h-[113px] w-[113px] rounded-[32px] p-[3px] transition-all duration-500 group-hover:scale-105 sm:h-[123px] sm:w-[123px]"
      style={{
        backgroundImage: `linear-gradient(135deg, ${accent}, ${accent}55)`,
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-[29px] border-[3px] border-white shadow-[0_12px_30px_rgba(30,50,90,0.16)]"
        style={{
          backgroundColor: `${accent}22`,
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="115px"
          className="object-cover"
          onError={() => {
            if (imageSrc !== fallback) {
              setImageSrc(fallback);
            }
          }}
        />

        {/* Image Label */}

        <div
          className="absolute bottom-0 right-0 max-w-full truncate rounded-tl-lg px-2 py-1 text-[9px] font-bold leading-none text-white shadow-sm"
          style={{
            backgroundColor: accent,
          }}
        >
          {label || "Trainer"}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TRAINER CARD
========================================================= */

function TrainerCard({
  trainer,
  index,
}) {
  const accent =
    ACCENTS[index % ACCENTS.length];

  return (
    <article
      className="group relative flex min-h-[380px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white px-5 pb-5 pt-6 shadow-[0_10px_30px_rgba(75,95,150,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent)]/40 hover:shadow-[0_28px_70px_rgba(75,95,150,0.20)] sm:px-6"
      style={{ "--accent": accent }}
    >
      {/* Hover glow wash + ring, echoing the course cards */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at 50% 0%, ${accent}14, transparent 60%)` }}
      />
      <span
        className="pointer-events-none absolute inset-0 z-10 rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1.5px ${accent}55` }}
      />

      {/* =================================================
          TOP ACCENT
      ================================================== */}

      <div
        className="absolute left-0 right-0 top-0 h-[4px] overflow-hidden"
        style={{
          backgroundColor: accent,
        }}
      >
        <span className="badge-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent motion-reduce:hidden" />
      </div>

      {/* =================================================
          CARD GLOW
      ================================================== */}

      <div
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-20 blur-3xl transition-all duration-700 group-hover:scale-150"
        style={{
          backgroundColor: accent,
        }}
      />

      {/* =================================================
          SMALL DECORATION
      ================================================== */}

      <div
        className="absolute right-5 top-5 h-2 w-2 rounded-full opacity-70"
        style={{
          backgroundColor: accent,
        }}
      />

      {/* =================================================
          SINGLE TRAINER IMAGE
      ================================================== */}

      <div className="relative z-10 mx-auto mt-1">
        <TrainerAvatar
          src={trainer.photo}
          alt={`${trainer.name} profile photo`}
          accent={accent}
          index={index}
          label={trainer.tag}
        />
      </div>

      {/* =================================================
          TRAINER NAME
      ================================================== */}

      <div className="relative z-10 mt-5 text-center">

        <h3 className="truncate text-[22px] font-extrabold tracking-tight text-[#111827]">
          {trainer.name}
        </h3>

        {/* =================================================
            TRAINER TITLE
        ============================================= */}

        <p
          className="mt-1.5 truncate text-[13px] font-semibold"
          style={{
            color: accent,
          }}
        >
          {trainer.title}
        </p>

        {/* =================================================
            EXPERIENCE
        ================================================== */}

        <div className="mt-1.5 flex items-center justify-center gap-2 text-[13px]">

          <span className="text-slate-300">
            •
          </span>

          <span className="inline-flex items-center gap-1 text-slate-500">

            <Briefcase className="h-3.5 w-3.5" />

            {trainer.tag}

          </span>

        </div>

      </div>

      {/* =================================================
          TRAINER BIO
      ================================================== */}

      <div className="relative z-10 mx-auto mt-4 max-w-[290px]">
        <Quote
          className="mx-auto h-4 w-4 rotate-180"
          style={{ color: `${accent}55` }}
          fill="currentColor"
        />
        <p className="mt-2 text-center text-[13px] leading-[1.7] text-slate-500 line-clamp-4">
          {trainer.bio}
        </p>
      </div>

      {/* =================================================
          CARD FOOTER — verified-mentor badge
      ================================================== */}

      <div className="relative z-10 mt-auto pt-5">
        <div
          className="flex items-center justify-center gap-1.5 border-t border-white/70 pt-4 text-[11px] font-bold"
          style={{ color: accent }}
        >
          <BadgeCheck className="h-3.5 w-3.5" fill={`${accent}22`} />
          Verified GetUpSkill Mentor
        </div>
      </div>

    </article>
  );
}

/* =========================================================
   INSTRUCTOR CAROUSEL
========================================================= */

export default function InstructorCarousel({
  instructors = [],
}) {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [itemsPerView, setItemsPerView] =
    useState(1);

  /* =======================================================
     RESPONSIVE ITEMS PER VIEW
  ======================================================= */

  useEffect(() => {
    const updateItemsPerView = () => {
      const width =
        window.innerWidth;

      if (width >= 1280) {
        setItemsPerView(3);
      } else if (width >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();

    window.addEventListener(
      "resize",
      updateItemsPerView
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateItemsPerView
      );
    };
  }, []);

  /* =======================================================
     MAX INDEX
  ======================================================= */

  const maxIndex = Math.max(
    0,
    instructors.length -
    itemsPerView
  );

  // Resizing can shrink maxIndex below the stored index (e.g. going from 1
  // item per view to 3) — clamp for display without an effect; the next
  // nextSlide()/previousSlide() call re-derives from the live maxIndex anyway.
  const safeIndex = Math.min(
    currentIndex,
    maxIndex
  );

  /* =======================================================
     NEXT SLIDE
  ======================================================= */

  const nextSlide = () => {
    setCurrentIndex(
      (previous) => {
        if (
          previous >= maxIndex
        ) {
          return 0;
        }

        return previous + 1;
      }
    );
  };

  /* =======================================================
     PREVIOUS SLIDE
  ======================================================= */

  const previousSlide = () => {
    setCurrentIndex(
      (previous) => {
        if (previous <= 0) {
          return maxIndex;
        }

        return previous - 1;
      }
    );
  };

  /* =======================================================
     AUTO PLAY
  ======================================================= */

  useEffect(() => {
    if (
      instructors.length <=
      itemsPerView
    ) {
      return;
    }

    const timer =
      setInterval(() => {
        setCurrentIndex(
          (previous) => {
            if (
              previous >=
              maxIndex
            ) {
              return 0;
            }

            return previous + 1;
          }
        );
      }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [
    instructors.length,
    itemsPerView,
    maxIndex,
  ]);

  /* =======================================================
     TRANSLATE CAROUSEL
  ======================================================= */

  const translateX =
    safeIndex *
    (100 / itemsPerView);

  /* =======================================================
     DOT COUNT
  ======================================================= */

  const dotCount =
    maxIndex + 1;

  if (!instructors.length) {
    return (
      <div className="mt-12 flex min-h-[250px] items-center justify-center rounded-[24px] border border-white/70 bg-white/40 backdrop-blur-xl">

        <p className="text-sm text-slate-500">
          No instructors available.
        </p>

      </div>
    );
  }

  return (
    <div className="relative mt-12">

      {/* =================================================
          CAROUSEL VIEWPORT
      ================================================== */}

      <div className="overflow-hidden px-1 py-3">

        {/* =================================================
            CAROUSEL TRACK
        ================================================== */}

        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translateX(-${translateX}%)`,
          }}
        >

          {instructors.map(
            (
              trainer,
              index
            ) => (
              <div
                key={
                  trainer.id ||
                  `trainer-${index}`
                }
                className="animate-card-pop shrink-0 px-2 sm:px-3"
                style={{
                  width: `${100 / itemsPerView}%`,
                  animationDelay: `${(index % itemsPerView) * 120}ms`,
                }}
              >

                <TrainerCard
                  trainer={trainer}
                  index={index}
                />

              </div>
            )
          )}

        </div>

      </div>

      {/* =================================================
          CAROUSEL CONTROLS
      ================================================== */}

      {instructors.length >
        itemsPerView && (
          <div className="mt-7 flex items-center justify-center gap-5">

            {/* =================================================
              PREVIOUS BUTTON
          ================================================== */}

            <button
              type="button"
              onClick={
                previousSlide
              }
              aria-label="Previous instructors"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-[0_8px_25px_rgba(70,90,140,0.10)] transition-all duration-300 hover:-translate-x-1 hover:border-transparent hover:bg-gradient-to-r hover:from-[#53B8EC] hover:via-[#485DAC] hover:to-[#E9577C] hover:text-white hover:shadow-[0_12px_28px_rgba(72,93,172,0.32)]"
            >

              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />

            </button>

            {/* =================================================
              DOTS
          ================================================== */}

            <div className="flex max-w-[220px] items-center gap-2 overflow-hidden">

              {Array.from({
                length: dotCount,
              }).map(
                (_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to instructor slide ${index + 1
                      }`}
                    onClick={() =>
                      setCurrentIndex(
                        index
                      )
                    }
                    className={`h-2 rounded-full transition-all duration-300 ${safeIndex ===
                        index
                        ? "w-7 bg-[#485DAC]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                  />
                )
              )}

            </div>

            {/* =================================================
              NEXT BUTTON
          ================================================== */}

            <button
              type="button"
              onClick={
                nextSlide
              }
              aria-label="Next instructors"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-[0_8px_25px_rgba(70,90,140,0.10)] transition-all duration-300 hover:translate-x-1 hover:border-transparent hover:bg-gradient-to-r hover:from-[#53B8EC] hover:via-[#485DAC] hover:to-[#E9577C] hover:text-white hover:shadow-[0_12px_28px_rgba(72,93,172,0.32)]"
            >

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />

            </button>

          </div>
        )}

      {/* =================================================
          TRAINER COUNT
      ================================================== */}

      {instructors.length >
        itemsPerView && (
          <div className="mt-3 text-center">

            <span className="text-[10px] font-semibold tracking-[0.18em] text-slate-400">
              {instructors.length} EXPERT
              INSTRUCTORS
            </span>

          </div>
        )}

    </div>
  );
}