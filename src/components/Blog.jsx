import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  useEffect(() => {
    const url = 'https://ad-marketing.pro/blog'
    const title = 'Blog ADMARKETING - Conseils apport d’affaires & développement commercial B2B'
    const desc = 'Conseils concrets et repères pour développer votre activité commerciale B2B : apport d’affaires, prospection, formation et structuration de la vente.'

    const prevTitle = document.title
    document.title = title

    const setAttr = (selector, attr, value) => {
      const el = document.querySelector(selector)
      const prev = el ? el.getAttribute(attr) : null
      if (el) el.setAttribute(attr, value)
      return () => { if (el && prev !== null) el.setAttribute(attr, prev) }
    }
    const restores = [
      setAttr('meta[name="description"]', 'content', desc),
      setAttr('link[rel="canonical"]', 'href', url),
      setAttr('meta[property="og:title"]', 'content', title),
      setAttr('meta[property="og:description"]', 'content', desc),
      setAttr('meta[property="og:url"]', 'content', url),
      setAttr('meta[name="twitter:title"]', 'content', title),
      setAttr('meta[name="twitter:description"]', 'content', desc),
    ]

    return () => {
      document.title = prevTitle
      restores.forEach((r) => r())
    }
  }, [])

  return (
    <div className="bg-ink min-h-screen">
      <Navbar />

      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 60% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto relative">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-syne font-semibold text-[11px] uppercase tracking-[0.2em] text-gold mb-3 block">Ressources</span>
            <h1 className="font-grotesk font-bold text-4xl md:text-5xl tracking-tight text-white mb-4">Le blog ADMARKETING</h1>
            <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Conseils concrets et repères pour développer votre activité commerciale B2B : apport d’affaires, prospection, formation et structuration de la vente.
            </p>
            <div className="mx-auto mt-6 w-16 h-px bg-gold/40" />
          </motion.div>

          {blogPosts.length === 0 ? (
            <p className="text-center font-inter text-white/40">Les premiers articles arrivent très bientôt.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <motion.a key={post.slug} href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl p-7 bg-ink-soft border border-white/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1.5"
                  initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                  <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-[11px] font-inter font-semibold uppercase tracking-wide bg-gold/10 text-gold mb-5">
                    {post.category}
                  </span>
                  <h2 className="font-grotesk font-bold text-lg text-white mb-3 leading-snug group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-inter text-white/50 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="inline-flex items-center gap-1.5 font-inter text-white/35 text-xs">
                      <Clock size={13} strokeWidth={1.75} /> {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-inter font-semibold text-sm text-gold">
                      Lire
                      <ArrowRight size={15} strokeWidth={2.25} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
