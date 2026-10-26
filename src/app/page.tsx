import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { TransitionLink } from "@/components/RouteTransitions";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Boncybee — Electronic Music Artist" },
  description:
    "Official homepage of Boncybee, electronic music artist. Discover his universe, sound identity and latest news.",
  alternates: { canonical: "/" },
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <PageShell bg="set" bgPosition="60% 40%" bgOpacity="opacity-70" className="justify-end !px-0 !pb-4">
      <div className="flex items-end justify-between gap-6 px-5 md:px-10">
        <TransitionLink href="/music" className="reveal group block" style={d(500)}>
          <span className="block text-[10px] uppercase tracking-[0.35em] text-bone/50">New single — out now</span>
          <span className="mt-2 flex items-center gap-3 font-display text-3xl uppercase md:text-5xl">
            Cloud
            <span aria-hidden className="text-xl transition-transform duration-500 ease-out-expo group-hover:translate-x-2 md:text-3xl">
              →
            </span>
          </span>
        </TransitionLink>

        <p
          className="reveal hidden font-display text-[10px] uppercase tracking-[0.35em] text-bone/50 [writing-mode:vertical-rl] md:block"
          style={d(600)}
        >
          {site.tagline}
        </p>
      </div>

      <h1 className="mt-4 w-full overflow-hidden text-center font-display text-[17.6vw] uppercase leading-[0.8] tracking-[-0.02em]">
        <span className="line"><span style={d(100)}><span className="flicker" style={d(100)}>Boncybee</span></span></span>
      </h1>
    </PageShell>
  );
}
