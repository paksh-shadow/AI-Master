import LegalLayout from "../../components/LegalLayout";

export const metadata = {
  title: "Disclaimer | AI MASTER",
  description: "Disclaimer for content published on AI MASTER.",
};

const SITE_NAME = "AI MASTER";
const CONTACT_EMAIL = "yourmail@example.com"; // apna email daalein

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" updated="October 12, 2026">
      <h2>General Information</h2>
      <p>
        The information on {SITE_NAME} is provided for general informational and educational
        purposes only. We make no warranties about the completeness, accuracy or reliability of
        any content.
      </p>

      <h2>Not Professional Advice</h2>
      <p>
        Nothing on this website is professional, legal, financial or technical advice. Please
        consult a qualified professional before making decisions based on our content.
      </p>

      <h2>AI Tools and Technology</h2>
      <p>
        Our articles discuss AI tools and technologies that change quickly. Features, pricing and
        availability may differ from what is described here. Always verify details on the official
        website of the tool.
      </p>

      <h2>External Links</h2>
      <p>
        We may link to external websites. We do not endorse or take responsibility for their
        content or practices.
      </p>

      <h2>Affiliate &amp; Advertising Disclosure</h2>
      <p>
        Some links on this site may be affiliate links, and we may earn a small commission at no
        extra cost to you. We may also display ads (such as Google AdSense). This does not affect
        our editorial opinions.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Use of this website is at your own risk. {SITE_NAME} is not liable for any loss or damage
        resulting from the use of the information provided.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}