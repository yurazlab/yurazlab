import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getProject, type Project } from "@/data/projects";
import {
  bodyClass,
  headingClass,
  outlineButtonClass,
  ProjectStatus,
  secondaryButtonClass,
  textLinkClass,
} from "@/components/PortfolioUi";

export default function ProjectCase({ project }: { project: Project }) {
  const details = project.details;
  if (!details) return null;

  return (
    <>
      <section className="pb-10 pt-10 min-[761px]:pb-14 min-[761px]:pt-14">
        <div className="mx-auto w-[calc(100%_-_40px)] max-w-[1120px] min-[761px]:w-[calc(100%_-_64px)]">
          <nav aria-label="Хлебные крошки" className="text-sm text-[#9292a5]">
            <Link className="hover:text-[#b8b6ff]" href="/">Главная</Link><span aria-hidden="true"> / </span>
            <Link className="hover:text-[#b8b6ff]" href="/projects">Все проекты</Link><span aria-hidden="true"> / </span>
            <span>{project.title}</span>
          </nav>
          <div className="mt-7"><ProjectStatus project={project} /></div>
          <h1 className={`${headingClass} mt-4 text-[#f4f3fa]`}>{project.title}</h1>
          <p className={`${bodyClass} mt-5 max-w-[760px] text-lg`}>{project.purpose}</p>
        </div>
      </section>

      <section className="border-t border-white/10 py-[46px] min-[761px]:py-[62px]">
        {project.id === "ecosystem" && details.sections ? (
          <EcosystemCase project={project} />
        ) : (
        <div className="mx-auto grid w-[calc(100%_-_40px)] max-w-[1120px] gap-9 min-[761px]:w-[calc(100%_-_64px)] min-[1000px]:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 space-y-10">
            <CaseBlock title="Какая задача была у пользователей">{details.problem}</CaseBlock>
            <CaseBlock title="Что создано">{details.result}</CaseBlock>
            {project.evidence && (
              <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <a href={project.evidence.file} target="_blank" rel="noopener noreferrer" aria-label={`Увеличить: ${project.evidence.alt}`}>
                  <img src={project.evidence.file} alt={project.evidence.alt} className="h-auto w-full" />
                </a>
                {project.evidence.caption && <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-relaxed text-[#9292a5]">{project.evidence.caption}</figcaption>}
              </figure>
            )}
            <CaseBlock title="Мой вклад">{details.role}</CaseBlock>
            <CaseBlock title="Состояние и границы">{details.limit}</CaseBlock>
          </div>

          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-5 min-[1000px]:sticky min-[1000px]:top-6">
            <h2 className="font-onest text-lg font-semibold text-[#f4f3fa]">Как устроен сценарий</h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-[#b5b5c5]">
              {details.steps.map((step, index) => <li key={step} className="flex gap-3"><span className="text-cyan">0{index + 1}</span><span>{step}</span></li>)}
            </ol>
            <div className="mt-6 flex flex-col gap-3">
              {project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={outlineButtonClass}>{link.label}<ExternalLink size={15} aria-hidden="true" /></a>)}
              <Link href="/#contact-business" className={outlineButtonClass}>Обсудить похожий процесс</Link>
              <Link href="/#contact-team" className={secondaryButtonClass}>Обсудить работу с командой</Link>
              <Link href="/projects" className={textLinkClass}>Вернуться к проектам</Link>
            </div>
          </aside>
        </div>
        )}
      </section>
    </>
  );
}

function EcosystemCase({ project }: { project: Project }) {
  const details = project.details!;
  const related = (details.relatedCaseSlugs ?? [])
    .map((slug) => getProject(slug))
    .filter((item): item is Project => Boolean(item));
  return (
    <div className="mx-auto grid w-[calc(100%_-_40px)] max-w-[1120px] gap-9 min-[761px]:w-[calc(100%_-_64px)] min-[1000px]:grid-cols-[minmax(0,1fr)_280px]">
      <div className="min-w-0 space-y-10">
        {details.sections?.slice(0, 1).map((section) => <CaseBlock key={section.title} title={section.title}>{section.text}</CaseBlock>)}
        {project.evidence && (
          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <a href={project.evidence.file} target="_blank" rel="noopener noreferrer" aria-label={`Увеличить: ${project.evidence.alt}`}>
              <img src={project.evidence.file} alt={project.evidence.alt} className="h-auto w-full" />
            </a>
            {project.evidence.caption && <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-relaxed text-[#9292a5]">{project.evidence.caption}</figcaption>}
          </figure>
        )}
        {details.sections?.slice(1).map((section) => <CaseBlock key={section.title} title={section.title}>{section.text}</CaseBlock>)}
      </div>
      <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-5 min-[1000px]:sticky min-[1000px]:top-6">
        <h2 className="font-onest text-lg font-semibold text-[#f4f3fa]">Разобранные кейсы</h2>
        <div className="mt-4 flex flex-col gap-3">
          {related.map((item) => <Link key={item.id} href={`/cases/${item.caseSlug}`} className={secondaryButtonClass}>{item.title} →</Link>)}
          <Link href="/projects" className={outlineButtonClass}>Все компоненты и проекты</Link>
        </div>
      </aside>
    </div>
  );
}

function CaseBlock({ title, children }: { title: string; children: string }) {
  return <section><h2 className="font-onest text-[24px] font-semibold leading-tight tracking-[-.02em] text-[#f4f3fa]">{title}</h2><p className={`${bodyClass} mt-3`}>{children}</p></section>;
}
