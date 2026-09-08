import Image from "next/image";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send, Globe } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-[#05060f] pt-16 text-slate-300">
      {/* Top gradient hairline, echoing the hero's brand gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#53B8EC]/60 to-transparent" />

      {/* Soft mesh glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#485DAC]/20 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-[#E9577C]/15 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter strip */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-8 backdrop-blur-xl sm:flex-row sm:px-10">
          <div>
            <h3 className="text-lg font-extrabold text-white sm:text-xl">
              Get career tips &amp; course drops in your inbox
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              No spam — just useful stuff, every couple of weeks.
            </p>
          </div>
          <form className="flex w-full max-w-sm items-center gap-2 sm:w-auto">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full min-w-0 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#53B8EC]/60 focus:bg-white/[0.1]"
            />
            <button
              type="submit"
              className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(83,184,236,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Subscribe
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-4">
          <div>
            <div className="group flex items-center gap-2 text-xl font-extrabold text-white">
              <Image
                src="/Logo.png"
                alt="GetUpSkill"
                width={40}
                height={40}
                className="h-9 w-9 transition-transform duration-300 group-hover:rotate-6"
              />
              <span className="bg-gradient-to-r from-[#7ad0f5] via-[#8b9cf0] to-[#f194ac] bg-clip-text text-transparent">
                GetUpSkill
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Practical, industry-designed courses to help you build a career
              you love.
            </p>
            <div className="mt-5 flex gap-3">
              {[Globe, MessageCircle, Send, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-white hover:shadow-[0_8px_20px_rgba(83,184,236,0.35)]"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#53B8EC] via-[#485DAC] to-[#E9577C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Icon size={16} className="relative z-10" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="relative inline-block text-sm font-bold uppercase tracking-wide text-white">
              Quick Links
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-6 rounded-full bg-gradient-to-r from-[#53B8EC] to-[#485DAC]" />
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-slate-600 transition-colors duration-200 group-hover:bg-[#53B8EC]" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="relative inline-block text-sm font-bold uppercase tracking-wide text-white">
              Categories
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-6 rounded-full bg-gradient-to-r from-[#485DAC] to-[#E9577C]" />
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {["Development", "Data Science", "Design", "Marketing"].map(
                (c) => (
                  <li key={c}>
                    <a
                      href="/#courses"
                      className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors duration-200 hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-slate-600 transition-colors duration-200 group-hover:bg-[#E9577C]" />
                      {c}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div id="contact" className="scroll-mt-28">
            <h4 className="relative inline-block text-sm font-bold uppercase tracking-wide text-white">
              Contact
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-6 rounded-full bg-gradient-to-r from-[#E9577C] to-[#C7DA40]" />
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li className="group flex items-center gap-2.5 transition-colors duration-200 hover:text-white">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-sky-300 transition-colors duration-200 group-hover:bg-sky-400/15">
                  <Mail size={14} />
                </span>
                support@getupskill.com
              </li>
              <li className="group flex items-center gap-2.5 transition-colors duration-200 hover:text-white">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-sky-300 transition-colors duration-200 group-hover:bg-sky-400/15">
                  <Phone size={14} />
                </span>
                +91 98765 43210
              </li>
              <li className="group flex items-center gap-2.5 transition-colors duration-200 hover:text-white">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-sky-300 transition-colors duration-200 group-hover:bg-sky-400/15">
                  <MapPin size={14} />
                </span>
                Pune, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} GetUpSkill. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Made with <span className="text-[#E9577C]">♥</span> for lifelong learners
          </span>
        </div>
      </div>
    </footer>
  );
}
