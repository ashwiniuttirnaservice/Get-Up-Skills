import Image from "next/image";
import { Mail, MessageCircle, Send, Globe } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-xl font-extrabold text-white">
              <Image
                src="/Logo.png"
                alt="GetUpSkill"
                width={40}
                height={40}
                className="h-9 w-9"
              />
              GetUpSkill
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Practical, industry-designed courses to help you build a career
              you love.
            </p>
            <div className="mt-5 flex gap-4">
              {[Globe, MessageCircle, Send, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Categories</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Development", "Data Science", "Design", "Marketing"].map(
                (c) => (
                  <li key={c}>
                    <a href="#courses" className="transition hover:text-white">
                      {c}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>support@getupskill.com</li>
              <li>+91 98765 43210</li>
              <li>Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} GetUpSkill. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
