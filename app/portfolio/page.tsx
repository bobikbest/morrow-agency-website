import Link from 'next/link';

const niches = [
  { id: 'real-estate', title: 'Недвижимость & Ремонт', status: 'Доступно (2 кейса)', path: '/portfolio/real-estate' },
  { id: 'clinics', title: 'Клиники & Стоматология', status: 'Концепт', path: '#' },
  { id: 'beauty', title: 'Beauty & Wellness', status: 'Концепт', path: '#' },
  { id: 'auto', title: 'Детейлинг & Авто', status: 'Концепт', path: '#' },
  { id: 'fashion', title: 'Одежда & Fashion E-com', status: 'Концепт', path: '#' },
  { id: 'gastro', title: 'Рестораны & Гастро', status: 'Концепт', path: '#' },
  { id: 'edu', title: 'Образование & Детские центры', status: 'Концепт', path: '#' },
];

export default function Portfolio() {
  return (
    <div className="pt-40 px-6 md:px-12 max-w-7xl mx-auto pb-24">
      <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-16">Сферы и кейсы</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {niches.map((niche, i) => (
          <Link 
            key={niche.id} 
            href={niche.path}
            className={`group flex flex-col justify-between p-8 h-[320px] rounded-2xl transition-all duration-500 ease-apple border border-foreground/5
              ${niche.path !== '#' ? 'bg-surface hover:shadow-xl hover:-translate-y-1' : 'bg-accent/50 cursor-default'}
            `}
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono opacity-40">0{i + 1}</span>
              <span className={`text-xs px-3 py-1 rounded-full ${niche.path !== '#' ? 'bg-foreground text-background' : 'bg-foreground/10 text-foreground/50'}`}>
                {niche.status}
              </span>
            </div>
            <h2 className={`text-2xl font-medium tracking-tight leading-snug ${niche.path === '#' && 'opacity-50'}`}>
              {niche.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
