"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Try the Demo */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 4px 24px #e3061340' }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-3 bg-dmi-red text-white rounded-lg font-medium shadow-md hover:bg-opacity-90 transition-all"
        aria-label="Try the Demo"
      >
        Try the Demo
      </motion.button>
      {/*Join Waitlist */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 4px 24px #e3061340', backgroundColor: '#e30613', color: '#fff' }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-3 border-2 border-dmi-red text-dmi-red rounded-lg font-medium bg-white hover:bg-dmi-red hover:text-white transition-all"
        aria-label="Join Waitlist"
      >
        Join Waitlist
      </motion.button>
    </div>
  )
} 