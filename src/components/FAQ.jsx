import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "Comment fonctionne l'apport d'affaires ?",
    a: "L'apport d'affaires consiste à mettre en relation votre entreprise avec des prospects qualifiés correspondant à votre cible. Nous utilisons notre réseau étendu et nos outils de prospection pour identifier les meilleures opportunités. Vous ne payez qu'en cas de signature effective.",
  },
  {
    q: "Quels secteurs d'activité couvrez-vous ?",
    a: "Nous intervenons dans de nombreux secteurs : immobilier, BTP, tech, services B2B, finance, retail et bien d'autres. Notre approche est adaptée à chaque secteur avec des experts dédiés qui connaissent les spécificités de votre marché.",
  },
  {
    q: "Comment sont structurées vos formations ?",
    a: "Nos formations sont 100% sur-mesure et précédées d'un diagnostic complet de vos équipes. Elles combinent théorie, mises en situation et coaching individuel. Elles se déroulent en présentiel, en distanciel ou en format hybride selon vos besoins.",
  },
  {
    q: "Sous quel délai peut-on voir des résultats ?",
    a: "Les premiers résultats en apport d'affaires se constatent généralement dès le 2e mois. Pour le développement commercial, les effets structurels se manifestent entre 3 et 6 mois. Nous définissons des KPIs clairs dès le départ pour mesurer les progrès.",
  },
  {
    q: "Proposez-vous des engagements sur les résultats ?",
    a: "Nous travaillons sur la base d'objectifs définis ensemble et partageons le risque avec nos clients. Notre modèle de rémunération à la performance en apport d'affaires en est la meilleure preuve : nous ne sommes rémunérés que si vous signez.",
  },
  {
    q: "Comment se passe le premier échange ?",
    a: "Le premier échange est un appel ou une réunion gratuite et sans engagement de 30 à 45 minutes. Nous prenons le temps de comprendre votre activité, vos enjeux et vos objectifs. Nous vous soumettons ensuite une proposition adaptée sous 48 heures.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="py-24 bg-ink">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">FAQ</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">Questions fréquentes</h2>
          <div className="mx-auto w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37, #E5C158)' }} />
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} className="rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{ background: '#111111', border: '1px solid rgba(212,175,55,0.1)' }}>
              <button className="w-full flex items-center justify-between px-6 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span className="font-grotesk font-semibold text-white/80 pr-4 group-hover:text-gold transition-colors">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}
                  className="flex-shrink-0" style={{ color: open === i ? '#D4AF37' : 'rgba(255,255,255,0.3)' }}>
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                    <div className="px-6 pb-6">
                      <div className="w-full h-px mb-4" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.3), transparent)' }} />
                      <p className="font-inter text-white/50 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
