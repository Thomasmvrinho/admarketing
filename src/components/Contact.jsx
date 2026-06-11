import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Send, User } from 'lucide-react'

const inputClass = 'w-full px-5 py-4 rounded-xl font-inter text-sm bg-white/5 border border-white/10 text-white placeholder-white/30 outline-none focus:border-gold transition-colors duration-200'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', website: '', type: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...form }).toString(),
      })
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-ink-soft">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-syne font-semibold text-xs uppercase tracking-widest text-gold mb-3 block">Contact</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-3">Parlons de votre projet</h2>
          <p className="font-inter text-white/45 max-w-md mx-auto text-sm">Premier échange gratuit et sans engagement. Nous revenons vers vous sous 24h.</p>
          <div className="mx-auto mt-5 w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #D4AF37, #E5C158)' }} />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-14">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-4 rounded-2xl py-16"
                style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)' }}>
                <div className="text-5xl">🤝</div>
                <h3 className="font-grotesk font-bold text-white text-xl">Message reçu !</h3>
                <p className="font-inter text-white/50 text-sm max-w-xs">Nous revenons vers vous sous 24h pour discuter de votre projet.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Votre nom complet" className={inputClass} />
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Votre adresse email" className={inputClass} />
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Téléphone (optionnel)" className={inputClass} />
                <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Nom de l'entreprise" className={inputClass} />
                <input type="url" name="website" value={form.website} onChange={handleChange} placeholder="Site web actuel (optionnel)" className={inputClass} />
                <input type="text" name="type" value={form.type} onChange={handleChange} placeholder="Type de projet" className={inputClass} />
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Décrivez votre projet, vos objectifs..." className={`${inputClass} resize-none`} />
                {error && <p className="font-inter text-red-400 text-sm text-center">Une erreur est survenue. Réessayez ou contactez-nous par email.</p>}
                <motion.button type="submit" disabled={loading}
                  className="w-full py-4 rounded-xl font-inter font-semibold text-ink flex items-center justify-center gap-2 disabled:opacity-70"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)' }}
                  whileHover={{ scale: loading ? 1 : 1.02, boxShadow: loading ? 'none' : '0 0 32px rgba(212,175,55,0.42)' }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}>
                  <Send size={17} />
                  {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </motion.button>
              </form>
            )}
          </motion.div>
          <motion.div className="flex flex-col justify-center gap-9"
            initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {[
              { Icon: User, label: 'Contact', value: 'Adrien Lafarge', href: null },
              { Icon: Mail, label: 'Email', value: 'contact@ad-marketing.pro', href: 'mailto:contact@ad-marketing.pro' },
              { Icon: Phone, label: 'Téléphone', value: '06 67 40 53 51', href: 'tel:+33667405351' },
              { Icon: MapPin, label: 'Localisation', value: 'France 🇫🇷 — Intervention nationale & internationale', href: null },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <Icon size={19} color="#D4AF37" />
                </div>
                <div>
                  <div className="font-syne font-semibold text-white/40 text-[11px] uppercase tracking-widest mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="font-inter text-white/80 hover:text-gold transition-colors text-sm">{value}</a>
                  ) : (
                    <span className="font-inter text-white/80 text-sm">{value}</span>
                  )}
                </div>
              </div>
            ))}
            <div>
              <div className="font-syne font-semibold text-white/40 text-[11px] uppercase tracking-widest mb-4">Réseaux sociaux</div>
              <div className="flex gap-3">
                <motion.a href="https://www.linkedin.com/in/adrien-lafarge-91585b319/"
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white/40 hover:text-gold transition-colors"
                    style={{ border: '1px solid rgba(212,175,55,0.15)' }}
                    whileHover={{ scale: 1.1, y: -2 }} aria-label="LinkedIn">
                    <Linkedin size={19} />
                  </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
