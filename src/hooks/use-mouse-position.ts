import { useState, useEffect, useCallback } from 'react'

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsMoving(true)
    
    // Clear moving state after a delay
    const timer = setTimeout(() => setIsMoving(false), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [updateMousePosition])

  return { ...mousePosition, isMoving }
}
