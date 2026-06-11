import { useEffect, useState } from 'react'
import { motion, useMotionValue, useVelocity, useTransform, useSpring } from 'framer-motion'

export default function CursorFollower() {
  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const velX = useVelocity(x)
  const velY = useVelocity(y)
  const speed = useTransform([velX, velY], ([vx, vy]) => Math.sqrt(vx ** 2 + vy ** 2))
  const rawScale = useTransform(speed, [0, 500, 2000], [1, 1.6, 2.5], { clamp: true })
  const scale = useSpring(rawScale, { stiffness: 350, damping: 28 })

  useEffect(() => {
    if (isTouch) return
    const onMove = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [isTouch])

  if (isTouch) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] rounded-full"
      style={{ width: 10, height: 10, background: '#D4AF37', top: -5, left: -5, x, y, scale }}
    />
  )
}
