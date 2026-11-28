import { getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import Image from "next/image";

const catStyle = {
  "AI Tools":   { accent: "#f97316", bg: "rgba(249,115,22,0.12)" },
  Tutorials:    { accent: "#22d3ee", bg: "rgba(34,211,238,0.12)" },
  "Deep Dive":  { accent: "#a78bfa", bg: "rgba(167,139,250,0.12)" },
  Education:    { accent: "#34d399", bg: "rgba(52,211,153,0.12)" },
  Productivity: { accent: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
  Industry:     { accent: "#f472b6", bg: "rgba(244,114,182,0.12)" },
};

function formatContent(content) {
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

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return <div style={{ padding: "4rem", textAlign: "center", color: "#fff", background: "#05070f", minHeight: "100vh" }}>Post not found</div>;
  }

  const cs = catStyle[post.category] || { accent: "#f97316", bg: "rgba(249,115,22,0.1)" };

  return (
    <div style={{ minHeight: "100vh", background: "#05070f", color: "#fff", width: "100%", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght=400;500;600&display=swap');
        * { box-sizing: border-box; }
        html, body { overflow-x: hidden !important; background: #05070f !important; margin: 0; padding: 0; }
        .back-btn:hover { background: rgba(249,115,22,0.2) !important; color: #fff !important; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ background: "rgba(5,7,15,0.97)", borderBottom: "1px solid rgba(249,115,22,0.18)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 1.5rem", height: "64px" }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: 34, height: 34, borderRadius: "9px", background: "linear-gradient(135deg, #f97316, #dc2626)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>⚡</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#fff", letterSpacing: "-0.02em" }}>{siteConfig.name}</span>
          </a>
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            <a href="/" style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "#f97316", textDecoration: "none", letterSpacing: "0.02em", borderBottom: "2px solid #f97316", paddingBottom: "2px" }}>Home</a>
            <a href="/blog" style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", textDecoration: "none", letterSpacing: "0.02em", borderBottom: "2px solid transparent", paddingBottom: "2px" }}>Blogs</a>
          </div>
        </div>
      </nav>

      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "4rem 2rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2rem", fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: "#334155" }}>
          <a href="/" style={{ cursor: "pointer", color: "#f97316", textDecoration: "none" }}>Home</a>
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

        <div style={{ textAlign: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "1.5rem", marginBottom: "3rem" }}>
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
            <div style={{ fontSize: "4rem", lineHeight: 1, color: "#f97316", textShadow: "0 0 40px rgba(249,115,22,0.4)" }}>
              {post.cover}
            </div>
          )}
        </div>

        <div>{formatContent(post.content || "")}</div>

        <a href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.35)", color: "#f97316", padding: "0.7rem 1.6rem", borderRadius: "10px", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", transition: "all 0.2s" }}>← Back to Articles</a>
      </article>

      <footer style={{ background: "#030508", borderTop: "1px solid rgba(249,115,22,0.12)", padding: "3.5rem 2.5rem 2rem", marginTop: "5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
            <div style={{ width: 32, height: 32, borderRadius: "8px", background: "linear-gradient(135deg, #f97316, #dc2626)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>⚡</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#fff" }}>{siteConfig.name}</span>
          </div>
          <p style={{ color: "#334155", fontSize: "0.85rem", lineHeight: 1.75, maxWidth: "280px", fontFamily: "'Outfit', sans-serif" }}>Your daily source for AI news, tool reviews, and in-depth tutorials.</p>
          <div style={{ display: "flex", gap: "12px", marginTop: "1.25rem" }}>
            {[
              { label: "X", href: "https://x.com/", svg: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { label: "LinkedIn", href: "https://www.linkedin.com/", svg: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              { label: "YouTube", href: "https://www.youtube.com/", svg: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ width: 34, height: 34, borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", textDecoration: "none", transition: "color 0.2s" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={s.svg} /></svg>
              </a>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.5rem" }}>
            <div style={{ color: "#475569", fontSize: "0.8rem", fontFamily: "'Outfit', sans-serif" }}>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
