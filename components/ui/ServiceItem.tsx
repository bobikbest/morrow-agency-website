'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const ServiceItem = ({ num, title, desc }: { num: string, title: string, desc: string }) => {
  return (
    <motion.div 
      initial="initial"
      whileHover="hover"
      className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-foreground/10 cursor-pointer"
    >
      <div className="flex gap-6 items-baseline mb-4 md:mb-0">
        <span className="text-sm opacity-40 font-mono tabular-nums">{num}</span>
        <h3 className="text-2xl md:text-4xl font-medium tracking-tight group-hover:pl-4 transition-all duration-500 ease-apple">{title}</h3>
      </div>
      <div className="flex items-center gap-6 md:w-1/3 justify-between">
        <p className="text-sm opacity-60 leading-relaxed">{desc}</p>
        <motion.div 
          variants={{ initial: { rotate: 0 }, hover: { rotate: 45 } }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors"
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
};
