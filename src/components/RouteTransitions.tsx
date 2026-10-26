"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ComponentProps, type MouseEvent } from "react";

const OUT_DURATION = 500;
let failsafe: number | undefined;

const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

/** Lifts the curtain once the new route has rendered underneath it. */
export function RouteTransitions() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.transition !== "out") return;
    // Two frames: let the incoming page paint before revealing it.
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => delete root.dataset.transition),
    );
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}

/** next/link that drops the curtain before navigating. */
export function TransitionLink({ href, onClick, ...props }: ComponentProps<typeof Link>) {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const target = typeof href === "string" ? href : (href.pathname ?? "/");
    if (normalize(target) === normalize(pathname)) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    e.preventDefault();
    const root = document.documentElement;
    root.dataset.transition = "out";
    window.setTimeout(() => router.push(target), OUT_DURATION);
    window.clearTimeout(failsafe);
    failsafe = window.setTimeout(() => delete root.dataset.transition, OUT_DURATION + 4000);
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
