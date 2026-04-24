import { ArrowRight } from "lucide-react";

const stats = [
  { value: "1", label: "Бот", desc: "запущен" },
  { value: "→", label: "Экосистема", desc: "в разработке" },
  { value: "∞", label: "Building", desc: "in public" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Gradient glow from top */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Cyan accent blob (bottom right) */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, #22D3EE 0%, transparent 70%)",
        }}
      />

      <div className="container-base relative z-10 py-20 md:py-28">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.1] rounded-full px-4 py-1.5 text-sm text-text-muted mb-10">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-slow flex-shrink-0" />
          Открыт для новых проектов
        </div>

        {/* Main heading */}
        <h1 className="heading-xl text-text-base mb-6 max-w-4xl">
          Создаю{" "}
          <span className="text-accent">нейропродукты</span>{" "}
          <br className="hidden md:block" />
          для бизнеса
        </h1>

        {/* Subheading */}
        <p className="text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          Разрабатываю сайты, приложения и AI-агентов, которые
          автоматизируют рутину и освобождают время для роста.
          Строю публично — шаг за шагом.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#contact" className="btn-primary">
            Обсудить проект <ArrowRight size={16} />
          </a>
          <a
            href="https://t.me/yurazlab"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            @yurazlab в Telegram
          </a>
        </div>

        {/* Stat badges */}
        <div className="flex flex-wrap gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="card px-5 py-3.5 flex items-center gap-3 hover:border-white/[0.16] transition-colors duration-200"
            >
              <span className="font-onest font-bold text-xl text-text-base leading-none">
                {s.value}
              </span>
              <div>
                <p className="text-text-base text-sm font-medium leading-tight">
                  {s.label}
                </p>
                <p className="text-text-muted text-xs leading-tight">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
