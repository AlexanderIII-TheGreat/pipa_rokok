'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/product', label: t.nav.product },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4',
        isScrolled ? 'bg-brand-bg/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="font-serif text-xl md:text-2xl tracking-widest text-brand-text group-hover:text-brand-gold transition-colors duration-300 uppercase">
            Pipa Rokok Agus Kuntadi
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm uppercase tracking-widest transition-colors duration-300 hover:text-brand-gold',
                pathname === link.href ? 'text-brand-gold' : 'text-brand-text/70'
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center space-x-3 ml-4 border-l border-white/20 pl-6">
            <button
              onClick={() => setLanguage('id')}
              className={cn(
                'text-xs tracking-tighter transition-colors duration-300',
                language === 'id' ? 'text-brand-gold font-bold' : 'text-brand-text/40 hover:text-brand-text'
              )}
            >
              ID
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                'text-xs tracking-tighter transition-colors duration-300',
                language === 'en' ? 'text-brand-gold font-bold' : 'text-brand-text/40 hover:text-brand-text'
              )}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="text-brand-text/70 hover:text-brand-gold"
            >
              <Globe size={20} />
            </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-text hover:text-brand-gold transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-bg/95 backdrop-blur-lg border-b border-white/10 py-10 px-8 flex flex-col space-y-6 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-lg uppercase tracking-[0.2em] font-serif transition-colors text-center py-2',
                  pathname === link.href ? 'text-brand-gold' : 'text-brand-text'
                )}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
