import { motion } from 'framer-motion'
import { Check, Target, Handshake, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    Icon: Target,
    title: 'Un périmètre défini avec vous',
    desc: "Nous cadrons précisément vos objectifs, votre cible et vos besoins avant tout chiffrage. Vous savez exactement ce que vous financez.",
  },
  {
    Icon: Handshake,
    title: 'Un tarif aligné sur vos résultats',
    desc: "Notre rémunération combine une part fixe maîtrisée et une part au succès. Nos intérêts sont alignés sur votre croissance.",
  },
  {
    Icon: ShieldCheck,
    title: 'Zéro engagement caché',
    desc: "Des modalités transparentes, définies dès le départ et formalisées par écrit. Vous gardez la main sur le rythme.",
  },
]

const included = [
  'Un devis clair et détaillé, sans surprise',
  'Un interlocuteur dédié tout au long de la mission',
  'Un reporting et des points de suivi réguliers',
  'Une rémunération alignée sur vos résultats',
  'Des modalités formalisées par écrit',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-ink">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Nos Offres</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">Un accompagnement sur-mesure, un tarif clair</h2>
          <div className="mx-auto w-16 h-px bg-gold/40 mb-6" />
          <p className="font-inter text-white/50 text-base leading-relaxed max-w-2xl mx-auto">
            Chaque mission est unique. Plutôt qu'une grille figée, nous construisons un devis adapté à vos objectifs, votre secteur et votre budget.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Pourquoi un devis sur-mesure */}
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <motion.div key={r.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-ink-soft border border-white/10 transition-colors duration-300 hover:border-gold/30">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gold/10">
                  <r.Icon size={20} className="text-gold" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-grotesk font-bold text-white text-base mb-1.5">{r.title}</h3>
                  <p className="font-inter text-white/45 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ce qui est toujours inclus + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-ink-soft border border-gold/40 p-8 lg:p-10">
            <h3 className="font-grotesk font-bold text-xl text-white mb-1.5">Ce qui est toujours inclus</h3>
            <p className="font-inter text-white/40 text-sm mb-8">Quel que soit votre accompagnement.</p>
            <ul className="space-y-4 mb-9">
              {included.map((f) => (
                <li key={f} className="flex items-start gap-3 font-inter text-sm text-white/75">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gold">
                    <Check size={11} strokeWidth={3} className="text-ink" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-4 rounded-xl font-inter font-semibold text-sm bg-gold text-ink transition-colors duration-300 hover:bg-gold-deep"
              whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              Demander un devis
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
