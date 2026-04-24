import { MessageCircle, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-white/[0.05]">
      <div className="container-base">
        <div className="max-w-2xl">
          <p className="label mb-4">Контакт</p>
          <h2 className="heading-lg text-text-base mb-4">
            Есть задача?
            <br />
            Обсудим.
          </h2>
          <p className="text-text-muted text-lg mb-10 leading-relaxed">
            Опишите, что нужно сделать — отвечу в течение дня.
            Первая консультация бесплатна, без навязчивых продаж.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://t.me/yurazlab"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Написать в Telegram
            </a>
            <a
              href="mailto:yurazlab@gmail.com"
              className="btn-ghost"
            >
              <Mail size={18} />
              yurazlab@gmail.com
            </a>
          </div>

          <p className="text-text-muted text-sm">
            Отвечаю в течение дня в рабочие дни.
          </p>
        </div>
      </div>
    </section>
  );
}
