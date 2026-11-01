import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCase from "@/components/ProjectCase";
import { caseProjects, getProject } from "@/data/projects";

type CasePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseProjects.map((project) => ({ slug: project.caseSlug! }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseSlug) return { title: "Кейс не найден | Yuraz Lab" };
  return {
    title: `${project.title} | Yuraz Lab`,
    description: project.purpose,
    alternates: { canonical: `/cases/${project.caseSlug}` },
    openGraph: {
      title: `${project.title} | Yuraz Lab`,
      description: project.purpose,
      url: `/cases/${project.caseSlug}`,
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseSlug) notFound();
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <ProjectCase project={project} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
