"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";

export function HomeView() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/set.webp" alt="Boncybee live set" fill priority className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      </div>
      <Navbar />
      <main className="relative z-10 flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
        <div className="mb-2 flex items-center justify-center">
          <Image src="/logo.webp" alt="Boncybee logo" width={250} height={250} className="drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]" />
        </div>
        <h1 className="font-archive text-4xl uppercase tracking-[0.15em] md:text-6xl">BONCYBEE</h1>
        <div className="mt-4 flex flex-col gap-3 md:flex-row">
          <a href="/music" className="inline-flex items-center justify-center border border-white/70 px-8 py-2 text-xs uppercase tracking-[0.25em] transition hover:bg-white hover:text-black">Listen</a>
          <a href="/about" className="inline-flex items-center justify-center border border-white/30 bg-white/5 px-8 py-2 text-xs uppercase tracking-[0.25em] transition hover:border-white hover:bg-white hover:text-black">About</a>
        </div>
      </main>
      <footer className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center text-[10px] uppercase tracking-[0.25em] text-zinc-500">© {new Date().getFullYear()} Boncybee - Designed by <a href="https://t2s.dev/">*T2S*</a></footer>
    </div>
  );
}
