import Image from "next/image";
import { ExternalLink } from "lucide-react";

const facts = [
  { value: "25+ лет", label: "Продажи и управление" },
  { value: "С 2019", label: "Маркетплейсы" },
  { value: "С мая 2025", label: "Системное применение AI" },
  { value: "С апреля 2026", label: "Практические AI-проекты" },
];

export default function About() {
  return (
    <section id="about" className="section scroll-mt-16 border-t border-white/[0.05]">
      <div className="container-base">
        <p className="label mb-4">Обо мне</p>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08] bg-surface">
              <Image
                src="/photo.jpg"
                alt="Юрий Зуев"
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          <div>
            <h2 className="heading-lg mb-7 text-text-base">
              Юрий Зуев — руководитель AI-проектов
            </h2>

            <div className="mb-9 max-w-3xl space-y-4 leading-relaxed text-text-muted">
              <p>
                Более 25 лет работаю в продажах и управлении. С 2019 года занимаюсь бизнесом
                на маркетплейсах.
              </p>
              <p>
                Системно применяю AI с мая 2025 года. С апреля 2026 года создаю сайты, ботов,
                автоматизации и AI-продукты.
              </p>
              <p>
                В проектах отвечаю за связь бизнес-задачи с рабочим решением: требования,
                сценарии, проверку на реальных случаях и улучшения по обратной связи.
              </p>
              <p className="text-text-base">Сооснователь Sellers Help.</p>
            </div>

            <dl className="mb-9 grid gap-3 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <dt className="mb-1 text-xs text-text-muted">{fact.label}</dt>
                  <dd className="font-onest font-semibold text-text-base">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href="https://sellershelpai.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-accent-light"
              >
                Sellers Help AI <ExternalLink size={13} aria-hidden="true" />
              </a>
              <a
                href="https://sellershelp.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-accent-light"
              >
                Sellers Help <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
