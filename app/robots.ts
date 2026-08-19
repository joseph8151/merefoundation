import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

// Required for static export (Cloudflare Pages) — this route has no
// per-request data, so it's safe to force-static.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
