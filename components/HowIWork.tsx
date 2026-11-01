import { bodyClass, containerClass, eyebrowClass, headingClass, sectionClass } from "@/components/PortfolioUi";
const steps = [
  ["01 / Разобраться", "Какой результат нужен", "Уточняем задачу, примеры, ограничения и критерии, по которым будем проверять решение."],
  ["02 / Проверить", "Работает ли подход", "Проверяем ограниченный сценарий на понятных примерах. Определяем, где нужен контроль человека."],
  ["03 / Принять решение", "Что делать дальше", "По результатам проверки решаем, дорабатывать ли этот инструмент и как включить его в рабочий процесс."],
];
export default function HowIWork() {
  return <section id="approach" className={sectionClass}><div className={containerClass}><p className={eyebrowClass}>Подход к работе</p><h2 className={headingClass}>Начинаем с одного процесса</h2><div className="mt-7 grid gap-[30px] min-[761px]:grid-cols-3">{steps.map(([label,title,copy]) => <article key={label}><p className="mb-[18px] font-onest text-[13px] text-[#9292a5]">{label}</p><h3 className="mb-3.5 font-onest text-[22px] font-medium leading-[1.16] tracking-[-.035em] text-[#f4f3fa]">{title}</h3><p className={`${bodyClass} text-[15px]`}>{copy}</p></article>)}</div></div></section>;
}
