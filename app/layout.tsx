import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://drømmelandet.dk'),
  title: {
    default: 'drømmelandet - Professional Services',
    template: '%s | drømmelandet'
  },
  description: 'Vi forvandler drømme til virkelighed gennem ekspertise, innovation og dansk kvalitet. Din betroede partner for enestående løsninger.',
  keywords: 'strategisk rådgivning, business transformation, innovation, Danmarks foretrukne transformationspartner, drømmelandet',
  authors: [{ name: 'drømmelandet' }],
  openGraph: {
    title: 'drømmelandet - Professional Services',
    description: 'Vi forvandler drømme til virkelighed gennem ekspertise, innovation og dansk kvalitet.',
    type: 'website',
    locale: 'da_DK',
    siteName: 'drømmelandet',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'drømmelandet - Professional Services',
    description: 'Vi forvandler drømme til virkelighed gennem ekspertise, innovation og dansk kvalitet.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className="scroll-smooth">
      <body>
        <Navigation />
        
        <main className="pt-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}