'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="profile" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex-shrink-0"
          >
            <div className="w-72 h-80 lg:w-80 lg:h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 blur-2xl opacity-20 animate-pulse" style={{borderRadius: '50%'}}></div>
              <div className="relative z-10 w-full h-full bg-white shadow-2xl overflow-hidden flex items-center justify-center" style={{borderRadius: '50%'}}>
                <Image
                  src="/assets/profile.png"
                  alt="Bhavesh Chainani Profile Picture"
                  width={320}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-2xl flex flex-col items-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg font-medium text-gray-600 mb-6"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Bhavesh Chainani
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl lg:text-2xl font-medium mb-10 leading-relaxed"
            >
              <span className="gradient-text">Data Scientist</span>
              <span className="text-gray-600"> | </span>
              <span className="gradient-text">Aspiring Tech Consultant</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center"
            >
              <button
                onClick={handleContactClick}
                className="gradient-bg text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Info
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero