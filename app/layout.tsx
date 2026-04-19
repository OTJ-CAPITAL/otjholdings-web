import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OTJ Holdings',
  description: 'OTJ Holdings — parent company of OTJ Capital, OTJ Fellowship, and OTJ App.',
  openGraph: { title: 'OTJ Holdings', url: 'https://otjholdings.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
