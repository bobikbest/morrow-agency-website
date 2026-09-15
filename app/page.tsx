import { ServiceItem } from "@/components/ui/ServiceItem";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-40 md:pt-64 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[1.05] max-w-5xl">
          Создаем цифровые продукты для бизнеса под ключ.
        </h1>
        <p className="mt-8 text-lg md:text-2xl opacity-60 max-w-2xl leading-relaxed">
          Мы продаем не просто технологии. Мы даем больше заявок, современный имидж и единую экосистему из сайтов, ботов и AI.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="mt-40 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest opacity-50 mb-12">Компетенции</h2>
        <div className="flex flex-col">
          <ServiceItem num="01" title="Сайты & E-commerce" desc="Адаптивные, конверсионные платформы и интернет-магазины с продуманным UX." />
          <ServiceItem num="02" title="AI Автоматизации" desc="Внедрение нейросетей для рутинных задач, аналитики и генерации контента." />
          <ServiceItem num="03" title="Telegram-боты" desc="Многофункциональные боты для продаж, поддержки и внутренних процессов." />
          <ServiceItem num="04" title="Интеграции & CRM" desc="Связываем формы, мессенджеры и внутренние сервисы в единый организм." />
          <ServiceItem num="05" title="Упаковка под ключ" desc="От нейминга и брендинга до запуска и первой аналитики продукта." />
        </div>
      </section>

      {/* Selected Work Teaser */}
      <section className="mt-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-xs uppercase tracking-widest opacity-50">Избранные сферы</h2>
          <Link href="/portfolio" className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity">
            Смотреть все <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/portfolio/real-estate" className="group block relative h-[60vh] rounded-2xl overflow-hidden bg-surface">
            <div className="absolute inset-0 bg-neutral-200 transition-transform duration-700 ease-apple group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-medium tracking-tight mb-2">Недвижимость & Интерьеры</h3>
              <p className="opacity-80">Интерактивный кейс: Трансформация</p>
            </div>
          </Link>
          <div className="flex flex-col gap-6">
            <Link href="/portfolio" className="group block relative h-[calc(30vh-0.75rem)] rounded-2xl overflow-hidden bg-accent p-8 flex items-end">
              <h3 className="text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform ease-apple">Медицина & Стоматология</h3>
            </Link>
            <Link href="/portfolio" className="group block relative h-[calc(30vh-0.75rem)] rounded-2xl overflow-hidden bg-accent p-8 flex items-end">
              <h3 className="text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform ease-apple">Beauty & Wellness</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
