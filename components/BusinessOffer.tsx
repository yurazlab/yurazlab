import { ArrowRight, Search, Sparkles, Wrench } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Разобрать процесс",
    text: "Выяснить, где AI или автоматизация действительно снимут ручную работу или улучшат сервис.",
  },
  {
    icon: Sparkles,
    title: "Собрать и проверить прототип",
    text: "Показать решение на реальных сценариях до более крупной разработки.",
  },
  {
    icon: Wrench,
    title: "Довести до эксплуатации",
    text: "Организовать тестирование, исправления и понятный рабочий сценарий.",
  },
];

export default function BusinessOffer() {
  return (
    <section id="business" className="section scroll-mt-16 border-t border-white/[0.05]">
      <div className="container-base">
        <div className="card overflow-hidden">
          <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <p className="label mb-4">Для бизнеса</p>
              <h2 className="heading-lg mb-5 text-text-base">AI-продукт или автоматизация под конкретную задачу</h2>
              <p className="mb-8 max-w-xl leading-relaxed text-text-muted">
                Подключаюсь как руководитель проекта и практик: помогаю определить требования,
                проверить идею и довести решение до рабочего применения.
              </p>
              <a href="#contact" className="btn-primary">
                Обсудить задачу <ArrowRight size={16} />
              </a>
            </div>

            <ol className="grid gap-4">
              {steps.map(({ icon: Icon, title, text }, index) => (
                <li key={title} className="flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-5">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent/10 text-accent-light">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-cyan">Шаг {index + 1}</p>
                    <h3 className="mb-1 font-onest font-semibold text-text-base">{title}</h3>
                    <p className="text-sm leading-relaxed text-text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
