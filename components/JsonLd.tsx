import { featuredProjects } from "@/data/projects";

const siteUrl = "https://yurazlab.ru";

export default function JsonLd() {
  const personId = `${siteUrl}/#person`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Юрий Зуев",
        url: siteUrl,
        image: `${siteUrl}/photo.jpg`,
        jobTitle: "Руководитель AI-проектов",
        description:
          "Руководитель AI-проектов: создание AI-продуктов и автоматизация бизнес-процессов. Определяет требования, участвует в прототипировании и проверке, координирует тестирование и доработки.",
        email: "mailto:yurazlab@gmail.com",
        sameAs: [
          "https://t.me/yurazlab",
          "https://sellershelpai.ru",
          "https://sellershelp.ru",
        ],
        knowsAbout: [
          "AI-продукты",
          "Автоматизация бизнес-процессов",
          "Управление проектами",
          "Продажи",
          "Маркетплейсы",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: "Юрий Зуев — руководитель AI-проектов",
        description:
          "Личное портфолио Юрия Зуева: работающие AI-продукты, опыт и форматы сотрудничества.",
        mainEntity: { "@id": personId },
        inLanguage: "ru-RU",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Yuraz Lab",
        description: "Портфолио руководителя AI-проектов Юрия Зуева",
        publisher: { "@id": personId },
        inLanguage: "ru-RU",
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#projects`,
        name: "Работающие AI-продукты",
        itemListElement: featuredProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title,
            description: `${project.summary} ${project.currentState}`,
            url: project.links[0]?.href ?? `${siteUrl}/#projects`,
            applicationCategory: "BusinessApplication",
          },
        })),
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
