"use client";

import {
  useEffect,
  useState,
} from "react";

import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
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
}) {
  const fallback =
    DUMMY_AVATARS[
      index % DUMMY_AVATARS.length
    ];

  const [imageSrc, setImageSrc] =
    useState(src || fallback);

  /*
   * If image URL changes,
   * update displayed image.
   */
  useEffect(() => {
    setImageSrc(src || fallback);
  }, [src, fallback]);

  return (
    <div
      className="relative h-[105px] w-[105px] overflow-hidden rounded-[28px] border-[4px] border-white shadow-[0_12px_30px_rgba(30,50,90,0.16)] transition-all duration-500 group-hover:scale-105 sm:h-[115px] sm:w-[115px]"
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

      {/* Image label */}

      <div
        className="absolute bottom-0 right-0 rounded-tl-lg px-2 py-1 text-[8px] font-bold leading-none text-white shadow-sm"
        style={{
          backgroundColor: accent,
        }}
      >
        Trainer
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
      className="group relative flex min-h-[370px] flex-col overflow-hidden rounded-[22px] border border-white/80 bg-white/55 px-5 pb-5 pt-6 shadow-[0_18px_50px_rgba(75,95,150,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/75 hover:shadow-[0_28px_70px_rgba(75,95,150,0.20)] sm:px-6"
    >

      {/* =================================================
          TOP ACCENT
      ================================================== */}

      <div
        className="absolute left-0 right-0 top-0 h-[4px]"
        style={{
          backgroundColor: accent,
        }}
      />

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
          DECORATION
      ================================================== */}

      <div
        className="absolute right-5 top-5 h-2 w-2 rounded-full opacity-70"
        style={{
          backgroundColor: accent,
        }}
      />

      {/* =================================================
          SINGLE IMAGE
      ================================================== */}

      <div className="relative z-10 mx-auto mt-1">

        <TrainerAvatar
          src={trainer.photo}
          alt={`${trainer.name} profile photo`}
          accent={accent}
          index={index}
        />

      </div>

      {/* =================================================
          TRAINER NAME
      ================================================== */}

      <div className="relative z-10 mt-5 text-center">

        <h3 className="truncate text-[20px] font-extrabold tracking-tight text-[#111827]">
          {trainer.name}
        </h3>

<<<<<<< HEAD
        {/* =================================================
            TRAINER TITLE
        ============================================= */}
=======
        {/* Title */}
>>>>>>> eed0ec86cb0849a336b75bb1dac78c239a899d43

        <p
          className="mt-1.5 truncate text-[11px] font-semibold"
          style={{
            color: accent,
          }}
        >
          {trainer.title}
        </p>

        {/* Experience */}

        <div className="mt-1.5 flex items-center justify-center gap-2 text-[11px]">

          <span className="text-slate-300">
            •
          </span>

          <span className="inline-flex items-center gap-1 text-slate-500">

            <Briefcase className="h-3 w-3" />

            {trainer.tag}

          </span>

        </div>

      </div>

      {/* =================================================
          BIO
      ================================================== */}

      <p className="relative z-10 mx-auto mt-4 max-w-[280px] text-center text-[12px] leading-[1.7] text-slate-500 line-clamp-4">
        {trainer.bio}
      </p>

      {/* =================================================
          FOOTER
      ================================================== */}

      <div className="relative z-10 mt-auto pt-5">

        <div className="flex items-center justify-between border-t border-white/70 pt-4">

       

        
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
     RESPONSIVE ITEMS
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
     EMPTY STATE
  ======================================================= */

  if (!instructors.length) {
    return (
      <div className="mt-12 flex min-h-[250px] items-center justify-center rounded-[24px] border border-white/70 bg-white/40 backdrop-blur-xl">

        <p className="text-sm text-slate-500">
          No instructors available.
        </p>

      </div>
    );
  }

  /* =======================================================
     MAX SLIDE INDEX
  ======================================================= */

  const maxIndex = Math.max(
    0,
    instructors.length -
      itemsPerView
  );

  /* =======================================================
     KEEP INDEX VALID
  ======================================================= */

  useEffect(() => {
    if (
      currentIndex > maxIndex
    ) {
      setCurrentIndex(maxIndex);
    }
  }, [
    currentIndex,
    maxIndex,
  ]);

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
     TRANSLATION
  ======================================================= */

  const translateX =
    currentIndex *
    (100 / itemsPerView);

  /* =======================================================
     DOT COUNT
  ======================================================= */

  const dotCount =
    maxIndex + 1;

  return (
    <div className="relative mt-12">

      {/* =================================================
          VIEWPORT
      ================================================== */}

      <div className="overflow-hidden px-1 py-3">

        {/* =================================================
            TRACK
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
                className="shrink-0 px-2 sm:px-3"
                style={{
                  width: `${100 / itemsPerView}%`,
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
          CONTROLS
      ================================================== */}

      {instructors.length >
        itemsPerView && (
        <div className="mt-7 flex items-center justify-center gap-5">

          {/* Previous */}

          <button
            type="button"
            onClick={
              previousSlide
            }
            aria-label="Previous instructors"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/70 text-slate-600 shadow-[0_8px_25px_rgba(70,90,140,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:bg-white hover:shadow-lg"
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
                  aria-label={`Go to instructor slide ${
                    index + 1
                  }`}
                  onClick={() =>
                    setCurrentIndex(
                      index
                    )
                  }
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex ===
                    index
                      ? "w-7 bg-[#485DAC]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              )
            )}

          </div>

          {/* Next */}

          <button
            type="button"
            onClick={
              nextSlide
            }
            aria-label="Next instructors"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/70 text-slate-600 shadow-[0_8px_25px_rgba(70,90,140,0.12)] backdrop-blur-xl transition-all duration-300 hover:translate-x-1 hover:bg-white hover:shadow-lg"
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