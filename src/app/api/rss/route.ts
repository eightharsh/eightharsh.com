import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { getAllPosts } from '../../lib/blog';  // Assuming you have a utility to fetch all posts

// Helper to create the RSS XML structure
function generateRSS(posts: any[]) {
  const items = posts
    .map((post) => {
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <description><![CDATA[${post.description}]]></description>
          <link>https://www.eightharsh.com/blog/${post.slug}</link>
          <guid isPermaLink="false">https://www.eightharsh.com/blog/${post.slug}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>
      `;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Harsh's Blog RSS Feed</title>
      <description>Latest blog posts from Harsh's blog</description>
      <link>https://www.eightharsh.com</link>
      <generator>Next.js</generator>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="https://www.eightharsh.com/rss" rel="self" type="application/rss+xml"/>
      <language>en</language>
      ${items}
    </channel>
  </rss>`;

  return rss;
}

// Handle the RSS feed request
export async function GET() {
  // Fetch the list of blog posts dynamically (this should be adapted to your setup)
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { title, description, date } = JSON.parse(content); // Assuming each post has JSON metadata

    return {
      title,
      description,
      slug: filename.replace('.mdx', ''),
      date,
    };
  });

  // Generate the RSS XML
  const rss = generateRSS(posts);

  // Return the RSS feed as plain text
  return NextResponse.json(rss, { headers: { 'Content-Type': 'application/rss+xml' } });
}

