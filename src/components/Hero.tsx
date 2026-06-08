"use client"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowDown, PlayCircle } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { useEffect, useState } from "react"

export function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [dots, setDots] = useState<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    const makeDots = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 0
      const h = typeof window !== "undefined" ? window.innerHeight : 0
      return Array.from({ length: 20 }, () => ({
        x: Math.random() * (w || 1),
        y: Math.random() * (h || 1),
      }))
    }

    setDots(makeDots())
    const onResize = () => setDots(makeDots())
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlJTIwZWFydGglMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NTkzODE1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Earth from space showing climate patterns"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-900/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10" aria-hidden="true">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ x: dot.x, y: dot.y }}
            animate={{
              y: [dot.y, dot.y - 20, dot.y],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Your Impact on
            <motion.span
              className="block text-green-400"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Climate Change
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Understanding how our daily choices affect the planet is the first step toward building a sustainable future
            for generations to come.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              onClick={() => {
                const nextSection = document.querySelector("#impact")
                nextSection?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              Discover Your Impact
            </Button>
            <motion.a
              href="https://youtu.be/xWrIb-9KzaA?si=XJdmKpEseXXGWd6J"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlayCircle className="h-6 w-6" />
              <span>Watch Video</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-white/80"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
