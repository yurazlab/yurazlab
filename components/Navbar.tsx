"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "В команду", href: "#team" },
  { label: "Кейсы", href: "#projects" },
  { label: "Для бизнеса", href: "#business" },
  { label: "Обо мне", href: "#about" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/[0.06] bg-dark/80 backdrop-blur-xl" : ""}`}
      aria-label="Основная навигация"
    >
      <div className="container-base flex h-16 items-center justify-between">
        <Link href="/" className="font-onest text-lg font-bold tracking-tight">
          Yuraz<span className="text-accent">Lab</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors duration-200 hover:text-text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="#contact" className="btn-primary hidden px-5 py-2.5 text-sm md:inline-flex">
          Связаться
        </Link>

        <button
          className="flex flex-col gap-1.5 p-2 text-text-muted md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`block h-0.5 w-5 origin-center bg-current transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 origin-center bg-current transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/[0.06] bg-dark/95 backdrop-blur-xl transition-all duration-300 md:hidden ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="container-base flex flex-col gap-4 py-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text-base"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary mt-2 w-fit text-sm" onClick={() => setOpen(false)}>
            Связаться
          </Link>
        </div>
      </div>
    </nav>
  );
}
