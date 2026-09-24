"use client";
// app/contact/page.jsx

import { useState, useEffect } from "react";
import Link from "next/link";

const FORM_URL = "https://formspree.io/f/mppwrgjn";

const labelStyle = {
  display: "block",
  fontFamily: "'Syne', sans-serif",
  fontSize: "0.8rem",
  fontWeight: 700,
  color: "#94a3b8",
  marginBottom: "0.5rem",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
};

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    document.title = "Contact Us — AI MASTER";
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #05070f; }

        .contact-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 0.85rem 1.1rem;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .contact-input::placeholder { color: #334155; }
        .contact-input:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249,115,22,0.12);
        }
        .submit-btn {
          width: 100%;
          background: #f97316;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 0.9rem 1.5rem;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: background 0.2s, transform 0.15s;
        }
        .submit-btn:hover { background: #ea6c0a; transform: translateY(-1px); }
        .submit-btn:active { transform: translateY(0); }

        .info-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: border-color 0.2s;
        }
        .info-card:hover { border-color: rgba(249,115,22,0.3); }

        .social-btn {
          display: flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 0.85rem 1.2rem;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .social-btn:hover {
          border-color: rgba(249,115,22,0.35);
          background: rgba(249,115,22,0.06);
          transform: translateY(-2px);
        }

        .nav-link-about { transition: color 0.2s; }
        .nav-link-about:hover { color: #f97316 !important; }

        @media (max-width: 768px) {
          .contact-grid  { grid-template-columns: 1fr !important; }
          .contact-hero  { padding: 3rem 1.2rem 2rem !important; }
          .contact-body  { padding: 0 1.2rem 4rem !important; }
          .desktop-nav   { display: none !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#05070f", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>

        {/* ── NAVBAR ──────────────────────────────────────────── */}
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
                className="nav-link-about"
                style={{
                  fontFamily: "'Syne', sans-serif", fontSize: "0.87rem", fontWeight: 600,
                  color: label === "Contact" ? "#f97316" : "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  borderBottom: label === "Contact" ? "2px solid #f97316" : "2px solid transparent",
                  paddingBottom: "2px",
                }}>{label}</Link>
            ))}
          </div>
        </nav>

        {/* ── HERO ────────────────────────────────────────────── */}
        <section className="contact-hero" style={{
          padding: "5rem 2rem 3rem", textAlign: "center",
          background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(249,115,22,0.13) 0%, transparent 70%)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)",
            color: "#f97316", borderRadius: "20px",
            padding: "0.3rem 1rem", fontSize: "0.72rem",
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem"
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f97316", display: "inline-block", boxShadow: "0 0 8px #f97316" }} />
            Get In Touch
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.04em", marginBottom: "1rem",
          }}>
            We'd Love to{" "}
            <span style={{ background: "linear-gradient(90deg,#f97316,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Hear From You
            </span>
          </h1>

          <p style={{
            color: "#64748b", fontSize: "1rem", lineHeight: 1.8,
            maxWidth: "500px", margin: "0 auto",
          }}>
            Have a question, suggestion, or want to collaborate? Drop us a message and
            we'll get back to you as soon as possible.
          </p>
        </section>

        {/* ── MAIN CONTENT ────────────────────────────────────── */}
        <div className="contact-body" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2rem 5rem" }}>

          <div className="contact-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "2rem", alignItems: "start",
          }}>

            {/* ── LEFT: CONTACT FORM ────────────────────────── */}
            <div style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px", padding: "2rem",
            }}>
              <h2 style={{
                fontFamily: "'Syne', sans-serif", fontSize: "1.3rem",
                fontWeight: 800, color: "#fff", marginBottom: "0.4rem",
                letterSpacing: "-0.02em"
              }}>Send a Message</h2>
              <p style={{ color: "#475569", fontSize: "0.85rem", marginBottom: "1.75rem" }}>
                Fill in the form and we'll respond within 24 hours.
              </p>

              {status === "sent" ? (
                <div style={{ padding: "0.5rem 0" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#f97316", marginBottom: "0.5rem" }}>
                    Message sent
                  </div>
                  <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    Thanks for writing to us. We will reply to your email within 24 hours.
                  </p>
                  <button type="button" className="submit-btn" onClick={() => setStatus("idle")}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

                  {/* Name */}
                  <div>
                    <label style={labelStyle} htmlFor="cf-name">Your Name</label>
                    <input id="cf-name" type="text" name="name" placeholder="Naresh Bhardwaj" required className="contact-input" />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle} htmlFor="cf-email">Email Address</label>
                    <input id="cf-email" type="email" name="email" placeholder="you@example.com" required className="contact-input" />
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={labelStyle} htmlFor="cf-subject">Subject</label>
                    <select id="cf-subject" name="subject" className="contact-input" style={{ cursor: "pointer" }}>
                      <option value="" style={{ background: "#05070f" }}>Select a topic...</option>
                      <option value="general"   style={{ background: "#05070f" }}>General Question</option>
                      <option value="collab"    style={{ background: "#05070f" }}>Collaboration / Guest Post</option>
                      <option value="feedback"  style={{ background: "#05070f" }}>Feedback</option>
                      <option value="advertise" style={{ background: "#05070f" }}>Advertise with Us</option>
                      <option value="bug"       style={{ background: "#05070f" }}>Report an Issue</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle} htmlFor="cf-message">Message</label>
                    <textarea
                      id="cf-message"
                      name="message"
                      placeholder="Write your message here..."
                      required
                      rows={5}
                      className="contact-input"
                      style={{ resize: "vertical", minHeight: "130px" }}
                    />
                  </div>

                  {/* Spam trap: real visitors never see this */}
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off"
                    style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />

                  <button type="submit" className="submit-btn" disabled={status === "sending"}
                    style={status === "sending" ? { opacity: 0.6, cursor: "wait" } : undefined}>
                    {status === "sending" ? "Sending..." : "Send Message ⚡"}
                  </button>

                  {status === "error" && (
                    <p role="alert" style={{ color: "#ef4444", fontSize: "0.85rem", textAlign: "center" }}>
                      Message not sent. Check your connection and try again, or email contact@aimaster.dev.
                    </p>
                  )}

                  <p style={{ color: "#334155", fontSize: "0.75rem", textAlign: "center", fontFamily: "'Outfit', sans-serif" }}>
                    We never share your email. No spam, ever.
                  </p>
                </form>
              )}
            </div>

            {/* ── RIGHT: INFO + SOCIALS ──────────────────────── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              {/* Contact Info Cards */}
              {[
                {
                  icon: "📧",
                  title: "Email Us",
                  value: "shadowpaksh@gmail.com",
                  sub: "We reply within 24 hours",
                  accent: "#f97316",
                  bg: "rgba(249,115,22,0.1)"
                },
                {
                  icon: "✍️",
                  title: "Write for Us",
                  value: "shadowpaksh@gmail.com",
                  sub: "Submit a guest post or article idea",
                  accent: "#22d3ee",
                  bg: "rgba(34,211,238,0.1)"
                },
                {
                  icon: "🤝",
                  title: "Collaborations",
                  value: "shadowpaksh@gmail.com",
                  sub: "Brand deals, sponsorships & partnerships",
                  accent: "#a78bfa",
                  bg: "rgba(167,139,250,0.1)"
                },
              ].map(({ icon, title, value, sub, accent, bg }) => (
                <div key={title} className="info-card">
                  <div style={{
                    width: 44, height: 44, borderRadius: "10px",
                    background: bg, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "1.3rem", flexShrink: 0
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#fff", marginBottom: "2px" }}>{title}</div>
                    <div style={{ color: accent, fontSize: "0.85rem", fontWeight: 600, marginBottom: "2px" }}>{value}</div>
                    <div style={{ color: "#334155", fontSize: "0.78rem" }}>{sub}</div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px", padding: "1.5rem"
              }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.88rem", fontWeight: 700, color: "#fff", marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Follow Us
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                  {[
                    { icon: "𝕏", label: "Twitter / X",  handle: "@aimaster",   href: "#", color: "#fff"     },
                    { icon: "in", label: "LinkedIn",     handle: "AI MASTER",   href: "#", color: "#0ea5e9" },
                    { icon: "▶", label: "YouTube",      handle: "AI MASTER",   href: "#", color: "#ef4444" },
                    { icon: "💬", label: "Telegram",    handle: "t.me/aimaster", href: "#", color: "#22d3ee" },
                  ].map(({ icon, label, handle, href, color }) => (
                    <a key={label} href={href} className="social-btn">
                      <div style={{
                        width: 34, height: 34, borderRadius: "8px",
                        background: "rgba(255,255,255,0.05)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.9rem", color, flexShrink: 0
                      }}>{icon}</div>
                      <div>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#e2e8f0" }}>{label}</div>
                        <div style={{ fontSize: "0.73rem", color: "#334155" }}>{handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div style={{
                background: "linear-gradient(135deg, rgba(249,115,22,0.08), rgba(220,38,38,0.05))",
                border: "1px solid rgba(249,115,22,0.2)",
                borderRadius: "14px", padding: "1.25rem 1.5rem",
                display: "flex", alignItems: "center", gap: "12px"
              }}>
                <div style={{ fontSize: "1.8rem" }}>⚡</div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff", marginBottom: "2px" }}>Fast Response</div>
                  <div style={{ color: "#64748b", fontSize: "0.8rem" }}>Average reply time is under 24 hours on weekdays.</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── FOOTER ──────────────────────────────────────────── */}
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
            ©  AI MASTER. All rights reserved. ·
          </p>
        </footer>

      </div>
    </>
  );
}