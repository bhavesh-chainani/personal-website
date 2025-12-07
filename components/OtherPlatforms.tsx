'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const OtherPlatforms = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const platforms = [
    {
      description: "All things code",
      image: "/assets/github.png",
      url: "https://github.com/bhavesh-chainani",
      color: "from-gray-700 to-gray-900"
    }
  ]

  return (
    <section id="other-platforms" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg font-medium text-gray-600 mb-4">
            Explore My
          </p>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 relative inline-block">
            Other Platforms
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg rounded-full"></div>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <div className="max-w-md">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="group"
              >
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl shadow-lg p-10 text-center card-hover border border-gray-100 relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Platform Image */}
                  <div className="relative z-10 mb-6">
                    <Image
                      src={platform.image}
                      alt="GitHub Icon"
                      width={192}
                      height={192}
                      className="mx-auto w-40 h-40 lg:w-48 lg:h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Platform Info */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    </h3>
                    
                    <p className="text-gray-500 mb-6 text-lg description-text" style={{ fontWeight: 450 }}>
                      {platform.description}
                    </p>

                    {/* External Link Icon
                    <div className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300 text-lg">
                      <span className="mr-2">Visit Platform</span>
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div> */}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherPlatforms