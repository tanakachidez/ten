"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight"
  delay?: number
}

export function ScrollAnimation({ children, className = "", animation = "fadeIn", delay = 0 }: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, isMounted])

  // Prevent hydration mismatch by not applying animations until mounted
  if (!isMounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  const animationClasses = {
    fadeIn: "opacity-0 translate-y-8 transition-all duration-700 ease-out",
    slideUp: "opacity-0 translate-y-12 transition-all duration-700 ease-out",
    slideLeft: "opacity-0 translate-x-8 transition-all duration-700 ease-out",
    slideRight: "opacity-0 -translate-x-8 transition-all duration-700 ease-out",
  }

  const visibleClasses = {
    fadeIn: "opacity-100 translate-y-0",
    slideUp: "opacity-100 translate-y-0",
    slideLeft: "opacity-100 translate-x-0",
    slideRight: "opacity-100 translate-x-0",
  }

  return (
    <div ref={ref} className={cn(animationClasses[animation], isVisible && visibleClasses[animation], className)}>
      {children}
    </div>
  )
}
