'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-padding bg-white">
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
          
          <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 mb-12 relative inline-block">
            About Bhavesh Chainani
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg rounded-full"></div>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-base text-gray-500 text-justify lg:text-center description-text" style={{ fontWeight: 450 }}>
            Data Scientist with 5+ years of experience driving business performance and operational efficiency through advanced analytics and modern technologies. 
            <br /><br />I lead end-to-end data initiatives and turn complex data into actionable insights that drive measurable results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About