"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Img } from "@/components/Img";
import { TransitionLink } from "@/components/RouteTransitions";
import { nav, site } from "@/lib/site";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className="reveal fixed inset-x-0 top-0 z-60 mix-blend-difference"
        style={{ "--d": "200ms" } as React.CSSProperties}
      >
        <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
          <TransitionLink href="/" className="group" aria-label="Boncybee — home">
            <Img
              name="logo"
              alt=""
              sizes="48px"
              className="h-auto w-9 transition-transform duration-700 ease-out-expo group-hover:scale-110 md:w-10"
            />
          </TransitionLink>

          <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
            {nav.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <TransitionLink
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`text-xs uppercase tracking-[0.3em] transition-opacity duration-300 ${
                    active ? "line-through decoration-1" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  {label}
                </TransitionLink>
              );
            })}
            <a href={site.links} target="_blank" rel="noopener noreferrer" className="link">
              Listen <span className="arrow" aria-hidden>↗</span>
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative z-10 flex h-10 items-center gap-3 text-xs uppercase tracking-[0.3em] md:hidden"
          >
            {open ? "Close" : "Menu"}
            <span className="relative block h-2.5 w-5" aria-hidden>
              <span className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-out-expo ${open ? "top-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-out-expo ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-55 flex flex-col justify-between bg-ink px-5 pb-10 pt-28 transition-[clip-path] duration-700 ease-in-out-quart md:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {nav.map(({ href, label }, i) => (
            <span key={href} className="line">
              <TransitionLink
                href={href}
                onClick={() => setOpen(false)}
                aria-current={isActive(pathname, href) ? "page" : undefined}
                className={`block font-display text-6xl uppercase leading-[1.05] transition-[transform,opacity] duration-700 ease-out-expo aria-[current=page]:text-outline ${
                  open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                style={{ transitionDelay: open ? `${150 + i * 80}ms` : "0ms" }}
              >
                {label}
              </TransitionLink>
            </span>
          ))}
        </nav>
        <div className={`flex items-end justify-between transition-opacity duration-700 ${open ? "opacity-100 delay-500" : "opacity-0"}`}>
          <a href={site.links} target="_blank" rel="noopener noreferrer" className="link">
            Listen <span className="arrow" aria-hidden>↗</span>
          </a>
          <span className="font-display text-[9px] uppercase tracking-[0.3em] opacity-40">{site.tagline}</span>
        </div>
      </div>
    </>
  );
}
