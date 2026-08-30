'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Blocks, Rocket, Users } from 'lucide-react'

const lifecycle = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'Uncover business pain points and translate them into high-impact, technically feasible use cases.',
  },
  {
    icon: Blocks,
    title: 'Architecture',
    description: 'Design scalable, secure solutions across cloud and AI platforms that fit the client’s environment.',
  },
  {
    icon: Rocket,
    title: 'Delivery',
    description: 'Stay hands-on through implementation, from prototype to production-grade deployment.',
  },
  {
    icon: Users,
    title: 'Adoption',
    description: 'Run workshops and enablement so stakeholders trust, use, and champion the solution.',
  },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-dot-grid opacity-40"></div>
      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">
            Get To Know More
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-12 relative inline-block">
            About Bhavesh
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg rounded-full"></div>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <p className="text-base text-gray-500 dark:text-gray-400 text-justify lg:text-center description-text" style={{ fontWeight: 450 }}>
              Customer-facing AI professional with five years of experience delivering enterprise AI across
              consulting, healthcare, and financial services.
              <br /><br />
              I combine hands-on engineering expertise with client leadership &mdash; leading technical discovery,
              designing the architecture, and staying accountable through implementation and adoption &mdash; to turn
              complex business needs into scalable solutions and measurable outcomes.
            </p>
          </motion.div>
        </motion.div>

        {/* Engagement Lifecycle */}
        <div className="relative">
          <div className="hidden lg:block absolute top-11 left-[12.5%] right-[12.5%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeInOut' }}
              className="h-full w-full gradient-bg origin-left"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecycle.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.35 + index * 0.12 }}
                  className="relative glass-card glow-hover rounded-2xl p-6 shadow-lg dark:shadow-gray-950/50"
                >
                  <div className="relative w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4 shadow-lg shadow-primary-500/20">
                    <Icon className="w-6 h-6 text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[11px] font-bold text-gray-500 dark:text-gray-400">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed description-text" style={{ fontWeight: 450 }}>
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
