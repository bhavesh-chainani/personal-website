'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Compass, Sparkles, Cloud, Presentation, Users2, Code2 } from 'lucide-react'

const rowOne = [
  'Azure', 'AWS', 'GCP', 'Databricks', 'Generative AI', 'RAG',
  'Recommender Systems', 'Computer Vision', 'NLP', 'PyTorch', 'TensorFlow', 'Scikit-Learn',
]

const rowTwo = [
  'Python', 'PySpark', 'Java', 'JavaScript', 'SQL', 'NoSQL', 'REST APIs',
  'Docker', 'Kubernetes', 'CI/CD', 'Technical Discovery', 'Solution Architecture',
  'Stakeholder Communication', 'Cross-Functional Leadership',
]

const proficiencyCards = [
  {
    icon: Compass,
    title: 'Solution Architecture & Discovery',
    description: 'Running technical discovery across enterprise clients and translating business pain points into scalable architecture on Azure and AWS.',
  },
  {
    icon: Sparkles,
    title: 'GenAI & ML Engineering',
    description: 'Building production GenAI systems — RAG, recommender systems, computer vision, and NLP — from prototype through to deployment.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Platform Engineering',
    description: 'Designing and deploying on Azure, AWS, GCP, and Databricks, with containerized delivery via Docker and Kubernetes.',
  },
  {
    icon: Presentation,
    title: 'Client Workshops & Enablement',
    description: 'Leading architecture workshops and technical demonstrations, translating business challenges into concrete, buildable use cases.',
  },
  {
    icon: Users2,
    title: 'Stakeholder & Team Leadership',
    description: 'Aligning engineering, product, and commercial stakeholders around a shared roadmap across cross-functional teams.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Delivery',
    description: 'Shipping full-stack platforms end-to-end that embed AI directly into user workflows.',
  },
]

const MarqueeRow = ({ items, reverse }: { items: string[]; reverse?: boolean }) => (
  <div className="relative overflow-hidden fade-edges-x py-2">
    <div className={`flex w-max gap-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {[...items, ...items].map((item, index) => (
        <span
          key={index}
          className="flex-shrink-0 px-4 py-2 rounded-full glass-card text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
)

const Proficiencies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="proficiencies" className="section-padding overflow-hidden">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">
            Here Are My
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-12 relative inline-block">
            Proficiencies
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg rounded-full"></div>
          </h2>
        </motion.div>

        {/* Skill Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3 mb-20 -mx-4 sm:-mx-6 lg:-mx-8"
        >
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
        </motion.div>

        {/* Proficiency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proficiencyCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card glow-hover rounded-2xl p-8 text-center card-hover flex flex-col h-full"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary-500/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {card.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 leading-7 text-center flex-grow description-text" style={{ fontWeight: 450 }}>
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Proficiencies
