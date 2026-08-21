"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Play } from "lucide-react";

// A well-known public YouTube demo video (Google's own official API-demo
// clip, meant to be embedded) — used as placeholder playback for every
// dummy video card until real GetUpSkill videos replace this data.
const DEMO_VIDEO_ID = "M7lc1UVf-VE";

export default function VideoCard({ video, accent, dark = false }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article
      className={`group overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
        dark
          ? "border border-white/10 bg-white/5 backdrop-blur hover:border-white/20"
          : "border border-slate-200 bg-white"
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${DEMO_VIDEO_ID}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="relative flex h-full w-full items-center justify-center"
            aria-label={`Play ${video.title}`}
          >
            {video.thumbnail ? (
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{ backgroundImage: `linear-gradient(135deg, ${accent}, #0f172a 160%)` }}
              />
            )}
            {/* Darken slightly so the white play button stays legible on any thumbnail */}
            <div className="absolute inset-0 bg-slate-950/25 transition-colors duration-300 group-hover:bg-slate-950/35" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg ring-4 ring-white/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-500">
              <Play size={22} className="ml-1 text-white" fill="currentColor" />
            </div>
            <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-[11px] font-semibold text-white">
              {video.duration}
            </span>
          </button>
        )}
      </div>

      <div className="p-5">
        <span
          className="w-fit rounded-full px-2.5 py-1 text-xs font-semibold"
          style={{ backgroundColor: `${accent}1a`, color: accent }}
        >
          {video.category}
        </span>
        <h2 className={`mt-2 font-bold leading-snug ${dark ? "text-white" : "text-slate-900"}`}>
          {video.title}
        </h2>
        <div className={`mt-2 flex items-center gap-1 text-xs ${dark ? "text-white/50" : "text-slate-500"}`}>
          <Eye size={12} /> {video.views}
        </div>
      </div>
    </article>
  );
}
