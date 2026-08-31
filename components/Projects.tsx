'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      image: "/assets/realtime-conversation.png",
      title: "RealTimeRAG Assist",
      description: "A live call-assistant system that transcribes conversations as they happen and surfaces AI-generated suggestions to the operator in real time — FastAPI backend, Next.js frontend, AssemblyAI for streaming speech-to-text, and OpenAI for the suggestion engine.",
      githubUrl: "https://github.com/bhavesh-chainani/realtime-conversation-intelligence",
      technologies: ["FastAPI", "Next.js", "AssemblyAI", "OpenAI", "WebSocket"]
    },
    {
      image: "/assets/data-streaming-architecture.png",
      title: "Real-Time Data Pipeline",
      description: "An end-to-end streaming architecture I designed and containerized from scratch: Airflow orchestrates ingestion from the randomuser.me API, Kafka handles the event backbone, Spark processes streams in real time, and Cassandra persists the results — all deployed via Docker for reproducible, one-command setup.",
      githubUrl: "https://github.com/bhavesh-chainani/realtime-data-streaming",
      technologies: ["Apache Airflow", "Kafka", "Spark", "Cassandra", "Docker"]
    },
    {
      image: "/assets/topic-modelling.png",
      title: "Topic Modelling",
      description: "A multilingual NLP pipeline that preprocesses English, Russian, and Italian text and applies Latent Dirichlet Allocation (LDA) to surface hidden topics — built to compare how theme extraction holds up across languages with very different structures.",
      githubUrl: "https://github.com/bhavesh-chainani/topic_modelling",
      technologies: ["Python", "LDA", "NLP", "Scikit-Learn"]
    },
    {
      image: "/assets/langchain_photo.png",
      title: "LangChain Analysis",
      description: "A hands-on exploration of LangChain for orchestrating LLM workflows — text generation, summarization, and conversational retrieval — using a restaurant-menu assistant to demonstrate prompt chaining and structured, cuisine-aware responses.",
      githubUrl: "https://github.com/bhavesh-chainani/langchain_analysis",
      technologies: ["LangChain", "Python", "NLP", "AI/ML"]
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">
            Outside of Client Work
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4 relative inline-block">
            Engineering Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg rounded-full"></div>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-8 description-text" style={{ fontWeight: 450 }}>
            Independent builds where I explore and upskill in emerging AI and data engineering practices — from streaming pipelines to LLM orchestration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="group glass-card glow-hover rounded-2xl overflow-hidden card-hover hover:ring-2 hover:ring-primary-400/40 dark:hover:ring-secondary-400/40 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 leading-7 mb-6 text-left flex-grow description-text" style={{ fontWeight: 450 }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 text-primary-700 dark:text-primary-300 text-sm rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex justify-center mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 gradient-bg text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
