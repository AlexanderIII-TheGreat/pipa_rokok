'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic for Desktop
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we've reached the end, reset to beginning
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth * 0.8, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const collections = [
    { img: '/images/heritage-walnut.png', title: t.product.heritage },
    { img: '/images/galih-asem.png', title: t.product.bone },
    { img: '/images/midnight-ebony.png', title: t.product.midnight },
    { img: '/images/dragon-carved.png', title: t.product.dragon },
    { img: '/images/sandalwood-dragon.png', title: t.product.sandalwood },
    { img: '/images/deer-horn.png', title: t.product.deerHorn },
    { img: '/images/dugong-rib-long.png', title: t.product.dugongLong },
    { img: '/images/dugong-rib.png', title: t.product.dugong },
    { img: '/images/cow-bone.png', title: t.product.cowBone },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background Image - Optimized with Priority */}
          <Image
            src="/images/hero-bg.png"
            alt="Koleksi Pipa Rokok Kayu dan Tulang Agus Kuntadi Sragen"
            fill
            className="object-cover object-center scale-105"
            priority
            quality={90}
            sizes="100vw"
          />

          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-black/30" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"
          />

          <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex items-center h-full">
            <div className="max-w-3xl text-left mt-20 md:mt-0">
              <FadeIn delay={0.2} direction="none" duration={1.2}>
                <span className="text-brand-gold text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold mb-4 md:mb-6 block">
                  {t.home.preTitle}
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.1] mb-8 uppercase drop-shadow-2xl flex flex-col items-start">
                  <span className="text-brand-gold">{t.home.tagline1}</span>
                  <span className="text-brand-text">{t.home.tagline2}</span>
                </h1>
                <div className="w-16 h-[2px] bg-brand-gold/70 mb-8" />
              </FadeIn>
              
              <FadeIn delay={0.4} direction="up">
                <p className="text-brand-text/80 text-xs md:text-base tracking-wide max-w-sm md:max-w-xl mb-12 font-light leading-relaxed">
                  {t.home.subtext}
                </p>
              </FadeIn>

              <FadeIn delay={0.6} direction="up" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8">
                <Link 
                  href="/product" 
                  className="px-8 py-4 border border-brand-gold text-brand-gold text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-brand-gold hover:text-brand-bg transition-all duration-500 text-center"
                >
                  {t.home.explore}
                </Link>
                <a 
                  href="https://wa.me/6281805932764"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand-gold text-brand-bg text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-brand-text hover:text-brand-gold transition-all duration-500 text-center shadow-[0_0_20px_rgba(196,160,82,0.2)]"
                >
                  {t.home.cta}
                </a>
              </FadeIn>
            </div>
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-8 opacity-30">
            <span className="text-[10px] tracking-[0.5em] uppercase text-brand-gold text-vertical">HANDCRAFTED</span>
            <div className="w-[1px] h-20 bg-brand-gold" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-brand-gold text-vertical">EST. 1995</span>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-12 md:left-24 flex flex-col items-center opacity-30"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent" />
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-32 px-6 md:px-12 bg-brand-secondary">
          <div className="absolute left-6 top-10 text-brand-gold/10 font-serif text-[10rem] select-none pointer-events-none hidden md:block">01</div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-[4/5] overflow-hidden group shadow-2xl"
              >
                <Image 
                  src="/images/midnight-ebony.png" 
                  alt="Pipe Details" 
                  fill 
                  className="object-cover transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 border-[2px] border-brand-gold/20 m-4 md:m-8 pointer-events-none" />
              </motion.div>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className="space-y-8">
                <span className="text-brand-gold text-xs tracking-[0.5em] uppercase font-bold">{t.home.philosophyTitle}</span>
                <h2 className="font-serif text-4xl md:text-6xl text-brand-text leading-tight uppercase">
                  Crafting the <br/> <span className="text-brand-gold italic">Unforgettable</span>
                </h2>
                <p className="text-brand-text/60 text-lg leading-relaxed font-light italic">
                  {t.home.philosophyText}
                </p>
                <div className="w-20 h-[1px] bg-brand-gold" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Featured Collection Preview - Horizontal Scroll with Auto-Play */}
        <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-brand-bg">
          <div className="absolute right-6 top-10 text-brand-gold/10 font-serif text-[10rem] select-none pointer-events-none hidden md:block text-right">02</div>
          
          <div className="max-w-7xl mx-auto flex justify-between items-end mb-16">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-text uppercase tracking-widest">
                {t.home.collectionsTitle}
              </h2>
              <div className="w-24 h-[2px] bg-brand-gold mt-4" />
            </FadeIn>
            
            {/* Navigation Arrows */}
            <div className="flex space-x-4 relative z-20">
              <button 
                onClick={(e) => { e.preventDefault(); scroll('left'); }} 
                className="w-14 h-14 md:w-12 md:h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold active:bg-brand-gold/20 hover:bg-brand-gold hover:text-brand-bg transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); scroll('right'); }} 
                className="w-14 h-14 md:w-12 md:h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold active:bg-brand-gold/20 hover:bg-brand-gold hover:text-brand-bg transition-all"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {collections.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="min-w-[85vw] md:min-w-[400px] snap-center">
                <Link href="/product" className="group relative block aspect-[3/4] overflow-hidden shadow-xl rounded-sm">
                  <div className="w-full h-full">
                    <Image 
                      src={item.img} 
                      alt={`Koleksi ${item.title} - Pipa Rokok Agus Kuntadi Sragen`} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-center">
                    <h3 className="font-serif text-2xl text-brand-text uppercase tracking-widest mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <div className="w-12 h-[1px] bg-brand-gold mx-auto group-hover:w-full transition-all duration-500" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Testimonials - Infinite Scroll */}
        <section className="py-32 bg-brand-secondary/30 overflow-hidden relative border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
             <FadeIn>
                <span className="text-brand-gold text-xs tracking-[0.5em] uppercase font-bold mb-4 block">{t.home.testimonialsTitle}</span>
                <div className="w-12 h-[1px] bg-brand-gold mx-auto" />
             </FadeIn>
          </div>

          <div className="flex w-full relative">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap space-x-8 px-4"
            >
              {[...t.home.testimonials, ...t.home.testimonials].map((testi, idx) => (
                <div 
                  key={idx} 
                  className="inline-block w-[350px] md:w-[450px] glass-card p-10 whitespace-normal"
                >
                   <span className="text-brand-gold/30 text-5xl font-serif block mb-4">&quot;</span>
                   <p className="text-brand-text/70 text-lg md:text-xl font-light italic mb-8 leading-relaxed">
                      {testi.quote}
                   </p>
                   <div className="flex items-center space-x-4">
                      <div className="w-10 h-[1px] bg-brand-gold" />
                      <span className="text-brand-gold text-xs tracking-[0.3em] uppercase font-bold">{testi.name}</span>
                   </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Craftsmanship Quote */}
        <section className="relative py-40 flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 bg-brand-walnut opacity-10" />
           <FadeIn className="relative z-10 text-center px-6 max-w-4xl">
              <span className="text-brand-gold/50 text-6xl font-serif mb-8 block select-none">&quot;</span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-text italic leading-relaxed mb-8">
                {t.home.quote}
              </h2>
            </FadeIn>
         </section>

        {/* Final Call to Action */}
        <section className="relative py-32 px-6 overflow-hidden bg-brand-secondary/20">
           <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-fixed bg-center opacity-16 grayscale" />
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <FadeIn>
                 <span className="text-brand-gold text-xs tracking-[0.5em] uppercase font-bold mb-6 block">{t.home.ctaSubtitle}</span>
                 <h2 className="font-serif text-4xl md:text-7xl text-brand-text uppercase leading-tight mb-12">
                   {t.home.ctaTitle}
                 </h2>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-6">
                    <a 
                      href="https://wa.me/6281805932764" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative px-8 sm:px-12 py-5 bg-brand-gold text-brand-bg text-[10px] md:text-[12px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold hover:bg-brand-text transition-all duration-500 shadow-[0_0_30px_rgba(196,160,82,0.3)] overflow-hidden text-center"
                    >
                      <span className="relative z-10">{t.home.cta}</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </a>
                    <Link 
                      href="/contact" 
                      className="px-8 sm:px-12 py-5 border border-white/10 text-brand-text/50 text-[10px] tracking-[0.3em] uppercase font-bold hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-500 text-center"
                    >
                      {t.nav.contact}
                    </Link>
                  </div>
              </FadeIn>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
