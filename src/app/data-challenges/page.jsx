"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  Database,
  Flame,
  GitBranch,
  LineChart,
  Medal,
  Play,
  Search,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
  X,
  TrendingUp,
  CircleDot,
  Layers3,
  Activity,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const challenges = [
  {
    id: 1,
    title: "Sales Data Detective",
    description:
      "Analyze sales records and identify the products responsible for the biggest revenue changes.",
    category: "Data Analysis",
    difficulty: "Intermediate",
    duration: "25 min",
    points: 250,
    participants: 4820,
    progress: 72,
    icon: BarChart3,
    gradient: "from-violet-500 to-fuchsia-500",
    lightGradient: "from-violet-50 to-fuchsia-50",
    skills: ["Pandas", "Analysis", "Charts"],
  },
  {
    id: 2,
    title: "Clean the Dataset",
    description:
      "Find missing values, duplicate records and inconsistent data in a customer dataset.",
    category: "Python",
    difficulty: "Beginner",
    duration: "15 min",
    points: 150,
    participants: 7234,
    progress: 35,
    icon: Code2,
    gradient: "from-blue-500 to-cyan-400",
    lightGradient: "from-blue-50 to-cyan-50",
    skills: ["Python", "Pandas", "Cleaning"],
  },
  {
    id: 3,
    title: "SQL Mystery",
    description:
      "Use advanced SQL queries to discover which customers generated the highest lifetime value.",
    category: "SQL",
    difficulty: "Advanced",
    duration: "40 min",
    points: 400,
    participants: 3156,
    progress: 18,
    icon: Database,
    gradient: "from-orange-500 to-rose-500",
    lightGradient: "from-orange-50 to-rose-50",
    skills: ["SQL", "Joins", "CTE"],
  },
  {
    id: 4,
    title: "Customer Churn Explorer",
    description:
      "Explore customer behavior and identify the strongest indicators of churn.",
    category: "Machine Learning",
    difficulty: "Advanced",
    duration: "50 min",
    points: 500,
    participants: 2841,
    progress: 0,
    icon: BrainCircuit,
    gradient: "from-pink-500 to-purple-500",
    lightGradient: "from-pink-50 to-purple-50",
    skills: ["ML", "Python", "Statistics"],
  },
  {
    id: 5,
    title: "Dashboard Challenge",
    description:
      "Build insights from an e-commerce dataset and decide which KPIs matter most.",
    category: "Data Visualization",
    difficulty: "Intermediate",
    duration: "30 min",
    points: 300,
    participants: 4128,
    progress: 64,
    icon: LineChart,
    gradient: "from-emerald-500 to-teal-400",
    lightGradient: "from-emerald-50 to-teal-50",
    skills: ["Charts", "KPIs", "Insights"],
  },
  {
    id: 6,
    title: "Python Logic Sprint",
    description:
      "Solve a collection of Python data-processing problems against the clock.",
    category: "Python",
    difficulty: "Beginner",
    duration: "20 min",
    points: 200,
    participants: 8932,
    progress: 90,
    icon: GitBranch,
    gradient: "from-indigo-500 to-blue-400",
    lightGradient: "from-indigo-50 to-blue-50",
    skills: ["Python", "Logic", "Loops"],
  },
];

const leaderboard = [
  {
    rank: 1,
    name: "Aarav Sharma",
    points: "12,850",
    challenges: 86,
    streak: 31,
    initials: "AS",
  },
  {
    rank: 2,
    name: "Priya Patel",
    points: "11,940",
    challenges: 79,
    streak: 27,
    initials: "PP",
  },
  {
    rank: 3,
    name: "Rahul Verma",
    points: "10,720",
    challenges: 72,
    streak: 24,
    initials: "RV",
  },
  {
    rank: 4,
    name: "Neha Joshi",
    points: "9,860",
    challenges: 68,
    streak: 19,
    initials: "NJ",
  },
  {
    rank: 5,
    name: "Vikram Singh",
    points: "9,420",
    challenges: 64,
    streak: 17,
    initials: "VS",
  },
];

