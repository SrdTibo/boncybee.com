import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map(({ href }) => ({
    url: `${site.url}${href === "/" ? "/" : `${href}/`}`,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
