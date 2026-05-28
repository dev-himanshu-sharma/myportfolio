"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import profilePic from "./profilepic.png"

const roles = ["MERN Stack Developer", "Full Stack Engineer", "Backend Specialist", "React Developer"]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const role = roles[currentRole]
    
    if (isTyping) {
      if (displayText.length < role.length) {
        const timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }
  }, [displayText, isTyping, currentRole])

  return (
    <section className="min-h-screen relative flex items-center pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 font-mono text-sm"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground">SYSTEM_ONLINE</span>
              <span className="text-muted-foreground">—</span>
              <span className="text-primary">V2.0.26</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-foreground">HIMANSHU</span>
                <br />
                <span className="text-primary neon-text">SHARMA</span>
                <span className="text-[#ffcc00] animate-pulse">.</span>
              </h1>
            </motion.div>

            {/* Role Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-lg"
            >
              <span className="text-muted-foreground">{">"} role.exec(): </span>
              <span className="text-primary">{displayText}</span>
              <span className="animate-pulse text-primary">▊</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-lg font-mono"
            >
              I architect performant web experiences with the MERN stack.
              Currently obsessed with scalable backends, real-time systems,
              and shipping startup-grade products at developer-grade speed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="group flex items-center gap-2 px-8 py-3 border border-primary text-primary font-mono text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
              >
                VIEW PROJECTS
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono text-sm tracking-wider hover:bg-primary/90 transition-all"
              >
                CONTACT
                <span className="w-2 h-2 bg-primary-foreground animate-pulse" />
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 pt-4"
            >
              <Link
                href="https://github.com/dev-himanshu-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/dev-himanshusharma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:hs764664@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
              <span className="text-muted-foreground font-mono text-sm flex items-center gap-2">
                <MapPin size={14} />
                INDIA • UTC+5:30
              </span>
            </motion.div>
          </div>

          {/* Right Content - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Live Feed Box */}
            <div className="border border-border bg-card/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-sm text-muted-foreground">LIVE_FEED.CAM</span>
              </div>

              {/* Wireframe Visual */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-transparent rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.14)_0%,transparent_70%)]" />
                <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-primary/45 ring-2 ring-primary/20">
                  <Image
                    src={profilePic}
                    alt="Himanshu Sharma profile picture"
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Recording indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="text-red-500">REC</span>
                  <span>•</span>
                  <span>00:42:17</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-foreground">12+</div>
                  <div className="font-mono text-xs text-muted-foreground uppercase">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">3.4k</div>
                  <div className="font-mono text-xs text-muted-foreground uppercase">Commits</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">∞</div>
                  <div className="font-mono text-xs text-muted-foreground uppercase">Coffee</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
