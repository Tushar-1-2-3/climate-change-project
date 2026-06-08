"use client"
import { motion } from "motion/react"
import type React from "react"

import { useEffect, useState, useRef } from "react"
import { TrendingUp, Thermometer, Droplets, Wind } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  value: string
  label: string
  description: string
  delay: number
}

function StatCard({ icon, value, label, description, delay }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValue, setAnimatedValue] = useState("0")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate the number
          const numericValue = Number.parseFloat(value.replace(/[^0-9.]/g, ""))
          const isDecimal = value.includes(".")
          let current = 0
          const increment = numericValue / 50
          const timer = setInterval(() => {
            current += increment
            if (current >= numericValue) {
              current = numericValue
              clearInterval(timer)
            }
            setAnimatedValue(
              isDecimal
                ? current.toFixed(1) + value.replace(/[0-9.]/g, "")
                : Math.floor(current) + value.replace(/[0-9]/g, ""),
            )
          }, 30)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-xl flex items-center justify-center mb-6"
      >
        <div className="text-white text-2xl">{icon}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      >
        <div className="text-4xl font-bold text-gray-900 mb-2">{animatedValue}</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{label}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  )
}

export function StatsSection() {
  const stats = [
    {
      icon: <TrendingUp />,
      value: "1.1°C",
      label: "Global Temperature Rise",
      description: "Average global temperature has increased since pre-industrial times",
    },
    {
      icon: <Thermometer />,
      value: "421ppm",
      label: "CO₂ Concentration",
      description: "Current atmospheric CO₂ levels, highest in human history",
    },
    {
      icon: <Droplets />,
      value: "3.4mm",
      label: "Sea Level Rise per Year",
      description: "Annual rate of global mean sea level rise since 1993",
    },
    {
      icon: <Wind />,
      value: "36.8B",
      label: "Tons of CO₂ Annually",
      description: "Global greenhouse gas emissions from human activities",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Climate Change by the Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the scale of climate change through key metrics that show how human activities are
            transforming our planet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
