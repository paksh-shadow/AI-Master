"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = ["Home", "Blogs", "About Us", "Contact"];
const NAV_PATHS = {
  "Home": "/",
  "Blogs": "/blog",
  "About Us": "/about",
  "Contact": "/contact",
};

const toolCategories = ["All", "Writing", "Image", "Coding", "Search", "Video", "Voice", "Productivity"];

const tools = [
  {
    name: "ChatGPT",
    emoji: "💬",
    category: "Writing",
    pricing: "Free",
    pricingType: "freemium",
    description: "OpenAI's powerful conversational AI for writing, coding, analysis, and much more.",
    url: "https://chat.openai.com",
    tags: ["Writing", "Coding", "Analysis"],
    accent: "#10b981",
  },
  {
    name: "Claude",
    emoji: "🧠",
    category: "Writing",
    pricing: "Free",
    pricingType: "freemium",
    description: "Anthropic's AI assistant — best for long documents, nuanced reasoning, and honest answers.",
    url: "https://claude.ai",
    tags: ["Writing", "Analysis", "Coding"],
    accent: "#f97316",
  },
  {
    name: "Gemini",
    emoji: "✨",
    category: "Writing",
    pricing: "Free",
    pricingType: "freemium",
    description: "Google's multimodal AI — works with text, images, and integrates with Google Workspace.",
    url: "https://gemini.google.com",
    tags: ["Writing", "Search", "Multimodal"],
    accent: "#3b82f6",
  },
  {
    name: "Midjourney",
    emoji: "🎨",
    category: "Image",
    pricing: "Paid",
    pricingType: "paid",
    description: "The gold standard for AI art generation. Produces stunning, photorealistic images from text.",
    url: "https://midjourney.com",
    tags: ["Art", "Design", "Creative"],
    accent: "#a78bfa",
  },
  {
    name: "DALL·E 3",
    emoji: "🖼️",
    category: "Image",
    pricing: "Free",
    pricingType: "freemium",
    description: "OpenAI's image generator built into ChatGPT. Great for precise instruction-following.",
    url: "https://openai.com/dall-e-3",
    tags: ["Image", "Design", "Creative"],
    accent: "#ec4899",
  },
  {
    name: "Adobe Firefly",
    emoji: "🔥",
    category: "Image",
    pricing: "Free",
    pricingType: "freemium",
    description: "Safe for commercial use — trained on licensed content. Integrated with Photoshop.",
    url: "https://firefly.adobe.com",
    tags: ["Image", "Design", "Commercial"],
    accent: "#f59e0b",
  },
  {
    name: "Cursor",
    emoji: "⚡",
    category: "Coding",
    pricing: "Free",
    pricingType: "freemium",
    description: "AI-powered code editor built on VSCode. Write, debug, and refactor code with AI chat.",
    url: "https://cursor.sh",
    tags: ["Coding", "VSCode", "Productivity"],
    accent: "#22d3ee",
  },
  {
    name: "GitHub Copilot",
    emoji: "🐙",
    category: "Coding",
    pricing: "Paid",
    pricingType: "paid",
    description: "AI pair programmer that suggests code completions directly in your editor.",
    url: "https://github.com/features/copilot",
    tags: ["Coding", "Autocomplete", "GitHub"],
    accent: "#6366f1",
  },
  {
    name: "Perplexity AI",
    emoji: "🔍",
    category: "Search",
    pricing: "Free",
    pricingType: "freemium",
    description: "AI-powered search engine that gives sourced, summarized answers in real-time.",
    url: "https://perplexity.ai",
    tags: ["Search", "Research", "Real-time"],
    accent: "#14b8a6",
  },
  {
    name: "ElevenLabs",
    emoji: "🎙️",
    category: "Voice",
    pricing: "Free",
    pricingType: "freemium",
    description: "Ultra-realistic AI voice cloning and text-to-speech used by creators worldwide.",
    url: "https://elevenlabs.io",
    tags: ["Voice", "TTS", "Podcast"],
    accent: "#f43f5e",
  },
  {
    name: "Runway ML",
    emoji: "🎬",
    category: "Video",
    pricing: "Free",
    pricingType: "freemium",
    description: "AI video generation and editing — create cinematic videos from text or images.",
    url: "https://runwayml.com",
    tags: ["Video", "Creative", "Editing"],
    accent: "#8b5cf6",
  },
  {
    name: "Notion AI",
    emoji: "📝",
    category: "Productivity",
    pricing: "Paid",
    pricingType: "paid",
    description: "AI built into Notion for writing, summarizing, brainstorming, and organizing notes.",
    url: "https://notion.so/product/ai",
    tags: ["Notes", "Writing", "Productivity"],
    accent: "#94a3b8",
  },
  {
    name: "Ideogram",
    emoji: "🔤",
    category: "Image",
    pricing: "Free",
    pricingType: "freemium",
    description: "Best AI tool for generating accurate text within images — a unique pain point solved.",
    url: "https://ideogram.ai",
    tags: ["Image", "Text-in-image", "Design"],
    accent: "#fb923c",
  },
  {
    name: "Otter.ai",
    emoji: "🦦",
    category: "Productivity",
    pricing: "Free",
    pricingType: "freemium",
    description: "AI meeting transcription and summary tool. Auto-generates action items from calls.",
    url: "https://otter.ai",
    tags: ["Meetings", "Transcription", "Notes"],
    accent: "#34d399",
  },
  {
    name: "Luma AI",
    emoji: "🎥",
    category: "Video",
    pricing: "Free",
    pricingType: "freemium",
    description: "Cinematic AI video with physically realistic motion. Dream Machine is best-in-class.",
    url: "https://lumalabs.ai",
    tags: ["Video", "3D", "Creative"],
    accent: "#e879f9",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={{
      background: "rgba(5,7,15,0.97)",
      borderBottom: "1px solid rgba(249,115,22,0.18)",
      backdropFilter: "blur(16px)",
      position: "sticky", top: 0, zIndex: 100,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 1.5rem", height: "64px" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 34, height: 34, borderRadius: "9px",
            background: "linear-gradient(135deg, #f97316, #dc2626)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem"
          }}>⚡</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#fff", letterSpacing: "-0.02em" }}>AI MASTER</span>
        </Link>
        <div className="mobile-nav-links" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link} href={NAV_PATHS[link] || "/"} style={{
              fontFamily: "'Syne', sans-serif", fontSize: "0.88rem", fontWeight: 600,
              color: "rgba(255,255,255,0.6)", textDecoration: "none",
              letterSpacing: "0.02em", borderBottom: "2px solid transparent", paddingBottom: "2px",
            }}>{link}</Link>
          ))}
        </div>
        <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)}
          style={{ display: "none", flexDirection: "column", gap: "5px", background: "transparent", border: "none", cursor: "pointer", padding: "6px" }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 2,
              background: menuOpen ? "#f97316" : "rgba(255,255,255,0.7)", borderRadius: 2,
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)") : "none",
              transition: "all 0.25s"
            }} />
          ))}
        </button>
      </div>
      {menuOpen && (
        <div style={{ borderTop: "1px solid rgba(249,115,22,0.15)", background: "rgba(5,7,15,0.99)", padding: "1rem 1.5rem 1.5rem" }}>
          {NAV_LINKS.map((link, idx) => (
            <Link key={link} href={NAV_PATHS[link] || "/"} onClick={() => setMenuOpen(false)}
              style={{
                display: "block", fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 600,
                color: idx === 0 ? "#f97316" : "rgba(255,255,255,0.6)",
                padding: "0.85rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
                textDecoration: "none", letterSpacing: "0.02em"
              }}>{link}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#030508", borderTop: "1px solid rgba(249,115,22,0.12)", padding: "3rem 2.5rem 2rem", marginTop: "5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 30, height: 30, borderRadius: "8px", background: "linear-gradient(135deg, #f97316, #dc2626)", display: "flex", alignItems: "center", justifyContent: "center" }}>⚡</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff" }}>AI MASTER</span>
        </div>
        <span style={{ color: "#1e293b", fontSize: "0.8rem", fontFamily: "'Outfit', sans-serif" }}>© 2025 AI MASTER. All rights reserved.</span>
        <span style={{ color: "#f97316", fontSize: "0.8rem", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Built with ⚡ & AI</span>
      </div>
    </footer>
  );
}

export default function AIToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [pricingFilter, setPricingFilter] = useState("All");

  const filtered = tools.filter(t => {
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    const matchPricing = pricingFilter === "All" ||
      (pricingFilter === "Free" && t.pricingType === "freemium") ||
      (pricingFilter === "Paid" && t.pricingType === "paid");
    return matchCat && matchSearch && matchPricing;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#05070f", color: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        .tool-card { transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s !important; }
        .tool-card:hover { transform: translateY(-6px) !important; box-shadow: 0 20px 60px rgba(249,115,22,0.1) !important; border-color: rgba(249,115,22,0.35) !important; }
        .cpill { transition: all 0.18s; cursor: pointer; border: none; outline: none; }
        .visit-btn:hover { opacity: 0.85; transform: scale(1.03); }
        .search-input:focus { outline: none; border-color: rgba(249,115,22,0.5) !important; box-shadow: 0 0 0 3px rgba(249,115,22,0.1); }
        @media (max-width: 768px) {
          .mobile-nav-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .tools-grid { grid-template-columns: 1fr !important; }
          .cat-scroll { overflow-x: auto !important; flex-wrap: nowrap !important; justify-content: flex-start !important; padding: 0 1rem 1rem !important; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          .cat-scroll::-webkit-scrollbar { display: none; }
          .filter-row { flex-direction: column !important; align-items: stretch !important; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", padding: "5rem 2rem 3.5rem", textAlign: "center" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(249,115,22,0.16) 0%, transparent 70%)"
        }} />
        <div style={{ position: "relative" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)",
            color: "#f97316", borderRadius: "20px", padding: "0.35rem 1rem",
            fontSize: "0.73rem", fontFamily: "'Syne', sans-serif", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem"
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f97316", display: "inline-block", boxShadow: "0 0 8px #f97316" }} />
            {tools.length}+ Curated AI Tools
          </div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            fontWeight: 800, lineHeight: 1.08,
            letterSpacing: "-0.04em", marginBottom: "1.1rem", color: "#fff"
          }}>
            Best Free AI Tools<br />
            <span style={{ background: "linear-gradient(90deg, #f97316, #ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              You Must Try in 2025
            </span>
          </h1>
          <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75, maxWidth: "480px", margin: "0 auto", fontFamily: "'Outfit', sans-serif" }}>
            Handpicked AI tools across writing, coding, image generation, video, voice & more — most are free to start.
          </p>
        </div>
      </section>

      {/* SEARCH + PRICING FILTER */}
      <div className="filter-row" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
        {/* Search */}
        <div style={{ flex: 1, position: "relative" }}>
          <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "1rem", color: "#475569" }}>🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%", padding: "0.75rem 1rem 0.75rem 2.7rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px", color: "#fff",
              fontFamily: "'Outfit', sans-serif", fontSize: "0.92rem",
              transition: "border-color 0.2s, box-shadow 0.2s"
            }}
          />
        </div>

        {/* Pricing Filter */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {["All", "Free", "Paid"].map(p => (
            <button key={p} className="cpill"
              onClick={() => setPricingFilter(p)}
              style={{
                padding: "0.6rem 1.1rem", borderRadius: "10px",
                background: pricingFilter === p ? (p === "Free" ? "#10b981" : p === "Paid" ? "#ef4444" : "#f97316") : "rgba(255,255,255,0.05)",
                color: pricingFilter === p ? "#fff" : "#475569",
                fontFamily: "'Syne', sans-serif", fontSize: "0.8rem", fontWeight: 700,
              }}>{p}</button>
          ))}
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="cat-scroll" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "0.6rem", padding: "0 1.5rem 2.5rem", flexWrap: "wrap" }}>
        {toolCategories.map(cat => (
          <button key={cat} className="cpill"
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "0.45rem 1.1rem", borderRadius: "20px",
              background: activeCategory === cat ? "#f97316" : "rgba(255,255,255,0.05)",
              color: activeCategory === cat ? "#fff" : "#475569",
              fontFamily: "'Syne', sans-serif", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.03em"
            }}>{cat}</button>
        ))}
      </div>

      {/* TOOLS GRID */}
      <main className="tools-grid" style={{
        maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem 3rem",
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "1.4rem"
      }}>
        {filtered.length === 0 ? (
          <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "4rem", color: "#334155", fontFamily: "'Outfit', sans-serif" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🤖</div>
            <p>No tools found. Try a different search or filter.</p>
          </div>
        ) : filtered.map((tool) => (
          <div key={tool.name} className="tool-card"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px", overflow: "hidden",
              display: "flex", flexDirection: "column"
            }}>
            {/* Card Header */}
            <div style={{
              background: `linear-gradient(135deg, ${tool.accent}18, rgba(5,7,15,0.8))`,
              padding: "1.5rem 1.5rem 1.2rem",
              borderBottom: "1px solid rgba(255,255,255,0.05)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "12px",
                    background: `${tool.accent}22`,
                    border: `1px solid ${tool.accent}44`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.6rem"
                  }}>{tool.emoji}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#fff", margin: 0 }}>{tool.name}</h3>
                    <span style={{
                      fontSize: "0.68rem", fontFamily: "'Syne', sans-serif", fontWeight: 700,
                      color: tool.accent, textTransform: "uppercase", letterSpacing: "0.08em"
                    }}>{tool.category}</span>
                  </div>
                </div>
                {/* Free / Paid Badge */}
                <span style={{
                  padding: "0.22rem 0.65rem", borderRadius: "8px",
                  background: tool.pricingType === "freemium" ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
                  color: tool.pricingType === "freemium" ? "#10b981" : "#ef4444",
                  border: `1px solid ${tool.pricingType === "freemium" ? "#10b98140" : "#ef444440"}`,
                  fontSize: "0.68rem", fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  letterSpacing: "0.05em"
                }}>{tool.pricingType === "freemium" ? "FREE" : "PAID"}</span>
              </div>
            </div>

            {/* Card Body */}
            <div style={{ padding: "1.2rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.65, margin: 0, fontFamily: "'Outfit', sans-serif" }}>
                {tool.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {tool.tags.map(tag => (
                  <span key={tag} style={{
                    padding: "0.18rem 0.6rem", borderRadius: "6px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#334155", fontSize: "0.7rem",
                    fontFamily: "'Outfit', sans-serif"
                  }}>#{tag}</span>
                ))}
              </div>

              {/* CTA Button */}
              <a href={tool.url} target="_blank" rel="noopener noreferrer"
                className="visit-btn"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  background: `linear-gradient(135deg, ${tool.accent}, ${tool.accent}bb)`,
                  color: "#fff", padding: "0.65rem 1rem",
                  borderRadius: "10px", textDecoration: "none",
                  fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.85rem",
                  transition: "opacity 0.2s, transform 0.2s",
                  marginTop: "auto",
                  boxShadow: `0 4px 20px ${tool.accent}30`
                }}>
                Try {tool.name} Free →
              </a>
            </div>
          </div>
        ))}
      </main>

      {/* Stats Bar */}
      <div style={{ background: "rgba(249,115,22,0.06)", borderTop: "1px solid rgba(249,115,22,0.12)", borderBottom: "1px solid rgba(249,115,22,0.12)", padding: "2rem 1.5rem", marginBottom: "0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "center", gap: "4rem", flexWrap: "wrap" }}>
          {[
            { num: `${tools.length}+`, label: "AI Tools" },
            { num: `${tools.filter(t => t.pricingType === "freemium").length}`, label: "Free to Use" },
            { num: `${toolCategories.length - 1}`, label: "Categories" },
            { num: "2025", label: "Updated" },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#f97316" }}>{stat.num}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "#334155", textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}