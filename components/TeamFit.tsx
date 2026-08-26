import { ClipboardCheck, FlaskConical, MessageSquareMore, Route } from "lucide-react";

const capabilities = [
  {
    icon: Route,
    title: "Связываю задачу бизнеса с продуктом",
    text: "Уточняю цель, пользователей, ограничения и критерии результата.",
  },
  {
    icon: FlaskConical,
    title: "Проверяю гипотезу на практике",
    text: "Участвую в прототипировании и проверяю решение на реальных сценариях.",
  },
  {
    icon: ClipboardCheck,
    title: "Организую качество",
    text: "Координирую тестирование, собираю ошибки и определяю приоритет доработок.",
  },
  {
    icon: MessageSquareMore,
    title: "Работаю с обратной связью",
    text: "Сопоставляю отзывы пользователей с задачей и последовательно улучшаю продукт.",
  },
];

export default function TeamFit() {
  return (
    <section id="team" className="section scroll-mt-16 border-t border-white/[0.05]">
      <div className="container-base">
        <p className="label mb-4">В команду</p>
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h2 className="heading-lg max-w-3xl text-text-base">
            Беру ответственность за путь от бизнес-задачи до работающего решения
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-text-muted lg:justify-self-end">
            Готов подключиться к команде как руководитель AI-проекта: связываю бизнес-задачу
            с созданием, проверкой и дальнейшим развитием решения. Формат работы — частичная занятость
            или проектная работа, удалённо.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card p-6 md:p-7">
              <Icon className="mb-5 text-cyan" size={24} aria-hidden="true" />
              <h3 className="mb-2 font-onest text-lg font-semibold text-text-base">{title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
