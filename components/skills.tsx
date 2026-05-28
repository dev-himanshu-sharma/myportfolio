"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Libraries/Frameworks",
    items: ["ReactJS", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Databases/Tools",
    items: ["MongoDB", "Postman API", "GitHub", "VS Code"],
  },
  {
    title: "Concepts",
    items: ["Data Structures & Algorithms (DSA)", "REST APIs", "JWT Authentication", "Socket.io", "Accessibility"],
  },
]

const technologies = [
  "JavaScript",
  "Python",
  "HTML5",
  "CSS3",
  "SQL",
  "ReactJS",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "MongoDB",
  "Postman",
  "GitHub",
  "VS Code",
  "DSA",
  "REST APIs",
  "JWT",
  "Socket.io",
  "Accessibility",
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
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

        {/* Skills Lists */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="p-6 border border-border bg-card rounded-lg"
            >
              <h3 className="font-mono text-primary text-sm mb-5 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, skillIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">{item}</span>
                  </motion.div>
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
