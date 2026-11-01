import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCatalogue from "@/components/ProjectCatalogue";
import { bodyClass, containerClass, headingClass } from "@/components/PortfolioUi";

export const metadata: Metadata = {
  title: "Все проекты и решения | Yuraz Lab",
  description: "Портфолио Yuraz Lab: клиентские продукты, внутренние инструменты, разработки и прошлый опыт Юрия Зуева.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Все проекты и решения | Yuraz Lab",
    description: "Клиентские продукты, внутренние инструменты, разработки и прошлый опыт.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <section className="pb-10 pt-10 min-[761px]:pb-14 min-[761px]:pt-14">
          <div className={containerClass}>
            <p className="text-xs uppercase tracking-[.1em] text-[#9292a5]">Портфолио</p>
            <h1 className={`${headingClass} mt-3 text-[#f4f3fa]`}>Все проекты и решения</h1>
            <p className={`${bodyClass} mt-5 max-w-[800px] text-lg`}>
              Клиентские продукты, внутренние инструменты, разработки и прошлый опыт. Несколько компонентов могут относиться к одной экосистеме — это не разные внешние заказчики.
            </p>
            <ProjectCatalogue />
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
