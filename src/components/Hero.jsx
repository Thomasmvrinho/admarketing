import { motion } from 'framer-motion'

const words = [
  { text: 'DÃ©veloppez', gold: false },
  { text: 'votre', gold: false },
  { text: 'activitÃ©', gold: true },
  { text: 'avec', gold: false },
  { text: 'des', gold: false },
  { text: 'partenaires', gold: false },
  { text: 'de', gold: false },
  { text: 'confiance', gold: true },
]

const sparkles = [
  { top: '20%', left: '6%', delay: 0 },
  { top: '30%', right: '10%', delay: 0.7 },
  { top: '65%', left: '10%', delay: 1.2 },
  { top: '70%', right: '8%', delay: 1.8 },
  { top: '45%', left: '20%', delay: 0.9 },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-ink flex items-center pt-28 pb-16 overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-[-8%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15 animate-float"
        style={{ background: 'radial-gradient(circle, #c9a227 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-10 animate-float-slow"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)', filter: 'blur(80px)' }} />

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full"
          style={{ top: s.top, left: s.left, right: s.right, background: '#c9a227' }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
          transition={{ duration: 2.8, delay: s.delay, repeat: Infinity, repeatDelay: 1 }} />
      ))}

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-syne text-xs text-gold font-semibold uppercase tracking-widest">
              Partenaire de votre croissance
            </span>
          </motion.div>

          <h1 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.12] text-white mb-6">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                style={w.gold ? { color: '#c9a227' } : {}}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {w.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="font-inter text-white/55 text-lg mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            ADMARKETING accompagne les entreprises dans l'apport d'affaires, la formation commerciale et le dÃ©veloppement durable de leur chiffre d'affaires.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.a href="#services"
              className="px-7 py-3.5 rounded-full font-inter font-semibold text-gold border-2 border-gold hover:bg-gold hover:text-ink transition-all duration-300"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              DÃ©couvrir nos services
            </motion.a>
            <motion.a href="#contact"
              className="px-7 py-3.5 rounded-full font-inter font-semibold text-ink"
              style={{ background: 'linear-gradient(135deg, #c9a227, #D8B64A)' }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(201,162,39,0.5)' }}
              whileTap={{ scale: 0.97 }}>
              Prendre contact
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(201,162,39,0.2)' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(201,162,39,0.12), rgba(255,255,255,0.04))' }} />
            <img
              src="https://placehold.co/800x500/111111/c9a227?text=ADMARKETING"
              alt="ADMARKETING â€” DÃ©veloppement Commercial"
              className="w-full h-auto relative z-10 opacity-90"
              loading="lazy"
            />
          </div>

          <motion.div
            className="absolute -bottom-4 -left-4 md:-left-8 bg-ink-soft rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl"
            style={{ border: '1px solid rgba(201,162,39,0.25)' }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <span className="text-xl">ðŸ¤</span>
            <div>
              <div className="font-grotesk font-bold text-white text-sm">200+ clients</div>
              <div className="font-inter text-white/45 text-xs">accompagnÃ©s avec succÃ¨s</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-4 md:-right-8 bg-ink-soft rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl"
            style={{ border: '1px solid rgba(201,162,39,0.25)' }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.65 }}
          >
            <span className="text-xl">ðŸ“ˆ</span>
            <div>
              <div className="font-grotesk font-bold text-white text-sm">+40% CA moyen</div>
              <div className="font-inter text-white/45 text-xs">chez nos clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
