import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { FloatingCTAs } from "@/components/global/FloatingCTAs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ovum Fertility | DR.Maheshwari M",
  description: "Path to Parenthood. World-class IVF and fertility care by DR.Maheshwari M.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <FloatingCTAs />
        <Footer />
      </body>
    </html>
  );
}
