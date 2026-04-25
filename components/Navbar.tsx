"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Проекты", href: "#projects" },
  { label: "Услуги", href: "#services" },
  { label: "Цены", href: "#pricing" },
  { label: "Обо мне", href: "#about" },
  { label: "Контакт", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/80 backdrop-blur-xl border-b border-white/[0.06]"
          : ""
      }`}
    >
      <div className="container-base flex items-center justify-between h-16">
        <Link href="/" className="font-onest font-bold text-lg tracking-tight">
          Yuraz<span className="text-accent">Lab</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-text-muted hover:text-text-base text-sm transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href="https://t.me/yurazlab"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
        >
          Написать →
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-text-muted"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span
            className={`block w-5 h-0.5 bg-current origin-center transition-transform duration-200 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current origin-center transition-transform duration-200 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        } bg-dark/95 backdrop-blur-xl border-t border-white/[0.06]`}
      >
        <div className="container-base py-5 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-text-muted hover:text-text-base transition-colors text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://t.me/yurazlab"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm w-fit mt-2"
          >
            Написать →
          </a>
        </div>
      </div>
    </nav>
  );
}
