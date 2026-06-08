"use client"
import { motion } from "motion/react"
import { Globe, Mail, Twitter, Instagram, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Learn: ["Climate Science", "Impact Assessment", "Research", "Data & Reports"],
    Act: ["Carbon Calculator", "Action Plans", "Community Projects", "Advocacy"],
    Connect: ["Newsletter", "Events", "Partnerships", "Contact Us"],
    Support: ["Donate", "Volunteer", "Spread Awareness", "Share Stories"],
  }

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
        >
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Globe className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">ClimateAware</span>
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering individuals to understand and reduce their impact on climate change through education, action,
              and community engagement.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-green-400">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with </span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span> for our planet</span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400">
              <span>© 2024 ClimateAware. All rights reserved.</span>
              <div className="flex space-x-6">
                <motion.a href="#" className="hover:text-white transition-colors cursor-pointer" whileHover={{ y: -1 }}>
                  Privacy Policy
                </motion.a>
                <motion.a href="#" className="hover:text-white transition-colors cursor-pointer" whileHover={{ y: -1 }}>
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
