import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Essentiel',
    desc: "Apport d'affaires — Entrée",
    price: 'Sur devis',
    features: ['Mise en relation qualifiée', 'Suivi des opportunités', 'Reporting mensuel', 'Support dédié', 'Commission négociable'],
    cta: 'Nous contacter',
    highlight: false,
  },
  {
    name: 'Premium',
    desc: 'Accompagnement complet 360°',
    price: 'Sur devis',
    features: ['Mise en relation qualifiée', 'Suivi des opportunités', 'Reporting mensuel', 'Support dédié', 'Commission négociable', 'Support prioritaire 24/7'],
    cta: 'Nous contacter',
    highlight: true,
    badge: 'Recommandé',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Nos Offres</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">Des offres adaptées à vos ambitions</h2>
          <div className="mx-auto w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37, #E5C158)' }} />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-7 items-stretch max-w-4xl mx-auto w-full">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} className="h-full"
              initial={{ opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.14 }}
              whileHover={{ y: -8 }}>
              {plan.highlight ? (
                <div className="relative rounded-2xl p-[2px] h-full"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)', boxShadow: '0 16px 60px rgba(212,175,55,0.25)' }}>
                  {plan.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-inter font-bold text-xs text-ink z-10"
                      style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)' }}>
                      {plan.badge}
                    </span>
                  )}
                  <PlanCard plan={plan} highlighted />
                </div>
              ) : (
                <div className="rounded-2xl h-full"
                  style={{ border: '1px solid rgba(212,175,55,0.2)', background: '#111111' }}>
                  <PlanCard plan={plan} highlighted={false} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan, highlighted }) {
  return (
    <div className="rounded-[14px] p-8 flex flex-col h-full"
      style={{ background: highlighted ? '#111111' : 'transparent' }}>
      <h3 className="font-grotesk font-bold text-xl text-white mb-1">{plan.name}</h3>
      <p className="font-inter text-white/40 text-sm mb-5">{plan.desc}</p>
      <div className="mb-8">
        <span className="font-inter text-xs font-medium text-white/30 uppercase tracking-widest block mb-1">Tarif</span>
        <a href="#contact" className="font-grotesk font-bold text-3xl text-white hover:text-gold transition-colors duration-200">{plan.price}</a>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3 font-inter text-sm text-white/65">
            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: highlighted ? 'linear-gradient(135deg, #D4AF37, #E5C158)' : 'rgba(212,175,55,0.15)' }}>
              <Check size={11} strokeWidth={3} color={highlighted ? '#050505' : '#D4AF37'} />
            </div>
            {f}
          </li>
        ))}
      </ul>
      <motion.button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full py-3.5 rounded-xl font-inter font-semibold text-sm transition-all duration-300 text-center block"
        style={highlighted
          ? { background: 'linear-gradient(135deg, #D4AF37, #E5C158)', color: '#050505' }
          : { border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37', background: 'transparent' }}
        whileHover={{ scale: 1.02, ...(highlighted ? { boxShadow: '0 0 24px rgba(212,175,55,0.4)' } : {}) }}
        whileTap={{ scale: 0.98 }}>
        {plan.cta}
      </motion.button>
    </div>
  )
}
