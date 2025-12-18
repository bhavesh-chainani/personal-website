'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div>
            <p className="text-gray-400 font-semibold">
              Copyright © {currentYear} Bhavesh Chainani. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer