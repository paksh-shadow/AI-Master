import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blogs" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const FOOTER_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function LegalLayout({ title, updated, children }) {
  return (
    <div className="legal-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        html, body { background: #05070f !important; margin: 0; padding: 0; overflow-x: hidden; }
        .legal-root { min-height: 100vh; background: #05070f; color: #fff; font-family: 'Outfit', sans-serif; }
        .legal-nav { position: sticky; top: 0; z-index: 100; background: rgba(5,7,15,0.97); border-bottom: 1px solid rgba(249,115,22,0.18); backdrop-filter: blur(16px); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem 1.5rem; padding: 0.6rem 1.5rem; min-height: 64px; }
        .legal-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .legal-logo-icon { width: 34px; height: 34px; border-radius: 9px; background: linear-gradient(135deg, #f97316, #dc2626); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; }
        .legal-logo-text { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.2rem; color: #fff; letter-spacing: -0.02em; }
        .legal-nav-links { display: flex; flex-wrap: wrap; gap: 0.5rem 1.75rem; }
        .legal-nav-links a { font-family: 'Syne', sans-serif; font-size: 0.88rem; font-weight: 600; color: rgba(255,255,255,0.6); text-decoration: none; letter-spacing: 0.02em; }
        .legal-nav-links a:hover { color: #f97316; }
        .legal-main { max-width: 780px; margin: 0 auto; padding: 4rem 1.5rem 2rem; }
        .legal-main h1 { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; color: #fff; line-height: 1.2; letter-spacing: -0.03em; margin: 0 0 0.75rem; }
        .legal-updated { color: #475569; font-size: 0.85rem; margin: 0 0 2.5rem; padding-bottom: 1.75rem; border-bottom: 1px solid rgba(255,255,255,0.07); }
        .legal-main h2 { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; color: #f97316; margin: 2.25rem 0 0.6rem; }
        .legal-main p, .legal-main li { color: #94a3b8; line-height: 1.9; font-size: 1rem; }
        .legal-main p { margin: 0 0 1rem; }
        .legal-main ul { padding-left: 1.25rem; margin: 0 0 1rem; }
        .legal-main strong { color: #e2e8f0; }
        .legal-main a { color: #f97316; text-decoration: none; }
        .legal-main a:hover { text-decoration: underline; }
        .legal-footer { background: #030508; border-top: 1px solid rgba(249,115,22,0.12); padding: 2.5rem 1.5rem; margin-top: 4rem; text-align: center; }
        .legal-footer-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.6rem 1.75rem; margin-bottom: 1.25rem; }
        .legal-footer-links a { color: #64748b; font-size: 0.82rem; text-decoration: none; }
        .legal-footer-links a:hover { color: #f97316; }
        .legal-copy { color: #475569; font-size: 0.8rem; margin: 0; }
      `}</style>

      <nav className="legal-nav">
        <Link href="/" className="legal-logo">
          <div className="legal-logo-icon">⚡</div>
          <span className="legal-logo-text">AI MASTER</span>
        </Link>
        <div className="legal-nav-links">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>
      </nav>

      <main className="legal-main">
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: {updated}</p>
        {children}
      </main>

      <footer className="legal-footer">
        <div className="legal-footer-links">
          {FOOTER_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>
        <p className="legal-copy">© {new Date().getFullYear()} AI MASTER. All rights reserved.</p>
      </footer>
    </div>
  );
}