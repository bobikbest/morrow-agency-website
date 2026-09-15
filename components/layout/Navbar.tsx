'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between mix-blend-difference text-white"
    >
      <Link href="/" className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity">
        MORROW
      </Link>
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <Link href="/portfolio" className="hover:opacity-70 transition-opacity">Кейсы</Link>
        <Link href="/#services" className="hover:opacity-70 transition-opacity">Услуги</Link>
        <Link href="/#contact" className="hover:opacity-70 transition-opacity">Связаться</Link>
      </nav>
      <Link href="/#contact" className="md:hidden hover:opacity-70 transition-opacity">Связаться</Link>
    </motion.header>
  );
};
