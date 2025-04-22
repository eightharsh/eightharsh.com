import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import matter from "gray-matter"; // To parse frontmatter from MDX files

// Helper function to format date to RFC-822
const formatDate = (date: Date) => {
  return date.toUTCString();
};

// Fetch the list of posts from your "posts" directory
const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);

    // Read the file content and parse the frontmatter (metadata)
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent); // Extract frontmatter

    return {
      title: data.title || "Untitled",
      link: `https://www.eightharsh.com/blog/${filename.replace(".mdx", "")}`,
      pubDate: formatDate(new Date(data.date || Date.now())), // Default to now if no date exists
      description: data.description || "No description available",
    };
  });

  return posts;
};

export async function GET() {
  const posts = getPosts();
  const rssFeed = `
  <?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>eightharsh's blog RSS Feed</title>
      <description>eightharsh's blog RSS Feed</description>
      <link>https://www.eightharsh.com</link>
      <generator>RSS for Bun</generator>
      <lastBuildDate>${formatDate(new Date())}</lastBuildDate>
      <language>en</language>
      ${posts
        .map(
          (post) => `
          <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${post.link}</link>
            <guid isPermaLink="false">${post.link}</guid>
            <pubDate>${post.pubDate}</pubDate>
            <description><![CDATA[${post.description}]]></description>
          </item>
        `
        )
        .join("")}
    </channel>
  </rss>
  `;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml", // Proper MIME type for RSS feeds
    },
  });
}

