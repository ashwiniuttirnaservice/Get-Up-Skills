
"use client";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Play,
  Sparkles,
  Users,
  Award,
  MessageCircle,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Trophy,
  Flame,
  Zap,
} from "lucide-react";

import WebinarCarousel from "@/components/WebinarCarousel";

/* =========================================================
   DUMMY WEBINAR DATA
========================================================= */

const upcomingWebinars = [
  {
    id: 1,
    title: "Mastering Modern React & Next.js",
    description:
      "Learn how to build scalable, production-ready applications using modern React and Next.js.",
    speaker: "Rahul Sharma",
    role: "Senior Frontend Engineer",
    date: "Aug 28, 2026",
    time: "7:00 PM",
    duration: "90 min",
    category: "Development",
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    accent: "#53B8EC",
  },
  {
    id: 2,
    title: "AI for Modern Developers",
    description:
      "Discover how developers can use Generative AI to build smarter applications and improve productivity.",
    speaker: "Amit Patil",
    role: "AI Solutions Architect",
    date: "Sep 05, 2026",
    time: "6:30 PM",
    duration: "75 min",
    category: "AI & ML",
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    accent: "#485DAC",
  },
  {
    id: 3,
    title: "Crack Your Next Tech Interview",
    description:
      "Practical strategies, interview preparation techniques, and real-world questions from industry experts.",
    speaker: "Sneha Kulkarni",
    role: "Technical Interview Coach",
    date: "Sep 10, 2026",
    time: "7:30 PM",
    duration: "60 min",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    accent: "#E9577C",
  },
  {
    id: 4,
    title: "Building Your Professional Brand",
    description:
      "Learn how to build a strong LinkedIn profile, portfolio, and personal brand that gets noticed.",
    speaker: "Priya Mehta",
    role: "Career Strategist",
    date: "Sep 15, 2026",
    time: "6:00 PM",
    duration: "60 min",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    accent: "#C7DA40",
  },
  {
    id: 5,
    title: "Node.js Backend Architecture",
    description:
      "Understand how to structure scalable Node.js and Express applications for real-world projects.",
    speaker: "Vikram Joshi",
    role: "Backend Architect",
    date: "Sep 20, 2026",
    time: "7:00 PM",
    duration: "90 min",
    category: "Development",
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    accent: "#53B8EC",
  },
  {
    id: 6,
    title: "From Skills to Career Growth",
    description:
      "A practical session on transforming your technical skills into long-term career opportunities.",
    speaker: "Neha Shah",
    role: "Career Growth Mentor",
    date: "Sep 25, 2026",
    time: "6:30 PM",
    duration: "60 min",
    category: "Business",
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    accent: "#485DAC",
  },
];

/* =========================================================
   WORKSHOPS
========================================================= */

const workshopsData = [
  {
    id: 201,
    title: "Full-Stack Dashboard with Tailwind & Next.js",
    description:
      "A hands-on weekend sprint building a production-grade analytics dashboard from scratch.",
    speaker: "Karan Verma",
    role: "Lead UI Engineer",
    date: "Aug 30, 2026",
    time: "3:00 PM",
    duration: "3 Hours",
    category: "Hands-On Workshop",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    accent: "#53B8EC",
  },
  {
    id: 202,
    title: "Building AI Chatbots with OpenAI APIs",
    description:
      "Code along and deploy your custom-context AI assistant using Node.js and LLM integrations.",
    speaker: "Tanvi Deshmukh",
    role: "AI Developer Advocate",
    date: "Sep 06, 2026",
    time: "4:00 PM",
    duration: "3.5 Hours",
    category: "Hands-On Workshop",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    accent: "#485DAC",
  },
];

/* =========================================================
   HACKATHONS
========================================================= */

