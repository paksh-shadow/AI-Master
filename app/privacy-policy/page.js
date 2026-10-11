export const metadata = {
  title: "Privacy Policy | AI Blog",
  description: "Learn how AI Blog collects, uses and protects your information.",
};

const SITE_NAME = "AI Blog";
const CONTACT_EMAIL = "yourmail@example.com"; // apna email daalein
const LAST_UPDATED = "October 11, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p><em>Last updated: {LAST_UPDATED}</em></p>

      <p>
        At {SITE_NAME}, your privacy is important to us. This Privacy Policy explains what
        information we collect when you visit our website and how we use it.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Personal information:</strong> your name and email address, only if you contact us voluntarily.</li>
        <li><strong>Log data:</strong> IP address, browser type, device, pages visited and time spent, collected automatically.</li>
        <li><strong>Cookies:</strong> small files stored on your device to improve your experience and measure traffic.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To operate and improve our website and content.</li>
        <li>To respond to your messages and support requests.</li>
        <li>To analyze traffic and understand how readers use the site.</li>
        <li>To show relevant advertising, where applicable.</li>
      </ul>

      <h2>3. Cookies and Third-Party Services</h2>
      <p>
        We may use third-party services such as Google Analytics and Google AdSense. These services
        may use cookies to collect information about your visits to this and other websites. Google
        uses cookies to serve ads based on your prior visits. You can opt out of personalized
        advertising by visiting Google Ads Settings. You can also disable cookies in your browser settings.
      </p>

      <h2>4. Third-Party Links</h2>
      <p>
        Our site may contain links to other websites. We are not responsible for the privacy
        practices or content of those sites.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We take reasonable steps to protect your information, but no method of transmission over
        the internet is 100% secure.
      </p>

      <h2>6. Children&apos;s Privacy</h2>
      <p>
        Our website is not directed to children under 13, and we do not knowingly collect personal
        information from them.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data by contacting us.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page
        with a new &quot;Last updated&quot; date.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have questions about this policy, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </main>
  );
}