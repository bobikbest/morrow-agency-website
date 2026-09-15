'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const MainVideoHero = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[90vh] w-full overflow-hidden bg-black rounded-b-[2rem] md:rounded-b-[4rem]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        {/*
          ИНСТРУКЦИЯ ПО ЗАМЕНЕ ВИДЕО:
          1. Подготовьте файл .mp4 (рекомендуется H.264) или .webm.
          2. Поместите его в папку public/ под именем cat-interior-transition.mp4.
          3. Замените src у тега video ниже.
          4. Видео должно быть без звука (muted) для автовоспроизведения.
          Fallback/постер уже настроен.
        */}
        <video 
          src={`${basePath}/cat-interior-transition.mp4`}
          poster={`${basePath}/poster-fallback.jpg`}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </motion.div>
      
      <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 text-white max-w-3xl">
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-sm md:text-base opacity-70 mb-4 uppercase tracking-widest"
        >
          Архитектура & Недвижимость
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
          className="text-4xl md:text-7xl font-medium tracking-tight leading-[1.1]"
        >
          От бетона к уюту.<br />Один скролл.
        </motion.h1>
      </div>
    </section>
  );
};
