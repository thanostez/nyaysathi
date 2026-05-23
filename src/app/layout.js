import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Disclaimer from '@/components/Disclaimer';
import InstallPWA from '@/components/InstallPWA';
import BottomNav from '@/components/BottomNav';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const siteUrl = 'https://nyaymitra.help';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'NyayMitra - Know Your Legal Rights',
  description:
    'Your free legal rights assistant for India. Understand your rights, access legal templates, and find emergency helplines - all in plain language.',
  keywords: [
    'legal rights India',
    'know your rights',
    'Indian law',
    'legal aid',
    'consumer rights',
    'tenant rights',
    'women safety laws',
    'cyber crime',
    'NyayMitra',
  ],
  authors: [{ name: 'NyayMitra' }],
  openGraph: {
    title: 'NyayMitra - Know Your Legal Rights',
    description:
      'Your free legal rights assistant for India. Understand your rights in plain language.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'NyayMitra',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NyayMitra - Know Your Legal Rights',
    description:
      'Your free legal rights assistant for India. Understand your rights in plain language.',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'NyayMitra',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: '/icon-192.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#05051A',
};

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'NyayMitra',
        url: siteUrl,
        logo: `${siteUrl}/icon-512.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'contact@nyaymitra.help',
          contactType: 'customer support',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'NyayMitra',
        url: siteUrl,
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-bg-dark text-text-primary pb-20 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <BottomNav />
          <Footer />
          <Disclaimer />
          <InstallPWA />
        </ThemeProvider>
        <Analytics />
        <Script id="register-sw" strategy="lazyOnload">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').catch(function() {});
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}

