import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Bhavesh Chainani | Solutions Architect · Enterprise AI',
  description: 'Customer-facing AI professional with 5+ years leading technical discovery, solution architecture, and delivery for enterprise clients across consulting, healthcare, and financial services. Open to Solutions Architect, Solutions Engineer, Forward Deployed Engineer, and GTM Engineer roles.',
  keywords: 'Solutions Architect, Solutions Engineer, Forward Deployed Engineer, GTM Engineer, Pre-Sales Engineer, Enterprise AI, Technical Discovery, Azure, AWS, GenAI, RAG',
  authors: [{ name: 'Bhavesh Chainani' }],
  openGraph: {
    title: 'Bhavesh Chainani | Solutions Architect · Enterprise AI',
    description: 'Customer-facing AI professional with 5+ years leading technical discovery, solution architecture, and delivery for enterprise clients.',
    url: 'https://bhaveshc.com',
    siteName: 'Bhavesh Chainani Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/bhav-logo.png" type="image/png" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
        }} />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
