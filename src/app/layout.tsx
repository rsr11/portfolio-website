import type { Metadata } from "next";
import { site, siteUrl } from "@/lib/site";
// import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { Inter, JetBrains_Mono, Playfair_Display, Tinos, Pinyon_Script } from "next/font/google";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-src", display: "swap" });
// const display = Playfair_Display({
//   subsets: ["latin"],
//   style: ["italic"],
//   variable: "--font-display-src",
//   display: "swap",
// });

const display = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display-src",
  display: "swap",
}); 

const times = Tinos({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-times-src",
  display: "swap",
});

const script = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-src",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Software Developer",
  url: siteUrl,
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable} ${display.variable} ${times.variable} ${script.variable}`}
    >
      <body className="font-sans antialiased">
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
  />
        <Providers>
          <Header />
          {children}
          <Footer/>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}