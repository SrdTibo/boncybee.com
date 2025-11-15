import type { Metadata } from "next";
import { HomeView } from "./HomeView";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Official homepage of Boncybee, electronic music artist. Discover his universe, sound identity and latest news.",
  openGraph: {
    title: "Boncybee — Home",
    description:
      "Explore the official homepage of Boncybee, electronic music artist, and dive into his visual and musical universe.",
    images: [{ url: "/Cover.jpeg", width: 1200, height: 630, alt: "Boncybee - Cloud single cover" }],
  },
};

export default function Page() {
  return <HomeView />;
}
