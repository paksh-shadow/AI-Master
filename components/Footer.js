import Link from "next/link";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-8 text-center text-sm">
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:underline">
            {l.label}
          </Link>
        ))}
      </nav>
      <p>© {new Date().getFullYear()} AI MASTER. All rights reserved.</p>
    </footer>
  );
}