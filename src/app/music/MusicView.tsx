"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";

export function MusicView() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/SetTop.JPG" alt="Boncybee live show" fill priority className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
      </div>
      <Navbar />
      <main className="relative z-10 flex max-w-5xl flex-col items-center justify-center px-4 text-center md:flex-row md:items-center md:justify-between md:gap-16">
        <div className="mb-8 flex justify-center md:mb-0 md:w-1/2">
          <div className="mx-auto w-full max-w-[230px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur md:max-w-xs">
            <Image src="/Cover.jpeg" alt="Cloud - Boncybee cover" width={300} height={300} className="h-auto w-full rounded-2xl object-cover" />
          </div>
        </div>
        <section className="flex flex-col items-center gap-4 md:items-start md:w-1/2">
          <p className="text-[11px] uppercase tracking-[0.4em] text-zinc-400">New Release</p>
          <h1 className="font-archive text-4xl uppercase tracking-[0.18em] md:text-5xl">CLOUD</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-300">Boncybee · Single</p>
          <p className="mt-4 max-w-md text-left text-sm text-zinc-300 md:text-base">Discover <span className="font-semibold">CLOUD</span>, the latest Boncybee track — a floating electronic journey between dreamy pads and powerful drops.</p>
          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <a href="https://linktr.ee/Boncybee" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-white/80 bg-white px-9 py-2 text-xs uppercase tracking-[0.25em] text-black transition hover:bg-transparent hover:text-white">Open release links</a>
          </div>
        </section>
      </main>
      <footer className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center text-[10px] uppercase tracking-[0.25em] text-zinc-500">© {new Date().getFullYear()} Boncybee - Designed by <a href="https://t2s.dev/">*T2S*</a></footer>
    </div>
  );
}
