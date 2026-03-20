"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

if (typeof document !== "undefined") {
  document.title = "AI MASTER - AI Blog";
}

const catStyle: Record<string, { accent: string; bg: string }> = {
  "AI Tools":   { accent: "#f97316", bg: "rgba(249,115,22,0.12)" },
  Tutorials:    { accent: "#22d3ee", bg: "rgba(34,211,238,0.12)" },
  "Deep Dive":  { accent: "#a78bfa", bg: "rgba(167,139,250,0.12)" },
  Education:    { accent: "#34d399", bg: "rgba(52,211,153,0.12)" },
  Productivity: { accent: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
  Industry:     { accent: "#f472b6", bg: "rgba(244,114,182,0.12)" },
};

const NAV_LINKS = ["Home", "Blogs", "About Us", "Contact"];
const NAV_PATHS: Record<string, string> = {
  "Home": "/",
  "Blogs": "/blog",
  "About Us": "/about",
  "Contact": "/contact",
};
const categories = ["All", "AI Tools", "Tutorials", "Deep Dive", "Education", "Productivity", "Industry"];

function formatContent(content: string) {
  return content.split("\n\n").map((p, i) => {
    const bold = p.match(/^\*\*(.+?)\*\*/);
    if (bold) {
      const heading = bold[1];
      const rest = p.replace(/^\*\*.+?\*\*\n?/, "");
      return (
        <div key={i} style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#f97316", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: 3, height: "1em", background: "#f97316", borderRadius: 2, display: "inline-block", flexShrink: 0 }} />
            {heading}
          </h3>
          {rest && <p style={{ lineHeight: 1.9, color: "#94a3b8", margin: 0, fontFamily: "'Outfit', sans-serif" }}>{rest}</p>}
        </div>
      );
    }
    return <p key={i} style={{ lineHeight: 1.9, color: "#94a3b8", marginBottom: "1.5rem", fontFamily: "'Outfit', sans-serif" }}>{p}</p>;
  });
}

function Navbar({ onHome }: { onHome: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={{ background: "rgba(5,7,15,0.97)", borderBottom: "1px solid rgba(249,115,22,0.18)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 1.5rem", height: "64px" }}>
        <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 34, height: 34, borderRadius: "9px", background: "linear-gradient(135deg, #f97316, #dc2626)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>⚡</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#fff", letterSpacing: "-0.02em" }}>AI MASTER</span>
        </Link>
        <div className="mobile-nav-links" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link} href={NAV_PATHS[link] || "/"} style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: link === "Home" ? "#f97316" : "rgba(255,255,255,0.6)", textDecoration: "none", letterSpacing: "0.02em", borderBottom: link === "Home" ? "2px solid #f97316" : "2px solid transparent", paddingBottom: "2px", transition: "color 0.2s" }}>{link}</Link>
          ))}
        </div>
        <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)} style={{ display: "none", flexDirection: "column", gap: "5px", background: "transparent", border: "none", cursor: "pointer", padding: "6px" }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: "block", width: 22, height: 2, background: menuOpen ? "#f97316" : "rgba(255,255,255,0.7)", borderRadius: 2, transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)") : "none", transition: "all 0.25s" }} />
          ))}
        </button>
      </div>
      {menuOpen && (
        <div style={{ borderTop: "1px solid rgba(249,115,22,0.15)", background: "rgba(5,7,15,0.99)", padding: "1rem 1.5rem 1.5rem" }}>
          {NAV_LINKS.map((link, idx) => (
            <Link key={link} href={NAV_PATHS[link] || "/"} onClick={() => setMenuOpen(false)} style={{ display: "block", fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 600, color: idx === 0 ? "#f97316" : "rgba(255,255,255,0.6)", padding: "0.85rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)", textDecoration: "none", letterSpacing: "0.02em" }}>{link}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#030508", borderTop: "1px solid rgba(249,115,22,0.12)", padding: "3.5rem 2.5rem 2rem", marginTop: "5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div style={{ width: 32, height: 32, borderRadius: "8px", background: "linear-gradient(135deg, #f97316, #dc2626)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>⚡</div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#fff" }}>AI MASTER</span>
            </div>
            <p style={{ color: "#334155", fontSize: "0.85rem", lineHeight: 1.75, maxWidth: "280px", fontFamily: "'Outfit', sans-serif" }}>Your daily source for AI news, tool reviews, and in-depth tutorials.</p>
            <div style={{ display: "flex", gap: "12px", marginTop: "1.25rem" }}>
              {["𝕏", "in", "▶"].map(icon => (
                <div key={icon} style={{ width: 34, height: 34, borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", color: "#475569", cursor: "pointer" }}>{icon}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Syne', sans-serif", color: "#fff", fontSize: "0.82rem", marginBottom: "1.2rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Topics</h4>
            {categories.filter(c => c !== "All").map(t => (
              <div key={t} style={{ color: "#334155", fontSize: "0.85rem", marginBottom: "0.55rem", fontFamily: "'Outfit', sans-serif" }}>{t}</div>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "'Syne', sans-serif", color: "#fff", fontSize: "0.82rem", marginBottom: "1.2rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Authors</h4>
            {["Naresh Bhardwaj", "Shadow Paksh"].map(a => (
              <div key={a} style={{ color: "#334155", fontSize: "0.85rem", marginBottom: "0.55rem", fontFamily: "'Outfit', sans-serif" }}>{a}</div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ color: "#1e293b", fontSize: "0.8rem", fontFamily: "'Outfit', sans-serif" }}>© 2025 AI MASTER. All rights reserved.</span>
          <span style={{ color: "#f97316", fontSize: "0.8rem", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Built with ⚡ & AI</span>
        </div>
      </div>
    </footer>
  );
}

export default function BlogSite() {
  const [posts, setPosts] = useState<any[]>([]);
  const [activePost, setActivePost] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/api/posts")
      .then(r => r.json())
      .then(data => setPosts(data))
      .catch(() => setPosts([]));
  }, []);

  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);
  const goHome = () => { setActivePost(null); if (typeof window !== "undefined") window.scrollTo(0, 0); };

  if (activePost) {
    const post = posts.find(p => p.slug === activePost);
    if (!post) return null;
    const cs = catStyle[post.category] || { accent: "#f97316", bg: "rgba(249,115,22,0.1)" };
    return (
      <div style={{ minHeight: "100vh", background: "#05070f", color: "#fff" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap');
          * { box-sizing: border-box; }
          .back-btn:hover { background: rgba(249,115,22,0.2) !important; color: #fff !important; }
          @media (max-width: 768px) { .mobile-nav-links { display: none !important; } .hamburger-btn { display: flex !important; } .article-padding { padding: 2rem 1.1rem 2rem !important; } }
        `}</style>
        <Navbar onHome={goHome} />
        <article className="article-padding" style={{ maxWidth: "780px", margin: "0 auto", padding: "4rem 2rem 2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2rem", fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: "#334155" }}>
            <span onClick={goHome} style={{ cursor: "pointer", color: "#f97316" }}>Home</span>
            <span>/</span>
            <span style={{ color: cs.accent }}>{post.category}</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: cs.bg, color: cs.accent, padding: "0.3rem 0.9rem", borderRadius: "20px", fontSize: "0.72rem", fontFamily: "'Syne', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.25rem", border: `1px solid ${cs.accent}40` }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: cs.accent, display: "inline-block" }} />
            {post.category}
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem", letterSpacing: "-0.03em" }}>{post.title}</h1>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: "#334155", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <span style={{ color: "#f97316", fontWeight: 600 }}>✍ {post.author}</span>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime} read</span>
          </div>
          <div style={{ fontSize: "5rem", textAlign: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "2.5rem", marginBottom: "3rem" }}>{post.cover}</div>
          <div>{formatContent(post.content || "")}</div>
          <button className="back-btn" onClick={goHome} style={{ marginTop: "3.5rem", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.35)", color: "#f97316", padding: "0.7rem 1.6rem", borderRadius: "10px", cursor: "pointer", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", transition: "all 0.2s" }}>← Back to Articles</button>
        </article>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#05070f", color: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        .pcard { transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s !important; cursor: pointer; }
        .pcard:hover { transform: translateY(-6px) !important; border-color: rgba(249,115,22,0.35) !important; box-shadow: 0 20px 60px rgba(249,115,22,0.1) !important; }
        .cpill { transition: all 0.18s; cursor: pointer; border: none; outline: none; }
        .cpill:hover { opacity: 0.8; }
        @media (max-width: 768px) {
          .mobile-nav-links { display: none !important; } .hamburger-btn { display: flex !important; }
          .featured-grid { grid-template-columns: 1fr !important; } .featured-emoji { display: none !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .posts-grid { grid-template-columns: 1fr !important; padding: 0 1rem 2rem !important; }
          .cat-scroll { overflow-x: auto !important; flex-wrap: nowrap !important; justify-content: flex-start !important; padding: 0 1rem 2rem !important; scrollbar-width: none; }
          .cat-scroll::-webkit-scrollbar { display: none; }
        }
      `}</style>
      <Navbar onHome={goHome} />

      <section style={{ position: "relative", overflow: "hidden", padding: "5.5rem 2rem 4rem", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(249,115,22,0.16) 0%, transparent 70%)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)", color: "#f97316", borderRadius: "20px", padding: "0.35rem 1rem", fontSize: "0.73rem", fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f97316", display: "inline-block", boxShadow: "0 0 8px #f97316" }} />
            {posts.length}+ Articles Published
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.4rem, 7vw, 5rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.04em", marginBottom: "1.25rem", color: "#fff" }}>
            Stay Ahead of<br />
            <span style={{ background: "linear-gradient(90deg, #f97316, #ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>the AI Curve</span>
          </h1>
          <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "500px", margin: "0 auto 1.75rem", fontFamily: "'Outfit', sans-serif" }}>
            Expert articles on AI tools, tutorials, deep dives, and industry insights — published daily.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f97316", color: "#fff", padding: "0.8rem 1.75rem", borderRadius: "12px", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", boxShadow: "0 0 24px rgba(249,115,22,0.35)" }}>🚀 Read Latest AI Blogs</Link>
            <Link href="/ai-tools" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", border: "1.5px solid rgba(249,115,22,0.4)", color: "#f97316", padding: "0.8rem 1.75rem", borderRadius: "12px", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>🛠️ Try Best AI Tools (Free)</Link>
          </div>
        </div>
      </section>

      <div className="cat-scroll" style={{ display: "flex", gap: "0.6rem", justifyContent: "center", padding: "0 1rem 2.5rem", flexWrap: "wrap" }}>
        {categories.map(cat => (
          <button key={cat} className="cpill" onClick={() => setActiveCategory(cat)} style={{ padding: "0.45rem 1.1rem", borderRadius: "20px", background: activeCategory === cat ? "#f97316" : "rgba(255,255,255,0.05)", color: activeCategory === cat ? "#fff" : "#475569", fontFamily: "'Syne', sans-serif", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.03em" }}>{cat}</button>
        ))}
      </div>

      {activeCategory === "All" && posts.length > 0 && (() => {
        const fp = posts[0];
        const cs = catStyle[fp.category] || { accent: "#f97316", bg: "rgba(249,115,22,0.1)" };
        return (
          <div style={{ maxWidth: "1100px", margin: "0 auto 2rem", padding: "0 1.5rem" }}>
            <Link href={`/blog/${fp.slug}`} style={{ textDecoration: "none" }}>
              <div className="pcard featured-grid" style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.07) 0%, rgba(220,38,38,0.05) 100%)", border: "1px solid rgba(249,115,22,0.18)", borderRadius: "20px", padding: "2.5rem", display: "grid", gridTemplateColumns: "1fr 140px", gap: "2rem" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: cs.bg, color: cs.accent, padding: "0.25rem 0.75rem", borderRadius: "12px", fontSize: "0.7rem", fontFamily: "'Syne', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>✦ Featured · {fp.category}</div>
                  <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "0.9rem", letterSpacing: "-0.03em" }}>{fp.title}</h2>
                  <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem", fontFamily: "'Outfit', sans-serif" }}>{fp.excerpt}</p>
                  <div style={{ display: "flex", gap: "1.5rem", color: "#334155", fontSize: "0.8rem", fontFamily: "'Outfit', sans-serif" }}>
                    <span style={{ color: "#f97316", fontWeight: 600 }}>✍ {fp.author}</span>
                    <span>{fp.date}</span>
                    <span>{fp.readTime} read</span>
                  </div>
                </div>
                <div className="featured-emoji" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem" }}>{fp.cover}</div>
              </div>
            </Link>
          </div>
        );
      })()}

      <main className="posts-grid" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {(activeCategory === "All" ? filtered.slice(1) : filtered).map((post) => {
          const cs = catStyle[post.category] || { accent: "#f97316", bg: "rgba(249,115,22,0.1)" };
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div className="pcard" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ background: `linear-gradient(135deg, ${cs.bg}, rgba(5,7,15,0.8))`, height: "100px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{post.cover}</div>
                <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: cs.bg, color: cs.accent, padding: "0.22rem 0.65rem", borderRadius: "10px", fontSize: "0.68rem", fontFamily: "'Syne', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.85rem", alignSelf: "flex-start" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: cs.accent, display: "inline-block" }} />
                    {post.category}
                  </div>
                  <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#e2e8f0", lineHeight: 1.35, marginBottom: "0.7rem", letterSpacing: "-0.01em" }}>{post.title}</h2>
                  <p style={{ color: "#334155", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1.2rem", flex: 1, fontFamily: "'Outfit', sans-serif" }}>{post.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
                    <div>
                      <div style={{ color: "#f97316", fontSize: "0.75rem", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>{post.author}</div>
                      <div style={{ color: "#1e293b", fontSize: "0.72rem", fontFamily: "'Outfit', sans-serif" }}>{post.date} · {post.readTime}</div>
                    </div>
                    <span style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)", color: "#f97316", padding: "0.4rem 0.9rem", borderRadius: "8px", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.75rem" }}>Read →</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}