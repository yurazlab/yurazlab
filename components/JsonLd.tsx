import { caseProjects } from "@/data/projects";
const siteUrl = "https://yurazlab.ru";
export default function JsonLd() {
  const personId = `${siteUrl}/#person`;
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Person", "@id": personId, name: "Юрий Зуев", url: siteUrl, image: `${siteUrl}/photo.jpg`, description: "Бизнес-опыт и работа с AI: требования, прототипирование, проверка и внедрение инструментов для автоматизации бизнеса.", email: "mailto:yurazlab@gmail.com", sameAs: ["https://t.me/yurazlab", "https://sellershelpai.ru", "https://sellershelp.ru"], knowsAbout: ["AI-продукты", "Автоматизация бизнес-процессов", "Управление проектами", "Продажи", "Маркетплейсы"] },
    { "@type": "ProfilePage", "@id": `${siteUrl}/#profile`, url: siteUrl, name: "Юрий Зуев — AI-инструменты для автоматизации бизнеса", description: "Портфолио, кейсы и сотрудничество с бизнесом и AI-командами.", mainEntity: { "@id": personId }, inLanguage: "ru-RU" },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Yuraz Lab", description: "AI-инструменты для автоматизации бизнеса", publisher: { "@id": personId }, inLanguage: "ru-RU" },
    { "@type": "ItemList", "@id": `${siteUrl}/#cases`, name: "Кейсы и рабочие инструменты", itemListElement: caseProjects.map((project,index) => ({ "@type": "ListItem", position: index+1, item: { "@type": "CreativeWork", name: project.title, description: project.purpose, url: `${siteUrl}/cases/${project.caseSlug}`, creator: { "@id": personId } } })) },
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(graph).replace(/</g,"\\u003c")}} />;
}
