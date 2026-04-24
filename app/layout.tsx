import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yuraz Lab — нейропродукты для бизнеса",
  description:
    "Создаю сайты, приложения и AI-агентов, которые автоматизируют бизнес-процессы и освобождают время для роста.",
  metadataBase: new URL("https://yurazlab.vercel.app"),
  openGraph: {
    title: "Yuraz Lab — нейропродукты для бизнеса",
    description:
      "Создаю сайты, приложения и AI-агентов, которые автоматизируют бизнес-процессы.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuraz Lab — нейропродукты для бизнеса",
    description: "Создаю сайты, приложения и AI-агентов для бизнеса.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${onest.variable}`}>
      <body className="font-inter bg-dark text-text-base antialiased">
        {children}
      </body>
    </html>
  );
}
