"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navItems = [
  { number: "01", label: "ABOUT", href: "#about" },
  { number: "02", label: "SKILLS", href: "#skills" },
  { number: "03", label: "PROJECTS", href: "#projects" },
  { number: "04", label: "EXPERIENCE", href: "#experience" },
  { number: "05", label: "CONTACT", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">HS</span>
            </div>
            <span className="font-mono text-sm tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
              HIMANSHU_SHARMA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-sm tracking-wider transition-colors relative group ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-primary">{item.number}</span>
                <span className="mx-1">/</span>
                <span>{item.label}</span>
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Hire Me Button */}
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-2 border border-primary text-primary font-mono text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all neon-border"
          >
            HIRE ME
            <span className="w-2 h-2 bg-primary animate-pulse" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-border"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="font-mono text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors block py-2"
                    >
                      <span className="text-primary">{item.number}</span>
                      <span className="mx-1">/</span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary font-mono text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  HIRE ME
                  <span className="w-2 h-2 bg-primary animate-pulse" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
