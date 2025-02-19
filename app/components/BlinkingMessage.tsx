'use client'

import { useEffect, useState } from 'react'

export default function BlinkingMessage({ onComplete }: { onComplete: () => void }) {
  const [hasMounted, setHasMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [showUnderline, setShowUnderline] = useState(false)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    // Start underline animation after 2.5 seconds (after blinking)
    setTimeout(() => setShowUnderline(true), 2500)
    // Start fade out
    setTimeout(() => setIsFading(true), 5000)
    // Complete fade out and trigger social links
    setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 6000)
  }, [onComplete])

  if (!hasMounted) return null

  return (
    <div 
      className={`text-lg font-bold relative transition-opacity duration-1000 
        ${isFading ? 'opacity-0' : 'opacity-100'}
        ${!isVisible ? 'hidden' : ''}`}
    >
      <div className="animate-blink">
        Click anywhere to explore
      </div>
      <div 
        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] transition-all duration-1000 ${showUnderline ? 'w-full' : 'w-0'}`}
      />
    </div>
  )
} 