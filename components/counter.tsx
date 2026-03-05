'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export default function Counter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}
