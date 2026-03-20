// app/blog/[slug]/page.js

import { notFound } from "next/navigation";
import Link from "next/link";

// ─── POSTS DATA — .md files se auto load hota hai ───────────────────────────
import { getAllPosts, getPostBySlug } from "@/lib/posts";
const posts = getAllPosts();

// ─── CATEGORY STYLES// ─── CATEGORY STYLES ──────────────────────────────────────────────────────────
const catStyle = {
  "AI Tools":   { accent: "#f97316", bg: "rgba(249,115,22,0.12)" },
  Tutorials:    { accent: "#22d3ee", bg: "rgba(34,211,238,0.12)" },
  "Deep Dive":  { accent: "#a78bfa", bg: "rgba(167,139,250,0.12)" },
  Education:    { accent: "#34d399", bg: "rgba(52,211,153,0.12)" },
  Productivity: { accent: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
  Industry:     { accent: "#f472b6", bg: "rgba(244,114,182,0.12)" },
};

// ─── SEO: Dynamic metadata per post ──────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found — AI MASTER" };
  return {
    title: `${post.title} — AI MASTER`,
    description: post.excerpt,
  };
}

// ─── Static paths for all posts ──────────────────────────────────────────────
export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// ─── CONTENT RENDERER ────────────────────────────────────────────────────────
function renderContent(content) {
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
            <span style={{
              width: 3, height: "1.1em", background: "#f97316",
              borderRadius: 2, display: "inline-block", flexShrink: 0,
            }} />
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

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────
export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  // ✅ Correct usage — imported from next/navigation
  if (!post) return notFound();

  const cs = catStyle[post.category] || { accent: "#f97316", bg: "rgba(249,115,22,0.12)" };

  // Related posts — same category, exclude current
  const related = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #05070f; }
        .back-btn:hover { background: rgba(249,115,22,0.18) !important; color: #fff !important; }
        .rel-card { transition: border-color 0.2s, transform 0.2s; text-decoration: none; }
        .rel-card:hover { border-color: rgba(249,115,22,0.4) !important; transform: translateY(-3px); }
        .nav-lnk:hover { color: #f97316 !important; }
        @media (max-width: 768px) {
          .article-wrap { padding: 2rem 1.2rem 3rem !important; }
          .related-grid { grid-template-columns: 1fr !important; }
          .desktop-nav  { display: none !important; }
          .breadcrumb   { flex-wrap: wrap; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#05070f", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

        {/* ── NAVBAR ───────────────────────────────────────────── */}
        <nav style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "0 2rem", height: "64px",
          background: "rgba(5,7,15,0.97)",
          borderBottom: "1px solid rgba(249,115,22,0.18)",
          position: "sticky", top: 0, zIndex: 100,
          backdropFilter: "blur(16px)",
        }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: 32, height: 32, borderRadius: "8px",
              background: "linear-gradient(135deg, #f97316, #dc2626)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem",
            }}>⚡</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#fff", letterSpacing: "-0.02em" }}>
              AI MASTER
            </span>
          </Link>
          <div className="desktop-nav" style={{ display: "flex", gap: "2rem" }}>
            {[["Home", "/"], ["Blogs", "/blog"], ["About Us", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={label} href={href} className="nav-lnk" style={{
                fontFamily: "'Syne', sans-serif", fontSize: "0.87rem", fontWeight: 600,
                color: label === "Blogs" ? "#f97316" : "rgba(255,255,255,0.5)",
                textDecoration: "none",
                borderBottom: label === "Blogs" ? "2px solid #f97316" : "2px solid transparent",
                paddingBottom: "2px",
              }}>{label}</Link>
            ))}
          </div>
        </nav>

        {/* ── ARTICLE ──────────────────────────────────────────── */}
        <article className="article-wrap" style={{ maxWidth: "780px", margin: "0 auto", padding: "3.5rem 2rem 3rem" }}>

          {/* Breadcrumb */}
          <div className="breadcrumb" style={{
            display: "flex", alignItems: "center", gap: "8px",
            marginBottom: "2rem", fontFamily: "'Outfit', sans-serif",
            fontSize: "0.82rem", color: "#334155",
          }}>
            <Link href="/" style={{ color: "#f97316", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "#f97316", textDecoration: "none" }}>Blog</Link>
            <span>/</span>
            <span style={{ color: cs.accent }}>{post.category}</span>
          </div>

          {/* Category badge */}
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

          {/* Title */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.2, marginBottom: "1.25rem", letterSpacing: "-0.03em",
          }}>{post.title}</h1>

          {/* Meta */}
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

          {/* Cover emoji */}
          <div style={{
            fontSize: "5rem", textAlign: "center",
            background: `linear-gradient(135deg, ${cs.bg}, rgba(5,7,15,0.9))`,
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "20px", padding: "2.5rem", marginBottom: "3rem",
          }}>{post.cover}</div>

          {/* Content */}
          <div style={{ fontSize: "1rem" }}>
            {renderContent(post.content)}
          </div>

          {/* Back button */}
          <Link href="/blog" className="back-btn" style={{
            display: "inline-block",
            marginTop: "3.5rem",
            background: "rgba(249,115,22,0.1)",
            border: "1px solid rgba(249,115,22,0.35)",
            color: "#f97316", padding: "0.7rem 1.6rem",
            borderRadius: "10px",
            fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem",
            textDecoration: "none", transition: "all 0.2s",
          }}>← Back to Blogs</Link>
        </article>

        {/* ── RELATED POSTS ────────────────────────────────────── */}
        {related.length > 0 && (
          <section style={{
            maxWidth: "780px", margin: "0 auto", padding: "0 2rem 5rem",
          }}>
            <div style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "2.5rem", marginBottom: "1.5rem",
            }}>
              <h2 style={{
                fontFamily: "'Syne', sans-serif", fontSize: "1.2rem",
                fontWeight: 800, color: "#fff", letterSpacing: "-0.02em",
              }}>Related Articles</h2>
            </div>
            <div className="related-grid" style={{
              display: "grid",
              gridTemplateColumns: `repeat(${related.length}, 1fr)`,
              gap: "1rem",
            }}>
              {related.map((rp) => {
                const rcs = catStyle[rp.category] || { accent: "#f97316", bg: "rgba(249,115,22,0.1)" };
                return (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="rel-card" style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "14px", overflow: "hidden",
                    display: "flex", flexDirection: "column",
                  }}>
                    <div style={{
                      background: `linear-gradient(135deg, ${rcs.bg}, rgba(5,7,15,0.85))`,
                      height: "80px", display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: "2.2rem",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}>{rp.cover}</div>
                    <div style={{ padding: "1rem" }}>
                      <div style={{
                        color: rcs.accent, fontSize: "0.68rem",
                        fontFamily: "'Syne', sans-serif", fontWeight: 700,
                        textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem",
                      }}>{rp.category}</div>
                      <div style={{
                        fontFamily: "'Syne', sans-serif", fontSize: "0.9rem",
                        fontWeight: 700, color: "#e2e8f0", lineHeight: 1.35,
                        marginBottom: "0.5rem",
                      }}>{rp.title}</div>
                      <div style={{ color: "#334155", fontSize: "0.72rem", fontFamily: "'Outfit', sans-serif" }}>
                        {rp.date} · {rp.readTime} read
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ── FOOTER ───────────────────────────────────────────── */}
        <footer style={{
          background: "#030508",
          borderTop: "1px solid rgba(249,115,22,0.12)",
          padding: "2rem", textAlign: "center",
        }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "0.75rem" }}>
            <div style={{
              width: 28, height: 28, borderRadius: "7px",
              background: "linear-gradient(135deg, #f97316, #dc2626)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem",
            }}>⚡</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#fff" }}>AI MASTER</span>
          </Link>
          <p style={{ color: "#334155", fontSize: "0.8rem" }}>
            © 2025 AI MASTER. All rights reserved. · Built with ⚡ & AI
          </p>
        </footer>

      </div>
    </>
  );
}