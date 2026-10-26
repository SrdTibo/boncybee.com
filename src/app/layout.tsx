import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { RouteTransitions } from "@/components/RouteTransitions";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const archive = localFont({
  src: "../fonts/Archive-Regular.ttf",
  variable: "--font-archive",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Boncybee — Electronic Music Artist",
    template: "%s | Boncybee",
  },
  description: site.description,
  keywords: [
    "Boncybee",
    "music",
    "electronic music",
    "bass house",
    "Majestic",
    "DJ",
    "producer",
    "Spotify",
    "Deezer",
    "Apple Music",
    "SoundCloud",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: "Boncybee — Electronic Music Artist",
    description:
      "Explore Boncybee's music, releases and artist universe. Follow the project and stay connected on streaming platforms and social media.",
    siteName: site.name,
    url: "/",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Boncybee - Cloud single cover" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: site.name,
  url: site.url,
  image: `${site.url}/og.jpg`,
  genre: site.genres,
  sameAs: [site.links],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${archive.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-80 focus:rounded-full focus:bg-bone focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <div className="grain" aria-hidden />
        <div className="curtain" aria-hidden />
        <RouteTransitions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
