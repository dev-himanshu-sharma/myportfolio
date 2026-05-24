"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Socket.io", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Vercel", level: 90 },
      { name: "Docker", level: 70 },
    ],
  },
]

const technologies = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Redis", "Socket.io", "GraphQL", "REST",
  "Tailwind", "SASS", "Git", "Docker", "AWS", "Vercel", "JWT", "OAuth"
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-primary text-sm">02</span>
            <span className="font-mono text-muted-foreground text-sm">//</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Tech Stack</h2>
          </div>
          <div className="w-24 h-0.5 bg-primary" />
        </motion.div>

        {/* Skills Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="p-6 border border-border bg-card rounded-lg"
            >
              <h3 className="font-mono text-primary text-sm mb-6 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground text-sm">{skill.name}</span>
                      <span className="text-muted-foreground text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1, duration: 0.8 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-muted-foreground mb-6">
            <span className="text-primary">{">"}</span> tech.stack.list()
          </div>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-4 py-2 bg-secondary/50 border border-border text-foreground text-sm font-mono rounded hover:border-primary hover:text-primary transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
