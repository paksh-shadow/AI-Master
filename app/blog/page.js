// app/blog/page.jsx
// ─── SEO Metadata (Server Component compatible) ───────────────────────────
export const metadata = {
  title: "All Blogs — AI MASTER",
  description: "Browse all AI tutorials, tool reviews, deep dives and industry news on AI MASTER.",
};

import Link from "next/link";

// ─── POSTS DATA (shared — move to lib/posts.js in production) ─────────────
const posts = [
  { slug: "best-ai-tools-2025",       title: "Best AI Tools of 2025 You Must Try",            category: "AI Tools",    date: "Mar 15, 2025", readTime: "6 min",  author: "Naresh Bhardwaj", excerpt: "From writing assistants to code generators — the definitive list of AI tools reshaping how we work.", cover: "🤖" },
  { slug: "chatgpt-vs-claude",         title: "ChatGPT vs Claude: Which AI Wins in 2025?",      category: "AI Tools",    date: "Mar 12, 2025", readTime: "8 min",  author: "Shadow",          excerpt: "A head-to-head comparison of the two most powerful AI assistants on the market today.", cover: "⚔️" },
  { slug: "prompt-engineering-guide",  title: "Prompt Engineering: The Complete 2025 Guide",    category: "Tutorials",   date: "Mar 10, 2025", readTime: "10 min", author: "Naresh Bhardwaj", excerpt: "Master the art of prompting AI models to get dramatically better outputs every time.", cover: "✍️" },
  { slug: "ai-image-generators",       title: "Top 7 AI Image Generators Ranked for 2025",      category: "AI Tools",    date: "Mar 8, 2025",  readTime: "7 min",  author: "Shadow",          excerpt: "Midjourney, DALL·E, Stable Diffusion and more — ranked by quality, speed, and pricing.", cover: "🎨" },
  { slug: "llm-explained",             title: "How Large Language Models Actually Work",         category: "Deep Dive",   date: "Mar 6, 2025",  readTime: "12 min", author: "Naresh Bhardwaj", excerpt: "A clear, jargon-free explanation of transformers, tokens, and why LLMs sometimes hallucinate.", cover: "🧠" },
  { slug: "nextjs-ai-app",             title: "Build an AI App with Next.js in 1 Hour",          category: "Tutorials",   date: "Mar 4, 2025",  readTime: "11 min", author: "Naresh Bhardwaj", excerpt: "Step-by-step: Build and deploy a real AI-powered web app using Next.js and the Claude API.", cover: "⚡" },
  { slug: "ai-for-students",           title: "How Students Can Use AI Without Cheating",        category: "Education",   date: "Mar 2, 2025",  readTime: "6 min",  author: "Shadow",          excerpt: "Use AI as a learning accelerator, not a shortcut — practical strategies for students.", cover: "📚" },
  { slug: "ai-automation-workflows",   title: "5 AI Automation Workflows That Save 10 Hours/Week", category: "Productivity", date: "Feb 28, 2025", readTime: "7 min", author: "Shadow",         excerpt: "Real automation setups using Make, Zapier, and AI saving professionals hours every week.", cover: "⚙️" },
  { slug: "future-of-ai-jobs",         title: "Which Jobs Will AI Replace — And Which Won't",   category: "Deep Dive",   date: "Feb 25, 2025", readTime: "9 min",  author: "Naresh Bhardwaj", excerpt: "An honest analysis of AI's impact on the job market, based on current capabilities.", cover: "🔮" },
  { slug: "open-source-ai-models",     title: "Best Open Source AI Models in 2025",              category: "Deep Dive",   date: "Feb 22, 2025", readTime: "8 min",  author: "Naresh Bhardwaj", excerpt: "Llama 3, Mistral, Gemma, and more — the open source AI ecosystem is thriving.", cover: "🔓" },
  { slug: "ai-startups-to-watch",      title: "10 AI Startups That Could Be the Next Big Thing", category: "Industry",    date: "Feb 18, 2025", readTime: "7 min",  author: "Shadow",          excerpt: "These under-the-radar AI companies are solving real problems and growing fast.", cover: "🚀" },
];

