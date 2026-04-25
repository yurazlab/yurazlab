import Image from "next/image";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Telegram Bot API",
  "OpenAI API",
  "Tailwind CSS",
  "Make / n8n",
  "Vercel",
];

const facts = [
  { label: "Специализация", value: "Маркетплейсы + AI" },
  { label: "AI-проекты", value: "В работе" },
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
                className="object-cover object-[center_15%] scale-110"
                priority
              />
            </div>
          </div>

          <h2 className="heading-lg text-text-base mb-6">
              Маркетплейсы → автоматизация → нейропродукты
            </h2>

            <div className="flex flex-col gap-4 text-text-muted leading-relaxed text-[15px]">
              <p>
                Начинал с маркетплейсов — запускал продажи, строил операционку,
                разбирался в аналитике. В какой-то момент устал от ручной рутины
                и начал автоматизировать всё, что можно.
              </p>
              <p>
                Это затянуло. Теперь изучаю разработку и строю инструменты,
                которые помогают бизнесу работать умнее — не больше, а эффективнее.
              </p>
              <p>
                Работаю публично: каждый проект — опыт, каждая ошибка — урок.
                Присоединяйтесь к journey.
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
              <a
                href="https://github.com/yurazlab"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm"
              >
                GitHub
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
                    className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-text-muted text-sm hover:border-accent/30 hover:text-text-base transition-all duration-200 cursor-default"
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
