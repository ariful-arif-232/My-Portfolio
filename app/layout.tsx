import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { portfolio } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: `${portfolio.name} | ${portfolio.title}`,
  description: portfolio.bio,
  keywords: [portfolio.name, "portfolio", "web developer", "graphics designer", "Next.js", "Bangladesh"],
  authors: [{ name: portfolio.name, url: "https://example.com" }],
  creator: portfolio.name,
  openGraph: { title: `${portfolio.name} | Portfolio`, description: portfolio.bio, type: "website", images: [portfolio.profile.image] },
  twitter: { card: "summary_large_image", title: `${portfolio.name} | Portfolio`, description: portfolio.bio, images: [portfolio.profile.image] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
