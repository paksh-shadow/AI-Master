import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
  const posts = getAllPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://www.aimasterblog.in/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://www.aimasterblog.in", lastModified: new Date() },
    { url: "https://www.aimasterblog.in/blog", lastModified: new Date() },
    { url: "https://www.aimasterblog.in/ai-tools", lastModified: new Date() },
    { url: "https://www.aimasterblog.in/about", lastModified: new Date() },
    { url: "https://www.aimasterblog.in/contact", lastModified: new Date() },
    ...blogPosts,
  ];
}