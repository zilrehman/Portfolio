import type { Metadata } from "next";
import { Inter, Manrope, Playfair_Display, Rubik } from "next/font/google";
import "./globals.css";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/**
 * Italic only — matches the reference, which ships Playfair Display with
 * `font-style: italic` on every @font-face. With no roman face in the family,
 * `.font-playfair` renders italic without each call site asking for it.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

/* Only used by the `font-inter` copy inside the services AI card, matching the
   reference; the body face stays Manrope. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Leading Global UI UX Design Agency",
  description:
    "Leading global UI/UX design agency. We design solutions that perform.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`min-h-full flex flex-col ${manrope.variable} ${playfair.variable} ${rubik.variable} ${inter.variable}`}
      >
        {children}
        <Footer />
        <MobileNav />
        <ScrollToTop />
      </body>
    </html>
  );
}
