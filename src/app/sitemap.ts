import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { projects } from "@/content/projects";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/experience", "/blog"].map((path) => ({ url: `${siteUrl}${path}` }));

  const projectPages = projects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}` }));

  const postPages = getAllPosts().map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: p.date,
  }));

  return [...pages, ...projectPages, ...postPages];
}