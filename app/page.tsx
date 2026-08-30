'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Proficiencies from '@/components/Proficiencies'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  useEffect(() => {
    // Initialize EmailJS
    if (typeof window !== 'undefined') {
      import('@emailjs/browser').then((emailjs) => {
        emailjs.default.init("W8KK0-Rh9tWIw9Fik")
      })
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Proficiencies />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}