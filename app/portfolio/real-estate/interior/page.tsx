import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function InteriorCase() {
  return (
    <article className="min-h-screen bg-background pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-24">
      <Link href="/portfolio/real-estate" className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-12">
        <ArrowLeft size={16} /> Назад к направлению
      </Link>
      
      <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8">Студия архитектуры</h1>
      <p className="text-xl opacity-70 max-w-2xl mb-16">
        Строгий корпоративный сайт с интеграцией внутренней CRM и сложной системой фильтрации планировок.
      </p>

      <div className="w-full h-[60vh] bg-surface rounded-3xl border border-foreground/5 flex items-center justify-center mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-neutral-200/50 mix-blend-multiply" />
        <p className="opacity-50 text-sm z-10">Место для видео-шоурила архитектурного бюро</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-surface p-8 rounded-2xl">
          <h3 className="font-medium mb-4 text-xl">Типографика как искусство</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Мы использовали швейцарскую сетку и крупные гротески, чтобы подчеркнуть монументальность архитектурных проектов.
          </p>
        </div>
        <div className="bg-surface p-8 rounded-2xl">
          <h3 className="font-medium mb-4 text-xl">Синхронизация по API</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Каждая новая планировка, добавленная в AmoCRM, автоматически генерирует страницу на сайте и PDF-презентацию для Telegram-бота.
          </p>
        </div>
      </div>
    </article>
  );
}
