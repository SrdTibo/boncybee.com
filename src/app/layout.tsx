import type { Metadata } from "next";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "Boncybee — Electronic Music Artist",
    template: "%s | Boncybee",
  },
  description:
    "Boncybee is an electronic music artist blending bass house, Majestic and pop influences to create bold, immersive electronic experiences.",
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
  authors: [{ name: "Boncybee" }],
  openGraph: {
    title: "Boncybee — Electronic Music Artist",
    description:
      "Explore Boncybee's music, releases and artist universe. Follow the project and stay connected on streaming platforms and social media.",
    siteName: "Boncybee",
    images: [
      {
        url: "/Cover.jpeg",
        width: 1200,
        height: 630,
        alt: "Boncybee - Cloud single cover",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/LogoBlackWhiteBack.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden bg-black text-white">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
