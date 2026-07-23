import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Clock, Check } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import { blogPosts } from '../data/blogPosts'

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
function formatDate(iso) {
  const [y, m, d] = (iso || '').split('-')
  if (!y) return ''
  return `${parseInt(d, 10)} ${MOIS[parseInt(m, 10) - 1]} ${y}`
}

export default function Article({ slug }) {
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!post) return

    const url = `https://ad-marketing.pro/blog/${post.slug}`
    const prevTitle = document.title
    document.title = post.metaTitle

    const descEl = document.querySelector('meta[name="description"]')
    const prevDesc = descEl ? descEl.getAttribute('content') : null
    if (descEl) descEl.setAttribute('content', post.metaDescription)

    const canonEl = document.querySelector('link[rel="canonical"]')
    const prevCanon = canonEl ? canonEl.getAttribute('href') : null
    if (canonEl) canonEl.setAttribute('href', url)

    const ld = document.createElement('script')
    ld.type = 'application/ld+json'
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: 'fr-FR',
      author: { '@type': 'Organization', name: 'ADMARKETING', url: 'https://ad-marketing.pro/' },
      publisher: {
        '@type': 'Organization',
        name: 'ADMARKETING',
        logo: { '@type': 'ImageObject', url: 'https://ad-marketing.pro/logo-admarketing.png' },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      image: 'https://ad-marketing.pro/og-admarketing.png',
    })
    document.head.appendChild(ld)

    return () => {
      document.title = prevTitle
      if (descEl && prevDesc !== null) descEl.setAttribute('content', prevDesc)
      if (canonEl && prevCanon !== null) canonEl.setAttribute('href', prevCanon)
      ld.remove()
    }
  }, [post])

  if (!post) {
    return (
      <div className="bg-ink min-h-screen">
        <Navbar />
        <section className="pt-40 pb-24 px-6 text-center">
          <h1 className="font-grotesk font-bold text-3xl text-white mb-4">Article introuvable</h1>
          <a href="/blog" className="font-inter font-semibold text-gold hover:text-gold-deep transition-colors">Retour au blog</a>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-ink min-h-screen">
      <Navbar />

      <article className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.a href="/blog"
            initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 font-inter text-sm text-white/40 hover:text-gold transition-colors mb-10">
            <ArrowLeft size={15} /> Tous les articles
          </motion.a>

          <motion.header
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-inter font-semibold uppercase tracking-wide bg-gold/10 text-gold mb-5">
              {post.category}
            </span>
            <h1 className="font-grotesk font-bold text-3xl md:text-4xl tracking-tight text-white leading-tight mb-5">{post.title}</h1>
            <div className="flex items-center gap-4 font-inter text-white/35 text-sm">
              <span>{formatDate(post.date)}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="inline-flex items-center gap-1.5"><Clock size={14} strokeWidth={1.75} /> {post.readTime}</span>
            </div>
            <div className="w-16 h-px bg-gold/40 mt-8" />
          </motion.header>

          <div className="font-inter text-white/70 leading-relaxed">
            <p className="text-lg text-white/80 leading-relaxed mb-10">{post.intro}</p>

            {post.sections.map((s, i) => (
              <section key={i} className="mb-10">
                <h2 className="font-grotesk font-bold text-xl md:text-2xl text-white mb-5 leading-snug">{s.heading}</h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="mb-4">{p}</p>
                ))}
                {s.list && s.list.length > 0 && (
                  <ul className="space-y-3 my-6">
                    {s.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gold/15">
                          <Check size={11} strokeWidth={3} className="text-gold" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <p className="mb-4">{post.conclusion}</p>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-ink-soft border border-gold/30 p-8 text-center">
            <h3 className="font-grotesk font-bold text-xl text-white mb-3">Envie d’accélérer votre développement commercial ?</h3>
            <p className="font-inter text-white/50 text-sm mb-7 max-w-md mx-auto">
              Parlons de votre situation. Premier échange gratuit et sans engagement, réponse sous 24h.
            </p>
            <motion.a href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-inter font-semibold bg-gold text-ink transition-colors duration-300 hover:bg-gold-deep"
              whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              Demander un devis
              <ArrowRight size={16} strokeWidth={2.25} />
            </motion.a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
