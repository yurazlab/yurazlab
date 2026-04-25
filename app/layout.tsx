import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://yurazlab.ru"),
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
    </html>
  );
}
