'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Bhavesh Chainani</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Data Scientist passionate about transforming complex data into actionable insights 
              and building innovative solutions that drive business growth.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              Copyright © {currentYear} Bhavesh Chainani. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer