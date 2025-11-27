import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import { personalInfo } from "@/data/resume";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} | ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.tagline,
  keywords: ["Android Developer", "Kotlin", "Mobile App Development", "Mitul Chovatiya", "Portfolio"],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mitul.dev", // Placeholder
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.about,
    siteName: personalInfo.name,
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: "https://mitul.dev",
    sameAs: [
      personalInfo.social.linkedin,
      personalInfo.social.github,
    ],
    description: personalInfo.about,
    knowsAbout: ["Android Development", "Kotlin", "Jetpack Compose", "Clean Architecture"],
  };

  return (
    <html lang="en" className={`${fontVariables} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative bg-bg-midnight text-white font-body antialiased overflow-x-hidden selection:bg-primary-1/30 selection:text-white" suppressHydrationWarning>
        <SmoothScrollWrapper>
          <Navbar />
          <main className="relative z-0 flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScrollWrapper>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
