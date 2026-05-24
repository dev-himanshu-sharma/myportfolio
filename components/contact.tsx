"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      // Reset success state after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message")
      
      // Reset error state after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-primary text-sm">05</span>
            <span className="font-mono text-muted-foreground text-sm">//</span>
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          </div>
          <div className="w-24 h-0.5 bg-primary" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="font-mono text-sm text-muted-foreground mb-4">
              <span className="text-primary">{">"}</span> contact.init()
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                {"Let's"} build something amazing together
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {"I'm"} currently available for freelance work and open to discussing
                new opportunities. Whether you have a project in mind or just want
                to connect, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground uppercase mb-1">Email</div>
                  <a
                    href="mailto:hs764664@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    hs764664@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground uppercase mb-1">Location</div>
                  <span className="text-foreground">India • UTC+5:30</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <div className="font-mono text-xs text-muted-foreground uppercase mb-4">Find me on</div>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/dev-himanshu-sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/dev-himanshusharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="mailto:hs764664@gmail.com"
                  className="p-3 border border-border rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-all"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-xs text-muted-foreground uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-xs text-muted-foreground uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="font-mono text-xs text-muted-foreground uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs text-muted-foreground uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-500 bg-green-500/10 px-4 py-3 rounded-lg"
                >
                  <CheckCircle size={18} />
                  <span>Message sent successfully! {"I'll"} get back to you soon.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 bg-red-500/10 px-4 py-3 rounded-lg"
                >
                  <AlertCircle size={18} />
                  <span>{errorMessage || "Something went wrong. Please try again."}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm tracking-wider hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
