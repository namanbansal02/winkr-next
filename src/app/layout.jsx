// app/layout.jsx

import '../styles/globals.css'
import { Poppins, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// 1) Custom local font
const intro = localFont({
  src: '../fonts/Intro.otf',
  variable: '--font-intro',
  display: 'swap',
})

// 2) Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})
export const viewport = {
  themeColor: "#000000",
};
// Default metadata
export const metadata = {
  metadataBase: new URL('https://winkr.live'),
  title: 'Winkr - Conversations Made Moments',
  description:
    'Connect and chat with new people on Winkr. Whether you’re up for a deep discussion or a casual conversation—your top free interests‑based alternative to Omegle and OmeTV.',
  keywords: [
    'Winkr', 'video chat', 'random video chat', 'text chat', 'Omegle', 'OmeTV',
    'anonymous chat', 'free online chat', 'live chat', 'instant chat', 'meet strangers'
  ],
  applicationName: 'Winkr - Conversations Made Moments',
  authors: [{ name: 'winkr.live', url: 'https://winkr.live' }],
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Winkr - Conversations Made Moments',
    description:
      'Connect and chat with new people on Winkr. Whether you’re up for a deep discussion or a casual conversation—your top free interests‑based alternative to Omegle and OmeTV.',
    url: 'https://winkr.live/',
    siteName: 'Winkr',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://winkr.live/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Winkr – Conversations Made Moments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winkr - Conversations Made Moments',
    description:
      'Connect and chat with new people on Winkr. Whether you’re up for a deep discussion or a casual conversation—your top free interests‑based alternative to Omegle and OmeTV.',
    site: '@winkr_live',
    creator: '@winkr_live',
    images: ['https://winkr.live/og-banner.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${intro.variable} ${poppins.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context":"https://schema.org",
  "@type":"WebSite",
  "url":"https://winkr.live/",
  "name":"Winkr",
  "description":"Connect and chat with new people on Winkr. Whether you’re up for a deep discussion or a casual conversation—your top free interests‑based alternative to Omegle and OmeTV.",
  "publisher":{
    "@type":"Organization",
    "name":"Winkr Inc.",
    "logo":{
      "@type":"ImageObject",
      "url":"https://winkr.live/og-banner.png"
    }
  },
  "inLanguage":"en-US",
  "sameAs":[
    "https://www.facebook.com/winkr",
    "https://twitter.com/winkr_live",
    "https://www.instagram.com/winkr.live",
    "https://www.linkedin.com/company/winkr",
    "https://www.youtube.com/@winkr-live"
  ]
}`
          }}
        />

        {/* External Preconnects & Scripts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://api.winkr.live" crossOrigin="anonymous" />

        <script async src="https://accounts.google.com/gsi/client" defer />
        <script defer src="https://code.jquery.com/jquery-3.6.0.min.js" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5819996476217030"
          crossOrigin="anonymous"
          defer
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VDR19DCMR5" defer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', 'G-VDR19DCMR5');`,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}