'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

const contactMethods = [
  {
    name: 'Email',
    value: 'hello@portfolio.dev',
    icon: '📧',
    color: 'from-blue-500 to-cyan-500',
    action: () => window.open('mailto:hello@portfolio.dev', '_blank')
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/portfolio',
    icon: '💼',
    color: 'from-blue-600 to-indigo-600',
    action: () => window.open('https://linkedin.com/in/portfolio', '_blank')
  },
  {
    name: 'GitHub',
    value: 'github.com/portfolio',
    icon: '🐙',
    color: 'from-gray-700 to-gray-900',
    action: () => window.open('https://github.com/portfolio', '_blank')
  },
  {
    name: 'Twitter',
    value: '@portfolio_dev',
    icon: '🐦',
    color: 'from-blue-400 to-blue-500',
    action: () => window.open('https://twitter.com/portfolio_dev', '_blank')
  }
]

const quickMessages = [
  'Let\'s build something amazing together! 🚀',
  'I\'m always open to new opportunities 💡',
  'Ready to tackle your next challenge ⚡',
  'Let\'s discuss how I can help your project 🎯'
]

export function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  })
  
  const [selectedMessage, setSelectedMessage] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const handleContactClick = (method: typeof contactMethods[0]) => {
    method.action()
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
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
            className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 dark:from-pink-900 dark:to-purple-900 dark:text-pink-200"
          >
            Get In Touch
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? I&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I&apos;m passionate about creating technology that makes a difference. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                I&apos;m here to help bring your ideas to life.
              </p>
              
              {/* Quick Message Display */}
              <motion.div
                animate={{ opacity: isHovering ? 0.7 : 1 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 border border-purple-200/50 dark:border-purple-700/50"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <p className="text-purple-800 dark:text-purple-200 text-center font-medium">
                  {quickMessages[selectedMessage]}
                </p>
              </motion.div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Connect With Me
              </h4>
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  <Card 
                    className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm cursor-pointer group-hover:shadow-xl"
                    onClick={() => handleContactClick(method)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {method.name}
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {method.value}
                          </p>
                        </div>
                        <div className="text-gray-400 group-hover:text-purple-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">
                  Send a Message
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">
                  Tell me about your project or just say hello!
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200/50 dark:border-blue-700/50">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Let&apos;s Create Something Amazing
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                I&apos;m excited to hear about your next project. Whether it&apos;s a startup idea, 
                a business application, or something completely new, let&apos;s work together to 
                bring it to life.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
