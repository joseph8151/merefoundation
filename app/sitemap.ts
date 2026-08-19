import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { programs } from "@/data/programs";
import { stories } from "@/data/stories";
import { newsItems } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/what-we-do",
    "/stories",
    "/together",
    "/news",
    "/donate",
    "/transparency",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const storyRoutes = stories.map((story) => ({
    url: `${siteUrl}/stories/${story.slug}`,
    lastModified: new Date(story.date),
  }));

  const newsRoutes = newsItems.map((item) => ({
    url: `${siteUrl}/news/${item.slug}`,
    lastModified: new Date(item.date),
  }));

  // programs currently live at /what-we-do#slug rather than their own route
  void programs;

  return [...staticRoutes, ...storyRoutes, ...newsRoutes];
}
