'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white py-6">
      <div className="absolute top-0 left-0 right-0 h-px gradient-bg"></div>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 font-semibold text-sm">
            Copyright &copy; {currentYear} Bhavesh Chainani. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
