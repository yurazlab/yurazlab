import type { Metadata } from "next";
import Link from "next/link";

const title = "Использование данных — YurazLab Project Sync";
const description = "Как личное приложение YurazLab Project Sync получает, использует и хранит данные Google Диска.";
export const metadata: Metadata = {
  title,
  description,
  keywords: [],
  alternates: { canonical: "https://yurazlab.ru/project-sync/privacy" },
  robots: { index: false, follow: true },
  openGraph: { title, description, type: "website", url: "https://yurazlab.ru/project-sync/privacy" },
  twitter: { card: "summary", title, description },
};

const heading = "font-onest text-xl font-semibold text-white";
export default function ProjectSyncPrivacyPage() {
  return (
    <article>
      <Link href="/project-sync" className="inline-block rounded py-2 text-indigo-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">Об приложении</Link>
      <h1 className="mt-4 font-onest text-3xl font-bold leading-tight text-white sm:text-4xl">Как используются данные</h1>
      <p className="mt-3 text-sm text-zinc-400">YurazLab Project Sync · Обновлено 10 ноября 2026 года</p>
      <div className="mt-8 space-y-7 text-base leading-7 text-zinc-300">
        <section aria-labelledby="purpose"><h2 id="purpose" className={heading}>Назначение</h2><p className="mt-2">Приложение предназначено для личной синхронизации файлов владельца Google-аккаунта с его устройствами. Ответственный за настройку — Юрий Зуев.</p></section>
        <section aria-labelledby="access"><h2 id="access" className={heading}>Доступ к Google Диску</h2><p className="mt-2">После согласия владельца приложение получает доступ к содержимому файлов и их метаданным: названиям, расположению, размеру и времени изменения. Выданное разрешение позволяет просматривать, создавать, изменять и удалять файлы Google Диска. В настройке синхронизации выбираются конкретные папки; это не сужает само разрешение Google до этих папок.</p></section>
        <section aria-labelledby="use"><h2 id="use" className={heading}>Использование и передача</h2><p className="mt-2">Программа rclone использует эти данные для передачи файлов, сопоставления версий и применения изменений между Google Диском и устройствами владельца. Данные передаются по защищённым соединениям. Механизм синхронизации не продаёт содержимое файлов, не использует его для рекламы или обучения моделей искусственного интеллекта.</p><p className="mt-3">Файлы не проходят через этот сайт и не становятся доступными его посетителям. Иные программы, которые владелец использует для работы с файлами, регулируются собственными настройками и правилами.</p></section>
        <section aria-labelledby="storage"><h2 id="storage" className={heading}>Хранение и удаление</h2><p className="mt-2">Файлы хранятся в Google Диске и в выбранных владельцем папках на его устройствах. Настройки доступа и служебные сведения синхронизации хранятся на устройствах, где работает программа. Срок хранения определяется действиями владельца, настройками синхронизации и правилами хранения и корзины Google Диска.</p></section>
        <section aria-labelledby="revoke"><h2 id="revoke" className={heading}>Как прекратить доступ</h2><p className="mt-2">Владелец может остановить программу и отозвать разрешение в разделе подключений своего Google-аккаунта. Это прекращает дальнейший доступ приложения, но само по себе не удаляет уже сохранённые копии файлов. Их удаление выполняется отдельно владельцем.</p><a href="https://myaccount.google.com/connections" className="mt-2 inline-block rounded py-2 text-indigo-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">Управление подключениями Google</a></section>
        <section aria-labelledby="website"><h2 id="website" className={heading}>Посещение этой страницы</h2><p className="mt-2">На сайте используется веб-аналитика Яндекс Метрики. Она относится к посещению сайта и не предоставляет доступ к файлам Google Диска. Страницы описания приложения не принимают пароли или ключи доступа Google.</p></section>
        <section aria-labelledby="contact"><h2 id="contact" className={heading}>Контакт</h2><p className="mt-2">Вопросы об использовании данных: <a href="mailto:yurazlab@gmail.com" className="rounded text-indigo-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">yurazlab@gmail.com</a>.</p></section>
      </div>
    </article>
  );
}
