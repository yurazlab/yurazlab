import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section scroll-mt-16 border-t border-white/[0.05]">
      <div className="container-base">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label mb-4">Контакты</p>
          <h2 className="heading-lg mb-5 text-text-base">Обсудить сотрудничество</h2>
          <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Если вы рассматриваете руководителя AI-проекта в команду или хотите обсудить
            бизнес-задачу, напишите в Telegram или на почту.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://t.me/yurazlab"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Send size={17} aria-hidden="true" />
              Telegram
            </a>
            <a href="mailto:yurazlab@gmail.com" className="btn-ghost">
              <Mail size={17} aria-hidden="true" />
              yurazlab@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
