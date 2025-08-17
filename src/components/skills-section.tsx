'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { usePortfolioStore } from '@/store/portfolio-store'

const skillCategories = [
  {
    name: 'Frontend',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React', level: 90, description: 'Advanced React patterns, hooks, and state management' },
      { name: 'Next.js', level: 85, description: 'Full-stack React framework with SSR and API routes' },
      { name: 'TypeScript', level: 80, description: 'Type-safe JavaScript development' },
      { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS framework' }
    ]
  },
  {
    name: 'Backend',
    icon: '⚙️',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js', level: 82, description: 'Server-side JavaScript runtime' },
      { name: 'Python', level: 88, description: 'Data processing and automation' },
      { name: 'PostgreSQL', level: 80, description: 'Relational database management' },
      { name: 'Prisma', level: 78, description: 'Database ORM and migrations' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'AWS', level: 75, description: 'Cloud infrastructure and services' },
      { name: 'Docker', level: 70, description: 'Containerization and deployment' },
      { name: 'CI/CD', level: 72, description: 'Continuous integration and deployment' }
    ]
  },
  {
    name: 'Tools & Others',
    icon: '🛠️',
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Git', level: 85, description: 'Version control and collaboration' },
      { name: 'Figma', level: 70, description: 'Design and prototyping' },
      { name: 'Agile', level: 80, description: 'Project management methodologies' }
    ]
  }
]

export function SkillsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  })
  
  const { skillsProgress, animateSkills } = usePortfolioStore()
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setShowProgress(true)
        animateSkills()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting, animateSkills])

  const handleSkillHover = (skillName: string) => {
    setHoveredSkill(skillName)
  }

  const handleSkillLeave = () => {
    setHoveredSkill(null)
  }

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
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
            className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900 dark:to-orange-900 dark:text-yellow-200"
          >
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building scalable, performant applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === index ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(index)}
              className={`px-6 py-3 transition-all duration-300 ${
                selectedCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'hover:scale-105 border-2'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories[selectedCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              onMouseEnter={() => handleSkillHover(skill.name)}
              onMouseLeave={handleSkillLeave}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </h3>
                    <Badge 
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-900 dark:to-pink-900 dark:text-purple-200"
                    >
                      {showProgress ? skillsProgress[skill.name] || 0 : 0}%
                    </Badge>
                  </div>
                  
                  <Progress 
                    value={showProgress ? skillsProgress[skill.name] || 0 : 0} 
                    className="h-3 mb-4 bg-gray-200 dark:bg-gray-700"
                  />
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200/50 dark:border-purple-700/50">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                React Hooks in Action
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                This skills section demonstrates advanced React patterns including custom hooks, 
                state management with Zustand, and smooth animations with Motion. 
                Hover over skills to see interactive effects!
              </p>
              
              {/* Interactive Counter Demo */}
              <InteractiveCounter />
            </CardContent>
          </Card>
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Skill Level Guide
          </h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Beginner (0-30%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Intermediate (31-70%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Advanced (71-90%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Expert (91-100%)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Interactive Counter Component to showcase React hooks
function InteractiveCounter() {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleIncrement = () => {
    setIsAnimating(true)
    setCount(prev => prev + 1)
    setTimeout(() => setIsAnimating(false), 200)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <Button
          onClick={handleIncrement}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
        >
          Increment
        </Button>
        <Button
          variant="outline"
          onClick={handleReset}
          className="border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
        >
          Reset
        </Button>
      </div>
      
      <motion.div
        key={count}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={`text-4xl font-bold ${
          isAnimating ? 'text-purple-600' : 'text-gray-800 dark:text-gray-200'
        } transition-colors`}
      >
        {count}
      </motion.div>
      
      <p className="text-sm text-gray-500 dark:text-gray-500">
        This counter uses React&apos;s useState hook and demonstrates state management
      </p>
    </div>
  )
}