const catStyle = {
  "AI Tools":    { accent: "#f97316", bg: "rgba(249,115,22,0.12)" },
  Tutorials:     { accent: "#22d3ee", bg: "rgba(34,211,238,0.12)" },
  "Deep Dive":   { accent: "#a78bfa", bg: "rgba(167,139,250,0.12)" },
  Education:     { accent: "#34d399", bg: "rgba(52,211,153,0.12)" },
  Productivity:  { accent: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
  Industry:      { accent: "#f472b6", bg: "rgba(244,114,182,0.12)" },
};

const categories = ["All", "AI Tools", "Tutorials", "Deep Dive", "Education", "Productivity", "Industry"];

// ─── BLOG PAGE (Server Component — no "use client") ───────────────────────
export default function BlogPage() {
  return (
    <>
      {/* ── Inline styles (no Tailwind needed) ── */}
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
        .blog-card:hover .read-arrow {
          background: #f97316; color: #fff;
        }
        .cat-pill-link {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 0.38rem 1rem; border-radius: 20px;
          font-family: 'Syne', sans-serif; font-size: 0.78rem;
          font-weight: 700; text-decoration: none;
          letter-spacing: 0.06em; text-transform: uppercase;
          border: 1px solid transparent;
          transition: opacity 0.18s;
        }
        .cat-pill-link:hover { opacity: 0.75; }

        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; padding: 0 1rem 3rem !important; }
          .blog-hero { padding: 3rem 1.2rem 2rem !important; }
          .cat-bar { flex-wrap: nowrap !important; overflow-x: auto !important; justify-content: flex-start !important; padding: 0 1rem 1.5rem !important; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          .cat-bar::-webkit-scrollbar { display: none; }
          .hero-title { font-size: 2rem !important; }
          .hero-count { font-size: 0.7rem !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#05070f", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

        {/* ── NAVBAR ── */}
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
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem"
            }}>⚡</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#fff", letterSpacing: "-0.02em" }}>AI MASTER</span>
          </Link>
          <div style={{ display: "flex", gap: "2rem" }}>
            {[["Home", "/"], ["Blogs", "/blog"], ["AI Tools", "/ai-tools"], ["Contact", "/contact"]].map(([label, href]) => (
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

        {/* ── HERO ── */}
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
            {posts.length} Articles Published
          </div>

          <h1 className="hero-title" style={{
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

        {/* ── CATEGORY FILTER BAR ── */}
        <div className="cat-bar" style={{
          display: "flex", gap: "0.6rem", justifyContent: "center",
          padding: "1.5rem 2rem", flexWrap: "wrap"
        }}>
          {categories.map((cat) => {
            const cs = catStyle[cat] || { accent: "#f97316", bg: "rgba(249,115,22,0.12)" };
            const isAll = cat === "All";
            return (
              <Link key={cat} href={cat === "All" ? "/blog" : `/blog?cat=${encodeURIComponent(cat)}`}
                className="cat-pill-link"
                style={{
                  background: isAll ? "#f97316" : cs.bg,
                  color: isAll ? "#fff" : cs.accent,
                  borderColor: isAll ? "#f97316" : `${cs.accent}33`,
                }}
              >
                {!isAll && <span style={{ width: 5, height: 5, borderRadius: "50%", background: cs.accent, display: "inline-block" }} />}
                {cat}
              </Link>
            );
          })}
        </div>

        {/* ── POSTS GRID ── */}
        <main className="blog-grid" style={{
          maxWidth: "1100px", margin: "0 auto",
          padding: "0.5rem 1.5rem 5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {posts.map((post) => {
            const cs = catStyle[post.category] || { accent: "#f97316", bg: "rgba(249,115,22,0.1)" };
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">

                {/* Cover strip */}
                <div style={{
                  background: `linear-gradient(135deg, ${cs.bg}, rgba(5,7,15,0.85))`,
                  height: "110px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "3.2rem",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>{post.cover}</div>

                {/* Body */}
                <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column" }}>

                  {/* Category tag */}
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

                  {/* Title */}
                  <h2 style={{
                    fontFamily: "'Syne', sans-serif", fontSize: "1.05rem", fontWeight: 700,
                    color: "#e2e8f0", lineHeight: 1.35, marginBottom: "0.7rem",
                    letterSpacing: "-0.01em",
                  }}>{post.title}</h2>

                  {/* Excerpt */}
                  <p style={{
                    color: "#475569", fontSize: "0.85rem", lineHeight: 1.65,
                    marginBottom: "1.2rem", flex: 1,
                  }}>{post.excerpt}</p>

                  {/* Footer row */}
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

        {/* ── FOOTER ── */}
        <footer style={{
          background: "#030508",
          borderTop: "1px solid rgba(249,115,22,0.12)",
          padding: "2rem 2rem",
          textAlign: "center",
        }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "0.75rem" }}>
            <div style={{
              width: 28, height: 28, borderRadius: "7px",
              background: "linear-gradient(135deg, #f97316, #dc2626)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem"
            }}>⚡</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#fff" }}>AI MASTER</span>
          </Link>
          <p style={{ color: "#334155", fontSize: "0.8rem" }}>© 2025 AI MASTER. All rights reserved. · Built with ⚡ & AI</p>
        </footer>

      </div>
    </>
  );
}