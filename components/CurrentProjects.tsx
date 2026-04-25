"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const neuroScreenshots = [
  { src: "/cases/neuro-electric/ne-05-photo-panel.jpg", caption: "Анализ фото щитка" },
  { src: "/cases/neuro-electric/ne-06-voice.jpg", caption: "Голосовой запрос" },
  { src: "/cases/neuro-electric/ne-01-wiring-advice.jpg", caption: "Совет по разводке" },
  { src: "/cases/neuro-electric/ne-04-cable-calc.jpg", caption: "Расчёт кабеля" },
  { src: "/cases/neuro-electric/ne-03-panel-72.jpg", caption: "Выбор размера щита" },
  { src: "/cases/neuro-electric/ne-02-rewiring-total.jpg", caption: "Смета замены проводки" },
];

const completed = [
  {
    status: "Тестирование",
    statusColor: "text-cyan",
    title: "НейроЭлектрик — AI-бот для электриков",
    description:
      "Первый в России AI-ассистент для частных электриков. Принимает текст, фото щитка и голосовые — отвечает как опытный коллега: план работ, материалы с ценами в ₽, ссылки на ПУЭ 7. Работает в Telegram 24/7.",
    task: "Дать электрику ответ на объекте за 5–10 секунд — без поиска, без звонков",
    result: "MVP запущен, идёт живое тестирование с реальным электриком",
    stack: ["Python", "Claude API", "Whisper API", "Telegram Bot", "EU VPS"],
    link: "https://t.me/neuro_electric_bot",
    linkLabel: "@neuro_electric_bot",
    hasScreenshots: true,
  },
  {
    status: "Запущен",
    statusColor: "text-emerald-400",
    title: "Сайт агентства SellersHelp",
    description:
      "Корпоративный сайт для агентства по продвижению на маркетплейсах Wildberries и Ozon. Полный цикл: дизайн, разработка, деплой.",
    task: "Создать продающий сайт для агентства с 1000+ клиентами",
    result: "Запущен, обслуживает действующих и новых клиентов агентства",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Timeweb"],
    link: "https://sellershelp.ru",
    linkLabel: "sellershelp.ru",
    hasScreenshots: false,
  },
];

const inProgress = [
  {
    status: "В разработке",
    statusClass: "text-accent-light",
    title: "Цифровая экосистема для маркетплейсов",
    description:
      "Комплекс SaaS-инструментов для продавцов WB и Ozon: юнит-калькулятор, квиз-диагностика, бот управления отзывами. Каждый продукт генерирует лиды для остальных.",
    task: "Сделать цифровые продукты основным источником дохода бизнеса",
    stack: ["Next.js", "TypeScript", "Supabase", "AI", "Python"],
  },
];

function ScreenshotsGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div>
        <p className="label mb-3">Примеры диалогов с ботом</p>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {neuroScreenshots.map((s) => (
            <button
              key={s.src}
              onClick={() => setLightbox(s.src)}
              className="flex-shrink-0 group text-left"
            >
              <div
                className="relative rounded-xl overflow-hidden border border-white/[0.08] group-hover:border-accent/40 transition-colors duration-200"
                style={{ width: "80px", height: "176px" }}
              >
                <Image
                  src={s.src}
                  alt={s.caption}
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                />
              </div>
              <p className="text-text-muted text-[10px] mt-1.5 text-center leading-tight" style={{ width: "80px" }}>
                {s.caption}
              </p>
            </button>
          ))}
        </div>
        <p className="text-text-muted text-xs mt-2">Нажми на скрин — откроется полностью</p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-[90vh] max-w-[400px] w-full">
            <Image
              src={lightbox}
              alt="Диалог с НейроЭлектрик"
              width={400}
              height={880}
              className="rounded-2xl w-full h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark/80 border border-white/[0.15] text-text-muted hover:text-text-base flex items-center justify-center text-sm transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function CurrentProjects() {
  return (
    <section id="projects" className="section border-t border-white/[0.05]">
      <div className="container-base">
        <p className="label mb-4">Проекты</p>
        <h2 className="heading-lg text-text-base mb-12">Что делаю</h2>

        {/* Completed / Launched */}
        <p className="label mb-5">Запущено</p>
        <div className="flex flex-col gap-6 mb-12">
          {completed.map((p) => (
            <div
              key={p.title}
              className="card p-6 md:p-8 flex flex-col gap-5 hover:border-white/[0.16] transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-2 text-xs font-medium ${p.statusColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" />
                  {p.status}
                </span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-light transition-colors"
                >
                  {p.linkLabel}
                  <ExternalLink size={12} />
                </a>
              </div>

              <div>
                <h3 className="heading-md text-text-base mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{p.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                  <p className="label mb-1">Задача</p>
                  <p className="text-text-base text-sm leading-snug">{p.task}</p>
                </div>
                <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                  <p className="label mb-1">Результат</p>
                  <p className="text-text-base text-sm leading-snug">{p.result}</p>
                </div>
              </div>

              {p.hasScreenshots && <ScreenshotsGallery />}

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent-light text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* In progress */}
        <p className="label mb-5">В процессе</p>
        <div className="grid md:grid-cols-1 gap-6">
          {inProgress.map((p) => (
            <div
              key={p.title}
              className="card p-6 md:p-8 flex flex-col gap-5 hover:border-white/[0.16] transition-colors duration-300"
            >
              <span className={`inline-flex items-center gap-2 text-xs font-medium ${p.statusClass}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" />
                {p.status}
              </span>

              <div>
                <h3 className="heading-md text-text-base mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{p.description}</p>
              </div>

              <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                <p className="label mb-1">Цель</p>
                <p className="text-text-base text-sm leading-snug">{p.task}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent-light text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
