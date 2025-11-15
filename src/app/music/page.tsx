import type { Metadata } from "next";
import { MusicView } from "./MusicView";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Listen to Boncybee's latest releases, including his single CLOUD. Access all streaming links and discover his electronic sound.",
  openGraph: {
    title: "Boncybee — Music",
    description:
      "Discover CLOUD and other tracks by Boncybee. Bold, emotional and immersive electronic music.",
    images: [{ url: "/Cover.jpeg", width: 1200, height: 630, alt: "Boncybee - Cloud single cover" }],
  },
};

export default function Page() {
  return <MusicView />;
}
