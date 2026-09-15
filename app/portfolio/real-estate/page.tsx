import { MainVideoHero } from "@/components/blocks/MainVideoHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RealEstateMainCase() {
  return (
    <article className="min-h-screen bg-background">
      <MainVideoHero />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-widest opacity-50 sticky top-32">О проекте</h2>
          </div>
          <div className="md:col-span-8 text-xl md:text-3xl font-medium leading-relaxed tracking-tight">
            Для студии ремонта мы создали инструмент, который продает не процесс, а финальную эмоцию. 
            Пользователь своими действиями превращает голый бетон в живое, теплое пространство, 
            где уже живет кот и разматывается клубок пряжи.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 border-t border-foreground/10 pt-16">
          <div>
            <h3 className="font-medium mb-4">Задача</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Отстроиться от конкурентов с однотипными калькуляторами ремонта. Показать уровень внимания к деталям и технологичность подхода.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Решение</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Интерактивный WebGL/Video скролл, Telegram-бот для мгновенного расчета сметы и AI-ассистент, помогающий подобрать стиль по референсам клиента.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Результат</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              +45% конверсия в заявку. Экономия 12 часов менеджера в неделю благодаря AI-квалификации лидов.
            </p>
          </div>
        </div>

        {/* Навигация ко второму кейсу (Интерьеры) */}
        <div className="mt-40">
          <Link href="/portfolio/real-estate/interior" className="group block bg-surface rounded-3xl p-8 md:p-16 border border-foreground/5 hover:border-foreground/20 transition-colors">
            <p className="text-sm opacity-50 mb-4">Следующий кейс направления</p>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Частный интерьер</h2>
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-500 ease-apple">
                <ArrowRight size={24} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
