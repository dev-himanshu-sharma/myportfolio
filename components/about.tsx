"use client"

import { motion } from "framer-motion"
import { Code2, Terminal, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-primary text-sm">01</span>
            <span className="font-mono text-muted-foreground text-sm">//</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>
          <div className="w-24 h-0.5 bg-primary" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="font-mono text-sm text-muted-foreground mb-4">
              <span className="text-primary">{">"}</span> cat about.md
            </div>
            
            <p className="text-foreground leading-relaxed text-lg">
              {"I'm"} a passionate <span className="text-primary">Full-Stack Developer</span> with 
              expertise in the MERN stack. I love building products that solve real-world 
              problems and create meaningful experiences for users.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development started with a curiosity for how things work 
              on the internet. Today, I specialize in creating scalable applications with 
              clean, maintainable code and pixel-perfect interfaces.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When {"I'm"} not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or working on my startup idea -{" "}
              <a 
                href="https://devforge-weld.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                DevForge
              </a>
              .
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="space-y-2">
                <div className="font-mono text-xs text-muted-foreground uppercase">Location</div>
                <div className="text-foreground">India</div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-xs text-muted-foreground uppercase">Focus</div>
                <div className="text-foreground">MERN Stack</div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-xs text-muted-foreground uppercase">Email</div>
                <a href="mailto:hs764664@gmail.com" className="text-primary hover:underline">
                  hs764664@gmail.com
                </a>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-xs text-muted-foreground uppercase">Status</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-foreground">Available for hire</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Card 1 */}
            <div className="group p-6 border border-border bg-card hover:border-primary transition-all rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Clean Code Advocate
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    I believe in writing code that is not just functional, but also 
                    readable and maintainable. Every line serves a purpose.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-6 border border-border bg-card hover:border-primary transition-all rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Terminal size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Backend Enthusiast
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Building robust APIs, designing database schemas, and ensuring 
                    seamless data flow is where I find my zone.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-6 border border-border bg-card hover:border-primary transition-all rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Performance Focused
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Optimizing load times, reducing bundle sizes, and creating 
                    lightning-fast experiences is my obsession.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
