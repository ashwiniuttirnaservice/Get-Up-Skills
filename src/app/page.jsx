import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import Courses from "@/components/Courses";
import Instructors from "@/components/Instructors";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <Courses />
        <Instructors />
        <WhyUs />
        <Stats />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
