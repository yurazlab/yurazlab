const tools = [
  {
    emoji: "📚",
    title: "Толкователь Знаний Создателя",
    description:
      "Персональная AI-энциклопедия по заданной теме с функцией глубокого поиска и анализа. Использую сам для работы с контентом.",
    tag: "Использую регулярно",
    tagClass: "text-cyan bg-cyan/10 border-cyan/20",
  },
  {
    emoji: "⚖️",
    title: "Договоры SellersHelp",
    description:
      "AI-помощник для работы с договорами агентства — анализ, составление, проверка условий по шаблонам SellersHelp.",
    tag: "Для агентства",
    tagClass: "text-accent-light bg-accent/10 border-accent/20",
  },
  {
    emoji: "🎙️",
    title: "Ассистент онлайн-встреч",
    description:
      "Помогает готовиться к встречам, структурировать повестку и фиксировать итоги в удобном формате.",
    tag: "Продуктивность",
    tagClass: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    emoji: "💬",
    title: "Коммуникатор SellersHelp",
    description:
      "AI-инструмент для коммуникаций команды агентства — помогает формулировать ответы клиентам и внутренние сообщения.",
    tag: "Для команды",
    tagClass: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  },
];

export default function GptTools() {
  return (
    <section className="section border-t border-white/[0.05]">
      <div className="container-base">
        <p className="label mb-4">AI-инструменты</p>
        <h2 className="heading-lg text-text-base mb-4">GPT-агенты</h2>
        <p className="text-text-muted max-w-xl mb-12 leading-relaxed">
          Создал 4 кастомных GPT под конкретные задачи бизнеса и личной
          продуктивности. Один использую ежедневно.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {tools.map((t) => (
            <div
              key={t.title}
              className="card p-6 flex flex-col gap-4 hover:border-white/[0.16] transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-3xl leading-none">{t.emoji}</span>
                <span
                  className={`px-2.5 py-1 text-xs font-medium rounded-full border ${t.tagClass}`}
                >
                  {t.tag}
                </span>
              </div>

              <div>
                <h3 className="font-onest font-semibold text-text-base mb-2 text-base">
                  {t.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
