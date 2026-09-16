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
  title: "AI Development Company | Zyvarex",
  description:
    "Build custom AI agents, chatbots, and RAG systems. Fixed-price packages from $3,000 with 2-4 week delivery. Backed by 14+ years and 800+ projects.",
  /**
   * Favicon follows the tab bar color scheme. Declared dark-first so a browser
   * that ignores `media` falls back to the light-context mark, which stays
   * legible on a default tab bar.
   */
  icons: {
    icon: [
      {
        url: "/img/illustrations/zyvarex-symbol-on-dark-32-padded.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/img/illustrations/zyvarex-symbol-on-light-32-padded.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
        sizes: "32x32",
      },
    ],
  },
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
