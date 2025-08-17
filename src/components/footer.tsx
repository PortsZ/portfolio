'use client'

import { motion } from 'motion/react'

const socialLinks = [
  { name: 'GitHub', icon: '🐙', url: 'https://github.com/portfolio' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/portfolio' },
  { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/portfolio_dev' },
  { name: 'Email', icon: '📧', url: 'mailto:hello@portfolio.dev' }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg animate-glow" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Full Stack Developer and Product Specialist building technology that creates measurable impact. 
              From concept to delivery, I bring ideas to life.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Contact'].map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {link}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-gray-400 text-sm">
            © {currentYear} Portfolio Developer. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Built with</span>
            <div className="flex items-center space-x-2">
              <span className="text-red-500">❤️</span>
              <span>Next.js</span>
              <span className="text-blue-500">⚛️</span>
              <span>React</span>
              <span className="text-purple-500">🎨</span>
              <span>Tailwind</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border-2 border-purple-500 rounded-full"
          />
        </div>
        
        <div className="absolute bottom-20 left-10 opacity-20">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border-2 border-pink-500 rounded-full"
          />
        </div>
      </div>
    </footer>
  )
}
