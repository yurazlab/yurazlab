"use client";

import { ExternalLink } from "lucide-react";

const completed = [
  {
    status: "Запущен",
    statusColor: "text-emerald-400",
    title: "Транскрибатор SellersHelp — клиентский Telegram-бот",
    description:
      "Telegram-бот для транскрибации аудио и видео с таймкодами и структурированным конспектом. Начинался как внутренний инструмент команды — вырос в отдельный клиентский продукт. Поддерживает YouTube, youtube.ru, VK Видео, Дзен, RuTube, Instagram, TikTok, Яндекс Диск и файлы до 2 ГБ.",
    task: "Дать клиентам и подписчикам SellersHelp инструмент для быстрого разбора встреч, звонков и обучающих видео",
    result: "Запущен как отдельный клиентский продукт: транскрипция с семантическими таймкодами, конспект, записи 2.5+ часов",
    stack: ["Python", "Whisper API", "GPT-4o-mini", "Claude Haiku", "yt-dlp", "ffmpeg", "SQLite", "Vultr VPS"],
    link: "https://t.me/sellershelp_voice_bot",
    linkLabel: "@sellershelp_voice_bot",
  },
  {
    status: "Тестирование",
    statusColor: "text-cyan",
    title: "Бот управления репутацией на маркетплейсах",
    description:
      "Telegram-бот для управления репутацией магазинов на Wildberries и Ozon. Двухэтапный AI-пайплайн: стратег анализирует эмоцию покупателя и суть проблемы → писатель формирует персональный ответ с учётом бренда и базы знаний о товаре. Мультимагазинный режим, несколько менеджеров на магазин, алерты при падении рейтинга, Excel-аналитика по трендам отзывов.",
    task: "Убрать рутину ежедневных ответов на отзывы без потери качества и персонального стиля магазина",
    result: "WB и Ozon: двухэтапный AI на Claude (стратег + писатель), мультимагазинный режим, брендовые подписи, алерты рейтинга ≤2★, Excel-аналитика",
    stack: ["Python", "Claude API", "aiogram", "WB API", "Ozon API", "Supabase", "Vultr VPS"],
    link: "https://t.me/sellershelp_reviews_bot",
    linkLabel: "@sellershelp_reviews_bot",
  },
  {
    status: "Запущен",
    statusColor: "text-emerald-400",
    title: "Генератор договоров — MAX-бот для SellersHelp",
    description:
      "Внутренний бот в мессенджере MAX для автоматической генерации договоров на оказание услуг. Менеджер вводит ИНН — бот сам запрашивает реквизиты через DaData, проводит 16-шаговый диалог и отправляет готовый DOCX за 1 минуту вместо 10+. В планах: генерация счетов и актов для действующих клиентов.",
    task: "Убрать рутину ручного заполнения договоров при каждом новом клиенте — исключить опечатки в реквизитах и сократить время оформления",
    result: "Запущен для внутреннего использования командой SellersHelp. ИНН → реквизиты через DaData + диалог по тарифу и условиям → готовый DOCX за 1 минуту вместо 10+",
    stack: ["Python", "MAX Bot API", "DaData API", "python-docx", "aiogram FSM"],
    link: "",
    linkLabel: "",
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
  },
];

const inProgress = [
  {
    status: "В разработке",
    statusClass: "text-accent-light",
    title: "Цифровая экосистема для маркетплейсов",
    description:
      "Комплекс SaaS-инструментов для продавцов WB и Ozon: юнит-калькулятор, квиз-диагностика, бот управления отзывами. Каждый продукт генерирует лиды для остальных. Экосистема включает Тегатор — командный бот для упоминаний участников в Telegram-группе.",
    task: "Сделать цифровые продукты основным источником дохода бизнеса",
    stack: ["Next.js", "TypeScript", "Supabase", "AI", "Python"],
    link: "https://sellershelpai.ru",
    linkLabel: "sellershelpai.ru",
  },
];

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
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-light transition-colors"
                  >
                    {p.linkLabel}
                    <ExternalLink size={12} />
                  </a>
                )}
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

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs tracking-tight bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md text-accent-light"
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
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-2 text-xs font-medium ${p.statusClass}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" />
                  {p.status}
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-light transition-colors"
                  >
                    {p.linkLabel}
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>

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
                    className="font-mono text-xs tracking-tight bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md text-accent-light"
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
