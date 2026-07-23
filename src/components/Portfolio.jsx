import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'

const projects = [
  { title: 'Thomasmvrinho', tags: ['Développement commercial', 'Création de site internet'], img: `${import.meta.env.BASE_URL}projet1.png`, link: 'https://mon-projet-omega-one.vercel.app/' },
  { title: 'Leggett Immobilier', tags: ["Apport d'Affaires", 'Immobilier'], img: `${import.meta.env.BASE_URL}leggett.png`, contain: true, bg: '#ffffff' },
  { title: 'Radical', tags: ["Apport d'Affaires", 'Dératisation'], img: `${import.meta.env.BASE_URL}radical.png` },
  { title: 'Evidence Assurances', tags: ["Apport d'Affaires", 'Développement commercial', 'Courtier en assurance'], img: `${import.meta.env.BASE_URL}evidence.png`, contain: true, bg: '#ffffff' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold-deep mb-3 block">Cas Clients</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-ink mb-4">Quelques-unes de nos réalisations</h2>
          <div className="mx-auto w-16 h-px bg-gold/50" />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i}
              className="group relative rounded-2xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -5, boxShadow: '0 20px 55px rgba(0,0,0,0.3)' }}
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.2)', border: '1px solid rgba(212,175,55,0.15)' }}>
              <div className="relative overflow-hidden h-52" style={{ background: p.bg || 'transparent' }}>
                <img src={p.img} alt={p.title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${p.contain ? `object-contain${p.noPad ? '' : ' p-6'}` : 'object-cover'}`}
                  loading="lazy" />
                {p.link && (
                  <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <motion.a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full font-inter font-semibold text-sm bg-gold text-ink transition-colors duration-300 hover:bg-gold-deep flex items-center gap-2"
                      whileHover={{ scale: 1.06 }}>
                      <ExternalLink size={15} />Voir le cas client
                    </motion.a>
                  </div>
                )}
              </div>
              <div className="p-5 bg-ink-soft flex-1">
                <h3 className="font-grotesk font-bold text-white mb-3">{p.title}</h3>
                <div className="flex flex-col gap-2 items-start">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full font-inter text-xs font-semibold"
                      style={{ background: 'rgba(212,175,55,0.12)', color: '#D4AF37' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p className="text-center mt-10 font-inter text-ink/60 text-sm italic"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          Découvrez les tarifs préférentiels de nos partenaires en nous contactant.
        </motion.p>
        <motion.div className="text-center mt-6"
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-semibold bg-gold text-ink hover:bg-gold-deep transition-colors duration-300"
            whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            Voir tous nos cas clients
            <ArrowRight size={16} strokeWidth={2.25} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
