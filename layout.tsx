import React from 'react';
import './globals.css';
import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/footer/Footer';
import { FloatingActions } from '../components/floating/FloatingActions';
import { constructMetadata, getOrganizationSchema, getLocalBusinessSchema } from '../lib/seo/metadata';

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const localBizSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/icon.svg" />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingActions />
        <Footer />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
