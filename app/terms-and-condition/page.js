export const metadata = {
  title: "Terms & Conditions | AI Blog",
  description: "Read the terms and conditions for using AI Blog.",
};

const SITE_NAME = "AI Blog";
const CONTACT_EMAIL = "yourmail@example.com"; // apna email daalein
const LAST_UPDATED = "October 11, 2026";

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose dark:prose-invert">
      <h1>Terms &amp; Conditions</h1>
      <p><em>Last updated: {LAST_UPDATED}</em></p>

      <p>
        By accessing or using {SITE_NAME}, you agree to be bound by these Terms &amp; Conditions.
        If you do not agree, please do not use the website.
      </p>

      <h2>1. Use of the Website</h2>
      <p>
        You may use this website for lawful, personal and non-commercial purposes. You agree not
        to misuse the site, attempt to gain unauthorized access, or interfere with its operation.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos and design, is the property of
        {" "}{SITE_NAME} unless stated otherwise. You may not copy, republish or distribute our
        content without prior written permission.
      </p>

      <h2>3. User Submissions</h2>
      <p>
        If you send us messages or comments, you grant us permission to use them to respond to you
        or improve the site. You are responsible for the content you submit.
      </p>

      <h2>4. Accuracy of Information</h2>
      <p>
        We try to keep information accurate and up to date, but we make no guarantees about
        completeness or reliability. Content may contain errors or become outdated.
      </p>

      <h2>5. Third-Party Links and Tools</h2>
      <p>
        The website may link to third-party websites or tools. We do not control and are not
        responsible for their content, policies or practices.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        {SITE_NAME} will not be liable for any loss or damage arising from your use of, or
        inability to use, the website or reliance on its content.
      </p>

      <h2>7. Changes to Terms</h2>
      <p>
        We may update these terms at any time. Continued use of the site after changes means you
        accept the revised terms.
      </p>

      <h2>8. Governing Law</h2>
      <p>These terms are governed by the laws of India.</p>

      <h2>9. Contact Us</h2>
      <p>
        Questions about these terms? Email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </main>
  );
}