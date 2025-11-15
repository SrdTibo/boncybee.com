import type { Metadata } from "next";
import { AboutView } from "./AboutView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Boncybee is an electronic music artist known for a bold, immersive sound blending bass house, Majestic and pop energy. Learn more about his artistic journey and influences.",
  openGraph: {
    title: "Boncybee — About",
    description:
      "Discover who Boncybee is, his inspirations, and the artistic vision behind his immersive electronic productions.",
    images: [{ url: "/portrait.PNG", width: 800, height: 1000, alt: "Boncybee portrait" }],
  },
};

export default function Page() {
  return <AboutView />;
}
