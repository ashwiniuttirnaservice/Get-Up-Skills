import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ResourcesNav from "@/components/ResourcesNav";
import { blogPosts } from "@/data/resources";

export const metadata = {
  title: "Blog — GetUpSkill",
  description: "Articles and guides on tech, data & career growth.",
};

const ACCENTS = ["#53B8EC", "#485DAC", "#E9577C", "#C7DA40"];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
        <ResourcesNav active="/resources/blog" />
      </div>
      <main>
        <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
          <div className="animate-drift pointer-events-none absolute -top-24 right-[10%] h-72 w-72 rounded-full bg-[#53B8EC] opacity-20 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#53B8EC]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#53B8EC]">
                <BookOpen size={12} /> The Blog
              </span>
              <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                Ideas for your{" "}
                <span className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-transparent">
                  next career move
                </span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-slate-600">
                Practical writing on tech, data and career growth from the GetUpSkill team.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Featured post */}
            <Reveal>
              <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl md:flex">
                <div
                  className="relative flex h-48 shrink-0 items-center justify-center overflow-hidden md:h-auto md:w-2/5"
                  style={{ backgroundImage: `linear-gradient(135deg, ${ACCENTS[0]}, #0f172a 160%)` }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.15]"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <BookOpen size={64} className="relative text-white/30" />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-900">
                    ⭐ Featured
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-center p-8">
                  <span
                    className="w-fit rounded-full px-2.5 py-1 text-xs font-semibold"
                    style={{ backgroundColor: `${ACCENTS[0]}1a`, color: ACCENTS[0] }}
                  >
                    {featured.category}
                  </span>
                  <h2 className="mt-3 text-2xl font-extrabold leading-snug text-slate-900">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-slate-600">{featured.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                  </div>
                  <span
                    className="mt-5 flex w-fit items-center gap-1.5 text-sm font-semibold transition group-hover:gap-2.5"
                    style={{ color: ACCENTS[0] }}
                  >
                    Read article <ArrowRight size={15} />
                  </span>
                </div>
              </article>
            </Reveal>

            {/* Rest — bento-ish grid, first card spans two rows */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => {
                const accent = ACCENTS[(i + 1) % ACCENTS.length];
                return (
                  <Reveal key={post.id} delay={i * 80} className={i === 0 ? "lg:row-span-2" : ""}>
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                      <span
                        className="absolute inset-x-0 top-0 h-1 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                        style={{ backgroundColor: accent }}
                      />
                      <span
                        className="w-fit rounded-full px-2.5 py-1 text-xs font-semibold"
                        style={{ backgroundColor: `${accent}1a`, color: accent }}
                      >
                        {post.category}
                      </span>
                      <h3 className="mt-3 flex-1 text-lg font-bold leading-snug text-slate-900">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={200} className="mt-12 text-center">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-md border-2 border-[#485DAC] px-6 py-3 font-semibold text-[#485DAC] transition hover:bg-[#485DAC] hover:text-white active:scale-95"
              >
                Explore Courses <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
