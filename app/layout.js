import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "AI MASTER - AI Blog",
  description: "Best AI tools, tutorials, and AI earning guides",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}