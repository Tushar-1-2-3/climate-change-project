"use client"
import { motion } from "motion/react"
import type React from "react"

import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Target, Users, Globe, Heart, Award, TrendingUp, Mail, ArrowRight } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface MissionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function MissionCard({ icon, title, description, index }: MissionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export function AboutSection() {
  const missionItems = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description:
        "To empower individuals with knowledge and tools to understand and reduce their environmental impact.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Focus",
      description: "Building a global community of climate-conscious individuals working together for positive change.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Creating scalable solutions that can be implemented worldwide to address climate challenges.",
    },
  ]

  const stats = [
    { icon: <Users className="h-6 w-6" />, number: "50K+", label: "Community Members" },
    { icon: <Globe className="h-6 w-6" />, number: "120+", label: "Countries Reached" },
    { icon: <TrendingUp className="h-6 w-6" />, number: "2M+", label: "Tons CO₂ Reduced" },
    { icon: <Award className="h-6 w-6" />, number: "500+", label: "Partner Organizations" },
  ]

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About ClimateAware</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to raising awareness about climate change and empowering individuals to make a meaningful
            difference in protecting our planet.
          </p>
        </motion.div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Climate Change Has Never Been More Important
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Climate change is one of the most pressing challenges of our time. Through education, awareness, and
              actionable solutions, we believe every individual can contribute to building a more sustainable future.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our platform provides comprehensive resources, data-driven insights, and practical tools to help people
              understand their environmental impact and take meaningful action to reduce it.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              Join Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlJTIwZWFydGglMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NTkzODE1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Earth from space representing our mission"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Mission Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {missionItems.map((item, index) => (
            <MissionCard key={index} icon={item.icon} title={item.title} description={item.description} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Impact So Far</h3>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Together, we're making a real difference in the fight against climate change.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="inline-block p-8 bg-gray-50 border-0">
            <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Have questions, ideas, or want to collaborate? We'd love to hear from you and explore how we can work
              together.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
