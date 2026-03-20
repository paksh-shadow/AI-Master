// app/about/page.jsx

export const metadata = {
  title: "About Us — AI MASTER",
  description: "Learn about AI MASTER, our mission, our authors, and why we're passionate about Artificial Intelligence.",
};

import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #05070f; }

        .author-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 2rem;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .author-card:hover {
          border-color: rgba(249,115,22,0.35);
          transform: translateY(-4px);
          box-shadow: 0 16px 50px rgba(249,115,22,0.09);
        }
        .value-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 1.6rem;
          transition: border-color 0.2s;
        }
        .value-card:hover { border-color: rgba(249,115,22,0.3); }

        .nav-link-item { transition: color 0.2s; }
        .nav-link-item:hover { color: #f97316 !important; }

        @media (max-width: 768px) {
          .authors-grid { grid-template-columns: 1fr !important; }
          .values-grid  { grid-template-columns: 1fr !important; }
          .about-hero   { padding: 3rem 1.2rem 2rem !important; }
          .about-body   { padding: 0 1.2rem 4rem !important; }
          .desktop-nav  { display: none !important; }
          .stat-row     { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#05070f", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

        {/* ── NAVBAR ────────────────────────────────────────────── */}
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

          <div className="desktop-nav" style={{ display: "flex", gap: "2rem" }}>
            {[["Home", "/"], ["Blogs", "/blog"], ["About Us", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={label} href={href}
                className="nav-link-item"
                style={{
                  fontFamily: "'Syne', sans-serif", fontSize: "0.87rem", fontWeight: 600,
                  color: label === "About Us" ? "#f97316" : "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  borderBottom: label === "About Us" ? "2px solid #f97316" : "2px solid transparent",
                  paddingBottom: "2px",
                }}>{label}</Link>
            ))}
          </div>
        </nav>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="about-hero" style={{
          padding: "5rem 2rem 3.5rem", textAlign: "center",
          background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(249,115,22,0.14) 0%, transparent 70%)",
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
            Our Story
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.04em", marginBottom: "1.2rem",
          }}>
            We Are{" "}
            <span style={{ background: "linear-gradient(90deg,#f97316,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AI MASTER
            </span>
          </h1>

          <p style={{
            color: "#64748b", fontSize: "1.05rem", lineHeight: 1.8,
            maxWidth: "560px", margin: "0 auto",
          }}>
            We are a team of AI enthusiasts, developers, and writers on a mission to make
            Artificial Intelligence simple, practical, and accessible for everyone.
          </p>
        </section>

        {/* ── STATS ROW ─────────────────────────────────────────── */}
        <div className="stat-row" style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px", maxWidth: "900px", margin: "0 auto 4rem",
          background: "rgba(249,115,22,0.1)",
          border: "1px solid rgba(249,115,22,0.15)",
          borderRadius: "16px", overflow: "hidden",
        }}>
          {[
            { num: "11+",   label: "Articles Published" },
            { num: "2",     label: "Expert Authors"      },
            { num: "6",     label: "Topics Covered"      },
            { num: "2025",  label: "Founded"             },
          ].map(({ num, label }) => (
            <div key={label} style={{
              padding: "1.8rem 1rem", textAlign: "center",
              background: "rgba(5,7,15,0.95)",
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: "2rem",
                fontWeight: 800, color: "#f97316", marginBottom: "0.3rem"
              }}>{num}</div>
              <div style={{ color: "#475569", fontSize: "0.8rem", fontFamily: "'Outfit', sans-serif" }}>{label}</div>
            </div>
          ))}
        </div>

        <div className="about-body" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2rem 5rem" }}>

          {/* ── MISSION ───────────────────────────────────────────── */}
          <div style={{
            background: "linear-gradient(135deg, rgba(249,115,22,0.07), rgba(220,38,38,0.04))",
            border: "1px solid rgba(249,115,22,0.2)",
            borderRadius: "20px", padding: "2.5rem",
            marginBottom: "4rem",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(249,115,22,0.12)", color: "#f97316",
              padding: "0.25rem 0.8rem", borderRadius: "10px",
              fontSize: "0.7rem", fontFamily: "'Syne', sans-serif",
              fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em",
              marginBottom: "1rem"
            }}>🎯 Our Mission</div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.3,
              marginBottom: "1rem", letterSpacing: "-0.02em"
            }}>Making AI Knowledge Free & Accessible</h2>
            <p style={{ color: "#64748b", fontSize: "0.98rem", lineHeight: 1.85 }}>
              The AI revolution is happening right now — but most people feel left behind. Jargon-heavy
              research papers, expensive courses, and confusing documentation create a barrier that
              shouldn't exist. At AI MASTER, we break down complex AI concepts into clear, actionable
              articles that anyone can understand and apply — whether you're a student, a developer,
              or a professional looking to stay relevant.
            </p>
          </div>

          {/* ── VALUES ────────────────────────────────────────────── */}
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: "1.6rem",
            fontWeight: 800, color: "#fff", marginBottom: "1.5rem",
            letterSpacing: "-0.02em"
          }}>What We Stand For</h2>

          <div className="values-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem", marginBottom: "4rem"
          }}>
            {[
              { icon: "🔍", title: "Accuracy First",    desc: "Every article is carefully researched. We cite sources, acknowledge uncertainty, and never sensationalize AI." },
              { icon: "💡", title: "Practical Focus",   desc: "Theory is great, but we prioritize what you can actually use today — real tools, real workflows, real results." },
              { icon: "🌍", title: "Open Access",       desc: "Quality AI education shouldn't sit behind a paywall. All our content is free, forever." },
              { icon: "⚡", title: "Always Current",    desc: "AI moves fast. We update our content regularly to reflect the latest models, tools, and research." },
              { icon: "🤝", title: "Community Driven",  desc: "Our readers shape what we write. Your questions, feedback, and suggestions drive our content roadmap." },
              { icon: "🧠", title: "Depth Over Hype",   desc: "We skip the clickbait. Every headline is backed by substance — real analysis, not empty enthusiasm." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="value-card">
                <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{icon}</div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif", fontSize: "0.95rem",
                  fontWeight: 700, color: "#e2e8f0", marginBottom: "0.5rem"
                }}>{title}</h3>
                <p style={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* ── AUTHORS ───────────────────────────────────────────── */}
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: "1.6rem",
            fontWeight: 800, color: "#fff", marginBottom: "0.5rem",
            letterSpacing: "-0.02em"
          }}>Meet the Authors</h2>
          <p style={{ color: "#475569", fontSize: "0.9rem", marginBottom: "1.75rem" }}>
            The people behind AI MASTER.
          </p>

          <div className="authors-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem", marginBottom: "4rem"
          }}>
            {/* Author 1 */}
            <div className="author-card">
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "14px",
                  background: "linear-gradient(135deg, #f97316, #dc2626)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem", flexShrink: 0
                }}>👨‍💻</div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff" }}>Naresh Bhardwaj</div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 4, marginTop: "4px",
                    background: "rgba(249,115,22,0.12)", color: "#f97316",
                    padding: "0.18rem 0.6rem", borderRadius: "8px",
                    fontSize: "0.68rem", fontFamily: "'Syne', sans-serif", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.06em"
                  }}>Lead Author</div>
                </div>
              </div>
              <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                AI researcher and full-stack developer with a passion for making machine learning
                accessible. Naresh covers deep dives into LLMs, Next.js AI apps, and the future
                of work in the age of AI. He believes the best way to understand AI is to build with it.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {["LLMs", "Next.js", "AI Tools", "Deep Dive"].map(tag => (
                  <span key={tag} style={{
                    background: "rgba(249,115,22,0.1)", color: "#f97316",
                    padding: "0.2rem 0.65rem", borderRadius: "8px",
                    fontSize: "0.72rem", fontFamily: "'Syne', sans-serif", fontWeight: 700
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Author 2 */}
            <div className="author-card">
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "14px",
                  background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem", flexShrink: 0
                }}>🕶️</div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff" }}>Shadow</div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 4, marginTop: "4px",
                    background: "rgba(167,139,250,0.12)", color: "#a78bfa",
                    padding: "0.18rem 0.6rem", borderRadius: "8px",
                    fontSize: "0.68rem", fontFamily: "'Syne', sans-serif", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.06em"
                  }}>Contributing Author</div>
                </div>
              </div>
              <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                A curious mind who prefers to let the work speak. Shadow writes about AI tools,
                automation workflows, student productivity, and the AI startup ecosystem. Known
                for sharp opinions and no-fluff analysis that cuts straight to what matters.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {["AI Tools", "Productivity", "Education", "Industry"].map(tag => (
                  <span key={tag} style={{
                    background: "rgba(167,139,250,0.1)", color: "#a78bfa",
                    padding: "0.2rem 0.65rem", borderRadius: "8px",
                    fontSize: "0.72rem", fontFamily: "'Syne', sans-serif", fontWeight: 700
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── CTA ───────────────────────────────────────────────── */}
          <div style={{
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(249,115,22,0.08), rgba(220,38,38,0.05))",
            border: "1px solid rgba(249,115,22,0.2)",
            borderRadius: "20px", padding: "3rem 2rem",
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🚀</div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontSize: "1.6rem",
              fontWeight: 800, color: "#fff", marginBottom: "0.75rem",
              letterSpacing: "-0.02em"
            }}>Start Reading</h2>
            <p style={{ color: "#64748b", fontSize: "0.95rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Explore our latest articles on AI tools, tutorials, and industry insights.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/blog" style={{
                display: "inline-block",
                background: "#f97316", color: "#fff",
                padding: "0.75rem 1.75rem", borderRadius: "10px",
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem",
                textDecoration: "none", letterSpacing: "0.02em",
                transition: "opacity 0.2s"
              }}>Browse All Posts →</Link>
              <Link href="/contact" style={{
                display: "inline-block",
                background: "transparent",
                border: "1px solid rgba(249,115,22,0.35)",
                color: "#f97316",
                padding: "0.75rem 1.75rem", borderRadius: "10px",
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem",
                textDecoration: "none", letterSpacing: "0.02em",
              }}>Contact Us</Link>
            </div>
          </div>
        </div>

        {/* ── FOOTER ────────────────────────────────────────────── */}
        <footer style={{
          background: "#030508",
          borderTop: "1px solid rgba(249,115,22,0.12)",
          padding: "2rem", textAlign: "center",
        }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "0.75rem" }}>
            <div style={{
              width: 28, height: 28, borderRadius: "7px",
              background: "linear-gradient(135deg, #f97316, #dc2626)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem"
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