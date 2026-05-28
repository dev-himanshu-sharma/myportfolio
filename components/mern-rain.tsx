"use client"

import type { CSSProperties } from "react"

const items = [
  { left: "3%", delay: "0s", duration: "4.2s", label: "MongoDB", color: "#22c55e" },
  { left: "10%", delay: "0.6s", duration: "4.8s", label: "Express", color: "#9ca3af" },
  { left: "17%", delay: "0.2s", duration: "4.1s", label: "React", color: "#38bdf8" },
  { left: "24%", delay: "1s", duration: "4.9s", label: "Node", color: "#16a34a" },
  { left: "31%", delay: "0.4s", duration: "4.4s", label: "MongoDB", color: "#22c55e" },
  { left: "39%", delay: "1.4s", duration: "5s", label: "Express", color: "#9ca3af" },
  { left: "47%", delay: "0.3s", duration: "4.3s", label: "React", color: "#38bdf8" },
  { left: "55%", delay: "1.1s", duration: "4.7s", label: "Node", color: "#16a34a" },
  { left: "63%", delay: "0.5s", duration: "4.2s", label: "MongoDB", color: "#22c55e" },
  { left: "71%", delay: "1.6s", duration: "4.8s", label: "Express", color: "#9ca3af" },
  { left: "79%", delay: "0.1s", duration: "4.1s", label: "React", color: "#38bdf8" },
  { left: "88%", delay: "1.3s", duration: "4.6s", label: "Node", color: "#16a34a" },
]

export function MernRain() {
  return (
    <div className="mern-rain-layer" aria-hidden="true">
      {items.map((item, index) => (
        <span
          key={`mern-${index}`}
          className="mern-drop"
          style={
            {
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.duration,
              borderColor: `${item.color}80`,
              color: item.color,
            } as CSSProperties
          }
        >
          {item.label}
        </span>
      ))}
    </div>
  )
}
