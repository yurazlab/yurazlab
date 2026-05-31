export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="container-base flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-onest font-bold text-text-base">
            Yuraz<span className="text-accent">Lab</span>
          </p>
          <p className="text-text-muted text-sm text-center">
            © 2026 · Строю публично
          </p>
          <div className="flex gap-5">
            <a
              href="https://t.me/yurazlab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-base text-sm transition-colors"
            >
              Telegram
            </a>
            <a
              href="mailto:yurazlab@gmail.com"
              className="text-text-muted hover:text-text-base text-sm transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/yurazlab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-base text-sm transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <p className="text-text-muted text-xs text-center border-t border-white/[0.05] pt-5">
          ИП Зуев Юрий Васильевич
        </p>
      </div>
    </footer>
  );
}
