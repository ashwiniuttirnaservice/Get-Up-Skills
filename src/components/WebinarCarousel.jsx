"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Users,
} from "lucide-react";

/* =========================================================
   WEBINAR CARD
========================================================= */

function WebinarCard({
  webinar,
  index,
}) {
  return (
    <article
      className="group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[22px] border border-white/80 bg-white/55 shadow-[0_18px_50px_rgba(75,95,150,0.10)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/75 hover:shadow-[0_28px_70px_rgba(75,95,150,0.18)]"
    >

      {/* =================================================
          TOP ACCENT
      ================================================== */}

      <div
        className="absolute left-0 right-0 top-0 z-20 h-[4px]"
        style={{
          backgroundColor:
            webinar.accent,
        }}
      />

      {/* =================================================
          IMAGE
      ================================================== */}

      <div className="relative h-[205px] overflow-hidden">

        <img
          src={webinar.image}
          alt={webinar.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#111735]/60 via-transparent to-transparent" />

        {/* Status */}

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-slate-700 shadow-lg backdrop-blur-xl">

          <span
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor:
                webinar.accent,
            }}
          />

          UPCOMING

        </div>

        {/* Category */}

        <div className="absolute bottom-4 left-4 rounded-full bg-black/25 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md">
          {webinar.category}
        </div>

      </div>

      {/* =================================================
          CONTENT
      ================================================== */}

      <div className="flex flex-1 flex-col p-5">

        {/* Title */}

        <h3 className="line-clamp-2 text-[19px] font-extrabold leading-6 tracking-tight text-[#111827]">
          {webinar.title}
        </h3>

        {/* Description */}

        <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-slate-500">
          {webinar.description}
        </p>

        {/* Date / Time */}

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-slate-500">

          <span className="inline-flex items-center gap-1.5">
            <CalendarDays
              className="h-3.5 w-3.5"
              style={{
                color:
                  webinar.accent,
              }}
            />
            {webinar.date}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3
              className="h-3.5 w-3.5"
              style={{
                color:
                  webinar.accent,
              }}
            />
            {webinar.time}
          </span>

        </div>

        {/* Speaker */}

        <div className="mt-4 flex items-center gap-3">

          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
            style={{
              backgroundColor:
                webinar.accent,
            }}
          >
            {webinar.speaker
              .split(" ")
              .map(
                (name) =>
                  name[0]
              )
              .join("")
              .slice(0, 2)}
          </div>

          <div>

            <p className="text-[12px] font-bold text-slate-800">
              {webinar.speaker}
            </p>

            <p className="text-[10px] text-slate-400">
              {webinar.role}
            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-auto pt-5">

          <div className="border-t border-white/80 pt-4">

            <div className="flex items-center justify-between">

              <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-400">

                <Clock3 className="h-3.5 w-3.5" />

                {webinar.duration}

              </span>

              <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-400">

                <Users className="h-3.5 w-3.5" />

                Live Session

              </span>

            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3 text-[12px] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                backgroundColor:
                  webinar.accent,
              }}
            >
              Register Now

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

        </div>

      </div>

    </article>
  );
}

/* =========================================================
   WEBINAR CAROUSEL
========================================================= */

export default function WebinarCarousel({
  webinars = [],
}) {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [itemsPerView, setItemsPerView] =
    useState(1);

  /* =======================================================
     RESPONSIVE ITEMS
  ======================================================= */

  useEffect(() => {
    const updateItems = () => {
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

    updateItems();

    window.addEventListener(
      "resize",
      updateItems
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateItems
      );
    };
  }, []);

  /* =======================================================
     EMPTY STATE
  ======================================================= */

  if (!webinars.length) {
    return (
      <div className="mt-12 flex min-h-[250px] items-center justify-center rounded-[24px] border border-white/70 bg-white/40 backdrop-blur-xl">

        <p className="text-sm text-slate-500">
          No upcoming webinars available.
        </p>

      </div>
    );
  }

  /* =======================================================
     MAX INDEX
  ======================================================= */

  const maxIndex = Math.max(
    0,
    webinars.length -
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
     NEXT
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
     PREVIOUS
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
      webinars.length <=
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
    webinars.length,
    itemsPerView,
    maxIndex,
  ]);

  /* =======================================================
     TRANSLATE
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
    <div className="relative mt-10">

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

          {webinars.map(
            (
              webinar,
              index
            ) => (
              <div
                key={webinar.id}
                className="shrink-0 px-2 sm:px-3"
                style={{
                  width: `${100 / itemsPerView}%`,
                }}
              >

                <WebinarCard
                  webinar={webinar}
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

      {webinars.length >
        itemsPerView && (
        <div className="mt-7 flex items-center justify-center gap-5">

          {/* Previous */}

          <button
            type="button"
            onClick={
              previousSlide
            }
            aria-label="Previous webinars"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/70 text-slate-600 shadow-[0_8px_25px_rgba(70,90,140,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:bg-white hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Dots */}

          <div className="flex items-center gap-2">

            {Array.from({
              length: dotCount,
            }).map(
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to webinar slide ${
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
            aria-label="Next webinars"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/70 text-slate-600 shadow-[0_8px_25px_rgba(70,90,140,0.12)] backdrop-blur-xl transition-all duration-300 hover:translate-x-1 hover:bg-white hover:shadow-lg"
          >
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>

        </div>
      )}

      {/* =================================================
          COUNT
      ================================================== */}

      <div className="mt-3 text-center">

        <span className="text-[10px] font-semibold tracking-[0.18em] text-slate-400">
          {webinars.length} UPCOMING
          WEBINARS
        </span>

      </div>

    </div>
  );
}
