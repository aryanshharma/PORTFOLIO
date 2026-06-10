import { useEffect, useRef } from 'react'

function Particles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particleCount = 30
    const colors = ['#6366f1', '#a855f7', '#ec4899', '#6366f1']

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      
      const size = Math.random() * 3 + 1
      const left = Math.random() * 100
      const delay = Math.random() * 20
      const duration = Math.random() * 15 + 15
      const color = colors[Math.floor(Math.random() * colors.length)]

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        background: ${color};
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
      `
      
      container.appendChild(particle)
    }

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return <div className="particles-container" ref={containerRef}></div>
}

export default Particles
