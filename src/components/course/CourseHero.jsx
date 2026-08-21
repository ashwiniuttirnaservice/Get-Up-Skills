import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ChevronRight,
  Clock,
  MessageCircle,
  Radio,
  Star,
  Users,
} from "lucide-react";
import Reveal from "../Reveal";
import HeroSpotlight from "../HeroSpotlight";
import TiltCard from "../TiltCard";

function discountPercent(price, original) {
  if (!original) return null;
  const p = Number(price.replace(/[^\d]/g, ""));
  const o = Number(original.replace(/[^\d]/g, ""));
  if (!o || o <= p) return null;
  return Math.round(((o - p) / o) * 100);
}

export default function CourseHero({ course }) {
  const discount = discountPercent(course.price, course.originalPrice);

  const badges = [
    { icon: Clock, label: course.duration },
    { icon: Radio, label: course.mode },
    { icon: Award, label: `${course.skills.length + 2} Modules` },
    { icon: Users, label: `${course.students} enrolled` },
  ];

  return (
    <section
      id="overview"
      className="relative scroll-mt-28 overflow-hidden"
      style={{ backgroundImage: `linear-gradient(135deg, ${course.color}, #0f172a 140%)` }}
    >
      <Image
        src={course.image}
        alt=""
        fill
        priority
        className="object-cover opacity-20 mix-blend-overlay"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/45" />

      {/* Drifting glow blobs — subtle depth, off by default for reduced-motion */}
      <div
        className="animate-drift pointer-events-none absolute -top-24 right-[8%] h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: course.color }}
      />
      <div className="animate-drift pointer-events-none absolute -bottom-32 left-[5%] h-80 w-80 rounded-full bg-white/10 blur-3xl [animation-delay:-4s]" />

      {/* Cursor-following spotlight — moves the light with the mouse */}
      <HeroSpotlight color={course.color} />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/70">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/#courses" className="hover:text-white">
            Courses
          </Link>
          <ChevronRight size={12} />
          <span className="text-white">{course.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {course.category}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {course.level}
                </span>
                {course.badge && (
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-900">
                    ⭐ {course.badge}
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
                {course.longDesc}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-6 flex items-center gap-2 text-sm text-white/90">
                <span className="flex items-center gap-1.5 font-bold text-amber-300">
                  <Star size={16} fill="currentColor" /> {course.rating}
                </span>
                <span className="text-white/60">·</span>
                <span className="text-white/75">{course.reviews} reviews</span>
              </div>
            </Reveal>

            {/* Metric badge row */}
            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap gap-3">
                {badges.map((b) => (
                  <span
                    key={b.label}
                    className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    <b.icon size={14} />
                    {b.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-6 flex flex-wrap gap-2">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/25 bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Dual CTA */}
            <Reveal delay={600}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="btn-shine rounded-lg bg-white px-7 py-3 font-bold shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl active:scale-95"
                  style={{ color: course.color }}
                >
                  Enroll Now — {course.price}
                </a>
                <a
                  href="#faq"
                  className="flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10 active:scale-95"
                >
                  <MessageCircle size={18} />
                  Talk to an Advisor
                </a>
              </div>
            </Reveal>
          </div>

          {/* Thumbnail + enroll card */}
          <Reveal delay={250} className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
            <div className="animate-float overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
              <Image
                src={course.image}
                alt={course.title}
                width={480}
                height={270}
                className="aspect-video w-full object-cover"
              />
            </div>

            {/* Glass card with a soft gradient glow ring — tilts toward the cursor */}
            <TiltCard className="relative">
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-60 blur-md"
                style={{ backgroundImage: `linear-gradient(135deg, ${course.color}, transparent 70%)` }}
              />
              <div className="relative rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900">{course.price}</span>
                  {course.originalPrice && (
                    <span className="text-base text-slate-400 line-through">
                      {course.originalPrice}
                    </span>
                  )}
                </div>
                {discount && (
                  <span className="mt-1 inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                    Save {discount}%
                  </span>
                )}
                <p className="mt-1 text-xs text-slate-400">Incl. of all taxes</p>

                <a
                  href="#"
                  className="btn-shine mt-5 flex w-full items-center justify-center rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
                  style={{ backgroundColor: course.color }}
                >
                  Enroll Now
                </a>
                <p className="mt-2 text-center text-xs text-slate-500">
                  Taken our courses before? Pay only the difference.
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5 text-sm text-slate-600">
                  <li>✓ Lifetime access to course content</li>
                  <li>✓ Mentor support & doubt resolution</li>
                  <li>✓ Real-world projects & portfolio</li>
                  <li>✓ Certificate of completion</li>
                  <li>✓ Job assistance & interview prep</li>
                </ul>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
