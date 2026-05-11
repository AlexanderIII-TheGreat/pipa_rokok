'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProductPage = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 1,
      name: t.product.heritage,
      image: '/images/heritage-walnut.png',
      description: 'A tribute to the origins of smoking ritual. Crafted from 50-year-old walnut wood with a polished finish.',
      longDesc: 'Karya ini menggunakan kayu Walnut yang telah melalui proses pengeringan alami selama puluhan tahun, menghasilkan resonansi rasa yang murni. Setiap guratannya menceritakan sejarah pohon asalnya, menjadikannya bukan sekadar alat, melainkan warisan bagi pemakainya.',
      specs: ['Material: 50-year-old Walnut', 'Finish: Natural Wax Polish', 'Type: Straight Billiard'],
      side: 'right',
    },
    {
      id: 2,
      name: t.product.bone,
      image: '/images/galih-asem.png',
      description: 'Exclusive edition featuring Galih Asem wood accents, known for its spiritual protection and extreme durability.',
      longDesc: 'Galih Asem dikenal dalam tradisi nusantara sebagai kayu yang memiliki energi pelindung. Teksturnya yang sangat keras membutuhkan keahlian khusus untuk memahatnya. Pipa ini adalah perpaduan antara spiritualitas dan keanggunan fisik yang tak tertandingi.',
      specs: ['Material: Premium Galih Asem', 'Finish: Matte Finish', 'Type: Bent Apple'],
      side: 'left',
    },
    {
      id: 3,
      name: t.product.midnight,
      image: '/images/midnight-ebony.png',
      description: 'For the nocturnal souls. A deep, dark aesthetic with matte gold rings and a smooth draw.',
      longDesc: 'Dirancang untuk para penikmat malam. Karakter kayu yang gelap dipadukan dengan aksen emas memberikan kesan misterius namun tetap berkelas. Keseimbangan beratnya dirancang presisi untuk kenyamanan saat digenggam dalam waktu lama.',
      specs: ['Material: Dark Ebonized Wood', 'Finish: Matte Satin', 'Type: Poker'],
      side: 'right',
    },
    {
      id: 4,
      name: t.product.dragon,
      image: '/images/dragon-carved.png',
      description: 'The pinnacle of artistic carving. A majestic dragon entwined around the stem, a true masterwork.',
      longDesc: 'Puncak dari keahlian ukir tangan kami. Memerlukan waktu ratusan jam untuk mendetailkan setiap sisik naga yang melilit batang pipa. Ini adalah pernyataan tentang kekuatan dan dedikasi terhadap seni kriya murni.',
      specs: ['Material: Sandblasted Briar', 'Finish: Hand-Carved Detail', 'Type: Sculptural Churchwarden'],
      side: 'left',
    },
    {
      id: 5,
      name: t.product.sandalwood,
      image: '/images/sandalwood-dragon.png',
      description: 'The aromatic Sandalwood combined with high-detail dragon carving. A sensory masterpiece.',
      longDesc: 'Kayu Cendana (Sandalwood) memberikan aroma wangi alami yang menenangkan saat digunakan. Dipadukan dengan ukiran naga yang sangat detail, pipa ini merangsang indera penciuman dan penglihatan sekaligus. Koleksi yang sangat langka.',
      specs: ['Material: Genuine Sandalwood', 'Finish: Detail Carving', 'Type: Dragon Series'],
      side: 'right',
    },
    {
      id: 6,
      name: t.product.deerHorn,
      image: '/images/deer-horn.png',
      description: 'Tough and unique. Crafted from selected deer horn with its natural organic texture preserved.',
      longDesc: 'Dibuat dari tanduk kijang pilihan yang memiliki kepadatan tinggi. Tekstur pori-pori organiknya memberikan karakter yang tidak mungkin ditemukan pada material kayu. Pipa ini sangat tahan panas dan memiliki daya tahan seumur hidup.',
      specs: ['Material: Selected Deer Horn', 'Finish: Organic Polished', 'Type: Horn Series'],
      side: 'left',
    },
    {
      id: 7,
      name: t.product.dugongLong,
      image: '/images/dugong-rib-long.png',
      description: 'The rare long-stemmed Dugong Rib Bone. Known for its cooling properties and ivory-like finish.',
      longDesc: 'Tulang Iga Duyung adalah material yang sangat dicari karena sifatnya yang mendinginkan asap (cooling draw). Versi panjang ini memberikan suhu asap yang lebih stabil dan tampilan yang sangat prestisius layaknya gading.',
      specs: ['Material: Long Dugong Rib', 'Finish: High Gloss Ivory', 'Type: Long Stem'],
      side: 'right',
    },
    {
      id: 8,
      name: t.product.dugong,
      image: '/images/dugong-rib.png',
      description: 'Classic Dugong Rib Bone pipe. Dense, white, and exceptionally smooth.',
      longDesc: 'Versi klasik dari Tulang Iga Duyung dengan ukuran yang lebih ergonomis. Kepadatan tulangnya memberikan sensasi berat yang mantap di tangan dan warna putih krem yang akan semakin antik seiring berjalannya waktu.',
      specs: ['Material: Dugong Rib Bone', 'Finish: Smooth Polish', 'Type: Classic White'],
      side: 'left',
    },
    {
      id: 9,
      name: t.product.cowBone,
      image: '/images/cow-bone.png',
      description: 'Traditional Cow Bone artisan pipe. A clean, classic white aesthetic for everyday luxury.',
      longDesc: 'Dibuat dari tulang sapi yang telah melalui proses pembersihan dan sterilisasi artisan. Menghasilkan warna putih bersih yang elegan dengan harga yang lebih terjangkau tanpa mengurangi kualitas hisapan yang premium.',
      specs: ['Material: Artisan Cow Bone', 'Finish: Clean White Polish', 'Type: Daily Luxury'],
      side: 'right',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg relative overflow-x-hidden">
      <Navbar />

      {/* Decorative Side Text */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-8 opacity-20 z-0">
        <span className="text-[10px] tracking-[0.5em] uppercase text-brand-gold text-vertical">CURATED COLLECTION</span>
        <div className="w-[1px] h-32 bg-brand-gold" />
        <span className="text-[10px] tracking-[0.5em] uppercase text-brand-gold text-vertical">2024 EDITION</span>
      </div>

      <main className="flex-grow pt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative">
          <FadeIn className="text-center relative">
            <span className="text-brand-gold text-xs tracking-[0.5em] uppercase font-bold mb-4 block">The Collection</span>
            <h1 className="font-serif text-5xl md:text-8xl text-brand-text uppercase tracking-widest relative">
              {t.product.title}
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-brand-gold/5 font-serif text-[12rem] select-none pointer-events-none">Gallery</span>
            </h1>
            <div className="w-24 h-[1px] bg-brand-gold mx-auto mt-8" />
            <p className="mt-8 text-brand-text/60 text-sm md:text-base max-w-2xl mx-auto italic">
              Koleksi eksklusif pipa rokok kayu dan tulang buatan tangan pengrajin Sragen. 
              Kualitas premium untuk penikmat seni merokok sejati.
            </p>
          </FadeIn>
        </div>

        {/* Product Showcase */}
        <div className="space-y-0">
          {products.map((product, idx) => (
            <section 
              key={product.id} 
              className={`relative py-24 md:py-48 px-6 md:px-12 border-b border-white/5 overflow-hidden ${idx % 2 !== 0 ? 'bg-brand-secondary/30' : ''}`}
            >
              <div className={`absolute ${idx % 2 === 0 ? 'right-0' : 'left-0'} top-20 text-brand-gold/5 font-serif text-[20rem] leading-none select-none pointer-events-none`}>
                0{product.id}
              </div>

              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-32 relative z-10">
                {product.side === 'right' ? (
                  <>
                    <FadeIn direction="right" className="flex-1 w-full order-2 lg:order-1">
                      <div className="space-y-8 text-left">
                        <div className="flex items-center space-x-4">
                           <div className="w-8 h-[1px] bg-brand-gold/50" />
                           <span className="text-brand-gold/50 text-[10px] tracking-[0.4em] uppercase font-bold">Series 00{product.id}</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-7xl text-brand-text uppercase leading-tight">{product.name}</h2>
                        <p className="text-brand-text/60 text-lg md:text-xl font-light italic max-w-lg leading-relaxed border-l border-brand-gold/20 pl-6">
                          {product.description}
                        </p>
                        <div className="pt-6 flex flex-wrap gap-4">
                           <button 
                            onClick={() => setSelectedProduct(product)}
                            className="px-10 py-4 border border-brand-gold/30 text-brand-gold text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-gold hover:text-brand-bg transition-all duration-500 shadow-xl"
                           >
                             {t.product.discover}
                           </button>
                           <a 
                            href="https://wa.me/6281805932764"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-brand-gold text-brand-bg text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-text transition-all duration-500 shadow-xl"
                           >
                             {t.home.cta}
                           </a>
                        </div>
                      </div>
                    </FadeIn>
                    <FadeIn direction="left" className="flex-1 w-full order-1 lg:order-2">
                      <div className="relative aspect-square overflow-hidden group shadow-2xl">
                        <Image 
                          src={product.image} 
                          alt={`${product.name} - Koleksi Pipa Rokok Agus Kuntadi Sragen`} 
                          fill 
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/40 to-transparent" />
                      </div>
                    </FadeIn>
                  </>
                ) : (
                  <>
                    <FadeIn direction="right" className="flex-1 w-full">
                      <div className="relative aspect-square overflow-hidden group shadow-2xl">
                        <Image 
                          src={product.image} 
                          alt={`${product.name} - Koleksi Pipa Rokok Kayu dan Tulang Sragen`} 
                          fill 
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tl from-brand-bg/40 to-transparent" />
                      </div>
                    </FadeIn>
                    <FadeIn direction="left" className="flex-1 w-full text-right flex flex-col items-end">
                      <div className="space-y-8">
                        <div className="flex items-center justify-end space-x-4">
                           <span className="text-brand-gold/50 text-[10px] tracking-[0.4em] uppercase font-bold">Series 00{product.id}</span>
                           <div className="w-8 h-[1px] bg-brand-gold/50" />
                        </div>
                        <h2 className="font-serif text-4xl md:text-7xl text-brand-text uppercase leading-tight">{product.name}</h2>
                        <p className="text-brand-text/60 text-lg md:text-xl font-light italic max-w-lg leading-relaxed border-r border-brand-gold/20 pr-6">
                          {product.description}
                        </p>
                        <div className="pt-6 flex flex-wrap gap-4 justify-end">
                           <button 
                            onClick={() => setSelectedProduct(product)}
                            className="px-10 py-4 border border-brand-gold/30 text-brand-gold text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-gold hover:text-brand-bg transition-all duration-500 shadow-xl"
                           >
                             {t.product.discover}
                           </button>
                           <a 
                            href="https://wa.me/6281805932764"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-brand-gold text-brand-bg text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-text transition-all duration-500 shadow-xl"
                           >
                             {t.home.cta}
                           </a>
                        </div>
                      </div>
                    </FadeIn>
                  </>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />

      {/* Product Overview Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-0"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-brand-secondary border border-white/10 shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row h-auto max-h-[95vh]"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-brand-text hover:text-brand-gold transition-colors"
              >
                <X size={20} />
              </button>

              {/* Product Image Area */}
              <div className="w-full md:w-1/2 relative aspect-square sm:aspect-video md:aspect-auto md:h-auto bg-black shrink-0">
                <Image 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent md:bg-gradient-to-r" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                   <span className="text-brand-gold text-[8px] md:text-[10px] tracking-[0.5em] uppercase font-bold block mb-1 md:mb-2">Artisan Series</span>
                   <h2 className="font-serif text-3xl md:text-5xl text-brand-text uppercase leading-tight">{selectedProduct.name}</h2>
                </div>
              </div>

              {/* Product Info Area */}
              <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
                 <div className="space-y-8 md:space-y-12">
                    <div>
                       <h3 className="text-brand-gold text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold mb-4 md:mb-6">Overview</h3>
                       <p className="text-brand-text/80 text-base md:text-xl font-light leading-relaxed">
                          {selectedProduct.longDesc}
                       </p>
                    </div>

                    <div>
                       <h3 className="text-brand-gold text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold mb-4 md:mb-6">Specifications</h3>
                       <ul className="space-y-3 md:space-y-4">
                          {selectedProduct.specs.map((spec: string, i: number) => (
                            <li key={i} className="flex items-center text-brand-text/60 text-xs md:text-sm tracking-wide">
                               <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30 mr-4" />
                               {spec}
                            </li>
                          ))}
                       </ul>
                    </div>

                    <div className="pt-6 md:pt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                       <a 
                        href="https://wa.me/6281805932764" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-4 bg-brand-gold text-brand-bg text-center text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-text transition-all duration-500 shadow-xl"
                       >
                          Order Now
                       </a>
                       <button 
                        onClick={() => setSelectedProduct(null)}
                        className="px-8 md:px-10 py-4 border border-white/10 text-brand-text/50 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold hover:text-brand-text transition-all duration-500"
                       >
                          Close
                       </button>
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;
