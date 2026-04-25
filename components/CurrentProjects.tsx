import { ExternalLink } from "lucide-react";

const completed = [
  {
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
    status: "В работе",
    statusClass: "text-cyan",
    title: "AI-бот для маркетплейсов",
    description:
      "Автоматизирует ответы на типовые вопросы покупателей на Wildberries и Ozon. Понимает контекст и отвечает как живой менеджер.",
    task: "Освободить команду от рутинных диалогов с покупателями",
    stack: ["Python", "Telegram Bot API", "OpenAI API"],
  },
  {
    status: "В разработке",
    statusClass: "text-accent-light",
    title: "Цифровая экосистема для маркетплейсов",
    description:
      "Комплекс инструментов для управления бизнесом: аналитика, автоматизация закупок, единый дашборд для всей команды.",
    task: "Объединить все рабочие процессы в одну управляемую систему",
    stack: ["Next.js", "TypeScript", "AI", "API-интеграции"],
  },
];

export default function CurrentProjects() {
  return (
    <section id="projects" className="section border-t border-white/[0.05]">
      <div className="container-base">
        <p className="label mb-4">Проекты</p>
        <h2 className="heading-lg text-text-base mb-12">Что делаю</h2>

        {/* Completed */}
        <p className="label mb-5">Завершённые</p>
        <div className="grid md:grid-cols-1 gap-6 mb-12">
          {completed.map((p) => (
            <div
              key={p.title}
              className="card p-6 md:p-8 flex flex-col gap-5 hover:border-white/[0.16] transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  Запущен
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
                <p className="text-text-muted text-sm leading-relaxed">
                  {p.description}
                </p>
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
                    className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs rounded-full"
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
        <div className="grid md:grid-cols-2 gap-6">
          {inProgress.map((p) => (
            <div
              key={p.title}
              className="card p-6 md:p-8 flex flex-col gap-5 hover:border-white/[0.16] transition-colors duration-300"
            >
              <span
                className={`inline-flex items-center gap-2 text-xs font-medium ${p.statusClass}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" />
                {p.status}
              </span>

              <div>
                <h3 className="heading-md text-text-base mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                <p className="label mb-1">Задача</p>
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
