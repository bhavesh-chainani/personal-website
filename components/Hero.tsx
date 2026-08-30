'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight, ArrowDown, Sparkles, Cloud, Presentation, Users2 } from 'lucide-react'

const roles = ['Solutions Architect', 'Solutions Engineer', 'Forward Deployed Engineer', 'GTM Engineer']

const focusAreas = [
  { icon: Sparkles, label: 'GenAI & LLM Systems' },
  { icon: Cloud, label: 'Cloud Solution Architecture' },
  { icon: Presentation, label: 'Pre-Sales Engineering' },
  { icon: Users2, label: 'Cross-Functional Delivery' },
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2400)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="profile" className="relative min-h-screen flex items-center justify-center section-padding pt-32 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none bg-dot-grid opacity-60"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] bg-primary-300/30 dark:bg-primary-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] bg-secondary-300/30 dark:bg-secondary-500/20 rounded-full blur-3xl animate-blob-delay"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary-200/20 dark:bg-secondary-400/10 rounded-full blur-3xl animate-blob-delay"></div>
      </div>

      <div className="container-max relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 blur-2xl opacity-40 dark:opacity-30 animate-float"></div>
            <div className="relative rounded-full ring-glow animate-float">
              <Image
                src="/assets/profile.png"
                alt="Bhavesh Chainani Profile Picture"
                width={475}
                height={475}
                className="h-[260px] w-auto object-contain rounded-full"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl flex flex-col items-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm sm:text-base font-bold tracking-wide uppercase text-gray-500 dark:text-gray-400 mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-tight tracking-tight"
            >
              Bhavesh Chainani
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="h-10 sm:h-12 flex items-center justify-center mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl sm:text-3xl font-bold gradient-text"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-10 description-text max-w-2xl"
            >
              I bridge enterprise business problems and production AI systems &mdash; running technical
              discovery, architecting the solution, and staying hands-on through delivery and client adoption.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="group inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap items-center justify-center gap-3 w-full max-w-2xl"
            >
              {focusAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary-500 dark:text-secondary-400" />
                    {area.label}
                  </motion.span>
                )
              })}
            </motion.div>

            <motion.button
              onClick={() => scrollTo('#about')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="hidden sm:flex flex-col items-center gap-1 mt-12 text-gray-400 dark:text-gray-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Scroll to About"
            >
              <span className="text-xs font-semibold uppercase tracking-wide">Scroll</span>
              <ArrowDown className="w-4 h-4 animate-bounce-gentle" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
