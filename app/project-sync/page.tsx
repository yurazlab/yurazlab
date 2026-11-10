import type { Metadata } from "next";
import Link from "next/link";

const title = "YurazLab Project Sync — личная синхронизация файлов";
const description = "Описание личного приложения для синхронизации выбранных файлов с Google Диском.";
export const metadata: Metadata = {
  title,
  description,
  keywords: [],
  alternates: { canonical: "https://yurazlab.ru/project-sync" },
  robots: { index: false, follow: true },
  openGraph: { title, description, type: "website", url: "https://yurazlab.ru/project-sync" },
  twitter: { card: "summary", title, description },
};

export default function ProjectSyncPage() {
  return (
    <article>
      <p className="text-sm font-medium text-indigo-300">Описание приложения</p>
      <h1 className="mt-3 font-onest text-3xl font-bold leading-tight text-white sm:text-4xl">YurazLab Project Sync</h1>
      <div className="mt-6 space-y-4 text-base leading-7 text-zinc-300">
        <p>Личное приложение Юрия Зуева для синхронизации выбранных файлов между Google Диском и его устройствами. Синхронизацию выполняет программа rclone.</p>
        <p>Приложение использует разрешение владельца Google-аккаунта, чтобы читать, создавать, обновлять и удалять файлы при синхронизации. Самостоятельная регистрация других пользователей не предусмотрена.</p>
        <p>Эта страница содержит только описание приложения. Она не предоставляет доступ к файлам и не участвует в их передаче.</p>
      </div>
      <nav aria-label="Информация о приложении" className="mt-8 flex flex-col items-start gap-3 border-t border-white/10 pt-6">
        <Link href="/project-sync/privacy" className="rounded py-2 text-indigo-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">Как используются данные</Link>
        <a href="mailto:yurazlab@gmail.com" className="rounded py-2 text-indigo-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">Связаться: yurazlab@gmail.com</a>
        <Link href="/" className="rounded py-2 text-zinc-400 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">Главная страница сайта</Link>
      </nav>
    </article>
  );
}
