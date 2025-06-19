import React from 'react'
import { motion } from 'framer-motion'

export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 4px 24pxrgba(161, 0, 11, 0.25)',backgroundColor: '#e30613' }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-3  text-black bg-white rounded-lg font-medium shadow-md hover:text-white hover:bg-opacity-90 transition-all"
        aria-label="Try the Demo"
      >
        Try the Demo
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 4px 24pxrgba(161, 0, 11, 0.25)', backgroundColor: '#e30613', color: '#fff' }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-3  text-black bg-white rounded-lg font-medium shadow-md hover:text-white hover:bg-opacity-90 transition-all"
        aria-label="Join Waitlist"
      >
        Join Waitlist
      </motion.button>
    </div>
  )
} 