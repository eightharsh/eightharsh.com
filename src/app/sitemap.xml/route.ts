// src/app/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://eightharsh.com";

  
  const staticPages = [
    "",
    "/projects",
    "/now",
    "/blog"
  ];

  
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);
  const blogSlugs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  const blogUrls = blogSlugs.map((slug) => `/blog/${slug}`);

  const allUrls = [...staticPages, ...blogUrls];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
