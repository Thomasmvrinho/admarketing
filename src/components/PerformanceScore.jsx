import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Handshake, Heart, TrendingUp, Repeat } from 'lucide-react'

const leviers = [
  {
    icon: Target,
    label: 'Conversion',
    text: 'Nous affinons vos messages et votre parcours pour transformer plus de contacts en clients.',
  },
  {
    icon: Users,
    label: 'Leads',
    text: 'Nous structurons votre prospection pour alimenter un flux régulier de contacts qualifiés.',
  },
  {
    icon: Handshake,
    label: 'Conclusion des ventes',
    text: 'Nous outillons votre discours et vos relances pour accélérer la signature.',
  },
  {
    icon: Heart,
    label: 'Satisfaction',
    text: 'Nous soignons chaque étape de la relation pour renforcer la confiance de vos clients.',
  },
  {
    icon: TrendingUp,
    label: 'Rentabilité / ROI',
    text: 'Nous concentrons vos efforts commerciaux là où ils génèrent le plus de valeur.',
  },
  {
    icon: Repeat,
    label: 'Fidélisation',
    text: 'Nous mettons en place le suivi qui transforme un client en relation durable.',
  },
]

const bullets = [
  'Ce que nous analysons dans votre développement commercial',
  'Les axes que nous optimisons ensemble',
  'Un pilotage concret, sans promesse chiffrée abstraite',
]

export default function PerformanceScore() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: '#0A0A0B', borderTop: '1px solid rgba(212,175,55,0.08)' }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="md:sticky md:top-32">
          <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-4 block">Performance</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            Nous pilotons votre performance commerciale<br /><span className="text-gold">sur 6 leviers</span>
          </h2>
          <div className="w-16 h-px bg-gold/40 mb-6" />
          <p className="font-inter text-white/50 text-sm leading-relaxed mb-8">
            Nous analysons et optimisons votre développement commercial sur les 6 axes qui déterminent la santé de votre activité. Pas un score attribué, mais un travail concret sur ce qui fait avancer vos ventes.
          </p>
          <ul className="space-y-2.5 mb-10 list-none">
            {bullets.map((b, i) => (
              <motion.li key={i}
                initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                className="flex items-start gap-2.5 font-inter text-sm text-white/60">
                <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0 mt-2" /> {b}
              </motion.li>
            ))}
          </ul>
          <motion.button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="inline-flex items-center gap-2 font-inter font-semibold text-sm text-white/60 border border-white/15 px-6 py-3 rounded-xl hover:border-gold/40 hover:text-gold transition-colors">
            Voir nos réalisations →
          </motion.button>
        </motion.div>

        {/* Right - Qualitative levers grid */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4">
          {leviers.map((l, i) => {
            const Icon = l.icon
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="bg-ink-soft border border-white/10 rounded-xl p-5 hover:border-gold/30 transition-colors">
                <Icon className="w-5 h-5 text-gold mb-3" strokeWidth={1.75} />
                <h3 className="font-grotesk font-semibold text-sm text-white mb-1.5">{l.label}</h3>
                <p className="font-inter text-xs text-white/50 leading-relaxed">{l.text}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
