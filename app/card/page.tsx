import type { Metadata } from "next";
import { Download, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Юрий Зуев — визитка",
  description: "AI-автоматизация для бизнеса. Телефон, Telegram и сайт Юрия Зуева.",
  alternates: { canonical: "https://yurazlab.ru/card" },
  robots: { index: false, follow: true },
  openGraph: { title: "Юрий Зуев", description: "AI-автоматизация для бизнеса.", url: "https://yurazlab.ru/card" },
};

const button = "flex min-h-12 items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400";

export default function ContactCardPage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[480px] items-start px-4 py-6 sm:py-12">
      <article aria-label="Визитка Юрия Зуева" className="w-full rounded-[28px] border border-white/10 bg-[#13131d] p-6 sm:p-8">
        <header>
          <h1 className="font-onest text-[27px] font-bold leading-tight tracking-tight text-white">Юрий Зуев</h1>
          <p className="mt-3 text-base leading-relaxed text-zinc-300">AI-автоматизация для бизнеса.</p>
        </header>
        <div className="mb-6 mt-7 flex flex-col gap-2">
          <a href="tel:+79127662687" className="w-fit text-xl text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">+7 912 766-26-87</a>
          <a href="https://t.me/yurazlab" className="w-fit text-base text-indigo-300 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">@yurazlab</a>
        </div>
        <nav aria-label="Связаться и сохранить контакт" className="grid grid-cols-2 gap-2.5">
          <a href="/card/contact" download="yuri-zuev.vcf" className={button + " col-span-2 border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-600"}><Download aria-hidden="true" size={18} />Сохранить контакт</a>
          <a href="https://t.me/yurazlab" className={button + " border-white/15 bg-white/5 hover:bg-white/10"}><MessageCircle aria-hidden="true" size={17} />Написать</a>
          <a href="tel:+79127662687" className={button + " border-white/15 bg-white/5 hover:bg-white/10"}><Phone aria-hidden="true" size={17} />Позвонить</a>
        </nav>
        <div className="mb-6 mt-6 flex min-h-11 flex-wrap items-center gap-x-3 gap-y-2 text-base">
          <span className="text-zinc-400">Сайт:</span><a href="https://yurazlab.ru" className="py-2 text-indigo-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">yurazlab.ru</a>
        </div>
        <section aria-label="QR-код визитки" className="border-t border-white/10 pt-6 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/card/qr.png" width="740" height="740" alt="QR-код визитки Юрия Зуева с логотипом YL" className="mx-auto h-auto w-[238px] max-w-full rounded-xl bg-white" />
          <p className="mt-4 text-sm text-zinc-400">Покажите QR при знакомстве</p>
        </section>
      </article>
    </main>
  );
}
