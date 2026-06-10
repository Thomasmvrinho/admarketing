import { motion } from 'framer-motion'

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

const sparkles = [
  { top: '20%', left: '6%', delay: 0 },
  { top: '30%', right: '10%', delay: 0.7 },
  { top: '65%', left: '10%', delay: 1.2 },
  { top: '70%', right: '8%', delay: 1.8 },
  { top: '45%', left: '20%', delay: 0.9 },
]

function MacMockup() {
  return (
    <div className="relative w-full select-none">
      {/* Screen frame */}
      <div style={{
        background: 'linear-gradient(160deg, #3a3a3a, #1c1c1c)',
        borderRadius: '14px 14px 0 0',
        padding: '14px 14px 10px',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 0 60px rgba(212,175,55,0.08)',
      }}>
        {/* Camera */}
        <div className="flex justify-center mb-2">
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2a2a2a', border: '1px solid #3a3a3a' }} />
        </div>
        {/* White screen content */}
        <div style={{ background: '#ffffff', borderRadius: '4px', overflow: 'hidden' }}>
          {/* Browser top bar */}
          <div style={{
            background: '#f1f3f4',
            padding: '7px 10px',
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <div style={{ display: 'flex', gap: '5px', flexShrink: 0 }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
            </div>
            <div style={{
              flex: 1,
              background: 'white',
              borderRadius: '20px',
              padding: '3px 10px',
              border: '1px solid #dadce0',
              fontSize: '9px',
              color: '#bbb',
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
            }}>
              &nbsp;
            </div>
          </div>
          {/* Page content — white with logo centered */}
          <div style={{
            background: '#ffffff',
            minHeight: '320px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 32px',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}ad-logo.png`}
              alt="ADMARKETING"
              style={{ maxWidth: '98%', maxHeight: '280px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Hinge */}
      <div style={{
        background: 'linear-gradient(180deg, #1c1c1c, #252525)',
        height: '10px',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: '28%',
          right: '28%',
          height: '3px',
          background: '#141414',
          borderRadius: '0 0 6px 6px',
        }} />
      </div>
      {/* Base */}
      <div style={{
        background: 'linear-gradient(180deg, #252525, #1c1c1c)',
        height: '20px',
        borderRadius: '0 0 10px 10px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.7)',
        border: '1px solid rgba(255,255,255,0.04)',
        borderTop: 'none',
      }} />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-ink flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute top-[-8%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15 animate-float"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-10 animate-float-slow"
        style={{ background: 'radial-gradient(circle, #F5F5F0 0%, transparent 70%)', filter: 'blur(80px)' }} />

      {sparkles.map((s, i) => (
        <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full"
          style={{ top: s.top, left: s.left, right: s.right, background: '#D4AF37' }}
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
                style={w.gold ? { color: '#D4AF37' } : {}}
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
            ADMARKETING accompagne les entreprises dans l'apport d'affaires, la formation commerciale et le développement durable de leur chiffre d'affaires.
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
              Découvrir nos services
            </motion.a>
            <motion.a href="#contact"
              className="px-7 py-3.5 rounded-full font-inter font-semibold text-ink"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)' }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(212,175,55,0.5)' }}
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
          <MacMockup />

          <motion.div
            className="absolute -bottom-4 -left-4 md:-left-8 bg-ink-soft rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl"
            style={{ border: '1px solid rgba(212,175,55,0.25)' }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <span className="text-xl">🤝</span>
            <div>
              <div className="font-grotesk font-bold text-white text-sm">18+ clients</div>
              <div className="font-inter text-white/45 text-xs">accompagnés avec succès</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-20 -right-4 md:-right-8 bg-ink-soft rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl"
            style={{ border: '1px solid rgba(212,175,55,0.25)' }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.65 }}
          >
            <span className="text-xl">📈</span>
            <div>
              <div className="font-grotesk font-bold text-white text-sm">Augmentation du CA moyen</div>
              <div className="font-inter text-white/45 text-xs">chez nos clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
