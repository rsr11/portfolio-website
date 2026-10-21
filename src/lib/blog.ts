import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "src/content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  cover?: string;
  readingTime: string;
}

export const author = {
  name: "Rajeshwar Singh",
  avatar: "/images/profile.png",
};

export function formatDate(date: string) {
  return new Date(date)
    .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })
    .toUpperCase();
}

function parse(file: string) {
  const slug = file.replace(/\.mdx$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
  const minutes = Math.max(1, Math.round(content.split(/\s+/).length / 200));
  const meta: PostMeta & { draft?: boolean } = {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary ?? "",
    tags: data.tags ?? [],
    cover: data.cover,
    readingTime: `${minutes} min read`,
    draft: data.draft,
  };
  return { meta, content };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => parse(f).meta)
    .filter((p) => !(p as { draft?: boolean }).draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPost(slug: string) {
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(dir, file))) return null;
  return parse(file);
}