const hackathonsData = [
  {
    id: 301,
    title: "GenAI Global Hackathon 2026",
    description:
      "Build revolutionary AI agents and productivity apps in 48 hours. Compete globally for grand cash prizes and mentorship.",
    prize: "$5,000 Prize Pool",
    deadline: "Starts Sep 12, 2026",
    teamSize: "1 - 4 Members",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    status: "Registration Open",
  },
  {
    id: 302,
    title: "Web3 & Cloud Infra Sprint",
    description:
      "Design decentralized apps and lightning-fast cloud backend services with live industry reviewer panels.",
    prize: "$3,500 Prize Pool",
    deadline: "Starts Sep 26, 2026",
    teamSize: "2 - 3 Members",
    category: "Cloud & Web3",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    status: "Coming Soon",
  },
];

/* =========================================================
   PAST WEBINARS
========================================================= */

const pastWebinars = [
  {
    id: 101,
    title: "Getting Started With Full Stack Development",
    speaker: "Rahul Sharma",
    date: "Jul 18, 2026",
    duration: "80 min",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 102,
    title: "How AI Is Changing Software Development",
    speaker: "Amit Patil",
    date: "Jul 25, 2026",
    duration: "70 min",
    category: "AI & ML",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 103,
    title: "Build a Career That Stands Out",
    speaker: "Sneha Kulkarni",
    date: "Aug 02, 2026",
    duration: "65 min",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Development",
  "AI & ML",
  "Career",
  "Business",
  "Design",
  "Soft Skills",
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: Users,
    title: "Learn From Experts",
    description:
      "Get practical knowledge directly from experienced industry professionals.",
    accent: "#53B8EC",
  },
  {
    icon: MessageCircle,
    title: "Interactive Sessions",
    description:
      "Ask questions, participate in discussions, and learn through live interaction.",
    accent: "#485DAC",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Focused",
    description:
      "Build skills and insights that help you grow in your professional journey.",
    accent: "#E9577C",
  },
  {
    icon: Award,
    title: "Earn Certificates",
    description:
      "Receive certificates for selected webinars and special learning events.",
    accent: "#C7DA40",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function WebinarsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f7fc]">

      {/* =====================================================
          GLOBAL AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-sky-200/35 blur-[120px]" />

        <div className="absolute -right-40 top-[400px] h-[550px] w-[550px] rounded-full bg-indigo-200/25 blur-[130px]" />

        <div className="absolute bottom-0 left-1/4 h-[400px] w-[600px] rounded-full bg-pink-200/20 blur-[130px]" />
      </div>

      {/* =====================================================
          HERO SECTION
          COMPACT / MODERN / NO LARGE BOTTOM GAP
      ====================================================== */}

   {/* =========================================================
    GETUPSKILL WEBINAR HERO — COMPLETELY NEW DESIGN
========================================================= */}
<section className="relative overflow-hidden bg-white px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-14">
  {/* Background decoration */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-sky-100/70 blur-3xl" />
    <div className="absolute right-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-3xl" />
    <div className="absolute bottom-[-200px] left-1/3 h-[400px] w-[500px] rounded-full bg-pink-100/50 blur-3xl" />

    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
        backgroundSize: "45px 45px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-7xl">

    {/* =====================================================
        TOP EVENT NAVIGATION STRIP
    ====================================================== */}
    <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 sm:px-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
          <Play className="h-4 w-4 fill-current" />
        </div>

        <div>
          <p className="text-xs font-black text-slate-900">
            GetUpSkill Live
          </p>
          <p className="text-[10px] text-slate-500">
            Learn directly from industry experts
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 sm:gap-6">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Live Events
        </span>

        <span className="hidden h-4 w-px bg-slate-200 sm:block" />

        <span className="hidden sm:inline">
          Expert Mentors
        </span>

        <span className="hidden h-4 w-px bg-slate-200 sm:block" />

        <span className="hidden sm:inline">
          Career Sessions
        </span>
      </div>
    </div>

    {/* =====================================================
        MAIN HERO
    ====================================================== */}
    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

      {/* =================================================
          LEFT CONTENT
      ================================================= */}
      <div className="relative z-10">

        {/* Small label */}
        <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-indigo-600">
          <CalendarDays className="h-3.5 w-3.5" />
          Upcoming Learning Events
        </div>

        {/* Heading */}
        <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-[70px]">
          Learn from the
          <br />

          <span className="relative inline-block">
            people building
            <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-sky-200/70" />
          </span>

          <br />

          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            what's next.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Join live webinars, practical workshops and tech events designed
          to help you learn new skills, connect with experts and accelerate
          your career.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#upcoming"
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600"
          >
            Explore Live Events
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#webinars"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600"
          >
            <Play className="h-4 w-4 fill-current text-indigo-600" />
            Watch Recordings
          </a>
        </div>

        {/* Trust / audience */}
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
            ].map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="Learner"
                className="h-8 w-8 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>

          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-black text-slate-900">
                10K+
              </span>

              <span className="text-xs font-semibold text-slate-500">
                learners
              </span>
            </div>

            <p className="text-[10px] text-slate-400">
              learning with GetUpSkill
            </p>
          </div>

          <div className="hidden h-8 w-px bg-slate-200 sm:block" />

          <div>
            <p className="text-sm font-black text-slate-900">
              50+
            </p>
            <p className="text-[10px] text-slate-400">
              expert-led sessions
            </p>
          </div>
        </div>
      </div>

      {/* =================================================
          RIGHT EVENT EXPERIENCE
      ================================================= */}
      <div className="relative">

        {/* Decorative circles */}
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-indigo-200" />
        <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full border border-pink-200" />

        {/* Main event panel */}
        <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-slate-950 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">

          {/* Top browser-like header */}
          <div className="flex items-center justify-between px-3 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full bg-white/10 px-3 py-1 text-[9px] font-bold text-slate-300">
              GETUPSKILL / LIVE
            </div>
          </div>

          {/* Event image */}
          <div className="relative overflow-hidden rounded-[22px]">
            <img
              src={upcomingWebinars[0].image}
              alt={upcomingWebinars[0].title}
              className="h-[260px] w-full object-cover sm:h-[300px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Live badge */}
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-red-500 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-white shadow-lg">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Live Event
            </div>

            {/* Category */}
            <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold text-slate-800 backdrop-blur-md">
              {upcomingWebinars[0].category}
            </div>

            {/* Event content */}
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
                Featured Session
              </p>

              <h3 className="mt-2 max-w-lg text-xl font-black leading-tight text-white sm:text-2xl">
                {upcomingWebinars[0].title}
              </h3>
            </div>
          </div>

          {/* Event information */}
          <div className="grid grid-cols-2 gap-2 p-2 pt-3 sm:grid-cols-4">

            <div className="rounded-xl bg-white/5 p-3">
              <CalendarDays className="h-4 w-4 text-sky-400" />
              <p className="mt-2 text-[9px] font-semibold text-slate-500">
                DATE
              </p>
              <p className="mt-0.5 text-[10px] font-bold text-white">
                Aug 28
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-3">
              <Clock3 className="h-4 w-4 text-purple-400" />
              <p className="mt-2 text-[9px] font-semibold text-slate-500">
                TIME
              </p>
              <p className="mt-0.5 text-[10px] font-bold text-white">
                7:00 PM
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-3">
              <Users className="h-4 w-4 text-pink-400" />
              <p className="mt-2 text-[9px] font-semibold text-slate-500">
                FORMAT
              </p>
              <p className="mt-0.5 text-[10px] font-bold text-white">
                Live Q&A
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-3">
              <Zap className="h-4 w-4 text-yellow-400" />
              <p className="mt-2 text-[9px] font-semibold text-slate-500">
                DURATION
              </p>
              <p className="mt-0.5 text-[10px] font-bold text-white">
                90 Min
              </p>
            </div>

          </div>

          {/* Speaker + action */}
          <div className="mt-2 flex items-center justify-between gap-4 border-t border-white/10 px-3 py-4">

            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                  alt={upcomingWebinars[0].speaker}
                  className="h-11 w-11 rounded-full border-2 border-white/10 object-cover"
                />

                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
              </div>

              <div>
                <p className="text-xs font-bold text-white">
                  {upcomingWebinars[0].speaker}
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  {upcomingWebinars[0].role}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="rounded-xl bg-white px-4 py-2.5 text-[10px] font-black text-slate-950 transition-all hover:bg-sky-400"
            >
              Reserve Seat
            </button>

          </div>
        </div>

        {/* Floating notification card */}
        <div className="absolute -bottom-7 -left-5 hidden w-[220px] rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:block">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Users className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-black text-slate-900">
                240+ Learners
              </p>
              <p className="mt-0.5 text-[10px] text-slate-500">
                already registered
              </p>
            </div>
          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-600" />
          </div>
        </div>

        {/* Floating certificate card */}
        <div className="absolute -right-4 top-1/3 hidden rounded-2xl border border-white bg-white/95 p-3 shadow-xl backdrop-blur-xl md:block">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
              <Award className="h-4 w-4" />
            </div>

            <div>
              <p className="text-[10px] font-black text-slate-900">
                Certificate
              </p>
              <p className="text-[9px] text-slate-400">
                Selected sessions
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          CATEGORY BAR
          DIRECTLY CONNECTED TO HERO
      ====================================================== */}

      <section className="relative border-y border-slate-200/70 bg-white/75 px-4 py-4 shadow-[0_-5px_25px_rgba(15,23,42,0.03)] backdrop-blur-xl sm:px-6 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2">

          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`rounded-full px-4 py-2 text-[11px] font-bold transition-all duration-300 sm:px-5 sm:py-2.5 ${
                index === 0
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </section>

      {/* =====================================================
          UPCOMING WEBINARS
      ====================================================== */}

      <section
        id="upcoming"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="mb-2 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-indigo-600">

                <span className="h-2 w-2 rounded-full bg-sky-400" />

                Upcoming Sessions

              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Upcoming Webinars
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Learn directly from industry experts through live and interactive sessions.
              </p>

            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-600 shadow-sm transition hover:bg-slate-50 sm:self-auto"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

          <WebinarCarousel webinars={upcomingWebinars} />

        </div>

      </section>

      {/* =====================================================
          WORKSHOPS
      ====================================================== */}

      <section
        id="workshops"
        className="bg-white/40 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-indigo-600">

              <Code2 className="h-3.5 w-3.5 text-sky-500" />

              Hands-On Learning

            </div>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Weekend Workshops
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Build functional real-world projects step-by-step with expert code reviews and dedicated mentorship.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {workshopsData.map((workshop) => (
              <div
                key={workshop.id}
                className="group overflow-hidden rounded-[26px] border border-slate-200/80 bg-white/90 p-4 shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-[220px] overflow-hidden rounded-[20px] sm:h-[250px]">

                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-slate-700">
                    {workshop.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">

                    <h3 className="text-xl font-extrabold leading-tight text-white sm:text-2xl">
                      {workshop.title}
                    </h3>

                  </div>

                </div>

                <div className="p-4 pt-5">

                  <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {workshop.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">

                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4 text-sky-500" />
                      {workshop.date}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-4 w-4 text-indigo-600" />
                      {workshop.duration}
                    </span>

                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">

                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {workshop.speaker}
                      </p>

                      <p className="text-[10px] text-slate-400">
                        {workshop.role}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-indigo-700"
                    >
                      Join Workshop
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          HACKATHONS
      ====================================================== */}

      <section
        id="hackathons"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-pink-600">

              <Flame className="h-3.5 w-3.5 animate-pulse" />

              Compete, Build & Win

            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Community Hackathons
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Form teams, build ground-breaking projects, and compete for exciting reward pools.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {hackathonsData.map((hackathon) => (
              <div
                key={hackathon.id}
                className="group overflow-hidden rounded-[26px] border border-slate-200/80 bg-white/90 p-4 shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-[220px] overflow-hidden rounded-[20px] sm:h-[250px]">

                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-bold text-white">
                    {hackathon.status}
                  </div>

                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black text-slate-950">
                    <Trophy className="h-3.5 w-3.5" />
                    {hackathon.prize}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">

                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                      {hackathon.category}
                    </span>

                    <h3 className="mt-1 text-xl font-black">
                      {hackathon.title}
                    </h3>

                  </div>

                </div>

                <div className="p-4 pt-5">

                  <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {hackathon.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-5 border-t border-slate-100 pt-4 text-xs text-slate-500">

                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4 text-pink-500" />
                      {hackathon.deadline}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-indigo-600" />
                      {hackathon.teamSize}
                    </span>

                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">

                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">

                      <Zap className="h-4 w-4 fill-current text-amber-500" />

                      Global Submission

                    </div>

                    <button
                      type="button"
                      className="rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:opacity-90"
                    >
                      Register Now
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURED WEBINAR
      ====================================================== */}

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 p-6 shadow-2xl sm:p-10 lg:p-12">

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

            <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">

              <div className="text-white">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-sky-200">
                  <Sparkles className="h-3.5 w-3.5" />
                  FEATURED WEBINAR
                </div>

                <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Build Smarter Applications With Generative AI
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
                  Explore practical ways modern developers are using AI to build faster, smarter, and more efficient applications.
                </p>

                <div className="mt-6 flex flex-wrap gap-5 text-xs text-slate-300">

                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-sky-400" />
                    Sep 05, 2026
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-purple-400" />
                    6:30 PM
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4 text-pink-400" />
                    Live Q&A
                  </span>

                </div>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-xl transition hover:bg-slate-100"
                >
                  Reserve My Seat
                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>

              <div className="relative mx-auto w-full max-w-[360px]">

                <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-sky-500/20 to-pink-500/20 blur-2xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-3 backdrop-blur-xl">

                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                    alt="Webinar speaker"
                    className="h-[320px] w-full rounded-[22px] object-cover"
                  />

                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-slate-950/60 p-4 backdrop-blur-xl">

                    <p className="text-sm font-bold text-white">
                      Amit Patil
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      AI Solutions Architect
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY ATTEND
      ====================================================== */}

      <section className="bg-white/40 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-600 shadow-sm">

              <Sparkles className="h-3.5 w-3.5 text-sky-500" />

              WHY GETUPSKILL

            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              More Than Just a Webinar
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Every session is designed to give you practical knowledge that you can apply in your learning and career.
            </p>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => {

              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-[24px] border border-slate-200/80 bg-white/80 p-6 text-center shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                >

                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${benefit.accent}18`,
                      color: benefit.accent,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-base font-extrabold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {benefit.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          PAST WEBINARS
      ====================================================== */}

      <section
        id="webinars"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-indigo-600">

              <Play className="h-3.5 w-3.5" />

              Watch & Learn

            </div>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Explore Past Webinars
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Missed a session? Catch up with recordings from our previous expert-led webinars.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {pastWebinars.map((webinar) => (

              <article
                key={webinar.id}
                className="group overflow-hidden rounded-[24px] border border-slate-200/80 bg-white/80 shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              >

                <div className="relative h-[200px] overflow-hidden">

                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-slate-700">
                    {webinar.category}
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-indigo-600 shadow-md">

                      <Play className="ml-0.5 h-4 w-4 fill-current" />

                    </span>

                    <span className="text-xs font-bold">
                      Watch Recording
                    </span>

                  </div>

                </div>

                <div className="p-5">

                  <h3 className="line-clamp-2 text-base font-extrabold leading-snug text-slate-900">
                    {webinar.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-400">

                    <span>
                      {webinar.speaker}
                    </span>

                    <span>
                      {webinar.date}
                    </span>

                  </div>

                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 transition hover:translate-x-1"
                  >
                    Watch Recording
                    <ChevronRight className="h-4 w-4" />
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-gradient-to-br from-sky-50 via-indigo-50/50 to-pink-50 px-6 py-12 text-center shadow-xl sm:px-10">

            <div className="absolute left-1/2 top-1/2 h-72 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/20 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-md">

                <Sparkles className="h-6 w-6" />

              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Never Miss a Live Session
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Stay updated with upcoming webinars, workshops, expert sessions, and career-focused events from GetUpSkill.
              </p>

              <div className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 flex-1 rounded-2xl border border-slate-200 bg-white px-5 text-sm text-slate-700 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-600"
                />

                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-700"
                >
                  Notify Me
                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

