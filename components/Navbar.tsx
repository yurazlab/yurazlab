import Link from "next/link";
import { containerClass } from "@/components/PortfolioUi";

export default function Navbar() {
  return <><a href="#main" className="sr-only z-50 rounded bg-dark p-3 text-white focus:not-sr-only focus:absolute focus:left-3 focus:top-3">К содержанию</a><header className="border-b border-white/10"><div className={`${containerClass} flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-[18px]`}>
    <Link href="/" aria-label="Yuraz Lab — главная" className="font-onest text-[23px] font-semibold leading-tight tracking-[-.035em] text-[#f4f3fa]">Yuraz<span className="text-cyan">Lab</span></Link>
    <nav aria-label="Основная навигация" className="flex flex-wrap items-center gap-x-[18px] gap-y-1 text-[13px] text-[#f4f3fa] min-[761px]:gap-x-[25px] min-[761px]:text-sm">
      <Link className="inline-flex min-h-[42px] items-center hover:text-[#b8b6ff]" href="/#projects">Кейсы</Link>
      <Link className="inline-flex min-h-[42px] items-center hover:text-[#b8b6ff]" href="/projects">Все проекты</Link>
      <Link className="inline-flex min-h-[42px] items-center hover:text-[#b8b6ff]" href="/#cooperation">Сотрудничество</Link>
      <Link className="inline-flex min-h-[42px] items-center hover:text-[#b8b6ff]" href="/#contact">Контакты</Link>
    </nav>
  </div></header></>;
}
