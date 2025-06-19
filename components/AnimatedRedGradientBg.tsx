"use client"
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

export default function AnimatedRedGradientBg() {
  const colorShift = useMotionValue(0)

  useEffect(() => {
    animate(colorShift, 1, {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    })
  }, [colorShift])

  const background = useTransform(
    colorShift,
    [0, 1],
    [
      "linear-gradient(135deg,rgb(239, 119, 127) 0%, #fff 100%)",
      "linear-gradient(135deg, #fff 0%,rgb(247, 110, 119) 100%)"
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