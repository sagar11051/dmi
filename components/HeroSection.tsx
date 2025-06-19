"use client"
import React from 'react'
import { motion } from 'framer-motion'
import CTAButtons from './CTAButtons'
import AnimatedRedGradientBg from './AnimatedRedGradientBg'
import { easeInOut } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,   
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeInOut
    }
  }
}

export default function HeroSection() {
  return (
    <div className="relative w-full">
      {/* Animated gradient background*/}
      <AnimatedRedGradientBg />
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label="DMI Hero Section"
      >
        {/* DMI Icon and Dots */}
        <div className="flex flex-col items-center mb-8">
          {/* DMI Logo Icon */}
          <div className="w-16 h-16 bg-[#e30613] rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">DMI</span>
          </div>
          {/* Three Dots Indicator */}
          <div className="flex items-center gap-2 mt-4" aria-label="pagination indicator">
            <span className="w-3 h-3 rounded-full bg-[#e30613] opacity-60"></span>
            <span className="w-3 h-3 rounded-full bg-[#e30613]"></span>
            <span className="w-3 h-3 rounded-full bg-[#e30613] opacity-60"></span>
          </div>
        </div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold text-center mb-6"
        >
          <span className="text-black">Design Made </span>
          <span className="text-[#e30613]">Intelligent</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 text-center mb-12 max-w-2xl"
        >
          From brand kit to launch-ready content, websites & apps — powered by AI.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div variants={itemVariants}>
          <CTAButtons />
        </motion.div>
      </motion.section>
    </div>
  )
} 