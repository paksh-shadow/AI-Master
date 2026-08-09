import { getAllPosts } from "@/lib/..."

export default function sitemap() {
  const posts = getAllPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://www.aimasterblog.in/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://www.aimasterblog.in" },
    { url: "https://www.aimasterblog.in/blog" },
    { url: "https://www.aimasterblog.in/ai-tools" },
    { url: "https://www.aimasterblog.in/about" },
    { url: "https://www.aimasterblog.in/contact" },
    ...blogPosts,
  ];
}