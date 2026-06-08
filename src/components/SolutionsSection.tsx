"use client"
import { motion } from "motion/react"
import type React from "react"

import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Lightbulb, Wind, Leaf, Recycle, Car, Building, ArrowRight } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface SolutionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  impact: string
  imageUrl: string
  index: number
}

function SolutionCard({ icon, title, description, impact, imageUrl, index }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="overflow-hidden h-full bg-white hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
              {icon}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">{impact}</span>
            <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export function SolutionsSection() {
  const solutions = [
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Renewable Energy",
      description:
        "Transitioning to solar, wind, and other clean energy sources to reduce greenhouse gas emissions from fossil fuels.",
      impact: "80% emission reduction",
      imageUrl:
        "https://images.unsplash.com/photo-1638068109209-002be3ae4950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHdpbmR8ZW58MXx8fHwxNzU5MzgxNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Electric Transportation",
      description: "Electrifying vehicles and improving public transport to eliminate transportation emissions.",
      impact: "45% transport emissions cut",
      imageUrl:
        "https://images.unsplash.com/photo-1619913387719-a43ee8859d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGNoYXJnaW5nJTIwc3RhdGlvbnxlbnwxfHx8fDE3NTk0ODUxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Green Buildings",
      description:
        "Designing energy-efficient buildings with sustainable materials and smart energy management systems.",
      impact: "40% energy savings",
      imageUrl:
        "https://images.unsplash.com/photo-1630404991412-9504d094e8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmxlJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU5NTAxNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Nature-Based Solutions",
      description: "Protecting and restoring forests, wetlands, and other ecosystems that naturally absorb carbon.",
      impact: "30% of climate solution",
      imageUrl:
        "https://images.unsplash.com/photo-1683665281529-90ea475286e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBjb25zZXJ2YXRpb24lMjBuYXR1cmV8ZW58MXx8fHwxNzU5NDE4NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Circular Economy",
      description: "Reducing waste through recycling, reusing materials, and designing products for longevity.",
      impact: "25% waste reduction",
      imageUrl:
        "https://images.unsplash.com/photo-1706468809076-d19c97516e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWN5Y2xpbmclMjBjaXJjdWxhciUyMGVjb25vbXl8ZW58MXx8fHwxNzU5NTAxNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Smart Technology",
      description: "Using AI and IoT to optimize energy use, reduce waste, and improve efficiency across all sectors.",
      impact: "20% efficiency gain",
      imageUrl:
        "https://images.unsplash.com/photo-1596839808531-218de5fbc3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzbWFydCUyMHRlY2hub2xvZ3klMjBJb1QlMjBzZW5zb3JzfGVufDF8fHx8MTc1OTUwMTY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Climate Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative technologies and approaches that are leading the way toward a sustainable future and helping us
            address the climate crisis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              impact={solution.impact}
              imageUrl={solution.imageUrl}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement Solutions?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations and individuals who are already implementing these climate solutions in
            their communities.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Start Your Climate Action
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
