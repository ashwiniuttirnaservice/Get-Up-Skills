import Reveal from "./Reveal";

export default function VisionStrip() {
  return (
    <section className="bg-white py-12">
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xl font-semibold leading-snug text-slate-800 sm:text-2xl">
          From first line of code to first job offer —{" "}
          <span className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-transparent">
            we build the skills that get you there.
          </span>
        </p>
      </Reveal>
    </section>
  );
}
