'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-0 relative inline-block">
            Contact Me
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg rounded-full"></div>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center space-y-6"
            >
              <div className="space-y-0">
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-center">
                    <a 
                      href="mailto:hello@bhaveshc.com"
                      className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 inline-block hover:scale-110"
                    >
                      hello@bhaveshc.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <a 
                    href="https://www.linkedin.com/in/bhaveshchainani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer group"
                  >
                    <Image
                      src="/assets/linkedin_logo.png"
                      alt="LinkedIn"
                      width={32}
                      height={32}
                      className="w-8 h-8 group-hover:scale-[1.3] transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
