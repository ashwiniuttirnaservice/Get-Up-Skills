import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import SuccessStories from "@/components/SuccessStories";
import Courses from "@/components/Courses";
import Companies from "@/components/Companies";
import Instructors from "@/components/Instructors";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredibilityBar />
        <SuccessStories />
        <Courses />
        <Companies />
        <Instructors />
        <WhyUs />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
