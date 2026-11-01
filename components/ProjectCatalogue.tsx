"use client";

import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { groups, projects } from "@/data/projects";
import {
  bodyClass,
  outlineButtonClass,
  secondaryButtonClass,
  textLinkClass,
} from "@/components/PortfolioUi";

export default function ProjectCatalogue() {
  const [group, setGroup] = useState("all");
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const found = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("ru");
    return projects.filter((project) => {
      const matchesGroup = group === "all" || project.group === group;
      const searchable = [project.title, project.purpose, project.stage, project.access, project.note, project.searchTerms]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("ru");
      return matchesGroup && (!term || searchable.includes(term));
    });
  }, [group, query]);

  function reset() {
    setGroup("all");
    setQuery("");
    searchRef.current?.focus();
  }

  return (
    <div className="mt-9">
      <div className="flex flex-wrap gap-2" aria-label="Темы проектов">
        {groups.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={group === item.id}
            onClick={() => setGroup(item.id)}
            className={group === item.id ? outlineButtonClass : secondaryButtonClass}
          >
            {item.label}
          </button>
        ))}
      </div>

      <label htmlFor="project-search" className="mt-7 block text-sm font-medium text-[#f4f3fa]">
        Найти проект или задачу
      </label>
      <div className="relative mt-2 max-w-[560px]">
        <Search size={18} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9292a5]" />
        <input
          ref={searchRef}
          id="project-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Например, договор или Ozon"
          className="min-h-12 w-full rounded-lg border border-white/15 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-[#f4f3fa] outline-none placeholder:text-[#9292a5] focus:border-[#b8b6ff]"
        />
      </div>

      <p className="mt-4 text-sm text-[#9292a5]" role="status" aria-live="polite">
        Показано: {found.length} из {projects.length}
      </p>

      {found.length > 0 ? (
        <div className="mt-6 grid gap-x-8 min-[761px]:grid-cols-2">
          {found.map((project) => (
            <article key={project.id} className="flex min-w-0 flex-col border-t border-[#2b2b32] py-[23px]">
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[13px] leading-[1.55] text-[#92929a]"><span>{project.stage}</span><span>{project.access}</span></div>
              <h2 className="mt-[11px] font-onest text-[22px] font-medium leading-[1.16] tracking-[-.035em] text-[#f4f4f6]">
                {project.title}
              </h2>
              <p className="mt-[11px] text-sm leading-[1.65] text-[#c1c1c7]">{project.purpose}</p>
              {project.note && <p className="mt-2.5 text-[13px] leading-[1.6] text-[#92929a]">{project.note}</p>}
              <div className="pt-3.5 flex flex-wrap gap-x-5 gap-y-2">
                {project.caseSlug ? (
                  <Link href={`/cases/${project.caseSlug}`} className={textLinkClass}>
                    Разобрать кейс →
                  </Link>
                ) : project.links.length > 0 ? (
                  project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
                      {link.label} <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  ))
                ) : (
                  <Link href="/#contact-business" className={textLinkClass}>
                    Обсудить похожую задачу →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 min-[761px]:p-8">
          <h2 className="font-onest text-xl font-semibold text-[#f4f3fa]">Проекты не найдены</h2>
          <p className={`${bodyClass} mt-2`}>Попробуйте другое слово или сбросьте выбранную тему.</p>
          <button type="button" onClick={reset} className={`${secondaryButtonClass} mt-5`}>
            Показать все проекты
          </button>
        </div>
      )}
    </div>
  );
}
