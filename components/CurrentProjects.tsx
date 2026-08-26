import { ExternalLink } from "lucide-react";
import { featuredProjects } from "@/data/projects";

export default function CurrentProjects() {
  return (
    <section id="projects" className="section scroll-mt-16 border-t border-white/[0.05]">
      <div className="container-base">
        <p className="label mb-4">Кейсы</p>
        <div className="mb-12 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <h2 className="heading-lg text-text-base">Работающие AI-инструменты и автоматизации</h2>
          <p className="text-base leading-relaxed text-text-muted lg:justify-self-end">
            Кейсы ниже — решения для задач Sellers Help, где я сооснователь. В карточках указаны моя роль и фактический статус каждого продукта.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="card p-6 transition-colors duration-300 hover:border-white/[0.16] md:p-8"
            >
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className={`mb-4 inline-flex items-center gap-2 text-xs font-medium ${project.statusColor}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {project.status}
                  </span>
                  <h3 className="heading-md mb-3 text-text-base">{project.title}</h3>
                  <p className="max-w-4xl text-sm leading-relaxed text-text-muted md:text-base">
                    {project.summary}
                  </p>
                </div>

                {project.links.length > 0 && (
                  <div className="flex flex-none flex-wrap gap-3 sm:max-w-56 sm:justify-end">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-accent-light"
                      >
                        {link.label}
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <dl className="grid gap-3 lg:grid-cols-3">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <dt className="label mb-2">Задача</dt>
                  <dd className="text-sm leading-relaxed text-text-base">{project.task}</dd>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <dt className="label mb-2">Моя роль</dt>
                  <dd className="text-sm leading-relaxed text-text-base">{project.role}</dd>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <dt className="label mb-2">Текущий статус</dt>
                  <dd className="text-sm leading-relaxed text-text-base">{project.currentState}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
