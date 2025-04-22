import { NextResponse } from 'next/server';
import RSS from 'rss';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Function to parse MDX files and return metadata and content
export async function parseMDX(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    title: data.title,
    description: data.description,
    slug: path.basename(filePath, '.mdx'), // Use the file name as the slug
    date: data.date,
    content: content, // Actual content (to be included in content:encoded)
  };
}

// API Route to generate RSS feed
export async function GET() {
  const feed = new RSS({
    title: 'eightharsh\'s blog RSS Feed',
    description: 'eightharsh\'s blog RSS Feed',
    feed_url: 'https://www.eightharsh.com/rss',
    site_url: 'https://www.eightharsh.com',
    language: 'en',
    lastBuildDate: new Date(),
  });

  // Read posts directory and get the list of MDX files
  const postsDirectory = path.join(process.cwd(), 'posts');
  const postFiles = fs.readdirSync(postsDirectory);

  // Parse each MDX file
  const posts = await Promise.all(
    postFiles.map(async (file) => {
      const postPath = path.join(postsDirectory, file);
      return await parseMDX(postPath);
    })
  );

  // Add each post to the RSS feed
  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `https://www.eightharsh.com/blog/${post.slug}`,
      date: new Date(post.date),
      guid: `https://www.eightharsh.com/blog/${post.slug}`,
      content: `
        <![CDATA[
        <p>${post.content}</p>
        <p><a href="https://www.eightharsh.com/blog/${post.slug}">Read the full post</a></p>
        ]]>
      `, // Ensure that content is wrapped in CDATA
    });
  });

  // Return the RSS XML with correct headers
  return NextResponse.json(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml', // Ensure the correct MIME type is set
    },
  });
}


