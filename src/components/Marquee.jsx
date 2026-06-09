import { motion } from 'framer-motion'

const items = [
  "Apport d'Affaires", 'Formation Commerciale', 'DÃ©veloppement Commercial',
  'Mise en Relation', 'StratÃ©gie', 'Croissance', 'Partenariats', 'Performance', 'Prospection',
  "Apport d'Affaires", 'Formation Commerciale', 'DÃ©veloppement Commercial',
  'Mise en Relation', 'StratÃ©gie', 'Croissance', 'Partenariats', 'Performance', 'Prospection',
]

export default function Marquee() {
  return (
    <div className="bg-[#111111] py-5 overflow-hidden border-y border-white/5">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        style={{ width: 'max-content' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-syne font-semibold uppercase tracking-widest text-sm text-white/30">
              {item}
            </span>
            <span className="text-gold text-base select-none">Â·</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
