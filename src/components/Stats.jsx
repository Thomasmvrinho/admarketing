import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedCounter({ to, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * to))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(to)
    }
    requestAnimationFrame(step)
  }, [inView, to, duration])
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { to: 18, suffix: '+', label: 'Clients accompagnés' },
  { to: 7, suffix: '+', label: 'Partenaires actifs' },
  { to: 1, suffix: ' an', label: "D'expérience" },
  { to: 98, suffix: '%', label: 'Taux de satisfaction' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,162,39,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,162,39,0.1) 0%, transparent 50%)' }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} className="text-center"
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.13 }}>
              <div className="font-grotesk font-bold text-5xl md:text-6xl mb-2"
                style={{ background: 'linear-gradient(135deg, #C9A227, #D8B64A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                <AnimatedCounter to={stat.to} suffix={stat.suffix} />
              </div>
              <div className="font-inter text-white/45 font-medium text-sm uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
