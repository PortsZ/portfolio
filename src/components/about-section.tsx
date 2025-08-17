'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  })

  const highlights = [
    'End-to-end solutions across industries',
    'Renewable energy to fintech and healthcare',
    'Robust performance, scalability, and efficiency',
    'Cutting-edge technologies like AWS, Next.js, Prisma',
    'Cross-functional team management',
    'Projects from concept to delivery'
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
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
            className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 dark:from-blue-900 dark:to-purple-900 dark:text-blue-200"
          >
            About Me
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Where Creativity Meets Precision
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building technology that doesn&apos;t just work, but creates measurable impact
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Main Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I&apos;m a <span className="font-semibold text-purple-600 dark:text-purple-400">Full Stack Developer</span> and{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Product Specialist</span> with a unique background 
                that bridges software engineering and financial markets.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Over the past years, I&apos;ve designed and deployed end-to-end solutions across industries, 
                from renewable energy to fintech and healthcare. My work emphasizes robust performance, 
                scalability, and efficiency, often integrating cutting-edge technologies like AWS, Next.js, 
                Prisma, and Python.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Beyond coding, I thrive on solving complex problems, managing cross-functional teams, 
                and driving projects from concept to delivery. My mission is to build technology that 
                doesn&apos;t just work, but creates measurable impact.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Floating Cards */}
            <div className="relative h-96">
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={isIntersecting ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-0 left-0 w-64 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-6"
              >
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold text-purple-800 dark:text-purple-200">Innovation</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">Pushing boundaries with cutting-edge tech</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50, rotate: 5 }}
                animate={isIntersecting ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute top-20 right-0 w-64 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-200/50 p-6"
              >
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200">Performance</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">Scalable solutions that perform</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50, rotate: -3 }}
                animate={isIntersecting ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl border border-pink-200/50 p-6"
              >
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-pink-800 dark:text-pink-200">Impact</h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">Technology that creates real value</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200/50 dark:border-purple-700/50">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">💭</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                My Philosophy
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                I&apos;ve always believed that great technology is where creativity meets precision. 
                Whether it&apos;s automating cryptocurrency trading, leading a team to develop solar 
                software in Brazil, or engineering healthcare solutions for startups, I approach 
                every challenge with curiosity and drive.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
