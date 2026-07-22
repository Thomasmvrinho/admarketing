import { motion } from 'framer-motion'
import { Check, Handshake, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react'

const services = [
  {
    Icon: Handshake,
    title: "Apport d'Affaires",
    desc: "Nous mettons en relation votre entreprise avec des prospects qualifiés, générant des opportunités commerciales concrètes, mesurables et durables.",
    features: ['Prospects qualifiés', 'Réseau étendu', 'Rémunération au résultat', 'Suivi personnalisé'],
    badge: 'Sur devis',
    href: '#apport-affaires',
  },
  {
    Icon: GraduationCap,
    title: 'Formation Commerciale',
    desc: "Des formations sur-mesure pour développer les compétences de vos équipes commerciales et maximiser durablement vos performances de vente.",
    features: ['Formations sur-mesure', 'Coaching individuel', 'Supports pédagogiques', 'Recommandations stratégiques'],
    badge: 'Sur devis',
    href: '#formation-commerciale',
  },
  {
    Icon: TrendingUp,
    title: 'Développement Commercial',
    desc: "Nous élaborons et déployons votre stratégie commerciale pour accélérer votre croissance, conquérir de nouveaux marchés et fidéliser vos clients.",
    features: ['Audit commercial', 'Plan stratégique', 'Accompagnement terrain', 'Reporting mensuel'],
    badge: 'Sur devis',
    href: '#developpement-commercial',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold-deep mb-3 block">Nos Services</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl tracking-tight text-ink mb-4">Ce que nous faisons pour vous</h2>
          <div className="mx-auto w-16 h-px bg-gold/50" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <motion.div key={s.title}
              className="group bg-white rounded-2xl p-8 flex flex-col border border-ink/5 shadow-soft cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:border-gold/30"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => { window.location.hash = s.href }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-ink transition-transform duration-300 group-hover:scale-105">
                <s.Icon size={24} className="text-gold" strokeWidth={1.75} />
              </div>
              <h3 className="font-grotesk font-bold text-xl text-ink mb-3">{s.title}</h3>
              <p className="font-inter text-ink/55 text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2.5 mb-7">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 font-inter text-sm text-ink/65">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-gold">
                      <Check size={10} color="#0A0A0B" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-1">
                <span className="inline-flex items-center gap-1.5 font-inter font-semibold text-sm text-ink/70 group-hover:text-ink transition-colors">
                  En savoir plus
                  <ArrowRight size={15} strokeWidth={2.25} className="text-gold-deep transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
