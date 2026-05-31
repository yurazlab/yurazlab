import Image from "next/image";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Telegram Bot API",
  "Claude API",
  "OpenAI API",
  "Whisper",
  "Tailwind CSS",
  "Make / n8n",
  "Supabase",
  "Vercel",
];

const facts = [
  { label: "Опыт в продажах", value: "25+ лет" },
  { label: "В e-commerce с", value: "2019" },
  { label: "Подход", value: "Build in public" },
  { label: "Статус", value: "Открыт" },
];

export default function About() {
  return (
    <section id="about" className="section border-t border-white/[0.05]">
      <div className="container-base">
        <p className="label mb-4">Обо мне</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: story + links */}
          <div>
            {/* Photo */}
          <div className="mb-8">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-2 ring-accent/30 ring-offset-4 ring-offset-dark">
              <Image
                src="/photo.jpg"
                alt="Юрий — основатель Yuraz Lab"
                fill
                sizes="(max-width: 768px) 112px, 144px"
                quality={95}
                className="object-cover object-[center_22%]"
                priority
              />
            </div>
          </div>

          <h2 className="heading-lg text-text-base mb-6">
              Юрий Зуев — основатель{" "}
              <span className="text-accent whitespace-nowrap">Yuraz&nbsp;Lab</span>
            </h2>

            <div className="flex flex-col gap-4 text-text-muted leading-relaxed text-[15px]">
              <p>
                25+ лет в продажах и маркетинге — онлайн и оффлайн, в товарах
                и услугах, в разных индустриях.
              </p>
              <p>
                С 2019 года в e-commerce на российских маркетплейсах
                (Wildberries, Ozon, Яндекс Маркет, СберМегаМаркет, AliExpress).
                В том же году вместе с партнёром основал{" "}
                <span className="text-text-base">SellersHelp</span> — агентство
                по продвижению на маркетплейсах, выросло до 600+ клиентов.
              </p>
              <p>
                В 2025 запустил{" "}
                <span className="text-text-base">Yuraz Lab</span> —
                микро-агентство AI-разработки под ключ для бизнеса любой сферы.
                Параллельно развиваю{" "}
                <span className="text-text-base">SellersHelp AI</span> —
                цифровую экосистему для продавцов маркетплейсов.
              </p>
              <p>
                Я не классический разработчик — я предприниматель, который
                научился строить AI-продукты. Бизнес-задачу понимаю как практик,
                а не как теоретик. Работаю публично — каждый проект открытый.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://t.me/yurazlab"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Telegram
              </a>
              <a
                href="mailto:yurazlab@gmail.com"
                className="btn-ghost text-sm"
              >
                Email
              </a>
            </div>
          </div>

          {/* Right: stack + facts */}
          <div className="flex flex-col gap-5">
            {/* Stack */}
            <div className="card p-6">
              <p className="label mb-4">Стек</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="tag-mono hover:border-accent/30 hover:text-text-base transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Facts bento */}
            <div className="grid grid-cols-2 gap-3">
              {facts.map((f) => (
                <div key={f.label} className="card p-4">
                  <p className="text-text-muted text-xs mb-1.5">{f.label}</p>
                  <p className="font-onest font-semibold text-text-base text-sm">
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
