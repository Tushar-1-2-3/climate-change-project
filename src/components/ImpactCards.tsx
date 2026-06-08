"use client"
import { motion } from "motion/react"
import type React from "react"

import { Card } from "./ui/card"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Flame, Snowflake, Sun } from "lucide-react"

interface ImpactCardProps {
  title: string
  description: string
  image: string
  icon: React.ReactNode
  stats: string
  index: number
}

function ImpactCard({ title, description, image, icon, stats, index }: ImpactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="overflow-hidden h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
              {icon}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-2xl font-bold">{stats}</div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </Card>
    </motion.div>
  )
}

export function ImpactCards() {
  const impacts = [
    {
      title: "Rising Wildfires",
      description:
        "Climate change increases wildfire frequency and intensity, destroying ecosystems and releasing stored carbon back into the atmosphere.",
      image:
        "https://images.unsplash.com/photo-1634009540176-215c4e167597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBmaXJlJTIwd2lsZGZpcmV8ZW58MXx8fHwxNzU5MzgxNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Flame className="h-6 w-6" />,
      stats: "2x More",
    },
    {
      title: "Melting Ice Caps",
      description:
        "Polar ice sheets are melting at unprecedented rates, contributing to sea-level rise and disrupting global weather patterns.",
      image:
        "https://images.unsplash.com/photo-1584923772421-93474e5ce2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xhciUyMGljZSUyMG1lbHRpbmclMjBnbGFjaWVyfGVufDF8fHx8MTc1OTM4MTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Snowflake className="h-6 w-6" />,
      stats: "80% Loss",
    },
    {
      title: "Renewable Solutions",
      description:
        "Clean energy technologies offer hope for reducing emissions and creating a sustainable energy future for our planet.",
      image:
        "https://images.unsplash.com/photo-1638068109209-002be3ae4950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHdpbmR8ZW58MXx8fHwxNzU5MzgxNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Sun className="h-6 w-6" />,
      stats: "12% Growth",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Reality of Climate Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how climate change is affecting our world today and discover the solutions that can help us build a more
            sustainable future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <ImpactCard
              key={index}
              title={impact.title}
              description={impact.description}
              image={impact.image}
              icon={impact.icon}
              stats={impact.stats}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
