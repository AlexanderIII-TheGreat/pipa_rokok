'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, MapPin, Camera, Video, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Dynamic import for Google Maps to improve performance
const GoogleMap = dynamic(() => Promise.resolve(() => (
  <div className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 border border-brand-gold/20 p-1 bg-brand-gold/10 relative group">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.53825530694144!2d110.92485049999999!3d-7.4313462999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a053c4d2208b7%3A0xe815700fb004717d!2sPipa%20Rokok%20Agus%20Kuntadi%20Sragen!5e0!3m2!1sid!2sid!4v1778424217068!5m2!1sid!2sid" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Location"
      className="opacity-80 group-hover:opacity-100 transition-opacity"
    ></iframe>
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-2 border-brand-gold/20 m-2" />
  </div>
)), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-brand-secondary animate-pulse flex items-center justify-center text-brand-gold/30">Loading Map...</div>
});

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg relative overflow-x-hidden">
      <Navbar />

      {/* Decorative Side Text */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-8 opacity-20 z-0">
        <span className="text-[10px] tracking-[0.5em] uppercase text-brand-gold text-vertical">VISIT OUR STUDIO</span>
        <div className="w-[1px] h-32 bg-brand-gold" />
        <span className="text-[10px] tracking-[0.5em] uppercase text-brand-gold text-vertical">SRAGEN, INDONESIA</span>
      </div>

      <main className="flex-grow pt-40 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-32 relative text-center lg:text-left">
            <FadeIn>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                 <div className="relative">
                    <span className="text-brand-gold text-xs tracking-[0.6em] uppercase font-bold mb-6 block ml-1">{t.contact.title}</span>
                    <h1 className="font-serif text-6xl md:text-9xl text-brand-text uppercase leading-none tracking-tighter">
                       Contact <br/> <span className="text-brand-gold italic">Us.</span>
                    </h1>
                    <div className="absolute -top-16 -left-10 text-brand-gold/5 font-serif text-[15rem] select-none pointer-events-none hidden lg:block">Connect</div>
                 </div>
                 <div className="max-w-md lg:pb-4">
                    <p className="text-brand-text/50 text-lg font-light leading-relaxed">
                       Setiap mahakarya berawal dari sebuah percakapan. Kami di sini untuk mendengarkan visi Anda dan mewujudkannya dalam bentuk karya seni yang abadi.
                    </p>
                 </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-40">
             {/* Contact Cards */}
             <div className="lg:col-span-5 space-y-6">
                <FadeIn direction="right" delay={0.2}>
                   <div className="glass-card p-10 hover:border-brand-gold/30 transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                      <div className="flex items-center space-x-6 mb-4">
                         <div className="w-10 h-10 flex items-center justify-center bg-brand-gold/10 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-bg transition-colors duration-500">
                            <MapPin size={18} />
                         </div>
                         <h3 className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-bold">{t.contact.address}</h3>
                      </div>
                      <p className="text-brand-text text-xl md:text-2xl font-serif leading-relaxed">
                         Jl. Gedangan, Gentanbanaran, <br/> Plupuh, Sragen, Jawa Tengah
                      </p>
                   </div>
                </FadeIn>

                <FadeIn direction="right" delay={0.4}>
                   <div className="glass-card p-10 hover:border-brand-gold/30 transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                      <div className="flex items-center space-x-6 mb-4">
                         <div className="w-10 h-10 flex items-center justify-center bg-brand-gold/10 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-bg transition-colors duration-500">
                            <Phone size={18} />
                         </div>
                         <h3 className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-bold">{t.contact.phone}</h3>
                      </div>
                      <p className="text-brand-text text-xl md:text-2xl font-serif">
                         +62 818-0593-2764
                      </p>
                   </div>
                </FadeIn>

                <FadeIn direction="right" delay={0.6}>
                   <div className="glass-card p-10 hover:border-brand-gold/30 transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                      <div className="flex items-center space-x-6 mb-6">
                         <div className="w-10 h-10 flex items-center justify-center bg-brand-gold/10 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-bg transition-colors duration-500">
                            <Send size={18} />
                         </div>
                         <h3 className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-bold">{t.contact.social}</h3>
                      </div>
                      
                      <div className="flex space-x-8 mb-10">
                         <a href="#" className="text-brand-text/40 hover:text-brand-gold transition-all duration-300 hover:-translate-y-1"><Camera size={24} /></a>
                         <a href="#" className="text-brand-text/40 hover:text-brand-gold transition-all duration-300 hover:-translate-y-1"><Video size={24} /></a>
                         <a href="#" className="text-brand-text/40 hover:text-brand-gold transition-all duration-300 hover:-translate-y-1"><Mail size={24} /></a>
                      </div>

                      <a 
                        href="https://wa.me/6281805932764" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-4 text-[10px] tracking-[0.4em] uppercase font-bold text-brand-gold hover:text-brand-text transition-colors duration-300 group/btn"
                      >
                         <span>{t.contact.whatsappBtn}</span>
                         <div className="w-12 h-[1px] bg-brand-gold group-hover/btn:w-20 transition-all duration-500" />
                      </a>
                   </div>
                </FadeIn>
             </div>

             {/* Map Section */}
             <div className="lg:col-span-7 h-full min-h-[600px] relative">
                <FadeIn direction="left" delay={0.4} className="h-full">
                   <GoogleMap />
                   {/* Map Decorative Corner */}
                   <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/20 backdrop-blur-xl border border-brand-gold/30 p-6 hidden md:flex flex-col justify-end">
                      <span className="text-[8px] tracking-[0.3em] uppercase text-brand-gold font-bold mb-1">Located in</span>
                      <span className="text-xs text-brand-text font-serif">Central Java</span>
                   </div>
                </FadeIn>
             </div>
          </div>
        </div>
      </main>

      {/* Decorative Divider */}
      <div className="luxury-line w-full opacity-50" />

      <Footer />
    </div>
  );
};

export default ContactPage;
