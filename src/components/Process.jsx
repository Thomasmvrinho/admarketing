import { motion } from 'framer-motion'
import { Search, Map, Settings, Trophy } from 'lucide-react'

const steps = [
  { num: '01', icon: Search, title: 'Analyse & Diagnostic', desc: "Nous étudions votre activité, vos objectifs et votre marché pour établir une stratégie commerciale parfaitement adaptée." },
  { num: '02', icon: Map, title: 'Stratégie & Plan', desc: "Nous définissons ensemble les meilleures actions à mettre en place pour atteindre vos objectifs de croissance." },
  { num: '03', icon: Settings, title: 'Mise en Œuvre', desc: "Nos experts déploient le plan d'action et assurent le suivi opérationnel rigoureux de chaque étape." },
  { num: '04', icon: Trophy, title: 'Résultats & ROI', desc: "Nous mesurons les résultats et optimisons continuellement la stratégie pour maximiser votre retour sur investissement." },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Notre méthode</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">Un processus éprouvé, des résultats concrets</h2>
          <div className="mx-auto w-16 h-px bg-gold/40" />
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-10">
          <div className="hidden md:block absolute top-8 left-[14%] right-[14%] h-px bg-gold/40" />
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
            <motion.div key={step.num}
              className="relative flex flex-col items-center text-center z-10"
              initial={{ opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center font-grotesk font-bold text-lg text-ink mb-5 bg-gold">
                {step.num}
              </div>
              <Icon className="w-7 h-7 text-gold mb-3" strokeWidth={1.75} />
              <h3 className="font-syne font-bold text-lg text-white mb-3">{step.title}</h3>
              <p className="font-inter text-white/45 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
