import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Img } from "@/components/Img";
import { PageShell } from "@/components/PageShell";
import { TransitionLink } from "@/components/RouteTransitions";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Boncybee is an electronic music artist known for a bold, immersive sound blending bass house, Majestic and pop energy. Learn more about his artistic journey and influences.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "Boncybee — About",
    description:
      "Discover who Boncybee is, his inspirations, and the artistic vision behind his immersive electronic productions.",
    url: "/about/",
  },
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function About() {
  return (
    <PageShell bg="set-portrait" bgPosition="center 25%" bgOpacity="opacity-20" className="justify-center">
      <section className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <figure className="wipe relative mx-auto w-full max-w-[20rem] md:max-w-sm" style={d(0)}>
          <Img
            name="portrait"
            alt="Portrait of Boncybee"
            preload
            sizes="(min-width: 768px) 384px, 80vw"
            className="h-auto w-full grayscale contrast-125"
          />
          <figcaption className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.3em] text-bone/40">
            <span>{site.name}</span>
            <span>{site.tagline}</span>
          </figcaption>
        </figure>

        <div>
          <p className="reveal text-[10px] uppercase tracking-[0.35em] text-bone/50" style={d(100)}>
            About
          </p>
          <h1 className="mt-3 font-display text-[clamp(3rem,8.5vw,7.5rem)] uppercase leading-[0.85] tracking-[-0.02em]">
            {site.genres.map((genre, i) => (
              <span key={genre} className="line">
                <span style={d(160 + i * 80)} className={i === site.genres.length - 1 ? "text-outline" : undefined}>
                  {genre}.
                </span>
              </span>
            ))}
          </h1>
          <p className="reveal mt-8 max-w-xl text-sm leading-relaxed text-bone/70 md:text-base" style={d(420)}>
            Boncybee is an electronic music artist known for a bold, immersive sound blending bass house,
            Majestic influences, and pop energy. Inspired by industry pioneers such as Martin Garrix and
            Skrillex, he has spent the past five years crafting a distinctive artistic identity built on
            emotional impact and sonic innovation. His music resonates with listeners seeking fresh,
            powerful, and deeply expressive electronic experiences.
          </p>

          <div className="reveal mt-10" style={d(520)}>
            <TransitionLink href="/music" className="link">
              Hear Cloud <span className="arrow" aria-hidden>→</span>
            </TransitionLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
