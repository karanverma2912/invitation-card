import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Great_Vibes,
  Noto_Serif_Devanagari,
} from "next/font/google";
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

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: "400",
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karan ❤️ Damini | Wedding Invitation",
  description:
    "With the blessings of our families, Karan Verma & Damini Shivde invite you to celebrate their wedding journey from Maheshwar to Omkareshwar.",
  openGraph: {
    title: "Karan ❤️ Damini | Wedding Invitation",
    description:
      "With the blessings of our families, Karan Verma & Damini Shivde invite you to celebrate their wedding journey from Maheshwar to Omkareshwar.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} ${devanagari.variable} font-sans antialiased bg-brand-cream text-brand-dark`}
      >
        {children}
      </body>
    </html>
  );
}
