"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, LogIn, UserPlus } from "lucide-react";
import {
  nav,
  courseMenu,
  resourceMenu,
  eventsMenu,
  testimonialsMenu,
  LOGIN_URL,
  SIGNUP_URL,
} from "@/data/site";

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-[#485DAC]"
        aria-expanded={open}
      >
        {label}
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Always mounted; visibility toggled via classes so the child
          tree shape never changes between renders. */}
      <div
        className={`absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-2 shadow-xl transition-all duration-150 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 transition hover:bg-slate-50"
          >
            <div className="text-sm font-semibold text-slate-900">{item.label}</div>
            <div className="mt-0.5 text-xs text-slate-500">{item.desc}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileMenuGroup({ label, items, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-2 text-sm font-medium text-slate-700"
      >
        {label}
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`ml-2 flex-col gap-1 border-l-2 border-slate-100 pl-4 ${
          open ? "flex" : "hidden"
        }`}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            className="py-2 text-sm text-slate-600"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex shrink-0 items-center gap-2 font-extrabold text-xl">
          <Image src="/Logo.png" alt="GetUpSkill" width={40} height={40} className="h-9 w-9" priority />
          <span className="bg-gradient-to-r from-[#53B8EC] via-[#485DAC] to-[#E9577C] bg-clip-text text-transparent">
            GetUpSkill
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          <NavDropdown label="Courses" items={courseMenu} />
          <NavDropdown label="Resources" items={resourceMenu} />

          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-slate-700 transition hover:text-[#485DAC]"
            >
              {item.label}
            </a>
          ))}

          <NavDropdown label="Events" items={eventsMenu} />
          <NavDropdown label="Testimonials" items={testimonialsMenu} />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-[#485DAC] px-3.5 py-1.5 text-sm font-semibold text-[#485DAC] transition hover:bg-[#485DAC]/5"
          >
            <LogIn size={16} />
            Sign In
          </a>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-[#485DAC] px-3.5 py-1.5 text-sm font-semibold text-[#485DAC] transition hover:bg-[#485DAC]/5"
          >
            <UserPlus size={16} />
            Sign Up
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — always mounted, shown/hidden via class */}
      <div className={`border-t border-black/5 bg-white px-4 py-4 lg:hidden ${open ? "block" : "hidden"}`}>
        <nav className="flex flex-col gap-1">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="py-2 text-sm font-medium text-slate-700"
          >
            Home
          </a>

          <MobileMenuGroup label="Courses" items={courseMenu} onNavigate={() => setOpen(false)} />
          <MobileMenuGroup label="Resources" items={resourceMenu} onNavigate={() => setOpen(false)} />

          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-slate-700"
            >
              {item.label}
            </a>
          ))}

          <MobileMenuGroup label="Events" items={eventsMenu} onNavigate={() => setOpen(false)} />
          <MobileMenuGroup
            label="Testimonials"
            items={testimonialsMenu}
            onNavigate={() => setOpen(false)}
          />

          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-1.5 rounded-md border border-[#485DAC] px-4 py-2 text-sm font-semibold text-[#485DAC]"
          >
            <LogIn size={16} />
            Sign In
          </a>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-1.5 rounded-md border border-[#485DAC] px-4 py-2 text-sm font-semibold text-[#485DAC]"
          >
            <UserPlus size={16} />
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
}
