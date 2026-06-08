"use client"
import { motion } from "motion/react"
import type React from "react"

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Car, Home, Utensils, Recycle, Lightbulb, Users, ArrowRight, CheckCircle } from "lucide-react"

interface ActionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  impact: string
  index: number
}

function ActionCard({ icon, title, description, impact, index }: ActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="p-6 h-full bg-gradient-to-br from-white to-green-50 border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start space-x-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 group-hover:bg-green-700 transition-colors"
          >
            {icon}
          </motion.div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 mb-3 leading-relaxed">{description}</p>
            <div className="flex items-center text-sm text-green-600 font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>{impact}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export function ActionSection() {
  const actions = [
    {
      icon: <Car className="h-6 w-6" />,
      title: "Reduce Transportation Emissions",
      description:
        "Choose walking, cycling, public transport, or electric vehicles to significantly cut your carbon footprint.",
      impact: "Up to 2.3 tons CO₂ saved annually",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Improve Home Energy Efficiency",
      description: "Upgrade to energy-efficient appliances, improve insulation, and use renewable energy sources.",
      impact: "30-50% reduction in energy use",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Choose Sustainable Diet",
      description: "Reduce meat consumption, choose local and organic foods, and minimize food waste.",
      impact: "1.5 tons CO₂ saved per year",
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Practice Circular Economy",
      description: "Reduce, reuse, and recycle materials. Buy less, repair more, and choose durable products.",
      impact: "0.5 tons CO₂ saved annually",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Switch to Clean Energy",
      description: "Install solar panels, choose renewable energy providers, and optimize energy consumption.",
      impact: "4-8 tons CO₂ saved per year",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Advocate and Educate",
      description: "Share knowledge, support climate policies, and encourage others to take climate action.",
      impact: "Multiplied positive impact",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50" id="take-action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Take Action Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every individual action matters. Here are practical ways you can reduce your environmental impact and
            contribute to fighting climate change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {actions.map((action, index) => (
            <ActionCard
              key={index}
              icon={action.icon}
              title={action.title}
              description={action.description}
              impact={action.impact}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="inline-block p-8 bg-gradient-to-r from-green-600 to-blue-600 text-white border-0">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-green-100 mb-6 max-w-md">
              Calculate your carbon footprint and get personalized recommendations for reducing your environmental
              impact.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
              Calculate Your Footprint
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
