'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, GraduationCap } from 'lucide-react'

interface Role {
  title: string
  period: string
}

interface Company {
  name: string
  location: string
  scope: string
  roles: Role[]
}

const companies: Company[] = [
  {
    name: 'PwC (AI Hub)',
    location: 'Singapore, SG',
    scope: 'Leading AI solution architecture, discovery, and delivery for enterprise clients across Azure and AWS.',
    roles: [
      { title: 'Data Scientist, Manager', period: 'Jul 2026 – Present' },
      { title: 'Data Scientist, Assistant Manager', period: 'Apr 2025 – Jun 2026' },
    ],
  },
  {
    name: 'Johnson & Johnson',
    location: 'Singapore, SG',
    scope: 'Directed cross-functional delivery of an enterprise AI recommendation platform across global product lines.',
    roles: [{ title: 'Senior Data Scientist', period: 'Apr 2023 – Mar 2025' }],
  },
  {
    name: 'BNP Paribas',
    location: 'Singapore, SG',
    scope: 'Built behavioral analytics and computer-vision systems for fraud detection and safety monitoring.',
    roles: [{ title: 'Data Scientist', period: 'Oct 2021 – Mar 2023' }],
  },
]

const education = [
  {
    school: 'Georgia Institute of Technology',
    location: 'Atlanta, GA',
    degree: 'M.S. Computer Science — AI Specialization',
  },
  {
    school: 'National University of Singapore',
    location: 'Singapore, SG',
    degree: 'B.Sc. (Honors) — Data Science and Analytics · Minor in Economics',
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">
            Where I&apos;ve Delivered
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-12 relative inline-block">
            Experience
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg rounded-full"></div>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline spine */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary-300 via-secondary-300 to-primary-300 dark:from-primary-700 dark:via-secondary-700 dark:to-primary-700"></div>
          <div className="lg:hidden absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-800"></div>

          <div className="space-y-10 lg:space-y-16">
            {companies.map((company, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.15 * index }}
                  className={`relative pl-10 lg:pl-0 lg:flex lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 top-1 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 rounded-full gradient-bg flex items-center justify-center ring-4 ring-white dark:ring-gray-950 shadow-md z-10">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>

                  <div className="lg:w-1/2"></div>

                  <div className={`lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <div className="glass-card glow-hover rounded-2xl p-6 sm:p-7 shadow-lg dark:shadow-gray-950/50">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{company.name}</h3>
                        <span className="text-xs font-semibold text-gray-400 dark:text-gray-500">{company.location}</span>
                      </div>

                      <div className="space-y-1.5 mb-4">
                        {company.roles.map((role, rIndex) => (
                          <div key={rIndex} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                            <p className="font-bold text-sm text-gray-800 dark:text-gray-200">{role.title}</p>
                            <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 whitespace-nowrap">{role.period}</p>
                          </div>
                        ))}
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-6 description-text" style={{ fontWeight: 450 }}>
                        {company.scope}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card glow-hover rounded-2xl p-6"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white leading-snug">{edu.school}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{edu.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mt-3">{edu.degree}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
