'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-white/5 py-16 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl tracking-[0.3em] uppercase text-brand-text mb-2">Pipa Rokok Agus Kuntadi</h2>
          <p className="text-brand-gold text-sm tracking-widest uppercase">{t.home.tagline1} {t.home.tagline2}</p>
        </div>

        <div className="flex space-x-8 text-xs tracking-widest uppercase text-brand-text/50">
          <Link href="/about" className="hover:text-brand-gold transition-colors">{t.nav.about}</Link>
          <Link href="/product" className="hover:text-brand-gold transition-colors">{t.nav.product}</Link>
          <Link href="/contact" className="hover:text-brand-gold transition-colors">{t.nav.contact}</Link>
        </div>

        <div className="text-xs text-brand-text/30 tracking-widest uppercase">
          &copy; {currentYear} PIPA ROKOK AGUS KUNTADI. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
