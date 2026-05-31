import { ArrowRight } from "lucide-react";

const trustMarkers = [
  { value: "25+", label: "лет в продажах" },
  { value: "600+", label: "клиентов SellersHelp" },
  { value: "6+", label: "лет на маркетплейсах" },
  { value: "5+", label: "AI-продуктов" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Multi-layer ambient glow — indigo top-left, cyan bottom-right,
          violet mid-left. Asymmetric for visual depth. */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-[15%] left-[10%] w-[70%] h-[60%]"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 30%, rgba(99,102,241,0.20), transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-5%] w-[55%] h-[70%]"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 30%, rgba(34,211,238,0.10), transparent 65%)",
          }}
        />
        <div
          className="absolute top-[40%] left-[-15%] w-[40%] h-[40%]"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-base relative z-10">
        <div className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.1] rounded-full px-4 py-1.5 text-sm text-text-muted mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-slow flex-shrink-0" />
          Открыт для новых проектов
        </div>

        <h1 className="heading-xl text-text-base mb-6 max-w-4xl">
          Создаю{" "}
          <span className="text-accent whitespace-nowrap">AI&#8209;продукты</span>{" "}
          <br className="hidden md:block" />
          для бизнеса
        </h1>

        <p className="text-cyan text-lg md:text-2xl font-medium mb-6 max-w-3xl">
          25+ лет в продажах{" "}
          <span className="text-text-muted">→</span>{" "}
          теперь строю{" "}
          <span className="whitespace-nowrap">AI&#8209;продукты</span>
        </p>

        <p className="text-text-muted text-lg max-w-3xl leading-relaxed mb-10">
          Telegram-боты, AI-агенты и автоматизации под ключ. Сооснователь{" "}
          <span className="text-text-base font-medium">SellersHelp</span>{" "}
          (600+ клиентов на маркетплейсах) и SellersHelp AI. От 35 000 ₽,
          запуск за 1–4 недели.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="https://t.me/yurazlab"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Описать задачу <ArrowRight size={16} />
          </a>
          <a href="#projects" className="btn-ghost">
            Посмотреть кейсы
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
          {trustMarkers.map((m, i) => (
            <span key={m.label} className="inline-flex items-center gap-x-5">
              <span className="whitespace-nowrap">
                <span className="text-text-base font-semibold font-onest">
                  {m.value}
                </span>{" "}
                {m.label}
              </span>
              {i < trustMarkers.length - 1 && (
                <span className="text-white/20" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
