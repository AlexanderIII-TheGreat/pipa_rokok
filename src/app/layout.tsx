import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

import Script from "next/script";

export const metadata: Metadata = {
  title: "Pipa Rokok Agus Kuntadi | Pipa Rokok Kayu & Tulang Premium Sragen",
  description: "Pengrajin pipa rokok handcrafted mewah oleh Agus Kuntadi Sragen. Koleksi pipa rokok kayu galih asem, walnut, dan tulang berkualitas tinggi. Merokok juga ada seninya.",
  keywords: ["pipa rokok", "pipa rokok sragen", "pipa rokok kayu", "pipa rokok tulang", "Agus Kuntadi", "handcrafted pipes", "luxury smoking", "artisan pipes", "pipa rokok galih asem", "pipa rokok gading", "pipa rokok duyung"],
  authors: [{ name: "Agus Kuntadi" }],
  openGraph: {
    title: "Pipa Rokok Agus Kuntadi | Kerajinan Pipa Rokok Sragen",
    description: "Koleksi pipa rokok handcrafted mewah. Kayu & Tulang pilihan dengan detail seni tinggi.",
    type: "website",
    locale: "id_ID",
    url: "https://piparokokaguskuntadi.com",
    siteName: "Pipa Rokok Agus Kuntadi",
  },
  verification: {
    google: ["u1yXPiLcPWMheTipxfR1JwHWYIFSaFpGiCaJNuQZnaQ", "fHFWkb5yz6_BQzQYwpsBLJ7vYKOCZfrw0rw-EGkvKPM"],
  },
  alternates: {
    canonical: "https://piparokokaguskuntadi.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pipa Rokok Agus Kuntadi",
  "image": "https://piparokokaguskuntadi.com/images/hero-bg.png",
  "@id": "https://piparokokaguskuntadi.com",
  "url": "https://piparokokaguskuntadi.com",
  "telephone": "+6281805932764",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sragen",
    "addressLocality": "Sragen",
    "addressRegion": "Jawa Tengah",
    "postalCode": "57211",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.4265,
    "longitude": 111.0215
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://wa.me/6281805932764"
  ],
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-bg text-brand-text selection:bg-brand-gold selection:text-brand-bg">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
