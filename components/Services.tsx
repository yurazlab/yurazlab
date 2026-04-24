import { Bot, Zap, Globe, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  result: string;
  iconClass: string;
  iconBg: string;
  iconBorder: string;
}

const services: Service[] = [
  {
    icon: Bot,
    title: "AI-агенты и чат-боты",
    description:
      "Боты, которые квалифицируют лидов, отвечают на вопросы клиентов и работают без участия менеджера — 24/7.",
    result: "80% типовых запросов закрывается автоматически",
    iconClass: "text-cyan",
    iconBg: "bg-cyan/10",
    iconBorder: "border-cyan/25",
  },
  {
    icon: Zap,
    title: "Автоматизация процессов",
    description:
      "Интеграции между сервисами, Make / n8n / Zapier пайплайны, API-связки — рутинные операции уходят из ваших рук.",
    result: "Освобождаем 10–30 часов в неделю",
    iconClass: "text-accent-light",
    iconBg: "bg-accent/10",
    iconBorder: "border-accent/25",
  },
  {
    icon: Globe,
    title: "Разработка сайтов",
    description:
      "Лендинги и корпоративные сайты под ключ: дизайн, разработка, деплой. PageSpeed 90+, адаптив, SEO-основа.",
    result: "Запуск от 2 недель",
    iconClass: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    iconBorder: "border-emerald-400/25",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    description:
      "MVP мобильных приложений для стартапов: от wireframe до публикации в App Store и Google Play.",
    result: "В планах — добавлю опыт к концу 2026",
    iconClass: "text-orange-400",
    iconBg: "bg-orange-400/10",
    iconBorder: "border-orange-400/25",
  },
];

export default function Services() {
  return (
    <section id="services" className="section border-t border-white/[0.05]">
      <div className="container-base">
        <p className="label mb-4">Что делаю</p>
        <h2 className="heading-lg text-text-base mb-12">Услуги</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="card p-6 md:p-8 flex flex-col gap-5 hover:border-white/[0.16] transition-colors duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${s.iconBg} border ${s.iconBorder} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={22} className={s.iconClass} />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="heading-md text-text-base mb-2">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Result */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-text-muted text-xs">{s.result}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
