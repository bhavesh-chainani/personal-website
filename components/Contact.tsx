'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-primary-300/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] bg-secondary-300/20 dark:bg-secondary-500/10 rounded-full blur-3xl animate-blob-delay"></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-0 relative inline-block">
            Let&apos;s Talk
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg rounded-full"></div>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-10 sm:p-14 max-w-2xl w-full text-center shadow-xl dark:shadow-gray-950/50"
          >
            <p className="text-gray-500 dark:text-gray-400 leading-7 description-text mb-10" style={{ fontWeight: 450 }}>
              Open to Solutions Architect, Solutions Engineer, Forward Deployed Engineer, and GTM Engineer roles &mdash; if you need someone
              who can run technical discovery, design the architecture, and still ship the demo, let&apos;s talk.
            </p>

            <div className="mb-10">
              <a
                href="mailto:hello@bhaveshc.com"
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 inline-block hover:scale-105"
              >
                hello@bhaveshc.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/bhaveshchainani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer group"
                aria-label="LinkedIn"
              >
                <Image
                  src="/assets/linkedin_logo.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="w-8 h-8 group-hover:scale-[1.3] transition-transform duration-300"
                />
              </a>

              <a
                href="https://github.com/bhavesh-chainani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer group"
                aria-label="GitHub"
              >
                <Image
                  src="/assets/github.png"
                  alt="GitHub"
                  width={32}
                  height={32}
                  className="w-8 h-8 group-hover:scale-[1.3] transition-transform duration-300 dark:invert"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
