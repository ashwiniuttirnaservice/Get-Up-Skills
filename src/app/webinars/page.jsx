"use client";

import { useEffect } from "react";
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

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
   DUMMY WORKSHOPS DATA
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
   DUMMY HACKATHONS DATA
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
   FEATURE BENEFITS
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
   WEBINAR PAGE
========================================================= */

export default function WebinarsPage() {
  // Handle cross-page hash routing/scrolling when users navigate from another page menu
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[#f8fbff]">

      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">

        <div
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(83,184,236,0.30), transparent 70%)",
          }}
        />

        <div
          className="absolute -right-40 top-[500px] h-[600px] w-[600px] rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(233,87,124,0.20), transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-0 left-[30%] h-[500px] w-[700px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, rgba(193,59,232,0.18), transparent 70%)",
          }}
        />

      </div>

      {/* =====================================================
          HERO (3D PERSPECTIVE & ANIMATED LOOK)
      ====================================================== */}

      <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28">

        {/* Dynamic 3D Hero Glow Orbs */}
        <div
          className="absolute left-1/2 top-1/4 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[120px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(83,184,236,0.25), rgba(72,93,172,0.20), rgba(233,87,124,0.18))",
          }}
        />

        {/* Floating 3D Depth Elements */}
        <div className="absolute left-[5%] top-20 hidden h-24 w-24 animate-pulse rounded-3xl border border-white/80 bg-gradient-to-br from-white/80 to-sky-100/40 shadow-[0_20px_50px_rgba(80,120,180,0.15)] backdrop-blur-2xl lg:block transform -rotate-12 hover:rotate-0 transition-transform duration-500" />

        <div className="absolute right-[5%] top-32 hidden h-28 w-28 animate-bounce rounded-full border border-white/90 bg-gradient-to-tr from-white/70 to-pink-100/40 shadow-[0_20px_50px_rgba(200,100,150,0.12)] backdrop-blur-2xl lg:block duration-1000" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

            {/* =================================================
                HERO CONTENT (3D Typography & Interactive feel)
            ================================================== */}

            <div className="text-center lg:text-left [perspective:1000px]">

              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_10px_30px_rgba(70,100,160,0.12)] backdrop-blur-xl">

                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>

                NEXT-GEN LIVE LEARNING

                <Sparkles className="h-3.5 w-3.5 text-sky-400" />

              </div>

              {/* Heading with 3D shadow depth */}

              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">

                Learn Live.

                <br />

                <span className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(72,93,172,0.2)]">
                  Grow Faster.
                </span>

              </h1>

              {/* Description */}

              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-slate-500 sm:text-base lg:mx-0">

                Immerse yourself in interactive 3D webinars, hands-on weekend workshops, and high-stakes coding hackathons engineered to accelerate your tech career.

              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">

                <a
                  href="#upcoming"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#485DAC] px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_35px_rgba(72,93,172,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(72,93,172,0.38)] active:translate-y-0"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  Explore Webinars

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                </a>

                <a
                  href="#webinars"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/90 bg-white/70 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-[0_10px_30px_rgba(70,90,140,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  <Play className="h-4 w-4 fill-current text-[#485DAC]" />

                  Watch Recordings

                </a>

              </div>

              {/* Small Stats */}

              <div className="mt-10 flex flex-wrap justify-center gap-6 text-left lg:justify-start border-t border-slate-200/60 pt-6">

                <div>
                  <p className="text-2xl font-extrabold text-slate-900">
                    50+
                  </p>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Live Sessions
                  </p>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <p className="text-2xl font-extrabold text-slate-900">
                    25+
                  </p>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Industry Experts
                  </p>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <p className="text-2xl font-extrabold text-slate-900">
                    10K+
                  </p>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Learners
                  </p>
                </div>

              </div>

            </div>

            {/* =================================================
                FEATURED WEBINAR HERO CARD (3D Tilted Glass UI)
            ================================================== */}

            <div className="relative [perspective:1200px]">

              {/* Background Multi-layer Glow */}
              <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-tr from-sky-300/30 via-purple-300/20 to-pink-300/30 blur-3xl transform -rotate-3" />

              <div className="group relative overflow-hidden rounded-[32px] border border-white/90 bg-white/65 p-3.5 shadow-[0_35px_90px_rgba(70,90,160,0.20)] backdrop-blur-2xl transition-transform duration-700 hover:rotate-1 hover:scale-[1.02]">

                {/* Image */}

                <div className="relative h-[260px] overflow-hidden rounded-[24px] sm:h-[310px]">

                  <img
                    src={upcomingWebinars[0].image}
                    alt={upcomingWebinars[0].title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101638]/85 via-[#101638]/20 to-transparent" />

                  {/* Live Badge */}

                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-red-500/95 px-3.5 py-1.5 text-[10px] font-extrabold tracking-widest text-white shadow-lg backdrop-blur-md">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-white" />

                    LIVE EVENT

                  </div>

                  {/* Bottom Image Text */}

                  <div className="absolute bottom-5 left-5 right-5 text-white">

                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-sky-300">
                      Featured Masterclass
                    </p>

                    <h2 className="mt-1 text-2xl font-extrabold leading-tight sm:text-3xl drop-shadow-md">
                      {upcomingWebinars[0].title}
                    </h2>

                  </div>

                </div>

                {/* Content */}

                <div className="px-3 pb-3 pt-5">

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-medium text-slate-500">

                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4 text-[#53B8EC]" />
                      {upcomingWebinars[0].date}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-4 w-4 text-[#485DAC]" />
                      {upcomingWebinars[0].time}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-[#E9577C]" />
                      Interactive Q&A
                    </span>

                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">

                    <div>

                      <p className="text-[13px] font-bold text-slate-900">
                        {upcomingWebinars[0].speaker}
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-400 font-medium">
                        {upcomingWebinars[0].role}
                      </p>

                    </div>

                    <button
                      type="button"
                      className="rounded-full bg-[#485DAC] px-5 py-2.5 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(72,93,172,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Register Now
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CATEGORY FILTER VISUAL
      ====================================================== */}

      <section className="border-y border-white/80 bg-white/35 px-4 py-5 backdrop-blur-xl sm:px-6 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2">

          {categories.map(
            (category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-5 py-2.5 text-[12px] font-semibold transition-all duration-300 ${
                  index === 0
                    ? "bg-[#485DAC] text-white shadow-[0_8px_20px_rgba(72,93,172,0.20)]"
                    : "border border-white/80 bg-white/60 text-slate-600 backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white hover:text-[#485DAC]"
                }`}
              >
                {category}
              </button>
            )
          )}

        </div>

      </section>

      {/* =====================================================
          UPCOMING WEBINARS (id="upcoming")
      ====================================================== */}

      <section
        id="upcoming"
        className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#485DAC]">
                <span className="h-2 w-2 rounded-full bg-[#53B8EC]" />
                Upcoming Sessions
              </div>

              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Upcoming Webinars
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Learn directly from industry experts through live and interactive sessions.
              </p>

            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/90 bg-white/65 px-5 py-2.5 text-[12px] font-bold text-slate-600 shadow-[0_8px_25px_rgba(70,90,140,0.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg sm:self-auto"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </button>

          </Reveal>

          {/* Carousel */}

          <Reveal delay={150}>
            <WebinarCarousel webinars={upcomingWebinars} />
          </Reveal>

        </div>

      </section>

      {/* =====================================================
          WEEKEND WORKSHOPS (id="workshops")
      ====================================================== */}

      <section id="workshops" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#485DAC]">
              <Code2 className="h-3.5 w-3.5 text-[#53B8EC]" />
              Hands-On Learning
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Weekend Workshops
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Build functional real-world projects step-by-step with expert code reviews and dedicated mentorship.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {workshopsData.map((workshop, wi) => (
              <Reveal key={workshop.id} delay={wi * 100}>
              <div
                className="group relative overflow-hidden rounded-[28px] border border-white/90 bg-white/60 p-4 shadow-[0_20px_50px_rgba(70,90,150,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(70,90,150,0.18)]"
              >
                <div className="relative h-[220px] overflow-hidden rounded-[20px] sm:h-[260px]">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101638]/80 via-[#101638]/10 to-transparent" />
                  
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-slate-700 backdrop-blur-xl shadow-md">
                    {workshop.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-extrabold leading-tight sm:text-2xl">
                      {workshop.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 pt-5">
                  <p className="text-[13px] leading-6 text-slate-500">
                    {workshop.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-slate-500 border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4 text-[#53B8EC]" />
                      {workshop.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-4 w-4 text-[#485DAC]" />
                      {workshop.duration}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-[13px] font-bold text-slate-800">
                        {workshop.speaker}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {workshop.role}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="rounded-full bg-[#485DAC] px-5 py-2.5 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(72,93,172,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Join Workshop
                    </button>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITY HACKATHONS (id="hackathons") - Redesigned UI
      ====================================================== */}

      <section id="hackathons" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E9577C]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#E9577C]">
              <Flame className="h-3.5 w-3.5 animate-pulse text-[#E9577C]" />
              Compete, Build & Win
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Community Hackathons
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Form teams, push the limits of your coding capability, build ground-breaking tech projects, and win huge reward pools.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {hackathonsData.map((hackathon, hi) => (
              <Reveal key={hackathon.id} delay={hi * 100}>
              <div
                className="group relative overflow-hidden rounded-[30px] border border-white/90 bg-white/65 p-4 shadow-[0_25px_60px_rgba(70,90,150,0.14)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(70,90,150,0.22)]"
              >
                {/* Image Banner */}
                <div className="relative h-[220px] overflow-hidden rounded-[22px] sm:h-[250px]">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08123d]/90 via-[#08123d]/20 to-transparent" />

                  {/* Status Tag */}
                  <div className="absolute left-4 top-4 rounded-full bg-emerald-500/95 px-3 py-1.5 text-[10px] font-bold text-white shadow-lg backdrop-blur-md">
                    {hackathon.status}
                  </div>

                  {/* Prize Badge Overlay */}
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-amber-400/95 px-3.5 py-1.5 text-[11px] font-bold text-slate-900 shadow-lg backdrop-blur-md">
                    <Trophy className="h-3.5 w-3.5" />
                    {hackathon.prize}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300">
                      {hackathon.category}
                    </span>
                    <h3 className="mt-0.5 text-2xl font-extrabold text-white">
                      {hackathon.title}
                    </h3>
                  </div>
                </div>

                {/* Details info */}
                <div className="p-4 pt-5">
                  <p className="text-[13px] leading-6 text-slate-500">
                    {hackathon.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] font-semibold text-slate-600 border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                      <CalendarDays className="h-4 w-4 text-[#E9577C]" />
                      {hackathon.deadline}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                      <Users className="h-4 w-4 text-[#485DAC]" />
                      {hackathon.teamSize}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2 text-[12px] font-bold text-slate-700">
                      <Zap className="h-4 w-4 text-amber-500 fill-amber-500" />
                      Global Submission
                    </div>

                    <button
                      type="button"
                      className="rounded-full bg-gradient-to-r from-[#485DAC] to-[#E9577C] px-6 py-2.5 text-[12px] font-bold text-white shadow-[0_10px_25px_rgba(233,87,124,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Register Now
                    </button>
                  </div>
                </div>

              </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURED WEBINAR BANNER
      ====================================================== */}

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-gradient-to-br from-[#101638] via-[#25336d] to-[#485DAC] p-6 shadow-[0_30px_80px_rgba(50,60,130,0.20)] sm:p-10 lg:p-12">

            {/* Decorative glow */}

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

            <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-pink-400/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">

              {/* Content */}

              <div className="text-white">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-sky-200 backdrop-blur-xl">
                  <Sparkles className="h-3.5 w-3.5" />
                  FEATURED WEBINAR
                </div>

                <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Build Smarter Applications With Generative AI
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                  Explore practical ways modern developers are using AI to build faster, smarter, and more efficient applications.
                </p>

                <div className="mt-6 flex flex-wrap gap-5 text-[12px] text-white/75">

                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-sky-300" />
                    Sep 05, 2026
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-purple-300" />
                    6:30 PM
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4 text-pink-300" />
                    Live
                  </span>

                </div>

                <div className="mt-8">

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#25336d] shadow-lg transition hover:-translate-y-1"
                  >
                    Reserve My Seat
                    <ArrowRight className="h-4 w-4" />
                  </button>

                </div>

              </div>

              {/* Speaker */}

              <div className="relative mx-auto w-full max-w-[360px]">

                <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-r from-sky-300/20 via-purple-300/20 to-pink-300/20 blur-2xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-3 backdrop-blur-xl">

                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                    alt="Webinar speaker"
                    className="h-[340px] w-full rounded-[22px] object-cover"
                  />

                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-xl">

                    <p className="text-[14px] font-bold text-white">
                      Amit Patil
                    </p>

                    <p className="mt-1 text-[11px] text-white/60">
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

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <Reveal className="mx-auto max-w-2xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-4 py-1.5 text-[11px] font-bold text-slate-500 shadow-sm backdrop-blur-xl">

              <Sparkles className="h-3.5 w-3.5 text-[#53B8EC]" />

              WHY GETUPSKILL

            </div>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              More Than Just a Webinar
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Every session is designed to give you practical knowledge that you can apply in your learning and career.
            </p>

          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map(
              (benefit, bi) => {
                const Icon =
                  benefit.icon;

                return (
                  <Reveal key={benefit.title} delay={bi * 80}>
                  <div
                    className="group rounded-[22px] border border-white/80 bg-white/55 p-6 text-center shadow-[0_15px_45px_rgba(75,95,150,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/75 hover:shadow-[0_25px_60px_rgba(75,95,150,0.14)]"
                  >

                    <div
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        backgroundColor: `${benefit.accent}18`,
                        color: benefit.accent,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-[16px] font-extrabold text-[#111827]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-slate-500">
                      {benefit.description}
                    </p>

                  </div>
                  </Reveal>
                );
              }
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          PAST WEBINARS / RECORDINGS (id="webinars")
      ====================================================== */}

      <section
        id="webinars"
        className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <Reveal className="text-center">

            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#485DAC]">

              <Play className="h-3.5 w-3.5" />

              Watch & Learn

            </div>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Explore Past Webinars
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Missed a session? Catch up with recordings from our previous expert-led webinars.
            </p>

          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {pastWebinars.map(
              (webinar, pi) => (
                <Reveal key={webinar.id} delay={pi * 80}>
                <article
                  className="group overflow-hidden rounded-[22px] border border-white/80 bg-white/55 shadow-[0_18px_50px_rgba(75,95,150,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/75 hover:shadow-[0_28px_70px_rgba(75,95,150,0.16)]"
                >

                  <div className="relative h-[200px] overflow-hidden">

                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-slate-700 backdrop-blur-xl">
                      {webinar.category}
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#485DAC] shadow-lg">
                        <Play className="ml-0.5 h-4 w-4 fill-current" />
                      </span>

                      <span className="text-[11px] font-bold">
                        Watch Recording
                      </span>

                    </div>

                  </div>

                  <div className="p-5">

                    <h3 className="line-clamp-2 text-[17px] font-extrabold leading-6 text-[#111827]">
                      {webinar.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">

                      <span>
                        {webinar.speaker}
                      </span>

                      <span>
                        {webinar.date}
                      </span>

                    </div>

                    <button
                      type="button"
                      className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#485DAC]"
                    >
                      Watch Recording
                      <ChevronRight className="h-4 w-4" />
                    </button>

                  </div>

                </article>
                </Reveal>
              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-gradient-to-br from-[#e7f7ff] via-[#f4efff] to-[#fff3f7] px-6 py-14 text-center shadow-[0_25px_70px_rgba(75,95,150,0.10)] sm:px-10">

            {/* Glow */}

            <div className="absolute left-1/2 top-1/2 h-72 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/20 blur-3xl" />

            <Reveal className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-[#485DAC] shadow-lg">

                <Sparkles className="h-6 w-6" />

              </div>

              <h2 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Never Miss a Live Session
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Stay updated with upcoming webinars, workshops, expert sessions, and career-focused events from GetUpSkill.
              </p>

              <div className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 flex-1 rounded-full border border-white/90 bg-white/70 px-5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#53B8EC] focus:bg-white"
                />

                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#485DAC] px-6 text-sm font-bold text-white shadow-[0_10px_25px_rgba(72,93,172,0.22)] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Notify Me
                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>

            </Reveal>

          </div>

        </div>

      </section>

    </main>
      <Footer />
    </>
  );
}