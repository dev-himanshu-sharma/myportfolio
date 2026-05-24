"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)]" />
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full max-w-[300px] text-primary opacity-80"
                >
                  {/* Wireframe head/face design */}
                  <defs>
                    <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {/* Central face outline */}
                  <ellipse cx="100" cy="90" rx="50" ry="60" fill="none" stroke="url(#neonGradient)" strokeWidth="0.5" />
                  {/* Grid lines */}
                  {[...Array(8)].map((_, i) => (
                    <ellipse
                      key={`h-${i}`}
                      cx="100"
                      cy={50 + i * 15}
                      rx={50 - Math.abs(i - 3.5) * 5}
                      ry="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.3"
                      opacity={0.5}
                    />
                  ))}
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={50 + i * 8.3}
                      y1="30"
                      x2={50 + i * 8.3}
                      y2="150"
                      stroke="currentColor"
                      strokeWidth="0.3"
                      opacity={0.3}
                    />
                  ))}
                  {/* Eyes */}
                  <circle cx="80" cy="80" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="120" cy="80" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="80" cy="80" r="3" fill="currentColor" opacity="0.6" />
                  <circle cx="120" cy="80" r="3" fill="currentColor" opacity="0.6" />
                  {/* Nose */}
                  <line x1="100" y1="85" x2="100" y2="105" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="100" y1="105" x2="95" y2="108" stroke="currentColor" strokeWidth="0.5" />
                  {/* Mouth */}
                  <path d="M 85 120 Q 100 130 115 120" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  {/* Circuit patterns */}
                  <circle cx="60" cy="140" r="2" fill="currentColor" opacity="0.5" />
                  <circle cx="140" cy="140" r="2" fill="currentColor" opacity="0.5" />
                  <line x1="60" y1="140" x2="40" y2="160" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
                  <line x1="140" y1="140" x2="160" y2="160" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
                </svg>
                
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
