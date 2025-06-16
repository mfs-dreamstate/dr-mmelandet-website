import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dr-mmelandet.vercel.app'),
  title: 'drømmelandet',
  description: 'Welcome to our website',
  keywords: 'Other, drømmelandet',
  authors: [{ name: 'drømmelandet' }],
  openGraph: {
    title: 'drømmelandet',
    description: 'Welcome to our website',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        <div className="background-orbs" aria-hidden="true">
          <div className="orb-1" />
          <div className="orb-2" />
        </div>
        
        {/* SVG Filters for advanced effects */}
        <svg className="liquid-filter" aria-hidden="true">
          <defs>
            <filter id="liquid-distortion">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="turbulence" />
              <feColorMatrix in="turbulence" type="saturate" values="2" />
              <feComposite in="turbulence" in2="SourceGraphic" operator="over" />
              <feGaussianBlur stdDeviation="0.5" />
            </filter>
            <filter id="glow-filter">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        
        {children}
      </body>
    </html>
  )
}