import type { Project } from "@/data/projects";

export const containerClass = "mx-auto w-[calc(100%_-_40px)] max-w-[1120px] min-[761px]:w-[calc(100%_-_64px)]";
export const sectionClass = "scroll-mt-6 border-t border-white/10 py-[46px] min-[761px]:py-[62px]";
export const headingClass = "font-onest text-[31px] font-semibold leading-[1.16] tracking-[-.035em] text-[#b8b6ff] min-[761px]:text-[clamp(30px,3.3vw,42px)]";
export const bodyClass = "leading-[1.65] text-[#b5b5c5]";
export const eyebrowClass = "mb-3.5 text-xs uppercase tracking-[.1em] text-[#9292a5]";
const buttonClass = "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border px-4 py-[11px] text-sm font-semibold transition-colors min-[761px]:px-5";
export const primaryButtonClass = `${buttonClass} border-[#a5a3ff] bg-[#5142b5] text-white hover:border-[#c4c2ff] hover:bg-[#5e4cc8]`;
export const secondaryButtonClass = `${buttonClass} border-white/15 bg-transparent text-[#f4f3fa] hover:border-[#b8b6ff]`;
export const outlineButtonClass = `${buttonClass} border-[#818cf8] bg-transparent text-[#c7caff] hover:border-[#b8b6ff] hover:bg-[#818cf8]/10 hover:text-white focus-visible:bg-[#818cf8]/10`;
export const textLinkClass = "inline-flex min-h-11 items-center text-sm text-[#b8b6ff] underline decoration-1 underline-offset-[5px] hover:text-white";

export function ProjectStatus({ project }: { project: Project }) {
  const ready = /^(Работают|В эксплуатации|Используется командой|Работает)/.test(project.stage);
  return <div className="flex flex-wrap gap-x-3 gap-y-1 text-[13px] leading-[1.55]"><span className={ready ? "text-cyan" : "text-[#b5b5c5]"}>{project.stage}</span><span className="text-[#9292a5]">{project.access}</span></div>;
}
