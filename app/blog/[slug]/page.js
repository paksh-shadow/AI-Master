// app/blog/[slug]/page.js

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

const catStyle = {
  "AI Tools":   { accent: "#f97316", bg: "rgba(249,115,22,0.12)" },
  Tutorials:    { accent: "#22d3ee", bg: "rgba(34,211,238,0.12)" },
  "Deep Dive":  { accent: "#a78bfa", bg: "rgba(167,139,250,0.12)" },
  Education:    { accent: "#34d399", bg: "rgba(52,211,153,0.12)" },
  Productivity: { accent: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
  Industry:     { accent: "#f472b6", bg: "rgba(244,114,182,0.12)" },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found — " + siteConfig.name };

  const postUrl = `${siteConfig.url}/blog/${post.slug}`;
  const imageUrl = post.cover && post.cover.includes('.')
    ? `${siteConfig.url}/blogs/${post.cover}`
    : siteConfig.ogImage;

  return {
    title: `${post.title} — ${siteConfig.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags || [],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      images: [imageUrl],
    },
    other: {
      "article:published_time": post.date,
      "article:author": post.author,
      "article:section": post.category,
      "article:tag": post.tags?.join(", ") || "",
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

function renderContent(content) {
  if (!content) return null;
  return content.split("\n\n").map((block, i) => {
    const boldMatch = block.match(/^\*\*(.+?)\*\*/);
    if (boldMatch) {
      const heading = boldMatch[1];
      const body = block.replace(/^\*\*.+?\*\*\n?/, "");
      return (
        <div key={i} style={{ marginBottom: "2rem" }}>
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.1rem", fontWeight: 700,
            color: "#f97316", marginBottom: "0.6rem",
            display: "flex", alignItems: "center", gap: "8px",
          }}>
            <span style={{ width: 3, height: "1.1em", background: "#f97316", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
            {heading}
          </h3>
          {body && (
            <p style={{ lineHeight: 1.9, color: "#94a3b8", margin: 0, fontFamily: "'Outfit', sans-serif" }}>
              {body}
            </p>
          )}
        </div>
      );
    }
    return (
      <p key={i} style={{ lineHeight: 1.9, color: "#94a3b8", marginBottom: "1.5rem", fontFamily: "'Outfit', sans-serif" }}>
        {block}
      </p>
    );
  });
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  // JSON-LD structured data
  const postUrl = `${siteConfig.url}/blog/${post.slug}`;
  const imageUrl = post.cover && post.cover.includes('.')
    ? `${siteConfig.url}/blogs/${post.cover}`
    : siteConfig.ogImage;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags?.join(", ") || "",
  };

  const cs = catStyle[post.category] || { accent: "#f97316", bg: "rgba(249,115,22,0.12)" };
  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #05070f; }
        .back-btn:hover { background: rgba(249,115,22,0.18) !important; color: #fff !important; }
        .rel-card { transition: border-color 0.2s, transform 0.2s; text-decoration: none; }
        .rel-card:hover { border-color: rgba(249,115,22,0.4) !important; transform: translateY(-3px); }
        @media (max-width: 768px) {
          .article-wrap { padding: 2rem 1.2rem 3rem !important; }
          .related-grid { grid-template-columns: 1fr !important; }
          .desktop-nav  { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-menu-panel { display: block !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#05070f", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

        {/* NAVBAR */}
        <nav style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "0 2rem", height: "64px",
          background: "rgba(5,7,15,0.97)",
          borderBottom: "1px solid rgba(249,115,22,0.18)",
          position: "sticky", top: 0, zIndex: 100,
          backdropFilter: "blur(16px)",
        }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: 32, height: 32, borderRadius: "8px", background: "linear-gradient(135deg, #f97316, #dc2626)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>⚡</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#fff", letterSpacing: "-0.02em" }}>{siteConfig.name}</span>
          </Link>
          <div className="desktop-nav" style={{ display: "flex", gap: "2rem" }}>
            {[["Home", "/"], ["Blogs", "/blog"], ["About Us", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={label} href={href} style={{
                fontFamily: "'Syne', sans-serif", fontSize: "0.87rem", fontWeight: 600,
                color: label === "Blogs" ? "#f97316" : "rgba(255,255,255,0.5)",
                textDecoration: "none",
                borderBottom: label === "Blogs" ? "2px solid #f97316" : "2px solid transparent",
                paddingBottom: "2px",
              }}>{label}</Link>
            ))}
          </div>
          <details className="mobile-menu-btn" style={{ display: "none", position: "relative" }}>
            <summary style={{ listStyle: "none", cursor: "pointer", color: "#fff", fontSize: "1.5rem", lineHeight: 1, userSelect: "none" }}>☰</summary>
            <div style={{ position: "absolute", right: 0, top: "calc(100% + 8px)", background: "rgba(5,7,15,0.98)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "10px", padding: "0.5rem 0", minWidth: "160px", zIndex: 200, boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
              {[["Home", "/"], ["Blogs", "/blog"], ["About Us", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
                <Link key={label} href={href} style={{ display: "block", padding: "0.6rem 1.2rem", color: label === "Blogs" ? "#f97316" : "rgba(255,255,255,0.7)", fontFamily: "'Syne', sans-serif", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>{label}</Link>
              ))}
            </div>
          </details>
        </nav>

        {/* ARTICLE */}
        <article className="article-wrap" style={{ maxWidth: "780px", margin: "0 auto", padding: "3.5rem 2rem 3rem" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2rem", fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: "#334155" }}>
            <Link href="/" style={{ color: "#f97316", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "#f97316", textDecoration: "none" }}>Blog</Link>
            <span>/</span>
            <span style={{ color: cs.accent }}>{post.category}</span>
          </div>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: cs.bg, color: cs.accent,
            padding: "0.3rem 0.9rem", borderRadius: "20px",
            fontSize: "0.72rem", fontFamily: "'Syne', sans-serif",
            fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
            marginBottom: "1.25rem", border: `1px solid ${cs.accent}35`,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: cs.accent, display: "inline-block" }} />
            {post.category}
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.2, marginBottom: "1.25rem", letterSpacing: "-0.03em",
          }}>{post.title}</h1>

          <div style={{
            display: "flex", gap: "1.5rem", flexWrap: "wrap",
            fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: "#334155",
            marginBottom: "2.5rem", paddingBottom: "2rem",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}>
            <span style={{ color: "#f97316", fontWeight: 600 }}>✍ {post.author}</span>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime} read</span>
          </div>

          <div style={{
            textAlign: "center",
            background: `linear-gradient(135deg, ${cs.bg}, rgba(5,7,15,0.9))`,
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "20px", padding: "1.5rem", marginBottom: "3rem",
            maxWidth: "100%", overflow: "hidden",
          }}>
            {post.cover && post.cover.includes('.') ? (
              <Image
                src={`/blogs/${post.cover}`}
                alt={post.title}
                width={1200}
                height={630}
                style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", display: "block", margin: "0 auto" }}
                priority
                sizes="(max-width: 768px) 100vw, 780px"
              />
            ) : (
              <div style={{
                fontSize: "4rem", lineHeight: 1, padding: "1rem 0",
                color: cs.accent, textShadow: `0 0 40px ${cs.accent}40`,
              }}>
                {post.cover}
              </div>
            )}
          </div>

          <div style={{ fontSize: "1rem" }}>
            {renderContent(post.content)}
          </div>

          <Link href="/blog" className="back-btn" style={{
            display: "inline-block", marginTop: "3.5rem",
            background: "rgba(249,115,22,0.1)",
            border: "1px solid rgba(249,115,22,0.35)",
            color: "#f97316", padding: "0.7rem 1.6rem",
            borderRadius: "10px",
            fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem",
            textDecoration: "none", transition: "all 0.2s",
          }}>← Back to Blogs</Link>
        </article>

        {/* RELATED POSTS */}
        {related.length > 0 && (
          <section style={{ maxWidth: "780px", margin: "0 auto", padding: "0 2rem 5rem" }}>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "2.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Related Articles</h2>
            </div>
            <div className="related-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${related.length}, 1fr)`, gap: "1rem" }}>
              {related.map((rp) => {
                const rcs = catStyle[rp.category] || { accent: "#f97316", bg: "rgba(249,115,22,0.1)" };
                return (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="rel-card" style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "14px", overflow: "hidden",
                    display: "flex", flexDirection: "column",
                  }}>
                    <div style={{ background: `linear-gradient(135deg, ${rcs.bg}, rgba(5,7,15,0.85))`, height: "80px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.2rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      {rp.cover && rp.cover.includes('.') ? (
                        <Image
                          src={`/blogs/${rp.cover}`}
                          alt={rp.title}
                          width={400}
                          height={225}
                          style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px", objectFit: "cover" }}
                          sizes="100vw"
                        />
                      ) : (
                        <div style={{ fontSize: "1.8rem", color: rcs.accent, textShadow: `0 0 20px ${rcs.accent}40` }}>
                          {rp.cover}
                        </div>
                      )}
                    </div>
                    <div style={{ padding: "1rem" }}>
                      <div style={{ color: rcs.accent, fontSize: "0.68rem", fontFamily: "'Syne', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{rp.category}</div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "#e2e8f0", lineHeight: 1.35, marginBottom: "0.5rem" }}>{rp.title}</div>
                      <div style={{ color: "#334155", fontSize: "0.72rem", fontFamily: "'Outfit', sans-serif" }}>{rp.date} · {rp.readTime} read</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer style={{ background: "#030508", borderTop: "1px solid rgba(249,115,22,0.12)", padding: "2rem", textAlign: "center" }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "0.75rem" }}>
            <div style={{ width: 28, height: 28, borderRadius: "7px", background: "linear-gradient(135deg, #f97316, #dc2626)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem" }}>⚡</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#fff" }}>{siteConfig.name}</span>
          </Link>
          <p style={{ color: "#334155", fontSize: "0.8rem" }}>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </footer>

      </div>
    </>
  );
}