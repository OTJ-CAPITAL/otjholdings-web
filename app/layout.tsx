import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OTJ Holdings — The Parent Structure',
  description: 'The legal and structural foundation that owns, governs, and protects the entire OTJ ecosystem. Every entity. Every decision. Every dollar.',
  openGraph: {
    title: 'OTJ Holdings — The Parent Structure',
    description: 'The legal and structural foundation that owns, governs, and protects the entire OTJ ecosystem.',
    url: 'https://otjholdings.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#FAFAFA', color: '#080808' }}>
        {children}
      </body>
    </html>
  )
}
