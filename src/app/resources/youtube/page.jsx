import { PlaySquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ResourcesNav from "@/components/ResourcesNav";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/resources";

export const metadata = {
  title: "YouTube Channel — GetUpSkill",
  description: "Free tutorials and walkthroughs from our instructors.",
};

const ACCENTS = ["#53B8EC", "#485DAC", "#E9577C", "#C7DA40"];

export default function YouTubePage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
        <ResourcesNav active="/resources/youtube" />
      </div>
      <main>
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E9577C]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E9577C]">
                <PlaySquare size={12} /> YouTube Channel
              </span>
              <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Free Video Tutorials
              </h1>
              <p className="mt-4 text-slate-600">
                Walkthroughs and crash courses from GetUpSkill instructors. Click any card to play.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((v, i) => (
                <Reveal key={v.id} delay={i * 80}>
                  <VideoCard video={v} accent={ACCENTS[i % ACCENTS.length]} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
