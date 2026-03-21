"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const catStyle = {
  "AI Tools":    { accent: "#f97316", bg: "rgba(249,115,22,0.12)" },
  Tutorials:     { accent: "#22d3ee", bg: "rgba(34,211,238,0.12)" },
  "Deep Dive":   { accent: "#a78bfa", bg: "rgba(167,139,250,0.12)" },
  Education:     { accent: "#34d399", bg: "rgba(52,211,153,0.12)" },
  Productivity:  { accent: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
  Industry:      { accent: "#f472b6", bg: "rgba(244,114,182,0.12)" },
};

const categories = ["All", "AI Tools", "Tutorials", "Deep Dive", "Education", "Productivity", "Industry"];

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/api/posts")
      .then(r => r.json())
      .then(data => setPosts(data))
      .catch(() => setPosts([]));
  }, []);

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #05070f; }
        .blog-card {
          display: flex; flex-direction: column;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; overflow: hidden;
          text-decoration: none;
          transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
        }
        .blog-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249,115,22,0.35);
          box-shadow: 0 20px 60px rgba(249,115,22,0.1);
        }
        .read-arrow {
          display: inline-block;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.3);
          color: #f97316;
          padding: 0.38rem 0.85rem;
          border-radius: 8px;
          font-family: 'Syne', sans-serif;
          font-weight: 700; font-size: 0.75rem;
          transition: background 0.18s, color 0.18s;
        }
        .blog-card:hover .read-arrow { background: #f97316; color: #fff; }
        .cpill { transition: all 0.18s; cursor: pointer; border: none; outline: none; }
        .cpill:hover { opacity: 0.8; }
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; padding: 0 1rem 3rem !important; }
          .blog-hero { padding: 3rem 1.2rem 2rem !important; }
          .cat-bar { overflow-x: auto !important; flex-wrap: nowrap !important; justify-content: flex-start !important; padding: 0 1rem 1.5rem !important; scrollbar-width: none; }
          .cat-bar::-webkit-scrollbar { display: none; }
          .desktop-nav { display: none !important; }
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
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#fff", letterSpacing: "-0.02em" }}>AI MASTER</span>
          </Link>
          <div className="desktop-nav" style={{ display: "flex", gap: "2rem" }}>
            {[["Home", "/"], ["Blogs", "/blog"], ["AI Tools", "/ai-tools"], ["About Us", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={label} href={href} style={{
                fontFamily: "'Syne', sans-serif", fontSize: "0.87rem", fontWeight: 600,
                color: label === "Blogs" ? "#f97316" : "rgba(255,255,255,0.5)",
                textDecoration: "none",
                borderBottom: label === "Blogs" ? "2px solid #f97316" : "2px solid transparent",
                paddingBottom: "2px"
              }}>{label}</Link>
            ))}
          </div>
        </nav>

        {/* HERO */}
        <section className="blog-hero" style={{
          padding: "4rem 2rem 2.5rem", textAlign: "center",
          background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(249,115,22,0.13) 0%, transparent 70%)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)",
            color: "#f97316", borderRadius: "20px",
            padding: "0.3rem 1rem", fontSize: "0.72rem",
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem"
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f97316", display: "inline-block", boxShadow: "0 0 8px #f97316" }} />
            {posts.length}+ Articles Published
          </div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.04em", marginBottom: "1rem",
          }}>
            All <span style={{ background: "linear-gradient(90deg,#f97316,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Blog Posts</span>
          </h1>
          <p style={{ color: "#475569", fontSize: "1rem", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Deep dives, tutorials, tool reviews, and AI industry insights — all in one place.
          </p>
        </section>

        {/* CATEGORY FILTER — ab kaam karega! */}
        <div className="cat-bar" style={{
          display: "flex", gap: "0.6rem", justifyContent: "center",
          padding: "1.5rem 2rem", flexWrap: "wrap"
        }}>
          {categories.map((cat) => {
            const cs = catStyle[cat] || { accent: "#f97316", bg: "rgba(249,115,22,0.12)" };
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                className="cpill"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.45rem 1.1rem", borderRadius: "20px",
                  background: isActive ? (cat === "All" ? "#f97316" : cs.bg) : "rgba(255,255,255,0.05)",
                  color: isActive ? (cat === "All" ? "#fff" : cs.accent) : "#475569",
                  border: isActive && cat !== "All" ? `1px solid ${cs.accent}55` : "1px solid transparent",
                  fontFamily: "'Syne', sans-serif", fontSize: "0.82rem", fontWeight: 700,
                  letterSpacing: "0.03em",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* POSTS GRID */}
        <main className="blog-grid" style={{
          maxWidth: "1100px", margin: "0 auto",
          padding: "0.5rem 1.5rem 5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {filtered.length === 0 ? (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "5rem 2rem", color: "#334155", fontFamily: "'Outfit', sans-serif" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
              <p>{posts.length === 0 ? "Posts load ho rahi hain..." : "Is category mein koi post nahi hai."}</p>
            </div>
          ) : filtered.map((post) => {
            const cs = catStyle[post.category] || { accent: "#f97316", bg: "rgba(249,115,22,0.1)" };
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div style={{
                  background: `linear-gradient(135deg, ${cs.bg}, rgba(5,7,15,0.85))`,
                  height: "110px", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "3.2rem",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>{post.cover}</div>
                <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    background: cs.bg, color: cs.accent,
                    padding: "0.22rem 0.65rem", borderRadius: "10px",
                    fontSize: "0.68rem", fontFamily: "'Syne', sans-serif",
                    fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em",
                    marginBottom: "0.85rem", alignSelf: "flex-start",
                    border: `1px solid ${cs.accent}33`,
                  }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: cs.accent, display: "inline-block" }} />
                    {post.category}
                  </div>
                  <h2 style={{
                    fontFamily: "'Syne', sans-serif", fontSize: "1.05rem", fontWeight: 700,
                    color: "#e2e8f0", lineHeight: 1.35, marginBottom: "0.7rem",
                    letterSpacing: "-0.01em",
                  }}>{post.title}</h2>
                  <p style={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1.2rem", flex: 1 }}>{post.excerpt}</p>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem",
                  }}>
                    <div>
                      <div style={{ color: "#f97316", fontSize: "0.75rem", fontWeight: 600 }}>{post.author}</div>
                      <div style={{ color: "#334155", fontSize: "0.72rem" }}>{post.date} · {post.readTime} read</div>
                    </div>
                    <span className="read-arrow">Read →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </main>

        {/* FOOTER */}
        <footer style={{ background: "#030508", borderTop: "1px solid rgba(249,115,22,0.12)", padding: "2rem", textAlign: "center" }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "0.75rem" }}>
            <div style={{ width: 28, height: 28, borderRadius: "7px", background: "linear-gradient(135deg, #f97316, #dc2626)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem" }}>⚡</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#fff" }}>AI MASTER</span>
          </Link>
          <p style={{ color: "#334155", fontSize: "0.8rem" }}>© 2025 AI MASTER. All rights reserved. · Built with ⚡ & AI</p>
        </footer>

      </div>
    </>
  );
}