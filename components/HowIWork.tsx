const steps = [
  {
    n: "01",
    title: "Бриф",
    desc: "Понимаю задачу, аудиторию и цели. Задаю вопросы — чем больше контекста, тем точнее результат.",
    time: "1–2 дня",
  },
  {
    n: "02",
    title: "Предложение",
    desc: "Готовлю ТЗ, смету и сроки. Всё фиксируем в документе — никаких сюрпризов в процессе.",
    time: "1 день",
  },
  {
    n: "03",
    title: "Разработка",
    desc: "Строю итерационно: вы видите прогресс на каждом этапе, а не только финальный результат.",
    time: "1–6 недель",
  },
  {
    n: "04",
    title: "Правки",
    desc: "Две-три итерации правок включены в стоимость — корректируем до тех пор, пока не будет именно так.",
    time: "включено",
  },
  {
    n: "05",
    title: "Запуск",
    desc: "Деплой, передача доступов, объяснение как управлять. Проект полностью в ваших руках.",
    time: "1 день",
  },
];

export default function HowIWork() {
  return (
    <section className="section border-t border-white/[0.05]">
      <div className="container-base">
        <p className="label mb-4">Процесс</p>
        <h2 className="heading-lg text-text-base mb-4">Как работаю</h2>
        <p className="text-text-muted max-w-lg mb-12 leading-relaxed">
          Без хаоса и пропавших подрядчиков. Прозрачный процесс с
          фиксированными этапами и сроками.
        </p>

        <div className="flex flex-col gap-4">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5 items-start group">
              {/* Step circle */}
              <div className="relative flex-shrink-0 w-11 h-11 rounded-xl bg-dark-2 border border-white/[0.1] flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                <span className="font-onest font-bold text-xs text-text-muted group-hover:text-accent-light transition-colors">
                  {s.n}
                </span>
              </div>

              {/* Content */}
              <div className="card p-4 md:p-5 flex-1 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-white/[0.16] transition-colors">
                <div className="flex-1">
                  <h3 className="font-onest font-semibold text-text-base mb-1 text-base">
                    {s.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <span className="flex-shrink-0 px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-text-muted text-xs whitespace-nowrap self-start sm:self-auto">
                  {s.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
