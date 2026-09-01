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
            <div className="flex items-center gap-2 text-xl font-extrabold text-white">
              <Image
                src="/Logo.png"
                alt="GetUpSkill"
                width={40}
                height={40}
                className="h-9 w-9"
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.12]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Categories</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Development", "Data Science", "Design", "Marketing"].map(
                (c) => (
                  <li key={c}>
                    <a href="/#courses" className="text-slate-400 transition hover:text-white">
                      {c}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-sky-300" />
                support@getupskill.com
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-sky-300" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="shrink-0 text-sky-300" />
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
