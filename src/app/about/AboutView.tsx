"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";

export function AboutView() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/set-portrait.webp" alt="Boncybee background" fill priority className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
      </div>
      <Navbar />
      <main className="relative z-10 flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:items-center md:justify-between md:gap-20">
        <div className="mx-auto w-full max-w-[230px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur md:max-w-sm">
          <Image src="/portrait.webp" alt="Boncybee portrait" width={500} height={600} className="h-auto w-full rounded-2xl object-cover" />
        </div>
        <div className="max-w-xl text-left">
          <h1 className="font-archive mb-6 text-4xl uppercase tracking-[0.2em] md:text-6xl">About</h1>
          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">Boncybee is an electronic music artist known for a bold, immersive sound blending bass house, Majestic influences, and pop energy. Inspired by industry pioneers such as Martin Garrix and Skrillex, he has spent the past five years crafting a distinctive artistic identity built on emotional impact and sonic innovation. His music resonates with listeners seeking fresh, powerful, and deeply expressive electronic experiences.</p>
        </div>
      </main>
      <footer className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center text-[10px] uppercase tracking-[0.25em] text-zinc-500">© {new Date().getFullYear()} Boncybee - Designed by <a href="https://t2s.dev/">*T2S*</a></footer>
    </div>
  );
}
