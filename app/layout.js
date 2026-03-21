import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "AI MASTER - AI Blog",
  description: "Best AI tools, tutorials, and AI earning guides",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="n5mvpFVWwTDSVwOa1opgQ9f6yqtp4sCKYbhmUweGgpQ" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}