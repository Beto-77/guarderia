import { useEffect, useRef } from 'react'
import './SnowfallAnimation.css'

export default function SnowfallAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Crear copos de nieve
    const container = containerRef.current
    if (!container) return

    const createSnowflake = () => {
      const snowflake = document.createElement('div')
      snowflake.className = 'snowflake'
      snowflake.textContent = '❄'
      
      const left = Math.random() * window.innerWidth
      const delay = Math.random() * 0.5
      const duration = 10 + Math.random() * 10
      
      snowflake.style.left = left + 'px'
      snowflake.style.animationDelay = delay + 's'
      snowflake.style.animationDuration = duration + 's'
      
      container.appendChild(snowflake)
      
      setTimeout(() => snowflake.remove(), duration * 1000)
    }

    // Crear copos continuamente
    const snowInterval = setInterval(createSnowflake, 300)

    // Efecto de cursor con luces
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return
      
      const x = e.clientX
      const y = e.clientY
      
      cursorRef.current.style.left = x + 'px'
      cursorRef.current.style.top = y + 'px'

      // Crear partículas de luz que siguen al cursor
      const particle = document.createElement('div')
      particle.className = 'cursor-light'
      particle.style.left = x + 'px'
      particle.style.top = y + 'px'
      
      const hue = Math.random() * 60 + 120 // Colores entre verde y cian
      particle.style.background = `hsl(${hue}, 100%, 50%)`
      
      container.appendChild(particle)
      
      setTimeout(() => particle.remove(), 800)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(snowInterval)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className="snowfall-container" />
      <div ref={cursorRef} className="cursor-glow" />
    </>
  )
}
