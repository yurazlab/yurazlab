const projects = [
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
    <section
      id="projects"
      className="section border-t border-white/[0.05]"
    >
      <div className="container-base">
        <p className="label mb-4">Текущая работа</p>
        <h2 className="heading-lg text-text-base mb-4">Что строю сейчас</h2>
        <p className="text-text-muted max-w-xl mb-12 leading-relaxed">
          Параллельно с изучением разработки строю реальные продукты —
          портфолио формируется прямо в процессе.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="card p-6 md:p-8 flex flex-col gap-5 hover:border-white/[0.16] transition-colors duration-300"
            >
              {/* Status */}
              <span
                className={`inline-flex items-center gap-2 text-xs font-medium ${p.statusClass}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" />
                {p.status}
              </span>

              {/* Title & description */}
              <div>
                <h3 className="heading-md text-text-base mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Task */}
              <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                <p className="label mb-1">Задача</p>
                <p className="text-text-base text-sm leading-snug">{p.task}</p>
              </div>

              {/* Stack */}
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
