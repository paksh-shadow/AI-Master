import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
  const posts = getAllPosts();
  const blogPosts = posts.map((post) => ({
    url: `https://ai-master-opal.vercel.app/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://ai-master-opal.vercel.app", lastModified: new Date() },
    { url: "https://ai-master-opal.vercel.app/blog", lastModified: new Date() },
    { url: "https://ai-master-opal.vercel.app/ai-tools", lastModified: new Date() },
    { url: "https://ai-master-opal.vercel.app/about", lastModified: new Date() },
    { url: "https://ai-master-opal.vercel.app/contact", lastModified: new Date() },
    ...blogPosts,
  ];
}