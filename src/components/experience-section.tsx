'use client'

import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

const experiences = [
  {
    company: 'Unicorn Machine',
    role: 'Product Specialist',
    period: '2025 – Present',
    location: 'Tallinn, Estonia',
    description: 'Working on strategy and execution in a dynamic product-driven environment.',
    technologies: ['Product Strategy', 'Execution', 'Product Management'],
    icon: '🦄',
    color: 'from-purple-500 to-pink-500'
  },
  {
    company: 'SaveLivez',
    role: 'Full Stack Engineer',
    period: '2024 – 2025',
    location: 'Remote',
    description: 'Designed and built scalable healthcare dashboards and backend services, leveraging AWS and modern frameworks to deliver reliable, data-driven solutions.',
    technologies: ['AWS', 'React', 'Node.js', 'Healthcare Tech', 'Data Visualization'],
    icon: '🏥',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    company: 'Cryptech Enterprises',
    role: 'Market Research Analyst & Software Engineer',
    period: '2021 – 2024',
    location: 'Brazil',
    description: 'Combined finance and engineering by automating trading strategies, conducting crypto IPO research, and managing real-time investment operations in a high-pressure market.',
    technologies: ['Python', 'Trading Automation', 'Crypto Research', 'Real-time Systems'],
    icon: '📊',
    color: 'from-green-500 to-emerald-500'
  },
  {
    company: 'Antares Solar',
    role: 'Full Stack Engineer',
    period: '2023',
    location: 'Brazil',
    description: 'Led development of PV kit sizing and proposal-generation software for solar installers. Managed a team of 5, integrating front/back-end technologies and AWS to ensure performance and security.',
    technologies: ['Solar Software', 'Team Leadership', 'AWS', 'Full Stack', 'PV Systems'],
    icon: '☀️',
    color: 'from-yellow-500 to-orange-500'
  }
]

const education = [
  {
    institution: 'Federal University of Technology – Paraná (UTFPR)',
    degree: 'Computer Engineering',
    period: 'Graduated',
    icon: '🎓',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    institution: 'Harvard/CS50 (edX)',
    degree: 'CS50x: Introduction to Computer Science',
    period: 'Completed',
    icon: '⚡',
    color: 'from-red-500 to-pink-500'
  }
]

export function ExperienceSection() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge 
            variant="secondary" 
            className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-100 to-blue-100 text-green-800 dark:from-green-900 dark:to-blue-900 dark:text-green-200"
          >
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Diverse experience across industries, always focused on solving problems with technology
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">
                            {exp.role}
                          </CardTitle>
                          <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {exp.period}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-900 dark:to-pink-900 dark:text-purple-200 border-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Education & Certifications
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center text-2xl`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200/50 dark:border-blue-700/50">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Ready for the Next Challenge
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                I&apos;m constantly seeking opportunities to collaborate, learn, and push boundaries. 
                Let&apos;s build something amazing together!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
