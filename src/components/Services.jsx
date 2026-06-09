import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const services = [
  {
    emoji: '🤝',
    title: "Apport d'Affaires",
    desc: "Nous mettons en relation vos entreprises avec des prospects qualifiés, générant des opportunités commerciales concrètes, mesurables et durables.",
    features: ['Prospects qualifiés', 'Réseau étendu', 'Commissions attractives', 'Suivi personnalisé'],
    badge: 'Sur devis',
  },
  {
    emoji: '🎓',
    title: 'Formation Commerciale',
    desc: "Des formations sur-mesure pour développer les compétences de vos équipes commerciales et maximiser vos performances de vente dès le premier mois.",
    features: ['Formations sur-mesure', 'Coaching individuel', 'Supports pédagogiques', 'Certification possible'],
    badge: 'Sur devis',
  },
  {
    emoji: '📈',
    title: 'Développement Commercial',
    desc: "Nous élaborons et déployons votre stratégie commerciale pour accélérer votre croissance, conquérir de nouveaux marchés et fidéliser vos clients.",
    features: ['Audit commercial', 'Plan stratégique', 'Accompagnement terrain', 'Reporting mensuel'],
    badge: 'Sur devis',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Nos Services</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-ink mb-4">Ce que nous faisons pour vous</h2>
          <div className="mx-auto w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #C9A227, #D8B64A)' }} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <motion.div key={s.title}
              className="group bg-white rounded-2xl p-8"
              initial={{ opacity: 0, y: 38, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.14 }}
              whileHover={{ y: -7, boxShadow: '0 0 0 2px #C9A227, 0 24px 60px rgba(0,0,0,0.1)' }}
              style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                style={{ background: 'rgba(201,162,39,0.1)' }}>
                {s.emoji}
              </div>
              <h3 className="font-grotesk font-bold text-xl text-ink mb-3">{s.title}</h3>
              <p className="font-inter text-ink/55 text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2.5 mb-7">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 font-inter text-sm text-ink/65">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: '#C9A227' }}>
                      <Check size={10} color="white" strokeWidth={3} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <span className="inline-block px-4 py-1.5 rounded-full font-inter font-bold text-xs text-white"
                style={{ background: '#C9A227' }}>
                {s.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
