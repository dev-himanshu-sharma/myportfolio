"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "MERN Chat App",
    description: "A real-time chat application built with the MERN stack featuring user authentication, private messaging, group chats, and real-time notifications using Socket.io.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    liveUrl: "https://mern-chatapp-umber.vercel.app/",
    githubUrl: "https://github.com/dev-himanshu-sharma",
    featured: true,
  },
  {
    title: "MERN Auth System",
    description: "A complete authentication system with secure login, registration, password reset, email verification, and JWT-based session management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    liveUrl: null,
    githubUrl: "https://github.com/dev-himanshu-sharma",
    featured: true,
  },
  {
    title: "DevForge",
    description: "A developer tools platform and future startup project. Building the next generation of developer productivity tools and resources.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://devforge-weld.vercel.app/",
    githubUrl: "https://github.com/dev-himanshu-sharma",
    featured: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-primary text-sm">03</span>
            <span className="font-mono text-muted-foreground text-sm">//</span>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>
          <div className="w-24 h-0.5 bg-primary" />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 md:p-8 border border-border bg-card hover:border-primary transition-all rounded-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left - Content */}
                  <div className="flex-1 space-y-4">
                    {/* Project Index */}
                    <div className="font-mono text-xs text-muted-foreground">
                      <span className="text-primary">{`0${index + 1}`}</span>
                      <span className="mx-2">//</span>
                      <span>{project.featured ? "FEATURED" : "PROJECT"}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right - Links */}
                  <div className="flex md:flex-col gap-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all rounded"
                      >
                        <ExternalLink size={16} />
                        <span>LIVE</span>
                      </Link>
                    )}
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-border text-muted-foreground font-mono text-sm hover:border-primary hover:text-primary transition-all rounded"
                    >
                      <Github size={16} />
                      <span>CODE</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="https://github.com/dev-himanshu-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>View more on GitHub</span>
            <ExternalLink size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
