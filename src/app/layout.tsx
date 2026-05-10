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

export const metadata: Metadata = {
  title: "Pipa Rokok Agus Kuntadi | Merokok Juga Ada Seninya",
  description: "Handcrafted luxury smoking pipes by Agus Kuntadi. Every pipe is a piece of art.",
  keywords: ["pipa rokok", " Agus Kuntadi", "handcrafted pipes", "luxury smoking", "artisan pipes"],
  authors: [{ name: "Agus Kuntadi" }],
  openGraph: {
    title: "Pipa Rokok Agus Kuntadi",
    description: "Merokok Juga Ada Seninya. Handcrafted luxury smoking pipes.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-brand-bg text-brand-text selection:bg-brand-gold selection:text-brand-bg">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
