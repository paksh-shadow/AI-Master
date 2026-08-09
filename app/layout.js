import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata = {
  title: "AI MASTER - AI Blog",
  description: "Best AI tools, tutorials, and AI earning guides",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="n5mvpFVWwTDSVwOa1opgQ9f6yqtp4sCKYbhmUweGgpQ" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Y9XB5WXDL2" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y9XB5WXDL2');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}