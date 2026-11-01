"use client";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { bodyClass, containerClass, headingClass, outlineButtonClass, sectionClass } from "@/components/PortfolioUi";

type Intent = "team" | "business";
export default function Contact({ intent: initialIntent }: { intent?: Intent }) {
  const [intent, setIntent] = useState<Intent | undefined>(initialIntent);
  useEffect(() => {
    const sync = () => { const hash = window.location.hash; setIntent(hash === "#contact-team" ? "team" : hash === "#contact-business" ? "business" : initialIntent); };
    sync();window.addEventListener("hashchange",sync);return () => window.removeEventListener("hashchange",sync);
  },[initialIntent]);
  return <section id="contact" className={`${sectionClass} relative text-center`}><span id="contact-business" className="absolute top-0" aria-hidden="true" /><span id="contact-team" className="absolute top-0" aria-hidden="true" /><div className={containerClass}>
    {intent && <p className="mb-3 text-sm text-[#b8b6ff]">{intent === "team" ? "Совместная работа с командой" : "Обсуждение бизнес-процесса"}</p>}
    <h2 className={headingClass}>Обсудим вашу задачу</h2>
    <p className={`${bodyClass} mx-auto mt-[18px] max-w-[700px]`}>{intent === "team" ? "Напишите, какой продукт вы делаете, на каком он этапе и какую задачу хотите поручить. Обсудим, где я могу быть полезен команде." : "Напишите, какой процесс хотите улучшить, где возникает затруднение и какой результат нужен."}</p>
    <div className="mt-7 flex flex-wrap justify-center gap-3"><a className={outlineButtonClass} href="https://t.me/yurazlab" target="_blank" rel="noopener noreferrer"><img src="/evidence/telegram.svg" alt="" aria-hidden="true" width={22} height={22} className="h-[22px] w-[22px] shrink-0" />Написать в Telegram</a><a className={outlineButtonClass} href="mailto:yurazlab@gmail.com"><Mail size={20} aria-hidden="true" className="shrink-0" />yurazlab@gmail.com</a></div>
  </div></section>;
}
