import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Img } from "@/components/Img";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Listen to Boncybee's latest releases, including his single CLOUD. Access all streaming links and discover his electronic sound.",
  alternates: { canonical: "/music/" },
  openGraph: {
    title: "Boncybee — Music",
    description:
      "Discover CLOUD and other tracks by Boncybee. Bold, emotional and immersive electronic music.",
    url: "/music/",
  },
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
const platforms = ["Spotify", "Apple Music", "Deezer", "SoundCloud"];

export default function Music() {
  return (
    <PageShell bg="set-top" bgPosition="center 30%" bgOpacity="opacity-25" className="justify-center">
      <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-16">
        <a
          href={site.links}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen to Cloud"
          className="wipe group relative mx-auto block w-full max-w-[22rem] md:max-w-[30rem]"
          style={d(0)}
        >
          <Img
            name="cover"
            alt="Cloud — Boncybee single cover"
            preload
            sizes="(min-width: 768px) 480px, 90vw"
            className="h-auto w-full grayscale contrast-110 transition-[filter,transform] duration-1000 ease-out-expo group-hover:scale-[1.02] group-hover:grayscale-0"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-xs uppercase tracking-[0.35em] opacity-0 transition-all duration-500 group-hover:bg-ink/30 group-hover:opacity-100">
            Play ↗
          </span>
        </a>

        <div>
          <p className="reveal text-[10px] uppercase tracking-[0.35em] text-bone/50" style={d(100)}>
            Boncybee — Single
          </p>
          <h1 className="mt-3 font-display text-[clamp(4.5rem,15vw,12rem)] uppercase leading-[0.82] tracking-[-0.02em]">
            <span className="line"><span style={d(160)}>Cloud</span></span>
          </h1>
          <p className="reveal mt-8 max-w-sm text-sm leading-relaxed text-bone/70 md:text-base" style={d(320)}>
            A floating electronic journey between dreamy pads and powerful drops.
          </p>

          <div className="reveal mt-10" style={d(420)}>
            <a href={site.links} target="_blank" rel="noopener noreferrer" className="block-btn">
              Listen now <span aria-hidden>↗</span>
            </a>
          </div>

          <p className="reveal mt-8 text-[10px] uppercase tracking-[0.3em] text-bone/40" style={d(520)}>
            {platforms.join(" / ")}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
