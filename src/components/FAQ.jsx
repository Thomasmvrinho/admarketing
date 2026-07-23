import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    q: "Comment fonctionne l'apport d'affaires ?",
    a: "L'apport d'affaires consiste à mettre en relation votre entreprise avec des prospects B2B qualifiés, correspondant précisément à votre cible. Nous activons notre réseau et une prospection ciblée pour identifier les bonnes opportunités, puis nous les qualifions avant de vous les transmettre. Notre rémunération combine une part fixe maîtrisée et une commission au succès : nos intérêts restent alignés sur vos résultats.",
    link: { label: "Découvrir l'apport d'affaires", href: '/#apport-affaires' },
  },
  {
    q: "Combien coûte votre accompagnement ?",
    a: "Chaque mission étant sur-mesure, le tarif dépend de votre secteur, de votre cible et du volume souhaité. Nous fonctionnons sur devis, avec des modalités claires définies au démarrage et formalisées par écrit, sans coût caché. En apport d'affaires, la rémunération associe généralement une part fixe et une commission au succès.",
    link: { label: "Combien coûte un apporteur d'affaires ?", href: '/blog/combien-coute-apporteur-affaires' },
  },
  {
    q: "Quels secteurs d'activité couvrez-vous ?",
    a: "Nous intervenons en B2B dans de nombreux secteurs : services aux entreprises, industrie et BTP, tech et SaaS, immobilier, finance et bien d'autres. Notre méthode s'adapte à chaque marché, en partant toujours de votre offre et de vos cibles. Votre secteur n'y figure pas ? Nous activons une prospection dédiée à votre activité.",
  },
  {
    q: "Comment sont structurées vos formations ?",
    a: "Nos formations sont sur-mesure et précédées d'un diagnostic de vos équipes et de vos enjeux. Elles combinent apports structurés, mises en situation concrètes et accompagnement personnalisé, en présentiel, en distanciel ou en format hybride selon vos besoins. Un suivi post-formation permet d'ancrer durablement les acquis.",
    link: { label: "En savoir plus sur la formation commerciale", href: '/blog/formation-commerciale-entreprise' },
  },
  {
    q: "Sous quel délai peut-on voir des résultats ?",
    a: "Cela dépend de votre point de départ et de votre marché. En apport d'affaires, les premières mises en relation qualifiées interviennent progressivement dès les premières semaines, le temps d'activer le réseau et de valider chaque contact. Pour le développement commercial, les effets structurels (pipeline plus lisible, process partagés, outils opérationnels) se consolident généralement sur le premier trimestre. Nous définissons des indicateurs de suivi dès le départ pour objectiver la progression.",
  },
  {
    q: "Proposez-vous des engagements sur les résultats ?",
    a: "Aucun prestataire sérieux ne peut garantir un résultat commercial, qui dépend aussi de votre offre et de votre marché. En revanche, nous partageons le risque : notre rémunération en apport d'affaires comprend une part au succès, nous ne gagnons donc pleinement que lorsque vous obtenez des résultats. Nous fixons ensemble des objectifs et des indicateurs pour piloter la collaboration en toute transparence.",
    link: { label: "Le contrat d'apport d'affaires expliqué", href: '/blog/contrat-apport-affaires' },
  },
  {
    q: "Comment se passe le premier échange ?",
    a: "Le premier échange est un appel ou une réunion, gratuit et sans engagement (30 à 45 minutes). Nous prenons le temps de comprendre votre activité, vos enjeux et vos objectifs. Nous revenons ensuite vers vous rapidement avec une proposition adaptée à votre contexte.",
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
          <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">FAQ</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">Questions fréquentes</h2>
          <div className="mx-auto w-16 h-px bg-gold/40" />
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} className="rounded-2xl overflow-hidden bg-ink-soft border border-white/10 hover:border-gold/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
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
                      <div className="w-full h-px mb-4 bg-white/10" />
                      <p className="font-inter text-white/50 text-sm leading-relaxed">{faq.a}</p>
                      {faq.link && (
                        <a href={faq.link.href}
                          className="inline-flex items-center gap-1.5 mt-4 font-inter font-semibold text-sm text-gold hover:text-gold-deep transition-colors">
                          {faq.link.label}
                          <ArrowRight size={14} strokeWidth={2.25} />
                        </a>
                      )}
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
