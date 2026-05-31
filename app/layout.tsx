import type { Metadata } from "next";
import { Inter, Onest, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://yurazlab.ru";
const title = "Yuraz Lab — AI-продукты для бизнеса";
const description =
  "Разработка AI-агентов, Telegram-ботов и автоматизаций под ключ. " +
  "Юрий Зуев: 25+ лет в продажах, сооснователь SellersHelp (600+ клиентов), " +
  "с 2019 на маркетплейсах. От 35 000 ₽, запуск за 1–4 недели.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "AI-разработка",
    "Telegram-бот с AI",
    "AI-агент под ключ",
    "автоматизация бизнеса",
    "разработка чат-бота",
    "MVP AI-продукта",
    "интеграции API",
    "Yuraz Lab",
    "Юрий Зуев",
  ],
  authors: [{ name: "Юрий Зуев", url: siteUrl }],
  creator: "Юрий Зуев",
  publisher: "Yuraz Lab",
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Yuraz Lab",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@yurazlab",
    creator: "@yurazlab",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${onest.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-inter bg-dark text-text-base antialiased">
        <JsonLd />
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108760235', 'ym');
            ym(108760235, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
      </body>
    </html>
  );
}
