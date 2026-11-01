import Link from "next/link";
import { bodyClass, containerClass, primaryButtonClass, secondaryButtonClass } from "@/components/PortfolioUi";

export default function Hero() {
  return <section className="hero py-12 min-[761px]:pb-[62px] min-[761px]:pt-[76px]"><div className={containerClass}>
    <p className="mb-5 font-onest text-[21px] font-medium text-[#b5b5c5]">Юрий Зуев</p>
    <h1 className="max-w-[1000px] font-onest text-[clamp(30px,9.2vw,36px)] font-semibold leading-[1.09] tracking-[-.035em] text-[#f4f3fa] min-[481px]:text-[clamp(38px,5.3vw,68px)]"><span className="whitespace-nowrap text-cyan">AI-инструменты</span><br />для автоматизации бизнеса</h1>
    <p className={`${bodyClass} mt-[26px] max-w-[760px] text-[17px] min-[761px]:text-[19px]`}>Помогаю сократить ручную работу с клиентами, документами и информацией: определить, что стоит автоматизировать, проверить решение и внедрить его в рабочий процесс.</p>
    <div className="mt-7 flex flex-wrap gap-3"><Link className={primaryButtonClass} href="/#contact">Обсудить задачу</Link><Link className={secondaryButtonClass} href="/#projects">Смотреть кейсы →</Link></div>
    <div className="mt-[34px] flex flex-col flex-wrap gap-x-6 gap-y-[9px] text-[13px] text-[#b5b5c5] min-[761px]:flex-row">
      {["25+ лет в продажах и управлении", "На маркетплейсах с 2019 года", "Системно применяю AI с мая 2025 года"].map(text => <span key={text}><span className="mr-2 text-cyan" aria-hidden="true">•</span>{text}</span>)}
    </div>
  </div></section>;
}
