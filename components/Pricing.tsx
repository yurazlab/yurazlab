import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Лендинг",
    price: "от 35 000 ₽",
    time: "2–3 недели",
    includes: [
      "Уникальный дизайн и вёрстка",
      "Адаптив под мобильные",
      "Подключение Яндекс.Метрики",
      "Деплой и настройка домена",
    ],
  },
  {
    title: "Корпоративный сайт",
    price: "от 60 000 ₽",
    time: "3–5 недель",
    includes: [
      "До 10 страниц",
      "Уникальный дизайн",
      "Адаптив + SEO-основа",
      "Форма обратной связи",
    ],
  },
  {
    title: "Telegram-бот с AI",
    price: "от 35 000 ₽",
    time: "1–2 недели",
    includes: [
      "Ответы на вопросы 24/7",
      "Текст, фото, голосовые",
      "Деплой на сервере",
      "Инструкция по управлению",
    ],
  },
  {
    title: "AI-агент с интеграциями",
    price: "от 70 000 ₽",
    time: "2–4 недели",
    includes: [
      "Интеграция с CRM / базой данных",
      "Квалификация лидов",
      "Обработка заявок автоматически",
      "Настройка под бизнес-процесс",
    ],
  },
  {
    title: "Автоматизация (1 workflow)",
    price: "от 15 000 ₽",
    time: "3–7 дней",
    includes: [
      "Связка двух и более сервисов",
      "Make / n8n / Zapier",
      "Тест на реальных данных",
      "Документация по сценарию",
    ],
  },
];

const featured = {
  title: "Комплекс",
  subtitle: "Сайт + AI-бот + автоматизация",
  price: "от 90 000 ₽",
  time: "4–6 недель",
  tag: "Популярный выбор",
  includes: [
    "Лендинг или корпоративный сайт",
    "Telegram-бот с AI",
    "1–2 автоматизации процессов",
    "Деплой всего стека",
    "Месяц поддержки в подарок",
  ],
};

const support = {
  title: "Техподдержка",
  price: "от 8 000 ₽/мес",
  includes: [
    "Мониторинг работоспособности",
    "Исправление ошибок",
    "Мелкие правки и обновления",
    "Консультации в Telegram",
  ],
};

export default function Pricing() {
  return (
    <section id="pricing" className="section border-t border-white/[0.05]">
      <div className="container-base">
        <p className="label mb-4">Стоимость</p>
        <h2 className="heading-lg text-text-base mb-4">Цены</h2>
        <p className="text-text-muted max-w-xl mb-12 leading-relaxed">
          Фиксированные цены — без сюрпризов в процессе. Финальная стоимость
          зависит от сложности задачи, обсуждаем на старте.
        </p>

        {/* Featured package */}
        <div className="card p-6 md:p-8 border-accent/30 bg-accent/[0.04] mb-6 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
              {featured.tag}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="heading-md text-text-base mb-1">{featured.title}</h3>
              <p className="text-text-muted text-sm mb-5">{featured.subtitle}</p>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-onest font-bold text-3xl text-text-base">
                  {featured.price}
                </span>
              </div>
              <p className="text-text-muted text-xs">{featured.time}</p>
            </div>

            <div className="flex flex-col gap-2">
              {featured.includes.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span className="text-text-base text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Individual services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="card p-5 flex flex-col gap-4 hover:border-white/[0.16] transition-colors duration-300"
            >
              <div>
                <h3 className="font-onest font-semibold text-text-base mb-1">
                  {s.title}
                </h3>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-onest font-bold text-xl text-text-base">
                    {s.price}
                  </span>
                  <span className="text-text-muted text-xs">{s.time}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 pt-3 border-t border-white/[0.06]">
                {s.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-text-muted mt-1.5 flex-shrink-0" />
                    <span className="text-text-muted text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Support card */}
          <div className="card p-5 flex flex-col gap-4 hover:border-white/[0.16] transition-colors duration-300 border-dashed">
            <div>
              <h3 className="font-onest font-semibold text-text-base mb-1">
                {support.title}
              </h3>
              <span className="font-onest font-bold text-xl text-text-base">
                {support.price}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 pt-3 border-t border-white/[0.06]">
              {support.includes.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-text-muted mt-1.5 flex-shrink-0" />
                  <span className="text-text-muted text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-text-base font-medium mb-1">
              Не знаете что подойдёт для вашей задачи?
            </p>
            <p className="text-text-muted text-sm">
              Опишите задачу — отвечу в течение дня и рассчитаю стоимость.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary flex-shrink-0 text-sm"
          >
            Обсудить проект <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
