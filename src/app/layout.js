import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Disclaimer from '@/components/Disclaimer';
import InstallPWA from '@/components/InstallPWA';
import BottomNav from '@/components/BottomNav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: 'NyaySathi — Know Your Legal Rights',
  description:
    'Your free legal rights assistant for India. Understand your rights, access legal templates, and find emergency helplines — all in plain language.',
  keywords: [
    'legal rights India',
    'know your rights',
    'Indian law',
    'legal aid',
    'consumer rights',
    'tenant rights',
    'women safety laws',
    'cyber crime',
    'NyaySathi',
  ],
  authors: [{ name: 'NyaySathi' }],
  openGraph: {
    title: 'NyaySathi — Know Your Legal Rights',
    description:
      'Your free legal rights assistant for India. Understand your rights in plain language.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'NyaySathi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NyaySathi — Know Your Legal Rights',
    description:
      'Your free legal rights assistant for India. Understand your rights in plain language.',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'NyaySathi',
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
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-bg-dark text-text-primary pb-20 md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <BottomNav />
        <Footer />
        <Disclaimer />
        <InstallPWA />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function() {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
