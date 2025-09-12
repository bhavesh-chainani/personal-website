import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Bhavesh Chainani - Data Scientist & Tech Consultant',
  description: 'Data Scientist with 4+ years of professional experience in data science and analytics, adept at leveraging advanced analytical techniques and state-of-the-art technologies.',
  keywords: 'Data Scientist, Tech Consultant, Python, Machine Learning, AWS, Data Analytics',
  authors: [{ name: 'Bhavesh Chainani' }],
  openGraph: {
    title: 'Bhavesh Chainani - Data Scientist & Tech Consultant',
    description: 'Data Scientist with 4+ years of professional experience in data science and analytics.',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/bhav-logo.png" type="image/png" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}