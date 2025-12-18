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
      image: "/assets/realttime-conversation.png",
      title: "Real-Time Conversation Intelligence",
      description: "A real-time legal call assistant system that provides live AI-powered suggestions to operators during active calls with clients. Built with FastAPI backend and Next.js frontend, featuring real-time speech-to-text transcription via AssemblyAI and intelligent suggestions powered by OpenAI for legal assistance workflow.",
      githubUrl: "https://github.com/bhavesh-chainani/realtime-conversation-intelligence",
      technologies: ["FastAPI", "Next.js", "AssemblyAI", "OpenAI", "WebSocket"]
    },
    {
      image: "/assets/data-streaming-architecture.png",
      title: "Real-Time Data Pipeline",
      description: "This project showcases an end-to-end real-time data streaming pipeline using technologies like Apache Airflow, Kafka, Spark, and Cassandra. Synthetic user data is fetched from the randomuser.me API, orchestrated via Airflow, streamed through Kafka, processed with Spark, and stored in Cassandra, all containerized with Docker for seamless deployment.",
      githubUrl: "https://github.com/bhavesh-chainani/realtime-data-streaming",
      technologies: ["Apache Airflow", "Kafka", "Spark", "Cassandra", "Docker"]
    },
    {
      image: "/assets/topic-modelling.png",
      title: "Topic Modelling",
      description: "A comprehensive topic modeling analysis for English, Russian, and Italian texts using Latent Dirichlet Allocation (LDA). This project involves preprocessing multilingual datasets, implementing LDA to uncover hidden topics, and analyzing the results to provide insights into the prevalent themes across different languages.",
      githubUrl: "https://github.com/bhavesh-chainani/topic_modelling",
      technologies: ["Python", "LDA", "NLP", "Scikit-Learn"]
    },
    {
      image: "/assets/langchain_photo.png",
      title: "LangChain Analysis",
      description: "This project demonstrates the use of LangChain to develop and implement language models for various tasks such as text generation, summarization, and chatbots. A practical example includes creating a sample restaurant menu where LangChain interacts with user queries based on cuisine preferences, generating relevant menu items to showcase its capabilities in understanding and responding to user needs.",
      githubUrl: "https://github.com/bhavesh-chainani/langchain_analysis",
      technologies: ["LangChain", "Python", "NLP", "AI/ML"]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg font-semibold text-gray-600 mb-4">
            Browse Through My
          </p>
          
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-12 relative inline-block">
            Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg rounded-full"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 leading-7 mb-6 text-left flex-grow description-text" style={{ fontWeight: 450 }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button - Always at bottom */}
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