export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="container-base flex flex-col gap-5 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-onest font-semibold text-text-base">© 2026 · Юрий Зуев</p>
          <p className="mt-1 text-xs">ИП Зуев Юрий Васильевич</p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href="https://t.me/yurazlab"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-light"
          >
            Telegram
          </a>
          <a href="mailto:yurazlab@gmail.com" className="transition-colors hover:text-accent-light">
            Email
          </a>
          <a
            href="https://sellershelpai.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-light"
          >
            Sellers Help AI
          </a>
          <a
            href="https://sellershelp.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-light"
          >
            Sellers Help
          </a>
        </div>
      </div>
    </footer>
  );
}