const categories = [
  "All",
  "Data Analysis",
  "Python",
  "SQL",
  "Machine Learning",
  "Data Visualization",
];

const difficulties = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

const stats = [
  {
    label: "Challenges",
    value: "120+",
    icon: Target,
  },
  {
    label: "Total Attempts",
    value: "35K+",
    icon: Users,
  },
  {
    label: "Categories",
    value: "08",
    icon: Database,
  },
  {
    label: "XP Earned",
    value: "2.4M",
    icon: Zap,
  },
];

/* =========================================================
   HELPERS
========================================================= */

function getDifficultyStyle(difficulty) {
  if (difficulty === "Beginner") {
    return "border-emerald-200 bg-emerald-50 text-emerald-600";
  }

  if (difficulty === "Intermediate") {
    return "border-amber-200 bg-amber-50 text-amber-600";
  }

  return "border-rose-200 bg-rose-50 text-rose-600";
}

/* =========================================================
   3D HERO VISUAL
========================================================= */

function Data3DVisual() {
  return (
    <div className="relative mx-auto h-[390px] w-full max-w-[520px] [perspective:1200px]">
      {/* Main 3D platform */}
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[330px] -translate-x-1/2 -translate-y-1/2 rotate-x-[55deg] rotate-z-[-8deg] rounded-[30px] border border-violet-200 bg-white/80 shadow-[0_35px_80px_rgba(124,58,237,0.18)] backdrop-blur-xl animate-platform">
        <div className="absolute inset-5 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50">
          {/* chart bars */}
          <div className="absolute bottom-8 left-8 flex h-28 items-end gap-2">
            {[35, 55, 45, 75, 95, 65].map((height, index) => (
              <div
                key={index}
                className="w-6 rounded-t-lg bg-gradient-to-t from-violet-500 to-fuchsia-400 shadow-lg shadow-violet-200"
                style={{
                  height: `${height}px`,
                  animationDelay: `${index * 0.15}s`,
                }}
              />
            ))}
          </div>

          {/* line */}
          <svg
            className="absolute right-5 top-7 h-28 w-40 overflow-visible"
            viewBox="0 0 160 100"
            fill="none"
          >
            <path
              d="M5 80 C25 65, 35 72, 50 50 S75 70, 90 38 S120 45, 155 10"
              stroke="url(#heroGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              className="animate-draw"
            />

            <defs>
              <linearGradient
                id="heroGradient"
                x1="0"
                y1="0"
                x2="160"
                y2="0"
              >
                <stop stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* center analytics card */}
          <div className="absolute right-5 bottom-7 rounded-2xl border border-white bg-white/90 p-3 shadow-xl">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-100">
                <TrendingUp
                  size={15}
                  className="text-violet-600"
                />
              </div>

              <div>
                <p className="text-[9px] font-medium text-slate-400">
                  Growth
                </p>

                <p className="text-sm font-bold text-slate-800">
                  +28.4%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D cards */}

      <div className="absolute left-2 top-16 animate-float-slow">
        <div className="rounded-2xl border border-white bg-white/90 p-4 shadow-[0_20px_50px_rgba(99,102,241,0.16)] backdrop-blur-xl">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-semibold text-slate-500">
              LIVE DATA
            </span>
          </div>

          <p className="text-xl font-black text-slate-800">
            84.7K
          </p>

          <p className="text-[10px] text-slate-400">
            Records analyzed
          </p>
        </div>
      </div>

      <div className="absolute right-0 top-8 animate-float">
        <div className="rounded-2xl border border-white bg-white/90 p-4 shadow-[0_20px_50px_rgba(236,72,153,0.14)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 text-white">
              <BrainCircuit size={19} />
            </div>

            <div>
              <p className="text-[10px] text-slate-400">
                AI MODEL
              </p>
              <p className="text-sm font-bold text-slate-800">
                96.8%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-5 animate-float-reverse">
        <div className="flex items-center gap-3 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_20px_50px_rgba(245,158,11,0.16)] backdrop-blur-xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100">
            <Zap
              size={17}
              className="text-orange-500"
            />
          </div>

          <div>
            <p className="text-[10px] text-slate-400">
              XP EARNED
            </p>

            <p className="text-sm font-black text-slate-800">
              +2,480
            </p>
          </div>
        </div>
      </div>

      {/* Floating cubes */}
      <div className="absolute right-14 bottom-8 h-12 w-12 animate-cube">
        <div className="cube">
          <div className="cube-face cube-front" />
          <div className="cube-face cube-back" />
          <div className="cube-face cube-right" />
          <div className="cube-face cube-left" />
          <div className="cube-face cube-top" />
          <div className="cube-face cube-bottom" />
        </div>
      </div>

      <div className="absolute left-28 top-4 h-6 w-6 animate-cube-reverse">
        <div className="cube cube-small">
          <div className="cube-face cube-front" />
          <div className="cube-face cube-back" />
          <div className="cube-face cube-right" />
          <div className="cube-face cube-left" />
          <div className="cube-face cube-top" />
          <div className="cube-face cube-bottom" />
        </div>
      </div>

      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/20 blur-[90px]" />
    </div>
  );
}

