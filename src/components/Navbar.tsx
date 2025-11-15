"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-6 py-5 md:px-10"
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="font-archive text-[11px] uppercase tracking-[0.35em] text-zinc-400">
            F07H053WH0B31I3V3DF1R57.
          </span>
        </Link>

        <nav className="hidden gap-7 text-xs uppercase tracking-[0.25em] text-zinc-400 md:flex">
          <Link href="/music" className="transition-colors hover:text-white">
            Music
          </Link>
          <Link href="/about" className="transition-colors hover:text-white">
            About
          </Link>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-xs uppercase tracking-[0.25em] text-zinc-300"
        >
          Menu
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex h-screen w-screen flex-col bg-black"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-archive text-[11px] uppercase tracking-[0.35em] text-zinc-400">
                F07H053WH0B31I3V3DF1R57.
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.25em] text-zinc-300"
              >
                Close
              </button>
            </div>

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-1 flex-col items-center justify-center gap-8 text-center"
            >
              <Link
                href="/"
                className="text-2xl uppercase tracking-[0.3em] text-zinc-100"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/music"
                className="text-2xl uppercase tracking-[0.3em] text-zinc-100"
                onClick={() => setOpen(false)}
              >
                Music
              </Link>

              <Link
                href="/about"
                className="text-2xl uppercase tracking-[0.3em] text-zinc-100"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
