import { ArrowRight } from "lucide-react";

const trustMarkers = [
  "25+ лет в продажах и управлении",
  "С 2019 года на маркетплейсах",
  "С апреля 2026 года создаю AI-продукты",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[15%] left-[10%] h-[60%] w-[70%] bg-[radial-gradient(ellipse_60%_100%_at_50%_30%,rgba(99,102,241,0.20),transparent_65%)]" />
        <div className="absolute -bottom-[20%] -right-[5%] h-[70%] w-[55%] bg-[radial-gradient(ellipse_60%_100%_at_50%_30%,rgba(34,211,238,0.10),transparent_65%)]" />
      </div>

      <div className="container-base relative z-10">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.06] px-4 py-1.5 text-sm text-text-muted">
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-cyan" />
          Открыт к работе в команде
        </div>

        <p className="mb-3 font-onest text-xl font-semibold text-text-muted md:text-2xl">Юрий Зуев</p>
        <h1 className="heading-xl mb-7 max-w-5xl text-text-base">
          Руководитель <span className="text-accent">AI&#8209;проектов</span>
        </h1>

        <p className="mb-5 max-w-3xl text-lg leading-relaxed text-text-muted md:text-xl">
          Помогаю превращать бизнес-задачи в работающие AI-инструменты: определяю требования,
          лично участвую в прототипировании и проверке, координирую тестирование и доработки.
        </p>
        <p className="mb-10 max-w-3xl text-base text-text-base md:text-lg">
          Рассматриваю частичную или проектную удалённую работу.
        </p>

        <div className="mb-12 flex flex-col gap-4 sm:flex-row">
          <a href="#projects" className="btn-primary">
            Смотреть кейсы <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-ghost">Связаться</a>
        </div>

        <div className="flex flex-col gap-3 text-sm text-text-muted sm:flex-row sm:flex-wrap sm:gap-x-6">
          {trustMarkers.map((marker) => (
            <span key={marker} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
              {marker}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
