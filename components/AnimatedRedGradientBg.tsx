"use client"
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

/**
 * AnimatedRedGradientBg
 * Provides a smooth, animated red/white gradient background for the hero section.
 * Uses Framer Motion to animate a color shift for visual flair.
 */
export default function AnimatedRedGradientBg() {
  // Motion value for gradient animation
  const colorShift = useMotionValue(0)

  // Animate the color shift value between 0 and 1
  useEffect(() => {
    animate(colorShift, 1, {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    })
  }, [colorShift])

  // Interpolate between two gradient backgrounds
  const background = useTransform(
    colorShift,
    [0, 1],
    [
      "linear-gradient(135deg, #e30613 0%, #fff 100%)",
      "linear-gradient(135deg, #fff 0%, #e30613 100%)"
    ]
  )

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        background
      }}
      aria-hidden="true"
    />
  )
} 