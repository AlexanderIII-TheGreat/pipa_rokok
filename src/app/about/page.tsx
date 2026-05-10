'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/FadeIn';
import { useLanguage } from '@/context/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg relative overflow-x-hidden">
      <Navbar />

      {/* Decorative Side Text */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-8 opacity-20 z-0">
        <span className="text-[10px] tracking-[0.5em] uppercase text-brand-gold text-vertical">THE MASTER ARTISAN</span>
        <div className="w-[1px] h-32 bg-brand-gold" />
        <span className="text-[10px] tracking-[0.5em] uppercase text-brand-gold text-vertical">AGUS KUNTADI</span>
      </div>

      <main className="flex-grow pt-32 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center relative">
            <FadeIn>
              <span className="text-brand-gold text-xs tracking-[0.5em] uppercase font-bold mb-4 block">{t.about.story}</span>
              <h1 className="font-serif text-5xl md:text-8xl text-brand-text uppercase tracking-widest relative">
                {t.about.title}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-brand-gold/5 font-serif text-[12rem] select-none pointer-events-none">Story</span>
              </h1>
            </FadeIn>
          </div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-40">
             <FadeIn direction="right">
                <div className="relative aspect-[3/4] md:aspect-square overflow-hidden rounded-sm shadow-2xl group">
                   <Image 
                    src="/images/hero-bg.png" 
                    alt="Agus Kuntadi Artisan" 
                    fill 
                    className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
                   <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-brand-gold/40" />
                   <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-brand-gold/40" />
                </div>
             </FadeIn>

             <div className="space-y-12 relative">
                <FadeIn delay={0.2} direction="left">
                   <h2 className="font-serif text-3xl md:text-5xl text-brand-text uppercase leading-tight">
                      A Tradition of <br/> <span className="text-brand-gold italic">Handcrafted Perfection</span>
                   </h2>
                   <div className="w-20 h-[1px] bg-brand-gold/50 mt-6" />
                </FadeIn>

                <FadeIn delay={0.4} direction="left">
                   <p className="text-brand-text/70 text-lg md:text-xl leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:text-brand-gold first-letter:mr-3 first-letter:float-left">
                      {t.about.storyText}
                   </p>
                </FadeIn>

                <FadeIn delay={0.6} direction="left">
                   <div className="p-8 border-l-2 border-brand-gold bg-brand-secondary/30 italic text-brand-text/60 text-lg glass-card">
                      &quot;{t.home.philosophyText}&quot;
                   </div>
                </FadeIn>
             </div>
          </div>

          {/* Process Section */}
          <div className="bg-brand-secondary/50 backdrop-blur-sm -mx-6 md:-mx-12 px-6 md:px-12 py-32 relative">
             <div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="order-2 md:order-1 space-y-8">
                   <FadeIn>
                      <span className="text-brand-gold text-xs tracking-[0.5em] uppercase font-bold mb-4 block">The Art of Wood</span>
                      <h2 className="font-serif text-3xl md:text-5xl text-brand-text uppercase leading-tight">{t.about.process}</h2>
                      <p className="text-brand-text/60 text-lg leading-relaxed font-light">
                        {t.about.processText}
                      </p>
                      <div className="grid grid-cols-3 gap-8 pt-8">
                         <div className="space-y-2">
                            <span className="block font-serif text-3xl text-brand-gold">100%</span>
                            <span className="text-[10px] tracking-widest uppercase text-brand-text/40 block">Handmade</span>
                            <div className="w-8 h-[1px] bg-brand-gold/30" />
                         </div>
                         <div className="space-y-2">
                            <span className="block font-serif text-3xl text-brand-gold">Premium</span>
                            <span className="text-[10px] tracking-widest uppercase text-brand-text/40 block">Walnut Wood</span>
                            <div className="w-8 h-[1px] bg-brand-gold/30" />
                         </div>
                         <div className="space-y-2">
                            <span className="block font-serif text-3xl text-brand-gold">Limited</span>
                            <span className="text-[10px] tracking-widest uppercase text-brand-text/40 block">Masterpieces</span>
                            <div className="w-8 h-[1px] bg-brand-gold/30" />
                         </div>
                      </div>
                   </FadeIn>
                </div>
                <FadeIn direction="left" className="order-1 md:order-2">
                   <div className="relative aspect-video overflow-hidden shadow-2xl group">
                      <Image 
                        src="/images/galih-asem.png" 
                        alt="Wood Process" 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                   </div>
                </FadeIn>
             </div>
             <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
