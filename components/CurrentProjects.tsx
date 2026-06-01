"use client";

import { ExternalLink } from "lucide-react";
import { completed, inProgress } from "@/data/projects";

export default function CurrentProjects() {
  return (
    <section id="projects" className="section border-t border-white/[0.05]">
      <div className="container-base">
        <p className="label mb-4">Проекты</p>
        <h2 className="heading-lg text-text-base mb-12">Что делаю</h2>

        {/* Completed / Launched */}
        <p className="label mb-5">Запущено</p>
        <div className="flex flex-col gap-6 mb-12">
          {completed.map((p) => (
            <div
              key={p.title}
              className="card p-6 md:p-8 flex flex-col gap-5 hover:border-white/[0.16] transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-2 text-xs font-medium ${p.statusColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" />
                  {p.status}
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-light transition-colors"
                  >
                    {p.linkLabel}
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>

              <div>
                <h3 className="heading-md text-text-base mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{p.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                  <p className="label mb-1">Задача</p>
                  <p className="text-text-base text-sm leading-snug">{p.task}</p>
                </div>
                <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                  <p className="label mb-1">Результат</p>
                  <p className="text-text-base text-sm leading-snug">{p.result}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs tracking-tight bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md text-accent-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* In progress */}
        <p className="label mb-5">В процессе</p>
        <div className="grid md:grid-cols-1 gap-6">
          {inProgress.map((p) => (
            <div
              key={p.title}
              className="card p-6 md:p-8 flex flex-col gap-5 hover:border-white/[0.16] transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-2 text-xs font-medium ${p.statusClass}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" />
                  {p.status}
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-light transition-colors"
                  >
                    {p.linkLabel}
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>

              <div>
                <h3 className="heading-md text-text-base mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{p.description}</p>
              </div>

              <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                <p className="label mb-1">Цель</p>
                <p className="text-text-base text-sm leading-snug">{p.task}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs tracking-tight bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md text-accent-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
