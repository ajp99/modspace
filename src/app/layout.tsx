import type { Metadata } from "next";
import { Playfair_Display, Inter, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verdance | Custom Space Interiors",
  description: "Elevate your space with custom-made luxury furniture. Designed for comfort, built to last.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} ${manrope.variable} antialiased selection:bg-[var(--color-accent-gold)] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
