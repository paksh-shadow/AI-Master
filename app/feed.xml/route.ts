import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export async function GET() {
  const posts = getAllPosts();
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const rssItems = sortedPosts
    .map((post) => {
      const postUrl = `${siteConfig.url}/blog/${post.slug}`;
      const imageUrl = post.cover && post.cover.includes(".")
        ? `${siteConfig.url}/blogs/${post.cover}`
        : siteConfig.ogImage;

      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${postUrl}</link>
          <guid isPermaLink="true">${postUrl}</guid>
          <description><![CDATA[${post.excerpt}]]></description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <author>${siteConfig.email} (${post.author})</author>
          <category>${post.category}</category>
          ${post.tags?.map((tag: string) => `<category>${tag}</category>`).join("") || ""}
          <enclosure url="${imageUrl}" type="image/png" />
        </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[${siteConfig.name}]]></title>
    <link>${siteConfig.url}</link>
    <description><![CDATA[${siteConfig.description}]]></description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteConfig.ogImage}</url>
      <title>${siteConfig.name}</title>
      <link>${siteConfig.url}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}