'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg font-medium text-gray-600 mb-4">
            Get To Know More
          </p>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 relative inline-block">
            About Bhavesh Chainani
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg rounded-full"></div>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg leading-relaxed text-gray-700 text-justify lg:text-center">
              Data Scientist with 4+ years of professional experience in data science and analytics, 
              adept at leveraging advanced analytical techniques and state-of-the-art technologies to 
              drive business growth and enhance operational efficiency. Skilled in translating complex 
              data into actionable insights for multiple stakeholders and leading end-to-end projects 
              that deliver impactful solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About