const siteUrl = "https://yurazlab.ru";

export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Юрий Зуев",
        alternateName: "Yuriy Zuev",
        url: siteUrl,
        image: `${siteUrl}/photo.jpg`,
        jobTitle: "AI-разработчик, основатель Yuraz Lab",
        description:
          "Юрий Зуев — основатель Yuraz Lab, AI-разработчик с 25+ годами опыта в продажах и маркетинге (онлайн и оффлайн, товары и услуги). С 2019 — в e-commerce на российских маркетплейсах (Wildberries, Ozon, Яндекс Маркет, СберМегаМаркет, AliExpress). Сооснователь SellersHelp (600+ клиентов) и SellersHelp AI. Разрабатывает Telegram-боты, AI-агенты и автоматизации для бизнеса.",
        knowsAbout: [
          "AI-разработка",
          "Telegram-боты",
          "AI-агенты",
          "Автоматизация бизнес-процессов",
          "Маркетплейсы Wildberries",
          "Маркетплейсы Ozon",
          "Яндекс Маркет",
          "СберМегаМаркет",
          "AliExpress",
          "Claude API",
          "OpenAI API",
          "Next.js",
          "Python",
          "n8n",
          "Make",
        ],
        email: "yurazlab@gmail.com",
        sameAs: ["https://t.me/yurazlab", "https://github.com/yurazlab"],
        worksFor: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteUrl}/#organization`,
        name: "Yuraz Lab",
        alternateName: "ЮразЛаб",
        legalName: "ИП Зуев Юрий Васильевич",
        url: siteUrl,
        logo: `${siteUrl}/photo.jpg`,
        image: `${siteUrl}/photo.jpg`,
        description:
          "Микро-агентство AI-разработки для бизнеса в России. Telegram-боты, AI-агенты, автоматизация процессов, сайты и интеграции под ключ. От 35 000 ₽, запуск за 1–4 недели.",
        founder: { "@id": `${siteUrl}/#person` },
        foundingDate: "2025",
        areaServed: { "@type": "Country", name: "Russia" },
        priceRange: "₽₽",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            url: "https://t.me/yurazlab",
            availableLanguage: ["Russian"],
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "yurazlab@gmail.com",
            availableLanguage: ["Russian"],
          },
        ],
        sameAs: ["https://t.me/yurazlab", "https://github.com/yurazlab"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Услуги Yuraz Lab",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Telegram-бот с AI",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "35000",
                priceCurrency: "RUB",
                minPrice: "35000",
              },
            },
            {
              "@type": "Offer",
              name: "AI-агент с интеграциями",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "70000",
                priceCurrency: "RUB",
                minPrice: "70000",
              },
            },
            {
              "@type": "Offer",
              name: "Лендинг",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "35000",
                priceCurrency: "RUB",
                minPrice: "35000",
              },
            },
            {
              "@type": "Offer",
              name: "Автоматизация процесса",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "15000",
                priceCurrency: "RUB",
                minPrice: "15000",
              },
            },
            {
              "@type": "Offer",
              name: "Интеграции и API",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "30000",
                priceCurrency: "RUB",
                minPrice: "30000",
              },
            },
            {
              "@type": "Offer",
              name: "Комплекс: сайт + AI-бот + автоматизация",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "90000",
                priceCurrency: "RUB",
                minPrice: "90000",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Yuraz Lab",
        description: "AI-продукты для бизнеса от Юрия Зуева",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "ru-RU",
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#products`,
        name: "Запущенные AI-продукты Yuraz Lab",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "SoftwareApplication",
              name: "НейроЭлектрик",
              description:
                "Первый в России AI-ассистент для частных электриков в Telegram. Принимает текст, фото щитка и голосовые — отвечает планом работ, материалами с ценами и ссылками на ПУЭ 7. Работает 24/7.",
              url: "https://t.me/neuro_electric_bot",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Telegram",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "SoftwareApplication",
              name: "Транскрибатор SellersHelp",
              description:
                "Telegram-бот транскрибации аудио и видео с таймкодами и структурированным конспектом. Поддерживает YouTube, VK Видео, Дзен, RuTube, Яндекс Диск, файлы до 2 ГБ.",
              url: "https://t.me/sellershelp_voice_bot",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Telegram",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "SoftwareApplication",
              name: "Бот управления репутацией",
              description:
                "Telegram-бот для управления репутацией магазинов на Wildberries и Ozon. Двухэтапный AI-пайплайн на Claude (стратег + писатель), мультимагазинный режим, алерты при падении рейтинга, Excel-аналитика по трендам отзывов.",
              url: "https://t.me/sellershelp_reviews_bot",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Telegram",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "SoftwareApplication",
              name: "Генератор договоров SellersHelp",
              description:
                "Внутренний бот в мессенджере MAX для автоматической генерации договоров. ИНН → реквизиты через DaData + 16-шаговый диалог по условиям → готовый DOCX за 1 минуту вместо 10+.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "MAX",
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "WebSite",
              name: "Сайт SellersHelp",
              url: "https://sellershelp.ru",
              description:
                "Корпоративный сайт агентства SellersHelp по продвижению на маркетплейсах Wildberries и Ozon.",
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@type": "WebSite",
              name: "SellersHelp AI",
              url: "https://sellershelpai.ru",
              description:
                "Цифровая экосистема SaaS-инструментов для продавцов маркетплейсов Wildberries и Ozon: юнит-калькулятор, квиз-диагностика, бот управления отзывами, Тегатор.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
