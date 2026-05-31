"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function StickyTelegramPill() {
  const [visible, setVisible] = useState(false);
  const [hiddenByContact, setHiddenByContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHiddenByContact(entry.isIntersecting),
      { rootMargin: "-100px 0px 0px 0px" }
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const show = visible && !hiddenByContact;

  return (
    <a
      href="https://t.me/yurazlab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в Telegram"
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50
                  inline-flex items-center gap-2.5
                  bg-accent text-white text-sm font-medium
                  px-5 py-3 rounded-full shadow-lg shadow-accent/30
                  hover:bg-accent/90 hover:-translate-y-0.5
                  transition-all duration-300
                  ${show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Написать в Telegram</span>
      <span className="sm:hidden">Telegram</span>
    </a>
  );
}
