import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Users, TrendingUp } from 'lucide-react'

const HeroNetwork3D = lazy(() => import('./HeroNetwork3D'))

const words = [
  { text: 'Développez', gold: false },
  { text: 'votre', gold: false },
  { text: 'activité', gold: true },
  { text: 'avec', gold: false },
  { text: 'des', gold: false },
  { text: 'partenaires', gold: false },
  { text: 'de', gold: false },
  { text: 'confiance', gold: true },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] bg-ink flex items-center pt-24 pb-16 overflow-hidden">
      {/* Halo ambiant unique, tres discret, profondeur sans surbrillance */}
      <div className="absolute top-[-12%] right-[-8%] w-[560px] h-[560px] rounded-full opacity-[0.09] animate-float pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 68%)', filter: 'blur(90px)' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-gold/25 bg-gold/[0.07] mb-8"
          >
            <span className="font-syne text-[11px] text-gold font-semibold uppercase tracking-[0.2em]">
              Partenaire de votre croissance
            </span>
          </motion.div>

          <h1 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-tight text-white mb-6">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.28em]"
                style={w.gold ? { color: '#D4AF37' } : {}}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {w.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="font-inter text-white/55 text-lg mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            ADMARKETING accompagne les entreprises dans l'apport d'affaires, la formation commerciale et le développement commercial, pour une croissance durable de leur chiffre d'affaires.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25 }}
          >
            <motion.a href="#contact"
              className="px-7 py-3.5 rounded-full font-inter font-semibold bg-gold text-ink transition-colors duration-300 hover:bg-gold-deep"
              whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              Prendre contact
            </motion.a>
            <motion.a href="#services"
              className="px-7 py-3.5 rounded-full font-inter font-semibold text-white/90 border border-white/15 transition-colors duration-300 hover:border-gold/60 hover:text-gold"
              whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              Découvrir nos services
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full h-[360px] md:h-[440px]">
            <Suspense fallback={null}>
              <HeroNetwork3D />
            </Suspense>
          </div>

          <motion.div
            className="absolute -bottom-4 -left-4 md:-left-8 bg-ink-soft/90 backdrop-blur-md rounded-xl px-5 py-3.5 flex items-center gap-3.5 border border-white/10 shadow-dark-soft"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gold/10 flex-shrink-0">
              <Users size={18} className="text-gold" strokeWidth={2} />
            </div>
            <div>
              <div className="font-grotesk font-bold text-white text-sm">20+ clients</div>
              <div className="font-inter text-white/45 text-xs">accompagnés en 1 an</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-6 -right-4 md:-right-8 bg-ink-soft/90 backdrop-blur-md rounded-xl px-5 py-3.5 flex items-center gap-3.5 border border-white/10 shadow-dark-soft"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gold/10 flex-shrink-0">
              <TrendingUp size={18} className="text-gold" strokeWidth={2} />
            </div>
            <div>
              <div className="font-grotesk font-bold text-white text-sm">Croissance du CA</div>
              <div className="font-inter text-white/45 text-xs">mesurable chez nos clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
