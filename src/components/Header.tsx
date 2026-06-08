"use client"
import { motion } from "motion/react"
import { Button } from "./ui/button"
import { Globe, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Globe className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">ClimateAware</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 bg-[rgba(205,54,54,0)]">
            {["Home", "Impact", "Solutions", "Take Action", "About"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="hidden md:block bg-green-600 hover:bg-green-700">Get Involved</Button>
          </motion.div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              {["Home", "Impact", "Solutions", "Take Action", "About"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="mt-4 bg-green-600 hover:bg-green-700 w-full">Get Involved</Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
