"use client"

import { useEffect, useState } from "react"

export function CursorAura() {
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: -200, y: -200 })

  useEffect(() => {
    setMounted(true)

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  if (!mounted) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-20 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl transition-transform duration-200 ease-out"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  )
}
