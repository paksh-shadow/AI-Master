import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "blogs");

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith(".md"));

  const posts = files.map(filename => {
    const slug = filename.replace(".md", "");
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title:    data.title    || "Untitled",
      category: data.category || "General",
      date:     data.date     || "",
      readTime: data.readTime || "5 min",
      author:   data.author   || "Velqor",
      excerpt:  data.excerpt  || "",
      cover:    data.cover    || "📝",
      content,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  // Guard against path traversal: only allow safe slug characters
  if (!slug || typeof slug !== "string" || !/^[a-zA-Z0-9._-]+$/.test(slug)) return null;
  const filePath = path.join(postsDirectory, `${slug}.md`);
  // Ensure resolved path stays inside postsDirectory
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(path.resolve(postsDirectory) + path.sep)) return null;
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title:    data.title    || "Untitled",
    category: data.category || "General",
    date:     data.date     || "",
    readTime: data.readTime || "5 min",
    author:   data.author   || "Velqor",
    excerpt:  data.excerpt  || "",
    cover:    data.cover    || "📝",
    content,
  };
}

export function getAllSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory)
    .filter(f => f.endsWith(".md"))
    .map(f => f.replace(".md", ""));
}