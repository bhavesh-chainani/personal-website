'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Proficiencies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    "Python (PyTorch, Keras, TensorFlow, Scikit-Learn, Django, Flask, PySpark)",
    "MLOps (MLFlow, DataRobot)",
    "AWS (S3, Athena, Glue, SageMaker, Quicksight, Redshift, MWAA, Lambda, API Gateway)",
    "SQL (MySQL, PostgreSQL, Hive, ElasticSearch, Teradata, Hadoop, MongoDB)",
    "Data Visualisation (Tableau, Power BI)",
    "Docker",
    "Kubernetes",
    "Java",
    "JavaScript (ReactJS, NodeJS, NextJS)",
    "Rest API",
    "R / R Studio",
    "MATLab"
  ]

  const proficiencyCards = [
    {
      icon: "/assets/data-analysis.png",
      title: "Data Analysis",
      description: "Expert in diving deep into data to uncover trends, detect anomalies, and generate actionable insights that drive strategic decisions."
    },
    {
      icon: "/assets/data-analytics.png",
      title: "Data Science",
      description: "Skilled in leveraging advanced analytics and machine learning to predict outcomes, optimize processes, and gain a competitive edge."
    },
    {
      icon: "/assets/data-visualization.png",
      title: "Data Visualization",
      description: "Proficient in transforming complex data into clear, interactive visuals and dashboards for enhanced understanding and effective communication."
    },
    {
      icon: "/assets/technical-writing.png",
      title: "Technical Writing",
      description: "Experienced in creating clear and precise documentation to ensure technical concepts and data projects are comprehensively understood."
    },
    {
      icon: "/assets/front-end-web-development.png",
      title: "Web Development",
      description: "Skilled in designing and building intuitive web interfaces that effectively present data solutions, balancing functionality and aesthetics."
    },
    {
      icon: "/assets/collaboration.png",
      title: "Collaboration",
      description: "Adept at working with teams to integrate data solutions into business processes, supporting both short-term projects and long-term goals."
    }
  ]

  return (
    <section id="proficiencies" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg font-medium text-gray-600 mb-4">
            Here Are My
          </p>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 relative inline-block">
            Proficiencies
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-bg rounded-full"></div>
          </h2>
        </motion.div>

        {/* Skills List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {skills.map((skill, index) => {
                const bracketIndex = skill.indexOf('(');
                const mainText = bracketIndex !== -1 ? skill.substring(0, bracketIndex).trim() : skill;
                const bracketText = bracketIndex !== -1 ? skill.substring(bracketIndex) : '';
                
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">
                      <span className="skill-main" style={{ fontWeight: 700 }}>{mainText}</span>
                      {bracketText && <><span className="skill-bracket" style={{ fontWeight: 450 }}> {bracketText}</span></>}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        {/* Proficiency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proficiencyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover border border-gray-100 flex flex-col h-full"
            >
              <div className="mb-6">
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width={80}
                  height={80}
                  className="mx-auto w-20 h-20 object-contain"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {card.title}
              </h3>
              
              <p className="text-gray-500 leading-7 text-center flex-grow description-text" style={{ fontWeight: 450 }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proficiencies