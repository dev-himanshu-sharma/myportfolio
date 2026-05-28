"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    location: "Remote",
    period: "2023 — Present",
    description: [
      "Building full-stack web applications using the MERN stack for various clients",
      "Developing real-time features using Socket.io for chat and notification systems",
      "Implementing secure authentication systems with JWT and OAuth",
      "Deploying and maintaining applications on Vercel and other cloud platforms",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Vercel"],
  },
  {
    title: "Founder & Developer",
    company: "DevForge",
    companyUrl: "https://devforge-weld.vercel.app/",
    location: "India",
    period: "2024 — Present",
    description: [
      "Conceptualizing and building developer productivity tools",
      "Creating a platform to help developers streamline their workflow",
      "Handling full product development from design to deployment",
      "Building a community around developer tools and resources",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Self-Taught Developer",
    company: "Independent Learning",
    location: "India",
    period: "2022 — 2023",
    description: [
      "Learned web development fundamentals through online courses and documentation",
      "Built multiple projects to solidify understanding of HTML, CSS, and JavaScript",
      "Progressed to React.js and Node.js to become a full-stack developer",
      "Contributed to open-source projects on GitHub",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30 relative">
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
            <span className="font-mono text-primary text-sm">04</span>
            <span className="font-mono text-muted-foreground text-sm">//</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          </div>
          <div className="w-24 h-0.5 bg-primary" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-0 w-3 h-3 -translate-x-1/2 bg-primary rounded-full border-2 border-background" />

                {/* Content Card */}
                <div className="p-6 border border-border bg-card rounded-lg hover:border-primary transition-all">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="text-primary">{exp.company}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground font-mono">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
