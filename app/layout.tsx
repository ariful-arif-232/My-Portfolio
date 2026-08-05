import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { portfolio } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${portfolio.name} — ${portfolio.title}`,
    template: `%s | ${portfolio.name}`,
  },
  description: portfolio.bio,
  keywords: [portfolio.name, "frontend developer", "graphics designer", "portfolio", "Next.js", "React", "Bangladesh"],
  authors: [{ name: portfolio.name }],
  creator: portfolio.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${portfolio.name} — ${portfolio.title}`,
    description: portfolio.bio,
    url: "/",
    siteName: `${portfolio.name} Portfolio`,
    type: "website",
    locale: "en_US",
    images: [{ url: portfolio.profile.image, width: 1200, height: 630, alt: portfolio.profile.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} — ${portfolio.title}`,
    description: portfolio.bio,
    images: [portfolio.profile.image],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    jobTitle: portfolio.title,
    email: portfolio.email,
    address: { "@type": "PostalAddress", addressCountry: portfolio.location },
    alumniOf: portfolio.university,
    url: siteUrl,
    sameAs: [portfolio.socials.github, portfolio.socials.linkedin, portfolio.socials.facebook],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
