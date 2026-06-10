import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  { title: 'Thomasmvrinho', tags: ['Développement commercial', 'Création de site internet'], img: `${import.meta.env.BASE_URL}projet1.png`, dev: false, link: 'https://mon-projet-omega-one.vercel.app/' },
  { title: 'Leggett Immobilier', tags: ["Apport d'Affaires", 'Immobilier'], img: `${import.meta.env.BASE_URL}leggett.png`, dev: false, contain: true, bg: '#ffffff' },
  { title: 'En développement', tags: [], img: null, dev: true },
  { title: 'En développement', tags: [], img: null, dev: true },
  { title: 'En développement', tags: [], img: null, dev: true },
  { title: 'En développement', tags: [], img: null, dev: true },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Cas Clients</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-ink mb-4">Quelques-unes de nos réalisations</h2>
          <div className="mx-auto w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37, #E5C158)' }} />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i}
              className="group relative rounded-2xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -5, boxShadow: '0 20px 55px rgba(0,0,0,0.3)' }}
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.2)', border: '1px solid rgba(212,175,55,0.15)' }}>
              {p.dev ? (
                <div className="h-52 flex flex-col items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #111111 60%, #0a0a0a)', borderBottom: '1px dashed rgba(212,175,55,0.3)' }}>
                  <span className="text-3xl mb-3">🚧</span>
                  <span className="font-grotesk font-bold text-white/60 text-sm tracking-wide">En développement</span>
                </div>
              ) : (
                <div className="relative overflow-hidden h-52" style={{ background: p.bg || 'transparent' }}>
                  <img src={p.img} alt={p.title}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${p.contain ? 'object-contain p-6' : 'object-cover'}`}
                    loading="lazy" />
                  <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    {p.link ? (
                      <motion.a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full font-inter font-semibold text-sm text-ink flex items-center gap-2"
                        style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)' }}
                        whileHover={{ scale: 1.06 }}>
                        <ExternalLink size={15} />Voir le cas client
                      </motion.a>
                    ) : (
                      <motion.button
                        className="px-5 py-2.5 rounded-full font-inter font-semibold text-sm text-ink flex items-center gap-2"
                        style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)' }}
                        whileHover={{ scale: 1.06 }}>
                        <ExternalLink size={15} />Voir le cas client
                      </motion.button>
                    )}
                  </div>
                </div>
              )}
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
        <motion.div className="text-center mt-12"
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <motion.button
            className="px-8 py-4 rounded-full font-inter font-semibold text-gold border-2 border-gold hover:bg-gold hover:text-ink transition-all duration-300"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            Voir tous nos cas clients →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
