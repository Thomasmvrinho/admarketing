import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Thierry Moutou',
    role: 'Gérant, Radical',
    text: "Adrien Lafarge me donne entière satisfaction. Des apports d'affaires parfaitement qualifiés. Quel plaisir !",
    initials: 'TM',
    stars: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const multiple = testimonials.length > 1
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-24 bg-ink-soft">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Témoignages</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">Ce que disent nos clients</h2>
          <div className="mx-auto w-16 h-px bg-gold/40" />
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div key={current}
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.38 }}
                className="rounded-2xl p-8 md:p-10"
                style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(18px)', border: '1px solid rgba(212,175,55,0.15)' }}>
                <div className="flex gap-1 mb-5">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={16} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <p className="font-inter text-white/75 text-base md:text-lg leading-relaxed mb-7 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-gold/15 border border-gold/30">
                    <span className="font-grotesk font-bold text-gold text-sm">{t.initials}</span>
                  </div>
                  <div>
                    <div className="font-grotesk font-bold text-white text-sm">{t.name}</div>
                    <div className="font-inter text-white/45 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {multiple && (
            <div className="flex items-center justify-center gap-6 mt-8">
              <motion.button onClick={prev}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/40 transition-colors"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Précédent">
                <ChevronLeft size={18} />
              </motion.button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, j) => (
                  <button key={j} onClick={() => setCurrent(j)}
                    className="rounded-full transition-all duration-300"
                    style={{ width: j === current ? 26 : 8, height: 8, background: j === current ? '#D4AF37' : 'rgba(255,255,255,0.18)' }}
                    aria-label={`Témoignage ${j + 1}`} />
                ))}
              </div>
              <motion.button onClick={next}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/40 transition-colors"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Suivant">
                <ChevronRight size={18} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
