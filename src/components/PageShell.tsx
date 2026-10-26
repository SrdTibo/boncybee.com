import type { CSSProperties, ReactNode } from "react";
import { Img, type ImageName } from "@/components/Img";
import { site } from "@/lib/site";

type PageShellProps = {
  bg: ImageName;
  bgPosition?: CSSProperties["objectPosition"];
  bgOpacity?: string;
  className?: string;
  children: ReactNode;
};

/** Full-viewport page frame: black & white backdrop, content and footer. */
export function PageShell({
  bg,
  bgPosition = "center",
  bgOpacity = "opacity-45",
  className = "",
  children,
}: PageShellProps) {
  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Img
          name={bg}
          alt=""
          fill
          preload
          sizes="100vw"
          className={`kenburns object-cover contrast-125 grayscale ${bgOpacity}`}
          style={{ objectPosition: bgPosition }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/60" />
      </div>

      <main id="main" className={`flex w-full flex-1 flex-col px-5 pb-8 pt-28 md:px-10 md:pt-32 ${className}`}>
        {children}
      </main>

      <footer
        className="reveal flex w-full items-center justify-between gap-4 px-5 pb-5 text-[10px] uppercase tracking-[0.3em] text-bone/40 md:px-10"
        style={{ "--d": "900ms" } as CSSProperties}
      >
        <span>© {new Date().getFullYear()} {site.name}</span>
        <a href={site.credit.href} target="_blank" rel="noopener" className="transition-colors hover:text-bone">
          Design *{site.credit.label}*
        </a>
      </footer>
    </div>
  );
}