/* =========================================================
   CHALLENGE CARD
========================================================= */

function ChallengeCard({ challenge, onStart }) {
  const Icon = challenge.icon;

  return (
    <article className="group relative overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_25px_60px_rgba(124,58,237,0.12)]">
      {/* top gradient */}
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${challenge.gradient}`}
      />

      {/* hover glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${challenge.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
      />

      <div className="relative">
        <div className="mb-5 flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${challenge.gradient} shadow-lg`}
          >
            <Icon
              size={21}
              className="text-white"
            />
          </div>

          <span
            className={`rounded-full border px-3 py-1 text-[11px] font-bold ${getDifficultyStyle(
              challenge.difficulty
            )}`}
          >
            {challenge.difficulty}
          </span>
        </div>

        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-500">
          {challenge.category}
        </p>

        <h3 className="text-xl font-black tracking-tight text-slate-900">
          {challenge.title}
        </h3>

        <p className="mt-2 min-h-[52px] text-sm leading-6 text-slate-500">
          {challenge.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {challenge.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-100"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {challenge.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <Users size={14} />
            {challenge.participants.toLocaleString()}
          </span>

          <span className="flex items-center gap-1.5 font-bold text-orange-500">
            <Zap size={14} />
            +{challenge.points}
          </span>
        </div>

        {challenge.progress > 0 && (
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-400">
                Your progress
              </span>

              <span className="font-bold text-slate-700">
                {challenge.progress}%
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div
                style={{
                  width: `${challenge.progress}%`,
                }}
                className={`h-full rounded-full bg-gradient-to-r ${challenge.gradient} transition-all duration-1000`}
              />
            </div>
          </div>
        )}

        <button
          onClick={() => onStart(challenge)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition-all hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-white"
        >
          {challenge.progress > 0
            ? "Continue Challenge"
            : "Start Challenge"}

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function DataChallengesPage() {
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [search, setSearch] = useState("");

  const [showDifficulty, setShowDifficulty] =
    useState(false);

  const [showCategories, setShowCategories] =
    useState(false);

  const [selectedChallenge, setSelectedChallenge] =
    useState(null);

  const filteredChallenges = useMemo(() => {
    return challenges.filter((challenge) => {
      const categoryMatch =
        category === "All" ||
        challenge.category === category;

      const difficultyMatch =
        difficulty === "All" ||
        challenge.difficulty === difficulty;

      const searchValue = search.toLowerCase();

      const searchMatch =
        challenge.title
          .toLowerCase()
          .includes(searchValue) ||
        challenge.description
          .toLowerCase()
          .includes(searchValue) ||
        challenge.skills.some((skill) =>
          skill.toLowerCase().includes(searchValue)
        );

      return (
        categoryMatch &&
        difficultyMatch &&
        searchMatch
      );
    });
  }, [category, difficulty, search]);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9ff] text-slate-900">
      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-[-180px] h-[480px] w-[480px] rounded-full bg-violet-200/40 blur-[120px]" />

        <div className="absolute right-[-150px] top-[20%] h-[450px] w-[450px] rounded-full bg-pink-200/30 blur-[120px]" />

        <div className="absolute bottom-[-200px] left-[30%] h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[130px]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,.055) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
              <span>LMS</span>

              <span>/</span>

              <span className="font-semibold text-violet-500">
                Data Challenges
              </span>
            </div>

            <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Data Challenges
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Learn by solving real-world data problems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-2.5">
              <Flame
                size={18}
                className="text-orange-500"
              />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-orange-400">
                  Streak
                </p>

                <p className="text-sm font-black text-orange-600">
                  12 Days
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-violet-200 bg-violet-50 px-4 py-2.5">
              <Zap
                size={18}
                className="text-violet-500"
              />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-400">
                  XP
                </p>

                <p className="text-sm font-black text-violet-600">
                  4,280
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative mb-12 overflow-hidden rounded-[36px] border border-violet-100 bg-white shadow-[0_25px_80px_rgba(124,58,237,0.08)]">
          {/* background blobs */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-violet-100/70 blur-3xl" />

          <div className="pointer-events-none absolute bottom-[-120px] left-[25%] h-80 w-80 rounded-full bg-pink-100/60 blur-3xl" />

          <div className="relative grid items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-14 lg:py-12">
            {/* Left */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold text-violet-600">
                <Sparkles size={14} />
                Practice. Compete. Master Data.
              </div>

              <h2 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Turn your data skills
                <span className="mt-1 block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                  into real results.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Solve realistic data problems, improve your
                analytical thinking, earn XP and compete with
                learners around the world.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    scrollTo("challenge-list")
                  }
                  className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Explore Challenges

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <button
                  onClick={() =>
                    scrollTo("leaderboard")
                  }
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-600"
                >
                  <Trophy size={17} />
                  Leaderboard
                </button>
              </div>

              {/* Mini trust row */}
              <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-500"
                  />
                  Real-world datasets
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-500"
                  />
                  Instant XP
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-500"
                  />
                  Skill based
                </div>
              </div>
            </div>

            {/* 3D Visual */}
            <Data3DVisual />
          </div>

          {/* =================================================
              STATS
          ================================================= */}

          <div className="grid grid-cols-2 gap-3 border-t border-slate-100 bg-slate-50/60 p-5 md:grid-cols-4 lg:px-10">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50">
                    <Icon
                      size={17}
                      className="text-violet-600"
                    />
                  </div>

                  <p className="text-xl font-black text-slate-900">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            CHALLENGE OF THE DAY
        ===================================================== */}

        <section className="mb-12">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-500">
                Featured
              </p>

              <h2 className="text-2xl font-black text-slate-900">
                Challenge of the Day
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-xs font-bold text-orange-600">
              <Clock3 size={14} />
              08:42:16
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-blue-50 p-6 shadow-sm sm:p-8">
            <div className="absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-600">
                    SQL
                  </span>

                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-600">
                    Advanced
                  </span>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-600">
                    +500 XP
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                  Find the Hidden Revenue Pattern
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Query a large e-commerce database and
                  identify the hidden relationship between
                  customer behavior, product categories and
                  revenue.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-5 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Users size={15} />
                    2,481 participants
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={15} />
                    35 minutes
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Star
                      size={15}
                      className="text-amber-400"
                    />
                    4.9 difficulty rating
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedChallenge({
                    title:
                      "Find the Hidden Revenue Pattern",
                    category: "SQL",
                    points: 500,
                    duration: "35 min",
                  })
                }
                className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-violet-600"
              >
                <Play
                  size={16}
                  fill="currentColor"
                />
                Start Challenge
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            CHALLENGE LIBRARY
        ===================================================== */}

        <section
          id="challenge-list"
          className="scroll-mt-8"
        >
          <div className="mb-6">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-500">
              Challenge Library
            </p>

            <h2 className="text-2xl font-black text-slate-900">
              Choose your next challenge
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Build practical skills through interactive
              challenges.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-5 flex flex-col gap-3 lg:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search challenges, skills..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800 shadow-sm outline-none placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {/* Category */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowCategories(
                    !showCategories
                  );
                  setShowDifficulty(false);
                }}
                className="flex w-full items-center justify-between gap-5 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-600 shadow-sm lg:min-w-[200px]"
              >
                {category}

                <ChevronDown size={16} />
              </button>

              {showCategories && (
                <div className="absolute left-0 top-[calc(100%+8px)] z-30 w-full min-w-[220px] rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                  {categories.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setCategory(item);
                        setShowCategories(false);
                      }}
                      className={`w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                        category === item
                          ? "bg-violet-50 text-violet-600"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Difficulty */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowDifficulty(
                    !showDifficulty
                  );
                  setShowCategories(false);
                }}
                className="flex w-full items-center justify-between gap-5 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-600 shadow-sm lg:min-w-[170px]"
              >
                {difficulty}

                <ChevronDown size={16} />
              </button>

              {showDifficulty && (
                <div className="absolute right-0 top-[calc(100%+8px)] z-30 w-full min-w-[180px] rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                  {difficulties.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setDifficulty(item);
                        setShowDifficulty(false);
                      }}
                      className={`w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                        difficulty === item
                          ? "bg-violet-50 text-violet-600"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category pills */}
          <div className="mb-7 flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold transition ${
                  category === item
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-200"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-violet-200 hover:text-violet-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Cards */}
          {filteredChallenges.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredChallenges.map(
                (challenge) => (
                  <ChallengeCard
                    key={challenge.id}
                    challenge={challenge}
                    onStart={setSelectedChallenge}
                  />
                )
              )}
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white p-16 text-center shadow-sm">
              <Search
                size={35}
                className="mx-auto mb-4 text-slate-300"
              />

              <h3 className="text-lg font-black text-slate-800">
                No challenges found
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </section>

        {/* =====================================================
            PROGRESS
        ===================================================== */}

        <section className="mt-14 grid gap-5 lg:grid-cols-[1fr_.75fr]">
          {/* Journey */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-500">
                  Your Journey
                </p>

                <h2 className="text-xl font-black text-slate-900">
                  Challenge Progress
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50">
                <Award className="text-violet-600" />
              </div>
            </div>

            <div className="space-y-7">
              {[
                ["Beginner", 85, "42 / 50"],
                ["Intermediate", 58, "29 / 50"],
                ["Advanced", 22, "11 / 50"],
              ].map(
                ([name, percentage, count]) => (
                  <div key={name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-bold text-slate-700">
                        {name}
                      </span>

                      <span className="text-xs font-medium text-slate-400">
                        {count}
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        style={{
                          width: `${percentage}%`,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-1000"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Streak */}
          <div className="relative overflow-hidden rounded-[28px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-sm sm:p-8">
            <div className="absolute right-[-60px] top-[-60px] h-44 w-44 rounded-full bg-orange-200/40 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                <Flame className="text-orange-500" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Current Streak
              </p>

              <h2 className="mt-2 text-4xl font-black text-slate-900">
                12
                <span className="ml-2 text-base font-bold text-slate-400">
                  days
                </span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Complete one challenge today to keep your
                streak alive and unlock a new achievement.
              </p>

              <div className="mt-7 flex items-center gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map(
                  (day) => (
                    <div
                      key={day}
                      className={`h-2.5 flex-1 rounded-full ${
                        day <= 6
                          ? "bg-gradient-to-r from-orange-400 to-amber-400"
                          : "bg-orange-100"
                      }`}
                    />
                  )
                )}
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-orange-600">
                <CheckCircle2 size={15} />
                6 of 7 weekly goals completed
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LEADERBOARD
        ===================================================== */}

        <section
          id="leaderboard"
          className="mt-14 scroll-mt-8"
        >
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-500">
                Competition
              </p>

              <h2 className="text-2xl font-black text-slate-900">
                Global Leaderboard
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                See who is leading the challenge.
              </p>
            </div>

            <button className="hidden items-center gap-2 text-sm font-bold text-violet-600 sm:flex">
              View Full Leaderboard
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            {/* Top 3 */}
            <div className="grid gap-4 border-b border-slate-100 p-6 md:grid-cols-3">
              {leaderboard
                .slice(0, 3)
                .map((user) => (
                  <div
                    key={user.rank}
                    className={`relative overflow-hidden rounded-2xl border p-5 text-center transition hover:-translate-y-1 hover:shadow-lg ${
                      user.rank === 1
                        ? "border-amber-200 bg-gradient-to-b from-amber-50 to-white"
                        : "border-slate-100 bg-slate-50/60"
                    }`}
                  >
                    {user.rank === 1 && (
                      <div className="absolute right-3 top-3">
                        <Trophy
                          size={18}
                          className="text-amber-500"
                        />
                      </div>
                    )}

                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-black text-white shadow-lg shadow-violet-100">
                      {user.initials}
                    </div>

                    <p className="font-black text-slate-800">
                      {user.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Rank #{user.rank}
                    </p>

                    <p className="mt-4 text-2xl font-black text-slate-900">
                      {user.points}
                    </p>

                    <p className="text-xs font-bold text-violet-500">
                      XP
                    </p>
                  </div>
                ))}
            </div>

            {/* Remaining */}
            <div>
              {leaderboard
                .slice(3)
                .map((user) => (
                  <div
                    key={user.rank}
                    className="flex items-center gap-4 border-b border-slate-100 px-5 py-4 last:border-0"
                  >
                    <span className="w-6 text-sm font-black text-slate-400">
                      #{user.rank}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-50 text-xs font-black text-violet-600">
                      {user.initials}
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-800">
                        {user.name}
                      </p>

                      <p className="text-xs text-slate-400">
                        {user.challenges} challenges completed
                      </p>
                    </div>

                    <div className="hidden items-center gap-1 text-xs font-bold text-orange-500 sm:flex">
                      <Flame size={14} />
                      {user.streak}
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-black text-slate-800">
                        {user.points}
                      </p>

                      <p className="text-[10px] font-semibold text-slate-400">
                        XP
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="relative mt-14 overflow-hidden rounded-[30px] border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-pink-50 p-8 text-center shadow-sm sm:p-12">
          <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
              <Sparkles className="text-violet-600" />
            </div>

            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Ready for your next challenge?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Challenge yourself, improve your skills and
              climb the leaderboard one problem at a time.
            </p>

            <button
              onClick={() =>
                scrollTo("challenge-list")
              }
              className="mt-6 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-1"
            >
              Start Practicing
            </button>
          </div>
        </section>
      </div>

      {/* =====================================================
          MODAL
      ===================================================== */}

      {selectedChallenge && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-md"
          onClick={() =>
            setSelectedChallenge(null)
          }
        >
          <div
            className="w-full max-w-lg rounded-[28px] border border-white bg-white p-6 shadow-[0_30px_100px_rgba(15,23,42,0.2)] sm:p-8 animate-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div className="mb-6 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50">
                <Code2 className="text-violet-600" />
              </div>

              <button
                onClick={() =>
                  setSelectedChallenge(null)
                }
                className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-800"
              >
                <X size={19} />
              </button>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500">
              {selectedChallenge.category}
            </p>

            <h3 className="mt-2 text-2xl font-black text-slate-900">
              {selectedChallenge.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Your challenge environment is ready. Solve
              the problem, submit your answer and earn XP.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-slate-50 p-3 text-center">
                <Clock3
                  size={16}
                  className="mx-auto mb-2 text-slate-400"
                />

                <p className="text-xs text-slate-400">
                  Time
                </p>

                <p className="mt-1 text-sm font-black text-slate-800">
                  {selectedChallenge.duration ||
                    "30 min"}
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-3 text-center">
                <Zap
                  size={16}
                  className="mx-auto mb-2 text-orange-500"
                />

                <p className="text-xs text-slate-400">
                  Reward
                </p>

                <p className="mt-1 text-sm font-black text-slate-800">
                  +{selectedChallenge.points} XP
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50 p-3 text-center">
                <Target
                  size={16}
                  className="mx-auto mb-2 text-violet-500"
                />

                <p className="text-xs text-slate-400">
                  Attempts
                </p>

                <p className="mt-1 text-sm font-black text-slate-800">
                  3
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                alert(
                  `Challenge started: ${selectedChallenge.title}`
                );

                setSelectedChallenge(null);
              }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5"
            >
              <Play
                size={16}
                fill="currentColor"
              />
              Start Challenge
            </button>
          </div>
        </div>
      )}

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx global>{`
        @keyframes platformFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) rotateX(55deg)
              rotateZ(-8deg) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) rotateX(55deg)
              rotateZ(-8deg) translateY(-10px);
          }
        }

        @keyframes floating {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-13px);
          }
        }

        @keyframes floatingReverse {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(10px) rotate(2deg);
          }
        }

        @keyframes cubeRotate {
          0% {
            transform: rotateX(-25deg) rotateY(25deg);
          }

          50% {
            transform: rotateX(25deg) rotateY(205deg);
          }

          100% {
            transform: rotateX(-25deg) rotateY(385deg);
          }
        }

        @keyframes cubeRotateReverse {
          0% {
            transform: rotateX(25deg) rotateY(25deg);
          }

          50% {
            transform: rotateX(-25deg) rotateY(-155deg);
          }

          100% {
            transform: rotateX(25deg) rotateY(-335deg);
          }
        }

        @keyframes drawLine {
          from {
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
          }

          to {
            stroke-dasharray: 500;
            stroke-dashoffset: 0;
          }
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-platform {
          animation: platformFloat 7s ease-in-out infinite;
        }

        .animate-float {
          animation: floating 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floating 5.5s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: floatingReverse 4.5s ease-in-out infinite;
        }

        .animate-cube {
          perspective: 600px;
          animation: floating 4s ease-in-out infinite;
        }

        .animate-cube-reverse {
          perspective: 600px;
          animation: floatingReverse 5s ease-in-out infinite;
        }

        .animate-draw {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: drawLine 2.5s ease-out forwards;
        }

        .animate-modal {
          animation: modalIn 0.25s ease-out forwards;
        }

        .cube {
          position: relative;
          width: 48px;
          height: 48px;
          transform-style: preserve-3d;
          animation: cubeRotate 8s linear infinite;
        }

        .cube-small {
          width: 24px;
          height: 24px;
        }

        .cube-face {
          position: absolute;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(124, 58, 237, 0.25);
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.8),
            rgba(236, 72, 153, 0.65)
          );
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
        }

        .cube-small .cube-face {
          width: 24px;
          height: 24px;
        }

        .cube-front {
          transform: translateZ(24px);
        }

        .cube-back {
          transform: rotateY(180deg) translateZ(24px);
        }

        .cube-right {
          transform: rotateY(90deg) translateZ(24px);
        }

        .cube-left {
          transform: rotateY(-90deg) translateZ(24px);
        }

        .cube-top {
          transform: rotateX(90deg) translateZ(24px);
        }

        .cube-bottom {
          transform: rotateX(-90deg) translateZ(24px);
        }

        .cube-small .cube-front {
          transform: translateZ(12px);
        }

        .cube-small .cube-back {
          transform: rotateY(180deg) translateZ(12px);
        }

        .cube-small .cube-right {
          transform: rotateY(90deg) translateZ(12px);
        }

        .cube-small .cube-left {
          transform: rotateY(-90deg) translateZ(12px);
        }

        .cube-small .cube-top {
          transform: rotateX(90deg) translateZ(12px);
        }

        .cube-small .cube-bottom {
          transform: rotateX(-90deg) translateZ(12px);
        }

        @media (max-width: 1023px) {
          .animate-platform {
            animation: platformFloat 7s ease-in-out infinite;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-platform,
          .animate-float,
          .animate-float-slow,
          .animate-float-reverse,
          .animate-cube,
          .animate-cube-reverse,
          .animate-draw {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}